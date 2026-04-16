'use client';

import { useState } from 'react';
import type { VerseEntry, TappablePerson, TappablePlace, Person, Place, DifficultPassage } from '@/lib/types';

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

  // Sort: earlier first, longer wins on tie, person wins over place on same span
  matches.sort((a, b) => {
    if (a.start !== b.start) return a.start - b.start;
    if (a.end !== b.end) return b.end - a.end;
    return a.entityType === 'person' ? -1 : 1;
  });

  // Remove overlapping matches (keep earlier/longer)
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
  verses, people, places, onPersonClick, onPlaceClick, activePersonId, activePlaceId, difficultPassages = []
}: Props) {
  return (
    <div className="verse-text space-y-4">
      {verses.map(verse => {
        const segments = buildSegments(verse.text, people, places);
        // Find any difficult passages that start at this verse
        const callouts = difficultPassages.filter(p => p.verse_start === verse.verse_number);
        return (
          <div key={verse.verse_number}>
            <p className="flex gap-3 leading-relaxed">
              {/* Verse number */}
              <span
                className="shrink-0 text-xs font-semibold mt-[5px] w-5 text-right select-none"
                style={{ color: 'var(--gold-500)', fontVariantNumeric: 'tabular-nums' }}>
                {verse.verse_number}
              </span>

              {/* Verse text with highlighted terms */}
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
          </div>
        );
      })}
    </div>
  );
}
