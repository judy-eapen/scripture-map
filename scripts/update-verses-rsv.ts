import mammoth from 'mammoth'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

type VerseEntry = { verse_number: number; text: string }
type ChapterData = { book: string; chapter_number: number; verses: VerseEntry[] }

function parseDocx(raw: string, book: '1 Kings' | '2 Kings'): ChapterData[] {
  const prefix = book === '1 Kings' ? '1Kgs' : '2Kgs'
  const lines = raw.split('\n').map(l => l.trim()).filter(Boolean)

  const chapters: ChapterData[] = []
  let current: ChapterData | null = null

  for (const line of lines) {
    // Chapter marker e.g. "1Kgs.1" or "2Kgs.14"
    const chapterMatch = line.match(new RegExp(`^${prefix}\\.(\\d+)$`))
    if (chapterMatch) {
      if (current) chapters.push(current)
      current = { book, chapter_number: parseInt(chapterMatch[1]), verses: [] }
      continue
    }

    // Verse line e.g. "[1] Now King David..." or "[1]Now..." (no space)
    const verseMatch = line.match(/^\[(\d+)\]\s*(.+)$/)
    if (verseMatch && current) {
      current.verses.push({
        verse_number: parseInt(verseMatch[1]),
        text: verseMatch[2].trim(),
      })
    }
  }

  if (current) chapters.push(current)
  return chapters
}

async function updateBook(docxPath: string, book: '1 Kings' | '2 Kings') {
  console.log(`\nProcessing ${book} from ${docxPath}...`)

  const result = await mammoth.extractRawText({ path: docxPath })
  const chapters = parseDocx(result.value, book)
  console.log(`  Parsed ${chapters.length} chapters`)

  // Fetch all chapter IDs for this book
  const { data: dbChapters, error } = await supabase
    .from('chapters')
    .select('id, chapter_number, book_id')
    .order('chapter_number')

  if (error) { console.error('  DB error:', error.message); return }

  // Get book_id
  const { data: books } = await supabase.from('books').select('id, name')
  const bookRow = books?.find(b => b.name === book)
  if (!bookRow) { console.error(`  Book "${book}" not found in DB`); return }

  const dbChaptersForBook = dbChapters?.filter(c => c.book_id === bookRow.id) ?? []

  let updated = 0
  let skipped = 0

  for (const chapter of chapters) {
    const dbChapter = dbChaptersForBook.find(c => c.chapter_number === chapter.chapter_number)
    if (!dbChapter) {
      console.warn(`  SKIP: ${book} chapter ${chapter.chapter_number} not found in DB`)
      skipped++
      continue
    }

    const { error: updateError } = await supabase
      .from('chapters')
      .update({ verses: chapter.verses })
      .eq('id', dbChapter.id)

    if (updateError) {
      console.error(`  ERROR: ${book} ${chapter.chapter_number} — ${updateError.message}`)
    } else {
      updated++
    }
  }

  console.log(`  Updated ${updated} chapters, skipped ${skipped}`)
}

async function main() {
  console.log('Updating verse text to RSV...')

  await updateBook('/Users/judydarvin/Desktop/STG/1 Kings RSV.docx', '1 Kings')
  await updateBook('/Users/judydarvin/Desktop/STG/2 Kings RSV.docx', '2 Kings')

  console.log('\nDone.')
}

main().catch(console.error)
