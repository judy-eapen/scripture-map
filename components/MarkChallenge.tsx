'use client'

import { useEffect, useRef, useState } from 'react'
import { Trophy, Flame, Star, ArrowLeft, RotateCcw, Sparkles } from 'lucide-react'
import { markChallengeQuestions as bank } from '@/data/mark-challenge'
import { CHAPTERS, POINTS, availableQuestions, challengeTotals, emptyChallenge, recordAnswer, restoreChallenge, type ChallengeQuestion, type ChallengeState } from '@/lib/mark-challenge'
import { displayAnswer, gradeMultipleChoice, gradeTrueFalse, shuffle } from '@/lib/quiz-grading'

export default function MarkChallenge({ learnerId }: { learnerId: string }) {
  const storageKey = `scripture-map:mark-challenge:v1:${learnerId}`
  const [round, setRound] = useState<ChallengeState>(emptyChallenge)
  const [ready, setReady] = useState(false)
  const [warning, setWarning] = useState('')
  const [active, setActive] = useState<ChallengeQuestion | null>(null)
  const [draft, setDraft] = useState('')
  const [revealed, setRevealed] = useState(false)
  const [resetOpen, setResetOpen] = useState(false)
  const activeRef = useRef<ChallengeQuestion | null>(null)
  const roundRef = useRef(round)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const resetRef = useRef<HTMLDialogElement>(null)

  // Hydrate browser-only persistence after SSR; the board remains disabled until loaded.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    try { const saved = restoreChallenge(localStorage.getItem(storageKey), bank); roundRef.current = saved; setRound(saved) }
    catch { setWarning('Your saved round could not be loaded. This round will start fresh.') }
    setReady(true)
  }, [storageKey])
  /* eslint-enable react-hooks/set-state-in-effect */
  useEffect(() => { if (active) dialogRef.current?.showModal(); else dialogRef.current?.close() }, [active])
  useEffect(() => { if (resetOpen) resetRef.current?.showModal(); else resetRef.current?.close() }, [resetOpen])

  function save(next: ChallengeState) {
    roundRef.current = next; setRound(next)
    try { localStorage.setItem(storageKey, JSON.stringify(next)); setWarning('') }
    catch { setWarning('Progress is available in this tab, but could not be saved on this device.') }
  }
  function choose(chapter: number, points: number) {
    if (!ready || activeRef.current) return
    const remaining = availableQuestions(bank, roundRef.current, chapter, points)
    const q = shuffle(remaining)[0]
    if (!q) return
    activeRef.current = q; setActive(q); setDraft(''); setRevealed(false)
  }
  function answer(correct: boolean) {
    const q = active
    if (!q) return
    save(recordAnswer(roundRef.current, bank, q.id, correct)); setRevealed(true)
  }
  function closeQuestion() { activeRef.current = null; setActive(null) }
  const totals = challengeTotals(bank, round)
  const result = active ? round.attempts.find(a => a.questionId === active.id) : undefined
  const complete = totals.answered === bank.length
  const button = 'rounded-xl border border-gold-400/30 bg-navy-800 px-4 py-3 text-sm text-ivory-100 hover:bg-navy-700 focus-visible:outline-2 focus-visible:outline-gold-300 disabled:opacity-40'

  return <div className="mx-auto max-w-6xl px-4 pb-16 pt-16 md:px-8 md:pt-10">
    <div className="flex flex-wrap items-start justify-between gap-4">
      <div><p className="text-xs uppercase tracking-[.2em] text-gold-300">Your questions. Your challenge.</p><h1 className="mt-3 font-display text-4xl text-ivory-50">Mark Challenge</h1><p className="mt-3 max-w-xl text-sm leading-6 text-muted-400">Choose a chapter. Pick your points. See what you remember from Mark 6–10.</p><p className="mt-2 text-xs text-gold-300">Orthodox Study Bible · NKJV</p></div>
      <button className={button} disabled={!ready || totals.answered === 0} onClick={() => setResetOpen(true)}><RotateCcw className="mr-2 inline" size={15} />New round</button>
    </div>
    <div className="my-7 grid grid-cols-3 gap-3" aria-live="polite">
      {[{label:'Score',value:totals.score,Icon:Trophy},{label:'Streak',value:totals.streak,Icon:Flame},{label:'Best this round',value:totals.bestStreak,Icon:Star}].map(({label,value,Icon}) => <div key={label} className="rounded-2xl border border-gold-400/15 bg-navy-900 p-4 sm:p-5"><Icon size={19} className="mb-3 text-gold-300" /><p className="text-2xl font-semibold text-ivory-50 sm:text-3xl">{value.toLocaleString()}</p><p className="mt-1 text-xs text-muted-400">{label}</p></div>)}
    </div>
    {warning && <p role="status" className="mb-4 rounded-xl border border-gold-400/40 p-3 text-sm text-gold-200">{warning}</p>}
    <div className="mb-6"><div className="mb-2 flex justify-between text-sm"><span className="text-ivory-200">{complete ? 'All available questions answered!' : totals.streak >= 8 ? 'Mark Master!' : totals.streak >= 5 ? 'Scripture Streak!' : totals.streak >= 3 ? 'On fire!' : 'Every question is a chance to learn.'}</span><span className="text-muted-400">{totals.answered} / {bank.length}</span></div><progress className="h-2 w-full accent-gold-400" value={totals.answered} max={bank.length} aria-label="Overall challenge progress" /></div>
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {CHAPTERS.map(chapter => {
        const questions = bank.filter(q => q.chapter === chapter)
        const answered = round.attempts.filter(a => questions.some(q => q.id === a.questionId)).length
        return <section key={chapter} aria-label={`Mark ${chapter}`} className="rounded-2xl border border-gold-400/15 bg-navy-900 p-3">
          <h2 className="text-center font-display text-xl text-ivory-50">Mark {chapter}</h2><p className="my-2 text-center text-xs text-muted-400">{questions.length ? `${answered} / ${questions.length} answered` : 'Awaiting your questions'}</p>
          <div className="space-y-3">{POINTS.map((points,index) => {
            const total = questions.filter(q => q.points === points).length
            const remaining = availableQuestions(bank,round,chapter,points).length
            return <button key={points} disabled={!ready || remaining === 0} onClick={() => choose(chapter,points)} aria-label={`Mark ${chapter}, ${points} points, ${remaining} questions remaining`} className="min-h-24 w-full rounded-xl border px-2 py-4 transition motion-safe:hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-gold-300 disabled:transform-none disabled:opacity-40" style={{borderColor:remaining ? ['#60a5fa55','#34d39955','#edcf7a55','#fb923c55','#c084fc55'][index] : 'var(--navy-700)',background:remaining ? 'var(--navy-800)' : 'transparent'}}><span className="block text-2xl font-semibold text-gold-200">{points}</span><span className="mt-1 block text-xs text-muted-400">{!total ? 'Coming later' : remaining ? `${remaining} available` : 'All answered ✓'}</span></button>
          })}</div>
        </section>
      })}
    </div>
    <div className="mt-6 flex items-start gap-3 rounded-xl border border-gold-400/15 p-4 text-sm leading-6 text-muted-400"><Sparkles size={20} className="mt-1 shrink-0 text-gold-300" /><p>More questions can be added at any time. Only your supplied questions appear here. Special cards are coming later.</p></div>
    <p className="mt-4 text-xs text-muted-400">Progress saves on this browser for {learnerId === 'guest' ? 'this guest player' : 'your account'}. A new round resets the score and makes all questions available again.</p>

    <dialog ref={dialogRef} onCancel={event => { if(revealed && !result) event.preventDefault(); else closeQuestion() }} onClose={closeQuestion} className="m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-xl overflow-y-auto rounded-2xl border border-gold-400/30 bg-navy-900 p-6 text-ivory-100 shadow-2xl backdrop:bg-black/75" aria-labelledby="challenge-question-title">
      {active && <>
        <div className="mb-5 flex items-center justify-between text-sm text-gold-300"><span>Mark {active.chapter} · {active.points} points</span>{(!revealed || result) && <button onClick={closeQuestion} className="rounded-lg p-2 hover:bg-navy-700" aria-label="Back to board"><ArrowLeft size={19} /></button>}</div>
        <h2 id="challenge-question-title" className="font-display text-2xl leading-relaxed">{active.question}</h2>
        {!revealed && <div className="mt-6 space-y-3">
          {active.type === 'true_false' ? ['True','False'].map(value => <button key={value} className={`${button} mr-3`} onClick={() => answer(gradeTrueFalse(active,value === 'True'))}>{value}</button>) : active.type === 'multiple_choice' ? active.options?.map((value,index) => <button key={value} className={`${button} block w-full text-left`} onClick={() => answer(gradeMultipleChoice(active,index))}>{value}</button>) : <><label htmlFor="challenge-response" className="block text-sm text-muted-400">Say your answer aloud, or write it here.</label><textarea id="challenge-response" value={draft} onChange={e => setDraft(e.target.value)} rows={3} className="w-full rounded-xl border border-navy-600 bg-navy-950 p-3 text-ivory-100 focus:outline-gold-300" /><button className={button} onClick={() => setRevealed(true)}>Reveal answer</button></>}
        </div>}
        {revealed && <div className="mt-6 space-y-4" aria-live="polite">
          {result && <p className={`text-lg font-semibold ${result.correct ? 'text-emerald-300' : 'text-gold-200'}`}>{result.correct ? `You got it! +${active.points} points` : 'Not quite — keep learning. +0 points'}</p>}
          {draft && <p className="text-sm text-muted-400">Your answer: {draft}</p>}
          <div className="rounded-xl bg-navy-800 p-4"><p className="mb-2 text-xs uppercase tracking-wider text-gold-300">Answer · Orthodox Study Bible</p><p className="leading-7">{displayAnswer(active)}</p></div>
          <p className="text-sm leading-6 text-muted-400">{active.explanation}</p><a href={`/study/mark/${active.chapter}#v${active.verse_number}`} target="_blank" rel="noopener noreferrer" className="inline-block text-sm text-gold-300 underline">Read {active.verse_ref}</a>
          {!result ? <><p className="text-sm text-muted-400">Compare the meaning of your answer, then choose:</p><div className="flex flex-wrap gap-3"><button className={button} onClick={() => answer(true)}>I got it right</button><button className={button} onClick={() => answer(false)}>Still learning</button></div></> : <button className={`${button} block w-full`} onClick={closeQuestion}>Choose another card</button>}
        </div>}
      </>}
    </dialog>
    <dialog ref={resetRef} onCancel={() => setResetOpen(false)} onClose={() => setResetOpen(false)} className="m-auto max-w-sm rounded-2xl border border-gold-400/30 bg-navy-900 p-6 text-ivory-100 backdrop:bg-black/75" aria-labelledby="challenge-reset-title"><h2 id="challenge-reset-title" className="font-display text-2xl">Start a new round?</h2><p className="my-4 text-sm leading-6 text-muted-400">Your current score, streaks, and answered cards will reset. All {bank.length} questions will be available again.</p><div className="flex gap-3"><button className={button} onClick={() => setResetOpen(false)}>Keep playing</button><button className={button} onClick={() => { save(emptyChallenge()); setResetOpen(false) }}>Start fresh</button></div></dialog>
  </div>
}
