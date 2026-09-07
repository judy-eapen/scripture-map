-- Quiz progress: every answer a signed-in user gives, plus resumable sessions.

CREATE TABLE IF NOT EXISTS quiz_answers (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE DEFAULT auth.uid(),
  question_id  uuid NOT NULL REFERENCES quiz_questions(id) ON DELETE CASCADE,
  chapter_id   uuid NOT NULL REFERENCES chapters(id) ON DELETE CASCADE,
  session_id   uuid,
  correct      boolean NOT NULL,
  given_answer text,
  answered_at  timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_quiz_answers_user_chapter ON quiz_answers(user_id, chapter_id);
CREATE INDEX IF NOT EXISTS idx_quiz_answers_user_question ON quiz_answers(user_id, question_id);

ALTER TABLE quiz_answers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own quiz_answers select" ON quiz_answers FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "own quiz_answers insert" ON quiz_answers FOR INSERT WITH CHECK (user_id = auth.uid());
CREATE POLICY "own quiz_answers delete" ON quiz_answers FOR DELETE USING (user_id = auth.uid());

CREATE TABLE IF NOT EXISTS quiz_sessions (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id       uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE DEFAULT auth.uid(),
  chapter_id    uuid NOT NULL REFERENCES chapters(id) ON DELETE CASCADE,
  mode          text NOT NULL DEFAULT 'session',          -- session | quick | drill
  question_ids  uuid[] NOT NULL,
  position      int NOT NULL DEFAULT 0,                   -- how many answered so far
  correct_count int NOT NULL DEFAULT 0,
  started_at    timestamptz NOT NULL DEFAULT now(),
  completed_at  timestamptz
);
CREATE INDEX IF NOT EXISTS idx_quiz_sessions_user_open ON quiz_sessions(user_id, chapter_id) WHERE completed_at IS NULL;

ALTER TABLE quiz_sessions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own quiz_sessions select" ON quiz_sessions FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "own quiz_sessions insert" ON quiz_sessions FOR INSERT WITH CHECK (user_id = auth.uid());
CREATE POLICY "own quiz_sessions update" ON quiz_sessions FOR UPDATE USING (user_id = auth.uid());
CREATE POLICY "own quiz_sessions delete" ON quiz_sessions FOR DELETE USING (user_id = auth.uid());
