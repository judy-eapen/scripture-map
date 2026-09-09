import { mc, blank, word, tf, type ChapterBank, sa } from './types'

const bank: ChapterBank = {
  book: '2 Kings', chapter: 2, tag: 'quiz-v2-2kings-2', rows: [
    mc(1, 'Whom was the LORD about to take up to heaven?', ['Elijah', 'Elisha', 'Ahab', 'Jehoram'], 1),
    blank(1, 'Now when the LORD was about to take Eli’jah up to heaven by a _____', 'whirlwind', 1),
    word(1, 'From what place were Elijah and Elisha traveling?', 'Gilgal', 1),
    tf(2, 'Elijah and Elisha were together when the journey from Gilgal began.', true, 1),
    mc(3, 'What event does the opening verse tell the reader to expect?', ['The LORD would take Elijah to heaven in a whirlwind', 'Elisha would return alone to Gilgal', 'The Jordan would flood Jericho', 'The sons of the prophets would leave Bethel'], 1),

    mc(1, 'Where did the LORD send Elijah from Gilgal?', ['Bethel', 'Jericho', 'The Jordan', 'Samaria'], 2),
    blank(3, 'As the LORD lives, and as you yourself live, I will not _____ you.', 'leave', 2),
    word(2, 'Who refused to leave Elijah?', 'Elisha', 2, ["Eli'sha"]),
    tf(1, 'Elijah asked Elisha to remain behind while he went to Bethel.', true, 2),
    mc(2, 'What oath accompanied Elisha’s refusal to remain at Gilgal?', ['“As the LORD lives, and as you yourself live”', '“As the sons of the prophets live at Bethel”', '“As surely as the waters flow in the Jordan”', '“As surely as Ahab has died in Samaria”'], 2),

    mc(1, 'Who approached Elisha at Bethel?', ['The sons of the prophets', 'The king’s captains', 'The men of Jericho', 'The priests of Baal'], 3),
    blank(2, 'Do you know that today the LORD will take away your _____ from over you?', 'master', 3),
    sa(1, 'What did Elisha tell the prophets to hold?', 'their peace', 3, ['your peace', 'peace']),
    tf(3, 'Elisha said he did not know that his master would be taken away.', false, 3, 'He said that he knew and told them to hold their peace.'),
    mc(2, 'What news did the prophets at Bethel already know?', ['The LORD would take Elisha’s master away that day', 'Elijah would settle permanently in Bethel', 'The king would come to Bethel', 'The Jordan had dried up'], 3),

    mc(1, 'Where did Elijah next say the LORD had sent him?', ['Jericho', 'Samaria', 'Carmel', 'Gilgal'], 4),
    blank(3, 'Eli’sha, _____ here, I pray you', 'tarry', 4),
    sa(2, 'What did Elisha again refuse to do?', 'leave Elijah', 4, ['leave him', 'remain behind']),
    tf(1, 'Elisha accompanied Elijah to Jericho.', true, 4),
    mc(2, 'How did Elisha answer the request that he stay behind?', ['He swore that he would not leave Elijah', 'He agreed to wait at Bethel', 'He asked the prophets to accompany Elijah', 'He returned to Gilgal'], 4),

    mc(1, 'Who spoke to Elisha at Jericho?', ['The sons of the prophets', 'Fifty soldiers', 'The men with bad water', 'The king of Israel'], 5),
    blank(2, 'Yes, I know it; hold your _____.', 'peace', 5),
    word(1, 'From over whom would Elisha’s master be taken?', 'Elisha', 5, ["Eli'sha", 'him']),
    tf(3, 'The prophets at Jericho were unaware of Elijah’s coming departure.', false, 5, 'They asked Elisha whether he knew the LORD would take his master away that day.'),
    mc(2, 'How did Elisha respond when the prophets at Jericho mentioned Elijah’s departure?', ['He acknowledged that he knew and told them to hold their peace', 'He denied knowing anything about the LORD taking his master', 'He immediately asked them to send fifty men to search for Elijah', 'He told them to return to Bethel and question the prophets there'], 5),

    mc(1, 'Where did the LORD send Elijah after Jericho?', ['The Jordan', 'Mount Carmel', 'Samaria', 'Ekron'], 6),
    blank(3, 'So the _____ of them went on.', 'two', 6, ['2']),
    word(2, 'Who continued with Elijah toward the Jordan?', 'Elisha', 6, ["Eli'sha"]),
    tf(1, 'Elisha again swore that he would not leave Elijah.', true, 6),
    mc(2, 'What was the result of Elijah’s third request that Elisha remain behind?', ['Elisha continued with him', 'Elisha stayed at Jericho', 'The prophets took Elisha’s place', 'Elijah returned to Bethel'], 6),

    mc(1, 'How many sons of the prophets went to observe?', ['Fifty', 'Twelve', 'Forty-two', 'One hundred'], 7),
    blank(2, 'and stood at some _____ from them', 'distance', 7),
    word(1, 'Beside what river were Elijah and Elisha standing?', 'Jordan', 7, ['the Jordan']),
    tf(3, 'The fifty prophets stood beside Elijah and Elisha at the riverbank.', false, 7, 'They stood at some distance while the two men stood by the Jordan.'),
    mc(2, 'What did the fifty observers do as Elijah and Elisha reached the Jordan?', ['They stood at a distance', 'They crossed ahead of them', 'They returned to Jericho', 'They brought a new bowl'], 7),

    mc(1, 'What did Elijah use to strike the Jordan?', ['His rolled-up mantle', 'A wooden staff', 'A new bowl', 'A sword'], 8),
    blank(3, 'and the water was _____ to the one side and to the other', 'parted', 8),
    sa(2, 'On what kind of ground did Elijah and Elisha cross?', 'dry ground', 8),
    tf(1, 'Both Elijah and Elisha crossed the divided Jordan.', true, 8),
    mc(2, 'What sequence opened a path through the Jordan?', ['Elijah rolled up his mantle and struck the water', 'Elisha poured salt into the river', 'The prophets called down fire', 'A whirlwind moved the water'], 8),

    mc(1, 'What did Elisha ask to inherit from Elijah?', ['A double share of his spirit', 'His home in Gilgal', 'Leadership of Israel’s army', 'A double share of land'], 9),
    blank(2, 'let me inherit a _____ share of your spirit.', 'double', 9),
    sa(1, 'When did Elijah invite Elisha to make a request?', 'after they had crossed', 9, ['when they had crossed the Jordan', 'after crossing']),
    tf(3, 'Elisha asked Elijah for wealth before they separated.', false, 9, 'He asked to inherit a double share of Elijah’s spirit.'),
    mc(3, 'Which request did Elisha make before Elijah was taken away?', ['Let me inherit a double share of your spirit', 'Let me return to the prophets at Jericho', 'Let me become king over Israel', 'Let me receive the chariot of fire'], 9),
    tf(2, 'Elisha made his request before Elijah was taken from him.', true, 9),

    mc(2, 'How did Elijah describe Elisha’s request?', ['A hard thing', 'An impossible sin', 'A simple favor', 'A royal command'], 10),
    blank(3, 'if you _____ me as I am being taken from you, it shall be so for you', 'see', 10),
    sa(1, 'What would show that Elisha’s request was granted?', 'seeing Elijah as he was taken away', 10, ['he would see Elijah taken away', 'seeing him taken']),
    tf(2, 'Elijah said the request would be granted whether or not Elisha saw his departure.', false, 10, 'It would be so only if Elisha saw Elijah being taken from him.'),
    mc(1, 'What condition did Elijah attach to Elisha receiving what he asked?', ['Elisha must see Elijah being taken away', 'Elisha must remain in Jericho', 'Elisha must find the lost mantle', 'Elisha must cross the Jordan alone'], 10),

    mc(1, 'What separated Elijah and Elisha as they walked and talked?', ['A chariot of fire and horses of fire', 'The divided waters of the Jordan', 'Fifty sons of the prophets', 'Two she-bears'], 11),
    blank(2, 'And Eli’jah went up by a _____ into heaven.', 'whirlwind', 11),
    sa(1, 'Where did Elijah go?', 'into heaven', 11, ['heaven']),
    tf(3, 'The chariot of fire carried both Elijah and Elisha into heaven.', false, 11, 'The fiery chariot and horses separated them; Elijah went up in a whirlwind.'),
    mc(3, 'How does the account describe Elijah’s departure?', ['A chariot and horses of fire separated the men, and Elijah went up in a whirlwind', 'Elijah crossed the Jordan alone and disappeared inside a mountain cave', 'An angel carried Elijah away from the sons of the prophets at Bethel', 'Elijah climbed Mount Carmel and vanished inside a rain cloud'], 11),
    sa(3, 'What were Elijah and Elisha doing immediately before the fiery appearance?', 'walking and talking', 11, ['going on and talking', 'they went on and talked']),

    mc(1, 'What did Elisha cry when he saw Elijah taken?', ['“My father, my father! The chariots of Israel and its horsemen!”', '“Where is the LORD, the God of Elijah who divided the Jordan?”', '“Go up, you baldhead! Go up, and leave the sons of the prophets!”', '“Bring me a new bowl, and put salt in it for the water!”'], 12),
    blank(3, 'Then he took hold of his own clothes and _____ them in two pieces.', 'rent', 12),
    word(2, 'How many pieces did Elisha tear his clothes into?', 'two', 12, ['2']),
    tf(1, 'After Elijah disappeared from sight, Elisha tore his own clothes.', true, 12),
    mc(2, 'What did Elisha do after he could no longer see Elijah?', ['He tore his own clothes in two', 'He immediately returned to Gilgal', 'He called the fifty prophets to him', 'He threw salt into the Jordan'], 12),

    mc(1, 'What did Elisha pick up after Elijah was taken?', ['Elijah’s fallen mantle', 'The reins of the fiery chariot', 'A new bowl of salt', 'Elijah’s girdle'], 13),
    blank(2, 'and went back and stood on the _____ of the Jordan.', 'bank', 13),
    word(1, 'Whose mantle had fallen?', 'Elijah’s', 13, ['Elijah', "Eli'jah's"]),
    tf(3, 'Elisha left Elijah’s mantle where it fell.', false, 13, 'He picked it up and carried it back to the Jordan.'),
    mc(2, 'Where did Elisha go with the mantle?', ['Back to the bank of the Jordan', 'To the palace in Samaria', 'Directly to Mount Carmel', 'To the spring at Jericho'], 13),

    mc(1, 'What did Elisha say as he struck the Jordan?', ['Where is the LORD, the God of Elijah?', 'Let me inherit a double share', 'Hold your peace', 'Bring me a new bowl'], 14),
    blank(3, 'Where is the LORD, the God of _____?', 'Eli’jah', 14, ['Elijah']),
    sa(2, 'What happened to the water when Elisha struck it?', 'it parted to both sides', 14, ['the water parted', 'it was parted']),
    tf(1, 'Elisha crossed the Jordan after the water divided.', true, 14),
    mc(3, 'What sign showed the sons of the prophets that Elijah’s spirit rested on Elisha?', ['Elisha struck the Jordan with Elijah’s mantle, and the water parted', 'Elisha found Elijah alive on a mountain after a three-day search', 'The sons of the prophets presented Elisha with a newly made mantle', 'The king of Israel appointed Elisha as prophet when he reached Samaria'], 14),
    tf(2, 'The Jordan parted for Elisha as it had for Elijah.', true, 14),

    mc(1, 'What did the prophets at Jericho conclude about Elisha?', ['The spirit of Elijah rested on him', 'He had lost Elijah’s mantle', 'He should return to Gilgal', 'He had become king'], 15),
    blank(2, 'And they came to meet him, and _____ to the ground before him.', 'bowed', 15),
    word(1, 'Where were the prophets who saw Elisha cross?', 'Jericho', 15),
    tf(3, 'The prophets rejected Elisha after seeing him return across the Jordan.', false, 15, 'They recognized Elijah’s spirit on him and bowed before him.'),
    mc(2, 'How did the sons of the prophets respond to Elisha’s return?', ['They met him and bowed to the ground', 'They fled from him', 'They demanded the mantle', 'They sent him back across the Jordan'], 15),

    mc(1, 'What did the prophets ask permission to do?', ['Send fifty strong men to seek Elijah', 'Travel with Elisha to Samaria', 'Heal Jericho’s spring', 'Build a house at the Jordan'], 16),
    blank(3, 'it may be that the Spirit of the LORD has _____ him up', 'caught', 16),
    word(2, 'How many strong men were available to search?', 'fifty', 16, ['50']),
    tf(1, 'Elisha initially told the prophets not to send a search party.', true, 16),
    mc(2, 'Where did the prophets imagine the Spirit might have placed Elijah?', ['On a mountain or in a valley', 'In the palace at Samaria', 'At the spring in Jericho', 'Back in Gilgal'], 16),

    mc(1, 'Why did Elisha finally allow the men to search?', ['They urged him until he was ashamed', 'The LORD commanded him', 'He believed Elijah was lost', 'The king ordered the search'], 17),
    blank(2, 'They sent therefore fifty men; and for _____ days they sought him', 'three', 17, ['3']),
    word(1, 'Did the searchers find Elijah?', 'no', 17, ['they did not find him', 'no they did not']),
    tf(3, 'The fifty men found Elijah on the third day.', false, 17, 'They searched for three days but did not find him.'),
    mc(2, 'What was the outcome of the search for Elijah?', ['Fifty men searched for three days without finding him', 'The searchers found Elijah alive in a valley near the Jordan', 'The searchers found Elijah waiting for them on Mount Carmel', 'The fifty men abandoned the search after looking for only one day'], 17),

    mc(1, 'Where was Elisha when the searchers returned?', ['Jericho', 'Bethel', 'Gilgal', 'Samaria'], 18),
    blank(3, 'Did I not say to you, Do not _____?', 'go', 18),
    sa(2, 'What reminder did Elisha give the returning men?', 'he had told them not to go', 18, ['Did I not say to you, Do not go', 'not to go']),
    tf(1, 'The failed search confirmed Elisha’s earlier warning.', true, 18),
    mc(2, 'What did Elisha say when the search party came back?', ['Did I not say to you, Do not go?', 'Where is the LORD, the God of Elijah?', 'Bring me a new bowl', 'Hold your peace'], 18),

    mc(1, 'What problem did the men of Jericho report to Elisha?', ['The water was bad and the land was unfruitful', 'The city walls had fallen and left the people unprotected', 'The Jordan had flooded and cut off the road to Bethel', 'The sons of the prophets had departed and left no teacher'], 19),
    blank(2, 'the water is bad, and the land is _____.', 'unfruitful', 19),
    word(1, 'How did the men describe the city’s location?', 'pleasant', 19, ['the situation was pleasant']),
    tf(3, 'The men said both the city’s situation and its water were pleasant.', false, 19, 'They called the situation pleasant but said the water was bad.'),
    mc(2, 'To whom did the men bring the city’s water problem?', ['Elisha', 'Elijah', 'The king of Israel', 'The fifty searchers'], 19),

    mc(1, 'What container did Elisha request?', ['A new bowl', 'A clay jar', 'A bronze basin', 'A leather pouch'], 20),
    blank(3, 'Bring me a new bowl, and put _____ in it.', 'salt', 20),
    word(2, 'What did the men put in the bowl?', 'salt', 20),
    tf(1, 'The men brought Elisha what he requested.', true, 20),
    mc(2, 'Which two items were specified for addressing the bad water?', ['A new bowl and salt', 'A mantle and oil', 'A staff and flour', 'A jar and water'], 20),

    mc(1, 'Where did Elisha throw the salt?', ['Into the spring of water', 'Into the Jordan', 'On the unfruitful land', 'At the city gate'], 21),
    blank(2, 'I have made this water _____.', 'wholesome', 21),
    sa(1, 'What two harms would no longer come from the water?', 'death or miscarriage', 21, ['death and miscarriage', 'neither death nor miscarriage']),
    tf(3, 'Elisha claimed that the salt itself, apart from the LORD, healed the spring.', false, 21, 'Elisha announced, “Thus says the LORD, I have made this water wholesome.”'),
    mc(3, 'What did Elisha do at Jericho’s spring?', ['He threw in salt from a new bowl and proclaimed that the LORD had made the water wholesome', 'He struck the spring with Elijah’s mantle until the water divided to each side', 'He poured oil into the Jordan and redirected its water toward the city', 'He ordered the sons of the prophets to abandon it and dig another well'], 21),

    mc(1, 'How long did the water remain wholesome according to the narrator?', ['To the day the account was written', 'For three days', 'Until Elisha left Jericho', 'For forty-two years'], 22),
    blank(3, 'according to the word which Eli’sha _____.', 'spoke', 22),
    word(2, 'Whose spoken word accompanied the lasting healing?', 'Elisha’s', 22, ['Elisha', "Eli'sha's"]),
    tf(1, 'The healing of the water endured beyond the day of the miracle.', true, 22),

    mc(1, 'Where was Elisha traveling when the boys jeered at him?', ['Up to Bethel', 'Down to Jericho', 'Across the Jordan', 'Toward Ekron'], 23),
    blank(2, 'Go up, you _____! Go up, you baldhead!', 'baldhead', 23, ['bald head']),
    sa(1, 'Who came out of the city and jeered at Elisha?', 'some small boys', 23, ['small boys', 'boys']),
    tf(3, 'The boys honored Elisha as he approached Bethel.', false, 23, 'They jeered at him and repeatedly called him “baldhead.”'),

    mc(1, 'In whose name did Elisha curse the jeering boys?', ['The name of the LORD', 'The name of Elijah', 'The name of the king', 'The name of Bethel'], 24),
    blank(3, 'And two she-bears came out of the _____', 'woods', 24),
    word(2, 'How many boys were torn by the she-bears?', 'forty-two', 24, ['42']),
    tf(1, 'Two she-bears came out of the woods after Elisha cursed the boys.', true, 24),
    mc(3, 'What followed the boys’ repeated taunt against Elisha?', ['He cursed them in the LORD’s name, and two she-bears tore forty-two of them', 'Fire descended from heaven and consumed the entire city of Bethel', 'The sons of the prophets arrested the boys and took them to Jericho', 'Elisha abandoned his journey to Carmel and returned immediately to Jericho'], 24),

    mc(1, 'Where did Elisha go before returning to Samaria?', ['Mount Carmel', 'Gilgal', 'Ekron', 'Jerusalem'], 25),
    blank(2, 'and thence he returned to _____.', 'Sama’ria', 25, ['Samaria']),
    word(1, 'What was Elisha’s final destination in the chapter?', 'Samaria', 25, ["Sama'ria"]),
    tf(3, 'Elisha remained permanently at Mount Carmel.', false, 25, 'He went from Mount Carmel back to Samaria.'),
  ],
}

export default bank
