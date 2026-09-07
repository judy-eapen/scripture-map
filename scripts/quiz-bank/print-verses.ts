// Print the stored RSV verses for a chapter (what every quiz question must be anchored to).
// Run: npx tsx scripts/quiz-bank/print-verses.ts "1 Kings" 2
import * as fs from 'fs';
import * as path from 'path';
import { createClient } from '@supabase/supabase-js';
(function loadEnvLocal() {
  const p = path.resolve(process.cwd(), '.env.local');
  for (const line of fs.readFileSync(p, 'utf-8').split('\n')) {
    const t = line.trim(); if (!t || t.startsWith('#')) continue;
    const i = t.indexOf('='); if (i === -1) continue;
    const k = t.slice(0, i).trim(), v = t.slice(i + 1).trim(); if (!process.env[k]) process.env[k] = v;
  }
})();
const [book, ch] = [process.argv[2], Number(process.argv[3])];
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
const { data: b } = await sb.from('books').select('id').eq('name', book).single();
const { data: c } = await sb.from('chapters').select('verses').eq('book_id', b!.id).eq('chapter_number', ch).single();
const verses = c!.verses as Array<{ verse_number: number; text: string }>;
console.log(`${book} ${ch} — ${verses.length} verses (RSV)\n`);
for (const v of verses) console.log(`${v.verse_number}. ${v.text}`);
