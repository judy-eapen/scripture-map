import { getNavChapters, defaultNavData } from '@/lib/db'
import { createClient } from '@/lib/supabase/server'
import AppShell from '@/components/AppShell'
import FlashcardsClient from './FlashcardsClient'

export default async function FlashcardsPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const navData = user ? await getNavChapters(user.id) : defaultNavData()

  return (
    <AppShell navData={navData} isAuthenticated={!!user}>
      <FlashcardsClient />
    </AppShell>
  )
}
