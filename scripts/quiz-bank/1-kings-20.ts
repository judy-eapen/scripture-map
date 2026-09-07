import { mc, blank, word, tf, type ChapterBank } from './types'

const bank: ChapterBank = {
  book: '1 Kings', chapter: 20, tag: 'quiz-v2-1kings-20', rows: [
    mc(1, 'Who besieged Samaria?', ['Ben-hadad king of Syria', 'Ahab king of Israel', 'The king of Egypt', 'Baasha'], 1),
    blank(1, '_____ kings were with him, and horses and chariots', 'thirty-two', 1, ['32']),
    word(3, 'How many kings accompanied Ben-hadad?', 'thirty-two', 1, ['32']),
    tf(1, 'Ben-hadad brought horses and chariots against Samaria.', true, 1),
    mc(3, 'How large was Ben-hadad’s royal coalition?', ['Thirty-two kings', 'Twenty-seven kings', 'Seven kings', 'Two hundred thirty-two kings'], 1),

    mc(1, 'To whom did Ben-hadad send messengers?', ['Ahab king of Israel', 'The prophet', 'The elders of Syria', 'Jehoshaphat'], 2),
    blank(2, 'And he sent _____ into the city to Ahab king of Israel', 'messengers', 2),
    word(2, 'Where were the messengers sent?', 'into the city', 2, ['the city', 'Samaria']),
    tf(3, 'Ben-hadad spoke to Ahab only in person.', false, 2, 'He sent messengers into the city.'),

    mc(1, 'What wealth did Ben-hadad claim as his?', ['Ahab’s silver and gold', 'Only Samaria’s horses', 'The temple vessels', 'The elders’ land'], 3),
    blank(3, 'Your fairest wives and _____ also are mine.', 'children', 3),
    word(1, 'Which family members did he claim?', 'wives and children', 3),
    tf(2, 'Ben-hadad claimed Ahab’s gold but not his silver.', false, 3, 'He claimed both silver and gold.'),

    mc(1, 'How did Ahab initially answer Ben-hadad?', ['He said he and all he had were Ben-hadad’s', 'He declared war immediately', 'He refused every demand', 'He asked the prophet'], 4),
    blank(2, 'I am yours, and all that I _____.', 'have', 4),
    word(2, 'How did Ahab address Ben-hadad?', 'my lord, O king', 4, ['my lord', 'O king']),
    tf(3, 'Ahab initially rejected Ben-hadad’s claim.', false, 4, 'He answered, “I am yours, and all that I have.”'),

    mc(1, 'What did Ben-hadad repeat through his messengers?', ['His demand for silver, gold, wives, and children', 'An offer of peace', 'A request for horses only', 'A warning from a prophet'], 5),
    blank(3, '_____ to me your silver and your gold', 'Deliver', 5),
    word(1, 'Who returned to Ahab?', 'the messengers', 5),
    tf(2, 'The messengers withdrew Ben-hadad’s first demand.', false, 5, 'They repeated it and added a further demand.'),

    mc(2, 'What would Ben-hadad’s servants do the next day?', ['Search the houses and take whatever pleased them', 'Bring Ahab tribute', 'Withdraw from Samaria', 'Meet Israel’s elders'], 6),
    blank(3, 'and lay hands on whatever _____ them, and take it away.', 'pleases', 6),
    word(1, 'Whose houses would be searched?', 'Ahab’s and his servants’', 6, ['the king’s and his servants’ houses']),
    tf(2, 'Ben-hadad promised not to enter the servants’ houses.', false, 6, 'His men would search both Ahab’s house and his servants’ houses.'),

    mc(1, 'Whom did Ahab consult after the expanded demand?', ['All the elders of the land', 'The prophets of Baal', 'Ben-hadad’s kings', 'The governors’ servants'], 7),
    blank(2, 'Mark, now, and see how this man is seeking _____.', 'trouble', 7),
    word(2, 'What had Ahab not refused?', 'the first demand', 7, ['his wives, children, silver, and gold']),
    tf(3, 'Ahab said he had already refused the original demand.', false, 7, 'He told the elders he had not refused it.'),

    mc(1, 'What advice did the elders and people give Ahab?', ['Do not heed or consent', 'Surrender everything', 'Flee Samaria', 'Ask Syria for time'], 8),
    blank(3, 'Do not heed or _____.', 'consent', 8),
    word(1, 'Who joined the elders in advising Ahab?', 'all the people', 8, ['the people']),
    tf(2, 'The elders urged Ahab to consent.', false, 8, 'They told him not to heed or consent.'),

    mc(1, 'Which demand did Ahab say he would honor?', ['Ben-hadad’s first demand', 'The house searches', 'No demand at all', 'Only the demand for horses'], 9),
    blank(2, 'but this thing I _____ do.', 'cannot', 9),
    word(2, 'To whom did Ahab send this reply?', 'Ben-hadad’s messengers', 9, ['the messengers']),
    tf(3, 'Ahab agreed to let Syrian servants search every house.', false, 9, 'He said he could not accept that added demand.'),

    mc(2, 'What boast did Ben-hadad make about Samaria’s dust?', ['It would not provide a handful for each follower', 'It would bury his army', 'It would become gold', 'It would blind Israel'], 10),
    blank(3, 'if the dust of Sama’ria shall suffice for _____ for all the people who follow me.', 'handfuls', 10),
    word(1, 'By whom did Ben-hadad swear?', 'the gods', 10),
    tf(2, 'Ben-hadad implied his following was very small.', false, 10, 'He boasted it was so large Samaria’s dust would not supply each a handful.'),

    mc(1, 'What warning did Ahab give about boasting?', ['One putting armor on should not boast like one taking it off', 'Only kings may boast', 'Armor guarantees victory', 'A soldier should never remove armor'], 11),
    blank(3, 'Let not him that girds on his armor boast himself as he that _____ it off.', 'puts', 11),
    word(1, 'What was the successful warrior pictured doing?', 'putting off his armor', 11, ['puts it off']),
    tf(2, 'Ahab warned Ben-hadad not to boast before the battle was won.', true, 11),
    mc(3, 'Complete Ahab’s comparison: the man girding armor should not boast like whom?', ['The man who puts it off', 'The man who forged it', 'The king who bought it', 'The servant who carries it'], 11),

    mc(1, 'What was Ben-hadad doing when Ahab’s answer arrived?', ['Drinking with the kings', 'Leading the attack', 'Sleeping', 'Inspecting chariots'], 12),
    blank(2, 'Take your _____.', 'positions', 12),
    word(2, 'Where was Ben-hadad drinking?', 'in the booths', 12, ['booths']),
    tf(3, 'Ben-hadad ordered his men to retreat.', false, 12, 'He ordered them to take positions against the city.'),

    mc(1, 'What did the prophet promise Ahab?', ['The LORD would give the great multitude into his hand that day', 'Syria would withdraw peacefully', 'Rain would stop the war', 'Judah would rescue Samaria'], 13),
    blank(3, 'and you shall know that I am the _____.', 'LORD', 13),
    word(1, 'Who came near to Ahab?', 'a prophet', 13),
    tf(2, 'The promised victory was intended to reveal the LORD.', true, 13),

    mc(2, 'Who would win the battle for Ahab?', ['The servants of the district governors', 'The thirty-two kings', 'The elders of Samaria', 'The prophets'], 14),
    blank(3, 'Who shall _____ the battle?', 'begin', 14),
    word(1, 'Who did the prophet say should begin?', 'Ahab', 14, ['you', 'the king']),
    tf(2, 'The prophet said Ben-hadad would begin the battle.', false, 14, 'He told Ahab, “You.”'),

    mc(1, 'How many servants of the district governors were mustered?', ['Two hundred and thirty-two', 'One hundred and thirty-two', 'Seven thousand', 'Thirty-two'], 15),
    blank(3, 'and after them he mustered all the people of Israel, _____ thousand.', 'seven', 15, ['7', 'seven thousand']),
    word(1, 'How many Israelites were mustered after the servants?', 'seven thousand', 15, ['7000', '7,000']),
    tf(2, 'The governors’ servants numbered one hundred and thirty-two.', false, 15, 'They numbered two hundred and thirty-two.'),

    mc(1, 'When did Israel’s force go out?', ['At noon', 'At dawn', 'At midnight', 'At sunset'], 16),
    blank(2, 'while Ben-ha’dad was drinking himself _____ in the booths', 'drunk', 16),
    word(2, 'Who was drinking with Ben-hadad?', 'the thirty-two kings', 16, ['thirty-two kings', '32 kings']),
    tf(3, 'Ben-hadad was sober and leading his army at noon.', false, 16, 'He was drinking himself drunk with the kings.'),

    mc(1, 'Who went out first from Samaria?', ['The servants of the district governors', 'All seven thousand Israelites', 'Ahab alone', 'The elders'], 17),
    blank(3, 'And Ben-ha’dad sent out _____.', 'scouts', 17),
    word(1, 'What did the scouts report?', 'Men are coming out from Samaria', 17, ['men are coming out']),
    tf(2, 'The scouts reported that no one was leaving Samaria.', false, 17, 'They reported men coming out from Samaria.'),

    mc(2, 'What order did Ben-hadad give whether the men came for peace or war?', ['Take them alive', 'Kill them', 'Let them pass', 'Question them first'], 18),
    blank(3, 'If they have come out for peace, take them _____.', 'alive', 18),
    word(1, 'How did the order differ for peace and war?', 'it did not differ', 18, ['the same', 'both alive']),
    tf(2, 'Ben-hadad ordered peaceful men spared and warriors killed.', false, 18, 'He ordered both groups taken alive.'),

    mc(1, 'Who followed the governors’ servants out of the city?', ['The army', 'The elders', 'The prophets', 'Ben-hadad’s scouts'], 19),
    blank(2, 'the servants of the governors of the districts, and the _____ which followed them.', 'army', 19),
    word(2, 'From where did Israel’s force emerge?', 'the city', 19, ['Samaria']),
    tf(3, 'The servants went out without any army following.', false, 19, 'The army followed them.'),

    mc(1, 'What happened when each Israelite killed his man?', ['The Syrians fled and Israel pursued', 'Israel retreated', 'Ben-hadad surrendered', 'The battle paused'], 20),
    blank(3, 'but Ben-ha’dad king of Syria escaped on a _____ with horsemen.', 'horse', 20),
    word(1, 'Who pursued the fleeing Syrians?', 'Israel', 20),
    tf(2, 'Ben-hadad was captured during the first battle.', false, 20, 'He escaped on a horse with horsemen.'),

    mc(1, 'What did the king of Israel capture?', ['Horses and chariots', 'The king of Syria', 'Thirty-two crowns', 'The city of Damascus'], 21),
    blank(2, 'and killed the Syrians with a great _____.', 'slaughter', 21),
    word(2, 'Who went out after the Syrians fled?', 'the king of Israel', 21, ['Ahab']),
    tf(3, 'Israel’s king lost all the horses and chariots.', false, 21, 'He captured them.'),

    mc(2, 'When did the prophet warn Syria would return?', ['In the spring', 'The next day', 'After seven years', 'At harvest'], 22),
    blank(3, 'Come, strengthen yourself, and _____ well what you have to do', 'consider', 22),
    word(1, 'Who came near to the king after the victory?', 'the prophet', 22, ['a prophet']),
    tf(2, 'The prophet said the Syrian threat was permanently ended.', false, 22, 'He warned Syria’s king would return in spring.'),

    mc(1, 'Why did the Syrians think Israel had won?', ['Israel’s gods were gods of the hills', 'Israel had more chariots', 'Ben-hadad was absent', 'Samaria had stronger walls'], 23),
    blank(3, 'but let us fight against them in the _____', 'plain', 23),
    word(1, 'Where did Syria propose to fight next?', 'the plain', 23, ['plain']),
    tf(2, 'The Syrians believed Israel would be stronger on the plain.', false, 23, 'They believed Syria would be stronger there.'),
    mc(3, 'What change did the Syrians propose after blaming gods of the hills?', ['Fight Israel in the plain', 'Attack only at night', 'Abandon horses and chariots', 'Besiege Judah instead'], 23),

    mc(1, 'Whom did Ben-hadad’s servants recommend removing?', ['The kings from their posts', 'The commanders', 'The horsemen', 'The scouts'], 24),
    blank(2, 'and put _____ in their places.', 'commanders', 24),
    word(2, 'Who would replace the kings?', 'commanders', 24),
    tf(3, 'The plan was to give each king a larger command.', false, 24, 'The kings were to be removed and commanders appointed.'),

    mc(2, 'How was the replacement army to compare with the lost army?', ['Horse for horse and chariot for chariot', 'Twice as many infantry only', 'Without horses', 'Smaller but faster'], 25),
    blank(3, 'and _____ for chariot', 'chariot', 25),
    word(1, 'Did Ben-hadad follow his servants’ advice?', 'yes', 25, ['he did', 'yes he did']),
    tf(2, 'Ben-hadad rejected the advice to rebuild his army.', false, 25, 'He hearkened and did so.'),

    mc(1, 'Where did Ben-hadad take the Syrians in spring?', ['Aphek', 'Samaria', 'Jezreel', 'Carmel'], 26),
    blank(2, 'In the spring Ben-ha’dad _____ the Syrians', 'mustered', 26),
    word(2, 'Whom did Syria go to fight?', 'Israel', 26),
    tf(3, 'Ben-hadad went to Aphek in winter.', false, 26, 'He went up in the spring.'),

    mc(1, 'To what were Israel’s encamped forces compared?', ['Two little flocks of goats', 'A swarm of bees', 'A cedar forest', 'A mighty river'], 27),
    blank(3, 'but the Syrians filled the _____.', 'country', 27),
    word(1, 'What preparation did Israel receive before going out?', 'provisions', 27, ['they were provisioned']),
    tf(2, 'Israel filled the country while Syria looked like two small flocks.', false, 27, 'The comparison was the reverse.'),

    mc(2, 'Why would the LORD give Syria’s multitude into Israel’s hand?', ['Syria said the LORD was not God of the valleys', 'Israel had more soldiers', 'Ben-hadad asked for mercy', 'Ahab obeyed every command'], 28),
    blank(3, 'The LORD is a god of the hills but he is not a god of the _____.', 'valleys', 28),
    word(1, 'Who delivered the LORD’s message?', 'a man of God', 28),
    tf(2, 'The coming victory would show Israel that the LORD is God.', true, 28),

    mc(1, 'How long did the armies face each other before battle?', ['Seven days', 'Three days', 'One month', 'Forty days'], 29),
    blank(3, 'Israel smote of the Syrians a hundred thousand foot soldiers in one _____.', 'day', 29),
    word(1, 'How many Syrian foot soldiers fell?', 'one hundred thousand', 29, ['100000', '100,000']),
    tf(2, 'The battle was joined on the seventh day.', true, 29),

    mc(1, 'What killed twenty-seven thousand Syrians in Aphek?', ['A falling wall', 'Israel’s chariots', 'Fire from heaven', 'A flood'], 30),
    blank(2, 'Ben-ha’dad also fled, and entered an inner _____ in the city.', 'chamber', 30),
    word(2, 'How many men did the wall fall upon?', 'twenty-seven thousand', 30, ['27000', '27,000']),
    tf(3, 'Ben-hadad fled completely out of Aphek.', false, 30, 'He hid in an inner chamber within the city.'),

    mc(1, 'How did Ben-hadad’s servants describe Israel’s kings?', ['Merciful kings', 'Cruel kings', 'Weak kings', 'Faithless kings'], 31),
    blank(3, 'let us put sackcloth on our loins and _____ upon our heads', 'ropes', 31),
    word(1, 'What did the servants hope Ahab would spare?', 'Ben-hadad’s life', 31, ['his life', 'life']),
    tf(2, 'The servants proposed approaching Ahab in royal clothing.', false, 31, 'They proposed sackcloth and ropes.'),
    mc(3, 'How did Ben-hadad’s servants plan to plead for mercy?', ['Sackcloth on their loins and ropes on their heads', 'Crowns on their heads and swords at their sides', 'Barefoot with ashes on their faces', 'Armor on their bodies and shields raised'], 31),

    mc(1, 'What plea did the servants deliver for Ben-hadad?', ['Pray, let me live', 'Return my cities', 'Give me Samaria', 'Release my kings'], 32),
    blank(2, 'Does he still live? He is my _____.', 'brother', 32),
    word(2, 'What did the men put on their heads?', 'ropes', 32),
    tf(3, 'Ahab called Ben-hadad his enemy.', false, 32, 'He called him his brother.'),
    mc(3, 'What complete appearance did Ben-hadad’s servants present to Ahab?', ['Sackcloth on their loins and ropes on their heads', 'Armor on their bodies and crowns on their heads', 'Ashes on their faces and sandals in their hands', 'Royal robes and golden chains'], 32),

    mc(2, 'What were Ben-hadad’s men watching for?', ['An omen in Ahab’s words', 'A signal from Syria', 'The return of scouts', 'A change in weather'], 33),
    blank(3, 'Go and _____ him.', 'bring', 33),
    word(1, 'Where did Ahab cause Ben-hadad to sit?', 'in the chariot', 33, ['the chariot']),
    tf(2, 'The servants quickly repeated Ahab’s word “brother.”', true, 33),

    mc(1, 'What did Ben-hadad promise to restore?', ['Cities his father took from Ahab’s father', 'All Syrian chariots', 'Samaria’s silver', 'The district governors'], 34),
    blank(2, 'you may establish _____ for yourself in Damascus', 'bazaars', 34),
    word(2, 'What did Ahab make with Ben-hadad?', 'a covenant', 34),
    tf(3, 'Ahab rejected the terms and kept Ben-hadad captive.', false, 34, 'He made a covenant and let him go.'),

    mc(1, 'What did a son of the prophets ask his fellow to do?', ['Strike him', 'Hide him', 'Bring the king', 'Release a prisoner'], 35),
    blank(3, 'But the man _____ to strike him.', 'refused', 35),
    word(1, 'By whose command did the prophet make the request?', 'the LORD’s', 35, ['the LORD', 'LORD']),
    tf(2, 'The first man obeyed and struck the prophet.', false, 35, 'He refused.'),

    mc(1, 'What happened to the man who refused the LORD’s command?', ['A lion killed him', 'The king imprisoned him', 'He was wounded by a prophet', 'He paid a talent of silver'], 36),
    blank(2, 'a lion shall _____ you.', 'kill', 36),
    word(2, 'When did the lion meet him?', 'as soon as he departed', 36, ['after he departed']),
    tf(3, 'The man escaped the announced judgment.', false, 36, 'A lion met and killed him.'),

    mc(1, 'How did another man respond to the prophet’s request?', ['He struck and wounded him', 'He refused', 'He called the king', 'He fled from the lion'], 37),
    blank(3, 'And the man struck him, smiting and _____ him.', 'wounding', 37),
    word(1, 'What request did the prophet repeat?', 'Strike me, I pray', 37, ['strike me']),
    tf(2, 'The second man also refused to strike the prophet.', false, 37, 'He struck and wounded him.'),

    mc(1, 'How did the prophet disguise himself?', ['With a bandage over his eyes', 'With sackcloth and ropes', 'In Syrian armor', 'In a king’s robe'], 38),
    blank(2, 'and waited for the king by the _____.', 'way', 38),
    word(2, 'For whom did the disguised prophet wait?', 'the king', 38, ['Ahab']),
    tf(3, 'The prophet waited inside the palace.', false, 38, 'He waited for the king by the way.'),

    mc(2, 'What penalty was attached to losing the guarded man?', ['The guard’s life or a talent of silver', 'Seven years in prison', 'The loss of his house', 'Death only'], 39),
    blank(3, 'your life shall be for his life, or else you shall pay a _____ of silver.', 'talent', 39),
    word(1, 'Where did the prophet claim he had gone?', 'into the midst of the battle', 39, ['the battle']),
    tf(2, 'The soldier told him he could release the guarded man.', false, 39, 'He was charged to keep him or pay with life or silver.'),

    mc(1, 'Why did the guarded man supposedly escape?', ['The servant was busy here and there', 'A lion attacked', 'The king released him', 'The battle ended'], 40),
    blank(2, 'you yourself have _____ it.', 'decided', 40),
    word(2, 'Who pronounced judgment on the servant’s story?', 'the king of Israel', 40, ['Ahab', 'the king']),
    tf(3, 'The king excused the servant from responsibility.', false, 40, 'He said the servant had decided his own judgment.'),

    mc(1, 'What revealed the disguised man’s identity?', ['He removed the bandage', 'He put on sackcloth', 'He entered the chariot', 'He named Ben-hadad'], 41),
    blank(3, 'the king of Israel _____ him as one of the prophets.', 'recognized', 41),
    word(1, 'As what did the king recognize him?', 'one of the prophets', 41, ['a prophet']),
    tf(2, 'The king still failed to identify him after the bandage came off.', false, 41, 'The king recognized him as a prophet.'),

    mc(2, 'Why was Ahab condemned?', ['He released the man devoted to destruction', 'He lost the guarded prisoner accidentally', 'He refused to fight Syria', 'He killed Ben-hadad'], 42),
    blank(3, 'therefore your _____ shall go for his life', 'life', 42),
    word(1, 'Whose people would answer for Ben-hadad’s people?', 'Ahab’s people', 42, ['your people', 'Israel']),
    tf(2, 'The LORD approved Ahab’s release of Ben-hadad.', false, 42, 'Ahab’s life and people were placed under judgment for it.'),

    mc(1, 'In what mood did Ahab return home?', ['Resentful and sullen', 'Joyful and grateful', 'Fearless and proud', 'Peaceful and content'], 43),
    blank(2, 'And the king of Israel went to his house resentful and _____.', 'sullen', 43),
    word(2, 'To what city did Ahab return?', 'Samaria', 43, ["Sama'ria"]),
    tf(3, 'Ahab returned to Samaria rejoicing.', false, 43, 'He went home resentful and sullen.'),
  ],
}

export default bank
