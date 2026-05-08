import { createClient } from '@/lib/supabase/server';
import WelcomePageClient from './WelcomePageClient';

export default async function WelcomePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  return <WelcomePageClient isAuthenticated={!!user} />;
}
