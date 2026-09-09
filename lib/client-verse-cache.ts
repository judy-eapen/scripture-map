'use client'

import type { ScriptureBookSlug } from '@/lib/types'

export type CachedVerse = { verse_number:number; text:string }
const chapterCache = new Map<string, Promise<CachedVerse[]>>()

export function fetchChapterVerses(book: ScriptureBookSlug, chapter: number): Promise<CachedVerse[]> {
  const key = `${book}:${chapter}`
  let request = chapterCache.get(key)
  if (!request) {
    const query = new URLSearchParams({ book, chapter:String(chapter), from:'1', to:'999' })
    request = fetch(`/api/verses?${query}`).then(async response => {
      const data = response.ok ? await response.json() : { verses:[] }
      return data.verses ?? []
    })
    chapterCache.set(key, request)
  }
  return request
}
