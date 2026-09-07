'use client';

import { useState, useEffect } from 'react';
import { getDeckSummaries, getDueFlashcards, type DeckSummary, type FlashcardWithState } from '@/app/actions/flashcards';
import FlashcardStudy from '@/components/FlashcardStudy';

const DECK_ICONS: Record<string, string> = {
  'kings-north': '⚔',
  'kings-south': '🏛',
  'places': '🗺',
  'people': '👤',
  'themes': '📜',
};

export default function FlashcardsClient() {
  const [decks, setDecks] = useState<DeckSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeDeck, setActiveDeck] = useState<string | null>(null);
  const [studyCards, setStudyCards] = useState<FlashcardWithState[]>([]);
  const [loadingDeck, setLoadingDeck] = useState<string | null>(null);

  useEffect(() => {
    getDeckSummaries().then(d => {
      setDecks(d);
      setLoading(false);
    });
  }, []);

  async function handleSelectDeck(deck: string) {
    setLoadingDeck(deck);
    const cards = await getDueFlashcards(deck);
    setStudyCards(cards);
    setActiveDeck(deck);
    setLoadingDeck(null);
  }

  function handleExit() {
    setActiveDeck(null);
    setStudyCards([]);
    setLoading(true);
    getDeckSummaries().then(d => {
      setDecks(d);
      setLoading(false);
    });
  }

  return (
    <div className="max-w-2xl mx-auto px-4 md:px-6 py-8 pt-14 md:pt-8 pb-24">
        {activeDeck ? (
          <FlashcardStudy initialCards={studyCards} onExit={handleExit} />
        ) : (
          <>
            <div className="mb-8">
              <h1 className="text-3xl font-medium mb-2"
                style={{ fontFamily: 'var(--font-playfair)', color: 'var(--ivory-100)' }}>
                Flashcards
              </h1>
              <p className="text-sm" style={{ color: 'var(--muted-400)' }}>
                Spaced repetition study. Cards due today are shown first.
              </p>
            </div>

            {loading ? (
              <div className="space-y-3">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="h-20 rounded-2xl animate-pulse"
                    style={{ background: 'rgba(255,255,255,0.04)' }} />
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                {decks.map(deck => (
                  <button
                    key={deck.deck}
                    onClick={() => handleSelectDeck(deck.deck)}
                    disabled={loadingDeck !== null}
                    className="w-full text-left rounded-2xl px-5 py-4 transition-all group"
                    style={{
                      background: loadingDeck === deck.deck ? 'rgba(201,168,76,0.08)' : 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.07)',
                    }}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{DECK_ICONS[deck.deck] ?? '📋'}</span>
                        <div>
                          <p className="text-sm font-medium" style={{ color: 'var(--ivory-100)' }}>
                            {deck.label}
                          </p>
                          <p className="text-xs mt-0.5" style={{ color: 'var(--muted-500)' }}>
                            {deck.total} cards total
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {deck.due > 0 && (
                          <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                            style={{ background: 'rgba(201,168,76,0.12)', color: 'var(--gold-400)', border: '1px solid rgba(201,168,76,0.2)' }}>
                            {deck.due} due
                          </span>
                        )}
                        {deck.due === 0 && (
                          <span className="text-xs px-2.5 py-1 rounded-full"
                            style={{ background: 'rgba(16,185,129,0.08)', color: '#10b981', border: '1px solid rgba(16,185,129,0.2)' }}>
                            Up to date
                          </span>
                        )}
                        {loadingDeck === deck.deck ? (
                          <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--muted-400)' }}>
                            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        ) : (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--muted-500)' }}>
                            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}

            <p className="text-xs text-center mt-8" style={{ color: 'var(--muted-600)' }}>
              Intervals update per your ratings using the SM-2 algorithm.
            </p>
          </>
        )}
    </div>
  );
}
