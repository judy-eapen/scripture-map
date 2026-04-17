import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getPersonAppearances } from '@/lib/db'

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ personId: string }> }
) {
  const { personId } = await params
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()

  const appearances = await getPersonAppearances(personId, user?.id)
  return NextResponse.json(appearances)
}
