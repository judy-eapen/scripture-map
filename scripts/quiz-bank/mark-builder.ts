import source from '../../data/mark-source.json';
import { blank, mc, tf, word, type BankRow, type ChapterBank, type Level } from './types';

const stop = new Set('a an and are as at be been but by for from had has have he her him his i in into is it its me my nor not of on or our she so than that the their them they this to was were who whom will with you your'.split(' '));
const distractors = ['Galilee', 'Jerusalem', 'wilderness', 'disciples', 'kingdom', 'synagogue', 'mountain', 'Jericho', 'Capernaum', 'Pharisees', 'scribes', 'multitude'];

function words(text: string): string[] {
  const found = text.match(/[A-Za-z][A-Za-z’'-]*/g) ?? [];
  const useful = found.filter(w => w.length > 3 && !stop.has(w.toLowerCase()));
  return useful.length ? useful : found.filter(w => w.length > 2);
}

function distinctDistractors(answer: string, seed: number): string[] {
  const choices = distractors.filter(x => x.toLowerCase() !== answer.toLowerCase());
  return [0, 1, 2].map(i => choices[(seed + i * 3) % choices.length]);
}

function cloze(text: string, answer: string): string {
  const index = text.indexOf(answer);
  return `${text.slice(0, index)}_____${text.slice(index + answer.length)}`;
}

function rowFor(text: string, verse: number, chapter: number, variant: number): BankRow {
  const candidates = words(text);
  // Include the verse in target selection so repeated refrains still produce
  // distinct cloze questions (for example Mark 9:44, 46, and 48).
  const answer = candidates[(variant + verse) % candidates.length];
  const prompt = cloze(text, answer);
  const difficulty = (((verse + variant - 1) % 3) + 1) as Level;
  const wrong = distinctDistractors(answer, chapter * 17 + verse * 5 + variant);

  switch (variant % 4) {
    case 0:
      return blank(difficulty, prompt, answer, verse);
    case 1:
      return word(difficulty, `In Mark ${chapter}:${verse}, which word completes this quotation: “${prompt}”?`, answer, verse);
    case 2:
      return mc(difficulty, `Which word completes Mark ${chapter}:${verse}: “${prompt}”?`, [answer, ...wrong], verse, `The verse reads “${text}”`);
    default: {
      const trueStatement = (verse + variant) % 2 === 0;
      const statement = trueStatement ? text : text.replace(answer, wrong[0]);
      return tf(difficulty, `Mark ${chapter}:${verse} says: “${statement}”`, trueStatement, verse, trueStatement ? '' : `The verse reads “${text}”`);
    }
  }
}

export function buildMarkBank(chapterNumber: number): ChapterBank {
  const chapter = source.chapters.find(c => c.chapter === chapterNumber);
  if (!chapter) throw new Error(`Mark ${chapterNumber} is missing from mark-source.json`);
  const target = Math.max(120, chapter.verses.length * 4);
  const rows: BankRow[] = [];
  let variant = 0;
  while (rows.length < target) {
    for (const verse of chapter.verses) {
      if (rows.length >= target) break;
      rows.push(rowFor(verse.text, verse.verse_number, chapterNumber, variant));
    }
    variant += 1;
  }
  return { book: 'Mark', chapter: chapterNumber, tag: `quiz-v2-mark-${chapterNumber}`, rows };
}
