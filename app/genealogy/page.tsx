import { getGenealogyData } from '@/lib/db'
import GenealogyView from '@/components/GenealogyView'
import dagre from '@dagrejs/dagre'
import type { GenealogyNode, GenealogyEdge } from '@/lib/types'

const NODE_WIDTH = 150;
const NODE_HEIGHT = 64;

function computeLayout(
  nodes: GenealogyNode[],
  edges: GenealogyEdge[],
): Record<string, { x: number; y: number }> {
  const g = new dagre.graphlib.Graph();
  g.setDefaultEdgeLabel(() => ({}));
  g.setGraph({ rankdir: 'TB', nodesep: 50, ranksep: 70, marginx: 40, marginy: 40 });

  for (const n of nodes) {
    g.setNode(n.id, { width: NODE_WIDTH, height: NODE_HEIGHT });
  }
  for (const e of edges) {
    if (e.relationship_type === 'biological' || e.relationship_type === 'adoption') {
      g.setEdge(e.parent_node_id, e.child_node_id);
    }
  }

  dagre.layout(g);

  const positions: Record<string, { x: number; y: number }> = {};
  for (const n of nodes) {
    const pos = g.node(n.id);
    positions[n.id] = {
      x: pos ? pos.x - NODE_WIDTH / 2 : 0,
      y: pos ? pos.y - NODE_HEIGHT / 2 : 0,
    };
  }
  return positions;
}

export default async function GenealogyPage() {
  const { nodes, edges } = await getGenealogyData()
  const positions = computeLayout(nodes, edges)

  return <GenealogyView genealogyNodes={nodes} genealogyEdges={edges} positions={positions} />
}
