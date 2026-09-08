import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import UnsupportedQuizQuestion from '../../components/UnsupportedQuizQuestion'

describe('unsupported quiz question fallback', () => {
  it('keeps the question visible and asks the learner to reload', () => {
    const html = renderToStaticMarkup(createElement(UnsupportedQuizQuestion, { question: 'A question from a newer quiz format' }))
    expect(html).toContain('A question from a newer quiz format')
    expect(html).toContain('Reload to continue')
  })
})
