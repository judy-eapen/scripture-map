'use client';

import { useState, useTransition } from 'react';
import type { FlashcardWithState } from '@/app/actions/flashcards';
import { reviewFlashcard } from '@/app/actions/flashcards';
import type { SM2Quality } from '@/lib/sm2';

type Props = {
  initialCards: FlashcardWithState[];
  onExit: () => void;
};

const QUALITY_BUTTONS: { quality: SM2Quality; label: string; color: string; bg: string; border: string }[] = [
  { quality: 0, label: 'Again', color: '#ef4444', bg: 'rgba(239,68,68,0.08)', border: 'rgba(239,68,68,0.25)' },
  { quality: 1, label: 'Hard',  color: '#f97316', bg: 'rgba(249,115,22,0.08)', border: 'rgba(249,115,22,0.25)' },
  { quality: 2, label: 'Good',  color: '#10b981', bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.25)' },
  { quality: 3, label: 'Easy',  color: '#3b82f6', bg: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.25)' },
];

export default function FlashcardStudy({ initialCards, onExit }: Props) {
  const [cards] = useState<FlashcardWithState[]>(initialCards);
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [reviewed, setReviewed] = useState(0);
  const [isPending, startTransition] = useTransition();
  const [done, setDone] = useState(false);
  const [flipping, setFlipping] = useState(false);

  const card = cards[index];

  function handleReveal() {
    setFlipping(true);
    setTimeout(() => {
      setRevealed(true);
      setFlipping(false);
    }, 150);
  }

  function handleRate(quality: SM2Quality) {
    startTransition(async () => {
      await reviewFlashcard(card.id, quality);
      const nextReviewed = reviewed + 1;
      setReviewed(nextReviewed);

      if (quality === 0) {
        // "Again" — put the card back 3 slots ahead
        const updated = [...cards];
        updated.splice(index + 3, 0, card);
      }

      const nextIndex = index + 1;
      if (nextIndex >= cards.length) {
        setDone(true);
      } else {
        setRevealed(false);
        setShowHint(false);
        setIndex(nextIndex);
      }
    });
  }

  if (done) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
        <div className="text-5xl mb-6">✓</div>
        <h2 className="text-2xl font-medium mb-3"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--ivory-100)' }}>
          Session complete
        </h2>
        <p className="text-sm mb-8" style={{ color: 'var(--muted-400)' }}>
          {reviewed} card{reviewed !== 1 ? 's' : ''} reviewed
        </p>
        <button
          onClick={onExit}
          className="px-6 py-2.5 rounded-xl text-sm font-medium"
          style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)', color: 'var(--gold-300)' }}>
          Back to decks
        </button>
      </div>
    );
  }

  const progress = (index / cards.length) * 100;

  return (
    <div className="flex flex-col gap-6 pb-8">
      {/* Progress */}
      <div className="flex items-center gap-4">
        <button
          onClick={onExit}
          className="text-xs flex items-center gap-1.5 shrink-0"
          style={{ color: 'var(--muted-400)' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M12 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Decks
        </button>
        <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{ width: `${progress}%`, background: 'var(--gold-400)' }}
          />
        </div>
        <span className="text-xs shrink-0" style={{ color: 'var(--muted-500)' }}>
          {index + 1} / {cards.length}
        </span>
      </div>

      {/* Card */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          border: '1px solid rgba(201,168,76,0.12)',
          background: 'var(--navy-800)',
          minHeight: '280px',
          transition: 'opacity 0.15s',
          opacity: flipping ? 0 : 1,
        }}>

        {/* Question side */}
        <div className="p-6 pb-4">
          <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--muted-500)' }}>
            Question
          </p>
          <p className="text-lg leading-relaxed font-medium"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--ivory-100)', lineHeight: '1.7' }}>
            {card.question}
          </p>

          {/* Hint */}
          {card.hint && (
            <div className="mt-4">
              {showHint ? (
                <p className="text-sm italic" style={{ color: 'var(--muted-400)' }}>
                  Hint: {card.hint}
                </p>
              ) : (
                <button
                  onClick={() => setShowHint(true)}
                  className="text-xs underline underline-offset-2"
                  style={{ color: 'var(--muted-500)' }}>
                  Show hint
                </button>
              )}
            </div>
          )}
        </div>

        {/* Answer side */}
        {revealed ? (
          <div className="p-6 pt-4" style={{ borderTop: '1px solid rgba(201,168,76,0.1)' }}>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--gold-400)' }}>
              Answer
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--ivory-200)', lineHeight: '1.8' }}>
              {card.answer}
            </p>
          </div>
        ) : (
          <div className="p-6 pt-0 flex justify-center">
            <button
              onClick={handleReveal}
              className="mt-2 px-6 py-2.5 rounded-xl text-sm font-medium transition-all"
              style={{
                background: 'rgba(201,168,76,0.08)',
                border: '1px solid rgba(201,168,76,0.2)',
                color: 'var(--gold-300)',
              }}>
              Reveal answer
            </button>
          </div>
        )}
      </div>

      {/* Rating buttons */}
      {revealed && (
        <div>
          <p className="text-xs text-center mb-3" style={{ color: 'var(--muted-500)' }}>
            How well did you know this?
          </p>
          <div className="grid grid-cols-4 gap-2">
            {QUALITY_BUTTONS.map(({ quality, label, color, bg, border }) => (
              <button
                key={quality}
                onClick={() => handleRate(quality)}
                disabled={isPending}
                className="py-3 rounded-xl text-sm font-semibold transition-all"
                style={{ background: bg, border: `1px solid ${border}`, color }}>
                {label}
              </button>
            ))}
          </div>
          <div className="flex justify-between mt-1.5 px-1">
            <span className="text-xs" style={{ color: 'var(--muted-500)' }}>Forgot it</span>
            <span className="text-xs" style={{ color: 'var(--muted-500)' }}>Knew it cold</span>
          </div>
        </div>
      )}
    </div>
  );
}
