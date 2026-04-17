// Run: npx tsx scripts/seed-1kings-13-16-20-22.ts
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
  '1 Kings:13': [
    {
      question: 'What did the man of God from Judah cry out against at Bethel?',
      options: ['The golden calf', 'The altar', 'Jeroboam the king', 'The temple of Baal'],
      correct_index: 1,
      explanation: 'In 1 Kings 13:2, the man of God cried against the altar at Bethel by the word of the LORD, prophesying that a son named Josiah would one day desecrate it.',
    },
    {
      question: 'Whose name did the man of God cry out would defile the Bethel altar?',
      options: ['Elijah', 'Hezekiah', 'Josiah', 'Jehu'],
      correct_index: 2,
      explanation: 'In 1 Kings 13:2, the man of God prophesied that a son of David\'s line named Josiah would sacrifice the priests of the high places on the altar — a prophecy fulfilled roughly 300 years later.',
    },
    {
      question: 'What happened to Jeroboam\'s hand when he pointed to have the man of God seized?',
      options: ['It was burned by fire', 'It was paralyzed and could not be drawn back', 'It was cut off', 'It turned leprous'],
      correct_index: 1,
      explanation: 'In 1 Kings 13:4, Jeroboam stretched out his hand and said "Seize him," but his hand withered so that he could not draw it back to himself.',
    },
    {
      question: 'What sign accompanied the man of God\'s prophecy against the altar?',
      options: ['The altar burst into flame', 'The altar split apart and the ashes poured out', 'The golden calf fell over', 'An earthquake shook Bethel'],
      correct_index: 1,
      explanation: 'In 1 Kings 13:3 and 5, the man of God gave a sign: the altar would be split and the ashes poured out, which happened immediately that day.',
    },
    {
      question: 'What did God command the man of God NOT to do in Bethel?',
      options: ['Pray in any of its temples', 'Eat bread or drink water, or return by the way he came', 'Speak to Jeroboam directly', 'Touch the altar'],
      correct_index: 1,
      explanation: 'In 1 Kings 13:9, God had commanded the man, "You shall neither eat bread nor drink water nor return by the way that you came."',
    },
    {
      question: 'How did the old prophet of Bethel persuade the man of God to return with him?',
      options: ['He offered great wealth', 'He claimed an angel had spoken to him and changed God\'s command', 'He threatened to tell Jeroboam where the man was hiding', 'He said the king had repented'],
      correct_index: 1,
      explanation: 'In 1 Kings 13:18, the old prophet lied, saying "An angel spoke to me by the word of the LORD, \'Bring him back with you into your house that he may eat bread and drink water.\'"',
    },
    {
      question: 'What happened to the man of God after he disobeyed God and ate with the old prophet?',
      options: ['He was struck blind', 'He was thrown into prison by Jeroboam', 'He was killed by a lion on the road', 'He was swallowed by the earth'],
      correct_index: 2,
      explanation: 'In 1 Kings 13:24, a lion met him on the road and killed him, as a consequence of disobeying the word of the LORD.',
    },
    {
      question: 'What was unusual about the scene of the man of God\'s death on the road?',
      options: ['Angels surrounded his body', 'The lion and the donkey stood beside the body without harming each other or eating the body', 'A pillar of fire appeared', 'His body was not found for three days'],
      correct_index: 1,
      explanation: 'In 1 Kings 13:24-25, the lion stood beside the body but did not eat it, and the donkey also stood beside the body — an extraordinary sign that this was divine judgment, not mere random attack.',
    },
    {
      question: 'What did the old prophet of Bethel do after learning of the man of God\'s death?',
      options: ['He rejoiced that his rival was dead', 'He went to Jeroboam to report the prophecy', 'He retrieved the body, mourned, buried it in his own tomb, and asked to be buried there too', 'He fled Bethel in fear'],
      correct_index: 2,
      explanation: 'In 1 Kings 13:29-31, the old prophet retrieved the body, mourned over it, buried it in his own tomb, and instructed his sons to bury him beside the man of God when he died.',
    },
    {
      question: 'What was the ultimate effect of the signs and prophecy on Jeroboam?',
      options: ['He repented and removed the golden calves', 'He did not turn from his evil way but continued making priests from all the people', 'He sought out the man of God\'s tomb', 'He made a treaty with Judah'],
      correct_index: 1,
      explanation: 'In 1 Kings 13:33, after all these events, Jeroboam did not turn from his evil way but continued appointing priests from among all the people for the high places.',
    },
  ],
  '1 Kings:14': [
    {
      question: 'Why did Jeroboam send his wife to Ahijah the prophet?',
      options: ['To ask for a new prophecy about the kingdom', 'To inquire about their sick son Abijah', 'To bring him a gift of gold', 'To ask whether Israel would defeat Judah'],
      correct_index: 1,
      explanation: 'In 1 Kings 14:1-3, Jeroboam\'s son Abijah became sick, and Jeroboam told his wife to disguise herself and go to Ahijah to inquire what would happen to the child.',
    },
    {
      question: 'Why did Jeroboam tell his wife to disguise herself before visiting Ahijah?',
      options: ['Because women were forbidden to enter the prophet\'s house', 'So that Ahijah would not recognize her as Jeroboam\'s wife and give a biased answer', 'Because it was dangerous to travel as royalty', 'Because Ahijah had quarreled with Jeroboam'],
      correct_index: 1,
      explanation: 'In 1 Kings 14:2, Jeroboam told her to disguise herself so that Ahijah would not know she was the wife of Jeroboam. The disguise was intended to deceive the prophet.',
    },
    {
      question: 'How was Ahijah able to identify Jeroboam\'s wife despite her disguise?',
      options: ['He recognized her voice', 'The LORD had told him she was coming and revealed who she was', 'He saw through a window', 'A servant recognized her jewelry'],
      correct_index: 1,
      explanation: 'In 1 Kings 14:5-6, the LORD told Ahijah that Jeroboam\'s wife was coming and what to say, so even though Ahijah was blind with age, he knew her the moment she entered.',
    },
    {
      question: 'What did Ahijah prophesy would happen when Jeroboam\'s wife\'s feet entered the city?',
      options: ['The city gates would fall', 'Jeroboam would lose his throne', 'Their son Abijah would die', 'A plague would come on Israel'],
      correct_index: 2,
      explanation: 'In 1 Kings 14:12, Ahijah told her: "When your feet enter the city, the child shall die."',
    },
    {
      question: 'Why did Ahijah say Abijah alone of Jeroboam\'s house would be mourned and buried?',
      options: ['Because he was the firstborn son', 'Because something good toward the LORD was found in him', 'Because Jeroboam had dedicated him to God', 'Because he had repented of Israel\'s sins'],
      correct_index: 1,
      explanation: 'In 1 Kings 14:13, Ahijah said Abijah alone would come to his grave because "in him there is found something pleasing to the LORD, the God of Israel, in the house of Jeroboam."',
    },
    {
      question: 'What did Ahijah prophesy God would do to Israel because of Jeroboam\'s sin?',
      options: ['Strike the land with drought for seven years', 'Scatter Israel beyond the Euphrates River', 'Give the kingdom to Judah permanently', 'Send enemies to destroy Samaria'],
      correct_index: 1,
      explanation: 'In 1 Kings 14:15, Ahijah prophesied that the LORD would scatter Israel beyond the Euphrates because they had made Asherah poles and provoked him to anger.',
    },
    {
      question: 'What evil thing did Rehoboam allow in Judah during his reign?',
      options: ['Human sacrifice at the high places', 'Male shrine prostitutes, idols, and high places on every high hill and under every green tree', 'Worship of the golden calves', 'Intermarriage with Philistines only'],
      correct_index: 1,
      explanation: 'In 1 Kings 14:23-24, Judah built high places, pillars, and Asherah poles on every high hill and under every green tree, and there were also male cult prostitutes in the land.',
    },
    {
      question: 'Who came up against Jerusalem in the fifth year of Rehoboam\'s reign?',
      options: ['Ben-hadad of Aram', 'Shishak king of Egypt', 'Baasha king of Israel', 'The Philistines'],
      correct_index: 1,
      explanation: 'In 1 Kings 14:25-26, Shishak king of Egypt came up against Jerusalem and took away the treasures of the house of the LORD and the treasures of the king\'s house.',
    },
    {
      question: 'What did Rehoboam make to replace the gold shields that Shishak carried away?',
      options: ['Shields of silver', 'Shields of bronze', 'Shields of iron', 'Wooden shields overlaid with gold'],
      correct_index: 1,
      explanation: 'In 1 Kings 14:27, Rehoboam made bronze shields in place of the gold shields that Shishak had taken, and committed them to the hands of the officers of the guard.',
    },
    {
      question: 'How long did Rehoboam reign in Jerusalem, and what was his mother\'s name?',
      options: ['17 years; Maacah', '17 years; Naamah the Ammonite', '20 years; Naamah the Ammonite', '41 years; Maacah'],
      correct_index: 1,
      explanation: 'In 1 Kings 14:21, Rehoboam reigned 17 years in Jerusalem, and his mother\'s name was Naamah the Ammonite.',
    },
  ],
  '1 Kings:15': [
    {
      question: 'What was the name of Rehoboam\'s son who succeeded him as king of Judah?',
      options: ['Asa', 'Abijam', 'Jehoshaphat', 'Joash'],
      correct_index: 1,
      explanation: 'In 1 Kings 15:1, Abijam (also called Abijah) became king of Judah in the eighteenth year of Jeroboam the son of Nebat.',
    },
    {
      question: 'How is Abijam\'s heart described compared to David\'s?',
      options: ['Wholly true like David\'s', 'Not wholly true to the LORD his God, as the heart of David his father had been', 'Worse than Jeroboam\'s', 'Better than Solomon\'s in his later years'],
      correct_index: 1,
      explanation: 'In 1 Kings 15:3, Abijam\'s heart was not wholly true to the LORD his God, as the heart of David his father had been.',
    },
    {
      question: 'Why did God allow Abijam\'s line to continue in Jerusalem despite his sin?',
      options: ['Because Abijam kept the Passover', 'For David\'s sake, so David might always have a lamp before the LORD in Jerusalem', 'Because the people of Judah were still faithful', 'Because Abijam defeated Israel in battle'],
      correct_index: 1,
      explanation: 'In 1 Kings 15:4-5, for David\'s sake, the LORD his God gave him a lamp in Jerusalem, setting up his son after him and establishing Jerusalem, because David did what was right in the eyes of the LORD.',
    },
    {
      question: 'How long did Asa reign in Jerusalem, and how is his reign characterized overall?',
      options: ['25 years; evil', '41 years; good — he did what was right in the eyes of the LORD', '20 years; mixed', '41 years; evil like Jeroboam'],
      correct_index: 1,
      explanation: 'In 1 Kings 15:9-11, Asa reigned 41 years in Jerusalem and did what was right in the eyes of the LORD, as David his father had done.',
    },
    {
      question: 'What did Asa do with his grandmother Maacah?',
      options: ['Gave her greater honor as queen mother', 'Removed her from being queen mother because she had made an Asherah idol', 'Exiled her to Egypt', 'Put her to death for idolatry'],
      correct_index: 1,
      explanation: 'In 1 Kings 15:13, Asa removed his grandmother Maacah from being queen mother because she had made an abominable image for Asherah, and he cut down her image and burned it at the brook Kidron.',
    },
    {
      question: 'What religious reform did Asa NOT fully complete during his reign?',
      options: ['Removing male cult prostitutes', 'Removing the Asherah pole from Jerusalem', 'Removing all the idols his fathers had made', 'Removing the high places'],
      correct_index: 3,
      explanation: 'In 1 Kings 15:14, although Asa\'s heart was wholly true to the LORD all his days, the high places were not taken away.',
    },
    {
      question: 'How did Asa deal with the threat from Baasha king of Israel who was fortifying Ramah?',
      options: ['He assembled an army and defeated Baasha at Ramah', 'He bribed Ben-hadad of Aram with silver and gold from the temple to break his treaty with Baasha', 'He sent to Egypt for military aid', 'He built a rival fortress to blockade Baasha'],
      correct_index: 1,
      explanation: 'In 1 Kings 15:18-19, Asa took all the silver and gold left in the treasures of the house of the LORD and sent them to Ben-hadad of Aram, asking him to break his treaty with Baasha.',
    },
    {
      question: 'Who killed Nadab king of Israel, and in what year of Nadab\'s reign?',
      options: ['Zimri, in the third year', 'Omri, in the second year', 'Baasha, in the second year', 'Jehu, in the first year'],
      correct_index: 2,
      explanation: 'In 1 Kings 15:27-28, Baasha conspired against Nadab and struck him down at Gibbethon in the second year of Nadab\'s reign.',
    },
    {
      question: 'What prophecy was fulfilled when Baasha killed Nadab and all the house of Jeroboam?',
      options: ['The prophecy of Elijah', 'The prophecy of Ahijah the Shilonite', 'The word of Moses about idolaters', 'The prophecy of the man of God from Judah'],
      correct_index: 1,
      explanation: 'In 1 Kings 15:29, when Baasha killed all the house of Jeroboam, he left not one that breathed, according to the word of the LORD spoken by his servant Ahijah the Shilonite.',
    },
    {
      question: 'How long did Baasha reign over Israel, and how is his reign characterized?',
      options: ['12 years; he did what was right like David', '7 days; the shortest reign in Israel\'s history', '24 years; he did evil in the sight of the LORD, walking in the way of Jeroboam', '2 years; he was assassinated before he could act'],
      correct_index: 2,
      explanation: 'In 1 Kings 15:33-34, Baasha reigned 24 years and did evil in the sight of the LORD, walking in the way of Jeroboam and in his sin which he made Israel to sin.',
    },
  ],
  '1 Kings:16': [
    {
      question: 'Which prophet brought the word of the LORD against Baasha and his house?',
      options: ['Elijah', 'Micaiah', 'Jehu son of Hanani', 'Ahijah the Shilonite'],
      correct_index: 2,
      explanation: 'In 1 Kings 16:1-4, the word of the LORD came to Jehu the son of Hanani against Baasha, pronouncing judgment on his dynasty for walking in the way of Jeroboam.',
    },
    {
      question: 'What was Baasha\'s sin according to the word of the LORD through Jehu?',
      options: ['He murdered Nadab to seize power', 'He walked in the way of Jeroboam and made Israel to sin, provoking God to anger', 'He made an alliance with Ben-hadad of Aram', 'He failed to rebuild the temple in Jerusalem'],
      correct_index: 1,
      explanation: 'In 1 Kings 16:2-3, God condemned Baasha because he walked in the way of Jeroboam and made Israel to sin, provoking God to anger with their sins.',
    },
    {
      question: 'Who was Elah, and how did he die?',
      options: ['Baasha\'s son, killed by Omri while drinking in the house of Arza', 'Baasha\'s son, killed by Zimri while drinking in the house of Arza', 'Nadab\'s son, killed in battle against the Philistines', 'A general who seized power and was killed in a coup'],
      correct_index: 1,
      explanation: 'In 1 Kings 16:8-10, Elah son of Baasha was killed by Zimri his army commander while he was drinking himself drunk in the house of Arza, who was over his household at Tirzah.',
    },
    {
      question: 'How long did Zimri reign as king of Israel?',
      options: ['3 months', '7 days', '2 years', '1 year'],
      correct_index: 1,
      explanation: 'In 1 Kings 16:15, Zimri reigned only seven days in Tirzah, making his the shortest reign of any king of Israel.',
    },
    {
      question: 'How did Zimri die when Omri and the army besieged Tirzah?',
      options: ['He was captured and executed', 'He went into the citadel of the king\'s house and burned it over himself', 'He fled to the Philistines and was betrayed', 'He was killed in battle on the city walls'],
      correct_index: 1,
      explanation: 'In 1 Kings 16:18, when Zimri saw that the city was taken, he went into the citadel of the king\'s house and burned the king\'s house over him with fire and died.',
    },
    {
      question: 'Who was Tibni son of Ginath, and what happened between him and Omri?',
      options: ['He was Omri\'s ally who helped him defeat Zimri', 'He was a rival for the throne whom half of Israel followed; he died and Omri prevailed', 'He was Omri\'s son who succeeded him', 'He was a prophet who anointed Omri king'],
      correct_index: 1,
      explanation: 'In 1 Kings 16:21-22, Israel was divided — half followed Tibni son of Ginath and half followed Omri. Tibni died and Omri prevailed, becoming sole king.',
    },
    {
      question: 'What city did Omri build and make the capital of Israel?',
      options: ['Megiddo', 'Samaria', 'Tirzah', 'Shechem'],
      correct_index: 1,
      explanation: 'In 1 Kings 16:24, Omri bought the hill of Samaria from Shemer for two talents of silver, built a city on it, and called it Samaria after Shemer, the owner of the hill.',
    },
    {
      question: 'Who was Jezebel\'s father, and what does the text say he was?',
      options: ['Hiram, king of Tyre', 'Ethbaal, king of the Sidonians', 'Ben-hadad, king of Aram', 'Shishak, king of Egypt'],
      correct_index: 1,
      explanation: 'In 1 Kings 16:31, Ahab took as his wife Jezebel the daughter of Ethbaal king of the Sidonians.',
    },
    {
      question: 'What new idol did Ahab introduce to Israel that was worse than anything Jeroboam had done?',
      options: ['A golden calf in Samaria', 'An Asherah pole on every high place', 'A Baal temple in Samaria, with an altar for Baal', 'An image of Molech in the valley of Hinnom'],
      correct_index: 2,
      explanation: 'In 1 Kings 16:32-33, Ahab erected an altar for Baal in the house of Baal, which he built in Samaria, and Ahab made an Asherah — doing more to provoke the LORD than all the kings of Israel before him.',
    },
    {
      question: 'Who rebuilt Jericho during Ahab\'s reign, and what happened to his sons?',
      options: ['Hiel of Bethel rebuilt it; his firstborn Abiram died when he laid its foundation, and his youngest son Segub died when he set up its gates', 'Omri rebuilt it; his sons became its first rulers', 'A Canaanite named Shemer rebuilt it; no harm came to his family', 'Ahab himself rebuilt it as a tribute city'],
      correct_index: 0,
      explanation: 'In 1 Kings 16:34, Hiel of Bethel rebuilt Jericho. He laid its foundation at the cost of Abiram his firstborn, and set up its gates at the cost of his youngest son Segub, according to the word of the LORD spoken by Joshua.',
    },
  ],
  '1 Kings:20': [
    {
      question: 'What was Ben-hadad\'s first demand of Ahab, and how did Ahab initially respond?',
      options: ['He demanded the city of Samaria itself; Ahab refused', 'He demanded Ahab\'s silver, gold, wives, and children; Ahab said "As you say, my lord, O king, I am yours"', 'He demanded tribute of 100 talents a year; Ahab agreed', 'He demanded military alliance against Assyria; Ahab agreed'],
      correct_index: 1,
      explanation: 'In 1 Kings 20:2-4, Ben-hadad demanded Ahab\'s silver, gold, wives, and children, and Ahab submitted, saying "As you say, my lord, O king, I am yours, and all that I have."',
    },
    {
      question: 'Why did Ahab refuse Ben-hadad\'s second, more extreme demand?',
      options: ['Because a prophet told him to refuse', 'Because Ben-hadad demanded Ahab hand over everything personally, not just acknowledge his sovereignty', 'Because the elders of Israel persuaded him to resist', 'Because Ahab received military reinforcements from Judah'],
      correct_index: 2,
      explanation: 'In 1 Kings 20:7-8, the elders of Israel told Ahab not to consent to the second demand. Ben-hadad had demanded they actually search the palace and houses, which was beyond acknowledgment of sovereignty.',
    },
    {
      question: 'How did a prophet describe the coming battle with Ben-hadad\'s great army?',
      options: ['"I will deliver them into your hand today, and you shall know that I am the LORD"', '"By the power of Elijah the fire of the LORD shall destroy them"', '"Go up and victory is assured by the sword of Jehoshaphat"', '"Fast for seven days and the LORD will send pestilence on the Arameans"'],
      correct_index: 0,
      explanation: 'In 1 Kings 20:13-14, a prophet came to Ahab and said: "Have you seen all this great multitude? Behold, I will give it into your hand this day, and you shall know that I am the LORD."',
    },
    {
      question: 'Who led the initial attack against Ben-hadad\'s army in the first battle?',
      options: ['Ahab himself leading the full army', 'The 232 young men of the provincial commanders', 'Jehoshaphat king of Judah', 'A company of 7,000 elite fighters'],
      correct_index: 1,
      explanation: 'In 1 Kings 20:15-17, the 232 young men of the provincial commanders went out first, followed by 7,000 of the people of Israel, while Ben-hadad was drinking himself drunk.',
    },
    {
      question: 'What did Ben-hadad\'s servants suggest after Israel routed the Aramean army at Samaria?',
      options: ['That Ben-hadad flee to Egypt for safety', 'That their gods were gods of the hills; if they fight on the plains they will defeat Israel', 'That they offer Ahab a large tribute payment', 'That they burn Samaria and retreat'],
      correct_index: 1,
      explanation: 'In 1 Kings 20:23, Ben-hadad\'s servants advised him that Israel\'s gods are gods of the hills, so Israel prevailed. If they fight on the plains, the Arameans will be stronger.',
    },
    {
      question: 'How large was Ben-hadad\'s army at the second battle at Aphek, and what was the result?',
      options: ['127,000 foot soldiers and a great cavalry; Israel killed 100,000 in one day', 'The same 32 kings with chariots; Israel routed them completely', '200,000 soldiers with 10,000 chariots; Israel surrounded them for a year', 'A small force of 10,000; Israel easily defeated them'],
      correct_index: 0,
      explanation: 'In 1 Kings 20:29-30, the Israelites killed 100,000 Aramean foot soldiers in one day at Aphek. The remaining 27,000 fled into the city of Aphek where a wall fell on them.',
    },
    {
      question: 'How did Ben-hadad approach Ahab after the battle at Aphek?',
      options: ['He came with bound hands and bowed on the ground', 'His servants put sackcloth around their waists and ropes on their heads and said "Your servant Ben-hadad says please let me live"', 'He sent ambassadors with a large tribute', 'He personally appeared in battle armor to surrender formally'],
      correct_index: 1,
      explanation: 'In 1 Kings 20:31-32, Ben-hadad\'s servants suggested the sackcloth and ropes approach, which they did, telling Ahab "Your servant Ben-hadad says, \'Please, let me live.\'"',
    },
    {
      question: 'What did Ahab call Ben-hadad when Ben-hadad came to meet him?',
      options: ['"My prisoner"', '"My brother"', '"My vassal"', '"My enemy"'],
      correct_index: 1,
      explanation: 'In 1 Kings 20:32-33, when Ben-hadad came to Ahab, Ahab called him "my brother," which was a signal to Ben-hadad\'s servants that Ahab was willing to make peace rather than execute him.',
    },
    {
      question: 'How did a prophet condemn Ahab after he let Ben-hadad go free?',
      options: ['"You have let go a man devoted to destruction; your life shall go for his life and your people for his people"', '"Because you showed mercy to my enemy, I will take your kingdom from your son"', '"The dogs shall lick your blood in Samaria where you made this covenant"', '"Ben-hadad will return and destroy your house utterly"'],
      correct_index: 0,
      explanation: 'In 1 Kings 20:42, the prophet said: "Because you have let go out of your hand the man whom I had devoted to destruction, therefore your life shall go for his life, and your people for his people."',
    },
    {
      question: 'How did Ahab react when the prophet condemned him for releasing Ben-hadad?',
      options: ['He repented in sackcloth', 'He had the prophet arrested', 'He went to his house resentful and sullen and came to Samaria', 'He sought Elijah\'s counsel immediately'],
      correct_index: 2,
      explanation: 'In 1 Kings 20:43, the king of Israel went to his house resentful and sullen and came to Samaria — the same posture he would later take over Naboth\'s vineyard.',
    },
  ],
  '1 Kings:21': [
    {
      question: 'Where was Naboth\'s vineyard located, and why did Ahab want it?',
      options: ['In Bethel, next to the temple of Baal; Ahab wanted to expand the temple', 'In Jezreel, beside Ahab\'s palace; Ahab wanted it for a vegetable garden', 'In Samaria, beside the palace entrance; Ahab wanted it for grazing land', 'In Tirzah, near the city gate; Ahab wanted to build a watchtower'],
      correct_index: 1,
      explanation: 'In 1 Kings 21:1-2, Naboth the Jezreelite had a vineyard in Jezreel beside the palace of Ahab king of Samaria, and Ahab asked for it to make into a vegetable garden.',
    },
    {
      question: 'Why did Naboth refuse to sell his vineyard to Ahab?',
      options: ['Because the price Ahab offered was too low', 'Because the LORD forbade him to give the inheritance of his fathers', 'Because he hated Ahab as a false king', 'Because the vineyard had been in his family only one generation and could not be sold'],
      correct_index: 1,
      explanation: 'In 1 Kings 21:3, Naboth said: "The LORD forbid that I should give you the inheritance of my fathers." This reflects the Mosaic law that ancestral land was to remain in the family (Leviticus 25, Numbers 36).',
    },
    {
      question: 'How did Ahab respond to Naboth\'s refusal?',
      options: ['He ordered Naboth arrested immediately', 'He went into his house resentful and sullen, lay down on his bed, turned away his face, and would eat no food', 'He prayed to the LORD for guidance', 'He offered Naboth twice the market price'],
      correct_index: 1,
      explanation: 'In 1 Kings 21:4, Ahab went into his house vexed and sullen because of what Naboth had said to him, and he lay on his bed, turned away his face, and would eat no food.',
    },
    {
      question: 'What plan did Jezebel devise to get the vineyard for Ahab?',
      options: ['She arranged for Naboth to be taken to court for tax evasion', 'She wrote letters in Ahab\'s name proclaiming a fast, seating Naboth at the head, then having two worthless men accuse him of cursing God and the king, so he was stoned', 'She had Naboth\'s sons killed to remove his heirs', 'She hired soldiers to kill Naboth on the road'],
      correct_index: 1,
      explanation: 'In 1 Kings 21:8-13, Jezebel wrote letters in Ahab\'s name to the elders of Jezreel, arranging a false accusation of blasphemy by two worthless witnesses, resulting in Naboth being taken out and stoned to death.',
    },
    {
      question: 'What was the legal requirement Jezebel exploited for the false accusation against Naboth?',
      options: ['A single witness of noble birth was sufficient for blasphemy', 'Two witnesses were required, so she arranged for two worthless men', 'A fast must precede any capital trial', 'The king\'s letter was sufficient evidence on its own'],
      correct_index: 1,
      explanation: 'In 1 Kings 21:10, Deuteronomy required two witnesses for a capital charge (Deut 17:6, 19:15). Jezebel arranged exactly two "worthless men" to satisfy the legal form while committing judicial murder.',
    },
    {
      question: 'What did Jezebel tell Ahab after Naboth was dead?',
      options: ['"Naboth has fled the city; go take his vineyard"', '"Arise, take possession of the vineyard of Naboth the Jezreelite, which he refused to give you for money, for Naboth is not alive but dead"', '"The vineyard is now yours by right of the king"', '"Naboth sold his vineyard before he died; here are the papers"'],
      correct_index: 1,
      explanation: 'In 1 Kings 21:15, Jezebel said: "Arise, take possession of the vineyard of Naboth the Jezreelite, which he refused to give you for money, for Naboth is not alive, but dead."',
    },
    {
      question: 'Who met Ahab when he went to take possession of Naboth\'s vineyard?',
      options: ['The prophet Micaiah', 'Elijah the Tishbite', 'Jehu son of Hanani', 'A messenger from Jehoshaphat'],
      correct_index: 1,
      explanation: 'In 1 Kings 21:17-18, the word of the LORD came to Elijah the Tishbite, telling him to go meet Ahab who had gone down to Naboth\'s vineyard.',
    },
    {
      question: 'What did Elijah prophesy about the place where dogs licked Naboth\'s blood?',
      options: ['It would become a cursed wasteland', 'Dogs would lick Ahab\'s blood in the same place', 'The ground would not yield crops for forty years', 'A memorial would be built there'],
      correct_index: 1,
      explanation: 'In 1 Kings 21:19, Elijah said: "In the place where dogs licked up the blood of Naboth shall dogs lick your own blood."',
    },
    {
      question: 'What did Elijah prophesy would happen to Jezebel?',
      options: ['She would be exiled to a foreign land', 'Dogs would devour Jezebel within the walls of Jezreel', 'She would die of disease', 'She would be burned with fire'],
      correct_index: 1,
      explanation: 'In 1 Kings 21:23, Elijah said: "The dogs shall eat Jezebel within the walls of Jezreel." This was fulfilled later in 2 Kings 9:36.',
    },
    {
      question: 'How did Ahab respond to Elijah\'s prophecy, and how did God respond to that?',
      options: ['Ahab threatened to kill Elijah; God struck him with disease', 'Ahab humbled himself — tore his clothes, wore sackcloth, and fasted; God said He would delay the disaster to the next generation', 'Ahab ignored the prophecy and feasted; God sent drought immediately', 'Ahab repented completely and the prophecy was cancelled'],
      correct_index: 1,
      explanation: 'In 1 Kings 21:27-29, Ahab tore his clothes, put sackcloth on his body, fasted, and went about dejectedly. God told Elijah: "Because he has humbled himself before me, I will not bring the disaster in his days; but in his son\'s days I will bring the disaster."',
    },
  ],
  '1 Kings:22': [
    {
      question: 'How many years of peace were there between Israel and Aram before the events of 1 Kings 22?',
      options: ['Seven years', 'Three years', 'Ten years', 'One year'],
      correct_index: 1,
      explanation: 'In 1 Kings 22:1, three years passed without war between Syria (Aram) and Israel before Jehoshaphat came down to visit Ahab.',
    },
    {
      question: 'What city did Ahab want to retake from Aram, and who did he ask to help?',
      options: ['Aphek; he asked Moab', 'Ramoth-gilead; he asked Jehoshaphat king of Judah', 'Jericho; he asked the Philistines', 'Dan; he asked Jehoshaphat king of Judah'],
      correct_index: 1,
      explanation: 'In 1 Kings 22:3-4, Ahab said Ramoth-gilead belonged to Israel but they had done nothing to take it from the king of Syria, and he asked Jehoshaphat to go with him.',
    },
    {
      question: 'What did Ahab\'s 400 prophets say when asked whether to go to battle?',
      options: ['They refused to prophesy, saying the LORD had not spoken', '"Go up, for the Lord will give it into the hand of the king"', '"Do not go; the LORD says this battle is not yours to fight"', '"Send scouts first, then decide"'],
      correct_index: 1,
      explanation: 'In 1 Kings 22:6, when asked whether to go to Ramoth-gilead, the approximately 400 prophets said "Go up, for the Lord will give it into the hand of the king."',
    },
    {
      question: 'Why did Ahab hate Micaiah the son of Imlah?',
      options: ['Because Micaiah had prophesied the drought of Elijah', 'Because he never prophesied good concerning Ahab, but only evil', 'Because Micaiah refused to come to the king when summoned', 'Because Micaiah was loyal to Jehoshaphat'],
      correct_index: 1,
      explanation: 'In 1 Kings 22:8, Ahab said to Jehoshaphat: "There is yet one man by whom we may inquire of the LORD, Micaiah the son of Imlah, but I hate him, for he never prophesies good concerning me, but evil."',
    },
    {
      question: 'What was Micaiah\'s true vision of Israel in the battle?',
      options: ['He saw Israel crushing the Aramean army like dust', 'He saw all Israel scattered on the mountains like sheep without a shepherd, and the LORD saying "Let each return to his home in peace"', 'He saw fire from heaven destroying Ben-hadad\'s chariots', 'He saw Ahab victorious but dying of wounds afterward'],
      correct_index: 1,
      explanation: 'In 1 Kings 22:17, Micaiah said "I saw all Israel scattered on the mountains, as sheep that have no shepherd," signifying that Ahab would die and Israel would be leaderless.',
    },
    {
      question: 'What did Micaiah reveal about the source of the 400 prophets\' false assurance of victory?',
      options: ['They had simply made up the prophecy out of fear of the king', 'A lying spirit had been sent by the LORD into the mouths of all the prophets to entice Ahab to go up and fall at Ramoth-gilead', 'They worshiped Baal and received messages from Jezebel', 'They misunderstood a vision that was meant for Jehoshaphat'],
      correct_index: 1,
      explanation: 'In 1 Kings 22:20-23, Micaiah described a heavenly council where a spirit volunteered to be a lying spirit in the mouths of Ahab\'s prophets to entice him to go and fall at Ramoth-gilead.',
    },
    {
      question: 'What did Zedekiah son of Chenaanah do to Micaiah, and what did Zedekiah say?',
      options: ['He tore Micaiah\'s cloak and said "The LORD has torn the kingdom from you"', 'He struck Micaiah on the cheek and said "How did the Spirit of the LORD go from me to speak to you?"', 'He threw Micaiah to the ground and said "False prophet!"', 'He challenged Micaiah to a contest like Elijah at Carmel'],
      correct_index: 1,
      explanation: 'In 1 Kings 22:24, Zedekiah struck Micaiah on the cheek and said "How did the Spirit of the LORD go from me to speak to you?"',
    },
    {
      question: 'What strategy did Ahab use to try to avoid Micaiah\'s prophecy in battle?',
      options: ['He stayed behind the city walls and watched the battle from a tower', 'He dressed in royal robes to confuse the enemy', 'He disguised himself as a common soldier while telling Jehoshaphat to wear his royal robes', 'He sent Jehoshaphat ahead as a decoy'],
      correct_index: 2,
      explanation: 'In 1 Kings 22:30, Ahab told Jehoshaphat "I will disguise myself and go into battle, but you wear your robes." Ahab went into battle in disguise.',
    },
    {
      question: 'How was Ahab killed despite his disguise?',
      options: ['A Aramean soldier recognized him and threw a javelin', 'A certain man drew his bow at random and struck Ahab between the scale armor and the breastplate', 'He was trampled by Aramean chariots', 'Jehoshaphat accidentally led him into an ambush'],
      correct_index: 1,
      explanation: 'In 1 Kings 22:34, a certain man drew his bow at random and struck the king of Israel between the scale armor and the breastplate. The "random" arrow was providential fulfillment of Micaiah\'s prophecy.',
    },
    {
      question: 'What happened to Ahab\'s blood after his death, fulfilling Elijah\'s prophecy?',
      options: ['His blood soaked into Naboth\'s field', 'Dogs licked up his blood at the pool of Samaria where they washed the chariot', 'His blood was poured out at the entrance to Samaria', 'His blood stained the throne of Israel'],
      correct_index: 1,
      explanation: 'In 1 Kings 22:38, they washed the chariot by the pool of Samaria, and the dogs licked up his blood, and the prostitutes washed themselves in it, according to the word of the LORD.',
    },
  ],
};

const passagesData: Record<string, { verse_start: number; verse_end: number; topic: string; plain_language: string; theological_context: string }[]> = {
  '1 Kings:13': [
    {
      verse_start: 1,
      verse_end: 10,
      topic: 'The Man of God\'s Prophecy and Jeroboam\'s Sign',
      plain_language: 'A prophet from Judah travels to Bethel and publicly condemns Jeroboam\'s altar, even naming Josiah 300 years in advance. When Jeroboam tries to have him arrested, his hand withers. The altar splits and the ashes pour out. After God restores Jeroboam\'s hand, Jeroboam offers hospitality, but the man refuses to eat or drink in Bethel, obeying God\'s command.',
      theological_context: 'This passage demonstrates God\'s sovereign foreknowledge — naming Josiah 300 years before his birth (fulfilled in 2 Kings 23:15-16) — and the inviolability of divine commands. The miraculous signs authenticate the prophet\'s message. Jeroboam\'s withered hand shows that even royal power is helpless before God\'s word, yet God also shows mercy by restoring it when asked. The man\'s refusal of hospitality illustrates that obedience to God\'s explicit instructions overrides social obligation.',
    },
    {
      verse_start: 11,
      verse_end: 32,
      topic: 'The Old Prophet\'s Deception and the Man of God\'s Death',
      plain_language: 'An old prophet in Bethel lies to the man of God, claiming an angel changed God\'s instruction, convincing him to eat and drink. While they eat, God speaks through the old prophet condemning the man for his disobedience. On the road home a lion kills him, yet stands beside the body without eating it — an unmistakable sign of divine judgment. The old prophet retrieves and buries him, mourning, and asks to be buried in the same tomb.',
      theological_context: 'This difficult passage raises deep questions about testing and obedience. The man of God had faithfully resisted a king\'s invitation but fell to a fellow prophet\'s lie. It teaches that God\'s direct commands cannot be overridden even by another prophet claiming angelic authority — a principle later echoed in Galatians 1:8. The lion\'s restraint in not eating the body distinguishes divine punishment from random misfortune. The old prophet\'s final mourning and wish to be buried beside the man suggests genuine recognition of the man\'s prophetic status despite having deceived him.',
    },
    {
      verse_start: 33,
      verse_end: 34,
      topic: 'Jeroboam\'s Continued Apostasy',
      plain_language: 'Despite all the signs and wonders, Jeroboam does not change course. He continues making priests for the high places from whoever is willing, regardless of lineage. This becomes the sin for which his house will be cut off and destroyed.',
      theological_context: 'These two concluding verses form the theological summary and verdict of the chapter. Jeroboam\'s hardness of heart in the face of miraculous signs illustrates that miracles alone do not produce repentance — a theme running through both Testaments (Luke 16:31). His appointment of non-Levitical priests was a direct violation of Mosaic law and reflects his self-serving religion that prioritized political stability over faithful worship. The phrase "this thing became sin to the house of Jeroboam" becomes the standard by which all subsequent northern kings are judged throughout Kings.',
    },
  ],
  '1 Kings:14': [
    {
      verse_start: 1,
      verse_end: 18,
      topic: 'Ahijah\'s Prophecy Against Jeroboam\'s House',
      plain_language: 'Jeroboam\'s son Abijah falls sick and Jeroboam sends his wife in disguise to the prophet Ahijah. Though blind with age, Ahijah is warned by God ahead of time and identifies her immediately. He delivers a devastating prophecy: because Jeroboam abandoned God and made idols, his entire dynasty will be cut off. Their sick son will die when her feet enter the city — the only one of Jeroboam\'s house to receive a proper burial because something good was in him. Israel will ultimately be uprooted and scattered beyond the Euphrates.',
      theological_context: 'The disguise motif is deeply ironic — the king who manipulated religion for political convenience sends his wife to disguise herself before the very prophet he originally used for legitimacy (1 Kings 11:29-39). Ahijah\'s blindness emphasizes that prophetic sight is not physical but spiritual. The prophecy against Jeroboam\'s house is comprehensive: it is not merely political but covenantal, rooted in his abandonment of the God who elevated him from obscurity. The fate of the sick child — honored in death while the rest face shame — reveals God\'s nuanced moral judgment even within collective judgment.',
    },
    {
      verse_start: 19,
      verse_end: 20,
      topic: 'The End of Jeroboam\'s Reign',
      plain_language: 'A brief summary closes Jeroboam\'s reign: the acts of his reign are recorded in the Book of the Chronicles of the Kings of Israel. He reigned 22 years and rested with his fathers, and his son Nadab reigned in his place.',
      theological_context: 'The terse summary of Jeroboam\'s reign contrasts sharply with the extensive narrative of judgment preceding it. The reference to the "Book of the Chronicles of the Kings of Israel" indicates the Kings narrative is a theological selection, not a complete history. Jeroboam\'s 22-year reign ends quietly despite the prophetic storm surrounding it, reminding the reader that divine judgment often unfolds on God\'s timetable, not human expectation. His son Nadab\'s succession sets up the fulfillment of Ahijah\'s prophecy in the very next generation.',
    },
    {
      verse_start: 21,
      verse_end: 31,
      topic: 'Rehoboam\'s Apostasy and Shishak\'s Invasion of Judah',
      plain_language: 'In Judah, Rehoboam allows the worship of foreign gods, male shrine prostitutes, and high places throughout the land. God\'s judgment comes quickly: in Rehoboam\'s fifth year, Shishak king of Egypt plunders Jerusalem, taking the temple treasures and the gold shields Solomon had made. Rehoboam replaces the gold shields with bronze ones — a visible symbol of Judah\'s decline from Solomon\'s glory.',
      theological_context: 'The Judah section of this chapter parallels the Israel section in its structure: spiritual unfaithfulness followed by concrete loss. The gold-to-bronze substitution is a powerful image of incremental spiritual and material decline — maintaining the outward form of the ceremony (guards carrying shields at the temple) while the substance (gold) is gone. Shishak\'s invasion is externally attested in Egyptian records (the Bubastite Portal at Karnak), making this one of the earliest archaeologically corroborated events in Kings. The text does not moralize heavily — the connection between Judah\'s idolatry and the invasion is left for the reader to discern.',
    },
  ],
  '1 Kings:15': [
    {
      verse_start: 1,
      verse_end: 8,
      topic: 'Abijam\'s Wicked Reign and David\'s Legacy',
      plain_language: 'Abijam reigns three years in Jerusalem. He follows the sins of his father Rehoboam and his heart is not wholly devoted to God as David\'s was. Yet God does not destroy Judah\'s dynasty for David\'s sake, preserving a lamp — a continuing line of kings — in Jerusalem. There is war between Abijam and Jeroboam throughout his short reign.',
      theological_context: 'The "lamp" metaphor (v. 4) is a recurring theme in Kings representing the Davidic dynastic promise (also 2 Sam 21:17, 1 Kings 11:36). God\'s preservation of the Davidic line despite the king\'s personal failure points to the unconditional nature of the Davidic covenant (2 Sam 7), which ultimately finds its fulfillment in the Messiah. The contrast between David\'s wholehearted devotion and Abijam\'s divided heart establishes the baseline standard against which all Judean kings are measured. Even a three-year reign of evil does not annul God\'s long-term covenant purposes.',
    },
    {
      verse_start: 9,
      verse_end: 24,
      topic: 'Asa\'s Good Reign and the Compromise Over High Places',
      plain_language: 'Asa reigns 41 years and is one of Judah\'s best kings. He expels male cult prostitutes, removes idols, and even deposes his own grandmother Maacah as queen mother for her Asherah worship. His heart is fully committed to God all his days. However, the high places remain. When Baasha of Israel threatens Judah by fortifying Ramah, Asa strips the temple treasury to buy military help from Ben-hadad of Aram rather than trusting God — a decision for which he is later rebuked.',
      theological_context: 'Asa\'s reign illustrates the tension between genuine faith and pragmatic compromise. His reform of Judah\'s official religion is remarkable — deposing the queen mother (a position of great honor) demonstrates costly commitment. Yet the retention of high places and later the alliance with Aram purchased with temple treasure reveal the limits of even the best human reform. Second Chronicles 16:7-9 records the rebuke Asa received for trusting Aram instead of God, showing that past faithfulness does not excuse present unbelief. Asa\'s trajectory from wholehearted faith to pragmatic maneuvering is a sobering portrait of how good leaders can drift.',
    },
    {
      verse_start: 25,
      verse_end: 34,
      topic: 'Nadab and Baasha: Judgment on Jeroboam\'s House',
      plain_language: 'In the north, Nadab son of Jeroboam reigns only two years before being assassinated by Baasha during a military campaign. Baasha kills the entire house of Jeroboam, fulfilling Ahijah\'s prophecy exactly. Yet Baasha himself walks in exactly the same sins as Jeroboam and reigns 24 years, making Israel sin in the same ways.',
      theological_context: 'The fulfillment of Ahijah\'s prophecy through Baasha is a theological hinge point: the very instrument of judgment becomes subject to the same judgment. Baasha did not execute God\'s will out of faithfulness but out of ambition, and so he inherits neither the blessing of obedience nor exemption from the standards applied to Jeroboam. This pattern — where one dynasty destroys another without reforming — will repeat through Israel\'s history until the Assyrian exile. It illustrates that political change without spiritual transformation achieves nothing lasting before God.',
    },
  ],
  '1 Kings:16': [
    {
      verse_start: 1,
      verse_end: 14,
      topic: 'Prophecy Against Baasha and the Reigns of Elah and Zimri',
      plain_language: 'God sends the prophet Jehu son of Hanani with a judgment oracle against Baasha: just as Baasha destroyed Jeroboam\'s house, so his own house will be completely destroyed for following the same sins. Baasha\'s son Elah reigns only two years before being murdered by Zimri, one of his army commanders, while Elah is drunk at a banquet. Zimri immediately kills all of Baasha\'s family and friends, fulfilling Jehu\'s prophecy.',
      theological_context: 'The judgment cycle is now complete: Baasha used violence to judge Jeroboam\'s dynasty, and violence now judges Baasha\'s. The irony is sharp — Elah dies drunk in someone else\'s house while his own nation was at war. The fulfillment notation in verse 12 ("according to the word of the LORD which he spoke against Baasha by Jehu the prophet") shows the narrator\'s consistent concern to demonstrate that prophetic words are reliably fulfilled, establishing prophetic credibility that will be crucial when Elijah and Micaiah appear.',
    },
    {
      verse_start: 15,
      verse_end: 28,
      topic: 'Zimri\'s Seven Days and Omri\'s Dynasty',
      plain_language: 'Zimri\'s reign lasts only seven days. When the army hears he has killed the king, they make Omri, the army commander, king instead. Omri besieges Tirzah, Zimri burns the palace on himself and dies. Even after Zimri, Israel is split between Omri and Tibni for several years until Tibni dies. Omri then buys the hill of Samaria and builds a new capital city there. He reigns 12 years and is described as worse than all who came before him.',
      theological_context: 'Omri was historically significant enough that Assyrian records call Israel "the house of Omri" for generations after his dynasty ended. Yet the biblical narrative dismisses his entire reign in a few verses, measuring greatness by faithfulness to God rather than political achievement. His building of Samaria was a significant act of state-craft — creating a capital city with no prior tribal associations, like David\'s choice of Jerusalem — but unlike David, Omri built it only on human ambition. His evaluation as "worse than all who were before him" sets the stage for Ahab, who will surpass even that verdict.',
    },
    {
      verse_start: 29,
      verse_end: 34,
      topic: 'Ahab and Jezebel: The Nadir of the Northern Kingdom',
      plain_language: 'Ahab son of Omri is introduced as the worst king Israel has yet seen. He marries Jezebel, daughter of the king of Sidon, and introduces formal Baal worship — building a Baal temple with its own altar in Samaria. He also makes an Asherah pole. This surpasses all previous Israelite kings in provoking God\'s anger. During his reign, Hiel of Bethel rebuilds Jericho and loses both his firstborn and youngest sons as Joshua\'s curse is fulfilled.',
      theological_context: 'Ahab\'s marriage to Jezebel marks a qualitative shift: previous northern kings engaged in the syncretistic golden calf worship that blended Yahwism with Canaanite forms, but Ahab introduces the outright worship of a foreign deity with a state-sponsored temple. This sets the stage for the great Elijah narratives that occupy the next several chapters. The Jericho rebuilding incident (v. 34) functions as a theological timestamp: as Joshua\'s curse is literally fulfilled, it reminds the reader that all of God\'s words — blessings and curses — are reliable, reinforcing the prophetic credibility framework running through these chapters.',
    },
  ],
  '1 Kings:20': [
    {
      verse_start: 1,
      verse_end: 21,
      topic: 'Ben-hadad\'s Siege and the First Battle',
      plain_language: 'Ben-hadad of Aram brings a massive coalition of 32 kings against Samaria and demands Ahab\'s treasure and family. Ahab agrees to the first demand but refuses the second, more humiliating one. A prophet assures Ahab that God will give him victory so that Ahab will know the LORD. The 232 young officers of the provincial commanders lead the attack and route the Aramean army while Ben-hadad is drinking.',
      theological_context: 'This chapter is theologically complex because God gives military victories to Ahab — a famously wicked king — not for Ahab\'s sake but for a larger purpose: "you shall know that I am the LORD" (v. 13, 28). The repetition of this phrase echoes the Exodus language of divine self-revelation through mighty acts. God is willing to act through and even on behalf of the unfaithful for the sake of revealing his own name and purposes. The 232 young officers winning against vastly superior numbers underscores that the victory belongs to God, not Israelite military strategy.',
    },
    {
      verse_start: 22,
      verse_end: 34,
      topic: 'The Second Battle at Aphek and Ahab\'s Treaty with Ben-hadad',
      plain_language: 'A prophet warns Ahab to prepare for a second attack. Ben-hadad\'s advisors theorize that Israel\'s gods are gods of the hills, so they should fight on the plains. God responds by giving Israel victory at Aphek on the plains specifically to refute this claim, killing 100,000 Aramean soldiers in one day. Ben-hadad hides, then comes to Ahab in sackcloth. Ahab calls him "my brother" and makes a favorable treaty, releasing him in exchange for commercial rights and territorial return.',
      theological_context: 'The second battle makes God\'s purpose explicit: "Then you shall know that I am the LORD" — he is not a regional deity limited to hills. The victory on the plains is a direct divine refutation of Aramean theology and a demonstration of YHWH\'s universal sovereignty. Ahab\'s treaty with Ben-hadad, while politically reasonable, constitutes a fatal theological error: Ben-hadad had been "devoted to destruction" (cherem) — the same concept applied to Canaanite enemies in Joshua. By showing mercy based on political calculation rather than divine command, Ahab acts as if God\'s judgment decrees are negotiable.',
    },
    {
      verse_start: 35,
      verse_end: 43,
      topic: 'The Parable of the Escaped Prisoner and Ahab\'s Condemnation',
      plain_language: 'A prophet arranges a parable-in-action: he asks another man to strike him, and when the man refuses, the prophet says a lion will kill him (it does). Then the prophet disguises himself with a bandage and tells Ahab a story about a soldier who let a prisoner escape on pain of his life or a talent of silver. Ahab pronounces judgment — and the prophet reveals the parable is about Ahab himself, who let Ben-hadad escape. Ahab goes home resentful and sullen.',
      theological_context: 'This passage mirrors Nathan\'s parable to David (2 Sam 12) in structure: a story-within-a-story that causes the king to pronounce judgment on himself before being confronted with the application. The verbal parallel is intentional — both texts use the same mechanism of prophetic confrontation. The "devoted to destruction" language (Hebrew: cherem) is specifically the language of holy war; Ben-hadad was not merely a defeated enemy but a man God had marked for judgment. Ahab\'s sullen anger at the verdict, rather than repentance, foreshadows his posture in chapter 21 and ultimately his death in chapter 22.',
    },
  ],
  '1 Kings:21': [
    {
      verse_start: 1,
      verse_end: 16,
      topic: 'Naboth\'s Vineyard: Jezebel\'s Judicial Murder',
      plain_language: 'Ahab wants Naboth\'s vineyard adjacent to his palace and offers to buy it or trade for it. Naboth refuses on grounds of ancestral inheritance law. Ahab sulks. Jezebel takes charge: she forges letters in Ahab\'s name, arranges false witnesses to accuse Naboth of blasphemy, and has him stoned. She then tells Ahab to take possession. Ahab goes to claim it.',
      theological_context: 'This passage is a masterclass in how systemic evil uses legitimate institutions to commit injustice. Jezebel does not simply seize the land — she manipulates the legal system: the public fast, the formal assembly, the two witnesses required by Mosaic law, the charge of blasphemy. The outward forms of justice are maintained while the substance is completely subverted. Naboth\'s appeal to ancestral inheritance reflects the Mosaic land theology of Leviticus 25 — land belongs ultimately to God and is held in trust by families. Ahab\'s passive complicity (he knew nothing of the plot, but eagerly took the vineyard) raises questions about culpability that the text answers in v. 19: God holds Ahab responsible for the murder.',
    },
    {
      verse_start: 17,
      verse_end: 26,
      topic: 'Elijah\'s Confrontation and the Oracle of Judgment',
      plain_language: 'God sends Elijah to confront Ahab in Naboth\'s vineyard. Ahab calls Elijah "my enemy." Elijah pronounces comprehensive judgment: where dogs licked Naboth\'s blood, dogs will lick Ahab\'s; Jezebel will be devoured by dogs in Jezreel; the entire dynasty will be cut off. The narrator notes Ahab was the most wicked king Israel had, incited by Jezebel, who sold himself to do evil.',
      theological_context: 'The judgment oracle is built on the law of lex talionis — the punishment fits the crime in location and manner. The blood-licking in Naboth\'s place connects justice to the specific site of the crime. Elijah\'s description of Ahab as one who "sold himself to do evil" echoes the slave-market language and implies Ahab surrendered his moral agency. The mention of Jezebel as the inciter does not excuse Ahab — he remains responsible — but acknowledges the relational dynamics that shaped his decisions. The detailed judgment against Jezebel (v. 23) is notable: she is judged separately from Ahab\'s dynasty because her crimes were her own, not merely derivative.',
    },
    {
      verse_start: 27,
      verse_end: 29,
      topic: 'Ahab\'s Repentance and God\'s Delayed Judgment',
      plain_language: 'When Ahab hears Elijah\'s words, he tears his clothes, puts on sackcloth, fasts, lies in sackcloth, and goes about dejectedly. God tells Elijah to take note of how Ahab has humbled himself, and announces that because of this humility, the disaster will not come in Ahab\'s days but will fall on his son\'s dynasty.',
      theological_context: 'These three verses contain one of the most surprising divine responses in Kings: genuine repentance — even from Israel\'s worst king — is met with genuine divine mercy. This is not repentance unto salvation or restoration of Ahab\'s relationship with God, but it demonstrates that God\'s judgments are not inflexibly mechanical. The principle echoes Jeremiah 18:7-8: when a nation repents, God relents of the planned disaster. The deferral to the next generation is not a cancellation but a delay — Ahab\'s repentance bought time but did not nullify the consequence of his dynasty\'s corruption. This passage prevents any simplistic reading of divine judgment as automatic or unresponsive to human response.',
    },
  ],
  '1 Kings:22': [
    {
      verse_start: 1,
      verse_end: 28,
      topic: 'Micaiah\'s Prophecy and the Conflict of True and False Prophecy',
      plain_language: 'Ahab and Jehoshaphat plan to retake Ramoth-gilead. Four hundred court prophets unanimously promise success. Jehoshaphat asks for another prophet. Micaiah is summoned and initially gives a mocking echo of the false prophets, then reveals his true vision: Israel scattered like leaderless sheep, and a lying spirit sent by God into all the prophets\' mouths. Zedekiah strikes Micaiah; Ahab has him imprisoned. Micaiah predicts Zedekiah will know the truth when he hides in an inner room.',
      theological_context: 'This passage is one of the most profound explorations of prophecy in the Old Testament. The heavenly council vision (vv. 19-23) raises difficult questions about divine permission of deception: God did not directly lie to Ahab, but permitted a lying spirit to operate through the false prophets as a means of accomplishing Ahab\'s judgment. This is not divine deception of an innocent man but the judicial hardening of someone who has persistently chosen self-serving counsel. The four hundred prophets are not distinguished as Baal prophets — they may be Yahweh prophets who have conformed to the king\'s expectations. Micaiah\'s test of true prophecy is fulfillment (v. 28: "if you return in peace, the LORD has not spoken by me"), which echoes Deuteronomy 18:21-22.',
    },
    {
      verse_start: 29,
      verse_end: 40,
      topic: 'Ahab\'s Death at Ramoth-gilead',
      plain_language: 'Ahab disguises himself as a common soldier while Jehoshaphat wears royal robes. Aramean commanders initially chase Jehoshaphat until they realize he is not Ahab. A random arrow strikes Ahab in the gap in his armor. He props himself up in his chariot all day until he dies at evening. The army scatters and returns home. His chariot is washed at the pool of Samaria and dogs lick his blood, as Elijah had prophesied.',
      theological_context: 'The "random arrow" is one of the most theologically loaded images in Kings: a soldier who drew his bow without aiming, not knowing where the arrow would land, struck precisely between the joints of Ahab\'s armor. Providence works through the most ordinary and accidental-seeming means to accomplish what deliberate planning cannot escape. Ahab\'s disguise, his elaborate attempt to avoid Micaiah\'s prophecy, only ensured that his death would appear accidental — making the fulfillment even more unmistakably divine. The image of the king propped up in his chariot bleeding out through the day while the battle rages is one of the most vivid death scenes in Kings, befitting the narrative climax of Ahab\'s long story of unfaithfulness.',
    },
    {
      verse_start: 41,
      verse_end: 53,
      topic: 'Jehoshaphat of Judah and Ahaziah of Israel',
      plain_language: 'Jehoshaphat of Judah is summarized: 25 years, good like Asa his father, removes male shrine prostitutes, but the high places remain. He makes peace with Israel. His attempt to build a merchant fleet at Ezion-geber fails when the ships are wrecked. Ahaziah of Israel, Ahab\'s son, begins his evil reign — the last two verses establish him as following Ahab, Jezebel, and Jeroboam in serving Baal.',
      theological_context: 'The closing summary of 1 Kings sets up parallel stories that will run through 2 Kings: the good Davidic line of Jehoshaphat against the corrupt Omride dynasty of Ahaziah. Jehoshaphat\'s incomplete reform — good in heart, unable to remove the high places — illustrates the limits of even sincere royal reform: institutional worship patterns are easier to establish than to uproot. The wrecked fleet at Ezion-geber may be connected to 2 Chronicles 20:35-37, where the prophet Eliezer condemns Jehoshaphat\'s commercial alliance with Ahaziah as the reason for the wreck. Ahaziah\'s thumbnail portrait foreshadows 2 Kings 1, connecting seamlessly into the next volume of the narrative.',
    },
  ],
};

async function main() {
  console.log('Seeding 1 Kings 13-16, 20-22...');

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
