-- Theological themes for chapters
CREATE TABLE themes (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name        text UNIQUE NOT NULL,
  description text NOT NULL,
  color_hex   text NOT NULL,
  icon        text NOT NULL
);

CREATE TABLE chapter_themes (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  chapter_id uuid NOT NULL REFERENCES chapters(id) ON DELETE CASCADE,
  theme_id   uuid NOT NULL REFERENCES themes(id) ON DELETE CASCADE,
  note       text NOT NULL DEFAULT '',
  UNIQUE (chapter_id, theme_id)
);

CREATE INDEX idx_chapter_themes_chapter_id ON chapter_themes(chapter_id);
CREATE INDEX idx_chapter_themes_theme_id ON chapter_themes(theme_id);

ALTER TABLE themes ENABLE ROW LEVEL SECURITY;
ALTER TABLE chapter_themes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "public read themes" ON themes FOR SELECT USING (true);
CREATE POLICY "public read chapter_themes" ON chapter_themes FOR SELECT USING (true);
