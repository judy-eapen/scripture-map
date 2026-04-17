'use client';

import { useState } from 'react';
import type { VerseEntry, TappablePerson, TappablePlace, Person, Place, DifficultPassage, ChapterConnection } from '@/lib/types';

type Segment =
  | { type: 'plain'; text: string }
  | { type: 'person'; text: string; person: Person }
  | { type: 'place'; text: string; place: Place };

function escapeRegex(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function buildSegments(
  text: string,
  people: TappablePerson[],
  places: TappablePlace[]
): Segment[] {
  type Match = {
    start: number;
    end: number;
    term: string;
    entityType: 'person' | 'place';
    person?: Person;
    place?: Place;
  };

  const matches: Match[] = [];

  people.forEach(({ person, tappable_terms }) => {
    tappable_terms.forEach(term => {
      const regex = new RegExp(`\\b${escapeRegex(term)}\\b`, 'gi');
      let m;
      while ((m = regex.exec(text)) !== null) {
        matches.push({ start: m.index, end: m.index + m[0].length, term: m[0], entityType: 'person', person });
      }
    });
  });

  places.forEach(({ place, tappable_terms }) => {
    tappable_terms.forEach(term => {
      const regex = new RegExp(`\\b${escapeRegex(term)}\\b`, 'gi');
      let m;
      while ((m = regex.exec(text)) !== null) {
        matches.push({ start: m.index, end: m.index + m[0].length, term: m[0], entityType: 'place', place });
      }
    });
  });

  matches.sort((a, b) => {
    if (a.start !== b.start) return a.start - b.start;
    if (a.end !== b.end) return b.end - a.end;
    return a.entityType === 'person' ? -1 : 1;
  });

  const filtered: Match[] = [];
  let lastEnd = 0;
  for (const m of matches) {
    if (m.start >= lastEnd) {
      filtered.push(m);
      lastEnd = m.end;
    }
  }

  const segments: Segment[] = [];
  let cursor = 0;
  for (const m of filtered) {
    if (m.start > cursor) {
      segments.push({ type: 'plain', text: text.slice(cursor, m.start) });
    }
    if (m.entityType === 'person' && m.person) {
      segments.push({ type: 'person', text: m.term, person: m.person });
    } else if (m.entityType === 'place' && m.place) {
      segments.push({ type: 'place', text: m.term, place: m.place });
    }
    cursor = m.end;
  }
  if (cursor < text.length) {
    segments.push({ type: 'plain', text: text.slice(cursor) });
  }

  return segments;
}

type Props = {
  verses: VerseEntry[];
  people: TappablePerson[];
  places: TappablePlace[];
  onPersonClick: (person: Person) => void;
  onPlaceClick: (place: Place) => void;
  activePersonId?: string;
  activePlaceId?: string;
  difficultPassages?: DifficultPassage[];
  connections?: ChapterConnection[];
  notedVerses?: Set<number>;
  onVerseClick?: (verseNumber: number) => void;
};

function DifficultPassageCallout({ passage }: { passage: DifficultPassage }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-2 mb-1">
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium transition-all w-full text-left"
        style={{
          background: open ? 'rgba(168,85,247,0.1)' : 'rgba(168,85,247,0.05)',
          border: `1px solid ${open ? 'rgba(168,85,247,0.3)' : 'rgba(168,85,247,0.15)'}`,
          color: 'rgba(192,132,252,0.9)',
        }}>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span>{passage.topic}</span>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="ml-auto"
          style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
          <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
      {open && (
        <div className="mt-1.5 rounded-xl px-4 py-3 space-y-2.5"
          style={{ background: 'rgba(168,85,247,0.06)', border: '1px solid rgba(168,85,247,0.12)' }}>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-1"
              style={{ color: 'rgba(192,132,252,0.7)' }}>Plain language</p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--ivory-200)', lineHeight: '1.8' }}>
              {passage.plain_language}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-1"
              style={{ color: 'rgba(192,132,252,0.7)' }}>Why it matters</p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--ivory-200)', lineHeight: '1.8' }}>
              {passage.theological_context}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function VerseText({
  verses, people, places, onPersonClick, onPlaceClick, activePersonId, activePlaceId,
  difficultPassages = [], connections = [], notedVerses, onVerseClick,
}: Props) {
  // Build a map: verse_number → callback connections for that verse
  const callbacksByVerse = new Map<number, ChapterConnection[]>()
  connections.forEach(conn => {
    if (conn.type === 'callback' && conn.verse_number) {
      const existing = callbacksByVerse.get(conn.verse_number) ?? []
      callbacksByVerse.set(conn.verse_number, [...existing, conn])
    }
  })

  return (
    <div className="verse-text space-y-4">
      {verses.map(verse => {
        const segments = buildSegments(verse.text, people, places);
        const callouts = difficultPassages.filter(p => p.verse_start === verse.verse_number);
        const verseCallbacks = callbacksByVerse.get(verse.verse_number) ?? []
        return (
          <div key={verse.verse_number}>
            <p className="flex gap-3 leading-relaxed">
              {/* Verse number — clickable to add/edit note */}
              <button
                onClick={() => onVerseClick?.(verse.verse_number)}
                className="shrink-0 text-xs font-semibold mt-[5px] w-5 text-right select-none relative group"
                style={{ color: notedVerses?.has(verse.verse_number) ? 'var(--gold-400)' : 'var(--gold-500)', fontVariantNumeric: 'tabular-nums' }}
                title={notedVerses?.has(verse.verse_number) ? 'Edit note' : 'Add note'}
              >
                {verse.verse_number}
                {notedVerses?.has(verse.verse_number) && (
                  <span
                    className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full"
                    style={{ background: 'var(--gold-400)' }}
                  />
                )}
              </button>

              {/* Verse text */}
              <span>
                {segments.map((seg, i) => {
                  if (seg.type === 'plain') {
                    return <span key={i}>{seg.text}</span>;
                  }
                  if (seg.type === 'person') {
                    const isActive = activePersonId === seg.person.id;
                    return (
                      <button
                        key={i}
                        onClick={() => onPersonClick(seg.person)}
                        className="tappable-term inline"
                        style={{
                          background: isActive ? 'rgba(201,168,76,0.18)' : undefined,
                          color: isActive ? 'var(--gold-200)' : undefined,
                          fontWeight: isActive ? '500' : undefined,
                        }}>
                        {seg.text}
                      </button>
                    );
                  }
                  if (seg.type === 'place') {
                    const isActive = activePlaceId === seg.place.id;
                    return (
                      <button
                        key={i}
                        onClick={() => onPlaceClick(seg.place)}
                        className="inline"
                        style={{
                          cursor: 'pointer',
                          borderBottom: '1px dashed var(--kingdom-north)',
                          color: isActive ? 'var(--kingdom-north)' : 'rgba(96,165,250,0.85)',
                          background: isActive ? 'rgba(96,165,250,0.1)' : undefined,
                          paddingBottom: '1px',
                          transition: 'background-color 0.15s, color 0.15s',
                        }}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLElement).style.background = 'rgba(96,165,250,0.12)';
                          (e.currentTarget as HTMLElement).style.color = 'var(--kingdom-north)';
                        }}
                        onMouseLeave={e => {
                          if (!isActive) {
                            (e.currentTarget as HTMLElement).style.background = 'transparent';
                            (e.currentTarget as HTMLElement).style.color = 'rgba(96,165,250,0.85)';
                          }
                        }}>
                        {seg.text}
                      </button>
                    );
                  }
                })}
              </span>
            </p>

            {callouts.map(p => (
              <DifficultPassageCallout key={p.id} passage={p} />
            ))}
            {verseCallbacks.map(cb => (
              <div key={cb.id} className="flex items-start gap-2 mt-1 mb-1 ml-8 rounded-lg px-2.5 py-1.5"
                style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.15)' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--gold-400)', flexShrink: 0, marginTop: 2 }}>
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--ivory-300)' }}>
                  {cb.description}
                </p>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
