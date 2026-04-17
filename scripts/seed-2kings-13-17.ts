// Run: npx tsx scripts/seed-2kings-13-17.ts
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

const quizData: Record<string, { question: string; options: string[]; correct_index: number; explanation: string }[]> = {
  '2 Kings:13': [
    {
      question: 'How long did Jehoahaz son of Jehu reign over Israel in Samaria?',
      options: ['7 years', '17 years', '20 years', '12 years'],
      correct_index: 1,
      explanation: '2 Kings 13:1 states that Jehoahaz son of Jehu began to reign over Israel in Samaria and reigned seventeen years.',
    },
    {
      question: 'To what pitiful state was the army of Israel reduced under Jehoahaz due to Aramean oppression?',
      options: [
        '100 horsemen, 20 chariots, and 5,000 infantry',
        '50 horsemen, 10 chariots, and 10,000 infantry',
        '200 horsemen, 50 chariots, and 20,000 infantry',
        '50 horsemen, 50 chariots, and 5,000 infantry',
      ],
      correct_index: 1,
      explanation: '2 Kings 13:7 records that the king of Aram left Jehoahaz nothing but fifty horsemen, ten chariots, and ten thousand foot soldiers.',
    },
    {
      question: 'When Jehoahaz sought the LORD because of Aramean oppression, how did the LORD respond?',
      options: [
        'The LORD did not listen because of Israel\'s sins',
        'The LORD sent an angel to destroy the Aramean army',
        'The LORD listened and gave Israel a deliverer who freed them from Aram\'s power',
        'The LORD told Jehoahaz to repent fully before help would come',
      ],
      correct_index: 2,
      explanation: '2 Kings 13:4-5 says the LORD listened to Jehoahaz and gave Israel a deliverer (likely Adad-nirari III of Assyria) so they escaped from Aram\'s domination.',
    },
    {
      question: 'What sin did Israel continue to commit even after God delivered them from Aram?',
      options: [
        'They built a new temple to Baal in Samaria',
        'They walked in the sins of Jeroboam son of Nebat, who made Israel sin',
        'They stopped paying temple tithes',
        'They intermarried with Aramean nobles',
      ],
      correct_index: 1,
      explanation: '2 Kings 13:6 records that Israel did not turn from the sins of the house of Jeroboam, who had made Israel sin, but walked in them.',
    },
    {
      question: 'What did King Jehoash of Israel say when he came down to the dying Elisha and wept?',
      options: [
        '"O man of God, do not leave us without a word from the LORD!"',
        '"My father, my father! The chariots of Israel and its horsemen!"',
        '"O prophet, heal yourself so you may continue to serve Israel!"',
        '"The word of the LORD has not failed; Israel will be saved."',
      ],
      correct_index: 1,
      explanation: '2 Kings 13:14 records Jehoash weeping over Elisha and crying, "My father, my father! The chariots of Israel and its horsemen!" — the same words Elisha had cried over Elijah.',
    },
    {
      question: 'What did Elisha instruct Jehoash to do with the arrows, and what was the symbolic meaning?',
      options: [
        'Shoot one arrow north — a sign of victory over Aram at Dan',
        'Shoot eastward through the open window — the LORD\'s arrow of victory over Aram',
        'Shoot upward toward heaven — trusting God to defeat Aram',
        'Shoot southward — a sign of peace with Judah',
      ],
      correct_index: 1,
      explanation: '2 Kings 13:17 tells Elisha to shoot the arrow eastward, then declares, "The LORD\'s arrow of victory, the arrow of victory over Aram!"',
    },
    {
      question: 'Why was Elisha angry with Jehoash after he struck the ground only three times with the arrows?',
      options: [
        'Because Jehoash had used his own arrows instead of the king\'s arrows',
        'Because striking three times meant Israel would only defeat Aram three times instead of completely destroying them',
        'Because Jehoash had struck the ground instead of the wall as commanded',
        'Because Jehoash refused to shoot the arrows at all at first',
      ],
      correct_index: 1,
      explanation: '2 Kings 13:19 — Elisha said, "You should have struck five or six times; then you would have struck down Aram until you had destroyed it. But now you will strike down Aram only three times."',
    },
    {
      question: 'What miracle occurred after Elisha died and was buried?',
      options: [
        'A blinding light appeared over his tomb for seven days',
        'A spring of fresh water erupted from the ground at his burial site',
        'A dead man who touched Elisha\'s bones was revived and stood on his feet',
        'Elisha\'s staff floated upright in the Jordan River',
      ],
      correct_index: 2,
      explanation: '2 Kings 13:21 records that when some men were burying another man, they threw him into Elisha\'s tomb, and when he touched Elisha\'s bones, he revived and stood on his feet.',
    },
    {
      question: 'How many times did Jehoash defeat Ben-hadad of Aram, fulfilling Elisha\'s prophecy?',
      options: ['Two times', 'Three times', 'Five times', 'Once'],
      correct_index: 1,
      explanation: '2 Kings 13:25 records that Jehoash son of Jehoahaz took back from Ben-hadad son of Hazael the cities that Ben-hadad had taken from his father Jehoahaz — three times Joash defeated him and recovered the towns of Israel.',
    },
    {
      question: 'What was the Asherah pole associated with, which remained in Samaria throughout Jehoahaz\'s reign?',
      options: [
        'The altar that Ahab had built in the temple of Baal',
        'The golden calf Jeroboam had set up at Bethel',
        'The sin of the house of Jeroboam which Israel did not abandon',
        'A monument erected by Hazael of Aram after his victories',
      ],
      correct_index: 2,
      explanation: '2 Kings 13:6 mentions that the Asherah pole also remained standing in Samaria alongside the continuation of Jeroboam\'s sins that Israel refused to forsake.',
    },
  ],
  '2 Kings:14': [
    {
      question: 'Why did Amaziah of Judah spare the children of his father\'s assassins after executing the assassins?',
      options: [
        'Because they were minors and could not be held legally responsible',
        'Because he was merciful and wanted to show grace',
        'Because it is written in the Book of the Law of Moses that children shall not be put to death for the sins of their fathers',
        'Because the priests interceded on behalf of the children',
      ],
      correct_index: 2,
      explanation: '2 Kings 14:6 explicitly quotes Deuteronomy 24:16: "Fathers shall not be put to death for their sons, nor sons for their fathers; each shall die for his own sin."',
    },
    {
      question: 'Where did Amaziah of Judah defeat the Edomites, and how many did he kill?',
      options: [
        'In the Negev desert; he killed 5,000 Edomites',
        'In the Valley of Salt; he struck down 10,000 Edomites',
        'At the Dead Sea; he drove 3,000 Edomites into the water',
        'At Beersheba; he captured 7,000 Edomite soldiers',
      ],
      correct_index: 1,
      explanation: '2 Kings 14:7 states that Amaziah struck down ten thousand Edomites in the Valley of Salt and captured Sela by storm.',
    },
    {
      question: 'What parable did Jehoash king of Israel use to warn Amaziah against attacking him?',
      options: [
        'A lion boasting to an eagle about its strength on the ground',
        'A thistle in Lebanon sending to a cedar, asking the cedar to give his daughter to his son in marriage — but a wild beast trampled the thistle',
        'A small fox claiming it could uproot a great vine',
        'A reed planted by a river boasting it would withstand the storm like an oak',
      ],
      correct_index: 1,
      explanation: '2 Kings 14:9 — Jehoash replied with the parable of the thistle and the cedar of Lebanon, saying the thistle\'s arrogant request was crushed by a wild beast, warning Amaziah his pride would bring disaster.',
    },
    {
      question: 'What happened when Amaziah of Judah insisted on fighting Jehoash of Israel despite the warning?',
      options: [
        'Judah won a surprising victory at the battle of Lachish',
        'Both armies retreated without engaging in battle',
        'Judah was defeated; Jehoash broke down 400 cubits of Jerusalem\'s wall and took the temple treasures',
        'Amaziah captured Jehoash and held him for ransom',
      ],
      correct_index: 2,
      explanation: '2 Kings 14:13-14 records that Jehoash captured Amaziah, broke down Jerusalem\'s wall from the Ephraim Gate to the Corner Gate (400 cubits), and took all the gold and silver from the temple and palace.',
    },
    {
      question: 'How long did Amaziah of Judah reign, and how did his life end?',
      options: [
        'He reigned 25 years and died peacefully in Jerusalem',
        'He reigned 25 years and was assassinated at Lachish by conspirators',
        'He reigned 40 years and was struck with leprosy',
        'He reigned 15 years and was killed in battle against Israel',
      ],
      correct_index: 1,
      explanation: '2 Kings 14:2,17-20 — Amaziah reigned twenty-five years. A conspiracy arose against him in Jerusalem, he fled to Lachish, but they killed him there.',
    },
    {
      question: 'Which prophet had foretold that Jeroboam II would restore Israel\'s borders from Lebo-hamath to the Sea of the Arabah?',
      options: [
        'Elijah the Tishbite',
        'Amos of Tekoa',
        'Jonah son of Amittai from Gath-hepher',
        'Hosea son of Beeri',
      ],
      correct_index: 2,
      explanation: '2 Kings 14:25 says the restoration was "according to the word of the LORD, the God of Israel, spoken through his servant Jonah son of Amittai, the prophet from Gath-hepher" — the same Jonah of the book of Jonah.',
    },
    {
      question: 'Despite being evil in the LORD\'s sight, why did God use Jeroboam II to save Israel?',
      options: [
        'Because Jeroboam II had repented privately before God',
        'Because the LORD saw Israel\'s suffering was very bitter and there was no one to help, and he had not said he would blot out Israel\'s name',
        'Because Jeroboam II had given great wealth to the temple',
        'Because Israel had finally destroyed all the high places',
      ],
      correct_index: 1,
      explanation: '2 Kings 14:26-27 — the LORD saw Israel\'s distress was very bitter, with no one to help, and he had not said he would blot out Israel\'s name from under heaven, so he saved them by the hand of Jeroboam.',
    },
    {
      question: 'Who succeeded Amaziah of Judah after his assassination?',
      options: [
        'His son Jotham, who was 16 years old',
        'His son Azariah (also called Uzziah), who was 16 years old',
        'His brother Jehoram, who was appointed by the priests',
        'Jeroboam II of Israel, who claimed rule over Judah',
      ],
      correct_index: 1,
      explanation: '2 Kings 14:21 — "Then all the people of Judah took Azariah, who was sixteen years old, and made him king in place of his father Amaziah."',
    },
    {
      question: 'How many years did Jeroboam II reign over Israel in Samaria?',
      options: ['20 years', '29 years', '41 years', '52 years'],
      correct_index: 2,
      explanation: '2 Kings 14:23 states that Jeroboam son of Jehoash king of Israel began to reign in Samaria and reigned forty-one years.',
    },
    {
      question: 'What did Amaziah rename the Edomite city of Sela after conquering it?',
      options: ['Edom', 'Joktheel', 'Amaziah\'s Triumph', 'Petra'],
      correct_index: 1,
      explanation: '2 Kings 14:7 records that Amaziah captured Sela by storm and called it Joktheel, the name it has to this day.',
    },
  ],
  '2 Kings:15': [
    {
      question: 'What affliction came upon Azariah (Uzziah) of Judah because he did not remove the high places, and what was his condition until he died?',
      options: [
        'He was struck blind and lived as a recluse in the palace',
        'He was struck with leprosy and lived in a separate house, excluded from the temple; his son Jotham ran the palace',
        'He was paralyzed on his right side and unable to rule',
        'He was afflicted with a fever that never broke, so his officials governed for him',
      ],
      correct_index: 1,
      explanation: '2 Kings 15:5 — the LORD struck Azariah with leprosy until the day of his death. He lived in a separate house while his son Jotham administered the palace and governed the people.',
    },
    {
      question: 'Zechariah son of Jeroboam II reigned over Israel for only six months before being assassinated. Who killed him?',
      options: ['Menahem son of Gadi', 'Pekah son of Remaliah', 'Shallum son of Jabesh', 'Hoshea son of Elah'],
      correct_index: 2,
      explanation: '2 Kings 15:10 — Shallum son of Jabesh conspired against Zechariah, attacked him in front of the people, killed him, and reigned in his place.',
    },
    {
      question: 'The assassination of Zechariah fulfilled which divine promise about the house of Jehu?',
      options: [
        'That Jehu\'s line would rule until a prophet arose from the north',
        'That Jehu\'s sons would sit on the throne of Israel to the fourth generation',
        'That Jehu\'s dynasty would end when Israel lost Gilead',
        'That Jehu\'s line would end once Aram was finally subdued',
      ],
      correct_index: 1,
      explanation: '2 Kings 15:12 — "This was the word of the LORD that he spoke to Jehu: \'Your descendants will sit on the throne of Israel to the fourth generation.\' And so it was."',
    },
    {
      question: 'How long did Shallum son of Jabesh reign over Israel?',
      options: ['Six months', 'One month', 'Three months', 'Two years'],
      correct_index: 1,
      explanation: '2 Kings 15:13 — Shallum son of Jabesh reigned one month in Samaria before being killed by Menahem.',
    },
    {
      question: 'What brutal atrocity did Menahem commit against the city of Tiphsah (and its region)?',
      options: [
        'He burned the city and salted the fields',
        'He enslaved all the men and killed the women',
        'He ripped open all the pregnant women because they would not open the gates to him',
        'He put every man, woman, and child to the sword',
      ],
      correct_index: 2,
      explanation: '2 Kings 15:16 — "At that time Menahem, starting out from Tirzah, attacked Tiphsah and ripped open all the pregnant women because the town did not open its gates to him."',
    },
    {
      question: 'How did Menahem raise the 1,000 talents of silver he paid to Tiglath-pileser III of Assyria?',
      options: [
        'He took it from the royal treasury and temple storehouses',
        'He exacted fifty shekels of silver from each wealthy man in Israel — about 60,000 men in total',
        'He sold Israelite territory to the Arameans',
        'He imposed a grain tax on all the northern tribes for three years',
      ],
      correct_index: 1,
      explanation: '2 Kings 15:20 — Menahem exacted the money from Israel, from all the wealthy men, fifty shekels of silver from each, to give to the king of Assyria.',
    },
    {
      question: 'Under King Pekah of Israel, which Assyrian king invaded and deported Israelites from Gilead, Galilee, and Naphtali?',
      options: [
        'Shalmaneser V',
        'Sargon II',
        'Tiglath-pileser III',
        'Sennacherib',
      ],
      correct_index: 2,
      explanation: '2 Kings 15:29 — "In the time of Pekah king of Israel, Tiglath-pileser king of Assyria came and took Ijon, Abel Beth Maakah, Janoah, Kedesh and Hazor. He took Gilead and Galilee, including all the land of Naphtali, and deported the people to Assyria."',
    },
    {
      question: 'Who killed Pekah son of Remaliah and took the throne of Israel?',
      options: ['Menahem son of Gadi', 'Shallum son of Jabesh', 'Hoshea son of Elah', 'Pekahiah son of Menahem'],
      correct_index: 2,
      explanation: '2 Kings 15:30 — "Then Hoshea son of Elah conspired against Pekah son of Remaliah. He attacked and assassinated him, and then succeeded him as king."',
    },
    {
      question: 'How long did Jotham of Judah reign, and what was his spiritual assessment?',
      options: [
        '16 years; he did what was right in the eyes of the LORD, but the high places were not removed',
        '20 years; he was evil in the sight of the LORD like his father',
        '12 years; he was the most righteous king since David',
        '16 years; he removed the high places and restored the temple',
      ],
      correct_index: 0,
      explanation: '2 Kings 15:33-34 — Jotham reigned sixteen years in Jerusalem. He did what was right in the eyes of the LORD, just as his father Uzziah had done, though the high places were not removed.',
    },
    {
      question: 'How long did Azariah (Uzziah) of Judah reign in Jerusalem?',
      options: ['29 years', '41 years', '52 years', '36 years'],
      correct_index: 2,
      explanation: '2 Kings 15:2 — "He was sixteen years old when he became king, and he reigned in Jerusalem fifty-two years."',
    },
  ],
  '2 Kings:16': [
    {
      question: 'What uniquely wicked act did Ahaz of Judah commit that departed from all previous Judahite kings?',
      options: [
        'He tore down the temple gates and sold them to the Philistines',
        'He made his son pass through fire, following the detestable practices of the nations',
        'He expelled all the priests and installed pagan priests in the temple',
        'He built a statue of Baal inside the temple sanctuary',
      ],
      correct_index: 1,
      explanation: '2 Kings 16:3 — "He even sacrificed his son in the fire, following the detestable ways of the nations the LORD had driven out before the Israelites."',
    },
    {
      question: 'Which two kings allied to besiege Jerusalem during Ahaz\'s reign, and what was the outcome of the siege?',
      options: [
        'Hazael of Aram and Pekahiah of Israel; they captured the city but not the palace',
        'Rezin of Aram and Pekah of Israel; they besieged it but could not overpower it',
        'Ben-hadad of Aram and Jehoahaz of Israel; they captured Jerusalem briefly',
        'Tiglath-pileser of Assyria and Pekah of Israel; they destroyed the northern wall',
      ],
      correct_index: 1,
      explanation: '2 Kings 16:5 — "Then Rezin king of Aram and Pekah son of Remaliah king of Israel marched up to fight against Jerusalem and besieged Ahaz, but they could not overpower him."',
    },
    {
      question: 'What message did Ahaz send to Tiglath-pileser III of Assyria along with silver and gold from the temple?',
      options: [
        '"Come and help me against Aram, for I fear their armies will return."',
        '"I am your servant and your son. Come up and save me from the king of Aram and the king of Israel, who are attacking me."',
        '"Accept this tribute and grant us a treaty of peace with Assyria."',
        '"Destroy Aram for us and we will pay you double tribute forever."',
      ],
      correct_index: 1,
      explanation: '2 Kings 16:7 — Ahaz sent messengers saying, "I am your servant and your son. Come up and save me out of the hand of the king of Aram and of the king of Israel, who are attacking me."',
    },
    {
      question: 'What did Tiglath-pileser III do after receiving Ahaz\'s silver and gold?',
      options: [
        'He marched against Samaria and besieged it for three years',
        'He listened to Ahaz, marched against Damascus, captured it, deported its people, and killed Rezin',
        'He demanded even more tribute before he would act',
        'He sent a general to defeat Aram while he remained in Nineveh',
      ],
      correct_index: 1,
      explanation: '2 Kings 16:9 — "The king of Assyria complied by attacking Damascus and capturing it. He deported its inhabitants to Kir and put Rezin to death."',
    },
    {
      question: 'What did Ahaz see in Damascus that he sent a detailed model of to Uriah the priest in Jerusalem?',
      options: [
        'An Assyrian victory monument that he wanted copied as a war memorial',
        'An altar — he sent its pattern and model to be built in the Jerusalem temple',
        'A palace floor plan for remodeling the royal palace',
        'A Baal idol that he wanted reproduced in bronze for the temple courtyard',
      ],
      correct_index: 1,
      explanation: '2 Kings 16:10 — "He sent to Uriah the priest a sketch of the altar and a detailed plan of its construction." Uriah built it according to Ahaz\'s instructions.',
    },
    {
      question: 'Where did Ahaz place the new Assyrian-style altar in relation to the existing bronze altar?',
      options: [
        'He placed it inside the Holy of Holies, replacing the ark',
        'He placed it in front of the temple, moved the bronze altar to the north side, and used it for seeking guidance while the new altar got the regular offerings',
        'He placed it outside the city walls as a monument to Assyria',
        'He set it up in the courtyard of the palace rather than the temple',
      ],
      correct_index: 1,
      explanation: '2 Kings 16:14 — Ahaz moved the bronze altar from before the LORD to the north side of his new altar, and offered on the new altar the burnt offering, grain offering, and libations, while reserving the bronze altar "to inquire by."',
    },
    {
      question: 'What did Ahaz do to the bronze oxen that supported the bronze Sea in the temple?',
      options: [
        'He had them melted down to mint coins for the Assyrian tribute',
        'He had them moved to the palace garden as decorations',
        'He removed the Sea from the bronze bulls and set it on a stone pavement',
        'He sold them to the king of Assyria as part of the tribute',
      ],
      correct_index: 2,
      explanation: '2 Kings 16:17 — "King Ahaz took away the side panels and removed the basins from the movable stands. He removed the Sea from the bronze bulls that supported it and set it on a stone base."',
    },
    {
      question: 'Where did Ahaz relocate what he removed from the temple, and why?',
      options: [
        'To a storage room within the temple; to protect them from invaders',
        'To Assyria as tribute to Tiglath-pileser',
        'He made alterations "in deference to the king of Assyria" — the Sabbath canopy and outer entrance were removed from the temple',
        'He gave them to the priests of the high places as bribes for their loyalty',
      ],
      correct_index: 2,
      explanation: '2 Kings 16:18 — "He removed from the temple of the LORD the Sabbath canopy that had been built at the temple and removed the royal entryway outside the temple of the LORD, in deference to the king of Assyria."',
    },
    {
      question: 'Which of the following best describes the overall spiritual assessment of Ahaz in 2 Kings 16?',
      options: [
        'He was evil but less so than the northern kings; he kept some Mosaic laws',
        'He did not do what was right in the eyes of the LORD his God, but walked in the ways of the kings of Israel and even practiced child sacrifice',
        'He was good early in his reign but turned evil after allying with Assyria',
        'He was neutral — the narrator neither praises nor condemns him',
      ],
      correct_index: 1,
      explanation: '2 Kings 16:2-3 — "He did not do what was right in the eyes of the LORD his God, as his ancestor David had done. He followed the ways of the kings of Israel and even sacrificed his son in the fire."',
    },
    {
      question: 'How did Ahaz fund his appeal to Tiglath-pileser III of Assyria for help?',
      options: [
        'He imposed a special war tax on the people of Judah',
        'He took the silver and gold found in the temple and in the treasuries of the royal palace and sent it as a gift to the king of Assyria',
        'He melted down all the bronze temple implements',
        'He borrowed it from the Phoenician merchants of Tyre',
      ],
      correct_index: 1,
      explanation: '2 Kings 16:8 — "Ahaz took the silver and gold found in the temple of the LORD and in the treasuries of the royal palace and sent it as a gift to the king of Assyria."',
    },
  ],
  '2 Kings:17': [
    {
      question: 'What was the sin that distinguished Hoshea from all previous kings of Israel according to the narrator?',
      options: [
        'He was the first king to openly worship Baal in Samaria',
        'He was evil, but not like the kings of Israel who preceded him',
        'He imposed heavier taxes than any king before him',
        'He was the first king to refuse to pay tribute to any foreign power',
      ],
      correct_index: 1,
      explanation: '2 Kings 17:2 — "He did evil in the eyes of the LORD, but not like the kings of Israel who preceded him." This is a partial mitigation, though he still fell short.',
    },
    {
      question: 'What act by Hoshea triggered Shalmaneser V of Assyria to imprison him and besiege Samaria?',
      options: [
        'Hoshea built a new temple to Baal, angering Assyria\'s treaty terms',
        'Hoshea sent envoys to So king of Egypt and stopped paying tribute to Assyria',
        'Hoshea allied with Babylon and refused to send conscripts to the Assyrian army',
        'Hoshea executed Assyrian merchants and seized their goods',
      ],
      correct_index: 1,
      explanation: '2 Kings 17:4 — "He had sent envoys to So king of Egypt, and he no longer paid tribute to the king of Assyria, as he had done year by year. Therefore Shalmaneser seized him and put him in prison."',
    },
    {
      question: 'How long did Shalmaneser V besiege Samaria before it fell?',
      options: ['One year', 'Two years', 'Three years', 'Five years'],
      correct_index: 2,
      explanation: '2 Kings 17:5 — "The king of Assyria invaded the entire land, marched against Samaria and laid siege to it for three years."',
    },
    {
      question: 'Where did the king of Assyria deport the Israelites after the fall of Samaria?',
      options: [
        'To Egypt, Moab, and the cities of Edom',
        'To Halah and Habor, the river of Gozan, and the cities of the Medes',
        'To Babylon, Nineveh, and the coast of Phoenicia',
        'To the region of Damascus and the plains of Mesopotamia',
      ],
      correct_index: 1,
      explanation: '2 Kings 17:6 — "The king of Assyria deported Israel to Assyria and settled them in Halah, in Gozan on the Habor River and in the towns of the Medes."',
    },
    {
      question: 'According to the theological explanation in 2 Kings 17, what was the root cause of Israel\'s exile?',
      options: [
        'The failure of the Davidic dynasty to unite north and south under righteous leadership',
        'Israel sinned against the LORD who brought them out of Egypt; they feared other gods, walked in the customs of the nations, built high places, set up pillars and Asherah poles, and worshipped all the starry hosts',
        'The people rejected Moses\'s law regarding the Sabbath and tithes',
        'Corrupt priests who led the people astray from the beginning of the northern kingdom',
      ],
      correct_index: 1,
      explanation: '2 Kings 17:7-8 — "All this took place because the Israelites had sinned against the LORD their God, who had brought them up out of Egypt from under the power of Pharaoh king of Egypt. They worshiped other gods and followed the practices of the nations the LORD had driven out."',
    },
    {
      question: 'Despite sending every prophet and seer to warn them, Israel persisted in sin. What is said about their stubbornness?',
      options: [
        'They listened to the prophets but forgot their words within a generation',
        'They stiffened their necks like their ancestors, who did not trust in the LORD their God',
        'They chased away the prophets and imprisoned any who spoke against their idols',
        'They accepted the prophets\' words but were forced to sin by their kings',
      ],
      correct_index: 1,
      explanation: '2 Kings 17:14 — "But they would not listen and were as stiff-necked as their ancestors, who did not trust in the LORD their God."',
    },
    {
      question: 'The narrator makes a sobering note about Judah in the theological explanation. What does it say?',
      options: [
        'Judah remained faithful to the LORD throughout this period',
        'Even Judah did not keep the commands of the LORD their God but walked in the customs Israel had introduced',
        'Judah was warned but would only face exile one generation later',
        'Judah was spared because of the faithfulness of Hezekiah\'s ancestors',
      ],
      correct_index: 1,
      explanation: '2 Kings 17:19 — "Even Judah did not keep the commands of the LORD their God. They followed the practices Israel had introduced."',
    },
    {
      question: 'After resettling foreigners in Samaria, why did the king of Assyria send back an Israelite priest to the region?',
      options: [
        'Because the foreigners had petitioned Assyria to preserve Israelite culture',
        'Because lions were killing the new settlers and the king was told they did not know the law of the god of the land',
        'Because the Samaritan crops had failed and they needed priestly intercession',
        'Because the king of Assyria feared a revolt if Israelite religious traditions were suppressed',
      ],
      correct_index: 1,
      explanation: '2 Kings 17:25-26 — Lions were killing people in Samaria. The new settlers told the king of Assyria they did not know what the god of the land required, so he sent back a priest to teach them.',
    },
    {
      question: 'What characterizes the religious practice of the peoples resettled in Samaria (the origin of Samaritan syncretism)?',
      options: [
        'They abandoned their own gods and worshipped only the LORD',
        'They refused to worship the LORD at all and built their own temples',
        'They feared the LORD but also served their own gods according to the customs of the nations from which they had been deported',
        'They worshipped only in Jerusalem after the priest taught them the law',
      ],
      correct_index: 2,
      explanation: '2 Kings 17:33 — "They worshiped the LORD, but they also served their own gods in accordance with the customs of the nations from which they had been brought." This is the origin of Samaritan syncretism.',
    },
    {
      question: 'Which sin that began in Jeroboam\'s reign does the narrator identify as the specific trigger that caused the LORD to remove Israel from his presence?',
      options: [
        'The worship of Baal introduced by Ahab',
        'The making of two golden calves, worshipping all the starry hosts, and serving Baal — they rejected all the commands of the LORD and followed worthless idols',
        'The failure to observe the Passover for generations',
        'The intermarriage with Canaanites and Arameans that polluted the bloodline',
      ],
      correct_index: 1,
      explanation: '2 Kings 17:16-18 — Israel "forsook all the commands of the LORD their God and made for themselves two idols cast in the shape of calves, and an Asherah pole. They bowed down to all the starry hosts, and they worshiped Baal... So the LORD was very angry with Israel and removed them from his presence."',
    },
  ],
};

const passagesData: Record<string, { verse_start: number; verse_end: number; topic: string; plain_language: string; theological_context: string }[]> = {
  '2 Kings:13': [
    {
      verse_start: 14,
      verse_end: 19,
      topic: 'The Arrow of the LORD\'s Victory and Elisha\'s Anger',
      plain_language: 'The dying Elisha gives Jehoash a symbolic act — shoot the arrow of victory, then strike the ground. Jehoash shoots once and strikes only three times. Elisha rebukes him: had he struck five or six times he would have destroyed Aram completely, but now he will win only three victories.',
      theological_context: 'This passage illustrates that faith is not passive — the degree to which Jehoash engaged with the prophetic act determined the scope of God\'s deliverance. Halfhearted obedience yields partial blessing. The scene recalls Elisha\'s call to wholehearted trust and anticipates the NT principle that prayer and faith must be fervent (James 5:16). The prophet\'s indignation also shows God\'s desire to give full victory, frustrated by human tepidity.',
    },
    {
      verse_start: 20,
      verse_end: 21,
      topic: 'Dead Man Revived by Contact with Elisha\'s Bones',
      plain_language: 'After Elisha\'s burial, some Israelites are interrupted while burying a man by a Moabite raiding party. They throw the corpse into Elisha\'s tomb. When the dead man touches Elisha\'s bones, he revives and stands on his feet.',
      theological_context: 'This is the climactic miracle of Elisha\'s ministry — occurring after his death. It underscores that the Spirit of God in Elisha could not be contained by death, a sign pointing forward to resurrection hope. Elijah was taken alive; Elisha dies yet still gives life. Theologically it affirms that God\'s word and power outlast the human vessel, and hints at the coming resurrection and the life-giving power of Christ who himself defeated death.',
    },
    {
      verse_start: 3,
      verse_end: 7,
      topic: 'God\'s Gracious Response to a Compromised King\'s Prayer',
      plain_language: 'Jehoahaz sinned like Jeroboam, yet when Aram crushed Israel so severely the army was nearly annihilated, he sought the LORD and God listened. God provided a deliverer. Yet Israel never turned from Jeroboam\'s sins.',
      theological_context: 'This passage reveals God\'s pattern of grace despite persistent unfaithfulness. God responds to cries of distress even from imperfect repentance, showing his mercy exceeds his judgment (cf. Judges\' cycle). The tension between God\'s compassion and Israel\'s incorrigibility frames the whole of Kings: God is not bound by human worthiness. The unnamed deliverer (probably Adad-nirari III) shows God\'s sovereignty extends over pagan kings as instruments of redemption.',
    },
  ],
  '2 Kings:14': [
    {
      verse_start: 5,
      verse_end: 6,
      topic: 'Amaziah\'s Justice Grounded in Mosaic Law',
      plain_language: 'Amaziah executes the officials who assassinated his father but spares their children, citing the Mosaic law that children may not die for their parents\' sins.',
      theological_context: 'This is one of the only moments in Kings where a king explicitly cites Deuteronomy to justify a royal decision. It shows that at his best, Amaziah understood kingship as covenant obedience. The principle of individual moral responsibility (Deut 24:16) was revolutionary in the ancient Near East, where collective punishment of families was standard. This moment of faithfulness stands in ironic contrast to Amaziah\'s later pride, suggesting that knowledge of the law without humility ultimately fails.',
    },
    {
      verse_start: 8,
      verse_end: 14,
      topic: 'Amaziah\'s Pride, the Thistle Parable, and Jerusalem\'s Humiliation',
      plain_language: 'Flushed with victory over Edom, Amaziah challenges Jehoash of Israel to battle. Jehoash warns him with a parable about a thistle and a cedar. Amaziah refuses to listen; Judah is crushed, Jerusalem\'s wall is breached, and the temple treasures are looted.',
      theological_context: 'Pride is one of Kings\' central warnings to rulers. Amaziah\'s Edomite victory became a spiritual trap — success without humility before God leads to disaster. Jehoash\'s parable is wisdom literature embedded in narrative: the small creature (Amaziah) overestimates itself against a greater power and is trampled. The breach of Jerusalem\'s wall and looting of the temple foreshadow the final catastrophe under Nebuchadnezzar, where the same pattern of hubris culminates in total exile.',
    },
    {
      verse_start: 25,
      verse_end: 27,
      topic: 'God\'s Compassion Through Jeroboam II Despite His Evil',
      plain_language: 'Jeroboam II, an evil king, restores Israel\'s borders as predicted by Jonah. God uses him because God saw Israel\'s bitter suffering and was unwilling to blot out Israel\'s name.',
      theological_context: 'This is one of the most theologically striking passages in Kings: God works salvation through a wicked king because of divine compassion for suffering people, not because of human merit. It anticipates the prophetic tension in Amos and Hosea, who preached during Jeroboam II\'s reign: outward prosperity without justice is no sign of divine favor. The mention of Jonah son of Amittai connects this moment to the book of Jonah, where God\'s mercy extends even to Nineveh — reinforcing the theme of grace that transcends expectation.',
    },
  ],
  '2 Kings:15': [
    {
      verse_start: 8,
      verse_end: 12,
      topic: 'The End of Jehu\'s Dynasty — Fulfilled Prophecy',
      plain_language: 'Zechariah, the fourth-generation descendant of Jehu, reigns only six months before Shallum assassinates him publicly. The narrator notes this fulfilled God\'s promise to Jehu that his sons would sit on Israel\'s throne for four generations.',
      theological_context: 'The fulfillment of God\'s word to Jehu (2 Kings 10:30) demonstrates prophetic reliability even across a century of history. It also marks the beginning of Israel\'s terminal instability — after Zechariah, no dynasty holds the throne for more than ten years. The rapidity of the succession crisis (five kings in about a decade) illustrates the social disintegration that accompanies covenant unfaithfulness, a theme the prophets Amos, Hosea, and Isaiah all address. Divine promises of grace (to Jehu) coexist with historical collapse.',
    },
    {
      verse_start: 19,
      verse_end: 20,
      topic: 'Menahem\'s Tribute to Tiglath-pileser III — The Assyrian Shadow',
      plain_language: 'Menahem pays 1,000 talents of silver to Tiglath-pileser of Assyria to secure his own kingship, extracting fifty shekels per wealthy man in Israel. The Assyrian king withdraws.',
      theological_context: 'This is the first direct mention of Tiglath-pileser III (also called "Pul") in Kings and marks a turning point: Israel is now a vassal state buying security rather than trusting in God. The enormous sum (about 37 tons of silver) imposed on 60,000 wealthy men reveals the economic devastation of Menahem\'s policy. The prophets Isaiah and Hosea both condemned reliance on Assyria as a substitute for covenantal trust. This passage begins the irreversible Assyrian encroachment that will end with the fall of Samaria in chapter 17.',
    },
    {
      verse_start: 29,
      verse_end: 31,
      topic: 'Tiglath-pileser Deports the North — The Beginning of the End',
      plain_language: 'During Pekah\'s reign, Tiglath-pileser takes Gilead, Galilee, and Naphtali and deports the populations to Assyria. Hoshea then assassinates Pekah and takes the throne.',
      theological_context: 'The deportation of the northern and eastern territories is the first stage of the exile that will culminate in 17:6. The regions mentioned — Galilee of the Gentiles, Naphtali — are the same regions that Isaiah 9:1-2 says will one day see a great light, a messianic prophecy fulfilled in Jesus\'s Galilean ministry (Matt 4:15-16). The regicide of Pekah by Hoshea shows political desperation: Israel\'s leaders cannot save themselves, let alone the nation. Only divine intervention can reverse the trajectory.',
    },
  ],
  '2 Kings:16': [
    {
      verse_start: 7,
      verse_end: 9,
      topic: 'Ahaz\'s Self-Abasement Before Assyria — "I Am Your Servant and Your Son"',
      plain_language: 'Threatened by Aram and Israel, Ahaz strips the temple of silver and gold, sends it to Tiglath-pileser III, and declares himself Assyria\'s servant and son. Tiglath-pileser destroys Damascus and kills Rezin as requested.',
      theological_context: 'The irony is devastating: the covenant formula "servant and son" belongs to Israel\'s relationship with God (Exod 4:22-23; 2 Sam 7:14), but Ahaz applies it to a pagan king. He trades divine sonship for political vassalage. The prophet Isaiah had counseled Ahaz to trust God and ask for a sign (Isa 7:3-12), but Ahaz refused. His "solution" works tactically but costs Israel its theological identity and financial independence. The temple treasury — built to honor God — becomes tribute money for Assyria.',
    },
    {
      verse_start: 10,
      verse_end: 16,
      topic: 'The Assyrian Altar in the Temple — Uriah\'s Complicit Priesthood',
      plain_language: 'Ahaz sees an altar in Damascus and has Uriah the priest build a replica in Jerusalem before Ahaz returns. Ahaz then replaces the bronze altar of God with the new altar as the primary place of sacrifice and worship.',
      theological_context: 'This episode represents the deepest religious capitulation in Judah\'s history before the exile. The bronze altar, built according to divine specifications, is demoted or displaced. Uriah the priest (likely the same Uriah in Isaiah 8:2, used as a faithful witness) is here complicit in religious compromise — a devastating portrait of priestly failure. The altar\'s adoption shows that Ahaz was not merely politically pragmatic but theologically syncretistic: he wanted to worship on Assyrian terms. This sets the pattern that Hezekiah and Josiah will later have to reverse.',
    },
    {
      verse_start: 2,
      verse_end: 4,
      topic: 'Ahaz — The King Who Made His Son Pass Through Fire',
      plain_language: 'Ahaz is assessed as the worst Judahite king to date: he walked in the ways of the kings of Israel, practiced child sacrifice (passing his son through fire), and sacrificed at every high place, hill, and green tree.',
      theological_context: 'Child sacrifice (mlk offerings) was the ultimate covenantal violation, explicitly condemned in the Law (Lev 18:21; Deut 12:31; 18:10) and associated with the Canaanite god Molech. By adopting this practice Ahaz signaled that the unique identity of Judah as a covenant nation was dissolving. The cumulative description — "ways of kings of Israel," "detestable practices of the nations," "high places, hills, green trees" — deliberately echoes the indictment language of Deuteronomy. Ahaz prefigures Manasseh\'s even greater apostasy and ultimately the exile of Judah itself.',
    },
  ],
  '2 Kings:17': [
    {
      verse_start: 7,
      verse_end: 18,
      topic: 'The Theological Explanation of Israel\'s Exile',
      plain_language: 'The narrator provides the longest theological commentary in Kings, cataloguing Israel\'s sins: fearing other gods, building high places, setting up pillars and Asherah poles, worshipping Baal, burning children as offerings, practicing divination, rejecting the covenant despite every prophetic warning. The LORD removes Israel from his presence.',
      theological_context: 'This is the theological climax of the entire book of Kings and arguably of the Deuteronomistic History. The exile is not explained as military or political failure but as the culmination of a covenant relationship broken deliberately and repeatedly. The list of sins echoes the warnings of Deuteronomy 28-30. The emphasis on God\'s patience — sending "every prophet and seer" — underscores that the exile was not inevitable from the beginning but the result of persistent, willful rejection. The passage serves as both explanation and warning to the exilic community reading it.',
    },
    {
      verse_start: 24,
      verse_end: 34,
      topic: 'Samaritan Syncretism — Fearing the LORD While Serving Other Gods',
      plain_language: 'The Assyrians resettle various peoples in Samaria. Lions kill some settlers; a priest is sent back to teach them to fear the LORD. But each ethnic group continues worshipping its own gods alongside the LORD, creating the syncretic religion that defines Samaritanism.',
      theological_context: 'This passage explains the origin of the Samaritan people and their religion, which becomes significant in the New Testament (John 4; Luke 10:33). The phrase "they feared the LORD but also served their own gods" (v. 33) is the narrator\'s definitive description of syncretism — the fundamental violation of the Shema (Deut 6:4-5). The irony is sharp: the very land that expelled Israel for worshipping foreign gods now fills with foreigners who worship both God and idols. The theological lesson is that partial devotion is still idolatry.',
    },
    {
      verse_start: 1,
      verse_end: 6,
      topic: 'The Fall of Samaria — The End of the Northern Kingdom',
      plain_language: 'Hoshea, Israel\'s last king, becomes an Assyrian vassal then rebels by appealing to Egypt. Shalmaneser imprisons him and besieges Samaria for three years. The city falls, and the population is deported to Assyria.',
      theological_context: 'The fall of Samaria in 722 BC is one of the most significant events in biblical history. The three-year siege and total deportation of the population ends the northern kingdom permanently. Hoshea\'s appeal to Egypt — the nation from which God delivered Israel — is deeply ironic: Israel turns back to the house of slavery for salvation rather than to God. The narrator does not celebrate Assyria\'s power; Assyria is simply the instrument of a divine verdict long delayed. The passage connects directly to the theological explanation that follows, insisting that history is the arena of God\'s covenantal justice.',
    },
  ],
};

async function main() {
  console.log('Seeding 2 Kings 13-17...');

  for (const [key, questions] of Object.entries(quizData)) {
    const [bookName, chNum] = key.split(':');
    const { data: book } = await supabase.from('books').select('id').eq('name', bookName).single();
    if (!book) { console.warn(`Book not found: ${bookName}`); continue; }
    const { data: chapter } = await supabase.from('chapters').select('id').eq('book_id', book.id).eq('chapter_number', parseInt(chNum)).single();
    if (!chapter) { console.warn(`Chapter not found: ${key}`); continue; }
    await supabase.from('quiz_questions').delete().eq('chapter_id', chapter.id);
    const { error } = await supabase.from('quiz_questions').insert(questions.map(q => ({ chapter_id: chapter.id, ...q })));
    if (error) console.error(`Quiz error ${key}:`, error.message);
    else console.log(`✓ Quiz: ${key} (${questions.length} questions)`);
  }

  for (const [key, passages] of Object.entries(passagesData)) {
    const [bookName, chNum] = key.split(':');
    const { data: book } = await supabase.from('books').select('id').eq('name', bookName).single();
    if (!book) continue;
    const { data: chapter } = await supabase.from('chapters').select('id').eq('book_id', book.id).eq('chapter_number', parseInt(chNum)).single();
    if (!chapter) continue;
    for (const p of passages) {
      const { error } = await supabase.from('difficult_passages').insert({ chapter_id: chapter.id, ...p });
      if (error && error.code !== '23505') console.error(`Passage error ${key}:`, error.message);
    }
    console.log(`✓ Passages: ${key} (${passages.length} passages)`);
  }

  console.log('Done!');
}

main().catch(console.error);
