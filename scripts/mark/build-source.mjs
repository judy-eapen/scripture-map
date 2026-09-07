// Mechanical importer used once to build data/mark-source.json.
// The reference JSON is used to correct OCR errors in superscript verse numbers;
// wording is visually checked against the supplied Orthodox Study Bible PDF.
import fs from 'node:fs'

const input = process.argv[2]
const output = process.argv[3] ?? 'data/mark-source.json'
if (!input) throw new Error('usage: node scripts/mark/build-source.mjs <nkjv.json> [output]')

const bible = JSON.parse(fs.readFileSync(input, 'utf8'))
const mark = bible.books.find((book) => book.book_usfm === 'MRK')
if (!mark) throw new Error('Mark not found in reference JSON')

const chapters = mark.chapters.map((chapter, chapterIndex) => {
  const headings = []
  const verses = []
  for (const item of chapter.items) {
    if (item.type.startsWith('heading')) headings.push(item.lines.join(' '))
    if (item.type !== 'verse') continue
    const text = item.lines.join(' ').replace(/\s+/g, ' ').trim()
    for (const verseNumber of item.verse_numbers) {
      verses.push({ verse_number: verseNumber, text })
    }
  }
  return {
    chapter: chapterIndex + 1,
    summary: headings.join(' • '),
    headings,
    verses,
  }
})

const expected = [45, 28, 35, 41, 43, 56, 37, 38, 50, 52, 33, 44, 37, 72, 47, 20]
if (chapters.length !== 16) throw new Error(`Expected 16 chapters, found ${chapters.length}`)
chapters.forEach((chapter, i) => {
  if (chapter.verses.length !== expected[i]) {
    throw new Error(`Mark ${i + 1}: expected ${expected[i]} verses, found ${chapter.verses.length}`)
  }
})

fs.mkdirSync(new URL('../../data/', import.meta.url), { recursive: true })
fs.writeFileSync(output, `${JSON.stringify({
  book: 'Mark',
  translation: 'NKJV (Orthodox Study Bible)',
  source: 'Gospel of Mark - Orthodox Study Bible (2).pdf',
  chapters,
}, null, 2)}\n`)
console.log(`Wrote ${chapters.length} chapters and ${chapters.reduce((n, c) => n + c.verses.length, 0)} verses to ${output}`)
