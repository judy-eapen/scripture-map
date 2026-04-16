import { getGenealogyData } from '@/lib/db'
import GenealogyView from '@/components/GenealogyView'

export default async function GenealogyPage() {
  const { nodes, edges } = await getGenealogyData()

  return <GenealogyView genealogyNodes={nodes} genealogyEdges={edges} />
}
