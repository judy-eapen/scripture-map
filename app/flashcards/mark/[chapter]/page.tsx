import { notFound } from 'next/navigation'
import AppShell from '@/components/AppShell'
import Mark6FlashcardDeck from '@/components/Mark6FlashcardDeck'
import { createClient } from '@/lib/supabase/server'
import { defaultNavData, getNavChapters } from '@/lib/db'

export default async function MarkFlashcardsPage({ params }: { params: Promise<{ chapter: string }> }) {
  const chapter = Number((await params).chapter)
  if (!Number.isInteger(chapter) || chapter < 7 || chapter > 16) notFound()
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const navData = user ? await getNavChapters(user.id) : defaultNavData()
  return <AppShell navData={navData} isAuthenticated={!!user}><Mark6FlashcardDeck chapter={chapter} /></AppShell>
}
