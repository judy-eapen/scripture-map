'use client';

import { useState } from 'react';
import type { NeighboringNation } from '@/lib/types';

type Props = {
  nations: NeighboringNation[];
  chapterYearBC: number;
};

function GlobeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 3c-2.5 3-4 5.5-4 9s1.5 6 4 9M12 3c2.5 3 4 5.5 4 9s-1.5 6-4 9M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      style={{ transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0 }}
    >
      <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function NationCard({ nation }: { nation: NeighboringNation }) {
  return (
    <div
      style={{
        borderRadius: '10px',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Colored bar + nation name */}
      <div style={{ display: 'flex', alignItems: 'stretch' }}>
        {/* Left color bar */}
        <div
          style={{
            width: '4px',
            flexShrink: 0,
            background: nation.color,
            opacity: 0.85,
          }}
        />

        {/* Card content */}
        <div style={{ flex: 1, padding: '12px 14px 14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            {/* Color dot */}
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: nation.color,
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: 'var(--ivory-100)',
                letterSpacing: '0.01em',
              }}
            >
              {nation.name}
            </span>
          </div>

          <p
            style={{
              fontSize: '12px',
              color: 'var(--muted-400)',
              lineHeight: '1.65',
              marginBottom: '10px',
            }}
          >
            {nation.context_note}
          </p>

          {/* Key rulers */}
          {nation.key_rulers.length > 0 && (
            <div>
              <div
                style={{
                  fontSize: '10px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--muted-500)',
                  marginBottom: '6px',
                }}
              >
                Key Rulers
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {nation.key_rulers.map((ruler) => (
                  <div
                    key={ruler.name}
                    style={{
                      borderRadius: '6px',
                      padding: '7px 10px',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.05)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '2px', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ivory-200)' }}>
                        {ruler.name}
                      </span>
                      <span style={{ fontSize: '11px', color: 'var(--muted-500)', fontVariantNumeric: 'tabular-nums' }}>
                        {ruler.years}
                      </span>
                    </div>
                    <p style={{ fontSize: '11px', color: 'var(--muted-400)', lineHeight: '1.55', margin: 0 }}>
                      {ruler.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function NeighboringNationsPanel({ nations, chapterYearBC }: Props) {
  const [open, setOpen] = useState(false);

  if (nations.length === 0) return null;

  return (
    <div
      style={{
        marginTop: '20px',
        borderRadius: '12px',
        border: `1px solid ${open ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.06)'}`,
        background: open ? 'rgba(255,255,255,0.02)' : 'transparent',
        overflow: 'hidden',
        transition: 'border-color 0.2s, background 0.2s',
      }}
    >
      {/* Header / toggle */}
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '12px 16px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        {/* Globe icon */}
        <span style={{ color: 'var(--muted-400)' }}>
          <GlobeIcon />
        </span>

        {/* Label */}
        <span
          style={{
            fontSize: '13px',
            fontWeight: 600,
            color: 'var(--ivory-100)',
            flex: 1,
          }}
        >
          Neighboring Nations
        </span>

        {/* Year context */}
        <span
          style={{
            fontSize: '11px',
            color: 'var(--muted-500)',
            marginRight: '8px',
          }}
        >
          ~{chapterYearBC} BC
        </span>

        {/* Count badge */}
        <span
          style={{
            fontSize: '11px',
            fontWeight: 700,
            padding: '2px 7px',
            borderRadius: '99px',
            background: 'rgba(255,255,255,0.06)',
            color: 'var(--muted-400)',
            marginRight: '8px',
          }}
        >
          {nations.length}
        </span>

        {/* Chevron */}
        <span style={{ color: 'var(--muted-400)' }}>
          <ChevronIcon open={open} />
        </span>
      </button>

      {/* Expandable content */}
      {open && (
        <div style={{ padding: '0 16px 16px' }}>
          <p
            style={{
              fontSize: '12px',
              color: 'var(--muted-500)',
              lineHeight: '1.6',
              marginBottom: '14px',
            }}
          >
            Nations and rulers active during this chapter&apos;s period, drawn from contemporary
            historical records.
          </p>

          {/* Nation cards grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '10px',
            }}
          >
            {nations.map((nation) => (
              <NationCard key={nation.id} nation={nation} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
