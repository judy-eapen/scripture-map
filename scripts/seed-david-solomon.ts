// Run: npx tsx scripts/seed-david-solomon.ts
// Adds David, Solomon, Adonijah, and Bathsheba to people + genealogy_nodes + edges
// Safe to re-run: skips existing records.

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

async function upsertPerson(p: {
  name: string; type: string; kingdom?: string; verdict?: string;
  reign_start_bc?: number; reign_end_bc?: number; dates_approximate?: boolean;
  bio: string; is_queen?: boolean;
}): Promise<string> {
  // Check if already exists
  const { data: existing } = await supabase
    .from('people')
    .select('id')
    .eq('name', p.name)
    .maybeSingle();
  if (existing) {
    console.log(`  Already exists: ${p.name} (${existing.id})`);
    return existing.id;
  }
  const { data, error } = await supabase.from('people').insert(p).select('id').single();
  if (error) throw new Error(`Failed to insert person ${p.name}: ${error.message}`);
  console.log(`  Inserted person: ${p.name} (${data.id})`);
  return data.id;
}

async function upsertGenealogyNode(personId: string, name: string, dynasty: string, dynastyColor: string, notes: string): Promise<string> {
  const { data: existing } = await supabase
    .from('genealogy_nodes')
    .select('id')
    .eq('person_id', personId)
    .maybeSingle();
  if (existing) {
    console.log(`  Already has node: ${name} (${existing.id})`);
    return existing.id;
  }
  const { data, error } = await supabase
    .from('genealogy_nodes')
    .insert({ person_id: personId, dynasty, dynasty_color: dynastyColor, notes })
    .select('id').single();
  if (error) throw new Error(`Failed to insert node for ${name}: ${error.message}`);
  console.log(`  Inserted node: ${name} (${data.id})`);
  return data.id;
}

async function upsertEdge(parentNodeId: string, childNodeId: string, relationshipType: string, notes?: string) {
  const { data: existing } = await supabase
    .from('genealogy_edges')
    .select('id')
    .eq('parent_node_id', parentNodeId)
    .eq('child_node_id', childNodeId)
    .eq('relationship_type', relationshipType)
    .maybeSingle();
  if (existing) {
    console.log(`  Edge already exists: ${relationshipType}`);
    return;
  }
  const { error } = await supabase
    .from('genealogy_edges')
    .insert({ parent_node_id: parentNodeId, child_node_id: childNodeId, relationship_type: relationshipType, notes });
  if (error) throw new Error(`Failed to insert edge: ${error.message}`);
  console.log(`  Inserted edge: ${relationshipType}`);
}

async function main() {
  console.log('\n=== Seeding David, Solomon, Adonijah, Bathsheba ===\n');

  // --- People ---
  console.log('Inserting people...');
  const davidId = await upsertPerson({
    name: 'David',
    type: 'king',
    kingdom: 'south',
    verdict: 'good',
    reign_start_bc: -1010,
    reign_end_bc: -970,
    dates_approximate: true,
    bio: 'Israel\'s greatest king and the standard by which all subsequent kings were judged. A man after God\'s own heart who unified Israel and established Jerusalem as his capital. Despite moral failures, he remained devoted to God. The Davidic covenant promised his dynasty would endure forever.',
  });

  const solomonId = await upsertPerson({
    name: 'Solomon',
    type: 'king',
    kingdom: 'south',
    verdict: 'mixed',
    reign_start_bc: -970,
    reign_end_bc: -931,
    dates_approximate: true,
    bio: 'Son of David and Bathsheba, Solomon built the First Temple in Jerusalem and was renowned for his wisdom. His reign began with devotion to God but ended in apostasy as his many foreign wives led him to worship other gods. His oppressive taxation split the kingdom upon his death.',
  });

  const adonijahId = await upsertPerson({
    name: 'Adonijah',
    type: 'other',
    kingdom: 'south',
    bio: 'David\'s eldest surviving son who attempted to seize the throne before David\'s death, rallying support from Joab and Abiathar the priest. His bid failed when Nathan the prophet and Bathsheba secured Solomon\'s coronation. Solomon spared him initially but later had him executed when he asked for Abishag as wife—seen as another bid for the throne.',
  });

  const bathshebaId = await upsertPerson({
    name: 'Bathsheba',
    type: 'official',
    kingdom: 'south',
    is_queen: true,
    bio: 'Wife of David and mother of Solomon. Originally the wife of Uriah the Hittite, David\'s affair with her and the arranged death of Uriah was his gravest sin. She became Queen Mother under Solomon and played a decisive role in securing Solomon\'s succession to the throne of David.',
  });

  // --- Genealogy nodes ---
  console.log('\nInserting genealogy nodes...');
  const davidNodeId = await upsertGenealogyNode(davidId, 'David', 'David', '#C9A84C', 'Founder of the Davidic dynasty; the standard by which all kings of Judah were measured');
  const solomonNodeId = await upsertGenealogyNode(solomonId, 'Solomon', 'David', '#C9A84C', 'Built the First Temple; his apostasy split the kingdom after his death');
  const adonijahNodeId = await upsertGenealogyNode(adonijahId, 'Adonijah', 'David', '#C9A84C', 'Eldest surviving son of David; attempted to seize the throne, executed by Solomon');
  const bathshebaNodeId = await upsertGenealogyNode(bathshebaId, 'Bathsheba', 'David', '#C9A84C', 'Queen Mother; secured Solomon\'s succession');

  // Find existing Rehoboam node
  const { data: rehoboamPerson } = await supabase.from('people').select('id').eq('name', 'Rehoboam').single();
  if (!rehoboamPerson) throw new Error('Rehoboam not found in people table');
  const { data: rehoboamNode } = await supabase
    .from('genealogy_nodes')
    .select('id')
    .eq('person_id', rehoboamPerson.id)
    .single();
  if (!rehoboamNode) throw new Error('Rehoboam genealogy node not found');

  // --- Edges ---
  console.log('\nInserting edges...');
  await upsertEdge(davidNodeId, solomonNodeId, 'biological', 'Chosen by God and David to succeed as king');
  await upsertEdge(davidNodeId, adonijahNodeId, 'biological', 'Eldest surviving son; tried to seize the throne');
  await upsertEdge(bathshebaNodeId, solomonNodeId, 'biological', 'Mother of Solomon');
  await upsertEdge(bathshebaNodeId, davidNodeId, 'marriage', 'David took her as wife after Uriah\'s death');
  await upsertEdge(solomonNodeId, rehoboamNode.id, 'biological', 'Rehoboam inherited a kingdom on the verge of split');

  console.log('\nDone! David dynasty now extends from David through Zedekiah.\n');
}

main().catch(console.error);
