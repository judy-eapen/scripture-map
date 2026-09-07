// Re-parse the RSV Word documents robustly and repair chapters.verses.
// Handles: "[33]" alone on a line with text on following line(s); verses spanning
// several lines; "____" separator lines. Dry by default; --apply writes.
// Run: npx tsx scripts/fix-rsv-verses.ts [--apply]
import * as fs from 'fs';
import * as path from 'path';
import mammoth from 'mammoth';
import { createClient } from '@supabase/supabase-js';

(function loadEnvLocal() {
  const p = path.resolve(process.cwd(), '.env.local');
  for (const line of fs.readFileSync(p, 'utf-8').split('\n')) {
    const t = line.trim(); if (!t || t.startsWith('#')) continue;
    const i = t.indexOf('='); if (i === -1) continue;
    const k = t.slice(0, i).trim(), v = t.slice(i + 1).trim(); if (!process.env[k]) process.env[k] = v;
  }
})();
const apply = process.argv.includes('--apply');
const DOCS: Array<{ path: string; book: '1 Kings' | '2 Kings'; prefix: string }> = [
  { path: '/Users/judydarvin/Desktop/Areas/Personal/Faith/STG/1 Kings RSV (1).docx', book: '1 Kings', prefix: '1Kgs' },
  { path: '/Users/judydarvin/Desktop/Areas/Personal/Faith/STG/2 Kings RSV (1).docx', book: '2 Kings', prefix: '2Kgs' },
];
const EXPECTED: Record<string, number[]> = {
  '1 Kings': [53,46,28,34,18,38,51,66,28,29,43,33,34,31,34,34,24,46,21,43,29,53],
  '2 Kings': [18,25,27,44,27,33,20,29,37,36,21,21,25,29,38,20,41,37,37,21,26,20,37,20,30],
};
type Verse = { verse_number: number; text: string };

async function parse(doc: typeof DOCS[number]): Promise<Map<number, Verse[]>> {
  const raw = (await mammoth.extractRawText({ path: doc.path })).value;
  const lines = raw.split('\n').map(l => l.trim()).filter(l => l && !/^_{5,}$/.test(l));
  const chapters = new Map<number, Verse[]>();
  let ch: number | null = null;
  let cur: Verse | null = null;
  for (const line of lines) {
    const cm = line.match(new RegExp(`^${doc.prefix}\\.(\\d+)$`));
    if (cm) { ch = +cm[1]; chapters.set(ch, []); cur = null; continue; }
    if (ch === null) continue;
    const vm = line.match(/^\[(\d+)\]\s*(.*)$/);
    if (vm) {
      cur = { verse_number: +vm[1], text: vm[2].trim() };
      chapters.get(ch)!.push(cur);
    } else if (cur) {
      cur.text = (cur.text + ' ' + line).trim(); // continuation line
    }
  }
  return chapters;
}

async function main() {
  const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
  const { data: books } = await sb.from('books').select('id, name');
  const { data: dbChapters } = await sb.from('chapters').select('id, book_id, chapter_number, verses');

  // backup first
  const backupPath = path.resolve(process.env.BACKUP_DIR ?? '.', `verses-backup-${new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-')}.json`);
  fs.writeFileSync(backupPath, JSON.stringify(dbChapters, null, 1));
  console.log('backup written:', backupPath);

  let changed = 0, problems = 0;
  for (const doc of DOCS) {
    const parsed = await parse(doc);
    const bookId = books!.find(b => b.name === doc.book)!.id;
    for (const [chNum, verses] of [...parsed.entries()].sort((a, b) => a[0] - b[0])) {
      const expected = EXPECTED[doc.book][chNum - 1];
      const nums = verses.map(v => v.verse_number);
      const missing = Array.from({ length: expected }, (_, i) => i + 1).filter(n => !nums.includes(n));
      const empty = verses.filter(v => !v.text).map(v => v.verse_number);
      const dups = nums.filter((n, i) => nums.indexOf(n) !== i);
      if (missing.length || empty.length || dups.length || verses.length !== expected) {
        problems++; console.log(`✗ ${doc.book} ${chNum}: parsed ${verses.length}/${expected}; missing ${missing} empty ${empty} dups ${dups}`);
      }
      const row = dbChapters!.find(c => c.book_id === bookId && c.chapter_number === chNum);
      if (!row) { console.log(`✗ ${doc.book} ${chNum}: no DB row`); problems++; continue; }
      const dbVerses = row.verses as Verse[];
      const dbMap = new Map(dbVerses.map(v => [v.verse_number, v.text]));
      const added = verses.filter(v => !dbMap.has(v.verse_number)).map(v => v.verse_number);
      const lengthened = verses.filter(v => dbMap.has(v.verse_number) && dbMap.get(v.verse_number) !== v.text && v.text.startsWith(dbMap.get(v.verse_number)!)).map(v => v.verse_number);
      const differ = verses.filter(v => dbMap.has(v.verse_number) && dbMap.get(v.verse_number) !== v.text && !v.text.startsWith(dbMap.get(v.verse_number)!)).map(v => v.verse_number);
      if (added.length || lengthened.length || differ.length) {
        changed++;
        console.log(`${doc.book} ${chNum}: +${added.length} added ${JSON.stringify(added)}, ${lengthened.length} completed ${JSON.stringify(lengthened)}${differ.length ? `, ${differ.length} DIFFER ${JSON.stringify(differ)}` : ''}`);
        for (const n of differ) console.log(`    v${n}\n      db : ${dbMap.get(n)!.slice(0, 120)}\n      doc: ${verses.find(v => v.verse_number === n)!.text.slice(0, 120)}`);
        if (apply && !differ.length) {
          const { error } = await sb.from('chapters').update({ verses }).eq('id', row.id);
          console.log(error ? `    ✗ update failed: ${error.message}` : '    ✓ updated');
        } else if (apply) {
          console.log('    skipped (has DIFFER rows — review first)');
        }
      }
    }
  }
  console.log(`\n${changed} chapter(s) need changes, ${problems} parse problem(s). ${apply ? 'Applied.' : 'Dry run — pass --apply to write.'}`);
}
main().catch(e => { console.error(e); process.exit(1); });
