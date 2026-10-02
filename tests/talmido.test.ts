import { describe, expect, it } from 'vitest'
import { existsSync, readFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { resolve } from 'node:path'
import curriculum from '../data/talmido-grade-6.json'
import { restoreTalmidoProgress, talmidoPageNumber, talmidoPageImage } from '../lib/talmido'

describe('Talmido curriculum import', () => {
  it('preserves the supplied PDF and all 101 original page assets', () => {
    const pdf = readFileSync(resolve('public/talmido/grade-6/curriculum.pdf'))
    expect(createHash('sha256').update(pdf).digest('hex')).toBe(curriculum.sha256)
    expect(curriculum.pages).toHaveLength(101)
    for (const page of curriculum.pages) {
      expect(existsSync(resolve(`public${talmidoPageImage(page.number)}`))).toBe(true)
      expect(page.text.trim().length).toBeGreaterThan(20)
    }
  })
  it('covers all 16 lessons without gaps and maps printed pages correctly', () => {
    expect(curriculum.lessons).toHaveLength(16)
    expect(curriculum.lessons[0].startPage).toBe(3)
    expect(curriculum.lessons[15].endPage).toBe(101)
    curriculum.lessons.forEach((lesson,i) => {
      if (i) expect(lesson.startPage).toBe(curriculum.lessons[i-1].endPage+1)
      expect(curriculum.pages[lesson.startPage-1].text).toContain(`Lesson ${lesson.number}:`)
      expect(lesson.goals.length).toBeGreaterThan(0)
      expect(lesson.reflectionQuestions.length).toBeGreaterThan(0)
      const normalize=(s:string)=>s.replace(/\s+/g,' ').trim()
      const original=normalize(curriculum.pages[lesson.reflectionPage-1].text)
      for (const question of lesson.reflectionQuestions) expect(original).toContain(normalize(question))
    })
    expect(curriculum.focusLessons).toEqual([6,7,8,9,10])
    expect(curriculum.lessons.slice(5,10).map(l=>[l.startPage-1,l.endPage-1])).toEqual([[34,37],[38,46],[47,50],[51,55],[56,60]])
  })
  it('keeps reader pages inside the selected lesson', () => {
    const lesson=curriculum.lessons[5]
    expect(talmidoPageNumber(undefined,lesson)).toBe(35)
    expect(talmidoPageNumber('oops',lesson)).toBe(35)
    expect(talmidoPageNumber('36.5',lesson)).toBe(35)
    expect(talmidoPageNumber('1',lesson)).toBe(35)
    expect(talmidoPageNumber('999',lesson)).toBe(38)
    expect(talmidoPageNumber('36',lesson)).toBe(36)
  })
  it('validates saved lesson progress without mixing quiz state', () => {
    expect(restoreTalmidoProgress(null)).toEqual([])
    expect(restoreTalmidoProgress('[6,7,6]')).toEqual([6,7])
    for (const bad of ['{}','[17]','[0]','["6"]','oops']) expect(()=>restoreTalmidoProgress(bad)).toThrow()
  })
})
