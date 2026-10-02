import AppShell from '@/components/AppShell'
import MarkChallenge from '@/components/MarkChallenge'
import { defaultNavData, getNavChapters } from '@/lib/db'
import { createClient } from '@/lib/supabase/server'

export const dynamic = 'force-dynamic'
export const metadata = { title: 'Mark Challenge | ScriptureMap' }

export default async function MarkChallengePage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const navData = user ? await getNavChapters(user.id) : defaultNavData()
  return <AppShell navData={navData} isAuthenticated={!!user} currentBook="Mark"><MarkChallenge key={user?.id ?? 'guest'} learnerId={user?.id ?? 'guest'} /></AppShell>
}
