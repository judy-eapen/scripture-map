import { mc, blank, word, tf, type ChapterBank, sa } from './types'

const bank: ChapterBank = {
  book: '1 Kings', chapter: 14, tag: 'quiz-v2-1kings-14', rows: [
    mc(1, 'Which son of Jeroboam became sick?', ['Abijah', 'Nadab', 'Abijam', 'Rehoboam'], 1),
    blank(1, "At that time Abi'jah the son of _____ fell sick.", "Jerobo'am", 1, ['Jeroboam']),
    sa(3, 'What happened to Abijah?', 'he fell sick', 1, ['fell sick', 'became sick']),
    tf(1, 'Abijah was Jeroboam’s son.', true, 1),

    mc(1, 'What did Jeroboam tell his wife to do before going to Shiloh?', ['Disguise herself', 'Take their son', 'Wear royal clothing', 'Summon the prophet'], 2),
    blank(1, 'Arise, and _____ yourself, that it be not known that you are the wife of Jerobo’am', 'disguise', 2),
    word(3, 'Which prophet was at Shiloh?', 'Ahijah', 2, ["Ahi'jah"]),
    tf(1, 'Jeroboam wanted everyone to know that the visitor was his wife.', false, 2, 'He told her to disguise herself so her identity would not be known.'),
    mc(3, 'What had Ahijah previously said about Jeroboam?', ['That he would be king over this people', 'That his son would rule Judah', 'That he would rebuild Jerusalem', 'That he would defeat Egypt'], 2),

    mc(2, 'What three kinds of provisions was Jeroboam’s wife to take?', ['Ten loaves, cakes, and a jar of honey', 'Bread, oil, and wine', 'Five loaves, fish, and honey', 'Meal, raisins, and water'], 3),
    blank(2, 'Take with you ten loaves, some cakes, and a jar of _____', 'honey', 3),
    word(1, 'How many loaves was she to take?', 'ten', 3, ['10']),
    tf(3, 'Jeroboam said the prophet would tell her what would happen to the child.', true, 3),

    mc(1, 'Why could Ahijah not see?', ['His eyes were dim because of age', 'He had been injured', 'The house was dark', 'He was asleep'], 4),
    blank(3, "Now Ahi'jah could not see, for his eyes were _____ because of his age.", 'dim', 4),
    word(1, 'To what city did Jeroboam’s wife go?', 'Shiloh', 4),
    tf(2, 'Jeroboam’s wife went to Ahijah’s house.', true, 4),
    mc(3, 'Despite what limitation was Ahijah about to identify his visitor?', ['He could not see because of age', 'He could not hear', 'He could not speak', 'He could not leave his bed'], 4),

    mc(1, 'Who told Ahijah that Jeroboam’s wife was coming?', ['The LORD', 'His servant', 'Jeroboam', 'The child'], 5),
    blank(2, 'When she came, she pretended to be _____ woman.', 'another', 5),
    sa(2, 'About whom was she coming to inquire?', 'her son', 5),
    tf(3, 'The LORD was unaware that she intended to disguise herself.', false, 5, 'The LORD told Ahijah she was coming and what he should say.'),

    mc(1, 'How did Ahijah know the woman had entered?', ['He heard the sound of her feet', 'A servant announced her', 'She called his name', 'She knocked three times'], 6),
    blank(2, 'But when Ahi’jah heard the sound of her _____, as she came in at the door', 'feet', 6, ["Ahi'jah"]),
    sa(1, 'What kind of tidings was Ahijah charged to give her?', 'heavy tidings', 6),
    tf(3, 'Ahijah addressed her as the wife of Jeroboam.', true, 6),
    mc(3, 'What exposed the disguised visitor’s identity in the narrative?', ['The LORD’s revelation and the sound of her feet', 'Her royal jewelry', 'The gifts she carried', 'Her son entering behind her'], 6),

    mc(1, 'From among whom had the LORD exalted Jeroboam?', ['The people', 'The priests', 'David’s sons', 'The Egyptians'], 7),
    blank(2, 'Because I exalted you from among the people, and made you _____ over my people Israel', 'leader', 7),
    word(2, 'Over which people was Jeroboam made leader?', 'Israel', 7),
    tf(3, 'The message said Jeroboam had made himself leader without the LORD’s action.', false, 7, 'The LORD said he had exalted Jeroboam and made him leader.'),

    mc(2, 'From whose house had the kingdom been torn away?', ['The house of David', 'The house of Saul', 'The house of Jeroboam', 'The house of Levi'], 8),
    blank(3, 'who kept my commandments, and followed me with all his _____', 'heart', 8),
    word(1, 'Which servant was held up as the faithful comparison?', 'David', 8),
    tf(2, 'Jeroboam had followed the LORD with all his heart as David did.', false, 8, 'The LORD said Jeroboam had not been like David.'),

    mc(1, 'What had Jeroboam made for himself?', ['Other gods and molten images', 'A new temple in Jerusalem', 'Bronze shields', 'A palace in Shiloh'], 9),
    blank(2, 'and have cast me behind your _____', 'back', 9),
    word(2, 'What emotion did Jeroboam’s acts provoke in the LORD?', 'anger', 9),
    tf(3, 'Jeroboam’s conduct was described as less evil than those before him.', false, 9, 'He had done evil above all who were before him.'),

    mc(2, 'What judgment would come upon Jeroboam’s house?', ['Every male would be cut off and the house consumed', 'It would rule Judah', 'It would move to Egypt', 'Only its wealth would be removed'], 10),
    blank(3, 'I will bring _____ upon the house of Jerobo’am', 'evil', 10),
    sa(1, 'Who among Jeroboam’s house would be cut off?', 'every male', 10),
    tf(2, 'The announced judgment distinguished between bond and free males.', false, 10, 'It included every male, both bond and free in Israel.'),

    mc(1, 'What would eat those of Jeroboam’s house who died in the city?', ['Dogs', 'Birds', 'Lions', 'Jackals'], 11),
    blank(2, 'any one who dies in the open country the _____ of the air shall eat', 'birds', 11),
    word(1, 'Who had spoken this judgment?', 'the LORD', 11, ['LORD']),
    tf(3, 'Birds would eat those who died in the city.', false, 11, 'Dogs would eat those in the city; birds would eat those in the open country.'),

    mc(1, 'When would the sick child die?', ['When his mother’s feet entered the city', 'When she reached Ahijah’s door', 'At sunrise', 'After Jeroboam died'], 12),
    blank(3, 'When your feet enter the _____, the child shall die.', 'city', 12),
    sa(2, 'Where was Jeroboam’s wife told to go?', 'her house', 12, ['home', 'to her house']),
    tf(2, 'Ahijah said the child would recover when she returned.', false, 12, 'He said the child would die when her feet entered the city.'),

    mc(2, 'Why would Abijah alone from Jeroboam’s house come to the grave?', ['Something pleasing to the LORD was found in him', 'He was the oldest son', 'His mother disguised herself', 'He lived in Shiloh'], 13),
    blank(3, 'for he _____ of Jerobo’am shall come to the grave', 'only', 13),
    sa(1, 'Who would mourn for and bury the child?', 'all Israel', 13),
    tf(2, 'Nothing pleasing to the LORD was found in Abijah.', false, 13, 'Something pleasing to the LORD was found in him.'),
    mc(3, 'What distinguished Abijah from the rest of Jeroboam’s house?', ['He alone had something pleasing to the LORD in him', 'He alone lived in Judah', 'He alone became king', 'He alone opposed Ahijah'], 13),

    mc(1, 'What would the LORD raise up over Israel?', ['A king who would cut off Jeroboam’s house', 'A prophet from Egypt', 'A priest from Judah', 'A judge who would restore Saul’s house'], 14),
    blank(2, 'the LORD will raise up for himself a _____ over Israel', 'king', 14),
    word(2, 'Whose house would the coming king cut off?', 'Jeroboam’s', 14, ["Jerobo'am", 'Jeroboam']),
    tf(3, 'The coming king would preserve Jeroboam’s dynasty.', false, 14, 'He would cut off the house of Jeroboam.'),

    mc(2, 'To what was smitten Israel compared?', ['A reed shaken in water', 'A tree in a storm', 'Chaff in the wind', 'A broken vessel'], 15),
    blank(3, 'and scatter them beyond the _____', "Euphra'tes", 15, ['Euphrates']),
    word(1, 'What objects had Israel made that provoked the LORD?', 'Asherim', 15, ["Ashe'rim"]),
    tf(2, 'The LORD said Israel would remain rooted in the good land forever.', false, 15, 'He would root Israel up and scatter them beyond the Euphrates.'),

    mc(1, 'Because of whose sins would the LORD give Israel up?', ['Jeroboam’s', 'Rehoboam’s', 'Solomon’s', 'Ahijah’s'], 16),
    blank(2, 'And he will give Israel up because of the _____ of Jerobo’am', 'sins', 16),
    word(2, 'Whom had Jeroboam caused to sin?', 'Israel', 16),
    tf(3, 'Jeroboam’s sins affected only himself.', false, 16, 'He sinned and made Israel to sin.'),

    mc(1, 'To what city did Jeroboam’s wife return?', ['Tirzah', 'Shiloh', 'Bethel', 'Jerusalem'], 17),
    blank(3, 'And as she came to the _____ of the house, the child died.', 'threshold', 17),
    sa(1, 'What happened as she reached the house?', 'the child died', 17, ['child died', 'he died']),
    tf(2, 'The child died as his mother came to the threshold.', true, 17),

    mc(2, 'According to whose word did Israel bury and mourn the child?', ['The LORD’s word through Ahijah', 'Jeroboam’s decree', 'Rehoboam’s command', 'The law of Egypt'], 18),
    blank(2, 'And all Israel buried him and _____ for him', 'mourned', 18),
    word(1, 'Which prophet had spoken the LORD’s word?', 'Ahijah', 18, ["Ahi'jah"]),
    tf(3, 'Only the child’s family mourned him.', false, 18, 'All Israel buried and mourned him.'),

    mc(1, 'Where were the rest of Jeroboam’s acts recorded?', ['The Book of the Chronicles of the Kings of Israel', 'The Book of the Kings of Judah', 'The records of Shiloh', 'The book of Ahijah'], 19),
    blank(3, 'how he _____ and how he reigned', 'warred', 19),
    sa(2, 'What two aspects of Jeroboam’s rule are mentioned?', 'how he warred and reigned', 19, ['warred and reigned']),
    tf(2, 'The verse says no written record of Jeroboam’s acts existed.', false, 19, 'His acts were written in the Book of the Chronicles of the Kings of Israel.'),

    mc(1, 'How long did Jeroboam reign?', ['Twenty-two years', 'Seventeen years', 'Forty-one years', 'Twelve years'], 20),
    blank(3, 'And the time that Jerobo’am reigned was _____-two years', 'twenty', 20, ['22', 'twenty-two']),
    word(1, 'Who reigned after Jeroboam?', 'Nadab', 20),
    tf(2, 'Abijam succeeded Jeroboam as king of Israel.', false, 20, 'Nadab, Jeroboam’s son, reigned in his stead.'),

    mc(2, 'How old was Rehoboam when he began to reign?', ['Forty-one', 'Twenty-two', 'Seventeen', 'Forty'], 21),
    blank(3, 'and he reigned _____ years in Jerusalem', 'seventeen', 21, ['17']),
    word(1, 'Who was Rehoboam’s mother?', 'Naamah the Ammonitess', 21, ["Na'amah", 'Naamah']),
    tf(2, 'Rehoboam, Solomon’s son, reigned in Judah.', true, 21),

    mc(1, 'How did Judah act in the LORD’s sight?', ['They did evil', 'They kept every command', 'They removed the high places', 'They followed David wholeheartedly'], 22),
    blank(2, 'and they provoked him to _____ with their sins', 'jealousy', 22),
    word(2, 'Whom did Judah provoke with their sins?', 'the LORD', 22, ['LORD']),
    tf(3, 'Judah’s sins were fewer than all their fathers’ sins.', false, 22, 'They provoked the LORD more than all their fathers had done.'),

    mc(2, 'What did Judah build for themselves?', ['High places, pillars, and Asherim', 'Only houses and city walls', 'Bronze shields and guardrooms', 'Altars only in Jerusalem'], 23),
    blank(3, 'on every high hill and under every green _____', 'tree', 23),
    sa(1, 'Where were the cult objects placed?', 'on every high hill and under every green tree', 23, ['high hills and green trees']),
    tf(2, 'Judah confined its high places to one location.', false, 23, 'They built them on every high hill and under every green tree.'),

    mc(1, 'Who were also present in the land?', ['Male cult prostitutes', 'Prophets from Shiloh', 'Egyptian guards', 'Sons of Ahijah'], 24),
    blank(2, 'They did according to all the _____ of the nations', 'abominations', 24),
    sa(2, 'Whose practices did Judah imitate?', 'the nations', 24),
    tf(3, 'Judah rejected all the practices of the nations driven out before Israel.', false, 24, 'They practiced the nations’ abominations.'),

    mc(1, 'Who came against Jerusalem in Rehoboam’s fifth year?', ['Shishak king of Egypt', 'Nadab king of Israel', 'Ahijah of Shiloh', 'The king of Syria'], 25),
    blank(3, 'In the _____ year of King Rehobo’am, Shishak king of Egypt came up against Jerusalem', 'fifth', 25, ['5th', 'five']),
    word(1, 'Of what country was Shishak king?', 'Egypt', 25),
    tf(2, 'Shishak attacked Jerusalem in Rehoboam’s seventeenth year.', false, 25, 'He came in Rehoboam’s fifth year.'),

    mc(2, 'What did Shishak take from Jerusalem?', ['The temple and royal treasures, including Solomon’s gold shields', 'Only food from the storehouses', 'The bronze shields made by Rehoboam', 'The ark of the covenant'], 26),
    blank(3, 'he took away _____', 'everything', 26),
    sa(1, 'What kind of shields had Solomon made?', 'gold shields', 26, ['shields of gold', 'gold']),
    tf(2, 'Shishak left the treasures of the LORD’s house untouched.', false, 26, 'He took the treasures of the LORD’s house and the king’s house.'),

    mc(1, 'What did Rehoboam make in place of Solomon’s gold shields?', ['Shields of bronze', 'Shields of iron', 'Shields of silver', 'Shields of wood'], 27),
    blank(2, 'and King Rehobo’am made in their stead shields of _____', 'bronze', 27),
    sa(2, 'Who guarded the replacement shields?', 'the officers of the guard', 27, ['officers of the guard', 'the guard']),
    tf(3, 'Rehoboam replaced the gold shields with silver ones.', false, 27, 'He made shields of bronze.'),
    mc(3, 'After Shishak took Solomon’s gold shields, what material did Rehoboam use for replacements?', ['Bronze', 'Gold', 'Silver', 'Iron'], 27),

    mc(2, 'When did the guard carry the bronze shields?', ['Whenever the king went into the LORD’s house', 'Whenever an army attacked', 'Every Sabbath morning', 'When tribute went to Egypt'], 28),
    blank(3, 'the guard bore them and brought them back to the _____', 'guardroom', 28),
    sa(1, 'Where were the shields returned?', 'the guardroom', 28, ['guardroom']),
    tf(2, 'The bronze shields remained permanently displayed in the LORD’s house.', false, 28, 'The guard brought them back to the guardroom.'),

    mc(1, 'Where were Rehoboam’s remaining acts recorded?', ['The Book of the Chronicles of the Kings of Judah', 'The Chronicles of the Kings of Israel', 'The book of Ahijah', 'The records of Egypt'], 29),
    blank(2, 'Now the rest of the _____ of Rehobo’am, and all that he did', 'acts', 29),
    word(2, 'Which kingdom’s chronicle recorded Rehoboam?', 'Judah', 29),
    tf(3, 'Rehoboam’s acts were recorded in the chronicles of Israel’s kings.', false, 29, 'They were recorded in the Book of the Chronicles of the Kings of Judah.'),

    mc(1, 'What relationship continued between Rehoboam and Jeroboam?', ['War', 'Peace', 'A trade alliance', 'A shared kingdom'], 30),
    blank(3, 'And there was _____ between Rehobo’am and Jerobo’am continually.', 'war', 30),
    word(1, 'How often was there war between the two kings?', 'continually', 30),
    tf(2, 'Rehoboam and Jeroboam maintained continual peace.', false, 30, 'There was war between them continually.'),

    mc(1, 'Who reigned after Rehoboam?', ['Abijam', 'Nadab', 'Abijah', 'Shishak'], 31),
    blank(2, 'And Rehobo’am slept with his fathers and was buried with his fathers in the city of _____.', 'David', 31),
    word(2, 'What nationality was Rehoboam’s mother Naamah?', 'Ammonitess', 31, ['Ammonite']),
    tf(3, 'Rehoboam was buried in Shiloh.', false, 31, 'He was buried in the city of David.'),
    mc(3, 'Which pair correctly identifies Rehoboam’s mother and successor?', ['Naamah the Ammonitess and Abijam', 'Jezebel and Nadab', 'Jeroboam’s wife and Abijah', 'Bathsheba and Solomon'], 31),
  ],
}

export default bank
