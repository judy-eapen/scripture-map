'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { ChapterConnection } from '@/lib/types'

type Props = {
  connections: ChapterConnection[]
  currentBook: string
  currentChapter: number
}

function bookSlug(name: string) {
  return name === '1 Kings' ? '1-kings' : '2-kings'
}

function ChapterLink({ conn }: { conn: ChapterConnection }) {
  if (!conn.target_book || !conn.target_chapter_number) return null
  return (
    <Link
      href={`/study/${bookSlug(conn.target_book)}/${conn.target_chapter_number}`}
      className="inline-flex items-center gap-1 text-xs font-semibold ml-2 transition-colors"
      style={{ color: 'var(--gold-400)' }}
    >
      {conn.target_book} {conn.target_chapter_number}
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
        <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  )
}

const SECTION_CONFIG = {
  previously: {
    label: 'Previously',
    color: 'var(--muted-400)',
    accent: 'rgba(148,163,184,0.15)',
    icon: (
      <path d="M11 17l-5-5m0 0l5-5m-5 5h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  sets_up: {
    label: 'This chapter sets up',
    color: 'rgba(96,165,250,0.9)',
    accent: 'rgba(96,165,250,0.08)',
    icon: (
      <path d="M13 7l5 5m0 0l-5 5m5-5H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  callback: {
    label: 'Callbacks — word fulfilled',
    color: 'var(--gold-400)',
    accent: 'rgba(201,168,76,0.08)',
    icon: (
      <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
} as const

export default function StoryThreadPanel({ connections, currentBook, currentChapter }: Props) {
  const [open, setOpen] = useState(false)

  if (connections.length === 0) return null

  const byType = {
    previously: connections.filter(c => c.type === 'previously'),
    sets_up: connections.filter(c => c.type === 'sets_up'),
    callback: connections.filter(c => c.type === 'callback'),
  }

  const hasCallback = byType.callback.length > 0
  const chapterLabel = `${currentBook} ${currentChapter}`

  return (
    <div className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(201,168,76,0.12)' }}>
      {/* Header toggle */}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center gap-3 px-4 py-3 transition-colors"
        style={{ background: open ? 'rgba(201,168,76,0.06)' : 'var(--navy-800)' }}
      >
        <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: 'rgba(201,168,76,0.1)' }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--gold-400)' }}>
            <path d="M13.828 10.172a4 4 0 0 0-5.656 0l-4 4a4 4 0 1 0 5.656 5.656l1.102-1.101m-.758-4.899a4 4 0 0 0 5.656 0l4-4a4 4 0 0 0-5.656-5.656l-1.1 1.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <span className="text-sm font-semibold flex-1 text-left" style={{ color: 'var(--ivory-100)' }}>
          Story Thread
        </span>
        {hasCallback && (
          <span className="text-xs rounded-full px-2 py-0.5 font-semibold"
            style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--gold-400)' }}>
            {byType.callback.length} fulfilled
          </span>
        )}
        <svg
          width="14" height="14" viewBox="0 0 24 24" fill="none"
          style={{ color: 'var(--muted-400)', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
          <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div style={{ background: 'var(--navy-900)' }}>
          {(['previously', 'sets_up', 'callback'] as const).map(type => {
            const items = byType[type]
            if (items.length === 0) return null
            const cfg = SECTION_CONFIG[type]
            return (
              <div key={type} className="px-4 py-3" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                {/* Section label */}
                <div className="flex items-center gap-2 mb-2">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style={{ color: cfg.color, flexShrink: 0 }}>
                    {cfg.icon}
                  </svg>
                  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: cfg.color }}>
                    {cfg.label}
                  </span>
                </div>
                {/* Items */}
                <div className="flex flex-col gap-2">
                  {items.map(conn => (
                    <div key={conn.id} className="rounded-lg px-3 py-2" style={{ background: cfg.accent }}>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--ivory-200)' }}>
                        {conn.verse_number && (
                          <span className="text-xs font-semibold mr-1" style={{ color: cfg.color }}>
                            v.{conn.verse_number}
                          </span>
                        )}
                        {conn.description}
                        <ChapterLink conn={conn} />
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
          <div className="px-4 py-2" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
            <p className="text-xs" style={{ color: 'var(--muted-500)' }}>
              Connections in {chapterLabel}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
