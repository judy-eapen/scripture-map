import Link from 'next/link';

const ARC_PHASES = [
  {
    num: '01',
    title: "Solomon's Glory",
    range: '1 Kings 1–10',
    href: '/study/1-kings/1',
    desc: 'The kingdom at its peak — the Temple built, wisdom unmatched, nations coming to listen.',
    color: '#c9a84c',
    bg: 'rgba(201,168,76,0.08)',
  },
  {
    num: '02',
    title: 'The Fracture',
    range: '1 Kings 11–12',
    href: '/study/1-kings/11',
    desc: "Solomon's heart turns. One foolish son's arrogance splits a united kingdom in two forever.",
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.08)',
  },
  {
    num: '03',
    title: 'The Spiral',
    range: '1 Kings 13 – 2 Kings 16',
    href: '/study/1-kings/13',
    desc: 'Parallel kingdoms in parallel decline. Nineteen northern kings — all evil. Elijah and Elisha fight the tide.',
    color: '#f97316',
    bg: 'rgba(249,115,22,0.08)',
  },
  {
    num: '04',
    title: 'Fall of Israel',
    range: '2 Kings 17',
    href: '/study/2-kings/17',
    desc: "Assyria destroys the North. The author stops to deliver the verdict: this happened because they would not listen.",
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.08)',
  },
  {
    num: '05',
    title: 'Last Hope & Exile',
    range: '2 Kings 18–25',
    href: '/study/2-kings/18',
    desc: 'Hezekiah and Josiah — two good kings, too late. Babylon comes. Jerusalem falls. The story ends in silence.',
    color: '#94a3b8',
    bg: 'rgba(148,163,184,0.06)',
  },
];

const THEOLOGICAL_ENGINE = [
  {
    icon: (
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
    title: 'Covenant',
    subtitle: 'The binding agreement',
    body: "At Sinai, God promised Israel: obey and I will bless you, disobey and I will exile you (Deuteronomy 28). Every king in 1 & 2 Kings is measured against this — not by political success, but by covenant faithfulness.",
  },
  {
    icon: (
      <path d="M17.657 18.657A8 8 0 0 1 3.343 7.343M17.657 18.657L21 21M17.657 18.657l-3.536-3.536M3.343 7.343A8 8 0 0 1 14.657 3.343M3.343 7.343L0 4m3.343 3.343 3.536 3.536" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
    title: 'High Places',
    subtitle: 'The persistent sin',
    body: "Hilltop shrines where Baal and Asherah were worshipped — or even where Yahweh was worshipped wrongly. Almost every king is judged by one phrase: 'he did not remove the high places.' This is not a minor offense. It is covenant rupture.",
  },
  {
    icon: (
      <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 0 1-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    ),
    title: 'Prophetic Word',
    subtitle: 'God always speaks first',
    body: "Before every major event in Kings — a dynasty rising, a city falling, a king dying — a prophet announced it. And it always came true, sometimes generations later. The books are built to make you notice this pattern: God's word does not fail.",
  },
];

const EXPERT_CHAPTERS = [
  { ref: '1 Kings 11', href: '/study/1-kings/11', title: 'The Fracture Point', reason: "Solomon's heart turns. The most important 'why' in the whole story." },
  { ref: '1 Kings 12', href: '/study/1-kings/12', title: 'The Kingdom Splits', reason: "Rehoboam's arrogance creates two kingdoms that never reunite." },
  { ref: '1 Kings 18', href: '/study/1-kings/18', title: 'Elijah on Carmel', reason: 'The most dramatic confrontation in Kings. Elijah as new Moses.' },
  { ref: '2 Kings 17', href: '/study/2-kings/17', title: "Israel's Verdict", reason: "The author stops the narrative to explain exactly why the North fell." },
  { ref: '2 Kings 19', href: '/study/2-kings/19', title: "Hezekiah's Prayer", reason: 'What faithful kingship looks like — and how God responds to it.' },
  { ref: '2 Kings 22', href: '/study/2-kings/22', title: "Josiah's Reform", reason: "The last great king finds a lost Torah scroll and tears his robes." },
];

export default function WelcomePage() {
  return (
    <div style={{ background: 'var(--navy-950)' }}>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">

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

          {/* CTA */}
          <div className="flex items-center justify-center">
            <Link href="/study/1-kings/1"
              className="inline-flex items-center gap-3 rounded-2xl px-8 py-4 text-base font-semibold transition-all duration-200"
              style={{
                background: 'var(--gold-400)',
                color: 'var(--navy-950)',
                boxShadow: '0 8px 24px rgba(201,168,76,0.35)',
              }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Start studying
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

          {/* Scroll hint */}
          <div className="mt-12 flex flex-col items-center gap-2" style={{ color: 'var(--muted-500)' }}>
            <span className="text-sm">Understand what you&apos;re about to read</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--muted-500)', animation: 'bounce 2s infinite' }}>
              <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* ── ORIENTATION ─────────────────────────────────────────────── */}
      <div className="px-6 pb-32" style={{ borderTop: '1px solid rgba(201,168,76,0.1)' }}>
        <div className="max-w-4xl mx-auto pt-20">

          {/* Section label */}
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px flex-1" style={{ background: 'rgba(201,168,76,0.15)' }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--gold-400)' }}>Before You Begin</span>
            <div className="h-px flex-1" style={{ background: 'rgba(201,168,76,0.15)' }} />
          </div>

          {/* ── 1. The Thesis ───────────────────────────────────────── */}
          <div className="mb-20 rounded-2xl p-8 relative overflow-hidden"
            style={{ background: 'var(--navy-800)', border: '1px solid rgba(201,168,76,0.15)' }}>
            <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl" style={{ background: 'var(--gold-400)' }} />
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--gold-400)' }}>
              The Argument of These Two Books
            </p>
            <p className="text-xl leading-relaxed mb-4"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--ivory-100)', fontStyle: 'italic' }}>
              &ldquo;1 &amp; 2 Kings is a single theological argument: when Israel kept God&apos;s covenant, they flourished.
              When they broke it&nbsp;&mdash; above all through idolatry at the high places&nbsp;&mdash; they were stripped away.
              These books are not history for its own sake. They are a four-century verdict
              on what happens when a people chosen for faithfulness choose something else instead.&rdquo;
            </p>
            <p className="text-sm" style={{ color: 'var(--muted-400)' }}>
              This is the Deuteronomistic framework. Every king you meet will be measured against it.
            </p>
          </div>

          {/* ── 2. Narrative Arc ────────────────────────────────────── */}
          <div className="mb-20">
            <h2 className="text-2xl font-medium mb-2" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--ivory-100)' }}>
              The Arc of the Story
            </h2>
            <p className="text-sm mb-8" style={{ color: 'var(--muted-400)' }}>
              Four centuries compressed into five movements. This is the shape before you read a single chapter.
            </p>

            {/* Desktop: horizontal strip */}
            <div className="hidden sm:flex rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
              {ARC_PHASES.map((phase, i) => (
                <Link key={i} href={phase.href}
                  className="flex-1 p-5 transition-all duration-200 group"
                  style={{ background: phase.bg, borderRight: i < 4 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                  <div className="h-0.5 mb-4 rounded-full" style={{ background: phase.color }} />
                  <div className="text-xs font-bold mb-1 opacity-60" style={{ color: phase.color }}>{phase.num}</div>
                  <div className="text-sm font-semibold mb-1 leading-tight" style={{ color: 'var(--ivory-100)' }}>{phase.title}</div>
                  <div className="text-xs mb-3" style={{ color: phase.color, opacity: 0.8 }}>{phase.range}</div>
                  <div className="text-xs leading-relaxed" style={{ color: 'var(--muted-400)' }}>{phase.desc}</div>
                </Link>
              ))}
            </div>

            {/* Mobile: stacked */}
            <div className="sm:hidden flex flex-col gap-3">
              {ARC_PHASES.map((phase, i) => (
                <Link key={i} href={phase.href}
                  className="flex gap-4 rounded-xl p-4"
                  style={{ background: phase.bg, border: `1px solid ${phase.color}22` }}>
                  <div className="w-1 rounded-full flex-shrink-0 mt-1" style={{ background: phase.color }} />
                  <div>
                    <div className="text-xs font-bold mb-0.5" style={{ color: phase.color }}>{phase.num} · {phase.range}</div>
                    <div className="text-sm font-semibold mb-1" style={{ color: 'var(--ivory-100)' }}>{phase.title}</div>
                    <div className="text-xs leading-relaxed" style={{ color: 'var(--muted-400)' }}>{phase.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* ── 3. Theological Engine ────────────────────────────────── */}
          <div className="mb-20">
            <h2 className="text-2xl font-medium mb-2" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--ivory-100)' }}>
              Three Concepts That Unlock Everything
            </h2>
            <p className="text-sm mb-8" style={{ color: 'var(--muted-400)' }}>
              Every confusing passage in 1 & 2 Kings becomes clearer once you understand these.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {THEOLOGICAL_ENGINE.map((concept, i) => (
                <div key={i} className="rounded-xl p-6"
                  style={{ background: 'var(--navy-800)', border: '1px solid rgba(201,168,76,0.1)' }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}>
                    <svg viewBox="0 0 24 24" width="20" height="20" style={{ color: 'var(--gold-400)' }}>
                      {concept.icon}
                    </svg>
                  </div>
                  <div className="text-base font-semibold mb-0.5" style={{ color: 'var(--ivory-100)' }}>{concept.title}</div>
                  <div className="text-xs mb-3" style={{ color: 'var(--gold-400)' }}>{concept.subtitle}</div>
                  <div className="text-sm leading-relaxed" style={{ color: 'var(--muted-400)' }}>{concept.body}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── 4. Expert Reading Guide ──────────────────────────────── */}
          <div>
            <h2 className="text-2xl font-medium mb-2" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--ivory-100)' }}>
              If You Only Read Six Chapters
            </h2>
            <p className="text-sm mb-8" style={{ color: 'var(--muted-400)' }}>
              An expert&apos;s shortlist. These six chapters form the spine of the whole story.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {EXPERT_CHAPTERS.map((ch, i) => (
                <Link key={i} href={ch.href}
                  className="flex items-start gap-4 rounded-xl p-4 transition-all duration-200 group"
                  style={{ background: 'var(--navy-800)', border: '1px solid rgba(201,168,76,0.08)' }}>
                  <div className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center text-xs font-bold"
                    style={{ background: 'rgba(201,168,76,0.1)', color: 'var(--gold-400)' }}>
                    {i + 1}
                  </div>
                  <div>
                    <div className="text-xs font-semibold mb-0.5" style={{ color: 'var(--gold-400)' }}>{ch.ref}</div>
                    <div className="text-sm font-semibold mb-1" style={{ color: 'var(--ivory-100)' }}>{ch.title}</div>
                    <div className="text-xs leading-relaxed" style={{ color: 'var(--muted-400)' }}>{ch.reason}</div>
                  </div>
                  <svg className="ml-auto flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="var(--gold-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
