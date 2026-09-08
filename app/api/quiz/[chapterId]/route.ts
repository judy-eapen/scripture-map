import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export const QUIZ_SELECT =
  'id, type, difficulty, question, options, correct_index, answer, accepted_answers, verse_ref, verse_number, explanation, supporting_refs, review_topic, review_guidance'

/**
 * GET /api/quiz/:chapterId
 *   ?difficulty=1|2|3   optional filter
 *   ?types=a,b          optional filter (multiple_choice, fill_blank, one_word, true_false)
 */
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ chapterId: string }> }
) {
  const { chapterId } = await params
  const supabase = await createClient()
  const sp = req.nextUrl.searchParams

  const ownerColumn = sp.get('scope') === 'collection' ? 'collection_id' : 'chapter_id'
  const difficulty = Number(sp.get('difficulty'))
  const types = sp.get('types')?.split(',').filter(Boolean)
  const run = (filterRetired: boolean) => {
    let query = supabase.from('quiz_questions').select(QUIZ_SELECT).eq(ownerColumn, chapterId)
    if (filterRetired) query = query.is('retired_at', null)
    if (difficulty >= 1 && difficulty <= 3) query = query.eq('difficulty', difficulty)
    if (types?.length) query = query.in('type', types)
    return query
  }
  let { data, error } = await run(true)
  // Safe before migration 013: retry the identical runtime query without retired_at.
  if (error) ({ data, error } = await run(false))
  if (error) return NextResponse.json([], { status: 200 })
  return NextResponse.json(data ?? [])
}
