CREATE TABLE flashcards (
  id       uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  deck     text NOT NULL CHECK (deck IN ('kings-north','kings-south','places','people','themes')),
  question text NOT NULL,
  answer   text NOT NULL,
  hint     text
);

ALTER TABLE flashcards ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public read flashcards"
  ON flashcards FOR SELECT
  USING (true);

CREATE TABLE flashcard_reviews (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id       uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE DEFAULT auth.uid(),
  flashcard_id  uuid NOT NULL REFERENCES flashcards(id) ON DELETE CASCADE,
  interval      int NOT NULL DEFAULT 1,
  ease_factor   float NOT NULL DEFAULT 2.5,
  repetitions   int NOT NULL DEFAULT 0,
  due_date      date NOT NULL DEFAULT CURRENT_DATE,
  last_reviewed timestamptz,
  UNIQUE (user_id, flashcard_id)
);

ALTER TABLE flashcard_reviews ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own flashcard_reviews select"
  ON flashcard_reviews FOR SELECT
  USING (user_id = auth.uid());
CREATE POLICY "own flashcard_reviews insert"
  ON flashcard_reviews FOR INSERT
  WITH CHECK (user_id = auth.uid());
CREATE POLICY "own flashcard_reviews update"
  ON flashcard_reviews FOR UPDATE
  USING (user_id = auth.uid());
CREATE POLICY "own flashcard_reviews delete"
  ON flashcard_reviews FOR DELETE
  USING (user_id = auth.uid());
