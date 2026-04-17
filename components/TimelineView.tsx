'use client';

import { useState } from 'react';
import type { TimelineKing, NavChapter, Person } from '@/lib/types';
import ChapterNav from '@/components/ChapterNav';
import KingdomTimeline from '@/components/KingdomTimeline';
import CharacterCardModal from '@/components/CharacterCardModal';

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
    bio: `${king.name} ruled ${kingdomLabel} from approximately ${king.reign_start_bc} to ${king.reign_end_bc} BC${king.dates_approximate ? ' (dates approximate)' : ''}.`,
  };
}

export default function TimelineView({ kings, navData }: Props) {
  const [activeKing, setActiveKing] = useState<TimelineKing | null>(null);

  return (
    <div className="flex overflow-hidden h-screen-safe" style={{ background: 'var(--navy-950)' }}>

      {/* Left sidebar nav */}
      <ChapterNav
        navData={navData}
        currentBook="1 Kings"
        currentChapter={0}
      />

      {/* Main content */}
      <main
        className="flex-1 overflow-y-auto"
        style={{ background: 'var(--navy-950)' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 32px 80px' }}>

          {/* Page header */}
          <div style={{ marginBottom: '32px' }}>
            <h1
              style={{
                fontFamily: 'var(--font-playfair)',
                fontSize: '2.5rem',
                fontWeight: 500,
                color: 'var(--ivory-100)',
                lineHeight: 1.2,
                marginBottom: '8px',
              }}
            >
              Kingdom Timeline
            </h1>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted-400)', letterSpacing: '0.03em' }}>
              ~930 BC &mdash; 586 BC &middot; Divided Kingdom era
            </p>

            {/* Gold divider */}
            <div
              style={{
                height: '1px',
                background: 'linear-gradient(90deg, var(--gold-500), transparent)',
                marginTop: '20px',
                marginBottom: '24px',
              }}
            />

            {/* Legend */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
              <LegendItem color="var(--verdict-good)" label="Faithful" />
              <LegendItem color="var(--verdict-evil)" label="Wicked" />
              <LegendItem color="var(--verdict-mixed)" label="Mixed" />
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div
                  style={{
                    width: '28px',
                    height: '14px',
                    borderRadius: '3px',
                    border: '1px dashed var(--muted-500)',
                    background: 'transparent',
                  }}
                />
                <span style={{ fontSize: '12px', color: 'var(--muted-400)' }}>Dates approximate</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div
                  style={{
                    width: '28px',
                    height: '14px',
                    borderRadius: '3px',
                    background: 'rgba(201,168,76,0.2)',
                    border: '1px solid rgba(201,168,76,0.4)',
                  }}
                />
                <span style={{ fontSize: '12px', color: 'var(--muted-400)' }}>Chapter year</span>
              </div>
            </div>
          </div>

          {/* Timeline — full width, highlight ~870 BC for 1 Kings 18 context */}
          <KingdomTimeline
            kings={kings}
            highlightYearBC={870}
            onKingClick={(king) => setActiveKing(king)}
          />

          {/* Footer note */}
          <p
            style={{
              marginTop: '28px',
              fontSize: '13px',
              color: 'var(--muted-500)',
              lineHeight: '1.7',
              maxWidth: '700px',
            }}
          >
            Timeline spans from the division of the kingdom under Rehoboam (930 BC) through the fall
            of Jerusalem under Nebuchadnezzar (586 BC). Click any king to view their character card.
            Dashed borders indicate dates that are debated or reconstructed from overlapping regnal
            records.
          </p>
        </div>
      </main>

      {/* Character card modal for clicked king */}
      {activeKing && (
        <CharacterCardModal
          person={kingToPerson(activeKing)}
          onClose={() => setActiveKing(null)}
        />
      )}
    </div>
  );
}

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div
        style={{
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          background: color,
          flexShrink: 0,
        }}
      />
      <span style={{ fontSize: '12px', color: 'var(--muted-400)' }}>{label}</span>
    </div>
  );
}
