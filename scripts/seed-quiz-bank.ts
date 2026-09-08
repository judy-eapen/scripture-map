// Generic quiz-bank loader.
// Run: npx tsx scripts/seed-quiz-bank.ts scripts/quiz-bank/1-kings-1.ts [--dry] [--drop-legacy]
// Validates every row against the RSV verse text stored in `chapters.verses`,
// then updates tagged rows in place so learner answers and open sessions retain
// valid question IDs. A new tagged bank is inserted only when no tagged rows exist.

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

  if (dropLegacy) {
    throw new Error('--drop-legacy is disabled: deleting questions can cascade-delete learner answers');
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
  // Learner answers reference question IDs (quiz_answers cascades on delete), so rows are
  // never deleted: matching rows are updated in place, new rows inserted, missing rows retired.
  const canRetire = !(await sb.from('quiz_questions').select('retired_at').limit(1)).error;
  const existingResult = await sb
    .from('quiz_questions')
    .select('id, verse_number, type, question, options, correct_index, retired_at')
    .eq('chapter_id', chapter.id)
    .eq('tag', bank.tag);
  if (existingResult.error) throw existingResult.error;
  const existing = existingResult.data ?? [];

  const matched = new Map<string, (typeof payload)[number]>(); // existing id -> new row
  const unmatched: Array<(typeof payload)[number]> = [];
  const freeByVerse = new Map<number, typeof existing>();
  const byText = new Map<string, typeof existing>();
  for (const row of existing) {
    (byText.get(norm(row.question)) ?? byText.set(norm(row.question), []).get(norm(row.question))!).push(row);
  }
  // 1. exact wording match keeps the ID (and, for multiple choice, the stored option order)
  for (const row of payload) {
    const cands = byText.get(norm(row.question))?.filter(r => !matched.has(r.id));
    const hit = cands?.find(r => !r.retired_at) ?? cands?.[0];
    if (hit) {
      const keepOptions = hit.type === 'multiple_choice' && row.type === 'multiple_choice' && hit.options
        && new Set(hit.options.map(norm)).size === 4 && hit.options.map(norm).sort().join('|') === (row.options ?? []).map(norm).sort().join('|');
      matched.set(hit.id, keepOptions ? { ...row, options: hit.options, correct_index: hit.correct_index } : row);
    } else unmatched.push(row);
  }
  // 2. remaining new rows take over an unmatched ACTIVE row on the same verse (a rewrite of that question)
  for (const row of existing) if (!matched.has(row.id) && !row.retired_at) (freeByVerse.get(row.verse_number) ?? freeByVerse.set(row.verse_number, []).get(row.verse_number)!).push(row);
  const additions: typeof payload = [];
  for (const row of unmatched) {
    const pool = freeByVerse.get(row.verse_number);
    const hit = pool?.shift();
    if (hit) matched.set(hit.id, row); else additions.push(row);
  }
  // 3. anything still unmatched and active is retired (never deleted)
  const toRetire = existing.filter(r => !matched.has(r.id) && !r.retired_at).map(r => r.id);
  if (toRetire.length && !canRetire) throw new Error(`${toRetire.length} question(s) would be removed but quiz_questions has no retired_at column — apply supabase/migrations/013_retire_questions.sql first.`);

  const updates = [...matched.entries()].map(([id, row]) => ({ ...row, id, ...(canRetire ? { retired_at: null } : {}) }));
  for (let i = 0; i < updates.length; i += 100) {
    const up = await sb.from('quiz_questions').upsert(updates.slice(i, i + 100), { onConflict: 'id' });
    if (up.error) throw up.error;
  }
  for (let i = 0; i < additions.length; i += 100) {
    const ins = await sb.from('quiz_questions').insert(additions.slice(i, i + 100));
    if (ins.error) throw ins.error;
  }
  if (toRetire.length) {
    const ret = await sb.from('quiz_questions').update({ retired_at: new Date().toISOString() }).in('id', toRetire);
    if (ret.error) throw ret.error;
  }
  const revived = existing.filter(r => matched.has(r.id) && r.retired_at).length;
  console.log(`✓ ${updates.length} kept/updated in place (${revived} revived), ${additions.length} inserted, ${toRetire.length} retired; learner answers preserved`);
  let active = sb.from('quiz_questions').select('id', { count: 'exact', head: true }).eq('chapter_id', chapter.id);
  if (canRetire) active = active.is('retired_at', null);
  const { count } = await active;
  console.log(`chapter now has ${count ?? '?'} active questions`);
}

main().catch(e => { console.error(e); process.exit(1); });
