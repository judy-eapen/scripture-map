import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ personId: string }> }
) {
  const { personId } = await params
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('prophet_profiles')
    .select('id, person_id, biblical_echo, calling_narrative, ministry_summary, miracles, biblical_parallels, key_themes')
    .eq('person_id', personId)
    .single()

  if (error || !data) return NextResponse.json(null)
  return NextResponse.json(data)
}
