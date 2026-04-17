'use client';

import { useState } from 'react';
import type { TimelineKing } from '@/lib/types';

type Props = {
  kings: TimelineKing[];
  youAreHereYear?: number;
  onKingClick?: (king: TimelineKing) => void;
  compact?: boolean;
};

const TIMELINE_START = 930;
const TIMELINE_END = 586;
const TOTAL_YEARS = TIMELINE_START - TIMELINE_END; // 344
const NORTH_FALL = 722;

const TICK_YEARS = [930, 880, 830, 780, 730, 680, 630, 586];

// Key events to mark as vertical lines (excluding 722 and 586 which are on the tracks)
const MAJOR_EVENTS = [
  { year: 853, label: 'Battle of Qarqar', above: true },
  { year: 841, label: "Jehu's revolt", above: false },
  { year: 701, label: "Sennacherib invades", above: true },
  { year: 640, label: "Josiah crowned", above: false },
  { year: 621, label: "Josiah's reform", above: true },
  { year: 609, label: "Josiah at Megiddo", above: false },
] as const;

type ProphetEntry = {
  name: string;
  start: number;
  end: number;
  row: 0 | 1;
};

// Active periods sourced from scholarly consensus; hardcoded since DB schema
// constrains date fields to kings only
const TIMELINE_PROPHETS: ProphetEntry[] = [
  // Row 0
  { name: 'Elijah',    start: 875, end: 848, row: 0 },
  { name: 'Elisha',    start: 848, end: 797, row: 0 },
  { name: 'Hosea',     start: 755, end: 715, row: 0 },
  { name: 'Nahum',     start: 663, end: 612, row: 0 },
  // Row 1
  { name: 'Jonah',     start: 785, end: 760, row: 1 },
  { name: 'Amos',      start: 762, end: 750, row: 1 },
  { name: 'Isaiah',    start: 740, end: 700, row: 1 },
  { name: 'Zephaniah', start: 640, end: 610, row: 1 },
  { name: 'Jeremiah',  start: 627, end: 586, row: 1 },
];

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

function KingBlock({ king, trackHeight, onClick }: {
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
  const blockWidthApprox = (widthPct / 100) * 900;
  const showName = blockWidthApprox >= 30;
  const truncateName = blockWidthApprox < 60;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onClick?.(king)}
      onKeyDown={e => e.key === 'Enter' && onClick?.(king)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'absolute',
        left: `${leftPct}%`, width: `${widthPct}%`,
        top: '4px', bottom: '4px',
        background: hovered ? fill.replace(/[\d.]+\)$/, m => `${Math.min(1, parseFloat(m) + 0.2)})`) : fill,
        border: `1px solid ${border}`,
        borderStyle: king.dates_approximate ? 'dashed' : 'solid',
        borderRadius: '4px',
        cursor: onClick ? 'pointer' : 'default',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3px',
        overflow: 'hidden', padding: '0 4px',
        transition: 'background 0.15s',
        boxSizing: 'border-box', userSelect: 'none',
        minHeight: `${trackHeight - 8}px`,
      }}
      title={`${king.name}${king.is_queen ? ' (Queen)' : ''} · ${king.reign_start_bc}–${king.reign_end_bc} BC${king.dates_approximate ? ' (approx.)' : ''}`}
    >
      <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: border, flexShrink: 0 }} />
      {showName && (
        <span style={{
          fontSize: '10px', fontWeight: 600, color: 'rgba(255,255,255,0.92)',
          whiteSpace: 'nowrap', overflow: 'hidden',
          textOverflow: truncateName ? 'clip' : 'ellipsis',
          letterSpacing: '0.01em', lineHeight: 1.2,
        }}>
          {king.name}{king.is_queen && <span style={{ fontSize: '8px', opacity: 0.8, marginLeft: '2px' }}>Q</span>}
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
  const blockWidthApprox = (widthPct / 100) * 900;
  const showName = blockWidthApprox >= 28;

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
        boxSizing: 'border-box',
        cursor: 'default',
      }}
      title={`${prophet.name} · active ~${prophet.start}–${prophet.end} BC`}
    >
      {showName && (
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
  const trackHeight = compact ? 36 : 56;
  const prophetRowHeight = compact ? 22 : 28;
  const axisHeight = 24;

  const northKings = kings.filter(k => k.kingdom === 'north');
  const southKings = kings.filter(k => k.kingdom === 'south');

  const northFallLeft = yearToPercent(NORTH_FALL);
  const youAreHereLeft = youAreHereYear !== undefined ? yearToPercent(youAreHereYear) : null;

  return (
    <div style={{
      overflowX: 'auto', width: '100%',
      borderRadius: '12px', border: '1px solid rgba(255,255,255,0.07)',
      background: 'var(--navy-900)',
    }}>
      <div style={{ minWidth: '900px', position: 'relative', padding: '16px 20px 20px' }}>

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

        {/* All tracks share this container so event overlays span everything */}
        <div style={{ position: 'relative' }}>

          {/* Major event markers */}
          {!compact && MAJOR_EVENTS.map(event => {
            const left = yearToPercent(event.year);
            return (
              <div key={event.year} style={{
                position: 'absolute', left: `${left}%`,
                top: 0, bottom: 0, zIndex: 3, pointerEvents: 'none',
                width: '1px', background: 'rgba(255,255,255,0.12)',
                borderLeft: '1px dashed rgba(255,255,255,0.18)',
              }}>
                <span style={{
                  position: 'absolute',
                  [event.above ? 'top' : 'bottom']: event.above ? '2px' : '2px',
                  left: '4px',
                  fontSize: '8px', fontWeight: 600,
                  color: 'rgba(255,255,255,0.45)',
                  whiteSpace: 'nowrap', letterSpacing: '0.03em',
                  lineHeight: 1.2,
                }}>
                  {event.label}
                </span>
              </div>
            );
          })}

          {/* "You are here" marker */}
          {youAreHereLeft !== null && (
            <div style={{
              position: 'absolute', left: `${youAreHereLeft}%`,
              top: 0, bottom: 0, zIndex: 4, pointerEvents: 'none',
              display: 'flex', flexDirection: 'column', alignItems: 'center',
            }}>
              <div style={{
                width: '2px', height: '100%',
                background: 'linear-gradient(to bottom, var(--gold-400), rgba(201,168,76,0.3))',
                borderRadius: '1px',
              }} />
              <div style={{
                position: 'absolute', top: '-18px', left: '50%', transform: 'translateX(-50%)',
                background: 'var(--gold-500)', borderRadius: '3px',
                padding: '1px 5px',
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
              letterSpacing: '0.04em', whiteSpace: 'nowrap', pointerEvents: 'none',
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
              letterSpacing: '0.04em', whiteSpace: 'nowrap', pointerEvents: 'none',
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '8px' }}>
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
