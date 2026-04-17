import { getGenealogyData } from '@/lib/db'
import GenealogyView from '@/components/GenealogyView'
import type { GenealogyNode, GenealogyEdge } from '@/lib/types'

// Layout constants
const JUDAH_X = 250;         // Kingdom of Judah main column
const ISRAEL_X = 820;        // Kingdom of Israel main column
const PROPHET_X = 535;       // Center lane: prophets & priests
const JUDAH_SPOUSE_X = 20;   // Spouses of Judah kings (left)
const ISRAEL_SPOUSE_X = 1050; // Spouses of Israel kings (right)
const JUDAH_SIDE_X = 480;    // Non-reigning Judah children (right of Judah column)
const ISRAEL_SIDE_X = 590;   // Non-reigning Israel children (left of Israel column)

// Y axis: linear time scale. DB stores negative numbers (e.g. David = -1010).
// Y = (Y_OFFSET + reign_start_bc) * Y_SCALE
// David (-1010) → Y ≈ 100; Zedekiah (-597) → Y ≈ 1008
const Y_SCALE = 2.2;
const Y_OFFSET = 1055;

function computeLayout(
  nodes: GenealogyNode[],
  edges: GenealogyEdge[],
): Record<string, { x: number; y: number }> {
  const positions: Record<string, { x: number; y: number }> = {};
  const nodeMap = new Map(nodes.map(n => [n.id, n]));

  // --- Build edge lookup maps ---
  const spouseOf = new Map<string, string>();  // nodeId → spouse nodeId
  const politicalLinks = new Map<string, string[]>();
  const bioParents = new Map<string, string[]>();   // childId → parentIds
  const bioChildren = new Map<string, string[]>();  // parentId → childIds

  for (const e of edges) {
    if (e.relationship_type === 'marriage') {
      spouseOf.set(e.parent_node_id, e.child_node_id);
      spouseOf.set(e.child_node_id, e.parent_node_id);
    }
    if (e.relationship_type === 'political') {
      const a = politicalLinks.get(e.parent_node_id) ?? [];
      a.push(e.child_node_id);
      politicalLinks.set(e.parent_node_id, a);
      const b = politicalLinks.get(e.child_node_id) ?? [];
      b.push(e.parent_node_id);
      politicalLinks.set(e.child_node_id, b);
    }
    if (e.relationship_type === 'biological' || e.relationship_type === 'adoption') {
      const p = bioParents.get(e.child_node_id) ?? [];
      p.push(e.parent_node_id);
      bioParents.set(e.child_node_id, p);
      const c = bioChildren.get(e.parent_node_id) ?? [];
      c.push(e.child_node_id);
      bioChildren.set(e.parent_node_id, c);
    }
  }

  // --- Pass 1: All nodes with reign dates (kings) ---
  for (const n of nodes) {
    if (n.reign_start_bc == null) continue;
    const y = (Y_OFFSET + n.reign_start_bc) * Y_SCALE;
    let x: number;
    if (n.kingdom === 'south') x = JUDAH_X;
    else if (n.kingdom === 'north') x = ISRAEL_X;
    else x = PROPHET_X;
    positions[n.id] = { x, y };
  }

  // --- Pass 2: Spouses (married to a positioned king) ---
  for (const n of nodes) {
    if (positions[n.id]) continue;
    const spouseId = spouseOf.get(n.id);
    if (spouseId && positions[spouseId]) {
      const spouseNode = nodeMap.get(spouseId);
      const y = positions[spouseId].y;
      // Position on the outer side of their spouse's kingdom
      const x = (spouseNode?.kingdom === 'north') ? ISRAEL_SPOUSE_X : JUDAH_SPOUSE_X;
      positions[n.id] = { x, y };
    }
  }

  // --- Pass 3: Prophets & priests (positioned by average of connected kings) ---
  // Two sub-passes so prophets connected to other prophets benefit from those positions
  for (let pass = 0; pass < 2; pass++) {
    for (const n of nodes) {
      if (positions[n.id]) continue;
      const connected = politicalLinks.get(n.id) ?? [];
      const withPos = connected.filter(id => positions[id]);
      if (withPos.length > 0) {
        const avgY = withPos.reduce((s, id) => s + positions[id].y, 0) / withPos.length;
        positions[n.id] = { x: PROPHET_X, y: avgY };
      }
    }
  }

  // --- Pass 4: Non-reigning children (Adonijah etc.) ---
  for (const n of nodes) {
    if (positions[n.id]) continue;
    const parents = bioParents.get(n.id) ?? [];
    const positionedParents = parents.filter(id => positions[id]);
    if (positionedParents.length > 0) {
      const parent = nodeMap.get(positionedParents[0]);
      const pPos = positions[positionedParents[0]];
      const x = (parent?.kingdom === 'north') ? ISRAEL_SIDE_X : JUDAH_SIDE_X;
      positions[n.id] = { x, y: pPos.y + 80 };
    }
  }

  // --- Final fallback ---
  for (const n of nodes) {
    if (!positions[n.id]) positions[n.id] = { x: PROPHET_X, y: 200 };
  }

  return positions;
}

export default async function GenealogyPage() {
  const { nodes, edges } = await getGenealogyData()
  const positions = computeLayout(nodes, edges)

  return <GenealogyView genealogyNodes={nodes} genealogyEdges={edges} positions={positions} />
}
