'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { GenealogyNode, GenealogyEdge, Person } from '@/lib/types';
import CharacterCardModal from './CharacterCardModal';

// ─── Types ───────────────────────────────────────────────────────────────────

type SuccessionType = 'start' | 'son' | 'relative' | 'new-dynasty';

type KingEntry = {
  node: GenealogyNode;
  spouses: GenealogyNode[];
  succession: SuccessionType;
  successionNote?: string;
};

// ─── Static data ─────────────────────────────────────────────────────────────

// Notes shown on the succession break badge when a new dynasty starts
const SUCCESSION_NOTES: Record<string, string> = {
  'Jeroboam I': 'appointed by Israel',
  Baasha: 'killed Nadab',
  Zimri: 'killed Elah',
  Omri: 'defeated Zimri',
  Tibni: 'rival claimant',
  Jehu: 'killed Joram',
  Shallum: 'killed Zechariah',
  Menahem: 'killed Shallum',
  Pekah: 'killed Pekahiah',
  Hoshea: 'killed Pekah',
  Athaliah: 'killed royal heirs',
  Joash: 'Jehoiada restored throne',
};

// Dynasty → border accent color
const DYNASTY_COLORS: Record<string, string> = {
  Davidic:  '#C9A84C',
  Jeroboam: '#60A5FA',
  Baasha:   '#3B82F6',
  Omri:     '#A78BFA',
  Jehu:     '#2DD4BF',
  Zimri:    '#94A3B8',
  Shallum:  '#94A3B8',
  Menahem:  '#6B7280',
  Pekah:    '#6B7280',
  Hoshea:   '#6B7280',
};

function dynastyAccent(d?: string | null): string {
  if (!d) return '#64748B';
  return DYNASTY_COLORS[d] ?? '#64748B';
}

function reignLabel(start?: number | null, end?: number | null): string {
  if (start == null) return '';
  return `${Math.abs(start)}–${end != null ? Math.abs(end) : '?'} BC`;
}

function toPersonStub(n: GenealogyNode): Person {
  return {
    id: n.person_id,
    name: n.name,
    type: (n.type ?? 'king') as Person['type'],
    kingdom: n.kingdom as Person['kingdom'],
    verdict: n.verdict,
    bio: n.bio ?? '',
    contemporary_events: n.contemporary_events,
    reign_start_bc: n.reign_start_bc ?? undefined,
    reign_end_bc: n.reign_end_bc ?? undefined,
  };
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function GenealogyView({
  nodes,
  edges,
}: {
  nodes: GenealogyNode[];
  edges: GenealogyEdge[];
}) {
  const router = useRouter();
  const [activePersonId, setActivePersonId] = useState<string | null>(null);
  const activePerson = activePersonId ? nodes.find(n => n.person_id === activePersonId) : null;

  const { preUnified, judah, israel } = useMemo(() => {
    // Spouse adjacency
    const spouseMap = new Map<string, string[]>();
    for (const e of edges) {
      if (e.relationship_type !== 'marriage') continue;
      const push = (from: string, to: string) => {
        const arr = spouseMap.get(from) ?? [];
        arr.push(to);
        spouseMap.set(from, arr);
      };
      push(e.parent_node_id, e.child_node_id);
      push(e.child_node_id, e.parent_node_id);
    }

    function spousesOf(n: GenealogyNode): GenealogyNode[] {
      return (spouseMap.get(n.id) ?? [])
        .map(id => nodes.find(x => x.id === id))
        .filter(Boolean) as GenealogyNode[];
    }

    function isBioChild(parentId: string, childId: string): boolean {
      return edges.some(
        e =>
          e.relationship_type === 'biological' &&
          e.parent_node_id === parentId &&
          e.child_node_id === childId
      );
    }

    // All kings with reign dates, oldest first (most-negative BC value = most ancient)
    const kings = nodes
      .filter(n => n.type === 'king' && n.reign_start_bc != null)
      .sort((a, b) => (a.reign_start_bc ?? 0) - (b.reign_start_bc ?? 0));

    const pre = kings.filter(k => k.name === 'David' || k.name === 'Solomon');
    const judahKings = kings.filter(k => k.kingdom === 'south' && !pre.includes(k));
    const israelKings = kings.filter(k => k.kingdom === 'north');

    function buildEntries(list: GenealogyNode[]): KingEntry[] {
      return list.map((king, i) => {
        const prev = i > 0 ? list[i - 1] : null;
        let succession: SuccessionType = 'start';
        let successionNote: string | undefined;

        if (prev) {
          if (isBioChild(prev.id, king.id)) {
            succession = 'son';
          } else if (prev.dynasty && king.dynasty && prev.dynasty === king.dynasty) {
            succession = 'relative';
          } else {
            succession = 'new-dynasty';
            successionNote = SUCCESSION_NOTES[king.name];
          }
        }

        return { node: king, spouses: spousesOf(king), succession, successionNote };
      });
    }

    return {
      preUnified: buildEntries(pre),
      judah:      buildEntries(judahKings),
      israel:     buildEntries(israelKings),
    };
  }, [nodes, edges]);

  return (
    <div className="flex flex-col h-screen-safe" style={{ background: 'var(--navy-950)' }}>

      {/* ── Top bar ── */}
      <div className="shrink-0 flex items-center px-4 py-3 gap-3"
        style={{ background: 'var(--navy-900)', borderBottom: '1px solid rgba(201,168,76,0.12)' }}>
        <button
          onClick={() => router.back()}
          className="flex items-center gap-1.5 text-sm transition-colors"
          style={{ color: 'var(--muted-400)' }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--ivory-100)')}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--muted-400)')}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M5 12l7 7M5 12l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back
        </button>
        <span className="flex-1 text-center text-sm font-semibold"
          style={{ color: 'var(--ivory-100)', fontFamily: 'var(--font-playfair)' }}>
          Royal Succession
        </span>
        {/* spacer balances the back button */}
        <div style={{ width: 48 }} />
      </div>

      {/* ── Legend ── */}
      <div className="shrink-0 flex items-center gap-4 flex-wrap px-4 py-2"
        style={{ background: 'var(--navy-900)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-px" style={{ background: 'rgba(201,168,76,0.7)' }} />
          <span className="text-[10px]" style={{ color: 'var(--muted-500)' }}>Son inherited</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-4" style={{ borderTop: '1px dashed rgba(139,154,181,0.6)', height: 1 }} />
          <span className="text-[10px]" style={{ color: 'var(--muted-500)' }}>Relative/indirect</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-sm" style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.35)' }} />
          <span className="text-[10px]" style={{ color: 'var(--muted-500)' }}>Coup / new dynasty</span>
        </div>
        <div className="flex items-center gap-1">
          {(['var(--verdict-good)', 'var(--verdict-evil)', 'var(--verdict-mixed)'] as const).map(c => (
            <span key={c} className="w-2 h-2 rounded-full inline-block" style={{ background: c }} />
          ))}
          <span className="text-[10px] ml-0.5" style={{ color: 'var(--muted-500)' }}>Verdict</span>
        </div>
      </div>

      {/* ── Scrollable content ── */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-lg mx-auto px-3 pt-6 pb-16">

          {/* David & Solomon — pre-split, centred */}
          <div className="flex justify-center mb-3">
            <div style={{ width: 200 }}>
              {preUnified.map((entry, i) => (
                <div key={entry.node.id}>
                  {i > 0 && <SuccLine type={entry.succession} note={entry.successionNote} />}
                  <KingCard entry={entry} onTap={id => setActivePersonId(id)} />
                </div>
              ))}
            </div>
          </div>

          {/* ── Kingdom split ── */}
          <EventBanner color="gold" label="Kingdom splits · 930 BC" />

          {/* Column headers */}
          <div className="grid grid-cols-2 gap-2 mt-4 mb-2">
            <div className="text-center">
              <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: 'var(--gold-400)' }}>
                Judah
              </span>
              <div className="text-[9px] mt-0.5" style={{ color: 'var(--muted-500)' }}>David&apos;s line · Jerusalem</div>
            </div>
            <div className="text-center">
              <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: 'var(--kingdom-north)' }}>
                Israel
              </span>
              <div className="text-[9px] mt-0.5" style={{ color: 'var(--muted-500)' }}>Many dynasties · Samaria</div>
            </div>
          </div>

          {/* ── Two-column timeline ── */}
          <div className="flex gap-2 items-start">

            {/* Judah */}
            <div className="flex-1 min-w-0">
              {judah.map((entry, i) => (
                <div key={entry.node.id}>
                  {i > 0 && <SuccLine type={entry.succession} note={entry.successionNote} />}
                  <KingCard entry={entry} onTap={id => setActivePersonId(id)} />
                </div>
              ))}
              <FallBanner label="Falls to Babylon · 586 BC" />
            </div>

            {/* Divider */}
            <div className="shrink-0 mt-2" style={{ width: 1, alignSelf: 'stretch', background: 'rgba(255,255,255,0.05)' }} />

            {/* Israel */}
            <div className="flex-1 min-w-0">
              {israel.map((entry, i) => (
                <div key={entry.node.id}>
                  {i > 0 && <SuccLine type={entry.succession} note={entry.successionNote} />}
                  <KingCard entry={entry} onTap={id => setActivePersonId(id)} />
                </div>
              ))}
              <FallBanner label="Falls to Assyria · 722 BC" />
            </div>

          </div>
        </div>
      </div>

      {activePerson && (
        <CharacterCardModal
          person={toPersonStub(activePerson)}
          onClose={() => setActivePersonId(null)}
        />
      )}
    </div>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function KingCard({ entry, onTap }: { entry: KingEntry; onTap: (personId: string) => void }) {
  const { node, spouses } = entry;
  const accent = dynastyAccent(node.dynasty);
  const verdictColor =
    node.verdict === 'good'  ? 'var(--verdict-good)'  :
    node.verdict === 'evil'  ? 'var(--verdict-evil)'  :
    node.verdict === 'mixed' ? 'var(--verdict-mixed)' :
    'var(--muted-500)';

  return (
    <button
      onClick={() => onTap(node.person_id)}
      className="w-full text-left rounded-lg px-2.5 py-2 transition-colors"
      style={{
        background: 'var(--navy-800)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderLeft: `3px solid ${accent}`,
      }}
      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'var(--navy-700)')}
      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'var(--navy-800)')}>

      {/* Name + verdict */}
      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full shrink-0" style={{ background: verdictColor }} />
        <span className="text-xs font-semibold leading-tight truncate" style={{ color: 'var(--ivory-100)' }}>
          {node.name}{node.is_queen ? ' ♛' : ''}
        </span>
      </div>

      {/* Reign dates + dynasty */}
      <div className="mt-0.5 pl-3.5 text-[10px] leading-tight" style={{ color: 'var(--muted-500)' }}>
        {reignLabel(node.reign_start_bc, node.reign_end_bc)}
        {node.dynasty && (
          <span style={{ color: accent }}> · {node.dynasty}</span>
        )}
      </div>

      {/* Spouses */}
      {spouses.length > 0 && (
        <div className="mt-1 pl-3.5 flex flex-wrap gap-1">
          {spouses.map(s => (
            <span key={s.id}
              className="text-[9px] px-1.5 py-0.5 rounded-full"
              style={{
                background: 'rgba(244,114,182,0.08)',
                color: 'rgba(244,114,182,0.75)',
                border: '1px solid rgba(244,114,182,0.2)',
              }}>
              ♥ {s.name}
            </span>
          ))}
        </div>
      )}
    </button>
  );
}

function SuccLine({ type, note }: { type: SuccessionType; note?: string }) {
  if (type === 'new-dynasty') {
    return (
      <div className="my-1 px-0.5">
        <div className="rounded-md px-2 py-1"
          style={{ background: 'rgba(239,68,68,0.07)', border: '1px solid rgba(239,68,68,0.25)' }}>
          <div className="flex items-center gap-1">
            <span className="text-[9px] font-semibold uppercase tracking-wide" style={{ color: 'rgba(239,68,68,0.7)' }}>
              new dynasty
            </span>
          </div>
          {note && (
            <div className="text-[9px] mt-0.5 italic" style={{ color: 'rgba(239,68,68,0.55)' }}>
              {note}
            </div>
          )}
        </div>
      </div>
    );
  }

  if (type === 'relative') {
    return (
      <div className="flex justify-center py-1">
        <div className="flex flex-col items-center" style={{ gap: 1 }}>
          <div style={{ width: 1, height: 8, borderLeft: '1px dashed rgba(139,154,181,0.35)' }} />
          <svg width="7" height="5" viewBox="0 0 7 5" fill="none">
            <path d="M3.5 5L0 0h7L3.5 5z" fill="rgba(139,154,181,0.35)" />
          </svg>
        </div>
      </div>
    );
  }

  // 'son' — solid gold
  return (
    <div className="flex justify-center py-1">
      <div className="flex flex-col items-center" style={{ gap: 1 }}>
        <div style={{ width: 1, height: 8, background: 'rgba(201,168,76,0.4)' }} />
        <svg width="7" height="5" viewBox="0 0 7 5" fill="none">
          <path d="M3.5 5L0 0h7L3.5 5z" fill="rgba(201,168,76,0.4)" />
        </svg>
      </div>
    </div>
  );
}

function EventBanner({ label, color }: { label: string; color: 'gold' | 'red' }) {
  const c = color === 'gold'
    ? { text: 'var(--gold-400)', bg: 'rgba(201,168,76,0.07)', border: 'rgba(201,168,76,0.2)', line: 'rgba(201,168,76,0.2)' }
    : { text: 'rgba(239,68,68,0.75)', bg: 'rgba(239,68,68,0.06)', border: 'rgba(239,68,68,0.2)', line: 'rgba(239,68,68,0.15)' };

  return (
    <div className="flex items-center gap-2 my-3">
      <div className="flex-1 h-px" style={{ background: c.line }} />
      <span className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full whitespace-nowrap"
        style={{ color: c.text, background: c.bg, border: `1px solid ${c.border}` }}>
        {label}
      </span>
      <div className="flex-1 h-px" style={{ background: c.line }} />
    </div>
  );
}

function FallBanner({ label }: { label: string }) {
  return (
    <div className="mt-2 rounded-md px-2 py-1.5 text-center"
      style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.2)' }}>
      <span className="text-[9px] font-bold uppercase tracking-wide" style={{ color: 'rgba(239,68,68,0.65)' }}>
        {label}
      </span>
    </div>
  );
}
