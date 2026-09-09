export type Level = 1 | 2 | 3;
export type BankRow = {
  type: 'multiple_choice' | 'fill_blank' | 'one_word' | 'true_false' | 'short_answer';
  difficulty: Level;
  question: string;
  /** multiple choice: correct answer FIRST, then 3 distractors (shuffled on insert) */
  options?: string[];
  answer?: string;
  accepted_answers?: string[];
  verse_number: number;
  explanation?: string;
};
export type ChapterBank = { book: '1 Kings' | '2 Kings' | 'Mark'; chapter: number; tag: string; rows: BankRow[] };

export const mc = (difficulty: Level, question: string, options: string[], verse_number: number, explanation = ''): BankRow =>
  ({ type: 'multiple_choice', difficulty, question, options, verse_number, explanation });
/** Fill in the blank: `question` must be the verse text with `_____` where `answer` goes. */
export const blank = (difficulty: Level, question: string, answer: string, verse_number: number, accepted_answers: string[] = []): BankRow =>
  ({ type: 'fill_blank', difficulty, question, answer, accepted_answers, verse_number });
export const word = (difficulty: Level, question: string, answer: string, verse_number: number, accepted_answers: string[] = [], explanation = ''): BankRow =>
  ({ type: 'one_word', difficulty, question, answer, accepted_answers, verse_number, explanation });
export const sa = (
  difficulty: Level,
  question: string,
  answer: string,
  verse_number: number,
  acceptedOrExplanation: string[] | string = [],
  explanation = '',
): BankRow => ({
  type: 'short_answer',
  difficulty,
  question,
  answer,
  verse_number,
  accepted_answers: Array.isArray(acceptedOrExplanation) ? acceptedOrExplanation : [],
  explanation: Array.isArray(acceptedOrExplanation) ? explanation : acceptedOrExplanation,
});
export const tf = (difficulty: Level, question: string, answer: boolean, verse_number: number, explanation = ''): BankRow =>
  ({ type: 'true_false', difficulty, question, answer: answer ? 'true' : 'false', verse_number, explanation });
