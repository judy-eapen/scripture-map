'use client'

import Link from 'next/link'
import type { Prophecy } from '@/lib/types'

type Props = {
  prophecy: Prophecy
  currentChapterId: string
  onClose: () => void
}

function bookSlug(name: string) {
  return name === '1 Kings' ? '1-kings' : '2-kings'
}

export default function ProphecyModal({ prophecy, currentChapterId, onClose }: Props) {
  const isProphecyChapter = prophecy.prophecy_chapter_id === currentChapterId
  const isFulfillmentChapter = prophecy.fulfillment_chapter_id === currentChapterId

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0"
        style={{ background: 'rgba(0,0,0,0.6)', zIndex: 9998 }}
        onClick={onClose}
      />

      {/* Side panel */}
      <div
        className="fixed top-0 right-0 h-full w-full max-w-sm flex flex-col overflow-hidden"
        style={{
          background: 'var(--navy-900)',
          borderLeft: '1px solid rgba(201,168,76,0.15)',
          boxShadow: '-16px 0 48px rgba(0,0,0,0.5)',
          zIndex: 9999,
        }}
      >
        {/* Header */}
        <div className="flex items-start gap-3 p-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.2)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--gold-400)' }}>
              <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--gold-400)' }}>
              {prophecy.fulfilled ? 'Prophecy Fulfilled' : 'Prophecy'}
              {prophecy.prophet && ` · ${prophecy.prophet}`}
            </p>
            <p className="text-base font-semibold leading-snug" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--ivory-100)' }}>
              {prophecy.title}
            </p>
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

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-5">

          {/* The prophecy */}
          <div className="rounded-xl p-4" style={{ background: 'rgba(168,85,247,0.06)', border: '1px solid rgba(168,85,247,0.15)' }}>
            <div className="flex items-center gap-2 mb-2">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style={{ color: 'rgba(192,132,252,0.8)' }}>
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'rgba(192,132,252,0.8)' }}>
                The Prophecy
              </span>
              {prophecy.prophecy_book && prophecy.prophecy_chapter_number && (
                <span className="text-xs ml-auto" style={{ color: 'rgba(192,132,252,0.6)' }}>
                  {prophecy.prophecy_book} {prophecy.prophecy_chapter_number}:{prophecy.prophecy_verse_start}
                  {prophecy.prophecy_verse_end !== prophecy.prophecy_verse_start && `–${prophecy.prophecy_verse_end}`}
                </span>
              )}
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--ivory-200)' }}>
              {prophecy.prophecy_summary}
            </p>
            {!isProphecyChapter && prophecy.prophecy_book && prophecy.prophecy_chapter_number && (
              <Link
                href={`/study/${bookSlug(prophecy.prophecy_book)}/${prophecy.prophecy_chapter_number}`}
                className="inline-flex items-center gap-1 mt-2 text-xs font-semibold transition-colors"
                style={{ color: 'rgba(192,132,252,0.8)' }}
              >
                Go to {prophecy.prophecy_book} {prophecy.prophecy_chapter_number}
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            )}
          </div>

          {/* The fulfillment */}
          {prophecy.fulfilled && prophecy.fulfillment_summary && (
            <div className="rounded-xl p-4" style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.15)' }}>
              <div className="flex items-center gap-2 mb-2">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--gold-400)' }}>
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--gold-400)' }}>
                  Fulfilled
                </span>
                {prophecy.fulfillment_book && prophecy.fulfillment_chapter_number && (
                  <span className="text-xs ml-auto" style={{ color: 'rgba(201,168,76,0.6)' }}>
                    {prophecy.fulfillment_book} {prophecy.fulfillment_chapter_number}:{prophecy.fulfillment_verse_start}
                    {prophecy.fulfillment_verse_end !== prophecy.fulfillment_verse_start && `–${prophecy.fulfillment_verse_end}`}
                  </span>
                )}
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--ivory-200)' }}>
                {prophecy.fulfillment_summary}
              </p>
              {!isFulfillmentChapter && prophecy.fulfillment_book && prophecy.fulfillment_chapter_number && (
                <Link
                  href={`/study/${bookSlug(prophecy.fulfillment_book)}/${prophecy.fulfillment_chapter_number}`}
                  className="inline-flex items-center gap-1 mt-2 text-xs font-semibold transition-colors"
                  style={{ color: 'var(--gold-400)' }}
                >
                  Go to {prophecy.fulfillment_book} {prophecy.fulfillment_chapter_number}
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              )}
            </div>
          )}

          {!prophecy.fulfilled && (
            <div className="rounded-xl p-4" style={{ background: 'rgba(148,163,184,0.05)', border: '1px solid rgba(148,163,184,0.1)' }}>
              <p className="text-xs" style={{ color: 'var(--muted-400)' }}>
                Fulfillment not recorded within 1 & 2 Kings. The full fulfillment may be in later Scripture.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
