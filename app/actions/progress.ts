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

export async function saveQuizScore(
  chapterId: string,
  score: number,
  bookSlug: string,
  chapterNum: number
): Promise<void> {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) return // quiz scores silently skipped for unauthenticated users

  // Only update if this score beats the existing best
  const { data: existing } = await supabase
    .from('user_progress')
    .select('quiz_best_score')
    .eq('user_id', user.id)
    .eq('chapter_id', chapterId)
    .single()

  const currentBest = existing?.quiz_best_score ?? -1

  if (score > currentBest) {
    await supabase.from('user_progress').upsert(
      {
        user_id: user.id,
        chapter_id: chapterId,
        quiz_best_score: score,
        quiz_last_attempted: new Date().toISOString(),
        quiz_attempt_count: 1,
      },
      { onConflict: 'user_id,chapter_id' }
    )
  } else {
    // Still update attempt count and last attempted
    await supabase
      .from('user_progress')
      .upsert(
        {
          user_id: user.id,
          chapter_id: chapterId,
          quiz_last_attempted: new Date().toISOString(),
          quiz_attempt_count: (existing ? 1 : 1),
        },
        { onConflict: 'user_id,chapter_id' }
      )
  }

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
