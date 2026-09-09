import { mc, blank, word, tf, type ChapterBank, sa } from './types'

const bank: ChapterBank = {
  book: '1 Kings', chapter: 21, tag: 'quiz-v2-1kings-21', rows: [
    mc(1, 'Who owned a vineyard beside Ahab’s palace?', ['Naboth the Jezreelite', 'Elijah the Tishbite', 'Obadiah', 'Ben-hadad'], 1),
    blank(1, 'Now Naboth the Jezreelite had a _____ in Jezreel', 'vineyard', 1),
    word(3, 'Where was the vineyard?', 'Jezreel', 1),
    tf(1, 'Naboth’s vineyard was beside Ahab’s palace.', true, 1),
    mc(2, 'Which two locations are connected in the opening description?', ['Naboth’s vineyard in Jezreel and Ahab’s nearby palace', 'Mount Carmel and the brook Kishon', 'Samaria and Damascus', 'Beersheba and Horeb'], 1),

    mc(1, 'Why did Ahab want Naboth’s vineyard?', ['To make a vegetable garden near his house', 'To build a palace', 'To plant an olive grove', 'To give it to Jezebel'], 2),
    blank(2, 'and I will give you a _____ vineyard for it', 'better', 2),
    sa(2, 'What alternative to another vineyard did Ahab offer?', 'its value in money', 2, ['money']),
    tf(3, 'Ahab offered neither land nor money for the vineyard.', false, 2, 'He offered a better vineyard or its value in money.'),
    mc(3, 'What two forms of compensation did Ahab offer?', ['A better vineyard or its value in money', 'Gold or a palace', 'Horses or chariots', 'A royal office or tax relief'], 2),

    mc(1, 'Why did Naboth refuse Ahab?', ['The vineyard was his fathers’ inheritance', 'Ahab offered too little money', 'It was too far from the palace', 'Jezebel owned it'], 3),
    blank(3, 'The LORD _____ that I should give you the inheritance of my fathers.', 'forbid', 3),
    sa(1, 'What did Naboth call the vineyard?', 'the inheritance of my fathers', 3, ['his fathers’ inheritance', 'inheritance']),
    tf(2, 'Naboth refused because he wanted a higher price.', false, 3, 'He refused to give away his ancestral inheritance.'),
    mc(3, 'What reason did Naboth give for not selling?', ['“The LORD forbid that I should give you the inheritance of my fathers”', 'The vineyard had no value', 'The elders prohibited the sale', 'He wanted Ahab’s palace instead'], 3),
    tf(1, 'Naboth regarded the vineyard as an inheritance from his fathers.', true, 3),

    mc(1, 'How did Ahab react to Naboth’s refusal?', ['He became vexed and sullen and ate no food', 'He accepted it cheerfully', 'He immediately arrested Naboth', 'He left for Samaria'], 4),
    blank(2, 'And he lay down on his bed, and turned away his _____.', 'face', 4),
    word(2, 'What did Ahab refuse to eat?', 'food', 4),
    tf(3, 'Ahab remained cheerful after Naboth refused.', false, 4, 'He was vexed and sullen.'),
    mc(2, 'Which actions showed Ahab’s sulking response?', ['He lay on his bed, turned away his face, and ate no food', 'He fasted in sackcloth before the LORD', 'He convened the elders for a trial', 'He returned to the vineyard and worked'], 4),

    mc(1, 'Who asked why Ahab’s spirit was vexed?', ['Jezebel his wife', 'Naboth', 'Elijah', 'An elder'], 5),
    blank(3, 'Why is your spirit so vexed that you eat no _____?', 'food', 5),
    word(1, 'Whose wife was Jezebel?', 'Ahab’s', 5, ['Ahab']),
    tf(2, 'Jezebel found Ahab refusing food.', true, 5),

    mc(2, 'How did Ahab describe his offer to Naboth?', ['Money or another vineyard', 'Only a royal appointment', 'Only half its value', 'A field in Samaria'], 6),
    blank(3, 'I will give you _____ vineyard for it', 'another', 6),
    sa(1, 'What answer did Ahab report from Naboth?', 'I will not give you my vineyard', 6, ['he would not give the vineyard']),
    tf(2, 'Ahab told Jezebel that Naboth had accepted money.', false, 6, 'He said Naboth refused to give him the vineyard.'),

    mc(1, 'What did Jezebel promise Ahab?', ['She would give him Naboth’s vineyard', 'She would buy another palace', 'She would persuade him to forget it', 'She would return to Sidon'], 7),
    blank(2, 'Arise, and eat bread, and let your heart be _____.', 'cheerful', 7),
    sa(2, 'What challenge did Jezebel make about Ahab’s authority?', 'Do you now govern Israel?', 7, ['govern Israel']),
    tf(3, 'Jezebel told Ahab to remain in bed.', false, 7, 'She told him to arise, eat, and be cheerful.'),

    mc(1, 'In whose name did Jezebel write letters?', ['Ahab’s', 'Naboth’s', 'Elijah’s', 'Her own'], 8),
    blank(3, 'and sealed them with his _____.', 'seal', 8),
    sa(1, 'To whom were the letters sent?', 'the elders and nobles', 8),
    tf(2, 'Jezebel openly signed the letters in her own name.', false, 8, 'She wrote in Ahab’s name and used his seal.'),
    mc(3, 'How did Jezebel give her orders royal authority?', ['She wrote in Ahab’s name and sealed the letters with his seal', 'She asked Ahab to sign each letter', 'She spoke before all Israel', 'She sent Elijah as messenger'], 8),

    mc(1, 'What public observance did Jezebel order?', ['A fast', 'A feast', 'A coronation', 'A sacrifice at Carmel'], 9),
    blank(2, 'and set Naboth on _____ among the people', 'high', 9),
    sa(2, 'Among whom was Naboth to be placed?', 'the people', 9),
    tf(3, 'Jezebel ordered Naboth hidden from the people.', false, 9, 'She ordered him set on high among them.'),

    mc(1, 'What false charge were the two base fellows to make?', ['Naboth cursed God and the king', 'Naboth stole the vineyard', 'Naboth served Baal', 'Naboth plotted with Syria'], 10),
    blank(3, 'Then take him out, and _____ him to death.', 'stone', 10),
    word(1, 'How many false witnesses were to sit opposite Naboth?', 'two', 10, ['2']),
    tf(2, 'The planned accusation concerned cursing God and the king.', true, 10),
    mc(3, 'What complete scheme did the letters command?', ['Use two base fellows to accuse Naboth, then stone him', 'Buy the vineyard secretly', 'Exile Naboth after a trial', 'Seize the vineyard without harming him'], 10),

    mc(1, 'Who carried out Jezebel’s instructions?', ['The elders and nobles of Naboth’s city', 'Ahab’s army', 'The prophets of Baal', 'Naboth’s family'], 11),
    blank(2, 'did as Jez’ebel had sent _____ to them', 'word', 11),
    sa(2, 'Where did the officials live?', 'in Naboth’s city', 11, ['his city']),
    tf(3, 'The elders refused to follow Jezebel’s letters.', false, 11, 'They did as the letters directed.'),

    mc(1, 'What did the city leaders proclaim?', ['A fast', 'A feast', 'War', 'Naboth’s innocence'], 12),
    blank(3, 'and set Naboth on high among the _____.', 'people', 12),
    word(1, 'Who was publicly elevated?', 'Naboth', 12),
    tf(2, 'The city leaders carried out the first part of the written plan.', true, 12),

    mc(2, 'Where did the false witnesses sit?', ['Opposite Naboth', 'Beside Ahab', 'Outside the city', 'At Jezebel’s table'], 13),
    blank(3, 'Naboth cursed _____ and the king.', 'God', 13),
    sa(1, 'Where was Naboth taken to be stoned?', 'outside the city', 13),
    tf(2, 'Naboth was killed inside Ahab’s palace.', false, 13, 'He was taken outside the city and stoned.'),

    mc(1, 'What report was sent to Jezebel?', ['Naboth has been stoned and is dead', 'Naboth has fled', 'Ahab has refused the vineyard', 'Elijah has arrived'], 14),
    blank(2, 'Naboth has been stoned; he is _____.', 'dead', 14),
    word(2, 'To whom was the death reported?', 'Jezebel', 14, ["Jez'ebel"]),
    tf(3, 'The messengers reported that Naboth survived.', false, 14, 'They reported that he was dead.'),

    mc(1, 'What did Jezebel tell Ahab to do after Naboth’s death?', ['Take possession of the vineyard', 'Mourn for Naboth', 'Return it to Naboth’s family', 'Call Elijah'], 15),
    blank(3, 'for Naboth is not alive, but _____.', 'dead', 15),
    word(1, 'What had Naboth refused to accept for the vineyard?', 'money', 15),
    tf(2, 'Jezebel told Ahab Naboth was still alive.', false, 15, 'She said he was dead.'),

    mc(1, 'What did Ahab do when he heard Naboth was dead?', ['Went down to take possession of the vineyard', 'Punished Jezebel', 'Returned the vineyard to the family', 'Called a new trial'], 16),
    blank(2, 'Ahab arose to go down to the _____ of Naboth the Jezreelite', 'vineyard', 16),
    sa(2, 'Why did Ahab go to the vineyard?', 'to take possession', 16, ['take possession']),
    tf(3, 'Ahab refused to benefit from Naboth’s death.', false, 16, 'He went to take possession of the vineyard.'),

    mc(1, 'To whom did the LORD’s word come?', ['Elijah the Tishbite', 'Naboth', 'Ahab', 'An elder'], 17),
    blank(3, 'Then the word of the LORD came to Eli’jah the _____.', 'Tishbite', 17),
    word(1, 'Whose word came to Elijah?', 'the LORD’s', 17, ['the LORD', 'LORD']),
    tf(2, 'The LORD remained silent about Naboth’s death.', false, 17, 'His word came to Elijah.'),

    mc(1, 'Where was Elijah told to meet Ahab?', ['In Naboth’s vineyard', 'At the palace in Samaria', 'On Mount Carmel', 'At Naboth’s tomb'], 18),
    blank(2, 'where he has gone to take _____.', 'possession', 18),
    word(2, 'What title is given to Ahab?', 'king of Israel', 18),
    tf(3, 'Ahab was in the vineyard to return it.', false, 18, 'He had gone there to take possession.'),

    mc(2, 'What accusation did the LORD tell Elijah to make?', ['Have you killed and also taken possession?', 'Have you sold the vineyard?', 'Have you freed Naboth?', 'Have you hidden the prophets?'], 19),
    blank(3, 'shall dogs lick your own _____.', 'blood', 19),
    word(1, 'Whose blood had dogs licked?', 'Naboth’s', 19, ['Naboth']),
    tf(2, 'Ahab’s blood would be licked in a different place from Naboth’s.', false, 19, 'The judgment named the same place.'),

    mc(1, 'How did Ahab address Elijah?', ['O my enemy', 'My lord prophet', 'Troubler of Judah', 'Son of Naboth'], 20),
    blank(2, 'because you have sold yourself to do what is _____ in the sight of the LORD.', 'evil', 20),
    sa(2, 'What did Elijah answer when Ahab asked if he found him?', 'I have found you', 20),
    tf(3, 'Elijah said Ahab had sold himself to do right.', false, 20, 'He had sold himself to do evil.'),
    mc(3, 'What did Ahab say when Elijah met him in the vineyard?', ['“Have you found me, O my enemy?”', '“The LORD forbid this vineyard”', '“Take possession for me”', '“Why is your spirit vexed?”'], 20),

    mc(1, 'What would the LORD do to Ahab’s house?', ['Sweep it away and cut off every male', 'Establish it forever', 'Move it to Judah', 'Give it Naboth’s land'], 21),
    blank(3, 'I will bring _____ upon you', 'evil', 21),
    sa(1, 'Which males would be cut off?', 'bond or free', 21, ['every male', 'bond and free']),
    tf(2, 'The judgment spared the free males in Ahab’s house.', false, 21, 'It included every male, bond or free.'),

    mc(2, 'Whose houses would Ahab’s house resemble in judgment?', ['Jeroboam’s and Baasha’s', 'David’s and Solomon’s', 'Naboth’s and Elijah’s', 'Judah’s and Syria’s'], 22),
    blank(3, 'because you have made Israel to _____.', 'sin', 22),
    word(1, 'What emotion had Ahab provoked?', 'anger', 22),
    tf(2, 'Ahab’s influence had led Israel into sin.', true, 22),

    mc(1, 'What would happen to Jezebel?', ['Dogs would eat her within Jezreel’s bounds', 'She would become queen mother', 'She would flee to Sidon', 'Birds would carry her away'], 23),
    blank(2, 'The dogs shall eat Jez’ebel within the bounds of _____.', 'Jezreel', 23),
    word(2, 'What animals would eat Jezebel?', 'dogs', 23),
    tf(3, 'Jezebel would be buried honorably in Samaria.', false, 23, 'Dogs would eat her within Jezreel.'),
    mc(3, 'Where did the LORD say dogs would eat Jezebel?', ['Within the bounds of Jezreel', 'At the brook Kishon', 'Outside Samaria', 'In Naboth’s vineyard'], 23),

    mc(1, 'What would eat Ahab’s people who died in the city?', ['Dogs', 'Birds', 'Lions', 'Ravens'], 24),
    blank(3, 'any one of his who dies in the open country the _____ of the air shall eat.', 'birds', 24),
    sa(1, 'Where would birds eat Ahab’s people?', 'the open country', 24),
    tf(2, 'Birds would eat those who died in the city.', false, 24, 'Dogs would eat those in the city.'),

    mc(2, 'Who incited Ahab to do evil?', ['Jezebel his wife', 'Naboth', 'Elijah', 'The elders'], 25),
    blank(3, 'There was none who sold himself to do what was _____ in the sight of the LORD like Ahab', 'evil', 25),
    sa(1, 'How uniquely evil was Ahab described?', 'none was like him', 25, ['there was none like Ahab']),
    tf(2, 'Jezebel restrained Ahab from evil.', false, 25, 'She incited him.'),

    mc(1, 'Whose idolatry did Ahab imitate?', ['The Amorites’', 'The Syrians’', 'The Philistines’', 'The Egyptians’'], 26),
    blank(2, 'He did very _____ in going after idols', 'abominably', 26),
    word(2, 'Who had cast the Amorites out?', 'the LORD', 26, ['LORD']),
    tf(3, 'Ahab avoided the idols of the former inhabitants.', false, 26, 'He followed their abominable idolatry.'),

    mc(1, 'How did Ahab respond to the judgment?', ['He tore his clothes, wore sackcloth, fasted, and went dejectedly', 'He threatened Elijah', 'He celebrated', 'He fled to Syria'], 27),
    blank(3, 'he rent his clothes, and put _____ upon his flesh', 'sackcloth', 27),
    word(1, 'What did Ahab stop doing as part of his response?', 'eating', 27, ['he fasted', 'fasted']),
    tf(2, 'Ahab humbled himself with sackcloth and fasting.', true, 27),

    mc(1, 'To whom did the LORD’s word come again?', ['Elijah the Tishbite', 'Ahab', 'Jezebel', 'Naboth'], 28),
    blank(2, 'And the _____ of the LORD came to Eli’jah the Tishbite', 'word', 28),
    word(2, 'Which prophet received the message?', 'Elijah', 28, ["Eli'jah"]),
    tf(3, 'The message came to one of Ahab’s elders.', false, 28, 'It came to Elijah.'),

    mc(1, 'Why did the LORD delay the evil on Ahab’s house?', ['Ahab humbled himself', 'Jezebel repented', 'Naboth forgave him', 'Elijah withdrew the prophecy'], 29),
    blank(3, 'I will not bring the evil in his _____', 'days', 29),
    sa(1, 'When would the evil come?', 'in his son’s days', 29, ['his son’s days']),
    tf(2, 'The LORD canceled the judgment permanently.', false, 29, 'He delayed it until Ahab’s son’s days.'),
    mc(3, 'What caused the LORD to postpone judgment until Ahab’s son’s days?', ['Ahab humbled himself before the LORD', 'Ahab returned the vineyard', 'Jezebel confessed', 'The elders reversed Naboth’s sentence'], 29),
  ],
}

export default bank
