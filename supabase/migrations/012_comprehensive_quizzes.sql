-- Comprehensive quizzes can span many chapters while preserving the existing
-- chapter quiz rows and every learner's current progress.

CREATE TABLE IF NOT EXISTS quiz_collections (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug        text NOT NULL UNIQUE,
  title       text NOT NULL,
  description text NOT NULL DEFAULT '',
  books       text[] NOT NULL DEFAULT '{}',
  position    int NOT NULL DEFAULT 0,
  created_at  timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE quiz_collections ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "public read quiz_collections" ON quiz_collections;
CREATE POLICY "public read quiz_collections" ON quiz_collections FOR SELECT USING (true);

ALTER TABLE quiz_questions
  ALTER COLUMN chapter_id DROP NOT NULL,
  ADD COLUMN IF NOT EXISTS collection_id uuid REFERENCES quiz_collections(id) ON DELETE CASCADE,
  ADD COLUMN IF NOT EXISTS supporting_refs jsonb NOT NULL DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS review_topic text,
  ADD COLUMN IF NOT EXISTS review_guidance text;

ALTER TABLE quiz_questions
  DROP CONSTRAINT IF EXISTS quiz_questions_one_owner,
  ADD CONSTRAINT quiz_questions_one_owner CHECK (
    (chapter_id IS NOT NULL AND collection_id IS NULL) OR
    (chapter_id IS NULL AND collection_id IS NOT NULL)
  );

CREATE INDEX IF NOT EXISTS idx_quiz_questions_collection_difficulty
  ON quiz_questions(collection_id, difficulty);

ALTER TABLE quiz_answers
  ALTER COLUMN chapter_id DROP NOT NULL,
  ADD COLUMN IF NOT EXISTS collection_id uuid REFERENCES quiz_collections(id) ON DELETE CASCADE;

ALTER TABLE quiz_answers
  DROP CONSTRAINT IF EXISTS quiz_answers_one_scope,
  ADD CONSTRAINT quiz_answers_one_scope CHECK (
    (chapter_id IS NOT NULL AND collection_id IS NULL) OR
    (chapter_id IS NULL AND collection_id IS NOT NULL)
  );

CREATE INDEX IF NOT EXISTS idx_quiz_answers_user_collection
  ON quiz_answers(user_id, collection_id);

ALTER TABLE quiz_sessions
  ALTER COLUMN chapter_id DROP NOT NULL,
  ADD COLUMN IF NOT EXISTS collection_id uuid REFERENCES quiz_collections(id) ON DELETE CASCADE;

ALTER TABLE quiz_sessions
  DROP CONSTRAINT IF EXISTS quiz_sessions_one_scope,
  ADD CONSTRAINT quiz_sessions_one_scope CHECK (
    (chapter_id IS NOT NULL AND collection_id IS NULL) OR
    (chapter_id IS NULL AND collection_id IS NOT NULL)
  );

DROP INDEX IF EXISTS idx_quiz_sessions_user_open;
CREATE INDEX IF NOT EXISTS idx_quiz_sessions_user_chapter_open
  ON quiz_sessions(user_id, chapter_id) WHERE completed_at IS NULL AND chapter_id IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_quiz_sessions_user_collection_open
  ON quiz_sessions(user_id, collection_id) WHERE completed_at IS NULL AND collection_id IS NOT NULL;

INSERT INTO quiz_collections (slug, title, description, books, position)
VALUES (
  'all-kings',
  'All of Kings',
  'Connect people, events, themes, places, and prophecies across 1 Kings and 2 Kings.',
  ARRAY['1 Kings', '2 Kings'],
  1
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  books = EXCLUDED.books,
  position = EXCLUDED.position;
