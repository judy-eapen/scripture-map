// Run: npx tsx scripts/seed-2kings-18-20.ts
// Seeds 2 Kings chapters 18, 19, 20 with full content, people, places, and joins.

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

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!supabaseUrl || !serviceRoleKey) {
  console.error('Missing env vars.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: { persistSession: false },
});

function check<T>(result: { data: T | null; error: unknown }): T {
  if (result.error) throw result.error;
  if (result.data === null) throw new Error('Supabase returned null');
  return result.data;
}

// ---------------------------------------------------------------------------
// Verses
// ---------------------------------------------------------------------------

const verses2Kings18 = [
  { verse_number: 1,  text: 'In the third year of Hoshea son of Elah, king of Israel, Hezekiah the son of Ahaz, king of Judah, began to reign.' },
  { verse_number: 3,  text: 'And he did what was right in the eyes of the LORD, according to all that David his father had done.' },
  { verse_number: 4,  text: 'He removed the high places, and broke the pillars, and cut down the Asherah. And he broke in pieces the bronze serpent that Moses had made, for until those days the people of Israel had burned incense to it; it was called Nehushtan.' },
  { verse_number: 5,  text: 'He trusted in the LORD the God of Israel; so that there was none like him among all the kings of Judah after him, nor among those who were before him.' },
  { verse_number: 6,  text: 'For he held fast to the LORD; he did not depart from following him, but kept the commandments which the LORD commanded Moses.' },
  { verse_number: 13, text: 'In the fourteenth year of King Hezekiah, Sennacherib king of Assyria came up against all the fortified cities of Judah and took them.' },
  { verse_number: 17, text: 'And the king of Assyria sent the Tartan, the Rabsaris, and the Rabshakeh with a great army from Lachish to King Hezekiah at Jerusalem.' },
  { verse_number: 19, text: 'And the Rabshakeh said to them, "Say to Hezekiah, \'Thus says the great king, the king of Assyria: On what do you rest this confidence of yours?\'"' },
  { verse_number: 22, text: '"But if you say to me, \'We rely on the LORD our God,\' is it not he whose high places and altars Hezekiah has removed, telling Judah and Jerusalem, \'You shall worship before this altar in Jerusalem\'?"' },
  { verse_number: 25, text: '"Moreover, is it without the LORD that I have come up against this place to destroy it? The LORD said to me, \'Go up against this land, and destroy it.\'"' },
  { verse_number: 28, text: 'Then the Rabshakeh stood and called out in a loud voice in the language of Judah: "Hear the word of the great king, the king of Assyria!"' },
  { verse_number: 32, text: '"Do not listen to Hezekiah when he misleads you by saying, \'The LORD will deliver us.\' Has any of the gods of the nations ever delivered his land out of the hand of the king of Assyria?"' },
  { verse_number: 36, text: 'But the people were silent and answered him not a word, for the king\'s command was, "Do not answer him."' },
  { verse_number: 37, text: 'Then Eliakim the son of Hilkiah, who was over the household, and Shebna the secretary, and Joah the son of Asaph, the recorder, came to Hezekiah with their clothes torn, and told him the words of the Rabshakeh.' },
];

const verses2Kings19 = [
  { verse_number: 1,  text: 'When King Hezekiah heard it, he tore his clothes, and covered himself with sackcloth, and went into the house of the LORD.' },
  { verse_number: 2,  text: 'And he sent Eliakim, who was over the household, and Shebna the secretary, and the senior priests, covered with sackcloth, to the prophet Isaiah the son of Amoz.' },
  { verse_number: 6,  text: 'Isaiah said to them, "Say to your master, \'Thus says the LORD: Do not be afraid because of the words that you have heard, with which the servants of the king of Assyria have reviled me.\'"' },
  { verse_number: 7,  text: '"Behold, I will put a spirit in him, so that he shall hear a rumor and return to his own land, and I will cause him to fall by the sword in his own land."' },
  { verse_number: 14, text: 'Hezekiah received the letter from the hand of the messengers, and read it; and Hezekiah went up to the house of the LORD, and spread it before the LORD.' },
  { verse_number: 15, text: 'And Hezekiah prayed before the LORD, and said: "O LORD, the God of Israel, who art enthroned above the cherubim, thou art the God, thou alone, of all the kingdoms of the earth; thou hast made heaven and earth."' },
  { verse_number: 19, text: '"So now, O LORD our God, save us, I beseech thee, from his hand, that all the kingdoms of the earth may know that thou, O LORD, art God alone."' },
  { verse_number: 20, text: 'Then Isaiah the son of Amoz sent to Hezekiah, saying, "Thus says the LORD, the God of Israel: Your prayer to me about Sennacherib king of Assyria I have heard."' },
  { verse_number: 32, text: '"Therefore thus says the LORD concerning the king of Assyria, He shall not come into this city or shoot an arrow there, or come before it with a shield or cast up a siege mound against it."' },
  { verse_number: 34, text: '"For I will defend this city to save it, for my own sake and for the sake of my servant David."' },
  { verse_number: 35, text: 'And that night the angel of the LORD went forth, and slew a hundred and eighty-five thousand in the camp of the Assyrians; and when men arose early in the morning, behold, these were all dead bodies.' },
  { verse_number: 36, text: 'Then Sennacherib king of Assyria departed, and went home, and lived at Nineveh.' },
  { verse_number: 37, text: 'And as he was worshiping in the house of Nisroch his god, Adrammelech and Sharezer, his sons, slew him with the sword, and escaped into the land of Ararat. And Esar-haddon his son reigned in his place.' },
];

const verses2Kings20 = [
  { verse_number: 1,  text: 'In those days Hezekiah became sick and was at the point of death. And Isaiah the prophet the son of Amoz came to him, and said to him, "Thus says the LORD, \'Set your house in order; for you shall die, you shall not recover.\'"' },
  { verse_number: 2,  text: 'Then Hezekiah turned his face to the wall, and prayed to the LORD, saying,' },
  { verse_number: 3,  text: '"Remember now, O LORD, I beseech thee, how I have walked before thee in faithfulness and with a whole heart, and have done what is good in thy sight." And Hezekiah wept bitterly.' },
  { verse_number: 5,  text: '"Turn back, and say to Hezekiah the prince of my people, Thus says the LORD, the God of David your father: I have heard your prayer, I have seen your tears; behold, I will heal you."' },
  { verse_number: 6,  text: '"I will add fifteen years to your life. I will deliver you and this city out of the hand of the king of Assyria, and I will defend this city for my own sake and for my servant David\'s sake."' },
  { verse_number: 10, text: 'And Hezekiah said, "It is an easy thing for the shadow to lengthen ten steps; rather let the shadow go back ten steps."' },
  { verse_number: 11, text: 'And Isaiah the prophet cried to the LORD; and he brought the shadow back ten steps, by which the sun had declined on the dial of Ahaz.' },
  { verse_number: 12, text: 'At that time Merodach-baladan the son of Baladan, king of Babylon, sent envoys with letters and a present to Hezekiah; for he heard that Hezekiah had been sick.' },
  { verse_number: 13, text: 'And Hezekiah welcomed them, and he showed them all his treasure house, the silver, the gold, the spices, the precious oil, his armory, all that was found in his storehouses; there was nothing in his house or in all his realm that Hezekiah did not show them.' },
  { verse_number: 16, text: 'Then Isaiah said to Hezekiah, "Hear the word of the LORD:"' },
  { verse_number: 17, text: '"Behold, the days are coming, when all that is in your house, and that which your fathers have stored up till this day, shall be carried to Babylon; nothing shall be left, says the LORD."' },
  { verse_number: 18, text: '"And some of your own sons, who are born to you, shall be taken away; and they shall be eunuchs in the palace of the king of Babylon."' },
  { verse_number: 19, text: 'Then said Hezekiah to Isaiah, "The word of the LORD which you have spoken is good." For he thought, "Why not, if there will be peace and security in my days?"' },
  { verse_number: 20, text: 'The rest of the deeds of Hezekiah, and all his might, and how he made the pool and the conduit and brought water into the city, are they not written in the Book of the Chronicles of the Kings of Judah?' },
];

// ---------------------------------------------------------------------------
// New people for these chapters
// ---------------------------------------------------------------------------

const newPeople = [
  {
    name: 'Sennacherib',
    type: 'foreign_ruler' as const,
    kingdom: 'foreign' as const,
    bio: "King of Assyria (705-681 BC), son of Sargon II. Led the invasion of Judah in 701 BC, capturing 46 fortified cities and laying siege to Jerusalem. His own annals (the Sennacherib Prism) describe trapping Hezekiah 'like a bird in a cage' but never claim to have taken Jerusalem — an admission of failure corroborated by the biblical account of the 185,000 Assyrian soldiers struck down. Returned to Nineveh and was later assassinated by his own sons, as Isaiah had prophesied.",
    contemporary_events: 'Contemporary with Hezekiah of Judah (716-686 BC). His invasion of Judah in 701 BC is one of the best-documented events in biblical archaeology, confirmed by the Sennacherib Prism, Lachish Reliefs, and Taylor Prism.',
  },
  {
    name: 'Rabshakeh',
    type: 'official' as const,
    kingdom: 'foreign' as const,
    bio: "Senior Assyrian official and military commander — 'Rabshakeh' is a title, not a personal name (meaning 'chief cupbearer' or high officer). Sent by Sennacherib to demoralize Jerusalem's defenders with a sophisticated psychological warfare speech delivered in Hebrew at the city wall. He mocked Hezekiah's trust in Egypt, questioned whether God could deliver Jerusalem, and offered the people a comfortable resettlement if they surrendered. His speech is a masterclass in ancient propaganda — and failed completely.",
    contemporary_events: "Served Sennacherib during the 701 BC campaign. His taunts at the Jerusalem wall are recorded in nearly identical form in Isaiah 36 as well as 2 Kings 18.",
  },
  {
    name: 'Isaiah',
    type: 'prophet' as const,
    bio: "Son of Amoz, prophet in Jerusalem during the reigns of Uzziah, Jotham, Ahaz, and Hezekiah. One of the greatest prophets in Scripture, whose book spans from judgment oracles to the Suffering Servant. In 2 Kings 18-20, he is the decisive voice in the Assyrian crisis — twice delivering God's word to Hezekiah: first that Sennacherib will not take Jerusalem, and second (painfully) that Hezekiah's pride in showing the Babylonian envoys everything will ultimately lead to Babylonian captivity.",
    contemporary_events: 'Active 740-686 BC. His call vision (Isaiah 6) was in the year Uzziah died. He ministered through the Assyrian threat and foresaw the later Babylonian exile.',
  },
  {
    name: 'Eliakim',
    type: 'official' as const,
    kingdom: 'south' as const,
    bio: "Son of Hilkiah, palace administrator ('over the household') under Hezekiah — the highest civil office in the kingdom below the king. Sent by Hezekiah to parley with the Rabshakeh. Wisely requested the Assyrian speak in Aramaic rather than Hebrew, to prevent the people on the walls from being demoralized. Later in Isaiah 22, Eliakim is given the key of the house of David in place of the disgraced Shebna.",
    contemporary_events: 'Served Hezekiah during the 701 BC Assyrian crisis.',
  },
  {
    name: 'Merodach-Baladan',
    type: 'foreign_ruler' as const,
    kingdom: 'foreign' as const,
    bio: "King of Babylon who sent envoys with letters and a gift to Hezekiah after his recovery from illness. Though the visit appears friendly, Isaiah immediately interprets it as a critical failure — by showing the Babylonian envoys all of his treasures, Hezekiah has essentially given Babylon a complete inventory of Judah's wealth. Isaiah's response is one of the most sobering prophecies in Kings: 'All that is in your house will be carried to Babylon.' Merodach-Baladan twice revolted against Assyrian control of Babylon.",
    contemporary_events: 'Reigned as king of Babylon intermittently in opposition to Assyria during the late 8th century BC. His embassy to Hezekiah (~700 BC) was likely politically motivated — seeking allies against Assyria.',
  },
];

// ---------------------------------------------------------------------------
// New places
// ---------------------------------------------------------------------------

const newPlaces = [
  {
    ancient_name: 'Jerusalem',
    modern_name: 'Jerusalem, Israel',
    lat: 31.7683,
    lng: 35.2137,
    significance: "Capital of the Southern Kingdom and city of the temple — the target of Sennacherib's siege and the place God defends 'for my own sake and for the sake of my servant David'",
    ancient_description: "Capital of the Davidic kingdom, situated on a limestone ridge between the Kidron and Hinnom valleys at ~750m elevation. At the time of Hezekiah's crisis, the city included the Temple Mount, the palace complex, and the expanding 'Broad Wall' district in the western hill. Hezekiah had strengthened its defenses and dug the famous tunnel from the Gihon Spring to the Pool of Siloam to secure the water supply before the Assyrian siege. The Rabshakeh stood at the wall and taunted its defenders in their own language — but 185,000 Assyrians died in their camp that night, and the city stood.",
    modern_description: 'Jerusalem today is one of the world\'s most contested cities — sacred to Judaism, Christianity, and Islam. The City of David archaeological park covers the original Davidic-era city south of the Temple Mount. Hezekiah\'s Tunnel can still be walked through (wade through ankle-to-knee-deep water). The Israel Museum houses the Siloam Inscription found inside the tunnel.',
  },
  {
    ancient_name: 'Lachish',
    modern_name: 'Tel Lachish (Tel ed-Duweir), southern Israel',
    lat: 31.5611,
    lng: 34.8489,
    significance: "Judah's second most important fortified city, besieged and captured by Sennacherib in 701 BC — the siege is depicted in stunning detail on the Lachish Reliefs in the British Museum",
    ancient_description: "A massive fortified tell in the Shephelah, guarding the western approaches to Jerusalem via the Aijalon Valley. Second only to Jerusalem in military importance in the kingdom of Judah. Sennacherib chose Lachish as his base of operations during the 701 campaign — it was from there he sent the Rabshakeh to Jerusalem. The city's capture was so significant that Sennacherib commemorated it with a large room of carved stone reliefs in his palace at Nineveh, showing the assault ramp, battering rams, defenders on the walls, captives being led away, and Sennacherib himself receiving the surrender.",
    modern_description: "Tel Lachish (Tel ed-Duweir) in the southern Shephelah is one of the most important biblical excavation sites. University of Tel Aviv excavations led by David Ussishkin definitively identified the Assyrian siege ramp (one of only two ancient siege ramps ever found in the Levant) exactly where the Nineveh reliefs depict it. The Lachish Letters — ostraca with urgent military communications from just before the Babylonian destruction — were also found here. The tel is part of Lachish National Park and open to visitors.",
  },
  {
    ancient_name: 'Nineveh',
    modern_name: 'Mosul area, northern Iraq',
    lat: 36.3590,
    lng: 43.1600,
    significance: "Capital of the Assyrian Empire — where Sennacherib returned after failing to take Jerusalem, and where his sons murdered him as he worshipped",
    ancient_description: "The great capital of the Neo-Assyrian Empire at its height, situated on the eastern bank of the Tigris River opposite modern Mosul. Sennacherib himself expanded Nineveh into a magnificent capital with an 'Palace Without Rival' containing the famous Lachish Room reliefs. The city was protected by massive double walls and a network of canals. After the failed Jerusalem campaign, Sennacherib returned here and was assassinated in the temple of Nisroch by two of his own sons, Adrammelech and Sharezer, who then fled to Ararat. His son Esarhaddon succeeded him.",
    modern_description: 'The ruins of Nineveh lie across the Tigris from modern Mosul in northern Iraq. The Nineveh palace of Sennacherib was excavated by Austen Henry Layard in the 1840s-50s, revealing the Lachish Room reliefs (now in the British Museum) and thousands of cuneiform tablets from the library of Ashurbanipal. Sadly, ISIS demolished parts of the site in 2015. The city walls and Nergal Gate have been partially reconstructed by Iraqi authorities.',
  },
];

// ---------------------------------------------------------------------------
// New archaeological evidence
// ---------------------------------------------------------------------------

const newEvidence = [
  {
    name: "Sennacherib's Prism (Taylor Prism)",
    artifact_type: 'inscription' as const,
    date_bc: -691,
    description: "A six-sided baked clay prism inscribed with Sennacherib's annals, including his account of the 701 BC campaign against Judah. He claims to have 'shut up Hezekiah like a bird in a cage' and lists 46 Judean cities captured — but conspicuously never claims to have taken Jerusalem. Three copies exist (Taylor Prism in British Museum, Sennacherib Prism in Chicago, Jerusalem Prism in Israel Museum). The silence about capturing Jerusalem is a remarkable negative confirmation of the biblical account.",
    museum_location: 'British Museum, London; Oriental Institute, Chicago; Israel Museum, Jerusalem',
  },
  {
    name: 'Lachish Reliefs',
    artifact_type: 'inscription' as const,
    date_bc: -700,
    description: "Carved stone panels from Sennacherib's 'Palace Without Rival' in Nineveh, depicting in remarkable detail the Assyrian siege and capture of Lachish in 701 BC. Shows the siege ramp, archers, battering rams, Judean defenders on walls, prisoners being impaled, captives led away in chains, and Sennacherib himself on a throne receiving the surrender. One of the most detailed depictions of siege warfare from the ancient Near East. Archaeologists found the actual siege ramp at Tel Lachish exactly where the reliefs show it.",
    museum_location: 'British Museum, London (Room 10)',
  },
];

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log('=== Seeding 2 Kings 18-20 ===\n');

  // 1. Get the 2 Kings book ID
  const { data: book, error: bookErr } = await supabase
    .from('books')
    .select('id')
    .eq('name', '2 Kings')
    .single();
  if (bookErr || !book) throw new Error('Could not find 2 Kings book. Run main seed first.');
  const bookId = book.id;
  console.log('Found 2 Kings book id:', bookId);

  // 2. Upsert the 3 chapters
  console.log('Upserting chapters 18, 19, 20...');
  const chaptersData = [
    {
      book_id: bookId,
      chapter_number: 18,
      summary: "Hezekiah becomes Judah's most faithful king since David — he tears down the high places, destroys the bronze serpent Moses had made, and trusts God alone. In his 14th year, Assyrian king Sennacherib sweeps through Judah, capturing 46 fortified cities. Hezekiah pays a crushing tribute, stripping silver even from the temple doors. But Sennacherib still sends his commander Rabshakeh to Jerusalem with a brilliant and terrifying psychological warfare speech: mocking God, cataloguing the nations Assyria has already destroyed, and offering the people resettlement if they surrender. The people, commanded by Hezekiah, say nothing. Hezekiah's officials report back to him with torn clothes.",
      year_start_bc: -716,
      year_end_bc: -701,
      verses: verses2Kings18,
    },
    {
      book_id: bookId,
      chapter_number: 19,
      summary: "In desperation, Hezekiah tears his robes and goes to the temple. He sends to the prophet Isaiah, who immediately declares God's verdict: Sennacherib will hear a rumor and die by the sword in his own land. When Sennacherib sends a threatening letter, Hezekiah spreads it before God in the temple in one of the great prayers in Kings — acknowledging God's sovereignty over all the earth and asking to be saved so all nations will know. Isaiah responds with a magnificent oracle of defiance: the virgin daughter of Zion has despised Sennacherib. That night the angel of the LORD strikes 185,000 Assyrian soldiers dead. Sennacherib retreats to Nineveh, where his own sons murder him — exactly as God had said.",
      year_start_bc: -701,
      year_end_bc: -701,
      verses: verses2Kings19,
    },
    {
      book_id: bookId,
      chapter_number: 20,
      summary: "Hezekiah falls gravely ill and Isaiah delivers a stark word: 'Set your house in order, for you shall die.' Hezekiah turns to the wall and weeps in prayer, reminding God of his faithfulness. God relents, adds 15 years to his life, and as a sign makes the sundial shadow retreat 10 steps. Then Merodach-Baladan of Babylon sends envoys with letters and gifts — and Hezekiah, flush with relief and pride, shows them everything in the royal treasury. Isaiah confronts him: all of this, and even his own descendants, will be carried to Babylon. Hezekiah's response is chilling: 'At least there will be peace in my lifetime.' The chapter ends noting Hezekiah built the famous pool and tunnel — Hezekiah's Tunnel — to bring water into Jerusalem.",
      year_start_bc: -701,
      year_end_bc: -686,
      verses: verses2Kings20,
    },
  ];

  const chapters = check(
    await supabase
      .from('chapters')
      .upsert(chaptersData, { onConflict: 'book_id,chapter_number' })
      .select('id, chapter_number')
  );

  const chapterIdByNum: Record<number, string> = {};
  for (const ch of chapters) chapterIdByNum[ch.chapter_number] = ch.id;
  console.log(`  Upserted chapters: ${chapters.map(c => c.chapter_number).join(', ')}`);

  const ch18Id = chapterIdByNum[18];
  const ch19Id = chapterIdByNum[19];
  const ch20Id = chapterIdByNum[20];

  // 3. Insert new people (check first)
  console.log('Seeding people...');
  const { data: existingPeople } = await supabase
    .from('people')
    .select('id, name')
    .in('name', newPeople.map(p => p.name));

  const existingNames = new Set((existingPeople ?? []).map((p: { name: string }) => p.name));
  const peopleToInsert = newPeople
    .filter(p => !existingNames.has(p.name))
    .map(p => ({
      name: p.name,
      type: p.type,
      kingdom: p.kingdom ?? null,
      bio: p.bio,
      contemporary_events: (p as { contemporary_events?: string }).contemporary_events ?? null,
    }));

  let allPeople: { id: string; name: string }[] = existingPeople ?? [];
  if (peopleToInsert.length > 0) {
    const inserted = check(await supabase.from('people').insert(peopleToInsert).select('id, name'));
    allPeople = [...allPeople, ...inserted];
  }
  console.log(`  People: ${allPeople.map(p => p.name).join(', ')}`);

  // Also get Hezekiah (already in DB from main seed, kingdom='south')
  const { data: hezekiah } = await supabase
    .from('people')
    .select('id, name')
    .eq('name', 'Hezekiah')
    .eq('kingdom', 'south')
    .single();
  if (!hezekiah) throw new Error('Hezekiah not found — run main seed.ts first.');

  const personId = (name: string) => {
    const p = allPeople.find(p => p.name === name);
    if (!p) throw new Error(`Person not found: ${name}`);
    return p.id;
  };

  // 4. Insert new places
  console.log('Seeding places...');
  const { data: existingPlaces } = await supabase
    .from('places')
    .select('id, ancient_name')
    .in('ancient_name', newPlaces.map(p => p.ancient_name));

  const existingPlaceNames = new Set((existingPlaces ?? []).map((p: { ancient_name: string }) => p.ancient_name));
  const placesToInsert = newPlaces.filter(p => !existingPlaceNames.has(p.ancient_name));

  let allPlaces: { id: string; ancient_name: string }[] = existingPlaces ?? [];
  if (placesToInsert.length > 0) {
    const inserted = check(await supabase.from('places').insert(placesToInsert).select('id, ancient_name'));
    allPlaces = [...allPlaces, ...inserted];
  }
  console.log(`  Places: ${allPlaces.map(p => p.ancient_name).join(', ')}`);

  const placeId = (name: string) => {
    const p = allPlaces.find(p => p.ancient_name === name);
    if (!p) throw new Error(`Place not found: ${name}`);
    return p.id;
  };

  // 5. Insert new archaeological evidence
  console.log('Seeding archaeological evidence...');
  const { data: existingEvidence } = await supabase
    .from('archaeological_evidence')
    .select('id, name')
    .in('name', newEvidence.map(e => e.name));

  const existingEvidenceNames = new Set((existingEvidence ?? []).map((e: { name: string }) => e.name));
  const evidenceToInsert = newEvidence.filter(e => !existingEvidenceNames.has(e.name));

  let allEvidence: { id: string; name: string }[] = existingEvidence ?? [];
  if (evidenceToInsert.length > 0) {
    const inserted = check(await supabase.from('archaeological_evidence').insert(evidenceToInsert).select('id, name'));
    allEvidence = [...allEvidence, ...inserted];
  }
  console.log(`  Evidence: ${allEvidence.map(e => e.name).join(', ')}`);

  // Also get Hezekiah's Tunnel (already in DB)
  const { data: hezTunnel } = await supabase
    .from('archaeological_evidence')
    .select('id, name')
    .eq('name', "Hezekiah's Tunnel")
    .single();

  const evidenceId = (name: string) => {
    const e = allEvidence.find(e => e.name === name);
    if (!e) throw new Error(`Evidence not found: ${name}`);
    return e.id;
  };

  // 6. Get nation IDs
  const { data: nations } = await supabase
    .from('neighboring_nations')
    .select('id, name')
    .in('name', ['Assyria', 'Egypt', 'Babylon']);
  const nationIdByName: Record<string, string> = {};
  for (const n of nations ?? []) nationIdByName[n.name] = n.id;

  // 7. Chapter-people joins
  console.log('Seeding chapter-people joins...');
  const chapterPeople = [
    // Ch 18
    { chapter_id: ch18Id, person_id: hezekiah.id, tappable_terms: ['Hezekiah', 'King Hezekiah'] },
    { chapter_id: ch18Id, person_id: personId('Sennacherib'), tappable_terms: ['Sennacherib'] },
    { chapter_id: ch18Id, person_id: personId('Rabshakeh'), tappable_terms: ['Rabshakeh'] },
    { chapter_id: ch18Id, person_id: personId('Eliakim'), tappable_terms: ['Eliakim'] },
    // Ch 19
    { chapter_id: ch19Id, person_id: hezekiah.id, tappable_terms: ['Hezekiah', 'King Hezekiah'] },
    { chapter_id: ch19Id, person_id: personId('Isaiah'), tappable_terms: ['Isaiah', 'Isaiah the prophet'] },
    { chapter_id: ch19Id, person_id: personId('Sennacherib'), tappable_terms: ['Sennacherib'] },
    // Ch 20
    { chapter_id: ch20Id, person_id: hezekiah.id, tappable_terms: ['Hezekiah', 'King Hezekiah'] },
    { chapter_id: ch20Id, person_id: personId('Isaiah'), tappable_terms: ['Isaiah', 'Isaiah the prophet'] },
    { chapter_id: ch20Id, person_id: personId('Merodach-Baladan'), tappable_terms: ['Merodach-baladan', 'Merodach-Baladan'] },
  ];

  const cpResult = check(
    await supabase
      .from('chapter_people')
      .upsert(chapterPeople, { onConflict: 'chapter_id,person_id' })
      .select()
  );
  console.log(`  Inserted/updated ${cpResult.length} chapter-person joins.`);

  // 8. Chapter-places joins
  console.log('Seeding chapter-places joins...');
  const chapterPlaces = [
    // Ch 18
    { chapter_id: ch18Id, place_id: placeId('Jerusalem'), tappable_terms: ['Jerusalem'], map_focus: true },
    { chapter_id: ch18Id, place_id: placeId('Lachish'), tappable_terms: ['Lachish'], map_focus: false },
    // Ch 19
    { chapter_id: ch19Id, place_id: placeId('Jerusalem'), tappable_terms: ['Jerusalem'], map_focus: true },
    { chapter_id: ch19Id, place_id: placeId('Nineveh'), tappable_terms: ['Nineveh'], map_focus: false },
    // Ch 20
    { chapter_id: ch20Id, place_id: placeId('Jerusalem'), tappable_terms: ['Jerusalem'], map_focus: true },
  ];

  const cpPlacesResult = check(
    await supabase
      .from('chapter_places')
      .upsert(chapterPlaces, { onConflict: 'chapter_id,place_id' })
      .select()
  );
  console.log(`  Inserted/updated ${cpPlacesResult.length} chapter-place joins.`);

  // 9. Chapter-evidence joins
  console.log('Seeding chapter-evidence joins...');
  const chapterEvidence = [
    {
      chapter_id: ch18Id,
      evidence_id: evidenceId("Sennacherib's Prism (Taylor Prism)"),
      relevance_note: "Sennacherib's own annals describe his 701 BC invasion of Judah and list 46 cities captured — but conspicuously never claim Jerusalem fell, corroborating the biblical account.",
    },
    {
      chapter_id: ch18Id,
      evidence_id: evidenceId('Lachish Reliefs'),
      relevance_note: 'The reliefs from Sennacherib\'s palace depict the siege and capture of Lachish in stunning detail — the same campaign in which the Rabshakeh was sent to Jerusalem.',
    },
    {
      chapter_id: ch19Id,
      evidence_id: evidenceId("Sennacherib's Prism (Taylor Prism)"),
      relevance_note: "The prism records Sennacherib trapping Hezekiah 'like a bird in a cage' but not capturing Jerusalem — matching the biblical account of the Assyrian army's sudden destruction and withdrawal.",
    },
    ...(hezTunnel ? [{
      chapter_id: ch20Id,
      evidence_id: hezTunnel.id,
      relevance_note: "2 Kings 20:20 directly references Hezekiah's tunnel: 'he made the pool and the conduit and brought water into the city.' The Siloam Inscription found inside the tunnel records workers meeting in the middle.",
    }] : []),
  ];

  const ceResult = check(
    await supabase
      .from('chapter_archaeological_evidence')
      .upsert(chapterEvidence, { onConflict: 'chapter_id,evidence_id' })
      .select()
  );
  console.log(`  Inserted/updated ${ceResult.length} chapter-evidence joins.`);

  // 10. Chapter-nations joins
  console.log('Seeding chapter-nations joins...');
  const chapterNations = [
    ...(nationIdByName['Assyria'] ? [
      { chapter_id: ch18Id, nation_id: nationIdByName['Assyria'], context_note: 'Sennacherib launched the 701 BC invasion from Assyria, capturing 46 Judean cities and sending Rabshakeh to demand Jerusalem surrender.' },
      { chapter_id: ch19Id, nation_id: nationIdByName['Assyria'], context_note: "At the height of Assyrian power, God directly intervenes — 185,000 soldiers die in a single night, and Sennacherib retreats to Nineveh never to threaten Jerusalem again." },
    ] : []),
    ...(nationIdByName['Egypt'] ? [
      { chapter_id: ch18Id, nation_id: nationIdByName['Egypt'], context_note: "Rabshakeh explicitly mocks any hope of Egyptian help: 'Egypt is a broken reed that will pierce the hand of anyone who leans on it.' Hezekiah had considered Egyptian alliance." },
    ] : []),
    ...(nationIdByName['Babylon'] ? [
      { chapter_id: ch20Id, nation_id: nationIdByName['Babylon'], context_note: "Merodach-Baladan's envoys from Babylon visit Hezekiah, prompting Isaiah's prophecy that Judah's treasures — and descendants — will eventually be carried to Babylon. This is the first hint of the Babylonian exile." },
    ] : []),
  ];

  const cnResult = check(
    await supabase
      .from('chapter_nations')
      .upsert(chapterNations, { onConflict: 'chapter_id,nation_id' })
      .select()
  );
  console.log(`  Inserted/updated ${cnResult.length} chapter-nation joins.`);

  console.log('\n=== 2 Kings 18-20 seed complete! ===');
  console.log('Navigate to:');
  console.log('  http://localhost:3000/study/2-kings/18');
  console.log('  http://localhost:3000/study/2-kings/19');
  console.log('  http://localhost:3000/study/2-kings/20');
}

main().catch(err => {
  console.error('Seed failed:', err);
  process.exit(1);
});
