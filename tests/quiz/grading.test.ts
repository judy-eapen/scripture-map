import { describe, it, expect } from 'vitest'
import { normalizeAnswer, gradeText, gradeTrueFalse, buildRound } from '../../lib/quiz-grading'
import type { QuizQuestion } from '../../lib/types'

const base: QuizQuestion = {
  id: 'q1', type: 'one_word', difficulty: 1, question: 'Who?', options: null,
  correct_index: null, answer: "Ab'ishag", accepted_answers: ['Abishag the Shunammite'],
  verse_ref: '1 Kings 1:3', verse_number: 3, explanation: '',
}

describe('normalizeAnswer', () => {
  it('drops RSV apostrophes and case', () => {
    expect(normalizeAnswer("Ab'ishag")).toBe('abishag')
    expect(normalizeAnswer('ADONI’JAH')).toBe('adonijah')
  })
  it('ignores articles, punctuation and spacing', () => {
    expect(normalizeAnswer(' The  horns of the altar. ')).toBe('horns of altar')
    expect(normalizeAnswer('En-rogel')).toBe('en rogel')
  })
})

describe('gradeText', () => {
  it('accepts canonical and alternate spellings', () => {
    expect(gradeText(base, 'abishag')).toBe(true)
    expect(gradeText(base, "Ab'ishag")).toBe(true)
    expect(gradeText(base, 'Abishag the Shunammite')).toBe(true)
  })
  it('rejects wrong or empty answers', () => {
    expect(gradeText(base, 'Bathsheba')).toBe(false)
    expect(gradeText(base, '   ')).toBe(false)
  })
})

describe('gradeTrueFalse', () => {
  it('matches stored boolean string', () => {
    const q = { ...base, type: 'true_false' as const, answer: 'false' }
    expect(gradeTrueFalse(q, false)).toBe(true)
    expect(gradeTrueFalse(q, true)).toBe(false)
  })
})

describe('buildRound', () => {
  const pool: QuizQuestion[] = [1, 1, 2, 2, 3, 3].map((d, i) => ({
    ...base, id: `q${i}`, difficulty: d as 1 | 2 | 3,
  }))
  it('filters by difficulty and excludes seen ids', () => {
    const round = buildRound(pool, 2, new Set(['q2']))
    expect(round.map(q => q.id)).toEqual(['q3'])
  })
  it('orders mixed rounds easy to hard and caps size', () => {
    const round = buildRound(pool, 'mixed', new Set(), 4)
    expect(round).toHaveLength(4)
    const diffs = round.map(q => q.difficulty)
    expect([...diffs].sort()).toEqual(diffs)
  })
})
