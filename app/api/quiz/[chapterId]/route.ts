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
  let query = supabase.from('quiz_questions').select(QUIZ_SELECT).eq(ownerColumn, chapterId).is('retired_at', null)

  const difficulty = Number(sp.get('difficulty'))
  if (difficulty >= 1 && difficulty <= 3) query = query.eq('difficulty', difficulty)

  const types = sp.get('types')?.split(',').filter(Boolean)
  if (types?.length) query = query.in('type', types)

  const { data, error } = await query
  if (error) return NextResponse.json([], { status: 200 })
  return NextResponse.json(data ?? [])
}
