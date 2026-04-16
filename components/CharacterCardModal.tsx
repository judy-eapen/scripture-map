'use client';

import type { Person } from '@/lib/types';

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

        {/* Spacer */}
        <div className="flex-1" />

        {/* Footer */}
        <div className="p-6 shrink-0" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p className="text-xs text-center" style={{ color: 'var(--muted-500)' }}>
            Tap any highlighted name in the text to view their card
          </p>
        </div>
      </div>
    </>
  );
}
