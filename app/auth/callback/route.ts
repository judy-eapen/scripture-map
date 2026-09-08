import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import type { EmailOtpType } from '@supabase/supabase-js'

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const token_hash = searchParams.get('token_hash')
  const type = searchParams.get('type')
  const next = searchParams.get('next') ?? '/study/welcome'

  const cookieStore = await cookies()
  const newCookies: { name: string; value: string; options: Parameters<typeof cookieStore.set>[2] }[] = []

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return cookieStore.getAll() },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options)
            newCookies.push({ name, value, options })
          })
        },
      },
    }
  )

  let redirectTo = `${origin}/login?error=auth_code_error`

  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) redirectTo = `${origin}${next}`
  } else if (token_hash && type) {
    const { error } = await supabase.auth.verifyOtp({ token_hash, type: type as EmailOtpType })
    if (!error) redirectTo = `${origin}${next}`
  }

  const response = NextResponse.redirect(redirectTo)
  newCookies.forEach(({ name, value, options }) => response.cookies.set(name, value, options))
  return response
}
