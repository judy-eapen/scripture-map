'use client';

import { useState } from 'react';
import type { TimelineKing } from '@/lib/types';

type Props = {
  kings: TimelineKing[];
  youAreHereYear?: number;
  onKingClick?: (king: TimelineKing) => void;
  compact?: boolean;
};

// Extended back to 970 BC to show Solomon and the Temple
const TIMELINE_START = 970;
const TIMELINE_END = 586;
const TOTAL_YEARS = TIMELINE_START - TIMELINE_END; // 384
const NORTH_FALL = 722;

const TICK_YEARS = [970, 930, 880, 830, 780, 730, 680, 630, 586];

const MAJOR_EVENTS = [
  { year: 966, label: 'Temple built',         above: true  },
  { year: 930, label: 'Kingdom divides',       above: false },
  { year: 848, label: 'Elijah taken up',       above: true  },
  { year: 701, label: 'Sennacherib invades',   above: false },
  { year: 621, label: "Josiah's reform",       above: true  },
] as const;

type ProphetEntry = { name: string; start: number; end: number; row: 0 | 1 };

// Active periods hardcoded — DB schema constrains date fields to kings only
const TIMELINE_PROPHETS: ProphetEntry[] = [
  { name: 'Elijah',    start: 875, end: 848, row: 0 },
  { name: 'Elisha',    start: 848, end: 797, row: 0 },
  { name: 'Hosea',     start: 755, end: 715, row: 0 },
  { name: 'Nahum',     start: 663, end: 612, row: 0 },
  { name: 'Jonah',     start: 785, end: 760, row: 1 },
  { name: 'Amos',      start: 762, end: 750, row: 1 },
  { name: 'Isaiah',    start: 740, end: 700, row: 1 },
  { name: 'Zephaniah', start: 640, end: 610, row: 1 },
  { name: 'Jeremiah',  start: 627, end: 586, row: 1 },
];

const verdictFill: Record<string, string> = {
  good:  'rgba(16,185,129,0.7)',
  evil:  'rgba(239,68,68,0.65)',
  mixed: 'rgba(245,158,11,0.65)',
};
const verdictBorder: Record<string, string> = {
  good:  'rgba(16,185,129,0.9)',
  evil:  'rgba(239,68,68,0.85)',
  mixed: 'rgba(245,158,11,0.85)',
};

function yearToPercent(year: number): number {
  return ((TIMELINE_START - year) / TOTAL_YEARS) * 100;
}

function KingBlock({ king, trackHeight, onClick }: {
  king: TimelineKing;
  trackHeight: number;
  onClick?: (king: TimelineKing) => void;
}) {
  const [hovered, setHovered] = useState(false);
  const reignYears = Math.max(0, king.reign_start_bc - king.reign_end_bc);
  // Use actual width — no JS minimum. CSS minWidth handles visibility without
  // bleeding into the next king's territory (the old Math.max(0.8,...) caused 7.7px
  // overflow which made short-reign kings appear visually inside their successors).
  const actualWidthPct = (reignYears / TOTAL_YEARS) * 100;
  const leftPct = yearToPercent(king.reign_start_bc);
  const fill   = king.verdict ? verdictFill[king.verdict]   : 'rgba(100,116,139,0.5)';
  const border = king.verdict ? verdictBorder[king.verdict] : 'rgba(100,116,139,0.7)';

  // Approx px at min-width 960px — based on actual dates, not CSS minimum
  const approxPx = (actualWidthPct / 100) * 960;
  // Kings with < ~3-year reigns (<8px) become tick marks so they never overlap neighbours
  const isTick = approxPx < 8;
  const showHorizontal = !isTick && approxPx >= 28;
  const showVertical   = !isTick && approxPx < 28;

  const tooltip = `${king.name}${king.is_queen ? ' (Queen)' : ''} · ${king.reign_start_bc}–${king.reign_end_bc} BC${reignYears === 0 ? ' (<1 yr)' : reignYears === 1 ? ' (1 yr)' : ''}${king.dates_approximate ? ' (approx.)' : ''}`;

  // Tick mark — slim vertical stripe for very short reigns (days/months/~1 yr).
  // Positioned at the correct year with z-index above neighbouring blocks so it's
  // clearly visible at the boundary rather than hidden inside the next king's block.
  if (isTick) {
    return (
      <div
        role="button"
        tabIndex={0}
        onClick={() => onClick?.(king)}
        onKeyDown={e => e.key === 'Enter' && onClick?.(king)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        title={tooltip}
        style={{
          position: 'absolute',
          left: `${leftPct}%`,
          width: '6px',
          top: 0, bottom: 0,
          background: hovered
            ? fill.replace(/[\d.]+\)$/, m => `${Math.min(1, parseFloat(m) + 0.25)})`)
            : fill,
          border: `1.5px solid ${border}`,
          borderRadius: '2px',
          cursor: onClick ? 'pointer' : 'default',
          zIndex: 4,
          boxSizing: 'border-box',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'flex-start',
          padding: '4px 0 0',
          transition: 'background 0.15s',
          userSelect: 'none',
        }}
      >
        <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: border, flexShrink: 0 }} />
      </div>
    );
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onClick?.(king)}
      onKeyDown={e => e.key === 'Enter' && onClick?.(king)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      title={tooltip}
      style={{
        position: 'absolute',
        left: `${leftPct}%`,
        width: `${actualWidthPct}%`,
        minWidth: '5px',
        top: '3px', bottom: '3px',
        background: hovered
          ? fill.replace(/[\d.]+\)$/, m => `${Math.min(1, parseFloat(m) + 0.2)})`)
          : fill,
        border: `1px solid ${border}`,
        borderStyle: king.dates_approximate ? 'dashed' : 'solid',
        borderRadius: '4px',
        cursor: onClick ? 'pointer' : 'default',
        display: 'flex',
        flexDirection: showVertical ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: showVertical ? 'flex-end' : 'center',
        gap: showVertical ? '0' : '3px',
        overflow: 'hidden',
        padding: showVertical ? '0 2px 4px' : '0 4px',
        transition: 'background 0.15s',
        boxSizing: 'border-box', userSelect: 'none',
        minHeight: `${trackHeight - 6}px`,
        zIndex: 2,
      }}
    >
      {/* Verdict indicator */}
      {showVertical ? (
        <div style={{ width: '80%', height: '2px', background: border, borderRadius: '1px', marginBottom: '3px', flexShrink: 0 }} />
      ) : (
        <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: border, flexShrink: 0 }} />
      )}

      {/* Name — horizontal for wide blocks, vertical for narrow */}
      {showHorizontal && (
        <span style={{
          fontSize: '10px', fontWeight: 600, color: 'rgba(255,255,255,0.92)',
          whiteSpace: 'nowrap', overflow: 'hidden',
          textOverflow: approxPx < 60 ? 'clip' : 'ellipsis',
          letterSpacing: '0.01em', lineHeight: 1.2,
        }}>
          {king.name}{king.is_queen && <span style={{ fontSize: '8px', opacity: 0.8, marginLeft: '2px' }}>Q</span>}
        </span>
      )}
      {showVertical && (
        <span style={{
          fontSize: '9px', fontWeight: 600, color: 'rgba(255,255,255,0.88)',
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          maxHeight: `${trackHeight - 22}px`,
          lineHeight: 1.2,
          letterSpacing: '0.01em',
        }}>
          {king.name}
        </span>
      )}
    </div>
  );
}

function ProphetBlock({ prophet, rowHeight }: { prophet: ProphetEntry; rowHeight: number }) {
  const [hovered, setHovered] = useState(false);
  const years = Math.max(1, prophet.start - prophet.end);
  const widthPct = Math.max(1.5, (years / TOTAL_YEARS) * 100);
  const leftPct = yearToPercent(prophet.start);
  const topOffset = prophet.row === 0 ? 3 : rowHeight + 3;
  const approxPx = (widthPct / 100) * 900;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'absolute',
        left: `${leftPct}%`, width: `${widthPct}%`,
        top: `${topOffset}px`, height: `${rowHeight - 6}px`,
        background: hovered ? 'rgba(245,158,11,0.45)' : 'rgba(245,158,11,0.28)',
        border: '1px solid rgba(245,158,11,0.65)',
        borderRadius: '3px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden', padding: '0 3px',
        transition: 'background 0.15s',
        boxSizing: 'border-box', cursor: 'default',
      }}
      title={`${prophet.name} · active ~${prophet.start}–${prophet.end} BC`}
    >
      {approxPx >= 28 && (
        <span style={{
          fontSize: '9px', fontWeight: 600, color: 'rgba(253,230,138,0.95)',
          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          letterSpacing: '0.01em',
        }}>
          {prophet.name}
        </span>
      )}
    </div>
  );
}

export default function KingdomTimeline({ kings, youAreHereYear, onKingClick, compact = false }: Props) {
  const trackHeight    = compact ? 48 : 80;
  const prophetRowHeight = compact ? 22 : 28;
  const axisHeight     = 24;

  const northKings = kings.filter(k => k.kingdom === 'north');
  const southKings = kings.filter(k => k.kingdom === 'south');

  const northFallLeft   = yearToPercent(NORTH_FALL);
  const youAreHereLeft  = youAreHereYear !== undefined ? yearToPercent(youAreHereYear) : null;

  return (
    <div style={{
      overflowX: 'auto', width: '100%',
      borderRadius: '12px', border: '1px solid rgba(255,255,255,0.07)',
      background: 'var(--navy-900)',
    }}>
      <div style={{ minWidth: '960px', position: 'relative', padding: '16px 20px 20px' }}>

        {/* Northern Kingdom label */}
        {!compact && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <span style={{
              fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--kingdom-north)', opacity: 0.85, whiteSpace: 'nowrap',
            }}>Northern Kingdom (Israel)</span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(96,165,250,0.15)' }} />
          </div>
        )}

        {/* Event label strip — above tracks so labels are never behind king blocks */}
        {!compact && (
          <div style={{ position: 'relative', height: '28px', marginBottom: '2px' }}>
            {MAJOR_EVENTS.map(event => (
              <div key={`lbl-${event.year}`} style={{
                position: 'absolute',
                left: `${yearToPercent(event.year)}%`,
                top: event.above ? '2px' : '15px',
                transform: 'translateX(-4px)',
                fontSize: '8px', fontWeight: 600,
                color: 'rgba(255,255,255,0.55)',
                whiteSpace: 'nowrap', letterSpacing: '0.03em',
                pointerEvents: 'none',
              }}>
                {event.label}
              </div>
            ))}
          </div>
        )}

        {/* All tracks share this container so overlays span everything */}
        <div style={{ position: 'relative' }}>

          {/* Event vertical lines */}
          {!compact && MAJOR_EVENTS.map(event => (
            <div key={event.year} style={{
              position: 'absolute', left: `${yearToPercent(event.year)}%`,
              top: 0, bottom: 0, zIndex: 1, pointerEvents: 'none',
              borderLeft: '1px dashed rgba(255,255,255,0.2)',
            }} />
          ))}

          {/* "You are here" marker */}
          {youAreHereLeft !== null && (
            <div style={{
              position: 'absolute', left: `${youAreHereLeft}%`,
              top: 0, bottom: 0, zIndex: 4, pointerEvents: 'none',
            }}>
              <div style={{
                width: '2px', height: '100%',
                background: 'linear-gradient(to bottom, var(--gold-400), rgba(201,168,76,0.25))',
                borderRadius: '1px',
              }} />
              {/* Year badge below the line */}
              <div style={{
                position: 'absolute', bottom: '-20px', left: '50%', transform: 'translateX(-50%)',
                background: 'var(--gold-500)', borderRadius: '3px', padding: '1px 5px',
                fontSize: '8px', fontWeight: 700, color: 'var(--navy-950)',
                whiteSpace: 'nowrap', letterSpacing: '0.04em',
              }}>
                {youAreHereYear} BC
              </div>
            </div>
          )}

          {/* North track */}
          <div style={{
            position: 'relative', height: `${trackHeight}px`,
            background: 'rgba(96,165,250,0.04)', borderRadius: '6px',
            border: '1px solid rgba(96,165,250,0.15)', overflow: 'visible',
          }}>
            <div style={{
              position: 'absolute', left: `${northFallLeft}%`, right: 0, top: 0, bottom: 0,
              background: 'rgba(255,255,255,0.02)', borderRadius: '0 6px 6px 0', pointerEvents: 'none',
            }} />
            {northKings.map(king => (
              <KingBlock key={king.id} king={king} trackHeight={trackHeight} onClick={onKingClick} />
            ))}
            <div style={{
              position: 'absolute', left: `${northFallLeft}%`, top: '50%',
              transform: 'translate(4px, -50%)',
              fontSize: '9px', fontWeight: 600, color: 'rgba(96,165,250,0.6)',
              letterSpacing: '0.04em', whiteSpace: 'nowrap', pointerEvents: 'none', zIndex: 1,
            }}>
              722 BC — Fall of Samaria
            </div>
          </div>

          {/* Year axis */}
          <div style={{ position: 'relative', height: `${axisHeight}px`, display: 'flex', alignItems: 'center' }}>
            {TICK_YEARS.map(year => (
              <div key={year} style={{
                position: 'absolute', left: `${yearToPercent(year)}%`, transform: 'translateX(-50%)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px',
              }}>
                <div style={{ width: '1px', height: '5px', background: 'rgba(255,255,255,0.15)' }} />
                <span style={{ fontSize: '9px', color: 'var(--muted-500)', whiteSpace: 'nowrap', fontVariantNumeric: 'tabular-nums' }}>
                  {year} BC
                </span>
              </div>
            ))}
          </div>

          {/* South track */}
          <div style={{
            position: 'relative', height: `${trackHeight}px`,
            background: 'rgba(167,139,250,0.04)', borderRadius: '6px',
            border: '1px solid rgba(167,139,250,0.15)', overflow: 'visible',
          }}>
            {southKings.map(king => (
              <KingBlock key={king.id} king={king} trackHeight={trackHeight} onClick={onKingClick} />
            ))}
            <div style={{
              position: 'absolute', right: '4px', top: '50%', transform: 'translateY(-50%)',
              fontSize: '9px', fontWeight: 600, color: 'rgba(167,139,250,0.6)',
              letterSpacing: '0.04em', whiteSpace: 'nowrap', pointerEvents: 'none', zIndex: 1,
            }}>
              586 BC — Fall of Jerusalem
            </div>
          </div>

          {/* Prophets track */}
          {!compact && (
            <div style={{
              position: 'relative', height: `${prophetRowHeight * 2 + 4}px`,
              marginTop: '8px',
              background: 'rgba(245,158,11,0.03)', borderRadius: '6px',
              border: '1px solid rgba(245,158,11,0.12)', overflow: 'visible',
            }}>
              {TIMELINE_PROPHETS.map(prophet => (
                <ProphetBlock key={prophet.name} prophet={prophet} rowHeight={prophetRowHeight} />
              ))}
            </div>
          )}

        </div>

        {/* Southern Kingdom label */}
        {!compact && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: youAreHereLeft !== null ? '28px' : '8px' }}>
            <div style={{ flex: 1, height: '1px', background: 'rgba(167,139,250,0.15)' }} />
            <span style={{
              fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--kingdom-south)', opacity: 0.85, whiteSpace: 'nowrap',
            }}>Southern Kingdom (Judah)</span>
          </div>
        )}

        {/* Prophets label */}
        {!compact && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '4px' }}>
            <div style={{ flex: 1, height: '1px', background: 'rgba(245,158,11,0.12)' }} />
            <span style={{
              fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'rgba(245,158,11,0.7)', whiteSpace: 'nowrap',
            }}>Prophets (approximate active periods)</span>
          </div>
        )}

      </div>
    </div>
  );
}
