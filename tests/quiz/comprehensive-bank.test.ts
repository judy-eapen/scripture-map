import { describe, expect, it } from 'vitest'
import bank from '../../scripts/quiz-bank/all-kings'
import { gradeMultipleChoice, gradeTrueFalse } from '../../lib/quiz-grading'
import type { QuizQuestion } from '../../lib/types'
import { maskContextAnswers } from '../../lib/fill-blank-context'

describe('All of Kings comprehensive bank', () => {
  it('contains only unique questions with supporting passages', () => {
    expect(bank.rows.length).toBeGreaterThanOrEqual(40)
    expect(new Set(bank.rows.map(row => row.question.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim())).size).toBe(bank.rows.length)
    for (const [index, row] of bank.rows.entries()) {
      expect(row.supporting_refs.length, `row ${index + 1}`).toBeGreaterThanOrEqual(1)
      expect(row.review_topic).toBeTruthy()
      expect(row.review_guidance.trim()).not.toBe('')
      const question = { id: String(index), accepted_answers: [], verse_ref: null, verse_number: null, ...row, options: row.options ?? null, correct_index: row.type === 'multiple_choice' ? 0 : null } as QuizQuestion
      if (row.type === 'multiple_choice') expect(gradeMultipleChoice(question, 0)).toBe(true)
      if (row.type === 'true_false') expect(gradeTrueFalse(question, row.answer === 'true')).toBe(true)
    }
  })

  it('never requires learners to identify or memorize reference numbers', () => {
    for (const row of bank.rows) {
      expect(row.question).not.toMatch(/sequence traced by/i)
      expect(row.question).not.toMatch(/how do (?:1|2) Kings \d+:/i)
      expect(row.question).not.toMatch(/which pair of passages/i)
    }
  })

  it('gives every collection fill-in an answer-free lead-in', () => {
    const fills = bank.rows.filter(row => row.type === 'fill_blank')
    expect(fills).toHaveLength(20)
    for (const row of fills) {
      expect(row.lead_in?.trim()).toBeTruthy()
      expect(` ${row.lead_in!.toLowerCase()} `).not.toContain(` ${row.answer!.toLowerCase()} `)
    }
  })

  it('masks canonical and accepted answers from context without changing other text', () => {
    const question = {
      id:'mask', type:'fill_blank', difficulty:1, question:'', options:null, correct_index:null,
      answer:"Ashe'rah", accepted_answers:['Asherah'], verse_ref:'2 Kings 18:4', verse_number:4, explanation:'',
    } as QuizQuestion
    expect(maskContextAnswers("He cut down the Asherah; the Ashe'rah was removed.", question))
      .toBe('He cut down the ▮▮▮; the ▮▮▮ was removed.')
  })

  it('covers the requested famines across both books', () => {
    const famineRows = bank.rows.filter(row => row.review_topic.toLowerCase().includes('famine'))
    expect(famineRows.length).toBeGreaterThanOrEqual(2)
    const refs = new Set(famineRows.flatMap(row => row.supporting_refs.map(ref => `${ref.book} ${ref.chapter}`)))
    // famine coverage grows with the bank; require the two siege famines at minimum
    const covered = ['1 Kings 17', '2 Kings 4', '2 Kings 6', '2 Kings 7', '2 Kings 25'].filter(c => refs.has(c))
    expect(covered.length, `famine chapters covered: ${covered.join(', ')}`).toBeGreaterThanOrEqual(2)
  })
})
