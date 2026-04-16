'use client';

import { useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import type { Person, Place, ChapterData, NavChapter } from '@/lib/types';
import ChapterNav from '@/components/ChapterNav';
import VerseText from '@/components/VerseText';
import CharacterCardModal from '@/components/CharacterCardModal';
import PlaceCardModal from '@/components/PlaceCardModal';
import MapPanel from '@/components/MapPanel';
import ArchaeologicalBadges from '@/components/ArchaeologicalBadges';
import NeighboringNationsPanel from '@/components/NeighboringNationsPanel';
import { markChapterRead, unmarkChapterRead } from '@/app/actions/progress';

type Props = {
  chapter: ChapterData;
  navData: { book: string; chapters: NavChapter[] }[];
  initialIsRead: boolean;
  isAuthenticated: boolean;
};

export default function ChapterView({ chapter, navData, initialIsRead, isAuthenticated }: Props) {
  // Resizable map panel
  const [mapWidth, setMapWidth] = useState(500);
  const isResizing = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const startResize = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    isResizing.current = true;
    const onMove = (ev: MouseEvent) => {
      if (!isResizing.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const newWidth = rect.right - ev.clientX;
      setMapWidth(Math.max(340, Math.min(780, newWidth)));
    };
    const onUp = () => {
      isResizing.current = false;
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  }, []);

  const [activeCard, setActiveCard] = useState<
    | { type: 'person'; person: Person }
    | { type: 'place'; place: Place }
    | null
  >(null);
  const [summaryOpen, setSummaryOpen] = useState(false);
  const [isRead, setIsRead] = useState(initialIsRead);

  const chapterTitle = `${chapter.book} · Ch. ${chapter.chapter_number}`;
  const yearLabel = chapter.year_start_bc ? `~${Math.abs(chapter.year_start_bc)} BC` : null;
  const totalChapters = chapter.book === '1 Kings' ? 22 : 25;

  return (
    <div ref={containerRef} className="flex h-screen overflow-hidden" style={{ background: 'var(--navy-950)' }}>

      {/* Left sidebar nav */}
      <ChapterNav
        currentBook={chapter.book}
        currentChapter={chapter.chapter_number}
        navData={navData}
      />

      {/* Main content */}
      <main className="flex-1 flex min-w-0 overflow-hidden">

        {/* Reading column */}
        <div className="flex-1 overflow-y-auto min-w-0">
          <div className="max-w-2xl mx-auto px-6 py-8 pb-24">

            {/* Chapter header */}
            <div className="mb-7">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-widest"
                      style={{ color: 'var(--gold-400)' }}>
                      {chapter.book}
                    </span>
                    {yearLabel && (
                      <>
                        <span style={{ color: 'var(--navy-600)' }}>·</span>
                        <span className="text-xs px-2 py-0.5 rounded-full"
                          style={{ background: 'rgba(201,168,76,0.1)', color: 'var(--gold-300)', border: '1px solid rgba(201,168,76,0.2)' }}>
                          {yearLabel}
                        </span>
                      </>
                    )}
                  </div>
                  <h1 className="text-4xl font-medium leading-tight"
                    style={{ fontFamily: 'var(--font-playfair)', color: 'var(--ivory-100)' }}>
                    Chapter {chapter.chapter_number}
                  </h1>
                </div>

                {/* Mark as read / sign-in prompt */}
                {isAuthenticated ? (
                  <button
                    onClick={async () => {
                      const prev = isRead;
                      setIsRead(r => !r);
                      try {
                        if (prev) {
                          await unmarkChapterRead(chapter.id, chapter.book_slug, chapter.chapter_number);
                        } else {
                          await markChapterRead(chapter.id, chapter.book_slug, chapter.chapter_number);
                        }
                      } catch {
                        setIsRead(prev);
                      }
                    }}
                    className="shrink-0 flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium transition-all mt-1"
                    style={{
                      background: isRead ? 'rgba(16,185,129,0.1)' : 'rgba(255,255,255,0.04)',
                      border: `1px solid ${isRead ? 'rgba(16,185,129,0.3)' : 'rgba(255,255,255,0.08)'}`,
                      color: isRead ? 'var(--verdict-good)' : 'var(--muted-400)',
                    }}>
                    {isRead ? (
                      <>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                          <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Read
                      </>
                    ) : (
                      <>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                        Mark as read
                      </>
                    )}
                  </button>
                ) : (
                  <Link
                    href="/login"
                    className="shrink-0 flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium transition-all mt-1"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: 'var(--muted-400)',
                    }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                    Sign in to track
                  </Link>
                )}
              </div>

              {/* Gold divider */}
              <div className="h-px" style={{ background: 'linear-gradient(90deg, var(--gold-500), transparent)' }} />
            </div>

            {/* Summary */}
            <div className="mb-8">
              <button
                onClick={() => setSummaryOpen(o => !o)}
                className="w-full flex items-center justify-between rounded-xl px-4 py-3 transition-all text-left"
                style={{
                  background: summaryOpen ? 'rgba(201,168,76,0.07)' : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${summaryOpen ? 'rgba(201,168,76,0.2)' : 'rgba(255,255,255,0.06)'}`,
                }}>
                <div className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--gold-400)' }}>
                    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-sm font-medium" style={{ color: 'var(--ivory-100)' }}>
                    Chapter summary
                  </span>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  style={{ color: 'var(--muted-400)', transform: summaryOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                  <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {summaryOpen && (
                <div className="mt-2 rounded-xl px-5 py-4"
                  style={{ background: 'rgba(201,168,76,0.04)', border: '1px solid rgba(201,168,76,0.12)' }}>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--ivory-200)', lineHeight: '1.85' }}>
                    {chapter.summary}
                  </p>
                </div>
              )}
            </div>

            {/* Legend */}
            <div className="flex items-center gap-4 mb-6 pb-5"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <span className="text-xs" style={{ color: 'var(--muted-500)' }}>Tap to view:</span>
              <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--gold-300)' }}>
                <span className="inline-block w-8 h-px" style={{ borderBottom: '1px solid var(--gold-400)' }} />
                Person
              </div>
              <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--kingdom-north)' }}>
                <span className="inline-block w-8 h-px" style={{ borderBottom: '1px dashed var(--kingdom-north)' }} />
                Place
              </div>
            </div>

            {/* Verse text */}
            <VerseText
              verses={chapter.verses}
              people={chapter.people}
              places={chapter.places}
              onPersonClick={person => setActiveCard({ type: 'person', person })}
              onPlaceClick={place => setActiveCard({ type: 'place', place })}
              activePersonId={activeCard?.type === 'person' ? activeCard.person.id : undefined}
              activePlaceId={activeCard?.type === 'place' ? activeCard.place.id : undefined}
            />

            {/* People in this chapter */}
            <div className="mt-10 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <h3 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--muted-400)' }}>
                People in this chapter
              </h3>
              <div className="flex flex-wrap gap-2">
                {chapter.people.map(({ person }) => (
                  <button
                    key={person.id}
                    onClick={() => setActiveCard({ type: 'person', person })}
                    className="flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium transition-all"
                    style={{
                      background: activeCard?.type === 'person' && activeCard.person.id === person.id
                        ? 'rgba(201,168,76,0.18)' : 'rgba(255,255,255,0.04)',
                      border: `1px solid ${activeCard?.type === 'person' && activeCard.person.id === person.id ? 'rgba(201,168,76,0.4)' : 'rgba(255,255,255,0.08)'}`,
                      color: activeCard?.type === 'person' && activeCard.person.id === person.id ? 'var(--gold-300)' : 'var(--ivory-200)',
                    }}>
                    {person.verdict && (
                      <span className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{
                          background: person.verdict === 'good' ? 'var(--verdict-good)' : person.verdict === 'evil' ? 'var(--verdict-evil)' : 'var(--verdict-mixed)'
                        }} />
                    )}
                    {person.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Archaeological badges */}
            <ArchaeologicalBadges evidence={chapter.evidence} />

            {/* Neighboring Nations panel */}
            <NeighboringNationsPanel
              nations={chapter.nations ?? []}
              chapterYearBC={Math.abs(chapter.year_start_bc ?? 869)}
            />

            {/* Chapter nav footer */}
            <div className="mt-12 flex items-center justify-between">
              <Link
                href={chapter.chapter_number > 1 ? `/study/${chapter.book_slug}/${chapter.chapter_number - 1}` : '#'}
                className="flex items-center gap-2 text-sm transition-colors"
                style={{ color: 'var(--muted-400)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--ivory-200)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--muted-400)'; }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M19 12H5M12 5l-7 7 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Chapter {chapter.chapter_number - 1}
              </Link>
              <span className="text-xs" style={{ color: 'var(--muted-500)' }}>
                {chapter.book} · {chapter.chapter_number} of {totalChapters}
              </span>
              <Link
                href={`/study/${chapter.book_slug}/${chapter.chapter_number + 1}`}
                className="flex items-center gap-2 text-sm transition-colors"
                style={{ color: 'var(--muted-400)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--ivory-200)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--muted-400)'; }}>
                Chapter {chapter.chapter_number + 1}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Drag handle */}
        <div
          onMouseDown={startResize}
          className="hidden lg:flex shrink-0 items-center justify-center cursor-col-resize group"
          style={{ width: '8px', background: 'transparent', position: 'relative' }}
          title="Drag to resize">
          <div className="w-[2px] h-12 rounded-full transition-all duration-150 group-hover:h-20"
            style={{ background: 'rgba(201,168,76,0.2)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,0.5)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,0.2)'; }}
          />
        </div>

        {/* Right panel — map (isolation: isolate contains Leaflet stacking context) */}
        <div className="shrink-0 flex-col hidden lg:flex overflow-hidden"
          style={{ width: `${mapWidth}px`, borderLeft: '1px solid rgba(255,255,255,0.06)', isolation: 'isolate' }}>
          <MapPanel
            places={chapter.places}
            activePlaceId={activeCard?.type === 'place' ? activeCard.place.id : undefined}
            chapterTitle={chapterTitle}
            onPlaceClick={place => setActiveCard({ type: 'place', place })}
          />
        </div>
      </main>

      {/* Modals */}
      {activeCard?.type === 'person' && (
        <CharacterCardModal
          person={activeCard.person}
          onClose={() => setActiveCard(null)}
        />
      )}
      {activeCard?.type === 'place' && (
        <PlaceCardModal
          place={activeCard.place}
          onClose={() => setActiveCard(null)}
        />
      )}
    </div>
  );
}
