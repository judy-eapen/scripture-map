import type { QuizQuestion, QuizType } from './types'
import { shuffle } from './quiz-grading'

/** Per-question history for one learner (from the database when signed in, from the tab when not). */
export type QuestionStat = {
  seen: number
  correct: number
  wrong: number
  lastCorrect: boolean | null
  lastAt: number // epoch ms
}
export type StatsMap = Record<string, QuestionStat>

export const SESSION_SIZE = 25
export const QUICK_SIZE = 10

export type SessionMode = 'session' | 'quick' | 'drill'
export type SessionOptions = {
  size: number
  /** 'adaptive' ramps Easy→Hard and shifts harder as Easy is mastered. */
  difficulty: 'adaptive' | 'mixed' | 1 | 2 | 3
  types: QuizType[] | 'all'
}

export const emptyStat = (): QuestionStat => ({ seen: 0, correct: 0, wrong: 0, lastCorrect: null, lastAt: 0 })

export function applyAnswer(stats: StatsMap, questionId: string, correct: boolean, at = Date.now()): StatsMap {
  const s = { ...(stats[questionId] ?? emptyStat()) }
  s.seen += 1
  if (correct) s.correct += 1
  else s.wrong += 1
  s.lastCorrect = correct
  s.lastAt = at
  return { ...stats, [questionId]: s }
}

/** 0 = never seen (highest priority), 1 = last answer wrong, 2 = last answer right. */
export function priorityRank(stat: QuestionStat | undefined): 0 | 1 | 2 {
  if (!stat || stat.seen === 0) return 0
  return stat.lastCorrect === false ? 1 : 2
}

export type ChapterMastery = {
  total: number
  attempted: number
  mastered: number // answered correctly at least once
  toReview: number // last answer wrong
  correctAnswers: number
  wrongAnswers: number
  byLevel: Record<1 | 2 | 3, { total: number; mastered: number }>
}

export function computeMastery(pool: QuizQuestion[], stats: StatsMap): ChapterMastery {
  const m: ChapterMastery = {
    total: pool.length, attempted: 0, mastered: 0, toReview: 0, correctAnswers: 0, wrongAnswers: 0,
    byLevel: { 1: { total: 0, mastered: 0 }, 2: { total: 0, mastered: 0 }, 3: { total: 0, mastered: 0 } },
  }
  for (const q of pool) {
    const s = stats[q.id]
    m.byLevel[q.difficulty].total += 1
    if (!s || s.seen === 0) continue
    m.attempted += 1
    m.correctAnswers += s.correct
    m.wrongAnswers += s.wrong
    if (s.correct > 0) { m.mastered += 1; m.byLevel[q.difficulty].mastered += 1 }
    if (s.lastCorrect === false) m.toReview += 1
  }
  return m
}

/** Level mix for an adaptive session, shifting harder as Easy is mastered. */
export function levelWeights(mastery: ChapterMastery): [number, number, number] {
  const e = mastery.byLevel[1]
  const m1 = e.total ? e.mastered / e.total : 0
  if (m1 < 0.5) return [0.4, 0.4, 0.2]
  if (m1 < 0.9) return [0.3, 0.45, 0.25]
  return [0.15, 0.45, 0.4]
}

function sortByPriority(qs: QuizQuestion[], stats: StatsMap): QuizQuestion[] {
  // Shuffle first so ties are random, then stable-sort by rank, fewer correct, older.
  return shuffle(qs).sort((a, b) => {
    const sa = stats[a.id], sb = stats[b.id]
    const r = priorityRank(sa) - priorityRank(sb)
    if (r) return r
    const c = (sa?.correct ?? 0) - (sb?.correct ?? 0)
    if (c) return c
    return (sa?.lastAt ?? 0) - (sb?.lastAt ?? 0)
  })
}

/** Deal round-robin across question types from one list (already in priority order). */
function dealRoundRobin(qs: QuizQuestion[], n: number): QuizQuestion[] {
  const groups = new Map<QuizType, QuizQuestion[]>()
  for (const q of qs) (groups.get(q.type) ?? groups.set(q.type, []).get(q.type)!).push(q)
  const order = shuffle([...groups.keys()])
  const out: QuizQuestion[] = []
  while (out.length < n && order.some(t => groups.get(t)!.length)) {
    for (const t of order) {
      const g = groups.get(t)!
      if (g.length && out.length < n) out.push(g.shift()!)
    }
  }
  return out
}

/**
 * Take up to n questions: unseen first, then last-wrong, then last-right.
 * Question types are balanced *within* each of those tiers, so balance never
 * pulls in an already-mastered question ahead of one never seen or missed.
 */
function dealBalanced(qs: QuizQuestion[], n: number, stats: StatsMap): QuizQuestion[] {
  const out: QuizQuestion[] = []
  for (const tier of [0, 1, 2] as const) {
    if (out.length >= n) break
    const inTier = sortByPriority(qs.filter(q => priorityRank(stats[q.id]) === tier), stats)
    out.push(...dealRoundRobin(inTier, n - out.length))
  }
  return out
}

/**
 * Pick the next session. Never-seen questions come first, then ones answered
 * wrong last time, then ones already right (least-practised first). Within a
 * tier the four question types are balanced. Adaptive sessions ramp Easy →
 * Medium → Hard with a mix that shifts harder as Easy is mastered.
 */
export function buildSession(pool: QuizQuestion[], stats: StatsMap, opts: SessionOptions): QuizQuestion[] {
  const inScope = pool.filter(q => opts.types === 'all' || opts.types.includes(q.type))
  if (opts.difficulty === 1 || opts.difficulty === 2 || opts.difficulty === 3) {
    return dealBalanced(inScope.filter(q => q.difficulty === opts.difficulty), opts.size, stats)
  }
  if (opts.difficulty === 'mixed') {
    return dealBalanced(inScope, opts.size, stats).sort((a, b) => a.difficulty - b.difficulty)
  }

  // adaptive: per-level targets, satisfied from UNSEEN questions only …
  const weights = levelWeights(computeMastery(inScope, stats))
  const targets: Record<1 | 2 | 3, number> = {
    1: Math.round(opts.size * weights[0]),
    2: Math.round(opts.size * weights[1]),
    3: 0,
  }
  targets[3] = Math.max(0, opts.size - targets[1] - targets[2])

  const picked: QuizQuestion[] = []
  const taken = new Set<string>()
  for (const lvl of [1, 2, 3] as const) {
    const unseen = inScope.filter(q => q.difficulty === lvl && priorityRank(stats[q.id]) === 0)
    const chosen = dealBalanced(unseen, targets[lvl], stats)
    chosen.forEach(q => taken.add(q.id))
    picked.push(...chosen)
  }
  // … then any shortfall from whatever is left, best priority first (unseen at other levels, then wrong, then right)
  if (picked.length < opts.size) {
    picked.push(...dealBalanced(inScope.filter(q => !taken.has(q.id)), opts.size - picked.length, stats))
  }
  return picked.sort((a, b) => a.difficulty - b.difficulty)
}

export function verseHref(bookSlug: string, chapterNumber: number, verseNumber: number | null): string {
  return `/study/${bookSlug}/${chapterNumber}${verseNumber ? `#v${verseNumber}` : ''}`
}
