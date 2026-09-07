import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { buildMarkBank } from '@/scripts/quiz-bank/mark-builder'

export const QUIZ_SELECT =
  'id, type, difficulty, question, options, correct_index, answer, accepted_answers, verse_ref, verse_number, explanation'

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
  if (chapterId.startsWith('preview-mark-')) {
    const chapter = Number(chapterId.replace('preview-mark-', ''))
    const bank = buildMarkBank(chapter)
    return NextResponse.json(bank.rows.map((row, index) => ({
      id: `${chapterId}-${index + 1}`, ...row,
      options: row.options ?? null, correct_index: row.type === 'multiple_choice' ? 0 : null,
      answer: row.answer ?? null, accepted_answers: row.accepted_answers ?? [],
      verse_ref: `Mark ${chapter}:${row.verse_number}`, explanation: row.explanation ?? '',
    })))
  }
  const supabase = await createClient()
  const sp = req.nextUrl.searchParams

  let query = supabase.from('quiz_questions').select(QUIZ_SELECT).eq('chapter_id', chapterId)

  const difficulty = Number(sp.get('difficulty'))
  if (difficulty >= 1 && difficulty <= 3) query = query.eq('difficulty', difficulty)

  const types = sp.get('types')?.split(',').filter(Boolean)
  if (types?.length) query = query.in('type', types)

  const { data, error } = await query
  if (error) return NextResponse.json([], { status: 200 })
  return NextResponse.json(data ?? [])
}
