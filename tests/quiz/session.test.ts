import { describe, it, expect } from 'vitest'
import { buildSession, applyAnswer, computeMastery, levelWeights, priorityRank } from '../../lib/quiz-session'
import type { QuizQuestion } from '../../lib/types'

const types = ['multiple_choice', 'fill_blank', 'one_word', 'true_false'] as const
function makePool(perLevelPerType = 5): QuizQuestion[] {
  const pool: QuizQuestion[] = []
  for (const d of [1, 2, 3] as const) for (const t of types) for (let i = 0; i < perLevelPerType; i++)
    pool.push({ id: `${d}-${t}-${i}`, type: t, difficulty: d, question: 'q', options: t === 'multiple_choice' ? ['a', 'b', 'c', 'd'] : null,
      correct_index: t === 'multiple_choice' ? 0 : null, answer: t === 'multiple_choice' ? null : 'a', accepted_answers: [], verse_ref: null, verse_number: 1, explanation: '' })
  return pool
}

describe('buildSession (adaptive)', () => {
  it('fresh learner: 25 questions, ramp 10/10/5, all four types present', () => {
    const s = buildSession(makePool(), {}, { size: 25, difficulty: 'adaptive', types: 'all' })
    expect(s).toHaveLength(25)
    const byLevel = [1, 2, 3].map(d => s.filter(q => q.difficulty === d).length)
    expect(byLevel).toEqual([10, 10, 5])
    expect(s.map(q => q.difficulty)).toEqual([...s.map(q => q.difficulty)].sort())
    for (const t of types) expect(s.some(q => q.type === t)).toBe(true)
  })
  it('never repeats a seen question while unseen ones remain', () => {
    const pool = makePool()
    let stats = {}
    const first = buildSession(pool, stats, { size: 25, difficulty: 'adaptive', types: 'all' })
    for (const q of first) stats = applyAnswer(stats, q.id, true)
    const second = buildSession(pool, stats, { size: 25, difficulty: 'adaptive', types: 'all' })
    const firstIds = new Set(first.map(q => q.id))
    expect(second.filter(q => firstIds.has(q.id))).toHaveLength(0)
  })
  it('wrong answers come back before right ones once everything is seen', () => {
    const pool = makePool(2) // 24 questions total
    let stats = {}
    pool.forEach((q, i) => { stats = applyAnswer(stats, q.id, i % 4 !== 0, 1000 + i) }) // every 4th wrong
    const s = buildSession(pool, stats, { size: 6, difficulty: 'mixed', types: 'all' })
    expect(s.every(q => stats[q.id as keyof typeof stats] && (stats as Record<string, { lastCorrect: boolean | null }>)[q.id].lastCorrect === false)).toBe(true)
  })
  it('shifts harder once Easy is mastered', () => {
    const pool = makePool()
    let stats = {}
    for (const q of pool.filter(q => q.difficulty === 1)) stats = applyAnswer(stats, q.id, true)
    expect(levelWeights(computeMastery(pool, stats))).toEqual([0.15, 0.45, 0.4])
    const s = buildSession(pool, stats, { size: 20, difficulty: 'adaptive', types: 'all' })
    expect(s.filter(q => q.difficulty === 3).length).toBeGreaterThan(s.filter(q => q.difficulty === 1).length)
  })
})

describe('mastery + priority', () => {
  it('counts mastered, toReview and raw answer totals', () => {
    const pool = makePool(1)
    let stats = applyAnswer({}, pool[0].id, false)
    stats = applyAnswer(stats, pool[0].id, true)
    stats = applyAnswer(stats, pool[1].id, false)
    const m = computeMastery(pool, stats)
    expect(m).toMatchObject({ total: 12, attempted: 2, mastered: 1, toReview: 1, correctAnswers: 1, wrongAnswers: 2 })
    expect(priorityRank(undefined)).toBe(0)
    expect(priorityRank(stats[pool[1].id])).toBe(1)
    expect(priorityRank(stats[pool[0].id])).toBe(2)
  })
})
