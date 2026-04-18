import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

function normalize(s: string) { return s.replace(/['\u2019\-]/g, '').toLowerCase() }

async function main() {
  // Get all chapters
  const { data: chapters } = await supabase
    .from('chapters')
    .select('id, chapter_number, verses, books!inner(name)')

  const { data: allCPs } = await supabase
    .from('chapter_places')
    .select('id, chapter_id, tappable_terms, places(ancient_name)')

  if (!chapters || !allCPs) return

  const chapterMap = new Map(chapters.map(c => [c.id, c]))

  let noMatch = 0, hasMatch = 0, fixed = 0

  for (const cp of allCPs) {
    const chapter = chapterMap.get(cp.chapter_id)
    if (!chapter) continue
    const verses = (chapter as any).verses as any[]
    const fullText = verses.map((v: any) => v.text).join(' ')
    const terms: string[] = cp.tappable_terms || []

    const anyMatch = terms.some(t => {
      const re = new RegExp(`\\b${t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi')
      return re.test(fullText)
    })

    if (anyMatch) { hasMatch++; continue }

    noMatch++
    const placeName = (cp.places as any)?.ancient_name
    const book = (chapter as any).books?.name
    const chNum = (chapter as any).chapter_number

    // Try to find RSV variant
    const candidates = fullText.match(/\b[A-Z][A-Za-z'\u2019`\-]+/g) || []
    const newTerms = new Set(terms)
    let foundAny = false
    for (const term of terms) {
      const normTerm = normalize(term)
      for (const cand of candidates) {
        if (normalize(cand) === normTerm) { newTerms.add(cand); foundAny = true }
      }
    }

    if (foundAny) {
      const added = [...newTerms].filter(t => !terms.includes(t))
      const { error } = await supabase.from('chapter_places').update({ tappable_terms: [...newTerms] }).eq('id', cp.id)
      if (!error) { console.log(`  FIXED ${placeName} (${book} ${chNum}): added [${added.join(', ')}]`); fixed++ }
    } else {
      console.log(`  WARN: no RSV variant for ${placeName} (${book} ${chNum}) — terms: [${terms.join(', ')}]`)
    }
  }

  console.log(`\nDone. Had match: ${hasMatch}, No match: ${noMatch}, Fixed: ${fixed}`)
}
main()
