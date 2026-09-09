'use server'

import { createClient as createServiceClient } from '@supabase/supabase-js'
import { createClient } from '@/lib/supabase/server'

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

export type QuizReport = { id:string; questionId:string; question:string; note:string; createdAt:string; sourceFile:string }

function sourceFileForTag(tag: string | null) {
  if (tag === 'all-kings-v2') return 'scripts/quiz-bank/all-kings.ts'
  const match = tag?.match(/^quiz-v2-(1kings|2kings|mark)-(\d+)$/)
  if (!match) return 'Question ID shown below'
  const book = match[1] === '1kings' ? '1-kings' : match[1] === '2kings' ? '2-kings' : 'mark'
  return `scripts/quiz-bank/${book}-${match[2]}.ts`
}

function serviceClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  return url && key ? createServiceClient(url, key, { auth:{ persistSession:false, autoRefreshToken:false } }) : null
}

async function isReportAdmin() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const allowed = (process.env.QUIZ_ADMIN_EMAILS ?? '').split(',').map(email => email.trim().toLowerCase()).filter(Boolean)
  return !!user?.email && allowed.includes(user.email.toLowerCase())
}

export async function submitQuizReport(questionId: string, note: string): Promise<{ ok:boolean; message:string }> {
  const clean = note.trim().slice(0, 1000)
  if (!UUID.test(questionId) || !clean) return { ok:false, message:'Please add a short note.' }
  const supabase = await createClient()
  const { error } = await supabase.from('quiz_reports').insert({ question_id:questionId, note:clean })
  if (error) {
    const missing = /quiz_reports|schema cache|does not exist/i.test(error.message)
    return { ok:false, message:missing ? 'Reporting will be available after migration 016 is installed.' : 'The report could not be sent. Please try again.' }
  }
  return { ok:true, message:'Thank you — the question was reported.' }
}

export async function getOpenQuizReports(): Promise<QuizReport[] | null> {
  if (!(await isReportAdmin())) return null
  const supabase = serviceClient()
  if (!supabase) return []
  const { data, error } = await supabase.from('quiz_reports').select('id, question_id, note, created_at, quiz_questions(question, tag)').is('resolved_at', null).order('created_at', { ascending:false })
  if (error) return []
  return (data ?? []).map(row => {
    const joined = Array.isArray(row.quiz_questions) ? row.quiz_questions[0] : row.quiz_questions
    return { id:row.id, questionId:row.question_id, question:joined?.question ?? 'Question no longer active', note:row.note, createdAt:row.created_at, sourceFile:sourceFileForTag(joined?.tag ?? null) }
  })
}

export async function resolveQuizReport(reportId: string): Promise<boolean> {
  if (!UUID.test(reportId) || !(await isReportAdmin())) return false
  const supabase = serviceClient()
  if (!supabase) return false
  const { error } = await supabase.from('quiz_reports').update({ resolved_at:new Date().toISOString() }).eq('id', reportId)
  return !error
}
