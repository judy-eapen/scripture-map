import { notFound } from 'next/navigation'
import { getChapterData, getNavChapters, getChapterReadStatus, defaultNavData } from '@/lib/db'
import { createClient } from '@/lib/supabase/server'
import { getChapterNotes } from '@/app/actions/notes'
import ChapterView from '@/components/ChapterView'

export default async function ChapterPage({ params, searchParams }: { params: Promise<{ book: string; chapter: string }>; searchParams:Promise<{ returnTo?:string }> }) {
  const { book, chapter } = await params
  const query = await searchParams
  const chapterNum = parseInt(chapter, 10)
  const quizReturnHref = query.returnTo?.startsWith('/quiz') && !query.returnTo.startsWith('//') ? query.returnTo : undefined

  if (isNaN(chapterNum)) notFound()

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const [chapterData, navData] = await Promise.all([
    getChapterData(book, chapterNum),
    user ? getNavChapters(user.id) : Promise.resolve(defaultNavData()),
  ])

  if (!chapterData) notFound()

  const [initialIsRead, initialNotes] = await Promise.all([
    user ? getChapterReadStatus(user.id, chapterData.id) : Promise.resolve(false),
    user ? getChapterNotes(chapterData.id) : Promise.resolve([]),
  ])

  return (
    <ChapterView
      chapter={chapterData}
      navData={navData}
      initialIsRead={initialIsRead}
      isAuthenticated={!!user}
      initialNotes={initialNotes}
      quizReturnHref={quizReturnHref}
    />
  )
}
