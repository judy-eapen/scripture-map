'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import type { VerseNote } from '@/lib/types';

export async function saveVerseNote(
  chapterId: string,
  bookSlug: string,
  chapterNum: number,
  verseNumber: number,
  highlighted: boolean,
  noteText: string | null
): Promise<void> {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;

  const trimmed = noteText?.trim() || null;

  await supabase
    .from('verse_notes')
    .upsert(
      { user_id: user.id, chapter_id: chapterId, verse_number: verseNumber, highlighted, note_text: trimmed, updated_at: new Date().toISOString() },
      { onConflict: 'user_id,chapter_id,verse_number' }
    );

  revalidatePath(`/study/${bookSlug}/${chapterNum}`);
  revalidatePath('/notes');
}

export async function deleteVerseNote(
  chapterId: string,
  bookSlug: string,
  chapterNum: number,
  verseNumber: number
): Promise<void> {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;

  await supabase
    .from('verse_notes')
    .delete()
    .eq('user_id', user.id)
    .eq('chapter_id', chapterId)
    .eq('verse_number', verseNumber);

  revalidatePath(`/study/${bookSlug}/${chapterNum}`);
  revalidatePath('/notes');
}

export type NoteWithContext = {
  id: string;
  verse_number: number;
  note_text: string;
  created_at: string;
  chapter_id: string;
  chapter_number: number;
  book_name: string;
  book_slug: string;
};

export async function getAllNotes(): Promise<NoteWithContext[]> {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return [];

  // Step 1: fetch notes with chapter info
  const { data: notesData, error: notesError } = await supabase
    .from('verse_notes')
    .select('id, verse_number, note_text, created_at, chapter_id')
    .eq('user_id', user.id)
    .not('note_text', 'is', null)
    .neq('note_text', '');

  if (notesError) {
    console.error('getAllNotes notes error:', notesError);
    return [];
  }
  if (!notesData || notesData.length === 0) return [];

  // Step 2: fetch chapter + book info for the chapter ids we have
  const chapterIds = [...new Set(notesData.map(n => n.chapter_id))];
  const { data: chaptersData, error: chaptersError } = await supabase
    .from('chapters')
    .select('id, chapter_number, books(name)')
    .in('id', chapterIds);

  if (chaptersError) {
    console.error('getAllNotes chapters error:', chaptersError);
    return [];
  }

  const chapterMap = new Map<string, { chapter_number: number; book_name: string }>();
  for (const ch of (chaptersData ?? []) as any[]) {
    if (ch.books) {
      chapterMap.set(ch.id, { chapter_number: ch.chapter_number, book_name: ch.books.name });
    }
  }

  const notes: NoteWithContext[] = notesData
    .filter(n => chapterMap.has(n.chapter_id))
    .map(n => {
      const chapter = chapterMap.get(n.chapter_id)!;
      return {
        id: n.id,
        verse_number: n.verse_number,
        note_text: n.note_text,
        created_at: n.created_at,
        chapter_id: n.chapter_id,
        chapter_number: chapter.chapter_number,
        book_name: chapter.book_name,
        book_slug: chapter.book_name.toLowerCase().replace(' ', '-'),
      };
    });

  notes.sort((a, b) => {
    const bookOrder = (n: NoteWithContext) => n.book_name === '1 Kings' ? 0 : 1;
    if (bookOrder(a) !== bookOrder(b)) return bookOrder(a) - bookOrder(b);
    if (a.chapter_number !== b.chapter_number) return a.chapter_number - b.chapter_number;
    return a.verse_number - b.verse_number;
  });

  return notes;
}

export async function getChapterNotes(chapterId: string): Promise<VerseNote[]> {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return [];

  const { data } = await supabase
    .from('verse_notes')
    .select('id, chapter_id, verse_number, note_text, created_at, updated_at')
    .eq('user_id', user.id)
    .eq('chapter_id', chapterId)
    .order('verse_number');

  return (data ?? []) as VerseNote[];
}
