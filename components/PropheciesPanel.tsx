'use client'

import { useState } from 'react'
import type { Prophecy } from '@/lib/types'

type Props = {
  prophecies: Prophecy[]
  currentChapterId: string
  onProphecyClick: (prophecy: Prophecy) => void
}

export default function PropheciesPanel({ prophecies, currentChapterId, onProphecyClick }: Props) {
  const [open, setOpen] = useState(false)

  if (prophecies.length === 0) return null

  const sourceHere = prophecies.filter(p => p.prophecy_chapter_id === currentChapterId)
  const fulfilledHere = prophecies.filter(p => p.fulfillment_chapter_id === currentChapterId)

  return (
    <div className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(168,85,247,0.2)' }}>
      {/* Header toggle */}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center gap-3 px-4 py-3 transition-colors"
        style={{ background: open ? 'rgba(168,85,247,0.08)' : 'var(--navy-800)' }}
      >
        <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: 'rgba(168,85,247,0.1)' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ color: 'rgba(192,132,252,0.9)' }}>
            <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <span className="text-sm font-semibold flex-1 text-left" style={{ color: 'var(--ivory-100)' }}>
          Prophetic Word
        </span>
        <div className="flex items-center gap-1.5">
          {sourceHere.length > 0 && (
            <span className="text-xs rounded-full px-2 py-0.5 font-semibold"
              style={{ background: 'rgba(168,85,247,0.15)', color: 'rgba(192,132,252,0.9)' }}>
              {sourceHere.length} spoken
            </span>
          )}
          {fulfilledHere.length > 0 && (
            <span className="text-xs rounded-full px-2 py-0.5 font-semibold"
              style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--gold-400)' }}>
              {fulfilledHere.length} fulfilled
            </span>
          )}
        </div>
        <svg
          width="14" height="14" viewBox="0 0 24 24" fill="none"
          style={{ color: 'var(--muted-400)', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
          <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div style={{ background: 'var(--navy-900)' }}>
          {/* Prophecies spoken in this chapter */}
          {sourceHere.length > 0 && (
            <div className="px-4 py-3" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgba(192,132,252,0.7)' }}>
                Spoken in this chapter
              </p>
              <div className="flex flex-col gap-2">
                {sourceHere.map(p => (
                  <button
                    key={p.id}
                    onClick={() => onProphecyClick(p)}
                    className="rounded-lg px-3 py-2 text-left transition-all group"
                    style={{ background: 'rgba(168,85,247,0.06)', border: '1px solid rgba(168,85,247,0.12)' }}
                  >
                    <div className="flex items-start gap-2">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" style={{ color: 'rgba(192,132,252,0.7)', flexShrink: 0, marginTop: 2 }}>
                        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div>
                        <p className="text-xs font-semibold mb-0.5" style={{ color: 'var(--ivory-100)' }}>{p.title}</p>
                        {p.prophet && <p className="text-xs" style={{ color: 'rgba(192,132,252,0.6)' }}>by {p.prophet}</p>}
                        {p.fulfilled && p.fulfillment_book && (
                          <p className="text-xs mt-0.5" style={{ color: 'var(--gold-400)' }}>
                            Fulfilled in {p.fulfillment_book} {p.fulfillment_chapter_number}
                          </p>
                        )}
                      </div>
                      <svg className="ml-auto flex-shrink-0 mt-1 opacity-40 group-hover:opacity-80 transition-opacity" width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18l6-6-6-6" stroke="var(--muted-400)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Prophecies fulfilled in this chapter */}
          {fulfilledHere.length > 0 && (
            <div className="px-4 py-3" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--gold-400)' }}>
                Fulfilled in this chapter
              </p>
              <div className="flex flex-col gap-2">
                {fulfilledHere.map(p => (
                  <button
                    key={p.id}
                    onClick={() => onProphecyClick(p)}
                    className="rounded-lg px-3 py-2 text-left transition-all group"
                    style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.12)' }}
                  >
                    <div className="flex items-start gap-2">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--gold-400)', flexShrink: 0, marginTop: 2 }}>
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div>
                        <p className="text-xs font-semibold mb-0.5" style={{ color: 'var(--ivory-100)' }}>{p.title}</p>
                        {p.prophet && <p className="text-xs" style={{ color: 'rgba(201,168,76,0.6)' }}>by {p.prophet}</p>}
                        {p.prophecy_book && (
                          <p className="text-xs mt-0.5" style={{ color: 'rgba(192,132,252,0.7)' }}>
                            Prophesied in {p.prophecy_book} {p.prophecy_chapter_number}:{p.prophecy_verse_start}
                          </p>
                        )}
                      </div>
                      <svg className="ml-auto flex-shrink-0 mt-1 opacity-40 group-hover:opacity-80 transition-opacity" width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18l6-6-6-6" stroke="var(--muted-400)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
