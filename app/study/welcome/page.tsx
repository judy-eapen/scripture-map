import Link from 'next/link';

export default function WelcomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6"
      style={{ background: 'var(--navy-950)' }}>

      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full opacity-8"
          style={{ background: 'radial-gradient(ellipse, rgba(201,168,76,0.12) 0%, transparent 65%)' }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(var(--gold-400) 1px, transparent 1px), linear-gradient(90deg, var(--gold-400) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }} />
      </div>

      <div className="relative z-10 w-full max-w-2xl text-center">

        {/* Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-8"
          style={{
            background: 'rgba(201, 168, 76, 0.08)',
            border: '1px solid rgba(201, 168, 76, 0.25)',
          }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20 4L5 12v16l15 8 15-8V12L20 4z" stroke="var(--gold-400)" strokeWidth="1.5" fill="none" />
            <path d="M20 4v24M5 12l15 8 15-8" stroke="var(--gold-400)" strokeWidth="1.5" opacity="0.45" />
            <circle cx="20" cy="20" r="3" fill="var(--gold-400)" opacity="0.8" />
          </svg>
        </div>

        {/* Headline */}
        <h1 className="text-5xl font-medium mb-4 leading-tight"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--ivory-100)' }}>
          Welcome to<br />
          <em style={{ color: 'var(--gold-300)' }}>ScriptureMap</em>
        </h1>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 my-6">
          <div className="h-px w-16" style={{ background: 'rgba(201,168,76,0.3)' }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--gold-400)' }} />
          <div className="h-px w-16" style={{ background: 'rgba(201,168,76,0.3)' }} />
        </div>

        <p className="text-lg leading-relaxed mb-3 max-w-xl mx-auto"
          style={{ color: 'var(--ivory-200)' }}>
          An interactive guide to 1 & 2 Kings — two books, four centuries, thirty-nine kings,
          and a story of faithfulness and failure that still echoes today.
        </p>
        <p className="text-base mb-12 max-w-lg mx-auto"
          style={{ color: 'var(--muted-400)' }}>
          Read each chapter with tappable characters, side-by-side ancient and modern maps,
          and historical context from archaeology and neighboring nations.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/study/1-kings/18"
            className="inline-flex items-center gap-3 rounded-2xl px-8 py-4 text-base font-semibold transition-all duration-200"
            style={{
              background: 'var(--gold-400)',
              color: 'var(--navy-950)',
              boxShadow: '0 8px 24px rgba(201,168,76,0.35)',
            }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Start studying — 1 Kings 18
          </Link>

          <Link href="/study/1-kings/1"
            className="inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-base font-medium transition-all duration-200"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(201,168,76,0.2)',
              color: 'var(--ivory-200)',
            }}>
            Start from chapter 1
          </Link>
        </div>

        <p className="mt-6 text-sm" style={{ color: 'var(--muted-500)' }}>
          <Link href="/login" style={{ color: 'var(--muted-400)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
            Sign in
          </Link>
          {' '}to save your reading progress across sessions.
        </p>

        {/* Features preview */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          {[
            {
              icon: (
                <path d="M9 20l-5.447-2.724A1 1 0 0 1 3 16.382V5.618a1 1 0 0 1 1.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0 0 21 18.382V7.618a1 1 0 0 0-.553-.894L15 4m0 13V4m0 0L9 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              ),
              label: 'Ancient + modern maps',
              desc: 'Every chapter. Side by side.',
            },
            {
              icon: (
                <path d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM12 14a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              ),
              label: 'Character cards',
              desc: 'Tap any name in the text.',
            },
            {
              icon: (
                <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              ),
              label: 'Chapter summaries',
              desc: 'Context before you dive in.',
            },
          ].map((f, i) => (
            <div key={i} className="rounded-xl p-5"
              style={{
                background: 'var(--navy-800)',
                border: '1px solid rgba(201,168,76,0.1)',
              }}>
              <div className="w-8 h-8 mb-3">
                <svg viewBox="0 0 24 24" width="24" height="24" style={{ color: 'var(--gold-400)' }}>
                  {f.icon}
                </svg>
              </div>
              <div className="text-sm font-semibold mb-1" style={{ color: 'var(--ivory-100)' }}>{f.label}</div>
              <div className="text-xs" style={{ color: 'var(--muted-400)' }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
