// Quiz v2 seed — 1 Kings 1 (pilot chapter)
// Run: npx tsx scripts/seed-quiz-1kings-1.ts
// Requires migration 009_quiz_types.sql to have been applied.
// Idempotent: deletes rows with TAG for this chapter, then re-inserts.

import * as fs from 'fs';
import * as path from 'path';
import { createClient } from '@supabase/supabase-js';

(function loadEnvLocal() {
  const envPath = path.resolve(process.cwd(), '.env.local');
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, 'utf-8').split('\n')) {
    const t = line.trim();
    if (!t || t.startsWith('#')) continue;
    const i = t.indexOf('=');
    if (i === -1) continue;
    const k = t.slice(0, i).trim(), v = t.slice(i + 1).trim();
    if (!process.env[k]) process.env[k] = v;
  }
})();

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) { console.error('Missing NEXT_PUBLIC_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY'); process.exit(1); }
const sb = createClient(url, key);

const BOOK = '1 Kings';
const CHAPTER = 1;
const TAG = 'quiz-v2-1kings-1';
const ref = (v: number) => `1 Kings 1:${v}`;

type Row = {
  type: 'multiple_choice' | 'fill_blank' | 'one_word' | 'true_false';
  difficulty: 1 | 2 | 3;
  question: string;
  options?: string[];
  correct_index?: number;
  answer?: string;
  accepted_answers?: string[];
  verse_number: number;
  explanation?: string;
};

const mc = (difficulty: 1 | 2 | 3, question: string, options: string[], verse_number: number, explanation = ''): Row =>
  ({ type: 'multiple_choice', difficulty, question, options, correct_index: 0, verse_number, explanation });
const blank = (difficulty: 1 | 2 | 3, question: string, answer: string, verse_number: number, accepted_answers: string[] = []): Row =>
  ({ type: 'fill_blank', difficulty, question, answer, accepted_answers, verse_number });
const word = (difficulty: 1 | 2 | 3, question: string, answer: string, verse_number: number, accepted_answers: string[] = [], explanation = ''): Row =>
  ({ type: 'one_word', difficulty, question, answer, accepted_answers, verse_number, explanation });
const tf = (difficulty: 1 | 2 | 3, question: string, answer: boolean, verse_number: number, explanation = ''): Row =>
  ({ type: 'true_false', difficulty, question, answer: answer ? 'true' : 'false', verse_number, explanation });

// Multiple-choice options are written with the correct answer FIRST; they are shuffled on insert.
const rows: Row[] = [
  // ───────────── Easy (1)
  mc(1, 'Who is king of Israel by the end of 1 Kings 1?', ['Solomon', 'Adonijah', 'Absalom', 'Joab'], 39),
  mc(1, 'Where was Solomon anointed king?', ['Gihon', 'Hebron', 'En-rogel', 'Bethel'], 38),
  mc(1, 'Who was Solomon’s mother?', ['Bathsheba', 'Haggith', 'Abishag', 'Abigail'], 11),
  mc(1, 'Adonijah was the son of which woman?', ['Haggith', 'Bathsheba', 'Michal', 'Ahinoam'], 5),
  blank(1, 'Now King David was old and advanced in years; and although they covered him with clothes, he could not get _____.', 'warm', 1),
  blank(1, 'Now Adoni’jah the son of Haggith exalted himself, saying, "I will be _____"; and he prepared for himself chariots and horsemen.', 'king', 5),
  blank(1, 'There Zadok the priest took the horn of _____ from the tent, and anointed Solomon.', 'oil', 39),
  blank(1, 'and let Zadok the priest and Nathan the prophet there anoint him king over Israel; then blow the trumpet, and say, "Long live King _____!"', 'Solomon', 34),
  word(1, 'Which prophet went to Bathsheba with a plan to save Solomon?', 'Nathan', 11),
  word(1, 'What animal did Solomon ride down to Gihon?', 'mule', 33, ['king’s mule', 'davids mule']),
  word(1, 'What instrument was blown to announce Solomon as king?', 'trumpet', 39),
  tf(1, 'Adonijah invited his brother Solomon to his sacrifice at En-rogel.', false, 10, 'He invited all his brothers except Solomon, and left out Nathan, Benaiah and the mighty men.'),
  tf(1, 'Abishag the Shunammite was brought to King David to keep him warm.', true, 3),
  tf(1, 'Zadok the priest anointed Solomon.', true, 39),
  tf(1, 'Joab the commander supported Solomon’s claim to the throne.', false, 7, 'Joab and Abiathar the priest followed Adonijah.'),

  // ───────────── Medium (2)
  mc(2, 'Which two men conferred with Adonijah and helped him?', ['Joab and Abiathar the priest', 'Zadok and Nathan', 'Benaiah and Shimei', 'Nathan and Rei'], 7),
  mc(2, 'Where did Adonijah hold his sacrifice and feast?', ['By the Serpent’s Stone beside En-rogel', 'At Gihon', 'On Mount Zion', 'At Hebron'], 9),
  mc(2, 'Who brought Adonijah’s party the news that Solomon had been made king?', ['Jonathan the son of Abiathar', 'Benaiah', 'Nathan', 'Zadok'], 43),
  mc(2, 'Benaiah was the son of whom?', ['Jehoiada', 'Zeruiah', 'Abiathar', 'Haggith'], 8),
  mc(2, 'Adonijah was born next after which of David’s sons?', ['Absalom', 'Amnon', 'Solomon', 'Chileab'], 6),
  blank(2, 'And all the people went up after him, playing on pipes, and rejoicing with great joy, so that the earth was split by their _____.', 'noise', 40),
  blank(2, 'And now, my lord the king, the eyes of all _____ are upon you, to tell them who shall sit on the throne of my lord the king after him.', 'Israel', 20),
  blank(2, 'And Adoni’jah feared Solomon; and he arose, and went, and caught hold of the horns of the _____.', 'altar', 50),
  blank(2, 'Did you not, my lord the king, swear to your maidservant, saying, "Solomon your son shall reign after me, and he shall sit upon my _____"?', 'throne', 13),
  word(2, 'Who was Adonijah’s mother?', 'Haggith', 5),
  word(2, 'Which priest sided with Adonijah?', 'Abiathar', 7),
  word(2, 'How many men did Adonijah have running before him?', 'fifty', 5, ['50']),
  tf(2, 'Bathsheba spoke to King David before Nathan came in.', true, 22, 'Nathan arranged to come in while she was still speaking and confirm her words.'),
  tf(2, 'King David went down to Gihon to watch Solomon be anointed.', false, 47, 'David stayed in his chamber; his servants came to congratulate him and he bowed on the bed.'),
  tf(2, 'The Cherethites and the Pelethites escorted Solomon to Gihon.', true, 38),
  tf(2, 'Solomon had Adonijah executed as soon as he was anointed.', false, 53, 'Solomon sent him home: "Go to your house."'),

  // ───────────── Hard (3)
  mc(3, 'According to Nathan, why should Bathsheba go to King David at once?', ['To save her own life and the life of her son Solomon', 'To ask that Abishag be dismissed', 'To demand Adonijah’s death', 'To arrange a coronation feast'], 12),
  mc(3, 'What did the king’s servants say when they came to congratulate David?', ['"Your God make the name of Solomon more famous than yours"', '"Long live King David for ever"', '"Blessed be the LORD, the God of Israel"', '"Amen! May the LORD say so"'], 47),
  mc(3, 'Who answered David, "Amen! May the LORD, the God of my lord the king, say so"?', ['Benaiah the son of Jehoiada', 'Zadok the priest', 'Nathan the prophet', 'Joab the commander'], 36),
  mc(3, 'What did Joab ask when he heard the sound of the trumpet?', ['"What does this uproar in the city mean?"', '"Who has been made king?"', '"Where is Adonijah?"', '"Why do the people rejoice?"'], 41),
  blank(3, 'And the king swore, saying, "As the LORD lives, who has redeemed my soul out of every _____,"', 'adversity', 29),
  blank(3, 'His father had never at any time displeased him by asking, "Why have you done thus and so?" He was also a very _____ man; and he was born next after Ab’salom.', 'handsome', 6),
  blank(3, 'And Solomon said, "If he prove to be a worthy man, not one of his _____ shall fall to the earth; but if wickedness is found in him, he shall die."', 'hairs', 52),
  blank(3, 'Blessed be the LORD, the God of Israel, who has granted one of my _____ to sit on my throne this day, my own eyes seeing it.', 'offspring', 48),
  blank(3, 'As the LORD has been with my lord the king, even so may he be with Solomon, and make his throne _____ than the throne of my lord King David.', 'greater', 37),
  word(3, 'The Serpent’s Stone, where Adonijah sacrificed, was beside which spring?', 'En-rogel', 9, ['enrogel', 'en rogel']),
  word(3, 'Who is named right after Shimei among those who were not with Adonijah?', 'Rei', 8),
  word(3, 'Zadok took the oil for Solomon’s anointing from the tent in what?', 'horn', 39, ['horn of oil']),
  tf(3, 'Adonijah and his guests heard the noise from the city as they were finishing their feast.', true, 41),
  tf(3, 'Jonathan told Adonijah that the uproar in the city was the people rejoicing over Solomon’s anointing.', true, 45),
  tf(3, 'Adonijah said "Come in, for you are a worthy man and bring good news" to Nathan the prophet.', false, 42, 'He said it to Jonathan the son of Abiathar — who then brought the bad news.'),
  tf(3, 'David swore that Solomon would sit upon his throne "in my stead".', true, 30),
];

// Difficulty for the 10 original multiple-choice questions (matched by question prefix)
const legacyDifficulty: Array<[string, 1 | 2 | 3]> = [
  ['Who anointed Solomon', 1],
  ['Why was Abishag', 1],
  ['Which two influential', 2],
  ['Who did NOT support', 2],
  ['How did Nathan', 2],
  ['Where did David command', 1],
  ["What was Adonijah's reaction", 2],
  ['What condition did Solomon', 3],
  ['What instrument', 1],
  ["What was David's immediate response", 3],
];

function shuffleWithIndex(options: string[], correct: number) {
  const idx = options.map((_, i) => i);
  for (let i = idx.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [idx[i], idx[j]] = [idx[j], idx[i]]; }
  return { options: idx.map(i => options[i]), correct_index: idx.indexOf(correct) };
}

async function main() {
  // 0. migration applied?
  const probe = await sb.from('quiz_questions').select('id, type, difficulty').limit(1);
  if (probe.error) {
    console.error('quiz_questions is missing the v2 columns. Apply supabase/migrations/009_quiz_types.sql in the Supabase SQL editor first.');
    console.error(probe.error.message);
    process.exit(1);
  }

  // 1. chapter id
  const { data: book } = await sb.from('books').select('id').eq('name', BOOK).single();
  if (!book) throw new Error(`Book ${BOOK} not found`);
  const { data: chapter } = await sb.from('chapters').select('id, verses').eq('book_id', book.id).eq('chapter_number', CHAPTER).single();
  if (!chapter) throw new Error(`${BOOK} ${CHAPTER} not found`);

  // 2. sanity: every fill-in-the-blank must reconstruct to text present in the stored verse
  const verses = (chapter.verses as Array<{ verse_number: number; text: string }>);
  const norm = (s: string) => s.replace(/[’'`]/g, '').replace(/[^a-z0-9]+/gi, ' ').toLowerCase().trim();
  let bad = 0;
  for (const r of rows.filter(r => r.type === 'fill_blank')) {
    const v = verses.find(v => v.verse_number === r.verse_number);
    const reconstructed = norm(r.question.replace(/_{3,}/, r.answer!));
    if (!v || !norm(v.text).includes(reconstructed)) { bad++; console.error(`✗ fill_blank does not match verse ${r.verse_number}: ${r.question}`); }
  }
  if (bad) { console.error(`${bad} fill-in-the-blank question(s) do not match the stored verse text. Aborting.`); process.exit(1); }

  // 3. replace tagged rows
  const del = await sb.from('quiz_questions').delete().eq('chapter_id', chapter.id).eq('tag', TAG);
  if (del.error) throw del.error;

  const payload = rows.map(r => {
    const base = {
      chapter_id: chapter.id, tag: TAG, type: r.type, difficulty: r.difficulty, question: r.question,
      verse_number: r.verse_number, verse_ref: ref(r.verse_number), explanation: r.explanation ?? '',
      answer: r.answer ?? null, accepted_answers: r.accepted_answers ?? [],
      options: null as string[] | null, correct_index: null as number | null,
    };
    if (r.type === 'multiple_choice') Object.assign(base, shuffleWithIndex(r.options!, r.correct_index!));
    return base;
  });
  const ins = await sb.from('quiz_questions').insert(payload);
  if (ins.error) throw ins.error;

  // 4. classify legacy MC rows
  const { data: legacy } = await sb.from('quiz_questions').select('id, question').eq('chapter_id', chapter.id).is('tag', null);
  let updated = 0;
  for (const q of legacy ?? []) {
    const hit = legacyDifficulty.find(([prefix]) => q.question.startsWith(prefix));
    if (!hit) continue;
    const u = await sb.from('quiz_questions').update({ difficulty: hit[1], verse_ref: null }).eq('id', q.id);
    if (!u.error) updated++;
  }

  // 5. report
  const { data: all } = await sb.from('quiz_questions').select('type, difficulty').eq('chapter_id', chapter.id);
  const tally: Record<string, number> = {};
  for (const q of all ?? []) tally[`${q.type}/d${q.difficulty}`] = (tally[`${q.type}/d${q.difficulty}`] ?? 0) + 1;
  console.log(`✓ ${BOOK} ${CHAPTER}: inserted ${payload.length} new, reclassified ${updated} legacy, total ${all?.length}`);
  console.table(tally);
}

main().catch(e => { console.error(e); process.exit(1); });
