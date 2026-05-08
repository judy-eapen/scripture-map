import { createClient } from '@/lib/supabase/server';
import { getNavChapters } from '@/lib/db';
import { getAllNotes } from '@/app/actions/notes';
import NotesPageView from './NotesPageView';

const EMPTY_NAV = [
  { book: '1 Kings', chapters: Array.from({ length: 22 }, (_, i) => ({ number: i + 1, is_read: false })) },
  { book: '2 Kings', chapters: Array.from({ length: 25 }, (_, i) => ({ number: i + 1, is_read: false })) },
];

export default async function NotesPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const [notes, navData] = await Promise.all([
    user ? getAllNotes() : Promise.resolve([]),
    user ? getNavChapters(user.id) : Promise.resolve(EMPTY_NAV),
  ]);

  return (
    <NotesPageView
      notes={notes}
      navData={navData}
      isAuthenticated={!!user}
    />
  );
}
