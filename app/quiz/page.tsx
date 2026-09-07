import { getQuizChapterSummaries, getNavChapters, defaultNavData } from '@/lib/db'
import { createClient } from '@/lib/supabase/server'
import { getQuizProgress } from '@/app/actions/quiz'
import AppShell from '@/components/AppShell'
import QuizArena from '@/components/QuizArena'

export const dynamic = 'force-dynamic'

export default async function QuizPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const [chapters, navData, progress] = await Promise.all([
    getQuizChapterSummaries(),
    user ? getNavChapters(user.id) : Promise.resolve(defaultNavData()),
    user ? getQuizProgress() : Promise.resolve({}),
  ])

  return (
    <AppShell navData={navData} isAuthenticated={!!user}>
      <div className="max-w-2xl mx-auto px-4 md:px-6 py-8 pt-14 md:pt-8 pb-24">
        <QuizArena chapters={chapters} isAuthenticated={!!user} progress={progress} />
      </div>
    </AppShell>
  )
}
