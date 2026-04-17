'use client'

import { useState } from 'react'
import type { VerseNote } from '@/lib/types'

type Props = {
  notes: VerseNote[]
  onEditNote: (verseNumber: number, currentText: string) => void
}

export default function NotesPanel({ notes, onEditNote }: Props) {
  const [open, setOpen] = useState(false)

  if (notes.length === 0) return null

  return (
    <div className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(201,168,76,0.15)' }}>
      {/* Header toggle */}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center gap-3 px-4 py-3 transition-colors"
        style={{ background: open ? 'rgba(201,168,76,0.08)' : 'var(--navy-800)' }}
      >
        <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: 'rgba(201,168,76,0.12)' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--gold-400)' }}>
            <path d="M11 5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-5m-1.414-9.414a2 2 0 1 1 2.828 2.828L11.828 15H9v-2.828l8.586-8.586z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <span className="text-sm font-semibold flex-1 text-left" style={{ color: 'var(--ivory-100)' }}>
          My Notes
        </span>
        <span className="text-xs rounded-full px-2 py-0.5 font-semibold"
          style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--gold-400)' }}>
          {notes.length}
        </span>
        <svg
          width="14" height="14" viewBox="0 0 24 24" fill="none"
          style={{ color: 'var(--muted-400)', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
          <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="flex flex-col" style={{ background: 'var(--navy-900)' }}>
          {notes.map(note => (
            <div
              key={note.id}
              className="px-4 py-3"
              style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
            >
              <div className="flex items-start gap-3">
                <span className="text-xs font-bold mt-0.5 w-5 text-right flex-shrink-0"
                  style={{ color: 'var(--gold-500)' }}>
                  {note.verse_number}
                </span>
                <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--ivory-200)' }}>
                  {note.note_text}
                </p>
                <button
                  onClick={() => onEditNote(note.verse_number, note.note_text)}
                  className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-colors"
                  style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--muted-400)' }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path d="M11 5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-5m-1.414-9.414a2 2 0 1 1 2.828 2.828L11.828 15H9v-2.828l8.586-8.586z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
