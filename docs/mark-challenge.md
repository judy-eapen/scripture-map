# Mark Challenge

Route: `/mark-challenge`, linked in the existing desktop/mobile ChapterNav.
The existing AppShell, color tokens, display font, QuizQuestion model, and grading
helpers are reused. Existing quizzes, lessons, flashcards, and database records are unchanged.

## Question provenance

`data/mark-challenge.ts` preserves 49 original questions transcribed from the two user
screenshots attached to conversation `6abfc8b3-a04c-83e9-967b-27d641d70d21`:

- September 24 screenshot: Mark 6 (25), the block labeled “Ch 2” that actually
  covers Mark 7 (11), and the first two Mark 8 true/false questions.
- Transfiguration screenshot: remaining Mark 8 questions (6), Mark 9 (5).
- At the user’s subsequent explicit request, 39 additional OSB questions were written in the same short-answer, true/false, and fill-in style. Their provenance is `user-requested`, separate from the screenshot originals.
- There are now 88 questions: Mark 6 (27), Mark 7 (16), Mark 8 (15), Mark 9 (15), and Mark 10 (15). Every chapter/point bucket has at least three questions.

Grammar and obvious transcription typos have been lightly corrected. Fill-in
prompts have blanks restored, inline answers removed, and the two context-dependent
Mark 7 questions name their subjects so they make sense when drawn randomly. Answers and feedback were checked
against `data/mark-source.json`, the app’s existing NKJV/Orthodox Study Bible text.
At the user’s request, all verse-based fill-in prompts and quoted speech answers now
use the Orthodox Study Bible wording from that source, including “Take heed,”
“mindful of,” and “loses his own soul.” Factual questions retain their meaning.
Question IDs and points are unchanged, preserving saved progress.
The original multiple-choice alternatives are preserved; no distractors were invented.

To add questions, append supplied prompts or explicitly requested new questions with unique, stable IDs, accurate provenance, chapter, points, answer, and verse evidence. Never identify authored additions as user-supplied screenshots. Multiple questions can share a chapter/point value; totals are computed
from the complete bank, and old attempts survive additions. Keep existing IDs stable.
Update the provenance count and board coverage tests intentionally when questions are added.

## Play and persistence

True/false and supplied multiple choice are automatically scored. Longer answers
and fill-ins use reveal-and-self-check, accepting equivalent wording. A correct
answer earns its face value; a wrong answer earns zero and resets the current streak.
Both consume the question for the current round. Duplicate scoring is rejected.
New round confirms before clearing score, best/current streak, and used IDs.

Browser local storage is namespaced by signed-in user ID or guest. This does not sync
across devices; guests on the same browser share a round. Storage failures are visible.
The board is disabled until hydration completes. Unknown persisted IDs are dropped;
malformed saves produce a visible warning. No Supabase migration is required.

The optional `special` metadata is an extension point only; no special card effects
are enabled. Add explicit scoring and persistence rules before activating them.

## Checks

Run `vitest run tests/quiz/mark-challenge.test.ts tests/quiz/grading.test.ts tests/quiz/session.test.ts`,
TypeScript, and targeted ESLint. On this machine use Next’s `--webpack` option because
the existing shared node_modules symlink is incompatible with Turbopack’s root restriction.
