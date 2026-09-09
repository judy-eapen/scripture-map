import { mc, blank, word, tf, type ChapterBank, sa } from './types'

const bank: ChapterBank = {
  book: '1 Kings', chapter: 16, tag: 'quiz-v2-1kings-16', rows: [
    mc(1, 'To whom did the LORD’s word come against Baasha?', ['Jehu son of Hanani', 'Elijah the Tishbite', 'Ahijah the Shilonite', 'Omri'], 1),
    blank(1, 'And the word of the LORD came to Jehu the son of _____ against Ba’asha', 'Hana’ni', 1, ['Hanani']),
    word(3, 'Against which king was the message directed?', 'Baasha', 1, ["Ba'asha"]),
    tf(1, 'Jehu son of Hanani received the LORD’s word against Baasha.', true, 1),
    mc(3, 'Which prophet delivered the opening judgment in this chapter?', ['Jehu son of Hanani', 'Joshua son of Nun', 'Ahijah of Shiloh', 'Elijah'], 1),

    mc(1, 'From where had the LORD exalted Baasha?', ['Out of the dust', 'Out of Egypt', 'From among the priests', 'From Jerusalem'], 2),
    blank(2, 'and made you _____ over my people Israel', 'leader', 2),
    word(2, 'In whose way had Baasha walked?', 'Jeroboam’s', 2, ['Jeroboam']),
    tf(3, 'Baasha made Israel sin and provoked the LORD to anger.', true, 2),

    mc(2, 'Whose house would Baasha’s house become like?', ['The house of Jeroboam son of Nebat', 'The house of David, which retained a lamp', 'The house of Omri, which later ruled Israel', 'The house of Asa, which continued in Judah'], 3),
    blank(3, 'I will utterly _____ away Ba’asha and his house', 'sweep', 3),
    sa(1, 'What would the LORD sweep away?', 'Baasha and his house', 3),
    tf(2, 'The LORD said he would utterly sweep away Baasha and his house.', true, 3),

    mc(1, 'What would eat Baasha’s people who died in the city?', ['Dogs', 'Birds', 'Lions', 'Ravens'], 4),
    blank(2, 'any one of his who dies in the field the _____ of the air shall eat.', 'birds', 4),
    sa(2, 'Where would birds eat those who belonged to Baasha?', 'in the field', 4, ['field']),
    tf(3, 'Dogs would eat Baasha’s people who died in the city, while birds would eat those who died in the field.', true, 4),

    mc(1, 'Where were Baasha’s other acts and might recorded?', ['The Chronicles of the Kings of Israel', 'The Chronicles of the Kings of Judah', 'The records of Tirzah', 'The book of Jehu'], 5),
    blank(3, 'and what he did, and his _____', 'might', 5),
    word(1, 'Which kingdom’s chronicles recorded Baasha?', 'Israel', 5),
    tf(2, 'The text points to a written record of Baasha’s acts.', true, 5),

    mc(1, 'Who succeeded Baasha?', ['Elah his son', 'Zimri', 'Omri', 'Ahab'], 6),
    blank(2, 'And Ba\'asha slept with his fathers, and was buried at _____; and Elah his son reigned in his stead.', 'Tirzah', 6),
    sa(2, 'What happened to Baasha?', 'he slept with his fathers', 6, ['slept with his fathers', 'died']),
    tf(3, 'Baasha was buried at Tirzah.', true, 6),

    mc(2, 'Why did judgment come upon Baasha’s house?', ['He did evil like Jeroboam, provoked the LORD, and destroyed Jeroboam’s house', 'He lost a decisive war against Judah and surrendered the cities of Israel', 'He purchased the hill of Samaria and built a new royal city there', 'He rejected Omri’s claim to Israel’s throne and supported Tibni instead'], 7),
    blank(3, 'provoking him to anger with the work of his _____.', 'hands', 7),
    sa(1, 'Through which prophet did the LORD’s word come?', 'Jehu son of Hanani', 7, ['Jehu', 'Jehu the son of Hanani']),
    tf(2, 'Baasha was judged in part because he destroyed Jeroboam’s house.', true, 7),

    mc(1, 'How long did Elah reign?', ['Two years', 'Seven days', 'Twelve years', 'Twenty-two years'], 8),
    blank(3, 'In the _____-sixth year of Asa king of Judah', 'twenty', 8, ['26th', 'twenty-sixth']),
    word(1, 'Where did Elah reign?', 'Tirzah', 8),
    tf(2, 'Elah began reigning in Asa’s twenty-sixth year.', true, 8),

    mc(1, 'What was Elah doing when Zimri conspired against him?', ['Drinking himself drunk', 'Leading the army', 'Worshiping at Bethel', 'Building Tirzah'], 9),
    blank(2, 'When he was at Tirzah, drinking himself drunk in the house of _____.', 'Arza', 9),
    sa(2, 'What position did Zimri hold?', 'commander of half his chariots', 9, ['commander of half the chariots']),
    tf(3, 'Elah was drinking himself drunk in Arza’s house when Zimri conspired against him.', true, 9),
    mc(3, 'Which circumstance made Elah vulnerable to Zimri?', ['He was drinking himself drunk in Arza’s house at Tirzah', 'He was besieging Samaria', 'He was visiting Damascus alone', 'He had dismissed every chariot commander'], 9),

    mc(1, 'What did Zimri do to Elah?', ['Struck him down and killed him', 'Exiled him to Judah', 'Imprisoned him', 'Made him army commander'], 10),
    blank(3, 'Zimri came in and struck him down and _____ him', 'killed', 10),
    sa(1, 'In which year of Asa did Zimri kill Elah?', 'the twenty-seventh year', 10, ['twenty-seventh', '27th']),
    tf(2, 'Zimri reigned in Elah’s place.', true, 10),

    mc(2, 'Whom did Zimri kill when he took the throne?', ['All Baasha’s house, leaving no male kinsman or friend', 'Elah alone while sparing every other member of Baasha’s house', 'Baasha’s military commanders while preserving his relatives', 'The entire population of Tirzah, including Omri’s supporters'], 11),
    blank(3, 'he did not leave him a single _____ of his kinsmen or his friends.', 'male', 11),
    sa(1, 'When did Zimri act against Baasha’s house?', 'as soon as he sat on the throne', 11, ['as soon as he began to reign']),
    tf(2, 'Zimri left not a single male among Baasha’s kinsmen or friends.', true, 11),

    mc(1, 'Whose word, delivered through Jehu, was fulfilled when Zimri destroyed Baasha’s house?', ['The LORD’s word', 'Omri’s command', 'Asa’s proclamation', 'Joshua’s prophecy'], 12),
    blank(2, 'Thus Zimri _____ all the house of Ba’asha', 'destroyed', 12),
    word(2, 'Which prophet had spoken against Baasha?', 'Jehu', 12),
    tf(3, 'Zimri’s destruction of Baasha’s house contradicted the LORD’s word.', false, 12, 'It fulfilled the LORD’s word spoken by Jehu.'),

    mc(2, 'With what did Baasha and Elah provoke the LORD?', ['Their idols', 'Their chariots', 'Their fortifications', 'Their taxes'], 13),
    blank(3, 'provoking the LORD God of Israel to anger with their _____.', 'idols', 13),
    word(1, 'Whom did their sins cause to sin?', 'Israel', 13),
    tf(2, 'Only Baasha’s sins are mentioned, not Elah’s.', false, 13, 'The sins of both Baasha and Elah are named.'),

    mc(1, 'Where were Elah’s remaining acts recorded?', ['The Chronicles of the Kings of Israel', 'The Chronicles of Judah', 'The book of Jehu', 'The records of Arza'], 14),
    blank(2, 'Now the rest of the _____ of Elah, and all that he did', 'acts', 14),
    word(2, 'Which king’s acts does verse 14 summarize?', 'Elah', 14),
    tf(3, 'Elah’s acts were said to be unrecorded.', false, 14, 'They were written in the Chronicles of the Kings of Israel.'),

    mc(1, 'How long did Zimri reign?', ['Seven days', 'Seven years', 'Two years', 'Twelve years'], 15),
    blank(3, 'Zimri reigned _____ days in Tirzah.', 'seven', 15, ['7']),
    word(1, 'Against which city were the troops encamped?', 'Gibbethon', 15, ["Gib'bethon"]),
    tf(2, 'Gibbethon belonged to the Philistines.', true, 15),
    mc(3, 'Which pair correctly describes Zimri’s brief reign?', ['Seven days in Tirzah', 'Two years in Samaria', 'Twelve years in Tirzah', 'Twenty-two years in Israel'], 15),

    mc(1, 'Whom did the army make king after hearing of Zimri’s conspiracy?', ['Omri', 'Tibni', 'Ahab', 'Arza'], 16),
    blank(2, 'all Israel made Omri, the commander of the _____, king over Israel', 'army', 16),
    sa(2, 'Where was Omri made king?', 'in the camp', 16, ['camp']),
    tf(3, 'The troops accepted Zimri as king after learning he killed Elah.', false, 16, 'They made Omri king that day in the camp.'),

    mc(1, 'From where did Omri march to besiege Tirzah?', ['Gibbethon', 'Samaria', 'Jerusalem', 'Damascus'], 17),
    blank(3, 'So Omri went up from Gib\'bethon, and all Israel with him, and they _____ Tirzah.', 'besieged', 17),
    sa(1, 'Who went with Omri?', 'all Israel', 17),
    tf(2, 'Omri went alone to Tirzah.', false, 17, 'All Israel went with him.'),

    mc(1, 'How did Zimri die after Tirzah was taken?', ['He burned the king’s house over himself', 'Omri executed him', 'He fell from the city wall', 'He fled and died in Gibbethon'], 18),
    blank(3, 'and burned the king’s house over him with fire, and _____.', 'died', 18),
    sa(2, 'Where did Zimri go when the city was taken?', 'the citadel of the king’s house', 18, ['the citadel']),
    tf(2, 'Zimri escaped from Tirzah after the city was taken.', false, 18, 'He burned the king’s house over himself and died.'),
    mc(3, 'How did Zimri’s seven-day reign end?', ['He entered the citadel and burned the king’s house over himself', 'He surrendered the city and yielded Israel’s throne to Tibni', 'He returned to Gibbethon and was killed by the Philistines', 'He abdicated peacefully and transferred the kingdom to Omri'], 18),

    mc(2, 'Why does the text say Zimri died?', ['Because of his sins and Jeroboam-like evil', 'Because he served the LORD', 'Because he made peace with Judah', 'Because he refused the throne'], 19),
    blank(3, 'doing _____ in the sight of the LORD', 'evil', 19),
    word(1, 'In whose way did Zimri walk?', 'Jeroboam’s', 19, ['Jeroboam']),
    tf(2, 'Zimri’s conduct made Israel sin.', true, 19),

    mc(1, 'What particular deed of Zimri was recorded with his other acts?', ['His conspiracy', 'His purchase of Samaria', 'His marriage to Jezebel', 'His siege of Gibbethon'], 20),
    blank(2, 'and the _____ which he made', 'conspiracy', 20),
    word(2, 'Which kingdom’s chronicles contained Zimri’s acts?', 'Israel', 20),
    tf(3, 'Zimri’s conspiracy was omitted from the written record.', false, 20, 'It was written with his other acts in Israel’s chronicles.'),

    mc(1, 'Between which two claimants were the people divided?', ['Tibni and Omri', 'Zimri and Elah', 'Ahab and Asa', 'Baasha and Jehu'], 21),
    blank(3, 'Then the people of Israel were divided into _____ parts', 'two', 21, ['2']),
    word(1, 'Whose son was Tibni?', 'Ginath’s', 21, ['Ginath']),
    tf(2, 'All the people immediately followed Omri.', false, 21, 'Half followed Tibni and half followed Omri.'),

    mc(1, 'Which faction prevailed?', ['The people who followed Omri', 'The people who followed Tibni', 'Zimri’s remaining supporters', 'The Philistines'], 22),
    blank(2, 'so Tibni died, and Omri became _____.', 'king', 22),
    sa(2, 'What happened to Tibni?', 'he died', 22, ['died']),
    tf(3, 'Tibni overcame Omri and became king.', false, 22, 'Omri’s followers prevailed, Tibni died, and Omri became king.'),

    mc(2, 'How long did Omri reign over Israel?', ['Twelve years', 'Six years', 'Twenty-two years', 'Seven years'], 23),
    blank(3, 'six years he reigned in _____.', 'Tirzah', 23),
    sa(1, 'In which year of Asa did Omri begin to reign?', 'the thirty-first year', 23, ['thirty-first', '31st']),
    tf(2, 'Omri spent all twelve years of his reign in Tirzah.', false, 23, 'He reigned six years in Tirzah.'),

    mc(1, 'From whom did Omri buy the hill of Samaria?', ['Shemer', 'Tibni', 'Arza', 'Ethbaal'], 24),
    blank(3, 'He bought the hill of Sama’ria from Shemer for _____ talents of silver', 'two', 24, ['2']),
    word(1, 'What did Omri name the city he built?', 'Samaria', 24, ["Sama'ria"]),
    tf(2, 'Omri named Samaria after Shemer, the hill’s former owner.', true, 24),
    mc(3, 'What price did Omri pay Shemer for the hill of Samaria?', ['Two talents of silver', 'Twelve talents of gold', 'Six talents of silver', 'Twenty-two talents of bronze'], 24),

    mc(1, 'How did Omri’s evil compare with earlier kings?', ['He did more evil than all before him', 'He did less evil than all before him', 'He equaled David', 'He turned from every idol'], 25),
    blank(2, 'Omri did what was _____ in the sight of the LORD', 'evil', 25),
    word(2, 'In whose sight did Omri do evil?', 'LORD', 25, ['the LORD', 'the LORD’s', "LORD's"]),
    tf(3, 'Omri was more righteous than every king before him.', false, 25, 'He did more evil than all who were before him.'),

    mc(2, 'What provoked the LORD through Omri’s rule?', ['The idols and Jeroboam’s sins', 'The purchase of Samaria', 'The death of Tibni alone', 'The siege of Tirzah'], 26),
    blank(3, 'provoking the LORD, the God of Israel, to _____ by their idols.', 'anger', 26),
    sa(1, 'Whose sinful way did Omri follow?', 'Jeroboam son of Nebat’s', 26, ['Jeroboam', 'Jeroboam’s', 'Jeroboam son of Nebat']),
    tf(2, 'Omri’s sins caused Israel to sin.', true, 26),

    mc(1, 'What quality of Omri was recorded with his other acts?', ['The might he showed', 'His wisdom writings', 'His temple service', 'His prophetic visions'], 27),
    blank(2, 'and the _____ that he showed', 'might', 27),
    sa(2, 'Where were Omri’s acts recorded?', 'the Chronicles of the Kings of Israel', 27, ['Israel’s chronicles']),
    tf(3, 'The account says Omri showed no might.', false, 27, 'His might was among the acts recorded.'),

    mc(1, 'Who succeeded Omri?', ['Ahab his son', 'Tibni', 'Zimri', 'Elah'], 28),
    blank(3, 'and was buried in _____.', 'Sama’ria', 28, ['Samaria']),
    sa(1, 'What happened to Omri before Ahab reigned?', 'he slept with his fathers', 28, ['slept with his fathers', 'died']),
    tf(2, 'Omri was buried in Tirzah.', false, 28, 'He was buried in Samaria.'),

    mc(2, 'How long did Ahab reign over Israel?', ['Twenty-two years', 'Twelve years', 'Seven years', 'Two years'], 29),
    blank(3, 'In the _____-eighth year of Asa king of Judah', 'thirty', 29, ['38th', 'thirty-eighth']),
    word(1, 'Where did Ahab reign?', 'Samaria', 29, ["Sama'ria"]),
    tf(2, 'Ahab began reigning in Asa’s thirty-eighth year.', true, 29),

    mc(1, 'How did Ahab’s evil compare with those before him?', ['He did more evil than all before him', 'He was less evil than Omri', 'He did right like David', 'He was equal to Asa'], 30),
    blank(2, 'And Ahab the son of Omri did _____ in the sight of the LORD', 'evil', 30),
    word(2, 'Whose son was Ahab?', 'Omri’s', 30, ['Omri']),
    tf(3, 'Ahab did less evil than the kings before him.', false, 30, 'He did more evil than all who were before him.'),

    mc(1, 'Whom did Ahab marry?', ['Jezebel daughter of Ethbaal', 'Maacah daughter of Abishalom', 'The daughter of Omri', 'A woman of Judah'], 31),
    blank(3, 'he took for wife Jez’ebel the daughter of _____ king of the Sido’nians', 'Ethba’al', 31, ['Ethbaal']),
    word(1, 'Which god did Ahab serve and worship?', 'Baal', 31, ["Ba'al"]),
    tf(2, 'Jezebel was the daughter of the king of the Sidonians.', true, 31),
    mc(3, 'Whose daughter was Jezebel, whom Ahab took as his wife?', ['Daughter of Ethbaal, king of the Sidonians', 'Daughter of Shemer, owner of Samaria', 'Daughter of Arza, over the household', 'Daughter of Hanani the prophet'], 31),

    mc(1, 'What did Ahab erect for Baal?', ['An altar', 'A pillar to the LORD', 'A bronze shield', 'A royal throne'], 32),
    blank(2, 'in the house of Ba’al, which he built in _____.', 'Sama’ria', 32, ['Samaria']),
    word(2, 'For whom did Ahab build a house?', 'Baal', 32, ["Ba'al"]),
    tf(3, 'Ahab erected Baal’s altar in Jerusalem.', false, 32, 'He erected it in the house of Baal in Samaria.'),

    mc(2, 'What cult object did Ahab make?', ['An Asherah', 'A golden shield', 'A bronze serpent', 'An ark'], 33),
    blank(3, 'And Ahab made an _____.', 'Ashe’rah', 33, ['Asherah']),
    sa(1, 'Whom did Ahab provoke to anger?', 'the LORD, the God of Israel', 33, ['the LORD', 'LORD']),
    tf(2, 'Ahab provoked the LORD less than earlier kings.', false, 33, 'He did more to provoke the LORD than all Israel’s kings before him.'),

    mc(1, 'Who rebuilt Jericho in Ahab’s days?', ['Hiel of Bethel', 'Shemer', 'Tibni son of Ginath', 'Jehu son of Hanani'], 34),
    blank(3, 'he laid its foundation at the cost of Abi’ram his _____.', 'first-born', 34, ['firstborn']),
    word(1, 'Which son’s life was the cost of setting up Jericho’s gates?', 'Segub', 34),
    tf(2, 'Hiel rebuilt Jericho without cost to his family.', false, 34, 'The foundation cost Abiram and the gates cost Segub.'),
    mc(3, 'What did rebuilding Jericho cost Hiel?', ['Abiram his first-born at the foundation and Segub his youngest at the gates', 'Two talents of silver for the hill and another two for the city walls', 'Seven years of forced labor by the men of Bethel and their families', 'His position in Bethel and his claim to govern the rebuilt city'], 34),
  ],
}

export default bank
