// Run: npx tsx scripts/seed-2kings-21-25.ts
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
  '2 Kings:21': [
    {
      question: 'How old was Manasseh when he became king, and how many years did he reign?',
      options: ['8 years old; 31 years', '12 years old; 41 years', '12 years old; 55 years', '25 years old; 16 years'],
      correct_index: 2,
      explanation: '2 Kings 21:1 — "Manasseh was twelve years old when he began to reign, and he reigned fifty-five years in Jerusalem."',
    },
    {
      question: 'What did Manasseh rebuild that his father Hezekiah had destroyed?',
      options: ['The temple altar', 'The high places', 'The city walls', 'The bronze serpent'],
      correct_index: 1,
      explanation: '2 Kings 21:3 — "He rebuilt the high places which Hezekiah his father had destroyed."',
    },
    {
      question: 'Where specifically did Manasseh erect the carved image of Asherah?',
      options: ['On the Mount of Olives', 'In the valley of Ben-hinnom', 'In the house of the LORD', 'At the high place in Gibeon'],
      correct_index: 2,
      explanation: '2 Kings 21:7 — "And the carved image of Asherah that he had made he set in the house of which the LORD said to David and to Solomon his son..."',
    },
    {
      question: 'Which abominable practice did Manasseh perform with his son?',
      options: ['Sacrificed him to Molech at the gate', 'Made his son pass through fire', 'Sold his son into slavery in Egypt', 'Offered his son as a temple prostitute'],
      correct_index: 1,
      explanation: '2 Kings 21:6 — "And he burned his son as an offering and practiced soothsaying and augury, and dealt with mediums and with wizards."',
    },
    {
      question: 'To what did God compare the future fate of Jerusalem because of Manasseh\'s sins?',
      options: ['To the destruction of Sodom and Gomorrah', 'To the fate of Samaria and the house of Ahab', 'To the flood in the days of Noah', 'To the exile of the northern tribes to Assyria'],
      correct_index: 1,
      explanation: '2 Kings 21:13 — "And I will stretch over Jerusalem the measuring line of Samaria, and the plummet of the house of Ahab."',
    },
    {
      question: 'God said Manasseh had led Judah to sin more than which group of people?',
      options: ['The Egyptians', 'The Philistines', 'The Amorites', 'The Babylonians'],
      correct_index: 2,
      explanation: '2 Kings 21:11 — "...Manasseh king of Judah has committed these abominations, and has done things more wicked than all that the Amorites did."',
    },
    {
      question: 'What specific crime of Manasseh is highlighted as filling Jerusalem from one end to the other?',
      options: ['Idol worship in every household', 'Shedding very much innocent blood', 'Practicing witchcraft openly', 'Defiling the temple courts'],
      correct_index: 1,
      explanation: '2 Kings 21:16 — "Moreover Manasseh shed very much innocent blood, till he had filled Jerusalem from one end to another."',
    },
    {
      question: 'How long did Amon, Manasseh\'s son, reign over Judah?',
      options: ['6 months', '1 year', '2 years', '4 years'],
      correct_index: 2,
      explanation: '2 Kings 21:19 — "Amon was twenty-two years old when he began to reign, and he reigned two years in Jerusalem."',
    },
    {
      question: 'What happened to the servants who assassinated King Amon?',
      options: ['They were exiled to Egypt', 'They were imprisoned in Babylon', 'The people of the land killed them', 'They escaped to the wilderness'],
      correct_index: 2,
      explanation: '2 Kings 21:24 — "But the people of the land slew all those who had conspired against King Amon."',
    },
    {
      question: 'Who succeeded Amon as king after his assassination?',
      options: ['Jehoahaz', 'Josiah', 'Jehoiakim', 'Zedekiah'],
      correct_index: 1,
      explanation: '2 Kings 21:26 — "...and Josiah his son reigned in his stead."',
    },
  ],

  '2 Kings:22': [
    {
      question: 'How old was Josiah when he became king of Judah?',
      options: ['6 years old', '8 years old', '12 years old', '16 years old'],
      correct_index: 1,
      explanation: '2 Kings 22:1 — "Josiah was eight years old when he began to reign, and he reigned thirty-one years in Jerusalem."',
    },
    {
      question: 'In what year of Josiah\'s reign did he send workers to repair the temple?',
      options: ['His 8th year', 'His 12th year', 'His 18th year', 'His 25th year'],
      correct_index: 2,
      explanation: '2 Kings 22:3 — "In the eighteenth year of King Josiah, the king sent Shaphan the son of Azaliah...to the house of the LORD."',
    },
    {
      question: 'Who was the high priest who found the Book of the Law during the temple repairs?',
      options: ['Shaphan', 'Hilkiah', 'Azariah', 'Shallum'],
      correct_index: 1,
      explanation: '2 Kings 22:8 — "And Hilkiah the high priest said to Shaphan the secretary, \'I have found the book of the law in the house of the LORD.\'"',
    },
    {
      question: 'What did Josiah do when the Book of the Law was read to him?',
      options: ['He ordered it copied immediately', 'He tore his robes in grief', 'He declared a national holiday', 'He sent it to the temple treasury'],
      correct_index: 1,
      explanation: '2 Kings 22:11 — "When the king heard the words of the book of the law, he tore his clothes."',
    },
    {
      question: 'Who was the prophetess consulted by Josiah\'s delegation?',
      options: ['Deborah', 'Miriam', 'Huldah', 'Noadiah'],
      correct_index: 2,
      explanation: '2 Kings 22:14 — "So Hilkiah the priest, and Ahikam, and Achbor, and Shaphan, and Asaiah went to Huldah the prophetess."',
    },
    {
      question: 'What was Huldah\'s husband\'s role in the royal court?',
      options: ['Captain of the guard', 'Keeper of the wardrobe', 'Chief scribe', 'Commander of the army'],
      correct_index: 1,
      explanation: '2 Kings 22:14 — Huldah was "the wife of Shallum the son of Tikvah...keeper of the wardrobe."',
    },
    {
      question: 'What did Huldah prophesy would happen to Judah and Jerusalem?',
      options: ['They would be spared if they repented within forty days', 'All the evil written in the book would be brought upon them', 'They would be delivered from Babylon as from Egypt', 'The people would be scattered but the city would stand'],
      correct_index: 1,
      explanation: '2 Kings 22:16 — "Thus says the LORD, Behold, I will bring evil upon this place and upon its inhabitants, all the words of the book which the king of Judah has read."',
    },
    {
      question: 'Why did Huldah prophesy that Josiah himself would not see the disaster?',
      options: ['Because he had reigned faithfully from youth', 'Because he had rebuilt the temple', 'Because his heart was penitent and he humbled himself before the LORD', 'Because he had destroyed Manasseh\'s altars'],
      correct_index: 2,
      explanation: '2 Kings 22:19 — "Because your heart was penitent, and you humbled yourself before the LORD...therefore, behold, I will gather you to your fathers."',
    },
    {
      question: 'What specific fate did Huldah say Josiah would be spared from seeing?',
      options: ['The fall of Samaria', 'The destruction Jerusalem and the disaster brought upon it', 'The conquest of Egypt', 'The deportation of his children'],
      correct_index: 1,
      explanation: '2 Kings 22:20 — "...your eyes shall not see all the evil which I will bring upon this place." He would be gathered to his grave in peace.',
    },
    {
      question: 'Who read the Book of the Law to Josiah before the king sent the delegation to inquire of God?',
      options: ['Hilkiah the high priest', 'Shaphan the secretary', 'Ahikam son of Shaphan', 'Asaiah the king\'s servant'],
      correct_index: 1,
      explanation: '2 Kings 22:10 — "Then Shaphan the secretary told the king, \'Hilkiah the priest has given me a book.\' And Shaphan read it before the king."',
    },
  ],

  '2 Kings:23': [
    {
      question: 'Where did Josiah read all the words of the Book of the Covenant to the people?',
      options: ['At the gate of Jerusalem', 'In the house of the LORD', 'On the Mount of Olives', 'At the high place in Gibeon'],
      correct_index: 1,
      explanation: '2 Kings 23:2 — "And the king went up to the house of the LORD, and with him all the men of Judah and all the inhabitants of Jerusalem...and he read in their hearing all the words of the book of the covenant."',
    },
    {
      question: 'What did Josiah do with the Asherah pole he removed from the temple?',
      options: ['He burned it and threw the ashes into the Kidron Brook', 'He cast it into the Dead Sea', 'He burned it at the Brook Kidron, beat it to dust, and cast the dust on graves', 'He buried it outside the city walls'],
      correct_index: 2,
      explanation: '2 Kings 23:6 — "And he brought out the Asherah from the house of the LORD...and burned it at the Brook Kidron, and beat it to dust and cast the dust of it upon the graves of the common people."',
    },
    {
      question: 'The valley of Ben-hinnom was defiled by Josiah specifically to prevent what practice there?',
      options: ['Child sacrifice to Molech through fire', 'Worship of Baal under the oak trees', 'Sacrifice of horses to the sun', 'Ritual prostitution to Asherah'],
      correct_index: 0,
      explanation: '2 Kings 23:10 — "And he defiled Topheth, which is in the Valley of the Son of Hinnom, that no one might burn his son or his daughter as an offering to Molech."',
    },
    {
      question: 'Which king of Israel\'s high places did Josiah destroy in Bethel, fulfilling a prophecy from 1 Kings?',
      options: ['Ahab', 'Jeroboam', 'Baasha', 'Omri'],
      correct_index: 1,
      explanation: '2 Kings 23:15 — "Moreover the altar at Bethel, the high place erected by Jeroboam the son of Nebat, who made Israel to sin, that altar also and the high place he pulled down and burned..."',
    },
    {
      question: 'How was the prophet\'s tomb at Bethel treated by Josiah?',
      options: ['It was destroyed along with the altar', 'It was moved to Jerusalem for honor', 'It was left undisturbed at the man of God\'s request', 'The bones were burned on the Bethel altar'],
      correct_index: 2,
      explanation: '2 Kings 23:17-18 — Josiah asked whose tomb it was, and when told it was the man of God who had predicted these events, he said "Let him alone; let no man move his bones."',
    },
    {
      question: 'The Passover Josiah held was declared unprecedented since what era?',
      options: ['The days of King David', 'The days of the united monarchy under Solomon', 'The days of the judges who judged Israel', 'The days of Moses in the wilderness'],
      correct_index: 2,
      explanation: '2 Kings 23:22 — "For no such Passover had been kept since the days of the judges who judged Israel, or during all the days of the kings of Israel or of the kings of Judah."',
    },
    {
      question: 'Despite Josiah\'s great reform, what did God declare regarding Judah\'s fate?',
      options: ['Judah would be spared for fifty years', 'God still did not turn from his burning wrath against Judah because of Manasseh\'s sins', 'The disaster would fall only on Israel, not Judah', 'God would delay judgment until after Jerusalem\'s walls were rebuilt'],
      correct_index: 1,
      explanation: '2 Kings 23:26 — "Still the LORD did not turn from the burning of his great wrath, by which his anger was kindled against Judah, because of all the provocations with which Manasseh had provoked him."',
    },
    {
      question: 'Where was Josiah killed in battle?',
      options: ['At Lachish', 'At Megiddo', 'At Riblah', 'At the Jordan River'],
      correct_index: 1,
      explanation: '2 Kings 23:29 — "In his days Pharaoh Neco king of Egypt went up to the king of Assyria to the river Euphrates. King Josiah went to meet him; and Pharaoh Neco slew him at Megiddo."',
    },
    {
      question: 'Who deposed Jehoahaz, Josiah\'s son, and replaced him with another of Josiah\'s sons?',
      options: ['Nebuchadnezzar king of Babylon', 'The people of the land of Judah', 'Pharaoh Neco king of Egypt', 'The Assyrian king at Nineveh'],
      correct_index: 2,
      explanation: '2 Kings 23:33-34 — "And Pharaoh Neco put him in bonds at Riblah...and carried him to Egypt...and made Eliakim the son of Josiah king in the place of Josiah his father."',
    },
    {
      question: 'What tribute did Pharaoh Neco impose on the land of Judah?',
      options: ['50 talents of silver and 5 talents of gold', '100 talents of silver and 1 talent of gold', 'A hundred talents of silver and a talent of gold', '200 talents of silver and 10 talents of gold'],
      correct_index: 2,
      explanation: '2 Kings 23:33 — "And Pharaoh Neco put him in bonds at Riblah in the land of Hamath, that he might not reign in Jerusalem, and laid on the land a tribute of a hundred talents of silver and a talent of gold."',
    },
  ],

  '2 Kings:24': [
    {
      question: 'Who came against Jehoiakim as his servant during the first three years before Jehoiakim rebelled?',
      options: ['Pharaoh Neco of Egypt', 'Nebuchadnezzar king of Babylon', 'The king of Assyria', 'The king of the Medes'],
      correct_index: 1,
      explanation: '2 Kings 24:1 — "In his days Nebuchadnezzar king of Babylon came up, and Jehoiakim became his servant three years; then he turned and rebelled against him."',
    },
    {
      question: 'What groups of raiders did the LORD send against Judah because of Manasseh\'s sins?',
      options: ['Philistines, Edomites, Ammonites, and Moabites', 'Chaldeans, Arameans, Moabites, and Ammonites', 'Egyptians, Assyrians, Edomites, and Philistines', 'Babylonians, Persians, Medes, and Elamites'],
      correct_index: 1,
      explanation: '2 Kings 24:2 — "And the LORD sent against him bands of the Chaldeans, and bands of the Syrians, and bands of the Moabites, and bands of the Ammonites."',
    },
    {
      question: 'How old was Jehoiachin when he became king, and how long did he reign?',
      options: ['16 years old; 3 months', '18 years old; 3 months', '18 years old; 1 year', '20 years old; 6 months'],
      correct_index: 1,
      explanation: '2 Kings 24:8 — "Jehoiachin was eighteen years old when he became king, and he reigned three months in Jerusalem."',
    },
    {
      question: 'Jehoiachin surrendered to Nebuchadnezzar. Who else went out with him at the surrender?',
      options: ['Only the royal guard', 'His mother, his servants, his officials, and his palace officials', 'The high priest and the temple treasurers', 'The army commanders and cavalry'],
      correct_index: 1,
      explanation: '2 Kings 24:12 — "And Jehoiachin the king of Judah gave himself up to the king of Babylon, himself, and his mother, and his servants, and his princes, and his palace officials."',
    },
    {
      question: 'Approximately how many people were taken in the first deportation to Babylon?',
      options: ['1,000 people', '3,000 people', '10,000 people', '25,000 people'],
      correct_index: 2,
      explanation: '2 Kings 24:14 — "He carried away all Jerusalem, and all the princes, and all the mighty men of valor, ten thousand captives, and all the craftsmen and the smiths."',
    },
    {
      question: 'Who was left in Judah after the first deportation?',
      options: ['Only the temple priests and Levites', 'Only the poorest people of the land', 'Only women and children', 'Only the aged and infirm'],
      correct_index: 1,
      explanation: '2 Kings 24:14 — "None remained, except the poorest people of the land."',
    },
    {
      question: 'What happened to the treasures of the temple during this deportation?',
      options: ['They were hidden in the City of David', 'They were cut in pieces and taken to Babylon, as Isaiah had prophesied', 'They were given to Egypt as tribute', 'They were buried beneath the temple floor'],
      correct_index: 1,
      explanation: '2 Kings 24:13 — "And he carried out from there all the treasures of the house of the LORD, and the treasures of the king\'s house, and cut in pieces all the vessels of gold in the temple of the LORD, which Solomon king of Israel had made, as the LORD had foretold."',
    },
    {
      question: 'What was the birth name of Zedekiah before Nebuchadnezzar renamed him?',
      options: ['Eliakim', 'Mattaniah', 'Jehoahaz', 'Coniah'],
      correct_index: 1,
      explanation: '2 Kings 24:17 — "And the king of Babylon made Mattaniah, Jehoiachin\'s uncle, king in his place, and changed his name to Zedekiah."',
    },
    {
      question: 'What did Zedekiah do in relation to Babylon that triggered the final siege?',
      options: ['He allied with Egypt and refused to pay tribute', 'He rebelled against the king of Babylon', 'He killed Babylonian officials in Jerusalem', 'He attacked Babylonian trade caravans'],
      correct_index: 1,
      explanation: '2 Kings 24:20 — "And Zedekiah rebelled against the king of Babylon."',
    },
    {
      question: 'Whose prophecy to Hezekiah did the taking of the temple treasures to Babylon fulfill?',
      options: ['Jeremiah\'s prophecy', 'Micah\'s prophecy', 'Isaiah\'s prophecy', 'Ezekiel\'s prophecy'],
      correct_index: 2,
      explanation: '2 Kings 24:13 refers to "the LORD had foretold," pointing back to Isaiah\'s prophecy in 2 Kings 20:17-18 that everything in Hezekiah\'s house would be carried to Babylon.',
    },
  ],

  '2 Kings:25': [
    {
      question: 'In what year of Zedekiah\'s reign did Nebuchadnezzar begin the siege of Jerusalem?',
      options: ['The 3rd year', 'The 7th year', 'The 9th year', 'The 11th year'],
      correct_index: 2,
      explanation: '2 Kings 25:1 — "And in the ninth year of his reign, in the tenth month, on the tenth day of the month, Nebuchadnezzar king of Babylon came with all his army against Jerusalem."',
    },
    {
      question: 'What was the condition in the city during the siege before the walls were breached?',
      options: ['Disease spread through the army barracks', 'The famine was so severe there was no food for the people', 'A great plague killed thousands of soldiers', 'The water supply had been cut off for months'],
      correct_index: 1,
      explanation: '2 Kings 25:3 — "On the ninth day of the fourth month the famine was so severe in the city that there was no food for the people of the land."',
    },
    {
      question: 'When the city walls were breached, what did Zedekiah and his army do?',
      options: ['They surrendered at the city gate', 'They fled by night through a gate between the two walls', 'They retreated to the temple mount', 'They fought until the last man fell'],
      correct_index: 1,
      explanation: '2 Kings 25:4 — "Then a breach was made in the city; the king with all the men of war fled by night by the way of the gate between the two walls."',
    },
    {
      question: 'Where was Zedekiah captured after fleeing Jerusalem?',
      options: ['At the Jordan River fords', 'In the plains of Jericho', 'Near the city of Lachish', 'In the wilderness of Judea'],
      correct_index: 1,
      explanation: '2 Kings 25:5 — "But the army of the Chaldeans pursued the king, and overtook him in the plains of Jericho."',
    },
    {
      question: 'What happened to Zedekiah at Riblah after his capture?',
      options: ['He was immediately executed', 'His sons were slaughtered before his eyes, then he was blinded and taken to Babylon', 'He was imprisoned and put on trial', 'He was exiled to Egypt as a captive'],
      correct_index: 1,
      explanation: '2 Kings 25:7 — "They slew the sons of Zedekiah before his eyes, and put out the eyes of Zedekiah, and bound him in fetters, and took him to Babylon."',
    },
    {
      question: 'In what month and year was the temple in Jerusalem burned by the Babylonians?',
      options: ['The 4th month of Nebuchadnezzar\'s 18th year', 'The 5th month of Nebuchadnezzar\'s 19th year', 'The 7th month of Nebuchadnezzar\'s 20th year', 'The 3rd month of Nebuchadnezzar\'s 21st year'],
      correct_index: 1,
      explanation: '2 Kings 25:8-9 — "In the fifth month, on the seventh day of the month—which was the nineteenth year of King Nebuchadnezzar...he burned the house of the LORD."',
    },
    {
      question: 'Who was appointed governor over the remaining people left in Judah by Nebuchadnezzar?',
      options: ['Seraiah the chief priest', 'Gedaliah the son of Ahikam', 'Ishmael the son of Netaniah', 'Johanan the son of Kareah'],
      correct_index: 1,
      explanation: '2 Kings 25:22 — "And over the people who remained in the land of Judah...Nebuchadnezzar king of Babylon appointed Gedaliah the son of Ahikam."',
    },
    {
      question: 'What happened to Gedaliah the governor?',
      options: ['He was taken to Babylon after two years of service', 'He was assassinated by Ishmael son of Netaniah', 'He fled to Egypt when the Babylonians returned', 'He died of illness at his post in Mizpah'],
      correct_index: 1,
      explanation: '2 Kings 25:25 — "But in the seventh month, Ishmael the son of Netaniah, son of Elishama, of the royal family, came with ten men and struck down Gedaliah and killed him."',
    },
    {
      question: 'What positive event for the house of David occurred in the 37th year of Jehoiachin\'s exile?',
      options: ['Jehoiachin was allowed to return to Jerusalem', 'Evil-merodach released Jehoiachin from prison and gave him a seat of honor', 'Jehoiachin\'s son was appointed to a position in the Babylonian court', 'A treaty was signed that promised return of the exiles'],
      correct_index: 1,
      explanation: '2 Kings 25:27-28 — "Evil-merodach king of Babylon, in the year that he began to reign, graciously freed Jehoiachin king of Judah from prison. And he spoke kindly to him and gave him a seat above the seats of the kings who were with him in Babylon."',
    },
    {
      question: 'What was Jehoiachin\'s ongoing provision from the Babylonian king until his death?',
      options: ['A small plot of land outside Babylon to farm', 'A regular allowance was given to him, every day a portion, for as long as he lived', 'A position as a minor official in the Babylonian treasury', 'Freedom to travel throughout the empire but no fixed income'],
      correct_index: 1,
      explanation: '2 Kings 25:30 — "And his allowance was a regular allowance given him by the king, every day a portion, as long as he lived."',
    },
  ],
};

const passagesData: Record<string, { verse_start: number; verse_end: number; topic: string; plain_language: string; theological_context: string }[]> = {
  '2 Kings:21': [
    {
      verse_start: 10,
      verse_end: 15,
      topic: 'God\'s Judgment on Judah Due to Manasseh\'s Sin',
      plain_language: 'God speaks through his servants the prophets declaring that because Manasseh has caused Judah to sin worse than the Amorites, Jerusalem will be destroyed — wiped clean like a dish — and the survivors handed over to their enemies. The basis is the long history of disobedience stretching back to the exodus from Egypt.',
      theological_context: 'This passage reveals that divine patience has limits. Manasseh\'s sins were not merely political or cultural failures; they were covenant violations accumulating across generations. The "measuring line of Samaria" imagery (v. 13) is deliberate: the same standard by which God judged the northern kingdom now applies to Judah. The theological point is that election and temple presence do not guarantee immunity from judgment. God\'s holiness demands accountability even from his chosen people.',
    },
    {
      verse_start: 1,
      verse_end: 9,
      topic: 'Manasseh\'s Comprehensive Apostasy',
      plain_language: 'Manasseh systematically reversed every reform his father Hezekiah had made — rebuilding the high places, erecting altars to Baal, placing an Asherah pole inside the very temple, and worshipping the stars in the temple courts. He practiced child sacrifice, sorcery, and divination, filling Jerusalem with occultic influence from the top down.',
      theological_context: 'The narrator\'s catalog of sins is not random — it is structured to show that Manasseh defiled every sacred space: the high places (throughout the land), the altar courts, the inner temple itself. The Asherah pole in the LORD\'s house is the ultimate desecration. His sin exceeded the Canaanites (v. 11), meaning Israel\'s king out-paganized the pagans God drove out for their wickedness. This underscores the irony and gravity of covenant betrayal.',
    },
    {
      verse_start: 19,
      verse_end: 26,
      topic: 'The Reign and Assassination of Amon',
      plain_language: 'Amon, Manasseh\'s son, ruled for only two years and continued his father\'s idolatrous ways without repentance. His own servants conspired and killed him in his palace. The ordinary people ("people of the land") then killed the assassins and placed Josiah on the throne, showing the populace maintained a commitment to dynastic stability.',
      theological_context: 'Amon\'s brief and violent reign stands as a literary foil to the reforms that follow under Josiah. The note that Amon "did not humble himself before the LORD as Manasseh his father had humbled himself" (2 Chr 33:23) is instructive — even Manasseh eventually repented (according to Chronicles), but Amon did not. The "people of the land" acting to preserve the Davidic line reflects a recurring phenomenon in Judah\'s history where popular loyalty to the dynasty checked court conspiracies.',
    },
  ],

  '2 Kings:22': [
    {
      verse_start: 8,
      verse_end: 13,
      topic: 'Discovery of the Book of the Law and Josiah\'s Response',
      plain_language: 'During temple repair work, the high priest Hilkiah finds a scroll — almost certainly the book of Deuteronomy — and has the scribe Shaphan read it to King Josiah. Hearing the covenant curses for disobedience, Josiah tears his robes in mourning, understanding immediately that Judah has been violating this covenant for generations and that God\'s wrath is now justified.',
      theological_context: 'The "finding" of the scroll is historically significant and theologically laden. Deuteronomy contains the blessings and curses of the Sinai covenant, and its apparent disappearance during the reigns of Manasseh and Amon explains the depth of apostasy — the people had literally lost the written Torah. Josiah\'s immediate anguish illustrates the correct response to confronting God\'s word: not defense but repentance. His tearing of robes was a formal act of mourning and contrition, not mere emotion.',
    },
    {
      verse_start: 14,
      verse_end: 17,
      topic: 'Huldah\'s Prophecy of Judgment on Jerusalem',
      plain_language: 'The prophetess Huldah confirms the worst fears from the scroll: all the curses written in the book will fall on Judah because the people have forsaken God and offered worship to other gods, provoking his anger. The disaster is certain and irrevocable.',
      theological_context: 'It is significant that the king\'s delegation — composed of leading men including the high priest — goes to a woman prophet rather than to Jeremiah (who was active at this time) or Zephaniah. Huldah\'s authority is presented without any qualification or surprise, suggesting women prophets held recognized standing in Judah. Her oracle has a two-part structure common in prophetic literature: judgment for the nation (vv. 15-17) and a personal word for the king (vv. 18-20), distinguishing between corporate and individual accountability.',
    },
    {
      verse_start: 18,
      verse_end: 20,
      topic: 'Josiah\'s Personal Promise of a Peaceful Death',
      plain_language: 'Because Josiah responded to God\'s word with genuine humility and tears, God promises that Josiah himself will die in peace ("gathered to your grave in peace") before the catastrophe falls on Jerusalem. This is a personal mercy within an otherwise unalterable national judgment.',
      theological_context: 'This passage raises a difficult question: Josiah actually died in battle at Megiddo (23:29), which seems to contradict "in peace." Interpreters generally understand "in peace" to mean he would die before witnessing Jerusalem\'s full destruction and captivity — a mercy, not a guarantee of a peaceful death. Theologically, the passage illustrates that individual covenant faithfulness matters even when national judgment is fixed. God distinguishes between communal sin and personal repentance, honoring Josiah\'s heart even as the larger verdict stands.',
    },
  ],

  '2 Kings:23': [
    {
      verse_start: 1,
      verse_end: 3,
      topic: 'Covenant Renewal at the Temple',
      plain_language: 'Josiah gathers all the people — from the greatest to the least — to the temple and reads them the entire Book of the Covenant. He then makes a public pledge to follow the LORD\'s commands with all his heart and soul, and all the people commit themselves to the covenant alongside the king.',
      theological_context: 'This scene deliberately echoes earlier covenant renewal scenes in Israel\'s history — most notably Joshua 24 and the Shechem covenant. The king\'s role here is not purely political but priestly-prophetic: he reads, he leads, he pledges first. The phrase "with all his heart and all his soul and all his might" directly echoes the Shema (Deuteronomy 6:5), indicating Josiah embodied the Deuteronomic ideal of kingship. The inclusion of "all the people" underscores the communal nature of covenant — it is not merely individual but national.',
    },
    {
      verse_start: 21,
      verse_end: 23,
      topic: 'The Unprecedented Passover',
      plain_language: 'Josiah commands all Judah to observe the Passover as written in the Book of the Covenant. The narrator declares that no Passover like it had been kept since the days of the judges — not under any of the kings of Israel or Judah — making it the most significant covenant observance in centuries.',
      theological_context: 'The Passover was the foundational memorial of Israel\'s identity as a redeemed people. Its long neglect symbolized the depth of Israel\'s spiritual amnesia. Josiah\'s Passover is presented as the culminating act of his reform — not merely destroying bad things but recovering the central act of worship that defined Israel\'s relationship with the God who saved them from Egypt. The comparison to the judges\' era (rather than to David or Solomon) may reflect the text\'s use of Deuteronomy as its standard, since Deuteronomy itself dates to the pre-monarchic period.',
    },
    {
      verse_start: 26,
      verse_end: 30,
      topic: 'Irreversible Wrath and Josiah\'s Death at Megiddo',
      plain_language: 'Despite Josiah\'s extraordinary faithfulness, God declares his anger against Judah cannot be turned back because of all Manasseh had done. God resolves to remove Judah from his presence as he removed Israel. Josiah then dies at Megiddo fighting Pharaoh Neco, mourned by all Jerusalem.',
      theological_context: 'This is one of the most theologically jarring passages in Kings. The greatest reforming king dies in battle while all his work is declared insufficient to save the nation. It poses a direct challenge to simplistic retribution theology: the righteous king suffers while the nation is still condemned. Later biblical theology (especially Jeremiah and the Deuteronomistic historian) wrestles with this by emphasizing that individual righteousness and corporate judgment operate on different tracks. Josiah\'s death also signals that the narrative arc of Kings has reached its tragic conclusion — nothing can avert the coming exile.',
    },
  ],

  '2 Kings:24': [
    {
      verse_start: 1,
      verse_end: 4,
      topic: 'God\'s Sovereign Use of Babylon as an Instrument of Judgment',
      plain_language: 'When Jehoiakim rebels against Nebuchadnezzar, God sends multiple hostile bands — Chaldeans, Arameans, Moabites, Ammonites — against Judah. The narrator explicitly interprets this as God\'s judgment for Manasseh\'s sins, especially the innocent blood he shed, which God would not pardon.',
      theological_context: 'The theological move here is crucial: Nebuchadnezzar and his allied raiders are presented not as autonomous geopolitical forces but as instruments of divine judgment. This is the same framework used for Assyria in Isaiah 10 ("the rod of my anger"). The unpardonable sin specified is the shedding of innocent blood — a phrase that appears in the law (Deuteronomy 19:13) and wisdom literature as a category of irreversible moral pollution. The narrator insists the disaster is not political bad luck but deserved covenant consequence.',
    },
    {
      verse_start: 10,
      verse_end: 16,
      topic: 'The First Deportation: Jerusalem\'s Elite Exiled',
      plain_language: 'Nebuchadnezzar besieges Jerusalem and Jehoiachin surrenders. Nebuchadnezzar takes the king, his family, all the royal officials, ten thousand warriors and craftsmen, and all the temple and palace treasures to Babylon, leaving only the poorest citizens behind.',
      theological_context: 'The deportation strategy was deliberate imperial policy — remove the leadership class (officials, warriors, craftsmen) to prevent rebellion and accelerate assimilation. For Israel, the theological stakes were enormous: the king was taken, the temple vessels were seized, and the best of the people were gone. This was the fulfillment of Isaiah\'s prophecy to Hezekiah (20:17-18) — a fulfillment the narrator explicitly marks. The survival of Jehoiachin in Babylon becomes crucial at the book\'s ending (25:27-30), since it keeps the Davidic line alive.',
    },
    {
      verse_start: 17,
      verse_end: 20,
      topic: 'Zedekiah Installed and Judah\'s Final Rebellion',
      plain_language: 'Nebuchadnezzar installs Mattaniah (renamed Zedekiah) as a puppet king. He is Jehoiachin\'s uncle and reigns eleven years, doing evil as his predecessors had. Ultimately he rebels against Babylon — an act the narrator frames as the LORD\'s doing to bring about Jerusalem\'s removal from God\'s presence.',
      theological_context: 'The renaming of Mattaniah to Zedekiah ("The LORD is my righteousness") is ironic: a king whose name invokes divine righteousness will preside over Jerusalem\'s final destruction. The phrase "for the LORD was angry with Jerusalem" as the reason behind Zedekiah\'s rebellion is theologically sophisticated — it does not deny Zedekiah\'s free choice but insists that history\'s events are operating within the frame of divine purpose. This reflects the Deuteronomistic historian\'s conviction that exile was not a defeat of the LORD but the execution of the covenant curses he had warned of.',
    },
  ],

  '2 Kings:25': [
    {
      verse_start: 1,
      verse_end: 7,
      topic: 'The Siege, Fall, and Blinding of Zedekiah',
      plain_language: 'Nebuchadnezzar\'s army besieges Jerusalem for eighteen months until famine is severe. The walls are breached, Zedekiah and his army flee but are captured in the plains of Jericho. Brought to Riblah, Zedekiah watches his sons executed, then is blinded — his last sight is their deaths — and taken in chains to Babylon.',
      theological_context: 'The fall of Jerusalem is narrated with spare, devastating restraint. The detail that Zedekiah\'s sons were killed before his eyes, and then his eyes were put out, is more than cruelty — it is symbolic: the last thing the king sees is the extinction of his dynastic hopes. The city that was "the joy of all the earth" (Psalm 48:2) and was supposedly inviolable because of God\'s presence falls utterly. Theologically, this is the terminus of the covenant curses listed in Deuteronomy 28 — siege, famine, exile, and the king\'s humiliation.',
    },
    {
      verse_start: 8,
      verse_end: 17,
      topic: 'The Destruction of the Temple and Jerusalem',
      plain_language: 'The Babylonian commander Nebuzaradan burns the temple, the palace, and all the great houses of Jerusalem. He tears down the city walls. The remaining people are deported except the poorest. The temple\'s bronze pillars, the bronze sea, and all the metal vessels are broken up and taken to Babylon. The passage catalogs the temple treasures as a kind of obituary for the sanctuary.',
      theological_context: 'The detailed enumeration of the temple\'s bronze furnishings — pillars, sea, stands, vessels — reads as a liturgical lament. These objects were built by Solomon at the founding of the temple (1 Kings 7) and are now being catalogued at its destruction, creating a literary bookend across the entire double book. The burning of the temple raises the most acute theological question of the exile: has God abandoned his house, or has his glory departed before the fire fell (as Ezekiel 10 will suggest)? For Kings, the answer is implicit: God himself sent the Babylonians. The destruction is divine, not merely human.',
    },
    {
      verse_start: 27,
      verse_end: 30,
      topic: 'Jehoiachin Released: A Flicker of Hope for David\'s Line',
      plain_language: 'Thirty-seven years into the exile, the new Babylonian king Evil-merodach releases Jehoiachin from prison, speaks kindly to him, gives him a permanent seat of honor above all other exiled kings, and provides him with a regular daily food allowance for the rest of his life.',
      theological_context: 'The book of Kings ends not with restoration but with a fragile sign of life. Jehoiachin in Babylon eating at the king\'s table every day is hardly the return from exile Deuteronomy envisioned — but it means the Davidic line is alive. The phrase "as long as he lived" is a subtle but significant note: the promise to David (2 Sam 7) has not died. Scholars debate whether this ending is hopeful or merely ambiguous, but the placement is intentional: after catastrophe, the narrative pauses on a living Davidic king in an honored position. For the exiles reading this, it was a seed of future hope — confirmed later in Isaiah 40-55 and ultimately in the New Testament\'s Davidic genealogies.',
    },
  ],
};

async function main() {
  console.log('Seeding 2 Kings 21-25...');

  for (const [key, questions] of Object.entries(quizData)) {
    const [bookName, chNum] = key.split(':');
    const { data: book } = await supabase.from('books').select('id').eq('name', bookName).single();
    if (!book) { console.warn(`Book not found: ${bookName}`); continue; }
    const { data: chapter } = await supabase.from('chapters').select('id').eq('book_id', book.id).eq('chapter_number', parseInt(chNum)).single();
    if (!chapter) { console.warn(`Chapter not found: ${key}`); continue; }
    throw new Error('Legacy destructive quiz seeding is disabled; use scripts/seed-quiz-bank.ts');
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
