// Run: npx tsx scripts/seed-bible-text.ts
// Fetches KJV verse text for all 47 chapters from bible-api.com (no API key needed)
// and upserts into chapters.verses in Supabase.

import * as fs from 'fs';
import * as path from 'path';
import { createClient } from '@supabase/supabase-js';

function loadEnvLocal() {
  const envPath = path.resolve(process.cwd(), '.env.local');
  if (!fs.existsSync(envPath)) return;
  const lines = fs.readFileSync(envPath, 'utf-8').split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const val = trimmed.slice(eqIdx + 1).trim();
    if (!process.env[key]) process.env[key] = val;
  }
}
loadEnvLocal();

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { persistSession: false } }
);

const CHAPTERS: { book: string; dbBook: string; total: number }[] = [
  { book: '1 kings', dbBook: '1 Kings', total: 22 },
  { book: '2 kings', dbBook: '2 Kings', total: 25 },
];

// Skip chapters already fully seeded (have verse text from seed.ts)
const SKIP_CHAPTERS = new Set(['1 Kings:17', '1 Kings:18', '1 Kings:19']);

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchChapterVerses(
  book: string,
  chapter: number
): Promise<{ verse_number: number; text: string }[]> {
  const ref = encodeURIComponent(`${book} ${chapter}`);
  const url = `https://bible-api.com/${ref}?translation=kjv`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${book} ${chapter}`);

  const data = await res.json() as {
    verses?: { verse: number; text: string }[];
    error?: string;
  };

  if (data.error) throw new Error(data.error);
  if (!data.verses) throw new Error('No verses in response');

  return data.verses.map(v => ({
    verse_number: v.verse,
    text: v.text.replace(/\n/g, ' ').trim(),
  }));
}

async function main() {
  console.log('Seeding Bible text for all 47 chapters...\n');

  for (const { book, dbBook, total } of CHAPTERS) {
    const { data: bookRow } = await supabase
      .from('books')
      .select('id')
      .eq('name', dbBook)
      .single();

    if (!bookRow) {
      console.error(`Book not found: ${dbBook}`);
      continue;
    }

    for (let ch = 1; ch <= total; ch++) {
      const key = `${dbBook}:${ch}`;
      if (SKIP_CHAPTERS.has(key)) {
        console.log(`⊘ Skip ${key} (already seeded)`);
        continue;
      }

      // Fetch chapter from DB to get its ID
      const { data: chapterRow } = await supabase
        .from('chapters')
        .select('id, verses')
        .eq('book_id', bookRow.id)
        .eq('chapter_number', ch)
        .single();

      if (!chapterRow) {
        console.warn(`Chapter not found in DB: ${key}`);
        continue;
      }

      // Skip if already has verses
      const existingVerses = chapterRow.verses as { verse_number: number; text: string }[] | null;
      if (existingVerses && existingVerses.length > 0) {
        console.log(`⊘ Skip ${key} (${existingVerses.length} verses already present)`);
        continue;
      }

      // Fetch from API
      let verses: { verse_number: number; text: string }[];
      try {
        verses = await fetchChapterVerses(book, ch);
      } catch (err) {
        console.error(`✗ Fetch failed for ${key}:`, err);
        await sleep(2000);
        continue;
      }

      // Update chapter in DB
      const { error } = await supabase
        .from('chapters')
        .update({ verses })
        .eq('id', chapterRow.id);

      if (error) {
        console.error(`✗ DB update failed for ${key}:`, error.message);
      } else {
        console.log(`✓ ${key}: ${verses.length} verses`);
      }

      // Rate limit: 1500ms between requests
      await sleep(1500);
    }
  }

  console.log('\nDone!');
}

main().catch(console.error);
