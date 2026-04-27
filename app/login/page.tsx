'use client';

import { useState, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const authError = searchParams.get('error');

  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [signedUp, setSignedUp] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) return;
    setLoading(true);
    setError('');

    const supabase = createClient();

    if (mode === 'signin') {
      const { error: sbError } = await supabase.auth.signInWithPassword({ email, password });
      if (sbError) {
        setLoading(false);
        setError(sbError.message);
        return;
      }
      router.push('/study/welcome');
      router.refresh();
    } else {
      const { error: sbError } = await supabase.auth.signUp({ email, password });
      if (sbError) {
        setLoading(false);
        setError(sbError.message);
        return;
      }
      setSignedUp(true);
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: 'var(--navy-950)' }}>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(ellipse, var(--gold-400) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-5"
          style={{ background: 'radial-gradient(ellipse, var(--kingdom-south) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-5"
          style={{ background: 'radial-gradient(ellipse, var(--kingdom-north) 0%, transparent 70%)' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--gold-400) 1px, transparent 1px), linear-gradient(90deg, var(--gold-400) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }} />

      <div className="relative z-10 w-full max-w-md px-6">

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

        <div className="rounded-2xl p-8"
          style={{
            background: 'var(--navy-800)',
            border: '1px solid rgba(201, 168, 76, 0.15)',
            boxShadow: '0 24px 48px rgba(0,0,0,0.4)',
          }}>

          {authError === 'auth_code_error' && (
            <div className="mb-5 rounded-xl px-4 py-3 text-sm"
              style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', color: '#f87171' }}>
              That link has expired. Please sign in again.
            </div>
          )}

          {signedUp ? (
            <div className="text-center py-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="text-xl font-medium mb-2" style={{ color: 'var(--ivory-100)' }}>Account created</h2>
              <p className="text-sm mb-6" style={{ color: 'var(--muted-400)' }}>
                Check your email to confirm your account, then{' '}
                <button onClick={() => { setSignedUp(false); setMode('signin'); }}
                  className="underline" style={{ color: 'var(--gold-300)' }}>
                  sign in
                </button>.
              </p>
            </div>
          ) : (
            <>
              {/* Mode tabs */}
              <div className="flex rounded-xl p-1 mb-6"
                style={{ background: 'var(--navy-950)' }}>
                {(['signin', 'signup'] as const).map(m => (
                  <button key={m} onClick={() => { setMode(m); setError(''); }}
                    className="flex-1 rounded-lg py-2 text-sm font-medium transition-all"
                    style={{
                      background: mode === m ? 'var(--navy-700)' : 'transparent',
                      color: mode === m ? 'var(--ivory-100)' : 'var(--muted-400)',
                    }}>
                    {m === 'signin' ? 'Sign in' : 'Create account'}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--ivory-200)' }}>Email</label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                    style={{ background: 'var(--navy-950)', border: '1px solid var(--navy-600)', color: 'var(--ivory-100)' }}
                    onFocus={e => { e.currentTarget.style.borderColor = 'var(--gold-400)'; }}
                    onBlur={e => { e.currentTarget.style.borderColor = 'var(--navy-600)'; }}
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--ivory-200)' }}>Password</label>
                  <input
                    id="password"
                    type="password"
                    autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
                    required
                    minLength={6}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                    style={{ background: 'var(--navy-950)', border: '1px solid var(--navy-600)', color: 'var(--ivory-100)' }}
                    onFocus={e => { e.currentTarget.style.borderColor = 'var(--gold-400)'; }}
                    onBlur={e => { e.currentTarget.style.borderColor = 'var(--navy-600)'; }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || !email || !password}
                  className="w-full rounded-xl py-3 text-sm font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    background: 'var(--gold-400)',
                    color: 'var(--navy-950)',
                    boxShadow: '0 4px 16px rgba(201, 168, 76, 0.3)',
                  }}>
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.3" />
                        <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                      {mode === 'signin' ? 'Signing in...' : 'Creating account...'}
                    </span>
                  ) : (
                    mode === 'signin' ? 'Sign in' : 'Create account'
                  )}
                </button>
              </form>

              {error && (
                <p className="mt-4 text-sm text-center" style={{ color: '#f87171' }}>{error}</p>
              )}
            </>
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

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
