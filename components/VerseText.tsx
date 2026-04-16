'use client';

import type { VerseEntry, TappablePerson, TappablePlace, Person, Place } from '@/lib/types';

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
};

export default function VerseText({
  verses, people, places, onPersonClick, onPlaceClick, activePersonId, activePlaceId
}: Props) {
  return (
    <div className="verse-text space-y-4">
      {verses.map(verse => {
        const segments = buildSegments(verse.text, people, places);
        return (
          <p key={verse.verse_number} className="flex gap-3 leading-relaxed">
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
        );
      })}
    </div>
  );
}
