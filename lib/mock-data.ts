import type { ChapterData, NavChapter, TimelineKing, NeighboringNation } from './types';

// ---------------------------------------------------------------------------
// Neighboring Nations (relevant to 1 Kings 18, ~870 BC)
// ---------------------------------------------------------------------------

export const mockNeighboringNations: NeighboringNation[] = [
  {
    id: 'phoenicia',
    name: 'Phoenicia',
    color: '#FBBF24',
    context_note: 'Jezebel was the daughter of Ethbaal, king of Sidon — the Phoenician alliance brought systematic Baal worship into the Northern Kingdom as official state religion.',
    key_rulers: [
      {
        name: 'Ethbaal',
        years: '887–856 BC',
        note: 'Father of Jezebel; king of Tyre and Sidon',
      },
    ],
  },
  {
    id: 'aram-damascus',
    name: 'Aram-Damascus',
    color: '#F87171',
    context_note: 'Ben-Hadad I was an active adversary of Israel during this period, raiding northern territories and exploiting moments of Israelite weakness.',
    key_rulers: [
      {
        name: 'Ben-Hadad I',
        years: '880–842 BC',
        note: 'Signed treaty with Asa of Judah; raided northern Israel repeatedly',
      },
      {
        name: 'Hazael',
        years: '842–800 BC',
        note: 'Usurper who oppressed Israel after Jehu\'s coup — Elijah was told to anoint him',
      },
    ],
  },
  {
    id: 'egypt',
    name: 'Egypt',
    color: '#34D399',
    context_note: 'Third Intermediate Period — Egyptian influence over the Levant had waned significantly; Egypt was largely uninvolved in Israelite politics during Ahab\'s reign.',
    key_rulers: [
      {
        name: 'Osorkon II',
        years: '874–850 BC',
        note: '22nd Dynasty pharaoh; Egypt largely uninvolved in Levantine politics during this era',
      },
    ],
  },
  {
    id: 'assyria',
    name: 'Assyria',
    color: '#A78BFA',
    context_note: 'The rising Neo-Assyrian empire under Shalmaneser III was beginning to cast its shadow westward — a threat Ahab would eventually face at the Battle of Qarqar (853 BC).',
    key_rulers: [
      {
        name: 'Ashurnasirpal II',
        years: '883–859 BC',
        note: 'Expanded Assyria to the Euphrates; Ahab would later face his son at Qarqar',
      },
      {
        name: 'Shalmaneser III',
        years: '859–824 BC',
        note: 'Led the Battle of Qarqar (853 BC) where Ahab joined a coalition against him — confirmed on the Kurkh Monolith',
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Timeline Kings — all 39 kings + Athaliah (~40 total)
// ---------------------------------------------------------------------------

export const timelineKings: TimelineKing[] = [
  // Northern Kingdom (Israel)
  { id: 'jeroboam-i',   name: 'Jeroboam I',   kingdom: 'north', reign_start_bc: 930, reign_end_bc: 909, verdict: 'mixed' },
  { id: 'nadab',        name: 'Nadab',         kingdom: 'north', reign_start_bc: 909, reign_end_bc: 908, verdict: 'evil' },
  { id: 'baasha',       name: 'Baasha',        kingdom: 'north', reign_start_bc: 908, reign_end_bc: 886, verdict: 'evil' },
  { id: 'elah',         name: 'Elah',          kingdom: 'north', reign_start_bc: 886, reign_end_bc: 885, verdict: 'evil' },
  { id: 'zimri',        name: 'Zimri',         kingdom: 'north', reign_start_bc: 885, reign_end_bc: 885, verdict: 'evil' },
  { id: 'omri',         name: 'Omri',          kingdom: 'north', reign_start_bc: 885, reign_end_bc: 874, verdict: 'evil' },
  { id: 'ahab',         name: 'Ahab',          kingdom: 'north', reign_start_bc: 874, reign_end_bc: 853, verdict: 'evil' },
  { id: 'ahaziah-n',    name: 'Ahaziah',       kingdom: 'north', reign_start_bc: 853, reign_end_bc: 852, verdict: 'evil' },
  { id: 'joram-n',      name: 'Joram',         kingdom: 'north', reign_start_bc: 852, reign_end_bc: 841, verdict: 'evil' },
  { id: 'jehu',         name: 'Jehu',          kingdom: 'north', reign_start_bc: 841, reign_end_bc: 814, verdict: 'mixed' },
  { id: 'jehoahaz',     name: 'Jehoahaz',      kingdom: 'north', reign_start_bc: 814, reign_end_bc: 798, verdict: 'evil' },
  { id: 'jehoash-n',    name: 'Jehoash',       kingdom: 'north', reign_start_bc: 798, reign_end_bc: 782, verdict: 'evil' },
  { id: 'jeroboam-ii',  name: 'Jeroboam II',   kingdom: 'north', reign_start_bc: 782, reign_end_bc: 753, verdict: 'evil' },
  { id: 'zechariah',    name: 'Zechariah',     kingdom: 'north', reign_start_bc: 753, reign_end_bc: 752, verdict: 'evil' },
  { id: 'shallum',      name: 'Shallum',       kingdom: 'north', reign_start_bc: 752, reign_end_bc: 752, verdict: 'evil' },
  { id: 'menahem',      name: 'Menahem',       kingdom: 'north', reign_start_bc: 752, reign_end_bc: 742, verdict: 'evil' },
  { id: 'pekahiah',     name: 'Pekahiah',      kingdom: 'north', reign_start_bc: 742, reign_end_bc: 740, verdict: 'evil' },
  { id: 'pekah',        name: 'Pekah',         kingdom: 'north', reign_start_bc: 740, reign_end_bc: 732, verdict: 'evil' },
  { id: 'hoshea',       name: 'Hoshea',        kingdom: 'north', reign_start_bc: 732, reign_end_bc: 722, verdict: 'evil' },

  // Southern Kingdom (Judah)
  { id: 'rehoboam',     name: 'Rehoboam',      kingdom: 'south', reign_start_bc: 930, reign_end_bc: 913, verdict: 'evil' },
  { id: 'abijah',       name: 'Abijah',        kingdom: 'south', reign_start_bc: 913, reign_end_bc: 911, verdict: 'evil' },
  { id: 'asa',          name: 'Asa',           kingdom: 'south', reign_start_bc: 911, reign_end_bc: 870, verdict: 'good' },
  { id: 'jehoshaphat',  name: 'Jehoshaphat',   kingdom: 'south', reign_start_bc: 870, reign_end_bc: 848, verdict: 'good' },
  { id: 'jehoram-s',    name: 'Jehoram',       kingdom: 'south', reign_start_bc: 848, reign_end_bc: 841, verdict: 'evil' },
  { id: 'ahaziah-s',    name: 'Ahaziah',       kingdom: 'south', reign_start_bc: 841, reign_end_bc: 840, verdict: 'evil' },
  { id: 'athaliah',     name: 'Athaliah',      kingdom: 'south', reign_start_bc: 841, reign_end_bc: 835, verdict: 'evil', is_queen: true },
  { id: 'joash',        name: 'Joash',         kingdom: 'south', reign_start_bc: 835, reign_end_bc: 796, verdict: 'mixed' },
  { id: 'amaziah',      name: 'Amaziah',       kingdom: 'south', reign_start_bc: 796, reign_end_bc: 767, verdict: 'mixed' },
  { id: 'uzziah',       name: 'Uzziah',        kingdom: 'south', reign_start_bc: 767, reign_end_bc: 740, verdict: 'good', dates_approximate: true },
  { id: 'jotham',       name: 'Jotham',        kingdom: 'south', reign_start_bc: 740, reign_end_bc: 732, verdict: 'good' },
  { id: 'ahaz',         name: 'Ahaz',          kingdom: 'south', reign_start_bc: 732, reign_end_bc: 716, verdict: 'evil' },
  { id: 'hezekiah',     name: 'Hezekiah',      kingdom: 'south', reign_start_bc: 716, reign_end_bc: 687, verdict: 'good' },
  { id: 'manasseh',     name: 'Manasseh',      kingdom: 'south', reign_start_bc: 687, reign_end_bc: 642, verdict: 'evil' },
  { id: 'amon',         name: 'Amon',          kingdom: 'south', reign_start_bc: 642, reign_end_bc: 640, verdict: 'evil' },
  { id: 'josiah',       name: 'Josiah',        kingdom: 'south', reign_start_bc: 640, reign_end_bc: 609, verdict: 'good' },
  { id: 'jehoahaz-s',   name: 'Jehoahaz',      kingdom: 'south', reign_start_bc: 609, reign_end_bc: 608, verdict: 'evil' },
  { id: 'jehoiakim',    name: 'Jehoiakim',     kingdom: 'south', reign_start_bc: 609, reign_end_bc: 598, verdict: 'evil' },
  { id: 'jehoiachin',   name: 'Jehoiachin',    kingdom: 'south', reign_start_bc: 598, reign_end_bc: 597, verdict: 'evil' },
  { id: 'zedekiah',     name: 'Zedekiah',      kingdom: 'south', reign_start_bc: 597, reign_end_bc: 586, verdict: 'evil' },
];

// ---------------------------------------------------------------------------

export const mockChapter: ChapterData = {
  id: 'ch-1kings-18',
  book: '1 Kings',
  book_slug: '1-kings',
  chapter_number: 18,
  year_start_bc: -869,
  year_end_bc: -869,
  summary:
    "Three years into a catastrophic drought, God sends Elijah back to the wicked King Ahab. After a tense standoff, Elijah challenges all 450 prophets of Baal to a public contest on Mount Carmel \u2014 each side calls on their god to send fire. Baal's prophets cry out all day and receive nothing. Elijah prays once, and fire falls from heaven, consuming the offering, the altar, and even the water-soaked stones. The people fall on their faces crying \u201cThe LORD, he is God.\u201d The false prophets are executed at the Kishon River, and rain finally breaks the drought.",

  verses: [
    { verse_number: 1, text: 'After many days the word of the LORD came to Elijah, in the third year, saying, "Go, show yourself to Ahab; and I will send rain upon the earth."' },
    { verse_number: 2, text: 'So Elijah went to show himself to Ahab. Now the famine was severe in Samaria.' },
    { verse_number: 3, text: 'And Ahab called Obadiah, who was over the household. (Now Obadiah feared the LORD greatly;' },
    { verse_number: 4, text: 'and when Jezebel cut off the prophets of the LORD, Obadiah took a hundred prophets and hid them by fifties in a cave, and fed them with bread and water.)' },
    { verse_number: 5, text: 'And Ahab said to Obadiah, "Go through the land to all the springs of water and to all the valleys; perhaps we may find grass and save the horses and mules alive, and not lose some of the animals."' },
    { verse_number: 7, text: 'And as Obadiah was on the way, behold, Elijah met him; and Obadiah recognized him, and fell on his face, and said, "Is it you, my lord Elijah?"' },
    { verse_number: 8, text: 'And he answered him, "It is I. Go, tell your lord, \'Behold, Elijah is here.\'"' },
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
  ],

  people: [
    {
      person: {
        id: 'elijah',
        name: 'Elijah',
        alt_names: ['Elijah the Tishbite', 'Elijah the prophet'],
        type: 'prophet',
        bio: 'The great prophet of Israel who ministered during the reigns of Ahab and Ahaziah. Tishbite of Gilead, called to confront Baal worship and defend the covenant with fierce boldness. Fed by ravens at the brook Cherith; sheltered by a widow in Zarephath. His confrontation with Baal\'s prophets at Mount Carmel is one of the most dramatic moments in all of Scripture.',
        contemporary_events: 'Contemporary with Ahab of Israel (~874–853 BC) and Ben-hadad I of Aram. Phoenician princess Jezebel married into the northern royal house, bringing systematic Baal worship.',
      },
      tappable_terms: ['Elijah', 'Elijah the Tishbite', 'Elijah the prophet'],
    },
    {
      person: {
        id: 'ahab',
        name: 'Ahab',
        type: 'king',
        kingdom: 'north',
        reign_start_bc: -874,
        reign_end_bc: -853,
        verdict: 'evil',
        bio: 'Son of Omri, seventh king of Northern Israel. Scripture calls him the most wicked king Israel had yet seen. Married Jezebel of Sidon, introduced state Baal worship, built a temple to Baal in Samaria, and erected an Asherah pole. Yet he showed moments of humility when confronted by Elijah.',
        contemporary_events: 'Battle of Qarqar (853 BC): led a coalition against Shalmaneser III of Assyria. Contemporary with Jehoshaphat of Judah. Ben-hadad I and II of Aram were frequent adversaries.',
      },
      tappable_terms: ['Ahab'],
    },
    {
      person: {
        id: 'obadiah',
        name: 'Obadiah',
        type: 'official',
        kingdom: 'north',
        bio: 'Palace administrator over Ahab\'s household — a man who "feared the LORD greatly" even while serving the most wicked king in Israel\'s history. At great personal risk he hid 100 of the LORD\'s prophets in caves during Jezebel\'s purge, feeding them bread and water. A portrait of quiet faithfulness under political compromise.',
        contemporary_events: 'Served during Ahab\'s reign (~874–853 BC), likely during the severe drought described in 1 Kings 17–18.',
      },
      tappable_terms: ['Obadiah'],
    },
    {
      person: {
        id: 'jezebel',
        name: 'Jezebel',
        type: 'foreign_ruler',
        kingdom: 'foreign',
        bio: 'Phoenician princess from Sidon, daughter of Ethbaal king of Tyre, who married Ahab and became queen of Northern Israel. Actively promoted Baal worship as state religion, funded 450 prophets of Baal and 400 prophets of Asherah, and systematically executed prophets of the LORD. Among the most reviled figures in Kings.',
        contemporary_events: 'Daughter of Ethbaal of Sidon. Her daughter Athaliah would later seize the throne of Judah, extending the Omri dynasty\'s influence south.',
      },
      tappable_terms: ['Jezebel'],
    },
  ],

  places: [
    {
      place: {
        id: 'mount-carmel',
        ancient_name: 'Mount Carmel',
        modern_name: 'Har HaCarmel, near Haifa, Israel',
        lat: 32.7517,
        lng: 35.0654,
        significance: 'Where Elijah called fire from heaven and broke the 3-year drought — the most dramatic confrontation in Kings',
        ancient_description: 'A forested promontory jutting 25 km into the Mediterranean, rising 500 m above the Jezreel Valley. "Carmel" means garden or vineyard — its dense woods made it sacred ground for Canaanite and Israelite worship alike. The ridge was visible across all of northern Israel. Here Elijah arranged 12 stones for an altar, ordered four jars of water poured three times over the offering, and prayed once — whereupon fire fell and consumed the altar, stones, and water. The crowd who watched declared "The LORD, he is God."',
        modern_description: 'Carmel is today a forested mountain range on the northern Israeli coast, with the city of Haifa spreading up its lower slopes. The Carmelite monastery of Muhraqa ("place of burning") marks the traditional site of the altar on the ridge\'s southern edge, with a panoramic view of the entire Jezreel Valley. Stella Maris monastery near Haifa Bay is another Carmelite pilgrimage site tied to Elijah. The Carmel National Park covers much of the ridge — one of Israel\'s largest nature reserves. The peak is about 35 km southwest of Nazareth.',
      },
      tappable_terms: ['Mount Carmel'],
      map_focus: true,
    },
    {
      place: {
        id: 'kishon',
        ancient_name: 'Kishon',
        modern_name: 'Nahal Kishon (Kishon River), Jezreel Valley, Israel',
        lat: 32.7006,
        lng: 35.1115,
        significance: 'Where Elijah executed the 450 prophets of Baal after the contest on Carmel — fulfilling Mosaic law on false prophets',
        ancient_description: 'A seasonal wadi flowing from the Jezreel Valley northwest to the sea, running at the foot of Mount Carmel. The Kishon already carried a weight of history: it was the torrent where Deborah and Barak\'s victory over Sisera\'s iron chariots happened (Judges 4–5). After fire fell on Carmel, Elijah commanded the crowd to seize the 450 prophets of Baal. He led them down the mountain to the river\'s edge and executed them there — the Mosaic penalty for false prophecy (Deuteronomy 18:20). Rain then broke the three-year drought the same evening.',
        modern_description: 'The Kishon River (Nahal Kishon) still flows through the Jezreel Valley to Haifa Bay, though much of its lower course is channeled and heavily industrialized near the port. The upper valley near the Carmel foothills remains agricultural. Significant Bronze and Iron Age sites line its banks. The river is part of ongoing ecological restoration efforts — a sad contrast to the dramatic scene it witnessed in this chapter.',
      },
      tappable_terms: ['brook Kishon', 'Kishon'],
    },
    {
      place: {
        id: 'samaria',
        ancient_name: 'Samaria',
        modern_name: 'Sabastiyah (ancient Sebastos), northern West Bank',
        lat: 32.2775,
        lng: 35.1983,
        significance: 'Capital of the Northern Kingdom under Ahab and Jezebel — seat of Israel\'s most wicked royal court and Baal\'s state temple',
        ancient_description: 'Capital of Northern Israel, founded c. 880 BC by Ahab\'s father Omri on a strategically isolated hill purchased from a man named Shemer. Omri chose it for its natural defensibility — a rounded summit with steep slopes on all sides. Ahab made it magnificent: an ivory-inlaid palace, a Baal temple funded by Jezebel, and an Asherah pole. The severe drought of 1 Kings 17–18 hit Samaria hardest — Ahab dispatched his administrator Obadiah across the kingdom looking for water to keep the royal horses alive. It was to Samaria that Elijah was summoned before the Carmel confrontation.',
        modern_description: 'The site today is Sabastiyah in the northern West Bank, about 10 km northwest of Nablus. Harvard University excavations (1908–1910) unearthed the Israelite royal compound and hundreds of carved ivory plaques — the direct confirmation of the biblical "ivory house of Ahab" (1 Kings 22:39). Alexander the Great and later Herod the Great both rebuilt the city (renaming it Sebastos for Augustus). The Herodian temple columns and colonnaded street are still visible. The site is open to visitors but within the Palestinian Authority, requiring coordination.',
      },
      tappable_terms: ['Samaria'],
    },
    {
      place: {
        id: 'jezreel',
        ancient_name: 'Jezreel',
        modern_name: 'Tel Jezreel (near Yizre\'el village), Jezreel Valley, Israel',
        lat: 32.5444,
        lng: 35.3294,
        significance: 'Ahab\'s royal winter capital — where Elijah outran the king\'s chariot after the rain broke, and where Jezebel would later die',
        ancient_description: 'A fortified royal compound on a commanding spur overlooking the Jezreel Valley — Ahab\'s secondary palace and winter residence, chosen for the valley\'s agricultural wealth and strategic sight lines. After fire fell on Carmel and rain broke the drought, Ahab rode his chariot here; Elijah — "girded up his loins" and empowered by God — ran the 30 km ahead of the chariot on foot. Jezreel later became the stage for the tragedy of Naboth\'s vineyard, Ahab\'s unjust murder of an innocent man to seize his land (1 Kings 21), and the violent death of Jezebel under Jehu\'s revolt (2 Kings 9:30–37).',
        modern_description: 'Tel Jezreel sits on a prominent limestone spur at the eastern end of the Jezreel Valley in northern Israel, near the small village of Yizre\'el. Excavations led by Norma Franklin and David Ussishkin in the 1990s uncovered a massive Iron Age IIA enclosure — a moated, casemate-walled compound dated to the 9th century BC, consistent with a royal Israelite installation. The tel commands views of Mount Carmel to the west, Mount Gilboa to the southeast, and the entire valley floor. Modern Afula, about 5 km northwest, is the largest city in the region today.',
      },
      tappable_terms: ['Jezreel'],
    },
  ],

  evidence: [
    {
      id: 'black-obelisk',
      name: 'Black Obelisk of Shalmaneser III',
      artifact_type: 'obelisk',
      date_bc: -825,
      description: 'A 2-meter black limestone obelisk carved with scenes of tribute-bearing from foreign kings. One panel depicts "Iaua son of Omri" — widely identified as Jehu of Israel — prostrating before Shalmaneser III of Assyria. Confirms the existence of the Omri dynasty (the royal house Ahab inherited and Elijah confronted).',
      museum_location: 'British Museum, London',
      relevance_note: 'Ahab was of the Omri dynasty that the obelisk confirms historically. Ahab\'s reign and the Baal contest in this chapter fall squarely within the Omri period.',
    },
  ],
  nations: mockNeighboringNations,
};

export const mockNavChapters: { book: string; chapters: NavChapter[] }[] = [
  {
    book: '1 Kings',
    chapters: Array.from({ length: 22 }, (_, i) => ({
      number: i + 1,
      is_read: [1, 2, 17, 18].includes(i + 1),
    })),
  },
  {
    book: '2 Kings',
    chapters: Array.from({ length: 25 }, (_, i) => ({
      number: i + 1,
      is_read: false,
    })),
  },
];
