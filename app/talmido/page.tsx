import AppShell from '@/components/AppShell'
import TalmidoLibrary from '@/components/TalmidoLibrary'
import curriculum from '@/data/talmido-grade-6.json'
import { createClient } from '@/lib/supabase/server'
import { defaultNavData, getNavChapters } from '@/lib/db'
export const dynamic = 'force-dynamic'
export const metadata = { title: 'Talmido · Sixth Grade | ScriptureMap' }
export default async function TalmidoPage() {
  const supabase = await createClient()
  const {data:{user}} = await supabase.auth.getUser()
  const navData = user ? await getNavChapters(user.id) : defaultNavData()
  return <AppShell navData={navData} isAuthenticated={!!user} currentBook="Mark"><TalmidoLibrary key={user?.id ?? 'guest'} lessons={curriculum.lessons} learnerId={user?.id ?? 'guest'} /></AppShell>
}
