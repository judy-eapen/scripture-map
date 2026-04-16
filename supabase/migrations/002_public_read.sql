-- Allow unauthenticated (anon) users to read all content tables
-- user_progress remains protected (own rows only, authenticated required)

DO $$
DECLARE
  tbl text;
  tbls text[] := ARRAY[
    'books', 'chapters', 'people', 'places',
    'chapter_people', 'chapter_places',
    'archaeological_evidence', 'chapter_archaeological_evidence',
    'neighboring_nations', 'chapter_nations',
    'quiz_questions', 'genealogy_nodes', 'genealogy_edges',
    'difficult_passages'
  ];
BEGIN
  FOREACH tbl IN ARRAY tbls LOOP
    -- Drop the authenticated-only read policy
    EXECUTE format('DROP POLICY IF EXISTS "authenticated read" ON %I', tbl);
    -- Create a policy that allows all roles (anon + authenticated) to read
    EXECUTE format(
      'CREATE POLICY "public read" ON %I FOR SELECT USING (true)',
      tbl
    );
  END LOOP;
END $$;
