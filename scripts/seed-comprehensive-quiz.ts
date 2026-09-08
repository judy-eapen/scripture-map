import * as fs from 'fs'
import * as path from 'path'
import { createClient } from '@supabase/supabase-js'
import bank, { type ComprehensiveRow } from './quiz-bank/all-kings'

for (const line of fs.readFileSync(path.resolve('.env.local'), 'utf8').split('\n')) {
  const value = line.trim(); if (!value || value.startsWith('#')) continue
  const at = value.indexOf('='); if (at < 0) continue
  const key = value.slice(0, at).trim(), content = value.slice(at + 1).trim()
  if (!process.env[key]) process.env[key] = content
}
const dry = process.argv.includes('--dry')
const retireDraft = process.argv.includes('--retire-draft')
const norm = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()

function shuffled(options: string[]) {
  const order = options.map((_, index) => index)
  for (let index = order.length - 1; index > 0; index--) {
    const swap = Math.floor(Math.random() * (index + 1)); [order[index], order[swap]] = [order[swap], order[index]]
  }
  return { options: order.map(index => options[index]), correct_index: order.indexOf(0) }
}

async function main() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL, key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) throw new Error('Missing Supabase environment variables')
  const supabase = createClient(url, key)
  const { data: books } = await supabase.from('books').select('id, name').in('name', ['1 Kings', '2 Kings'])
  const bookIds = new Map((books ?? []).map(book => [book.name, book.id]))
  const { data: chapters } = await supabase.from('chapters').select('chapter_number, verses, book_id').in('book_id', [...bookIds.values()])
  const verseCounts = new Map<string, number>()
  for (const chapter of chapters ?? []) {
    const book = [...bookIds].find(([, id]) => id === chapter.book_id)?.[0]
    if (book) verseCounts.set(`${book}:${chapter.chapter_number}`, (chapter.verses as unknown[]).length)
  }

  const errors: string[] = [], questions = new Map<string, number>()
  bank.rows.forEach((row, index) => {
    const where = `row ${index + 1}`
    if (!row.question.trim()) errors.push(`${where}: empty question`)
    const questionKey = norm(row.question)
    if (questions.has(questionKey)) errors.push(`${where}: duplicate of row ${questions.get(questionKey)}`)
    questions.set(questionKey, index + 1)
    if (row.supporting_refs.length < 2) errors.push(`${where}: requires at least two supporting passages`)
    if (new Set(row.supporting_refs.map(ref => `${ref.book}:${ref.chapter}:${ref.verse_start}-${ref.verse_end ?? ref.verse_start}`)).size < 2) errors.push(`${where}: passages must be distinct`)
    for (const ref of row.supporting_refs) {
      const count = verseCounts.get(`${ref.book}:${ref.chapter}`)
      if (!count || ref.verse_start < 1 || ref.verse_start > count || (ref.verse_end ?? ref.verse_start) > count) errors.push(`${where}: invalid ${ref.label}`)
    }
    if (row.type === 'multiple_choice' && (row.options?.length !== 4 || new Set(row.options.map(norm)).size !== 4)) errors.push(`${where}: needs four unique options`)
    if (row.type !== 'multiple_choice' && !row.answer) errors.push(`${where}: answer missing`)
  })
  if (errors.length) throw new Error(errors.join('\n'))

  const tally = bank.rows.reduce((out, row) => { out[row.difficulty] += 1; return out }, { 1: 0, 2: 0, 3: 0 })
  console.log(`${bank.slug}: ${bank.rows.length} verified cross-chapter questions (easy ${tally[1]}, medium ${tally[2]}, hard ${tally[3]})`)
  if (dry) return

  const { data: collection, error: collectionError } = await supabase.from('quiz_collections').select('id').eq('slug', bank.slug).single()
  if (collectionError || !collection) throw new Error('Apply supabase/migrations/012_comprehensive_quizzes.sql before loading this bank')
  if (retireDraft) {
    const { count, error } = await supabase
      .from('quiz_questions')
      .delete({ count: 'exact' })
      .eq('collection_id', collection.id)
      .eq('tag', bank.tag)
    if (error) throw error
    console.log(`Retired ${count ?? 0} draft All of Kings questions. Chapter quizzes and their progress were untouched.`)
    return
  }
  if (bank.status === 'draft') throw new Error('Refusing to publish: the All of Kings bank is still marked as a draft')

  const payload = bank.rows.map((row: ComprehensiveRow) => {
    const result = {
      collection_id: collection.id, chapter_id: null, tag: bank.tag, type: row.type, difficulty: row.difficulty,
      question: row.question, explanation: row.explanation, supporting_refs: row.supporting_refs,
      review_topic: row.review_topic, review_guidance: row.review_guidance,
      verse_ref: row.supporting_refs.map(ref => ref.label).join('; '), verse_number: null,
      answer: row.answer ?? null, accepted_answers: row.accepted_answers ?? [], options: null as string[] | null, correct_index: null as number | null,
    }
    if (row.type === 'multiple_choice') Object.assign(result, shuffled(row.options!))
    return result
  })
  const { data: existing, error: existingError } = await supabase.from('quiz_questions').select('id').eq('collection_id', collection.id).eq('tag', bank.tag).order('id')
  if (existingError) throw existingError
  if ((existing?.length ?? 0) > payload.length) throw new Error('Refusing to delete existing learner question IDs')
  const updates = payload.slice(0, existing?.length ?? 0).map((row, index) => ({ ...row, id: existing![index].id }))
  const additions = payload.slice(existing?.length ?? 0)
  for (let index = 0; index < updates.length; index += 100) {
    const { error } = await supabase.from('quiz_questions').upsert(updates.slice(index, index + 100), { onConflict: 'id' }); if (error) throw error
  }
  for (let index = 0; index < additions.length; index += 100) {
    const { error } = await supabase.from('quiz_questions').insert(additions.slice(index, index + 100)); if (error) throw error
  }
  console.log(`Loaded ${updates.length} existing and ${additions.length} new questions; learner IDs preserved.`)
}

main().catch(error => { console.error(error); process.exit(1) })
