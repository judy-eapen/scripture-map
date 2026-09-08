import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { beforeAll, describe, expect, it } from 'vitest'
import markSource from '../../data/mark-source.json'
import type { BankRow, ChapterBank } from '../../scripts/quiz-bank/types'
import { getDbVersesByBook, type VerseEntry } from '../utils/db-verses'
import { gradeMultipleChoice, gradeText, gradeTrueFalse } from '../../lib/quiz-grading'
import type { QuizQuestion } from '../../lib/types'

type KingsBank = Omit<ChapterBank, 'book'> & { book: '1 Kings' | '2 Kings' }

const normalize = (value: string) => value
  .replace(/[’'`]/g, '')
  .replace(/[^a-z0-9]+/gi, ' ')
  .toLowerCase()
  .trim()

function quotedText(question: string): string | null {
  const curlyStart = question.indexOf('“'), curlyEnd = question.lastIndexOf('”')
  if (curlyStart >= 0 && curlyEnd > curlyStart) return question.slice(curlyStart + 1, curlyEnd)
  return null
}

function canonicalAnswer(row: BankRow): string {
  return row.type === 'multiple_choice' ? row.options?.[0] ?? '' : row.answer ?? ''
}

function asQuizQuestion(row: BankRow, id: string): QuizQuestion {
  return {
    id, type: row.type, difficulty: row.difficulty, question: row.question,
    options: row.options ?? null, correct_index: row.type === 'multiple_choice' ? 0 : null,
    answer: row.answer ?? null, accepted_answers: row.accepted_answers ?? [],
    verse_ref: null, verse_number: row.verse_number, explanation: row.explanation ?? '',
  }
}

function verifyRow(row: BankRow, verse: string, label: string) {
  expect(row.question.trim(), `${label}: empty question`).not.toBe('')
  expect(row.verse_number, `${label}: missing verse`).toBeGreaterThan(0)

  if (row.type === 'multiple_choice') {
    expect(row.options, `${label}: multiple choice needs four options`).toHaveLength(4)
    expect(new Set(row.options?.map(normalize)).size, `${label}: duplicate options`).toBe(4)
  } else {
    expect(row.answer, `${label}: missing answer`).toBeTruthy()
  }

  const completion = row.type === 'fill_blank'
    ? row.question
    : /(?:completes? this RSV wording|what word completes this phrase|completes? this quotation|Which word completes Mark)/i.test(row.question)
      ? quotedText(row.question)
      : null
  if (completion) {
    expect(completion, `${label}: completion has no blank`).toMatch(/_{3,}/)
    const rebuilt = normalize(completion.replace(/_{3,}/, canonicalAnswer(row)))
    expect(normalize(verse), `${label}: reconstructed question is not in its verse`).toContain(rebuilt)
  }

  const q = asQuizQuestion(row, label)
  if (row.type === 'multiple_choice') {
    expect(gradeMultipleChoice(q, 0), `${label}: first source option must grade correct`).toBe(true)
    for (let index = 1; index < 4; index++) expect(gradeMultipleChoice(q, index), `${label}: distractor ${index} graded correct`).toBe(false)
  } else if (row.type === 'true_false') {
    const expected = row.answer === 'true'
    expect(gradeTrueFalse(q, expected), `${label}: stored true/false answer is rejected`).toBe(true)
    expect(gradeTrueFalse(q, !expected), `${label}: opposite true/false answer is accepted`).toBe(false)
  } else {
    expect(gradeText(q, row.answer ?? ''), `${label}: canonical typed answer is rejected`).toBe(true)
  }
}

describe('Kings quiz banks match the stored RSV text', () => {
  let banks: KingsBank[] = []
  let verses: Record<'1 Kings' | '2 Kings', Map<number, VerseEntry[]>>

  beforeAll(async () => {
    const directory = path.resolve('scripts/quiz-bank')
    const files = fs.readdirSync(directory).filter(file => /^(1|2)-kings-\d+\.ts$/.test(file))
    banks = await Promise.all(files.map(async file => {
      const bankModule = await import(pathToFileURL(path.join(directory, file)).href)
      return (bankModule.default?.default ?? bankModule.default) as KingsBank
    }))
    const [first, second] = await Promise.all([getDbVersesByBook('1 Kings'), getDbVersesByBook('2 Kings')])
    verses = { '1 Kings': first, '2 Kings': second }
  })

  it('covers all 47 chapters and validates every question through the real grading functions', () => {
    expect(banks).toHaveLength(47)
    for (const bank of banks) {
      const byVerse = new Map((verses[bank.book].get(bank.chapter) ?? []).map(verse => [verse.verse_number, verse.text]))
      expect(byVerse.size, `${bank.book} ${bank.chapter}: chapter text missing`).toBeGreaterThan(0)
      const counts = new Map<number, number>()
      for (const row of bank.rows) counts.set(row.verse_number, (counts.get(row.verse_number) ?? 0) + 1)
      for (const verseNumber of byVerse.keys()) {
        expect(counts.get(verseNumber) ?? 0, `${bank.book} ${bank.chapter}:${verseNumber}: verse is not covered`).toBeGreaterThanOrEqual(1)
      }
      bank.rows.forEach((row, index) => {
        const verse = byVerse.get(row.verse_number)
        expect(verse, `${bank.book} ${bank.chapter} row ${index + 1}: verse missing`).toBeDefined()
        verifyRow(row, verse ?? '', `${bank.book} ${bank.chapter} row ${index + 1}`)
      })
    }
  })

  it('guards the reported 1 Kings 20:15 wording regression', () => {
    const rows = banks.find(bank => bank.book === '1 Kings' && bank.chapter === 20)!.rows.filter(row => row.verse_number === 15)
    expect(rows).toHaveLength(4)
    const serialized = JSON.stringify(rows)
    expect(serialized).not.toContain('“hundred and thirty-two')
    expect(serialized).toContain('two hundred and thirty-two')
  })
})

describe('Mark quiz bank matches the Orthodox Study Bible New Testament text used by the app', () => {
  it('validates all 16 hand-authored chapters and every answer through the real grading functions', async () => {
    let total = 0
    for (const chapter of markSource.chapters) {
      const bankModule = await import(`../../scripts/quiz-bank/mark-${chapter.chapter}.ts`)
      const bank = (bankModule.default?.default ?? bankModule.default) as ChapterBank
      const byVerse = new Map(chapter.verses.map(verse => [verse.verse_number, verse.text]))
      total += bank.rows.length
      bank.rows.forEach((row, index) => verifyRow(row, byVerse.get(row.verse_number) ?? '', `Mark ${chapter.chapter} row ${index + 1}`))
    }
    expect(total).toBeGreaterThanOrEqual(markSource.chapters.reduce((sum, chapter) => sum + chapter.verses.length, 0))
  })

  it('guards the Mark 1:2 messenger prompt regression', async () => {
    const bankModule = await import('../../scripts/quiz-bank/mark-1')
    const bank = bankModule.default as ChapterBank
    const rows = bank.rows.filter(row => row.verse_number === 2)
    expect(rows.some(row => row.question === 'Where was the promised messenger sent?')).toBe(false)
    expect(rows).toContainEqual(expect.objectContaining({
      type: 'fill_blank',
      answer: 'before Your face',
    }))
  })
})
