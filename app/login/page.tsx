'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const searchParams = useSearchParams();
  const authError = searchParams.get('error');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError('');
    const supabase = createClient();
    const { error: sbError } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: window.location.origin + '/auth/callback' },
    });
    if (sbError) {
      setLoading(false);
      setError(sbError.message);
      return;
    }
    setSent(true);
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: 'var(--navy-950)' }}>

      {/* Atmospheric background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(ellipse, var(--gold-400) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-5"
          style={{ background: 'radial-gradient(ellipse, var(--kingdom-south) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-5"
          style={{ background: 'radial-gradient(ellipse, var(--kingdom-north) 0%, transparent 70%)' }} />
      </div>

      {/* Subtle ancient map grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--gold-400) 1px, transparent 1px), linear-gradient(90deg, var(--gold-400) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }} />

      <div className="relative z-10 w-full max-w-md px-6">

        {/* Logo */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5"
            style={{ background: 'rgba(201, 168, 76, 0.1)', border: '1px solid rgba(201, 168, 76, 0.3)' }}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M16 3L4 10v12l12 7 12-7V10L16 3z" stroke="var(--gold-400)" strokeWidth="1.5" fill="none" />
              <path d="M16 3v19M4 10l12 6 12-6" stroke="var(--gold-400)" strokeWidth="1.5" opacity="0.5" />
            </svg>
          </div>
          <h1 className="text-3xl font-medium mb-2" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--ivory-100)' }}>
            ScriptureMap
          </h1>
          <p style={{ color: 'var(--muted-400)', fontSize: '0.9375rem' }}>
            Study 1 & 2 Kings with maps, timelines, and historical context
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl p-8"
          style={{
            background: 'var(--navy-800)',
            border: '1px solid rgba(201, 168, 76, 0.15)',
            boxShadow: '0 24px 48px rgba(0,0,0,0.4)',
          }}>

          {authError === 'auth_code_error' && (
            <div className="mb-5 rounded-xl px-4 py-3 text-sm"
              style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', color: '#f87171' }}>
              Sign-in link has expired. Please request a new one.
            </div>
          )}

          {!sent ? (
            <>
              <h2 className="text-xl font-medium mb-1" style={{ color: 'var(--ivory-100)' }}>
                Sign in to save progress
              </h2>
              <p className="mb-6 text-sm" style={{ color: 'var(--muted-400)' }}>
                Enter your email and we'll send you a sign-in link. ScriptureMap is free to read without an account.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--ivory-200)' }}>
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                    style={{
                      background: 'var(--navy-950)',
                      border: '1px solid var(--navy-600)',
                      color: 'var(--ivory-100)',
                    }}
                    onFocus={e => { e.currentTarget.style.borderColor = 'var(--gold-400)'; }}
                    onBlur={e => { e.currentTarget.style.borderColor = 'var(--navy-600)'; }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || !email}
                  className="w-full rounded-xl py-3 text-sm font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    background: loading ? 'var(--gold-500)' : 'var(--gold-400)',
                    color: 'var(--navy-950)',
                    boxShadow: '0 4px 16px rgba(201, 168, 76, 0.3)',
                  }}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.3" />
                        <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send me a sign-in link'
                  )}
                </button>
              </form>

              {error && (
                <p className="mt-4 text-sm text-center" style={{ color: '#f87171' }}>
                  {error}
                </p>
              )}
            </>
          ) : (
            <div className="text-center py-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="text-xl font-medium mb-2" style={{ color: 'var(--ivory-100)' }}>
                Check your email
              </h2>
              <p className="text-sm mb-6" style={{ color: 'var(--muted-400)' }}>
                We sent a sign-in link to <span style={{ color: 'var(--gold-300)' }}>{email}</span>.
                Click it to continue.
              </p>
              <button
                onClick={() => setSent(false)}
                className="text-sm underline"
                style={{ color: 'var(--muted-400)' }}>
                Use a different email
              </button>
            </div>
          )}
        </div>

        <div className="mt-6 text-center">
          <Link href="/study/1-kings/1"
            className="text-sm transition-colors"
            style={{ color: 'var(--muted-400)' }}>
            Continue reading without signing in →
          </Link>
        </div>
      </div>
    </div>
  );
}
