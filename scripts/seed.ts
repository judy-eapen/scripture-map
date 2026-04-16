// Run: npx tsx scripts/seed.ts
// Prerequisites:
//   npm install -D tsx dotenv
// Or set env vars manually before running:
//   NEXT_PUBLIC_SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... npx tsx scripts/seed.ts

import * as fs from 'fs';
import * as path from 'path';
import { createClient } from '@supabase/supabase-js';

// ---------------------------------------------------------------------------
// Load .env.local manually (no dotenv dependency required)
// ---------------------------------------------------------------------------
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

// ---------------------------------------------------------------------------
// Supabase client — service role to bypass RLS
// ---------------------------------------------------------------------------
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  console.error(
    'Missing env vars. Ensure NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set in .env.local'
  );
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: { persistSession: false },
});

// ---------------------------------------------------------------------------
// Helper — throw on Supabase error
// ---------------------------------------------------------------------------
function check<T>(result: { data: T | null; error: unknown }): T {
  if (result.error) throw result.error;
  if (result.data === null) throw new Error('Expected data but Supabase returned null');
  return result.data;
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

// 1 Kings 18 verses (from mock data)
const verses1Kings18 = [
  { verse_number: 1,  text: 'After many days the word of the LORD came to Elijah, in the third year, saying, "Go, show yourself to Ahab; and I will send rain upon the earth."' },
  { verse_number: 2,  text: 'So Elijah went to show himself to Ahab. Now the famine was severe in Samaria.' },
  { verse_number: 3,  text: 'And Ahab called Obadiah, who was over the household. (Now Obadiah feared the LORD greatly;' },
  { verse_number: 4,  text: 'and when Jezebel cut off the prophets of the LORD, Obadiah took a hundred prophets and hid them by fifties in a cave, and fed them with bread and water.)' },
  { verse_number: 5,  text: 'And Ahab said to Obadiah, "Go through the land to all the springs of water and to all the valleys; perhaps we may find grass and save the horses and mules alive, and not lose some of the animals."' },
  { verse_number: 7,  text: 'And as Obadiah was on the way, behold, Elijah met him; and Obadiah recognized him, and fell on his face, and said, "Is it you, my lord Elijah?"' },
  { verse_number: 8,  text: 'And he answered him, "It is I. Go, tell your lord, \'Behold, Elijah is here.\'"' },
  { verse_number: 17, text: 'When Ahab saw Elijah, Ahab said to him, "Is it you, you troubler of Israel?"' },
  { verse_number: 18, text: 'And he answered, "I have not troubled Israel; but you have, and your father\'s house, because you have forsaken the commandments of the LORD and followed the Baals."' },
  { verse_number: 19, text: '"Now therefore send and gather all Israel to me at Mount Carmel, and the four hundred and fifty prophets of Baal and the four hundred prophets of Asherah, who eat at Jezebel\'s table."' },
  { verse_number: 20, text: 'So Ahab sent to all the people of Israel, and gathered the prophets together at Mount Carmel.' },
  { verse_number: 21, text: 'And Elijah came near to all the people, and said, "How long will you go limping with two different opinions? If the LORD is God, follow him; but if Baal, then follow him." And the people did not answer him a word.' },
  { verse_number: 36, text: 'And at the time of the offering of the oblation, Elijah the prophet came near and said, "O LORD, God of Abraham, Isaac, and Israel, let it be known this day that thou art God in Israel, and that I am thy servant, and that I have done all these things at thy word."' },
  { verse_number: 37, text: '"Answer me, O LORD, answer me, that this people may know that thou, O LORD, art God, and that thou hast turned their hearts back."' },
  { verse_number: 38, text: 'Then the fire of the LORD fell, and consumed the burnt offering, and the wood, and the stones, and the dust, and licked up the water that was in the trench.' },
  { verse_number: 39, text: 'And when all the people saw it, they fell on their faces; and they said, "The LORD, he is God; the LORD, he is God."' },
  { verse_number: 40, text: 'And Elijah said to them, "Seize the prophets of Baal; let not one of them escape." And they seized them; and Elijah brought them down to the brook Kishon, and killed them there.' },
  { verse_number: 41, text: 'And Elijah said to Ahab, "Go up, eat and drink; for there is a sound of the rushing of rain."' },
  { verse_number: 45, text: 'And in a little while the heavens grew black with clouds and wind, and there was a great rain; and Ahab rode and went to Jezreel.' },
  { verse_number: 46, text: 'And the hand of the LORD was on Elijah; and he girded up his loins and ran before Ahab to the entrance of Jezreel.' },
];

// 1 Kings 17 representative verses
const verses1Kings17 = [
  { verse_number: 1,  text: 'Now Elijah the Tishbite, of Tishbe in Gilead, said to Ahab, "As the LORD the God of Israel lives, before whom I stand, there shall be neither dew nor rain these years, except by my word."' },
  { verse_number: 3,  text: 'Depart from here and turn eastward, and hide yourself by the brook Cherith, that is east of the Jordan.' },
  { verse_number: 4,  text: 'You shall drink from the brook, and I have commanded the ravens to feed you there.' },
  { verse_number: 6,  text: 'And the ravens brought him bread and meat in the morning, and bread and meat in the evening; and he drank from the brook.' },
  { verse_number: 9,  text: 'Arise, go to Zarephath, which belongs to Sidon, and dwell there. Behold, I have commanded a widow there to feed you.' },
  { verse_number: 17, text: 'After this the son of the woman, the mistress of the house, became ill; and his illness was so severe that there was no breath left in him.' },
  { verse_number: 22, text: 'And the LORD hearkened to the voice of Elijah; and the soul of the child came into him again, and he revived.' },
  { verse_number: 24, text: 'And the woman said to Elijah, "Now I know that you are a man of God, and that the word of the LORD in your mouth is truth."' },
];

// 1 Kings 19 representative verses
const verses1Kings19 = [
  { verse_number: 3,  text: 'Then he was afraid, and he arose and went for his life, and came to Beer-sheba, which belongs to Judah, and left his servant there.' },
  { verse_number: 4,  text: 'But he himself went a day\'s journey into the wilderness, and came and sat down under a broom tree; and he asked that he might die, saying, "It is enough; now, O LORD, take away my life; for I am not better than my fathers."' },
  { verse_number: 5,  text: 'And he lay down and slept under a broom tree; and behold, an angel touched him, and said to him, "Arise and eat."' },
  { verse_number: 8,  text: 'And he arose, and ate and drank, and went in the strength of that food forty days and forty nights to Horeb the mount of God.' },
  { verse_number: 12, text: 'And after the earthquake a fire, but the LORD was not in the fire; and after the fire a still small voice.' },
  { verse_number: 15, text: 'And the LORD said to him, "Go, return on your way to the wilderness of Damascus; and when you arrive, you shall anoint Hazael to be king over Syria."' },
  { verse_number: 19, text: 'So he departed from there, and found Elisha the son of Shaphat, who was plowing, with twelve yoke of oxen before him, and he was with the twelfth; and Elijah passed by him and cast his mantle upon him.' },
];

// All kings from timelineKings (positive bc values — negated on insert)
const timelineKings = [
  // Northern Kingdom (Israel)
  { name: 'Jeroboam I',  kingdom: 'north', reign_start_bc: 930, reign_end_bc: 909, verdict: 'mixed' },
  { name: 'Nadab',       kingdom: 'north', reign_start_bc: 909, reign_end_bc: 908, verdict: 'evil' },
  { name: 'Baasha',      kingdom: 'north', reign_start_bc: 908, reign_end_bc: 886, verdict: 'evil' },
  { name: 'Elah',        kingdom: 'north', reign_start_bc: 886, reign_end_bc: 885, verdict: 'evil' },
  { name: 'Zimri',       kingdom: 'north', reign_start_bc: 885, reign_end_bc: 885, verdict: 'evil' },
  { name: 'Omri',        kingdom: 'north', reign_start_bc: 885, reign_end_bc: 874, verdict: 'evil' },
  { name: 'Ahab',        kingdom: 'north', reign_start_bc: 874, reign_end_bc: 853, verdict: 'evil' },
  { name: 'Ahaziah',     kingdom: 'north', reign_start_bc: 853, reign_end_bc: 852, verdict: 'evil' },
  { name: 'Joram',       kingdom: 'north', reign_start_bc: 852, reign_end_bc: 841, verdict: 'evil' },
  { name: 'Jehu',        kingdom: 'north', reign_start_bc: 841, reign_end_bc: 814, verdict: 'mixed' },
  { name: 'Jehoahaz',    kingdom: 'north', reign_start_bc: 814, reign_end_bc: 798, verdict: 'evil' },
  { name: 'Jehoash',     kingdom: 'north', reign_start_bc: 798, reign_end_bc: 782, verdict: 'evil' },
  { name: 'Jeroboam II', kingdom: 'north', reign_start_bc: 782, reign_end_bc: 753, verdict: 'evil' },
  { name: 'Zechariah',   kingdom: 'north', reign_start_bc: 753, reign_end_bc: 752, verdict: 'evil' },
  { name: 'Shallum',     kingdom: 'north', reign_start_bc: 752, reign_end_bc: 752, verdict: 'evil' },
  { name: 'Menahem',     kingdom: 'north', reign_start_bc: 752, reign_end_bc: 742, verdict: 'evil' },
  { name: 'Pekahiah',    kingdom: 'north', reign_start_bc: 742, reign_end_bc: 740, verdict: 'evil' },
  { name: 'Pekah',       kingdom: 'north', reign_start_bc: 740, reign_end_bc: 732, verdict: 'evil' },
  { name: 'Hoshea',      kingdom: 'north', reign_start_bc: 732, reign_end_bc: 722, verdict: 'evil' },
  // Southern Kingdom (Judah)
  { name: 'Rehoboam',    kingdom: 'south', reign_start_bc: 930, reign_end_bc: 913, verdict: 'evil' },
  { name: 'Abijah',      kingdom: 'south', reign_start_bc: 913, reign_end_bc: 911, verdict: 'evil' },
  { name: 'Asa',         kingdom: 'south', reign_start_bc: 911, reign_end_bc: 870, verdict: 'good' },
  { name: 'Jehoshaphat', kingdom: 'south', reign_start_bc: 870, reign_end_bc: 848, verdict: 'good' },
  { name: 'Jehoram',     kingdom: 'south', reign_start_bc: 848, reign_end_bc: 841, verdict: 'evil' },
  { name: 'Ahaziah',     kingdom: 'south', reign_start_bc: 841, reign_end_bc: 840, verdict: 'evil' },
  { name: 'Athaliah',    kingdom: 'south', reign_start_bc: 841, reign_end_bc: 835, verdict: 'evil', is_queen: true },
  { name: 'Joash',       kingdom: 'south', reign_start_bc: 835, reign_end_bc: 796, verdict: 'mixed' },
  { name: 'Amaziah',     kingdom: 'south', reign_start_bc: 796, reign_end_bc: 767, verdict: 'mixed' },
  { name: 'Uzziah',      kingdom: 'south', reign_start_bc: 767, reign_end_bc: 740, verdict: 'good', dates_approximate: true },
  { name: 'Jotham',      kingdom: 'south', reign_start_bc: 740, reign_end_bc: 732, verdict: 'good' },
  { name: 'Ahaz',        kingdom: 'south', reign_start_bc: 732, reign_end_bc: 716, verdict: 'evil' },
  { name: 'Hezekiah',    kingdom: 'south', reign_start_bc: 716, reign_end_bc: 687, verdict: 'good' },
  { name: 'Manasseh',    kingdom: 'south', reign_start_bc: 687, reign_end_bc: 642, verdict: 'evil' },
  { name: 'Amon',        kingdom: 'south', reign_start_bc: 642, reign_end_bc: 640, verdict: 'evil' },
  { name: 'Josiah',      kingdom: 'south', reign_start_bc: 640, reign_end_bc: 609, verdict: 'good' },
  { name: 'Jehoahaz',    kingdom: 'south', reign_start_bc: 609, reign_end_bc: 608, verdict: 'evil' },
  { name: 'Jehoiakim',   kingdom: 'south', reign_start_bc: 609, reign_end_bc: 598, verdict: 'evil' },
  { name: 'Jehoiachin',  kingdom: 'south', reign_start_bc: 598, reign_end_bc: 597, verdict: 'evil' },
  { name: 'Zedekiah',    kingdom: 'south', reign_start_bc: 597, reign_end_bc: 586, verdict: 'evil' },
];

// Non-king people
const nonKingPeople = [
  {
    name: 'Elijah',
    alt_names: ['Elijah the Tishbite', 'Elijah the prophet'],
    type: 'prophet' as const,
    bio: "The great prophet of Israel who ministered during the reigns of Ahab and Ahaziah. Tishbite of Gilead, called to confront Baal worship and defend the covenant with fierce boldness. Fed by ravens at the brook Cherith; sheltered by a widow in Zarephath. His confrontation with Baal's prophets at Mount Carmel is one of the most dramatic moments in all of Scripture.",
    contemporary_events: 'Contemporary with Ahab of Israel (~874\u2013853 BC) and Ben-hadad I of Aram. Phoenician princess Jezebel married into the northern royal house, bringing systematic Baal worship.',
  },
  {
    name: 'Obadiah',
    type: 'official' as const,
    kingdom: 'north' as const,
    bio: "Palace administrator over Ahab's household \u2014 a man who \"feared the LORD greatly\" even while serving the most wicked king in Israel's history. At great personal risk he hid 100 of the LORD's prophets in caves during Jezebel's purge, feeding them bread and water. A portrait of quiet faithfulness under political compromise.",
    contemporary_events: "Served during Ahab's reign (~874\u2013853 BC), likely during the severe drought described in 1 Kings 17\u201318.",
  },
  {
    name: 'Jezebel',
    type: 'foreign_ruler' as const,
    kingdom: 'foreign' as const,
    bio: 'Phoenician princess from Sidon, daughter of Ethbaal king of Tyre, who married Ahab and became queen of Northern Israel. Actively promoted Baal worship as state religion, funded 450 prophets of Baal and 400 prophets of Asherah, and systematically executed prophets of the LORD. Among the most reviled figures in Kings.',
    contemporary_events: "Daughter of Ethbaal of Sidon. Her daughter Athaliah would later seize the throne of Judah, extending the Omri dynasty's influence south.",
  },
  {
    name: 'Elisha',
    type: 'prophet' as const,
    bio: 'Successor to Elijah, anointed at Abel-meholah. Performed twice as many miracles as Elijah, ministered through the reigns of multiple northern kings.',
  },
];

// Places
const places = [
  {
    ancient_name: 'Mount Carmel',
    modern_name: 'Har HaCarmel, near Haifa, Israel',
    lat: 32.7517,
    lng: 35.0654,
    significance: 'Where Elijah called fire from heaven and broke the 3-year drought \u2014 the most dramatic confrontation in Kings',
    ancient_description: 'A forested promontory jutting 25 km into the Mediterranean, rising 500 m above the Jezreel Valley. "Carmel" means garden or vineyard \u2014 its dense woods made it sacred ground for Canaanite and Israelite worship alike. The ridge was visible across all of northern Israel. Here Elijah arranged 12 stones for an altar, ordered four jars of water poured three times over the offering, and prayed once \u2014 whereupon fire fell and consumed the altar, stones, and water. The crowd who watched declared "The LORD, he is God."',
    modern_description: "Carmel is today a forested mountain range on the northern Israeli coast, with the city of Haifa spreading up its lower slopes. The Carmelite monastery of Muhraqa (\"place of burning\") marks the traditional site of the altar on the ridge's southern edge, with a panoramic view of the entire Jezreel Valley. Stella Maris monastery near Haifa Bay is another Carmelite pilgrimage site tied to Elijah. The Carmel National Park covers much of the ridge \u2014 one of Israel's largest nature reserves. The peak is about 35 km southwest of Nazareth.",
  },
  {
    ancient_name: 'Kishon',
    modern_name: 'Nahal Kishon (Kishon River), Jezreel Valley, Israel',
    lat: 32.7006,
    lng: 35.1115,
    significance: 'Where Elijah executed the 450 prophets of Baal after the contest on Carmel \u2014 fulfilling Mosaic law on false prophets',
    ancient_description: "A seasonal wadi flowing from the Jezreel Valley northwest to the sea, running at the foot of Mount Carmel. The Kishon already carried a weight of history: it was the torrent where Deborah and Barak's victory over Sisera's iron chariots happened (Judges 4\u20135). After fire fell on Carmel, Elijah commanded the crowd to seize the 450 prophets of Baal. He led them down the mountain to the river's edge and executed them there \u2014 the Mosaic penalty for false prophecy (Deuteronomy 18:20). Rain then broke the three-year drought the same evening.",
    modern_description: 'The Kishon River (Nahal Kishon) still flows through the Jezreel Valley to Haifa Bay, though much of its lower course is channeled and heavily industrialized near the port. The upper valley near the Carmel foothills remains agricultural. Significant Bronze and Iron Age sites line its banks. The river is part of ongoing ecological restoration efforts \u2014 a sad contrast to the dramatic scene it witnessed in this chapter.',
  },
  {
    ancient_name: 'Samaria',
    modern_name: 'Sabastiyah (ancient Sebastos), northern West Bank',
    lat: 32.2775,
    lng: 35.1983,
    significance: "Capital of the Northern Kingdom under Ahab and Jezebel \u2014 seat of Israel's most wicked royal court and Baal's state temple",
    ancient_description: "Capital of Northern Israel, founded c. 880 BC by Ahab's father Omri on a strategically isolated hill purchased from a man named Shemer. Omri chose it for its natural defensibility \u2014 a rounded summit with steep slopes on all sides. Ahab made it magnificent: an ivory-inlaid palace, a Baal temple funded by Jezebel, and an Asherah pole. The severe drought of 1 Kings 17\u201318 hit Samaria hardest \u2014 Ahab dispatched his administrator Obadiah across the kingdom looking for water to keep the royal horses alive. It was to Samaria that Elijah was summoned before the Carmel confrontation.",
    modern_description: 'The site today is Sabastiyah in the northern West Bank, about 10 km northwest of Nablus. Harvard University excavations (1908\u20131910) unearthed the Israelite royal compound and hundreds of carved ivory plaques \u2014 the direct confirmation of the biblical "ivory house of Ahab" (1 Kings 22:39). Alexander the Great and later Herod the Great both rebuilt the city (renaming it Sebastos for Augustus). The Herodian temple columns and colonnaded street are still visible. The site is open to visitors but within the Palestinian Authority, requiring coordination.',
  },
  {
    ancient_name: 'Jezreel',
    modern_name: "Tel Jezreel (near Yizre'el village), Jezreel Valley, Israel",
    lat: 32.5444,
    lng: 35.3294,
    significance: "Ahab's royal winter capital \u2014 where Elijah outran the king's chariot after the rain broke, and where Jezebel would later die",
    ancient_description: "A fortified royal compound on a commanding spur overlooking the Jezreel Valley \u2014 Ahab's secondary palace and winter residence, chosen for the valley's agricultural wealth and strategic sight lines. After fire fell on Carmel and rain broke the drought, Ahab rode his chariot here; Elijah \u2014 \"girded up his loins\" and empowered by God \u2014 ran the 30 km ahead of the chariot on foot. Jezreel later became the stage for the tragedy of Naboth's vineyard, Ahab's unjust murder of an innocent man to seize his land (1 Kings 21), and the violent death of Jezebel under Jehu's revolt (2 Kings 9:30\u201337).",
    modern_description: "Tel Jezreel sits on a prominent limestone spur at the eastern end of the Jezreel Valley in northern Israel, near the small village of Yizre'el. Excavations led by Norma Franklin and David Ussishkin in the 1990s uncovered a massive Iron Age IIA enclosure \u2014 a moated, casemate-walled compound dated to the 9th century BC, consistent with a royal Israelite installation. The tel commands views of Mount Carmel to the west, Mount Gilboa to the southeast, and the entire valley floor. Modern Afula, about 5 km northwest, is the largest city in the region today.",
  },
  {
    ancient_name: 'Zarephath',
    modern_name: 'Sarafand, Lebanon',
    lat: 33.4547,
    lng: 35.2973,
    ancient_description: 'Phoenician coastal town where Elijah lodged with a widow during the drought, raised her son from the dead',
    modern_description: 'Modern Sarafand on the Lebanese coast, about 25 km south of Sidon.',
  },
  {
    ancient_name: 'Horeb',
    modern_name: 'Traditional: Jebel Musa, Sinai Peninsula, Egypt',
    lat: 28.5389,
    lng: 33.9753,
    ancient_description: 'The mountain of God, where Moses received the law. Elijah fled here after Carmel, walking 40 days, and heard God in the still small voice.',
    modern_description: "Jebel Musa (Mount Moses) in the Sinai Peninsula, traditional site of Mount Sinai, now a pilgrimage destination with Saint Catherine's Monastery at its base.",
  },
];

// Archaeological evidence
const archaeologicalEvidence = [
  {
    name: 'Black Obelisk of Shalmaneser III',
    artifact_type: 'obelisk' as const,
    date_bc: -825,
    description: 'A 2-meter black limestone obelisk carved with scenes of tribute-bearing from foreign kings. One panel depicts "Iaua son of Omri" \u2014 widely identified as Jehu of Israel \u2014 prostrating before Shalmaneser III of Assyria. Confirms the existence of the Omri dynasty (the royal house Ahab inherited and Elijah confronted).',
    museum_location: 'British Museum, London',
    // relevance_note used only in the chapter join
  },
  {
    name: 'Tel Dan Stele',
    artifact_type: 'stele' as const,
    date_bc: -835,
    description: 'Aramaic inscription discovered at Tel Dan in 1993\u201394 mentioning "the House of David" \u2014 the first extrabiblical reference to the Davidic dynasty.',
    museum_location: 'Israel Museum, Jerusalem',
  },
  {
    name: 'Mesha Stele',
    artifact_type: 'stele' as const,
    date_bc: -840,
    description: 'Moabite king Mesha boasts of victories over Israel and mentions the tribe of Gad, the city of Nebo, and "the house of Omri." Directly corroborates the Omri dynasty narrative in 1\u20132 Kings.',
    museum_location: 'Louvre, Paris',
  },
  {
    name: 'Kurkh Monolith',
    artifact_type: 'inscription' as const,
    date_bc: -852,
    description: "Assyrian king Shalmaneser III records the Battle of Qarqar (853 BC), naming 'Ahab the Israelite' (A-ha-ab-bu Sir-ila-a-a) as leader of 2,000 chariots and 10,000 soldiers in the coalition against him. One of the most direct Assyrian confirmations of a biblical king.",
    museum_location: 'British Museum, London',
  },
  {
    name: "Hezekiah's Tunnel",
    artifact_type: 'tunnel' as const,
    date_bc: -701,
    description: "A 533-meter water tunnel carved through bedrock beneath Jerusalem, routing water from the Gihon Spring to the Pool of Siloam. Built by Hezekiah before the Assyrian siege (2 Kings 20:20). The Siloam Inscription found inside records workers meeting in the middle.",
    museum_location: 'In situ, City of David, Jerusalem',
  },
];

// Neighboring nations
const neighboringNations = [
  {
    name: 'Phoenicia',
    modern_equivalent: 'coastal Lebanon',
    color_hex: '#FBBF24',
    description: "The Phoenician city-states of Tyre and Sidon dominated Mediterranean trade during the Iron Age. Jezebel's father Ethbaal was king of Sidon; her marriage to Ahab brought systematic Baal worship into Northern Israel as state religion.",
    key_rulers: [
      { name: 'Ethbaal', years: '887\u2013856 BC', note: 'Father of Jezebel; king of Tyre and Sidon' },
    ],
  },
  {
    name: 'Aram-Damascus',
    modern_equivalent: 'southwest Syria',
    color_hex: '#F87171',
    description: 'The Aramean kingdom centered at Damascus was the most persistent regional rival of Northern Israel throughout the 9th\u20138th centuries BC, raiding northern territories and exploiting moments of Israelite weakness.',
    key_rulers: [
      { name: 'Ben-Hadad I', years: '880\u2013842 BC', note: 'Signed treaty with Asa of Judah; raided northern Israel repeatedly' },
      { name: 'Hazael', years: '842\u2013800 BC', note: "Usurper who oppressed Israel after Jehu's coup \u2014 Elijah was told to anoint him" },
    ],
  },
  {
    name: 'Egypt',
    modern_equivalent: 'Egypt',
    color_hex: '#34D399',
    description: "Third Intermediate Period \u2014 Egyptian influence over the Levant had waned significantly; Egypt was largely uninvolved in Israelite politics during Ahab's reign.",
    key_rulers: [
      { name: 'Osorkon II', years: '874\u2013850 BC', note: '22nd Dynasty pharaoh; Egypt largely uninvolved in Levantine politics during this era' },
    ],
  },
  {
    name: 'Assyria',
    modern_equivalent: 'northern Iraq',
    color_hex: '#A78BFA',
    description: 'The rising Neo-Assyrian empire under Shalmaneser III was beginning to cast its shadow westward \u2014 a threat Ahab would eventually face at the Battle of Qarqar (853 BC).',
    key_rulers: [
      { name: 'Ashurnasirpal II', years: '883\u2013859 BC', note: 'Expanded Assyria to the Euphrates; Ahab would later face his son at Qarqar' },
      { name: 'Shalmaneser III', years: '859\u2013824 BC', note: 'Led the Battle of Qarqar (853 BC) where Ahab joined a coalition against him \u2014 confirmed on the Kurkh Monolith' },
    ],
  },
  {
    name: 'Moab',
    modern_equivalent: 'central Jordan',
    color_hex: '#9CA3AF',
    description: 'Perennial eastern neighbor; Israel and Judah fought repeatedly for control of the Transjordan plateau. The Mesha Stele records Moab throwing off Israelite control after Ahab died.',
    key_rulers: [
      { name: 'Mesha', years: '~ 860\u2013820 BC', note: 'Moabite king who rebelled against Israel after Ahab; dedicated his victory inscription to the god Chemosh' },
    ],
  },
  {
    name: 'Babylon',
    modern_equivalent: 'central Iraq',
    color_hex: '#D97706',
    description: 'The Neo-Babylonian empire under the Chaldean dynasty eventually replaced Assyria as the dominant power and destroyed Jerusalem in 586 BC.',
    key_rulers: [
      { name: 'Nebuchadnezzar II', years: '605\u2013562 BC', note: 'Sacked Jerusalem twice, deported Judeans, destroyed the temple in 586 BC' },
    ],
  },
];

// ---------------------------------------------------------------------------
// Chapter data: per-chapter overrides for 1 Kings 17, 18, 19
// ---------------------------------------------------------------------------

type ChapterOverride = {
  summary: string;
  year_start_bc: number | null;
  year_end_bc: number | null;
  verses: { verse_number: number; text: string }[];
};

const chapterOverrides: Record<string, ChapterOverride> = {
  '1 Kings:17': {
    summary:
      'Elijah the Tishbite bursts onto the scene, announcing to wicked King Ahab that a devastating drought will strike Israel at his word. God directs him east to the brook Cherith, where ravens miraculously deliver bread and meat each morning and evening. When the brook dries up, God sends Elijah north to Zarephath in Phoenicia, where a destitute widow is commanded to shelter him. Despite nearly exhausted supplies, her jar of flour and jug of oil do not run out through the entire drought. Then her son dies from illness, and Elijah intercedes dramatically, stretching himself over the boy three times and crying out to God \u2014 the child revives, the first resurrection in the Old Testament.',
    year_start_bc: -870,
    year_end_bc: -869,
    verses: verses1Kings17,
  },
  '1 Kings:18': {
    summary:
      "Three years into a catastrophic drought, God sends Elijah back to the wicked King Ahab. After a tense standoff, Elijah challenges all 450 prophets of Baal to a public contest on Mount Carmel \u2014 each side calls on their god to send fire. Baal's prophets cry out all day and receive nothing. Elijah prays once, and fire falls from heaven, consuming the offering, the altar, and even the water-soaked stones. The people fall on their faces crying \u201cThe LORD, he is God.\u201d The false prophets are executed at the Kishon River, and rain finally breaks the drought.",
    year_start_bc: -869,
    year_end_bc: -869,
    verses: verses1Kings18,
  },
  '1 Kings:19': {
    summary:
      "After Elijah's great victory on Carmel, Jezebel threatens his life and fear overtakes him. He flees south to Beersheba, then alone into the wilderness, sitting under a broom tree and asking to die. An angel appears twice, providing bread and water for the long journey ahead. Strengthened, Elijah walks forty days and forty nights to Horeb \u2014 the mountain of God \u2014 where he shelters in a cave. God asks him twice, \"What are you doing here, Elijah?\" A mighty wind, earthquake, and fire pass by, but God is not in them. Then comes a still small voice. Elijah pours out his despair; God gently commissions him again: anoint Hazael king of Aram, Jehu king of Israel, and Elisha as his prophetic successor. On his way back, Elijah finds Elisha plowing and casts his mantle over him.",
    year_start_bc: -869,
    year_end_bc: -868,
    verses: verses1Kings19,
  },
};

// ---------------------------------------------------------------------------
// Main seed function
// ---------------------------------------------------------------------------

async function main() {
  console.log('=== ScriptureMap seed script starting ===\n');

  // -------------------------------------------------------------------------
  // A. Books
  // -------------------------------------------------------------------------
  console.log('Seeding books...');
  const booksData = [
    { name: '1 Kings', total_chapters: 22, testament: 'old' },
    { name: '2 Kings', total_chapters: 25, testament: 'old' },
  ];
  const books = check(
    await supabase
      .from('books')
      .upsert(booksData, { onConflict: 'name' })
      .select()
  );
  const bookIdByName: Record<string, string> = {};
  for (const b of books) bookIdByName[b.name] = b.id;
  console.log(`  Inserted/updated ${books.length} books.`);

  // -------------------------------------------------------------------------
  // B. Chapters — stub all 47
  // -------------------------------------------------------------------------
  console.log('Seeding chapters...');
  const chaptersToInsert: {
    book_id: string;
    chapter_number: number;
    summary: string;
    year_start_bc: number | null;
    year_end_bc: number | null;
    verses: { verse_number: number; text: string }[];
  }[] = [];

  for (const [bookName, totalChapters] of [['1 Kings', 22], ['2 Kings', 25]] as [string, number][]) {
    const bookId = bookIdByName[bookName];
    for (let ch = 1; ch <= totalChapters; ch++) {
      const overrideKey = `${bookName}:${ch}`;
      const override = chapterOverrides[overrideKey];
      chaptersToInsert.push({
        book_id: bookId,
        chapter_number: ch,
        summary: override?.summary ?? '',
        year_start_bc: override?.year_start_bc ?? null,
        year_end_bc: override?.year_end_bc ?? null,
        verses: override?.verses ?? [],
      });
    }
  }

  const chapters = check(
    await supabase
      .from('chapters')
      .upsert(chaptersToInsert, { onConflict: 'book_id,chapter_number' })
      .select()
  );
  console.log(`  Inserted/updated ${chapters.length} chapters.`);

  // Build lookup: "bookName:chapterNumber" -> chapter id
  const chapterIdByKey: Record<string, string> = {};
  for (const ch of chapters) {
    const bookName = Object.entries(bookIdByName).find(([, id]) => id === ch.book_id)?.[0];
    if (bookName) chapterIdByKey[`${bookName}:${ch.chapter_number}`] = ch.id;
  }

  const ch17Id = chapterIdByKey['1 Kings:17'];
  const ch18Id = chapterIdByKey['1 Kings:18'];
  const ch19Id = chapterIdByKey['1 Kings:19'];

  // -------------------------------------------------------------------------
  // C. People — kings + non-kings
  // -------------------------------------------------------------------------
  console.log('Seeding people...');

  // Kings — note: timelineKings has positive BC values; negate for DB
  const kingsToInsert = timelineKings.map((k) => ({
    name: k.name,
    type: 'king',
    kingdom: k.kingdom,
    reign_start_bc: -Math.abs(k.reign_start_bc),
    reign_end_bc: -Math.abs(k.reign_end_bc),
    verdict: k.verdict ?? null,
    dates_approximate: (k as { dates_approximate?: boolean }).dates_approximate ?? false,
    is_queen: (k as { is_queen?: boolean }).is_queen ?? false,
    bio: '',
  }));

  // Check which kings already exist (no unique constraint on name+kingdom, so check first)
  const { data: existingKings } = await supabase
    .from('people')
    .select('id, name, kingdom')
    .eq('type', 'king');

  const existingKingKeys = new Set(
    (existingKings ?? []).map((k: { name: string; kingdom: string | null }) => `${k.name}:${k.kingdom}`)
  );

  const kingsToActuallyInsert = kingsToInsert.filter(
    k => !existingKingKeys.has(`${k.name}:${k.kingdom}`)
  );

  let insertedKings: { id: string; name: string; kingdom: string | null }[] = existingKings ?? [];
  if (kingsToActuallyInsert.length > 0) {
    const newKings = check(await supabase.from('people').insert(kingsToActuallyInsert).select());
    insertedKings = [...insertedKings, ...newKings];
  }

  // Non-king people (Elijah, Obadiah, Jezebel, Elisha)
  // Build as minimal inserts — these have no unique DB constraint so we check first
  const nonKingInserts = nonKingPeople.map((p) => ({
    name: p.name,
    alt_names: (p as { alt_names?: string[] }).alt_names ?? null,
    type: p.type,
    kingdom: (p as { kingdom?: 'north' | 'south' | 'foreign' }).kingdom ?? null,
    bio: p.bio,
    contemporary_events: (p as { contemporary_events?: string }).contemporary_events ?? null,
  }));

  // Check which non-king people already exist (by name)
  const { data: existingNonKings } = await supabase
    .from('people')
    .select('id, name')
    .in('name', nonKingPeople.map((p) => p.name))
    .in('type', ['prophet', 'official', 'foreign_ruler', 'other']);

  const existingNonKingNames = new Set((existingNonKings ?? []).map((p: { name: string }) => p.name));

  const toInsertNonKings = nonKingInserts.filter((p) => !existingNonKingNames.has(p.name));
  let insertedNonKings: { id: string; name: string }[] = existingNonKings ?? [];

  if (toInsertNonKings.length > 0) {
    const newNonKings = check(await supabase.from('people').insert(toInsertNonKings).select());
    insertedNonKings = [...insertedNonKings, ...newNonKings];
  }

  const allPeople = [...insertedKings, ...insertedNonKings];
  console.log(`  Inserted/updated ${allPeople.length} people.`);

  // Build people lookup by name (for same-named kings we also need kingdom; store both)
  const personIdByName: Record<string, string> = {};
  const personIdByNameKingdom: Record<string, string> = {};
  for (const p of allPeople) {
    personIdByName[p.name] = p.id; // last-write wins for duplicate names
    if (p.kingdom) personIdByNameKingdom[`${p.name}:${p.kingdom}`] = p.id;
  }

  // -------------------------------------------------------------------------
  // D. Places
  // -------------------------------------------------------------------------
  console.log('Seeding places...');
  // Upsert on ancient_name (not unique in schema, so we check existence first)
  const { data: existingPlaces } = await supabase
    .from('places')
    .select('id, ancient_name')
    .in('ancient_name', places.map((p) => p.ancient_name));

  const existingPlaceNames = new Set((existingPlaces ?? []).map((p: { ancient_name: string }) => p.ancient_name));
  const placesToInsert = places.filter((p) => !existingPlaceNames.has(p.ancient_name));

  let allPlaces: { id: string; ancient_name: string }[] = existingPlaces ?? [];
  if (placesToInsert.length > 0) {
    const newPlaces = check(await supabase.from('places').insert(placesToInsert).select());
    allPlaces = [...allPlaces, ...newPlaces];
  }
  console.log(`  Inserted/updated ${allPlaces.length} places.`);

  const placeIdByAncientName: Record<string, string> = {};
  for (const p of allPlaces) placeIdByAncientName[p.ancient_name] = p.id;

  // -------------------------------------------------------------------------
  // E. Archaeological evidence
  // -------------------------------------------------------------------------
  console.log('Seeding archaeological evidence...');
  const { data: existingEvidence } = await supabase
    .from('archaeological_evidence')
    .select('id, name')
    .in('name', archaeologicalEvidence.map((e) => e.name));

  const existingEvidenceNames = new Set((existingEvidence ?? []).map((e: { name: string }) => e.name));
  const evidenceToInsert = archaeologicalEvidence
    .filter((e) => !existingEvidenceNames.has(e.name))
    .map(({ ...e }) => e);  // strip relevance_note if present

  let allEvidence: { id: string; name: string }[] = existingEvidence ?? [];
  if (evidenceToInsert.length > 0) {
    const newEvidence = check(await supabase.from('archaeological_evidence').insert(evidenceToInsert).select());
    allEvidence = [...allEvidence, ...newEvidence];
  }
  console.log(`  Inserted/updated ${allEvidence.length} evidence records.`);

  const evidenceIdByName: Record<string, string> = {};
  for (const e of allEvidence) evidenceIdByName[e.name] = e.id;

  // -------------------------------------------------------------------------
  // F. Neighboring nations
  // -------------------------------------------------------------------------
  console.log('Seeding neighboring nations...');
  const nationsToUpsert = neighboringNations.map((n) => ({
    name: n.name,
    modern_equivalent: n.modern_equivalent,
    color_hex: n.color_hex,
    description: n.description,
    key_rulers: n.key_rulers,
  }));

  const nations = check(
    await supabase
      .from('neighboring_nations')
      .upsert(nationsToUpsert, { onConflict: 'name' })
      .select()
  );
  console.log(`  Inserted/updated ${nations.length} nations.`);

  const nationIdByName: Record<string, string> = {};
  for (const n of nations) nationIdByName[n.name] = n.id;

  // -------------------------------------------------------------------------
  // G. Chapter-people joins
  // -------------------------------------------------------------------------
  console.log('Seeding chapter-people joins...');

  // 1 Kings 18 — all 4 people with tappable_terms from mock data
  const chapterPeopleJoins18 = [
    { chapter_id: ch18Id, person_id: personIdByName['Elijah'],   tappable_terms: ['Elijah', 'Elijah the Tishbite', 'Elijah the prophet'] },
    { chapter_id: ch18Id, person_id: personIdByNameKingdom['Ahab:north'] ?? personIdByName['Ahab'], tappable_terms: ['Ahab'] },
    { chapter_id: ch18Id, person_id: personIdByName['Obadiah'],  tappable_terms: ['Obadiah'] },
    { chapter_id: ch18Id, person_id: personIdByName['Jezebel'],  tappable_terms: ['Jezebel'] },
  ];

  // 1 Kings 17 — Elijah
  const chapterPeopleJoins17 = [
    { chapter_id: ch17Id, person_id: personIdByName['Elijah'], tappable_terms: ['Elijah', 'Elijah the Tishbite'] },
  ];

  // 1 Kings 19 — Elijah
  const chapterPeopleJoins19 = [
    { chapter_id: ch19Id, person_id: personIdByName['Elijah'], tappable_terms: ['Elijah'] },
  ];

  const allChapterPeople = [...chapterPeopleJoins17, ...chapterPeopleJoins18, ...chapterPeopleJoins19];
  const cpResult = check(
    await supabase
      .from('chapter_people')
      .upsert(allChapterPeople, { onConflict: 'chapter_id,person_id' })
      .select()
  );
  console.log(`  Inserted/updated ${cpResult.length} chapter-person joins.`);

  // -------------------------------------------------------------------------
  // H. Chapter-places joins
  // -------------------------------------------------------------------------
  console.log('Seeding chapter-places joins...');

  const chapterPlacesJoins18 = [
    { chapter_id: ch18Id, place_id: placeIdByAncientName['Mount Carmel'], tappable_terms: ['Mount Carmel'], map_focus: true },
    { chapter_id: ch18Id, place_id: placeIdByAncientName['Kishon'],       tappable_terms: ['brook Kishon', 'Kishon'], map_focus: false },
    { chapter_id: ch18Id, place_id: placeIdByAncientName['Samaria'],      tappable_terms: ['Samaria'], map_focus: false },
    { chapter_id: ch18Id, place_id: placeIdByAncientName['Jezreel'],      tappable_terms: ['Jezreel'], map_focus: false },
  ];

  const chapterPlacesJoins17 = [
    { chapter_id: ch17Id, place_id: placeIdByAncientName['Zarephath'], tappable_terms: ['Zarephath'], map_focus: false },
  ];

  const chapterPlacesJoins19 = [
    { chapter_id: ch19Id, place_id: placeIdByAncientName['Horeb'], tappable_terms: ['Horeb', 'Mount Sinai', 'the mount of God'], map_focus: false },
  ];

  const allChapterPlaces = [...chapterPlacesJoins17, ...chapterPlacesJoins18, ...chapterPlacesJoins19];
  const cpPlacesResult = check(
    await supabase
      .from('chapter_places')
      .upsert(allChapterPlaces, { onConflict: 'chapter_id,place_id' })
      .select()
  );
  console.log(`  Inserted/updated ${cpPlacesResult.length} chapter-place joins.`);

  // -------------------------------------------------------------------------
  // I. Chapter-archaeological_evidence join
  // -------------------------------------------------------------------------
  console.log('Seeding chapter-evidence joins...');

  const blackObeliskId = evidenceIdByName['Black Obelisk of Shalmaneser III'];
  const chapterEvidenceJoins = [
    {
      chapter_id: ch18Id,
      evidence_id: blackObeliskId,
      relevance_note:
        "Ahab was of the Omri dynasty that the obelisk confirms historically. Ahab's reign and the Baal contest in this chapter fall squarely within the Omri period.",
    },
  ];

  const ceResult = check(
    await supabase
      .from('chapter_archaeological_evidence')
      .upsert(chapterEvidenceJoins, { onConflict: 'chapter_id,evidence_id' })
      .select()
  );
  console.log(`  Inserted/updated ${ceResult.length} chapter-evidence joins.`);

  // -------------------------------------------------------------------------
  // J. Chapter-nations joins
  // -------------------------------------------------------------------------
  console.log('Seeding chapter-nations joins...');

  // Nation context notes from mock data
  const nationContextNotes: Record<string, string> = {
    Phoenicia: "Jezebel was the daughter of Ethbaal, king of Sidon \u2014 the Phoenician alliance brought systematic Baal worship into the Northern Kingdom as official state religion.",
    'Aram-Damascus': 'Ben-Hadad I was an active adversary of Israel during this period, raiding northern territories and exploiting moments of Israelite weakness.',
    Egypt: "Third Intermediate Period \u2014 Egyptian influence over the Levant had waned significantly; Egypt was largely uninvolved in Israelite politics during Ahab's reign.",
    Assyria: 'The rising Neo-Assyrian empire under Shalmaneser III was beginning to cast its shadow westward \u2014 a threat Ahab would eventually face at the Battle of Qarqar (853 BC).',
  };

  const chapterNationsJoins18 = ['Phoenicia', 'Aram-Damascus', 'Egypt', 'Assyria'].map((nationName) => ({
    chapter_id: ch18Id,
    nation_id: nationIdByName[nationName],
    context_note: nationContextNotes[nationName] ?? '',
  }));

  const cnResult = check(
    await supabase
      .from('chapter_nations')
      .upsert(chapterNationsJoins18, { onConflict: 'chapter_id,nation_id' })
      .select()
  );
  console.log(`  Inserted/updated ${cnResult.length} chapter-nation joins.`);

  console.log('\n=== Seed complete ===');
}

main().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
