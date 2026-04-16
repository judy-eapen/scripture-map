-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- books
CREATE TABLE books (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  total_chapters int NOT NULL,
  testament text NOT NULL CHECK (testament IN ('old', 'new'))
);

-- chapters
CREATE TABLE chapters (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  book_id uuid NOT NULL REFERENCES books(id) ON DELETE CASCADE,
  chapter_number int NOT NULL,
  summary text NOT NULL DEFAULT '',
  year_start_bc int,
  year_end_bc int,
  verses jsonb NOT NULL DEFAULT '[]',
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (book_id, chapter_number)
);
CREATE INDEX idx_chapters_book_id ON chapters(book_id);

-- people
CREATE TABLE people (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  alt_names text[],
  type text NOT NULL CHECK (type IN ('king', 'prophet', 'official', 'foreign_ruler', 'other')),
  kingdom text CHECK (kingdom IN ('north', 'south', 'foreign')),
  reign_start_bc int,
  reign_end_bc int,
  dates_approximate boolean DEFAULT false,
  verdict text CHECK (verdict IN ('good', 'evil', 'mixed')),
  bio text NOT NULL DEFAULT '',
  contemporary_events text,
  image_url text,
  is_queen boolean DEFAULT false,
  CONSTRAINT verdict_kings_only CHECK (type = 'king' OR verdict IS NULL),
  CONSTRAINT reign_kings_only CHECK (type = 'king' OR reign_start_bc IS NULL)
);
CREATE INDEX idx_people_type ON people(type);

-- places
CREATE TABLE places (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  ancient_name text NOT NULL,
  modern_name text NOT NULL,
  lat float NOT NULL,
  lng float NOT NULL,
  significance text,
  ancient_description text NOT NULL DEFAULT '',
  modern_description text NOT NULL DEFAULT '',
  image_url text
);

-- chapter_people (join)
CREATE TABLE chapter_people (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  chapter_id uuid NOT NULL REFERENCES chapters(id) ON DELETE CASCADE,
  person_id uuid NOT NULL REFERENCES people(id) ON DELETE CASCADE,
  tappable_terms text[] NOT NULL DEFAULT '{}',
  verse_references int[],
  UNIQUE (chapter_id, person_id)
);
CREATE INDEX idx_chapter_people_chapter_id ON chapter_people(chapter_id);

-- chapter_places (join)
CREATE TABLE chapter_places (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  chapter_id uuid NOT NULL REFERENCES chapters(id) ON DELETE CASCADE,
  place_id uuid NOT NULL REFERENCES places(id) ON DELETE CASCADE,
  tappable_terms text[] NOT NULL DEFAULT '{}',
  verse_references int[],
  map_focus boolean DEFAULT false,
  UNIQUE (chapter_id, place_id)
);
CREATE INDEX idx_chapter_places_chapter_id ON chapter_places(chapter_id);

-- archaeological_evidence
CREATE TABLE archaeological_evidence (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  artifact_type text NOT NULL CHECK (artifact_type IN ('stele', 'inscription', 'obelisk', 'relief', 'structure', 'tunnel', 'other')),
  date_bc int NOT NULL,
  description text NOT NULL DEFAULT '',
  museum_location text,
  external_url text,
  image_url text
);

-- chapter_archaeological_evidence (join)
CREATE TABLE chapter_archaeological_evidence (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  chapter_id uuid NOT NULL REFERENCES chapters(id) ON DELETE CASCADE,
  evidence_id uuid NOT NULL REFERENCES archaeological_evidence(id) ON DELETE CASCADE,
  relevance_note text NOT NULL DEFAULT '',
  UNIQUE (chapter_id, evidence_id)
);
CREATE INDEX idx_chapter_evidence_chapter_id ON chapter_archaeological_evidence(chapter_id);

-- neighboring_nations
CREATE TABLE neighboring_nations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  modern_equivalent text NOT NULL DEFAULT '',
  description text NOT NULL DEFAULT '',
  key_rulers jsonb NOT NULL DEFAULT '[]',
  color_hex text
);

-- chapter_nations (join)
CREATE TABLE chapter_nations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  chapter_id uuid NOT NULL REFERENCES chapters(id) ON DELETE CASCADE,
  nation_id uuid NOT NULL REFERENCES neighboring_nations(id) ON DELETE CASCADE,
  context_note text NOT NULL DEFAULT '',
  UNIQUE (chapter_id, nation_id)
);
CREATE INDEX idx_chapter_nations_chapter_id ON chapter_nations(chapter_id);

-- quiz_questions
CREATE TABLE quiz_questions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  chapter_id uuid NOT NULL REFERENCES chapters(id) ON DELETE CASCADE,
  question text NOT NULL,
  options text[] NOT NULL CHECK (array_length(options, 1) = 4),
  correct_index int NOT NULL CHECK (correct_index BETWEEN 0 AND 3),
  explanation text NOT NULL DEFAULT ''
);
CREATE INDEX idx_quiz_questions_chapter_id ON quiz_questions(chapter_id);

-- genealogy_nodes
CREATE TABLE genealogy_nodes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  person_id uuid UNIQUE NOT NULL REFERENCES people(id) ON DELETE CASCADE,
  dynasty text,
  dynasty_color text,
  notes text
);

-- genealogy_edges
CREATE TABLE genealogy_edges (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  parent_node_id uuid NOT NULL REFERENCES genealogy_nodes(id) ON DELETE CASCADE,
  child_node_id uuid NOT NULL REFERENCES genealogy_nodes(id) ON DELETE CASCADE,
  relationship_type text NOT NULL CHECK (relationship_type IN ('biological', 'marriage', 'adoption', 'political')),
  notes text,
  UNIQUE (parent_node_id, child_node_id)
);
CREATE INDEX idx_genealogy_edges_parent ON genealogy_edges(parent_node_id);
CREATE INDEX idx_genealogy_edges_child ON genealogy_edges(child_node_id);

-- difficult_passages
CREATE TABLE difficult_passages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  chapter_id uuid NOT NULL REFERENCES chapters(id) ON DELETE CASCADE,
  verse_start int NOT NULL,
  verse_end int NOT NULL,
  topic text NOT NULL,
  plain_language text NOT NULL DEFAULT '',
  theological_context text NOT NULL DEFAULT '',
  CHECK (verse_end >= verse_start)
);
CREATE INDEX idx_difficult_passages_chapter_id ON difficult_passages(chapter_id);

-- user_progress
CREATE TABLE user_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE DEFAULT auth.uid(),
  chapter_id uuid NOT NULL REFERENCES chapters(id) ON DELETE CASCADE,
  read_at timestamptz,
  quiz_best_score int CHECK (quiz_best_score BETWEEN 0 AND 100),
  quiz_last_attempted timestamptz,
  quiz_attempt_count int DEFAULT 0,
  UNIQUE (user_id, chapter_id)
);
CREATE INDEX idx_user_progress_user_id ON user_progress(user_id);
CREATE INDEX idx_user_progress_chapter_id ON user_progress(chapter_id);

-- ========================
-- Enable Row Level Security
-- ========================

ALTER TABLE books ENABLE ROW LEVEL SECURITY;
ALTER TABLE chapters ENABLE ROW LEVEL SECURITY;
ALTER TABLE people ENABLE ROW LEVEL SECURITY;
ALTER TABLE places ENABLE ROW LEVEL SECURITY;
ALTER TABLE chapter_people ENABLE ROW LEVEL SECURITY;
ALTER TABLE chapter_places ENABLE ROW LEVEL SECURITY;
ALTER TABLE archaeological_evidence ENABLE ROW LEVEL SECURITY;
ALTER TABLE chapter_archaeological_evidence ENABLE ROW LEVEL SECURITY;
ALTER TABLE neighboring_nations ENABLE ROW LEVEL SECURITY;
ALTER TABLE chapter_nations ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE genealogy_nodes ENABLE ROW LEVEL SECURITY;
ALTER TABLE genealogy_edges ENABLE ROW LEVEL SECURITY;
ALTER TABLE difficult_passages ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;

-- ========================
-- RLS Policies — content tables (authenticated read-only)
-- ========================

CREATE POLICY "authenticated read" ON books FOR SELECT TO authenticated USING (true);
CREATE POLICY "authenticated read" ON chapters FOR SELECT TO authenticated USING (true);
CREATE POLICY "authenticated read" ON people FOR SELECT TO authenticated USING (true);
CREATE POLICY "authenticated read" ON places FOR SELECT TO authenticated USING (true);
CREATE POLICY "authenticated read" ON chapter_people FOR SELECT TO authenticated USING (true);
CREATE POLICY "authenticated read" ON chapter_places FOR SELECT TO authenticated USING (true);
CREATE POLICY "authenticated read" ON archaeological_evidence FOR SELECT TO authenticated USING (true);
CREATE POLICY "authenticated read" ON chapter_archaeological_evidence FOR SELECT TO authenticated USING (true);
CREATE POLICY "authenticated read" ON neighboring_nations FOR SELECT TO authenticated USING (true);
CREATE POLICY "authenticated read" ON chapter_nations FOR SELECT TO authenticated USING (true);
CREATE POLICY "authenticated read" ON quiz_questions FOR SELECT TO authenticated USING (true);
CREATE POLICY "authenticated read" ON genealogy_nodes FOR SELECT TO authenticated USING (true);
CREATE POLICY "authenticated read" ON genealogy_edges FOR SELECT TO authenticated USING (true);
CREATE POLICY "authenticated read" ON difficult_passages FOR SELECT TO authenticated USING (true);

-- user_progress: own rows only
CREATE POLICY "own rows only" ON user_progress FOR ALL TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());
