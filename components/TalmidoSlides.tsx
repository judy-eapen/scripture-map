'use client'

import Image from 'next/image'
import { useState } from 'react'

type Slide = { title: string; body: string[]; ref: string; notes: string; image: string }
export type TalmidoDeck = { chapter: number; title: string; file: string; layout?: string; slides: Slide[] }

export default function TalmidoSlides({ deck }: { deck: TalmidoDeck }) {
  const [index, setIndex] = useState(0)
  const slide = deck.slides[index]
  const button = 'rounded-lg border border-navy-600 px-4 py-2 text-sm text-gold-200 hover:bg-navy-700 disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-gold-300'
  return <section aria-label={`Chapter ${deck.chapter} teaching slides`} className="overflow-hidden rounded-2xl border border-gold-400/20 bg-navy-900">
    <div className="flex flex-wrap items-center justify-between gap-3 p-4">
      <p className="text-sm text-muted-400">Teach together · {deck.slides.length} slides · Discussion and quiz included</p>
      <a href={deck.file} download className="text-sm text-gold-300 underline">Download PowerPoint</a>
    </div>
    <div tabIndex={0} aria-label="Slide viewer. Use left and right arrow keys to change slides." className="focus-visible:outline-2 focus-visible:outline-gold-300" onKeyDown={event => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        event.preventDefault()
        setIndex(value => Math.max(0, Math.min(deck.slides.length - 1, value + (event.key === 'ArrowRight' ? 1 : -1))))
      }
    }}>
      {deck.layout === 'reading' ? <article className="bg-[#fffefa] px-6 py-8 text-[#252421] sm:px-10 sm:py-10" style={{ fontFamily: 'Georgia, serif' }}>
        <h2 className="text-2xl font-bold leading-snug sm:text-3xl">{slide.title}</h2>
        <div className="mt-7 space-y-6 text-lg leading-relaxed sm:text-xl sm:leading-relaxed">{slide.body.map((paragraph, i) => <p key={i}>{paragraph}</p>)}</div>
        <p className="mt-8 text-sm text-[#6b6256]">Talmido Chapter {deck.chapter} · {slide.ref}</p>
      </article> : <Image src={slide.image} alt={`${slide.title}. ${slide.body.join(' ')}`} width={1280} height={720} className="h-auto w-full" priority unoptimized />}
    </div>
    <div className="flex flex-wrap items-center justify-between gap-3 p-4">
      <button className={button} disabled={index === 0} onClick={() => setIndex(index - 1)}>← Previous</button>
      <p aria-live="polite" aria-atomic="true" className="text-sm text-ivory-200">Slide {index + 1} of {deck.slides.length}</p>
      <button className={button} disabled={index === deck.slides.length - 1} onClick={() => setIndex(index + 1)}>Next →</button>
    </div>
    <div className="space-y-4 border-t border-navy-700 p-4 md:p-6">
      <label className="block text-sm text-muted-400">Jump to slide
        <select value={index} onChange={event => setIndex(Number(event.target.value))} className="mt-2 block w-full rounded-lg border border-navy-600 bg-navy-950 p-3 text-ivory-100">
          {deck.slides.map((item, i) => <option key={i} value={i}>{i + 1}. {item.title}</option>)}
        </select>
      </label>
      <details key={`text-${index}`} className="rounded-xl border border-navy-700 p-4"><summary className="cursor-pointer text-gold-200">Read slide text</summary><h2 className="mt-4 font-display text-xl">{slide.title}</h2><ul className="mt-3 list-disc space-y-3 pl-5 leading-7 text-ivory-200">{slide.body.map((line, i) => <li key={i} className="whitespace-pre-line">{line}</li>)}</ul></details>
      <details key={`notes-${index}`} className="rounded-xl border border-navy-700 p-4"><summary className="cursor-pointer text-gold-200">Teacher notes · {slide.ref}</summary><p className="mt-3 whitespace-pre-line text-sm leading-7 text-ivory-200">{slide.notes}</p></details>
      <a href="/resources/talmido/chapters-6-10-quiz-and-answers.pdf" target="_blank" rel="noopener noreferrer" className="inline-block text-sm text-gold-300 underline">Open Chapters 6–10 practice quiz and answer guide (PDF)</a>
      <p className="text-xs leading-6 text-muted-400">Teaching summaries based on the supplied Talmido curriculum. Classroom examples and practice quizzes are teaching aids. PowerPoint downloads include speaker notes.</p>
    </div>
  </section>
}
