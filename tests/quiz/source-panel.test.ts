import fs from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'

describe('quiz source panel', () => {
  it('starts every supporting reference collapsed', () => {
    const component = fs.readFileSync(path.resolve('components/QuestionSource.tsx'), 'utf8')
    expect(component).not.toMatch(/<details[^>]*\sopen(?:=|\s|>)/)
  })
})
