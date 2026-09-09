-- Learner-submitted quiz issue reports. This is 016 because 015_quiz_lead_in.sql
-- already exists and may already have been applied.
CREATE TABLE IF NOT EXISTS quiz_reports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  question_id uuid NOT NULL REFERENCES quiz_questions(id),
  user_id uuid DEFAULT auth.uid(),
  note text NOT NULL CHECK (length(trim(note)) BETWEEN 1 AND 1000),
  created_at timestamptz NOT NULL DEFAULT now(),
  resolved_at timestamptz
);

CREATE INDEX IF NOT EXISTS idx_quiz_reports_open
  ON quiz_reports(created_at DESC) WHERE resolved_at IS NULL;

ALTER TABLE quiz_reports ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anyone can report a quiz problem" ON quiz_reports;
CREATE POLICY "anyone can report a quiz problem"
  ON quiz_reports FOR INSERT
  WITH CHECK (user_id IS NULL OR user_id = auth.uid());

-- No client SELECT/UPDATE policy: admin reads and resolves happen only in a
-- server action after checking QUIZ_ADMIN_EMAILS.
