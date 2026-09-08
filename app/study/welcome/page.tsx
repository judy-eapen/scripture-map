import { createClient } from '@/lib/supabase/server';
import { getLibraryBooks, getLibraryProgress } from '@/lib/library';
import WelcomePageClient from './WelcomePageClient';

export default async function WelcomePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const books = await getLibraryBooks();
  const progress = user ? await getLibraryProgress(supabase, user.id, books) : {};
  return <WelcomePageClient books={books} isAuthenticated={!!user} progress={progress} />;
}
