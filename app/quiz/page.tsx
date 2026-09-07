import Link from 'next/link'
import { getQuizChapterSummaries } from '@/lib/db'
import { createClient } from '@/lib/supabase/server'
import QuizArena from '@/components/QuizArena'

export const dynamic = 'force-dynamic'

export default async function QuizPage() {
  const supabase = await createClient()
  const [{ data: { user } }, chapters] = await Promise.all([
    supabase.auth.getUser(),
    getQuizChapterSummaries(),
  ])

  return (
    <main className="min-h-screen" style={{ background: 'var(--navy-950)' }}>
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/" className="flex items-center gap-1.5 text-sm" style={{ color: 'var(--muted-400)' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M12 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Home
          </Link>
        </div>
        <QuizArena chapters={chapters} isAuthenticated={!!user} />
      </div>
    </main>
  )
}
