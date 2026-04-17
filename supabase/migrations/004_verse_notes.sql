-- Verse-level notes for authenticated users
-- One note per (user, chapter, verse). Auth-gated, cross-device synced.
CREATE TABLE verse_notes (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE DEFAULT auth.uid(),
  chapter_id   uuid NOT NULL REFERENCES chapters(id) ON DELETE CASCADE,
  verse_number int NOT NULL,
  note_text    text NOT NULL,
  created_at   timestamptz NOT NULL DEFAULT now(),
  updated_at   timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, chapter_id, verse_number)
);

CREATE INDEX idx_verse_notes_user_chapter ON verse_notes(user_id, chapter_id);

ALTER TABLE verse_notes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "users can read own notes"
  ON verse_notes FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "users can insert own notes"
  ON verse_notes FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "users can update own notes"
  ON verse_notes FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "users can delete own notes"
  ON verse_notes FOR DELETE
  USING (auth.uid() = user_id);
