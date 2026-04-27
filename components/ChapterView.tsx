'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import Link from 'next/link';
import type { Person, Place, ChapterData, NavChapter } from '@/lib/types';
import ChapterNav from '@/components/ChapterNav';
import VerseText from '@/components/VerseText';
import CharacterCardModal from '@/components/CharacterCardModal';
import PlaceCardModal from '@/components/PlaceCardModal';
import MapPanel from '@/components/MapPanel';
import ArchaeologicalBadges from '@/components/ArchaeologicalBadges';
import NeighboringNationsPanel from '@/components/NeighboringNationsPanel';
import StoryThreadPanel from '@/components/StoryThreadPanel';
import NotesPanel from '@/components/NotesPanel';
import NoteEditorModal from '@/components/NoteEditorModal';
import PropheciesPanel from '@/components/PropheciesPanel';
import ProphecyModal from '@/components/ProphecyModal';
import ThemesPanel from '@/components/ThemesPanel';
import ThemeChaptersModal from '@/components/ThemeChaptersModal';
import { markChapterRead, unmarkChapterRead } from '@/app/actions/progress';
import { STORY_MAP_DATA } from '@/lib/story-map-data';
import QuizModal from '@/components/QuizModal';
import type { VerseNote } from '@/lib/types';
import { QUIZ_ENABLED } from '@/lib/flags';

type Props = {
  chapter: ChapterData;
  navData: { book: string; chapters: NavChapter[] }[];
  initialIsRead: boolean;
  isAuthenticated: boolean;
  initialNotes: VerseNote[];
};

export default function ChapterView({ chapter, navData, initialIsRead, isAuthenticated, initialNotes = [] }: Props) {
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

  const [isRead, setIsRead] = useState(initialIsRead);
  const [quizOpen, setQuizOpen] = useState(false);
  const [quizKey, setQuizKey] = useState(0);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileMapOpen, setMobileMapOpen] = useState(false);
  // Only mount MapPanel when container is visible — Leaflet crashes in display:none containers
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    setIsLargeScreen(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsLargeScreen(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Notes state — keyed by verse_number for O(1) lookup
  const [notes, setNotes] = useState<Map<number, string>>(() => {
    const m = new Map<number, string>()
    initialNotes.forEach(n => m.set(n.verse_number, n.note_text))
    return m
  })
  const [noteVerseOpen, setNoteVerseOpen] = useState<number | null>(null)

  function handleVerseClick(verseNumber: number) {
    if (!isAuthenticated) return
    setNoteVerseOpen(verseNumber)
  }

  function handleNoteSaved(verseNumber: number, text: string) {
    setNotes(prev => new Map(prev).set(verseNumber, text))
  }

  function handleNoteDeleted(verseNumber: number) {
    setNotes(prev => { const m = new Map(prev); m.delete(verseNumber); return m })
  }

  const [activeProphecy, setActiveProphecy] = useState<import('@/lib/types').Prophecy | null>(null)
  const [activeTheme, setActiveTheme] = useState<import('@/lib/types').Theme | null>(null)

  const notedVerses = new Set(notes.keys())
  const notesList = Array.from(notes.entries())
    .sort((a, b) => a[0] - b[0])
    .map(([verse_number, note_text]) => ({
      id: `${chapter.id}-${verse_number}`,
      chapter_id: chapter.id,
      verse_number,
      note_text,
      created_at: '',
      updated_at: '',
    }))

  const chapterTitle = `${chapter.book} · Ch. ${chapter.chapter_number}`;
  const yearLabel = chapter.year_start_bc ? `~${Math.abs(chapter.year_start_bc)} BC` : null;
  const totalChapters = chapter.book === '1 Kings' ? 22 : 25;

  return (
    <div ref={containerRef} className="flex overflow-hidden h-screen-safe" style={{ background: 'var(--navy-950)' }}>

      {/* Left sidebar nav — desktop: inline; mobile: hidden (opened via hamburger) */}
      <div className="hidden md:block shrink-0">
        <ChapterNav
          currentBook={chapter.book}
          currentChapter={chapter.chapter_number}
          navData={navData}
          isAuthenticated={isAuthenticated}
        />
      </div>

      {/* Mobile nav drawer */}
      <ChapterNav
        currentBook={chapter.book}
        currentChapter={chapter.chapter_number}
        navData={navData}
        isAuthenticated={isAuthenticated}
        mobileOpen={mobileNavOpen}
        onMobileClose={() => setMobileNavOpen(false)}
      />

      {/* Main content */}
      <main className="flex-1 flex min-w-0 overflow-hidden">

        {/* Reading column */}
        <div className="flex-1 overflow-y-auto min-w-0">
          <div className="max-w-2xl mx-auto px-4 md:px-6 py-6 md:py-8 pb-24">

            {/* Chapter header */}
            <div className="mb-7">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-3">
                  {/* Mobile hamburger */}
                  <button
                    className="md:hidden mt-1 shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--muted-400)' }}
                    onClick={() => setMobileNavOpen(true)}
                    aria-label="Open navigation">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                  {/* Mobile map toggle */}
                  <button
                    className="md:hidden mt-1 shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                      background: mobileMapOpen ? 'rgba(96,165,250,0.15)' : 'rgba(255,255,255,0.05)',
                      color: mobileMapOpen ? 'var(--kingdom-north)' : 'var(--muted-400)',
                      border: mobileMapOpen ? '1px solid rgba(96,165,250,0.3)' : '1px solid transparent',
                    }}
                    onClick={() => setMobileMapOpen(o => !o)}
                    aria-label="Toggle map">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                      <path d="M9 20l-5.447-2.724A1 1 0 0 1 3 16.382V5.618a1 1 0 0 1 1.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0 0 21 18.382V7.618a1 1 0 0 0-.553-.894L15 4m0 13V4m0 0L9 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
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
                  </div>{/* close title div */}
                </div>{/* close hamburger+title flex */}

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

            {/* Story Map banner */}
            {STORY_MAP_DATA[`${chapter.book_slug}-${chapter.chapter_number}`] && (
              <Link
                href={`/study/${chapter.book_slug}/${chapter.chapter_number}/story-map`}
                className="flex items-center gap-3 rounded-xl px-4 py-3 mb-4 transition-all"
                style={{
                  background: 'rgba(167,139,250,0.06)',
                  border: '1px solid rgba(167,139,250,0.2)',
                }}>
                <span className="text-lg leading-none">🗺</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold" style={{ color: '#a78bfa' }}>Story Map</p>
                  <p className="text-xs" style={{ color: 'var(--muted-500)' }}>Visual cast, sequence & connections for this chapter</p>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ color: '#a78bfa', flexShrink: 0 }}>
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            )}

            {/* People in this chapter */}
            {chapter.people.length > 0 && (
              <div className="mb-4 pb-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
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
            )}

            {/* Archaeological badges */}
            <ArchaeologicalBadges evidence={chapter.evidence} />

            {/* Neighboring Nations panel */}
            <NeighboringNationsPanel
              nations={chapter.nations ?? []}
              chapterYearBC={Math.abs(chapter.year_start_bc ?? 869)}
            />

            {/* Story Thread panel */}
            <StoryThreadPanel
              connections={chapter.connections ?? []}
              currentBook={chapter.book}
              currentChapter={chapter.chapter_number}
            />

            {/* Themes panel */}
            <ThemesPanel
              themes={chapter.themes ?? []}
              onThemeClick={t => setActiveTheme(t)}
            />

            {/* Prophetic Word panel */}
            <PropheciesPanel
              prophecies={chapter.prophecies ?? []}
              currentChapterId={chapter.id}
              onProphecyClick={p => setActiveProphecy(p)}
            />

            {/* Mobile map panel — only mounted when open so Leaflet isn't in a hidden container */}
            {!isLargeScreen && mobileMapOpen && (
              <div className="mb-6 rounded-xl overflow-hidden" style={{ height: '280px', border: '1px solid rgba(96,165,250,0.2)' }}>
                <MapPanel
                  places={chapter.places}
                  activePlaceId={activeCard?.type === 'place' ? activeCard.place.id : undefined}
                  chapterTitle={chapterTitle}
                  onPlaceClick={place => setActiveCard({ type: 'place', place })}
                />
              </div>
            )}


            {/* Quiz button / coming soon */}
            {QUIZ_ENABLED && <div className="mb-6">
              {chapter.quizCount > 0 ? (
                <button
                  onClick={() => { setQuizKey(k => k + 1); setQuizOpen(true); }}
                  className="flex items-center gap-2.5 rounded-xl px-4 py-2.5 text-sm font-medium transition-all"
                  style={{
                    background: chapter.quizBestScore != null ? 'rgba(201,168,76,0.08)' : 'rgba(255,255,255,0.04)',
                    border: `1px solid ${chapter.quizBestScore != null ? 'rgba(201,168,76,0.25)' : 'rgba(255,255,255,0.08)'}`,
                    color: chapter.quizBestScore != null ? 'var(--gold-300)' : 'var(--muted-400)',
                  }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {chapter.quizBestScore != null
                    ? `Quiz · Best score ${chapter.quizBestScore}%`
                    : 'Take chapter quiz'}
                  <span className="text-xs opacity-60">{chapter.quizCount} questions</span>
                </button>
              ) : (
                <div className="flex items-center gap-2.5 rounded-xl px-4 py-2.5 text-sm"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    color: 'var(--muted-500)',
                  }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Quiz coming soon
                </div>
              )}
            </div>}

            {/* Legend */}
            <div className="flex items-center gap-4 mb-6 pb-5 flex-wrap"
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
              {isAuthenticated && (
                <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--muted-500)' }}>
                  <span className="inline-block w-5 text-right text-xs font-semibold" style={{ color: 'var(--gold-500)' }}>12</span>
                  Tap # to note
                </div>
              )}
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
              difficultPassages={chapter.difficultPassages}
              connections={chapter.connections}
              notedVerses={notedVerses}
              onVerseClick={isAuthenticated ? handleVerseClick : undefined}
            />

            {/* My Notes panel */}
            {isAuthenticated && notesList.length > 0 && (
              <NotesPanel
                notes={notesList}
                onEditNote={(verseNumber, currentText) => setNoteVerseOpen(verseNumber)}
              />
            )}

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

        {/* Drag handle — desktop only */}
        {isLargeScreen && (
          <div
            onMouseDown={startResize}
            className="shrink-0 flex items-center justify-center cursor-col-resize group"
            style={{ width: '8px', background: 'transparent', position: 'relative' }}
            title="Drag to resize">
            <div className="w-[2px] h-12 rounded-full transition-all duration-150 group-hover:h-20"
              style={{ background: 'rgba(201,168,76,0.2)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,0.5)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,0.2)'; }}
            />
          </div>
        )}

        {/* Right panel — map. Only mounted on large screens; Leaflet crashes in display:none containers */}
        {isLargeScreen && (
          <div className="shrink-0 flex flex-col overflow-hidden"
            style={{ width: `${mapWidth}px`, borderLeft: '1px solid rgba(255,255,255,0.06)', isolation: 'isolate' }}>
            <MapPanel
              places={chapter.places}
              activePlaceId={activeCard?.type === 'place' ? activeCard.place.id : undefined}
              chapterTitle={chapterTitle}
              onPlaceClick={place => setActiveCard({ type: 'place', place })}
            />
          </div>
        )}
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
      {QUIZ_ENABLED && quizOpen && (
        <QuizModal
          key={quizKey}
          chapterId={chapter.id}
          bookSlug={chapter.book_slug}
          chapterNum={chapter.chapter_number}
          chapterTitle={chapterTitle}
          isAuthenticated={isAuthenticated}
          onClose={() => setQuizOpen(false)}
        />
      )}
      {activeTheme && (
        <ThemeChaptersModal
          theme={activeTheme}
          onClose={() => setActiveTheme(null)}
        />
      )}
      {activeProphecy && (
        <ProphecyModal
          prophecy={activeProphecy}
          currentChapterId={chapter.id}
          onClose={() => setActiveProphecy(null)}
        />
      )}
      {noteVerseOpen !== null && (
        <NoteEditorModal
          chapterId={chapter.id}
          bookSlug={chapter.book_slug}
          chapterNum={chapter.chapter_number}
          verseNumber={noteVerseOpen}
          initialNote={notes.get(noteVerseOpen) ?? ''}
          onClose={() => setNoteVerseOpen(null)}
          onSaved={handleNoteSaved}
          onDeleted={handleNoteDeleted}
        />
      )}
    </div>
  );
}
