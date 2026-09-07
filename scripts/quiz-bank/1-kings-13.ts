import { mc, blank, word, tf, type ChapterBank } from './types'

const bank: ChapterBank = {
  book: '1 Kings', chapter: 13, tag: 'quiz-v2-1kings-13', rows: [
    mc(2, 'From where did the man of God come to Bethel?', ['Judah', 'Samaria', 'Dan', 'Shiloh'], 1),
    blank(3, 'And behold, a man of God came out of _____ by the word of the LORD to Bethel.', 'Judah', 1),
    word(1, 'Who was standing by the altar to burn incense when the man of God arrived?', 'Jerobo’am', 1, ['Jeroboam']),
    tf(1, 'The man of God came to Bethel by the word of the LORD.', true, 1),

    mc(1, 'What name did the man of God give for the future son of David’s house?', ['Josiah', 'Jeroboam', 'Rehoboam', 'Abijah'], 2),
    blank(3, 'Behold, a son shall be born to the house of David, _____ by name;', 'Josi’ah', 2, ['Josiah']),
    word(3, 'Upon what did the man of God say men’s bones would be burned?', 'altar', 2),
    tf(3, 'The man of God said the future son would sacrifice the priests of the high places upon the altar.', true, 2),
    mc(3, 'Which future king was named long before the prophecy was fulfilled?', ['Josiah', 'Ahab', 'Jehu', 'Hezekiah'], 2),

    mc(1, 'What sign was given concerning the altar?', ['It would be torn down and its ashes poured out', 'Fire would consume it', 'It would be carried to Judah', 'The king would cover it with gold'], 3),
    blank(3, 'Behold, the altar shall be torn down, and the _____ that are upon it shall be poured out.', 'ashes', 3),
    word(1, 'What would be poured out from the torn-down altar?', 'ashes', 3),
    tf(2, 'The sign said the altar would remain standing while its fire went out.', false, 3, 'The altar would be torn down and its ashes poured out.'),

    mc(1, 'What happened when Jeroboam stretched out his hand against the man of God?', ['His hand dried up and he could not draw it back', 'The altar caught fire', 'The man of God fled', 'His servants seized the prophet'], 4),
    blank(3, 'And his hand, which he stretched out against him, _____ up, so that he could not draw it back to himself.', 'dried', 4),
    word(3, 'What command did Jeroboam give after stretching out his hand?', 'Lay hold of him', 4, ['lay hold', 'lay hold of him']),
    tf(3, 'Jeroboam was immediately able to draw his outstretched hand back to himself.', false, 4, 'His hand dried up so that he could not draw it back.'),
    mc(2, 'What prevented Jeroboam from drawing his hand back?', ['It dried up', 'The man of God held it', 'The altar trapped it', 'A guard restrained him'], 4),

    mc(1, 'How was the sign concerning the altar fulfilled?', ['The altar was torn down and its ashes poured out', 'The altar split but retained its ashes', 'The priests removed the altar', 'Jeroboam repaired the altar'], 5),
    blank(3, 'The altar also was torn down, and the ashes _____ out from the altar,', 'poured', 5),
    word(3, 'According to whose word had the man of God given the sign?', 'the LORD', 5, ['LORD']),
    tf(3, 'The altar remained intact after the man of God gave the sign.', false, 5, 'The altar was torn down and its ashes were poured out.'),

    mc(1, 'What did Jeroboam ask the man of God to do for his hand?', ['Pray that it might be restored', 'Anoint it with oil', 'Place it on the altar', 'Take him back to Judah'], 6),
    blank(3, 'Entreat now the favor of the LORD your God, and _____ for me, that my hand may be restored to me.', 'pray', 6),
    word(1, 'What happened after the man of God entreated the LORD?', 'The king’s hand was restored', 6, ['his hand was restored', 'restored']),
    tf(2, 'The king’s hand became as it was before after the man of God prayed.', true, 6),

    mc(1, 'What did the king offer the man of God after his hand was restored?', ['Refreshment and a reward', 'A place among his priests', 'Half his army', 'The altar at Bethel'], 7),
    blank(3, 'Come home with me, and refresh yourself, and I will give you a _____.', 'reward', 7),
    word(3, 'Where did the king invite the man of God to go?', 'home with him', 7, ['home']),
    tf(3, 'The king threatened the man of God again after his hand was restored.', false, 7, 'He invited him home for refreshment and offered him a reward.'),

    mc(2, 'What did the man of God say would not persuade him to go with the king?', ['Half the king’s house', 'The king’s throne', 'A hundred talents', 'The city of Bethel'], 8),
    blank(3, 'If you give me half your _____, I will not go in with you.', 'house', 8),
    word(1, 'What two things did the man of God refuse to consume in that place?', 'bread and water', 8, ['bread or water']),
    tf(2, 'The man of God agreed to drink water but refused bread.', false, 8, 'He refused both bread and water in that place.'),

    mc(1, 'Which three restrictions had the LORD given the man of God?', ['Do not eat bread, drink water, or return by the same way', 'Do not speak, pray, or enter Bethel', 'Do not approach the altar, king, or priests', 'Do not travel by day, alone, or through Judah'], 9),
    blank(3, 'You shall neither eat bread, nor drink water, nor _____ by the way that you came.', 'return', 9),
    word(3, 'How had the man of God received the command?', 'by the word of the LORD', 9, ['the word of the LORD']),
    tf(3, 'The LORD permitted the man of God to return by the same road if he ate no bread.', false, 9, 'He was commanded neither to eat or drink nor to return by the way he came.'),
    mc(3, 'Which action was not forbidden to the man of God?', ['Taking another way from Bethel', 'Eating bread there', 'Drinking water there', 'Returning by the way he came'], 9),

    mc(1, 'How did the man of God leave Bethel?', ['By another way', 'By the same road', 'With Jeroboam', 'Through Samaria'], 10),
    blank(3, 'So he went _____ way, and did not return by the way that he came to Bethel.', 'another', 10),
    word(1, 'To which city did the man of God not return by the way he came?', 'Bethel', 10),
    tf(2, 'The man of God initially obeyed the instruction to leave by another way.', true, 10),

    mc(1, 'Who lived in Bethel and heard what the man of God had done?', ['An old prophet', 'A priest from Judah', 'Josiah', 'Rehoboam'], 11),
    blank(3, 'Now there dwelt an old _____ in Bethel.', 'prophet', 11),
    word(1, 'Who told the old prophet what had happened that day?', 'his sons', 11),
    tf(3, 'The old prophet’s sons also reported the words spoken to the king.', true, 11),

    mc(1, 'What did the old prophet ask his sons?', ['Which way the man of God went', 'What reward the king offered', 'Why the altar fell', 'Where Josiah lived'], 12),
    blank(2, 'And his sons showed him the _____ which the man of God who came from Judah had gone.', 'way', 12),
    word(3, 'From where had the man of God come?', 'Judah', 12),
    tf(3, 'The sons did not know which way the man of God had gone.', false, 12, 'They showed their father the way he had gone.'),

    mc(1, 'What did the old prophet tell his sons to saddle?', ['An ass', 'A horse', 'A camel', 'A mule'], 13),
    blank(2, 'So they saddled the ass for him and he _____ it.', 'mounted', 13),
    word(1, 'Who saddled the animal for the old prophet?', 'his sons', 13),
    tf(2, 'The old prophet mounted the animal his sons saddled.', true, 13),

    mc(1, 'Where did the old prophet find the man of God?', ['Sitting under an oak', 'At the altar', 'Inside the king’s house', 'At Judah’s gate'], 14),
    blank(2, 'And he went after the man of God, and found him sitting under an _____.', 'oak', 14),
    word(1, 'How did the man of God answer when asked whether he was the man from Judah?', 'I am', 14),
    tf(3, 'The old prophet found the man of God walking along the road.', false, 14, 'He found him sitting under an oak.'),

    mc(1, 'What did the old prophet invite the man of God to do?', ['Come home and eat bread', 'Return to the altar', 'Meet King Jeroboam', 'Travel to Samaria'], 15),
    blank(2, 'Come _____ with me and eat bread.', 'home', 15),
    word(1, 'What food did the old prophet offer?', 'bread', 15),
    tf(2, 'The old prophet invited the man of God into his home.', true, 15),

    mc(2, 'How did the man of God first answer the old prophet’s invitation?', ['He said he could not return or go in with him', 'He accepted immediately', 'He asked for a reward', 'He asked permission from the king'], 16),
    blank(2, 'I may not _____ with you, or go in with you;', 'return', 16),
    word(1, 'What two things did he again say he would not consume?', 'bread and water', 16, ['bread or water']),
    tf(3, 'The man of God initially said he could eat with the prophet outside Bethel.', false, 16, 'He said he could neither eat bread nor drink water in that place.'),

    mc(2, 'What command did the man of God repeat in verse 17?', ['Neither eat nor drink there nor return by the same way', 'Wait under the oak until morning', 'Go back and pray for the king', 'Destroy every high place'], 17),
    blank(1, 'You shall neither eat bread nor drink water there, nor _____ by the way that you came.', 'return', 17),
    word(3, 'By what had this command been given?', 'the word of the LORD', 17, ['word of the LORD']),
    tf(3, 'The command allowed him to return by the same way.', false, 17, 'The command expressly forbade returning by the way he came.'),

    mc(1, 'What false claim did the old prophet make?', ['An angel told him to bring the man back for food and water', 'Jeroboam had repented', 'The altar had been repaired', 'The road to Judah was unsafe'], 18),
    blank(2, 'But he _____ to him.', 'lied', 18),
    word(3, 'Who did the old prophet claim had spoken to him?', 'an angel', 18, ['angel']),
    tf(3, 'An angel truly commanded the old prophet to bring the man of God home.', false, 18, 'The old prophet claimed this, but the text says he lied.'),
    mc(3, 'How did the old prophet persuade the man of God to return?', ['He falsely claimed an angel had spoken by the word of the LORD', 'He offered half his house', 'He said the king demanded it', 'He promised safe passage to Judah'], 18),

    mc(1, 'What did the man of God do after hearing the old prophet’s claim?', ['Went back and ate and drank in his house', 'Continued directly to Judah', 'Returned to Jeroboam', 'Stayed beneath the oak'], 19),
    blank(2, 'So he went _____ with him, and ate bread in his house, and drank water.', 'back', 19),
    word(1, 'Where did the man of God eat bread?', 'in his house', 19, ['the prophet’s house', 'his house']),
    tf(2, 'The man of God returned with the old prophet and drank water.', true, 19),

    mc(1, 'To whom did the word of the LORD come while they sat at the table?', ['The prophet who had brought him back', 'The man of God from Judah', 'The prophet’s eldest son', 'King Jeroboam'], 20),
    blank(2, 'And as they sat at the _____, the word of the LORD came to the prophet who had brought him back;', 'table', 20),
    word(3, 'What were the two men doing when the word came?', 'sitting at the table', 20, ['sat at the table']),
    tf(3, 'The word of the LORD came to one of the old prophet’s sons.', false, 20, 'It came to the prophet who had brought the man of God back.'),

    mc(2, 'Why did the LORD’s message condemn the man of God?', ['He had disobeyed the LORD’s word and commandment', 'He had refused the king’s reward', 'He had spoken against Bethel', 'He had traveled alone'], 21),
    blank(2, 'Because you have _____ the word of the LORD, and have not kept the commandment', 'disobeyed', 21),
    word(1, 'Whose commandment had the man of God failed to keep?', 'the LORD’s', 21, ['the LORD', 'LORD']),
    tf(3, 'The message praised the man of God for keeping every command.', false, 21, 'It declared that he had disobeyed the LORD’s word.'),

    mc(2, 'What consequence was announced for eating and drinking there?', ['His body would not come to the tomb of his fathers', 'He would lose his prophetic gift', 'His house would be destroyed', 'He would serve Jeroboam'], 22),
    blank(2, 'your body shall not come to the tomb of your _____.', 'fathers', 22),
    word(1, 'What had the man of God consumed in the forbidden place?', 'bread and water', 22, ['bread and drank water']),
    tf(3, 'The message promised that his body would be buried with his fathers.', false, 22, 'It said his body would not come to the tomb of his fathers.'),

    mc(1, 'What did the old prophet do after the meal?', ['Saddled the ass for the prophet he had brought back', 'Sent his sons with the man', 'Walked with him to Judah', 'Returned him to the king'], 23),
    blank(2, 'And after he had eaten bread and drunk, he _____ the ass for the prophet whom he had brought back.', 'saddled', 23),
    word(1, 'For whom was the animal saddled?', 'the prophet he had brought back', 23, ['the man of God']),
    tf(2, 'The old prophet provided the man of God with a saddled animal.', true, 23),

    mc(1, 'What killed the man of God on the road?', ['A lion', 'A bear', 'Robbers', 'The king’s guards'], 24),
    blank(2, 'And as he went away a _____ met him on the road and killed him.', 'lion', 24),
    word(2, 'What animal stood beside the body along with the lion?', 'the ass', 24, ['ass', 'donkey']),
    tf(3, 'After the attack, both the ass and the lion stood beside the body.', true, 24),
    mc(2, 'What unusual scene remained on the road after the man was killed?', ['The body, ass, and lion remained together', 'The lion carried away the body', 'The ass fled to Judah', 'The king’s men buried the body'], 24),

    mc(1, 'Who saw the body and the lion standing beside it?', ['Men passing by', 'Jeroboam’s priests', 'The prophet’s sons', 'Travelers from Judah only'], 25),
    blank(2, 'And behold, men _____ by, and saw the body thrown in the road.', 'passed', 25),
    word(1, 'Where did the passersby report what they had seen?', 'the city where the old prophet dwelt', 25, ['the city', 'Bethel']),
    tf(2, 'The passersby reported the sight in the old prophet’s city.', true, 25),

    mc(2, 'How did the old prophet explain the man of God’s death?', ['The LORD gave him to the lion because he disobeyed', 'Robbers had left him for dead', 'Jeroboam secretly ordered it', 'The animal attacked without cause'], 26),
    blank(2, 'It is the man of God, who _____ the word of the LORD;', 'disobeyed', 26),
    word(1, 'To what animal did the old prophet say the LORD had given the man?', 'the lion', 26, ['lion']),
    tf(3, 'The old prophet said the death occurred according to the LORD’s spoken word.', true, 26),

    mc(1, 'What did the old prophet again command his sons to do?', ['Saddle the ass for him', 'Bring the body to the king', 'Prepare a tomb in Judah', 'Drive away the lion'], 27),
    blank(2, 'And they _____ it.', 'saddled', 27),
    word(1, 'Who obeyed the old prophet’s command?', 'his sons', 27),
    tf(2, 'The sons refused to saddle the animal.', false, 27, 'They saddled it as he commanded.'),

    mc(2, 'What had the lion not done?', ['Eaten the body or torn the ass', 'Killed the man of God', 'Stood beside the body', 'Met him on the road'], 28),
    blank(2, 'The lion had not eaten the body or _____ the ass.', 'torn', 28),
    word(1, 'Which two animals were standing beside the body?', 'the ass and the lion', 28, ['ass and lion', 'donkey and lion']),
    tf(3, 'The lion ate the body but left the ass unharmed.', false, 28, 'The lion neither ate the body nor tore the ass.'),

    mc(1, 'What did the prophet do with the man of God’s body?', ['Laid it on the ass and brought it back to the city', 'Buried it beside the road', 'Took it to Judah', 'Presented it to Jeroboam'], 29),
    blank(2, 'And the prophet took up the body of the man of God and laid it upon the _____.', 'ass', 29),
    word(1, 'Why did the prophet bring the body back?', 'to mourn and bury him', 29, ['to mourn and to bury him']),
    tf(2, 'The prophet brought the body back to the city.', true, 29),

    mc(1, 'Where did the old prophet lay the body?', ['In his own grave', 'In the fathers’ tomb in Judah', 'Beside the altar', 'Under the oak'], 30),
    blank(2, 'And they mourned over him, saying, “_____, my brother!”', 'Alas', 30),
    word(1, 'What relationship did the mourners’ words express?', 'brother', 30),
    tf(3, 'The old prophet refused to mourn for the man of God.', false, 30, 'He buried him in his own grave, and they mourned over him.'),

    mc(2, 'What burial instruction did the old prophet give his sons?', ['Lay his bones beside the man of God’s bones', 'Carry him to Samaria', 'Bury him beneath the altar', 'Place him in his fathers’ tomb'], 31),
    blank(2, 'lay my _____ beside his bones.', 'bones', 31),
    word(1, 'In whose grave did the old prophet wish to be buried?', 'the man of God’s grave', 31, ['the grave in which the man of God is buried']),
    tf(3, 'The old prophet wanted his bones laid beside the man of God’s bones.', true, 31),
    mc(3, 'Why would the two prophets eventually share a grave?', ['The old prophet instructed his sons to bury him beside the man of God', 'Jeroboam ordered a common tomb', 'They belonged to the same family', 'The lion guarded every other grave'], 31),

    mc(2, 'Against what places would the man of God’s saying come to pass?', ['The altar at Bethel and high-place houses in Samaria’s cities', 'Only the palace in Jerusalem', 'Every altar in Judah', 'The temple at Shiloh alone'], 32),
    blank(2, 'and against all the houses of the high places which are in the cities of _____', 'Sama’ria', 32, ['Samaria']),
    word(1, 'Which altar had the man of God spoken against?', 'the altar in Bethel', 32, ['Bethel altar', 'altar at Bethel']),
    tf(3, 'The old prophet believed the saying would surely come to pass.', true, 32),

    mc(1, 'Did Jeroboam turn from his evil way after these events?', ['No, he made priests for the high places again', 'Yes, he removed every high place', 'Yes, he restored the lawful priests', 'No, but he closed the altar at Bethel'], 33),
    blank(2, 'Jerobo’am did not turn from his evil way, but made _____ for the high places again', 'priests', 33, ['priests']),
    word(2, 'From among whom did Jeroboam make priests?', 'all the people', 33),
    tf(3, 'Jeroboam restricted the priesthood to the lawful priestly family.', false, 33, 'He consecrated as high-place priests any from among all the people who would serve.'),

    mc(2, 'What did Jeroboam’s practice become to his house?', ['Sin that led to its destruction', 'A source of lasting peace', 'A covenant blessing', 'A defense against Judah'], 34),
    blank(2, 'And this thing became _____ to the house of Jerobo’am', 'sin', 34),
    word(1, 'What would happen to Jeroboam’s house?', 'it would be cut off and destroyed', 34, ['cut off and destroyed', 'destroyed']),
    tf(3, 'Jeroboam’s house was to be established permanently because of this practice.', false, 34, 'This sin would cause his house to be cut off and destroyed.'),
  ],
}

export default bank
