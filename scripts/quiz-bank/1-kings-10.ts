// 1 Kings 10 — quiz bank (RSV). Every row is anchored to a verse; fill-in-the-blank
// rows are verified against the stored verse text by scripts/seed-quiz-bank.ts.
import { mc, blank, word, tf, type ChapterBank, sa } from './types'

const bank: ChapterBank = {
  book: '1 Kings',
  chapter: 10,
  tag: 'quiz-v2-1kings-10',
  rows: [
    // ══════════════════════════════════ v1–3 · The queen of Sheba arrives
    mc(1, 'Why did the queen of Sheba come to Solomon?', ['To test him with hard questions', 'To form a military alliance', 'To buy almug wood', 'To worship at the house of the LORD'], 1),
    blank(1, 'Now when the queen of _____ heard of the fame of Solomon concerning the name of the LORD, she came to test him with hard questions.', 'Sheba', 1),
    word(1, 'Which queen came to test Solomon with hard questions?', 'Sheba', 1, ['queen of sheba', 'the queen of sheba']),
    tf(2, 'The queen of Sheba heard of Solomon’s fame concerning his gold and riches.', false, 1, 'She heard of his fame "concerning the name of the LORD".'),
    blank(2, 'Now when the queen of Sheba heard of the fame of Solomon concerning the name of the LORD, she came to test him with _____ questions.', 'hard', 1),
    mc(2, 'Solomon’s fame that reached the queen of Sheba concerned what?', ['The name of the LORD', 'His army', 'His gold', 'His fleet of ships'], 1),

    mc(1, 'What did the queen of Sheba’s camels carry to Jerusalem?', ['Spices, much gold, and precious stones', 'Almug wood, carved ivory, and silver vessels', 'Horses, royal chariots, and Egyptian linen', 'Apes, peacocks, and goods from Tarshish'], 2),
    blank(1, 'She came to Jerusalem with a very great retinue, with _____ bearing spices, and very much gold, and precious stones;', 'camels', 2),
    word(1, 'To which city did the queen of Sheba come?', 'Jerusalem', 2),
    tf(2, 'When the queen of Sheba came to Solomon, she told him all that was on her mind.', true, 2),
    blank(3, 'She came to Jerusalem with a very great _____, with camels bearing spices, and very much gold, and precious stones;', 'retinue', 2),

    tf(1, 'Solomon answered all the queen of Sheba’s questions.', true, 3),
    blank(2, 'And Solomon answered all her questions; there was nothing _____ from the king which he could not explain to her.', 'hidden', 3),
    mc(1, 'How did Solomon fare with the queen of Sheba’s questions?', ['He answered everything; nothing was too difficult to explain', 'He answered most questions but could not explain several riddles', 'He referred her hardest questions to the priests at the temple', 'He refused to answer the questions concerning the LORD’s name'], 3),
    tf(3, 'There were some questions from the queen of Sheba that Solomon could not explain.', false, 3, 'There was nothing hidden from the king which he could not explain to her.'),

    // ══════════════════════════════════ v4–5 · What the queen saw
    blank(1, 'And when the queen of Sheba had seen all the _____ of Solomon, the house that he had built,', 'wisdom', 4),
    word(2, 'Besides Solomon’s wisdom, the queen saw the ___ that he had built.', 'house', 4),
    tf(1, 'The queen of Sheba saw the house that Solomon had built.', true, 4),
    mc(3, 'What is listed first among the things the queen of Sheba saw?', ['All the wisdom of Solomon', 'The food served at his table', 'His ascent and burnt offerings', 'His servants acting as cupbearers'], 4),

    mc(1, 'What was the effect on the queen of Sheba after she saw all of Solomon’s court?', ['There was no more spirit in her', 'She fell on her face', 'She wept aloud', 'She fled back to her land'], 5),
    blank(2, 'the food of his table, the seating of his officials, and the attendance of his servants, their clothing, his cupbearers, and his burnt offerings which he offered at the house of the LORD, there was no more _____ in her.', 'spirit', 5),
    word(3, 'Which of Solomon’s servants who handled drink are listed among what the queen saw?', 'cupbearers', 5, ['cupbearer']),
    mc(3, 'Which of these did the queen of Sheba not see at Solomon’s court?', ['His fleet of ships', 'The food of his table', 'The seating of his officials', 'His cupbearers'], 5),
    tf(3, 'The queen of Sheba saw the burnt offerings Solomon offered at the house of the LORD.', true, 5),
    blank(3, 'the food of his table, the seating of his officials, and the attendance of his servants, their _____, his cupbearers,', 'clothing', 5),

    // ══════════════════════════════════ v6–9 · The queen’s speech
    blank(1, 'And she said to the king, "The report was _____ which I heard in my own land of your affairs and of your wisdom,', 'true', 6),
    tf(1, 'The queen of Sheba told Solomon that the report she had heard in her own land was true.', true, 6),
    mc(2, 'Where had the queen heard the report about Solomon?', ['In her own land', 'In the land of Egypt', 'From Hiram’s sailing fleet', 'In the port of Tarshish'], 6),
    word(3, 'The queen said the report she heard concerned Solomon’s affairs and his ___.', 'wisdom', 6),

    blank(1, 'but I did not believe the reports until I came and my own eyes had seen it; and, behold, the _____ was not told me;', 'half', 7),
    mc(1, 'Finish the queen’s words: "and, behold, the ____ was not told me."', ['half', 'truth', 'whole', 'greatness'], 7),
    word(2, 'The queen said the reports were surpassed by Solomon’s wisdom and his ___.', 'prosperity', 7),
    tf(1, 'The queen of Sheba said she believed the reports about Solomon before she came.', false, 7, 'She said, "I did not believe the reports until I came and my own eyes had seen it."'),
    blank(3, 'your wisdom and _____ surpass the report which I heard.', 'prosperity', 7),
    mc(3, 'What did the queen say convinced her the reports were true?', ['She came and her own eyes had seen it', 'Solomon’s servants swore to it', 'The fleet of Hiram brought word', 'The kings of Arabia confirmed it'], 7),

    blank(2, 'Happy are your _____! Happy are these your servants, who continually stand before you and hear your wisdom!', 'wives', 8),
    mc(2, 'Whom did the queen of Sheba call “happy”?', ['Solomon’s wives and servants who continually heard his wisdom', 'Arabia’s kings and governors who brought him yearly tribute', 'Jerusalem’s people who saw the royal court each day', 'The temple priests who ministered before the LORD’s house'], 8),
    tf(3, 'The queen said Solomon’s servants were happy because they continually stand before him and hear his wisdom.', true, 8),
    word(3, 'The queen said Solomon’s servants "continually ___ before you".', 'stand', 8),

    blank(1, 'Blessed be the LORD your God, who has delighted in you and set you on the _____ of Israel!', 'throne', 9),
    mc(2, 'Why did the queen say the LORD had made Solomon king?', ['To execute justice and righteousness', 'To build a fleet and sail to Ophir', 'To gather gold and silver in Jerusalem', 'To conquer the kings of Syria'], 9),
    blank(2, 'Because the LORD loved Israel for ever, he has made you king, that you may execute _____ and righteousness."', 'justice', 9),
    tf(1, 'The queen of Sheba said, "Blessed be the LORD your God, who has delighted in you."', true, 9),
    word(3, 'The queen said the LORD loved Israel for how long — "for ___".', 'ever', 9, ['forever']),
    tf(3, 'The queen said the LORD had made Solomon king because the LORD loved Solomon’s father David.', false, 9, 'She said, "Because the LORD loved Israel for ever, he has made you king."'),

    // ══════════════════════════════════ v10–13 · Gifts exchanged, almug wood
    mc(1, 'How much gold did the queen of Sheba give King Solomon?', ['A hundred and twenty talents', 'Six hundred and sixty-six talents', 'Four hundred and twenty talents', 'Six hundred shekels'], 10),
    sa(2, 'How many talents of gold did the queen of Sheba give the king?', 'a hundred and twenty', 10, ['120', 'hundred and twenty', 'one hundred twenty', 'one hundred and twenty']),
    blank(1, 'Then she gave the king a hundred and twenty _____ of gold, and a very great quantity of spices, and precious stones;', 'talents', 10),
    tf(1, 'Never again came such an abundance of spices as those the queen of Sheba gave King Solomon.', true, 10),
    blank(3, 'never again came such an abundance of _____ as these which the queen of Sheba gave to King Solomon.', 'spices', 10),
    mc(3, 'Of which gift is it said that "never again came such an abundance"?', ['Spices', 'Gold', 'Precious stones', 'Almug wood'], 10),

    mc(1, 'Whose fleet brought gold from Ophir?', ['Hiram’s', 'The queen of Sheba’s', 'Pharaoh’s', 'The kings of Arabia’s'], 11),
    word(2, 'From what place did the fleet of Hiram bring gold and almug wood?', 'Ophir', 11),
    blank(2, 'Moreover the fleet of Hiram, which brought gold from Ophir, brought from Ophir a very great amount of _____ wood and precious stones.', 'almug', 11),
    tf(1, 'The fleet of Hiram brought gold from Ophir.', true, 11),
    tf(3, 'The fleet of Hiram brought cedar wood from Ophir.', false, 11, 'It brought almug wood and precious stones from Ophir.'),

    mc(2, 'What did Solomon make from the almug wood?', ['Supports for both houses and lyres and harps for singers', 'Large and small shields and an ivory-covered throne', 'Chariots and stable fittings for the king’s horsemen', 'Royal drinking vessels and tableware for his banquets'], 12),
    blank(2, 'And the king made of the almug wood supports for the house of the LORD, and for the king’s house, lyres also and _____ for the singers;', 'harps', 12),
    word(3, 'Along with harps, what instruments did Solomon make of almug wood for the singers?', 'lyres', 12, ['lyre']),
    tf(1, 'Solomon made lyres and harps of almug wood for the singers.', true, 12),
    blank(3, 'no such almug wood has come or been seen, to this _____.', 'day', 12),

    mc(1, 'What did King Solomon give the queen of Sheba?', ['Everything she desired and asked, besides his royal bounty', 'Only spices equal in value to the gold she had brought', 'A share in Hiram’s fleet and its cargo brought from Ophir', 'Nothing in return because she alone presented royal gifts'], 13),
    blank(2, 'And King Solomon gave to the queen of Sheba all that she _____, whatever she asked besides what was given her by the bounty of King Solomon.', 'desired', 13),
    tf(1, 'After visiting Solomon, the queen of Sheba went back to her own land with her servants.', true, 13),
    word(3, 'Besides everything she asked for, Solomon gave the queen of Sheba gifts out of what, according to the verse?', 'bounty', 13, ['royal bounty', 'his royal bounty']),
    tf(3, 'The queen of Sheba stayed in Jerusalem and became one of Solomon’s wives.', false, 13, 'She turned and went back to her own land, with her servants.'),

    // ══════════════════════════════════ v14–17 · Gold revenue and shields
    mc(1, 'How much gold came to Solomon in one year?', ['Six hundred and sixty-six talents', 'A hundred and twenty talents', 'Six hundred shekels', 'Three minas'], 14),
    sa(1, 'How many talents of gold came to Solomon in one year?', 'six hundred and sixty-six', 14, ['666', 'six hundred sixty-six', 'six hundred sixty six', 'six hundred and sixty six']),
    blank(2, 'Now the weight of gold that came to Solomon in one year was six hundred and _____ talents of gold,', 'sixty-six', 14, ['sixty six', '66']),
    tf(1, 'Six hundred and sixty-six talents of gold came to Solomon in one year.', true, 14),
    tf(3, 'The weight of gold that came to Solomon in one year was six hundred and sixty-six shekels.', false, 14, 'It was six hundred and sixty-six talents of gold.'),

    mc(2, 'Besides the yearly weight, from whom else did Solomon receive gold?', ['Traders, merchants, Arabia’s kings, and governors of the land', 'The queen of Sheba alone during her visit to Jerusalem', 'The Hittite and Syrian kings who bought Egyptian chariots', 'The people of Jerusalem through a yearly temple tax'], 15),
    blank(3, 'besides that which came from the traders and from the traffic of the merchants, and from all the kings of _____ and from the governors of the land.', 'Arabia', 15),
    word(3, 'The kings of which land are named as a source of Solomon’s gold?', 'Arabia', 15),
    tf(2, 'Gold also came to Solomon from all the kings of Syria.', false, 15, 'It came "from all the kings of Arabia and from the governors of the land".'),

    mc(2, 'How many large shields of beaten gold did Solomon make?', ['Two hundred', 'Three hundred', 'Six hundred', 'Twelve'], 16),
    blank(2, 'King Solomon made two hundred large shields of _____ gold; six hundred shekels of gold went into each shield.', 'beaten', 16),
    sa(3, 'How many shekels of gold went into each of the two hundred large shields?', 'six hundred', 16, ['600']),
    tf(3, 'Six hundred shekels of gold went into each large shield.', true, 16),
    blank(1, 'King Solomon made _____ large shields of beaten gold; six hundred shekels of gold went into each shield.', 'two hundred', 16, ['200']),

    mc(2, 'Where did Solomon put the shields of beaten gold?', ['The House of the Forest of Lebanon', 'The house of the LORD', 'The king’s house in Jerusalem', 'The chariot cities'], 17),
    word(2, 'Solomon put the gold shields in the House of the Forest of ___.', 'Lebanon', 17),
    blank(2, 'And he made three hundred shields of beaten gold; three _____ of gold went into each shield; and the king put them in the House of the Forest of Lebanon.', 'minas', 17),
    tf(3, 'Three minas of gold went into each of the three hundred shields.', true, 17),
    tf(2, 'Solomon put the three hundred shields of beaten gold in the house of the LORD.', false, 17, 'He put them in the House of the Forest of Lebanon.'),
    sa(3, 'How many shields did Solomon make with three minas of gold in each?', 'three hundred', 17, ['300']),

    // ══════════════════════════════════ v18–21 · The ivory throne, gold vessels
    mc(1, 'What was Solomon’s great throne made of?', ['Ivory overlaid with the finest gold', 'Cedar overlaid with silver', 'Almug wood', 'Pure gold'], 18),
    blank(1, 'The king also made a great _____ throne, and overlaid it with the finest gold.', 'ivory', 18),
    word(1, 'Solomon’s ivory throne was overlaid with the finest what?', 'gold', 18),
    tf(2, 'Solomon’s great throne was made of ivory and overlaid with silver.', false, 18, 'It was overlaid with the finest gold.'),

    mc(1, 'How many steps did Solomon’s throne have?', ['Six', 'Twelve', 'Seven', 'Three'], 19),
    word(2, 'What animal’s head was at the back of Solomon’s throne?', 'calf', 19, ['a calf', 'calfs head', 'calf’s head']),
    blank(2, 'The throne had six steps, and at the back of the throne was a _____ head, and on each side of the seat were arm rests and two lions standing beside the arm rests,', 'calf’s', 19, ['calfs', 'calf']),
    tf(1, 'Two lions stood beside the arm rests of Solomon’s throne.', true, 19),
    tf(3, 'At the back of Solomon’s throne was a lion’s head.', false, 19, 'At the back of the throne was a calf’s head.'),
    blank(3, 'and on each side of the seat were arm rests and two _____ standing beside the arm rests,', 'lions', 19),

    mc(1, 'How many lions stood on the six steps of Solomon’s throne?', ['Twelve', 'Six', 'Two', 'Fourteen'], 20),
    word(2, 'How many lions stood on the steps of the throne?', 'twelve', 20, ['12']),
    blank(2, 'while _____ lions stood there, one on each end of a step on the six steps. The like of it was never made in any kingdom.', 'twelve', 20, ['12']),
    blank(3, 'The like of it was never made in any _____.', 'kingdom', 20),
    tf(2, 'The text says a throne like Solomon’s had once been made in Egypt.', false, 20, '"The like of it was never made in any kingdom."'),
    mc(3, 'How were the twelve lions arranged on Solomon’s throne?', ['One on each end of a step on the six steps', 'Two on each side of the seat', 'In a row behind the calf’s head', 'Six on each arm rest'], 20),

    mc(1, 'What were all King Solomon’s drinking vessels made of?', ['Gold', 'Silver', 'Ivory', 'Bronze'], 21),
    blank(2, 'All King Solomon’s drinking vessels were of gold, and all the vessels of the House of the Forest of Lebanon were of pure gold; none were of _____, it was not considered as anything in the days of Solomon.', 'silver', 21),
    tf(1, 'In the days of Solomon, silver was not considered as anything.', true, 21),
    word(3, 'The vessels of the House of the Forest of Lebanon were of "___ gold".', 'pure', 21),
    tf(3, 'Some of the vessels in the House of the Forest of Lebanon were of silver.', false, 21, 'All were of pure gold; none were of silver.'),

    // ══════════════════════════════════ v22–25 · Ships of Tarshish, Solomon’s fame
    mc(1, 'How often did the fleet of ships of Tarshish come?', ['Once every three years', 'Once a year', 'Every seven years', 'Twice a year'], 22),
    mc(2, 'What five things did the fleet of ships of Tarshish bring?', ['Gold, silver, ivory, apes, and peacocks', 'Gold, spices, precious stones, horses, and mules', 'Cedar, almug wood, ivory, camels, and lions', 'Silver, garments, myrrh, spices, and horses'], 22),
    blank(2, 'Once every three years the fleet of ships of Tarshish used to come bringing gold, silver, ivory, apes, and _____.', 'peacocks', 22),
    word(2, 'Which animals, along with peacocks, did the ships of Tarshish bring?', 'apes', 22, ['ape']),
    blank(3, 'For the king had a fleet of ships of _____ at sea with the fleet of Hiram.', 'Tarshish', 22),
    tf(1, 'The fleet of ships of Tarshish came once every three years.', true, 22),
    tf(3, 'The ships of Tarshish brought gold, silver, ivory, horses, and mules.', false, 22, 'They brought gold, silver, ivory, apes, and peacocks.'),
    word(1, 'The ships of Tarshish were at sea with whose fleet?', 'Hiram', 22, ['hirams', 'hiram’s', 'the fleet of hiram']),

    blank(1, 'Thus King Solomon excelled all the kings of the earth in _____ and in wisdom.', 'riches', 23),
    mc(1, 'In what two things did Solomon excel all the kings of the earth?', ['Riches and wisdom', 'Horses and chariots', 'Strength and beauty', 'Ships and shields'], 23),
    tf(1, 'Solomon excelled all the kings of the earth in riches and in wisdom.', true, 23),

    blank(2, 'And the whole earth sought the presence of Solomon to hear his wisdom, which God had put into his _____.', 'mind', 24),
    mc(1, 'Why did the whole earth seek the presence of Solomon?', ['To hear the wisdom that God had put in his mind', 'To buy the horses and chariots he imported from Egypt', 'To see the ivory throne overlaid with the finest gold', 'To trade gold and precious stones for his almug wood'], 24),
    tf(3, 'Solomon’s wisdom was something God had put into his mind.', true, 24),
    word(2, 'Who put wisdom into Solomon’s mind?', 'God', 24, ['the lord', 'lord']),

    mc(3, 'Which item is not among the yearly presents brought to Solomon?', ['Ivory', 'Myrrh', 'Garments', 'Mules'], 25),
    blank(2, 'Every one of them brought his present, articles of silver and gold, garments, _____, spices, horses, and mules, so much year by year.', 'myrrh', 25),
    tf(2, 'Those who sought Solomon brought their presents only once during his reign.', false, 25, 'They brought them "so much year by year".'),
    word(3, 'The yearly presents included horses and what other animals?', 'mules', 25, ['mule']),
    blank(3, 'Every one of them brought his present, articles of silver and gold, _____, myrrh, spices, horses, and mules,', 'garments', 25),

    // ══════════════════════════════════ v26–29 · Chariots, horses, silver like stone
    mc(1, 'How many chariots did Solomon have?', ['Fourteen hundred', 'Twelve thousand', 'Six hundred', 'Two hundred'], 26),
    sa(2, 'How many horsemen did Solomon have?', 'twelve thousand', 26, ['12000', '12,000']),
    blank(2, 'And Solomon gathered together chariots and horsemen; he had _____ chariots and twelve thousand horsemen,', 'fourteen hundred', 26, ['1400', '1,400', 'one thousand four hundred']),
    tf(3, 'Solomon had twelve thousand chariots and fourteen hundred horsemen.', false, 26, 'He had fourteen hundred chariots and twelve thousand horsemen.'),
    mc(3, 'Where did Solomon station his chariots and horsemen?', ['In the chariot cities and with the king in Jerusalem', 'In Egypt and Kue', 'In the House of the Forest of Lebanon', 'Along the coast with the fleet of Tarshish'], 26),
    blank(3, 'whom he stationed in the _____ cities and with the king in Jerusalem.', 'chariot', 26),

    mc(1, 'Solomon made silver as common in Jerusalem as what?', ['Stone', 'Dust', 'Sand', 'Water'], 27),
    word(1, 'In Solomon’s days silver was as common in Jerusalem as what?', 'stone', 27, ['stones']),
    blank(1, 'And the king made silver as common in Jerusalem as _____, and he made cedar as plentiful as the sycamore of the Shephe’lah.', 'stone', 27),
    mc(2, 'Solomon made cedar as plentiful as what?', ['The sycamore of the Shephelah', 'The grass of the field', 'The sand of the sea', 'The stones of Jerusalem'], 27),
    blank(3, 'and he made _____ as plentiful as the sycamore of the Shephe’lah.', 'cedar', 27),
    tf(2, 'Solomon made cedar as plentiful as the sycamore of the Shephelah.', true, 27),
    word(3, 'Cedar was as plentiful as the sycamore of what region?', 'Shephelah', 27, ['shephe’lah', 'the shephelah']),

    mc(1, 'From where did Solomon import horses?', ['Egypt and Kue', 'Ophir and Tarshish', 'Arabia and Syria', 'Sheba and Lebanon'], 28),
    blank(2, 'And Solomon’s import of _____ was from Egypt and Ku’e, and the king’s traders received them from Ku’e at a price.', 'horses', 28),
    word(3, 'Besides Egypt, from what place did Solomon import horses?', 'Kue', 28, ['ku’e', 'kué']),
    tf(3, 'The king’s traders received horses from Kue at a price.', true, 28),
    tf(2, 'Solomon imported his horses from Arabia.', false, 28, 'His import of horses was from Egypt and Kue.'),

    mc(2, 'What was the price of a chariot imported from Egypt?', ['Six hundred shekels of silver', 'A hundred and fifty shekels of silver', 'Three minas of gold', 'A hundred and twenty talents'], 29),
    sa(2, 'A horse could be imported from Egypt for how many shekels of silver?', 'a hundred and fifty', 29, ['150', 'hundred and fifty', 'one hundred fifty', 'one hundred and fifty']),
    blank(3, 'A chariot could be imported from Egypt for six hundred shekels of _____, and a horse for a hundred and fifty;', 'silver', 29),
    mc(3, 'To whom were chariots and horses exported through the king’s traders?', ['All the Hittite kings and the kings of Syria', 'All the kings of Arabia who sent Solomon gold', 'The queen of Sheba and the servants who attended her', 'The governors of the land who collected royal tribute'], 29),
    blank(3, 'and so through the king’s traders they were exported to all the kings of the _____ and the kings of Syria.', 'Hittites', 29),
    tf(3, 'A chariot from Egypt cost a hundred and fifty shekels of silver.', false, 29, 'A chariot cost six hundred shekels; a horse cost a hundred and fifty.'),
    tf(2, 'Through the king’s traders, horses and chariots were exported to the kings of Syria.', true, 29),

    // ══════════════════════════════════ Whole-chapter
    mc(1, 'Which foreign queen came to test Solomon with hard questions?', ['The queen of Sheba', 'A queen from Egypt', 'A queen from Arabia', 'A queen of the Hittites'], 1),
    mc(1, 'Who said, "Happy are your wives! Happy are these your servants"?', ['The queen of Sheba', 'Solomon', 'Hiram', 'The governors of the land'], 8),
    mc(2, 'Who said, "Blessed be the LORD your God, who has delighted in you and set you on the throne of Israel"?', ['The queen of Sheba', 'Hiram', 'Nathan the prophet', 'Zadok the priest'], 9),
  ],
};

export default bank;
