'use client';

import { useCallback, useState } from 'react';
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
import dagre from '@dagrejs/dagre';
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

function GenealogyNodeComponent({ data, selected }: NodeProps) {
  const nodeData = data as NodeData;
  const verdictColor =
    nodeData.verdict === 'good' ? 'var(--verdict-good)' :
    nodeData.verdict === 'evil' ? 'var(--verdict-evil)' :
    nodeData.verdict === 'mixed' ? 'var(--verdict-mixed)' :
    'rgba(255,255,255,0.3)';

  const dynastyColor = nodeData.dynastyColor ?? 'rgba(201,168,76,0.4)';

  return (
    <div
      className="rounded-xl px-3 py-2 text-center cursor-pointer transition-all"
      style={{
        background: selected ? 'rgba(201,168,76,0.18)' : 'var(--navy-800)',
        border: `1.5px solid ${selected ? 'var(--gold-400)' : dynastyColor}`,
        boxShadow: selected ? '0 0 0 2px rgba(201,168,76,0.3)' : 'none',
        minWidth: '110px',
        maxWidth: '140px',
      }}>
      <Handle type="target" position={Position.Top} style={{ background: dynastyColor, border: 'none', width: 8, height: 8 }} />

      <div className="flex items-center justify-center gap-1.5 mb-0.5">
        {nodeData.verdict && (
          <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: verdictColor }} />
        )}
        <span className="text-xs font-semibold leading-tight" style={{ color: 'var(--ivory-100)' }}>
          {nodeData.label}
          {nodeData.isQueen && <span className="ml-1 opacity-60">♛</span>}
        </span>
      </div>

      {nodeData.dynasty && (
        <span className="text-[10px]" style={{ color: dynastyColor, opacity: 0.9 }}>
          {nodeData.dynasty}
        </span>
      )}

      {nodeData.type && nodeData.type !== 'king' && (
        <span className="text-[10px] block" style={{ color: 'var(--muted-500)' }}>
          {nodeData.type}
        </span>
      )}

      <Handle type="source" position={Position.Bottom} style={{ background: dynastyColor, border: 'none', width: 8, height: 8 }} />
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

const NODE_WIDTH = 150;
const NODE_HEIGHT = 64;

function buildFlowNodes(nodes: GenealogyNode[], edges: GenealogyEdge[]): Node[] {
  const g = new dagre.graphlib.Graph();
  g.setDefaultEdgeLabel(() => ({}));
  g.setGraph({ rankdir: 'TB', nodesep: 50, ranksep: 70, marginx: 40, marginy: 40 });

  for (const n of nodes) {
    g.setNode(n.id, { width: NODE_WIDTH, height: NODE_HEIGHT });
  }
  for (const e of edges) {
    // Only use biological/adoption for layout hierarchy; skip marriage/political to avoid cycles
    if (e.relationship_type === 'biological' || e.relationship_type === 'adoption') {
      g.setEdge(e.parent_node_id, e.child_node_id);
    }
  }

  dagre.layout(g);

  return nodes.map(n => {
    const pos = g.node(n.id);
    const dynasty = n.dynasty ?? 'other';
    const color = DYNASTY_COLORS[dynasty] ?? DYNASTY_COLORS.other;
    return {
      id: n.id,
      type: 'genealogy',
      position: {
        x: pos ? pos.x - NODE_WIDTH / 2 : 0,
        y: pos ? pos.y - NODE_HEIGHT / 2 : 0,
      },
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
    return {
      id: e.id,
      source: e.parent_node_id,
      target: e.child_node_id,
      type: isMarriage ? 'straight' : 'smoothstep',
      animated: isPolitical,
      style: {
        stroke: isMarriage ? '#F472B6' : isPolitical ? '#94A3B8' : 'rgba(201,168,76,0.4)',
        strokeWidth: isMarriage ? 1.5 : 1.5,
        strokeDasharray: isMarriage ? '4 3' : undefined,
      },
      markerEnd: isMarriage ? undefined : {
        type: MarkerType.ArrowClosed,
        color: 'rgba(201,168,76,0.4)',
        width: 12,
        height: 12,
      },
      label: e.notes,
      labelStyle: { fontSize: 9, fill: 'rgba(255,255,255,0.4)' },
      labelBgStyle: { fill: 'rgba(8,15,35,0.8)' },
    };
  });
}

// -----------------------------------------------------------------------
// Main component
// -----------------------------------------------------------------------

type Props = {
  genealogyNodes: GenealogyNode[];
  genealogyEdges: GenealogyEdge[];
};

export default function GenealogyView({ genealogyNodes, genealogyEdges }: Props) {
  const initialNodes = buildFlowNodes(genealogyNodes, genealogyEdges);
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

  const DYNASTY_ORDER_DISPLAY = DYNASTY_ORDER.filter(d => genealogyNodes.some(n => (n.dynasty ?? 'other') === d));

  return (
    <div className="flex h-screen overflow-hidden" style={{ background: 'var(--navy-950)' }}>
      {/* Left legend */}
      <div className="shrink-0 flex flex-col border-r overflow-y-auto"
        style={{ width: 220, borderColor: 'rgba(255,255,255,0.06)', background: 'var(--navy-900)' }}>
        <div className="px-5 py-5">
          <div className="flex items-center gap-2 mb-5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--gold-400)' }}>
              <circle cx="12" cy="5" r="3" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="5" cy="19" r="3" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="19" cy="19" r="3" stroke="currentColor" strokeWidth="1.5" />
              <path d="M12 8v4M12 12l-7 4M12 12l7 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold-400)' }}>
              Dynasties
            </span>
          </div>

          <div className="space-y-2">
            {DYNASTY_ORDER_DISPLAY.map(d => (
              <div key={d} className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full shrink-0" style={{ background: DYNASTY_COLORS[d] ?? DYNASTY_COLORS.other }} />
                <span className="text-xs" style={{ color: 'var(--ivory-200)' }}>{d} dynasty</span>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--muted-400)' }}>
              Edge types
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-px" style={{ background: 'rgba(201,168,76,0.6)' }} />
                <span className="text-xs" style={{ color: 'var(--muted-400)' }}>Biological</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-px" style={{ background: '#F472B6', borderTop: '1px dashed #F472B6', height: 0 }} />
                <span className="text-xs" style={{ color: 'var(--muted-400)' }}>Marriage</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-px" style={{ background: '#94A3B8' }} />
                <span className="text-xs" style={{ color: 'var(--muted-400)' }}>Political</span>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--muted-400)' }}>
              Verdict
            </div>
            <div className="space-y-1.5">
              {[['good', 'var(--verdict-good)', 'Good'], ['evil', 'var(--verdict-evil)', 'Evil'], ['mixed', 'var(--verdict-mixed)', 'Mixed']].map(([, color, label]) => (
                <div key={label} className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: color }} />
                  <span className="text-xs" style={{ color: 'var(--muted-400)' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--muted-500)' }}>
              Click any node to view their character card.
            </p>
            <p className="text-xs leading-relaxed mt-1" style={{ color: 'var(--muted-500)' }}>
              Scroll to zoom · Drag to pan
            </p>
          </div>
        </div>
      </div>

      {/* Graph */}
      <div className="flex-1 relative">
        {genealogyNodes.length === 0 ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-sm mb-2" style={{ color: 'var(--muted-400)' }}>Genealogy data not yet seeded.</p>
              <p className="text-xs" style={{ color: 'var(--muted-500)' }}>Run: npx tsx scripts/seed-genealogy.ts</p>
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
            fitViewOptions={{ padding: 0.15 }}
            minZoom={0.2}
            maxZoom={2}
            style={{ background: 'var(--navy-950)' }}>
            <Background color="rgba(255,255,255,0.03)" gap={24} />
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
                const d = (node.data as NodeData).dynasty ?? 'other';
                return DYNASTY_COLORS[d] ?? DYNASTY_COLORS.other;
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
