import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

function normalize(s: string) {
  return s.replace(/['\-]/g, '').toLowerCase()
}

function escapeRegex(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function termMatchesText(term: string, text: string): boolean {
  const re = new RegExp(`\\b${escapeRegex(term)}\\b`, 'gi')
  return re.test(text)
}

async function main() {
  // Fetch all chapters with verse text
  const { data: chapters } = await supabase
    .from('chapters')
    .select('id, chapter_number, verses, books!inner(name)')
    .order('chapter_number')

  if (!chapters) { console.error('No chapters'); return }

  // Fetch all chapter_people
  const { data: allCPs } = await supabase
    .from('chapter_people')
    .select('id, chapter_id, tappable_terms, people(name, type)')

  if (!allCPs) { console.error('No chapter_people'); return }

  const chapterMap = new Map(chapters.map(c => [c.id, c]))

  let fixed = 0
  let skipped = 0

  for (const cp of allCPs) {
    const chapter = chapterMap.get(cp.chapter_id)
    if (!chapter) continue

    const verses = chapter.verses as any[]
    const fullText = verses.map((v: any) => v.text).join(' ')
    const terms: string[] = cp.tappable_terms || []

    // Check if any term already matches
    const anyMatch = terms.some(t => termMatchesText(t, fullText))
    if (anyMatch) {
      skipped++
      continue
    }

    // No term matches — try to find RSV variants in text
    // Extract candidate words from text: capitalized words possibly containing apostrophes/hyphens
    const candidates = fullText.match(/\b[A-Z][A-Za-z''`\-]+/g) || []

    const newTerms = new Set(terms)
    let foundAny = false

    for (const term of terms) {
      const normalTerm = normalize(term)
      for (const candidate of candidates) {
        if (normalize(candidate) === normalTerm) {
          newTerms.add(candidate)
          foundAny = true
        }
      }
    }

    const personName = (cp.people as any)?.name
    const book = (chapter.books as any)?.name
    const chNum = chapter.chapter_number

    if (foundAny) {
      const updatedTerms = [...newTerms]
      const { error } = await supabase
        .from('chapter_people')
        .update({ tappable_terms: updatedTerms })
        .eq('id', cp.id)

      if (error) {
        console.error(`  ERROR updating ${personName} in ${book} ${chNum}: ${error.message}`)
      } else {
        console.log(`  FIXED ${personName} (${book} ${chNum}): added [${[...newTerms].filter(t => !terms.includes(t)).join(', ')}]`)
        fixed++
      }
    } else {
      console.log(`  WARN: no RSV variant found for ${personName} (${book} ${chNum}) — terms: [${terms.join(', ')}]`)
    }
  }

  console.log(`\nDone. Fixed ${fixed} entries, ${skipped} already had matches.`)
}

main()
