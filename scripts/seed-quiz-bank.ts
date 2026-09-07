// Generic quiz-bank loader.
// Run: npx tsx scripts/seed-quiz-bank.ts scripts/quiz-bank/1-kings-1.ts [--dry] [--drop-legacy]
// Validates every row against the RSV verse text stored in `chapters.verses`,
// then replaces all rows carrying the bank's tag for that chapter.

import * as fs from 'fs';
import * as path from 'path';
import { createClient } from '@supabase/supabase-js';
import type { ChapterBank, BankRow } from './quiz-bank/types';

(function loadEnvLocal() {
  const p = path.resolve(process.cwd(), '.env.local');
  if (!fs.existsSync(p)) return;
  for (const line of fs.readFileSync(p, 'utf-8').split('\n')) {
    const t = line.trim(); if (!t || t.startsWith('#')) continue;
    const i = t.indexOf('='); if (i === -1) continue;
    const k = t.slice(0, i).trim(), v = t.slice(i + 1).trim();
    if (!process.env[k]) process.env[k] = v;
  }
})();

const file = process.argv[2];
const dry = process.argv.includes('--dry');
const dropLegacy = process.argv.includes('--drop-legacy'); // also remove untagged (pre-v2) rows for the chapter
if (!file) { console.error('usage: npx tsx scripts/seed-quiz-bank.ts <bank.ts> [--dry]'); process.exit(1); }

const norm = (s: string) => s.replace(/[’'`]/g, '').replace(/[^a-z0-9]+/gi, ' ').toLowerCase().trim();

function shuffleOptions(options: string[]) {
  const idx = options.map((_, i) => i);
  for (let i = idx.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [idx[i], idx[j]] = [idx[j], idx[i]]; }
  return { options: idx.map(i => options[i]), correct_index: idx.indexOf(0) };
}

function validate(bank: ChapterBank, verses: Array<{ verse_number: number; text: string }>): string[] {
  const errors: string[] = [];
  const byVerse = new Map(verses.map(v => [v.verse_number, v.text]));
  const seenQ = new Map<string, number>();
  bank.rows.forEach((r, i) => {
    const where = `row ${i + 1} (v${r.verse_number}, ${r.type}): ${r.question.slice(0, 60)}…`;
    if (!byVerse.has(r.verse_number)) errors.push(`${where} — verse ${r.verse_number} does not exist`);
    const key = norm(r.question);
    if (seenQ.has(key)) errors.push(`${where} — duplicate of row ${seenQ.get(key)}`);
    seenQ.set(key, i + 1);
    if (r.type === 'multiple_choice') {
      if (!r.options || r.options.length !== 4) errors.push(`${where} — needs exactly 4 options`);
      else if (new Set(r.options.map(norm)).size !== 4) errors.push(`${where} — options not unique`);
    } else if (!r.answer) {
      errors.push(`${where} — missing answer`);
    }
    if (r.type === 'true_false' && r.answer !== 'true' && r.answer !== 'false') errors.push(`${where} — answer must be true/false`);
    const quotedBlank = r.question.match(/[“\"]([^“”\"]*_{3,}[^“”\"]*)[”\"]/)?.[1];
    const isQuotedVerseCompletion = /(?:completes? this RSV wording|what word completes this phrase)/i.test(r.question);
    if (r.type === 'fill_blank' || ((r.type === 'one_word' || r.type === 'multiple_choice') && quotedBlank && isQuotedVerseCompletion)) {
      if (r.type === 'fill_blank' && !/_{3,}/.test(r.question)) errors.push(`${where} — no blank (_____) in question`);
      const v = byVerse.get(r.verse_number);
      if (v) {
        const quoted = quotedBlank ?? r.question;
        const canonical = r.type === 'multiple_choice' ? r.options?.[0] ?? '' : r.answer ?? '';
        const rebuilt = norm(quoted.replace(/_{3,}/, canonical));
        if (!norm(v).includes(rebuilt)) errors.push(`${where} — does not reconstruct to verse ${r.verse_number} text`);
      }
    }
  });
  return errors;
}

async function main() {
  const mod = await import(path.resolve(file));
  const bank: ChapterBank = mod.default ?? mod.bank;
  if (!bank?.rows?.length) throw new Error('bank file must default-export { book, chapter, tag, rows }');

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL, key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY');
  const sb = createClient(url, key);

  const probe = await sb.from('quiz_questions').select('id, type, difficulty').limit(1);
  if (probe.error) throw new Error('quiz_questions lacks v2 columns — apply supabase/migrations/009_quiz_types.sql first');

  const { data: book } = await sb.from('books').select('id').eq('name', bank.book).single();
  if (!book) throw new Error(`Book ${bank.book} not found`);
  const { data: chapter } = await sb.from('chapters').select('id, verses').eq('book_id', book.id).eq('chapter_number', bank.chapter).single();
  if (!chapter) throw new Error(`${bank.book} ${bank.chapter} not found`);
  const verses = chapter.verses as Array<{ verse_number: number; text: string }>;

  const errors = validate(bank, verses);
  if (errors.length) { errors.forEach(e => console.error('✗', e)); console.error(`\n${errors.length} problem(s). Nothing written.`); process.exit(1); }

  // coverage + tally
  const covered = new Set(bank.rows.map(r => r.verse_number));
  const uncovered = verses.map(v => v.verse_number).filter(n => !covered.has(n));
  const tally: Record<string, Record<number, number>> = {};
  for (const r of bank.rows) { (tally[r.type] ??= { 1: 0, 2: 0, 3: 0 })[r.difficulty]++; }
  console.log(`${bank.book} ${bank.chapter}: ${bank.rows.length} rows, ${covered.size}/${verses.length} verses covered${uncovered.length ? ` (uncovered: ${uncovered.join(', ')})` : ''}`);
  console.table(Object.fromEntries(Object.entries(tally).map(([t, d]) => [t, { easy: d[1], medium: d[2], hard: d[3], total: d[1] + d[2] + d[3] }])));
  if (dry) { console.log('dry run — nothing written'); return; }

  const del = await sb.from('quiz_questions').delete().eq('chapter_id', chapter.id).eq('tag', bank.tag);
  if (del.error) throw del.error;
  if (dropLegacy) {
    const legacy = await sb.from('quiz_questions').delete().eq('chapter_id', chapter.id).is('tag', null).select('id');
    if (legacy.error) throw legacy.error;
    console.log(`removed ${legacy.data?.length ?? 0} legacy untagged row(s)`);
  }

  const payload = bank.rows.map((r: BankRow) => {
    const base = {
      chapter_id: chapter.id, tag: bank.tag, type: r.type, difficulty: r.difficulty, question: r.question,
      verse_number: r.verse_number, verse_ref: `${bank.book} ${bank.chapter}:${r.verse_number}`,
      explanation: r.explanation ?? '', answer: r.answer ?? null, accepted_answers: r.accepted_answers ?? [],
      options: null as string[] | null, correct_index: null as number | null,
    };
    if (r.type === 'multiple_choice') Object.assign(base, shuffleOptions(r.options!));
    return base;
  });
  for (let i = 0; i < payload.length; i += 100) {
    const ins = await sb.from('quiz_questions').insert(payload.slice(i, i + 100));
    if (ins.error) throw ins.error;
  }
  const { count } = await sb.from('quiz_questions').select('id', { count: 'exact', head: true }).eq('chapter_id', chapter.id);
  console.log(`✓ wrote ${payload.length} rows; chapter now has ${count} questions total (incl. legacy)`);
}

main().catch(e => { console.error(e); process.exit(1); });
