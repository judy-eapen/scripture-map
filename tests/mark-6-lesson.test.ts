import { describe, expect, it } from 'vitest'
import { MARK_6_LESSON } from '../data/mark-6-lesson'
import { markSlideDeck } from '../lib/mark-slides'
import { MARK_6_PLACES, straightLineKm } from '../lib/mark-6-geography'

describe('Mark 6 guided lesson', () => {
  it('is available through the existing Mark lesson entry point', () => {
    const deck = markSlideDeck(6)
    expect(deck?.kind).toBe('lesson')
    expect(deck?.pages).toBe(MARK_6_LESSON.length)
  })

  it('covers every scene boundary in the chapter', () => {
    const passages = MARK_6_LESSON.map(slide => slide.passage).join(' ')
    for (const range of ['Mark 6:1–6', 'Mark 6:7–13', 'Mark 6:14–29', 'Mark 6:30–34', 'Mark 6:35–44', 'Mark 6:45–52', 'Mark 6:53–56']) {
      expect(passages).toContain(range)
    }
  })

  it('preserves key quiz details without turning inferences into facts', () => {
    const content = JSON.stringify(MARK_6_LESSON)
    expect(content).toContain('Herod’s birthday feast')
    expect(content).toContain('five thousand men')
    expect(content).toContain('Mark does not say they possessed that amount')
    expect(content).toContain('The text does not say their offense came from one particular disagreement')
    expect(content).not.toContain('daughter’s birthday')
  })

  it('labels every optional connection by evidence type', () => {
    const allowed = new Set(['Parallel Gospel account', 'Scripture cross-reference', 'Old Testament background', 'Thematic parallel', 'Orthodox study note', 'Text note'])
    expect(MARK_6_LESSON.flatMap(slide => slide.connections)).not.toHaveLength(0)
    for (const connection of MARK_6_LESSON.flatMap(slide => slide.connections)) expect(allowed.has(connection.label)).toBe(true)
  })

  it('labels every generated scene as an imagined reconstruction with useful alt text', () => {
    const images = MARK_6_LESSON.flatMap(slide => slide.image ? [slide.image] : [])
    expect(images).toHaveLength(5)
    for (const image of images) {
      expect(image.alt.length).toBeGreaterThan(40)
      expect(image.caption.toLowerCase()).toContain('imagined historical reconstruction')
    }
  })

  it('uses straight-line geography only as approximate scale', () => {
    expect(straightLineKm(MARK_6_PLACES.nazareth, MARK_6_PLACES.gennesaret)).toBeCloseTo(26.3, 0)
    expect(straightLineKm(MARK_6_PLACES.bethsaidaCandidateArea, MARK_6_PLACES.gennesaret)).toBeCloseTo(12.2, 0)
  })
})
