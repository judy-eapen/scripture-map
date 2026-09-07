'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { NavChapter } from '@/lib/types';
import { QUIZ_ENABLED } from '@/lib/flags';
import { signOut } from '@/app/actions/auth';

type Props = {
  currentBook: string;
  currentChapter: number;
  navData: { book: string; chapters: NavChapter[] }[];
  isAuthenticated?: boolean;
  // Mobile: controlled open state from parent
  mobileOpen?: boolean;
  onMobileClose?: () => void;
};

const bookSlugs: Record<string, string> = {
  '1 Kings': '1-kings',
  '2 Kings': '2-kings',
  'Mark': 'mark',
};

export default function ChapterNav({ currentBook, currentChapter, navData, isAuthenticated, mobileOpen, onMobileClose }: Props) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>(() => ({
    '1 Kings': currentBook === '1 Kings',
    '2 Kings': currentBook === '2 Kings',
    'Mark': currentBook === 'Mark',
  }));
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const totalRead = navData.flatMap(b => b.chapters).filter(c => c.is_read).length;
  const totalChapters = navData.flatMap(b => b.chapters).length;

  return (
    <>
      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 md:hidden"
          style={{ background: 'rgba(0,0,0,0.6)', zIndex: 49 }}
          onClick={onMobileClose}
        />
      )}

      {/* Sidebar — desktop: inline shrink-0; mobile: fixed overlay drawer */}
      <aside
        className="flex flex-col h-full overflow-hidden transition-all duration-300 shrink-0"
        style={{
          width: sidebarOpen ? '272px' : '56px',
          background: 'var(--navy-900)',
          // On mobile, render as a fixed drawer; hidden when mobileOpen is false
          ...(mobileOpen !== undefined ? {
            position: 'fixed' as const,
            top: 0,
            left: 0,
            height: '100%',
            zIndex: 50,
            transform: mobileOpen ? 'translateX(0)' : 'translateX(-100%)',
            transition: 'transform 0.3s ease, width 0.3s ease',
          } : {}),
          borderRight: '1px solid rgba(201,168,76,0.1)',
        }}>

        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-5"
          style={{ borderBottom: '1px solid rgba(201,168,76,0.08)' }}>
          {sidebarOpen && (
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <div className="w-7 h-7 rounded-lg shrink-0 flex items-center justify-center"
                style={{ background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.2)' }}>
                <svg width="14" height="14" viewBox="0 0 32 32" fill="none">
                  <path d="M16 3L4 10v12l12 7 12-7V10L16 3z" stroke="var(--gold-400)" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <span className="text-sm font-semibold truncate" style={{ color: 'var(--ivory-100)', fontFamily: 'var(--font-playfair)' }}>
                ScriptureMap
              </span>
            </div>
          )}
          <button
            onClick={() => setSidebarOpen(o => !o)}
            className="ml-auto w-8 h-8 rounded-lg flex items-center justify-center transition-colors shrink-0"
            style={{ color: 'var(--muted-400)' }}
            title={sidebarOpen ? 'Collapse' : 'Expand'}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d={sidebarOpen ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Progress bar */}
        {sidebarOpen && (
          <div className="px-4 py-3" style={{ borderBottom: '1px solid rgba(201,168,76,0.08)' }}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs" style={{ color: 'var(--muted-400)' }}>Progress</span>
              <span className="text-xs font-medium" style={{ color: 'var(--gold-300)' }}>
                {totalRead} / {totalChapters}
              </span>
            </div>
            <div className="h-1 rounded-full overflow-hidden" style={{ background: 'var(--navy-700)' }}>
              <div className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${(totalRead / totalChapters) * 100}%`,
                  background: 'linear-gradient(90deg, var(--gold-500), var(--gold-300))',
                }} />
            </div>
          </div>
        )}

        {/* Chapter list */}
        <nav className="flex-1 min-h-0 overflow-y-auto py-2">
          {navData.map(({ book, chapters }) => {
            const slug = bookSlugs[book];
            const isExpanded = expanded[book];
            return (
              <div key={book}>
                <button
                  onClick={() => setExpanded(e => ({ ...e, [book]: !e[book] }))}
                  className="w-full flex items-center gap-2 px-4 py-2.5 transition-colors text-left"
                  style={{ color: isExpanded ? 'var(--gold-300)' : 'var(--muted-400)' }}>
                  {sidebarOpen ? (
                    <>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                        style={{ transition: 'transform 0.2s', transform: isExpanded ? 'rotate(90deg)' : 'rotate(0)' }}>
                        <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-xs font-semibold uppercase tracking-wider">{book}</span>
                      <span className="ml-auto text-xs" style={{ color: 'var(--muted-500)' }}>
                        {chapters.filter(c => c.is_read).length}/{chapters.length}
                      </span>
                    </>
                  ) : (
                    <span className="text-xs font-bold" style={{ color: isExpanded ? 'var(--gold-400)' : 'var(--muted-500)' }}>
                      {book === '1 Kings' ? '1K' : book === '2 Kings' ? '2K' : 'Mk'}
                    </span>
                  )}
                </button>

                {(isExpanded || !sidebarOpen) && (
                  <div className={sidebarOpen ? 'grid grid-cols-5 gap-1 px-3 pb-3' : 'flex flex-col items-center gap-1 pb-2'}>
                    {chapters.map(ch => {
                      const isActive = currentBook === book && currentChapter === ch.number;
                      const hasScore = QUIZ_ENABLED && ch.quiz_best_score != null;
                      return (
                        <Link
                          key={ch.number}
                          href={`/study/${slug}/${ch.number}`}
                          className="flex flex-col items-center justify-center rounded-lg text-xs font-medium transition-all relative"
                          style={{
                            height: hasScore && sidebarOpen ? '38px' : '32px',
                            width: sidebarOpen ? '100%' : '36px',
                            background: isActive
                              ? 'rgba(201,168,76,0.2)'
                              : ch.is_read
                                ? 'rgba(16,185,129,0.08)'
                                : 'transparent',
                            border: isActive
                              ? '1px solid rgba(201,168,76,0.5)'
                              : '1px solid transparent',
                            color: isActive
                              ? 'var(--gold-300)'
                              : ch.is_read
                                ? 'var(--verdict-good)'
                                : 'var(--muted-500)',
                          }}
                          title={`${book} ${ch.number}${hasScore ? ` · Quiz: ${ch.quiz_best_score}%` : ''}`}
                        >
                          <span className="flex items-center gap-0.5">
                            {ch.number}
                            {ch.is_read && !isActive && (
                              <span className="text-[8px]" style={{ color: 'var(--verdict-good)' }}>✓</span>
                            )}
                          </span>
                          {hasScore && sidebarOpen && (
                            <span className="text-[9px] leading-none" style={{ color: isActive ? 'var(--gold-400)' : 'rgba(201,168,76,0.6)' }}>
                              {ch.quiz_best_score}%
                            </span>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Nav links */}
        {sidebarOpen && (
          <div className="p-3 space-y-1 shrink-0" style={{ borderTop: '1px solid rgba(201,168,76,0.08)' }}>
            {[
              { href: '/timeline', label: 'Kingdom Timeline', icon: <><rect x="3" y="4" width="18" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" /><rect x="3" y="10" width="12" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" /><rect x="3" y="16" width="15" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" /></> },
              { href: '/genealogy', label: 'Dynasty Web', icon: <><circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="1.5" /><circle cx="5" cy="19" r="2" stroke="currentColor" strokeWidth="1.5" /><circle cx="19" cy="19" r="2" stroke="currentColor" strokeWidth="1.5" /><path d="M12 7v4M12 11l-7 6M12 11l7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></> },
              { href: '/quiz', label: 'Quiz', icon: <><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" /><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><circle cx="12" cy="17" r=".8" fill="currentColor" /></> },
              { href: '/flashcards', label: 'Flashcards', icon: <><rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" /><path d="M8 12h8M12 9v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></> },
              { href: '/resources/mark', label: 'Mark Teacher Slides', icon: <><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" /><path d="M7 8h10M7 12h7M7 16h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></> },
              ...(isAuthenticated ? [{ href: '/notes', label: 'My Notes', icon: <><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></> }] : []),
            ].map(({ href, label, icon }) => (
              <Link key={href} href={href}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors"
                style={{ color: 'var(--muted-400)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--ivory-100)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--muted-400)'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>{icon}</svg>
                <span>{label}</span>
              </Link>
            ))}

            {isAuthenticated ? (
              <form action={signOut}>
                <button type="submit"
                  className="w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors text-left"
                  style={{ color: 'var(--muted-400)' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#f87171'; (e.currentTarget as HTMLElement).style.background = 'rgba(239,68,68,0.06)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--muted-400)'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Sign out</span>
                </button>
              </form>
            ) : (
              <Link href="/login"
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors"
                style={{ color: 'var(--muted-400)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--ivory-100)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--muted-400)'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Sign in</span>
              </Link>
            )}
          </div>
        )}
      </aside>
    </>
  );
}
