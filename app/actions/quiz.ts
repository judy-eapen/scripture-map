'use server'

import { createClient } from '@/lib/supabase/server'
import type { StatsMap } from '@/lib/quiz-session'
import { emptyStat, type SessionMode } from '@/lib/quiz-session'

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
const isUuid = (value: string) => UUID.test(value)
export type QuizScopeKind = 'chapter' | 'collection'
const scopeColumn = (kind: QuizScopeKind) => kind === 'collection' ? 'collection_id' : 'chapter_id'

export type OpenSession = {
  id: string
  chapterId: string
  mode: SessionMode
  questionIds: string[]
  position: number
  correctCount: number
  scopeKind: QuizScopeKind
}

export type ChapterProgress = {
  chapterId: string
  attempted: number
  mastered: number
  toReview: number
  correctAnswers: number
  wrongAnswers: number
  openSession: OpenSession | null
}

/** Per-question history for the signed-in user in one chapter. Empty when signed out. */
export async function getChapterStats(chapterId: string, scopeKind: QuizScopeKind = 'chapter'): Promise<{ stats: StatsMap; openSession: OpenSession | null }> {
  if (!isUuid(chapterId)) return { stats: {}, openSession: null }
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { stats: {}, openSession: null }

  const [{ data: answers }, { data: sessions }] = await Promise.all([
    supabase.from('quiz_answers').select('question_id, correct, answered_at').eq('user_id', user.id).eq(scopeColumn(scopeKind), chapterId).order('answered_at'),
    supabase.from('quiz_sessions').select('id, chapter_id, collection_id, mode, question_ids, position, correct_count').eq('user_id', user.id).eq(scopeColumn(scopeKind), chapterId).is('completed_at', null).order('started_at', { ascending: false }).limit(1),
  ])

  const stats: StatsMap = {}
  for (const a of answers ?? []) {
    const s = stats[a.question_id] ?? (stats[a.question_id] = emptyStat())
    s.seen += 1
    if (a.correct) s.correct += 1; else s.wrong += 1
    s.lastCorrect = a.correct
    s.lastAt = new Date(a.answered_at).getTime()
  }
  const o = sessions?.[0]
  const openSession: OpenSession | null = o
    ? { id: o.id, chapterId: o.chapter_id ?? o.collection_id, mode: o.mode as SessionMode, questionIds: o.question_ids, position: o.position, correctCount: o.correct_count, scopeKind }
    : null
  return { stats, openSession }
}

/** Progress for every chapter the user has touched (for the chapter list). */
export async function getQuizProgress(): Promise<Record<string, ChapterProgress>> {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return {}

  const [{ data: answers }, { data: sessions }, retiredResult] = await Promise.all([
    supabase.from('quiz_answers').select('question_id, chapter_id, collection_id, correct, answered_at').eq('user_id', user.id).order('answered_at'),
    supabase.from('quiz_sessions').select('id, chapter_id, collection_id, mode, question_ids, position, correct_count').eq('user_id', user.id).is('completed_at', null),
    // TODO(after migration 013): retired questions no longer count toward mastery. Tolerates the column not existing yet.
    supabase.from('quiz_questions').select('id').not('retired_at', 'is', null),
  ])
  const retired = new Set(retiredResult.error ? [] : (retiredResult.data ?? []).map(r => r.id))

  const perQ = new Map<string, { chapter: string; correct: number; wrong: number; last: boolean }>()
  for (const a of answers ?? []) {
    const ownerId = a.chapter_id ?? a.collection_id
    if (!ownerId || retired.has(a.question_id)) continue
    const s = perQ.get(a.question_id) ?? { chapter: ownerId, correct: 0, wrong: 0, last: a.correct }
    if (a.correct) s.correct += 1; else s.wrong += 1
    s.last = a.correct
    perQ.set(a.question_id, s)
  }
  const out: Record<string, ChapterProgress> = {}
  const ensure = (chapterId: string) =>
    out[chapterId] ?? (out[chapterId] = { chapterId, attempted: 0, mastered: 0, toReview: 0, correctAnswers: 0, wrongAnswers: 0, openSession: null })
  for (const s of perQ.values()) {
    const c = ensure(s.chapter)
    c.attempted += 1
    c.correctAnswers += s.correct
    c.wrongAnswers += s.wrong
    if (s.last) c.mastered += 1
    else c.toReview += 1
  }
  for (const o of sessions ?? []) {
    const ownerId = o.chapter_id ?? o.collection_id
    if (!ownerId) continue
    const scopeKind: QuizScopeKind = o.collection_id ? 'collection' : 'chapter'
    ensure(ownerId).openSession = { id: o.id, chapterId: ownerId, mode: o.mode as SessionMode, questionIds: o.question_ids, position: o.position, correctCount: o.correct_count, scopeKind }
  }
  return out
}

/** Store a freshly built session so it can be resumed. Returns null when signed out. */
export async function createSession(chapterId: string, mode: SessionMode, questionIds: string[], scopeKind: QuizScopeKind = 'chapter'): Promise<string | null> {
  if (!isUuid(chapterId)) return null
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null
  // one open session per chapter: abandon older ones
  await supabase.from('quiz_sessions').update({ completed_at: new Date().toISOString() }).eq('user_id', user.id).eq(scopeColumn(scopeKind), chapterId).is('completed_at', null)
  const owner = scopeKind === 'collection' ? { collection_id: chapterId, chapter_id: null } : { chapter_id: chapterId, collection_id: null }
  const { data, error } = await supabase
    .from('quiz_sessions')
    .insert({ user_id: user.id, ...owner, mode, question_ids: questionIds })
    .select('id')
    .single()
  if (error) return null
  return data.id
}

export async function recordAnswer(params: {
  sessionId: string | null
  chapterId: string
  questionId: string
  correct: boolean
  givenAnswer: string
  position: number // answered count after this answer
  correctCount: number
  completed: boolean
  scopeKind?: QuizScopeKind
}): Promise<void> {
  if (!isUuid(params.chapterId) || !isUuid(params.questionId)) return
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return
  const scopeKind = params.scopeKind ?? 'chapter'
  const owner = scopeKind === 'collection' ? { collection_id: params.chapterId, chapter_id: null } : { chapter_id: params.chapterId, collection_id: null }
  await supabase.from('quiz_answers').insert({
    user_id: user.id, ...owner, question_id: params.questionId, session_id: params.sessionId,
    correct: params.correct, given_answer: params.givenAnswer.slice(0, 200),
  })
  if (params.sessionId) {
    await supabase.from('quiz_sessions').update({
      position: params.position, correct_count: params.correctCount,
      ...(params.completed ? { completed_at: new Date().toISOString() } : {}),
    }).eq('id', params.sessionId).eq('user_id', user.id)
  }
}

export async function abandonSession(sessionId: string): Promise<void> {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return
  await supabase.from('quiz_sessions').update({ completed_at: new Date().toISOString() }).eq('id', sessionId).eq('user_id', user.id)
}

/** Durable resume cursor: answer rows are authoritative; quiz_sessions.position is only display metadata. */
export async function getSessionAnsweredQuestionIds(sessionId: string): Promise<string[]> {
  if (!isUuid(sessionId)) return []
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return []
  const { data, error } = await supabase
    .from('quiz_answers')
    .select('question_id')
    .eq('user_id', user.id)
    .eq('session_id', sessionId)
  if (error) return []
  return [...new Set((data ?? []).map(row => row.question_id))]
}

/** Wipe all answers + sessions for one chapter (user asked to start over). */
export async function resetChapterProgress(chapterId: string, scopeKind: QuizScopeKind = 'chapter'): Promise<void> {
  if (!isUuid(chapterId)) return
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return
  await Promise.all([
    supabase.from('quiz_answers').delete().eq('user_id', user.id).eq(scopeColumn(scopeKind), chapterId),
    supabase.from('quiz_sessions').delete().eq('user_id', user.id).eq(scopeColumn(scopeKind), chapterId),
  ])
}
