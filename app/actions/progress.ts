'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function markChapterRead(
  chapterId: string,
  bookSlug: string,
  chapterNum: number
): Promise<void> {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) throw new Error('Not authenticated')

  await supabase.from('user_progress').upsert(
    {
      user_id: user.id,
      chapter_id: chapterId,
      read_at: new Date().toISOString(),
    },
    { onConflict: 'user_id,chapter_id' }
  )

  revalidatePath(`/study/${bookSlug}/${chapterNum}`)
}

export async function unmarkChapterRead(
  chapterId: string,
  bookSlug: string,
  chapterNum: number
): Promise<void> {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) throw new Error('Not authenticated')

  await supabase
    .from('user_progress')
    .update({ read_at: null })
    .eq('user_id', user.id)
    .eq('chapter_id', chapterId)

  revalidatePath(`/study/${bookSlug}/${chapterNum}`)
}
