// Run: npx tsx scripts/seed-prophet-connections.ts
// Adds Jehoiada + Hilkiah as priests, and adds prophet/priest-to-king political edges
// so prophets appear in the right time position on the genealogy canvas.

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

async function getOrCreatePerson(p: {
  name: string; type: string; kingdom?: string;
  bio: string;
}): Promise<string> {
  const { data: existing } = await supabase.from('people').select('id').eq('name', p.name).maybeSingle();
  if (existing) return existing.id;
  const { data, error } = await supabase.from('people').insert(p).select('id').single();
  if (error) throw new Error(`Failed to insert ${p.name}: ${error.message}`);
  console.log(`  Created person: ${p.name}`);
  return data.id;
}

async function getOrCreateNode(personId: string, name: string, dynasty: string, dynastyColor: string, notes: string): Promise<string> {
  const { data: existing } = await supabase.from('genealogy_nodes').select('id').eq('person_id', personId).maybeSingle();
  if (existing) return existing.id;
  const { data, error } = await supabase.from('genealogy_nodes').insert({ person_id: personId, dynasty, dynasty_color: dynastyColor, notes }).select('id').single();
  if (error) throw new Error(`Failed to insert node for ${name}: ${error.message}`);
  console.log(`  Created node: ${name}`);
  return data.id;
}

async function getNodeIdByName(name: string): Promise<string | null> {
  const { data: person } = await supabase.from('people').select('id').eq('name', name).maybeSingle();
  if (!person) { console.warn(`  Person not found: ${name}`); return null; }
  const { data: node } = await supabase.from('genealogy_nodes').select('id').eq('person_id', person.id).maybeSingle();
  if (!node) { console.warn(`  Node not found for: ${name}`); return null; }
  return node.id;
}

// For north kingdom, two people named "Jehoahaz" and "Ahaziah" exist — one north, one south.
// Disambiguate by kingdom.
async function getNodeIdByNameAndKingdom(name: string, kingdom: string): Promise<string | null> {
  const { data: people } = await supabase.from('people').select('id').eq('name', name).eq('kingdom', kingdom);
  if (!people || people.length === 0) { console.warn(`  Person not found: ${name} (${kingdom})`); return null; }
  const person = people[0];
  const { data: node } = await supabase.from('genealogy_nodes').select('id').eq('person_id', person.id).maybeSingle();
  if (!node) { console.warn(`  Node not found for: ${name} (${kingdom})`); return null; }
  return node.id;
}

async function addEdge(parentNodeId: string, childNodeId: string, type: string, notes?: string) {
  const { data: existing } = await supabase.from('genealogy_edges').select('id')
    .eq('parent_node_id', parentNodeId).eq('child_node_id', childNodeId).eq('relationship_type', type).maybeSingle();
  if (existing) return;
  const { error } = await supabase.from('genealogy_edges').insert({ parent_node_id: parentNodeId, child_node_id: childNodeId, relationship_type: type, notes });
  if (error) throw new Error(`Failed edge: ${error.message}`);
}

async function main() {
  console.log('\n=== Seeding Priests + Prophet-to-King Connections ===\n');

  // --- Add Jehoiada (priest, Joash era) ---
  console.log('Adding Jehoiada...');
  const jehoiadaId = await getOrCreatePerson({
    name: 'Jehoiada',
    type: 'official',
    kingdom: 'south',
    bio: 'High priest who hid the infant Joash in the temple for six years while Athaliah ruled Judah. He orchestrated Athaliah\'s overthrow, crowned Joash king, and served as his chief advisor throughout his reign, steering Judah back to covenant faithfulness. After Jehoiada\'s death, Joash turned to idolatry.',
  });
  const jehoiadaNodeId = await getOrCreateNode(jehoiadaId, 'Jehoiada', 'David', '#C9A84C', 'High priest who protected Joash and overthrew Athaliah');

  // --- Add Hilkiah (high priest, Josiah era) ---
  console.log('Adding Hilkiah...');
  const hilkiahId = await getOrCreatePerson({
    name: 'Hilkiah',
    type: 'official',
    kingdom: 'south',
    bio: 'High priest under Josiah who discovered the Book of the Law during temple renovations, triggering Josiah\'s sweeping reforms. His finding led to the great Passover celebration and the most thorough religious reformation in Judah\'s history.',
  });
  const hilkiahNodeId = await getOrCreateNode(hilkiahId, 'Hilkiah', 'David', '#C9A84C', 'High priest who found the Book of the Law; sparked Josiah\'s reforms');

  // --- Look up all needed node IDs ---
  console.log('\nLooking up king node IDs...');
  const [
    elijahNodeId,
    elishaNodeId,
    isaiahNodeId,
    ahabNodeId,
    ahaziah_northNodeId,
    joramNodeId,
    jehuNodeId,
    jehoahaz_northNodeId,
    jehoashNodeId,
    jehoshaphatNodeId,
    uzziah_southNodeId,
    ahazNodeId,
    hezekiahNodeId,
    athaliah_southNodeId,
    joash_southNodeId,
    josiah_southNodeId,
  ] = await Promise.all([
    getNodeIdByName('Elijah'),
    getNodeIdByName('Elisha'),
    getNodeIdByName('Isaiah'),
    getNodeIdByName('Ahab'),
    getNodeIdByNameAndKingdom('Ahaziah', 'north'),
    getNodeIdByNameAndKingdom('Joram', 'north'),
    getNodeIdByName('Jehu'),
    getNodeIdByNameAndKingdom('Jehoahaz', 'north'),
    getNodeIdByName('Jehoash'),
    getNodeIdByName('Jehoshaphat'),
    getNodeIdByName('Uzziah'),
    getNodeIdByName('Ahaz'),
    getNodeIdByName('Hezekiah'),
    getNodeIdByName('Athaliah'),
    getNodeIdByName('Joash'),
    getNodeIdByName('Josiah'),
  ]);

  // --- Add prophet/priest → king political edges ---
  console.log('\nAdding political edges...');

  // Elijah (active ~860-850 BC): confronted Ahab, prophesied Ahaziah's death
  if (elijahNodeId && ahabNodeId)
    await addEdge(elijahNodeId, ahabNodeId, 'political', 'Challenged Ahab\'s idolatry; predicted drought and judgment');
  if (elijahNodeId && ahaziah_northNodeId)
    await addEdge(elijahNodeId, ahaziah_northNodeId, 'political', 'Prophesied Ahaziah would not recover from his injury');

  // Elisha (active ~850-800 BC): served under Joram, anointed Jehu, active through Jehoash
  if (elishaNodeId && joramNodeId)
    await addEdge(elishaNodeId, joramNodeId, 'political', 'Active during Joram\'s reign; advised on military matters');
  if (elishaNodeId && jehuNodeId)
    await addEdge(elishaNodeId, jehuNodeId, 'political', 'Sent a prophet to anoint Jehu as king of Israel');
  if (elishaNodeId && jehoahaz_northNodeId)
    await addEdge(elishaNodeId, jehoahaz_northNodeId, 'political', 'Active during Jehoahaz\'s reign; Aram oppressed Israel');
  if (elishaNodeId && jehoashNodeId)
    await addEdge(elishaNodeId, jehoashNodeId, 'political', 'Elisha\'s final prophecy given to Jehoash on his deathbed');
  if (elishaNodeId && jehoshaphatNodeId)
    await addEdge(elishaNodeId, jehoshaphatNodeId, 'political', 'Prophesied for the allied kings during Moab campaign');

  // Isaiah (active ~740-700 BC): contemporary of Uzziah, Jotham, Ahaz, Hezekiah
  if (isaiahNodeId && uzziah_southNodeId)
    await addEdge(isaiahNodeId, uzziah_southNodeId, 'political', 'Called to prophesy in the year King Uzziah died');
  if (isaiahNodeId && ahazNodeId)
    await addEdge(isaiahNodeId, ahazNodeId, 'political', 'Warned Ahaz about the Assyrian threat; rejected');
  if (isaiahNodeId && hezekiahNodeId)
    await addEdge(isaiahNodeId, hezekiahNodeId, 'political', 'Advised Hezekiah during the Assyrian siege; delivered God\'s message of deliverance');

  // Jehoiada → Athaliah, Joash
  if (jehoiadaNodeId && athaliah_southNodeId)
    await addEdge(jehoiadaNodeId, athaliah_southNodeId, 'political', 'Overthrew her rule and had her executed');
  if (jehoiadaNodeId && joash_southNodeId)
    await addEdge(jehoiadaNodeId, joash_southNodeId, 'political', 'Protected Joash for 6 years; crowned him and guided his early reign');

  // Hilkiah → Josiah
  if (hilkiahNodeId && josiah_southNodeId)
    await addEdge(hilkiahNodeId, josiah_southNodeId, 'political', 'Discovered the Book of the Law; sparked Josiah\'s reforms');

  console.log('\nDone!\n');
}

main().catch(console.error);
