'use client';

import { useState, useEffect, useCallback } from 'react';
import type { QuizQuestion } from '@/lib/types';
import { saveQuizScore } from '@/app/actions/progress';

type Props = {
  chapterId: string;
  bookSlug: string;
  chapterNum: number;
  chapterTitle: string;
  onClose: () => void;
  isAuthenticated: boolean;
};

type QuizState = {
  questions: QuizQuestion[];
  currentIndex: number;
  selectedAnswer: number | null;
  answers: (number | null)[];
  phase: 'loading' | 'question' | 'revealed' | 'complete';
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const STORAGE_KEY = (chapterId: string) => `quiz_${chapterId}`;

export default function QuizModal({
  chapterId,
  bookSlug,
  chapterNum,
  chapterTitle,
  onClose,
  isAuthenticated,
}: Props) {
  const [state, setState] = useState<QuizState>({
    questions: [],
    currentIndex: 0,
    selectedAnswer: null,
    answers: [],
    phase: 'loading',
  });
  const [scoreSaved, setScoreSaved] = useState(false);

  // Load questions and restore mid-quiz state from localStorage
  useEffect(() => {
    async function load() {
      // Fetch questions via API route
      const res = await fetch(`/api/quiz/${chapterId}`);
      if (!res.ok) {
        setState(s => ({ ...s, phase: 'complete' }));
        return;
      }
      const raw: QuizQuestion[] = await res.json();
      const questions = shuffle(raw).slice(0, 10);

      if (questions.length === 0) {
        setState(s => ({ ...s, phase: 'complete' }));
        return;
      }

      // Try to restore in-progress state
      try {
        const saved = localStorage.getItem(STORAGE_KEY(chapterId));
        if (saved) {
          const parsed = JSON.parse(saved);
          if (
            parsed.questionIds &&
            JSON.stringify(parsed.questionIds) === JSON.stringify(questions.map(q => q.id))
          ) {
            setState({
              questions,
              currentIndex: parsed.currentIndex ?? 0,
              selectedAnswer: null,
              answers: parsed.answers ?? new Array(questions.length).fill(null),
              phase: 'question',
            });
            return;
          }
        }
      } catch { /* ignore */ }

      setState({
        questions,
        currentIndex: 0,
        selectedAnswer: null,
        answers: new Array(questions.length).fill(null),
        phase: 'question',
      });
    }
    load();
  }, [chapterId]);

  // Persist mid-quiz state to localStorage
  useEffect(() => {
    if (state.phase === 'question' || state.phase === 'revealed') {
      try {
        localStorage.setItem(STORAGE_KEY(chapterId), JSON.stringify({
          questionIds: state.questions.map(q => q.id),
          currentIndex: state.currentIndex,
          answers: state.answers,
        }));
      } catch { /* ignore */ }
    }
    if (state.phase === 'complete') {
      try { localStorage.removeItem(STORAGE_KEY(chapterId)); } catch { /* ignore */ }
    }
  }, [state, chapterId]);

  // Save score when quiz completes
  useEffect(() => {
    if (state.phase === 'complete' && !scoreSaved && state.questions.length > 0) {
      setScoreSaved(true);
      const correct = state.answers.filter((a, i) => a === state.questions[i]?.correct_index).length;
      const pct = Math.round((correct / state.questions.length) * 100);
      saveQuizScore(chapterId, pct, bookSlug, chapterNum).catch(() => { /* silent */ });
    }
  }, [state.phase, scoreSaved, state.answers, state.questions, chapterId, bookSlug, chapterNum]);

  const selectAnswer = useCallback((idx: number) => {
    if (state.phase !== 'question') return;
    setState(s => ({
      ...s,
      selectedAnswer: idx,
      answers: s.answers.map((a, i) => i === s.currentIndex ? idx : a),
      phase: 'revealed',
    }));
  }, [state.phase]);

  const advance = useCallback(() => {
    setState(s => {
      const next = s.currentIndex + 1;
      if (next >= s.questions.length) {
        return { ...s, phase: 'complete' };
      }
      return { ...s, currentIndex: next, selectedAnswer: null, phase: 'question' };
    });
  }, []);

  const current = state.questions[state.currentIndex];
  const correctCount = state.answers.filter((a, i) => a === state.questions[i]?.correct_index).length;
  const total = state.questions.length;
  const pct = total > 0 ? Math.round((correctCount / total) * 100) : 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(4px)' }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}>

      <div
        className="relative w-full max-w-lg rounded-2xl flex flex-col overflow-hidden"
        style={{
          background: 'var(--navy-800)',
          border: '1px solid rgba(201,168,76,0.2)',
          boxShadow: '0 32px 64px rgba(0,0,0,0.6)',
          maxHeight: '90vh',
        }}>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 shrink-0"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest mb-0.5"
              style={{ color: 'var(--gold-400)' }}>
              Chapter Quiz
            </div>
            <div className="text-sm font-medium" style={{ color: 'var(--ivory-200)' }}>
              {chapterTitle}
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg transition-colors"
            style={{ color: 'var(--muted-400)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--ivory-200)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted-400)')}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-5">

          {state.phase === 'loading' && (
            <div className="flex items-center justify-center py-16">
              <div className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin"
                style={{ borderColor: 'var(--gold-400)', borderTopColor: 'transparent' }} />
            </div>
          )}

          {(state.phase === 'question' || state.phase === 'revealed') && current && (
            <div>
              {/* Progress */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs" style={{ color: 'var(--muted-400)' }}>
                  Question {state.currentIndex + 1} of {total}
                </span>
                <div className="flex gap-1">
                  {state.questions.map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full"
                      style={{
                        background: i < state.currentIndex
                          ? (state.answers[i] === state.questions[i].correct_index ? 'var(--verdict-good)' : 'var(--verdict-evil)')
                          : i === state.currentIndex
                            ? 'var(--gold-400)'
                            : 'rgba(255,255,255,0.12)',
                      }} />
                  ))}
                </div>
              </div>

              {/* Question */}
              <p className="text-base font-medium leading-relaxed mb-5"
                style={{ color: 'var(--ivory-100)', lineHeight: '1.7' }}>
                {current.question}
              </p>

              {/* Options */}
              <div className="space-y-2.5">
                {current.options.map((option, i) => {
                  const isSelected = state.selectedAnswer === i;
                  const isCorrect = i === current.correct_index;
                  const revealed = state.phase === 'revealed';

                  let bg = 'rgba(255,255,255,0.04)';
                  let border = 'rgba(255,255,255,0.08)';
                  let color = 'var(--ivory-200)';

                  if (revealed) {
                    if (isCorrect) {
                      bg = 'rgba(16,185,129,0.12)';
                      border = 'rgba(16,185,129,0.4)';
                      color = 'var(--verdict-good)';
                    } else if (isSelected && !isCorrect) {
                      bg = 'rgba(239,68,68,0.1)';
                      border = 'rgba(239,68,68,0.35)';
                      color = 'var(--verdict-evil)';
                    }
                  } else if (isSelected) {
                    bg = 'rgba(201,168,76,0.1)';
                    border = 'rgba(201,168,76,0.4)';
                    color = 'var(--gold-300)';
                  }

                  return (
                    <button
                      key={i}
                      onClick={() => selectAnswer(i)}
                      disabled={revealed}
                      className="w-full text-left rounded-xl px-4 py-3 text-sm transition-all flex items-start gap-3"
                      style={{ background: bg, border: `1px solid ${border}`, color }}>
                      <span className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-semibold mt-0.5"
                        style={{
                          background: revealed && isCorrect ? 'rgba(16,185,129,0.2)' : revealed && isSelected ? 'rgba(239,68,68,0.2)' : 'rgba(255,255,255,0.06)',
                          color: 'inherit',
                        }}>
                        {revealed && isCorrect ? '✓' : revealed && isSelected && !isCorrect ? '✗' : String.fromCharCode(65 + i)}
                      </span>
                      <span>{option}</span>
                    </button>
                  );
                })}
              </div>

              {/* Explanation */}
              {state.phase === 'revealed' && (
                <div className="mt-4 rounded-xl px-4 py-3"
                  style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.15)' }}>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-1.5"
                    style={{ color: 'var(--gold-400)' }}>
                    Explanation
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--ivory-200)' }}>
                    {current.explanation}
                  </p>
                </div>
              )}
            </div>
          )}

          {state.phase === 'complete' && (
            <div className="text-center py-6">
              {total === 0 ? (
                <p className="text-sm" style={{ color: 'var(--muted-400)' }}>
                  No quiz questions available for this chapter yet.
                </p>
              ) : (
                <>
                  {/* Score ring */}
                  <div className="relative inline-flex items-center justify-center w-28 h-28 mb-5">
                    <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
                      <circle cx="50" cy="50" r="42" fill="none"
                        stroke={pct >= 80 ? 'var(--verdict-good)' : pct >= 50 ? 'var(--gold-400)' : 'var(--verdict-evil)'}
                        strokeWidth="8"
                        strokeDasharray={`${2 * Math.PI * 42}`}
                        strokeDashoffset={`${2 * Math.PI * 42 * (1 - pct / 100)}`}
                        strokeLinecap="round" />
                    </svg>
                    <div>
                      <div className="text-3xl font-bold" style={{ color: 'var(--ivory-100)' }}>
                        {pct}%
                      </div>
                      <div className="text-xs" style={{ color: 'var(--muted-400)' }}>
                        {correctCount}/{total}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-medium mb-2"
                    style={{ fontFamily: 'var(--font-playfair)', color: 'var(--ivory-100)' }}>
                    {pct >= 90 ? 'Outstanding!' : pct >= 70 ? 'Well done' : pct >= 50 ? 'Good effort' : 'Keep studying'}
                  </h3>
                  <p className="text-sm mb-1" style={{ color: 'var(--muted-400)' }}>
                    {correctCount} correct out of {total} questions
                  </p>
                  {!isAuthenticated && (
                    <p className="text-xs mt-3" style={{ color: 'var(--muted-500)' }}>
                      Sign in to save your score
                    </p>
                  )}

                  {/* Per-question review */}
                  <div className="mt-6 text-left space-y-2">
                    {state.questions.map((q, i) => {
                      const wasCorrect = state.answers[i] === q.correct_index;
                      return (
                        <div key={q.id} className="flex items-start gap-2.5 rounded-lg px-3 py-2"
                          style={{
                            background: wasCorrect ? 'rgba(16,185,129,0.06)' : 'rgba(239,68,68,0.06)',
                          }}>
                          <span className="mt-0.5 text-xs shrink-0"
                            style={{ color: wasCorrect ? 'var(--verdict-good)' : 'var(--verdict-evil)' }}>
                            {wasCorrect ? '✓' : '✗'}
                          </span>
                          <span className="text-xs leading-relaxed" style={{ color: 'var(--ivory-300)' }}>
                            {q.question}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 shrink-0" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          {state.phase === 'revealed' && (
            <button
              onClick={advance}
              className="w-full rounded-xl py-3 text-sm font-semibold transition-all"
              style={{ background: 'var(--gold-400)', color: 'var(--navy-950)' }}>
              {state.currentIndex + 1 >= total ? 'See results' : 'Next question →'}
            </button>
          )}
          {state.phase === 'complete' && (
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 rounded-xl py-3 text-sm font-medium transition-all"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'var(--ivory-200)',
                }}>
                Close
              </button>
              {total > 0 && (
                <button
                  onClick={() => {
                    localStorage.removeItem(STORAGE_KEY(chapterId));
                    // Re-trigger load by remounting — easiest via parent re-key
                    onClose();
                  }}
                  className="flex-1 rounded-xl py-3 text-sm font-medium transition-all"
                  style={{ background: 'var(--gold-400)', color: 'var(--navy-950)' }}>
                  Retake quiz
                </button>
              )}
            </div>
          )}
          {(state.phase === 'question' || state.phase === 'loading') && (
            <button
              onClick={onClose}
              className="w-full rounded-xl py-3 text-sm font-medium transition-all"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                color: 'var(--muted-400)',
              }}>
              Abandon quiz
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
