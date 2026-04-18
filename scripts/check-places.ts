import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

async function main() {
  // Check chapter_places for 1 Kings 1
  const { data: ch } = await supabase
    .from('chapters')
    .select('id, chapter_number, verses, books!inner(name)')
    .eq('chapter_number', 18)
    .eq('books.name', '1 Kings')
    .single()

  if (!ch) { console.log('No chapter'); return }

  const { data: places } = await supabase
    .from('chapter_places')
    .select('tappable_terms, places(ancient_name)')
    .eq('chapter_id', ch.id)

  console.log(`1 Kings 18 — places linked: ${places?.length ?? 0}`)
  for (const p of places || []) {
    const name = (p.places as any)?.ancient_name
    console.log(`  ${name}: [${p.tappable_terms?.join(', ')}]`)
  }

  // Check total chapter_places entries
  const { count } = await supabase.from('chapter_places').select('*', { count: 'exact', head: true })
  console.log(`\nTotal chapter_places rows: ${count}`)
}
main()
