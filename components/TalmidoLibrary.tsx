'use client'
import Link from 'next/link'
import { useState } from 'react'
import { BookOpen, ArrowRight } from 'lucide-react'
import { TALMIDO_FOCUS, TALMIDO_PDF, type TalmidoLesson } from '@/lib/talmido'
import { useTalmidoProgress } from './TalmidoProgress'

export default function TalmidoLibrary({lessons, learnerId}: {lessons: TalmidoLesson[]; learnerId: string}) {
  const {completed, ready, warning, toggle} = useTalmidoProgress(learnerId)
  const [focusOnly, setFocusOnly] = useState(false)
  const visibleLessons = focusOnly ? lessons.filter(l => TALMIDO_FOCUS.includes(l.number)) : lessons
  const studied = lessons.filter(l => completed.includes(l.number)).length
  return <div className="mx-auto max-w-6xl px-4 pb-16 pt-16 md:px-8 md:pt-10">
    <p className="text-xs uppercase tracking-[.2em] text-gold-300">Sunday school · Sixth grade · AY 2026</p>
    <h1 className="mt-3 font-display text-4xl text-ivory-50">Talmido</h1>
    <p className="mt-3 font-display text-2xl text-ivory-200">Our Sacramental Life</p>
    <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-400">Read, teach, and revisit your Sunday school curriculum. All 16 lessons are here, with the original pages, illustrations, lesson goals, and reflection questions.</p>
    <div className="my-6 grid gap-3 sm:grid-cols-3">
      {[['25%', 'of your Bible quiz comes from Talmido'],[`${lessons.length} lessons`, 'The complete sixth-grade curriculum'],[`${studied} / ${lessons.length}`, 'Lessons studied']].map(([value,label]) => <div key={label} className="rounded-2xl border border-gold-400/15 bg-navy-900 p-5"><p className="text-2xl font-semibold text-gold-200">{value}</p><p className="mt-2 text-sm text-muted-400">{label}</p></div>)}
    </div>
    {warning && <p role="status" className="mb-4 text-sm text-gold-300">{warning}</p>}
    <section aria-labelledby="talmido-lessons"><div className="mb-4 flex flex-wrap items-center justify-between gap-3"><h2 id="talmido-lessons" className="font-display text-2xl"><BookOpen size={24} className="mr-2 inline text-gold-300" />{focusOnly ? 'Teaching focus · Lessons 6–10' : 'All chapters'}</h2><a href={TALMIDO_PDF} target="_blank" rel="noopener noreferrer" className="text-sm text-gold-300 underline">Open complete textbook (PDF · 51 MB)</a></div>
      <p className="mb-4 text-sm text-muted-400">Choose any chapter below. Each lesson includes the complete original content and the curriculum’s own reflection questions.</p>
      <div className="mb-5 flex flex-wrap gap-2" role="group" aria-label="Chapter filter">
        {[{focus:false,label:'All chapters (16)'},{focus:true,label:'Teaching focus (6–10)'}].map(option => <button key={option.label} onClick={() => setFocusOnly(option.focus)} aria-pressed={focusOnly===option.focus} className={`rounded-xl border px-4 py-2 text-sm focus-visible:outline-2 focus-visible:outline-gold-300 ${focusOnly===option.focus ? 'border-gold-400/50 bg-gold-400/15 text-gold-200' : 'border-navy-600 text-muted-400 hover:bg-navy-800'}`}>{option.label}</button>)}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{visibleLessons.map(lesson => <article key={lesson.number} className="flex flex-col rounded-2xl border border-gold-400/20 bg-navy-900 p-5">
        <p className="text-xs uppercase tracking-wider text-gold-300">Lesson {lesson.number}</p><h3 className="mt-2 font-display text-2xl">{lesson.title}</h3><p className="mt-2 text-xs text-muted-400">Textbook pages {lesson.startPage-1}–{lesson.endPage-1} · {lesson.reflectionQuestions.length} reflection questions</p>
        <div className="mt-auto pt-5"><Link href={`/talmido/${lesson.number}`} className="flex items-center justify-between rounded-xl bg-gold-400 px-4 py-3 text-sm font-semibold text-navy-950">Open lesson <ArrowRight size={16} /></Link>{TALMIDO_FOCUS.includes(lesson.number) && <Link href={`/talmido/${lesson.number}?view=slides`} className="mt-3 block rounded-lg border border-gold-400/30 px-4 py-2 text-center text-sm text-gold-200 hover:bg-navy-800">Teaching slides & PowerPoint</Link>}<button disabled={!ready} aria-pressed={completed.includes(lesson.number)} onClick={()=>toggle(lesson.number)} className="mt-3 w-full rounded-lg py-2 text-sm text-ivory-200 focus-visible:outline-2 focus-visible:outline-gold-300 disabled:opacity-40">{completed.includes(lesson.number) ? '✓ Studied · mark unfinished' : 'Mark studied'}</button></div>
      </article>)}</div>
    </section>
    <p className="mt-6 text-xs leading-6 text-muted-400">Published June 2026 by the Sunday School of the North American Dioceses of the Malankara Orthodox Syrian Church. The 25% quiz contribution is from your teaching plan. Study progress saves in this browser. Reflection questions stay separate from Mark Challenge scores.</p>
  </div>
}
