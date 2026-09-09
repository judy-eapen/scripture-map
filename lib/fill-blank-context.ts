import type { QuizQuestion } from './types'

export function maskContextAnswers(text: string, question: QuizQuestion) {
  const answers = [question.answer, ...(question.accepted_answers ?? [])]
    .filter((answer): answer is string => !!answer?.trim())
    .sort((a, b) => b.length - a.length)
  return answers.reduce((masked, answer) => {
    const escaped = answer.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    return masked.replace(new RegExp(escaped, 'gi'), '▮▮▮')
  }, text)
}
