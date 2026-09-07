import { describe, it, expect, beforeAll } from 'vitest'
import fs from 'node:fs'
import { parseRsvDocx, type ParsedChapter } from '../utils/parse-rsv'
import { getDbVersesByBook, type VerseEntry } from '../utils/db-verses'

function findRsvDocument(book: '1 Kings' | '2 Kings') {
  const envName = book === '1 Kings' ? 'RSV_1_KINGS_DOCX' : 'RSV_2_KINGS_DOCX'
  const candidates = [
    process.env[envName],
    `/Users/judydarvin/Desktop/Areas/Personal/Faith/STG/${book} RSV (1).docx`,
    `/Users/judydarvin/Desktop/STG/${book} RSV.docx`,
  ].filter((candidate): candidate is string => !!candidate)
  const found = candidates.find(candidate => fs.existsSync(candidate))
  if (!found) throw new Error(`Missing ${book} RSV source document. Set ${envName} to its path.`)
  return found
}

const DOCX = {
  '1 Kings': findRsvDocument('1 Kings'),
  '2 Kings': findRsvDocument('2 Kings'),
}

function runBookTests(book: '1 Kings' | '2 Kings', totalChapters: number) {
  describe(book, () => {
    let docxChapters: ParsedChapter[]
    let dbVerses: Map<number, VerseEntry[]>

    beforeAll(async () => {
      ;[docxChapters, dbVerses] = await Promise.all([
        parseRsvDocx(DOCX[book], book),
        getDbVersesByBook(book),
      ])
    })

    const chapters = Array.from({ length: totalChapters }, (_, i) => i + 1)

    it.each(chapters)(`chapter %i`, (chapterNum) => {
      const docxChapter = docxChapters.find(c => c.chapter_number === chapterNum)
      expect(docxChapter, `Chapter ${chapterNum} not found in DOCX`).toBeDefined()

      const dbChapterVerses = dbVerses.get(chapterNum)
      expect(dbChapterVerses, `Chapter ${chapterNum} not found in DB`).toBeDefined()

      const docxVerseNums = new Set(docxChapter!.verses.map(v => v.verse_number))
      const dbVerseNums = new Set(dbChapterVerses!.map(v => v.verse_number))

      const missingInDb = [...docxVerseNums].filter(n => !dbVerseNums.has(n))
      expect(missingInDb, `Verses in DOCX but missing from DB: [${missingInDb.join(', ')}]`).toHaveLength(0)

      const extraInDb = [...dbVerseNums].filter(n => !docxVerseNums.has(n))
      expect(extraInDb, `Verses in DB but not in DOCX: [${extraInDb.join(', ')}]`).toHaveLength(0)

      const mismatches: string[] = []
      for (const docxVerse of docxChapter!.verses) {
        const dbVerse = dbChapterVerses!.find(v => v.verse_number === docxVerse.verse_number)
        if (!dbVerse) continue
        if (dbVerse.text !== docxVerse.text) {
          mismatches.push(
            `  v${docxVerse.verse_number}:\n    DOCX: "${docxVerse.text}"\n    DB:   "${dbVerse.text}"`
          )
        }
      }
      expect(mismatches, `Text mismatches (${mismatches.length}):\n${mismatches.join('\n')}`).toHaveLength(0)
    })
  })
}

describe('RSV verse coverage', () => {
  runBookTests('1 Kings', 22)
  runBookTests('2 Kings', 25)
})
