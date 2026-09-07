-- Quiz v2: multiple question types, difficulty levels, exact-verse anchoring.
-- Safe to run once on an existing database; existing rows become
-- type = 'multiple_choice', difficulty = 1.

ALTER TABLE quiz_questions
  ADD COLUMN IF NOT EXISTS type text NOT NULL DEFAULT 'multiple_choice',
  ADD COLUMN IF NOT EXISTS difficulty int NOT NULL DEFAULT 1,
  ADD COLUMN IF NOT EXISTS answer text,
  ADD COLUMN IF NOT EXISTS accepted_answers text[] NOT NULL DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS verse_ref text,
  ADD COLUMN IF NOT EXISTS verse_number int,
  ADD COLUMN IF NOT EXISTS tag text;

ALTER TABLE quiz_questions
  DROP CONSTRAINT IF EXISTS quiz_questions_type_check,
  ADD CONSTRAINT quiz_questions_type_check
    CHECK (type IN ('multiple_choice', 'fill_blank', 'one_word', 'true_false'));

ALTER TABLE quiz_questions
  DROP CONSTRAINT IF EXISTS quiz_questions_difficulty_check,
  ADD CONSTRAINT quiz_questions_difficulty_check
    CHECK (difficulty BETWEEN 1 AND 3);

-- options / correct_index only apply to multiple choice
ALTER TABLE quiz_questions
  ALTER COLUMN options DROP NOT NULL,
  ALTER COLUMN correct_index DROP NOT NULL,
  DROP CONSTRAINT IF EXISTS quiz_questions_options_check,
  DROP CONSTRAINT IF EXISTS quiz_questions_correct_index_check,
  ADD CONSTRAINT quiz_questions_options_check
    CHECK (type <> 'multiple_choice' OR array_length(options, 1) = 4),
  ADD CONSTRAINT quiz_questions_correct_index_check
    CHECK (type <> 'multiple_choice' OR correct_index BETWEEN 0 AND 3),
  ADD CONSTRAINT quiz_questions_answer_check
    CHECK (type = 'multiple_choice' OR answer IS NOT NULL);

CREATE INDEX IF NOT EXISTS idx_quiz_questions_chapter_difficulty
  ON quiz_questions(chapter_id, difficulty);
CREATE INDEX IF NOT EXISTS idx_quiz_questions_tag ON quiz_questions(tag);
