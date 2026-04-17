import * as fs from 'fs';
import { createClient } from '@supabase/supabase-js';

const lines = fs.readFileSync('.env.local', 'utf-8').split('\n');
for (const line of lines) {
  const eq = line.indexOf('=');
  if (eq === -1) continue;
  const k = line.slice(0, eq).trim();
  const v = line.slice(eq + 1).trim();
  if (!process.env[k]) process.env[k] = v;
}

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { persistSession: false } }
);

async function main() {
  const { data: people } = await sb
    .from('people')
    .select('id, name, bio')
    .ilike('name', 'jehoiada%');

  console.log('People named Jehoiada:');
  for (const p of people ?? []) {
    console.log(`  ${p.id}  "${p.name}"`);
    console.log(`  bio: ${p.bio?.slice(0, 100)}...`);

    const { data: links } = await sb
      .from('chapter_people')
      .select('chapter_id, tappable_terms, chapters(chapter_number, books(name))')
      .eq('person_id', p.id);

    for (const l of links ?? []) {
      const ch = l.chapters as { chapter_number: number; books: { name: string } };
      console.log(`    → ${ch?.books?.name} ${ch?.chapter_number}  terms: [${l.tappable_terms}]`);
    }
    console.log();
  }
}

main().catch(console.error);
