import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ chapterId: string }> }
) {
  const { chapterId } = await params
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('quiz_questions')
    .select('id, question, options, correct_index, explanation')
    .eq('chapter_id', chapterId)

  if (error) return NextResponse.json([], { status: 200 })
  return NextResponse.json(data ?? [])
}
