-- Add the self-graded short-answer format without changing any stored rows.
ALTER TABLE quiz_questions
  DROP CONSTRAINT IF EXISTS quiz_questions_type_check,
  ADD CONSTRAINT quiz_questions_type_check
    CHECK (type IN ('multiple_choice', 'fill_blank', 'one_word', 'true_false', 'short_answer'));
