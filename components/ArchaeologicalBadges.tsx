'use client';

import { useState } from 'react';
import type { ArchaeologicalEvidence } from '@/lib/types';

type Props = {
  evidence: ArchaeologicalEvidence[];
};

export default function ArchaeologicalBadges({ evidence }: Props) {
  const [expanded, setExpanded] = useState<string | null>(null);

  if (evidence.length === 0) return null;

  return (
    <div className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="flex items-center gap-2 mb-4">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--gold-400)' }}>
          <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 0 0 1.946-.806 3.42 3.42 0 0 1 4.438 0 3.42 3.42 0 0 0 1.946.806 3.42 3.42 0 0 1 3.138 3.138 3.42 3.42 0 0 0 .806 1.946 3.42 3.42 0 0 1 0 4.438 3.42 3.42 0 0 0-.806 1.946 3.42 3.42 0 0 1-3.138 3.138 3.42 3.42 0 0 0-1.946.806 3.42 3.42 0 0 1-4.438 0 3.42 3.42 0 0 0-1.946-.806 3.42 3.42 0 0 1-3.138-3.138 3.42 3.42 0 0 0-.806-1.946 3.42 3.42 0 0 1 0-4.438 3.42 3.42 0 0 0 .806-1.946 3.42 3.42 0 0 1 3.138-3.138z" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <h3 className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--gold-400)' }}>
          Archaeological Corroboration
        </h3>
      </div>

      <div className="space-y-3">
        {evidence.map(item => (
          <div key={item.id}>
            <button
              onClick={() => setExpanded(expanded === item.id ? null : item.id)}
              className="w-full flex items-start gap-3 text-left rounded-xl p-3 transition-all"
              style={{
                background: expanded === item.id ? 'rgba(201,168,76,0.08)' : 'rgba(255,255,255,0.03)',
                border: `1px solid ${expanded === item.id ? 'rgba(201,168,76,0.2)' : 'rgba(255,255,255,0.06)'}`,
              }}>
              {/* Badge icon */}
              <div className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--gold-400)' }}>
                  <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM7 7h10M7 12h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-medium" style={{ color: 'var(--ivory-100)' }}>
                    {item.name}
                  </span>
                  <span className="text-xs shrink-0" style={{ color: 'var(--muted-500)' }}>
                    {Math.abs(item.date_bc)} BC
                  </span>
                </div>
                <p className="text-xs mt-0.5" style={{ color: 'var(--muted-400)' }}>
                  {item.relevance_note}
                </p>
              </div>

              <svg
                width="14" height="14" viewBox="0 0 24 24" fill="none"
                className="shrink-0 transition-transform mt-1"
                style={{ color: 'var(--muted-500)', transform: expanded === item.id ? 'rotate(180deg)' : 'rotate(0)' }}>
                <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {expanded === item.id && (
              <div className="rounded-b-xl px-4 py-4 mx-1"
                style={{ background: 'rgba(201,168,76,0.04)', borderBottom: '1px solid rgba(201,168,76,0.15)', borderLeft: '1px solid rgba(201,168,76,0.15)', borderRight: '1px solid rgba(201,168,76,0.15)' }}>
                <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--ivory-200)', lineHeight: '1.75' }}>
                  {item.description}
                </p>
                {item.museum_location && (
                  <p className="text-xs flex items-center gap-1.5" style={{ color: 'var(--muted-400)' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M3 21h18M3 7l9-4 9 4M4 7v14M20 7v14M9 21v-4a3 3 0 0 1 6 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item.museum_location}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
