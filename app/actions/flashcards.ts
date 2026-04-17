'use server'

import { createClient } from '@/lib/supabase/server'
import { sm2Update, type SM2Quality } from '@/lib/sm2'

export type FlashcardWithState = {
  id: string
  deck: string
  question: string
  answer: string
  hint: string | null
  interval: number
  ease_factor: number
  repetitions: number
  due_date: string
}

export type DeckSummary = {
  deck: string
  label: string
  total: number
  due: number
}

const DECK_LABELS: Record<string, string> = {
  'kings-north': 'Kings of Israel (North)',
  'kings-south': 'Kings of Judah (South)',
  'places': 'Places & Geography',
  'people': 'People & Prophets',
  'themes': 'Theology & Themes',
}

export async function getDeckSummaries(): Promise<DeckSummary[]> {
  const supabase = await createClient()
  const today = new Date().toISOString().slice(0, 10)

  const { data: allCards } = await supabase
    .from('flashcards')
    .select('id, deck')

  const { data: { user } } = await supabase.auth.getUser()
  if (!allCards) return []

  const { data: reviews } = user
    ? await supabase
        .from('flashcard_reviews')
        .select('flashcard_id, due_date')
        .eq('user_id', user.id)
    : { data: [] }

  const reviewMap = new Map((reviews ?? []).map(r => [r.flashcard_id, r.due_date]))

  const deckMap = new Map<string, { total: number; due: number }>()

  for (const card of allCards) {
    if (!deckMap.has(card.deck)) deckMap.set(card.deck, { total: 0, due: 0 })
    const entry = deckMap.get(card.deck)!
    entry.total++
    const dueDate = reviewMap.get(card.id) ?? today
    if (dueDate <= today) entry.due++
  }

  return Object.keys(DECK_LABELS).map(deck => ({
    deck,
    label: DECK_LABELS[deck],
    total: deckMap.get(deck)?.total ?? 0,
    due: deckMap.get(deck)?.due ?? 0,
  }))
}

export async function getDueFlashcards(deck?: string): Promise<FlashcardWithState[]> {
  const supabase = await createClient()
  const today = new Date().toISOString().slice(0, 10)

  let query = supabase.from('flashcards').select('id, deck, question, answer, hint')
  if (deck) query = query.eq('deck', deck)
  const { data: cards } = await query

  if (!cards || cards.length === 0) return []

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return cards.map(c => ({
      ...c,
      interval: 1,
      ease_factor: 2.5,
      repetitions: 0,
      due_date: today,
    }))
  }

  const { data: reviews } = await supabase
    .from('flashcard_reviews')
    .select('flashcard_id, interval, ease_factor, repetitions, due_date')
    .eq('user_id', user.id)
    .in('flashcard_id', cards.map(c => c.id))

  const reviewMap = new Map((reviews ?? []).map(r => [r.flashcard_id, r]))

  const due: FlashcardWithState[] = []
  for (const card of cards) {
    const review = reviewMap.get(card.id)
    const dueDate = review?.due_date ?? today
    if (dueDate <= today) {
      due.push({
        ...card,
        interval: review?.interval ?? 1,
        ease_factor: review?.ease_factor ?? 2.5,
        repetitions: review?.repetitions ?? 0,
        due_date: dueDate,
      })
    }
  }

  return due.sort(() => Math.random() - 0.5)
}

export async function reviewFlashcard(flashcardId: string, quality: SM2Quality): Promise<void> {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return

  const { data: existing } = await supabase
    .from('flashcard_reviews')
    .select('interval, ease_factor, repetitions, due_date')
    .eq('user_id', user.id)
    .eq('flashcard_id', flashcardId)
    .single()

  const currentState = existing ?? {
    interval: 1,
    ease_factor: 2.5,
    repetitions: 0,
    due_date: new Date().toISOString().slice(0, 10),
  }

  const next = sm2Update(currentState, quality)

  await supabase.from('flashcard_reviews').upsert({
    user_id: user.id,
    flashcard_id: flashcardId,
    ...next,
    last_reviewed: new Date().toISOString(),
  }, { onConflict: 'user_id,flashcard_id' })
}
