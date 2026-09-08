import { mc, blank, word, tf, type ChapterBank } from './types'

const bank: ChapterBank = {
  book: '2 Kings', chapter: 15, tag: 'quiz-v2-2kings-15', rows: [
    mc(1, 'Who began reigning over Judah in Jeroboam’s twenty-seventh year?', ['Azariah son of Amaziah', 'Jotham', 'Zechariah', 'Menahem'], 1),
    blank(1, 'In the twenty-seventh year of _____ king of Israel Azari’ah the son of Amazi’ah, king of Judah, began to reign.', 'Jerobo’am', 1, ['Jeroboam']),
    word(3, 'Who was Azariah’s father?', 'Amaziah', 1, ['Amazi’ah']),
    tf(2, 'Azariah became king of Judah.', true, 1),

    mc(2, 'How old was Azariah when he began to reign?', ['Sixteen', 'Twenty-five', 'Fifty-two', 'Thirty-nine'], 2),
    blank(3, 'he reigned _____ years in Jerusalem.', 'fifty-two', 2, ['52']),
    word(2, 'What was Azariah’s mother’s name?', 'Jecoliah', 2, ['Jecoli’ah']),
    tf(1, 'Jecoliah was from Jerusalem.', true, 2),

    mc(1, 'How did Azariah act in the LORD’s eyes?', ['He did what was right', 'He did only evil', 'He followed Jeroboam', 'He served Baal'], 3),
    blank(2, 'according to all that his father _____ had done.', 'Amazi’ah', 3, ['Amaziah']),
    word(1, 'Whose example did Azariah follow?', 'Amaziah’s', 3, ['Amaziah']),
    tf(3, 'Azariah’s conduct is compared favorably with his father’s.', true, 3),

    mc(1, 'What places remained despite Azariah’s right conduct?', ['The high places', 'Baal’s temple', 'Golden calves in Jerusalem', 'Asherah groves only'], 4),
    blank(2, 'the people still sacrificed and burned _____ on the high places.', 'incense', 4),
    word(1, 'What did the people continue to do at the high places?', 'sacrifice and burn incense', 4),
    tf(3, 'Azariah removed all the high places.', false, 4, 'The high places were not taken away.'),

    mc(1, 'What affliction did the LORD send upon Azariah?', ['Leprosy', 'Blindness', 'Paralysis', 'Fever'], 5),
    blank(2, 'he was a leper to the day of his _____.', 'death', 5),
    word(1, 'Where did the afflicted king live?', 'in a separate house', 5, ['a separate house']),
    tf(2, 'Jotham governed the people while Azariah lived separately.', true, 5),
    mc(3, 'How did leprosy change Azariah’s rule?', ['He lived separately while Jotham managed the household and governed', 'He abdicated to Assyria', 'He moved to Samaria', 'The priests ruled without Jotham'], 5),

    mc(1, 'Where were Azariah’s remaining acts recorded?', ['Chronicles of the Kings of Judah', 'Chronicles of Israel', 'Book of Jehu', 'Records of Assyria'], 6),
    blank(2, 'are they not written in the Book of the _____ of the Kings of Judah?', 'Chronicles', 6),
    word(1, 'Whose acts does the record summarize?', 'Azariah’s', 6, ['Azariah']),
    tf(3, 'The narrator refers readers to Judah’s royal annals.', true, 6),

    mc(1, 'Who succeeded Azariah?', ['His son Jotham', 'Zechariah', 'Menahem', 'Ahaz'], 7),
    blank(2, 'they buried him with his fathers in the city of _____.', 'David', 7),
    word(1, 'What phrase reports Azariah’s death?', 'slept with his fathers', 7),
    tf(3, 'Azariah was buried in the city of David.', true, 7),

    mc(1, 'How long did Zechariah reign over Israel?', ['Six months', 'One month', 'Two years', 'Ten years'], 8),
    blank(2, 'Zechari’ah the son of Jerobo’am reigned over Israel in Sama’ria _____ months.', 'six', 8, ['6']),
    word(1, 'Who was Zechariah’s father?', 'Jeroboam', 8, ['Jerobo’am']),
    tf(3, 'Zechariah’s reign began in Azariah’s thirty-eighth year.', true, 8),

    mc(1, 'Whose sins did Zechariah continue?', ['Jeroboam son of Nebat’s', 'David’s', 'Jehu’s obedience', 'Amaziah’s'], 9),
    blank(2, 'he did not _____ from the sins of Jerobo’am', 'depart', 9),
    word(1, 'Whom had Jeroboam caused to sin?', 'Israel', 9),
    tf(3, 'Zechariah did evil as his fathers had done.', true, 9),

    mc(1, 'Who conspired against and killed Zechariah?', ['Shallum son of Jabesh', 'Menahem son of Gadi', 'Pekah', 'Hoshea'], 10),
    blank(2, 'and struck him down at _____', 'Ibleam', 10),
    word(1, 'What did Shallum do after killing Zechariah?', 'reigned in his stead', 10, ['became king']),
    tf(3, 'Zechariah died in a conspiracy.', true, 10),

    mc(1, 'Where were Zechariah’s remaining deeds recorded?', ['Chronicles of the Kings of Israel', 'Chronicles of Judah', 'Book of Moses', 'Records of Syria'], 11),
    blank(2, 'the rest of the deeds of _____, behold, they are written', 'Zechari’ah', 11, ['Zechariah']),
    word(1, 'Which kingdom’s royal record contained them?', 'Israel', 11),
    tf(3, 'The chapter points to a separate record for Zechariah’s deeds.', true, 11),

    mc(1, 'What promise was fulfilled through Zechariah’s reign?', ['Jehu’s sons would sit on Israel’s throne to the fourth generation', 'David’s throne would end', 'Israel would never be invaded', 'Four prophets would rule'], 12),
    blank(2, 'Your sons shall sit upon the throne of Israel to the _____ generation.', 'fourth', 12, ['4th']),
    word(1, 'To whom had the LORD made this promise?', 'Jehu', 12),
    tf(2, 'Zechariah completed the fourth generation of Jehu’s dynasty.', true, 12),
    mc(3, 'Why is Zechariah’s brief reign important in the covenant history?', ['It completed the LORD’s four-generation promise to Jehu', 'It began David’s dynasty', 'It fulfilled Jonah’s border prophecy', 'It ended Assyrian power'], 12),

    mc(1, 'How long did Shallum reign?', ['One month', 'Six months', 'Two years', 'Ten years'], 13),
    blank(2, 'he reigned one month in _____.', 'Sama’ria', 13, ['Samaria']),
    word(1, 'Who was Shallum’s father?', 'Jabesh', 13),
    tf(3, 'Shallum began reigning in Uzziah’s thirty-ninth year.', true, 13),

    mc(1, 'Who came from Tirzah and killed Shallum?', ['Menahem son of Gadi', 'Pekah son of Remaliah', 'Hoshea son of Elah', 'Pul'], 14),
    blank(2, 'Then Men’ahem the son of Gadi came up from _____.', 'Tirzah', 14),
    word(1, 'Where did Menahem kill Shallum?', 'Samaria', 14, ['Sama’ria']),
    tf(3, 'Menahem took the throne after killing Shallum.', true, 14),

    mc(1, 'Where were Shallum’s deeds and conspiracy recorded?', ['Chronicles of the Kings of Israel', 'Chronicles of Judah', 'Assyrian annals', 'Book of Jotham'], 15),
    blank(2, 'the conspiracy which he made, behold, they are _____', 'written', 15),
    word(1, 'Whose conspiracy is summarized?', 'Shallum’s', 15, ['Shallum']),
    tf(3, 'Shallum’s conspiracy was included in Israel’s royal annals.', true, 15),

    mc(1, 'Why did Menahem sack Tappuah?', ['It did not open to him', 'It allied with Judah', 'It withheld tribute from Assyria', 'It sheltered Shallum'], 16),
    blank(2, 'because they did not _____ it to him', 'open', 16),
    word(1, 'From which city did Menahem advance against Tappuah?', 'Tirzah', 16),
    tf(3, 'Menahem committed violence against pregnant women in Tappuah.', true, 16),

    mc(1, 'How long did Menahem reign in Samaria?', ['Ten years', 'One month', 'Two years', 'Twenty years'], 17),
    blank(2, 'he reigned _____ years in Sama’ria.', 'ten', 17, ['10']),
    word(1, 'Who was Menahem’s father?', 'Gadi', 17),
    tf(3, 'Menahem began in Azariah’s thirty-ninth year.', true, 17),

    mc(1, 'Whose sins did Menahem follow throughout his reign?', ['Jeroboam son of Nebat’s', 'David’s', 'Jehu’s reform', 'Jotham’s'], 18),
    blank(2, 'he did not depart all his _____ from all the sins of Jerobo’am', 'days', 18),
    word(1, 'How did Menahem act in the LORD’s sight?', 'evil', 18),
    tf(3, 'Menahem departed from Jeroboam’s sins before he died.', false, 18, 'He did not depart from them all his days.'),

    mc(1, 'Which Assyrian king came against the land?', ['Pul', 'Tiglath-pileser', 'Sennacherib', 'Shalmaneser'], 19),
    blank(2, 'Men’ahem gave Pul a thousand talents of _____.', 'silver', 19),
    word(1, 'Why did Menahem pay Pul?', 'to confirm his hold on royal power', 19, ['to secure his royal power']),
    tf(3, 'Menahem used Assyrian support to strengthen his throne.', true, 19),

    mc(1, 'From whom did Menahem collect Pul’s payment?', ['Israel’s wealthy men', 'Judah’s priests', 'Tappuah’s soldiers', 'Foreign merchants'], 20),
    blank(2, 'fifty _____ of silver from every man', 'shekels', 20),
    word(1, 'How much was assessed from each wealthy man?', 'fifty shekels of silver', 20, ['50 shekels']),
    tf(3, 'After receiving the payment, Assyria’s king left the land.', true, 20),

    mc(1, 'Where were Menahem’s remaining deeds recorded?', ['Chronicles of the Kings of Israel', 'Chronicles of Judah', 'Book of Pul', 'Records of Tappuah'], 21),
    blank(2, 'the rest of the deeds of _____, and all that he did', 'Men’ahem', 21, ['Menahem']),
    word(1, 'Which nation’s chronicles are cited?', 'Israel', 21),
    tf(3, 'Menahem’s other acts were recorded elsewhere.', true, 21),

    mc(1, 'Who succeeded Menahem?', ['His son Pekahiah', 'Pekah', 'Hoshea', 'Shallum'], 22),
    blank(2, 'and _____ his son reigned in his stead.', 'Pekahi’ah', 22, ['Pekahiah']),
    word(1, 'What phrase reports Menahem’s death?', 'slept with his fathers', 22),
    tf(3, 'Menahem’s son inherited the throne.', true, 22),

    mc(1, 'How long did Pekahiah reign?', ['Two years', 'Twenty years', 'Ten years', 'Six months'], 23),
    blank(2, 'he reigned _____ years.', 'two', 23, ['2']),
    word(1, 'Who was Pekahiah’s father?', 'Menahem', 23),
    tf(3, 'Pekahiah ruled from Samaria.', true, 23),

    mc(1, 'Whose sins did Pekahiah continue?', ['Jeroboam son of Nebat’s', 'David’s', 'Jotham’s', 'Azariah’s'], 24),
    blank(2, 'he did not turn away from the sins of _____.', 'Jerobo’am', 24, ['Jeroboam']),
    word(1, 'How did Pekahiah act in the LORD’s sight?', 'evil', 24),
    tf(3, 'Pekahiah turned away from Israel’s established sin.', false, 24, 'He did not turn away from Jeroboam’s sins.'),

    mc(1, 'Who conspired against Pekahiah?', ['Pekah son of Remaliah', 'Hoshea son of Elah', 'Pul', 'Jotham'], 25),
    blank(2, 'conspired against him with fifty men of the _____.', 'Gileadites', 25),
    word(1, 'What position had Pekah held?', 'captain', 25, ['his captain']),
    tf(3, 'Pekah killed Pekahiah in the citadel of the king’s house.', true, 25),

    mc(1, 'Where were Pekahiah’s remaining deeds recorded?', ['Chronicles of the Kings of Israel', 'Chronicles of Judah', 'Book of Remaliah', 'Assyrian records'], 26),
    blank(2, 'Now the rest of the deeds of _____, and all that he did, behold, they are written in the Book of the Chronicles of the Kings of Israel.', 'Pekahi’ah', 26, ['Pekahiah']),
    word(1, 'Which kingdom’s royal annals contained them?', 'Israel', 26),
    tf(3, 'A separate record preserved Pekahiah’s other deeds.', true, 26),

    mc(1, 'How long did Pekah reign over Israel?', ['Twenty years', 'Two years', 'Ten years', 'Fifty-two years'], 27),
    blank(2, 'Pekah the son of Remali’ah began to reign over Israel in Sama’ria, and reigned _____ years.', 'twenty', 27, ['20']),
    word(1, 'Who was Pekah’s father?', 'Remaliah', 27, ['Remali’ah']),
    tf(3, 'Pekah began reigning in Azariah’s fifty-second year.', true, 27),

    mc(1, 'Whose sins did Pekah continue?', ['Jeroboam son of Nebat’s', 'David’s', 'Jehu’s obedience', 'Jotham’s'], 28),
    blank(2, 'he did not _____ from the sins of Jerobo’am the son of Nebat, which he made Israel to sin.', 'depart', 28),
    word(1, 'How did Pekah act in the LORD’s sight?', 'evil', 28),
    tf(3, 'Pekah rejected Jeroboam’s sinful pattern.', false, 28, 'He did not depart from it.'),

    mc(1, 'Who invaded Israel during Pekah’s reign?', ['Tiglath-pileser king of Assyria', 'Pul king of Assyria', 'Rezin king of Syria', 'Ahaz king of Judah'], 29),
    blank(2, 'he carried the people captive to _____.', 'Assyria', 29),
    word(1, 'Which broad northern region was captured with Gilead and Naphtali?', 'Galilee', 29),
    tf(3, 'The invasion captured Ijon, Abel-beth-maacah, Janoah, Kedesh, and Hazor.', true, 29),

    mc(1, 'Who conspired against and killed Pekah?', ['Hoshea son of Elah', 'Jotham', 'Tiglath-pileser', 'Pekahiah'], 30),
    blank(2, 'Then Hoshe’a the son of _____ made a conspiracy against Pekah', 'Elah', 30),
    word(1, 'Who became king after Pekah?', 'Hoshea', 30, ['Hoshe’a']),
    tf(3, 'Hoshea took the throne by conspiracy.', true, 30),

    mc(1, 'Where were Pekah’s remaining acts recorded?', ['Chronicles of the Kings of Israel', 'Chronicles of Judah', 'Book of Hoshea', 'Records of Assyria'], 31),
    blank(2, 'the rest of the acts of _____, and all that he did', 'Pekah', 31),
    word(1, 'Which kingdom’s chronicles are cited?', 'Israel', 31),
    tf(3, 'Pekah’s other acts were preserved in royal records.', true, 31),

    mc(1, 'Who began to reign over Judah in Pekah’s second year?', ['Jotham son of Uzziah', 'Ahaz', 'Azariah', 'Hoshea'], 32),
    blank(2, 'Jotham the son of Uzzi’ah, king of _____, began to reign.', 'Judah', 32),
    word(1, 'Who was Jotham’s father?', 'Uzziah', 32, ['Uzzi’ah']),
    tf(3, 'Jotham’s accession was dated to Pekah’s reign.', true, 32),

    mc(1, 'How old was Jotham when he began to reign?', ['Twenty-five', 'Sixteen', 'Twenty', 'Fifty-two'], 33),
    blank(2, 'He was twenty-five years old when he began to reign, and he reigned _____ years in Jerusalem.', 'sixteen', 33, ['16']),
    word(1, 'What was Jotham’s mother’s name?', 'Jerusha', 33, ['Jeru’sha']),
    tf(3, 'Jerusha was a daughter of Zadok.', true, 33),

    word(1, 'How did Jotham act in the LORD’s eyes?', 'right', 34, ['he did what was right']),
    tf(2, 'Jotham followed the example of his father Uzziah.', true, 34),

    mc(1, 'What did Jotham build at the LORD’s house?', ['The upper gate', 'A new altar', 'The western wall', 'A royal chamber'], 35),
    blank(2, 'He built the upper _____ of the house of the LORD.', 'gate', 35),
    word(1, 'What worship sites still remained?', 'the high places', 35, ['high places']),
    tf(3, 'People still sacrificed and burned incense on the high places.', true, 35),

    mc(1, 'Where were Jotham’s other acts recorded?', ['Chronicles of the Kings of Judah', 'Chronicles of Israel', 'Book of Zadok', 'Records of Syria'], 36),
    blank(2, 'Now the rest of the acts of _____, and all that he did, are they not written in the Book of the Chronicles of the Kings of Judah?', 'Jotham', 36),
    word(1, 'Which kingdom’s annals are cited?', 'Judah', 36),
    tf(3, 'The narrator points readers to Judah’s royal record.', true, 36),

    mc(1, 'Whom did the LORD begin sending against Judah?', ['Rezin of Syria and Pekah son of Remaliah', 'Pul and Tiglath-pileser', 'Hoshea and Menahem', 'Edom and Moab'], 37),
    blank(2, 'the LORD began to send Rezin the king of _____', 'Syria', 37),
    word(1, 'Which Israelite king joined Rezin against Judah?', 'Pekah', 37),
    tf(3, 'The pressure from Rezin and Pekah began in Jotham’s days.', true, 37),

    mc(1, 'Who succeeded Jotham?', ['His son Ahaz', 'Uzziah', 'Pekah', 'Hoshea'], 38),
    blank(2, 'Jotham slept with his fathers, and was buried with his fathers in the city of David his father; and _____ his son reigned in his stead.', 'Ahaz', 38),
    word(1, 'Where was Jotham buried?', 'the city of David', 38, ['city of David']),
    tf(3, 'Jotham was buried with his fathers.', true, 38),
  ],
}

export default bank
