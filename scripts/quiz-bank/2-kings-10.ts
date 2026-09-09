import { mc, blank, word, tf, type ChapterBank, sa } from './types'

const bank: ChapterBank = {
  book: '2 Kings', chapter: 10, tag: 'quiz-v2-2kings-10', rows: [
    mc(2, 'How many sons of Ahab were in Samaria?', ['Seventy', 'Forty-two', 'Eighty', 'Twenty-eight'], 1),
    blank(1, 'So Jehu wrote _____, and sent them to Sama’ria', 'letters', 1),
    sa(3, 'To whom were Ahab’s sons entrusted?', 'the rulers, elders, and guardians in Samaria', 1, ['the city rulers elders and guardians']),
    tf(2, 'Jehu wrote only to Ahab’s sons and not to their guardians.', false, 1, 'His letters addressed the rulers, elders, and guardians who had charge of Ahab’s sons.'),

    mc(1, 'What resources did Jehu acknowledge were available to Ahab’s supporters?', ['Princes, chariots, horses, cities, and weapons', 'A royal palace with its treasury', 'An army supplied by the Syrians', 'The assembled prophets of Baal'], 2),
    blank(3, 'there are with you chariots and horses, fortified cities also, and _____.', 'weapons', 2),
    sa(2, 'Whose sons were with the letter’s recipients?', 'their master’s sons', 2, ['Ahab’s sons']),
    tf(1, 'Jehu’s letter noted that the recipients had military resources.', true, 2),

    mc(1, 'What challenge did Jehu issue?', ['Crown Ahab’s best son and fight for the dynasty', 'Send every son to Jezreel', 'Surrender Samaria without a king', 'Attack Hazael'], 3),
    blank(2, 'set him on his father’s _____.', 'throne', 3),
    sa(1, 'What kind of son were they to select?', 'the best and fittest', 3, ['best and fittest son']),
    tf(3, 'Jehu forbade Ahab’s supporters from choosing a king to oppose him.', false, 3, 'He challenged them to choose the best of Ahab’s sons, set him on the throne, and fight for their master’s house.'),

    mc(1, 'Why were Samaria’s leaders terrified?', ['Two kings had failed to withstand Jehu', 'Their fortified city had no defenses', 'All of Ahab’s sons had already fled', 'A Syrian force had surrounded Samaria'], 4),
    blank(3, 'But they were exceedingly afraid, and said, "Behold, the two kings could not _____ before him;', 'stand', 4),
    word(2, 'How many kings did they say could not stand before Jehu?', 'two', 4, ['2']),
    tf(1, 'The leaders doubted their ability to oppose Jehu.', true, 4),

    mc(1, 'What loyalty did the city leaders declare?', ['They would serve and obey Jehu', 'They would crown one of Ahab’s sons', 'They would transfer allegiance to Hazael', 'They would abandon the city of Samaria'], 5),
    blank(2, 'We will not make any one _____.', 'king', 5),
    sa(1, 'Which officials joined in the message?', 'palace and city overseers, elders, and guardians', 5, ['the officials elders and guardians']),
    tf(3, 'The city leaders insisted on choosing Ahab’s successor themselves.', false, 5, 'They called themselves Jehu’s servants and told him to do whatever seemed good to him.'),

    mc(1, 'What proof of obedience did Jehu demand?', ['The heads of Ahab’s sons', 'The city’s weapons', 'Seventy talents of silver', 'The prophets of Baal'], 6),
    blank(3, 'come to me at Jezreel _____ at this time.', 'tomorrow', 6),
    sa(2, 'Who were raising the seventy princes?', 'the great men of the city', 6, ['Samaria’s great men']),
    tf(1, 'The demand appeared in Jehu’s second letter.', true, 6),

    mc(1, 'What did the leaders send to Jehu?', ['Seventy severed heads in baskets', 'The princes alive', 'Seventy baskets of food', 'A royal crown'], 7),
    blank(2, 'and put their heads in _____.', 'baskets', 7),
    word(1, 'Where were the baskets sent?', 'Jezreel', 7),
    tf(3, 'The leaders spared some of Ahab’s seventy sons.', false, 7, 'They killed all seventy sons and sent their heads to Jehu.'),

    mc(1, 'Where did Jehu order the heads placed?', ['In two heaps at the gate entrance', 'Inside Ahab’s palace', 'On Naboth’s plot', 'At Samaria’s wall'], 8),
    blank(3, 'Lay them in two _____ at the entrance of the gate', 'heaps', 8),
    sa(2, 'Until when were the heads to remain?', 'until morning', 8, ['the morning']),
    tf(1, 'A messenger reported the arrival of the princes’ heads.', true, 8),
    mc(3, 'What gruesome evidence of loyalty reached Jehu?', ['Seventy heads in baskets, arranged in two heaps', 'Seventy captured soldiers brought from Samaria', 'Ahab’s royal crown and ceremonial garments', 'The seventy princes delivered to Jehu alive'], 8),

    mc(1, 'What distinction did Jehu make before the people?', ['He killed his master; others killed Ahab’s sons', 'He bore no responsibility for any death', 'The gathered people had personally killed Joram', 'Elijah had directly ordered the beheadings'], 9),
    blank(2, 'Then in the morning, when he went out, he stood, and said to all the people, "You are innocent. It was I who conspired against my master, and slew him; but who struck down all _____?', 'these', 9),
    sa(1, 'When did Jehu address the people?', 'in the morning', 9),
    tf(3, 'Jehu denied having conspired against and killed his master.', false, 9, 'Jehu openly said, “I conspired against my master and killed him.”'),

    mc(1, 'What did Jehu say could not fail?', ['The LORD’s word against Ahab’s house', 'The fortified defenses around Samaria', 'The demands contained in Jehu’s letters', 'The continuing public worship of Baal'], 10),
    blank(3, 'there shall fall to the earth _____ of the word of the LORD', 'nothing', 10),
    word(2, 'Through whom had the LORD spoken?', 'Elijah', 10, ["Eli'jah"]),
    tf(1, 'Jehu interpreted the deaths as fulfillment of prophecy.', true, 10),

    mc(1, 'Whom else did Jehu kill in Jezreel?', ['Ahab’s remaining leaders, friends, and priests', 'Every remaining resident of the city', 'Jehonadab and all of his descendants', 'The guardians who remained in Samaria'], 11),
    blank(2, 'until he left him _____ remaining.', 'none', 11),
    word(1, 'Whose house was being eliminated?', 'Ahab’s', 11, ['the house of Ahab']),
    tf(3, 'Jehu spared Ahab’s priests and close friends in Jezreel.', false, 11, 'He killed Ahab’s remaining great men, familiar friends, and priests until none remained.'),

    mc(1, 'Where was Jehu traveling?', ['From Jezreel toward Samaria', 'From Samaria to Damascus', 'From Bethel to Dan', 'From Jerusalem to Jezreel'], 12),
    blank(3, 'when he was at Beth-eked of the _____.', 'Shepherds', 12),
    sa(2, 'What marked the location on Jehu’s route?', 'Beth-eked of the Shepherds', 12, ['Beth-eked']),
    tf(1, 'Jehu encountered the next group while en route to Samaria.', true, 12),

    mc(1, 'Whom did Jehu meet at Beth-eked?', ['Ahaziah king of Judah’s kinsmen', 'Ahab’s seventy sons', 'Baal’s priests', 'Hazael’s soldiers'], 13),
    blank(2, 'we came down to visit the royal _____', 'princes', 13),
    sa(1, 'Whom else did the kinsmen plan to visit?', 'the queen mother’s sons', 13, ['sons of the queen mother']),
    tf(3, 'The travelers concealed their relationship to King Ahaziah.', false, 13, 'They openly identified themselves as Ahaziah’s kinsmen.'),

    mc(1, 'What did Jehu order done with Ahaziah’s kinsmen?', ['Capture them alive, then kill them', 'Escort them safely into Samaria', 'Send them back toward the land of Judah', 'Make them servants within Jehu’s household'], 14),
    blank(3, 'forty-two persons, and he spared _____ of them.', 'none', 14),
    word(2, 'How many kinsmen were killed?', 'forty-two', 14, ['42']),
    tf(1, 'The kinsmen were slain at the pit of Beth-eked.', true, 14),

    mc(1, 'Whom did Jehu meet after leaving Beth-eked?', ['Jehonadab son of Rechab', 'Elisha', 'Jehoahaz', 'Hazael'], 15),
    blank(2, 'Is your heart _____ to my heart as mine is to yours?', 'true', 15),
    sa(1, 'What gesture sealed the agreement?', 'Jehonadab gave Jehu his hand', 15, ['he gave him his hand', 'gave his hand']),
    tf(3, 'Jehu left Jehonadab standing beside the road.', false, 15, 'After Jehonadab gave him his hand, Jehu took him up into the chariot.'),

    mc(1, 'What did Jehu invite Jehonadab to observe?', ['His zeal for the LORD', 'His battle with Hazael', 'The rebuilding of Samaria', 'His worship of Baal'], 16),
    blank(3, 'Come with me, and see my _____ for the LORD.', 'zeal', 16),
    sa(2, 'Where did Jehonadab ride?', 'in Jehu’s chariot', 16, ['the chariot']),
    tf(1, 'Jehu presented his actions as zeal for the LORD.', true, 16),

    mc(1, 'What did Jehu do upon reaching Samaria?', ['Killed all who remained to Ahab', 'Crowned Ahab’s son', 'Released Baal’s priests', 'Returned to Jezreel'], 17),
    blank(2, 'till he had _____ them out', 'wiped', 17),
    sa(1, 'Whose earlier word did this fulfill?', 'the LORD’s word to Elijah', 17, ['the word spoken to Elijah']),
    tf(3, 'Jehu preserved Ahab’s remaining supporters in Samaria.', false, 17, 'He killed all who remained to Ahab in Samaria, fulfilling the LORD’s word to Elijah.'),

    mc(1, 'What deceptive claim did Jehu make?', ['He would serve Baal more than Ahab had', 'He had abandoned Israel’s throne', 'He would restore Ahab’s sons', 'He would follow Jeroboam no longer'], 18),
    blank(3, 'Ahab served Ba’al a little; but Jehu will serve him _____.', 'much', 18),
    sa(2, 'Whom did Jehu assemble to hear his claim?', 'all the people', 18, ['the people']),
    tf(1, 'Jehu publicly claimed greater devotion to Baal than Ahab.', true, 18),

    mc(1, 'Why did Jehu summon every worshiper and priest of Baal?', ['He planned to destroy them through cunning', 'He sincerely wanted a sacrifice', 'He needed their political support', 'He wanted them to flee Israel'], 19),
    blank(2, 'whoever is missing shall not _____.', 'live', 19),
    sa(1, 'What event did Jehu announce?', 'a great sacrifice to Baal', 19, ['great sacrifice', 'sacrifice to Baal']),
    tf(3, 'Jehu openly announced that his real purpose was to destroy Baal’s worshipers.', false, 19, 'He announced a great sacrifice, but acted with cunning in order to destroy them.'),

    mc(1, 'What did Jehu order proclaimed?', ['A solemn assembly for Baal', 'A fast for Israel', 'A coronation at Jezreel', 'War against Syria'], 20),
    blank(3, 'Sanctify a solemn _____ for Ba’al.', 'assembly', 20),
    tf(2, 'Jehu proclaimed a solemn assembly for Baal.', true, 20),
    tf(1, 'The gathering was formally announced.', true, 20),

    mc(1, 'How fully did Baal’s worshipers respond?', ['All came, filling Baal’s house', 'Only the ordained priests arrived', 'Most of the worshipers stayed home', 'No one believed Jehu’s proclamation'], 21),
    blank(2, 'the house of Ba’al was _____ from one end to the other.', 'filled', 21),
    word(1, 'Who sent the summons throughout Israel?', 'Jehu', 21),
    tf(3, 'Many of Baal’s worshipers ignored Jehu’s summons.', false, 21, 'All the worshipers came, and Baal’s house was filled from end to end.'),

    mc(1, 'What was distributed to Baal’s worshipers?', ['Vestments from the wardrobe', 'Weapons', 'Bread and water', 'Flasks of oil'], 22),
    blank(3, 'Bring out the _____ for all the worshipers of Ba’al.', 'vestments', 22),
    sa(2, 'Who supplied the garments?', 'the person in charge of the wardrobe', 22, ['the wardrobe keeper']),
    tf(1, 'The worshipers received distinctive clothing.', true, 22),

    mc(1, 'Whom did Jehu bring into Baal’s house?', ['Jehonadab son of Rechab', 'Elisha', 'Jehoahaz', 'The king of Judah'], 23),
    blank(2, 'see that there is no _____ of the LORD here among you', 'servant', 23),
    sa(1, 'Who alone was supposed to remain inside?', 'the worshipers of Baal', 23, ['Baal worshipers']),
    tf(3, 'Jehu welcomed servants of the LORD into Baal’s assembly.', false, 23, 'He ordered a careful search so that only Baal’s worshipers would remain.'),

    mc(1, 'How many men did Jehu station outside?', ['Eighty', 'Seventy', 'Forty-two', 'Twenty-eight'], 24),
    blank(3, 'Now Jehu had stationed eighty men outside, and said, "The man who allows any of those whom I give into your hands to escape shall _____ his life."', 'forfeit', 24),
    sa(2, 'What were the guards forbidden to allow?', 'any worshiper to escape', 24, ['an escape', 'anyone to escape']),
    tf(1, 'A guard’s own life was the penalty for letting a captive escape.', true, 24),

    mc(1, 'What command followed the burnt offering?', ['Kill the worshipers and allow no escape', 'Release every worshiper from the building', 'Set fire to the entire city of Samaria', 'Send all the priests into Judah as exiles'], 25),
    blank(2, 'So as soon as he had made an end of offering the burnt offering, Jehu said to the guard and to the officers, "Go in and _____ them;', 'slay', 25),
    sa(1, 'Who carried out the killing?', 'the guard and officers', 25, ['guards and officers']),
    tf(3, 'Jehu’s guards released Baal’s worshipers after the burnt offering.', false, 25, 'The guards and officers killed them, allowed none to escape, and entered the inner room.'),

    mc(1, 'What did Jehu’s men do to Baal’s pillar?', ['Brought it out and burned it', 'Moved it to Bethel', 'Covered it with garments', 'Left it standing'], 26),
    blank(3, 'and they brought out the pillar that was in the house of Ba\'al, and _____ it.', 'burned', 26),
    sa(2, 'From where was the pillar removed?', 'the house of Baal', 26, ['Baal’s house']),
    tf(1, 'The pillar was destroyed by fire.', true, 26),

    mc(1, 'What did Baal’s house become?', ['A latrine', 'A temple of the LORD', 'Jehu’s palace', 'A city gate'], 27),
    blank(2, 'and made it a _____ to this day.', 'latrine', 27),
    sa(1, 'What structures did they demolish?', 'Baal’s pillar and house', 27, ['the pillar and house of Baal']),
    tf(3, 'Jehu preserved Baal’s house as a royal storehouse.', false, 27, 'The house was demolished and made into a latrine.'),
    mc(3, 'How did Jehu’s deception end Baal’s organized worship?', ['The worshipers were killed and their sanctuary demolished', 'Every priest was persuaded to worship the LORD', 'The shrine and its priests were transferred to Dan', 'The house was closed while its pillar was preserved'], 27),

    mc(1, 'What did Jehu eliminate from Israel?', ['Baal', 'The golden calves', 'Every high place', 'The house of David'], 28),
    blank(3, 'Thus Jehu _____ out Ba’al from Israel.', 'wiped', 28),
    word(2, 'From which kingdom was Baal wiped out?', 'Israel', 28),
    tf(1, 'Jehu’s campaign ended Baal worship in Israel.', true, 28),

    mc(1, 'Which sins did Jehu retain?', ['Jeroboam’s calves at Bethel and Dan', 'Ahab’s pillar devoted to the god Baal', 'Jezebel’s many sorceries and harlotries', 'Mesha’s practice of offering human sacrifice'], 29),
    blank(2, 'the golden calves that were in Bethel, and in _____.', 'Dan', 29),
    sa(1, 'Who had caused Israel to commit these sins?', 'Jeroboam son of Nebat', 29, ['Jeroboam']),
    tf(3, 'After destroying Baal, Jehu also removed Jeroboam’s golden calves.', false, 29, 'Jehu did not turn aside from the sins connected with the calves at Bethel and Dan.'),

    mc(1, 'What dynasty promise did the LORD give Jehu?', ['His line would rule through four generations', 'His descendants would govern Israel forever', 'He would completely conquer the kingdom of Syria', 'His immediate son would become king of Judah'], 30),
    blank(3, 'your sons of the fourth _____ shall sit on the throne of Israel.', 'generation', 30),
    sa(2, 'Why was Jehu rewarded?', 'he carried out the LORD’s judgment on Ahab’s house', 30, ['he did what was right concerning Ahab’s house']),
    tf(1, 'The promise was limited to four generations.', true, 30),

    mc(1, 'What spiritual failure remained in Jehu?', ['He did not walk in the LORD’s law wholeheartedly', 'He restored Baal worship', 'He refused to destroy Ahab’s house', 'He worshiped Syria’s gods'], 31),
    blank(2, 'But Jehu was not careful to walk in the law of the LORD the God of Israel with all his _____;', 'heart', 31),
    word(1, 'From whose sins did Jehu fail to turn?', 'Jeroboam’s', 31, ['Jeroboam']),
    tf(3, 'Jehu’s zeal was matched by wholehearted obedience to the law.', false, 31, 'He was not careful to walk in the LORD’s law with all his heart.'),

    mc(1, 'Who began cutting off parts of Israel?', ['The LORD', 'Jehu', 'Jehonadab', 'The king of Judah'], 32),
    blank(3, 'Haz’ael _____ them throughout the territory of Israel.', 'defeated', 32),
    word(2, 'Which foreign king attacked Israel?', 'Hazael', 32, ["Haza'el"]),
    tf(1, 'Israel began losing territory during Jehu’s reign.', true, 32),

    mc(1, 'Which region east of the Jordan was lost?', ['All Gilead and Bashan', 'Judah and Jerusalem', 'Bethel and Dan', 'Samaria and Jezreel'], 33),
    blank(2, 'the Gadites, and the Reubenites, and the _____.', 'Manas’sites', 33, ['Manassites']),
    word(1, 'What valley lay by Aroer?', 'Arnon', 33, ['the Arnon', 'valley of the Arnon']),
    tf(3, 'Hazael’s conquests were limited to territory west of the Jordan.', false, 33, 'The losses included Gilead and Bashan east of the Jordan.'),

    mc(1, 'Where were Jehu’s other deeds and might recorded?', ['Chronicles of the Kings of Israel', 'Chronicles of Judah', 'Book of Elijah', 'Records of Syria'], 34),
    blank(3, 'Now the rest of the acts of Jehu, and all that he did, and all his _____, are they not written in the Book of the Chronicles of the Kings of Israel?', 'might', 34),
    word(2, 'Whose acts does the verse summarize?', 'Jehu’s', 34, ['Jehu']),
    tf(1, 'The narrator refers readers to Israel’s royal chronicles.', true, 34),

    mc(1, 'Who succeeded Jehu?', ['Jehoahaz his son', 'Jehonadab', 'Hazael', 'Joash of Judah'], 35),
    blank(2, 'they buried him in _____.', 'Sama’ria', 35, ['Samaria']),
    sa(1, 'What phrase reports Jehu’s death?', 'he slept with his fathers', 35, ['slept with his fathers']),
    tf(3, 'Jehu was buried outside Samaria in Jezreel.', false, 35, 'He was buried in Samaria, and Jehoahaz succeeded him.'),

    mc(1, 'How long did Jehu reign?', ['Twenty-eight years', 'Forty years', 'Seven years', 'Twelve years'], 36),
    blank(3, 'The time that Jehu reigned over Israel in Sama\'ria was _____-eight years.', 'twenty', 36),
    word(2, 'Over which kingdom did Jehu reign?', 'Israel', 36),
    tf(1, 'Jehu’s reign was based in Samaria.', true, 36),
  ],
}

export default bank
