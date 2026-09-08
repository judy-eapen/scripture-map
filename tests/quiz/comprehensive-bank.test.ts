import { describe, expect, it } from 'vitest'
import bank from '../../scripts/quiz-bank/all-kings'
import { gradeMultipleChoice, gradeTrueFalse } from '../../lib/quiz-grading'
import type { QuizQuestion } from '../../lib/types'

describe('All of Kings comprehensive bank', () => {
  it('contains 400 unique questions that genuinely span chapters', () => {
    expect(bank.rows).toHaveLength(400)
    expect(new Set(bank.rows.map(row => row.question.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim())).size).toBe(400)
    for (const [index, row] of bank.rows.entries()) {
      expect(row.supporting_refs.length, `row ${index + 1}`).toBeGreaterThanOrEqual(2)
      expect(new Set(row.supporting_refs.map(ref => `${ref.book}:${ref.chapter}`)).size, `row ${index + 1}`).toBeGreaterThanOrEqual(2)
      expect(row.review_topic).toBeTruthy()
      expect(row.review_guidance).toContain('Study ')
      const question = { id: String(index), accepted_answers: [], verse_ref: null, verse_number: null, ...row, options: row.options ?? null, correct_index: row.type === 'multiple_choice' ? 0 : null } as QuizQuestion
      if (row.type === 'multiple_choice') expect(gradeMultipleChoice(question, 0)).toBe(true)
      if (row.type === 'true_false') expect(gradeTrueFalse(question, row.answer === 'true')).toBe(true)
    }
  })

  it('covers the requested famines across both books', () => {
    const famineRows = bank.rows.filter(row => row.review_topic.toLowerCase().includes('famine'))
    expect(famineRows.length).toBeGreaterThanOrEqual(24)
    const refs = new Set(famineRows.flatMap(row => row.supporting_refs.map(ref => `${ref.book} ${ref.chapter}`)))
    for (const expected of ['1 Kings 17', '2 Kings 4', '2 Kings 6', '2 Kings 7', '2 Kings 25']) expect(refs.has(expected), expected).toBe(true)
  })
})
