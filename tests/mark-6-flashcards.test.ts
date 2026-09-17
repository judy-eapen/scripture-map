import { describe, expect, it } from 'vitest'
import { MARK_6_FLASHCARDS, MARK_6_FLASHCARD_SCENES } from '../data/mark-6-flashcards'

function coveredVerses(passage: string) {
  const reference = passage.replace(/^Mark 6:/, '')
  return reference.split(',').flatMap(part => {
    const [start, end] = part.trim().split('–').map(Number)
    return Array.from({ length: (end ?? start) - start + 1 }, (_, index) => start + index)
  })
}

describe('Mark 6 flashcard deck', () => {
  it('contains 90 uniquely identified cards', () => {
    expect(MARK_6_FLASHCARDS).toHaveLength(90)
    expect(new Set(MARK_6_FLASHCARDS.map(card => card.id)).size).toBe(90)
  })

  it('contains 84 fact cards and one understanding card per scene', () => {
    expect(MARK_6_FLASHCARDS.filter(card => card.kind === 'fact')).toHaveLength(84)
    expect(MARK_6_FLASHCARDS.filter(card => card.kind === 'understanding')).toHaveLength(6)
    for (const scene of MARK_6_FLASHCARD_SCENES) {
      expect(MARK_6_FLASHCARDS.filter(card => card.scene === scene && card.kind === 'understanding')).toHaveLength(1)
    }
  })

  it('covers every verse in Mark 6:1–56', () => {
    const verses = new Set(MARK_6_FLASHCARDS.flatMap(card => coveredVerses(card.passage)))
    expect([...verses].sort((a, b) => a - b)).toEqual(Array.from({ length: 56 }, (_, index) => index + 1))
  })

  it('keeps every answer anchored in Mark 6', () => {
    for (const card of MARK_6_FLASHCARDS) {
      expect(card.question.length).toBeGreaterThan(10)
      expect(card.answer).toContain('Mark 6:')
    }
  })

  it('preserves the requested Mark-only distinctions', () => {
    const text = MARK_6_FLASHCARDS.map(card => `${card.question} ${card.answer}`).join(' ')
    expect(text).toContain('Herod’s birthday—not the daughter’s')
    expect(text).toContain('Mark does not name her in this Gospel')
    expect(text).toContain('About five thousand men')
    expect(text).toContain('Peter walking on the water')
    expect(text).toContain('Do not import that detail into a Mark-only retelling')
  })
})
