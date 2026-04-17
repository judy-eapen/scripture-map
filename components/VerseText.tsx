'use client';

import { useState, useRef, useEffect } from 'react';
import type { VerseEntry, TappablePerson, TappablePlace, Person, Place, DifficultPassage, VerseNote } from '@/lib/types';

type Segment =
  | { type: 'plain'; text: string }
  | { type: 'person'; text: string; person: Person }
  | { type: 'place'; text: string; place: Place };

function escapeRegex(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function buildSegments(
  text: string,
  people: TappablePerson[],
  places: TappablePlace[]
): Segment[] {
  type Match = {
    start: number;
    end: number;
    term: string;
    entityType: 'person' | 'place';
    person?: Person;
    place?: Place;
  };

  const matches: Match[] = [];

  people.forEach(({ person, tappable_terms }) => {
    tappable_terms.forEach(term => {
      const regex = new RegExp(`\\b${escapeRegex(term)}\\b`, 'gi');
      let m;
      while ((m = regex.exec(text)) !== null) {
        matches.push({ start: m.index, end: m.index + m[0].length, term: m[0], entityType: 'person', person });
      }
    });
  });

  places.forEach(({ place, tappable_terms }) => {
    tappable_terms.forEach(term => {
      const regex = new RegExp(`\\b${escapeRegex(term)}\\b`, 'gi');
      let m;
      while ((m = regex.exec(text)) !== null) {
        matches.push({ start: m.index, end: m.index + m[0].length, term: m[0], entityType: 'place', place });
      }
    });
  });

  matches.sort((a, b) => {
    if (a.start !== b.start) return a.start - b.start;
    if (a.end !== b.end) return b.end - a.end;
    return a.entityType === 'person' ? -1 : 1;
  });

  const filtered: Match[] = [];
  let lastEnd = 0;
  for (const m of matches) {
    if (m.start >= lastEnd) {
      filtered.push(m);
      lastEnd = m.end;
    }
  }

  const segments: Segment[] = [];
  let cursor = 0;
  for (const m of filtered) {
    if (m.start > cursor) {
      segments.push({ type: 'plain', text: text.slice(cursor, m.start) });
    }
    if (m.entityType === 'person' && m.person) {
      segments.push({ type: 'person', text: m.term, person: m.person });
    } else if (m.entityType === 'place' && m.place) {
      segments.push({ type: 'place', text: m.term, place: m.place });
    }
    cursor = m.end;
  }
  if (cursor < text.length) {
    segments.push({ type: 'plain', text: text.slice(cursor) });
  }

  return segments;
}

function DifficultPassageCallout({ passage }: { passage: DifficultPassage }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-2 mb-1">
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium transition-all w-full text-left"
        style={{
          background: open ? 'rgba(168,85,247,0.1)' : 'rgba(168,85,247,0.05)',
          border: `1px solid ${open ? 'rgba(168,85,247,0.3)' : 'rgba(168,85,247,0.15)'}`,
          color: 'rgba(192,132,252,0.9)',
        }}>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span>{passage.topic}</span>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="ml-auto"
          style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
          <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
      {open && (
        <div className="mt-1.5 rounded-xl px-4 py-3 space-y-2.5"
          style={{ background: 'rgba(168,85,247,0.06)', border: '1px solid rgba(168,85,247,0.12)' }}>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-1"
              style={{ color: 'rgba(192,132,252,0.7)' }}>Plain language</p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--ivory-200)', lineHeight: '1.8' }}>
              {passage.plain_language}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-1"
              style={{ color: 'rgba(192,132,252,0.7)' }}>Why it matters</p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--ivory-200)', lineHeight: '1.8' }}>
              {passage.theological_context}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

type NoteEditorProps = {
  verseNumber: number;
  note: VerseNote | undefined;
  onSave: (highlighted: boolean, noteText: string | null) => Promise<void>;
  onDelete: () => Promise<void>;
  onClose: () => void;
};

function NoteEditor({ verseNumber, note, onSave, onDelete, onClose }: NoteEditorProps) {
  const [highlighted, setHighlighted] = useState(note?.highlighted ?? false);
  const [text, setText] = useState(note?.note_text ?? '');
  const [saving, setSaving] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  const hasContent = highlighted || text.trim().length > 0;
  const isDirty = highlighted !== (note?.highlighted ?? false) || text !== (note?.note_text ?? '');

  const handleSave = async () => {
    if (!hasContent) return;
    setSaving(true);
    await onSave(highlighted, text.trim() || null);
    setSaving(false);
    onClose();
  };

  const handleRemove = async () => {
    setSaving(true);
    await onDelete();
    setSaving(false);
    onClose();
  };

  return (
    <div className="mt-2 rounded-xl overflow-hidden"
      style={{ border: '1px solid rgba(201,168,76,0.25)', background: 'rgba(201,168,76,0.04)' }}>
      <div className="px-4 pt-3 pb-2 flex items-center justify-between"
        style={{ borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
        <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--gold-400)' }}>
          Verse {verseNumber}
        </span>
        <button onClick={onClose} className="w-6 h-6 flex items-center justify-center rounded"
          style={{ color: 'var(--muted-500)' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div className="px-4 py-3 space-y-3">
        {/* Highlight toggle */}
        <button
          onClick={() => setHighlighted(h => !h)}
          className="flex items-center gap-2.5 rounded-lg px-3 py-2 w-full text-left transition-all text-sm"
          style={{
            background: highlighted ? 'rgba(201,168,76,0.12)' : 'rgba(255,255,255,0.04)',
            border: `1px solid ${highlighted ? 'rgba(201,168,76,0.35)' : 'rgba(255,255,255,0.08)'}`,
            color: highlighted ? 'var(--gold-300)' : 'var(--muted-400)',
          }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill={highlighted ? 'currentColor' : 'none'}>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Highlight verse
        </button>

        {/* Note textarea */}
        <textarea
          ref={textareaRef}
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Add a note…"
          rows={3}
          className="w-full rounded-lg px-3 py-2.5 text-sm resize-none outline-none"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            color: 'var(--ivory-200)',
            lineHeight: '1.6',
          }}
        />

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleSave}
            disabled={!hasContent || !isDirty || saving}
            className="flex-1 rounded-lg px-3 py-2 text-xs font-semibold transition-all"
            style={{
              background: hasContent && isDirty ? 'rgba(201,168,76,0.15)' : 'rgba(255,255,255,0.04)',
              border: `1px solid ${hasContent && isDirty ? 'rgba(201,168,76,0.3)' : 'rgba(255,255,255,0.06)'}`,
              color: hasContent && isDirty ? 'var(--gold-300)' : 'var(--muted-500)',
              cursor: hasContent && isDirty ? 'pointer' : 'not-allowed',
            }}>
            {saving ? 'Saving…' : 'Save'}
          </button>
          {note && (
            <button
              onClick={handleRemove}
              disabled={saving}
              className="rounded-lg px-3 py-2 text-xs font-medium transition-all"
              style={{
                background: 'rgba(239,68,68,0.06)',
                border: '1px solid rgba(239,68,68,0.15)',
                color: 'rgba(248,113,113,0.8)',
              }}>
              Remove
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

type Props = {
  verses: VerseEntry[];
  people: TappablePerson[];
  places: TappablePlace[];
  onPersonClick: (person: Person) => void;
  onPlaceClick: (place: Place) => void;
  activePersonId?: string;
  activePlaceId?: string;
  difficultPassages?: DifficultPassage[];
  notes?: VerseNote[];
  isAuthenticated?: boolean;
  onSaveNote?: (verseNumber: number, highlighted: boolean, noteText: string | null) => Promise<void>;
  onDeleteNote?: (verseNumber: number) => Promise<void>;
};

export default function VerseText({
  verses, people, places, onPersonClick, onPlaceClick, activePersonId, activePlaceId,
  difficultPassages = [], notes = [], isAuthenticated = false, onSaveNote, onDeleteNote,
}: Props) {
  const [activeNoteVerse, setActiveNoteVerse] = useState<number | null>(null);

  const noteMap = new Map(notes.map(n => [n.verse_number, n]));

  return (
    <div className="verse-text space-y-4">
      {verses.map(verse => {
        const segments = buildSegments(verse.text, people, places);
        const callouts = difficultPassages.filter(p => p.verse_start === verse.verse_number);
        const note = noteMap.get(verse.verse_number);
        const isHighlighted = note?.highlighted ?? false;
        const hasNote = !!note?.note_text;
        const noteOpen = activeNoteVerse === verse.verse_number;

        return (
          <div key={verse.verse_number}
            className="rounded-lg transition-colors"
            style={{
              background: isHighlighted ? 'rgba(201,168,76,0.06)' : 'transparent',
              borderLeft: isHighlighted ? '2px solid rgba(201,168,76,0.4)' : '2px solid transparent',
              paddingLeft: isHighlighted ? '10px' : '0',
              marginLeft: isHighlighted ? '-12px' : '0',
            }}>
            <p className="flex gap-3 leading-relaxed">
              {/* Verse number — tappable for authenticated users */}
              {isAuthenticated ? (
                <button
                  onClick={() => setActiveNoteVerse(n => n === verse.verse_number ? null : verse.verse_number)}
                  className="shrink-0 text-xs font-semibold mt-[5px] w-5 text-right select-none relative group"
                  style={{ color: noteOpen ? 'var(--gold-300)' : isHighlighted ? 'var(--gold-400)' : 'var(--gold-500)', fontVariantNumeric: 'tabular-nums' }}
                  title="Add highlight or note">
                  {verse.verse_number}
                  {hasNote && !noteOpen && (
                    <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full"
                      style={{ background: 'var(--gold-400)' }} />
                  )}
                </button>
              ) : (
                <span
                  className="shrink-0 text-xs font-semibold mt-[5px] w-5 text-right select-none"
                  style={{ color: 'var(--gold-500)', fontVariantNumeric: 'tabular-nums' }}>
                  {verse.verse_number}
                </span>
              )}

              {/* Verse text */}
              <span>
                {segments.map((seg, i) => {
                  if (seg.type === 'plain') {
                    return <span key={i}>{seg.text}</span>;
                  }
                  if (seg.type === 'person') {
                    const isActive = activePersonId === seg.person.id;
                    return (
                      <button
                        key={i}
                        onClick={() => onPersonClick(seg.person)}
                        className="tappable-term inline"
                        style={{
                          background: isActive ? 'rgba(201,168,76,0.18)' : undefined,
                          color: isActive ? 'var(--gold-200)' : undefined,
                          fontWeight: isActive ? '500' : undefined,
                        }}>
                        {seg.text}
                      </button>
                    );
                  }
                  if (seg.type === 'place') {
                    const isActive = activePlaceId === seg.place.id;
                    return (
                      <button
                        key={i}
                        onClick={() => onPlaceClick(seg.place)}
                        className="inline"
                        style={{
                          cursor: 'pointer',
                          borderBottom: '1px dashed var(--kingdom-north)',
                          color: isActive ? 'var(--kingdom-north)' : 'rgba(96,165,250,0.85)',
                          background: isActive ? 'rgba(96,165,250,0.1)' : undefined,
                          paddingBottom: '1px',
                          transition: 'background-color 0.15s, color 0.15s',
                        }}
                        onMouseEnter={e => {
                          (e.currentTarget as HTMLElement).style.background = 'rgba(96,165,250,0.12)';
                          (e.currentTarget as HTMLElement).style.color = 'var(--kingdom-north)';
                        }}
                        onMouseLeave={e => {
                          if (!isActive) {
                            (e.currentTarget as HTMLElement).style.background = 'transparent';
                            (e.currentTarget as HTMLElement).style.color = 'rgba(96,165,250,0.85)';
                          }
                        }}>
                        {seg.text}
                      </button>
                    );
                  }
                })}
              </span>
            </p>

            {/* Inline note display (when not editing) */}
            {hasNote && !noteOpen && (
              <div className="mt-1.5 ml-8 flex items-start gap-2">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0"
                  style={{ color: 'var(--gold-500)' }}>
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-xs leading-relaxed italic" style={{ color: 'var(--gold-400)' }}>
                  {note!.note_text}
                </p>
              </div>
            )}

            {/* Inline note editor */}
            {noteOpen && onSaveNote && onDeleteNote && (
              <div className="ml-8">
                <NoteEditor
                  verseNumber={verse.verse_number}
                  note={note}
                  onSave={(h, t) => onSaveNote(verse.verse_number, h, t)}
                  onDelete={() => onDeleteNote(verse.verse_number)}
                  onClose={() => setActiveNoteVerse(null)}
                />
              </div>
            )}

            {callouts.map(p => (
              <DifficultPassageCallout key={p.id} passage={p} />
            ))}
          </div>
        );
      })}
    </div>
  );
}
