# Quiz banks — authoring rules

One file per chapter: `scripts/quiz-bank/<book-slug>-<chapter>.ts` (e.g. `1-kings-2.ts`, `2-kings-17.ts`).
Copy the shape of `1-kings-1.ts`. Default-export a `ChapterBank` using the helpers in `./types.ts`.

## Workflow (per chapter)
1. `npx tsx scripts/quiz-bank/print-verses.ts "1 Kings" 2` — read the stored RSV text. **Every question is written from this text and nothing else.**
2. Write the bank file.
3. `npx tsx scripts/seed-quiz-bank.ts scripts/quiz-bank/1-kings-2.ts --dry` — fix every `✗` until it prints the tally with all verses covered.
4. `npx tsx scripts/seed-quiz-bank.ts scripts/quiz-bank/1-kings-2.ts --drop-legacy` — writes to the database (replaces the 10 old untagged questions).

## Targets
- **≥ 3 questions per verse on average, minimum 120 per chapter, every verse covered** (the loader reports uncovered verses).
- Roughly a third Easy, a third Medium, a third Hard (Medium may run a little higher).
- Each level has all four types. Aim per chapter: ~30% multiple choice, ~30% fill-in-the-blank, ~20% one-word, ~20% true/false.
- `tag` is `quiz-v2-<book-slug-without-dash><chapter>` e.g. `quiz-v2-1kings-2`.

## Rules for each type
- **Facts only from the verse cited** (`verse_number`). No outside knowledge, no other chapters, no theology unless the verse states it.
- **fill_blank**: `question` is the exact RSV verse text (or a complete clause of it) with ONE `_____` where the `answer` word(s) go. It must reconstruct to the verse text — the loader checks this (apostrophes/punctuation ignored). Prefer blanking a *meaningful* word (a name, place, number, object, verb), never "the"/"and". Use straight `"` for the verse's own quotation marks and `’` for apostrophes inside names (Adoni’jah). Add `accepted_answers` for name spellings without the RSV apostrophe when helpful.
- **one_word**: answer is one word or a very short name/phrase; add `accepted_answers` variants (e.g. `['50']` for 'fifty', `['enrogel','en rogel']`).
- **multiple_choice**: exactly 4 options, **correct answer FIRST** (the loader shuffles), all four plausible and distinct, only one correct per the text.
- **true_false**: roughly half true, half false. False statements must be clearly contradicted by the verse (swap a name/place/number/who-said-what). Put the correction in `explanation`.
- **Difficulty**: Easy = main characters, places, headline events. Medium = supporting names, sequence, who-said-what, quoted phrases. Hard = exact wording, numbers, lists, less-noticed details, multi-part quotes.
- No two questions may have the same normalized wording (loader rejects duplicates). Vary phrasing; asking the same fact as MC + fill-blank + TF is fine and encouraged.
- Keep `explanation` short (one sentence) and only where it adds something (why false, or the fuller quote).
