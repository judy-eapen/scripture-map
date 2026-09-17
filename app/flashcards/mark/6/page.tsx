import AppShell from '@/components/AppShell'
import Mark6FlashcardDeck from '@/components/Mark6FlashcardDeck'
import { createClient } from '@/lib/supabase/server'
import { defaultNavData, getNavChapters } from '@/lib/db'

export default async function Mark6FlashcardsPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const navData = user ? await getNavChapters(user.id) : defaultNavData()
  return <AppShell navData={navData} isAuthenticated={!!user}><Mark6FlashcardDeck /></AppShell>
}
