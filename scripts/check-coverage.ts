import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

async function main() {
  // Get all chapters with their people count
  const { data: chapters } = await supabase
    .from('chapters')
    .select(`
      id, chapter_number,
      books!inner(name),
      chapter_people(
        tappable_terms,
        people(name, type)
      )
    `)
    .order('chapter_number')

  if (!chapters) { console.log('No data'); return }

  // Group by book
  const byBook: Record<string, any[]> = {}
  for (const ch of chapters) {
    const book = (ch.books as any).name
    if (!byBook[book]) byBook[book] = []
    byBook[book].push(ch)
  }

  for (const [book, chs] of Object.entries(byBook)) {
    console.log(`\n${book}`)
    for (const ch of chs) {
      const people = ch.chapter_people || []
      const names = people.map((p: any) => p.people?.name).filter(Boolean)
      const zeroFlag = names.length === 0 ? ' ← NO PEOPLE' : ''
      console.log(`  Ch ${ch.chapter_number}: ${names.length} people [${names.join(', ')}]${zeroFlag}`)
    }
  }

  // Summary
  const zeroPeople = chapters.filter(c => (c.chapter_people || []).length === 0)
  console.log(`\nTotal chapters: ${chapters.length}`)
  console.log(`Chapters with 0 people linked: ${zeroPeople.length}`)
  if (zeroPeople.length > 0) {
    console.log('Chapters missing people:')
    for (const ch of zeroPeople) {
      console.log(`  ${(ch.books as any).name} ${ch.chapter_number}`)
    }
  }
}

main()
