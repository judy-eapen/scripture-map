-- Register Mark as a real database-backed book.
--
-- This migration is deliberately idempotent and schema-neutral. It creates the
-- book and its 16 chapter identities without touching existing books, chapters,
-- questions, sessions, answers, or learner progress. The companion command
-- `node --import tsx scripts/seed-mark.ts --write` fills each chapter's summary
-- and `verses` JSONB from data/mark-source.json.

INSERT INTO books (name, total_chapters, testament)
VALUES ('Mark', 16, 'new')
ON CONFLICT (name) DO UPDATE
SET total_chapters = EXCLUDED.total_chapters,
    testament = EXCLUDED.testament;

INSERT INTO chapters (book_id, chapter_number, summary, verses)
SELECT books.id, chapter_number, '', '[]'::jsonb
FROM books
CROSS JOIN generate_series(1, 16) AS chapter_number
WHERE books.name = 'Mark'
ON CONFLICT (book_id, chapter_number) DO NOTHING;
