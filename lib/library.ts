import { unstable_cache } from 'next/cache'
import { createClient as createSupabaseClient } from '@supabase/supabase-js'
import type { SupabaseClient } from '@supabase/supabase-js'

export type LibraryBook = {
  id: string
  name: string
  slug: string
  chapters: { id: string; number: number; questionIds: string[] }[]
}

const canonical = new Map([['1 Kings', 0], ['2 Kings', 1], ['Mark', 2]])

function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

async function readLibraryBooks(): Promise<LibraryBook[]> {
  const supabase = createSupabaseClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, { auth: { persistSession: false } })
  let { data, error } = await supabase.from('books').select('id, name, chapters(id, chapter_number, quiz_questions(id, retired_at))')
  let canFilterRetired = !error
  if (error) {
    const fallback = await supabase.from('books').select('id, name, chapters(id, chapter_number, quiz_questions(id))')
    data = fallback.data
    error = fallback.error
    canFilterRetired = false
  }
  if (error) return []
  type Row = { id:string; name:string; chapters:{ id:string; chapter_number:number; quiz_questions:{ id:string; retired_at?:string | null }[] | null }[] | null }
  return ((data ?? []) as Row[]).map(book => ({
    id: book.id, name: book.name, slug: slugify(book.name),
    chapters: (book.chapters ?? []).map(chapter => ({ id:chapter.id, number:chapter.chapter_number, questionIds:(chapter.quiz_questions ?? []).filter(question => !canFilterRetired || question.retired_at == null).map(question => question.id) })).sort((a, b) => a.number - b.number),
  })).sort((a, b) => (canonical.get(a.name) ?? Number.MAX_SAFE_INTEGER) - (canonical.get(b.name) ?? Number.MAX_SAFE_INTEGER) || a.name.localeCompare(b.name))
}

export const getLibraryBooks = unstable_cache(readLibraryBooks, ['library-books-v1'], { revalidate: 60 })

export type LibraryProgress = Record<string, { readChapterIds: string[]; masteredQuestionIds: string[] }>

export async function getLibraryProgress(supabase: SupabaseClient, userId: string, books: LibraryBook[]): Promise<LibraryProgress> {
  const [{ data: reading }, { data: answers }] = await Promise.all([
    supabase.from('user_progress').select('chapter_id, read_at').eq('user_id', userId).not('read_at', 'is', null),
    supabase.from('quiz_answers').select('question_id, correct, answered_at').eq('user_id', userId).order('answered_at'),
  ])
  const lastAnswers = new Map<string, boolean>()
  for (const answer of answers ?? []) lastAnswers.set(answer.question_id, answer.correct)
  const readIds = new Set((reading ?? []).map(row => row.chapter_id))
  return Object.fromEntries(books.map(book => {
    const questionIds = book.chapters.flatMap(chapter => chapter.questionIds)
    return [book.slug, { readChapterIds: book.chapters.filter(chapter => readIds.has(chapter.id)).map(chapter => chapter.id), masteredQuestionIds: questionIds.filter(id => lastAnswers.get(id) === true) }]
  }))
}
