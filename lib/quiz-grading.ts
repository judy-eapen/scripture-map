import type { QuizQuestion } from './types'

/**
 * Normalize free-text answers so that spelling of transliterated names is
 * forgiving: the RSV writes Ab'ishag, Adoni'jah, Benai'ah — users type
 * Abishag, Adonijah, Benaiah. Case, punctuation, diacritics, articles and
 * surrounding whitespace are ignored.
 */
export function normalizeAnswer(input: string): string {
  return input
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')       // diacritics
    .toLowerCase()
    .replace(/[’'`´"“”]/g, '')             // apostrophes / quotes (Ab'ishag → abishag)
    .replace(/[^a-z0-9\s-]/g, ' ')         // other punctuation → space
    .replace(/-/g, ' ')
    .replace(/\b(the|a|an)\b/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export function acceptedSet(q: QuizQuestion): string[] {
  const all = [q.answer ?? '', ...(q.accepted_answers ?? [])]
  return all.map(normalizeAnswer).filter(Boolean)
}

/** Grade a typed answer for fill_blank / one_word questions. */
export function gradeText(q: QuizQuestion, input: string): boolean {
  const given = normalizeAnswer(input)
  if (!given) return false
  return acceptedSet(q).includes(given)
}

export function gradeTrueFalse(q: QuizQuestion, input: boolean): boolean {
  return (q.answer ?? '').toLowerCase() === (input ? 'true' : 'false')
}

export function gradeMultipleChoice(q: QuizQuestion, index: number): boolean {
  return q.correct_index === index
}

/** Human-readable canonical answer for the reveal screen. */
export function displayAnswer(q: QuizQuestion): string {
  switch (q.type) {
    case 'multiple_choice':
      return q.options?.[q.correct_index ?? -1] ?? ''
    case 'true_false':
      return q.answer === 'true' ? 'True' : 'False'
    default:
      return q.answer ?? ''
  }
}

export const DIFFICULTY_LABEL: Record<1 | 2 | 3, string> = {
  1: 'Easy',
  2: 'Medium',
  3: 'Hard',
}

export const TYPE_LABEL: Record<QuizQuestion['type'], string> = {
  multiple_choice: 'Multiple choice',
  fill_blank: 'Fill in the blank',
  one_word: 'Short answer',
  true_false: 'True or false',
}

/** Fisher–Yates shuffle (pure). */
export function shuffle<T>(arr: readonly T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/**
 * Build a round: questions at the chosen difficulty (or all, when mixed) that
 * have not been seen this session, balanced across question types so every
 * round mixes multiple choice, fill-in-the-blank, one-word and true/false
 * whenever the pool allows. Capped at `size`. Mixed rounds are ordered
 * easy → hard so the round itself ramps up.
 */
export function buildRound(
  pool: QuizQuestion[],
  difficulty: 1 | 2 | 3 | 'mixed',
  seenIds: Set<string>,
  size = 10,
  types: QuizQuestion['type'][] | 'all' = 'all'
): QuizQuestion[] {
  const eligible = pool.filter(
    q =>
      !seenIds.has(q.id) &&
      (difficulty === 'mixed' || q.difficulty === difficulty) &&
      (types === 'all' || types.includes(q.type))
  )

  // Group by type, shuffle each group, then deal round-robin so types interleave.
  const groups = new Map<QuizQuestion['type'], QuizQuestion[]>()
  for (const q of shuffle(eligible)) {
    const g = groups.get(q.type) ?? []
    g.push(q)
    groups.set(q.type, g)
  }
  const order = shuffle([...groups.keys()])
  const picked: QuizQuestion[] = []
  while (picked.length < size && order.some(t => (groups.get(t)?.length ?? 0) > 0)) {
    for (const t of order) {
      const g = groups.get(t)
      if (g && g.length && picked.length < size) picked.push(g.shift()!)
    }
  }

  return difficulty === 'mixed' ? picked.sort((a, b) => a.difficulty - b.difficulty) : picked
}

/** How many questions remain unseen for a level (and optional type filter). */
export function countRemaining(
  pool: QuizQuestion[],
  difficulty: 1 | 2 | 3 | 'mixed',
  seenIds: Set<string>,
  types: QuizQuestion['type'][] | 'all' = 'all'
): { remaining: number; total: number } {
  const inScope = pool.filter(
    q => (difficulty === 'mixed' || q.difficulty === difficulty) && (types === 'all' || types.includes(q.type))
  )
  return { remaining: inScope.filter(q => !seenIds.has(q.id)).length, total: inScope.length }
}
