'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import type { QuizQuestion, QuizType } from '@/lib/types';
import type { QuizChapterSummary, QuizCollectionSummary } from '@/lib/db';
import { displayAnswer, gradeMultipleChoice, gradeText, gradeTrueFalse, DIFFICULTY_LABEL, TYPE_LABEL } from '@/lib/quiz-grading';
import {
  applyAnswer, buildSession, computeMastery, priorityRank, poolRemaining, isSupportedQuizType, resumeStartIndex,
  SESSION_SIZE, QUICK_SIZE, type StatsMap, type SessionMode,
} from '@/lib/quiz-session';
import {
  getChapterStats, createSession, recordAnswer, abandonSession, resetChapterProgress, getSessionAnsweredQuestionIds,
  type ChapterProgress, type OpenSession, type QuizScopeKind,
} from '@/app/actions/quiz';
import { saveQuizScore } from '@/app/actions/progress';
import { markSectionForVerse } from '@/lib/mark-sections';
import UnsupportedQuizQuestion from '@/components/UnsupportedQuizQuestion';
import QuestionSource from '@/components/QuestionSource';
import FillBlankContext from '@/components/FillBlankContext';
import QuestionReportForm from '@/components/QuestionReportForm';
import QuizReportsPanel from '@/components/QuizReportsPanel';
import type { QuizReport } from '@/app/actions/quiz-reports';

type Phase = 'setup' | 'loading' | 'question' | 'revealed' | 'complete' | 'browse';
type Level = 1 | 2 | 3 | 'mixed';
type TypeFilter = 'all' | QuizType;
type Answered = { q: QuizQuestion; correct: boolean; given: string };
type LocalOpenRound = { mode:SessionMode | 'review'; questionIds:string[]; answeredIds:string[]; correctCount:number };

type Props = {
  chapters: QuizChapterSummary[];
  collections: QuizCollectionSummary[];
  isAuthenticated: boolean;
  allowAdminBrowse: boolean;
  adminReports: QuizReport[] | null;
  progress: Record<string, ChapterProgress>;
  initialBook?: string;
  initialResumeSessionId?: string;
  initialResumeSourceId?: string;
};

type QuizSource = QuizChapterSummary & {
  scopeKind: QuizScopeKind;
  title: string;
  description: string;
  slug?: string;
};

const TYPE_ICON: Record<QuizType, string> = { multiple_choice: 'ⓐ', fill_blank: '▁', one_word: '✎', true_false: '✓✗', short_answer:'✎' };
const TYPE_ORDER: QuizType[] = ['multiple_choice', 'fill_blank', 'one_word', 'true_false', 'short_answer'];

const card: React.CSSProperties = { background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' };
const goldBtn: React.CSSProperties = { background: 'rgba(201,168,76,0.14)', border: '1px solid rgba(201,168,76,0.35)', color: 'var(--gold-300)' };
const ghostBtn: React.CSSProperties = { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'var(--muted-400)' };
const okStyle: React.CSSProperties = { background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.4)', color: '#34d399' };
const badStyle: React.CSSProperties = { background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.35)', color: '#f87171' };

// Signed-out fallback: keep history in this tab only
const localKey = (chapterId: string) => `quiz3_stats_${chapterId}`;
const localRoundKey = (chapterId:string) => `quiz3_open_round_${chapterId}`;
function loadLocalStats(chapterId: string): StatsMap {
  try { return JSON.parse(sessionStorage.getItem(localKey(chapterId)) ?? '{}'); } catch { return {}; }
}
function saveLocalStats(chapterId: string, stats: StatsMap) {
  try { sessionStorage.setItem(localKey(chapterId), JSON.stringify(stats)); } catch { /* ignore */ }
}
function loadLocalRound(chapterId:string):LocalOpenRound | null {
  try { return JSON.parse(sessionStorage.getItem(localRoundKey(chapterId)) ?? 'null') as LocalOpenRound | null; } catch { return null; }
}
function saveLocalRound(chapterId:string, value:LocalOpenRound) {
  try { sessionStorage.setItem(localRoundKey(chapterId), JSON.stringify(value)); } catch { /* ignore */ }
}
function clearLocalRound(chapterId:string) {
  try { sessionStorage.removeItem(localRoundKey(chapterId)); } catch { /* ignore */ }
}

export default function QuizArena({ chapters, collections, isAuthenticated, allowAdminBrowse, adminReports, progress: initialProgress, initialBook, initialResumeSessionId, initialResumeSourceId }: Props) {
  const [phase, setPhase] = useState<Phase>('setup');
  const [progress, setProgress] = useState(initialProgress);
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null);
  const [chapter, setChapter] = useState<QuizSource | null>(null);
  const [mode, setMode] = useState<SessionMode | 'review'>('session');
  const [drillOpen, setDrillOpen] = useState<string | null>(null);
  const [drillLevel, setDrillLevel] = useState<Level>('mixed');
  const [drillType, setDrillType] = useState<TypeFilter>('all');
  const [confirmReset, setConfirmReset] = useState<string | null>(null);
  const [browseSearch, setBrowseSearch] = useState('');
  const [bookFilter, setBookFilter] = useState(initialBook ?? chapters[0]?.bookSlug ?? '');

  const [pool, setPool] = useState<QuizQuestion[]>([]);
  const [stats, setStats] = useState<StatsMap>({});
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [round, setRound] = useState<QuizQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [priorCorrect, setPriorCorrect] = useState(0); // from a resumed session
  const [answered, setAnswered] = useState<Answered[]>([]);
  const [lastCorrect, setLastCorrect] = useState<boolean | null>(null);
  const [choice, setChoice] = useState<number | null>(null);
  const [typed, setTyped] = useState('');
  const [awaitingSelfGrade, setAwaitingSelfGrade] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const answerWriteRef = useRef<Promise<void>>(Promise.resolve());
  const autoResumeStarted = useRef(false);

  const chapterSources = useMemo<QuizSource[]>(() => chapters.map(ch => ({
    ...ch, scopeKind: 'chapter', title: `${ch.bookName} ${ch.chapterNumber}`, description: '',
  })), [chapters]);
  const collectionSources = useMemo<QuizSource[]>(() => collections.map(collection => ({
    id: collection.id, scopeKind: 'collection', slug: collection.slug, title: collection.title,
    description: collection.description, bookName: collection.title, bookSlug: '1-kings', chapterNumber: 0,
    counts: collection.counts,
  })), [collections]);
  const withQuestions = useMemo(() => [...collectionSources, ...chapterSources].filter(c => c.counts.total > 0), [collectionSources, chapterSources]);
  const current = round[index];
  const revealed = phase === 'revealed';
  const bookTabs = useMemo(() => Array.from(new Map(chapters.map(ch => [ch.bookSlug, ch.bookName])).entries()), [chapters]);

  useEffect(() => {
    if (phase === 'question' && (current?.type === 'fill_blank' || current?.type === 'one_word' || current?.type === 'short_answer')) inputRef.current?.focus();
  }, [phase, current]);

  // ------------------------------------------------------------ data loading
  async function loadPool(ch: QuizSource): Promise<QuizQuestion[]> {
    const res = await fetch(`/api/quiz/${ch.id}${ch.scopeKind === 'collection' ? '?scope=collection' : ''}`);
    return res.ok ? ((await res.json()) as QuizQuestion[]) : [];
  }
  async function loadStats(ch: QuizSource): Promise<{ stats: StatsMap; openSession: OpenSession | null }> {
    if (isAuthenticated) return getChapterStats(ch.id, ch.scopeKind);
    return { stats: loadLocalStats(ch.id), openSession: null };
  }

  function startRound(qs: QuizQuestion[], startIndex = 0, prior = 0, sid: string | null = null) {
    setRound(qs); setIndex(startIndex); setPriorCorrect(prior); setSessionId(sid);
    setAnswered([]); setChoice(null); setTyped(''); setLastCorrect(null); setAwaitingSelfGrade(false);
    setPhase(qs.length ? 'question' : 'complete');
  }

  async function begin(ch: QuizSource, m: SessionMode | 'review', drill?: { level: Level; type: TypeFilter }) {
    setChapter(ch); setMode(m); setPhase('loading');
    const [qs, { stats: st }] = await Promise.all([loadPool(ch), loadStats(ch)]);
    setPool(qs); setStats(st);

    let picked: QuizQuestion[];
    if (m === 'review') {
      picked = buildSession(qs.filter(q => priorityRank(st[q.id]) === 1), st, { size: SESSION_SIZE, difficulty: 'mixed', types: 'all' });
    } else if (m === 'drill' && drill) {
      picked = buildSession(qs, st, { size: QUICK_SIZE, difficulty: drill.level, types: drill.type === 'all' ? 'all' : [drill.type] });
    } else {
      picked = buildSession(qs, st, { size: m === 'quick' ? QUICK_SIZE : SESSION_SIZE, difficulty: 'adaptive', types: 'all' });
    }
    const sid = isAuthenticated && picked.length ? await createSession(ch.id, m === 'review' ? 'drill' : m, picked.map(q => q.id), ch.scopeKind) : null;
    startRound(picked, 0, 0, sid);
  }

  async function resume(ch: QuizSource, open: OpenSession) {
    setChapter(ch); setMode(open.mode); setPhase('loading');
    const [qs, { stats: st }, answeredIds] = await Promise.all([loadPool(ch), loadStats(ch), getSessionAnsweredQuestionIds(open.id)]);
    setPool(qs); setStats(st);
    const byId = new Map(qs.map(q => [q.id, q]));
    const ordered = open.questionIds.map(id => byId.get(id)).filter((q): q is QuizQuestion => !!q);
    const startIndex = resumeStartIndex(open.questionIds, ordered.map(q => q.id), answeredIds);
    if (startIndex >= ordered.length) { // missing/retired IDs are skipped; durable answers say the rest is complete
      await abandonSession(open.id);
      return quit();
    }
    startRound(ordered, startIndex, open.correctCount, open.id);
  }

  useEffect(() => {
    if (autoResumeStarted.current || !initialResumeSessionId || !initialResumeSourceId) return;
    const source = withQuestions.find(candidate => candidate.id === initialResumeSourceId);
    if (!isAuthenticated && initialResumeSessionId === 'local' && source) {
      const saved = loadLocalRound(source.id);
      if (!saved) return;
      autoResumeStarted.current = true;
      void (async () => {
        setChapter(source); setMode(saved.mode); setPhase('loading');
        const qs = await loadPool(source);
        const localStats = loadLocalStats(source.id);
        setPool(qs); setStats(localStats);
        const byId = new Map(qs.map(question => [question.id, question]));
        const ordered = saved.questionIds.map(id => byId.get(id)).filter((question): question is QuizQuestion => !!question);
        const startIndex = resumeStartIndex(saved.questionIds, ordered.map(question => question.id), saved.answeredIds);
        if (startIndex >= ordered.length) {
          setRound(ordered); setPriorCorrect(saved.correctCount); setAnswered([]); setPhase('complete');
          return;
        }
        startRound(ordered, startIndex, saved.correctCount, null);
      })();
      return;
    }
    const open = progress[initialResumeSourceId]?.openSession;
    if (!source || !open || open.id !== initialResumeSessionId) return;
    autoResumeStarted.current = true;
    void resume(source, open);
    // Resume is intentionally attempted once from the server-validated open session in the URL.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialResumeSessionId, initialResumeSourceId, isAuthenticated, progress, withQuestions]);

  async function browse(ch: QuizSource) {
    if (!allowAdminBrowse) return;
    setChapter(ch); setPhase('loading'); setBrowseSearch('');
    const qs = await loadPool(ch);
    setPool([...qs].sort((a, b) =>
      (a.verse_number ?? 0) - (b.verse_number ?? 0) || TYPE_ORDER.indexOf(a.type) - TYPE_ORDER.indexOf(b.type) || a.question.localeCompare(b.question)
    ));
    setPhase('browse');
  }

  // ------------------------------------------------------------- answering
  function submit() {
    if (!current || !chapter) return;
    if (current.type === 'short_answer') {
      if (!typed.trim()) return;
      setAwaitingSelfGrade(true);
      setPhase('revealed');
      return;
    }
    let ok = false, given = '';
    if (current.type === 'multiple_choice') { if (choice === null) return; ok = gradeMultipleChoice(current, choice); given = current.options?.[choice] ?? ''; }
    else if (current.type === 'true_false') { if (choice === null) return; ok = gradeTrueFalse(current, choice === 1); given = choice === 1 ? 'True' : 'False'; }
    else { if (!typed.trim()) return; ok = gradeText(current, typed); given = typed.trim(); }

    finishAnswer(ok, given);
  }

  function finishAnswer(ok: boolean, given: string) {
    if (!current || !chapter) return;
    const nextStats = applyAnswer(stats, current.id, ok);
    setStats(nextStats);
    const nextAnswered = [...answered, { q: current, correct: ok, given }];
    setAnswered(nextAnswered);
    setLastCorrect(ok);
    setAwaitingSelfGrade(false);
    setPhase('revealed');

    const position = index + 1;
    const correctCount = priorCorrect + nextAnswered.filter(a => a.correct).length;
    const completed = position >= round.length;
    if (isAuthenticated) {
      answerWriteRef.current = recordAnswer({ sessionId, chapterId: chapter.id, scopeKind: chapter.scopeKind, questionId: current.id, correct: ok, givenAnswer: given, position, correctCount, completed });
    } else {
      saveLocalStats(chapter.id, nextStats);
    }
  }

  function next() {
    if (!chapter) return;
    if (index + 1 >= round.length) {
      const correctCount = priorCorrect + answered.filter(a => a.correct).length;
      if (isAuthenticated) {
        if (chapter.scopeKind === 'chapter') saveQuizScore(chapter.id, Math.round((correctCount / round.length) * 100), chapter.bookSlug, chapter.chapterNumber).catch(() => {});
        const m = computeMastery(pool, stats);
        setProgress(p => ({ ...p, [chapter.id]: { chapterId: chapter.id, attempted: m.attempted, mastered: m.mastered, toReview: m.toReview, correctAnswers: m.correctAnswers, wrongAnswers: m.wrongAnswers, openSession: null } }));
      }
      setPhase('complete');
      if (chapter) clearLocalRound(chapter.id);
      return;
    }
    setIndex(i => i + 1); setChoice(null); setTyped(''); setLastCorrect(null); setAwaitingSelfGrade(false); setPhase('question');
  }

  function quit() {
    if (chapter && isAuthenticated && sessionId && phase !== 'complete') {
      // keep it resumable: refresh the card's open-session marker
      setProgress(p => ({
        ...p,
        [chapter.id]: { ...(p[chapter.id] ?? { chapterId: chapter.id, attempted: 0, mastered: 0, toReview: 0, correctAnswers: 0, wrongAnswers: 0 }),
          openSession: { id: sessionId, chapterId: chapter.id, scopeKind: chapter.scopeKind, mode: mode === 'review' ? 'drill' : mode, questionIds: round.map(q => q.id), position: index + (phase === 'revealed' ? 1 : 0), correctCount: priorCorrect + answered.filter(a => a.correct).length } },
      }));
    }
    setPhase('setup');
  }

  async function doReset(ch: QuizSource) {
    if (isAuthenticated) await resetChapterProgress(ch.id, ch.scopeKind);
    else saveLocalStats(ch.id, {});
    clearLocalRound(ch.id);
    setProgress(p => { const n = { ...p }; delete n[ch.id]; return n; });
    setConfirmReset(null);
  }

  // ==================================================================== SETUP
  if (phase === 'setup') {
    const selectedChapter = withQuestions.find(ch => ch.id === selectedChapterId) ?? null;
    return (
      <>
        {adminReports !== null && <QuizReportsPanel initialReports={adminReports} />}
        <div className="mb-8">
          <h1 className="text-3xl font-medium mb-2" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--ivory-100)' }}>Quiz</h1>
          <p className="text-sm" style={{ color: 'var(--muted-400)' }}>
            Every question comes straight from the chapter text. A session is {SESSION_SIZE} questions that ramp from Easy to Hard
            and mix multiple choice, fill in the blank, short answers, and true or false. You never see a question again until
            you have seen every other one, and the ones you miss come back first.
          </p>
          {!isAuthenticated && (
            <p className="text-xs mt-3 px-3 py-2 rounded-lg" style={{ ...goldBtn, display: 'inline-block' }}>
              <Link href="/login" className="underline underline-offset-2">Sign in</Link> to save your progress across visits and devices.
            </p>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Quiz books">
          {collectionSources.filter(collection => collection.slug === 'all-kings' || collection.title === 'All of Kings').map(collection => (
            <button key={collection.id} role="tab" aria-selected={bookFilter === 'all-kings'} onClick={() => { setBookFilter('all-kings'); setSelectedChapterId(null); }} className="rounded-full px-3.5 py-2 text-xs font-medium" style={bookFilter === 'all-kings' ? goldBtn : ghostBtn}>All of Kings</button>
          ))}
          {bookTabs.map(([slug, name]) => <button key={slug} role="tab" aria-selected={bookFilter === slug} onClick={() => { setBookFilter(slug); setSelectedChapterId(null); }} className="rounded-full px-3.5 py-2 text-xs font-medium" style={bookFilter === slug ? goldBtn : ghostBtn}>{name}</button>)}
        </div>

        {withQuestions.length === 0 ? (
          <div className="rounded-2xl px-5 py-6 text-sm" style={{ ...card, color: 'var(--muted-400)' }}>No quiz questions loaded yet.</div>
        ) : !selectedChapter ? (
          <div className="space-y-8">
            {bookFilter === 'all-kings' && collectionSources.filter(collection => collection.counts.total > 0).map(collection => {
              const p = progress[collection.id];
              return (
                <section key={collection.id} className="rounded-2xl px-5 py-5" style={{ ...card, borderColor: 'rgba(201,168,76,0.38)', background: 'rgba(201,168,76,0.06)' }}>
                  <p className="text-[11px] uppercase tracking-widest mb-1" style={{ color: 'var(--gold-300)' }}>Comprehensive quiz</p>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="max-w-lg">
                      <h2 className="text-2xl font-medium" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--ivory-100)' }}>{collection.title}</h2>
                      <p className="text-sm mt-1 leading-relaxed" style={{ color: 'var(--muted-400)' }}>{collection.description}</p>
                      <p className="text-xs mt-2" style={{ color: 'var(--muted-500)' }}>
                        {collection.counts.total} questions · Easy {collection.counts[1]} · Medium {collection.counts[2]} · Hard {collection.counts[3]}
                      </p>
                    </div>
                    <button onClick={() => setSelectedChapterId(collection.id)} className="rounded-xl px-4 py-2.5 text-sm font-medium" style={goldBtn}>
                      {(p?.attempted ?? 0) > 0 ? 'Continue All of Kings' : 'Choose All of Kings'}
                    </button>
                  </div>
                </section>
              );
            })}
            {bookTabs.filter(([slug]) => slug === bookFilter).map(([, bookName]) => (
              <section key={bookName}>
                <h2 className="text-lg font-medium mb-3" style={{ color: 'var(--ivory-100)' }}>{bookName}</h2>
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
                  {withQuestions.filter(ch => ch.bookName === bookName).map(ch => {
                    const hasProgress = (progress[ch.id]?.attempted ?? 0) > 0;
                    return (
                      <button
                        key={ch.id}
                        onClick={() => setSelectedChapterId(ch.id)}
                        className="rounded-xl px-2 py-3 text-center transition-colors"
                        style={hasProgress ? goldBtn : card}
                        aria-label={`${bookName} chapter ${ch.chapterNumber}, ${ch.counts.total} questions`}
                      >
                        <span className="block text-base font-medium" style={{ color: hasProgress ? 'var(--gold-300)' : 'var(--ivory-100)' }}>{ch.chapterNumber}</span>
                        <span className="block text-[10px] mt-0.5" style={{ color: 'var(--muted-500)' }}>{ch.counts.total} Qs</span>
                      </button>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div>
            <button
              onClick={() => { setSelectedChapterId(null); setDrillOpen(null); setConfirmReset(null); }}
              className="mb-4 text-sm"
              style={{ color: 'var(--gold-300)' }}
            >
              ← Choose another chapter
            </button>
          <div className="space-y-3">
            {[selectedChapter].map(ch => {
              const p = progress[ch.id];
              const total = ch.counts.total;
              const mastered = p?.mastered ?? 0;
              const pct = total ? Math.round((mastered / total) * 100) : 0;
              const open = p?.openSession ?? null;
              const isDrill = drillOpen === ch.id;
              return (
                <div key={ch.id} className="rounded-2xl px-5 py-4" style={card}>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="min-w-0">
                      <p className="text-sm font-medium" style={{ color: 'var(--ivory-100)' }}>{ch.title}</p>
                      {ch.description && <p className="text-xs mt-1" style={{ color: 'var(--muted-400)' }}>{ch.description}</p>}
                      <p className="text-xs mt-0.5" style={{ color: 'var(--muted-500)' }}>
                        {total} questions · Easy {ch.counts[1]} · Medium {ch.counts[2]} · Hard {ch.counts[3]}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-sm font-semibold" style={{ color: 'var(--gold-300)' }}>{total - mastered} left in the pool</p>
                      <p className="text-xs" style={{ color: 'var(--muted-500)' }}>
                        {p ? `${mastered} out · ${p.correctAnswers} right · ${p.wrongAnswers} wrong` : `${total} to master`}
                      </p>
                    </div>
                  </div>
                  {/* pool bar: gold = taken out of the pool */}
                  <div className="h-1.5 rounded-full mb-1.5" style={{ background: 'rgba(255,255,255,0.06)' }} title={`${pct}% of the pool cleared`}>
                    <div className="h-1.5 rounded-full transition-all" style={{ width: `${pct}%`, background: 'var(--gold-400)' }} />
                  </div>
                  <p className="text-[11px] mb-4" style={{ color: 'var(--muted-500)' }}>
                    Right answers take a question out of the pool · wrong answers put it back
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {open && (
                      <button onClick={() => resume(ch, open)} className="rounded-xl px-4 py-2 text-sm font-medium" style={goldBtn}>
                        ▶ Resume · {open.position}/{open.questionIds.length}
                      </button>
                    )}
                    <button onClick={() => begin(ch, 'session')} className="rounded-xl px-4 py-2 text-sm font-medium" style={open ? ghostBtn : goldBtn}>
                      {open ? 'New session' : 'Start session'} · {SESSION_SIZE}
                    </button>
                    <button onClick={() => begin(ch, 'quick')} className="rounded-xl px-4 py-2 text-sm font-medium" style={ghostBtn}>Quick · {QUICK_SIZE}</button>
                    {allowAdminBrowse && <button onClick={() => browse(ch)} className="rounded-xl px-4 py-2 text-sm font-medium" style={ghostBtn}>Browse question bank</button>}
                    {(p?.toReview ?? 0) > 0 && (
                      <button onClick={() => begin(ch, 'review')} className="rounded-xl px-4 py-2 text-sm font-medium" style={badStyle}>
                        Review {p!.toReview} missed
                      </button>
                    )}
                    <button onClick={() => setDrillOpen(isDrill ? null : ch.id)} className="rounded-xl px-3 py-2 text-xs" style={ghostBtn}>
                      {isDrill ? 'Hide drill' : 'Drill a level or type'}
                    </button>
                    {p && (confirmReset === ch.id ? (
                      <span className="flex items-center gap-2 text-xs ml-auto">
                        <span style={{ color: '#f87171' }}>Erase all progress for this quiz?</span>
                        <button onClick={() => doReset(ch)} className="px-2.5 py-1 rounded-full" style={badStyle}>Yes, erase</button>
                        <button onClick={() => setConfirmReset(null)} className="px-2.5 py-1 rounded-full" style={ghostBtn}>Cancel</button>
                      </span>
                    ) : (
                      <button onClick={() => setConfirmReset(ch.id)} className="text-xs ml-auto" style={{ color: 'var(--muted-500)' }}>Reset progress</button>
                    ))}
                  </div>

                  {isDrill && (
                    <div className="mt-4 pt-4 space-y-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                      <div className="flex flex-wrap gap-2">
                        {(['mixed', 1, 2, 3] as Level[]).map(l => (
                          <button key={String(l)} onClick={() => setDrillLevel(l)} className="rounded-full px-3 py-1.5 text-xs font-medium" style={drillLevel === l ? goldBtn : ghostBtn}>
                            {l === 'mixed' ? 'Any level' : DIFFICULTY_LABEL[l]}
                          </button>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {(['all', ...TYPE_ORDER] as TypeFilter[]).map(t => (
                          <button key={t} onClick={() => setDrillType(t)} className="rounded-full px-3 py-1.5 text-xs font-medium" style={drillType === t ? goldBtn : ghostBtn}>
                            {t === 'all' ? 'All types' : `${TYPE_ICON[t]} ${TYPE_LABEL[t]}`}
                          </button>
                        ))}
                      </div>
                      <button onClick={() => begin(ch, 'drill', { level: drillLevel, type: drillType })} className="rounded-xl px-4 py-2 text-sm font-medium" style={goldBtn}>
                        Drill {QUICK_SIZE} questions
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          </div>
        )}
      </>
    );
  }

  if (phase === 'loading') return <div className="h-40 rounded-2xl animate-pulse" style={{ background: 'rgba(255,255,255,0.04)' }} />;

  if (phase === 'browse' && chapter) {
    const needle = browseSearch.trim().toLowerCase();
    const filtered = pool.filter(q => !needle || [q.question, displayAnswer(q), q.verse_ref, q.id, TYPE_LABEL[q.type]].some(value => value?.toLowerCase().includes(needle)));
    return (
      <div>
        <button onClick={() => setPhase('setup')} className="mb-4 text-sm" style={{ color: 'var(--gold-300)' }}>← Back to {chapter.title}</button>
        <div className="flex flex-wrap items-end justify-between gap-3 mb-4">
          <div>
            <h2 className="text-2xl font-medium" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--ivory-100)' }}>Browse question bank</h2>
            <p className="text-xs mt-1" style={{ color: 'var(--muted-500)' }}>{chapter.title} · {pool.length} questions · answers are shown</p>
          </div>
          <input value={browseSearch} onChange={e => setBrowseSearch(e.target.value)} placeholder="Search wording, answer, verse, or ID…" className="w-full sm:w-80 rounded-xl px-4 py-2.5 text-sm outline-none" style={{ background: 'rgba(255,255,255,0.04)', color: 'var(--ivory-100)', border: '1px solid rgba(201,168,76,0.25)' }} />
        </div>
        <p className="text-xs mb-3" style={{ color: 'var(--muted-500)' }}>{filtered.length} matching question{filtered.length === 1 ? '' : 's'}</p>
        <div className="space-y-3">
          {filtered.map(q => {
            const bankNumber = pool.indexOf(q) + 1;
            return (
              <article key={q.id} className="rounded-2xl px-5 py-4" style={card}>
                <div className="flex flex-wrap items-center gap-2 mb-2 text-xs" style={{ color: 'var(--muted-500)' }}>
                  <span style={{ color: 'var(--gold-300)' }}>Bank #{bankNumber}</span><span>·</span><span>{q.verse_ref}</span><span>·</span><span>{TYPE_LABEL[q.type]}</span><span>·</span><span>ID {q.id}</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ivory-100)' }}>{q.question}</p>
                <p className="text-sm mt-2" style={{ color: '#34d399' }}>Answer: {displayAnswer(q)}</p>
                {q.explanation && <p className="text-xs mt-1" style={{ color: 'var(--muted-400)' }}>{q.explanation}</p>}
              </article>
            );
          })}
          {!filtered.length && <div className="rounded-2xl px-5 py-6 text-sm" style={{ ...card, color: 'var(--muted-400)' }}>No questions match that search.</div>}
        </div>
      </div>
    );
  }

  // ================================================================= COMPLETE
  if (phase === 'complete') {
    const correctCount = priorCorrect + answered.filter(a => a.correct).length;
    const pct = round.length ? Math.round((correctCount / round.length) * 100) : 0;
    const m = computeMastery(pool, stats);
    const masteryPct = m.total ? Math.round((m.mastered / m.total) * 100) : 0;
    const missed = answered.filter(a => !a.correct);
    const unseen = pool.filter(q => priorityRank(stats[q.id]) === 0).length;
    const reviewSections = chapter?.bookSlug === 'mark'
      ? Array.from(missed.reduce((groups, { q }) => {
          const title = markSectionForVerse(chapter.chapterNumber, q.verse_number)
          groups.set(title, (groups.get(title) ?? 0) + 1)
          return groups
        }, new Map<string, number>()).entries()).sort((a, b) => b[1] - a[1])
      : [];
    const collectionReviewSections = chapter?.scopeKind === 'collection'
      ? Array.from(missed.reduce((groups, { q }) => {
          const topic = q.review_topic ?? 'Review the supporting passages'
          groups.set(topic, (groups.get(topic) ?? 0) + 1)
          return groups
        }, new Map<string, number>()).entries()).sort((a, b) => b[1] - a[1])
      : [];

    return (
      <div>
        <div className="rounded-2xl px-6 py-8 text-center mb-4" style={card}>
          <p className="text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--muted-500)' }}>
            {chapter?.title} · {mode === 'quick' ? 'Quick' : mode === 'review' ? 'Review' : mode === 'drill' ? 'Drill' : 'Session'}
          </p>
          {round.length === 0 ? (
            <>
              <h2 className="text-2xl font-medium mb-2" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--ivory-100)' }}>Nothing to review</h2>
              <p className="text-sm" style={{ color: 'var(--muted-400)' }}>You have no missed questions outstanding in this quiz.</p>
            </>
          ) : (
            <>
              <h2 className="text-4xl font-medium mb-1" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--gold-300)' }}>{pct}%</h2>
              <p className="text-sm" style={{ color: 'var(--muted-400)' }}>{correctCount} of {round.length} correct this {mode === 'quick' ? 'quick round' : 'session'}</p>
            </>
          )}
          <div className="mt-6 text-left">
            <div className="flex items-center justify-between text-xs mb-1.5" style={{ color: 'var(--muted-400)' }}>
              <span>Question pool</span>
              <span style={{ color: 'var(--gold-300)' }}>{m.total - m.mastered} of {m.total} left · {masteryPct}% cleared</span>
            </div>
            <div className="h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
              <div className="h-2 rounded-full transition-all" style={{ width: `${masteryPct}%`, background: 'var(--gold-400)' }} />
            </div>
            <p className="text-xs mt-2" style={{ color: 'var(--muted-500)' }}>
              This {mode === 'quick' ? 'round' : 'session'}: {answered.filter(a => a.correct).length} taken out · {missed.length} back in the pool
              {' · '}Overall: {m.correctAnswers} right · {m.wrongAnswers} wrong · {unseen} never seen
              {!isAuthenticated && ' · sign in to keep this'}
            </p>
          </div>
        </div>

        {reviewSections.length > 0 && chapter && (
          <div className="rounded-2xl px-5 py-5 mb-4" style={{ ...card, borderColor: 'rgba(201,168,76,0.25)' }}>
            <p className="text-sm font-medium mb-1" style={{ color: 'var(--gold-300)' }}>What to study next</p>
            <p className="text-xs mb-3" style={{ color: 'var(--muted-500)' }}>Your missed answers point to these parts of Mark {chapter.chapterNumber}.</p>
            <div className="space-y-2">
              {reviewSections.map(([title, count]) => (
                <Link key={title} href={`/study/mark/${chapter.chapterNumber}`}
                  className="flex items-center justify-between rounded-xl px-4 py-3"
                  style={{ background: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.12)' }}>
                  <span className="text-sm" style={{ color: 'var(--ivory-100)' }}>{title}</span>
                  <span className="text-xs ml-3 shrink-0" style={{ color: '#f87171' }}>{count} missed →</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {collectionReviewSections.length > 0 && (
          <div className="rounded-2xl px-5 py-5 mb-4" style={{ ...card, borderColor: 'rgba(201,168,76,0.25)' }}>
            <p className="text-sm font-medium mb-1" style={{ color: 'var(--gold-300)' }}>What to study next</p>
            <p className="text-xs mb-3" style={{ color: 'var(--muted-500)' }}>Your missed answers point to these themes across Kings.</p>
            <div className="space-y-2">
              {collectionReviewSections.map(([title, count]) => (
                <div key={title} className="flex items-center justify-between rounded-xl px-4 py-3" style={{ background: 'rgba(201,168,76,0.05)', border: '1px solid rgba(201,168,76,0.12)' }}>
                  <span className="text-sm" style={{ color: 'var(--ivory-100)' }}>{title}</span>
                  <span className="text-xs ml-3 shrink-0" style={{ color: '#f87171' }}>{count} missed</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {missed.length > 0 && (
          <div className="rounded-2xl px-5 py-5 mb-4" style={{ ...card, borderColor: 'rgba(239,68,68,0.25)' }}>
            <p className="text-sm font-medium mb-1" style={{ color: '#f87171' }}>Go back and fix these ({missed.length})</p>
            <p className="text-xs mb-4" style={{ color: 'var(--muted-500)' }}>
              Each one links to the verse it comes from. They will come back at the start of your next session.
            </p>
            <ul className="space-y-3">
              {missed.map(({ q, given }) => (
                <li key={q.id} className="rounded-xl px-4 py-3" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <p className="text-sm mb-1.5" style={{ color: 'var(--ivory-100)' }}>
                    {q.type === 'fill_blank' ? q.question.replace(/_{3,}/, `[${displayAnswer(q)}]`) : q.question}
                  </p>
                  <p className="text-xs" style={{ color: 'var(--muted-400)' }}>
                    You said <span style={{ color: '#f87171' }}>“{given.replace(/^["“]|["”]$/g, '') || '—'}”</span> · Answer: <span style={{ color: '#34d399' }}>{displayAnswer(q)}</span>
                  </p>
                  {q.explanation && <p className="text-xs mt-1" style={{ color: 'var(--muted-500)' }}>{q.explanation}</p>}
                  <QuestionSource question={q} chapter={chapter ? { bookSlug:chapter.bookSlug, chapterNumber:chapter.chapterNumber } : undefined} />
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {chapter && (
            <>
              <button onClick={() => begin(chapter, mode === 'quick' ? 'quick' : 'session')} className="rounded-xl px-4 py-2.5 text-sm font-medium" style={goldBtn}>
                Next {mode === 'quick' ? 'quick round' : 'session'}{unseen > 0 ? ` · ${unseen} new left` : ''}
              </button>
              {m.toReview > 0 && (
                <button onClick={() => begin(chapter, 'review')} className="rounded-xl px-4 py-2.5 text-sm font-medium" style={badStyle}>
                  Review {m.toReview} missed
                </button>
              )}
            </>
          )}
          <button onClick={() => setPhase('setup')} className="rounded-xl px-4 py-2.5 text-sm font-medium" style={ghostBtn}>All chapters</button>
        </div>
      </div>
    );
  }

  // ========================================================= QUESTION / REVEAL
  if (!current) return null;
  if (!isSupportedQuizType(current.type)) return <UnsupportedQuizQuestion question={current.question} />;
  const answeredCount = index + (revealed ? 1 : 0);
  const runningCorrect = priorCorrect + answered.filter(a => a.correct).length;
  const quizReturnHref = chapter
    ? `/quiz?book=${encodeURIComponent(chapter.scopeKind === 'collection' ? 'all-kings' : chapter.bookSlug)}&resume=${encodeURIComponent(sessionId ?? 'local')}&source=${encodeURIComponent(chapter.id)}`
    : '/quiz';
  async function prepareStudyNavigation() {
    if (chapter && !isAuthenticated) {
      saveLocalRound(chapter.id, {
        mode,
        questionIds:round.map(question => question.id),
        answeredIds:answered.map(item => item.q.id),
        correctCount:priorCorrect + answered.filter(item => item.correct).length,
      });
    }
    await answerWriteRef.current;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-3 text-xs" style={{ color: 'var(--muted-500)' }}>
        <span>{chapter?.title} · {DIFFICULTY_LABEL[current.difficulty]}</span>
        <span>{index + 1} / {round.length} · <span style={{ color: '#34d399' }}>{runningCorrect} ✓</span> · <span style={{ color: '#f87171' }}>{answeredCount + priorCorrect - runningCorrect} ✗</span> · <span data-testid="pool-count" style={{ color: 'var(--gold-300)' }}>Pool {poolRemaining(pool, stats)} / {pool.length}</span></span>
      </div>
      {allowAdminBrowse && <p className="text-[11px] -mt-4 mb-5" style={{ color: 'var(--muted-500)' }}>
        {chapter?.scopeKind === 'collection' ? `Topic: ${current.review_topic ?? 'All of Kings'}` : `Support reference: ${current.verse_ref}`} · ID {current.id}
      </p>}
      <div className="h-1 rounded-full mb-6" style={{ background: 'rgba(255,255,255,0.06)' }}>
        <div className="h-1 rounded-full transition-all" style={{ width: `${(answeredCount / round.length) * 100}%`, background: 'var(--gold-400)' }} />
      </div>

      <div className="rounded-2xl px-6 py-6 mb-4" style={card}>
        <div className="flex items-center gap-2 mb-3">
          <span data-testid="type-badge" className="text-xs font-semibold px-2.5 py-1 rounded-full" style={goldBtn}>{TYPE_ICON[current.type]} {TYPE_LABEL[current.type]}</span>
          {current.type === 'fill_blank' && current.verse_ref && <span className="text-xs" style={{ color: 'var(--muted-500)' }}>{current.verse_ref} · type the missing word(s)</span>}
        </div>
        {current.type === 'fill_blank' && current.lead_in && <p className="text-sm mb-2" style={{ color:'var(--ivory-200)' }}>{current.lead_in}</p>}
        <p className="text-lg leading-relaxed" style={{ color: 'var(--ivory-100)', fontFamily: current.type === 'fill_blank' ? 'var(--font-playfair)' : undefined }}>
          {current.type === 'fill_blank' ? renderBlank(current.question, revealed ? displayAnswer(current) : null, lastCorrect) : current.question}
        </p>
      </div>

      {current.type === 'fill_blank' && !revealed && (
        <FillBlankContext question={current} chapter={chapter ? { bookSlug:chapter.bookSlug, chapterNumber:chapter.chapterNumber } : undefined} />
      )}

      {current.type === 'multiple_choice' && (
        <div className="space-y-2 mb-4">
          {(current.options ?? []).map((opt, i) => {
            const isPick = choice === i, isRight = current.correct_index === i;
            const style = revealed && isRight ? okStyle : revealed && isPick ? badStyle : isPick ? goldBtn : ghostBtn;
            return (
              <button key={i} disabled={revealed} onClick={() => setChoice(i)} className="w-full text-left rounded-xl px-4 py-3 text-sm transition-all" style={style}>
                <span className="opacity-50 mr-3">{String.fromCharCode(65 + i)}</span>{opt}
              </button>
            );
          })}
        </div>
      )}
      {current.type === 'true_false' && (
        <div className="grid grid-cols-2 gap-2 mb-4">
          {[1, 0].map(v => {
            const isPick = choice === v, isRight = (current.answer === 'true') === (v === 1);
            const style = revealed && isRight ? okStyle : revealed && isPick ? badStyle : isPick ? goldBtn : ghostBtn;
            return <button key={v} disabled={revealed} onClick={() => setChoice(v)} className="rounded-xl px-4 py-3 text-sm font-medium transition-all" style={style}>{v ? 'True' : 'False'}</button>;
          })}
        </div>
      )}
      {(current.type === 'fill_blank' || current.type === 'one_word') && (
        <form className="mb-4" onSubmit={e => { e.preventDefault(); if (revealed) next(); else submit(); }}>
          <input ref={inputRef} value={typed} disabled={revealed} onChange={e => setTyped(e.target.value)}
            placeholder={current.type === 'one_word' ? 'Type a short answer…' : 'Type the missing word(s)…'} autoComplete="off" autoCapitalize="off" spellCheck={false}
            className="w-full rounded-xl px-4 py-3 text-sm outline-none"
            style={{ background: 'rgba(255,255,255,0.04)', color: 'var(--ivory-100)', border: `1px solid ${revealed ? (lastCorrect ? 'rgba(16,185,129,0.5)' : 'rgba(239,68,68,0.5)') : 'rgba(201,168,76,0.3)'}` }} />
        </form>
      )}
      {current.type === 'short_answer' && (
        <form className="mb-4" onSubmit={e => { e.preventDefault(); if (!revealed) submit(); }}>
          <textarea value={typed} disabled={revealed} onChange={e => setTyped(e.target.value)} rows={4}
            placeholder="Write your answer in your own words…" className="w-full rounded-xl px-4 py-3 text-sm outline-none resize-y"
            style={{ background:'rgba(255,255,255,0.04)', color:'var(--ivory-100)', border:'1px solid rgba(201,168,76,0.3)' }} />
        </form>
      )}

      {revealed && (
        <div className="rounded-2xl px-5 py-4 mb-4 text-sm" style={lastCorrect ? { ...okStyle, color: undefined } : { ...badStyle, color: undefined }}>
          <p className="font-medium mb-1" style={{ color: lastCorrect ? '#34d399' : awaitingSelfGrade ? 'var(--gold-300)' : '#f87171' }}>
            {awaitingSelfGrade ? 'Compare your response with the model answer.' : lastCorrect ? 'Correct — out of the pool' : `Not quite — the answer is “${displayAnswer(current)}”. Back in the pool.`}
          </p>
          {awaitingSelfGrade && <p className="mt-2" style={{ color:'var(--ivory-100)' }}><span style={{ color:'var(--muted-400)' }}>Model answer:</span> {displayAnswer(current)}</p>}
          {current.explanation && <p style={{ color: 'var(--muted-400)' }}>{current.explanation}</p>}
          {!lastCorrect && current.review_topic && <p className="text-xs mt-3 font-medium" style={{ color: 'var(--gold-300)' }}>What to review: {current.review_topic}</p>}
          {!lastCorrect && current.review_guidance && <p className="text-xs mt-1" style={{ color: 'var(--muted-400)' }}>{current.review_guidance}</p>}
          <QuestionSource question={current} chapter={chapter ? { bookSlug:chapter.bookSlug, chapterNumber:chapter.chapterNumber } : undefined} showTopic quizReturnHref={quizReturnHref} beforeStudyNavigation={prepareStudyNavigation} />
          <QuestionReportForm questionId={current.id} />
        </div>
      )}

      <div className="flex items-center justify-between">
        <button onClick={quit} className="text-xs" style={{ color: 'var(--muted-500)' }}>
          {isAuthenticated && sessionId ? 'Save & exit' : 'Quit'}
        </button>
        {awaitingSelfGrade ? (
          <div className="flex gap-2">
            <button onClick={() => finishAnswer(false, typed.trim())} className="rounded-xl px-4 py-2.5 text-sm font-medium" style={badStyle}>I got it wrong</button>
            <button onClick={() => finishAnswer(true, typed.trim())} className="rounded-xl px-4 py-2.5 text-sm font-medium" style={okStyle}>I got it right</button>
          </div>
        ) : revealed ? (
          <button onClick={next} className="rounded-xl px-5 py-2.5 text-sm font-medium" style={goldBtn}>{index + 1 >= round.length ? 'See results' : 'Next →'}</button>
        ) : (
          <button onClick={submit} className="rounded-xl px-5 py-2.5 text-sm font-medium" style={goldBtn}
            disabled={current.type === 'fill_blank' || current.type === 'one_word' || current.type === 'short_answer' ? !typed.trim() : choice === null}>Check</button>
        )}
      </div>
    </div>
  );
}

function renderBlank(text: string, answer: string | null, correct: boolean | null) {
  const parts = text.split(/_{3,}/);
  return parts.map((p, i) => (
    <span key={i}>
      {p}
      {i < parts.length - 1 && (
        <span className="inline-block min-w-[6ch] px-2 mx-0.5 rounded border-b-2 text-center"
          style={{ borderColor: answer ? (correct ? '#34d399' : '#f87171') : 'var(--gold-400)', color: answer ? (correct ? '#34d399' : '#f87171') : 'transparent', background: 'rgba(201,168,76,0.06)' }}>
          {answer ?? '_____'}
        </span>
      )}
    </span>
  ));
}
