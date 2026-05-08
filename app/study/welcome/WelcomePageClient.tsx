'use client';

import { useState } from 'react';
import Link from 'next/link';

const ARC_PHASES = [
  { num: '01', title: "Solomon's Glory", range: '1 Kings 1–10', href: '/study/1-kings/1', desc: 'The kingdom at its peak — the Temple built, wisdom unmatched, nations coming to listen.', color: '#c9a84c', bg: 'rgba(201,168,76,0.08)' },
  { num: '02', title: 'The Fracture', range: '1 Kings 11–12', href: '/study/1-kings/11', desc: "Solomon's heart turns. One foolish son's arrogance splits a united kingdom in two forever.", color: '#f59e0b', bg: 'rgba(245,158,11,0.08)' },
  { num: '03', title: 'The Spiral', range: '1 Kings 13 – 2 Kings 16', href: '/study/1-kings/13', desc: 'Parallel kingdoms in parallel decline. Nineteen northern kings — all evil. Elijah and Elisha fight the tide.', color: '#f97316', bg: 'rgba(249,115,22,0.08)' },
  { num: '04', title: 'Fall of Israel', range: '2 Kings 17', href: '/study/2-kings/17', desc: "Assyria destroys the North. The author stops to deliver the verdict: this happened because they would not listen.", color: '#ef4444', bg: 'rgba(239,68,68,0.08)' },
  { num: '05', title: 'Last Hope & Exile', range: '2 Kings 18–25', href: '/study/2-kings/18', desc: 'Hezekiah and Josiah — two good kings, too late. Babylon comes. Jerusalem falls. The story ends in silence.', color: '#94a3b8', bg: 'rgba(148,163,184,0.06)' },
];

const THEOLOGICAL_ENGINE = [
  {
    title: 'Covenant', subtitle: 'The binding agreement',
    body: "At Sinai, God promised Israel: obey and I will bless you, disobey and I will exile you (Deuteronomy 28). Every king in 1 & 2 Kings is measured against this — not by political success, but by covenant faithfulness.",
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
  },
  {
    title: 'High Places', subtitle: 'The persistent sin',
    body: "Hilltop shrines where Baal and Asherah were worshipped — or even where Yahweh was worshipped wrongly. Almost every king is judged by one phrase: 'he did not remove the high places.' This is not a minor offense. It is covenant rupture.",
    icon: <path d="M17.657 18.657A8 8 0 0 1 3.343 7.343M17.657 18.657L21 21M17.657 18.657l-3.536-3.536M3.343 7.343A8 8 0 0 1 14.657 3.343M3.343 7.343L0 4m3.343 3.343 3.536 3.536" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
  },
  {
    title: 'Prophetic Word', subtitle: 'God always speaks first',
    body: "Before every major event in Kings — a dynasty rising, a city falling, a king dying — a prophet announced it. And it always came true, sometimes generations later. The books are built to make you notice this pattern: God's word does not fail.",
    icon: <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 0 1-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
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

const ACCORDION_ITEMS = [
  {
    id: 'argument',
    label: 'The Argument of These Books',
    preview: 'What 1 & 2 Kings is really about',
  },
  {
    id: 'arc',
    label: 'The Arc of the Story',
    preview: 'Five movements across four centuries',
  },
  {
    id: 'concepts',
    label: 'Three Concepts That Unlock Everything',
    preview: 'Covenant · High Places · Prophetic Word',
  },
  {
    id: 'chapters',
    label: 'If You Only Read Six Chapters',
    preview: 'An expert shortlist of the spine chapters',
  },
];

type Props = {
  isAuthenticated: boolean;
};

export default function WelcomePageClient({ isAuthenticated }: Props) {
  const [openId, setOpenId] = useState<string | null>(null);

  function toggle(id: string) {
    setOpenId(prev => prev === id ? null : id);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 py-16"
      style={{ background: 'var(--navy-950)' }}>

      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 65%)' }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(var(--gold-400) 1px, transparent 1px), linear-gradient(90deg, var(--gold-400) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }} />
      </div>

      <div className="relative z-10 w-full max-w-2xl">

        {/* Icon + headline */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-8"
            style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.25)' }}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M20 4L5 12v16l15 8 15-8V12L20 4z" stroke="var(--gold-400)" strokeWidth="1.5" fill="none" />
              <path d="M20 4v24M5 12l15 8 15-8" stroke="var(--gold-400)" strokeWidth="1.5" opacity="0.45" />
              <circle cx="20" cy="20" r="3" fill="var(--gold-400)" opacity="0.8" />
            </svg>
          </div>

          <h1 className="text-5xl font-medium mb-4 leading-tight"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--ivory-100)' }}>
            Welcome to<br />
            <em style={{ color: 'var(--gold-300)' }}>ScriptureMap</em>
          </h1>

          <div className="flex items-center justify-center gap-4 my-6">
            <div className="h-px w-16" style={{ background: 'rgba(201,168,76,0.3)' }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--gold-400)' }} />
            <div className="h-px w-16" style={{ background: 'rgba(201,168,76,0.3)' }} />
          </div>

          <p className="text-lg leading-relaxed mb-3 max-w-xl mx-auto" style={{ color: 'var(--ivory-200)' }}>
            An interactive guide to 1 & 2 Kings — two books, four centuries, thirty-nine kings,
            and a story of faithfulness and failure that still echoes today.
          </p>
          <p className="text-base max-w-lg mx-auto" style={{ color: 'var(--muted-400)' }}>
            Read each chapter with tappable characters, side-by-side ancient and modern maps,
            and historical context from archaeology and neighboring nations.
          </p>
        </div>

        {/* CTA */}
        <div className="flex items-center justify-center mb-4">
          <Link href="/study/1-kings/1"
            className="inline-flex items-center gap-3 rounded-2xl px-8 py-4 text-base font-semibold transition-all duration-200"
            style={{ background: 'var(--gold-400)', color: 'var(--navy-950)', boxShadow: '0 8px 24px rgba(201,168,76,0.35)' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Start studying
          </Link>
        </div>

        {!isAuthenticated && (
          <p className="text-sm text-center mb-10" style={{ color: 'var(--muted-500)' }}>
            <Link href="/login" style={{ color: 'var(--muted-400)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
              Sign in
            </Link>
            {' '}to save your reading progress across sessions.
          </p>
        )}

        {isAuthenticated && <div className="mb-10" />}

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            { label: 'Ancient + modern maps' },
            { label: 'Character cards' },
            { label: 'Prophecy tracker' },
            { label: 'Verse notes' },
            { label: 'Flashcards' },
            { label: 'Theological themes' },
          ].map(f => (
            <span key={f.label} className="text-xs px-3 py-1.5 rounded-full"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'var(--muted-400)' }}>
              {f.label}
            </span>
          ))}
        </div>

        {/* Accordion — orientation content */}
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-center mb-4" style={{ color: 'var(--muted-500)' }}>
            Before you begin
          </p>

          {ACCORDION_ITEMS.map(item => (
            <div key={item.id} className="rounded-2xl overflow-hidden"
              style={{ border: `1px solid ${openId === item.id ? 'rgba(201,168,76,0.25)' : 'rgba(255,255,255,0.07)'}`, background: openId === item.id ? 'rgba(201,168,76,0.04)' : 'rgba(255,255,255,0.02)' }}>

              <button
                onClick={() => toggle(item.id)}
                className="w-full flex items-center justify-between px-5 py-4 text-left">
                <div>
                  <p className="text-sm font-semibold" style={{ color: openId === item.id ? 'var(--gold-300)' : 'var(--ivory-100)' }}>
                    {item.label}
                  </p>
                  {openId !== item.id && (
                    <p className="text-xs mt-0.5" style={{ color: 'var(--muted-500)' }}>{item.preview}</p>
                  )}
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  className="shrink-0 ml-4 transition-transform duration-200"
                  style={{ color: 'var(--gold-400)', transform: openId === item.id ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {openId === item.id && (
                <div className="px-5 pb-5" style={{ borderTop: '1px solid rgba(201,168,76,0.1)' }}>

                  {item.id === 'argument' && (
                    <div className="pt-4">
                      <div className="rounded-xl p-5 relative overflow-hidden"
                        style={{ background: 'var(--navy-800)', border: '1px solid rgba(201,168,76,0.12)' }}>
                        <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl" style={{ background: 'var(--gold-400)' }} />
                        <p className="text-base leading-relaxed mb-3"
                          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--ivory-100)', fontStyle: 'italic' }}>
                          &ldquo;1 &amp; 2 Kings is a single theological argument: when Israel kept God&apos;s covenant, they flourished.
                          When they broke it — above all through idolatry at the high places — they were stripped away.
                          These books are not history for its own sake. They are a four-century verdict
                          on what happens when a people chosen for faithfulness choose something else instead.&rdquo;
                        </p>
                        <p className="text-xs" style={{ color: 'var(--muted-400)' }}>
                          This is the Deuteronomistic framework. Every king you meet will be measured against it.
                        </p>
                      </div>
                    </div>
                  )}

                  {item.id === 'arc' && (
                    <div className="pt-4 flex flex-col gap-2">
                      {ARC_PHASES.map((phase, i) => (
                        <Link key={i} href={phase.href}
                          className="flex gap-3 rounded-xl p-4 transition-colors"
                          style={{ background: phase.bg, border: `1px solid ${phase.color}22` }}>
                          <div className="w-1 rounded-full shrink-0 mt-0.5" style={{ background: phase.color }} />
                          <div className="min-w-0">
                            <div className="text-xs font-bold mb-0.5" style={{ color: phase.color }}>{phase.num} · {phase.range}</div>
                            <div className="text-sm font-semibold mb-1" style={{ color: 'var(--ivory-100)' }}>{phase.title}</div>
                            <div className="text-xs leading-relaxed" style={{ color: 'var(--muted-400)' }}>{phase.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}

                  {item.id === 'concepts' && (
                    <div className="pt-4 flex flex-col gap-3">
                      {THEOLOGICAL_ENGINE.map((concept, i) => (
                        <div key={i} className="rounded-xl p-4"
                          style={{ background: 'var(--navy-800)', border: '1px solid rgba(201,168,76,0.1)' }}>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                              style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}>
                              <svg viewBox="0 0 24 24" width="14" height="14" style={{ color: 'var(--gold-400)' }}>{concept.icon}</svg>
                            </div>
                            <div>
                              <span className="text-sm font-semibold" style={{ color: 'var(--ivory-100)' }}>{concept.title}</span>
                              <span className="text-xs ml-2" style={{ color: 'var(--gold-400)' }}>{concept.subtitle}</span>
                            </div>
                          </div>
                          <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-400)' }}>{concept.body}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {item.id === 'chapters' && (
                    <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {EXPERT_CHAPTERS.map((ch, i) => (
                        <Link key={i} href={ch.href}
                          className="flex items-start gap-3 rounded-xl p-4 transition-colors group"
                          style={{ background: 'var(--navy-800)', border: '1px solid rgba(201,168,76,0.08)' }}>
                          <div className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center text-xs font-bold"
                            style={{ background: 'rgba(201,168,76,0.1)', color: 'var(--gold-400)' }}>
                            {i + 1}
                          </div>
                          <div>
                            <div className="text-xs font-semibold mb-0.5" style={{ color: 'var(--gold-400)' }}>{ch.ref}</div>
                            <div className="text-sm font-semibold mb-1" style={{ color: 'var(--ivory-100)' }}>{ch.title}</div>
                            <div className="text-xs leading-relaxed" style={{ color: 'var(--muted-400)' }}>{ch.reason}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}

                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
