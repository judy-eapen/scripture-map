import { createClient } from '@supabase/supabase-js'

export type VerseEntry = { verse_number: number; text: string }

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY')
  return createClient(url, key)
}

export async function getDbVersesByBook(book: '1 Kings' | '2 Kings'): Promise<Map<number, VerseEntry[]>> {
  const supabase = getSupabase()

  const { data: books } = await supabase.from('books').select('id, name')
  const bookRow = books?.find((b: { id: string; name: string }) => b.name === book)
  if (!bookRow) throw new Error(`Book "${book}" not found in DB`)

  const { data: chapters, error } = await supabase
    .from('chapters')
    .select('chapter_number, verses')
    .eq('book_id', bookRow.id)
    .order('chapter_number')

  if (error) throw new Error(`DB error: ${error.message}`)

  const map = new Map<number, VerseEntry[]>()
  for (const ch of chapters ?? []) {
    map.set(ch.chapter_number, (ch.verses ?? []) as VerseEntry[])
  }
  return map
}
