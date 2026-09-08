import { describe, expect, it } from 'vitest'
import { getBookGuide } from '../data/books'

describe('getBookGuide', () => {
  it('returns a useful fallback for an unknown database book', () => {
    const guide = getBookGuide('acts', 'Acts', 28)
    expect(guide).toMatchObject({ slug: 'acts', title: 'Acts', shortTitle: 'Acts' })
    expect(guide.tagline).toBe('28 chapters available to read and study.')
    expect(guide.guide).toEqual([])
  })
})
