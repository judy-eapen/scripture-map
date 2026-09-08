'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import type { QuizQuestion, ScriptureBookSlug } from '@/lib/types'
import { verseHref } from '@/lib/quiz-session'

type Ref = NonNullable<QuizQuestion['supporting_refs']>[number]
type Verse = { verse_number:number; text:string }
type Passage = { label:string; ref:Ref; verses:Verse[] }
const chapterCache = new Map<string, Promise<Verse[]>>()

function fetchPassage(ref: Ref): Promise<Passage> {
  const key = `${ref.book_slug}:${ref.chapter}`
  let request = chapterCache.get(key)
  if (!request) {
    const query = new URLSearchParams({ book:ref.book_slug, chapter:String(ref.chapter), from:'1', to:'999' })
    request = fetch(`/api/verses?${query}`).then(async response => {
      const data = response.ok ? await response.json() : { verses:[] }
      return data.verses ?? []
    })
    chapterCache.set(key, request)
  }
  return request.then(verses => ({
    label:ref.label,
    ref,
    verses:verses.filter(verse => verse.verse_number >= ref.verse_start && verse.verse_number <= (ref.verse_end ?? ref.verse_start)),
  }))
}

export default function QuestionSource({ question, chapter }: { question:QuizQuestion; chapter?:{ bookSlug:ScriptureBookSlug; chapterNumber:number } }) {
  const refs = useMemo<Ref[]>(() => question.supporting_refs?.length ? question.supporting_refs : chapter && question.verse_number ? [{
    book: question.verse_ref?.split(' ').slice(0, -1).join(' ') as Ref['book'],
    book_slug: chapter.bookSlug, chapter:chapter.chapterNumber, verse_start:question.verse_number, label:question.verse_ref ?? `Verse ${question.verse_number}`,
  }] : [], [question, chapter])
  const [passages, setPassages] = useState<Passage[]>([])
  useEffect(() => {
    let active = true
    Promise.all(refs.map(fetchPassage)).then(value => { if (active) setPassages(value) })
    return () => { active = false }
  }, [refs])
  if (!refs.length) return null
  return (
    <div className="mt-4 pt-3" style={{ borderTop:'1px solid rgba(255,255,255,0.1)' }}>
      <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color:'var(--gold-300)' }}>Source</p>
      <div className="space-y-2">
        {refs.map((ref, index) => {
          const passage = passages.find(item => item.label === ref.label)
          return (
            <details key={`${ref.label}-${index}`} open={index === 0} className="rounded-lg px-3 py-2" style={{ background:'rgba(0,0,0,0.12)' }}>
              <summary className="text-xs cursor-pointer" style={{ color:'var(--gold-300)' }}>{ref.label}</summary>
              <div className="mt-2 space-y-1">
                {passage?.verses.map(verse => <p key={verse.verse_number} className="text-xs leading-relaxed" style={{ color:'var(--ivory-200)' }}><sup style={{ color:'var(--gold-400)' }}>{verse.verse_number}</sup> {verse.text}</p>)}
                {!passage && <p className="text-xs" style={{ color:'var(--muted-500)' }}>Loading passage…</p>}
                {passage && !passage.verses.length && <p className="text-xs" style={{ color:'var(--muted-500)' }}>Passage text unavailable. Use the study link below.</p>}
              </div>
              <Link href={verseHref(ref.book_slug, ref.chapter, ref.verse_start)} className="inline-block text-xs mt-2 underline underline-offset-2" style={{ color:'var(--gold-300)' }}>Study {ref.label} →</Link>
            </details>
          )
        })}
      </div>
    </div>
  )
}
