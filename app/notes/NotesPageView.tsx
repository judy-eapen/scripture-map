'use client';

import { useState, useTransition } from 'react';
import Link from 'next/link';
import ChapterNav from '@/components/ChapterNav';
import { saveVerseNote, deleteVerseNote } from '@/app/actions/notes';
import type { NavChapter } from '@/lib/types';
import type { NoteWithContext } from '@/app/actions/notes';

type Props = {
  notes: NoteWithContext[];
  navData: { book: string; chapters: NavChapter[] }[];
  isAuthenticated: boolean;
};

type GroupedChapter = {
  chapter_number: number;
  book_slug: string;
  notes: NoteWithContext[];
};

type GroupedBook = {
  book_name: string;
  chapters: GroupedChapter[];
};

function groupNotes(notes: NoteWithContext[]): GroupedBook[] {
  const bookMap = new Map<string, Map<number, NoteWithContext[]>>();
  for (const note of notes) {
    if (!bookMap.has(note.book_name)) bookMap.set(note.book_name, new Map());
    const chapterMap = bookMap.get(note.book_name)!;
    if (!chapterMap.has(note.chapter_number)) chapterMap.set(note.chapter_number, []);
    chapterMap.get(note.chapter_number)!.push(note);
  }
  return Array.from(bookMap.entries()).map(([book_name, chapterMap]) => ({
    book_name,
    chapters: Array.from(chapterMap.entries()).map(([chapter_number, chNotes]) => ({
      chapter_number,
      book_slug: chNotes[0].book_slug,
      notes: chNotes,
    })),
  }));
}

function NoteRow({ note, onSaved, onDeleted }: {
  note: NoteWithContext;
  onSaved: (id: string, text: string) => void;
  onDeleted: (id: string) => void;
}) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(note.note_text);
  const [isPending, startTransition] = useTransition();

  function handleSave() {
    if (!text.trim()) return;
    startTransition(async () => {
      await saveVerseNote(note.chapter_id, note.book_slug, note.chapter_number, note.verse_number, text.trim());
      onSaved(note.id, text.trim());
      setEditing(false);
    });
  }

  function handleDelete() {
    startTransition(async () => {
      await deleteVerseNote(note.chapter_id, note.book_slug, note.chapter_number, note.verse_number);
      onDeleted(note.id);
    });
  }

  function handleCancel() {
    setText(note.note_text);
    setEditing(false);
  }

  return (
    <div className="px-5 py-4 group">
      <div className="flex items-start gap-3">
        <span className="shrink-0 text-xs font-semibold mt-1 w-12" style={{ color: 'var(--gold-400)' }}>
          v. {note.verse_number}
        </span>

        <div className="flex-1 min-w-0">
          {editing ? (
            <div className="flex flex-col gap-2">
              <textarea
                autoFocus
                value={text}
                onChange={e => setText(e.target.value)}
                rows={3}
                className="w-full rounded-xl px-3 py-2.5 text-sm leading-relaxed resize-none outline-none"
                style={{
                  background: 'var(--navy-900)',
                  border: '1px solid rgba(201,168,76,0.3)',
                  color: 'var(--ivory-100)',
                }}
                onKeyDown={e => {
                  if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) handleSave();
                  if (e.key === 'Escape') handleCancel();
                }}
              />
              <div className="flex items-center gap-2">
                <button
                  onClick={handleSave}
                  disabled={!text.trim() || isPending}
                  className="rounded-lg px-3 py-1.5 text-xs font-semibold transition-all"
                  style={{
                    background: text.trim() ? 'var(--gold-400)' : 'rgba(201,168,76,0.2)',
                    color: text.trim() ? 'var(--navy-950)' : 'var(--muted-500)',
                    cursor: text.trim() ? 'pointer' : 'not-allowed',
                  }}>
                  {isPending ? 'Saving…' : 'Save'}
                </button>
                <button
                  onClick={handleDelete}
                  disabled={isPending}
                  className="rounded-lg px-3 py-1.5 text-xs font-medium transition-all"
                  style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', color: 'rgba(239,68,68,0.8)' }}>
                  Delete
                </button>
                <button
                  onClick={handleCancel}
                  className="rounded-lg px-3 py-1.5 text-xs font-medium"
                  style={{ color: 'var(--muted-400)' }}>
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <p
              className="text-sm leading-relaxed cursor-text"
              style={{ color: 'var(--ivory-200)' }}
              onClick={() => setEditing(true)}>
              {note.note_text}
            </p>
          )}
        </div>

        {!editing && (
          <button
            onClick={() => setEditing(true)}
            className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ background: 'rgba(201,168,76,0.1)', color: 'var(--gold-400)' }}
            title="Edit note">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default function NotesPageView({ notes: initialNotes, navData, isAuthenticated }: Props) {
  const [notes, setNotes] = useState<NoteWithContext[]>(initialNotes);

  function handleSaved(id: string, text: string) {
    setNotes(prev => prev.map(n => n.id === id ? { ...n, note_text: text } : n));
  }

  function handleDeleted(id: string) {
    setNotes(prev => prev.filter(n => n.id !== id));
  }

  const grouped = groupNotes(notes);
  const totalChapters = grouped.reduce((sum, b) => sum + b.chapters.length, 0);

  return (
    <div className="flex h-screen overflow-hidden" style={{ background: 'var(--navy-950)' }}>
      <ChapterNav
        navData={navData}
        currentBook="1 Kings"
        currentChapter={0}
        isAuthenticated={isAuthenticated}
      />

      <main className="flex-1 overflow-y-auto">
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '48px 32px 80px' }}>

          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.2)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--gold-400)' }}>
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h1 className="text-2xl font-semibold" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--ivory-100)' }}>
                My Notes
              </h1>
            </div>
            <p className="text-sm" style={{ color: 'var(--muted-400)' }}>
              {notes.length === 0
                ? 'Notes you write on verses will appear here.'
                : `${notes.length} note${notes.length === 1 ? '' : 's'} across ${totalChapters} chapter${totalChapters === 1 ? '' : 's'}`
              }
            </p>
          </div>

          {/* Not signed in */}
          {!isAuthenticated && (
            <div className="rounded-2xl p-8 text-center"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <p className="text-sm mb-4" style={{ color: 'var(--muted-400)' }}>
                Sign in to write and save verse notes.
              </p>
              <Link href="/login"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium"
                style={{ background: 'var(--gold-400)', color: 'var(--navy-950)' }}>
                Sign in
              </Link>
            </div>
          )}

          {/* Empty state */}
          {isAuthenticated && notes.length === 0 && (
            <div className="rounded-2xl p-8 text-center"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <p className="text-sm mb-2" style={{ color: 'var(--ivory-200)' }}>No notes yet</p>
              <p className="text-xs mb-5" style={{ color: 'var(--muted-400)' }}>
                Tap any verse number while reading to add a note.
              </p>
              <Link href="/study/1-kings/1"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium"
                style={{ background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.2)', color: 'var(--gold-300)' }}>
                Start reading
              </Link>
            </div>
          )}

          {/* Notes grouped by book + chapter */}
          {isAuthenticated && grouped.length > 0 && (
            <div className="space-y-8">
              {grouped.map(book => (
                <div key={book.book_name}>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-3"
                    style={{ color: 'var(--gold-400)' }}>
                    {book.book_name}
                  </p>

                  <div className="space-y-3">
                    {book.chapters.map(chapter => (
                      <div key={chapter.chapter_number} className="rounded-2xl overflow-hidden"
                        style={{ border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)' }}>

                        {/* Chapter header */}
                        <Link
                          href={`/study/${chapter.book_slug}/${chapter.chapter_number}`}
                          className="flex items-center justify-between px-5 py-3 transition-colors"
                          style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,0.04)'; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}>
                          <span className="text-sm font-semibold" style={{ color: 'var(--ivory-100)' }}>
                            Chapter {chapter.chapter_number}
                          </span>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--muted-500)' }}>
                            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </Link>

                        {/* Verse notes */}
                        <div className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
                          {chapter.notes.map(note => (
                            <NoteRow
                              key={note.id}
                              note={note}
                              onSaved={handleSaved}
                              onDeleted={handleDeleted}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
