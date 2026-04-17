'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import type { Person } from '@/lib/types';

type PersonAppearance = {
  book: '1 Kings' | '2 Kings';
  book_slug: '1-kings' | '2-kings';
  chapter_number: number;
  read_at: string | null;
};

const verdictConfig = {
  good: { label: 'Faithful', color: 'var(--verdict-good)', bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.3)' },
  evil: { label: 'Wicked', color: 'var(--verdict-evil)', bg: 'rgba(239,68,68,0.1)', border: 'rgba(239,68,68,0.3)' },
  mixed: { label: 'Mixed', color: 'var(--verdict-mixed)', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.3)' },
};

const typeLabels: Record<string, string> = {
  king: 'King',
  prophet: 'Prophet',
  official: 'Royal Official',
  foreign_ruler: 'Foreign Ruler',
  other: 'Figure',
};

const kingdomLabels: Record<string, string> = {
  north: 'Northern Israel',
  south: 'Southern Judah',
  foreign: 'Foreign Nation',
};

function formatYearBC(year: number | undefined) {
  if (!year) return null;
  return `${Math.abs(year)} BC`;
}

type Props = {
  person: Person;
  onClose: () => void;
};

export default function CharacterCardModal({ person, onClose }: Props) {
  const verdict = person.verdict ? verdictConfig[person.verdict] : null;
  const hasReignDates = person.reign_start_bc !== undefined;

  const [appearances, setAppearances] = useState<PersonAppearance[] | null>(null);

  useEffect(() => {
    setAppearances(null);
    fetch(`/api/person/${person.id}/appearances`)
      .then(r => r.json())
      .then(setAppearances)
      .catch(() => setAppearances([]));
  }, [person.id]);

  // Find the most recently read chapter
  const lastSeen = appearances
    ?.filter(a => a.read_at !== null)
    .sort((a, b) => new Date(b.read_at!).getTime() - new Date(a.read_at!).getTime())[0] ?? null;

  // Group appearances by book
  const byBook = appearances
    ? (['1 Kings', '2 Kings'] as const)
        .map(book => ({
          book,
          book_slug: book === '1 Kings' ? '1-kings' : '2-kings',
          chapters: appearances.filter(a => a.book === book),
        }))
        .filter(g => g.chapters.length > 0)
    : [];

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0"
        style={{ background: 'rgba(0,0,0,0.5)', zIndex: 9998 }}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="fixed right-0 top-0 h-full w-full max-w-sm flex flex-col overflow-y-auto"
        style={{
          zIndex: 9999,
          background: 'var(--navy-800)',
          borderLeft: '1px solid rgba(201,168,76,0.15)',
          boxShadow: '-24px 0 48px rgba(0,0,0,0.5)',
        }}>

        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-4 shrink-0"
          style={{ borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
          <div className="flex-1 min-w-0">
            {/* Type badge */}
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider"
                style={{ background: 'rgba(255,255,255,0.06)', color: 'var(--muted-400)' }}>
                {typeLabels[person.type]}
              </span>
              {person.kingdom && (
                <span className="text-xs font-medium px-2 py-0.5 rounded-full"
                  style={{
                    background: person.kingdom === 'north' ? 'rgba(96,165,250,0.1)' : person.kingdom === 'south' ? 'rgba(167,139,250,0.1)' : 'rgba(255,255,255,0.05)',
                    color: person.kingdom === 'north' ? 'var(--kingdom-north)' : person.kingdom === 'south' ? 'var(--kingdom-south)' : 'var(--muted-400)',
                  }}>
                  {kingdomLabels[person.kingdom]}
                </span>
              )}
            </div>

            <h2 className="text-2xl font-medium leading-tight"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--ivory-100)' }}>
              {person.name}
            </h2>
            {person.alt_names && person.alt_names.length > 0 && (
              <p className="text-xs mt-1" style={{ color: 'var(--muted-400)' }}>
                Also: {person.alt_names.join(', ')}
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            className="ml-4 shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
            style={{ color: 'var(--muted-400)', background: 'rgba(255,255,255,0.04)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Verdict + reign dates */}
        <div className="px-6 py-4 flex items-center gap-3 flex-wrap"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          {verdict && (
            <div className="flex items-center gap-2 rounded-xl px-3 py-2"
              style={{ background: verdict.bg, border: `1px solid ${verdict.border}` }}>
              <div className="w-2 h-2 rounded-full" style={{ background: verdict.color }} />
              <span className="text-sm font-semibold" style={{ color: verdict.color }}>
                {verdict.label}
              </span>
            </div>
          )}

          {hasReignDates && (
            <div className="flex items-center gap-1.5 text-sm" style={{ color: 'var(--muted-400)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M3 9h18M8 2v4M16 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span>
                {formatYearBC(person.reign_start_bc)} – {formatYearBC(person.reign_end_bc)}
                {person.dates_approximate && (
                  <span className="text-xs ml-1" style={{ color: 'var(--muted-500)' }}>(approx.)</span>
                )}
              </span>
            </div>
          )}
        </div>

        {/* Bio */}
        <div className="px-6 pt-5 pb-2">
          <p className="text-sm leading-relaxed" style={{ color: 'var(--ivory-200)', lineHeight: '1.8' }}>
            {person.bio}
          </p>
        </div>

        {/* Contemporary events */}
        {person.contemporary_events && (
          <div className="px-6 py-4 mx-6 mt-4 rounded-xl"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--gold-400)' }}>
              Historical context
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-400)', lineHeight: '1.75' }}>
              {person.contemporary_events}
            </p>
          </div>
        )}

        {/* Scripture journey */}
        {appearances !== null && appearances.length > 0 && (
          <div className="px-6 mt-5">
            <div className="rounded-xl px-4 py-4"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>

              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--gold-400)' }}>
                  Appears in
                </p>
                <span className="text-xs" style={{ color: 'var(--muted-500)' }}>
                  {appearances.length} chapter{appearances.length !== 1 ? 's' : ''}
                </span>
              </div>

              {/* Last seen callout */}
              {lastSeen && (
                <Link
                  href={`/study/${lastSeen.book_slug}/${lastSeen.chapter_number}`}
                  className="flex items-center justify-between rounded-lg px-3 py-2 mb-3 transition-all"
                  style={{
                    background: 'rgba(201,168,76,0.08)',
                    border: '1px solid rgba(201,168,76,0.2)',
                  }}>
                  <div className="flex items-center gap-2">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--gold-400)', flexShrink: 0 }}>
                      <circle cx="12" cy="12" r="3" fill="currentColor" />
                      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <span className="text-xs font-medium" style={{ color: 'var(--gold-300)' }}>
                      Last seen
                    </span>
                  </div>
                  <span className="text-xs font-semibold" style={{ color: 'var(--gold-200)' }}>
                    {lastSeen.book} · Ch. {lastSeen.chapter_number}
                  </span>
                </Link>
              )}

              {/* Chapter pills by book */}
              <div className="space-y-2.5">
                {byBook.map(({ book, book_slug, chapters }) => (
                  <div key={book}>
                    <p className="text-xs mb-1.5" style={{ color: 'var(--muted-500)' }}>{book}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {chapters.map(a => {
                        const isRead = a.read_at !== null;
                        const isLastSeen = lastSeen?.book === a.book && lastSeen?.chapter_number === a.chapter_number;
                        return (
                          <Link
                            key={a.chapter_number}
                            href={`/study/${book_slug}/${a.chapter_number}`}
                            className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium transition-all"
                            style={{
                              background: isLastSeen
                                ? 'rgba(201,168,76,0.15)'
                                : isRead
                                  ? 'rgba(16,185,129,0.08)'
                                  : 'rgba(255,255,255,0.04)',
                              border: `1px solid ${isLastSeen ? 'rgba(201,168,76,0.35)' : isRead ? 'rgba(16,185,129,0.2)' : 'rgba(255,255,255,0.07)'}`,
                              color: isLastSeen
                                ? 'var(--gold-300)'
                                : isRead
                                  ? 'var(--verdict-good)'
                                  : 'var(--muted-500)',
                            }}>
                            {isRead && (
                              <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
                                <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                            Ch. {a.chapter_number}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Prompt to sign in if no read chapters */}
              {lastSeen === null && appearances.every(a => a.read_at === null) && (
                <p className="text-xs mt-3" style={{ color: 'var(--muted-500)' }}>
                  Mark chapters as read to track where you last saw {person.name}.
                </p>
              )}
            </div>
          </div>
        )}

        {/* Spacer */}
        <div className="flex-1" />

        {/* Footer */}
        <div className="p-6 shrink-0 space-y-3" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          {person.hasGenealogyNode && (
            <a
              href="/genealogy"
              className="flex items-center justify-center gap-2 w-full rounded-xl px-4 py-2.5 text-sm font-medium transition-all"
              style={{
                background: 'rgba(201,168,76,0.06)',
                border: '1px solid rgba(201,168,76,0.2)',
                color: 'var(--gold-300)',
              }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="5" cy="19" r="2" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="19" cy="19" r="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M12 7v4M12 11l-7 6M12 11l7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              See in Dynasty Web
            </a>
          )}
          <p className="text-xs text-center" style={{ color: 'var(--muted-500)' }}>
            Tap any highlighted name in the text to view their card
          </p>
        </div>
      </div>
    </>
  );
}
