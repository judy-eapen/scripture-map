import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(req: NextRequest) {
  const sp = req.nextUrl.searchParams
  const book = sp.get('book') ?? ''
  const chapter = Number(sp.get('chapter'))
  const from = Number(sp.get('from'))
  const to = Number(sp.get('to') ?? from)
  if (!book || !Number.isInteger(chapter) || !Number.isInteger(from) || !Number.isInteger(to) || from < 1 || to < from) {
    return NextResponse.json({ verses: [] }, { status: 400 })
  }
  const supabase = await createClient()
  const { data: bookRow } = await supabase.from('books').select('id, name').eq('slug', book).maybeSingle()
  if (!bookRow) return NextResponse.json({ verses: [] })
  const { data: chapterRow } = await supabase.from('chapters').select('verses').eq('book_id', bookRow.id).eq('chapter_number', chapter).maybeSingle()
  const verses = ((chapterRow?.verses ?? []) as Array<{ verse_number:number; text:string }>)
    .filter(verse => verse.verse_number >= from && verse.verse_number <= to)
  return NextResponse.json({ book: bookRow.name, chapter, verses })
}
