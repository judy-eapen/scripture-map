'use client'

import { useEffect, useState } from 'react'
import type { QuizQuestion, ScriptureBookSlug } from '@/lib/types'
import { fetchChapterVerses, type CachedVerse } from '@/lib/client-verse-cache'
import { maskContextAnswers } from '@/lib/fill-blank-context'

export default function FillBlankContext({ question, chapter }: { question:QuizQuestion; chapter?:{ bookSlug:ScriptureBookSlug; chapterNumber:number } }) {
  const ref = question.supporting_refs?.[0]
  const book = ref?.book_slug ?? chapter?.bookSlug
  const chapterNumber = ref?.chapter ?? chapter?.chapterNumber
  const verseNumber = ref?.verse_start ?? question.verse_number
  const [verses, setVerses] = useState<CachedVerse[] | null>(null)

  useEffect(() => {
    let active = true
    if (!book || !chapterNumber || !verseNumber) return
    fetchChapterVerses(book, chapterNumber).then(all => {
      if (active) setVerses(all.filter(verse =>
        (verse.verse_number >= Math.max(1, verseNumber - 2) && verse.verse_number < verseNumber)
        || verse.verse_number === verseNumber + 1
      ))
    })
    return () => { active = false }
  }, [book, chapterNumber, verseNumber])

  if (!book || !chapterNumber || !verseNumber) return null
  return (
    <details className="mt-3 rounded-xl px-4 py-3" style={{ background:'rgba(255,255,255,0.025)', border:'1px solid rgba(255,255,255,0.07)' }}>
      <summary className="text-xs cursor-pointer" style={{ color:'var(--muted-400)' }}>Show context</summary>
      <div className="mt-3 space-y-2">
        {!verses && <p className="text-xs" style={{ color:'var(--muted-500)' }}>Loading context…</p>}
        {verses?.map(verse => (
          <p key={verse.verse_number} className="text-xs leading-relaxed" style={{ color:'var(--muted-400)' }}>
            <sup>{verse.verse_number}</sup> {maskContextAnswers(verse.text, question)}
          </p>
        ))}
        {verses?.length === 0 && <p className="text-xs" style={{ color:'var(--muted-500)' }}>No surrounding verses are available.</p>}
      </div>
    </details>
  )
}
