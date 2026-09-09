import { mc, blank, word, tf, type ChapterBank, sa } from './types'

const bank: ChapterBank = {
  book: '2 Kings', chapter: 14, tag: 'quiz-v2-2kings-14', rows: [
    mc(1, 'Who began to reign over Judah in the second year of Joash king of Israel?', ['Amaziah son of Joash', 'Azariah', 'Jeroboam', 'Jehoahaz'], 1),
    blank(1, 'In the second year of Jo’ash the son of Jo’ahaz, king of Israel, _____ the son of Jo’ash, king of Judah, began to reign.', 'Amazi’ah', 1, ['Amaziah']),
    word(3, 'Which kingdom did Amaziah rule?', 'Judah', 1),
    tf(2, 'Amaziah was a son of Joash king of Israel.', false, 1, 'Amaziah was the son of Joash king of Judah.'),
    mc(3, 'Which Israelite king provides the date for Amaziah’s accession?', ['Joash son of Jehoahaz', 'Jeroboam son of Joash', 'Jehu', 'Hazael'], 1),

    mc(2, 'How old was Amaziah when he began to reign?', ['Twenty-five', 'Sixteen', 'Thirty-seven', 'Twenty-nine'], 2),
    blank(3, 'He was twenty-five years old when he began to reign, and he reigned _____ years in Jerusalem.', 'twenty-nine', 2, ['29']),
    word(2, 'What was Amaziah’s mother’s name?', 'Jeho-addin', 2, ['Jeho-ad’din']),
    tf(1, 'Jeho-addin was from Jerusalem.', true, 2),
    mc(3, 'Where did Amaziah conduct his twenty-nine-year reign?', ['Jerusalem', 'Samaria', 'Lachish', 'Beth-shemesh'], 2),

    mc(1, 'Whose conduct did Amaziah follow?', ['His father Joash’s', 'David’s completely', 'Jeroboam’s', 'Ahab’s'], 3),
    blank(2, 'he did what was _____ in the eyes of the LORD, yet not like David his father', 'right', 3),
    word(1, 'Which ancestor was the higher standard Amaziah did not fully match?', 'David', 3),
    tf(2, 'Amaziah matched David’s obedience completely.', false, 3, 'He did what was right, yet not like David; he acted as his father Joash had.'),
    mc(3, 'How does the narrator qualify Amaziah’s obedience?', ['Right like Joash, but not like David', 'Wholly evil like Ahab', 'Perfect throughout his life', 'Better than David'], 3),

    mc(1, 'What worship sites did Amaziah leave in place?', ['The high places', 'The Jerusalem temple', 'Baal’s temple in Samaria', 'The altar at Carmel'], 4),
    blank(2, 'the people still sacrificed and burned _____ on the high places.', 'incense', 4),
    word(1, 'What did the people continue to offer on the high places?', 'sacrifices', 4, ['sacrificed']),
    tf(2, 'The high places were removed during Amaziah’s reign.', false, 4, 'They were not removed.'),
    mc(3, 'What limitation remained in Judah’s worship reform?', ['People still worshiped at the high places', 'The Jerusalem temple remained closed', 'No priests continued serving in Jerusalem', 'The covenant ark had been removed from Judah'], 4),

    mc(1, 'Whom did Amaziah execute after securing royal power?', ['The servants who murdered his father', 'The children belonging to those servants', 'The priests who served within the temple', 'The reigning king of the northern kingdom'], 5),
    blank(2, 'he killed his _____ who had slain the king his father.', 'servants', 5),
    sa(1, 'What had those servants done?', 'slain the king his father', 5, ['killed his father']),
    tf(2, 'Amaziah executed his father’s assassins before securing the kingdom.', false, 5, 'He acted after the kingdom was firmly in his hand.'),

    mc(1, 'Whom did Amaziah spare when punishing his father’s murderers?', ['Their children', 'The murderers', 'Their commanders', 'Their priests'], 6),
    blank(2, 'but every man shall die for his own _____.', 'sin', 6),
    word(1, 'In whose book of law was this command written?', 'Moses', 6),
    tf(3, 'The law allowed children to be executed for their fathers’ crimes.', false, 6, 'Each person was to die for his own sin.'),

    mc(1, 'How many Edomites did Amaziah kill in the Valley of Salt?', ['Ten thousand', 'One thousand', 'Twenty thousand', 'Five hundred'], 7),
    blank(2, 'and took _____ by storm, and called it Jok’the-el', 'Sela', 7),
    word(1, 'What new name did Amaziah give Sela?', 'Jokthe-el', 7, ['Jok’the-el']),
    tf(3, 'Amaziah failed to capture the Edomite stronghold of Sela.', false, 7, 'He took Sela by storm and renamed it Jokthe-el.'),

    mc(1, 'Whom did Amaziah challenge to meet face to face?', ['Jehoash king of Israel', 'Hazael king of Syria', 'Jeroboam', 'The king of Edom'], 8),
    blank(2, 'Come, let us look one another in the _____.', 'face', 8),
    word(1, 'Who carried Amaziah’s challenge?', 'messengers', 8),
    tf(3, 'Amaziah initiated the challenge to Israel.', true, 8),

    mc(1, 'Which two plants appear in Jehoash’s parable?', ['A thistle and a cedar on Lebanon', 'A vine and a fig tree', 'An olive and a bramble', 'A reed and an oak'], 9),
    blank(2, 'A _____ on Lebanon sent to a cedar on Lebanon', 'thistle', 9),
    sa(1, 'What trampled the thistle?', 'a wild beast of Lebanon', 9, ['wild beast']),
    tf(2, 'In Jehoash’s parable, the cedar asked the thistle for a marriage alliance.', false, 9, 'The thistle asked the cedar to give his daughter as a wife for the thistle’s son.'),
    mc(3, 'What warning did the thistle-and-cedar parable convey?', ['Amaziah’s pride would lead to humiliation', 'Israel genuinely desired a marriage alliance', 'Lebanon was preparing to invade Judah', 'Edom would provide military aid to Amaziah'], 9),

    mc(1, 'What victory had lifted Amaziah’s heart?', ['His defeat of Edom', 'His defeat of Israel', 'His capture of Damascus', 'His victory over Moab'], 10),
    blank(2, 'Be content with your glory, and stay at _____.', 'home', 10),
    word(1, 'Who would fall with Amaziah if he provoked trouble?', 'Judah', 10),
    tf(3, 'Jehoash advised Amaziah to remain at home.', true, 10),

    mc(1, 'Where did Amaziah and Jehoash face one another in battle?', ['Beth-shemesh in Judah', 'Jerusalem', 'Samaria', 'Lachish'], 11),
    blank(2, 'But Amazi’ah would not _____.', 'listen', 11),
    sa(1, 'Which king went up to answer the challenge?', 'Jehoash king of Israel', 11, ['Jehoash']),
    tf(3, 'The confrontation took place at Beth-shemesh in Israel.', false, 11, 'The kings met at Beth-shemesh, which belonged to Judah.'),

    mc(1, 'Who won the battle at Beth-shemesh?', ['Israel', 'Judah', 'Edom', 'Syria'], 12),
    blank(2, 'and every man fled to his _____.', 'home', 12),
    sa(1, 'What happened to Judah’s soldiers?', 'they fled to their homes', 12, ['fled home']),
    tf(3, 'Judah defeated Israel at Beth-shemesh.', false, 12, 'Israel defeated Judah.'),

    mc(1, 'Whom did Jehoash capture at Beth-shemesh?', ['Amaziah king of Judah', 'Azariah', 'Jeroboam', 'Jonah'], 13),
    blank(2, 'and broke down the wall of Jerusalem for _____ hundred cubits', 'four', 13, ['4']),
    sa(1, 'Between which gates was Jerusalem’s wall broken?', 'the Ephraim Gate and the Corner Gate', 13, ['Ephraim Gate to Corner Gate']),
    tf(3, 'Jehoash released Amaziah at Beth-shemesh without entering Jerusalem.', false, 13, 'Jehoash captured Amaziah and came to Jerusalem, where he broke down part of the wall.'),

    mc(1, 'What did Jehoash seize from Jerusalem?', ['Gold, silver, vessels, treasure, and hostages', 'Only the food stored inside Jerusalem', 'Only weapons belonging to Judah’s army', 'The ark of the covenant from the temple'], 14),
    blank(2, 'also _____, and he returned to Sama’ria.', 'hostages', 14),
    word(1, 'To what city did Jehoash return?', 'Samaria', 14, ['Sama’ria']),
    tf(3, 'Some seized vessels came from the house of the LORD.', true, 14),

    mc(1, 'Where were Jehoash’s remaining acts recorded?', ['Chronicles of the Kings of Israel', 'Chronicles of Judah', 'Book of Moses', 'Book of Jonah'], 15),
    blank(2, 'and how he fought with Amazi’ah king of _____.', 'Judah', 15),
    word(1, 'What quality of Jehoash is mentioned with his acts?', 'might', 15),
    tf(3, 'The royal record omitted Jehoash’s conflict with Amaziah.', false, 15, 'The summary specifically includes how Jehoash fought Amaziah king of Judah.'),

    mc(1, 'Who succeeded Jehoash in Israel?', ['His son Jeroboam', 'Amaziah', 'Azariah', 'Jonah'], 16),
    blank(2, 'and was buried in Sama’ria with the kings of _____.', 'Israel', 16),
    sa(1, 'What phrase describes Jehoash’s death?', 'slept with his fathers', 16),
    tf(3, 'Jehoash was buried in Samaria.', true, 16),

    mc(1, 'How long did Amaziah live after Jehoash died?', ['Fifteen years', 'Twenty-nine years', 'Sixteen years', 'Forty-one years'], 17),
    blank(2, 'lived _____ years after the death of Jeho’ash', 'fifteen', 17, ['15']),
    word(1, 'Which king outlived Jehoash?', 'Amaziah', 17, ['Amazi’ah']),
    tf(3, 'Amaziah died before Jehoash king of Israel.', false, 17, 'He lived fifteen years after Jehoash’s death.'),

    mc(1, 'Where were Amaziah’s remaining deeds recorded?', ['Chronicles of the Kings of Judah', 'Chronicles of Israel', 'Book of Jonah', 'Book of Moses'], 18),
    blank(2, 'are they not written in the Book of the _____ of the Kings of Judah?', 'Chronicles', 18),
    word(1, 'Whose deeds does this record summarize?', 'Amaziah’s', 18, ['Amaziah']),
    tf(3, 'The narrator points to Judah’s royal records.', true, 18),

    mc(1, 'Where was the conspiracy against Amaziah formed?', ['Jerusalem', 'Lachish', 'Samaria', 'Beth-shemesh'], 19),
    blank(2, 'and he fled to _____.', 'Lachish', 19),
    word(1, 'Where was Amaziah killed?', 'Lachish', 19),
    tf(3, 'Amaziah escaped his pursuers permanently.', false, 19, 'They followed him to Lachish and killed him there.'),

    mc(1, 'How was Amaziah’s body brought back?', ['On horses', 'In a chariot', 'On foot', 'By ship'], 20),
    blank(2, 'he was buried in Jerusalem with his fathers in the city of _____.', 'David', 20),
    word(1, 'Where was Amaziah buried?', 'Jerusalem', 20),
    tf(3, 'Amaziah was buried in the city of David.', true, 20),

    mc(1, 'Whom did Judah make king after Amaziah?', ['Azariah', 'Jeroboam', 'Jehoash', 'Zechariah'], 21),
    blank(2, 'who was _____ years old, and made him king', 'sixteen', 21, ['16']),
    sa(1, 'Who selected Azariah as king?', 'all the people of Judah', 21),
    tf(3, 'Azariah was Amaziah’s son.', true, 21),

    mc(1, 'Which city did Azariah build and restore to Judah?', ['Elath', 'Lachish', 'Samaria', 'Damascus'], 22),
    blank(2, 'He built _____ and restored it to Judah', 'Elath', 22),
    word(1, 'To which kingdom was Elath restored?', 'Judah', 22),
    tf(3, 'Azariah’s restoration of Elath occurred after the king’s death.', true, 22),

    mc(1, 'Who began to reign over Israel in Amaziah’s fifteenth year?', ['Jeroboam son of Joash', 'Jehoash son of Jehoahaz', 'Zechariah', 'Azariah'], 23),
    blank(2, 'and he reigned _____ years.', 'forty-one', 23, ['41']),
    word(1, 'From which city did Jeroboam rule?', 'Samaria', 23),
    tf(3, 'Jeroboam’s reign lasted forty-one years.', true, 23),

    mc(1, 'Whose sinful pattern did Jeroboam continue?', ['Jeroboam son of Nebat’s', 'David’s', 'Amaziah’s', 'Jonah’s'], 24),
    blank(2, 'he did not _____ from all the sins of Jerobo’am', 'depart', 24),
    word(1, 'Whom had Jeroboam son of Nebat caused to sin?', 'Israel', 24),
    tf(3, 'Jeroboam did evil in the LORD’s sight.', true, 24),

    mc(1, 'Which prophet foretold Jeroboam’s restoration of Israel’s border?', ['Jonah son of Amittai', 'The prophet Elisha son of Shaphat', 'The prophet Amos from Tekoa', 'The prophet Isaiah son of Amoz'], 25),
    blank(2, 'from the entrance of Hamath as far as the Sea of the _____.', 'Arabah', 25),
    word(1, 'Where was Jonah from?', 'Gath-hepher', 25, ['Gath-he’pher']),
    tf(2, 'Jeroboam restored Israel’s border according to the LORD’s word through Jonah.', true, 25),
    mc(3, 'Between what limits was Israel’s border restored?', ['Hamath’s entrance to the Sea of the Arabah', 'The city of Jerusalem to the city of Lachish', 'The city of Samaria to the city of Damascus', 'The port of Elath to the territory of Edom'], 25),

    mc(1, 'How does the chapter describe Israel’s affliction?', ['Very bitter', 'Brief and mild', 'Entirely ended', 'Self-inflicted only'], 26),
    blank(2, 'for there was none left, bond or _____.', 'free', 26),
    sa(1, 'Who was available to help Israel?', 'no one', 26, ['none']),
    tf(3, 'The LORD saw Israel’s bitter affliction.', true, 26),

    mc(1, 'Through whose hand did the LORD save Israel?', ['Jeroboam son of Joash', 'Amaziah', 'Jonah', 'Azariah'], 27),
    blank(2, 'the LORD had not said that he would blot out the name of Israel from under _____.', 'heaven', 27),
    word(1, 'What name had the LORD not declared he would blot out?', 'Israel', 27),
    tf(3, 'The LORD had already decreed Israel’s name must be erased.', false, 27, 'He had not said he would blot out Israel’s name.'),

    mc(1, 'Which two cities did Jeroboam recover for Israel?', ['Damascus and Hamath', 'Jerusalem and Lachish', 'Elath and Sela', 'Samaria and Beth-shemesh'], 28),
    blank(2, 'how he recovered for Israel Damascus and _____.', 'Hamath', 28),
    sa(1, 'Where were Jeroboam’s other acts recorded?', 'Chronicles of the Kings of Israel', 28),
    tf(3, 'The recovered cities had belonged to Judah.', true, 28),

    mc(1, 'Who succeeded Jeroboam?', ['His son Zechariah', 'Azariah', 'Amaziah', 'Jonah'], 29),
    blank(2, 'and _____ his son reigned in his stead.', 'Zechari’ah', 29, ['Zechariah']),
    sa(1, 'With whom did Jeroboam sleep at death?', 'his fathers, the kings of Israel', 29, ['his fathers']),
    tf(3, 'Jeroboam’s son continued the dynasty.', true, 29),
  ],
}

export default bank
