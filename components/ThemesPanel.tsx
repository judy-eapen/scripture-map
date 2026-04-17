'use client'

import { useState } from 'react'
import type { ChapterTheme, Theme } from '@/lib/types'

type Props = {
  themes: ChapterTheme[]
  onThemeClick: (theme: Theme) => void
}

export default function ThemesPanel({ themes, onThemeClick }: Props) {
  const [open, setOpen] = useState(false)

  if (themes.length === 0) return null

  return (
    <div className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
      {/* Header toggle */}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center gap-3 px-4 py-3 transition-colors"
        style={{ background: open ? 'rgba(255,255,255,0.04)' : 'var(--navy-800)' }}
      >
        <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: 'rgba(255,255,255,0.06)' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--ivory-300)' }}>
            <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <span className="text-sm font-semibold flex-1 text-left" style={{ color: 'var(--ivory-100)' }}>
          Themes
        </span>
        <div className="flex items-center gap-1">
          {themes.slice(0, 4).map(ct => (
            <div
              key={ct.theme.id}
              className="w-2 h-2 rounded-full"
              style={{ background: ct.theme.color_hex }}
            />
          ))}
          {themes.length > 4 && (
            <span className="text-xs ml-1" style={{ color: 'var(--muted-500)' }}>+{themes.length - 4}</span>
          )}
        </div>
        <svg
          width="14" height="14" viewBox="0 0 24 24" fill="none"
          style={{ color: 'var(--muted-400)', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
          <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="px-4 py-3 flex flex-col gap-2" style={{ background: 'var(--navy-900)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          {themes.map(ct => (
            <button
              key={ct.theme.id}
              onClick={() => onThemeClick(ct.theme)}
              className="flex items-start gap-3 rounded-xl px-3 py-2.5 text-left transition-all group"
              style={{ background: `${ct.theme.color_hex}0d`, border: `1px solid ${ct.theme.color_hex}22` }}
            >
              <div
                className="w-2.5 h-2.5 rounded-full flex-shrink-0 mt-1.5"
                style={{ background: ct.theme.color_hex }}
              />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold mb-0.5" style={{ color: ct.theme.color_hex }}>{ct.theme.name}</p>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--muted-400)' }}>{ct.note || ct.theme.description}</p>
              </div>
              <svg className="flex-shrink-0 opacity-30 group-hover:opacity-70 transition-opacity mt-1" width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="var(--muted-400)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          ))}
          <p className="text-xs mt-1" style={{ color: 'var(--muted-500)' }}>Click a theme to see all chapters where it appears</p>
        </div>
      )}
    </div>
  )
}
