import { mc, blank, word, tf, type ChapterBank, sa } from './types'

const bank: ChapterBank = {
  book: '2 Kings', chapter: 3, tag: 'quiz-v2-2kings-3', rows: [
    mc(1, 'Who became king over Israel in Samaria?', ['Jehoram son of Ahab', 'Jehoshaphat', 'Mesha', 'Elisha'], 1),
    blank(1, 'Jeho’ram the son of Ahab became king over Israel in _____.', 'Sama’ria', 1, ['Samaria']),
    sa(1, 'How many years did Jehoram reign?', 'twelve years', 1, ['twelve', '12 years', '12']),
    tf(2, 'Jehoram began reigning in Jehoshaphat’s eighteenth year.', true, 1),
    mc(2, 'During whose reign in Judah did Jehoram begin ruling Israel?', ['Jehoshaphat’s', 'Ahab’s', 'Mesha’s', 'Elijah’s'], 1),

    mc(1, 'How did Jehoram’s conduct compare with that of his parents?', ['He did evil, though not as they had', 'He was more faithful than David', 'He did exactly as Jehoshaphat did', 'He abandoned every evil practice'], 2),
    blank(3, 'for he put away the pillar of _____ which his father had made.', 'Ba’al', 2, ['Baal']),
    sa(2, 'What object made by Ahab did Jehoram remove?', 'the pillar of Baal', 2, ['Baal’s pillar', 'pillar of Baal']),
    tf(1, 'Jehoram still did what was evil in the LORD’s sight.', true, 2),
    mc(2, 'Which act distinguished Jehoram from his father and mother?', ['He removed the pillar of Baal his father had made', 'He restored the temple in Jerusalem', 'He released Moab from tribute', 'He followed Elisha'], 2),

    mc(1, 'To whose sin did Jehoram cling?', ['Jeroboam son of Nebat’s', 'David’s', 'Jehoshaphat’s', 'Mesha’s'], 3),
    blank(2, 'he did not _____ from it.', 'depart', 3),
    word(1, 'Whom had Jeroboam caused to sin?', 'Israel', 3),
    tf(3, 'Removing Baal’s pillar meant Jehoram departed from every sin of Israel’s kings.', false, 3, 'He continued in the sin of Jeroboam son of Nebat.'),
    mc(2, 'What persistent failure qualified Jehoram’s partial reform?', ['He continued in Jeroboam’s sin', 'He rebuilt Baal’s pillar', 'He worshiped the god of Ekron', 'He refused to reign in Samaria'], 3),

    mc(1, 'What was Mesha king of Moab’s occupation?', ['Sheep breeder', 'Minstrel', 'Swordsman', 'Prophet'], 4),
    blank(3, 'he had to deliver annually to the king of Israel a hundred thousand _____', 'lambs', 4),
    sa(2, 'How many lambs did Mesha deliver each year?', 'one hundred thousand', 4, ['100,000', '100000', 'a hundred thousand']),
    tf(1, 'Mesha also delivered the wool of one hundred thousand rams.', true, 4),
    mc(3, 'What annual tribute did Mesha owe Israel’s king?', ['One hundred thousand lambs and wool from one hundred thousand rams', 'One hundred thousand rams and wool from ten thousand lambs', 'Seven hundred swords and fifty horses', 'Silver from every fortified city'], 4),
    word(3, 'From what animals did the second part of Mesha’s tribute come?', 'rams', 4, ['one hundred thousand rams']),

    mc(1, 'When did Moab’s king rebel against Israel’s king?', ['When Ahab died', 'When Jehoshaphat died', 'After the seven-day march', 'After Elisha called for a minstrel'], 5),
    blank(2, 'the king of Moab _____ against the king of Israel.', 'rebelled', 5),
    word(1, 'Which nation rebelled?', 'Moab', 5),
    tf(3, 'Mesha’s rebellion began while Ahab was still alive.', false, 5, 'The king of Moab rebelled when Ahab died.'),
    mc(2, 'Against whom was Moab’s rebellion directed?', ['The king of Israel', 'The king of Edom', 'The prophet Elisha', 'The king of Judah alone'], 5),

    mc(1, 'What did King Jehoram do after Moab rebelled?', ['He marched from Samaria and mustered all Israel', 'He sent Elisha to Moab to negotiate with Mesha', 'He withdrew into Ahab’s palace and refused to campaign', 'He surrendered Israel’s frontier cities to the king of Moab'], 6),
    blank(3, 'and _____ all Israel.', 'mustered', 6),
    word(2, 'From what city did Jehoram march?', 'Samaria', 6, ["Sama'ria"]),
    tf(1, 'Jehoram assembled Israel’s forces.', true, 6),
    mc(2, 'Whom did Jehoram muster for the campaign?', ['All Israel', 'Only the men of Samaria', 'The prophets at Jericho', 'One hundred thousand shepherds'], 6),

    mc(1, 'Which king did Jehoram invite to fight Moab with him?', ['Jehoshaphat king of Judah', 'Mesha king of Moab', 'The king of Syria', 'Ahaziah'], 7),
    blank(2, 'I am as you are, my people as your people, my _____ as your horses.', 'horses', 7),
    sa(1, 'How did Jehoshaphat answer Jehoram’s invitation?', 'I will go', 7, ['he would go', 'yes']),
    tf(3, 'Jehoshaphat refused to join the battle against Moab.', false, 7, 'He agreed and pledged his people and horses with Jehoram’s.'),
    mc(2, 'What did Jehoshaphat pledge along with himself?', ['His people and his horses', 'His temple and treasury', 'His prophets and priests', 'His city and fields'], 7),

    mc(1, 'Which route did Jehoram choose for the march?', ['The wilderness of Edom', 'The road through Bethel', 'The Jordan valley', 'The way of Mount Carmel'], 8),
    blank(3, 'By the way of the wilderness of _____.', 'Edom', 8),
    word(2, 'Who answered the question about the route?', 'Jehoram', 8, ["Jeho'ram"]),
    tf(1, 'The army planned to approach Moab through Edom’s wilderness.', true, 8),
    mc(2, 'What question preceded Jehoram’s choice of route?', ['By which way shall we march?', 'Where is the LORD, the God of Elijah?', 'Will you go with me?', 'Is there no prophet here?'], 8),

    mc(1, 'Which three kings marched together?', ['The kings of Israel, Judah, and Edom', 'The kings of Israel, Moab, and Syria', 'The kings of Judah, Moab, and Ekron', 'The kings of Edom, Syria, and Samaria'], 9),
    blank(2, 'they had made a circuitous march of _____ days', 'seven', 9, ['7']),
    word(1, 'What essential supply did the army lack?', 'water', 9),
    tf(3, 'Only the soldiers lacked water; the animals still had enough.', false, 9, 'There was no water for either the army or the animals that followed.'),
    mc(2, 'What crisis arose after the circuitous seven-day march?', ['There was no water for the army or the animals that followed it', 'Moab captured all three allied kings before they reached the frontier', 'Edom deserted the alliance and returned to its own land', 'The army lost its weapons while crossing the wilderness of Edom'], 9),

    mc(1, 'Whom did Israel’s king blame for the army’s danger?', ['The LORD', 'Jehoshaphat', 'The king of Edom', 'Elisha'], 10),
    blank(3, 'The LORD has called these three kings to give them into the hand of _____.', 'Moab', 10),
    word(2, 'How many kings did Jehoram say had been called together?', 'three', 10, ['3']),
    tf(1, 'Jehoram feared that the allied kings would be delivered to Moab.', true, 10),
    mc(2, 'How did Jehoram interpret the lack of water?', ['As the LORD delivering the three kings to Moab', 'As proof that Edom had betrayed them', 'As a sign to return to Samaria', 'As a test from Elisha'], 10),

    mc(1, 'What did Jehoshaphat seek during the water crisis?', ['A prophet through whom they could inquire of the LORD', 'A guide who could lead the army by another route through Edom', 'A messenger who could negotiate terms with the king of Moab', 'A source of tribute that could supply provisions for the army'], 11),
    blank(2, 'Eli’sha the son of _____ is here', 'Shaphat', 11),
    sa(1, 'What service had Elisha performed for Elijah?', 'poured water on Elijah’s hands', 11, ['he poured water on the hands of Elijah', 'poured water on his hands']),
    tf(3, 'One of Israel’s servants identified Elisha as a former servant of Elijah.', true, 11),
    mc(2, 'Who told the kings that Elisha was nearby?', ['One of the king of Israel’s servants', 'The king of Edom', 'Mesha', 'A son of the prophets from Bethel'], 11),

    mc(1, 'What did Jehoshaphat affirm about Elisha?', ['The word of the LORD was with him', 'He commanded Israel’s army', 'He had brought the drought', 'He was Mesha’s adviser'], 12),
    blank(3, 'The _____ of the LORD is with him.', 'word', 12),
    sa(2, 'Who went down to Elisha?', 'the kings of Israel, Judah, and Edom', 12, ['the three kings', 'all three kings']),
    tf(1, 'The three allied kings went to Elisha rather than summoning him to them.', true, 12),
    mc(2, 'Why did the three kings go down to Elisha?', ['Jehoshaphat affirmed that the word of the LORD was with him', 'Mesha commanded them to consult the prophet before fighting', 'The army discovered a spring beside the place where Elisha stayed', 'Elijah sent them a message directing them to his former servant'], 12),

    mc(1, 'To whose prophets did Elisha initially send Israel’s king?', ['The prophets of his father and mother', 'The prophets at Jericho', 'The prophets of Judah', 'The prophets of Edom'], 13),
    blank(2, 'What have I to do with _____?', 'you', 13),
    sa(1, 'What explanation did Israel’s king repeat?', 'the LORD had called the three kings to give them to Moab', 13, ['the Lord called the three kings', 'they had been called to be delivered to Moab']),
    tf(3, 'Elisha warmly welcomed Israel’s king without rebuke.', false, 13, 'He challenged the king to go to the prophets of his parents.'),

    mc(1, 'For whose sake did Elisha agree to regard the group?', ['Jehoshaphat king of Judah', 'Jehoram king of Israel', 'The king of Edom', 'Mesha king of Moab'], 14),
    blank(3, 'were it not that I have regard for Jehosh’aphat the king of _____', 'Judah', 14),
    sa(2, 'Whom did Elisha say he served?', 'the LORD of hosts', 14, ['LORD of hosts', 'the Lord']),
    tf(1, 'Elisha said he would not have looked at Israel’s king apart from his regard for Jehoshaphat.', true, 14),

    mc(1, 'Whom did Elisha ask them to bring?', ['A minstrel', 'A prophet from Bethel', 'A water bearer', 'A captain of fifty'], 15),
    blank(2, 'And when the minstrel _____, the power of the LORD came upon him.', 'played', 15),
    sa(1, 'What came upon Elisha while the minstrel played?', 'the power of the LORD', 15, ['power of the Lord', 'the LORD’s power']),
    tf(3, 'Elisha began prophesying before the minstrel played.', false, 15, 'The power of the LORD came upon him when the minstrel played.'),
    mc(3, 'What did Elisha request immediately before the LORD’s power came upon him?', ['A minstrel, whose playing preceded the prophecy', 'A new bowl filled with salt to make the water wholesome', 'Elijah’s mantle so that he could strike the Jordan', 'Fifty strong men to search the mountains and valleys'], 15),

    mc(1, 'What did the LORD promise to make in the dry streambed?', ['Pools of water', 'A fortified city', 'A road to Samaria', 'A field of stones'], 16),
    blank(3, 'I will make this dry stream-bed full of _____.', 'pools', 16),
    word(2, 'Who spoke the promise through Elisha?', 'LORD', 16, ['the LORD', 'God']),
    tf(1, 'The prophecy concerned a dry streambed becoming full of pools.', true, 16),

    mc(1, 'What would fill the streambed even though the army saw no weather?', ['Water', 'Blood', 'Stones', 'Wool'], 17),
    blank(2, 'You shall not see wind or _____', 'rain', 17),
    sa(1, 'Who would drink from the supplied water?', 'the people, their cattle, and their beasts', 17, ['the army and its animals', 'you your cattle and your beasts']),
    tf(3, 'The promised water depended on the army seeing a rainstorm.', false, 17, 'They would see neither wind nor rain, yet the streambed would fill.'),

    mc(1, 'What additional victory did the LORD promise?', ['He would give the Moabites into their hand', 'He would give Edom to Moab', 'He would make Mesha king of Israel', 'He would send the army back to Judah'], 18),
    blank(3, 'This is a _____ thing in the sight of the LORD', 'light', 18),
    sa(2, 'Whom would the LORD give into the allies’ hand?', 'the Moabites', 18, ['Moab']),
    tf(1, 'Providing water was described as a light thing for the LORD.', true, 18),

    mc(1, 'What kind of cities were the allies told they would conquer?', ['Every fortified and choice city', 'Only Moab’s capital', 'Only cities without walls', 'The cities of Judah'], 19),
    blank(2, 'and shall fell every good _____', 'tree', 19),
    sa(1, 'What were they commanded to do to the springs?', 'stop them up', 19, ['stop up the springs', 'block them']),
    tf(3, 'The prophecy said every good piece of land would be ruined with stones.', true, 19),

    mc(1, 'When did water arrive in the dry streambed?', ['The next morning at the time of the sacrifice', 'At midnight while a visible storm crossed Edom', 'After three days of steady rain over the allied camp', 'At sunset after Israel had defeated the Moabite army'], 20),
    blank(3, 'water came from the direction of _____.', 'Edom', 20),
    sa(2, 'How much of the country was filled with water?', 'the country', 20, ['all the country', 'it was filled']),
    tf(1, 'The water came without the wind or rain the army had expected.', true, 20),

    mc(1, 'Who answered Moab’s call to arms?', ['All who were able to put on armor', 'Only seven hundred swordsmen', 'Only the oldest men', 'Mesha’s shepherds alone'], 21),
    blank(2, 'and were drawn up at the _____.', 'frontier', 21),
    sa(1, 'What news caused Moab to mobilize?', 'the kings had come to fight them', 21, ['the kings were coming to fight', 'the allied kings had come']),
    tf(3, 'Only veteran soldiers were called out by Moab.', false, 21, 'All able to put on armor, from youngest to oldest, were called out.'),

    mc(1, 'What color did the water appear to the Moabites?', ['Red like blood', 'White like wool', 'Black like night', 'Green like grass'], 22),
    blank(3, 'the sun _____ upon the water', 'shone', 22),
    sa(2, 'What made the water look red?', 'the morning sun', 22, ['sunlight', 'the sun shining on it']),
    tf(1, 'The Moabites saw the water opposite them at sunrise.', true, 22),

    mc(1, 'What did the Moabites wrongly think the red water was?', ['Blood', 'Wine', 'Fire', 'Mud'], 23),
    blank(2, 'the kings have surely fought together, and _____ one another.', 'slain', 23),
    sa(1, 'What did the Moabites rush to take?', 'the spoil', 23, ['spoil', 'plunder']),
    tf(3, 'The Moabites correctly recognized the red appearance as reflected sunlight on water.', false, 23, 'They mistook the water for blood and assumed the kings had killed one another.'),
    mc(3, 'Why did the Moabites advance toward Israel’s camp expecting spoil?', ['Sunlight made the water look like blood, so they assumed the allied kings had slain one another', 'Jehoshaphat had sent them a peace message saying all three kings had abandoned the campaign', 'They believed the entire allied army had died from thirst during the seven-day wilderness march', 'They saw the king of Edom retreat through the wilderness after fighting the other two kings'], 23),

    mc(1, 'What happened when Moab reached Israel’s camp?', ['The Israelites rose and attacked them', 'The three kings surrendered', 'The camp was empty', 'Elisha negotiated peace'], 24),
    blank(3, 'till they _____ before them', 'fled', 24),
    sa(2, 'Who pursued and slaughtered the fleeing Moabites?', 'the Israelites', 24, ['Israel']),
    tf(1, 'Israel advanced while striking the Moabites.', true, 24),

    mc(1, 'Which stronghold remained after the campaign devastated the land?', ['Kir-hareseth', 'Samaria', 'Bethel', 'Jericho'], 25),
    blank(2, 'every man threw a _____, until it was covered', 'stone', 25),
    sa(1, 'Who surrounded and conquered Kir-hareseth?', 'the slingers', 25, ['slingers']),
    tf(3, 'The Israelites left Moab’s springs and good trees untouched.', false, 25, 'They stopped the springs and felled the good trees.'),

    mc(1, 'How many swordsmen did Moab’s king take for a breakout attempt?', ['Seven hundred', 'One hundred thousand', 'Fifty', 'Forty-two'], 26),
    blank(3, 'to break through, opposite the king of _____.', 'Edom', 26),
    word(2, 'Did the swordsmen break through?', 'no', 26, ['they could not', 'no they could not']),
    tf(1, 'The battle was going against the king of Moab.', true, 26),

    mc(1, 'Whom did Moab’s king offer as a burnt offering?', ['His eldest son who was to succeed him', 'The king of Edom', 'A hundred thousand lambs', 'One of Israel’s servants'], 27),
    blank(2, 'and offered him for a burnt offering upon the _____.', 'wall', 27),
    sa(1, 'What came upon Israel after the offering?', 'great wrath', 27, ['wrath', 'great wrath upon Israel']),
    tf(3, 'After the offering, Israel withdrew and returned to its own land.', true, 27),
  ],
}

export default bank
