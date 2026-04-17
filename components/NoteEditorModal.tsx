'use client'

import { useState, useTransition } from 'react'
import { saveVerseNote, deleteVerseNote } from '@/app/actions/notes'

type Props = {
  chapterId: string
  bookSlug: string
  chapterNum: number
  verseNumber: number
  initialNote: string
  onClose: () => void
  onSaved: (verseNumber: number, noteText: string) => void
  onDeleted: (verseNumber: number) => void
}

export default function NoteEditorModal({
  chapterId, bookSlug, chapterNum, verseNumber, initialNote, onClose, onSaved, onDeleted
}: Props) {
  const [text, setText] = useState(initialNote)
  const [isPending, startTransition] = useTransition()

  function handleSave() {
    if (!text.trim()) return
    startTransition(async () => {
      await saveVerseNote(chapterId, verseNumber, text.trim(), bookSlug, chapterNum)
      onSaved(verseNumber, text.trim())
      onClose()
    })
  }

  function handleDelete() {
    startTransition(async () => {
      await deleteVerseNote(chapterId, verseNumber, bookSlug, chapterNum)
      onDeleted(verseNumber)
      onClose()
    })
  }

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
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md rounded-2xl p-6 flex flex-col gap-4"
        style={{
          background: 'var(--navy-800)',
          border: '1px solid rgba(201,168,76,0.2)',
          boxShadow: '0 24px 64px rgba(0,0,0,0.6)',
          zIndex: 9999,
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--gold-400)' }}>
              Verse {verseNumber}
            </p>
            <p className="text-base font-semibold" style={{ color: 'var(--ivory-100)' }}>
              {initialNote ? 'Edit note' : 'Add note'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
            style={{ background: 'rgba(255,255,255,0.06)', color: 'var(--muted-400)' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Textarea */}
        <textarea
          autoFocus
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Write your note here…"
          rows={5}
          className="w-full rounded-xl px-4 py-3 text-sm leading-relaxed resize-none outline-none transition-all"
          style={{
            background: 'var(--navy-900)',
            border: '1px solid rgba(201,168,76,0.15)',
            color: 'var(--ivory-100)',
          }}
          onKeyDown={e => {
            if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) handleSave()
          }}
        />

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleSave}
            disabled={!text.trim() || isPending}
            className="flex-1 rounded-xl py-2.5 text-sm font-semibold transition-all"
            style={{
              background: text.trim() ? 'var(--gold-400)' : 'rgba(201,168,76,0.2)',
              color: text.trim() ? 'var(--navy-950)' : 'var(--muted-500)',
              cursor: text.trim() ? 'pointer' : 'not-allowed',
            }}
          >
            {isPending ? 'Saving…' : 'Save note'}
          </button>

          {initialNote && (
            <button
              onClick={handleDelete}
              disabled={isPending}
              className="rounded-xl px-4 py-2.5 text-sm font-medium transition-all"
              style={{
                background: 'rgba(239,68,68,0.1)',
                border: '1px solid rgba(239,68,68,0.2)',
                color: 'rgba(239,68,68,0.8)',
              }}
            >
              Delete
            </button>
          )}

          <button
            onClick={onClose}
            className="rounded-xl px-4 py-2.5 text-sm font-medium"
            style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--muted-400)' }}
          >
            Cancel
          </button>
        </div>

        <p className="text-xs text-center" style={{ color: 'var(--muted-500)' }}>
          ⌘ + Enter to save
        </p>
      </div>
    </>
  )
}
