import { mc, blank, word, tf, type ChapterBank, sa } from './types'

const bank: ChapterBank = {
  book: '2 Kings', chapter: 6, tag: 'quiz-v2-2kings-6', rows: [
    mc(2, 'What problem did the sons of the prophets bring to Elisha?', ['Their dwelling place was too small', 'Their water was bad', 'Their food was poisoned', 'Their city was under siege'], 1),
    blank(1, 'the place where we dwell under your charge is too _____ for us.', 'small', 1),
    word(3, 'Under whose charge were the prophets living?', 'Elisha’s', 1, ['Elisha', "Eli'sha's"]),
    tf(2, 'The sons of the prophets needed more room.', true, 1),

    mc(1, 'Where did the prophets propose building a larger dwelling?', ['By the Jordan', 'At Dothan', 'In Samaria', 'On Mount Carmel'], 2),
    blank(3, 'and each of us get there a _____.', 'log', 2),
    word(2, 'How did Elisha answer their proposal?', 'Go', 2, ['he said go']),
    tf(1, 'Each man planned to obtain a log.', true, 2),

    mc(1, 'What additional request did one prophet make?', ['That Elisha go with them', 'That the king supply wood', 'That Gehazi build the house', 'That they remain where they were'], 3),
    blank(2, 'Be pleased to go with your _____.', 'servants', 3),
    tf(1, 'When the sons of the prophets asked Elisha to go with them to the Jordan, he answered, "I will go."', true, 3),
    tf(3, 'Elisha refused to join the work party.', false, 3, 'He answered, “I will go.”'),

    mc(1, 'What did the group do after reaching the Jordan?', ['Cut down trees', 'Crossed on dry ground', 'Built a siege wall', 'Searched for Elijah'], 4),
    blank(3, 'So he went with them. And when they came to the Jordan, they cut down _____.', 'trees', 4),
    word(2, 'Who went with the prophets?', 'Elisha', 4, ["Eli'sha"]),
    tf(1, 'The building work began at the Jordan.', true, 4),

    mc(1, 'What fell into the water while a man cut a log?', ['His axe head', 'Elisha’s staff', 'A silver talent', 'A wooden vessel'], 5),
    blank(2, 'Alas, my master! It was _____.', 'borrowed', 5),
    sa(1, 'Why was the man especially distressed?', 'the axe was borrowed', 5, ['it was borrowed', 'the axe head was borrowed']),
    tf(3, 'The man had purchased the lost axe for himself.', false, 5, 'He cried out because it was borrowed.'),

    mc(1, 'How did Elisha make the iron float?', ['He threw a cut stick where it fell', 'He struck the water with his mantle', 'He poured salt into the river', 'He commanded the man to dive'], 6),
    blank(3, 'Then the man of God said, "Where did it fall?" When he showed him the place, he cut off a stick, and threw it in there, and made the iron _____.', 'float', 6),
    sa(2, 'What did Elisha first ask the man?', 'Where did it fall?', 6, ['where the axe head fell', 'the place it fell']),
    tf(1, 'The man showed Elisha the place where the axe head had fallen.', true, 6),
    mc(3, 'What complete sequence recovered the borrowed axe head?', ['A stick was thrown where it fell, and the iron floated', 'The Jordan was parted and the man walked to it', 'The river was drained and the iron was found', 'A new iron head was given to the man'], 6),

    mc(1, 'What did Elisha tell the man to do with the floating iron?', ['Take it up', 'Leave it there', 'Give it to another prophet', 'Throw it back'], 7),
    blank(2, 'So he reached out his hand and _____ it.', 'took', 7),
    sa(1, 'How did the man retrieve the iron?', 'with his hand', 7, ['he reached out his hand']),
    tf(3, 'Elisha personally lifted the axe head from the water.', false, 7, 'The man reached out and took it.'),

    mc(1, 'With whom did Syria’s king plan his military camp?', ['His servants', 'Elisha', 'Israel’s king', 'The elders of Samaria'], 8),
    blank(3, 'At such and such a place shall be my _____.', 'camp', 8),
    word(2, 'Against which nation was Syria warring?', 'Israel', 8),
    tf(1, 'The Syrian king discussed a planned camp location.', true, 8),

    mc(1, 'What warning did Elisha send Israel’s king?', ['Avoid the place where Syrians were going down', 'Abandon the city of Samaria', 'Attack the Syrians at Dothan', 'Cross over the Jordan at night'], 9),
    blank(2, 'Beware that you do not _____ this place', 'pass', 9),
    sa(1, 'Who were going down to the dangerous place?', 'the Syrians', 9, ['Syrians']),
    tf(3, 'The man of God warned Israel’s king of the Syrian position.', true, 9),

    mc(1, 'How did Israel’s king use Elisha’s warnings?', ['He checked the places and guarded himself', 'He ignored the prophet’s warnings', 'He shared the reports with Syria', 'He withdrew from his kingdom'], 10),
    blank(3, 'so that he saved himself there more than once or _____.', 'twice', 10),
    sa(2, 'Who identified the dangerous locations?', 'the man of God', 10, ['Elisha']),
    tf(1, 'Elisha’s warnings protected the king on multiple occasions.', true, 10),

    mc(1, 'What did Syria’s king suspect?', ['One of his own people supported Israel’s king', 'Elisha led Israel’s army', 'Dothan had betrayed Syria', 'His servants had lost their weapons'], 11),
    sa(1, 'How did the Syrian king feel about the repeated failures?', 'greatly troubled', 11, ['troubled']),
    tf(3, 'Syria’s king called his servants to identify a possible traitor.', true, 11),

    mc(1, 'How did a servant explain Israel’s advance knowledge?', ['Elisha revealed words from Syria’s bedchamber', 'A Syrian captain secretly sent letters', 'Israel placed spies throughout every camp', 'The Syrian king announced plans publicly'], 12),
    blank(3, 'the words that you speak in your _____.', 'bedchamber', 12),
    word(2, 'Which prophet revealed the Syrian king’s words?', 'Elisha', 12, ["Eli'sha"]),
    tf(1, 'The servant denied that anyone among them was betraying Syria.', true, 12),
    mc(3, 'What extraordinary intelligence did Elisha provide?', ['Words spoken in the Syrian king’s bedchamber', 'Messages secretly dispatched from Dothan', 'Testimony gathered from captured soldiers', 'Movements observed from Samaria’s wall'], 12),

    mc(1, 'Where was Elisha reported to be?', ['Dothan', 'Samaria', 'Jericho', 'Damascus'], 13),
    blank(2, 'that I may send and _____ him.', 'seize', 13),
    sa(1, 'Who wanted Elisha’s location found?', 'the king of Syria', 13, ['Syria’s king']),
    tf(3, 'The Syrian king sought Elisha in order to seize him.', true, 13),

    mc(1, 'What force did Syria send to Dothan?', ['Horses, chariots, and a great army', 'A single messenger', 'Fifty unarmed men', 'Two servants with gifts'], 14),
    blank(3, 'and they came by _____, and surrounded the city.', 'night', 14),
    sa(2, 'What did the Syrian force do to Dothan?', 'surrounded it', 14, ['surrounded the city']),
    tf(1, 'The Syrian army arrived at Dothan during the night.', true, 14),

    mc(1, 'What did Elisha’s servant see in the morning?', ['An army surrounding the city', 'The Syrian forces fleeing away', 'A mountain covered with fire', 'The Jordan River divided'], 15),
    sa(1, 'Who was alarmed by the surrounding army?', 'the servant of the man of God', 15, ['Elisha’s servant', 'the servant']),
    tf(3, 'The servant found Dothan free of enemy soldiers.', false, 15, 'A Syrian army surrounded the city.'),

    mc(1, 'Why did Elisha tell his servant not to fear?', ['Their unseen allies outnumbered the enemy', 'The Syrian army had already departed', 'Israel’s king was defending Dothan', 'The Syrian soldiers carried no weapons'], 16),
    blank(3, 'those who are with us are _____ than those who are with them.', 'more', 16),
    sa(2, 'What command did Elisha first give his frightened servant?', 'Fear not', 16, ['do not fear']),
    tf(1, 'Elisha saw that their true support outnumbered the enemy.', true, 16),

    mc(1, 'What did Elisha pray for his servant?', ['That the LORD would open his eyes to see', 'That the LORD would blind him', 'That fire would consume Dothan', 'That the Syrians would flee immediately'], 17),
    blank(2, 'the mountain was full of horses and chariots of _____', 'fire', 17),
    word(1, 'Around whom were the fiery horses and chariots?', 'Elisha', 17, ["Eli'sha"]),
    tf(3, 'The young man saw the heavenly army after the LORD opened his eyes.', true, 17),
    mc(3, 'What did Elisha’s servant see when his eyes were opened?', ['Fiery horses and chariots around Elisha', 'Israel’s army marching into Dothan', 'The Syrian king beginning his retreat', 'A whirlwind carrying Elisha away'], 17),

    mc(1, 'What did Elisha ask the LORD to do to the Syrians?', ['Strike them with blindness', 'Consume them with fire', 'Send them back to Damascus', 'Make them hear chariots'], 18),
    blank(3, 'Strike this people, I pray thee, with _____.', 'blindness', 18),
    word(2, 'In accordance with whose prayer were they blinded?', 'Elisha’s', 18, ['Elisha', "Eli'sha's prayer"]),
    tf(1, 'The LORD answered Elisha’s prayer concerning the Syrians.', true, 18),

    mc(1, 'Where did Elisha lead the blinded Syrians?', ['Samaria', 'Dothan', 'The Jordan', 'Mount Carmel'], 19),
    blank(2, 'follow me, and I will bring you to the man whom you _____.', 'seek', 19),
    sa(1, 'What did Elisha tell the Syrians about their location?', 'this was not the way or the city', 19, ['not the way and not the city']),
    tf(3, 'Elisha guided the Syrians into Israel’s capital.', true, 19),

    mc(1, 'What did the Syrians discover when their eyes were opened?', ['They were in the midst of Samaria', 'They had returned to Dothan', 'They stood at the Jordan', 'They were surrounded by fire'], 20),
    blank(3, 'O LORD, open the eyes of these men, that they may _____.', 'see', 20),
    word(2, 'Who prayed for the Syrians’ sight to return?', 'Elisha', 20, ["Eli'sha"]),
    tf(1, 'The LORD restored the Syrians’ sight inside Samaria.', true, 20),

    mc(1, 'What did Israel’s king ask Elisha about the captured Syrians?', ['Whether he should kill them', 'Whether he should free their king', 'Whether he should blind them again', 'Whether he should send them to Dothan'], 21),
    blank(2, 'My father, shall I _____ them?', 'slay', 21),
    word(1, 'How many times did the king repeat his question?', 'twice', 21, ['two times', '2']),
    tf(3, 'The king addressed Elisha as “my father.”', true, 21),

    mc(1, 'What did Elisha command instead of killing the Syrians?', ['Feed them, then send them away', 'Make the captives into slaves', 'Imprison them within Samaria', 'Return them without any food'], 22),
    blank(3, 'Set bread and _____ before them', 'water', 22),
    sa(2, 'To whom were the captives to return?', 'their master', 22, ['the Syrian king']),
    tf(1, 'Elisha opposed executing the captured army.', true, 22),

    mc(1, 'What did Israel’s king prepare for the Syrians?', ['A great feast', 'A prison', 'A ransom', 'A battlefield'], 23),
    blank(2, 'and they went to their _____.', 'master', 23),
    sa(1, 'What stopped after the feast and release?', 'Syrian raids into Israel', 23, ['the Syrian raids', 'raids']),
    tf(3, 'The Syrians ate, drank, and were sent away.', true, 23),

    mc(1, 'Who later besieged Samaria?', ['Ben-hadad king of Syria', 'Mesha king of Moab', 'The king of Edom', 'Naaman'], 24),
    blank(3, 'and went up, and _____ Sama’ria.', 'besieged', 24),
    sa(2, 'How much of Syria’s army did Ben-hadad muster?', 'his entire army', 24, ['the entire army', 'all his army']),
    tf(1, 'Ben-hadad brought Syria’s entire army against Samaria.', true, 24),

    mc(1, 'What did an ass’s head cost during the famine?', ['Eighty shekels of silver', 'Five shekels', 'One talent', 'Twenty shekels'], 25),
    blank(2, 'an ass’s head was sold for _____ shekels of silver', 'eighty', 25, ['80']),
    sa(1, 'What caused the great famine in Samaria?', 'the Syrian siege', 25, ['the siege', 'Samaria was besieged']),
    tf(3, 'A fourth of a kab of dove’s dung sold for five silver shekels.', true, 25),
    mc(3, 'How severe had prices become under the siege?', ['An ass’s head cost eighty shekels', 'A whole donkey cost five shekels', 'A loaf of bread cost one shekel', 'One hundred lambs cost one shekel'], 25),

    mc(1, 'Where was Israel’s king when a woman appealed to him?', ['Passing on the city wall', 'At Elisha’s house', 'At Dothan’s gate', 'Beside the Jordan'], 26),
    blank(3, 'Help, my lord, O _____!', 'king', 26),
    sa(2, 'Who cried out for help?', 'a woman', 26),
    tf(1, 'The woman directly appealed to the king.', true, 26),

    mc(1, 'Why did the king say he could not help?', ['The LORD was not helping her', 'He had no authority', 'Elisha had forbidden it', 'She lived outside Samaria'], 27),
    blank(2, 'From the threshing floor, or from the wine _____?', 'press', 27),
    sa(1, 'What two sources of provision did the king mention?', 'the threshing floor and the wine press', 27, ['threshing floor or wine press']),
    tf(3, 'The king claimed he could supply help even if the LORD did not.', false, 27, 'He asked how he could help if the LORD would not.'),

    mc(1, 'What agreement did the woman report?', ['Eat her son first, then the other son', 'Share the king’s remaining stores of grain', 'Leave the besieged city together', 'Ask Elisha to provide them with food'], 28),
    blank(3, 'Give your son, that we may eat him _____.', 'today', 28),
    sa(2, 'Who asked the woman to explain her trouble?', 'the king', 28),
    tf(1, 'The reported agreement exposed the extremity of the famine.', true, 28),

    mc(1, 'What did the second woman do on the next day?', ['Hid her son', 'Gave her son as agreed', 'Appealed to Elisha', 'Left Samaria'], 29),
    blank(2, 'but she has _____ her son.', 'hidden', 29),
    sa(1, 'Whose son had already been eaten?', 'the speaking woman’s son', 29, ['her son', 'the first woman’s son']),
    tf(3, 'Both women fulfilled the agreement they had made.', false, 29, 'The second woman hid her son.'),

    mc(1, 'What did the king do after hearing the woman?', ['Tore his clothes', 'Ordered a feast', 'Opened the city gates', 'Called for Ben-hadad'], 30),
    blank(3, 'he had _____ beneath upon his body', 'sackcloth', 30),
    sa(2, 'Who saw the sackcloth under the king’s clothes?', 'the people', 30),
    tf(1, 'The king was wearing sackcloth beneath his garments.', true, 30),

    mc(1, 'Whose death did the king vow to seek?', ['Elisha son of Shaphat’s', 'Ben-hadad’s', 'The woman’s', 'Naaman’s'], 31),
    blank(2, 'if the head of Eli’sha the son of Shaphat remains on his _____ today.', 'shoulders', 31),
    sa(1, 'What oath formula did the king use?', 'May God do so to me, and more also', 31, ['may God do so and more']),
    tf(3, 'The king blamed Elisha and threatened to behead him.', true, 31),

    mc(1, 'Who was sitting with Elisha in his house?', ['The elders', 'The Syrian captives', 'The sons of the prophets', 'The women from the wall'], 32),
    blank(3, 'shut the door, and hold the door _____ against him.', 'fast', 32),
    sa(2, 'Whom had the king sent ahead?', 'a messenger', 32, ['the messenger', 'a man']),
    tf(1, 'Elisha knew the messenger’s purpose before he arrived.', true, 32),

    mc(1, 'How did the king describe Samaria’s trouble?', ['As coming from the LORD', 'As Elisha’s miracle', 'As Judah’s fault', 'As a natural drought'], 33),
    blank(2, 'Why should I _____ for the LORD any longer?', 'wait', 33),
    sa(1, 'Who came down while Elisha was still speaking?', 'the king', 33),
    tf(3, 'The king expressed continued patience and trust in waiting for the LORD.', false, 33, 'He asked why he should wait for the LORD any longer.'),
  ],
}

export default bank
