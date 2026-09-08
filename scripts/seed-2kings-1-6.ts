// Run: npx tsx scripts/seed-2kings-1-6.ts
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
  '2 Kings:1': [
    {
      question: 'Why did King Ahaziah send messengers to Baal-zebub?',
      options: [
        'To offer tribute after a military victory',
        'To ask whether he would recover from his fall through the lattice',
        'To inquire about the weather for an upcoming battle',
        'To seek a wife for his son',
      ],
      correct_index: 1,
      explanation: 'In 2 Kings 1:2, Ahaziah fell through the lattice in his upper chamber and sent messengers to inquire of Baal-zebub, the god of Ekron, whether he would recover from his injury.',
    },
    {
      question: 'Where was Baal-zebub, the god Ahaziah consulted, located?',
      options: ['Samaria', 'Bethel', 'Ekron', 'Jericho'],
      correct_index: 2,
      explanation: 'According to 2 Kings 1:2, Baal-zebub was the god of Ekron, a Philistine city. Ahaziah sent messengers there rather than inquiring of the LORD.',
    },
    {
      question: 'How did the angel of the LORD instruct Elijah to respond to Ahaziah\'s messengers?',
      options: [
        'Go with them to the king\'s palace and speak the word there',
        'Write a letter to the king',
        'Rise and go up to meet the messengers and ask why they go to Baal-zebub',
        'Stay at the Jordan and wait for the king to come to him',
      ],
      correct_index: 2,
      explanation: 'In 2 Kings 1:3, the angel of the LORD told Elijah to "Arise, go up to meet the messengers of the king of Samaria, and say to them, \'Is it because there is no God in Israel that you are going to inquire of Baal-zebub?\'"',
    },
    {
      question: 'What was Elijah\'s message to Ahaziah through the intercepted messengers?',
      options: [
        'The king would recover if he fasted for seven days',
        'The king would not recover and would surely die',
        'The king must destroy the altar of Baal to be healed',
        'The king would recover but his kingdom would be divided',
      ],
      correct_index: 1,
      explanation: 'In 2 Kings 1:4, Elijah declared that because Ahaziah sent to Baal-zebub rather than inquiring of the LORD, he would not rise from the bed to which he had gone but would surely die.',
    },
    {
      question: 'How did Ahaziah recognize that the man who intercepted his messengers was Elijah the Tishbite?',
      options: [
        'His messengers described him as wearing a garment of hair with a leather belt',
        'They brought back a written letter signed by Elijah',
        'A prophet told the king who had spoken to the messengers',
        'Elijah appeared to the king in a vision that night',
      ],
      correct_index: 0,
      explanation: 'In 2 Kings 1:8, the messengers described the man as wearing a garment of hair with a leather belt around his waist, and Ahaziah said, "It is Elijah the Tishbite."',
    },
    {
      question: 'What happened to the first two companies of fifty soldiers Ahaziah sent to arrest Elijah?',
      options: [
        'They refused to arrest Elijah and returned empty-handed',
        'They were struck blind and wandered in the wilderness',
        'Fire came down from heaven and consumed them',
        'They fell into a ravine and perished',
      ],
      correct_index: 2,
      explanation: 'In 2 Kings 1:10 and 1:12, fire came down from heaven and consumed each of the first two companies of fifty soldiers and their captains when they came to arrest Elijah.',
    },
    {
      question: 'What did the captain of the third company of fifty do differently from the first two captains?',
      options: [
        'He came with a larger force of one hundred soldiers',
        'He fell on his knees before Elijah and pleaded for his life and the lives of his men',
        'He came alone without soldiers to negotiate',
        'He brought gifts of silver and gold from the king',
      ],
      correct_index: 1,
      explanation: 'In 2 Kings 1:13, the third captain fell on his knees before Elijah and begged him, "O man of God, please let my life and the life of these fifty servants of yours be precious in your sight."',
    },
    {
      question: 'Why did Elijah agree to go with the third captain to the king?',
      options: [
        'Elijah feared the size of the third army',
        'An angel of the LORD told Elijah to go down with him, not to be afraid',
        'Elijah had completed his prophetic mission and was ready to surrender',
        'The third captain offered Elijah a reward',
      ],
      correct_index: 1,
      explanation: 'In 2 Kings 1:15, the angel of the LORD said to Elijah, "Go down with him; do not be afraid of him." So Elijah arose and went down with the captain to the king.',
    },
    {
      question: 'What did Elijah tell Ahaziah when he appeared before him in person?',
      options: [
        'That the king should repent and he would recover',
        'The same message — because the king consulted Baal-zebub, he would not rise but would surely die',
        'That a new king would come from Judah to replace him',
        'That the king had three days to live',
      ],
      correct_index: 1,
      explanation: 'In 2 Kings 1:16, Elijah delivered the same message to Ahaziah face to face: because he sent to inquire of Baal-zebub and there was no God in Israel to inquire of, he would not rise from his bed but would surely die.',
    },
    {
      question: 'Who succeeded Ahaziah as king after he died?',
      options: ['His son Joash', 'His brother Jehoram', 'Jehoshaphat of Judah', 'Elisha'],
      correct_index: 1,
      explanation: 'In 2 Kings 1:17, Ahaziah died according to the word of the LORD. Because he had no son, Jehoram (his brother) became king in his place in the second year of Jehoram son of Jehoshaphat.',
    },
  ],

  '2 Kings:2': [
    {
      question: 'What were the sons of the prophets at Bethel and Jericho telling Elisha would happen that day?',
      options: [
        'That Elijah would perform a great miracle at the Jordan',
        'That the LORD would take Elijah from him that day',
        'That a foreign army would attack Israel',
        'That Elisha would be appointed king',
      ],
      correct_index: 1,
      explanation: 'In 2 Kings 2:3 and 2:5, the sons of the prophets at Bethel and Jericho both asked Elisha, "Do you know that today the LORD will take your master away from you?" Elisha replied that he knew it and to be quiet.',
    },
    {
      question: 'How many times did Elijah urge Elisha to stay behind before they crossed the Jordan?',
      options: ['Once', 'Twice', 'Three times', 'Four times'],
      correct_index: 2,
      explanation: 'Elijah urged Elisha to remain at Gilgal (2 Kings 2:2), at Bethel (2 Kings 2:4), and at Jericho (2 Kings 2:6) — three times — but each time Elisha refused to leave him.',
    },
    {
      question: 'How did Elijah part the Jordan River?',
      options: [
        'He raised his staff over the waters',
        'He rolled up his mantle and struck the water',
        'He prayed aloud and the waters receded',
        'He commanded the fifty sons of the prophets to shout',
      ],
      correct_index: 1,
      explanation: 'In 2 Kings 2:8, Elijah took his mantle, rolled it up, and struck the water. The water parted to the right and left, and the two of them crossed on dry ground.',
    },
    {
      question: 'What did Elisha ask of Elijah as a parting gift before Elijah was taken?',
      options: [
        'Elijah\'s mantle to wear as a sign of succession',
        'A double portion of Elijah\'s spirit',
        'The power to call down fire from heaven',
        'Long life and health for his ministry',
      ],
      correct_index: 1,
      explanation: 'In 2 Kings 2:9, Elisha asked, "Please let there be a double portion of your spirit on me." This was the request of a firstborn heir, reflecting the inheritance custom of receiving twice the portion of other heirs.',
    },
    {
      question: 'What condition did Elijah set for Elisha\'s request to be granted?',
      options: [
        'Elisha must fast for forty days',
        'Elisha must return and serve the king',
        'Elisha must see Elijah as he was taken from him',
        'Elisha must anoint the next king of Israel',
      ],
      correct_index: 2,
      explanation: 'In 2 Kings 2:10, Elijah said, "You have asked a hard thing; yet, if you see me as I am being taken from you, it shall be so for you, but if you do not see me, it shall not be so."',
    },
    {
      question: 'How was Elijah taken into heaven?',
      options: [
        'He ascended on a cloud of glory while Elisha watched',
        'A chariot of fire with horses of fire appeared, and Elijah went up by a whirlwind into heaven',
        'He walked into a pillar of cloud that carried him upward',
        'He was translated while crossing the Jordan a second time',
      ],
      correct_index: 1,
      explanation: 'In 2 Kings 2:11, a chariot of fire and horses of fire appeared and separated the two of them, and Elijah went up by a whirlwind into heaven.',
    },
    {
      question: 'What did Elisha do immediately after Elijah was taken?',
      options: [
        'He fell on his face and wept for seven days',
        'He tore his own clothes in two pieces and picked up Elijah\'s mantle',
        'He ran back to tell the sons of the prophets in Jericho',
        'He struck the Jordan and nothing happened at first',
      ],
      correct_index: 1,
      explanation: 'In 2 Kings 2:12-13, Elisha took hold of his own clothes and tore them in two pieces, then picked up the mantle of Elijah that had fallen from him.',
    },
    {
      question: 'What did Elisha do to heal the water supply of Jericho?',
      options: [
        'He prayed over the spring and poured oil into it',
        'He threw a new bowl of salt into the spring',
        'He commanded the people to dig new cisterns',
        'He struck the ground with Elijah\'s mantle',
      ],
      correct_index: 1,
      explanation: 'In 2 Kings 2:20-21, Elisha asked for a new bowl with salt in it, then threw the salt into the spring and declared the LORD had purified the water. The water has remained wholesome to this day.',
    },
    {
      question: 'What happened to the youths from Bethel who mocked Elisha by calling him "baldhead"?',
      options: [
        'They were struck dumb and could not speak',
        'Two she-bears came out of the woods and mauled forty-two of them',
        'They were swallowed by the earth',
        'A plague of locusts descended on their village',
      ],
      correct_index: 1,
      explanation: 'In 2 Kings 2:24, Elisha turned and cursed them in the name of the LORD, and two female bears came out of the woods and mauled forty-two of the youths.',
    },
    {
      question: 'How many men did the sons of the prophets send to search for Elijah after his translation?',
      options: ['Ten', 'Twenty-five', 'Fifty', 'One hundred'],
      correct_index: 2,
      explanation: 'In 2 Kings 2:17, the sons of the prophets urged Elisha until he was ashamed, and fifty strong men were sent to search for Elijah for three days, but they did not find him.',
    },
  ],

  '2 Kings:3': [
    {
      question: 'What sin did Jehoram son of Ahab commit, and what sin did he refrain from?',
      options: [
        'He built a temple to Baal but did not sacrifice children',
        'He removed the pillar of Baal his father had made but clung to the sin of Jeroboam son of Nebat',
        'He worshiped Asherah but tore down the high places',
        'He kept all the laws of Moses but ignored the Sabbath',
      ],
      correct_index: 1,
      explanation: 'In 2 Kings 3:2-3, Jehoram removed the pillar of Baal that his father Ahab had made, yet he clung to the sin of Jeroboam son of Nebat, which he made Israel to sin.',
    },
    {
      question: 'What tribute had Mesha king of Moab paid to Israel, and when did he rebel?',
      options: [
        '10,000 talents of silver; he rebelled when Ahab became king',
        '100,000 lambs and the wool of 100,000 rams; he rebelled after Ahab died',
        '50,000 bushels of grain; he rebelled after a great drought',
        '200 chariots and 10,000 foot soldiers; he rebelled when Elijah was taken',
      ],
      correct_index: 1,
      explanation: 'In 2 Kings 3:4-5, Mesha king of Moab had 100,000 lambs and the wool of 100,000 rams as tribute to Ahab, but after Ahab died, the king of Moab rebelled against the king of Israel.',
    },
    {
      question: 'Which kings joined Jehoram of Israel in the campaign against Moab?',
      options: [
        'Jehoshaphat of Judah and the king of Syria',
        'Jehoshaphat of Judah and the king of Edom',
        'The king of Philistia and the king of Edom',
        'The king of Ammon and the king of Edom',
      ],
      correct_index: 1,
      explanation: 'In 2 Kings 3:7-9, Jehoram enlisted Jehoshaphat king of Judah and the king of Edom for the campaign against Moab. The three kings went on a seven-day march through the wilderness of Edom.',
    },
    {
      question: 'Why did Elisha agree to speak a prophetic word even though Jehoram was present?',
      options: [
        'Because Jehoram repented of his sins before asking',
        'For the sake of Jehoshaphat king of Judah',
        'Because the LORD commanded him to speak regardless',
        'Because Elisha owed a debt of loyalty to Ahab\'s house',
      ],
      correct_index: 1,
      explanation: 'In 2 Kings 3:14, Elisha said, "As the LORD of hosts lives, before whom I stand, were it not that I have regard for Jehoshaphat the king of Judah, I would neither look at you nor see you."',
    },
    {
      question: 'What unusual method did Elisha use before prophesying to the three kings?',
      options: [
        'He fasted for a day and night before speaking',
        'He called for a musician to play, and the hand of the LORD came upon him',
        'He read from the scroll of the law for an hour',
        'He retreated into solitude for three days',
      ],
      correct_index: 1,
      explanation: 'In 2 Kings 3:15, Elisha said, "But now bring me a musician." And when the musician played, the hand of the LORD came upon Elisha and he delivered his prophecy.',
    },
    {
      question: 'What did Elisha prophesy the allied armies should do in the valley?',
      options: [
        'Build a great altar of thanksgiving to the LORD',
        'Make this valley full of ditches to be filled with water',
        'Dig trenches for defense against the Moabite attack',
        'Plant seed and trust God for a miraculous harvest',
      ],
      correct_index: 1,
      explanation: 'In 2 Kings 3:16, Elisha said, "Thus says the LORD, \'Make this valley full of trenches/ditches.\'" He then prophesied that they would see neither wind nor rain, yet the valley would be filled with water.',
    },
    {
      question: 'Why did the Moabites mistakenly rush into the Israelite camp?',
      options: [
        'They thought the camp was deserted because of a plague',
        'A spy told them the three kings had already fled',
        'They saw the water at sunrise and thought it looked like blood, concluding the kings had fought each other',
        'They were tricked by a false message of surrender',
      ],
      correct_index: 2,
      explanation: 'In 2 Kings 3:22-23, when the Moabites rose early and the sun shone on the water, it appeared as red as blood. They said the kings had surely struck each other and rushed to the Israelite camp to plunder.',
    },
    {
      question: 'What desperate act did the king of Moab perform at the city wall during the siege?',
      options: [
        'He burned all the grain stores to deny the Israelites supplies',
        'He offered his eldest son who would have reigned after him as a burnt offering on the wall',
        'He killed all the women and children so they would not be captured',
        'He sent a message to Elisha offering to worship the LORD',
      ],
      correct_index: 1,
      explanation: 'In 2 Kings 3:27, when the king of Moab saw the battle was going against him, he took his firstborn son who was to reign after him and offered him as a burnt offering on the wall.',
    },
    {
      question: 'What was the result of the king of Moab\'s sacrifice on the wall?',
      options: [
        'The Israelites pressed harder and took the city',
        'Great wrath came upon Israel, and they withdrew and returned home',
        'Elisha struck the army with blindness',
        'A plague broke out in the Israelite camp',
      ],
      correct_index: 1,
      explanation: 'In 2 Kings 3:27, after the king of Moab burned his son as an offering, there came great wrath against Israel, and they withdrew from him and returned to their own land.',
    },
    {
      question: 'What was the route the three allied kings took to attack Moab?',
      options: [
        'Through the land of the Philistines from the west',
        'Through the wilderness of Edom, going around',
        'Directly north through the Jordan Valley',
        'By sea from the port of Joppa',
      ],
      correct_index: 1,
      explanation: 'In 2 Kings 3:8-9, Jehoram asked which route they should take, and Jehoshaphat said, "The way through the wilderness of Edom." So the three kings went on a seven-day circuit through the wilderness of Edom.',
    },
  ],

  '2 Kings:4': [
    {
      question: 'What was the widow\'s desperate situation when she came to Elisha?',
      options: [
        'Her husband had been killed in battle and she had no land',
        'Her husband, one of the prophets\' disciples, had died leaving debts, and a creditor was coming to take her two sons as slaves',
        'She was starving with no food and had just one loaf of bread left',
        'Her sons were sick with a fatal disease and she had no money for physicians',
      ],
      correct_index: 1,
      explanation: 'In 2 Kings 4:1, the widow said her husband had died owing a debt, and the creditor was coming to take her two children as his slaves.',
    },
    {
      question: 'What did Elisha instruct the widow to do with the oil miracle?',
      options: [
        'Pour the oil on the altar and pray for seven days',
        'Borrow empty vessels from all her neighbors and pour oil into them until they were full, then sell the oil',
        'Give the oil to the sons of the prophets as an offering',
        'Use the oil to anoint her sons and they would be healed',
      ],
      correct_index: 1,
      explanation: 'In 2 Kings 4:3-7, Elisha told her to borrow vessels from all her neighbors, not too few, shut the door with her sons, pour oil into all the vessels, and sell the oil to pay her debt.',
    },
    {
      question: 'What did the Shunammite woman provide for Elisha as he traveled through Shunem?',
      options: [
        'A daily meal and ten silver pieces for his ministry',
        'A small room on the wall with a bed, table, chair, and lamp',
        'A tent in her field and servants to care for him',
        'A horse and provisions for his journeys',
      ],
      correct_index: 1,
      explanation: 'In 2 Kings 4:10, the Shunammite woman persuaded her husband to build a small room on the wall with a bed, table, chair, and lamp for Elisha whenever he passed by.',
    },
    {
      question: 'What did Elisha promise the Shunammite woman as a reward for her hospitality?',
      options: [
        'Her husband would be healed of his illness',
        'She would embrace a son by the same time the following year',
        'Her household would never lack food or water',
        'She would live to see her grandchildren',
      ],
      correct_index: 1,
      explanation: 'In 2 Kings 4:16, Elisha told her, "At this season, about this time next year, you shall embrace a son." She protested because her husband was old, but it came to pass as Elisha said.',
    },
    {
      question: 'How did the Shunammite\'s son die?',
      options: [
        'He drowned in a river while playing with other children',
        'He was killed by a wild animal in the fields',
        'He went to his father in the fields, complained of his head, was carried home, sat on his mother\'s lap, and died at noon',
        'He fell from a roof and was mortally injured',
      ],
      correct_index: 2,
      explanation: 'In 2 Kings 4:18-20, the boy went out to his father among the reapers, cried out "Oh, my head, my head!" was carried home, sat on his mother\'s lap until noon, and died.',
    },
    {
      question: 'What happened when Gehazi placed Elisha\'s staff on the face of the dead boy?',
      options: [
        'The boy immediately revived and sat up',
        'There was no sound or sign of life',
        'The boy\'s body became warm but he did not wake',
        'The staff glowed with light but the boy did not stir',
      ],
      correct_index: 1,
      explanation: 'In 2 Kings 4:31, Gehazi went ahead and laid the staff on the boy\'s face, but there was no sound or sign of life. He went back to meet Elisha and told him the child had not awoken.',
    },
    {
      question: 'What did Elisha do to revive the Shunammite\'s dead son?',
      options: [
        'He prayed over the boy once and the boy immediately revived',
        'He prayed to the LORD, lay on the boy twice — stretched himself on him — and the boy sneezed seven times and opened his eyes',
        'He anointed the boy with oil and read from the scroll of Moses',
        'He commanded the boy to rise in the name of the LORD three times',
      ],
      correct_index: 1,
      explanation: 'In 2 Kings 4:33-35, Elisha prayed, lay on the child twice, and the child sneezed seven times and opened his eyes. This parallels Elijah\'s raising of the widow\'s son in 1 Kings 17.',
    },
    {
      question: 'What was wrong with the pot of stew at Gilgal, and how did Elisha fix it?',
      options: [
        'It was full of worms; Elisha commanded them to leave',
        'One of the sons of the prophets had added wild gourds (which were poisonous); Elisha threw flour in and said "serve the people"',
        'A dead rat had fallen in; Elisha removed it and prayed over the pot',
        'There was not enough salt; Elisha multiplied the salt miraculously',
      ],
      correct_index: 1,
      explanation: 'In 2 Kings 4:38-41, a man gathered wild gourds (probably colocynth, a bitter and potentially toxic plant) and put them in the stew. When the men cried out "there is death in the pot," Elisha threw in flour and the stew became harmless.',
    },
    {
      question: 'How many men did twenty loaves of barley bread and fresh grain feed at Gilgal?',
      options: ['Twenty men', 'Fifty men', 'One hundred men, with some left over', 'Seventy men exactly'],
      correct_index: 2,
      explanation: 'In 2 Kings 4:42-44, a man brought twenty loaves of barley and fresh grain. Elisha said to give it to the people to eat, and it fed one hundred men with some left over, according to the word of the LORD.',
    },
    {
      question: 'What did the Shunammite woman say to Elisha when he asked if all was well?',
      options: [
        'She wept bitterly and told him of her son\'s death immediately',
        'She said it was well, then fell at his feet; Gehazi tried to push her away but Elisha allowed her to speak',
        'She demanded to know why God had afflicted her after giving her a son',
        'She said nothing and silently led Elisha to the boy\'s room',
      ],
      correct_index: 1,
      explanation: 'In 2 Kings 4:26-27, she said "It is well" (shalom) to the inquiry about herself, her husband, and the child, but when she reached Elisha she fell at his feet. Gehazi tried to push her away but Elisha stopped him, recognizing her bitter distress.',
    },
  ],

  '2 Kings:5': [
    {
      question: 'Who was Naaman, and what problem did he have?',
      options: [
        'A merchant from Damascus who was blind from birth',
        'Commander of the army of the king of Aram, a great and mighty man — but he was a leper',
        'A judge in Israel who had become unclean from contact with the dead',
        'A priest of Baal who was stricken with disease as divine judgment',
      ],
      correct_index: 1,
      explanation: 'In 2 Kings 5:1, Naaman was commander of the army of the king of Aram, a great man with his master and in high favor — a mighty man of valor — but he was a leper.',
    },
    {
      question: 'Who first told Naaman\'s wife about the prophet in Israel who could cure him?',
      options: [
        'A traveling merchant from Samaria',
        'A small Israelite girl who served Naaman\'s wife as a captive slave',
        'A letter from the king of Israel',
        'One of the sons of the prophets in Damascus',
      ],
      correct_index: 1,
      explanation: 'In 2 Kings 5:2-3, a small girl from Israel had been taken captive and served Naaman\'s wife. She told her mistress that she wished Naaman could go to the prophet in Samaria, for he would cure him.',
    },
    {
      question: 'How did the king of Israel react to the letter from the king of Aram requesting Naaman\'s healing?',
      options: [
        'He immediately sent for Elisha to come to the palace',
        'He tore his clothes and asked, "Am I God, to kill and to make alive, that this man sends word to me to cure a man of his leprosy?"',
        'He sent Naaman away without receiving him',
        'He accused Aram of seeking a pretext for war',
      ],
      correct_index: 1,
      explanation: 'In 2 Kings 5:7, when the king of Israel read the letter he tore his clothes and said, "Am I God, to kill and to make alive, that this man sends word to me to cure a man of his leprosy? Consider and see how he is seeking a quarrel with me."',
    },
    {
      question: 'How did Elisha greet Naaman when he arrived at his door with horses and chariots?',
      options: [
        'He came out and greeted him warmly with an embrace',
        'He sent a messenger to Naaman saying he should go wash in the Jordan seven times',
        'He looked at Naaman\'s skin and prescribed a regimen of prayer and oil',
        'He invited Naaman inside for a meal before speaking of the cure',
      ],
      correct_index: 1,
      explanation: 'In 2 Kings 5:10, Elisha did not come out to meet Naaman but sent a messenger who said, "Go and wash in the Jordan seven times, and your flesh shall be restored, and you shall be clean."',
    },
    {
      question: 'Why was Naaman initially angry at Elisha\'s instructions?',
      options: [
        'He expected to pay money and the prophet had refused his gifts',
        'He thought he was required to convert to Israelite religion',
        'He expected the prophet to come out, call on God, and wave his hand, and the Jordan was inferior to the rivers of Damascus',
        'He believed the instruction was impossible since lepers were forbidden to enter the Jordan',
      ],
      correct_index: 2,
      explanation: 'In 2 Kings 5:11-12, Naaman was angry because he had expected Elisha to come out and call on his God and wave his hand over the spot. He also asked, "Are not Abana and Pharpar, the rivers of Damascus, better than all the waters of Israel?"',
    },
    {
      question: 'What did Naaman\'s servants say to persuade him to follow Elisha\'s instructions?',
      options: [
        'They reminded him that the king of Aram himself had sent him to be healed',
        'They said that if the prophet had commanded a difficult thing he would have done it, so how much more when he says simply wash and be clean',
        'They warned him that insulting an Israelite prophet could cause an international incident',
        'They pointed out that he had already come this far and should not return without trying',
      ],
      correct_index: 1,
      explanation: 'In 2 Kings 5:13, his servants said, "My father, it is a great word the prophet has spoken to you; will you not do it? He only said to you, \'Wash and be clean.\'"',
    },
    {
      question: 'After being healed, what did Naaman vow before departing to return home?',
      options: [
        'He vowed to build a temple to the LORD in Damascus',
        'He vowed he would offer sacrifice to no other god but the LORD and asked for two mule-loads of Israelite soil',
        'He vowed to free all Israelite slaves in Aram',
        'He vowed to stop all military campaigns against Israel',
      ],
      correct_index: 1,
      explanation: 'In 2 Kings 5:17, Naaman said, "Your servant will not offer burnt offering or sacrifice to any god but the LORD." He asked for two mule-loads of earth, apparently to have holy ground on which to worship.',
    },
    {
      question: 'What did Gehazi do after Elisha refused Naaman\'s gifts?',
      options: [
        'He complained to Elisha that it was wrong to refuse such generous gifts',
        'He ran after Naaman and falsely said Elisha had changed his mind and needed a talent of silver and two changes of clothing for two young prophets',
        'He accepted a personal gift from Naaman\'s servants without Elisha\'s knowledge',
        'He wrote a letter to Naaman requesting payment for the miracle',
      ],
      correct_index: 1,
      explanation: 'In 2 Kings 5:22, Gehazi ran after Naaman and lied, saying, "My master has sent me to say, \'There have just now come to me from the hill country of Ephraim two young men of the sons of the prophets. Please give them a talent of silver and two festal garments.\'"',
    },
    {
      question: 'How did Elisha know what Gehazi had done?',
      options: [
        'A witness from Naaman\'s party returned and told him',
        'An angel appeared to Elisha and revealed it',
        'Elisha said his spirit had gone with Gehazi and he had seen what happened',
        'Gehazi confessed when questioned about his whereabouts',
      ],
      correct_index: 2,
      explanation: 'In 2 Kings 5:26, Elisha said to Gehazi, "Did not my heart go when the man turned from his chariot to meet you?" — indicating prophetic knowledge of what had occurred.',
    },
    {
      question: 'What was Gehazi\'s punishment for his deceit?',
      options: [
        'He was expelled from the company of the prophets',
        'He was imprisoned until he returned all the goods he had taken',
        'The leprosy of Naaman would cling to him and to his descendants forever',
        'He was struck dumb and could not speak for a year',
      ],
      correct_index: 2,
      explanation: 'In 2 Kings 5:27, Elisha declared, "Therefore the leprosy of Naaman shall cling to you and to your descendants forever." And Gehazi went out leprous, like snow.',
    },
  ],

  '2 Kings:6': [
    {
      question: 'What problem prompted the sons of the prophets to ask Elisha about going to the Jordan?',
      options: [
        'Their community had run out of food and needed to farm near the river',
        'The place where they lived with Elisha was too small, and they wanted to build a larger dwelling by the Jordan',
        'They needed to baptize new members in the Jordan',
        'They wanted to establish a new prophetic school near the Jordan',
      ],
      correct_index: 1,
      explanation: 'In 2 Kings 6:1-2, the sons of the prophets said to Elisha, "See, the place where we dwell under your charge is too small for us. Let us go to the Jordan and each of us get there a log, and let us make a place for us to dwell there."',
    },
    {
      question: 'What happened to the iron axe head while one of the men was cutting down a tree?',
      options: [
        'It broke in two from a knot in the wood',
        'It flew off the handle and sank in the Jordan',
        'It was stolen by a passing stranger',
        'It became too hot to hold from use',
      ],
      correct_index: 1,
      explanation: 'In 2 Kings 6:5, as one man was felling a log, the iron axe head fell into the water. He cried out in distress because it was borrowed.',
    },
    {
      question: 'How did Elisha recover the sunken iron axe head?',
      options: [
        'He prayed over the water and drained the river',
        'He cut a stick and threw it in at the place where the iron had sunk, and the iron floated',
        'He commanded a fish to bring it up in its mouth',
        'He reached into the water and his hand was guided to it',
      ],
      correct_index: 1,
      explanation: 'In 2 Kings 6:6, Elisha cut a stick and threw it into the water at the place where the iron had sunk, and the iron floated to the surface. He told the man to take it up.',
    },
    {
      question: 'How was Elisha able to warn the king of Israel repeatedly about Aramean ambush plans?',
      options: [
        'He had planted spies in the Aramean camp who reported to him',
        'He received prophetic knowledge of the king of Aram\'s secret plans and warned the king of Israel',
        'Captured Aramean soldiers confessed their plans to him',
        'He intercepted letters from the Aramean commanders',
      ],
      correct_index: 1,
      explanation: 'In 2 Kings 6:12, one of the Aramean king\'s servants explained that Elisha the prophet in Israel told the king of Israel the words that the Aramean king spoke in his bedroom — showing prophetic supernatural knowledge.',
    },
    {
      question: 'What did the king of Aram do when he discovered Elisha was in Dothan?',
      options: [
        'He sent a diplomatic envoy to negotiate with Elisha',
        'He sent horses, chariots, and a great army to surround the city of Dothan by night',
        'He announced a reward for Elisha\'s capture throughout the land',
        'He sent Naaman to ask Elisha to stop helping Israel',
      ],
      correct_index: 1,
      explanation: 'In 2 Kings 6:14, the king of Aram sent horses and chariots and a great army, and they came by night and surrounded the city of Dothan where Elisha was staying.',
    },
    {
      question: 'What did Elisha\'s servant see after Elisha prayed for his eyes to be opened?',
      options: [
        'Angels standing guard at the gates of the city',
        'The mountain full of horses and chariots of fire all around Elisha',
        'A pillar of cloud shielding Elisha from the Aramean army',
        'The Aramean army retreating in fear',
      ],
      correct_index: 1,
      explanation: 'In 2 Kings 6:17, after Elisha prayed, the LORD opened the servant\'s eyes, and he saw the mountain was full of horses and chariots of fire all around Elisha.',
    },
    {
      question: 'What did Elisha do to the Aramean army that surrounded Dothan?',
      options: [
        'He called fire from heaven to destroy them',
        'He prayed that the LORD would strike them with blindness, then led them to Samaria',
        'He commanded them to throw down their weapons and return home',
        'He sent word to the king of Israel to attack them from the rear',
      ],
      correct_index: 1,
      explanation: 'In 2 Kings 6:18-20, Elisha prayed for them to be struck with blindness, then led the blinded army to Samaria, where the LORD opened their eyes and they found themselves inside the city.',
    },
    {
      question: 'What did Elisha instruct the king of Israel to do with the blinded Aramean soldiers once they were in Samaria?',
      options: [
        'Execute them as a warning to the Aramean king',
        'Imprison them as hostages to stop future raids',
        'Set bread and water before them so they could eat and drink, then send them home to their master',
        'Release them at the border with a message of peace',
      ],
      correct_index: 2,
      explanation: 'In 2 Kings 6:22-23, Elisha said not to kill them — the king had not captured them with his own sword — but rather to set food and water before them to eat and drink, then send them to their master. They did so, and Aramean raiders no longer came into the land.',
    },
    {
      question: 'How severe was the famine in Samaria during the Aramean siege?',
      options: [
        'Grain was scarce but no one had yet gone hungry',
        'A donkey\'s head was sold for eighty pieces of silver, and a quarter kab of dove\'s dung for five pieces of silver',
        'Water was the only shortage; food was still available from storehouses',
        'The army had food but the common people had none',
      ],
      correct_index: 1,
      explanation: 'In 2 Kings 6:25, the famine was so severe that a donkey\'s head sold for eighty shekels of silver and a quarter kab of dove\'s dung for five shekels of silver.',
    },
    {
      question: 'What horrific situation did the king of Israel encounter that grieved him deeply during the siege?',
      options: [
        'A mother showing him that she and another woman had agreed to boil and eat their children, and it was now the second woman\'s turn but she had hidden her son',
        'Dead bodies lying unburied in the streets of Samaria',
        'His own army deserting to the Aramean side for food',
        'The temple of the LORD being looted for food',
      ],
      correct_index: 0,
      explanation: 'In 2 Kings 6:28-29, a woman cried out to the king that she and another woman had agreed to cook and eat her son one day and the other\'s son the next day, but now the other woman had hidden her son. This shocked and grieved the king deeply.',
    },
  ],
};

const passagesData: Record<string, { verse_start: number; verse_end: number; topic: string; plain_language: string; theological_context: string }[]> = {
  '2 Kings:1': [
    {
      verse_start: 1,
      verse_end: 4,
      topic: 'Ahaziah consults Baal-zebub instead of the LORD',
      plain_language: 'King Ahaziah of Israel is injured after falling through a lattice window. Instead of praying to the God of Israel, he sends messengers to consult Baal-zebub — a foreign god in the Philistine city of Ekron — to find out if he will recover. The angel of the LORD tells Elijah to intercept the messengers and deliver a message of judgment: because Ahaziah looked to a false god, he will die.',
      theological_context: 'This passage illustrates the covenant demand for exclusive loyalty to the LORD. Consulting a pagan deity was not merely superstition — it was apostasy, a rejection of the living God in favor of an idol. Elijah\'s question, "Is it because there is no God in Israel?" echoes the covenant critique throughout the Deuteronomistic history. Ahaziah\'s death is direct consequence of his spiritual unfaithfulness, a pattern established in Deuteronomy 28 where covenant violation brings judgment.',
    },
    {
      verse_start: 9,
      verse_end: 15,
      topic: 'Fire from heaven and the humble captain',
      plain_language: 'Ahaziah sends three groups of fifty soldiers to arrest Elijah. Fire from heaven consumes the first two groups when their captains speak arrogantly: "Man of God, the king says come down!" The third captain kneels humbly and pleads for his life. The angel of the LORD tells Elijah to go with him without fear, showing that humility changes the outcome.',
      theological_context: 'The fire from heaven demonstrates that Elijah acts under divine authority — he cannot be summoned like a servant by a king who has already rejected God. The contrast between the first two captains\' commanding tone and the third captain\'s humble posture is theologically significant: it is an early illustration of James 4:6, "God opposes the proud but gives grace to the humble." The episode also presents Elijah as a new Moses figure, calling down divine fire as at Horeb, defending the honor of the covenant LORD against royal contempt.',
    },
    {
      verse_start: 17,
      verse_end: 18,
      topic: 'Death of Ahaziah and the transition to Jehoram',
      plain_language: 'Ahaziah dies exactly as Elijah predicted, and because he has no son, his brother Jehoram becomes king. The narrator notes this fulfilled the word of the LORD that Elijah had spoken. The regnal summary closes the Ahaziah account and opens the era of Jehoram.',
      theological_context: 'The brief, matter-of-fact conclusion — "he died according to the word of the LORD" — underscores a key theological theme of Kings: the word of the prophet is the word of God, and it never returns void (cf. Isaiah 55:11). Royal power cannot override prophetic pronouncement. Ahaziah\'s lack of a son is not incidental; in the ancient Near East, dying childless was a mark of divine disfavor. The succession to Jehoram sets the stage for the next narrative, preserving continuity in an era of continued spiritual decline.',
    },
  ],

  '2 Kings:2': [
    {
      verse_start: 9,
      verse_end: 12,
      topic: 'Elijah\'s translation and the double portion request',
      plain_language: 'Just before Elijah is taken, he offers Elisha one parting gift. Elisha asks for a double portion of Elijah\'s spirit — the inheritance share of a firstborn son. Elijah says only God can grant this: if Elisha sees Elijah being taken, it will be granted. Chariots and horses of fire appear, separating them, and Elijah goes up in a whirlwind. Elisha tears his own clothes and cries "My father, my father! The chariots of Israel and its horsemen!"',
      theological_context: 'The "double portion" request invokes the Mosaic inheritance law (Deuteronomy 21:17), presenting Elisha as the spiritual firstborn heir of the prophetic tradition. The phrase "chariots of Israel and its horsemen" is deeply significant: it appears again at Elisha\'s own death (2 Kings 13:14), suggesting that the true defense of Israel was not military might but prophetic intercession. Elijah\'s translation without death parallels Enoch (Genesis 5:24) and is unique in the Hebrew scriptures — pointing to God\'s direct vindication of his faithful servant.',
    },
    {
      verse_start: 19,
      verse_end: 22,
      topic: 'Healing the waters of Jericho',
      plain_language: 'The men of Jericho tell Elisha the city is well situated but the water is bad and the land causes miscarriages. Elisha calls for a new bowl with salt, throws the salt into the spring, and declares in the name of the LORD that the water is healed. The text affirms the water has remained wholesome ever since.',
      theological_context: 'This is Elisha\'s first public miracle — and it is a miracle of healing and restoration. Salt in ancient Israel was associated with covenant (Leviticus 2:13; Numbers 18:19), purity, and preservation. Throwing salt into a spring to heal it is symbolically rich: the new covenant work of the prophet restores what was broken and barren. The contrast with Jericho\'s cursed status under Joshua (Joshua 6:26) is striking — what had been a place of curse becomes a place of life under the ministry of Elisha, suggesting the prophetic mission participates in the broader redemptive work of God.',
    },
    {
      verse_start: 23,
      verse_end: 25,
      topic: 'The mocking youths and the two bears',
      plain_language: 'As Elisha travels toward Bethel, young men (or youths) come out of the city and mock him, calling him "baldhead" and telling him to "go up" — possibly a taunt about Elijah\'s ascent. Elisha curses them in the name of the LORD, and two female bears come from the woods and maul forty-two of them. Elisha continues to Carmel and then Samaria.',
      theological_context: 'This troubling passage is often misread as disproportionate. Its theological function is to establish prophetic authority at the very start of Elisha\'s ministry. The taunt "go up, baldhead" likely mocks both Elijah\'s departure and Elisha\'s claim to succession, making it not mere childish teasing but public ridicule of the prophetic office itself. In Deuteronomy 18:19-20, rejecting a true prophet is a capital offense. The bears function as the LORD\'s judgment on communal contempt for His messenger. Bethel, the center of the golden calf cult established by Jeroboam, is a deliberately hostile location — underscoring the opposition Elisha\'s ministry would face from the apostate northern establishment.',
    },
  ],

  '2 Kings:3': [
    {
      verse_start: 14,
      verse_end: 20,
      topic: 'Elisha\'s prophecy and the miracle of water',
      plain_language: 'Elisha agrees to help the three kings only because Jehoshaphat of Judah is present. He calls for a musician, and as the music plays, the hand of the LORD comes on him. He prophesies that the valley will be filled with water though there is no wind or rain. He also declares Moab will be defeated. The next morning, water flows in from the direction of Edom and fills the land.',
      theological_context: 'The use of music to prepare for prophetic inspiration (cf. 1 Samuel 10:5) reflects the ancient Israelite understanding that worship creates the conditions for divine encounter. Elisha\'s explicit refusal to serve Jehoram — the apostate king — except for Jehoshaphat\'s sake is theologically significant: it illustrates the principle that the faithful can become instruments of grace for the unfaithful. The water miracle also recalls the Exodus — water from an unexpected source in the wilderness — connecting Elisha to the Mosaic tradition.',
    },
    {
      verse_start: 21,
      verse_end: 25,
      topic: 'Moab\'s defeat through mistaken intelligence',
      plain_language: 'When the Moabites muster for defense and see the water at dawn red as blood, they assume the three kings have fought among themselves and rush in to plunder — only to face a fully armed Israelite coalition. The Israelites slaughter them and devastate Moab: they knock down every city, stop up every spring, fell every good tree, and fill every field with stones.',
      theological_context: 'The Moabite misreading of the red water as blood is a form of divine irony. Their own confidence in military intelligence leads them into the ambush God had prepared. The systematic devastation of Moab\'s land — stopping wells, felling trees, covering fields with stones — reflects ancient warfare practice but also echoes the concept of herem (devoted destruction). The narrator presents this as the fulfillment of prophetic word: Elisha said it would happen, and it did.',
    },
    {
      verse_start: 26,
      verse_end: 27,
      topic: 'The king of Moab\'s sacrifice and Israel\'s withdrawal',
      plain_language: 'When the king of Moab sees he is losing, he attempts a breakout with 700 swordsmen and fails. In desperation he offers his eldest son — his heir — as a burnt offering on the city wall. The text says "great wrath came upon Israel" and they withdrew and returned home without completing the conquest.',
      theological_context: 'This is one of the most debated verses in Kings. The "great wrath" (qetseph gadol) is ambiguous — it is not said to be the LORD\'s wrath. Most scholars suggest the spectacle of the child sacrifice horrified or demoralized the Israelite coalition, or that it invoked supernatural forces the narrative leaves unexplained. Theologically, the passage refuses easy triumphalism: even a divinely sanctioned campaign can end in an unexplained withdrawal. It invites readers to sit with ambiguity — God\'s purposes are not always transparent, and human and divine agency intersect in complex ways.',
    },
  ],

  '2 Kings:4': [
    {
      verse_start: 1,
      verse_end: 7,
      topic: 'The widow\'s oil multiplied',
      plain_language: 'A widow from the prophetic community faces the loss of her two sons to a creditor because of her dead husband\'s debt. She has only one jar of oil. Elisha tells her to borrow as many empty vessels as she can from her neighbors, shut the door, and pour. The oil keeps flowing until all the vessels are full — and stops only when there are no more vessels. She sells the oil, pays the debt, and lives on the rest.',
      theological_context: 'This miracle closely parallels Elijah\'s miracle with the widow of Zarephath (1 Kings 17), establishing Elisha as walking in his master\'s tradition. Theologically, the miracle addresses the economic vulnerability of widows, one of the most protected groups in the Torah (Deuteronomy 24:17-21). The oil flowing to the limit of available vessels suggests that human preparation and expectation limit or expand the scope of God\'s provision — the more vessels she gathered by faith, the more oil she received. The shut door emphasizes that divine provision often occurs in private, hidden from spectators.',
    },
    {
      verse_start: 32,
      verse_end: 37,
      topic: 'Elisha raises the Shunammite\'s son',
      plain_language: 'Elisha finds the boy dead on his bed. He prays to the LORD, then lays himself on the child — eye to eye, mouth to mouth, hands to hands — the child\'s flesh grows warm. After a second stretching out, the boy sneezes seven times and opens his eyes. Elisha calls the woman in and gives her son back alive.',
      theological_context: 'The bodily posture Elisha takes precisely mirrors what Elijah did for the widow\'s son in 1 Kings 17:21, deepening the Elijah-Elisha typology. The sevenfold sneeze is significant: seven is the number of completeness in the Hebrew Bible, and it signals full restoration of life. Theologically, this is not magic — Elisha prays to the LORD first, and the prayer, not the technique, is the source of restoration. The passage anticipates resurrection hope: life is a gift that God can restore even after it has been taken away. The Shunammite\'s son, given miraculously to a barren couple, taken in death, and restored, functions as a type of resurrection hope.',
    },
    {
      verse_start: 42,
      verse_end: 44,
      topic: 'Twenty loaves feed one hundred men',
      plain_language: 'A man from Baal-shalishah brings twenty loaves of barley bread and fresh grain to Elisha. Elisha commands his servant to give it to the hundred men gathered to eat. The servant objects that it is not enough. Elisha repeats the command, adding "for thus says the LORD: they shall eat and have some left over." And so it happens exactly.',
      theological_context: 'This miracle of multiplication is the clearest Old Testament prefigurement of Jesus\'s feeding of the multitude (John 6), a point the Gospel of John makes explicit. The structure is identical: an insufficient gift, a skeptical response, a prophetic word, supernatural multiplication, and leftover food. Theologically, it proclaims that the word of God is the source of abundance — not the food itself. It also situates the prophetic community as the place where God\'s provision is experienced, echoing the manna in the wilderness. Elisha\'s "thus says the LORD" grounds the miracle not in prophetic power but in divine promise.',
    },
  ],

  '2 Kings:5': [
    {
      verse_start: 1,
      verse_end: 5,
      topic: 'Naaman\'s leprosy and the Israelite servant girl\'s witness',
      plain_language: 'Naaman is introduced as a powerful, honored military man — but he has leprosy. The narrator notes that through him the LORD had given victory to Aram, preparing for the theological complexity ahead. A young Israelite girl captured in a raid and serving Naaman\'s wife expresses simple faith: she wishes Naaman could go to the prophet in Samaria who would heal him. Her word sets the entire story in motion.',
      theological_context: 'The theological surprise begins immediately: the text says the LORD gave victory to Aram through Naaman — a pagan commander. God\'s sovereignty is not limited to Israel\'s military success. This prepares readers for the radical grace theme that runs through the chapter. The servant girl is among the most remarkable characters in Kings: she is unnamed, enslaved, a foreigner, a child, and a woman — possessing no power by any social measure. Yet her single word of testimony is the catalyst for Naaman\'s healing and conversion. Jesus cites this story in Luke 4:27 as a paradigm of grace extended beyond ethnic boundaries.',
    },
    {
      verse_start: 9,
      verse_end: 15,
      topic: 'Naaman\'s healing and conversion',
      plain_language: 'Naaman arrives at Elisha\'s house with full military and diplomatic pomp. Elisha does not even come out — he sends a messenger with a simple, undramatic instruction: wash in the Jordan seven times. Naaman is furious. His servants appeal to his reason. He obeys, dips seven times, and his skin becomes like that of a small child. He returns to Elisha and confesses that there is no God in all the earth except in Israel.',
      theological_context: 'This is a conversion narrative — arguably the most complete conversion story in the Old Testament outside the book of Ruth. Naaman\'s fury at the undramatic instruction reveals a fundamental human resistance to grace: we prefer spectacular conditions and high barriers. Elisha\'s refusal to come out also prevents the healing from becoming a display of personal prophetic power. The Jordan — a modest river by Near Eastern standards — is the agent, but only through obedient faith. The sevenfold washing echoes purification rituals of Leviticus. Naaman\'s final confession, "there is no God in all the earth but in Israel," is one of the strongest monotheistic confessions by a foreigner in the entire Hebrew Bible.',
    },
    {
      verse_start: 20,
      verse_end: 27,
      topic: 'Gehazi\'s greed and leprosy',
      plain_language: 'After Elisha refuses all payment, his servant Gehazi runs after Naaman and fabricates a story: Elisha has changed his mind and needs silver and clothing for two young prophets. Naaman generously gives more than asked. Gehazi hides the goods, then lies to Elisha\'s face. Elisha reveals he saw everything prophetically, and pronounces that Naaman\'s leprosy will cling to Gehazi and his descendants forever. Gehazi departs white as snow.',
      theological_context: 'The Gehazi episode serves as a foil to Naaman\'s conversion. Naaman — a foreigner, a pagan, a military enemy — receives cleansing and becomes a worshiper of the LORD. Gehazi — an insider, a disciple, a trusted servant — receives leprosy for his treachery. The reversal is theologically shocking. Gehazi\'s sin is not merely greed; it is misrepresenting the grace of God for personal profit. By charging for what God freely gave, he corrupted the sign of the gospel. The leprosy passing from Naaman to Gehazi is deeply ironic: Naaman\'s cleansing came at no cost; Gehazi\'s corruption cost him exactly what Naaman was freed from.',
    },
  ],

  '2 Kings:6': [
    {
      verse_start: 15,
      verse_end: 17,
      topic: 'Elisha\'s servant\'s eyes opened to the heavenly army',
      plain_language: 'Elisha\'s servant wakes to find the city surrounded by a vast Aramean army and panics. Elisha reassures him: "Those who are with us are more than those who are with them." He prays for the servant\'s eyes to be opened — and the servant sees the mountain full of horses and chariots of fire surrounding Elisha.',
      theological_context: 'This is one of the great revelatory moments in the Old Testament. The "chariots and horses of fire" echo the title given to Elijah himself (2 Kings 2:12) and reveal that the prophetic ministry is undergirded by divine protection that is invisible to ordinary sight. The theological message is that spiritual reality — God\'s provision and protection — is more real and more powerful than the visible threat. The passage became a foundation for the New Testament concept of the unseen heavenly realm (Hebrews 12:1, Ephesians 6:12). Elisha does not pray to destroy the army but to open the servant\'s eyes — the first step is seeing things as they truly are.',
    },
    {
      verse_start: 18,
      verse_end: 23,
      topic: 'Blinded Arameans fed and released',
      plain_language: 'Elisha prays for the LORD to blind the Aramean army, then leads them to Samaria — the heart of Israel. When the LORD opens their eyes, they find themselves inside the city, at the mercy of the king and army. The king of Israel wants to execute them. Elisha says no — feed them and send them home. The king does so, and the Aramean raiding parties stop coming into Israel.',
      theological_context: 'Elisha\'s command to feed the enemy rather than kill them is remarkable in the ancient Near Eastern context, where captured enemies were typically executed or enslaved. It anticipates the ethic of Romans 12:20, "If your enemy is hungry, feed him." The theology here is that divine power is exercised not for revenge but for redemption. The enemy is disarmed through hospitality, not slaughter, and the result is peace — the raids stop. This episode challenges the assumption that coercive power is the most effective form of influence and presents a counter-narrative rooted in covenant love (hesed) extended even to enemies.',
    },
    {
      verse_start: 24,
      verse_end: 33,
      topic: 'The siege of Samaria and the king\'s despair',
      plain_language: 'Ben-hadad of Aram besieges Samaria until food prices become catastrophic — a donkey\'s head sells for eighty pieces of silver. When a woman cries out to the king for justice, she reveals she and another woman had agreed to boil and eat their children. The king, horrified, tears his clothes and blames Elisha, swearing to kill him. He sends an executioner to Elisha\'s house.',
      theological_context: 'The siege conditions described here — including cannibalism — fulfill the covenant curses of Deuteronomy 28:53-57, where Moses warned that siege and hunger would lead to eating one\'s own children. The narrative presents this as the culmination of Israel\'s long covenant unfaithfulness, not merely a military misfortune. The king\'s response — blaming Elisha rather than repenting — reveals his spiritual state. He tears his clothes outwardly in mourning but does not tear his heart (cf. Joel 2:13). His threat against Elisha represents the perennial tension between royal power and prophetic witness — the king wants relief from consequences without repentance from causes.',
    },
  ],
};

async function main() {
  console.log('Seeding 2 Kings 1-6...');

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
