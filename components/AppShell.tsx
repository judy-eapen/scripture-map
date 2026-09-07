'use client';

import { useState } from 'react';
import ChapterNav from '@/components/ChapterNav';
import type { NavChapter } from '@/lib/types';

type Props = {
  navData: { book: string; chapters: NavChapter[] }[];
  isAuthenticated: boolean;
  children: React.ReactNode;
  /** Highlight a chapter in the sidebar (0 = none) */
  currentBook?: string;
  currentChapter?: number;
};

/**
 * Page frame used by every non-chapter screen (Quiz, Flashcards, Dynasty Web…):
 * the same left sidebar as the chapter reader on desktop, a hamburger + drawer
 * on mobile, and a scrolling content area.
 */
export default function AppShell({ navData, isAuthenticated, children, currentBook = '1 Kings', currentChapter = 0 }: Props) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="flex overflow-hidden h-screen-safe" style={{ background: 'var(--navy-950)' }}>
      {/* Desktop sidebar */}
      <div className="hidden md:block shrink-0">
        <ChapterNav currentBook={currentBook} currentChapter={currentChapter} navData={navData} isAuthenticated={isAuthenticated} />
      </div>

      {/* Mobile drawer */}
      <ChapterNav
        currentBook={currentBook}
        currentChapter={currentChapter}
        navData={navData}
        isAuthenticated={isAuthenticated}
        mobileOpen={mobileNavOpen}
        onMobileClose={() => setMobileNavOpen(false)}
      />

      <main className="flex-1 overflow-y-auto min-w-0 relative">
        {/* Mobile hamburger */}
        <button
          className="md:hidden fixed top-3 left-3 z-40 w-9 h-9 rounded-lg flex items-center justify-center"
          style={{ background: 'rgba(15,23,42,0.85)', color: 'var(--muted-400)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(6px)' }}
          onClick={() => setMobileNavOpen(true)}
          aria-label="Open navigation">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        {children}
      </main>
    </div>
  );
}
