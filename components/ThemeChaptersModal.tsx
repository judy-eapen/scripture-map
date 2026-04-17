'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import type { Theme } from '@/lib/types'

type Props = {
  theme: Theme
  onClose: () => void
}

type ChapterEntry = {
  book: string
  chapter_number: number
  note: string
}

function bookSlug(name: string) {
  return name === '1 Kings' ? '1-kings' : '2-kings'
}

export default function ThemeChaptersModal({ theme, onClose }: Props) {
  const [chapters, setChapters] = useState<ChapterEntry[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/theme-chapters/${theme.id}`)
      .then(r => r.json())
      .then(data => { setChapters(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [theme.id])

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0"
        style={{ background: 'rgba(0,0,0,0.6)', zIndex: 9998 }}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg rounded-2xl flex flex-col overflow-hidden"
        style={{
          background: 'var(--navy-800)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 24px 64px rgba(0,0,0,0.6)',
          zIndex: 9999,
          maxHeight: '80vh',
        }}
      >
        {/* Header */}
        <div className="flex items-start gap-3 p-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', flexShrink: 0 }}>
          <div
            className="w-3 h-3 rounded-full flex-shrink-0 mt-1.5"
            style={{ background: theme.color_hex }}
          />
          <div className="flex-1">
            <p className="text-base font-semibold" style={{ color: 'var(--ivory-100)' }}>{theme.name}</p>
            <p className="text-sm leading-relaxed mt-1" style={{ color: 'var(--muted-400)' }}>{theme.description}</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: 'rgba(255,255,255,0.06)', color: 'var(--muted-400)' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Chapter list */}
        <div className="overflow-y-auto flex-1 p-4">
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <div className="w-5 h-5 rounded-full border-2 border-t-transparent animate-spin" style={{ borderColor: `${theme.color_hex}44`, borderTopColor: theme.color_hex }} />
            </div>
          ) : chapters.length === 0 ? (
            <p className="text-sm text-center py-8" style={{ color: 'var(--muted-400)' }}>No chapters found for this theme.</p>
          ) : (
            <div className="flex flex-col gap-2">
              {chapters.map((ch, i) => (
                <Link
                  key={i}
                  href={`/study/${bookSlug(ch.book)}/${ch.chapter_number}`}
                  onClick={onClose}
                  className="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-all group"
                  style={{ background: `${theme.color_hex}0a`, border: `1px solid ${theme.color_hex}1a` }}
                >
                  <div className="flex-shrink-0">
                    <p className="text-xs font-bold" style={{ color: theme.color_hex }}>{ch.book}</p>
                    <p className="text-lg font-semibold leading-tight" style={{ color: 'var(--ivory-100)' }}>{ch.chapter_number}</p>
                  </div>
                  <p className="text-xs leading-relaxed flex-1 mt-0.5" style={{ color: 'var(--muted-400)' }}>{ch.note}</p>
                  <svg className="flex-shrink-0 mt-1 opacity-30 group-hover:opacity-70 transition-opacity" width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="var(--muted-400)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="px-5 py-3 text-xs" style={{ color: 'var(--muted-500)', borderTop: '1px solid rgba(255,255,255,0.04)', flexShrink: 0 }}>
          {!loading && `${chapters.length} chapters tagged with this theme`}
        </div>
      </div>
    </>
  )
}
