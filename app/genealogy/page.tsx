import { getGenealogyData } from '@/lib/db'
import GenealogyView from '@/components/GenealogyView'

export default async function GenealogyPage() {
  const { nodes, edges } = await getGenealogyData()
  return <GenealogyView nodes={nodes} edges={edges} />
}
