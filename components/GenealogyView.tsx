'use client';

import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
  type Node,
  type Edge,
  type Connection,
  type NodeProps,
  Handle,
  Position,
  MarkerType,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import type { GenealogyNode, GenealogyEdge, Person } from '@/lib/types';
import CharacterCardModal from '@/components/CharacterCardModal';

// -----------------------------------------------------------------------
// Custom node
// -----------------------------------------------------------------------

type NodeData = {
  label: string;
  dynasty?: string;
  dynastyColor?: string;
  verdict?: string;
  kingdom?: string;
  isQueen?: boolean;
  notes?: string;
  type?: string;
  personData?: Person;
};

// Kingdom → border color and background tint
const KINGDOM_BORDER: Record<string, string> = {
  south:   'rgba(201,168,76,0.55)',
  north:   'rgba(96,165,250,0.55)',
  foreign: 'rgba(239,68,68,0.45)',
};
const KINGDOM_BG_SELECTED: Record<string, string> = {
  south:   'rgba(201,168,76,0.14)',
  north:   'rgba(96,165,250,0.12)',
  foreign: 'rgba(239,68,68,0.1)',
};

function GenealogyNodeComponent({ data, selected }: NodeProps) {
  const nodeData = data as NodeData;
  const verdictColor =
    nodeData.verdict === 'good' ? 'var(--verdict-good)' :
    nodeData.verdict === 'evil' ? 'var(--verdict-evil)' :
    nodeData.verdict === 'mixed' ? 'var(--verdict-mixed)' :
    'rgba(255,255,255,0.3)';

  const dynastyColor = nodeData.dynastyColor ?? 'rgba(255,255,255,0.2)';
  const isProphet = nodeData.type === 'prophet' || nodeData.type === 'official';
  const kingdomBorder = nodeData.kingdom ? (KINGDOM_BORDER[nodeData.kingdom] ?? 'rgba(167,139,250,0.5)') : 'rgba(167,139,250,0.5)';
  const borderColor = selected ? 'var(--gold-400)' : kingdomBorder;
  const bgColor = selected
    ? (KINGDOM_BG_SELECTED[nodeData.kingdom ?? ''] ?? 'rgba(201,168,76,0.14)')
    : isProphet ? 'rgba(167,139,250,0.07)' : 'var(--navy-800)';

  return (
    <div
      className="rounded-xl px-3 py-2 text-center cursor-pointer transition-all"
      style={{
        background: bgColor,
        border: `1.5px solid ${borderColor}`,
        boxShadow: selected ? `0 0 0 2px ${kingdomBorder}` : 'none',
        minWidth: '110px',
        maxWidth: '145px',
      }}>
      <Handle type="target" position={Position.Top} style={{ background: kingdomBorder, border: 'none', width: 7, height: 7 }} />
      <Handle type="target" position={Position.Left} style={{ background: kingdomBorder, border: 'none', width: 7, height: 7 }} />
      <Handle type="target" position={Position.Right} style={{ background: kingdomBorder, border: 'none', width: 7, height: 7 }} />

      <div className="flex items-center justify-center gap-1.5 mb-0.5">
        {nodeData.verdict && (
          <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: verdictColor }} />
        )}
        <span className="text-xs font-semibold leading-tight" style={{ color: 'var(--ivory-100)' }}>
          {nodeData.label}
          {nodeData.isQueen && <span className="ml-1 opacity-60">♛</span>}
        </span>
      </div>

      {/* Dynasty badge (small, below name) */}
      {nodeData.dynasty && nodeData.dynasty !== 'other' && !isProphet && (
        <span className="text-[9px]" style={{ color: dynastyColor, opacity: 0.8 }}>
          {nodeData.dynasty} dynasty
        </span>
      )}

      {/* Role label for prophets/priests */}
      {isProphet && (
        <span className="text-[9px] block" style={{ color: 'rgba(167,139,250,0.8)' }}>
          {nodeData.type === 'prophet' ? 'Prophet' : 'Priest'}
        </span>
      )}

      <Handle type="source" position={Position.Bottom} style={{ background: kingdomBorder, border: 'none', width: 7, height: 7 }} />
      <Handle type="source" position={Position.Left} style={{ background: kingdomBorder, border: 'none', width: 7, height: 7 }} />
      <Handle type="source" position={Position.Right} style={{ background: kingdomBorder, border: 'none', width: 7, height: 7 }} />
    </div>
  );
}

const nodeTypes = { genealogy: GenealogyNodeComponent };

// -----------------------------------------------------------------------
// Layout: dagre automatic layout
// -----------------------------------------------------------------------

const DYNASTY_ORDER = ['David', 'Omri', 'Jehu', 'Jeroboam', 'Baasha', 'other'];
const DYNASTY_COLORS: Record<string, string> = {
  David:    '#C9A84C',
  Omri:     '#F87171',
  Jehu:     '#60A5FA',
  Jeroboam: '#A78BFA',
  Baasha:   '#34D399',
  other:    'rgba(255,255,255,0.25)',
};

function buildFlowNodes(
  nodes: GenealogyNode[],
  positions: Record<string, { x: number; y: number }>,
): Node[] {
  return nodes.map(n => {
    const pos = positions[n.id] ?? { x: 0, y: 0 };
    const dynasty = n.dynasty ?? 'other';
    const color = DYNASTY_COLORS[dynasty] ?? DYNASTY_COLORS.other;
    return {
      id: n.id,
      type: 'genealogy',
      position: pos,
      data: {
        label: n.name,
        dynasty: n.dynasty,
        dynastyColor: color,
        verdict: n.verdict,
        kingdom: n.kingdom,
        isQueen: n.is_queen,
        notes: n.notes,
        type: n.type,
      } satisfies NodeData,
    };
  });
}

function buildFlowEdges(edges: GenealogyEdge[]): Edge[] {
  return edges.map(e => {
    const isMarriage = e.relationship_type === 'marriage';
    const isPolitical = e.relationship_type === 'political';
    const isBio = e.relationship_type === 'biological' || e.relationship_type === 'adoption';
    return {
      id: e.id,
      source: e.parent_node_id,
      target: e.child_node_id,
      type: isMarriage ? 'straight' : 'smoothstep',
      animated: false,
      style: {
        stroke: isMarriage ? '#F472B6' : isPolitical ? 'rgba(167,139,250,0.6)' : 'rgba(201,168,76,0.45)',
        strokeWidth: isPolitical ? 1.5 : 1.5,
        strokeDasharray: isMarriage ? '5 3' : isPolitical ? '3 3' : undefined,
        opacity: isPolitical ? 0.75 : 1,
      },
      markerEnd: isBio ? {
        type: MarkerType.ArrowClosed,
        color: 'rgba(201,168,76,0.5)',
        width: 10,
        height: 10,
      } : undefined,
      // Only show notes as label for marriages (keeps the graph clean)
      label: isMarriage ? e.notes : undefined,
      labelStyle: { fontSize: 9, fill: '#F472B6', opacity: 0.7 },
      labelBgStyle: { fill: 'rgba(8,15,35,0.85)', padding: 2 },
    };
  });
}

// -----------------------------------------------------------------------
// Main component
// -----------------------------------------------------------------------

type Props = {
  genealogyNodes: GenealogyNode[];
  genealogyEdges: GenealogyEdge[];
  positions: Record<string, { x: number; y: number }>;
};

export default function GenealogyView({ genealogyNodes, genealogyEdges, positions }: Props) {
  const router = useRouter();
  const initialNodes = buildFlowNodes(genealogyNodes, positions);
  const initialEdges = buildFlowEdges(genealogyEdges);

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [activePersonId, setActivePersonId] = useState<string | null>(null);
  const [activePerson, setActivePerson] = useState<Person | null>(null);

  const onConnect = useCallback(
    (params: Connection) => setEdges(eds => addEdge(params, eds)),
    [setEdges]
  );

  const onNodeClick = useCallback((_: React.MouseEvent, node: Node) => {
    const gNode = genealogyNodes.find(n => n.id === node.id);
    if (!gNode) return;
    setActivePersonId(node.id);
    // Build a minimal Person object from the genealogy node data
    const data = node.data as NodeData;
    const person: Person = {
      id: gNode.person_id,
      name: gNode.name,
      type: gNode.type ?? 'other',
      kingdom: gNode.kingdom,
      verdict: gNode.verdict,
      bio: gNode.notes ?? '',
    };
    setActivePerson(person);
  }, [genealogyNodes]);

  return (
    <div className="flex overflow-hidden" style={{ background: 'var(--navy-950)', height: '100dvh' }}>
      {/* Left legend */}
      <div className="shrink-0 flex flex-col border-r overflow-y-auto"
        style={{ width: 220, borderColor: 'rgba(255,255,255,0.06)', background: 'var(--navy-900)' }}>
        <div className="px-5 py-5">
          {/* Back button */}
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 mb-5 text-xs transition-colors"
            style={{ color: 'var(--muted-400)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--ivory-100)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted-400)')}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M5 12l7 7M5 12l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </button>

          {/* Kingdoms */}
          <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--gold-400)' }}>
            Kingdoms
          </div>
          <div className="space-y-2 mb-2">
            <div className="flex items-center gap-2.5">
              <div className="w-3 h-3 rounded-sm shrink-0" style={{ background: 'rgba(201,168,76,0.25)', border: '1.5px solid rgba(201,168,76,0.6)' }} />
              <span className="text-xs" style={{ color: 'var(--ivory-200)' }}>Kingdom of Judah</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-3 h-3 rounded-sm shrink-0" style={{ background: 'rgba(96,165,250,0.2)', border: '1.5px solid rgba(96,165,250,0.6)' }} />
              <span className="text-xs" style={{ color: 'var(--ivory-200)' }}>Kingdom of Israel</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-3 h-3 rounded-sm shrink-0" style={{ background: 'rgba(167,139,250,0.15)', border: '1.5px solid rgba(167,139,250,0.5)' }} />
              <span className="text-xs" style={{ color: 'var(--ivory-200)' }}>Prophets & Priests</span>
            </div>
          </div>
          <p className="text-xs mb-5" style={{ color: 'var(--muted-500)' }}>
            Judah (left) · Prophets (center) · Israel (right)
            <br />Y-axis = time, top to bottom
          </p>

          {/* Dynasties */}
          <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--muted-400)' }}>
            Dynasties
          </div>
          <div className="space-y-1.5 mb-5">
            {DYNASTY_ORDER.filter(d => genealogyNodes.some(n => (n.dynasty ?? 'other') === d)).map(d => (
              <div key={d} className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: DYNASTY_COLORS[d] ?? DYNASTY_COLORS.other }} />
                <span className="text-xs" style={{ color: 'var(--muted-400)' }}>{d === 'other' ? 'Independent' : `${d}`}</span>
              </div>
            ))}
          </div>

          {/* Edge types */}
          <div className="pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--muted-400)' }}>
              Lines
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-px" style={{ background: 'rgba(201,168,76,0.6)' }} />
                <span className="text-xs" style={{ color: 'var(--muted-400)' }}>Parent → Child</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-px" style={{ borderTop: '1.5px dashed #F472B6' }} />
                <span className="text-xs" style={{ color: 'var(--muted-400)' }}>Marriage</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-px" style={{ borderTop: '1.5px dotted #94A3B8' }} />
                <span className="text-xs" style={{ color: 'var(--muted-400)' }}>Prophet / Priest</span>
              </div>
            </div>
          </div>

          {/* Verdict */}
          <div className="mt-5 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--muted-400)' }}>
              Verdict dot
            </div>
            <div className="space-y-1.5">
              {[['var(--verdict-good)', 'Faithful'], ['var(--verdict-evil)', 'Wicked'], ['var(--verdict-mixed)', 'Mixed']].map(([color, label]) => (
                <div key={label} className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: color }} />
                  <span className="text-xs" style={{ color: 'var(--muted-400)' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--muted-500)' }}>
              Click any node to view their card.
            </p>
            <p className="text-xs leading-relaxed mt-1" style={{ color: 'var(--muted-500)' }}>
              Scroll to zoom · Drag to pan
            </p>
          </div>
        </div>
      </div>

      {/* Graph */}
      <div className="flex-1 relative">
        {/* Kingdom column headers — fixed overlay */}
        <div className="absolute top-0 left-0 right-0 flex pointer-events-none" style={{ zIndex: 5 }}>
          <div className="absolute text-center" style={{ left: '10%', top: 10 }}>
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ color: 'rgba(201,168,76,0.9)', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)' }}>
              Kingdom of Judah
            </span>
          </div>
          <div className="absolute text-center" style={{ left: '50%', transform: 'translateX(-50%)', top: 10 }}>
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ color: 'rgba(167,139,250,0.8)', background: 'rgba(167,139,250,0.06)', border: '1px solid rgba(167,139,250,0.2)' }}>
              Prophets & Priests
            </span>
          </div>
          <div className="absolute text-center" style={{ right: '10%', top: 10 }}>
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ color: 'rgba(96,165,250,0.9)', background: 'rgba(96,165,250,0.08)', border: '1px solid rgba(96,165,250,0.2)' }}>
              Kingdom of Israel
            </span>
          </div>
        </div>

        {genealogyNodes.length === 0 ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-sm mb-2" style={{ color: 'var(--muted-400)' }}>Genealogy data not yet seeded.</p>
            </div>
          </div>
        ) : (
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={onNodeClick}
            nodeTypes={nodeTypes}
            fitView
            fitViewOptions={{ padding: 0.12 }}
            minZoom={0.15}
            maxZoom={2}
            style={{ background: 'var(--navy-950)' }}>
            <Background color="rgba(255,255,255,0.025)" gap={32} />
            <Controls
              style={{
                background: 'var(--navy-800)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 12,
              }} />
            <MiniMap
              style={{
                background: 'var(--navy-900)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
              nodeColor={node => {
                const data = node.data as NodeData;
                if (data.kingdom === 'south') return 'rgba(201,168,76,0.7)';
                if (data.kingdom === 'north') return 'rgba(96,165,250,0.7)';
                return 'rgba(167,139,250,0.6)';
              }}
            />
          </ReactFlow>
        )}
      </div>

      {/* Character card modal */}
      {activePerson && (
        <CharacterCardModal
          person={activePerson}
          onClose={() => { setActivePerson(null); setActivePersonId(null); }}
        />
      )}
    </div>
  );
}
