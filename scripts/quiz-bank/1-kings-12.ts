// 1 Kings 12 — quiz bank (RSV). Every row is anchored to a verse; fill-in-the-blank
// rows are verified against the stored verse text by scripts/seed-quiz-bank.ts.
import { mc, blank, word, tf, type ChapterBank } from './types';

const bank: ChapterBank = {
  book: '1 Kings',
  chapter: 12,
  tag: 'quiz-v2-1kings-12',
  rows: [
    // ══════════════════════════════════ v1–5 · Israel gathers at Shechem
    mc(1, 'Where did all Israel gather to make Rehoboam king?', ['Shechem', 'Jerusalem', 'Hebron', 'Bethel'], 1),
    blank(1, 'Rehobo’am went to _____, for all Israel had come to Shechem to make him king.', 'Shechem', 1),
    word(1, 'Rehoboam went to which city, where all Israel had gathered to make him king?', 'Shechem', 1),
    tf(1, 'All Israel came to Jerusalem to make Rehoboam king.', false, 1, 'They gathered at Shechem.'),
    tf(3, 'Rehoboam went to Shechem because all Israel had come there to make him king.', true, 1),

    mc(1, 'Where was Jeroboam when he heard that Israel had gathered at Shechem?', ['In Egypt', 'In Shechem', 'In Jerusalem', 'In Damascus'], 2),
    word(3, 'Who was Jeroboam’s father?', 'Nebat', 2),
    blank(1, 'And when Jerobo’am the son of Nebat heard of it (for he was still in _____, whither he had fled from King Solomon), then Jerobo’am returned from Egypt.', 'Egypt', 2),
    blank(2, 'And when Jerobo’am the son of _____ heard of it (for he was still in Egypt, whither he had fled from King Solomon), then Jerobo’am returned from Egypt.', 'Nebat', 2),
    tf(3, 'Jeroboam had fled to Egypt from King Solomon.', true, 2),
    mc(1, 'From whom had Jeroboam fled to Egypt?', ['King Solomon', 'King Rehoboam', 'King David', 'Pharaoh'], 2),

    blank(2, 'And they sent and called him; and Jerobo’am and all the _____ of Israel came and said to Rehobo’am,', 'assembly', 3),
    tf(3, 'Jeroboam came to Rehoboam alone, without the assembly of Israel.', false, 3, 'Jeroboam and all the assembly of Israel came and spoke to Rehoboam.'),
    mc(1, 'Who came with Jeroboam to speak to Rehoboam?', ['All the assembly of Israel', 'The old men', 'The young men who had grown up with him', 'The tribe of Judah only'], 3),
    word(3, 'After Jeroboam returned, the people "sent and ___ him".', 'called', 3),

    mc(1, 'What did the people complain that Rehoboam’s father had done?', ['Made their yoke heavy', 'Taken their land', 'Raised taxes for the temple', 'Sent them to war'], 4),
    blank(1, 'Your father made our _____ heavy. Now therefore lighten the hard service of your father and his heavy yoke upon us, and we will serve you.', 'yoke', 4),
    blank(2, 'Now therefore lighten the hard _____ of your father and his heavy yoke upon us, and we will serve you.', 'service', 4),
    word(1, 'The people asked Rehoboam to lighten his father’s heavy what?', 'yoke', 4),
    mc(3, 'What did the people promise if Rehoboam lightened the yoke?', ['"we will serve you"', '"we will pay you tribute"', '"we will build you a palace"', '"we will make Jeroboam king"'], 4),
    tf(1, 'The people told Rehoboam, "Your father made our yoke heavy."', true, 4),

    mc(1, 'How long did Rehoboam tell the people to depart before returning?', ['Three days', 'Seven days', 'One day', 'Forty days'], 5),
    word(1, 'How many days did Rehoboam ask the people to wait before coming back?', 'three', 5, ['3', 'three days']),
    blank(1, 'He said to them, "Depart for _____ days, then come again to me." So the people went away.', 'three', 5, ['3']),
    tf(1, 'Rehoboam told the people to come again to him after seven days.', false, 5, 'He said "Depart for three days, then come again to me."'),

    // ══════════════════════════════════ v6–11 · Old men and young men
    mc(1, 'Whom did Rehoboam consult first?', ['The old men who had stood before Solomon his father', 'The young men who had grown up with him', 'Jeroboam', 'Shemaiah the man of God'], 6),
    blank(2, 'Then King Rehobo’am took counsel with the _____ men, who had stood before Solomon his father while he was yet alive, saying, "How do you advise me to answer this people?"', 'old', 6),
    word(3, 'The old men had stood before which king while he was yet alive?', 'Solomon', 6),
    mc(3, 'What question did Rehoboam put to the old men?', ['"How do you advise me to answer this people?"', '"Shall I lighten the yoke?"', '"Who is this Jeroboam?"', '"Shall we go up and fight?"'], 6),
    tf(3, 'The old men Rehoboam consulted had stood before Solomon his father while he was alive.', true, 6),

    mc(3, 'What did the old men advise Rehoboam?', ['Be a servant to this people, serve them, and speak good words to them', 'Add to their yoke', 'Chastise them with scorpions', 'Send them away for three days'], 7),
    blank(2, 'If you will be a _____ to this people today and serve them, and speak good words to them when you answer them, then they will be your servants for ever.', 'servant', 7),
    blank(2, 'If you will be a servant to this people today and serve them, and speak _____ words to them when you answer them, then they will be your servants for ever.', 'good', 7),
    word(3, 'The old men said that if Rehoboam served the people, they would be his servants for how long?', 'for ever', 7, ['forever', 'ever']),
    tf(3, 'The old men advised Rehoboam to speak good words to the people.', true, 7),
    tf(3, 'The old men told Rehoboam that the people would serve him for three years.', false, 7, 'They said "they will be your servants for ever".'),

    mc(1, 'Whose counsel did Rehoboam forsake?', ['The old men’s', 'The young men’s', 'Jeroboam’s', 'Shemaiah’s'], 8),
    blank(1, 'But he forsook the counsel which the old men gave him, and took counsel with the _____ men who had grown up with him and stood before him.', 'young', 8),
    word(3, 'Rehoboam ___ the counsel which the old men gave him (the verb used in verse 8).', 'forsook', 8, ['forsake', 'forsaken']),
    tf(1, 'Rehoboam followed the counsel of the old men.', false, 8, 'He forsook the old men’s counsel and took counsel with the young men who had grown up with him.'),
    mc(3, 'How are the young men Rehoboam consulted described?', ['They had grown up with him and stood before him', 'They had stood before Solomon his father', 'They were priests from among all the people', 'They were chosen warriors of Judah'], 8),

    blank(2, 'And he said to them, "What do you advise that we answer this people who have said to me, `_____ the yoke that your father put upon us\'?"', 'Lighten', 9),
    tf(2, 'Rehoboam repeated the people’s request to the young men as "Lighten the yoke that your father put upon us".', true, 9),
    mc(3, 'How did Rehoboam summarize the people’s request to the young men?', ['"Lighten the yoke that your father put upon us"', '"Give us a king like the nations"', '"Return our inheritance in David"', '"Send Adoram away from us"'], 9),
    word(3, 'Rehoboam asked the young men, "What do you ___ that we answer this people?"', 'advise', 9),

    mc(3, 'The young men told Rehoboam to say, "My little finger is thicker than my father’s ___."', ['loins', 'arm', 'yoke', 'sword'], 10),
    blank(2, 'thus shall you say to them, `My little _____ is thicker than my father\'s loins.', 'finger', 10),
    blank(2, 'thus shall you say to them, `My little finger is _____ than my father\'s loins.', 'thicker', 10),
    word(2, 'The young men told Rehoboam to boast that his little ___ was thicker than his father’s loins.', 'finger', 10),
    tf(2, 'The young men told Rehoboam to say, "My little finger is thicker than my father’s loins."', true, 10),
    tf(3, 'The saying "My little finger is thicker than my father’s loins" came from the old men.', false, 10, 'It was the counsel of the young men who had grown up with Rehoboam.'),

    blank(1, 'My father chastised you with whips, but I will chastise you with _____.', 'scorpions', 11),
    blank(2, 'And now, whereas my father laid upon you a heavy yoke, I will _____ to your yoke.', 'add', 11),
    word(1, 'In the young men’s speech, "My father chastised you with ___" — with what?', 'whips', 11, ['whip']),
    mc(3, 'According to the young men’s speech, what would Rehoboam do to the yoke his father laid on the people?', ['Add to it', 'Lighten it', 'Remove it', 'Divide it'], 11),
    tf(2, 'In the young men’s counsel, Rehoboam would chastise the people with whips as his father had.', false, 11, '"My father chastised you with whips, but I will chastise you with scorpions."'),

    // ══════════════════════════════════ v12–15 · The harsh answer
    blank(1, 'So Jerobo’am and all the people came to Rehobo’am the _____ day, as the king said, "Come to me again the third day."', 'third', 12, ['3rd']),
    tf(1, 'Jeroboam and all the people returned to Rehoboam on the third day.', true, 12),
    mc(2, 'Who came with all the people to Rehoboam on the third day?', ['Jeroboam', 'Adoram', 'Shemaiah', 'Ahijah the Shilonite'], 12),
    word(2, 'On which day did Jeroboam and all the people come back to Rehoboam?', 'third', 12, ['3rd', 'the third day', 'third day']),

    blank(1, 'And the king answered the people _____, and forsaking the counsel which the old men had given him,', 'harshly', 13),
    word(1, 'In what manner did the king answer the people (one word from verse 13)?', 'harshly', 13, ['harsh']),
    tf(1, 'The king answered the people gently.', false, 13, 'The king answered the people harshly.'),
    mc(1, 'How did Rehoboam answer the people on the third day?', ['Harshly', 'Kindly', 'With silence', 'With a gift'], 13),

    mc(1, 'Complete Rehoboam’s answer: "My father chastised you with whips, but I will chastise you with ___."', ['scorpions', 'rods', 'chains', 'fire'], 14),
    word(1, 'Rehoboam said he would chastise the people with what?', 'scorpions', 14, ['scorpion']),
    blank(3, 'he spoke to them according to the counsel of the _____ men, saying, "My father made your yoke heavy, but I will add to your yoke; my father chastised you with whips, but I will chastise you with scorpions."', 'young', 14),
    blank(3, 'My father made your yoke heavy, but I will add to your yoke; my father _____ you with whips, but I will chastise you with scorpions.', 'chastised', 14),
    tf(1, 'Rehoboam spoke to the people according to the counsel of the young men.', true, 14),
    mc(2, 'Rehoboam got advice from two groups. Whose counsel did he follow when he answered the people?', ['The young men who had grown up with him', 'The old men who had stood before Solomon', 'Both groups equally', 'Neither — he made up his own answer'], 14),

    mc(2, 'Through which prophet had the LORD spoken his word to Jeroboam?', ['Ahijah the Shilonite', 'Shemaiah the man of God', 'Nathan the prophet', 'Elijah the Tishbite'], 15),
    word(2, 'Which prophet, "the Shilonite", had spoken the LORD’s word to Jeroboam?', 'Ahi’jah', 15, ['ahijah', 'ahijah the shilonite']),
    blank(3, 'So the king did not hearken to the people; for it was a turn of affairs brought about by the _____ that he might fulfil his word, which the LORD spoke by Ahi’jah the Shi’lonite to Jerobo’am the son of Nebat.', 'LORD', 15, ['the lord']),
    blank(3, 'which the LORD spoke by Ahi’jah the _____ to Jerobo’am the son of Nebat.', 'Shi’lonite', 15, ['shilonite']),
    tf(3, 'The text says the king’s refusal was "a turn of affairs brought about by the LORD".', true, 15),
    mc(3, 'Why, according to verse 15, did the king not hearken to the people?', ['It was a turn of affairs brought about by the LORD to fulfil his word spoken by Ahijah', 'Because Jeroboam had bribed the young men', 'Because the old men were dead', 'Because the people threatened him'], 15),

    // ══════════════════════════════════ v16–20 · The kingdom divides
    mc(1, 'What did the people cry when they saw the king would not listen?', ['"What portion have we in David? … To your tents, O Israel!"', '"Long live King Rehoboam!"', '"Give us Jeroboam as king!"', '"The LORD has forsaken us!"'], 16),
    blank(3, 'What portion have we in David? We have no inheritance in the son of _____.', 'Jesse', 16),
    blank(1, 'To your _____, O Israel! Look now to your own house, David.', 'tents', 16),
    word(2, 'The people said, "We have no inheritance in the son of ___."', 'Jesse', 16),
    tf(1, 'After the king’s harsh answer, Israel departed to their tents.', true, 16),
    tf(2, 'The people answered the king, "What portion have we in Solomon?"', false, 16, 'They said "What portion have we in David?"'),
    word(3, 'The people told David’s line, "Look now to your own ___."', 'house', 16),

    blank(3, 'But Rehobo’am reigned over the people of Israel who dwelt in the cities of _____.', 'Judah', 17),
    tf(2, 'After the split, Rehoboam still reigned over the people of Israel who dwelt in the cities of Judah.', true, 17),
    mc(2, 'After Israel departed, over whom did Rehoboam reign?', ['The people of Israel who dwelt in the cities of Judah', 'All twelve tribes', 'The tribe of Ephraim', 'The people who dwelt in Shechem'], 17),
    word(2, 'Rehoboam reigned over the people of Israel who dwelt in the cities of which land?', 'Judah', 17),

    mc(1, 'Whom did Rehoboam send to the people of Israel, only for him to be stoned to death?', ['Adoram, taskmaster over the forced labor', 'Jeroboam the son of Nebat', 'Shemaiah the man of God', 'Ahijah the Shilonite'], 18),
    word(1, 'Who was stoned to death by all Israel after Rehoboam sent him?', 'Ador’am', 18, ['adoram']),
    blank(1, 'Then King Rehobo’am sent Ador’am, who was taskmaster over the _____ labor, and all Israel stoned him to death with stones.', 'forced', 18),
    blank(3, 'And King Rehobo’am made haste to mount his _____, to flee to Jerusalem.', 'chariot', 18),
    mc(2, 'What was Adoram’s office?', ['Taskmaster over the forced labor', 'Commander of the army', 'High priest', 'Recorder'], 18),
    tf(1, 'Adoram was stoned to death by all Israel.', true, 18),
    tf(2, 'After Adoram was stoned, Rehoboam fled to Shechem.', false, 18, 'He made haste to mount his chariot to flee to Jerusalem.'),
    mc(2, 'How did Rehoboam escape after Adoram was killed?', ['He made haste to mount his chariot and fled to Jerusalem', 'He hid in Shechem', 'He fled to Egypt', 'He rode a mule to Hebron'], 18),
    word(2, 'Rehoboam fled in his chariot to which city?', 'Jerusalem', 18),

    blank(1, 'So Israel has been in _____ against the house of David to this day.', 'rebellion', 19),
    tf(1, 'The text says Israel has been in rebellion against the house of David "to this day".', true, 19),
    word(2, 'Israel has been in rebellion against the house of whom?', 'David', 19),
    mc(2, 'How does verse 19 summarize the outcome?', ['Israel has been in rebellion against the house of David to this day', 'Israel returned to the house of David after three days', 'Judah rebelled against Jeroboam', 'The kingdom was reunited under Rehoboam'], 19),

    mc(1, 'Whom did all Israel make king over all Israel?', ['Jeroboam', 'Rehoboam', 'Adoram', 'Shemaiah'], 20),
    blank(3, 'There was none that followed the house of David, but the tribe of _____ only.', 'Judah', 20),
    word(1, 'Which tribe alone followed the house of David?', 'Judah', 20),
    tf(1, 'All Israel made Jeroboam king over all Israel.', true, 20),
    tf(2, 'According to verse 20, the tribes of Judah and Benjamin both followed the house of David.', false, 20, 'Verse 20 says "none that followed the house of David, but the tribe of Judah only".'),
    blank(1, 'And when all Israel heard that Jerobo’am had returned, they sent and called him to the assembly and made him _____ over all Israel.', 'king', 20),

    // ══════════════════════════════════ v21–24 · Shemaiah forbids war
    mc(2, 'How many chosen warriors did Rehoboam assemble?', ['A hundred and eighty thousand', 'Eighty thousand', 'A hundred thousand', 'Twelve thousand'], 21),
    word(3, 'How many chosen warriors did Rehoboam assemble from Judah and Benjamin?', 'a hundred and eighty thousand', 21, ['180000', '180,000', 'one hundred eighty thousand', 'hundred and eighty thousand', 'one hundred and eighty thousand', '180 thousand']),
    blank(3, 'When Rehobo’am came to Jerusalem, he assembled all the house of Judah, and the tribe of _____, a hundred and eighty thousand chosen warriors, to fight against the house of Israel,', 'Benjamin', 21),
    blank(3, 'he assembled all the house of Judah, and the tribe of Benjamin, a hundred and _____ thousand chosen warriors, to fight against the house of Israel,', 'eighty', 21, ['80']),
    mc(2, 'Which two groups did Rehoboam assemble to fight against the house of Israel?', ['The house of Judah and the tribe of Benjamin', 'Judah and Ephraim', 'Benjamin and Levi', 'Judah and Dan'], 21),
    tf(2, 'Rehoboam assembled Judah and Benjamin to fight against the house of Israel and restore the kingdom to himself.', true, 21),
    tf(3, 'Rehoboam assembled eighty thousand chosen warriors.', false, 21, 'He assembled a hundred and eighty thousand chosen warriors.'),

    mc(1, 'To whom did the word of God come, telling Judah not to fight Israel?', ['Shemaiah the man of God', 'Ahijah the Shilonite', 'Nathan the prophet', 'Jeroboam'], 22),
    word(1, 'Which man of God received the word of God about not fighting Israel?', 'Shemai’ah', 22, ['shemaiah']),
    blank(3, 'But the word of God came to Shemai’ah the man of _____:', 'God', 22),
    tf(1, 'The word of God came to Shemaiah the man of God.', true, 22),
    tf(2, 'Shemaiah is called "the prophet" in verse 22.', false, 22, 'He is called "the man of God".'),

    blank(3, 'Say to Rehobo’am the son of Solomon, king of _____, and to all the house of Judah and Benjamin, and to the rest of the people,', 'Judah', 23),
    mc(3, 'To whom was Shemaiah told to deliver the message?', ['Rehoboam, all the house of Judah and Benjamin, and the rest of the people', 'Jeroboam and all Israel', 'The old men and the young men', 'The priests of the high places'], 23),
    word(2, 'In verse 23 Rehoboam is called "the son of ___".', 'Solomon', 23),
    tf(3, 'Verse 23 addresses Rehoboam as "king of Israel".', false, 23, 'He is addressed as "king of Judah".'),

    mc(1, 'What did the LORD command Judah through Shemaiah?', ['"You shall not go up or fight against your kinsmen the people of Israel"', '"Go up and restore the kingdom"', '"Make Jeroboam your king"', '"Build a house for the LORD"'], 24),
    blank(1, 'Thus says the LORD, You shall not go up or fight against your _____ the people of Israel.', 'kinsmen', 24),
    blank(3, 'Return every man to his home, for this thing is from _____.', 'me', 24),
    word(2, 'The LORD called the people of Israel Judah’s ___ (one word).', 'kinsmen', 24, ['kinsman', 'kin']),
    tf(1, 'Judah hearkened to the word of the LORD and went home again.', true, 24),
    tf(2, 'Despite Shemaiah’s word, Judah went up and fought against Israel.', false, 24, 'They hearkened to the word of the LORD and went home again.'),
    mc(3, 'What reason did the LORD give for forbidding the war?', ['"for this thing is from me"', '"for Israel is stronger than you"', '"for Jeroboam is my servant"', '"for I will restore the kingdom later"'], 24),

    // ══════════════════════════════════ v25–27 · Jeroboam builds and fears
    mc(2, 'Which city did Jeroboam build in the hill country of Ephraim and dwell in?', ['Shechem', 'Penuel', 'Bethel', 'Dan'], 25),
    word(2, 'Which other city did Jeroboam build after going out from Shechem?', 'Penu’el', 25, ['penuel']),
    blank(3, 'Then Jerobo’am built Shechem in the hill country of _____, and dwelt there; and he went out from there and built Penu’el.', 'E’phraim', 25, ['ephraim']),
    blank(3, 'and he went out from there and built _____.', 'Penu’el', 25, ['penuel']),
    tf(2, 'Jeroboam built Shechem and dwelt there.', true, 25),
    tf(3, 'Shechem is described as being in the hill country of Judah.', false, 25, 'It is in the hill country of Ephraim.'),

    blank(1, 'And Jerobo’am said in his heart, "Now the _____ will turn back to the house of David;', 'kingdom', 26),
    mc(2, 'What did Jeroboam fear in his heart?', ['That the kingdom would turn back to the house of David', 'That Egypt would invade', 'That the Levites would rebel', 'That Shechem would fall'], 26),
    word(3, 'Jeroboam feared the kingdom would turn back to the house of whom?', 'David', 26),
    tf(2, 'Jeroboam said in his heart that the kingdom would turn back to the house of David.', true, 26),

    mc(2, 'Why was Jeroboam afraid of the people going up to Jerusalem?', ['Their heart would turn to Rehoboam and they would kill him', 'They would bring back the ark', 'They would stop paying tribute', 'Shemaiah would speak against him'], 27),
    blank(3, 'if this people go up to offer _____ in the house of the LORD at Jerusalem, then the heart of this people will turn again to their lord,', 'sacrifices', 27),
    blank(3, 'then the heart of this people will turn again to their lord, to Rehobo’am king of Judah, and they will _____ me and return to Rehobo’am king of Judah.', 'kill', 27),
    word(2, 'Jeroboam feared the people would go up to offer sacrifices in the house of the LORD at which city?', 'Jerusalem', 27),
    tf(2, 'Jeroboam feared that the people would kill him if their hearts turned back to Rehoboam.', true, 27),

    // ══════════════════════════════════ v28–33 · The golden calves
    mc(1, 'What did Jeroboam make so the people would not go up to Jerusalem?', ['Two calves of gold', 'Two bronze serpents', 'An ark of wood', 'A golden altar'], 28),
    word(1, 'How many calves of gold did Jeroboam make?', 'two', 28, ['2']),
    blank(1, 'So the king took counsel, and made two _____ of gold.', 'calves', 28),
    blank(3, 'You have gone up to _____ long enough. Behold your gods, O Israel, who brought you up out of the land of Egypt.', 'Jerusalem', 28),
    mc(3, 'What did Jeroboam say the calves were?', ['"your gods, O Israel, who brought you up out of the land of Egypt"', '"a memorial of Solomon"', '"the cherubim of the LORD"', '"the gods of Egypt"'], 28),
    tf(1, 'Jeroboam made two calves of gold.', true, 28),
    tf(2, 'Jeroboam made the calves of silver.', false, 28, 'They were two calves of gold.'),
    word(3, 'Jeroboam said, "You have gone up to Jerusalem long ___."', 'enough', 28),

    mc(1, 'Where did Jeroboam place the two golden calves?', ['One in Bethel and the other in Dan', 'One in Shechem and the other in Penuel', 'Both in Jerusalem', 'One in Samaria and the other in Hebron'], 29),
    word(1, 'One calf was set in Bethel; where was the other put?', 'Dan', 29),
    blank(1, 'And he set one in _____, and the other he put in Dan.', 'Bethel', 29),
    tf(1, 'Jeroboam set one calf in Bethel and the other in Dan.', true, 29),
    tf(2, 'Jeroboam placed one golden calf in Shechem.', false, 29, 'He set one in Bethel and the other in Dan.'),

    blank(1, 'And this thing became a _____, for the people went to the one at Bethel and to the other as far as Dan.', 'sin', 30),
    tf(2, 'Verse 30 says "this thing became a sin".', true, 30),
    mc(2, 'What does verse 30 say the calf worship became?', ['A sin', 'A feast', 'A memorial', 'A blessing'], 30),
    word(2, 'The people went to the one at Bethel and to the other "as far as ___".', 'Dan', 30),

    mc(2, 'From whom did Jeroboam appoint priests?', ['From among all the people, who were not of the Levites', 'From the Levites only', 'From the sons of Aaron', 'From the young men who grew up with Rehoboam'], 31),
    blank(3, 'He also made houses on high places, and appointed priests from among all the people, who were not of the _____.', 'Levites', 31),
    blank(3, 'He also made houses on high _____, and appointed priests from among all the people, who were not of the Levites.', 'places', 31),
    word(2, 'Jeroboam’s priests were NOT drawn from which group?', 'Levites', 31, ['levi', 'levite', 'the levites']),
    tf(1, 'Jeroboam appointed priests who were not of the Levites.', true, 31),
    tf(3, 'Jeroboam appointed his priests only from the Levites.', false, 31, 'He appointed priests from among all the people, who were not of the Levites.'),

    mc(2, 'On what date did Jeroboam appoint his feast?', ['The fifteenth day of the eighth month', 'The fifteenth day of the seventh month', 'The tenth day of the eighth month', 'The first day of the first month'], 32),
    word(3, 'Jeroboam’s feast was on the fifteenth day of which month?', 'eighth', 32, ['8th', '8', 'the eighth', 'the eighth month', 'eighth month']),
    blank(3, 'And Jerobo’am appointed a feast on the _____ day of the eighth month like the feast that was in Judah,', 'fifteenth', 32, ['15th']),
    blank(3, 'And Jerobo’am appointed a feast on the fifteenth day of the _____ month like the feast that was in Judah,', 'eighth', 32, ['8th']),
    tf(2, 'Jeroboam’s feast was modeled on the feast that was in Judah.', true, 32),
    tf(3, 'Verse 32 says Jeroboam sacrificed to the calves in Dan.', false, 32, 'Verse 32 says "so he did in Bethel, sacrificing to the calves that he had made".'),
    mc(3, 'Where did Jeroboam place the priests of the high places?', ['In Bethel', 'In Dan', 'In Shechem', 'In Penuel'], 32),

    blank(3, 'He went up to the altar which he had made in Bethel on the fifteenth day in the eighth month, in the month which he had devised of his own _____;', 'heart', 33),
    mc(3, 'What does verse 33 say about the month Jeroboam chose for the feast?', ['He had devised it of his own heart', 'The LORD commanded it', 'It matched the Passover', 'The priests chose it'], 33),
    word(2, 'Jeroboam went up to the altar to burn what?', 'incense', 33),
    blank(3, 'and he ordained a feast for the people of Israel, and went up to the altar to burn _____.', 'incense', 33),
    tf(2, 'Jeroboam went up to the altar in Bethel to burn incense.', true, 33),
    tf(3, 'The month of Jeroboam’s feast was one the LORD had appointed.', false, 33, 'It was "the month which he had devised of his own heart".'),

    // ══════════════════════════════════ Whole-chapter
    mc(2, 'Which of these happened FIRST in 1 Kings 12?', ['Israel gathered at Shechem to make Rehoboam king', 'Adoram was stoned to death', 'Jeroboam made two calves of gold', 'Shemaiah forbade Judah to fight'], 1),
    mc(3, 'Which event came LAST in 1 Kings 12?', ['Jeroboam went up to the altar at Bethel to burn incense', 'Rehoboam fled to Jerusalem in his chariot', 'Israel cried "To your tents, O Israel!"', 'Rehoboam consulted the old men'], 33),
    mc(2, 'Who said, "Your father made our yoke heavy"?', ['The assembly of Israel, speaking to Rehoboam', 'The old men to Rehoboam', 'The young men to Rehoboam', 'Jeroboam to Solomon'], 4),
    mc(2, 'Who said, "You have gone up to Jerusalem long enough"?', ['Jeroboam to the people', 'Rehoboam to Israel', 'Shemaiah to Judah', 'Ahijah to Jeroboam'], 28),
    mc(3, 'Who delivered the message, "Thus says the LORD, You shall not go up or fight against your kinsmen"?', ['Shemaiah the man of God', 'Ahijah the Shilonite', 'Jeroboam', 'The old men'], 24),
    mc(1, 'By the end of 1 Kings 12, who reigns over all Israel (the northern tribes)?', ['Jeroboam the son of Nebat', 'Rehoboam the son of Solomon', 'Adoram', 'Shemaiah'], 20),
    tf(3, 'Jeroboam was already in Israel when the assembly gathered at Shechem.', false, 2, 'He was still in Egypt and returned when he heard of it.'),
  ],
};

export default bank;
