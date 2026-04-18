import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

async function escapeRegex(s: string) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') }
function termMatchesText(term: string, text: string): boolean {
  const re = new RegExp(`\\b${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi')
  return re.test(text)
}

async function main() {
  // Check a few chapters
  const checks = [
    { book: '1 Kings', chapter: 18 },
    { book: '1 Kings', chapter: 1 },
    { book: '2 Kings', chapter: 5 },
  ]

  for (const { book, chapter } of checks) {
    const { data: ch } = await supabase
      .from('chapters')
      .select('id, chapter_number, verses, books!inner(name)')
      .eq('chapter_number', chapter)
      .eq('books.name', book)
      .single()
    if (!ch) continue

    const { data: places } = await supabase
      .from('chapter_places')
      .select('tappable_terms, places(ancient_name)')
      .eq('chapter_id', (ch as any).id)

    const verses = (ch as any).verses as any[]
    const fullText = verses.map((v: any) => v.text).join(' ')

    console.log(`\n${book} ${chapter}:`)
    for (const p of places || []) {
      const name = (p.places as any)?.ancient_name
      const terms: string[] = p.tappable_terms || []
      const matched = terms.filter(t => termMatchesText(t, fullText))
      const unmatched = terms.filter(t => !termMatchesText(t, fullText))
      const status = matched.length > 0 ? '✓' : '⚠️ NO MATCH'
      console.log(`  ${status} ${name}: matched=[${matched.join(', ')}] unmatched=[${unmatched.join(', ')}]`)
    }
  }
}
main()
