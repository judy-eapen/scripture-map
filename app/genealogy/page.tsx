import { getGenealogyData } from '@/lib/db'
import GenealogyView from '@/components/GenealogyView'
import type { GenealogyNode, GenealogyEdge } from '@/lib/types'

const NODE_W = 150;
const NODE_H = 64;
const H_GAP = 40;
const V_GAP = 90;
const DYNASTY_GAP = 100;
const DYNASTY_ORDER = ['David', 'Omri', 'Jehu', 'Jeroboam', 'Baasha', 'other'];

function computeLayout(
  nodes: GenealogyNode[],
  edges: GenealogyEdge[],
): Record<string, { x: number; y: number }> {
  // Build parent/child maps for biological + adoption edges only
  const children: Record<string, string[]> = {};
  const parentCount: Record<string, number> = {};
  for (const n of nodes) { children[n.id] = []; parentCount[n.id] = 0; }
  for (const e of edges) {
    if (e.relationship_type !== 'biological' && e.relationship_type !== 'adoption') continue;
    children[e.parent_node_id].push(e.child_node_id);
    parentCount[e.child_node_id]++;
  }

  // BFS depth from roots (no incoming bio/adoption edges)
  const depth: Record<string, number> = {};
  const queue: Array<{ id: string; d: number }> = nodes
    .filter(n => parentCount[n.id] === 0)
    .map(n => ({ id: n.id, d: 0 }));
  while (queue.length) {
    const { id, d } = queue.shift()!;
    if (depth[id] !== undefined) continue;
    depth[id] = d;
    for (const c of children[id]) queue.push({ id: c, d: d + 1 });
  }
  for (const n of nodes) if (depth[n.id] === undefined) depth[n.id] = 0;

  // Group nodes by dynasty
  const dynastyGroups: Record<string, string[]> = {};
  for (const d of DYNASTY_ORDER) dynastyGroups[d] = [];
  for (const n of nodes) {
    const d = n.dynasty ?? 'other';
    dynastyGroups[d] ??= [];
    dynastyGroups[d].push(n.id);
  }

  // Layout: each dynasty is a vertical column band, depth = row
  const positions: Record<string, { x: number; y: number }> = {};
  let dynastyX = 0;

  for (const dynastyName of DYNASTY_ORDER) {
    const group = dynastyGroups[dynastyName];
    if (!group || group.length === 0) continue;

    // Split by depth
    const byDepth: Record<number, string[]> = {};
    for (const id of group) {
      const d = depth[id];
      byDepth[d] ??= [];
      byDepth[d].push(id);
    }

    // Dynasty column width = widest row
    const maxRowCount = Math.max(...Object.values(byDepth).map(ids => ids.length));
    const dynastyWidth = maxRowCount * (NODE_W + H_GAP) - H_GAP;

    for (const [depthStr, ids] of Object.entries(byDepth)) {
      const rowWidth = ids.length * (NODE_W + H_GAP) - H_GAP;
      const offsetX = (dynastyWidth - rowWidth) / 2;
      ids.forEach((id, i) => {
        positions[id] = {
          x: dynastyX + offsetX + i * (NODE_W + H_GAP),
          y: parseInt(depthStr) * (NODE_H + V_GAP),
        };
      });
    }

    dynastyX += dynastyWidth + DYNASTY_GAP;
  }

  return positions;
}

export default async function GenealogyPage() {
  const { nodes, edges } = await getGenealogyData()
  const positions = computeLayout(nodes, edges)

  return <GenealogyView genealogyNodes={nodes} genealogyEdges={edges} positions={positions} />
}
