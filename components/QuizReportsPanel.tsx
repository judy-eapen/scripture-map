'use client'

import { useState } from 'react'
import { resolveQuizReport, type QuizReport } from '@/app/actions/quiz-reports'

export default function QuizReportsPanel({ initialReports }: { initialReports:QuizReport[] }) {
  const [reports, setReports] = useState(initialReports)
  return <section className="rounded-2xl px-5 py-5 mb-8" style={{ background:'rgba(255,255,255,0.03)', border:'1px solid rgba(201,168,76,0.25)' }}>
    <h2 className="font-medium mb-3" style={{ color:'var(--gold-300)' }}>Reports ({reports.length})</h2>
    {!reports.length ? <p className="text-xs" style={{ color:'var(--muted-400)' }}>No unresolved question reports.</p> : <div className="space-y-3">
      {reports.map(report => <article key={report.id} className="rounded-xl px-4 py-3" style={{ background:'rgba(0,0,0,0.14)', border:'1px solid rgba(255,255,255,0.07)' }}>
        <p className="text-sm" style={{ color:'var(--ivory-100)' }}>{report.question}</p>
        <p className="text-xs mt-2" style={{ color:'var(--muted-300)' }}>{report.note}</p>
        <p className="text-[11px] mt-2" style={{ color:'var(--muted-500)' }}>{report.sourceFile} · search question wording · ID {report.questionId}</p>
        <button type="button" onClick={async () => { if (await resolveQuizReport(report.id)) setReports(items => items.filter(item => item.id !== report.id)) }} className="text-xs mt-3 underline underline-offset-2" style={{ color:'var(--gold-300)' }}>Resolve</button>
      </article>)}
    </div>}
  </section>
}
