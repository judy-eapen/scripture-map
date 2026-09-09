'use client'

import { useState } from 'react'
import { submitQuizReport } from '@/app/actions/quiz-reports'

export default function QuestionReportForm({ questionId }: { questionId:string }) {
  const [open, setOpen] = useState(false)
  const [note, setNote] = useState('')
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false)

  async function send() {
    if (!note.trim() || sending) return
    setSending(true)
    const result = await submitQuizReport(questionId, note)
    setSending(false)
    setMessage(result.message)
    if (result.ok) setNote('')
  }

  if (!open) return <button type="button" onClick={() => setOpen(true)} className="mt-3 text-xs underline underline-offset-2" style={{ color:'var(--muted-500)' }}>Something wrong with this question?</button>
  return <div className="mt-3 pt-3" style={{ borderTop:'1px solid rgba(255,255,255,0.08)' }}>
    <label className="block text-xs mb-1.5" style={{ color:'var(--muted-400)' }}>What seems wrong?</label>
    <textarea value={note} onChange={event => setNote(event.target.value)} rows={2} maxLength={1000} className="w-full rounded-lg px-3 py-2 text-xs resize-y outline-none" style={{ background:'rgba(0,0,0,0.18)', border:'1px solid rgba(255,255,255,0.12)', color:'var(--ivory-100)' }} />
    <div className="flex items-center gap-2 mt-2">
      <button type="button" onClick={send} disabled={!note.trim() || sending} className="rounded-lg px-3 py-1.5 text-xs font-medium disabled:opacity-50" style={{ background:'rgba(201,168,76,0.14)', border:'1px solid rgba(201,168,76,0.35)', color:'var(--gold-300)' }}>{sending ? 'Sending…' : 'Send'}</button>
      <button type="button" onClick={() => setOpen(false)} className="text-xs" style={{ color:'var(--muted-500)' }}>Cancel</button>
    </div>
    {message && <p className="text-xs mt-2" style={{ color:'var(--muted-400)' }}>{message}</p>}
  </div>
}
