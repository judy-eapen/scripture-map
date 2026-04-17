-- Rich prophet profiles for the deep-dive character card sections
CREATE TABLE prophet_profiles (
  id                 uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  person_id          uuid UNIQUE NOT NULL REFERENCES people(id) ON DELETE CASCADE,
  biblical_echo      text,
  calling_narrative  text NOT NULL DEFAULT '',
  ministry_summary   text NOT NULL DEFAULT '',
  miracles           jsonb NOT NULL DEFAULT '[]',
  biblical_parallels jsonb NOT NULL DEFAULT '[]',
  key_themes         text[] NOT NULL DEFAULT '{}'
);

ALTER TABLE prophet_profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public read prophet_profiles"
  ON prophet_profiles FOR SELECT
  USING (true);
