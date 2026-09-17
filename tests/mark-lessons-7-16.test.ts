import { describe, expect, it } from 'vitest'
import { MARK_LESSONS_7_16 } from '../data/mark-lessons-7-16'
import { MARK_LESSON_GEOGRAPHY } from '../lib/mark-lesson-geography'
import { markSlideDeck } from '../lib/mark-slides'

const expectedRanges: Record<number, string[]> = {
  7: ['1–23', '24–30', '31–37'],
  8: ['1–10', '11–21', '22–26', '27–38'],
  9: ['1–13', '14–29', '30–37', '38–50'],
  10: ['1–16', '17–31', '32–45', '46–52'],
  11: ['1–11', '12–26', '27–33'],
  12: ['1–12', '13–27', '28–37', '38–44'],
  13: ['1–13', '14–23', '24–31', '32–37'],
  14: ['1–11', '12–31', '32–42', '43–52', '53–72'],
  15: ['1–15', '16–32', '33–41', '42–47'],
  16: ['1–8', '9–14', '15–20'],
}

describe('Mark 7–16 guided lessons', () => {
  it('registers every requested chapter as a guided lesson', () => {
    for (let chapter = 7; chapter <= 16; chapter += 1) {
      const deck = markSlideDeck(chapter)
      expect(deck?.kind).toBe('lesson')
      expect(deck?.pages).toBe(MARK_LESSONS_7_16[chapter as keyof typeof MARK_LESSONS_7_16].length)
    }
  })

  it('uses chapter-appropriate scene counts and covers every narrative range', () => {
    for (const [chapterText, ranges] of Object.entries(expectedRanges)) {
      const chapter = Number(chapterText)
      const slides = MARK_LESSONS_7_16[chapter as keyof typeof MARK_LESSONS_7_16]
      expect(slides.length).toBeGreaterThanOrEqual(5)
      const passages = slides.map(slide => slide.passage).join(' ')
      for (const range of ranges) expect(passages).toContain(range)
    }
    expect(MARK_LESSONS_7_16[14]).toHaveLength(7)
    expect(MARK_LESSONS_7_16[15]).toHaveLength(6)
  })

  it('gives every chapter two labeled historical reconstructions', () => {
    for (const slides of Object.values(MARK_LESSONS_7_16)) {
      const images = slides.flatMap(slide => slide.image ? [slide.image] : [])
      expect(images).toHaveLength(2)
      for (const item of images) {
        expect(item.alt).toContain('Imagined historical reconstruction')
        expect(item.caption).toContain('Imagined historical reconstruction')
      }
    }
  })

  it('provides chapter-specific geography with explicit uncertainty', () => {
    for (let chapter = 7; chapter <= 16; chapter += 1) {
      const geography = MARK_LESSON_GEOGRAPHY[chapter]
      expect(geography.places.length).toBeGreaterThan(0)
      expect(geography.unknown.length).toBeGreaterThan(20)
      expect(geography.scale.toLowerCase()).toMatch(/not|without|approximate|avoids|cannot/)
    }
  })

  it('preserves critical textual and pastoral cautions', () => {
    const content = JSON.stringify(MARK_LESSONS_7_16)
    expect(content).toContain('ritual handwashing, not ordinary hygiene')
    expect(content).toContain('second feeding')
    expect(content).toContain('does not name the mountain')
    expect(content).toContain('wrong to blame Jewish people collectively')
    expect(content).toContain('earliest surviving Greek manuscripts end at 16:8')
    expect(content).toContain('Deliberate snake-handling is not required')
  })
})
