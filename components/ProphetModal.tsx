'use client';

import Link from 'next/link';
import type { ProphetEntry } from '@/components/KingdomTimeline';
import type { NavChapter } from '@/lib/types';
import { PROPHET_PROPHECIES, type ProphecyItem } from '@/lib/prophecies';

type Props = {
  prophet: ProphetEntry;
  navData: { book: string; chapters: NavChapter[] }[];
  onClose: () => void;
};

function isChapterRead(
  navData: { book: string; chapters: NavChapter[] }[],
  bookSlug: '1-kings' | '2-kings',
  chapterNum: number,
): boolean {
  const bookName = bookSlug === '1-kings' ? '1 Kings' : '2 Kings';
  const book = navData.find(b => b.book === bookName);
  return book?.chapters.find(c => c.number === chapterNum)?.is_read ?? false;
}

const OUTCOME_LABEL: Record<ProphecyItem['outcome'], string> = {
  fulfilled:  'Fulfilled',
  partial:    'Partial',
  historical: 'Historical',
};

const OUTCOME_STYLE: Record<ProphecyItem['outcome'], { bg: string; color: string }> = {
  fulfilled:  { bg: 'rgba(16,185,129,0.12)',  color: 'rgba(52,211,153,0.95)' },
  partial:    { bg: 'rgba(245,158,11,0.12)',  color: 'rgba(251,191,36,0.95)' },
  historical: { bg: 'rgba(100,116,139,0.18)', color: 'rgba(148,163,184,0.9)' },
};

export default function ProphetModal({ prophet, navData, onClose }: Props) {
  const prophecies = PROPHET_PROPHECIES[prophet.id] ?? [];

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 40,
          background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(4px)',
        }}
      />

      {/* Modal */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 50,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '16px', pointerEvents: 'none',
      }}>
        <div style={{
          background: 'var(--navy-900)',
          border: '1px solid rgba(245,158,11,0.2)',
          borderRadius: '16px',
          width: '100%', maxWidth: '580px',
          maxHeight: '88vh', overflowY: 'auto',
          pointerEvents: 'auto',
          boxShadow: '0 24px 64px rgba(0,0,0,0.6)',
        }}>

          {/* Sticky header */}
          <div style={{
            padding: '22px 24px 16px',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
            position: 'sticky', top: 0,
            background: 'var(--navy-900)', zIndex: 1,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                {/* Badges */}
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '8px' }}>
                  <span style={{
                    fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'rgba(253,230,138,0.9)', background: 'rgba(245,158,11,0.15)',
                    padding: '2px 8px', borderRadius: '4px',
                  }}>Prophet</span>
                  {prophet.kingdom && (
                    <span style={{
                      fontSize: '10px', letterSpacing: '0.06em', textTransform: 'uppercase',
                      color: 'var(--muted-400)', background: 'rgba(255,255,255,0.06)',
                      padding: '2px 8px', borderRadius: '4px',
                    }}>
                      {prophet.kingdom === 'north' ? 'Northern Kingdom' : 'Southern Kingdom'}
                    </span>
                  )}
                </div>

                <h2 style={{
                  fontSize: '1.65rem', fontWeight: 600,
                  fontFamily: 'var(--font-playfair)',
                  color: 'var(--ivory-100)', margin: 0, lineHeight: 1.2,
                }}>
                  {prophet.name}
                </h2>
                <p style={{ fontSize: '13px', color: 'var(--muted-400)', marginTop: '5px' }}>
                  Active ~{prophet.start}–{prophet.end} BC
                </p>
              </div>

              <button
                onClick={onClose}
                aria-label="Close"
                style={{
                  background: 'rgba(255,255,255,0.06)', border: 'none',
                  borderRadius: '8px', width: '32px', height: '32px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', color: 'var(--muted-400)',
                  fontSize: '20px', lineHeight: 1, flexShrink: 0,
                }}
              >
                ×
              </button>
            </div>
          </div>

          {/* Body */}
          <div style={{ padding: '20px 24px 32px' }}>

            {/* Bio */}
            <p style={{
              fontSize: '14px', lineHeight: 1.75,
              color: 'rgba(255,255,255,0.75)',
              marginBottom: prophecies.length > 0 ? '28px' : 0,
            }}>
              {prophet.bio}
            </p>

            {/* Prophecies */}
            {prophecies.length > 0 && (
              <div>
                {/* Section header */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  marginBottom: '16px',
                }}>
                  <span style={{
                    fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em',
                    textTransform: 'uppercase', color: 'var(--gold-400)',
                    whiteSpace: 'nowrap',
                  }}>
                    Prophecies &amp; Fulfilments
                  </span>
                  <div style={{ flex: 1, height: '1px', background: 'rgba(245,158,11,0.2)' }} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {prophecies.map(p => {
                    const style = OUTCOME_STYLE[p.outcome];
                    const chapterRead =
                      p.fulfillment_book_slug && p.fulfillment_chapter
                        ? isChapterRead(navData, p.fulfillment_book_slug, p.fulfillment_chapter)
                        : false;

                    return (
                      <div key={p.id} style={{
                        background: 'rgba(255,255,255,0.025)',
                        border: '1px solid rgba(255,255,255,0.07)',
                        borderRadius: '10px',
                        overflow: 'hidden',
                      }}>
                        {/* Top: outcome badge + prophecy */}
                        <div style={{ padding: '14px 16px 12px' }}>
                          <span style={{
                            display: 'inline-block', marginBottom: '10px',
                            fontSize: '9px', fontWeight: 700, letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: style.color, background: style.bg,
                            padding: '2px 7px', borderRadius: '4px',
                          }}>
                            {OUTCOME_LABEL[p.outcome]}
                          </span>

                          <p style={{
                            fontSize: '13px', lineHeight: 1.65,
                            color: 'rgba(255,255,255,0.88)',
                            fontStyle: 'italic', marginBottom: '4px',
                          }}>
                            "{p.prophecy_text}"
                          </p>
                          <p style={{ fontSize: '11px', color: 'var(--muted-500)' }}>
                            {p.prophecy_reference}
                          </p>
                        </div>

                        {/* Bottom: fulfilment */}
                        <div style={{
                          padding: '12px 16px 14px',
                          borderTop: '1px solid rgba(255,255,255,0.05)',
                          background: 'rgba(0,0,0,0.15)',
                        }}>
                          <p style={{
                            fontSize: '10px', fontWeight: 700, letterSpacing: '0.07em',
                            textTransform: 'uppercase', color: 'var(--muted-500)',
                            marginBottom: '6px',
                          }}>
                            Fulfilment
                          </p>
                          <p style={{
                            fontSize: '13px', lineHeight: 1.6,
                            color: 'rgba(255,255,255,0.65)',
                            marginBottom: '8px',
                          }}>
                            {p.fulfillment_text}
                          </p>

                          <div style={{
                            display: 'flex', alignItems: 'center',
                            justifyContent: 'space-between', flexWrap: 'wrap', gap: '6px',
                          }}>
                            <span style={{ fontSize: '11px', color: 'var(--muted-500)' }}>
                              {p.fulfillment_reference}
                            </span>

                            {p.fulfillment_book_slug && p.fulfillment_chapter && (
                              chapterRead ? (
                                <span style={{
                                  fontSize: '11px', fontWeight: 600,
                                  color: 'rgba(52,211,153,0.85)',
                                  display: 'flex', alignItems: 'center', gap: '4px',
                                }}>
                                  ✓ You&apos;ve read this chapter
                                </span>
                              ) : (
                                <Link
                                  href={`/study/${p.fulfillment_book_slug}/${p.fulfillment_chapter}`}
                                  style={{
                                    fontSize: '11px', fontWeight: 600,
                                    color: 'var(--gold-400)',
                                    textDecoration: 'none',
                                  }}
                                >
                                  Read the chapter →
                                </Link>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
