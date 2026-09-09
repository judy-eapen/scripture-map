import { mc, blank, word, tf, type ChapterBank, sa } from './types'

const bank: ChapterBank = {
  book: '1 Kings', chapter: 18, tag: 'quiz-v2-1kings-18', rows: [
    mc(1, 'When did the LORD tell Elijah to show himself to Ahab?', ['In the third year', 'After seven years', 'In Asa’s first year', 'The next morning'], 1),
    blank(1, 'Go, show yourself to Ahab; and I will send _____ upon the earth.', 'rain', 1),
    word(3, 'To whom was Elijah told to show himself?', 'Ahab', 1),
    tf(1, 'The LORD promised to send rain upon the earth.', true, 1),

    mc(1, 'Why did Elijah go to Ahab?', ['To obey the LORD’s word', 'To ask for food', 'To join the prophets of Baal', 'To escape Samaria'], 2),
    blank(2, 'Now the famine was _____ in Sama’ria.', 'severe', 2),
    word(2, 'Where was the famine severe?', 'Samaria', 2, ["Sama'ria"]),
    tf(3, 'The famine was severe in Samaria when Elijah went to meet Ahab.', true, 2),

    mc(1, 'Whom did Ahab call to him?', ['Obadiah', 'Elijah', 'Jezebel', 'A prophet of Baal'], 3),
    blank(3, 'And Ahab called Obadi’ah, who was over the _____.', 'household', 3),
    sa(1, 'What does Kings say about Obadiah’s attitude toward the LORD?', 'He feared the LORD greatly.', 3, ['he revered the LORD greatly']),
    tf(2, 'Obadiah was responsible for Ahab’s household.', true, 3),

    mc(1, 'How many prophets did Obadiah hide?', ['One hundred', 'Four hundred', 'Fifty', 'Seven thousand'], 4),
    blank(3, 'Obadi’ah took a hundred prophets and hid them by _____ in a cave', 'fifties', 4, ['50s', 'fifty']),
    sa(1, 'What did Obadiah feed the hidden prophets?', 'bread and water', 4),
    tf(2, 'Obadiah hid the prophets after Jezebel tried to cut them off.', true, 4),
    mc(3, 'How did Obadiah protect the LORD’s prophets?', ['He hid one hundred in groups of fifty in a cave and fed them bread and water', 'He sent fifty of them into Judah under the protection of King Asa', 'He armed them and organized an attack against Jezebel’s household', 'He concealed all of them among the servants inside Ahab’s palace'], 4),

    mc(1, 'What were Ahab and Obadiah searching for?', ['Grass to keep horses and mules alive', 'Elijah’s hiding place', 'The prophets of Baal', 'Gold for the palace'], 5),
    blank(2, 'Go through the land to all the springs of water and to all the _____.', 'valleys', 5),
    sa(2, 'Which two kinds of animals did Ahab hope to save?', 'horses and mules', 5),
    tf(3, 'Ahab searched for grass so that the horses and mules could be kept alive.', true, 5),

    mc(1, 'How did Ahab and Obadiah search the land?', ['They divided the land and each went alone in a different direction', 'They traveled together along the same route through every valley', 'They remained in Samaria and sent household servants in their place', 'They searched only the springs near the city before returning together'], 6),
    blank(3, 'Ahab went in one _____ by himself', 'direction', 6),
    word(1, 'Who went in the other direction?', 'Obadiah', 6, ["Obadi'ah"]),
    tf(2, 'Ahab and Obadiah divided the land and went alone in separate directions.', true, 6),

    mc(1, 'Who met Obadiah on the way?', ['Elijah', 'Ahab', 'Jezebel', 'A prophet of Baal'], 7),
    blank(2, 'and Obadi’ah recognized him, and fell on his _____.', 'face', 7),
    sa(2, 'How did Obadiah address Elijah?', 'my lord Elijah', 7, ['Elijah', 'my lord']),
    tf(3, 'Obadiah recognized Elijah and fell on his face.', true, 7),

    mc(1, 'What message did Elijah give Obadiah?', ['Tell Ahab that Elijah is here', 'Tell Jezebel to release the prophets', 'Tell Ahab rain has begun', 'Tell Israel to meet at Cherith'], 8),
    blank(3, 'And he answered him, "It is I. Go, tell your lord, `Behold, Eli\'jah is _____.\'"', 'here', 8),
    sa(1, 'How did Elijah identify himself?', 'It is I', 8),
    tf(2, 'Elijah told Obadiah to announce his presence to Ahab.', true, 8),

    mc(2, 'What consequence did Obadiah fear from delivering Elijah’s message?', ['Ahab would kill him', 'Jezebel would exile him', 'The famine would worsen', 'Elijah would curse him'], 9),
    blank(3, 'Wherein have I _____, that you would give your servant into the hand of Ahab', 'sinned', 9),
    word(1, 'Into whose hand did Obadiah fear being given?', 'Ahab’s', 9, ['Ahab']),
    tf(2, 'Obadiah feared Ahab would kill him for delivering Elijah’s message.', true, 9),

    mc(2, 'How widely had Ahab searched for Elijah?', ['He sent to every nation or kingdom and required an oath when Elijah was not found', 'He searched only inside Samaria and accepted each servant’s spoken report', 'He limited the search to Judah because he believed Asa was hiding Elijah', 'He searched only around Mount Carmel after hearing that Elijah had gone there'], 10),
    blank(3, 'there is no nation or _____ whither my lord has not sent to seek you', 'kingdom', 10),
    sa(1, 'What did Ahab require when a realm said Elijah was absent?', 'an oath', 10),
    tf(2, 'Ahab required nations and kingdoms to swear that they had not found Elijah.', true, 10),

    mc(1, 'What message did Elijah now expect Obadiah to repeat?', ['Behold, Elijah is here', 'Rain has fallen', 'Ahab must leave Samaria', 'The prophets are safe'], 11),
    blank(2, 'And now you say, “Go, tell your lord, ‘Behold, Eli’jah is _____.’”', 'here', 11),
    sa(2, 'To whom was Obadiah to speak?', 'his lord', 11, ['Ahab']),
    tf(3, 'Elijah told Obadiah to report that Elijah was there.', true, 11),

    mc(2, 'What did Obadiah fear the Spirit of the LORD might do?', ['Carry Elijah to an unknown place', 'Bring rain immediately', 'Strike Ahab down', 'Reveal the hidden prophets'], 12),
    blank(3, 'the Spirit of the LORD will _____ you whither I know not', 'carry', 12),
    sa(1, 'Since when had Obadiah revered the LORD?', 'from his youth', 12, ['my youth', 'youth']),
    tf(2, 'Obadiah feared Ahab would kill him if Elijah could not be found.', true, 12),

    mc(1, 'What past service did Obadiah remind Elijah about?', ['Hiding and feeding one hundred prophets', 'Defeating Baal’s prophets', 'Bringing rain to Samaria', 'Building an altar on Carmel'], 13),
    blank(3, 'how I hid a hundred men of the LORD’s prophets by fifties in a _____.', 'cave', 13),
    word(1, 'Who had been killing the LORD’s prophets?', 'Jezebel', 13, ["Jez'ebel"]),
    tf(2, 'Obadiah had fed the hidden prophets bread and water.', true, 13),

    mc(1, 'What did Obadiah again predict would happen to him?', ['Ahab would kill him', 'Elijah would hide him', 'Jezebel would reward him', 'He would become king'], 14),
    blank(2, 'And now you say, `Go, tell your lord, "Behold, Eli\'jah is here"\'; and he will _____ me."', 'kill', 14),
    word(2, 'Whose presence was Obadiah asked to announce?', 'Elijah’s', 14, ['Elijah']),
    tf(3, 'Obadiah believed Ahab would kill him if Elijah could not be found.', true, 14),

    mc(1, 'What promise did Elijah make to reassure Obadiah?', ['He would surely show himself to Ahab that day', 'He would leave Samaria before Ahab could arrive', 'He would hide from Ahab in another nation or kingdom', 'He would send Obadiah to face Ahab without meeting him'], 15),
    blank(3, 'I will surely show myself to him _____.', 'today', 15),
    sa(1, 'Before whom did Elijah say he stood?', 'the LORD of hosts', 15),
    tf(2, 'Elijah swore by the living LORD of hosts.', true, 15),

    mc(1, 'What did Obadiah do after Elijah’s assurance?', ['Met Ahab and told him', 'Returned home', 'Went to Jezebel', 'Hid in a cave'], 16),
    blank(2, 'and Ahab went to _____ Eli’jah.', 'meet', 16),
    word(2, 'Who went to meet Elijah?', 'Ahab', 16),
    tf(3, 'After Obadiah delivered the message, Ahab went to meet Elijah.', true, 16),

    mc(1, 'What did Ahab call Elijah?', ['Troubler of Israel', 'Prophet of rain', 'Servant of Obadiah', 'King of Carmel'], 17),
    blank(3, 'Is it you, you _____ of Israel?', 'troubler', 17),
    word(1, 'Who accused Elijah of troubling Israel?', 'Ahab', 17),
    tf(2, 'Ahab called Elijah the troubler of Israel.', true, 17),
    mc(3, 'What exact accusation did Ahab make when he saw Elijah?', ['“Is it you, you troubler of Israel?”', '“Why have you hidden the prophets?”', '“Have you brought the rain?”', '“Will you serve Baal?”'], 17),

    mc(1, 'Whom did Elijah identify as Israel’s true troublers?', ['Ahab and his father’s house', 'Obadiah and the prophets', 'The people of Judah', 'The widow of Zarephath'], 18),
    blank(2, 'because you have forsaken the commandments of the LORD and followed the _____.', 'Ba’als', 18, ['Baals']),
    sa(2, 'What had Ahab forsaken?', 'the commandments of the LORD', 18, ['the LORD’s commandments']),
    tf(3, 'Elijah accepted blame for troubling Israel.', false, 18, 'He said Ahab and his father’s house were responsible.'),
    mc(3, 'Why did Elijah say Ahab and his father’s house had troubled Israel?', ['They had forsaken the LORD’s commandments and followed the Baals', 'They had hidden the LORD’s prophets and supplied them with food', 'They had searched the springs and valleys for grass during the famine', 'They had refused to meet Elijah after Obadiah announced his presence'], 18),

    mc(2, 'How many prophets of Baal were to gather at Carmel?', ['Four hundred and fifty', 'Four hundred', 'One hundred', 'Seven thousand'], 19),
    blank(3, 'and the four hundred prophets of Ashe’rah, who eat at _____ table.', 'Jez’ebel’s', 19, ['Jezebel’s', 'Jezebel']),
    sa(1, 'Where were all Israel and the prophets to gather?', 'Mount Carmel', 19, ['Carmel']),
    tf(2, 'Four hundred prophets of Asherah ate at Jezebel’s table.', true, 19),
    mc(3, 'Which two groups of prophets did Elijah name?', ['450 of Baal and 400 of Asherah', '400 of Baal and 450 of Asherah', '100 of Baal and 50 of Asherah', '700 of Baal and 300 of Asherah'], 19),

    mc(1, 'Who gathered the prophets at Mount Carmel?', ['Ahab', 'Obadiah', 'Jezebel', 'Elijah’s servant'], 20),
    blank(2, 'and gathered the prophets together at Mount _____.', 'Carmel', 20),
    sa(2, 'To whom did Ahab send?', 'all the people of Israel', 20, ['all Israel', 'the people of Israel']),
    tf(3, 'The prophets gathered at Mount Horeb.', false, 20, 'They gathered at Mount Carmel.'),

    mc(1, 'What choice did Elijah put before the people?', ['Follow the LORD if he is God, or Baal if he is', 'Serve both LORD and Baal', 'Choose between Ahab and Obadiah', 'Leave Mount Carmel'], 21),
    blank(3, 'How long will you go limping with two different _____?', 'opinions', 21),
    sa(1, 'How did the people answer Elijah?', 'not a word', 21, ['they did not answer', 'no answer']),
    tf(2, 'The people immediately declared that the LORD was God.', false, 21, 'At this point they did not answer a word.'),
    mc(3, 'How did Elijah frame the people’s divided loyalty?', ['They were limping with two different opinions', 'They were wandering without a king', 'They lacked enough prophets', 'They feared the coming rain'], 21),

    mc(1, 'How many prophets of the LORD did Elijah say remained?', ['Elijah alone', 'One hundred', 'Four hundred', 'Seven thousand'], 22),
    blank(2, 'but Ba’al’s prophets are four hundred and _____ men.', 'fifty', 22, ['450', 'four hundred and fifty']),
    word(2, 'Whose prophets numbered 450?', 'Baal’s', 22, ['Baal']),
    tf(3, 'Elijah said 450 prophets of the LORD remained.', false, 22, 'He said he alone remained a prophet of the LORD.'),

    mc(1, 'How many bulls were to be provided?', ['Two', 'One', 'Four', 'Twelve'], 23),
    blank(3, 'and cut it in pieces and lay it on the _____.', 'wood', 23),
    word(1, 'What were both sides forbidden to put on their offerings?', 'fire', 23),
    tf(2, 'Elijah allowed Baal’s prophets to choose their bull.', true, 23),

    mc(1, 'How would the true God be identified?', ['He would answer by fire', 'He would send a raven', 'He would speak through Ahab', 'He would make the bull disappear'], 24),
    blank(2, 'and the God who answers by fire, he is _____.', 'God', 24),
    sa(2, 'What did the people say about Elijah’s proposal?', 'It is well spoken', 24),
    tf(3, 'The people rejected the proposed test.', false, 24, 'They answered, “It is well spoken.”'),

    mc(1, 'Who was told to prepare a bull first?', ['The prophets of Baal', 'Elijah', 'Obadiah', 'Ahab'], 25),
    blank(3, 'and call on the name of your god, but put no _____ to it.', 'fire', 25),
    sa(1, 'Why did Elijah tell Baal’s prophets to go first?', 'they were many', 25, ['because they were many']),
    tf(2, 'Elijah told Baal’s prophets to light their own fire.', false, 25, 'They were to put no fire to the offering.'),

    mc(1, 'For how long did Baal’s prophets call before noon?', ['From morning until noon', 'From noon until evening only', 'For seven days', 'One hour'], 26),
    blank(2, 'But there was no voice, and no one _____.', 'answered', 26),
    sa(2, 'Around what did the prophets limp?', 'the altar they had made', 26, ['the altar']),
    tf(3, 'Baal answered his prophets with a voice.', false, 26, 'There was no voice and no one answered.'),

    mc(2, 'What possibility did Elijah mockingly suggest about Baal?', ['He might be asleep and need awakening', 'He was sending rain', 'He was hiding prophets', 'He had answered by fire'], 27),
    blank(3, 'or perhaps he is asleep and must be _____.', 'awakened', 27),
    sa(1, 'When did Elijah begin mocking them?', 'at noon', 27, ['noon']),
    tf(2, 'Elijah quietly encouraged the prophets to stop.', false, 27, 'He mocked them and told them to cry aloud.'),

    mc(1, 'With what did Baal’s prophets cut themselves?', ['Swords and lances', 'Knives and stones', 'Wood and fire', 'Ropes and staffs'], 28),
    blank(3, 'until the blood _____ out upon them.', 'gushed', 28),
    sa(1, 'Why did they cut themselves?', 'after their custom', 28, ['their custom']),
    tf(2, 'The prophets cut themselves until blood gushed out.', true, 28),

    mc(1, 'Until what time did Baal’s prophets rave?', ['The offering of the oblation', 'Sunrise', 'Midnight', 'The seventh day'], 29),
    blank(2, 'but there was no voice; no one answered, no one _____.', 'heeded', 29),
    word(2, 'What had passed before they continued raving?', 'midday', 29),
    tf(3, 'Someone finally heeded the prophets of Baal.', false, 29, 'No voice came; no one answered or heeded.'),

    mc(1, 'What did Elijah repair after calling the people near?', ['The LORD’s altar that had been thrown down', 'The altar of Baal used by the assembled prophets', 'Ahab’s royal palace damaged during the famine', 'The wall around the summit of Mount Carmel'], 30),
    blank(3, 'And he _____ the altar of the LORD that had been thrown down.', 'repaired', 30),
    sa(1, 'Whom did Elijah invite to come near?', 'all the people', 30, ['the people']),
    tf(2, 'The people refused to come near Elijah.', false, 30, 'All the people came near him.'),

    mc(1, 'How many stones did Elijah take?', ['Twelve', 'Seven', 'Two', 'Forty'], 31),
    blank(2, 'according to the number of the _____ of the sons of Jacob', 'tribes', 31),
    word(2, 'What new name had the LORD given Jacob?', 'Israel', 31),
    tf(3, 'Elijah used one stone for each tribe of Jacob’s sons.', true, 31),

    mc(1, 'What did Elijah build with the twelve stones?', ['An altar in the LORD’s name', 'A wall around Carmel', 'A house for Ahab', 'An altar to Baal'], 32),
    blank(3, 'And he made a _____ about the altar', 'trench', 32),
    sa(1, 'How much seed could the trench contain?', 'two measures', 32, ['two measures of seed', '2 measures']),
    tf(2, 'Elijah built the altar in Baal’s name.', false, 32, 'He built it in the name of the LORD.'),

    mc(1, 'How many jars did Elijah order filled with water?', ['Four', 'Three', 'Twelve', 'Seven'], 33),
    blank(2, 'and cut the bull in pieces and laid it on the _____.', 'wood', 33),
    sa(2, 'Where was the water to be poured?', 'on the burnt offering and wood', 33, ['the offering and the wood']),
    tf(3, 'Elijah told them to pour oil over the offering.', false, 33, 'He told them to pour water over it and the wood.'),

    mc(1, 'How many times in all did Elijah have the water poured?', ['Three times', 'Twice', 'Four times', 'Once'], 34),
    blank(3, 'And he said, “Do it a _____ time”; and they did it a third time.', 'third', 34, ['3rd']),
    sa(1, 'What did Elijah say after the first pouring?', 'Do it a second time', 34, ['second time']),
    tf(2, 'The people poured the water only twice.', false, 34, 'They did it a second time and then a third time.'),
    mc(3, 'What was the full watering instruction carried out at the altar?', ['Four jars poured three times', 'Three jars poured four times', 'Twelve jars poured once', 'Two jars poured seven times'], 34),

    mc(1, 'What did the water fill?', ['The trench', 'The jars', 'The cave', 'The brook Kishon'], 35),
    blank(2, 'And the water ran round about the _____.', 'altar', 35),
    word(2, 'What surrounded the altar after the pouring?', 'water', 35),
    tf(3, 'The trench remained dry.', false, 35, 'The water filled the trench.'),

    mc(2, 'At what time did Elijah pray?', ['At the offering of the oblation', 'At midnight', 'Before sunrise', 'At the seventh day'], 36),
    blank(3, 'O LORD, God of Abraham, Isaac, and _____', 'Israel', 36),
    sa(1, 'What did Elijah call himself in the prayer?', 'the LORD’s servant', 36, ['thy servant', 'servant']),
    tf(2, 'Elijah said he had done these things at the LORD’s word.', true, 36),

    mc(1, 'What did Elijah ask the LORD to make the people know?', ['That the LORD is God and had turned their hearts back', 'That Ahab was innocent of troubling the people of Israel', 'That Baal was merely sleeping and would later answer them', 'That the famine would continue despite the promised rain'], 37),
    blank(2, 'and that thou hast turned their _____ back.', 'hearts', 37),
    word(2, 'Whom did Elijah ask to answer him?', 'LORD', 37, ['the LORD']),
    tf(3, 'Elijah prayed that the people would know Baal was God.', false, 37, 'He prayed that they would know the LORD is God.'),

    mc(1, 'What did the LORD’s fire consume?', ['The offering, wood, stones, dust, and water in the trench', 'The burnt offering while leaving the wood and altar untouched', 'The wood and stones while leaving the offering and water untouched', 'The prophets of Baal who were standing beside their altar'], 38),
    blank(3, 'and licked up the _____ that was in the trench.', 'water', 38),
    word(1, 'What fell from the LORD?', 'fire', 38, ['the fire of the LORD']),
    tf(2, 'The LORD’s fire left the stones and dust untouched.', false, 38, 'It consumed the offering, wood, stones, and dust and licked up the water.'),
    mc(3, 'Which complete list describes what the LORD’s fire consumed?', ['Burnt offering, wood, stones, dust, and trench water', 'The bull and wood but none of the altar or water', 'The altar and prophets but not the prepared offering', 'The empty jars, measured seed, and surrounding grass'], 38),

    mc(1, 'What did the people do when they saw the fire?', ['Fell on their faces', 'Fled from Carmel', 'Called on Baal', 'Seized Elijah'], 39),
    blank(2, 'The LORD, he is _____; the LORD, he is God.', 'God', 39),
    sa(2, 'What did the people confess?', 'The LORD, he is God', 39, ['the LORD is God']),
    tf(3, 'The people continued without answering Elijah.', false, 39, 'They fell down and confessed that the LORD is God.'),

    mc(1, 'Where did Elijah take the prophets of Baal?', ['The brook Kishon', 'The brook Cherith', 'Jezreel', 'Samaria'], 40),
    blank(3, 'let not one of them _____.', 'escape', 40),
    sa(1, 'What did Elijah do to the prophets at Kishon?', 'killed them', 40, ['he killed them']),
    tf(2, 'One prophet of Baal escaped.', false, 40, 'They were told not to let one escape.'),

    mc(1, 'What did Elijah tell Ahab to do?', ['Go up, eat and drink', 'Gather the prophets again', 'Hide from the rain', 'Return to Carmel’s top'], 41),
    blank(2, 'for there is a sound of the rushing of _____.', 'rain', 41),
    sa(2, 'What did Elijah hear?', 'the rushing of rain', 41, ['rain']),
    tf(3, 'Elijah said the drought would continue without rain.', false, 41, 'He announced the sound of rushing rain.'),

    mc(1, 'Where did Elijah go while Ahab ate and drank?', ['The top of Carmel', 'The brook Kishon', 'Jezreel', 'A cave'], 42),
    blank(3, 'and put his face between his _____.', 'knees', 42),
    sa(1, 'What did Elijah bow upon?', 'the earth', 42),
    tf(2, 'Ahab went up to the top of Carmel with Elijah.', false, 42, 'Ahab ate and drank while Elijah went to Carmel’s top.'),

    mc(1, 'Where did Elijah tell his servant to look?', ['Toward the sea', 'Toward Samaria', 'Toward the altar', 'Toward Jezreel'], 43),
    blank(2, 'And he said, “Go again _____ times.”', 'seven', 43, ['7']),
    sa(2, 'What did the servant report at first?', 'There is nothing', 43, ['nothing']),
    tf(3, 'The servant saw a cloud on his first look.', false, 43, 'He initially reported nothing.'),

    mc(1, 'What appeared on the seventh look?', ['A little cloud like a man’s hand', 'A great storm already overhead', 'Fire from heaven', 'A flock of ravens'], 44),
    blank(3, 'a little cloud like a man’s hand is rising out of the _____.', 'sea', 44),
    sa(1, 'What was Ahab told to prepare?', 'his chariot', 44, ['chariot']),
    tf(2, 'Elijah warned Ahab that rain might stop him.', true, 44),
    mc(3, 'What did Elijah’s servant see on the seventh trip?', ['A little cloud like a man’s hand rising from the sea', 'A wall of fire descending over the summit of Carmel', 'A raven carrying bread and meat toward Elijah', 'A dry wind blowing from Samaria without any cloud'], 44),

    mc(1, 'Where did Ahab ride during the great rain?', ['Jezreel', 'Samaria', 'Tirzah', 'Zarephath'], 45),
    blank(2, 'the heavens grew black with clouds and wind, and there was a great _____.', 'rain', 45),
    sa(2, 'What made the heavens grow black?', 'clouds and wind', 45),
    tf(3, 'Only a light drizzle followed the small cloud.', false, 45, 'There was a great rain.'),

    mc(1, 'What enabled Elijah to run before Ahab?', ['The hand of the LORD was on him', 'Ahab gave him a horse', 'Obadiah carried him', 'The wind pushed him'], 46),
    blank(3, 'and he girded up his _____ and ran before Ahab', 'loins', 46),
    sa(1, 'To what place did Elijah run?', 'the entrance of Jezreel', 46, ['Jezreel']),
    tf(2, 'Elijah ran behind Ahab only after the chariot reached Samaria.', false, 46, 'He ran before Ahab to Jezreel’s entrance.'),
  ],
}

export default bank
