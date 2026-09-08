import source from '../../data/mark-source.json';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import type { ChapterBank } from '../quiz-bank/types';

const norm = (s: string) => s.replace(/[’'`]/g, '').replace(/[^a-z0-9]+/gi, ' ').toLowerCase().trim();

async function main() {
let total = 0;
for (const chapter of source.chapters) {
  const module = await import(pathToFileURL(path.resolve(`scripts/quiz-bank/mark-${chapter.chapter}.ts`)).href);
  const bank = (module.default?.default ?? module.default) as ChapterBank;
  const verses = new Map(chapter.verses.map(v => [v.verse_number, v.text]));
  const covered = new Set<number>();
  const seen = new Set<string>();
  const matrix = new Set<string>();

  for (const row of bank.rows) {
    const verse = verses.get(row.verse_number);
    if (!verse) throw new Error(`Mark ${chapter.chapter}: invalid verse ${row.verse_number}`);
    covered.add(row.verse_number);
    const key = norm(row.question);
    if (seen.has(key)) throw new Error(`Mark ${chapter.chapter}: duplicate question: ${row.question}`);
    seen.add(key);
    matrix.add(`${row.type}:${row.difficulty}`);
    if (row.type === 'multiple_choice' && (!row.options || row.options.length !== 4 || new Set(row.options.map(norm)).size !== 4)) {
      throw new Error(`Mark ${chapter.chapter}:${row.verse_number}: invalid multiple choice options`);
    }
    if (row.type === 'fill_blank') {
      const rebuilt = norm(row.question.replace('_____', row.answer ?? ''));
      if (!norm(verse).includes(rebuilt)) throw new Error(`Mark ${chapter.chapter}:${row.verse_number}: blank does not reconstruct verse`);
    }
  }
  if (covered.size !== verses.size) throw new Error(`Mark ${chapter.chapter}: incomplete verse coverage`);
  for (const type of ['multiple_choice', 'fill_blank', 'one_word', 'true_false']) {
    for (const difficulty of [1, 2, 3]) if (!matrix.has(`${type}:${difficulty}`)) throw new Error(`Mark ${chapter.chapter}: missing ${type}:${difficulty}`);
  }
  total += bank.rows.length;
  console.log(`Mark ${chapter.chapter}: ${bank.rows.length} questions, ${covered.size}/${verses.size} verses`);
}

console.log(`Validated 16 chapters, ${source.chapters.reduce((n, c) => n + c.verses.length, 0)} verses, ${total} questions`);
}

main().catch(error => { console.error(error); process.exit(1); });
