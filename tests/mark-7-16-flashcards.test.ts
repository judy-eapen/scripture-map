import { describe, expect, it } from 'vitest'
import { getMarkFlashcards, getMarkFlashcardScenes } from '../data/mark-flashcards'

const chapters = Array.from({ length: 10 }, (_, index) => index + 7)

describe('Mark 7–16 comprehensive flashcard decks', () => {
  it.each(chapters)('covers every reviewed scene of Mark %i with facts and understanding', chapter => {
    const cards = getMarkFlashcards(chapter)
    for (const scene of getMarkFlashcardScenes(chapter)) {
      expect(cards.some(card => card.scene === scene && card.kind === 'fact')).toBe(true)
      expect(cards.some(card => card.scene === scene && card.kind === 'understanding')).toBe(true)
    }
  })

  it.each(chapters)('has unique IDs, scene filters, references, and understanding cards for Mark %i', chapter => {
    const cards = getMarkFlashcards(chapter)
    expect(new Set(cards.map(card => card.id)).size).toBe(cards.length)
    expect(new Set(cards.map(card => card.question)).size).toBe(cards.length)
    expect(getMarkFlashcardScenes(chapter).length).toBeGreaterThanOrEqual(3)
    expect(cards.filter(card => card.kind === 'understanding').length).toBeGreaterThanOrEqual(3)
    for (const card of cards) {
      expect(card.passage).toMatch(new RegExp(`^Mark ${chapter}(?::|$)`))
      expect(card.answer).toContain(`Mark ${chapter}`)
      expect(card.question.length).toBeGreaterThan(20)
    }
  })

  it('preserves chapter-specific careful teaching notes', () => {
    const all = chapters.flatMap(getMarkFlashcards).map(card => card.answer).join(' ')
    expect(all).toContain('Corban')
    expect(all).toContain('not whether ordinary handwashing')
    expect(all).toContain('Mark does not name the mountain')
    expect(all).toContain('must not be turned into contempt for Jewish people as a whole')
    expect(all).toContain('The earliest surviving Greek manuscripts end at 16:8')
    expect(all).toContain('do not command believers to manufacture danger or test God')
  })

  it('contains focused recall prompts for dense quiz passages', () => {
    const cards = chapters.flatMap(getMarkFlashcards)
    const byQuestion = (text: string) => cards.find(card => card.question.includes(text))?.answer
    expect(byQuestion('numbers distinguish Mark 8')).toContain('seven loaves')
    expect(byQuestion('Who went up the high mountain')).toContain('Peter, James, and John')
    expect(byQuestion('sequence did Jesus predict')).toContain('rise on the third day')
    expect(byQuestion('What marked Peter’s three denials')).toContain('rooster crowed a second time')
    expect(byQuestion('Which women brought spices')).toContain('Mary Magdalene')
  })
})
