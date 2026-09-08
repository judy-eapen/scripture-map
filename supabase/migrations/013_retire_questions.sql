-- Questions are never deleted once learners may have answered them (quiz_answers cascades).
-- Instead the loader sets retired_at; the app ignores retired rows.
ALTER TABLE quiz_questions ADD COLUMN IF NOT EXISTS retired_at timestamptz;
CREATE INDEX IF NOT EXISTS idx_quiz_questions_active_chapter ON quiz_questions(chapter_id) WHERE retired_at IS NULL;
CREATE INDEX IF NOT EXISTS idx_quiz_questions_active_collection ON quiz_questions(collection_id) WHERE retired_at IS NULL;
