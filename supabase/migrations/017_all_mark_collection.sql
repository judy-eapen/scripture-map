INSERT INTO quiz_collections (slug, title, description, books, position)
VALUES (
  'all-mark',
  'All of Mark',
  'Questions that connect themes, people, events, teachings, and the Passion across all sixteen chapters of Mark.',
  ARRAY['Mark'],
  2
)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  books = EXCLUDED.books,
  position = EXCLUDED.position;
