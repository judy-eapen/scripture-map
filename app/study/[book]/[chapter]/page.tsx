import { notFound } from 'next/navigation'
import { getChapterData, getNavChapters, getChapterReadStatus, defaultNavData } from '@/lib/db'
import { createClient } from '@/lib/supabase/server'
import ChapterView from '@/components/ChapterView'

export default async function ChapterPage({ params }: { params: Promise<{ book: string; chapter: string }> }) {
  const { book, chapter } = await params
  const chapterNum = parseInt(chapter, 10)

  if (isNaN(chapterNum)) notFound()

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const [chapterData, navData] = await Promise.all([
    getChapterData(book, chapterNum),
    user ? getNavChapters(user.id) : Promise.resolve(defaultNavData()),
  ])

  if (!chapterData) notFound()

  const initialIsRead = user
    ? await getChapterReadStatus(user.id, chapterData.id)
    : false

  return (
    <ChapterView
      chapter={chapterData}
      navData={navData}
      initialIsRead={initialIsRead}
      isAuthenticated={!!user}
    />
  )
}
