import mammoth from 'mammoth'

export type VerseEntry = { verse_number: number; text: string }
export type ParsedChapter = { book: string; chapter_number: number; verses: VerseEntry[] }

export async function parseRsvDocx(docxPath: string, book: '1 Kings' | '2 Kings'): Promise<ParsedChapter[]> {
  const prefix = book === '1 Kings' ? '1Kgs' : '2Kgs'
  const result = await mammoth.extractRawText({ path: docxPath })
  const lines = result.value.split('\n').map(l => l.trim()).filter(Boolean)

  const chapters: ParsedChapter[] = []
  let current: ParsedChapter | null = null

  for (const line of lines) {
    const chapterMatch = line.match(new RegExp(`^${prefix}\\.(\\d+)$`))
    if (chapterMatch) {
      if (current) chapters.push(current)
      current = { book, chapter_number: parseInt(chapterMatch[1]), verses: [] }
      continue
    }
    const verseMatch = line.match(/^\[(\d+)\]\s*(.+)$/)
    if (verseMatch && current) {
      current.verses.push({ verse_number: parseInt(verseMatch[1]), text: verseMatch[2].trim() })
    }
  }

  if (current) chapters.push(current)
  return chapters
}
