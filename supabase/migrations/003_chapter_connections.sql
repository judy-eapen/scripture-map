-- Chapter-to-chapter connective tissue
-- Each record links a chapter to context: what came before, what it sets up, or a verse-level callback
CREATE TABLE chapter_connections (
  id                 uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  chapter_id         uuid NOT NULL REFERENCES chapters(id) ON DELETE CASCADE,
  type               text NOT NULL CHECK (type IN ('previously', 'sets_up', 'callback')),
  description        text NOT NULL,
  target_chapter_id  uuid REFERENCES chapters(id) ON DELETE SET NULL,
  verse_number       int
);

CREATE INDEX idx_chapter_connections_chapter_id ON chapter_connections(chapter_id);

-- Public read (same policy as other content tables)
ALTER TABLE chapter_connections ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public read chapter_connections"
  ON chapter_connections FOR SELECT
  USING (true);
