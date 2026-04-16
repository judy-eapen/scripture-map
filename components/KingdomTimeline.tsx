'use client';

import { useState } from 'react';
import type { TimelineKing } from '@/lib/types';

type Props = {
  kings: TimelineKing[];
  highlightYearBC?: number;
  onKingClick?: (king: TimelineKing) => void;
  compact?: boolean;
};

const TIMELINE_START = 930;
const TIMELINE_END = 586;
const TOTAL_YEARS = TIMELINE_START - TIMELINE_END; // 344
const NORTH_FALL = 722;

const TICK_YEARS = [930, 880, 830, 780, 730, 680, 630, 586];

const verdictFill: Record<string, string> = {
  good: 'rgba(16,185,129,0.7)',
  evil: 'rgba(239,68,68,0.65)',
  mixed: 'rgba(245,158,11,0.65)',
};

const verdictBorder: Record<string, string> = {
  good: 'rgba(16,185,129,0.9)',
  evil: 'rgba(239,68,68,0.85)',
  mixed: 'rgba(245,158,11,0.85)',
};

function yearToPercent(year: number): number {
  return ((TIMELINE_START - year) / TOTAL_YEARS) * 100;
}

function KingBlock({
  king,
  trackHeight,
  onClick,
}: {
  king: TimelineKing;
  trackHeight: number;
  onClick?: (king: TimelineKing) => void;
}) {
  const [hovered, setHovered] = useState(false);

  const reignYears = Math.max(1, king.reign_start_bc - king.reign_end_bc);
  const widthPct = Math.max(1.5, (reignYears / TOTAL_YEARS) * 100);
  const leftPct = yearToPercent(king.reign_start_bc);

  const fill = king.verdict ? verdictFill[king.verdict] : 'rgba(100,116,139,0.5)';
  const border = king.verdict ? verdictBorder[king.verdict] : 'rgba(100,116,139,0.7)';

  const blockWidthApprox = (widthPct / 100) * 900; // approximate px at min-width 900
  const showName = blockWidthApprox >= 30;
  const truncateName = blockWidthApprox < 60;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onClick?.(king)}
      onKeyDown={(e) => e.key === 'Enter' && onClick?.(king)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'absolute',
        left: `${leftPct}%`,
        width: `${widthPct}%`,
        top: '4px',
        bottom: '4px',
        background: hovered
          ? fill.replace(/[\d.]+\)$/, (m) => {
              const v = parseFloat(m);
              return `${Math.min(1, v + 0.2)})`;
            })
          : fill,
        border: `1px solid ${border}`,
        borderStyle: king.dates_approximate ? 'dashed' : 'solid',
        borderRadius: '4px',
        cursor: onClick ? 'pointer' : 'default',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '3px',
        overflow: 'hidden',
        padding: '0 4px',
        transition: 'background 0.15s',
        boxSizing: 'border-box',
        userSelect: 'none',
        minHeight: `${trackHeight - 8}px`,
      }}
      title={`${king.name}${king.is_queen ? ' (Queen)' : ''} · ${king.reign_start_bc}–${king.reign_end_bc} BC${king.dates_approximate ? ' (approx.)' : ''}`}
    >
      {/* Verdict dot */}
      <div
        style={{
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          background: border,
          flexShrink: 0,
        }}
      />
      {showName && (
        <span
          style={{
            fontSize: '10px',
            fontWeight: 600,
            color: 'rgba(255,255,255,0.92)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: truncateName ? 'clip' : 'ellipsis',
            letterSpacing: '0.01em',
            lineHeight: 1.2,
          }}
        >
          {king.name}
          {king.is_queen && (
            <span style={{ fontSize: '8px', opacity: 0.8, marginLeft: '2px' }}>Q</span>
          )}
        </span>
      )}
    </div>
  );
}

export default function KingdomTimeline({
  kings,
  highlightYearBC,
  onKingClick,
  compact = false,
}: Props) {
  const trackHeight = compact ? 36 : 56;
  const axisHeight = 24;

  const northKings = kings.filter((k) => k.kingdom === 'north');
  const southKings = kings.filter((k) => k.kingdom === 'south');

  const northFallLeft = yearToPercent(NORTH_FALL);
  const highlightLeft = highlightYearBC !== undefined ? yearToPercent(highlightYearBC) : null;

  return (
    <div
      style={{
        overflowX: 'auto',
        width: '100%',
        borderRadius: '12px',
        border: '1px solid rgba(255,255,255,0.07)',
        background: 'var(--navy-900)',
      }}
    >
      {/* Inner fixed-width container */}
      <div style={{ minWidth: '900px', position: 'relative', padding: '16px 20px 20px' }}>

        {/* Track header labels */}
        {!compact && (
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span
              style={{
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--kingdom-north)',
                opacity: 0.85,
              }}
            >
              Northern Kingdom (Israel)
            </span>
            <span
              style={{
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--kingdom-south)',
                opacity: 0.85,
                textAlign: 'right',
              }}
            >
              Southern Kingdom (Judah)
            </span>
          </div>
        )}

        {/* Outer timeline wrapper — positions the highlight band behind the tracks */}
        <div style={{ position: 'relative' }}>

          {/* Chapter highlight band */}
          {highlightLeft !== null && (
            <div
              style={{
                position: 'absolute',
                left: `${highlightLeft}%`,
                width: '1.5%',
                top: 0,
                bottom: 0,
                background: 'rgba(201,168,76,0.15)',
                borderLeft: '1px solid rgba(201,168,76,0.3)',
                borderRight: '1px solid rgba(201,168,76,0.3)',
                zIndex: 2,
                pointerEvents: 'none',
              }}
            />
          )}

          {/* North track */}
          <div
            style={{
              position: 'relative',
              height: `${trackHeight}px`,
              background: 'rgba(96,165,250,0.04)',
              borderRadius: '6px',
              border: '1px solid rgba(96,165,250,0.1)',
              marginBottom: '2px',
              overflow: 'visible',
            }}
          >
            {/* Fall of Samaria fade-out zone */}
            <div
              style={{
                position: 'absolute',
                left: `${northFallLeft}%`,
                right: 0,
                top: 0,
                bottom: 0,
                background: 'rgba(255,255,255,0.02)',
                borderRadius: '0 6px 6px 0',
                pointerEvents: 'none',
              }}
            />

            {/* North king blocks */}
            {northKings.map((king) => (
              <KingBlock key={king.id} king={king} trackHeight={trackHeight} onClick={onKingClick} />
            ))}

            {/* 722 BC label */}
            <div
              style={{
                position: 'absolute',
                left: `${northFallLeft}%`,
                top: '50%',
                transform: 'translate(4px, -50%)',
                fontSize: '9px',
                fontWeight: 600,
                color: 'rgba(96,165,250,0.6)',
                letterSpacing: '0.04em',
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
              }}
            >
              722 BC — Fall of Samaria
            </div>
          </div>

          {/* Year axis */}
          <div
            style={{
              position: 'relative',
              height: `${axisHeight}px`,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {TICK_YEARS.map((year) => {
              const pct = yearToPercent(year);
              return (
                <div
                  key={year}
                  style={{
                    position: 'absolute',
                    left: `${pct}%`,
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '2px',
                  }}
                >
                  <div style={{ width: '1px', height: '5px', background: 'rgba(255,255,255,0.15)' }} />
                  <span
                    style={{
                      fontSize: '9px',
                      color: 'var(--muted-500)',
                      whiteSpace: 'nowrap',
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    {year} BC
                  </span>
                </div>
              );
            })}
          </div>

          {/* South track */}
          <div
            style={{
              position: 'relative',
              height: `${trackHeight}px`,
              background: 'rgba(167,139,250,0.04)',
              borderRadius: '6px',
              border: '1px solid rgba(167,139,250,0.1)',
              marginTop: '2px',
              overflow: 'visible',
            }}
          >
            {southKings.map((king) => (
              <KingBlock key={king.id} king={king} trackHeight={trackHeight} onClick={onKingClick} />
            ))}

            {/* 586 BC label */}
            <div
              style={{
                position: 'absolute',
                right: '4px',
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: '9px',
                fontWeight: 600,
                color: 'rgba(167,139,250,0.6)',
                letterSpacing: '0.04em',
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
              }}
            >
              586 BC — Fall of Jerusalem
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
