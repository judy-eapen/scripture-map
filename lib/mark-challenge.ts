import type { QuizQuestion } from './types'
export const CHAPTERS = [6, 7, 8, 9, 10] as const
export const POINTS = [100, 200, 300, 400, 500] as const
export type ChallengeQuestion = QuizQuestion & {
  chapter: typeof CHAPTERS[number]
  points: typeof POINTS[number]
  source: { kind: 'user-provided'; conversationId: string; image: string; item: string }
    | { kind: 'user-requested'; reference: string; item: string; authorization: string }
  // Reserved extension point; no bonus cards are enabled in this release.
  special?: { kind: 'double-points' | 'second-chance' | 'grace' }
}
export type Attempt = { questionId: string; correct: boolean; at: number }
export type ChallengeState = { version: 1; attempts: Attempt[] }
export const emptyChallenge = (): ChallengeState => ({ version: 1, attempts: [] })
export function availableQuestions(bank: ChallengeQuestion[], state: ChallengeState, chapter: number, points: number) {
  const used = new Set(state.attempts.map(a => a.questionId))
  return bank.filter(q => q.chapter === chapter && q.points === points && !used.has(q.id))
}
export function recordAnswer(state: ChallengeState, bank: ChallengeQuestion[], id: string, correct: boolean, at = Date.now()): ChallengeState {
  if (!bank.some(q => q.id === id) || state.attempts.some(a => a.questionId === id)) return state
  return { version: 1, attempts: [...state.attempts, { questionId: id, correct, at }] }
}
export function challengeTotals(bank: ChallengeQuestion[], state: ChallengeState) {
  let score = 0, streak = 0, bestStreak = 0, answered = 0
  const seen = new Set<string>()
  for (const a of state.attempts) {
    const q = bank.find(q => q.id === a.questionId)
    if (!q || seen.has(q.id)) continue
    seen.add(q.id); answered++
    if (a.correct) { score += q.points; streak++; bestStreak = Math.max(bestStreak, streak) }
    else streak = 0
  }
  return { score, streak, bestStreak, answered }
}
export function restoreChallenge(raw: string | null, bank: ChallengeQuestion[]): ChallengeState {
  if (!raw) return emptyChallenge()
  const parsed: unknown = JSON.parse(raw)
  if (!parsed || typeof parsed !== 'object' || !('version' in parsed) || parsed.version !== 1 || !('attempts' in parsed) || !Array.isArray(parsed.attempts)) throw new Error('Invalid saved round')
  return parsed.attempts.reduce((state: ChallengeState, a: unknown) => {
    if (!a || typeof a !== 'object' || !('questionId' in a) || typeof a.questionId !== 'string' || !('correct' in a) || typeof a.correct !== 'boolean' || !('at' in a) || typeof a.at !== 'number' || !Number.isFinite(a.at)) throw new Error('Invalid saved answer')
    return recordAnswer(state, bank, a.questionId, a.correct, a.at)
  }, emptyChallenge())
}
