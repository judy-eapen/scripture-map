import { mc, blank, word, tf, type ChapterBank, sa } from './types'

const bank: ChapterBank = {
  book: '2 Kings', chapter: 5, tag: 'quiz-v2-2kings-5', rows: [
    mc(1, 'What position did Naaman hold in Syria?', ['Commander of the king’s army', 'Keeper of the treasury', 'Chief priest', 'Royal minstrel'], 1),
    blank(1, 'He was a mighty man of valor, but he was a _____.', 'leper', 1),
    word(1, 'Through whom had the LORD given victory to Syria?', 'Naaman', 1, ["Na'aman"]),
    tf(2, 'Naaman was highly favored by the king of Syria.', true, 1),
    mc(2, 'What contrast closes the description of Naaman?', ['He was a mighty warrior but had leprosy', 'He was wealthy but had no servants', 'He was Syrian but served Israel', 'He was honored but had no victories'], 1),

    mc(1, 'Whom had Syrian raiders carried away from Israel?', ['A little maid', 'Elisha', 'Gehazi', 'The king’s daughter'], 2),
    blank(3, 'and she waited on Na’aman’s _____.', 'wife', 2),
    word(2, 'From what land had the girl been taken?', 'Israel', 2),
    tf(1, 'The Israelite girl served Naaman’s wife.', true, 2),
    mc(2, 'How did the little maid enter Naaman’s household?', ['Syrian raiders carried her off from Israel', 'Naaman hired her in Samaria', 'Elisha sent her', 'The king of Israel gave her as a gift'], 2),

    mc(1, 'Who first spoke in Naaman’s household about a possible cure?', ['The Israelite maid who served Naaman’s wife', 'The king of Syria who commanded Naaman’s army', 'Gehazi, the servant of the prophet Elisha', 'The soldiers who had accompanied Naaman in battle'], 3),
    blank(2, 'Would that my lord were with the prophet who is in _____.', 'Sama’ria', 3, ['Samaria']),
    sa(1, 'What did the maid say the prophet could cure?', 'Naaman’s leprosy', 3, ['his leprosy', 'leprosy']),
    tf(3, 'The maid directed Naaman’s household toward a prophet in Samaria.', true, 3),
    mc(3, 'What hope did the captive Israelite maid give her mistress?', ['The prophet in Samaria could cure Naaman’s leprosy', 'The king of Israel would employ Naaman', 'The rivers of Damascus would heal him', 'Gehazi would sell him medicine'], 3),
    sa(2, 'To whom did the maid express her wish for Naaman’s healing?', 'her mistress', 3, ['Naaman’s wife']),

    mc(1, 'Whom did Naaman tell about the maiden’s words?', ['His lord, the king of Syria', 'The king of Israel', 'Elisha', 'Gehazi'], 4),
    blank(3, 'Thus and so spoke the _____ from the land of Israel.', 'maiden', 4),
    sa(2, 'Whose report did Naaman repeat?', 'the Israelite maiden’s', 4, ['the maiden from Israel', 'the little maid’s']),
    tf(1, 'Naaman brought the girl’s message to his Syrian master.', true, 4),
    mc(2, 'What prompted Naaman to approach the king of Syria?', ['The Israelite maiden’s statement about a prophet who could cure him', 'An order from Elisha directing him to travel immediately to Samaria', 'A letter from Israel’s king offering to heal his leprosy', 'A military defeat that had left him wounded and unable to command'], 4),

    mc(1, 'What did Syria’s king offer to send?', ['A letter to Israel’s king', 'An army to Samaria', 'A prophet to Damascus', 'A jar of healing oil'], 5),
    blank(2, 'taking with him ten talents of silver, six thousand shekels of _____', 'gold', 5),
    word(1, 'How many festal garments did Naaman take?', 'ten', 5, ['10']),
    tf(3, 'Naaman traveled without gifts or valuables.', false, 5, 'He took silver, gold, and ten festal garments.'),
    mc(2, 'Which collection of valuables accompanied Naaman?', ['Ten talents of silver, six thousand shekels of gold, and ten festal garments', 'Six talents of silver, ten thousand shekels of gold, and one hundred garments', 'Ten thousand shekels of silver, two talents of gold, and six festal garments', 'One talent of silver, seven thousand shekels of gold, and two royal robes'], 5),

    mc(1, 'What did the Syrian king ask Israel’s king to do?', ['Cure Naaman of leprosy', 'Send Elisha to Damascus', 'Return the captive maid', 'Join a battle against Moab'], 6),
    blank(3, 'I have sent to you Na’aman my _____.', 'servant', 6),
    word(2, 'Who carried the letter?', 'Naaman', 6, ["Na'aman"]),
    tf(1, 'The letter placed the request for Naaman’s cure before Israel’s king.', true, 6),
    mc(2, 'To whom was the royal letter addressed?', ['The king of Israel', 'Elisha', 'Naaman’s wife', 'The king of Judah'], 6),

    mc(1, 'How did Israel’s king react to the letter?', ['He tore his clothes', 'He rejoiced', 'He sent for the maid', 'He washed in the Jordan'], 7),
    blank(2, 'Am I God, to kill and to make _____?', 'alive', 7),
    sa(1, 'What did the king suspect Syria was seeking?', 'a quarrel', 7, ['a quarrel with him', 'conflict']),
    tf(3, 'Israel’s king believed he personally had power to cure leprosy.', false, 7, 'He protested that he was not God, able to kill and make alive.'),
    mc(2, 'Why did Israel’s king interpret the request as hostile?', ['He could not cure leprosy and thought Syria’s king was seeking a quarrel', 'The letter demanded that Israel pay tribute to Syria in silver and gold', 'Naaman had arrived with an invading army rather than horses and chariots', 'The Israelite maid had accused the king of refusing to send for Elisha'], 7),

    mc(1, 'What did Elisha tell the king to do with Naaman?', ['Send him to Elisha', 'Return him to Syria', 'Wash him in Jerusalem', 'Imprison him'], 8),
    blank(3, 'that he may know that there is a _____ in Israel.', 'prophet', 8),
    sa(2, 'What had Elisha heard the king had done?', 'torn his clothes', 8, ['rent his clothes']),
    tf(1, 'Elisha wanted Naaman to learn that Israel had a prophet.', true, 8),
    mc(2, 'What question did Elisha send to Israel’s king?', ['Why have you torn your clothes?', 'Why did you send for Naaman?', 'Where is the captive maid?', 'Are Damascus’s rivers better?'], 8),

    mc(1, 'Where did Naaman stop with his horses and chariots?', ['At Elisha’s door', 'At the Jordan’s bank', 'At Israel’s palace', 'At Mount Carmel'], 9),
    blank(2, 'and halted at the door of Eli’sha’s _____.', 'house', 9),
    word(1, 'What vehicles accompanied Naaman?', 'chariots', 9),
    tf(3, 'Naaman arrived at Elisha’s house alone and on foot.', false, 9, 'He came with horses and chariots.'),
    mc(2, 'What display accompanied Naaman to the prophet’s modest doorway?', ['His horses and chariots', 'The entire Syrian army', 'One hundred thousand lambs', 'Fifty sons of the prophets'], 9),

    mc(1, 'What instruction did Elisha send to Naaman?', ['Wash seven times in the Jordan', 'Offer seven lambs', 'Fast seven days', 'Return to Damascus'], 10),
    blank(3, 'and your flesh shall be restored, and you shall be _____.', 'clean', 10),
    word(2, 'How many times was Naaman to wash?', 'seven', 10, ['7']),
    tf(1, 'Elisha delivered the instruction through a messenger.', true, 10),
    mc(3, 'What simple act did Elisha prescribe for Naaman’s cleansing?', ['Wash in the Jordan seven times', 'Wave a hand over the diseased place', 'Bathe once in the Abana', 'Bring silver and garments to the king'], 10),
    word(3, 'In what river was Naaman commanded to wash?', 'Jordan', 10, ['the Jordan']),

    mc(1, 'Why was Naaman angry with Elisha’s instruction?', ['Elisha did not come out and perform the healing as Naaman expected', 'Israel’s king had refused to read the letter sent by Syria’s king', 'Naaman’s servants had abandoned him before he reached Elisha’s house', 'The Jordan had no water available for him to wash seven times'], 11),
    blank(2, 'and wave his hand over the place, and cure the _____.', 'leper', 11),
    sa(1, 'Whose name did Naaman expect Elisha to call on?', 'the LORD his God', 11, ['the LORD', 'God']),
    tf(3, 'Naaman had expected a personal and dramatic healing ritual.', true, 11),
    mc(2, 'What did Naaman imagine Elisha would do?', ['Come out, invoke the LORD his God, and wave his hand over the diseased place', 'Send him back to Israel’s king so that the king could perform the cure', 'Ask the captive Israelite maid to pray over him at the prophet’s house', 'Accept all the silver and garments before announcing how he would be healed'], 11),

    mc(1, 'Which rivers did Naaman praise above Israel’s waters?', ['Abana and Pharpar', 'Jordan and Kishon', 'Cherith and Kidron', 'Habor and Gozan'], 12),
    blank(3, 'the rivers of _____', 'Damascus', 12),
    sa(2, 'In what state did Naaman turn away?', 'a rage', 12, ['rage', 'anger']),
    tf(1, 'Naaman believed he could wash in Damascus’s rivers instead.', true, 12),
    mc(3, 'What comparison fueled Naaman’s refusal?', ['He considered Abana and Pharpar better than all Israel’s waters', 'He considered the Jordan larger than Syrian rivers', 'He believed Samaria had no prophet', 'He thought Israel’s king should wash for him'], 12),
    sa(3, 'Name both rivers Naaman mentioned.', 'Abana and Pharpar', 12, ["Aba'na and Pharpar"]),

    mc(1, 'Who persuaded Naaman to reconsider?', ['His servants', 'Elisha’s messenger', 'The king of Israel', 'The captive maid'], 13),
    blank(2, 'Wash, and be _____.', 'clean', 13),
    sa(1, 'What contrast did the servants make?', 'he would have done a great thing, so he should do the simple command', 13, ['if commanded a great thing he would do it', 'the command was simple']),
    tf(3, 'Naaman’s servants encouraged him to obey the prophet’s simple instruction.', true, 13),

    mc(1, 'What happened after Naaman dipped seven times in the Jordan?', ['His flesh was restored like the flesh of a little child, and he was clean', 'His condition remained unchanged until he returned to the land of Syria', 'His skin became white as snow like the judgment later placed on Gehazi', 'He received Elisha’s mantle and was appointed to serve as a prophet'], 14),
    blank(3, 'his flesh was restored like the flesh of a little _____.', 'child', 14),
    sa(2, 'Whose word did Naaman obey when he dipped seven times?', 'the man of God’s word', 14, ['the word of the man of God', 'Elisha’s word']),
    tf(1, 'Naaman obeyed by dipping seven times in the Jordan.', true, 14),
    mc(3, 'How does the verse describe Naaman’s restored flesh?', ['Like the flesh of a little child, and clean', 'Scarred but no longer painful', 'White as snow', 'Unchanged until he reached Syria'], 14),

    mc(1, 'What confession did Naaman make after being healed?', ['There is no God in all the earth but in Israel', 'Syria’s gods had healed him', 'Elisha was greater than the LORD', 'The Jordan was a god'], 15),
    blank(2, 'so accept now a _____ from your servant.', 'present', 15),
    sa(1, 'Who returned with Naaman to Elisha?', 'all his company', 15, ['his whole company']),
    tf(3, 'Naaman’s healing led him to acknowledge Israel’s God.', true, 15),

    mc(1, 'What did Elisha do when Naaman offered a present?', ['Refused it', 'Accepted the silver', 'Took two garments', 'Asked Gehazi to receive it'], 16),
    blank(3, 'As the LORD lives, whom I serve, I will receive _____.', 'none', 16),
    word(2, 'Did Naaman urge Elisha to accept the gift?', 'yes', 16, ['he urged him', 'yes he did']),
    tf(1, 'Elisha maintained his refusal despite Naaman’s urging.', true, 16),

    mc(1, 'What did Naaman request after Elisha refused the gift?', ['Two mules’ burden of earth', 'Elijah’s mantle', 'A jar of Jordan water', 'Two talents of silver'], 17),
    blank(2, 'your servant will not offer burnt offering or sacrifice to any god but the _____.', 'LORD', 17, ['Lord']),
    sa(1, 'How much earth did Naaman request?', 'two mules’ burden', 17, ['two mule loads', 'two mules burden']),
    tf(3, 'Naaman promised exclusive sacrifice to the LORD.', true, 17),

    mc(1, 'For what situation did Naaman ask the LORD’s pardon?', ['Bowing in Rimmon’s house while his royal master leaned on his arm', 'Washing in a Syrian river instead of returning to the Jordan', 'Accepting gifts from Syria’s king after Elisha had refused payment', 'Taking two mules’ burden of Israelite soil back to Damascus'], 18),
    blank(3, 'when my master goes into the house of _____ to worship there', 'Rimmon', 18),
    sa(2, 'Why would Naaman enter Rimmon’s house?', 'his master leaned on his arm', 18, ['to support his master', 'the king leaned on him']),
    tf(1, 'Naaman anticipated that his royal service might require him to bow in Rimmon’s house.', true, 18),

    mc(1, 'What parting words did Elisha give Naaman?', ['Go in peace', 'Wash again', 'Return the gifts', 'Remain in Israel'], 19),
    blank(2, 'But when Na’aman had gone from him a short _____.', 'distance', 19),
    sa(1, 'How far had Naaman gone when the next event began?', 'a short distance', 19),
    tf(3, 'Naaman was still at Elisha’s house when Gehazi formed his plan.', false, 19, 'Naaman had gone a short distance.'),

    mc(1, 'What did Gehazi decide to do after Naaman departed?', ['Run after Naaman and obtain something from him', 'Return the gifts that Elisha had secretly accepted', 'Follow Elisha to the Jordan and wash seven times', 'Warn the king of Syria that Naaman’s healing was temporary'], 20),
    blank(3, 'my master has _____ this Na’aman the Syrian', 'spared', 20),
    word(2, 'What nationality did Gehazi use to identify Naaman?', 'Syrian', 20, ['the Syrian', 'Naaman the Syrian']),
    tf(1, 'Gehazi invoked the LORD’s name while planning to take what Elisha refused.', true, 20),

    mc(1, 'How did Naaman respond when he saw Gehazi running after him?', ['He got down from his chariot to meet him and asked whether all was well', 'He drove away quickly because he believed Elisha had changed his mind', 'He sent one of his servants back while remaining inside the chariot', 'He drew his sword because he believed Gehazi intended to seize the gifts'], 21),
    blank(2, 'Is all _____?', 'well', 21),
    word(1, 'Who followed Naaman?', 'Gehazi', 21, ["Geha'zi"]),
    tf(3, 'Naaman ignored Gehazi’s approach.', false, 21, 'He alighted from the chariot and met him.'),

    mc(1, 'What false story did Gehazi tell Naaman?', ['Two young prophets had arrived, and Elisha requested silver and garments for them', 'Elisha had changed his mind and wanted to accept all the gifts for himself', 'The king of Israel had imposed a tax on Naaman’s silver and garments', 'The prophet’s widow needed money to buy more vessels and oil'], 22),
    blank(3, 'pray, give them a talent of silver and two festal _____.', 'garments', 22),
    sa(2, 'From what region did Gehazi claim the young men came?', 'the hill country of Ephraim', 22, ['hill country of E’phraim', 'Ephraim']),
    tf(1, 'Gehazi falsely said that Elisha had sent him.', true, 22),

    mc(1, 'How much silver did Naaman press Gehazi to accept?', ['Two talents', 'One talent', 'Ten talents', 'Six thousand shekels'], 23),
    blank(2, 'and tied up two talents of silver in two _____.', 'bags', 23),
    word(1, 'How many servants carried the gifts?', 'two', 23, ['2']),
    tf(3, 'Gehazi carried all the silver and garments by himself.', false, 23, 'Two of Naaman’s servants carried them before Gehazi.'),

    mc(1, 'What did Gehazi do when he reached the hill?', ['He took the gifts from the servants, hid them in the house, and sent the men away', 'He returned the silver and garments to Naaman before the servants departed', 'He brought Naaman’s servants into the house to present the gifts to Elisha', 'He immediately distributed the silver and garments to the sons of the prophets'], 24),
    blank(3, 'and put them in the _____.', 'house', 24),
    sa(2, 'Whom did Gehazi send away?', 'Naaman’s servants', 24, ['the men', 'the two servants']),
    tf(1, 'Gehazi concealed the gifts before returning to Elisha.', true, 24),

    mc(1, 'How did Gehazi answer Elisha’s question about his whereabouts?', ['Your servant went nowhere', 'I went after Naaman', 'I visited the prophets', 'I went to the hill'], 25),
    blank(2, 'Where have you been, _____?', 'Geha’zi', 25, ['Gehazi']),
    sa(1, 'Before whom did Gehazi stand?', 'his master Elisha', 25, ['Elisha', 'his master']),
    tf(3, 'Gehazi immediately confessed where he had gone.', false, 25, 'He falsely claimed that he had gone nowhere.'),

    mc(1, 'What did Elisha reveal about Gehazi’s secret meeting?', ['He had gone with him in spirit', 'Naaman’s servants had reported it', 'The king had seen it', 'The maid had followed him'], 26),
    blank(3, 'Was it a time to accept money and _____?', 'garments', 26),
    sa(2, 'Name two kinds of property Elisha listed after money and garments.', 'olive orchards and vineyards', 26, ['sheep and oxen', 'menservants and maidservants', 'orchards and vineyards']),
    tf(1, 'Elisha knew when Naaman turned from his chariot to meet Gehazi.', true, 26),

    mc(1, 'What judgment fell on Gehazi for taking Naaman’s gifts?', ['Naaman’s leprosy would cling to him and his descendants forever', 'He would lose the silver but keep the garments and remain healthy', 'He would be exiled to Syria and forbidden to return to Israel', 'He would become Naaman’s servant in place of the captive maid'], 27),
    blank(2, 'So he went out from his presence a leper, as white as _____.', 'snow', 27),
    word(1, 'How long would Naaman’s leprosy cleave to Gehazi’s descendants?', 'forever', 27, ['for ever']),
    tf(3, 'Gehazi left Elisha’s presence with skin described as white as snow.', true, 27),
    mc(3, 'What consequence matched Gehazi’s deceit and greed?', ['Naaman’s leprosy clung to Gehazi and his descendants, and he left white as snow', 'He returned every gift to Naaman and received Elisha’s pardon', 'He lost his position as Elisha’s servant but remained physically healthy', 'He was sent to Syria and required to become a servant in Naaman’s house'], 27),
  ],
}

export default bank
