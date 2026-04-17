import { NextRequest, NextResponse } from 'next/server'
import { getChaptersForTheme } from '@/lib/db'

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ themeId: string }> }
) {
  const { themeId } = await params
  const chapters = await getChaptersForTheme(themeId)
  return NextResponse.json(chapters)
}
