-- Prophecy fulfillment tracker
-- Each record links a prophecy verse range to its fulfillment verse range (possibly in a different chapter)
CREATE TABLE prophecies (
  id                       uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title                    text NOT NULL,
  prophet                  text,
  prophecy_chapter_id      uuid NOT NULL REFERENCES chapters(id) ON DELETE CASCADE,
  prophecy_verse_start     int NOT NULL,
  prophecy_verse_end       int NOT NULL,
  prophecy_summary         text NOT NULL,
  fulfillment_chapter_id   uuid REFERENCES chapters(id) ON DELETE SET NULL,
  fulfillment_verse_start  int,
  fulfillment_verse_end    int,
  fulfillment_summary      text NOT NULL DEFAULT '',
  fulfilled                boolean NOT NULL DEFAULT false,
  CHECK (prophecy_verse_end >= prophecy_verse_start)
);

CREATE INDEX idx_prophecies_prophecy_chapter ON prophecies(prophecy_chapter_id);
CREATE INDEX idx_prophecies_fulfillment_chapter ON prophecies(fulfillment_chapter_id);

ALTER TABLE prophecies ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public read prophecies"
  ON prophecies FOR SELECT
  USING (true);
