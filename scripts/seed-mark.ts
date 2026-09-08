// Run safely first: node --import tsx scripts/seed-mark.ts --dry
// Production write: node --import tsx scripts/seed-mark.ts --write
import fs from 'node:fs';
import path from 'node:path';
import { createClient } from '@supabase/supabase-js';
import source from '../data/mark-source.json';
import { johnTheBaptistStudyNote, markIntroduction } from '../data/mark-orthodox-notes';

for (const line of fs.readFileSync(path.resolve('.env.local'), 'utf8').split('\n')) {
  const t = line.trim(); if (!t || t.startsWith('#')) continue;
  const i = t.indexOf('='); if (i > 0) process.env[t.slice(0, i).trim()] ||= t.slice(i + 1).trim();
}

const write = process.argv.includes('--write');
if (!write) {
  console.log(`dry run: Mark has ${source.chapters.length} chapters and ${source.chapters.reduce((n, c) => n + c.verses.length, 0)} verses; nothing written`);
  process.exit(0);
}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) throw new Error('Missing Supabase environment variables');
const sb = createClient(url, key, { auth: { persistSession: false } });

async function main() {
  const { data: book, error: bookError } = await sb.from('books').upsert({ name: 'Mark', total_chapters: 16, testament: 'new' }, { onConflict: 'name' }).select('id').single();
  if (bookError || !book) throw bookError ?? new Error('Could not upsert Mark');

  for (const chapter of source.chapters) {
    const { data: row, error } = await sb.from('chapters').upsert({
      book_id: book.id,
      chapter_number: chapter.chapter,
      summary: chapter.summary,
      verses: chapter.verses,
    }, { onConflict: 'book_id,chapter_number' }).select('id').single();
    if (error || !row) throw error ?? new Error(`Could not upsert Mark ${chapter.chapter}`);
    if (chapter.chapter === 1) {
      const passages = [
        {
          chapter_id: row.id,
          verse_start: 1,
          verse_end: 1,
          topic: 'Orthodox Study Bible: Introduction',
          plain_language: `${markIntroduction.author} ${markIntroduction.date}`,
          theological_context: `${markIntroduction.majorTheme} ${markIntroduction.subthemes.join(' ')} ${markIntroduction.background} ${markIntroduction.endingNote}`,
        },
        {
          chapter_id: row.id,
          verse_start: johnTheBaptistStudyNote.verseStart,
          verse_end: johnTheBaptistStudyNote.verseEnd,
          topic: `Orthodox Study Bible: ${johnTheBaptistStudyNote.title}`,
          plain_language: johnTheBaptistStudyNote.plainLanguage,
          theological_context: johnTheBaptistStudyNote.theologicalContext,
        },
      ];
      for (const passage of passages) {
        const { data: existing, error: readError } = await sb
          .from('difficult_passages')
          .select('id')
          .eq('chapter_id', row.id)
          .eq('topic', passage.topic)
          .maybeSingle();
        if (readError) throw readError;
        const result = existing
          ? await sb.from('difficult_passages').update(passage).eq('id', existing.id)
          : await sb.from('difficult_passages').insert(passage);
        if (result.error) throw result.error;
      }
    }
    console.log(`seeded Mark ${chapter.chapter}`);
  }
}

main().catch(error => { console.error(error); process.exit(1); });
