// Run: npx tsx scripts/seed-phase3.ts
// Seeds quiz questions, difficult passages, and genealogy data for Phase 3.

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

function check<T>(result: { data: T | null; error: unknown }): T {
  if (result.error) throw result.error;
  if (result.data === null) throw new Error('Supabase returned null');
  return result.data;
}

// ---------------------------------------------------------------------------
// Quiz questions
// ---------------------------------------------------------------------------

const quizData: Record<string, { question: string; options: string[]; correct_index: number; explanation: string }[]> = {
  '1 Kings:17': [
    {
      question: "Where did God first direct Elijah to hide after his announcement to Ahab?",
      options: ["Mount Carmel", "Brook Cherith", "Zarephath", "The wilderness of Judah"],
      correct_index: 1,
      explanation: "God sent Elijah east to the brook Cherith, where he drank from the brook and was fed by ravens each morning and evening (1 Kings 17:3-4)."
    },
    {
      question: "Who brought Elijah food at the brook Cherith?",
      options: ["An angel", "Ravens", "A widow", "Obadiah"],
      correct_index: 1,
      explanation: "Ravens brought Elijah bread and meat in the morning and evening (1 Kings 17:6). This miracle underscored God's provision even through unlikely agents."
    },
    {
      question: "In what foreign country was Zarephath located?",
      options: ["Moab", "Aram", "Sidon (Phoenicia)", "Egypt"],
      correct_index: 2,
      explanation: "Zarephath belonged to Sidon, in Phoenician territory — the homeland of Jezebel. God sent Elijah there to be sheltered by a Gentile widow, a pointed rebuke to Israel's unfaithfulness."
    },
    {
      question: "What was the widow of Zarephath about to do when Elijah arrived?",
      options: ["Bake bread for the king", "Prepare a last meal before she and her son died", "Draw water from the well", "Bury her husband"],
      correct_index: 1,
      explanation: "The widow was gathering sticks to prepare a final meal from her last handful of flour and oil, expecting to die (1 Kings 17:12). The drought had reduced her to this."
    },
    {
      question: "What happened to the widow's son in 1 Kings 17?",
      options: ["He was taken as a slave", "He fell ill and died, then was raised by Elijah", "He ran away to Samaria", "He joined Elijah's ministry"],
      correct_index: 1,
      explanation: "The widow's son died from a severe illness. Elijah prayed over him three times and the LORD restored his life — the first resurrection miracle in the Old Testament (1 Kings 17:17-22)."
    },
    {
      question: "What did the miracle of the widow's son prove to her?",
      options: ["That Israel would win the war against Aram", "That the drought would end soon", "That Elijah was a man of God and his word was truth", "That Baal was powerless"],
      correct_index: 2,
      explanation: "The widow declared: 'Now I know that you are a man of God, and that the word of the LORD in your mouth is truth' (1 Kings 17:24)."
    },
    {
      question: "What was the source of the severe drought described in 1 Kings 17?",
      options: ["Climate change in the ancient Near East", "Elijah announced it would happen at his word", "Assyrian armies cut off the water supply", "Baal worship rituals inadvertently caused it"],
      correct_index: 1,
      explanation: "Elijah declared to Ahab: 'There shall be neither dew nor rain these years, except by my word' (1 Kings 17:1). The drought was divine judgment through prophetic declaration."
    },
    {
      question: "Why was the widow's jar of flour and jug of oil significant?",
      options: ["They were offerings from the temple treasury", "They miraculously did not run out throughout the entire drought", "They were given by Ahab as a peace offering", "They were used in a pagan ritual that God redeemed"],
      correct_index: 1,
      explanation: "God promised: 'The jar of flour shall not be spent, and the jug of oil shall not fail, until the day that the LORD sends rain upon the earth' (1 Kings 17:14). It was a sustained miracle throughout the drought."
    },
    {
      question: "What does Elijah's name mean in Hebrew?",
      options: ["'Servant of the LORD'", "'My God is Yahweh'", "'Fire from heaven'", "'Prophet of the mountains'"],
      correct_index: 1,
      explanation: "Elijah means 'My God is Yahweh' (eli = my God, yah = Yahweh) — a declaration that stood in direct opposition to the Baal worship Ahab promoted."
    },
    {
      question: "In what way does Jesus reference the widow of Zarephath in the New Testament?",
      options: ["As an example of saving faith", "To show that prophets are sent to Gentiles when Israel rejects them", "As a symbol of the church", "To contrast with the widow at the temple"],
      correct_index: 1,
      explanation: "In Luke 4:25-26, Jesus cites Elijah's mission to the Zarephath widow to make the point that God bypassed the many widows in Israel to bless a Gentile — a statement that enraged his synagogue audience."
    },
  ],
  '1 Kings:18': [
    {
      question: "How many years had the drought lasted when God told Elijah to appear before Ahab?",
      options: ["One year", "Two years", "Three years", "Seven years"],
      correct_index: 2,
      explanation: "In the third year of the drought, God sent Elijah back to Ahab (1 Kings 18:1). James 5:17 confirms it was 3.5 years total (including the time from announcement to end)."
    },
    {
      question: "What had Obadiah done during Jezebel's persecution of the prophets?",
      options: ["Led the prophets out of Israel", "Hidden 100 prophets in two caves and fed them", "Appealed to Ahab for mercy", "Fled to Judah with the prophets"],
      correct_index: 1,
      explanation: "Obadiah took a hundred prophets of the LORD and hid them fifty to a cave, feeding them with bread and water (1 Kings 18:4) — an act of great courage while serving in Ahab's palace."
    },
    {
      question: "What did Ahab call Elijah when he saw him?",
      options: ["'The prophet of the LORD'", "'Troubler of Israel'", "'Man of God'", "'My enemy'"],
      correct_index: 1,
      explanation: "Ahab said 'Is it you, you troubler of Israel?' (1 Kings 18:17). Elijah immediately turned the accusation back: 'I have not troubled Israel; but you have, and your father's house.'"
    },
    {
      question: "How many prophets of Baal were gathered at Mount Carmel?",
      options: ["100", "200", "400", "450"],
      correct_index: 3,
      explanation: "Elijah challenged the 450 prophets of Baal (plus 400 prophets of Asherah) at Mount Carmel. Elijah alone faced them all."
    },
    {
      question: "What famous challenge did Elijah issue to the people at Mount Carmel?",
      options: [
        "'Choose today whom you will serve'",
        "'How long will you go limping with two different opinions? If the LORD is God, follow him; but if Baal, then follow him'",
        "'Call on the name of your god and I will call on the name of the LORD'",
        "'The God who answers by fire — he is God'"
      ],
      correct_index: 1,
      explanation: "Elijah's challenge to the wavering crowd: 'How long will you go limping with two different opinions?' (1 Kings 18:21) — a demand for decisive commitment in a culture trying to blend worship."
    },
    {
      question: "What did the prophets of Baal do to try to get Baal's attention?",
      options: ["Sacrificed a bull at dawn", "Cried aloud, limped around the altar, and cut themselves with swords and spears", "Chanted the name of Baal continuously for three days", "Poured water on their offering"],
      correct_index: 1,
      explanation: "They cried aloud, danced around the altar, and cut themselves with swords and spears from morning until evening — all to no avail (1 Kings 18:26-29)."
    },
    {
      question: "How did Elijah make his test more dramatic before praying?",
      options: ["He fasted for three days first", "He built the altar with 12 stones and drenched it with four jars of water three times", "He prayed from sunset to midnight", "He stood at the top of the mountain alone"],
      correct_index: 1,
      explanation: "Elijah had four jars of water poured over the offering and altar three times — making it impossible to attribute the fire to natural causes. The water filled the surrounding trench (1 Kings 18:33-35)."
    },
    {
      question: "What was the people's response when fire fell from heaven?",
      options: ["They fled in fear", "They fell on their faces saying 'The LORD, he is God; the LORD, he is God'", "They praised Elijah as a great prophet", "They were silent and amazed"],
      correct_index: 1,
      explanation: "The people fell on their faces and cried: 'The LORD, he is God; the LORD, he is God' (1 Kings 18:39) — exactly the confession the contest was designed to produce."
    },
    {
      question: "What happened to the 450 prophets of Baal after the contest?",
      options: ["They were expelled from Israel", "They converted and became priests of the LORD", "Elijah had them executed at the Kishon River", "Ahab had them imprisoned"],
      correct_index: 2,
      explanation: "Elijah commanded the people to seize the prophets; he took them to the brook Kishon and executed them there (1 Kings 18:40) — the Mosaic penalty for false prophecy (Deuteronomy 18:20)."
    },
    {
      question: "What immediately followed the execution of the false prophets?",
      options: ["Elijah fled to Horeb", "The long drought ended with a great rain", "Jezebel threatened Elijah's life", "Ahab repented and tore his clothes"],
      correct_index: 1,
      explanation: "That same evening, the sky grew dark with clouds, wind rose, and a great rain fell — ending the three-year drought (1 Kings 18:45). God answered the contest with both fire and rain."
    },
  ],
  '1 Kings:19': [
    {
      question: "Why did Elijah flee after the great victory at Carmel?",
      options: ["Ahab sent soldiers after him", "Jezebel threatened to kill him within a day", "God told him to leave Israel", "He feared the remaining prophets of Baal"],
      correct_index: 1,
      explanation: "Jezebel sent a messenger threatening to kill Elijah by the next day (1 Kings 19:2). After his greatest triumph, fear overwhelmed him and he fled."
    },
    {
      question: "What did Elijah pray under the broom tree?",
      options: ["'Give me strength to face Jezebel'", "'It is enough; now, O LORD, take away my life; for I am not better than my fathers'", "'Show me a sign that I have not labored in vain'", "'Let fire come down again and destroy my enemies'"],
      correct_index: 1,
      explanation: "In exhaustion and despair, Elijah asked to die: 'It is enough; now, O LORD, take away my life' (1 Kings 19:4). It is one of Scripture's most honest prayers of burnout."
    },
    {
      question: "How many times did an angel provide food for Elijah in the wilderness?",
      options: ["Once", "Twice", "Three times", "Seven times"],
      correct_index: 1,
      explanation: "An angel appeared twice with bread and water (1 Kings 19:5-7). The second time the angel said 'Arise and eat, for the journey is too great for you' — showing concern for the physical distance ahead."
    },
    {
      question: "How long did Elijah travel to reach Horeb on the strength of the angel's food?",
      options: ["Seven days", "Fourteen days", "Forty days and forty nights", "Three months"],
      correct_index: 2,
      explanation: "Elijah traveled forty days and forty nights to Horeb the mount of God (1 Kings 19:8) — echoing Moses's forty days on the same mountain and Israel's forty years in the wilderness."
    },
    {
      question: "What question did God ask Elijah twice at Horeb?",
      options: ["'Why have you abandoned my covenant?'", "'What are you doing here, Elijah?'", "'Have I not been faithful to you?'", "'Where are the prophets I sent with you?'"],
      correct_index: 1,
      explanation: "God asked 'What are you doing here, Elijah?' (1 Kings 19:9, 13) — both before the dramatic theophany of wind/earthquake/fire and after. The repeated question underscores that Elijah's place was in the field, not hiding at Horeb."
    },
    {
      question: "In what form did God finally speak to Elijah at Horeb?",
      options: ["A mighty rushing wind", "An earthquake", "A fire", "A still small voice (gentle whisper)"],
      correct_index: 3,
      explanation: "The LORD was not in the wind, earthquake, or fire — but in a still small voice (1 Kings 19:12). After the spectacular displays, God spoke in the quietest way — a powerful contrast to Elijah's expectation."
    },
    {
      question: "What three commissions did God give Elijah at Horeb?",
      options: [
        "Return to Samaria, confront Jezebel, anoint a new high priest",
        "Anoint Hazael king of Aram, Jehu king of Israel, and Elisha as Elijah's successor",
        "Rebuild the altar, restore the prophets, and call Israel to repentance",
        "Go to Nineveh, go to Egypt, and go to Jerusalem"
      ],
      correct_index: 1,
      explanation: "God commissioned Elijah to anoint Hazael over Aram, Jehu over Israel, and Elisha as prophet in his place (1 Kings 19:15-16) — all three would play roles in purging Baal worship from Israel."
    },
    {
      question: "How many in Israel had not bowed the knee to Baal?",
      options: ["100", "500", "1,000", "7,000"],
      correct_index: 3,
      explanation: "God told Elijah: 'I have kept for myself seven thousand in Israel, all the knees that have not bowed to Baal' (1 Kings 19:18). Elijah thought he was alone; God had a faithful remnant he knew nothing about."
    },
    {
      question: "How did Elijah call Elisha to be his successor?",
      options: ["He spoke his name three times in prophecy", "He cast his mantle (cloak) over Elisha while he was plowing", "He sent a written scroll to Elisha's family", "He laid his hands on Elisha's head at Horeb"],
      correct_index: 1,
      explanation: "Elijah passed by Elisha plowing with twelve yoke of oxen and cast his mantle over him (1 Kings 19:19) — a symbolic act of prophetic succession with no verbal explanation needed."
    },
    {
      question: "What did Elisha do immediately after being called?",
      options: ["He left at once without saying goodbye", "He asked for permission to kiss his parents goodbye, then slaughtered his oxen and burned his plow as a farewell feast", "He refused three times before accepting", "He followed Elijah in silence"],
      correct_index: 1,
      explanation: "Elisha slaughtered the oxen, burned the plowing equipment to cook the meat, gave it to the people, and then rose to follow Elijah (1 Kings 19:21) — a complete and irreversible break from his former life."
    },
  ],
  '2 Kings:18': [
    {
      question: "What did Hezekiah do that no king of Judah before or after him matched?",
      options: ["He expanded the temple", "He trusted in the LORD and did not depart from following him", "He defeated five nations in battle", "He wrote 500 new psalms"],
      correct_index: 1,
      explanation: "Scripture says 'there was none like him among all the kings of Judah after him, nor among those who were before him. For he held fast to the LORD; he did not depart from following him' (2 Kings 18:5-6)."
    },
    {
      question: "What was the Nehushtan, and what did Hezekiah do with it?",
      options: ["An Asherah pole in the valley of Hinnom; he cut it down", "The bronze serpent Moses made in the wilderness that Israel had been burning incense to; he destroyed it", "The golden calves at Bethel and Dan; he melted them down", "A Phoenician idol Jezebel brought to Samaria; he expelled it"],
      correct_index: 1,
      explanation: "Hezekiah broke in pieces the bronze serpent Moses made (Numbers 21:8-9) because Israel had turned it into an idol (calling it Nehushtan). A legitimate God-given object had become a false god."
    },
    {
      question: "In what year of Hezekiah's reign did Sennacherib invade Judah?",
      options: ["His first year", "His fifth year", "His fourteenth year", "His twentieth year"],
      correct_index: 2,
      explanation: "In the fourteenth year of King Hezekiah, Sennacherib king of Assyria came up against all the fortified cities of Judah (2 Kings 18:13)."
    },
    {
      question: "What did Hezekiah do to try to buy off Sennacherib?",
      options: ["He sent his army to negotiate", "He paid a massive tribute including silver stripped from the temple and palace", "He promised to become a vassal of Assyria", "He requested help from Egypt"],
      correct_index: 1,
      explanation: "Hezekiah paid 300 talents of silver and 30 talents of gold — stripping all the silver from the temple and cutting off the gold Hezekiah had applied to the temple doors and posts (2 Kings 18:14-16)."
    },
    {
      question: "What did the Rabshakeh ask for when he came to Jerusalem's wall?",
      options: ["Food and water for the Assyrian army", "Hezekiah's surrender and safe passage for the people to a land of grain and wine", "Permission to pass through to attack Egypt", "A ransom payment for Judean prisoners"],
      correct_index: 1,
      explanation: "The Rabshakeh offered the people surrender and resettlement in 'a land like your own land, a land of grain and wine' (2 Kings 18:32) if they submitted to Assyria."
    },
    {
      question: "What did the Rabshakeh argue about Hezekiah's trust in the LORD?",
      options: [
        "That the LORD was too weak to defeat Assyria's gods",
        "That Hezekiah had actually angered the LORD by removing the high places and altars",
        "That the LORD had already abandoned Israel when they went into exile",
        "That Elijah had spoken against Jerusalem before he died"
      ],
      correct_index: 1,
      explanation: "In a clever argument, the Rabshakeh suggested that Hezekiah had offended the LORD by removing the high places — implying the religious reform was the problem (2 Kings 18:22). It was sophisticated propaganda."
    },
    {
      question: "Why did Eliakim ask the Rabshakeh to speak in Aramaic rather than Hebrew?",
      options: ["To prevent Hezekiah from hearing what was said", "To avoid demoralizing the people on the wall who could hear the speech", "Because Aramaic was the proper diplomatic language", "Because he did not understand Aramaic himself"],
      correct_index: 1,
      explanation: "Eliakim requested Aramaic 'for we understand it; do not speak to us in the language of Judah within the hearing of the people on the wall' (2 Kings 18:26). Rabshakeh refused — and shouted louder in Hebrew deliberately."
    },
    {
      question: "What was the response of the people on the wall to Rabshakeh's speech?",
      options: ["They shouted back in defiance", "They wept and begged Hezekiah to surrender", "They were silent — the king had commanded them not to answer", "They threw things at the Assyrian delegates"],
      correct_index: 2,
      explanation: "The people were silent and answered not a word, 'for the king's command was, Do not answer him' (2 Kings 18:36). It was a disciplined, dignified non-response."
    },
    {
      question: "What nations did the Rabshakeh list to argue that God could not save Jerusalem?",
      options: ["Moab, Edom, and Philistia", "Hamath, Arpad, Sepharvaim, and others — all whose gods failed to stop Assyria", "Egypt, Babylon, and Aram", "Tyre, Sidon, and Phoenicia"],
      correct_index: 1,
      explanation: "Rabshakeh listed Hamath, Arpad, and Sepharvaim — nations Assyria had already conquered — and asked: 'Has any of the gods of the nations ever delivered his land out of the hand of the king of Assyria?' (2 Kings 18:33-35)."
    },
    {
      question: "How does the archaeological record corroborate the events of 2 Kings 18?",
      options: [
        "The Tel Dan Stele names Hezekiah directly",
        "Sennacherib's Prism records the campaign and lists 46 cities captured, and the Lachish Reliefs depict the siege of Lachish",
        "The Mesha Stele describes Judah's surrender",
        "The Black Obelisk shows Hezekiah paying tribute"
      ],
      correct_index: 1,
      explanation: "The Sennacherib Prism (Taylor Prism) describes the 701 BC campaign and lists 46 Judean cities captured. The Lachish Reliefs from Sennacherib's palace depict the siege of Lachish in vivid detail — both confirm the biblical account."
    },
  ],
  '2 Kings:19': [
    {
      question: "What did Hezekiah do when he heard Rabshakeh's report?",
      options: ["He called a war council", "He tore his clothes, covered himself in sackcloth, and went to the temple", "He sent envoys to Egypt for help", "He mobilized the army"],
      correct_index: 1,
      explanation: "Hezekiah's immediate response was mourning and prayer — he tore his clothes, put on sackcloth, and went to the house of the LORD (2 Kings 19:1)."
    },
    {
      question: "Who was the prophet Hezekiah turned to in the crisis?",
      options: ["Elisha", "Micah", "Isaiah son of Amoz", "Oded"],
      correct_index: 2,
      explanation: "Hezekiah sent to Isaiah son of Amoz (2 Kings 19:2) — the same Isaiah whose book bears his name. This is one of the few chapters where the narrative of Kings and the book of Isaiah directly overlap."
    },
    {
      question: "What was Isaiah's first prophecy about Sennacherib?",
      options: [
        "That Jerusalem would fall but be rebuilt",
        "That Sennacherib would hear a rumor and return to his own land, where he would die by the sword",
        "That God would send a plague on the Assyrian army",
        "That Hezekiah must surrender to avoid total destruction"
      ],
      correct_index: 1,
      explanation: "Isaiah told Hezekiah: 'Behold, I will put a spirit in him, so that he shall hear a rumor and return to his own land, and I will cause him to fall by the sword in his own land' (2 Kings 19:7) — fulfilled exactly in verse 37."
    },
    {
      question: "What did Hezekiah do with Sennacherib's threatening letter?",
      options: [
        "He burned it in anger",
        "He shared it with his military advisers",
        "He spread it before the LORD in the temple and prayed",
        "He sent it back to Sennacherib with a defiant reply"
      ],
      correct_index: 2,
      explanation: "Hezekiah went to the temple and spread the letter before the LORD (2 Kings 19:14) — a profound act of prayer that made the problem literally visible before God."
    },
    {
      question: "What is the theological core of Hezekiah's prayer in 2 Kings 19?",
      options: [
        "'If you do not save us, Baal will seem greater than you'",
        "'You are the God of all kingdoms of the earth, maker of heaven and earth — save us so all nations will know you alone are God'",
        "'Remember the covenant you made with David'",
        "'Punish Sennacherib for his arrogance'"
      ],
      correct_index: 1,
      explanation: "Hezekiah prays: 'Save us from his hand, that all the kingdoms of the earth may know that you, O LORD, are God alone' (2 Kings 19:19). The prayer is not nationalistic but universal — the salvation of Jerusalem as a witness to the whole world."
    },
    {
      question: "What did Isaiah's oracle say that Sennacherib would NOT do to Jerusalem?",
      options: ["Starve the city with a siege", "Enter the city, shoot an arrow there, come before it with a shield, or cast up a siege mound", "Kill the king", "Destroy the temple"],
      correct_index: 1,
      explanation: "God declared through Isaiah: 'He shall not come into this city or shoot an arrow there, or come before it with a shield or cast up a siege mound against it' (2 Kings 19:32). Every element of ancient siege warfare was explicitly ruled out."
    },
    {
      question: "How many Assyrian soldiers were struck down in a single night?",
      options: ["10,000", "50,000", "185,000", "200,000"],
      correct_index: 2,
      explanation: "The angel of the LORD struck 185,000 Assyrian soldiers dead in one night (2 Kings 19:35). The Sennacherib Prism confirms he never captured Jerusalem, though it doesn't explain why."
    },
    {
      question: "What happened to Sennacherib after his return to Nineveh?",
      options: ["He died in battle against Babylon", "His sons Adrammelech and Sharezer killed him in the temple of Nisroch; Esarhaddon his son reigned instead", "He fell ill and died peacefully", "He repented and converted to worshipping the LORD"],
      correct_index: 1,
      explanation: "Sennacherib was murdered by his sons Adrammelech and Sharezer while worshipping in the temple of Nisroch (2 Kings 19:37) — exactly as Isaiah had prophesied (death by the sword in his own land)."
    },
    {
      question: "What does the phrase 'the virgin daughter of Zion' mean in Isaiah's oracle?",
      options: ["A specific woman in Jerusalem", "Jerusalem personified as a young woman who has never been conquered — defiant and undefeated", "A prophecy about Mary", "A reference to the temple priestesses"],
      correct_index: 1,
      explanation: "In Isaiah's oracle, 'the virgin daughter of Zion' (2 Kings 19:21) is a poetic personification of Jerusalem as a city that has never been violated — she despises and mocks Sennacherib's threats."
    },
    {
      question: "What was the sign God gave Hezekiah that the Assyrian threat would be overcome?",
      options: [
        "A rainbow over the city",
        "For two years they would eat what grows of itself; in the third year plant and harvest normally",
        "The sun stood still for a day",
        "A star appeared over Jerusalem"
      ],
      correct_index: 1,
      explanation: "God promised that in the third year the people would plant and harvest normally (2 Kings 19:29) — a sign of restoration after years of siege disruption. The land itself would testify to God's deliverance."
    },
  ],
  '2 Kings:20': [
    {
      question: "What was the first thing Isaiah said to the critically ill Hezekiah?",
      options: ["'The LORD will heal you'", "'Set your house in order; for you shall die, you shall not recover'", "'Fast three days and you will live'", "'Ask the LORD for a sign'"],
      correct_index: 1,
      explanation: "Isaiah's message was stark: 'Set your house in order; for you shall die, you shall not recover' (2 Kings 20:1). There was no comfort or qualification — it was a direct word of judgment."
    },
    {
      question: "How did Hezekiah respond to Isaiah's word that he would die?",
      options: ["He accepted it with faith", "He turned his face to the wall and prayed, reminding God of his faithfulness, and wept bitterly", "He demanded a second prophet be consulted", "He immediately repented of a specific sin"],
      correct_index: 1,
      explanation: "Hezekiah turned to the wall and prayed: 'Remember now, O LORD, how I have walked before thee in faithfulness and with a whole heart' (2 Kings 20:3). It was an honest, emotional, and direct appeal."
    },
    {
      question: "How many additional years of life did God promise Hezekiah?",
      options: ["5 years", "10 years", "15 years", "25 years"],
      correct_index: 2,
      explanation: "God added fifteen years to Hezekiah's life (2 Kings 20:6) — and also promised to deliver Jerusalem from Assyria. The extra years came with both personal and national blessing."
    },
    {
      question: "What was the miraculous sign confirming Hezekiah's healing?",
      options: ["An angel appeared in the temple", "The shadow on the sundial of Ahaz went backward ten steps", "A fire came down and consumed the temple altar", "Three days of darkness over the city"],
      correct_index: 1,
      explanation: "Isaiah prayed and God brought the shadow back ten steps on the dial of Ahaz (2 Kings 20:11) — reversing the sun's apparent position. It was a reversal in the natural order to confirm the reversal of Hezekiah's fate."
    },
    {
      question: "Who sent envoys to Hezekiah, and what was the ostensible reason?",
      options: [
        "The king of Egypt sent generals to form a military alliance",
        "Merodach-Baladan king of Babylon sent letters and a present because he heard Hezekiah had been sick",
        "The king of Assyria sent diplomats for a peace treaty",
        "The high priest of Babylon came to verify Jewish religion"
      ],
      correct_index: 1,
      explanation: "Merodach-Baladan of Babylon sent envoys because he heard Hezekiah had been sick (2 Kings 20:12). Politically, he was almost certainly seeking allies against Assyria — the illness was a pretext."
    },
    {
      question: "What was Hezekiah's critical error with the Babylonian envoys?",
      options: ["He revealed Israel's military weaknesses", "He showed them everything in his treasury, palace, and armory — there was nothing he did not show them", "He agreed to a military alliance against God's instruction", "He accepted gifts that had been dedicated to Baal"],
      correct_index: 1,
      explanation: "Hezekiah showed the envoys everything — the silver, gold, spices, precious oil, armory, all his storehouses (2 Kings 20:13). It was an act of pride and naivety that gave Babylon a complete inventory of Judah's wealth."
    },
    {
      question: "What did Isaiah prophesy would happen because of Hezekiah's pride with the Babylonian envoys?",
      options: [
        "Babylon would attack within Hezekiah's lifetime",
        "All of Judah's treasures — and Hezekiah's own descendants — would be carried to Babylon",
        "God would remove the fifteen added years from Hezekiah's life",
        "A famine would strike Judah as punishment"
      ],
      correct_index: 1,
      explanation: "Isaiah declared: 'Behold, the days are coming when all that is in your house...shall be carried to Babylon; nothing shall be left...and some of your own sons...shall be eunuchs in the palace of the king of Babylon' (2 Kings 20:17-18)."
    },
    {
      question: "What was Hezekiah's troubling response to Isaiah's prophecy about Babylon?",
      options: [
        "He tore his clothes in repentance",
        "He said 'The word of the LORD is good' — then added 'Why not, if there will be peace and security in my days?'",
        "He begged Isaiah to intercede for Judah",
        "He immediately sent the Babylonian gifts back"
      ],
      correct_index: 1,
      explanation: "Hezekiah's response is chilling: 'Why not, if there will be peace and security in my days?' (2 Kings 20:19). His concern is personal comfort, not the fate of his descendants or the nation — a profound moral failure."
    },
    {
      question: "What engineering achievement is credited to Hezekiah in 2 Kings 20:20?",
      options: ["The rebuilding of Jerusalem's walls", "The construction of a pool and a conduit that brought water into the city", "The expansion of the temple", "The building of a new palace"],
      correct_index: 1,
      explanation: "2 Kings 20:20 credits Hezekiah with making 'the pool and the conduit and brought water into the city' — referring to Hezekiah's Tunnel, which still exists and was confirmed by the Siloam Inscription found inside it."
    },
    {
      question: "What does the trajectory of Hezekiah's story — faithful king, miraculous deliverance, then the Babylon episode — teach about human character?",
      options: [
        "That good deeds earn grace from God",
        "That even the most faithful people can fail; success and recovery can become occasions for pride",
        "That Hezekiah was not truly a good king after all",
        "That God withdraws his promises when people make mistakes"
      ],
      correct_index: 1,
      explanation: "Hezekiah's arc illustrates that remarkable faithfulness (chapter 18) and answered prayer (chapter 19) don't guarantee future character. The Babylon episode shows pride creeping in at the height of his blessing — a pattern repeated throughout Kings."
    },
  ],
};

// ---------------------------------------------------------------------------
// Difficult passages
// ---------------------------------------------------------------------------

const passagesData: Record<string, { verse_start: number; verse_end: number; topic: string; plain_language: string; theological_context: string }[]> = {
  '1 Kings:17': [
    {
      verse_start: 1,
      verse_end: 1,
      topic: "Elijah's sudden appearance",
      plain_language: "Elijah arrives with no introduction or backstory — he just appears and issues a drought decree. The text doesn't explain who he is or how he got there. This abruptness is intentional: the narrator wants you to feel the shock Ahab must have felt.",
      theological_context: "The drought was a covenant curse. Deuteronomy 28:23-24 warned Israel that abandoning God would result in a sky like iron and earth like bronze — no rain. Elijah's declaration is the covenant coming to life through a prophet. He is not arbitrary; he is the voice of the Torah.",
    },
    {
      verse_start: 6,
      verse_end: 6,
      topic: "Ravens feeding Elijah — why ravens?",
      plain_language: "Ravens were unclean birds under Mosaic law (Leviticus 11:15) — you couldn't eat them. Yet God chose them as his delivery service. The point isn't the ravens' purity; it's God's complete sovereignty over all creation, including 'unclean' things.",
      theological_context: "This is a pattern in Kings and the broader prophetic literature: God often works through unexpected or 'outside' agents (ravens, a Gentile widow, an Aramean general) to shame Israel's unfaithfulness. If God can command ravens, he is not limited by Israel's religious categories.",
    },
    {
      verse_start: 17,
      verse_end: 24,
      topic: "The first resurrection in the Old Testament",
      plain_language: "The widow's son dies, Elijah prays three times over the body, and the boy revives. This is the first time in Scripture that a dead person is brought back to life. The physical posture of Elijah — stretching himself over the child — suggests intimate, costly intercession.",
      theological_context: "The raising of the widow's son establishes Elijah as a prophet of supreme authority — one whose word reverses death itself. Jesus explicitly references this miracle (Luke 4:25-26) when explaining his ministry to Gentiles. It foreshadows the resurrection pattern throughout redemptive history.",
    },
  ],
  '1 Kings:18': [
    {
      verse_start: 21,
      verse_end: 21,
      topic: "Limping between two opinions",
      plain_language: "The Hebrew word for 'limping' (pasach) is the same root as 'Passover' — it can mean a ritual dance or a hobbling gait. Elijah is describing a people who can't walk straight because they're trying to go two directions at once: worship Yahweh on feast days and Baal the rest of the year.",
      theological_context: "Israel didn't think they were rejecting God — they thought they were supplementing him. Syncretism (blending religions) is the constant temptation of the people of God in every era. Elijah's challenge is still the challenge of the church: you cannot serve two masters (Matthew 6:24).",
    },
    {
      verse_start: 36,
      verse_end: 39,
      topic: "Elijah's prayer vs. Baal's prophets' prayers",
      plain_language: "The prophets of Baal cried out for hours, danced, and cut themselves. Elijah prayed one short prayer — 63 words in Hebrew — and fire fell immediately. The contrast is stark: Baal's prophets worked hard for nothing; Elijah asked simply and received immediately.",
      theological_context: "Prayer in Scripture is never about technique or volume — it's about relationship and God's character. Elijah's prayer appeals to God's covenant identity: 'God of Abraham, Isaac, and Israel.' He asks for a sign not for his own vindication but so the people will know the truth. This is the posture of all effective prayer in Scripture.",
    },
    {
      verse_start: 40,
      verse_end: 40,
      topic: "The execution of the false prophets",
      plain_language: "Elijah executes 450 prophets of Baal at the brook Kishon. To modern readers this is deeply disturbing. But in the Mosaic covenant, false prophecy — leading Israel to worship other gods — was a capital crime (Deuteronomy 13:1-5, 18:20). Elijah was executing covenant law, not personal vengeance.",
      theological_context: "The execution reveals how seriously the Old Testament treats religious leadership. False prophets weren't just mistaken; they were actively destroying the covenant community's faith. This passage is not a template for Christian behavior (Jesus explicitly reversed the 'call fire down' instinct — Luke 9:54-55), but it shows the gravity of leading God's people astray.",
    },
  ],
  '1 Kings:19': [
    {
      verse_start: 3,
      verse_end: 5,
      topic: "Elijah's collapse after victory",
      plain_language: "Elijah just won the greatest prophetic victory in Israel's history — and immediately after, he's running for his life and asking to die. This is not a contradiction or weakness of faith; it's an honest portrait of human burnout. Physical exhaustion, emotional letdown after an extreme high, and prolonged stress all contribute.",
      theological_context: "God's response to Elijah's collapse is revealing: he doesn't rebuke him. He feeds him. He provides rest. He asks questions. This is the pastoral model of God — meeting the physical and emotional needs first, before addressing the spiritual questions. It reflects how God treats the exhausted throughout Scripture.",
    },
    {
      verse_start: 11,
      verse_end: 13,
      topic: "The still small voice",
      plain_language: "God was not in the wind, earthquake, or fire — three things associated with dramatic divine appearances in the Old Testament (Sinai, Elijah's own ministry). Then comes a 'still small voice' (Hebrew: qol demamah daqah — literally 'a sound of thin silence'). God often speaks in ways we don't expect, especially after spectacular events have failed to address the real need.",
      theological_context: "The message to Elijah — and to readers — is that God's most important communications don't always come through the spectacular. Elijah was looking for a dramatic vindication; God gave him a whisper with a mission. The still small voice is one of the most important theological moments in Kings: divine power does not require theatrical display.",
    },
    {
      verse_start: 18,
      verse_end: 18,
      topic: "The 7,000 who have not bowed the knee",
      plain_language: "Elijah says 'I am the only one left.' God corrects this: there are 7,000 in Israel who have not bowed to Baal. Elijah's ministry had not failed — he just couldn't see the whole picture. God's work is almost always larger than any individual knows.",
      theological_context: "Paul cites this passage in Romans 11:1-5 as evidence that God always preserves a remnant of his people even when the visible church seems lost. The 7,000 represents the invisible faithful — those whose faithfulness has no public profile. The doctrine of the remnant is central to understanding God's preservation of his people through dark periods of history.",
    },
  ],
  '2 Kings:18': [
    {
      verse_start: 4,
      verse_end: 4,
      topic: "Destroying the bronze serpent (Nehushtan)",
      plain_language: "Moses had made this bronze serpent in Numbers 21 at God's direct instruction — people who looked at it were healed from snake bites. Hundreds of years later, Israel was burning incense to it. Hezekiah destroyed it and called it 'Nehushtan' (just a piece of bronze). A legitimate God-given object had become a false god.",
      theological_context: "Religious objects can become idols when they become the focus of devotion rather than pointers to God. This passage is a warning about how easily memory and tradition calcify into idolatry. The church has repeatedly wrestled with this pattern: relics, statues, traditions, and institutions that begin as means of grace and become objects of worship.",
    },
    {
      verse_start: 19,
      verse_end: 25,
      topic: "The Rabshakeh's sophisticated propaganda",
      plain_language: "The Rabshakeh's speech is not crude intimidation — it's careful theological argument. He argues that Hezekiah's religious reform angered the LORD (verse 22), that Egypt is a broken reed (verse 21), and even that the LORD himself sent Assyria (verse 25). He's using Israel's own theology against her.",
      theological_context: "Spiritual warfare often looks like theological confusion, not obvious evil. The enemy rarely says 'ignore God' — he says 'God is against you' or 'you've misunderstood God's will.' Hezekiah's response (go to the temple, spread it before God, ask Isaiah) is the biblical model: don't debate the enemy; bring the problem to God and his word.",
    },
    {
      verse_start: 36,
      verse_end: 37,
      topic: "Silence as obedience",
      plain_language: "The people heard the Rabshakeh's terrifying speech and said nothing. The text explains: the king commanded them not to answer. This was extraordinarily difficult — the natural response to such a speech would be panic, argument, or despair. Their silence was an act of trust in Hezekiah's leadership and ultimately in God.",
      theological_context: "Silence before enemies is a recurring biblical posture of faith. Psalm 46:10 — 'Be still and know that I am God.' Exodus 14:14 — 'The LORD will fight for you; you need only to be still.' The discipline of not responding to every attack is a spiritual practice, not a passive retreat.",
    },
  ],
  '2 Kings:19': [
    {
      verse_start: 14,
      verse_end: 19,
      topic: "Hezekiah spreading the letter before God",
      plain_language: "Hezekiah takes Sennacherib's threatening letter into the temple and lays it open before God. He doesn't hide the threat, minimize it, or immediately go into solution mode. He brings the literal problem into the literal presence of God. This is a model of honest, practical prayer.",
      theological_context: "The temple represented God's dwelling place — the place where heaven met earth. By spreading the letter there, Hezekiah was in effect saying: 'This is your problem now, LORD, and here is the evidence.' His prayer (verses 15-19) is one of the great prayers of the Old Testament: it acknowledges who God is, what the enemy has done, and asks for vindication not for Judah's sake but for God's reputation among the nations.",
    },
    {
      verse_start: 35,
      verse_end: 35,
      topic: "185,000 Assyrians die in a single night",
      plain_language: "No explanation is given for how 185,000 soldiers died — disease, a divine being, a meteorological event. The text uses the passive 'were dead bodies' — emphasizing the outcome, not the mechanism. Historically, Sennacherib never explains his retreat from Jerusalem in his own records, which itself is significant.",
      theological_context: "This is one of the most dramatic divine interventions in the Old Testament. The angel of the LORD earlier appears as a divine warrior (Exodus 12, 2 Samuel 24). The event confirms Isaiah's specific prophecy (2 Kings 19:32-34) that Jerusalem would be defended without a single arrow being shot. It also echoes the Exodus — God defeating a superpower to protect his people.",
    },
    {
      verse_start: 37,
      verse_end: 37,
      topic: "Sennacherib murdered by his own sons",
      plain_language: "Sennacherib was killed while worshipping in the temple of Nisroch — his own god. The irony is pointed: Rabshakeh argued the LORD could not save Jerusalem; Sennacherib died in his own god's temple. The gods of Assyria could not protect Sennacherib any more than Baal protected Israel.",
      theological_context: "Isaiah's prophecy (2 Kings 19:7) was that Sennacherib would fall by the sword in his own land — fulfilled completely. This fulfillment pattern is crucial to Kings' theology: God's word through his prophets always comes to pass. The reader is meant to count the prophecy-fulfillments and develop confidence in the trustworthiness of prophetic speech.",
    },
  ],
  '2 Kings:20': [
    {
      verse_start: 1,
      verse_end: 3,
      topic: "God changes his mind — how is this possible?",
      plain_language: "God tells Hezekiah he will die; then when Hezekiah prays, God adds fifteen years. Did God change his mind? Yes — in a sense. The initial word was a warning, not an irrevocable decree. Scripture consistently shows God responding to genuine prayer and repentance. This is not God being fickle; it's God being relational.",
      theological_context: "Theologians call this 'divine relenting' or 'conditional prophecy.' Jeremiah 18:7-10 describes the pattern: if God announces disaster and the people turn, God will relent. The key is that Hezekiah's prayer was genuine — not bargaining, but honest appeal to relationship ('remember how I have walked before thee'). God's sovereignty includes the freedom to respond to prayer.",
    },
    {
      verse_start: 10,
      verse_end: 11,
      topic: "The sundial sign — what actually happened?",
      plain_language: "The shadow went back ten steps on the 'dial of Ahaz.' This is a staircase sundial — the shadow fell on the steps. Whether the earth's rotation reversed, light refracted unusually, or something else occurred, Scripture doesn't explain. What mattered was that Hezekiah saw it and believed.",
      theological_context: "Signs in Scripture are given to faith — they confirm and deepen faith already present, not create it from nothing. Hezekiah asked for a harder sign (verse 10 — backward is harder than forward) and received it. This is not demanding evidence before belief; it's asking for concrete confirmation after already submitting to God's word about his healing.",
    },
    {
      verse_start: 16,
      verse_end: 19,
      topic: "Hezekiah's chilling response to Isaiah's prophecy",
      plain_language: "Isaiah tells Hezekiah his descendants will be carried to Babylon. Hezekiah's response: 'Good — at least there will be peace in my days.' He is not thinking about his children or grandchildren; he is relieved the disaster won't happen while he lives. This is a profound moral failure — using 'it won't happen in my lifetime' as comfort.",
      theological_context: "Hezekiah's response reveals how even genuinely faithful people can be corrupted by success and longevity. After miraculous healing and military deliverance, he has become comfortable. His concern shrinks to personal safety. This contrast with his earlier prayer ('save us so all nations will know you are God') shows the spiritual erosion that can follow great blessing. It is one of Kings' most uncomfortable moments.",
    },
  ],
};

// ---------------------------------------------------------------------------
// Genealogy data
// ---------------------------------------------------------------------------

const dynastyColors: Record<string, string> = {
  David:    '#C9A84C',
  Omri:     '#F87171',
  Jehu:     '#60A5FA',
  Jeroboam: '#A78BFA',
  Baasha:   '#34D399',
  other:    'rgba(200,200,200,0.5)',
};

// Node definitions: name + optional kingdom hint to disambiguate duplicate names
const genealogyNodesData: { name: string; dynasty: string; notes: string; kingdom?: string }[] = [
  // Southern Kingdom — House of David
  { name: 'Rehoboam',   kingdom: 'south', dynasty: 'David', notes: 'First king of Judah after the split; refused to lighten the tax burden' },
  { name: 'Abijah',     kingdom: 'south', dynasty: 'David', notes: 'Son of Rehoboam; fought Jeroboam' },
  { name: 'Asa',        kingdom: 'south', dynasty: 'David', notes: 'Good king; reformed Judah; removed his mother from queen mother position' },
  { name: 'Jehoshaphat',kingdom: 'south', dynasty: 'David', notes: 'Allied with Ahab; good king but compromised' },
  { name: 'Jehoram',    kingdom: 'south', dynasty: 'David', notes: 'Married Athaliah daughter of Ahab; evil; killed his brothers' },
  { name: 'Ahaziah',    kingdom: 'south', dynasty: 'David', notes: 'Son of Jehoram and Athaliah; killed by Jehu' },
  { name: 'Athaliah',   kingdom: 'south', dynasty: 'Omri',  notes: "Daughter of Ahab; seized Judah's throne; killed all royal heirs except Joash; the only woman to rule Judah" },
  { name: 'Joash',      kingdom: 'south', dynasty: 'David', notes: 'Hidden in the temple for 6 years; installed by Jehoiada the priest; repaired the temple but later killed Zechariah the prophet' },
  { name: 'Amaziah',    kingdom: 'south', dynasty: 'David', notes: 'Defeated Edom; challenged Israel and was humiliated; killed by conspirators' },
  { name: 'Uzziah',     kingdom: 'south', dynasty: 'David', notes: 'Long 52-year reign; struck with leprosy for burning incense in the temple (reserved for priests)' },
  { name: 'Jotham',     kingdom: 'south', dynasty: 'David', notes: 'Good king; built the upper gate of the temple' },
  { name: 'Ahaz',       kingdom: 'south', dynasty: 'David', notes: 'Evil king; burned his son as an offering; brought Assyrian altar design to Jerusalem' },
  { name: 'Hezekiah',   kingdom: 'south', dynasty: 'David', notes: 'Most faithful king since David; removed high places; survived Assyrian siege; built the tunnel' },
  { name: 'Manasseh',   kingdom: 'south', dynasty: 'David', notes: 'Longest reign (55 years); most evil king of Judah; reversed all of Hezekiah\'s reforms' },
  { name: 'Amon',       kingdom: 'south', dynasty: 'David', notes: 'Son of Manasseh; evil; killed by his own servants' },
  { name: 'Josiah',     kingdom: 'south', dynasty: 'David', notes: 'Greatest reformer king; discovered the Book of the Law; died at Megiddo against Pharaoh Necho' },
  { name: 'Jehoahaz',   kingdom: 'south', dynasty: 'David', notes: 'Son of Josiah; taken to Egypt by Pharaoh Necho after 3 months' },
  { name: 'Jehoiakim',  kingdom: 'south', dynasty: 'David', notes: 'Installed by Pharaoh Necho; then submitted to Nebuchadnezzar; burned Jeremiah\'s scroll' },
  { name: 'Jehoiachin', kingdom: 'south', dynasty: 'David', notes: 'Surrendered to Nebuchadnezzar; taken to Babylon; eventually released and honored' },
  { name: 'Zedekiah',   kingdom: 'south', dynasty: 'David', notes: 'Last king of Judah; rebelled against Babylon; watched his sons killed; blinded; exiled' },

  // Northern Kingdom
  { name: 'Jeroboam I',  kingdom: 'north', dynasty: 'Jeroboam', notes: 'First king of northern Israel; set up golden calves at Bethel and Dan; "made Israel to sin"' },
  { name: 'Nadab',       kingdom: 'north', dynasty: 'Jeroboam', notes: 'Son of Jeroboam I; killed by Baasha' },
  { name: 'Baasha',      kingdom: 'north', dynasty: 'Baasha',   notes: 'Killed Nadab and destroyed all of Jeroboam\'s house; ruled 24 years' },
  { name: 'Elah',        kingdom: 'north', dynasty: 'Baasha',   notes: 'Son of Baasha; killed by Zimri while drunk' },
  { name: 'Zimri',       kingdom: 'north', dynasty: 'other',    notes: 'Commander who killed Elah; ruled 7 days; burned the palace around himself when besieged' },
  { name: 'Omri',        kingdom: 'north', dynasty: 'Omri',     notes: 'Founded Samaria; established a dynasty so powerful Assyria called Israel "the house of Omri" for a century' },
  { name: 'Ahab',        kingdom: 'north', dynasty: 'Omri',     notes: 'Married Jezebel; most evil northern king; confronted by Elijah; killed at Ramoth-Gilead' },
  { name: 'Ahaziah',     kingdom: 'north', dynasty: 'Omri',     notes: 'Son of Ahab; fell through a lattice; consulted Baal-Zebub; died of his injuries' },
  { name: 'Joram',       kingdom: 'north', dynasty: 'Omri',     notes: 'Son of Ahab; last of the Omri dynasty; killed by Jehu' },
  { name: 'Jehu',        kingdom: 'north', dynasty: 'Jehu',     notes: 'Anointed by a prophet to destroy the house of Ahab; killed Joram, Jezebel, Ahaziah of Judah, and 70 sons of Ahab' },
  { name: 'Jehoahaz',    kingdom: 'north', dynasty: 'Jehu',     notes: 'Son of Jehu; oppressed by Aram; God gave a deliverer' },
  { name: 'Jehoash',     kingdom: 'north', dynasty: 'Jehu',     notes: 'Son of Jehoahaz; defeated Aram three times as Elisha prophesied; defeated Amaziah of Judah' },
  { name: 'Jeroboam II', kingdom: 'north', dynasty: 'Jehu',     notes: 'Son of Jehoash; longest northern reign (41 years); restored territory but continued Jeroboam I\'s sins' },
  { name: 'Zechariah',   kingdom: 'north', dynasty: 'Jehu',     notes: 'Son of Jeroboam II; last of the Jehu dynasty; killed by Shallum after 6 months' },
  { name: 'Shallum',     kingdom: 'north', dynasty: 'other',    notes: 'Killed Zechariah; ruled 1 month; killed by Menahem' },
  { name: 'Menahem',     kingdom: 'north', dynasty: 'other',    notes: 'Brutal ruler; paid Assyria 1,000 talents of silver tribute; ruled 10 years' },
  { name: 'Pekahiah',    kingdom: 'north', dynasty: 'other',    notes: 'Son of Menahem; killed by Pekah' },
  { name: 'Pekah',       kingdom: 'north', dynasty: 'other',    notes: 'Allied with Aram against Judah; Assyria took northern territories under him; killed by Hoshea' },
  { name: 'Hoshea',      kingdom: 'north', dynasty: 'other',    notes: 'Last king of northern Israel; betrayed Assyria by seeking Egyptian help; Samaria fell after a 3-year siege in 722 BC' },

  // Prophets (independent nodes)
  { name: 'Elijah',  dynasty: 'other', notes: 'Greatest prophet of the northern kingdom; confronted Ahab and Jezebel; fed by ravens; heard the still small voice' },
  { name: 'Elisha',  dynasty: 'other', notes: 'Successor to Elijah; performed more miracles than any other prophet; anointed kings of Israel and Aram' },
  { name: 'Isaiah',  dynasty: 'other', notes: 'Prophet in Jerusalem; advised Hezekiah during the Assyrian crisis; wrote the longest prophetic book in the Bible' },
  { name: 'Jezebel', kingdom: 'foreign', dynasty: 'Omri', notes: 'Phoenician princess; wife of Ahab; drove systematic Baal worship in Israel; killed by Jehu' },
];

// Edge definitions: parent_name → child_name, type
const genealogyEdgesData = [
  // House of David succession
  { parent: 'Rehoboam',   child: 'Abijah',     type: 'biological' as const },
  { parent: 'Abijah',     child: 'Asa',         type: 'biological' as const },
  { parent: 'Asa',        child: 'Jehoshaphat', type: 'biological' as const },
  { parent: 'Jehoshaphat',child: 'Jehoram',     type: 'biological' as const },
  { parent: 'Jehoram',    child: 'Ahaziah',     type: 'biological' as const }, // south Ahaziah
  { parent: 'Ahaziah',    child: 'Joash',       type: 'biological' as const }, // south (Joash was hidden)
  { parent: 'Joash',      child: 'Amaziah',     type: 'biological' as const },
  { parent: 'Amaziah',    child: 'Uzziah',      type: 'biological' as const },
  { parent: 'Uzziah',     child: 'Jotham',      type: 'biological' as const },
  { parent: 'Jotham',     child: 'Ahaz',        type: 'biological' as const },
  { parent: 'Ahaz',       child: 'Hezekiah',    type: 'biological' as const },
  { parent: 'Hezekiah',   child: 'Manasseh',    type: 'biological' as const },
  { parent: 'Manasseh',   child: 'Amon',        type: 'biological' as const },
  { parent: 'Amon',       child: 'Josiah',      type: 'biological' as const },
  { parent: 'Josiah',     child: 'Jehoahaz',    type: 'biological' as const }, // south
  { parent: 'Josiah',     child: 'Jehoiakim',   type: 'biological' as const },
  { parent: 'Jehoiakim',  child: 'Jehoiachin',  type: 'biological' as const },
  { parent: 'Josiah',     child: 'Zedekiah',    type: 'biological' as const },

  // Athaliah cross-kingdom connection
  { parent: 'Ahab:north',    child: 'Athaliah:south',  type: 'biological' as const, notes: 'Daughter of Ahab (or Omri)' },
  { parent: 'Athaliah:south',child: 'Jehoram:south',   type: 'marriage' as const,   notes: 'Athaliah married Jehoram of Judah' },
  { parent: 'Jezebel:foreign',child: 'Athaliah:south', type: 'biological' as const, notes: 'Mother of Athaliah' },

  // Omri dynasty
  { parent: 'Omri:north',   child: 'Ahab:north',     type: 'biological' as const },
  { parent: 'Ahab:north',   child: 'Ahaziah:north',  type: 'biological' as const },
  { parent: 'Ahab:north',   child: 'Joram:north',    type: 'biological' as const },

  // Jehu dynasty
  { parent: 'Jehu:north',     child: 'Jehoahaz:north',  type: 'biological' as const },
  { parent: 'Jehoahaz:north', child: 'Jehoash:north',   type: 'biological' as const },
  { parent: 'Jehoash',  child: 'Jeroboam II', type: 'biological' as const },
  { parent: 'Jeroboam II', child: 'Zechariah', type: 'biological' as const },

  // Jeroboam dynasty
  { parent: 'Jeroboam I', child: 'Nadab', type: 'biological' as const },

  // Baasha dynasty
  { parent: 'Baasha', child: 'Elah', type: 'biological' as const },

  // Menahem
  { parent: 'Menahem', child: 'Pekahiah', type: 'biological' as const },

  // Elijah → Elisha (prophetic succession, not biological)
  { parent: 'Elijah', child: 'Elisha', type: 'political' as const, notes: 'Prophetic succession — Elijah cast his mantle on Elisha' },

  // Jezebel + Ahab (marriage)
  { parent: 'Jezebel:foreign', child: 'Ahab:north', type: 'marriage' as const, notes: 'Jezebel married Ahab of Israel' },
];

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log('=== Seeding Phase 3: quiz, passages, genealogy ===\n');

  // ---- Get chapter IDs ----
  console.log('Fetching chapter IDs...');
  const { data: books } = await supabase.from('books').select('id, name');
  const bookIdByName: Record<string, string> = {};
  for (const b of (books ?? [])) bookIdByName[b.name] = b.id;

  const { data: chapters } = await supabase
    .from('chapters')
    .select('id, chapter_number, book_id');

  const chapterIdByKey: Record<string, string> = {};
  for (const ch of (chapters ?? [])) {
    const bookName = Object.entries(bookIdByName).find(([, id]) => id === ch.book_id)?.[0];
    if (bookName) chapterIdByKey[`${bookName}:${ch.chapter_number}`] = ch.id;
  }

  // ---- A. Quiz questions ----
  console.log('\nSeeding quiz questions...');
  let totalQuiz = 0;
  for (const [key, questions] of Object.entries(quizData)) {
    const chapterId = chapterIdByKey[key];
    if (!chapterId) { console.log(`  Skipping ${key} — chapter not found`); continue; }

    // Check existing
    const { data: existing } = await supabase
      .from('quiz_questions')
      .select('question')
      .eq('chapter_id', chapterId);
    const existingSet = new Set((existing ?? []).map((q: { question: string }) => q.question));
    const toInsert = questions
      .filter(q => !existingSet.has(q.question))
      .map(q => ({ ...q, chapter_id: chapterId }));

    if (toInsert.length > 0) {
      check(await supabase.from('quiz_questions').insert(toInsert).select('id'));
      totalQuiz += toInsert.length;
    }
    console.log(`  ${key}: ${questions.length} questions (${toInsert.length} new)`);
  }
  console.log(`  Total: ${totalQuiz} new quiz questions inserted.`);

  // ---- B. Difficult passages ----
  console.log('\nSeeding difficult passages...');
  let totalPassages = 0;
  for (const [key, passages] of Object.entries(passagesData)) {
    const chapterId = chapterIdByKey[key];
    if (!chapterId) { console.log(`  Skipping ${key} — chapter not found`); continue; }

    const { data: existing } = await supabase
      .from('difficult_passages')
      .select('verse_start, topic')
      .eq('chapter_id', chapterId);
    const existingSet = new Set((existing ?? []).map((p: { verse_start: number; topic: string }) => `${p.verse_start}:${p.topic}`));
    const toInsert = passages
      .filter(p => !existingSet.has(`${p.verse_start}:${p.topic}`))
      .map(p => ({ ...p, chapter_id: chapterId }));

    if (toInsert.length > 0) {
      check(await supabase.from('difficult_passages').insert(toInsert).select('id'));
      totalPassages += toInsert.length;
    }
    console.log(`  ${key}: ${passages.length} passages (${toInsert.length} new)`);
  }
  console.log(`  Total: ${totalPassages} new difficult passages inserted.`);

  // ---- C. Genealogy nodes ----
  console.log('\nSeeding genealogy nodes...');

  // Get all people by name
  const { data: allPeople } = await supabase.from('people').select('id, name, kingdom, type');
  const personByNameKingdom: Record<string, string> = {};
  const personByName: Record<string, string> = {};
  for (const p of (allPeople ?? [])) {
    personByName[p.name] = p.id;
    if (p.kingdom) personByNameKingdom[`${p.name}:${p.kingdom}`] = p.id;
  }

  // Check existing genealogy nodes
  const { data: existingNodes } = await supabase
    .from('genealogy_nodes')
    .select('id, person_id');
  const existingPersonIds = new Set((existingNodes ?? []).map((n: { person_id: string }) => n.person_id));

  // Disambiguate duplicate names: Ahaziah, Jehoahaz exist in both kingdoms
  const disambiguation: Record<string, string> = {
    'Ahaziah-south': 'Ahaziah:south',
    'Ahaziah-north': 'Ahaziah:north',
    'Jehoahaz-south': 'Jehoahaz:south',
    'Jehoahaz-north': 'Jehoahaz:north',
  };

  const nodesToInsert: { person_id: string; dynasty?: string; dynasty_color?: string; notes?: string }[] = [];
  const nodeByName: Record<string, string> = {}; // name → genealogy_node.id (for edges)

  for (const n of genealogyNodesData) {
    // Use kingdom hint if provided to disambiguate same-named people (Ahaziah, Jehoahaz)
    const personId = (n.kingdom ? personByNameKingdom[n.name + ':' + n.kingdom] : null) ??
                     personByName[n.name];
    if (!personId) {
      console.log(`  Warning: person not found for node: ${n.name} (kingdom: ${n.kingdom ?? 'any'})`);
      continue;
    }
    if (!existingPersonIds.has(personId)) {
      nodesToInsert.push({
        person_id: personId,
        dynasty: n.dynasty,
        dynasty_color: dynastyColors[n.dynasty] ?? dynastyColors.other,
        notes: n.notes,
      });
      existingPersonIds.add(personId); // prevent duplicates in this run
    }
  }

  let insertedNodes: { id: string; person_id: string }[] = existingNodes ?? [];
  if (nodesToInsert.length > 0) {
    const newNodes = check(await supabase.from('genealogy_nodes').insert(nodesToInsert).select('id, person_id'));
    insertedNodes = [...insertedNodes, ...newNodes];
  }
  console.log(`  ${insertedNodes.length} total genealogy nodes (${nodesToInsert.length} new)`);

  // Build node ID lookup by person_id
  const nodeIdByPersonId: Record<string, string> = {};
  for (const node of insertedNodes) nodeIdByPersonId[node.person_id] = node.id;

  // Build name+kingdom → node ID lookup (use kingdom hint for disambiguation)
  const nodeIdByName: Record<string, string> = {};
  for (const n of genealogyNodesData) {
    const personId = (n.kingdom ? personByNameKingdom[n.name + ':' + n.kingdom] : null) ??
                     personByName[n.name];
    if (personId && nodeIdByPersonId[personId]) {
      // Store both bare name and name:kingdom so edge lookup works
      nodeIdByName[n.name] = nodeIdByPersonId[personId]; // last write wins for bare name
      if (n.kingdom) nodeIdByName[`${n.name}:${n.kingdom}`] = nodeIdByPersonId[personId];
    }
  }

  // ---- D. Genealogy edges ----
  console.log('\nSeeding genealogy edges...');

  const { data: existingEdges } = await supabase
    .from('genealogy_edges')
    .select('parent_node_id, child_node_id');
  const existingEdgeSet = new Set(
    (existingEdges ?? []).map((e: { parent_node_id: string; child_node_id: string }) => `${e.parent_node_id}:${e.child_node_id}`)
  );

  const edgesToInsert: { parent_node_id: string; child_node_id: string; relationship_type: string; notes?: string }[] = [];
  let skipped = 0;

  for (const e of genealogyEdgesData) {
    // Try exact key first (handles 'Ahaziah:north' etc), then fall back to bare name
    const parentId = nodeIdByName[e.parent] ?? nodeIdByName[e.parent.split(':')[0]];
    const childId = nodeIdByName[e.child] ?? nodeIdByName[e.child.split(':')[0]];
    if (!parentId || !childId) {
      console.log(`  Warning: edge skipped — node not found: ${e.parent} → ${e.child}`);
      skipped++;
      continue;
    }
    const key = `${parentId}:${childId}`;
    if (!existingEdgeSet.has(key)) {
      edgesToInsert.push({
        parent_node_id: parentId,
        child_node_id: childId,
        relationship_type: e.type,
        notes: (e as { notes?: string }).notes,
      });
    }
  }

  if (edgesToInsert.length > 0) {
    check(await supabase.from('genealogy_edges').insert(edgesToInsert).select('id'));
  }
  console.log(`  ${edgesToInsert.length} new edges inserted (${skipped} skipped)`);

  console.log('\n=== Phase 3 seed complete! ===');
  console.log('Test at:');
  console.log('  http://localhost:3000/study/1-kings/18   (quiz + difficult passages)');
  console.log('  http://localhost:3000/genealogy           (dynasty web)');
}

main().catch(err => {
  console.error('Seed failed:', err);
  process.exit(1);
});
