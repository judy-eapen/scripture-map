// Creates a separate "Jehoiada, father of Benaiah" person and re-links
// 1 Kings 1, 2, 4 away from the priest Jehoiada (who lived ~100 years later).

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

const PRIEST_JEHOIADA_ID = '25f66cb4-48b7-445b-936a-414067a9d285';

async function main() {
  // 1. Check if we already created the "father of Benaiah" version
  const { data: already } = await sb
    .from('people')
    .select('id')
    .eq('bio', "Father of Benaiah, one of David's chief military commanders.")
    .maybeSingle();

  let personId: string;

  if (already) {
    personId = already.id;
    console.log('Father-of-Benaiah Jehoiada already exists:', personId);
  } else {
    const { data: inserted, error } = await sb
      .from('people')
      .insert({
        name: 'Jehoiada',
        type: 'official',
        kingdom: 'south',
        verdict: null,
        bio: "Father of Benaiah, one of David's chief military commanders. A man of great valour from Kabzeel in Judah, described as having done mighty deeds including killing two lion-like heroes of Moab and a lion in a pit on a snowy day. He commanded David's elite bodyguard. He is a different person from Jehoiada the priest, who lived roughly a century later in the reign of Joash.",
        alt_names: ['Jehoiada the father of Benaiah'],
        contemporary_events: 'Served under David and Solomon, ~1010–930 BC',
      })
      .select('id')
      .single();

    if (error || !inserted) {
      console.error('Insert failed:', error?.message);
      process.exit(1);
    }
    personId = inserted.id;
    console.log('Created new person:', personId);
  }

  // 2. Re-link 1 Kings 1, 2, 4 to the new person
  const { data: chapters } = await sb
    .from('chapters')
    .select('id, chapter_number, books(name)')
    .in('chapter_number', [1, 2, 4]);

  for (const ch of chapters ?? []) {
    const book = (ch.books as { name: string }).name;
    if (book !== '1 Kings') continue;

    const { data: row } = await sb
      .from('chapter_people')
      .select('id')
      .eq('chapter_id', ch.id)
      .eq('person_id', PRIEST_JEHOIADA_ID)
      .maybeSingle();

    if (!row) {
      console.log(`1 Kings ${ch.chapter_number}: already correct or not linked`);
      continue;
    }

    const { error } = await sb
      .from('chapter_people')
      .update({ person_id: personId })
      .eq('chapter_id', ch.id)
      .eq('person_id', PRIEST_JEHOIADA_ID);

    if (error) {
      console.error(`Failed 1 Kings ${ch.chapter_number}:`, error.message);
    } else {
      console.log(`✓ 1 Kings ${ch.chapter_number} → Jehoiada (father of Benaiah)`);
    }
  }

  console.log('\nDone. Verify with check-jehoiada.ts');
}

main().catch(console.error);
