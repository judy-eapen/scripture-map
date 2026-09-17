'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Mark6PlacesPanel from '@/components/Mark6PlacesPanel'
import type { MarkSlideDeck } from '@/lib/mark-slides'
import { markSlideImage } from '@/lib/mark-slides'

type Props = {
  deck: MarkSlideDeck
  slide: number
  onSlideChange: (slide: number) => void
  onClose: () => void
}

export default function MarkSlidesPanel({ deck, slide, onSlideChange, onClose }: Props) {
  const [view, setView] = useState<'read' | 'culture' | 'connections' | 'places' | 'recall'>('read')
  const changeSlide = (nextSlide: number) => { setView('read'); onSlideChange(nextSlide) }
  const previous = () => changeSlide(Math.max(1, slide - 1))
  const next = () => changeSlide(Math.min(deck.pages, slide + 1))
  const lesson = deck.kind === 'lesson' ? deck.slides[slide - 1] : undefined

  return (
    <section className="h-full min-h-0 flex flex-col" style={{ background: 'var(--navy-900)' }} aria-label={`Mark ${deck.chapter} ${deck.kind === 'lesson' ? 'guided lesson' : 'teacher slides'}`}>
      <header className="shrink-0 px-4 py-3 flex items-start justify-between gap-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="min-w-0">
          <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: 'var(--gold-400)' }}>{deck.kind === 'lesson' ? 'Guided lesson' : 'Teacher slides'} · Mark {deck.chapter}</p>
          <h2 className="text-sm font-medium mt-1 truncate" style={{ color: 'var(--ivory-100)' }}>{deck.title}</h2>
          <p className="text-xs mt-1" style={{ color: 'var(--muted-500)' }}>Slide {slide} of {deck.pages}</p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Link href={deck.kind === 'images' ? deck.file : `/resources/mark?chapter=${deck.chapter}&slide=${slide}`} target="_blank" className="rounded-lg px-3 py-2 text-xs"
            style={{ color: 'var(--gold-300)', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)' }}>
            Expand ↗
          </Link>
          <button onClick={onClose} aria-label={`Close ${deck.kind === 'lesson' ? 'guided lesson' : 'teacher slides'}`} className="w-8 h-8 rounded-lg text-lg"
            style={{ color: 'var(--muted-400)', background: 'rgba(255,255,255,0.05)' }}>×</button>
        </div>
      </header>

      <div className="flex-1 min-h-0 overflow-y-auto">
        {deck.kind === 'images' ? <div className="p-3 md:p-4"><div className="rounded-xl overflow-hidden" style={{ background: '#090e1c', border: '1px solid rgba(255,255,255,0.07)' }}><Image src={markSlideImage(deck, slide)} alt={`Mark ${deck.chapter} teacher slide ${slide}`} width={1600} height={900} priority className="block w-full h-auto" /></div></div> : lesson && <div className="p-4 md:p-6">
          <div className="rounded-2xl p-5 md:p-7" style={{ background: 'linear-gradient(145deg, rgba(201,168,76,0.08), rgba(255,255,255,0.025))', border: '1px solid rgba(201,168,76,0.2)' }}>
            <div className="flex flex-wrap items-center justify-between gap-2"><p className="text-[11px] uppercase tracking-[0.18em] font-semibold" style={{ color: 'var(--gold-400)' }}>{lesson.eyebrow}</p><p className="text-xs font-semibold" style={{ color: 'var(--ivory-200)' }}>{lesson.passage}</p></div>
            <h3 className="text-2xl md:text-3xl mt-3 leading-tight" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--ivory-100)' }}>{lesson.title}</h3>
            {lesson.image && <figure className="mt-4 overflow-hidden rounded-xl" style={{ border: '1px solid rgba(255,255,255,0.09)', background: '#090e1c' }}><Image src={lesson.image.src} alt={lesson.image.alt} width={1600} height={900} className="block w-full h-auto" /><figcaption className="px-3 py-2 text-[10px] leading-relaxed" style={{ color: 'var(--muted-500)' }}>{lesson.image.caption}</figcaption></figure>}
            <p className="text-sm md:text-base mt-3 leading-relaxed" style={{ color: 'var(--ivory-200)' }}>{lesson.summary}</p>
            <div className="flex flex-wrap gap-2 mt-5" role="tablist" aria-label="Lesson sections">{(['read', 'culture', 'connections', 'places', 'recall'] as const).map(tab => <button key={tab} onClick={() => setView(tab)} role="tab" aria-selected={view === tab} className="rounded-full px-3 py-1.5 text-xs font-semibold capitalize" style={{ color: view === tab ? 'var(--navy-950)' : 'var(--muted-400)', background: view === tab ? 'var(--gold-400)' : 'rgba(255,255,255,0.05)' }}>{tab}</button>)}</div>
            {view === 'read' && <div className="mt-5 space-y-3"><ul className="space-y-3">{lesson.details.map(detail => <li key={detail} className="flex gap-3 text-sm leading-relaxed" style={{ color: 'var(--muted-300)' }}><span aria-hidden="true" style={{ color: 'var(--gold-400)' }}>◆</span><span>{detail}</span></li>)}</ul>{lesson.carefulNote && <div className="rounded-xl p-4 text-xs leading-relaxed" style={{ background: 'rgba(96,165,250,0.08)', border: '1px solid rgba(96,165,250,0.2)', color: '#bfdbfe' }}><strong>Read carefully:</strong> {lesson.carefulNote}</div>}</div>}
            {view === 'culture' && <div className="mt-5 space-y-3">{lesson.culture?.length ? lesson.culture.map(item => <article key={item.title} className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }}><h4 className="text-sm font-semibold" style={{ color: 'var(--ivory-100)' }}>{item.title}</h4><p className="text-sm mt-2 leading-relaxed" style={{ color: 'var(--muted-400)' }}>{item.body}</p>{item.source && <a href={item.source.href} target="_blank" rel="noreferrer" className="inline-block text-[11px] mt-2 underline underline-offset-2" style={{ color: 'var(--gold-300)' }}>Source: {item.source.label} ↗</a>}</article>) : <p className="text-sm" style={{ color: 'var(--muted-400)' }}>No additional cultural note for this overview. Choose a scene for focused context.</p>}</div>}
            {view === 'connections' && <div className="mt-5 space-y-3">{lesson.connections.map(connection => { const isCrossReference = connection.label === 'Parallel Gospel account' || connection.label === 'Scripture cross-reference'; return <article key={`${connection.label}-${connection.references}`} className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }}><div className="flex flex-wrap gap-2 items-center"><span className="text-[10px] uppercase tracking-wider rounded-full px-2 py-1" style={{ color: isCrossReference ? '#86efac' : 'var(--gold-300)', background: isCrossReference ? 'rgba(34,197,94,0.09)' : 'rgba(201,168,76,0.09)' }}>{connection.label}</span><strong className="text-xs" style={{ color: 'var(--ivory-100)' }}>{connection.references}</strong></div><p className="text-sm mt-2 leading-relaxed" style={{ color: 'var(--muted-400)' }}>{connection.explanation}</p></article> })}</div>}
            {view === 'recall' && <div className="mt-5"><p className="text-xs mb-3" style={{ color: 'var(--muted-500)' }}>Optional—answer aloud, then check the chapter text.</p><ol className="space-y-3">{lesson.recall.map((question, index) => <li key={question} className="rounded-xl p-4 text-sm leading-relaxed" style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)', color: 'var(--ivory-200)' }}><span className="font-semibold mr-2" style={{ color: 'var(--gold-400)' }}>{index + 1}.</span>{question}</li>)}</ol></div>}
            {view === 'places' && <Mark6PlacesPanel />}
          </div>
        </div>}
      </div>

      <footer className="shrink-0 px-3 py-3" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="flex items-center justify-between gap-3 mb-3">
          <button onClick={previous} disabled={slide === 1} className="rounded-lg px-3 py-2 text-xs disabled:opacity-30"
            style={{ color: 'var(--ivory-200)', background: 'rgba(255,255,255,0.05)' }}>← Previous</button>
          <span className="text-xs" style={{ color: 'var(--muted-500)' }}>{slide} / {deck.pages}</span>
          <button onClick={next} disabled={slide === deck.pages} className="rounded-lg px-3 py-2 text-xs disabled:opacity-30"
            style={{ color: 'var(--ivory-200)', background: 'rgba(255,255,255,0.05)' }}>Next →</button>
        </div>
          <div className="flex gap-1.5 overflow-x-auto pb-1" aria-label={deck.kind === 'lesson' ? 'Choose a scene' : 'Choose a slide'}>
          {Array.from({ length: deck.pages }, (_, index) => index + 1).map(number => (
            <button key={number} onClick={() => changeSlide(number)} aria-label={`${deck.kind === 'lesson' ? 'Scene' : 'Slide'} ${number}`}
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
