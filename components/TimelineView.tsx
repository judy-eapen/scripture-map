'use client';

import { useMemo, useState } from 'react';
import type { TimelineKing, NavChapter, Person } from '@/lib/types';
import ChapterNav from '@/components/ChapterNav';
import KingdomTimeline, { type ProphetEntry } from '@/components/KingdomTimeline';
import CharacterCardModal from '@/components/CharacterCardModal';
import ProphetModal from '@/components/ProphetModal';

type Props = {
  kings: TimelineKing[];
  navData: { book: string; chapters: NavChapter[] }[];
};

function kingToPerson(king: TimelineKing): Person {
  const kingdomLabel = king.kingdom === 'north' ? 'Northern Israel' : 'Southern Judah';
  return {
    id: king.id,
    name: king.name + (king.is_queen ? ' (Queen)' : ''),
    type: 'king',
    kingdom: king.kingdom,
    reign_start_bc: king.reign_start_bc,
    reign_end_bc: king.reign_end_bc,
    verdict: king.verdict,
    dates_approximate: king.dates_approximate,
    bio: king.bio ?? `${king.name} ruled ${kingdomLabel} from approximately ${king.reign_start_bc} to ${king.reign_end_bc} BC${king.dates_approximate ? ' (dates approximate)' : ''}.`,
  };
}

export default function TimelineView({ kings, navData }: Props) {
  const [activeKing, setActiveKing] = useState<TimelineKing | null>(null);
  const [activeProphet, setActiveProphet] = useState<ProphetEntry | null>(null);

  // Find the furthest read chapter by narrative order, then use its year
  const youAreHereYear = useMemo(() => {
    const readWithYears: { bookIdx: number; num: number; year: number }[] = [];
    navData.forEach((b, bookIdx) => {
      b.chapters.forEach(ch => {
        if (ch.is_read && ch.year_start_bc) {
          readWithYears.push({ bookIdx, num: ch.number, year: ch.year_start_bc });
        }
      });
    });
    if (readWithYears.length === 0) return undefined;
    // Sort descending by narrative position (2 Kings 25 first)
    readWithYears.sort((a, b) => b.bookIdx - a.bookIdx || b.num - a.num);
    return readWithYears[0].year;
  }, [navData]);

  return (
    <div className="flex overflow-hidden h-screen-safe" style={{ background: 'var(--navy-950)' }}>

      {/* Left sidebar nav */}
      <ChapterNav
        navData={navData}
        currentBook="1 Kings"
        currentChapter={0}
      />

      {/* Main content */}
      <main className="flex-1 overflow-y-auto" style={{ background: 'var(--navy-950)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 32px 80px' }}>

          {/* Page header */}
          <div style={{ marginBottom: '32px' }}>
            <h1 style={{
              fontFamily: 'var(--font-playfair)', fontSize: '2.5rem', fontWeight: 500,
              color: 'var(--ivory-100)', lineHeight: 1.2, marginBottom: '8px',
            }}>
              Kingdom Timeline
            </h1>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted-400)', letterSpacing: '0.03em' }}>
              ~930 BC &mdash; 586 BC &middot; Divided Kingdom era
            </p>

            <div style={{
              height: '1px',
              background: 'linear-gradient(90deg, var(--gold-500), transparent)',
              marginTop: '20px', marginBottom: '24px',
            }} />

            {/* Legend */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
              <LegendItem color="var(--verdict-good)" label="Faithful" />
              <LegendItem color="var(--verdict-evil)" label="Wicked" />
              <LegendItem color="var(--verdict-mixed)" label="Mixed" />
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '28px', height: '14px', borderRadius: '3px', border: '1px dashed var(--muted-500)', background: 'transparent' }} />
                <span style={{ fontSize: '12px', color: 'var(--muted-400)' }}>Dates approximate</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '2px', background: 'rgba(245,158,11,0.3)', border: '1px solid rgba(245,158,11,0.6)' }} />
                <span style={{ fontSize: '12px', color: 'var(--muted-400)' }}>Prophet active (click for bio)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '9px', height: '14px', borderRadius: '2px', background: 'rgba(239,68,68,0.65)', border: '1.5px solid rgba(239,68,68,0.85)' }} />
                <span style={{ fontSize: '12px', color: 'var(--muted-400)' }}>Short reign (&lt;3 yrs)</span>
              </div>
              {youAreHereYear && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '2px', height: '14px', background: 'var(--gold-400)', borderRadius: '1px' }} />
                  <span style={{ fontSize: '12px', color: 'var(--gold-400)' }}>You are here</span>
                </div>
              )}
            </div>
          </div>

          <KingdomTimeline
            kings={kings}
            youAreHereYear={youAreHereYear}
            onKingClick={setActiveKing}
            onProphetClick={setActiveProphet}
          />

          <p style={{
            marginTop: '28px', fontSize: '13px', color: 'var(--muted-500)',
            lineHeight: '1.7', maxWidth: '700px',
          }}>
            Timeline spans from Solomon&apos;s Temple (966 BC) through the fall of Jerusalem under
            Nebuchadnezzar (586 BC). Click any king or prophet to view their character card.
            Dashed borders indicate dates that are debated or reconstructed from overlapping regnal records.
          </p>
        </div>
      </main>

      {activeKing && (
        <CharacterCardModal
          person={kingToPerson(activeKing)}
          onClose={() => setActiveKing(null)}
        />
      )}
      {activeProphet && (
        <ProphetModal
          prophet={activeProphet}
          navData={navData}
          onClose={() => setActiveProphet(null)}
        />
      )}
    </div>
  );
}

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: color, flexShrink: 0 }} />
      <span style={{ fontSize: '12px', color: 'var(--muted-400)' }}>{label}</span>
    </div>
  );
}
