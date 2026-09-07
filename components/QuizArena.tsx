'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import type { QuizQuestion } from '@/lib/types';
import type { QuizChapterSummary } from '@/lib/db';
import {
  buildRound, countRemaining, displayAnswer, gradeMultipleChoice, gradeText, gradeTrueFalse,
  DIFFICULTY_LABEL, TYPE_LABEL,
} from '@/lib/quiz-grading';
import type { QuizType } from '@/lib/types';
import { saveQuizScore } from '@/app/actions/progress';

type Difficulty = 1 | 2 | 3 | 'mixed';
type TypeFilter = 'all' | QuizType;

const TYPE_ICON: Record<QuizType, string> = {
  multiple_choice: 'ⓐ',
  fill_blank: '▁',
  one_word: '✎',
  true_false: '✓✗',
};
const TYPE_ORDER: QuizType[] = ['multiple_choice', 'fill_blank', 'one_word', 'true_false'];
type Phase = 'setup' | 'loading' | 'question' | 'revealed' | 'complete';

type Props = { chapters: QuizChapterSummary[]; isAuthenticated: boolean };

const ROUND_SIZE = 10;
const PASS_MARK = 70;
const seenKey = (chapterId: string) => `quiz2_seen_${chapterId}`;

type SeenMap = Record<string, number>; // question id -> difficulty

function loadSeenMap(chapterId: string): SeenMap {
  try {
    const raw = sessionStorage.getItem(seenKey(chapterId));
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    // migrate old array format
    if (Array.isArray(parsed)) return Object.fromEntries(parsed.map((id: string) => [id, 0]));
    return parsed as SeenMap;
  } catch { return {}; }
}
function loadSeen(chapterId: string): Set<string> {
  return new Set(Object.keys(loadSeenMap(chapterId)));
}
function saveSeenMap(chapterId: string, seen: SeenMap) {
  try { sessionStorage.setItem(seenKey(chapterId), JSON.stringify(seen)); } catch { /* ignore */ }
}
function seenCountAt(chapterId: string, diff: Difficulty): number {
  return Object.values(loadSeenMap(chapterId)).filter(d => diff === 'mixed' || d === diff).length;
}
/** Forget seen questions for one chapter at one level (or all levels when mixed). */
function clearSeenAt(chapterId: string, diff: Difficulty) {
  const seen = loadSeenMap(chapterId);
  for (const [id, d] of Object.entries(seen)) if (diff === 'mixed' || d === diff) delete seen[id];
  saveSeenMap(chapterId, seen);
}

const card: React.CSSProperties = {
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.07)',
};
const goldBtn: React.CSSProperties = {
  background: 'rgba(201,168,76,0.14)',
  border: '1px solid rgba(201,168,76,0.35)',
  color: 'var(--gold-300)',
};
const ghostBtn: React.CSSProperties = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.08)',
  color: 'var(--muted-400)',
};

export default function QuizArena({ chapters, isAuthenticated }: Props) {
  const [phase, setPhase] = useState<Phase>('setup');
  const [chapter, setChapter] = useState<QuizChapterSummary | null>(null);
  const [difficulty, setDifficulty] = useState<Difficulty>(1);
  const [typeFilter, setTypeFilter] = useState<TypeFilter>('all');
  // bump to re-read sessionStorage after a refresh
  const [, setSeenVersion] = useState(0);
  const [pool, setPool] = useState<QuizQuestion[]>([]);
  const [round, setRound] = useState<QuizQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [results, setResults] = useState<boolean[]>([]);
  const [lastCorrect, setLastCorrect] = useState<boolean | null>(null);
  const [scoreSaved, setScoreSaved] = useState(false);

  // per-question input state
  const [choice, setChoice] = useState<number | null>(null);
  const [typed, setTyped] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const withQuestions = useMemo(() => chapters.filter(c => c.counts.total > 0), [chapters]);
  const current = round[index];

  // Autofocus the text field on typed questions
  useEffect(() => {
    if (phase === 'question' && (current?.type === 'fill_blank' || current?.type === 'one_word')) {
      inputRef.current?.focus();
    }
  }, [phase, current]);

  async function loadPool(ch: QuizChapterSummary): Promise<QuizQuestion[]> {
    const res = await fetch(`/api/quiz/${ch.id}`);
    if (!res.ok) return [];
    return (await res.json()) as QuizQuestion[];
  }

  function startRound(qs: QuizQuestion[], ch: QuizChapterSummary, diff: Difficulty) {
    const seen = loadSeen(ch.id);
    const r = buildRound(qs, diff, seen, ROUND_SIZE, typeFilter === 'all' ? 'all' : [typeFilter]);
    setRound(r);
    setIndex(0);
    setResults([]);
    setChoice(null);
    setTyped('');
    setLastCorrect(null);
    setScoreSaved(false);
    setPhase(r.length ? 'question' : 'complete');
  }

  async function begin(ch: QuizChapterSummary, diff: Difficulty) {
    setChapter(ch);
    setDifficulty(diff);
    setPhase('loading');
    const qs = await loadPool(ch);
    setPool(qs);
    startRound(qs, ch, diff);
  }

  function remainingAt(diff: Difficulty): number {
    if (!chapter) return 0;
    return countRemaining(pool, diff, loadSeen(chapter.id), typeFilter === 'all' ? 'all' : [typeFilter]).remaining;
  }

  /** Forget which questions were seen at this level so they can all be asked again. */
  function refreshLevel(diff: Difficulty = difficulty) {
    if (!chapter) return;
    clearSeenAt(chapter.id, diff);
    setSeenVersion(v => v + 1);
  }

  function submit() {
    if (!current || !chapter) return;
    let ok = false;
    if (current.type === 'multiple_choice') {
      if (choice === null) return;
      ok = gradeMultipleChoice(current, choice);
    } else if (current.type === 'true_false') {
      if (choice === null) return;
      ok = gradeTrueFalse(current, choice === 1);
    } else {
      if (!typed.trim()) return;
      ok = gradeText(current, typed);
    }
    const seen = loadSeenMap(chapter.id);
    seen[current.id] = current.difficulty;
    saveSeenMap(chapter.id, seen);
    setResults(r => [...r, ok]);
    setLastCorrect(ok);
    setPhase('revealed');
  }

  function next() {
    if (index + 1 >= round.length) {
      // Persist best score once per completed round (same user_progress field the chapter page reads)
      if (chapter && isAuthenticated && !scoreSaved && round.length > 0) {
        const finalPct = Math.round((results.filter(Boolean).length / round.length) * 100);
        setScoreSaved(true);
        saveQuizScore(chapter.id, finalPct, chapter.bookSlug, chapter.chapterNumber).catch(() => {});
      }
      setPhase('complete');
      return;
    }
    setIndex(i => i + 1);
    setChoice(null);
    setTyped('');
    setLastCorrect(null);
    setPhase('question');
  }

  function resetSession() {
    if (!chapter) return;
    refreshLevel();
    startRound(pool, chapter, difficulty);
  }

  const correctCount = results.filter(Boolean).length;
  const pct = round.length ? Math.round((correctCount / round.length) * 100) : 0;


  // ------------------------------------------------------------------ setup
  if (phase === 'setup') {
    return (
      <>
        <div className="mb-8">
          <h1 className="text-3xl font-medium mb-2" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--ivory-100)' }}>
            Quiz
          </h1>
          <p className="text-sm" style={{ color: 'var(--muted-400)' }}>
            Pick a chapter and a level. Questions come straight from the text: multiple choice,
            fill in the blank from the exact verse, one-word answers, and true or false.
          </p>
        </div>

        <p className="text-xs uppercase tracking-wider mb-3" style={{ color: 'var(--muted-500)' }}>Level</p>
        <div className="grid grid-cols-4 gap-2 mb-8">
          {([1, 2, 3, 'mixed'] as Difficulty[]).map(d => {
            const active = difficulty === d;
            return (
              <button key={String(d)} onClick={() => setDifficulty(d)}
                className="rounded-xl px-3 py-2.5 text-sm font-medium transition-all"
                style={active ? goldBtn : ghostBtn}>
                {d === 'mixed' ? 'Mixed' : DIFFICULTY_LABEL[d]}
              </button>
            );
          })}
        </div>

        <p className="text-xs uppercase tracking-wider mb-3" style={{ color: 'var(--muted-500)' }}>Question types</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {(['all', ...TYPE_ORDER] as TypeFilter[]).map(t => {
            const active = typeFilter === t;
            return (
              <button key={t} onClick={() => setTypeFilter(t)}
                className="rounded-full px-3.5 py-1.5 text-xs font-medium transition-all"
                style={active ? goldBtn : ghostBtn}>
                {t === 'all' ? 'All four types' : `${TYPE_ICON[t]} ${TYPE_LABEL[t]}`}
              </button>
            );
          })}
        </div>
        {typeFilter === 'all' && (
          <p className="text-xs -mt-6 mb-8" style={{ color: 'var(--muted-500)' }}>
            Every round mixes all four types. Pick one type to drill it on its own.
          </p>
        )}

        <p className="text-xs uppercase tracking-wider mb-3" style={{ color: 'var(--muted-500)' }}>Chapter</p>
        {withQuestions.length === 0 ? (
          <div className="rounded-2xl px-5 py-6 text-sm" style={{ ...card, color: 'var(--muted-400)' }}>
            No quiz questions loaded yet.
          </div>
        ) : (
          <div className="space-y-2">
            {withQuestions.map(ch => {
              const n = difficulty === 'mixed' ? ch.counts.total : ch.counts[difficulty];
              const seenN = Math.min(seenCountAt(ch.id, difficulty), n);
              const disabled = n === 0;
              const allSeen = !disabled && seenN >= n;
              return (
                <div key={ch.id} className="rounded-2xl transition-all" style={{ ...card, opacity: disabled ? 0.4 : 1 }}>
                  <div className="flex items-center gap-3 px-5 py-4">
                    <button disabled={disabled} onClick={() => begin(ch, difficulty)} className="flex-1 text-left min-w-0">
                      <p className="text-sm font-medium" style={{ color: 'var(--ivory-100)' }}>
                        {ch.bookName} {ch.chapterNumber}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: 'var(--muted-500)' }}>
                        Easy {ch.counts[1]} · Medium {ch.counts[2]} · Hard {ch.counts[3]}
                        {seenN > 0 && <span> · <span style={{ color: allSeen ? 'var(--gold-400)' : undefined }}>{seenN} of {n} seen</span></span>}
                      </p>
                    </button>
                    <div className="flex items-center gap-2 shrink-0">
                      {seenN > 0 && (
                        <button
                          onClick={() => { clearSeenAt(ch.id, difficulty); setSeenVersion(v => v + 1); }}
                          title="Forget which questions you have seen at this level"
                          className="text-xs font-medium px-2.5 py-1 rounded-full"
                          style={allSeen ? goldBtn : ghostBtn}>
                          ↻ Refresh
                        </button>
                      )}
                      <button disabled={disabled} onClick={() => begin(ch, difficulty)}
                        className="text-xs font-semibold px-2.5 py-1 rounded-full" style={goldBtn}>
                        {disabled ? 'None at this level' : allSeen ? 'Start over' : `${n - seenN} left`}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </>
    );
  }

  if (phase === 'loading') {
    return <div className="h-40 rounded-2xl animate-pulse" style={{ background: 'rgba(255,255,255,0.04)' }} />;
  }

  // --------------------------------------------------------------- complete
  if (phase === 'complete') {
    const nextDiff: Difficulty | null =
      difficulty === 1 ? 2 : difficulty === 2 ? 3 : null;
    const canAdvance = nextDiff !== null && pct >= PASS_MARK && remainingAt(nextDiff) > 0;
    const remainingHere = remainingAt(difficulty);
    const exhausted = round.length === 0;

    return (
      <div className="rounded-2xl px-6 py-8 text-center" style={card}>
        <p className="text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--muted-500)' }}>
          {chapter?.bookName} {chapter?.chapterNumber} · {difficulty === 'mixed' ? 'Mixed' : DIFFICULTY_LABEL[difficulty]}
          {chapter && (() => { const c = countRemaining(pool, difficulty, loadSeen(chapter.id), typeFilter === 'all' ? 'all' : [typeFilter]); return ` · ${c.total - c.remaining} of ${c.total} seen`; })()}
        </p>
        {exhausted ? (
          <>
            <h2 className="text-2xl font-medium mb-3" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--ivory-100)' }}>
              You&apos;ve seen every {difficulty === 'mixed' ? '' : DIFFICULTY_LABEL[difficulty] + ' '}question in this chapter
            </h2>
            <p className="text-sm mb-6" style={{ color: 'var(--muted-400)' }}>
              Nothing repeats until you refresh. Refresh to go through them all again, or move up a level.
            </p>
          </>
        ) : (
          <>
            <h2 className="text-4xl font-medium mb-1" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--gold-300)' }}>
              {pct}%
            </h2>
            <p className="text-sm mb-6" style={{ color: 'var(--muted-400)' }}>
              {correctCount} of {round.length} correct
              {isAuthenticated ? '' : ' · sign in to save your best score'}
            </p>
          </>
        )}

        <div className="flex flex-wrap justify-center gap-2">
          {canAdvance && nextDiff && (
            <button onClick={() => chapter && startRoundAt(nextDiff)} className="rounded-xl px-4 py-2.5 text-sm font-medium" style={goldBtn}>
              Advance to {DIFFICULTY_LABEL[nextDiff]} →
            </button>
          )}
          {remainingHere > 0 && (
            <button onClick={() => chapter && startRound(pool, chapter, difficulty)} className="rounded-xl px-4 py-2.5 text-sm font-medium" style={canAdvance ? ghostBtn : goldBtn}>
              Shuffle new round ({Math.min(remainingHere, ROUND_SIZE)} left)
            </button>
          )}
          <button onClick={resetSession} className="rounded-xl px-4 py-2.5 text-sm font-medium"
            style={remainingHere === 0 ? goldBtn : ghostBtn}
            title="Forget which questions you have seen at this level and start a fresh round">
            ↻ Refresh {difficulty === 'mixed' ? 'all' : DIFFICULTY_LABEL[difficulty]} questions
          </button>
          <button onClick={() => setPhase('setup')} className="rounded-xl px-4 py-2.5 text-sm font-medium" style={ghostBtn}>
            Change chapter
          </button>
        </div>
        {nextDiff && !canAdvance && !exhausted && pct < PASS_MARK && (
          <p className="text-xs mt-5" style={{ color: 'var(--muted-500)' }}>
            Score {PASS_MARK}% or better to unlock {DIFFICULTY_LABEL[nextDiff]}.
          </p>
        )}
      </div>
    );
  }

  function startRoundAt(diff: Difficulty) {
    if (!chapter) return;
    setDifficulty(diff);
    startRound(pool, chapter, diff);
  }

  // --------------------------------------------------------- question/reveal
  if (!current) return null;
  const revealed = phase === 'revealed';

  return (
    <div>
      {/* progress */}
      <div className="flex items-center justify-between mb-4 text-xs" style={{ color: 'var(--muted-500)' }}>
        <span>{chapter?.bookName} {chapter?.chapterNumber} · {DIFFICULTY_LABEL[current.difficulty]}</span>
        <span>{index + 1} / {round.length}</span>
      </div>
      <div className="h-1 rounded-full mb-6" style={{ background: 'rgba(255,255,255,0.06)' }}>
        <div className="h-1 rounded-full transition-all" style={{ width: `${((index + (revealed ? 1 : 0)) / round.length) * 100}%`, background: 'var(--gold-400)' }} />
      </div>

      <div className="rounded-2xl px-6 py-6 mb-4" style={card}>
        <div className="flex items-center gap-2 mb-3">
          <span data-testid="type-badge" className="text-xs font-semibold px-2.5 py-1 rounded-full" style={goldBtn}>
            {TYPE_ICON[current.type]} {TYPE_LABEL[current.type]}
          </span>
          {current.type === 'fill_blank' && current.verse_ref && (
            <span className="text-xs" style={{ color: 'var(--muted-500)' }}>{current.verse_ref} · type the missing word(s)</span>
          )}
        </div>
        <p className="text-lg leading-relaxed" style={{ color: 'var(--ivory-100)', fontFamily: current.type === 'fill_blank' ? 'var(--font-playfair)' : undefined }}>
          {current.type === 'fill_blank' ? renderBlank(current.question, revealed ? displayAnswer(current) : null, lastCorrect) : current.question}
        </p>
      </div>

      {/* answer controls */}
      {current.type === 'multiple_choice' && (
        <div className="space-y-2 mb-4">
          {(current.options ?? []).map((opt, i) => {
            const isPick = choice === i;
            const isRight = current.correct_index === i;
            let style: React.CSSProperties = ghostBtn;
            if (revealed && isRight) style = { background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.4)', color: '#34d399' };
            else if (revealed && isPick && !isRight) style = { background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.35)', color: '#f87171' };
            else if (isPick) style = goldBtn;
            return (
              <button key={i} disabled={revealed} onClick={() => setChoice(i)}
                className="w-full text-left rounded-xl px-4 py-3 text-sm transition-all" style={style}>
                <span className="opacity-50 mr-3">{String.fromCharCode(65 + i)}</span>{opt}
              </button>
            );
          })}
        </div>
      )}

      {current.type === 'true_false' && (
        <div className="grid grid-cols-2 gap-2 mb-4">
          {[1, 0].map(v => {
            const label = v ? 'True' : 'False';
            const isPick = choice === v;
            const isRight = (current.answer === 'true') === (v === 1);
            let style: React.CSSProperties = ghostBtn;
            if (revealed && isRight) style = { background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.4)', color: '#34d399' };
            else if (revealed && isPick) style = { background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.35)', color: '#f87171' };
            else if (isPick) style = goldBtn;
            return (
              <button key={v} disabled={revealed} onClick={() => setChoice(v)}
                className="rounded-xl px-4 py-3 text-sm font-medium transition-all" style={style}>{label}</button>
            );
          })}
        </div>
      )}

      {(current.type === 'fill_blank' || current.type === 'one_word') && (
        <form className="mb-4" onSubmit={e => { e.preventDefault(); if (revealed) next(); else submit(); }}>
          <input ref={inputRef} value={typed} disabled={revealed} onChange={e => setTyped(e.target.value)}
            placeholder={current.type === 'one_word' ? 'One word…' : 'Type the missing word(s)…'}
            autoComplete="off" autoCapitalize="off" spellCheck={false}
            className="w-full rounded-xl px-4 py-3 text-sm outline-none"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: `1px solid ${revealed ? (lastCorrect ? 'rgba(16,185,129,0.5)' : 'rgba(239,68,68,0.5)') : 'rgba(201,168,76,0.3)'}`,
              color: 'var(--ivory-100)',
            }} />
        </form>
      )}

      {/* reveal */}
      {revealed && (
        <div className="rounded-2xl px-5 py-4 mb-4 text-sm" style={{
          background: lastCorrect ? 'rgba(16,185,129,0.06)' : 'rgba(239,68,68,0.06)',
          border: `1px solid ${lastCorrect ? 'rgba(16,185,129,0.25)' : 'rgba(239,68,68,0.25)'}`,
        }}>
          <p className="font-medium mb-1" style={{ color: lastCorrect ? '#34d399' : '#f87171' }}>
            {lastCorrect ? 'Correct' : `Not quite — the answer is “${displayAnswer(current)}”`}
          </p>
          {current.explanation && <p style={{ color: 'var(--muted-400)' }}>{current.explanation}</p>}
          {current.verse_ref && current.type !== 'fill_blank' && (
            <p className="text-xs mt-2" style={{ color: 'var(--muted-500)' }}>{current.verse_ref}</p>
          )}
        </div>
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={() => setPhase('setup')} className="text-xs" style={{ color: 'var(--muted-500)' }}>Quit</button>
          <button onClick={resetSession} className="text-xs" style={{ color: 'var(--muted-500)' }}
            title="Forget which questions you have seen at this level and start a fresh round">↻ Refresh questions</button>
        </div>
        {revealed ? (
          <button onClick={next} className="rounded-xl px-5 py-2.5 text-sm font-medium" style={goldBtn}>
            {index + 1 >= round.length ? 'See results' : 'Next →'}
          </button>
        ) : (
          <button onClick={submit} className="rounded-xl px-5 py-2.5 text-sm font-medium" style={goldBtn}
            disabled={current.type === 'fill_blank' || current.type === 'one_word' ? !typed.trim() : choice === null}>
            Check
          </button>
        )}
      </div>
    </div>
  );
}

/** Render "…found _____ the Shunammite" with the blank as a highlighted slot. */
function renderBlank(text: string, answer: string | null, correct: boolean | null) {
  const parts = text.split(/_{3,}/);
  return parts.map((p, i) => (
    <span key={i}>
      {p}
      {i < parts.length - 1 && (
        <span className="inline-block min-w-[6ch] px-2 mx-0.5 rounded border-b-2 text-center"
          style={{
            borderColor: answer ? (correct ? '#34d399' : '#f87171') : 'var(--gold-400)',
            color: answer ? (correct ? '#34d399' : '#f87171') : 'transparent',
            background: 'rgba(201,168,76,0.06)',
          }}>
          {answer ?? '_____'}
        </span>
      )}
    </span>
  ));
}
