'use client'
import { useEffect, useState } from 'react'
import { restoreTalmidoProgress } from '@/lib/talmido'
export function useTalmidoProgress(learnerId: string) {
  const key = `scripture-map:talmido:grade-6:v1:${learnerId}`
  const [completed, setCompleted] = useState<number[]>([])
  const [ready, setReady] = useState(false)
  const [warning, setWarning] = useState('')
  // Load device-local progress after hydration; no saved data is overwritten on mount.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    try { setCompleted(restoreTalmidoProgress(localStorage.getItem(key))) }
    catch { setWarning('Saved lesson progress could not be loaded.') }
    setReady(true)
  }, [key])
  /* eslint-enable react-hooks/set-state-in-effect */
  function toggle(lesson: number) {
    if (!ready) return
    const next = completed.includes(lesson) ? completed.filter(n => n !== lesson) : [...completed, lesson]
    setCompleted(next)
    try { localStorage.setItem(key, JSON.stringify(next)); setWarning('') }
    catch { setWarning('Progress could not be saved on this device. Keep this tab open.') }
  }
  return { completed, ready, warning, toggle }
}
export default function TalmidoProgress({learnerId, lesson}: {learnerId: string; lesson: number}) {
  const {completed, ready, warning, toggle} = useTalmidoProgress(learnerId)
  return <div><button disabled={!ready} aria-pressed={completed.includes(lesson)} onClick={() => toggle(lesson)} className="rounded-xl border border-gold-400/40 bg-navy-800 px-4 py-3 text-sm text-gold-200 disabled:opacity-40">{completed.includes(lesson) ? '✓ Lesson studied · mark unfinished' : 'Mark lesson studied'}</button>{warning && <p role="status" className="mt-2 text-sm text-gold-300">{warning}</p>}</div>
}
