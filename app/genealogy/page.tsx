import { getGenealogyData, getNavChapters, defaultNavData } from '@/lib/db'
import { createClient } from '@/lib/supabase/server'
import AppShell from '@/components/AppShell'
import GenealogyView from '@/components/GenealogyView'

export default async function GenealogyPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const [{ nodes, edges }, navData] = await Promise.all([
    getGenealogyData(),
    user ? getNavChapters(user.id) : Promise.resolve(defaultNavData()),
  ])

  return (
    <AppShell navData={navData} isAuthenticated={!!user}>
      <GenealogyView nodes={nodes} edges={edges} />
    </AppShell>
  )
}
