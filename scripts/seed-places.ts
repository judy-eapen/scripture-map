// Run: npx tsx scripts/seed-places.ts
// 1. Adds 20 new places to the places table (idempotent — skips if ancient_name exists)
// 2. Seeds chapter_places for all 47 chapters × all 29 places via text matching

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

// ─── Place definitions ───────────────────────────────────────────────────────
// ancient_name must be unique (used as idempotency key)

type PlaceDef = {
  ancient_name: string;
  modern_name: string;
  lat: number;
  lng: number;
  significance: string;
  ancient_description: string;
  modern_description: string;
  tappable_terms: string[];  // terms to search for in verse text
};

const NEW_PLACES: PlaceDef[] = [
  {
    ancient_name: 'Damascus',
    modern_name: 'Damascus (Dimashq), Syria',
    lat: 33.5102, lng: 36.2913,
    significance: 'Capital of Aram and Israel\'s most persistent military adversary throughout the divided kingdom',
    ancient_description: 'Capital of Aram-Syria, Damascus sat astride the major trade and military routes linking Mesopotamia to Egypt. Under kings Ben-hadad I, Ben-hadad II, and Hazael, it waged constant war against Israel. Ben-hadad besieged Samaria twice; Hazael ravaged Israel so thoroughly that Jehoahaz\'s army was reduced to fifty horsemen. Elisha prophesied over the city and over Hazael\'s cruel rise to power. The name Damascus appears more than any other foreign city across 1 & 2 Kings.',
    modern_description: 'Damascus is the capital of modern Syria, widely considered one of the oldest continuously inhabited cities on earth. The Old City is a UNESCO World Heritage Site.',
    tappable_terms: ['Damascus'],
  },
  {
    ancient_name: 'Jordan',
    modern_name: 'Jordan River, Israel–Jordan border',
    lat: 31.80, lng: 35.56,
    significance: 'The defining river of the Promised Land — scene of Elijah\'s ascension, Elisha\'s miracles, and Naaman\'s healing',
    ancient_description: 'The great river flowing from Mount Hermon through the Sea of Galilee to the Dead Sea, forming the natural eastern border of Israelite territory. Elijah struck the water with his mantle and it parted; Elisha crossed back the same way after Elijah was taken in the chariot of fire. Naaman the Aramean commander was healed of leprosy by washing seven times in the Jordan at Elisha\'s command. The sons of the prophets were felling timber by the Jordan when Elisha made an iron axe head float on the water.',
    modern_description: 'The Jordan River flows 251 km south through the Rift Valley from the Golan Heights to the Dead Sea. Today it forms the border between Israel and the Kingdom of Jordan. The traditional baptism site of Jesus is a major Christian pilgrimage destination.',
    tappable_terms: ['Jordan'],
  },
  {
    ancient_name: 'Bethel',
    modern_name: 'Beitin, West Bank (near Ramallah)',
    lat: 31.9272, lng: 35.2253,
    significance: 'Northern site of Jeroboam\'s golden calf and home to a school of the prophets; a waypoint on Elijah and Elisha\'s final journey',
    ancient_description: 'Meaning "House of God," Bethel had been a sacred site since the patriarchs. It became the epicenter of the northern kingdom\'s apostasy when Jeroboam I erected a golden calf here and declared: "These are your gods, O Israel, who brought you up from Egypt." A school of the prophets operated at Bethel in Elisha\'s day — fifty of its members watched from a distance as Elijah and Elisha crossed the Jordan. It was youths from Bethel who mocked Elisha and were mauled by bears.',
    modern_description: 'Ancient Bethel is identified with modern Beitin in the West Bank, about 17 km north of Jerusalem. Archaeological remains span multiple periods from the Chalcolithic through the Hellenistic era.',
    tappable_terms: ['Bethel', 'Beth-el'],
  },
  {
    ancient_name: 'Jericho',
    modern_name: 'Tel es-Sultan, near modern Jericho, West Bank',
    lat: 31.8566, lng: 35.4474,
    significance: 'Rebuilt under a prophetic curse during Ahab\'s reign; site of Elisha\'s first miracle — healing the city\'s spring',
    ancient_description: 'One of the world\'s oldest cities, located in the deep Jordan Valley. Jericho was rebuilt by Hiel of Bethel during Ahab\'s reign, fulfilling Joshua\'s curse at the cost of his two sons. After Elijah\'s ascension, the prophets of Jericho searched for Elijah for three days in the wilderness. Elisha healed the city\'s bad spring by casting in salt. A school of the prophets was based here. Young men from Jericho who mocked Elisha ("Go up, thou bald head!") were mauled by two female bears.',
    modern_description: 'Ancient Jericho (Tel es-Sultan) is a UNESCO Tentative Site at the edge of modern Palestinian Jericho in the Jordan Valley.',
    tappable_terms: ['Jericho'],
  },
  {
    ancient_name: 'Gilgal',
    modern_name: 'Probable location near Jericho, West Bank',
    lat: 31.875, lng: 35.45,
    significance: 'Starting point of Elijah and Elisha\'s final journey together; site of Elisha\'s miracle of the deadly stew',
    ancient_description: 'An ancient sacred site near Jericho associated with covenant renewal in early Israel. Gilgal was where Elijah and Elisha began their last journey — Elisha refusing to leave Elijah\'s side. A school of the prophets was established here. When famine struck, sons of the prophets at Gilgal gathered wild gourds into a stew that proved poisonous — Elisha neutralized it by throwing in flour, declaring there was "no harm in the pot." Elisha also fed a hundred men from twenty barley loaves here, prefiguring a later feeding miracle.',
    modern_description: 'Multiple biblical sites bear the name Gilgal. The Gilgal of Elisha is often located near ancient Jericho, though its precise identification remains debated among scholars.',
    tappable_terms: ['Gilgal'],
  },
  {
    ancient_name: 'Beersheba',
    modern_name: 'Tel Beer Sheva (UNESCO), near Be\'er Sheva, Israel',
    lat: 31.2478, lng: 34.8011,
    significance: 'The southern boundary of Israel — where Elijah stopped before fleeing into the wilderness and collapsing under a broom tree',
    ancient_description: 'The traditional southernmost city of Israel, defining the land\'s extent ("from Dan to Beersheba"). After the confrontation on Mount Carmel and Jezebel\'s death threat, Elijah fled south to Beersheba, left his servant there, and walked another day into the desert. He sat under a broom tree and asked God to take his life. An angel touched him twice, provided food and water, and Elijah traveled forty days to Horeb in the strength of that provision.',
    modern_description: 'Tel Beer Sheva is a UNESCO World Heritage Site about 5 km east of modern Be\'er Sheva. Excavations revealed a well-planned Iron Age city with a distinctive six-chamber gate and water system.',
    tappable_terms: ['Beer-sheba', 'Beersheba'],
  },
  {
    ancient_name: 'Ramoth-Gilead',
    modern_name: 'Tell er-Rumeith, northern Jordan',
    lat: 32.605, lng: 35.95,
    significance: 'The contested fortress where Ahab died in battle; where Jehu was anointed king of Israel by Elisha\'s messenger',
    ancient_description: 'A key Israelite fortress in the Transjordanian highlands, the focus of multiple campaigns against Aram. Ahab and Jehoshaphat of Judah launched an alliance to retake it; Ahab disguised himself but was killed by a random arrow, and his blood was licked up by dogs in fulfillment of Elijah\'s prophecy. Years later, while Israelite forces garrisoned Ramoth-Gilead against Aram, Elisha sent a young prophet to anoint Jehu in a back room — unleashing the violent purge of Ahab\'s entire dynasty.',
    modern_description: 'Commonly identified with Tell er-Rumeith (Tell Ramith) near the Syrian border in northern Jordan.',
    tappable_terms: ['Ramoth-gilead', 'Ramoth in Gilead', 'Ramoth'],
  },
  {
    ancient_name: 'Egypt',
    modern_name: 'Egypt',
    lat: 27.00, lng: 30.80,
    significance: 'The recurring southern power — sought as an ally against Assyria and Babylon, always to Judah\'s detriment',
    ancient_description: 'The ancient superpower to the southwest, whose shadow falls across the entire story of the divided monarchy. Jeroboam fled to Egypt and returned to split the kingdom. Solomon traded with Egypt and married Pharaoh\'s daughter. Subsequent kings and prophets debated whether to ally with Egypt against Assyria or Babylon. Pharaoh Shishak raided Jerusalem under Rehoboam. Pharaoh Necho killed Josiah at Megiddo and installed Jehoiakim as a puppet. Egypt consistently proved an unreliable ally when Babylon rose.',
    modern_description: 'Modern Egypt (Arab Republic of Egypt) occupies the northeastern corner of Africa, bordering Israel and Gaza in the Sinai Peninsula.',
    tappable_terms: ['Egypt', 'Egyptian', 'Egyptians'],
  },
  {
    ancient_name: 'Babylon',
    modern_name: 'Hillah area, Babil Governorate, Iraq (85 km south of Baghdad)',
    lat: 32.5427, lng: 44.4215,
    significance: 'Capital of the empire that destroyed Jerusalem, burned the Temple, and ended Judah\'s monarchy in 586 BC',
    ancient_description: 'Capital of the Neo-Babylonian Empire. When Merodach-baladan sent ambassadors to Hezekiah after his illness, Hezekiah showed them all his treasures — and Isaiah prophesied that everything would be carried to Babylon. Under Nebuchadnezzar this was fulfilled: three sieges, deportation of the best people, and finally the total destruction of Jerusalem and the Temple in 586 BC. The final chapters of 2 Kings describe Jerusalem in ruins, the last Judean king in a Babylonian prison, and the survivors scattered. "And Judah was carried away out of their land."',
    modern_description: 'The ruins of ancient Babylon lie near modern Hillah, Iraq. The site is a UNESCO World Heritage property.',
    tappable_terms: ['Babylon', 'Babylonian', 'Babylonians', 'Chaldean', 'Chaldeans', 'Chaldees'],
  },
  {
    ancient_name: 'Sidon',
    modern_name: 'Sidon (Saida), Lebanon',
    lat: 33.5600, lng: 35.3683,
    significance: 'Home of Jezebel\'s father Ethbaal — the source of the Baal worship that nearly destroyed Israel\'s covenant faith',
    ancient_description: 'Chief city of Phoenicia (called "Zidon" throughout the KJV of Kings), a major Mediterranean trading power. Ethbaal king of the Sidonians was Jezebel\'s father, making Ahab\'s marriage to her a fateful political alliance. Jezebel aggressively promoted Baal of Sidon, killing the LORD\'s prophets and supporting 450 prophets of Baal and 400 prophets of Asherah. The widow of Zarephath, where Elijah lodged and raised her son, was from the region of Sidon — making the miracle even more pointed.',
    modern_description: 'Sidon (Arabic: Saida) is Lebanon\'s third-largest city on the Mediterranean coast, about 40 km south of Beirut.',
    tappable_terms: ['Sidon', 'Zidon', 'Zidonians', 'Sidonians'],
  },
  {
    ancient_name: 'Megiddo',
    modern_name: 'Tel Megiddo (Armageddon), Jezreel Valley, Israel',
    lat: 32.5840, lng: 35.1840,
    significance: 'Strategic fortress city; where Josiah — Judah\'s greatest reforming king — was killed by Pharaoh Necho of Egypt',
    ancient_description: 'A strategic fortress guarding the main pass through the Carmel ridge, on the route from Egypt to Mesopotamia. Solomon rebuilt it as a royal chariot city. King Josiah, who had enacted the most thoroughgoing covenant reform in Judah\'s history, marched out to stop Pharaoh Necho at Megiddo and was mortally wounded by Egyptian archers. He was carried back to Jerusalem in his chariot and died there. Jeremiah led the lamentation. His death ended the last real hope of reformation.',
    modern_description: 'Tel Megiddo is a UNESCO World Heritage Site in the Jezreel Valley. The name "Armageddon" in Revelation 16 is derived from "Har Megiddo." Twenty-six strata of occupation have been excavated.',
    tappable_terms: ['Megiddo', 'Megiddon'],
  },
  {
    ancient_name: 'Shunem',
    modern_name: 'Sulam, Jezreel Valley, Israel',
    lat: 32.5951, lng: 35.3028,
    significance: 'Where Elisha raised a prominent woman\'s son from the dead — one of only two resurrection miracles in Kings',
    ancient_description: 'A village in the Jezreel Valley on Mount Moreh\'s lower slopes. A wealthy woman there showed persistent hospitality to Elisha, even building him a furnished room on the roof. Elisha promised she would have a son within a year. When the boy died suddenly in the field, she rode to Elisha at Carmel and brought him back. Elisha came to Shunem, stretched himself on the dead boy twice, and the child sneezed seven times and revived. After the famine, the same woman returned from Philistia to find her house taken — and Gehazi\'s account of her miracle coincided perfectly with her arrival before the king.',
    modern_description: 'Identified with the village of Sulam in the northern Jezreel Valley, about 5 km north of Afula.',
    tappable_terms: ['Shunem', 'Shunammite'],
  },
  {
    ancient_name: 'Dothan',
    modern_name: 'Tel Dothan, northern West Bank (near Jenin)',
    lat: 32.4264, lng: 35.2127,
    significance: 'Where the Aramean army surrounded Elisha\'s location and his servant saw the hills full of the LORD\'s chariots of fire',
    ancient_description: 'A city in the hills of Manasseh. The king of Aram discovered that Elisha was revealing his secret battle plans to Israel and sent a great army by night to surround Dothan and capture Elisha. In the morning Elisha\'s servant saw the army and was terrified. Elisha prayed that his servant\'s eyes would be opened — and he saw the mountain full of horses and chariots of fire. Elisha then prayed the Arameans would be struck blind and led them to Samaria, where he had them fed and released — stopping the Aramean raids for a season.',
    modern_description: 'Tel Dothan is an archaeological tell about 22 km north of Nablus in the northern West Bank. Excavations revealed occupation from the Chalcolithic period through the Iron Age.',
    tappable_terms: ['Dothan', 'Dothaim'],
  },
  {
    ancient_name: 'Dan',
    modern_name: 'Tel Dan Nature Reserve, Upper Galilee, Israel',
    lat: 33.2516, lng: 35.6510,
    significance: 'Northernmost city of Israel; site of Jeroboam\'s second golden calf — the idolatry formula used to condemn every subsequent northern king',
    ancient_description: 'The northernmost city of Israel, marking the northern boundary of the Promised Land ("from Dan to Beersheba"). When the kingdom split, Jeroboam I erected a golden calf at Dan alongside the one at Bethel, establishing his own worship system so the northern tribes would not travel to Jerusalem. The formula "the sin of Jeroboam the son of Nebat, who made Israel to sin" recurs throughout the evaluations of every subsequent northern king — all evaluated against this foundational apostasy. Dan was later captured by Ben-hadad of Aram.',
    modern_description: 'Tel Dan is in the Upper Galilee, near Kibbutz Dan at the foot of Mount Hermon. The Dan Nature Reserve contains the spring that is one of the Jordan River\'s three main sources, and extensive Iron Age ruins including a well-preserved gate complex.',
    tappable_terms: ['Dan'],
  },
  {
    ancient_name: 'Hamath',
    modern_name: 'Hama, Syria',
    lat: 35.1418, lng: 36.7539,
    significance: 'The traditional northern boundary of the Promised Land; the extent of Jeroboam II\'s conquests fulfilled a prophecy of Jonah',
    ancient_description: 'An important city on the Orontes River in central Syria, marking the ideal northern boundary of the Promised Land ("from the entering of Hamath"). Under Jeroboam II — despite his wickedness — God showed compassion and expanded Israel\'s borders from the entrance of Hamath to the sea of the Arabah, as the prophet Jonah son of Amittai had predicted. Hamath was later captured by the Assyrian king Sargon II, an ominous warning that the biblical northern border was in Assyrian hands.',
    modern_description: 'Modern Hama is Syria\'s fourth-largest city on the Orontes River, famous for its ancient Norias (giant waterwheels). The ancient Tel is at the center of the modern city.',
    tappable_terms: ['Hamath'],
  },
  {
    ancient_name: 'Tirzah',
    modern_name: 'Tell el-Far\'ah North, northern West Bank',
    lat: 32.2744, lng: 35.3489,
    significance: 'First capital of the northern Kingdom of Israel — where Zimri burned himself to death and Omri began his dynasty',
    ancient_description: 'The first established capital of the northern Kingdom of Israel. Jeroboam and his successors Nadab, Baasha, and Elah all ruled from Tirzah. When Zimri killed Elah and seized the throne, the army encamped against Gibbethon chose Omri as king instead. Omri besieged Tirzah; Zimri saw he was taken and burned the palace over himself, dying after a reign of only seven days. Omri reigned at Tirzah for six years before purchasing the hill of Samaria and building a new capital there.',
    modern_description: 'Identified with Tell el-Far\'ah North (Tell el-Fara) in the northern West Bank, northeast of Nablus. Major French excavations revealed the Iron Age city plan and a royal storeroom.',
    tappable_terms: ['Tirzah'],
  },
  {
    ancient_name: 'Elath',
    modern_name: 'Aqaba/Eilat area, northern Red Sea',
    lat: 29.558, lng: 35.002,
    significance: 'Israel\'s Red Sea port — a gauge of imperial strength; restored under Uzziah, lost forever under Ahaz',
    ancient_description: 'A port city on the Gulf of Aqaba, important for Red Sea trade with Arabia and beyond. Solomon\'s fleet launched from nearby Ezion-Geber. The city was captured by Edom, retaken by Amaziah, and restored by Uzziah who built it up. Later, when Rezin king of Aram allied with Pekah against Judah and attacked during Ahaz\'s reign, Rezin took Elath and gave it to Edom permanently — a loss that symbolized Judah\'s weakening grip on its territories.',
    modern_description: 'The area corresponds to modern Eilat (Israel) and Aqaba (Jordan) at the northern tip of the Red Sea\'s Gulf of Aqaba.',
    tappable_terms: ['Elath', 'Elat'],
  },
  {
    ancient_name: 'Abel-beth-maacah',
    modern_name: 'Tell Abil el-Qamh, Upper Galilee, Israel',
    lat: 33.2456, lng: 35.5908,
    significance: 'A northern city attacked by Ben-hadad at Asa\'s invitation and later captured by Tiglath-pileser\'s first deportation of Israel',
    ancient_description: 'A city in the far north near the sources of the Jordan, in the region of Aram-Maacah. When Asa of Judah paid Ben-hadad of Damascus to break his alliance with Israel\'s Baasha, Ben-hadad attacked the northern cities including Abel-beth-maacah. Nearly two centuries later, when the Assyrian king Tiglath-pileser III came against Pekah king of Israel, he conquered the north including Abel-beth-maacah and Galilee, deporting the population to Assyria — the first mass deportation of Israelites, a grim foreshadowing of the end.',
    modern_description: 'Identified with Tell Abil el-Qamh (Tell Avel Bet Ma\'acha) in the Upper Galilee near Kibbutz Kfar Szold, close to the Lebanese border.',
    tappable_terms: ['Abel-beth-maacah'],
  },
  {
    ancient_name: 'Carchemish',
    modern_name: 'Karkamish archaeological site, Turkey/Syria border',
    lat: 36.823, lng: 38.023,
    significance: 'Where Nebuchadnezzar defeated Pharaoh Necho in 605 BC, sealing Babylon\'s dominance and Judah\'s eventual destruction',
    ancient_description: 'A major fortress on the Euphrates River at the crossing point of ancient trade routes. Pharaoh Necho was marching to Carchemish to aid the remnant of Assyria against Babylon when Josiah intercepted him at Megiddo and was killed. At the Battle of Carchemish in 605 BC, the Babylonian crown prince Nebuchadnezzar crushed the Egyptian army, ending Egypt\'s influence in the Levant and establishing Babylon as the dominant world power. Within a few years, Nebuchadnezzar would turn his attention to Judah.',
    modern_description: 'The ancient site of Carchemish straddles the modern Turkish-Syrian border, near the Turkish town of Karkamish. British Museum excavations from 1878 and again from 2011 have revealed Neo-Hittite and Assyrian remains.',
    tappable_terms: ['Carchemish'],
  },
  {
    ancient_name: 'Aphek',
    modern_name: 'Tel Aphek (Antipatris), near Petah Tikva, Israel',
    lat: 32.1037, lng: 34.9176,
    significance: 'Where Ben-hadad\'s retreating Arameans were crushed and Ben-hadad surrendered to Ahab — the treaty Ahab should not have made',
    ancient_description: 'After Ben-hadad\'s defeat in open battle near Samaria, the surviving Aramean troops fled to Aphek, where a wall collapsed and killed 27,000 men. Ben-hadad hid in an inner chamber; his servants proposed approaching Ahab in sackcloth and begging for mercy. Ahab called Ben-hadad his "brother," made a treaty with him, and let him go — an act for which a prophet condemned Ahab: "Because thou hast let go out of thy hand a man whom I appointed to utter destruction, therefore thy life shall go for his life." Later Elisha prophesied that Jehoash would smite Syria at Aphek.',
    modern_description: 'Tel Aphek (known in the Roman period as Antipatris) is located near the sources of the Yarkon River, near modern Petah Tikva. It is a national park with substantial multi-period archaeological remains.',
    tappable_terms: ['Aphek'],
  },
  {
    ancient_name: 'Penuel',
    modern_name: 'Tulul edh-Dhahab, Jabbok River, Jordan',
    lat: 32.10, lng: 35.73,
    significance: 'Fortified by Jeroboam I as part of establishing his new northern kingdom east of the Jordan',
    ancient_description: 'A site east of the Jordan at the Jabbok River crossing, where Jacob had wrestled with God and named the place "the face of God." After the kingdom split, Jeroboam I went to Penuel and fortified it — establishing royal presence east of the Jordan among the Transjordanian tribes and on the important King\'s Highway route. The fortification was part of Jeroboam\'s project to secure his newly independent kingdom\'s borders.',
    modern_description: 'Identified with Tulul edh-Dhahab ("the mounds of gold") on the Jabbok River (Nahr ez-Zarqa) in modern Jordan, east of the Jordan Valley.',
    tappable_terms: ['Penuel', 'Peniel'],
  },
];

// ─── Tappable terms for EXISTING 9 places ────────────────────────────────────
// These won't be re-inserted but we still need to seed chapter_places for them

const EXISTING_PLACE_TERMS: Record<string, string[]> = {
  'Mount Carmel':  ['mount Carmel', 'Mount Carmel', 'Carmel'],
  'Kishon':        ['Kishon', 'brook Kishon', 'river Kishon'],
  'Samaria':       ['Samaria', 'Samaritan', 'Samaritans'],
  'Jezreel':       ['Jezreel', 'Jezreelite', 'Jezreelitess', 'valley of Jezreel'],
  'Zarephath':     ['Zarephath'],
  'Horeb':         ['Horeb', 'mount Horeb'],
  'Jerusalem':     ['Jerusalem'],
  'Lachish':       ['Lachish'],
  'Nineveh':       ['Nineveh', 'Assyria', 'Assyrian', 'Assyrians'],
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

function escapeRegex(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function textContainsTerm(text: string, term: string): boolean {
  return new RegExp(`\\b${escapeRegex(term)}\\b`, 'i').test(text);
}

function textContainsAnyTerm(text: string, terms: string[]): boolean {
  return terms.some(t => textContainsTerm(text, t));
}

function sleep(ms: number) {
  return new Promise(r => setTimeout(r, ms));
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log('\n=== Seeding Places ===\n');

  // 1. Fetch existing places
  const { data: existingPlaces } = await supabase.from('places').select('id, ancient_name');
  const existingNames = new Set(existingPlaces?.map((p: any) => p.ancient_name) ?? []);
  const placeIdByName = new Map<string, string>(
    existingPlaces?.map((p: any) => [p.ancient_name, p.id]) ?? []
  );

  // 2. Insert new places
  console.log('--- Inserting new places ---');
  let added = 0;
  for (const p of NEW_PLACES) {
    if (existingNames.has(p.ancient_name)) {
      console.log(`  skip (exists): ${p.ancient_name}`);
      const existing = existingPlaces?.find((e: any) => e.ancient_name === p.ancient_name);
      if (existing) placeIdByName.set(p.ancient_name, existing.id);
      continue;
    }
    const { data, error } = await supabase.from('places').insert({
      ancient_name: p.ancient_name,
      modern_name:  p.modern_name,
      lat:          p.lat,
      lng:          p.lng,
      significance: p.significance,
      ancient_description: p.ancient_description,
      modern_description:  p.modern_description,
    }).select('id').single();
    if (error) {
      console.error(`  ERROR inserting ${p.ancient_name}:`, error.message);
      continue;
    }
    placeIdByName.set(p.ancient_name, data.id);
    console.log(`  + ${p.ancient_name}`);
    added++;
  }
  console.log(`\n${added} new places inserted.\n`);

  // 3. Fetch all chapters with verse text
  const { data: books } = await supabase.from('books').select('id, name');
  const { data: chapters } = await supabase.from('chapters').select('id, chapter_number, book_id, verses');
  const bookMap = new Map(books?.map((b: any) => [b.id, b.name]) ?? []);

  // 4. Fetch existing chapter_places rows to avoid duplicates
  const { data: existingCPs } = await supabase.from('chapter_places').select('chapter_id, place_id');
  const existingCPSet = new Set(
    existingCPs?.map((r: any) => `${r.chapter_id}::${r.place_id}`) ?? []
  );

  // 5. Build a complete map of all places → tappable terms
  const allPlaceTerms: Array<{ name: string; placeId: string; terms: string[] }> = [];

  // Existing 9 places
  for (const [name, terms] of Object.entries(EXISTING_PLACE_TERMS)) {
    const id = placeIdByName.get(name);
    if (id) allPlaceTerms.push({ name, placeId: id, terms });
  }
  // New 20 places
  for (const p of NEW_PLACES) {
    const id = placeIdByName.get(p.ancient_name);
    if (id) allPlaceTerms.push({ name: p.ancient_name, placeId: id, terms: p.tappable_terms });
  }

  // 6. Scan chapters and seed chapter_places
  console.log('--- Seeding chapter_places ---');
  let insertedCPs = 0;
  let skippedCPs = 0;

  for (const ch of chapters ?? []) {
    const bookName = bookMap.get(ch.book_id) ?? '?';
    const verses: { verse_number: number; text: string }[] = ch.verses ?? [];
    if (verses.length === 0) continue;

    const fullText = verses.map((v: any) => v.text).join(' ');

    const toInsert: Array<{ chapter_id: string; place_id: string; tappable_terms: string[]; map_focus: boolean }> = [];

    for (const { placeId, terms } of allPlaceTerms) {
      if (existingCPSet.has(`${ch.id}::${placeId}`)) { skippedCPs++; continue; }
      if (textContainsAnyTerm(fullText, terms)) {
        // Determine which terms actually appear (subset to use as tappable_terms)
        const found = terms.filter(t => textContainsTerm(fullText, t));
        toInsert.push({ chapter_id: ch.id, place_id: placeId, tappable_terms: found, map_focus: false });
      }
    }

    if (toInsert.length > 0) {
      const { error } = await supabase.from('chapter_places').insert(toInsert);
      if (error) {
        console.error(`  ERROR for ${bookName} ${ch.chapter_number}:`, error.message);
      } else {
        console.log(`  ✓ ${bookName} ${ch.chapter_number}: +${toInsert.length} places (${toInsert.map(r => allPlaceTerms.find(p => p.placeId === r.place_id)?.name).join(', ')})`);
        insertedCPs += toInsert.length;
        // Mark as existing so we don't reinsert in this run
        toInsert.forEach(r => existingCPSet.add(`${r.chapter_id}::${r.place_id}`));
      }
    }
  }

  console.log(`\nDone! ${insertedCPs} chapter_places inserted, ${skippedCPs} skipped (already existed).\n`);
}

main().catch(console.error);
