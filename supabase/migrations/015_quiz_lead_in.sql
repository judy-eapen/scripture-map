-- Optional context-setting text for comprehensive fill-in-the-blank questions.
ALTER TABLE quiz_questions ADD COLUMN IF NOT EXISTS lead_in text;
