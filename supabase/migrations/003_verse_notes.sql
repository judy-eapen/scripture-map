-- verse_notes: per-user highlights and notes on individual verses
CREATE TABLE verse_notes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE DEFAULT auth.uid(),
  chapter_id uuid NOT NULL REFERENCES chapters(id) ON DELETE CASCADE,
  verse_number int NOT NULL,
  highlighted boolean NOT NULL DEFAULT false,
  note_text text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE (user_id, chapter_id, verse_number),
  CHECK (highlighted = true OR (note_text IS NOT NULL AND note_text <> ''))
);
CREATE INDEX idx_verse_notes_user_chapter ON verse_notes(user_id, chapter_id);

ALTER TABLE verse_notes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "users manage own notes" ON verse_notes
  FOR ALL TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());
