'use client'

import dynamic from 'next/dynamic'
import { MARK_LESSON_GEOGRAPHY } from '@/lib/mark-lesson-geography'

const LeafletMap = dynamic(() => import('./LeafletMap'), { ssr: false, loading: () => <div className="h-64 animate-pulse rounded-xl" style={{ background: 'rgba(255,255,255,0.04)' }} /> })

export default function MarkLessonPlacesPanel({ chapter }: { chapter: number }) {
  const geography = MARK_LESSON_GEOGRAPHY[chapter]
  if (!geography) return <p className="mt-5 text-sm" style={{ color: 'var(--muted-400)' }}>No chapter map is available.</p>
  return <div className="mt-5 space-y-4">
    <div className="h-64 md:h-72 overflow-hidden rounded-xl" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
      <LeafletMap mode="modern" places={geography.places.map((place, index) => ({ ...place, isActive: index === 0 }))} activeCenter={geography.center} zoom={geography.zoom} label={`Mark ${chapter} geographic context`} />
    </div>
    <div className="grid sm:grid-cols-2 gap-3 text-xs leading-relaxed">
      <div className="rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.035)', color: 'var(--muted-400)' }}><strong style={{ color: 'var(--ivory-100)' }}>Named by Mark:</strong> {geography.named}</div>
      <div className="rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.035)', color: 'var(--muted-400)' }}><strong style={{ color: 'var(--ivory-100)' }}>Not known:</strong> {geography.unknown}</div>
      <div className="rounded-xl p-3 sm:col-span-2" style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.14)', color: 'var(--muted-400)' }}><strong style={{ color: 'var(--gold-300)' }}>Scale, not an itinerary:</strong> {geography.scale}</div>
    </div>
  </div>
}
