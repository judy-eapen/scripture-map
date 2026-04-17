// Run: npx tsx scripts/seed-chapter-people-auto.ts
// Auto-links people to chapters by scanning verse text for name matches.

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

// ---------------------------------------------------------------------------
// Name normalization
// ---------------------------------------------------------------------------

// Names that are interchangeable in KJV — each key gets extra terms added
const ALIAS_MAP: Record<string, string[]> = {
  Joash:   ['Joash', 'Jehoash'],
  Jehoash: ['Jehoash', 'Joash'],
  Joram:   ['Joram', 'Jehoram'],
  Jehoram: ['Jehoram', 'Joram'],
};

/**
 * Given a person's name and alt_names, produce the array of search terms to
 * use when scanning verse text and to store as tappable_terms.
 *
 * Rules:
 *  1. Strip trailing " I" or " II" from the name (e.g. "Jeroboam II" → "Jeroboam")
 *  2. If the stripped name has KJV aliases, include them
 *  3. Add any alt_names the person has
 *  4. Deduplicate, preserving order
 */
function buildSearchTerms(name: string, altNames: string[] | null): string[] {
  // Strip " I" or " II" suffix
  const baseName = name.replace(/\s+II?\s*$/, '').trim();

  const terms: string[] = [];

  // Check alias map first (before adding baseName alone)
  if (ALIAS_MAP[baseName]) {
    terms.push(...ALIAS_MAP[baseName]);
  } else {
    terms.push(baseName);
  }

  // Add alt_names (if any), skipping duplicates
  if (altNames) {
    for (const alt of altNames) {
      if (!terms.includes(alt)) terms.push(alt);
    }
  }

  return terms;
}

// ---------------------------------------------------------------------------
// Text matching — word-boundary, case-insensitive
// ---------------------------------------------------------------------------

function termAppearsInText(term: string, text: string): boolean {
  // Escape special regex chars in the term
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`\\b${escaped}\\b`, 'i');
  return re.test(text);
}

function personAppearsInChapter(
  searchTerms: string[],
  chapterText: string
): boolean {
  return searchTerms.some((term) => termAppearsInText(term, chapterText));
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log('=== Auto-seeding chapter_people ===\n');

  // 1. Load people
  const { data: people, error: peopleErr } = await supabase
    .from('people')
    .select('id, name, alt_names, type');
  if (peopleErr) throw peopleErr;
  if (!people || people.length === 0) throw new Error('No people found in DB');
  console.log(`Loaded ${people.length} people.`);

  // 2. Load books
  const { data: books, error: booksErr } = await supabase
    .from('books')
    .select('id, name');
  if (booksErr) throw booksErr;
  const bookNameById = new Map<string, string>();
  for (const b of books ?? []) bookNameById.set(b.id, b.name);

  // 3. Load chapters (with verses)
  const { data: chapters, error: chaptersErr } = await supabase
    .from('chapters')
    .select('id, chapter_number, book_id, verses');
  if (chaptersErr) throw chaptersErr;
  if (!chapters || chapters.length === 0) throw new Error('No chapters found in DB');
  console.log(`Loaded ${chapters.length} chapters.`);

  // 4. Load existing chapter_people rows so we can skip duplicates
  const { data: existingRows, error: existingErr } = await supabase
    .from('chapter_people')
    .select('chapter_id, person_id');
  if (existingErr) throw existingErr;

  const existingSet = new Set<string>(
    (existingRows ?? []).map((r: { chapter_id: string; person_id: string }) =>
      `${r.chapter_id}:${r.person_id}`
    )
  );
  console.log(`Found ${existingSet.size} existing chapter_people rows (will skip these).\n`);

  // 5. Build search terms per person
  const personTerms = people.map((p) => ({
    id: p.id,
    name: p.name,
    searchTerms: buildSearchTerms(p.name, p.alt_names),
  }));

  // 6. Iterate chapters × people
  let inserted = 0;
  let skipped = 0;
  const chaptersHavingPeople = new Set<string>();

  // Pre-populate from existing rows
  for (const r of existingRows ?? []) {
    chaptersHavingPeople.add(r.chapter_id);
  }

  for (const chapter of chapters) {
    const bookName = bookNameById.get(chapter.book_id) ?? 'Unknown';
    const chapterLabel = `${bookName} ${chapter.chapter_number}`;

    // Concatenate all verse texts
    const verses = chapter.verses as { verse_number: number; text: string }[] | null;
    if (!verses || verses.length === 0) {
      // No verse text loaded for this chapter — skip silently
      continue;
    }
    const fullText = verses.map((v) => v.text).join(' ');

    for (const person of personTerms) {
      if (!personAppearsInChapter(person.searchTerms, fullText)) continue;

      const key = `${chapter.id}:${person.id}`;

      if (existingSet.has(key)) {
        console.log(`  SKIP (exists): ${chapterLabel} ← ${person.name}`);
        skipped++;
        continue;
      }

      const { error } = await supabase.from('chapter_people').insert({
        chapter_id: chapter.id,
        person_id: person.id,
        tappable_terms: person.searchTerms,
      });

      if (error) {
        // Handle race-condition duplicates gracefully
        if (error.code === '23505') {
          console.log(`  SKIP (duplicate key): ${chapterLabel} ← ${person.name}`);
          skipped++;
        } else {
          console.error(`  ERROR inserting ${chapterLabel} ← ${person.name}:`, error.message);
        }
      } else {
        console.log(`  INSERT: ${chapterLabel} ← ${person.name} [${person.searchTerms.join(', ')}]`);
        existingSet.add(key);
        chaptersHavingPeople.add(chapter.id);
        inserted++;
      }
    }
  }

  // 7. Summary
  console.log('\n=== Done ===');
  console.log(`Rows inserted:                  ${inserted}`);
  console.log(`Rows skipped (already existed): ${skipped}`);
  console.log(`Chapters now with people:       ${chaptersHavingPeople.size}`);
}

main().catch((err) => {
  console.error('Script failed:', err);
  process.exit(1);
});
