'use client'

import Image from 'next/image'
import type { MarkSlideDeck } from '@/lib/mark-slides'
import { markSlideImage } from '@/lib/mark-slides'

type Props = {
  deck: MarkSlideDeck
  slide: number
  onSlideChange: (slide: number) => void
  onClose: () => void
}

export default function MarkSlidesPanel({ deck, slide, onSlideChange, onClose }: Props) {
  const previous = () => onSlideChange(Math.max(1, slide - 1))
  const next = () => onSlideChange(Math.min(deck.pages, slide + 1))

  return (
    <section className="h-full min-h-0 flex flex-col" style={{ background: 'var(--navy-900)' }} aria-label={`Mark ${deck.chapter} teacher slides`}>
      <header className="shrink-0 px-4 py-3 flex items-start justify-between gap-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: 'var(--gold-400)' }}>Teacher slides · Mark {deck.chapter}</p>
          <h2 className="text-sm font-medium mt-1 truncate" style={{ color: 'var(--ivory-100)' }}>{deck.title}</h2>
          <p className="text-xs mt-1" style={{ color: 'var(--muted-500)' }}>Slide {slide} of {deck.pages}</p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <a href={deck.file} target="_blank" rel="noreferrer" className="rounded-lg px-3 py-2 text-xs"
            style={{ color: 'var(--gold-300)', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)' }}>
            Expand ↗
          </a>
          <button onClick={onClose} aria-label="Close teacher slides" className="w-8 h-8 rounded-lg text-lg"
            style={{ color: 'var(--muted-400)', background: 'rgba(255,255,255,0.05)' }}>×</button>
        </div>
      </header>

      <div className="flex-1 min-h-0 overflow-y-auto">
        <div className="p-3 md:p-4">
          <div className="rounded-xl overflow-hidden" style={{ background: '#090e1c', border: '1px solid rgba(255,255,255,0.07)' }}>
            <Image src={markSlideImage(deck, slide)} alt={`Mark ${deck.chapter} teacher slide ${slide}`}
              width={1600} height={900} priority className="block w-full h-auto" />
          </div>
        </div>
      </div>

      <footer className="shrink-0 px-3 py-3" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="flex items-center justify-between gap-3 mb-3">
          <button onClick={previous} disabled={slide === 1} className="rounded-lg px-3 py-2 text-xs disabled:opacity-30"
            style={{ color: 'var(--ivory-200)', background: 'rgba(255,255,255,0.05)' }}>← Previous</button>
          <span className="text-xs" style={{ color: 'var(--muted-500)' }}>{slide} / {deck.pages}</span>
          <button onClick={next} disabled={slide === deck.pages} className="rounded-lg px-3 py-2 text-xs disabled:opacity-30"
            style={{ color: 'var(--ivory-200)', background: 'rgba(255,255,255,0.05)' }}>Next →</button>
        </div>
        <div className="flex gap-1.5 overflow-x-auto pb-1" aria-label="Choose a slide">
          {Array.from({ length: deck.pages }, (_, index) => index + 1).map(number => (
            <button key={number} onClick={() => onSlideChange(number)} aria-label={`Slide ${number}`}
              className="shrink-0 w-8 h-8 rounded-lg text-xs"
              style={{ color: number === slide ? 'var(--navy-950)' : 'var(--muted-400)', background: number === slide ? 'var(--gold-400)' : 'rgba(255,255,255,0.05)' }}>
              {number}
            </button>
          ))}
        </div>
      </footer>
    </section>
  )
}
