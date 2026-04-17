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
