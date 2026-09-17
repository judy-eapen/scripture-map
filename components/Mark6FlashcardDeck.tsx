'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { MARK_6_FLASHCARDS, MARK_6_FLASHCARD_SCENES, type Mark6FlashcardScene } from '@/data/mark-6-flashcards'

type Filter = 'All scenes' | Mark6FlashcardScene

function shuffled<T>(items: T[]) {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

export default function Mark6FlashcardDeck() {
  const [filter, setFilter] = useState<Filter>('All scenes')
  const [order, setOrder] = useState(() => MARK_6_FLASHCARDS.map(card => card.id))
  const [index, setIndex] = useState(0)
  const [revealed, setRevealed] = useState(false)

  const cards = useMemo(() => order
    .map(id => MARK_6_FLASHCARDS.find(card => card.id === id)!)
    .filter(card => filter === 'All scenes' || card.scene === filter), [filter, order])
  const card = cards[index] ?? cards[0]
  const understandingCount = cards.filter(item => item.kind === 'understanding').length

  function move(next: number) {
    setIndex(Math.max(0, Math.min(cards.length - 1, next)))
    setRevealed(false)
  }

  function changeFilter(next: Filter) {
    setFilter(next)
    setIndex(0)
    setRevealed(false)
  }

  function shuffle() {
    setOrder(shuffled(order))
    setIndex(0)
    setRevealed(false)
  }

  function reset() {
    setOrder(MARK_6_FLASHCARDS.map(item => item.id))
    setFilter('All scenes')
    setIndex(0)
    setRevealed(false)
  }

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === ' ' || event.key === 'Enter') {
        event.preventDefault()
        setRevealed(value => !value)
      } else if (event.key === 'ArrowRight') {
        setIndex(current => Math.min(cards.length - 1, current + 1))
        setRevealed(false)
      } else if (event.key === 'ArrowLeft') {
        setIndex(current => Math.max(0, current - 1))
        setRevealed(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [cards.length])

  if (!card) return null

  return <div className="max-w-4xl mx-auto px-4 md:px-7 py-8 pt-14 md:pt-8 pb-24">
    <div className="flex flex-wrap items-start justify-between gap-4 mb-7">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold-400)' }}>Mark 6 · Quiz preparation</p>
        <h1 className="text-3xl md:text-4xl mt-2" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--ivory-100)' }}>End-to-end flashcards</h1>
        <p className="text-sm mt-2 max-w-2xl" style={{ color: 'var(--muted-400)' }}>{MARK_6_FLASHCARDS.length} cards covering Mark 6:1–56 in sequence—facts, quotations, numbers, reasons, reactions, and understanding.</p>
      </div>
      <Link href="/study/mark/6" className="rounded-xl px-4 py-2 text-sm" style={{ color: 'var(--gold-300)', border: '1px solid rgba(201,168,76,0.25)' }}>Read Mark 6 →</Link>
    </div>

    <div className="flex gap-2 overflow-x-auto pb-2 mb-4" aria-label="Filter cards by scene">
      {(['All scenes', ...MARK_6_FLASHCARD_SCENES] as Filter[]).map(scene => <button key={scene} onClick={() => changeFilter(scene)} className="shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold" style={{ color: filter === scene ? 'var(--navy-950)' : 'var(--muted-400)', background: filter === scene ? 'var(--gold-400)' : 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)' }}>{scene}</button>)}
    </div>

    <div className="flex flex-wrap items-center justify-between gap-3 mb-4 text-xs" style={{ color: 'var(--muted-500)' }}>
      <span>{cards.length} cards · {cards.length - understandingCount} fact · {understandingCount} understanding</span>
      <div className="flex gap-2"><button onClick={shuffle} className="rounded-lg px-3 py-1.5" style={{ background: 'rgba(255,255,255,0.05)' }}>Shuffle</button><button onClick={reset} className="rounded-lg px-3 py-1.5" style={{ background: 'rgba(255,255,255,0.05)' }}>Reset order</button></div>
    </div>

    <div className="h-1.5 rounded-full overflow-hidden mb-5" style={{ background: 'rgba(255,255,255,0.06)' }}><div className="h-full rounded-full" style={{ width: `${((index + 1) / cards.length) * 100}%`, background: 'var(--gold-400)' }} /></div>

    <button onClick={() => setRevealed(value => !value)} aria-expanded={revealed} className="w-full text-left rounded-2xl p-6 md:p-9 min-h-[340px] flex flex-col transition-colors" style={{ background: 'linear-gradient(145deg, rgba(201,168,76,0.08), rgba(255,255,255,0.025))', border: '1px solid rgba(201,168,76,0.2)' }}>
      <div className="flex flex-wrap justify-between gap-2 text-[11px] font-semibold uppercase tracking-wider"><span style={{ color: 'var(--gold-400)' }}>{card.scene} · {card.kind === 'understanding' ? 'Explain in your own words' : 'Fact recall'}</span><span style={{ color: 'var(--muted-500)' }}>{card.passage}</span></div>
      <div className="flex-1 flex items-center justify-center py-8"><p className="text-2xl md:text-3xl text-center leading-relaxed" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--ivory-100)' }}>{card.question}</p></div>
      {revealed ? <div className="pt-5" style={{ borderTop: '1px solid rgba(201,168,76,0.16)' }}><p className="text-[11px] uppercase tracking-widest font-semibold mb-2" style={{ color: 'var(--gold-400)' }}>{card.kind === 'understanding' ? 'Sample answer / key ideas' : 'Answer'}</p><p className="text-base leading-relaxed" style={{ color: 'var(--ivory-200)' }}>{card.answer.replace(/^Sample answer \/ key ideas: /, '')}</p></div> : <p className="text-center text-sm" style={{ color: 'var(--gold-300)' }}>Tap card or press Space / Enter to reveal</p>}
    </button>

    <div className="flex items-center justify-between gap-3 mt-5">
      <button onClick={() => move(index - 1)} disabled={index === 0} className="rounded-xl px-4 py-2.5 text-sm disabled:opacity-30" style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--ivory-200)' }}>← Previous</button>
      <span className="text-sm" style={{ color: 'var(--muted-400)' }}>Card {index + 1} of {cards.length}</span>
      <button onClick={() => move(index + 1)} disabled={index === cards.length - 1} className="rounded-xl px-4 py-2.5 text-sm disabled:opacity-30" style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--ivory-200)' }}>Next →</button>
    </div>
    <p className="text-xs text-center mt-5" style={{ color: 'var(--muted-600)' }}>Arrow keys move between cards. Understanding cards accept your own wording; compare the key ideas rather than memorizing one sentence.</p>
  </div>
}
