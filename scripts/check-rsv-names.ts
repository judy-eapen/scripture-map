// Check if key names in 1 Kings 1 RSV text match our tappable_terms
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

async function main() {
  const { data: ch } = await supabase
    .from('chapters')
    .select(`
      id, chapter_number, verses,
      books!inner(name),
      chapter_people(
        tappable_terms,
        people(name)
      )
    `)
    .eq('chapter_number', 1)
    .eq('books.name', '1 Kings')
    .single()

  if (!ch) { console.log('No chapter found'); return }

  // Show first 10 verses
  const verses = ch.verses as any[]
  console.log('=== 1 Kings 1 — First 15 verses ===')
  for (const v of verses.slice(0, 15)) {
    console.log(`[${v.verse}] ${v.text}`)
  }

  console.log('\n=== Tappable terms registered ===')
  for (const cp of (ch.chapter_people as any[]) || []) {
    console.log(`${cp.people?.name}: [${cp.tappable_terms.join(', ')}]`)
  }
}

main()
