import { mc, blank, word, tf, type ChapterBank } from './types'

const bank: ChapterBank = {
  book: '2 Kings', chapter: 13, tag: 'quiz-v2-2kings-13', rows: [
    mc(1, 'Who began to reign over Israel in Joash of Judah’s twenty-third year?', ['Jehoahaz son of Jehu', 'Jehoash son of Jehoahaz', 'Hazael', 'Jeroboam'], 1),
    blank(1, 'and he reigned _____ years.', 'seventeen', 1, ['17']),
    word(3, 'Where did Jehoahaz reign?', 'Samaria', 1, ["Sama'ria"]),
    tf(2, 'Jehoahaz was Jehu’s son.', true, 1),
    mc(2, 'Which Judean king dated Jehoahaz’s accession?', ['Joash son of Ahaziah', 'Amaziah', 'Jehoshaphat', 'Ahaziah son of Jehoram'], 1),

    mc(1, 'Whose sins did Jehoahaz follow?', ['Jeroboam son of Nebat’s', 'David’s', 'Ahab’s Baal worship only', 'Hazael’s'], 2),
    blank(3, 'he did not _____ from them.', 'depart', 2),
    word(2, 'Whom had Jeroboam caused to sin?', 'Israel', 2),
    tf(1, 'Jehoahaz did evil in the LORD’s sight.', true, 2),
    mc(2, 'What persistent pattern defined his reign?', ['He continued Jeroboam’s sins', 'He removed every high place', 'He restored Davidic worship', 'He destroyed the calves'], 2),

    mc(1, 'Into whose hands did the LORD repeatedly give Israel?', ['Hazael and his son Ben-hadad', 'Amaziah and Joash', 'Moab and Edom', 'Jehu and Jeroboam'], 3),
    blank(2, 'the anger of the LORD was _____ against Israel', 'kindled', 3),
    word(1, 'What kingdom did Hazael rule?', 'Syria', 3),
    tf(3, 'Israel remained under Syrian pressure continually.', true, 3),
    mc(2, 'What judgment followed Israel’s continued sin?', ['Ongoing subjection to Syria’s rulers', 'Immediate exile to Assyria', 'Destruction of Samaria’s temple', 'Loss of Judah'], 3),

    mc(1, 'What did Jehoahaz do under oppression?', ['Besought the LORD', 'Asked Hazael for mercy', 'Fled Samaria', 'Called Elisha to battle'], 4),
    blank(3, 'the LORD _____ to him', 'hearkened', 4),
    word(2, 'What did the LORD see?', 'Israel’s oppression', 4, ['how Syria oppressed Israel']),
    tf(1, 'The LORD listened to Jehoahaz’s plea.', true, 4),
    mc(2, 'Why did the LORD respond?', ['He saw how Syria oppressed Israel', 'Jehoahaz had removed all idols', 'Hazael repented', 'Judah sent an army'], 4),

    mc(1, 'What did the LORD give Israel?', ['A savior', 'A new temple', 'A Syrian king', 'A prophet’s mantle'], 5),
    blank(2, 'the people of Israel dwelt in their homes as _____.', 'formerly', 5),
    word(1, 'From whose hand did Israel escape?', 'the Syrians’', 5, ['Syria']),
    tf(3, 'The deliverance allowed ordinary life to resume.', true, 5),
    mc(2, 'What practical result followed the savior’s work?', ['Israel escaped Syria and returned to its homes', 'Israel conquered Judah', 'Samaria was abandoned', 'Jehoahaz became king of Syria'], 5),

    mc(1, 'What idolatrous object remained in Samaria?', ['The Asherah', 'Baal’s pillar', 'The bronze serpent', 'A golden image of Hazael'], 6),
    blank(3, 'but _____ in them', 'walked', 6),
    word(2, 'From whose house’s sins did Israel not depart?', 'Jeroboam’s', 6, ['house of Jeroboam']),
    tf(1, 'Deliverance did not produce full repentance.', true, 6),
    mc(2, 'What contrast does the verse expose?', ['Israel received relief yet continued in Jeroboam’s sins', 'Syria repented while Israel sinned', 'The Asherah was removed but calves remained', 'Jehoahaz left Samaria'], 6),

    mc(1, 'How many horsemen remained to Jehoahaz?', ['Fifty', 'Ten', 'Ten thousand', 'Seventy'], 7),
    blank(2, 'and ten thousand _____.', 'footmen', 7),
    word(1, 'How many chariots remained?', 'ten', 7, ['10']),
    tf(3, 'Syria had reduced Israel’s army like dust at threshing.', true, 7),
    mc(2, 'What force survived Syria’s destruction?', ['Fifty horsemen, ten chariots, and ten thousand foot soldiers', 'Seventy chariots and fifty thousand men', 'Ten horsemen and fifty chariots', 'Only the king’s guard'], 7),

    mc(1, 'Where were Jehoahaz’s other acts recorded?', ['Chronicles of the Kings of Israel', 'Chronicles of Judah', 'Book of Elisha', 'Records of Syria'], 8),
    blank(3, 'and all that he did, and his _____.', 'might', 8),
    word(2, 'Whose reign is summarized?', 'Jehoahaz’s', 8, ['Jehoahaz']),
    tf(1, 'The narrator directs readers to Israel’s royal records.', true, 8),
    mc(2, 'What additional aspect besides acts is mentioned?', ['His might', 'His priestly service', 'His building program', 'His writings'], 8),

    mc(1, 'Who succeeded Jehoahaz?', ['His son Joash', 'Hazael', 'Ben-hadad', 'Amaziah'], 9),
    blank(2, 'they buried him in _____.', 'Sama’ria', 9, ['Samaria']),
    word(1, 'What phrase reports Jehoahaz’s death?', 'slept with his fathers', 9, ['he slept with his fathers']),
    tf(3, 'Jehoahaz was buried in Samaria.', true, 9),
    mc(2, 'How did the dynasty continue?', ['Joash reigned in his father’s place', 'Ben-hadad seized the throne', 'Jehu returned to power', 'Israel chose a Judean king'], 9),

    mc(1, 'When did Jehoash begin reigning in Israel?', ['Joash of Judah’s thirty-seventh year', 'His twenty-third year', 'Jehu’s seventh year', 'Amaziah’s first year'], 10),
    blank(3, 'In the thirty-seventh year of Jo’ash king of Judah Jeho’ash the son of Jeho’ahaz began to reign over Israel in Sama’ria, and he reigned _____ years.', 'sixteen', 10, ['16']),
    word(2, 'Who was Jehoash’s father?', 'Jehoahaz', 10, ["Jeho'ahaz"]),
    tf(1, 'Jehoash ruled Israel from Samaria.', true, 10),
    mc(2, 'Which two kings named Joash frame the dating formula?', ['Joash of Judah and Jehoash of Israel', 'Jehu and Hazael', 'Amaziah and Jeroboam', 'Ahab and Jehoshaphat'], 10),

    mc(1, 'How did Jehoash act in the LORD’s sight?', ['He did evil', 'He did right like David', 'He removed Jeroboam’s sins', 'He restored the covenant'], 11),
    blank(2, 'but he _____ in them.', 'walked', 11),
    word(1, 'Whose sins did he continue?', 'Jeroboam son of Nebat’s', 11, ['Jeroboam’s']),
    tf(3, 'Jehoash departed from all of Jeroboam’s sins.', false, 11, 'He continued to walk in them.'),
    mc(2, 'What continuity joined Jehoash to earlier northern kings?', ['He maintained Jeroboam’s sinful worship', 'He served Baal in Jezreel', 'He worshiped in Jerusalem', 'He followed Hazael'], 11),

    mc(1, 'Against which king of Judah did Joash fight?', ['Amaziah', 'Jehoash', 'Ahaziah', 'Joram'], 12),
    blank(3, 'the might with which he _____ against Amazi’ah', 'fought', 12),
    word(2, 'Where were Joash’s acts recorded?', 'Chronicles of the Kings of Israel', 12, ['Israel’s chronicles']),
    tf(1, 'The summary specifically mentions Joash’s military might.', true, 12),
    mc(2, 'What cross-kingdom conflict is highlighted?', ['Joash of Israel fought Amaziah of Judah', 'Joash allied with Amaziah against Syria', 'Amaziah ruled Israel', 'Judah captured Samaria'], 12),

    mc(1, 'Who sat on Joash’s throne after him?', ['Jeroboam', 'Jehoahaz', 'Amaziah', 'Elisha'], 13),
    blank(2, 'Jo’ash was buried in Sama’ria with the kings of _____.', 'Israel', 13),
    word(1, 'Where was Joash buried?', 'Samaria', 13, ["Sama'ria"]),
    tf(3, 'Joash was buried among Israel’s kings.', true, 13),
    mc(2, 'How did the succession proceed?', ['Jeroboam took the throne after Joash', 'Amaziah ruled both kingdoms', 'Hazael became Israel’s king', 'Elisha assumed royal power'], 13),

    mc(1, 'Who visited Elisha during his final illness?', ['Joash king of Israel', 'Amaziah king of Judah', 'Hazael', 'Jehoahaz'], 14),
    blank(3, 'My father, my father! The chariots of Israel and its _____.', 'horsemen', 14),
    word(2, 'What did Joash do before Elisha?', 'wept', 14, ['wept before him']),
    tf(1, 'Elisha’s illness was the one from which he would die.', true, 14),
    mc(2, 'What title of affection and national defense did Joash cry?', ['My father, my father! The chariots of Israel and its horsemen!', 'O man of God, come down!', 'Long live the king!', 'Where is the LORD?'], 14),

    mc(1, 'What did Elisha tell Joash to take?', ['A bow and arrows', 'A staff and mantle', 'A sword and shield', 'A flask of oil'], 15),
    blank(2, 'Take a bow and _____.', 'arrows', 15),
    word(1, 'Did the king obey this instruction?', 'yes', 15, ['he took them', 'yes he did']),
    tf(3, 'Joash took the bow and arrows as Elisha directed.', true, 15),
    mc(2, 'What objects began Elisha’s acted prophecy?', ['A bow and arrows', 'A chariot and horses', 'A jar and oil', 'A chest and silver'], 15),

    mc(1, 'What did Elisha place on the king’s hands?', ['His own hands', 'The arrows', 'A crown', 'A cloth'], 16),
    blank(3, 'Then he said to the king of Israel, “_____ the bow.”', 'Draw', 16),
    word(2, 'Who drew the bow?', 'the king of Israel', 16, ['Joash']),
    tf(1, 'Elisha physically guided the king’s hands.', true, 16),
    mc(2, 'What did the shared grip symbolize in the scene?', ['Elisha directed the king’s military sign under God’s word', 'Elisha surrendered as king', 'Joash healed Elisha', 'The king taught Elisha archery'], 16),

    mc(1, 'In which direction did Elisha tell Joash to open the window?', ['Eastward', 'Westward', 'Northward', 'Southward'], 17),
    blank(2, 'The LORD’s arrow of _____', 'victory', 17),
    word(1, 'Where would Joash fight Syria?', 'Aphek', 17),
    tf(3, 'Joash shot the arrow through the opened window.', true, 17),
    mc(2, 'What did the fired arrow signify?', ['The LORD’s victory over Syria until it was brought to an end', 'Joash’s defeat by Judah', 'Elisha’s death', 'A treaty with Hazael'], 17),

    mc(1, 'How many times did Joash strike the ground?', ['Three', 'Five', 'Six', 'Seven'], 18),
    blank(3, 'and he struck three times, and _____.', 'stopped', 18),
    word(2, 'What did Elisha tell him to use?', 'the arrows', 18),
    tf(1, 'Joash stopped after the third strike.', true, 18),
    mc(2, 'What additional action followed the eastward shot?', ['The king struck the ground with the remaining arrows', 'He broke the bow', 'He closed the window', 'He gave the arrows to Elisha'], 18),

    mc(1, 'Why was Elisha angry with Joash?', ['He struck only three times instead of five or six', 'He refused to shoot east', 'He broke the arrows', 'He attacked Judah'], 19),
    blank(2, 'You should have struck _____ or six times', 'five', 19, ['5']),
    word(1, 'How many victories over Syria would Joash now have?', 'three', 19, ['3']),
    tf(3, 'Five or six strikes would have signified ending Syria completely.', true, 19),
    mc(2, 'How did Joash’s limited response affect the prophecy?', ['He would defeat Syria three times rather than destroy it fully', 'He would never defeat Syria', 'He would gain six victories', 'He would lose Aphek'], 19),
    mc(3, 'What did Elisha say the king should have done?', ['Strike five or six times to make an end of Syria', 'Shoot westward seven times', 'Break every arrow', 'Give the bow to Jeroboam'], 19),

    mc(1, 'What happened to Elisha?', ['He died and was buried', 'He recovered', 'He was taken in a whirlwind', 'He became king'], 20),
    blank(3, 'bands of Moabites used to _____ the land', 'invade', 20),
    word(2, 'During what season did Moabite bands invade?', 'spring', 20, ['the spring of the year']),
    tf(1, 'Moabite raids form the setting after Elisha’s burial.', true, 20),
    mc(2, 'What contrast follows Elisha’s death?', ['His burial is followed by recurring spring invasions', 'Syria immediately makes peace', 'Israel enters permanent rest', 'Joash leaves the throne'], 20),

    mc(1, 'What happened when a dead man touched Elisha’s bones?', ['He revived and stood up', 'He remained dead', 'He became leprous', 'The grave opened'], 21),
    blank(2, 'he _____, and stood on his feet.', 'revived', 21),
    word(1, 'Why was the body thrown hastily into Elisha’s grave?', 'a marauding band was seen', 21, ['raiders appeared', 'they saw a band']),
    tf(3, 'Contact with Elisha’s bones was followed immediately by life.', true, 21),
    mc(3, 'What extraordinary event occurred at Elisha’s grave?', ['A dead man touched his bones, revived, and stood', 'Elisha himself rose', 'Moab’s band was struck blind', 'Joash recovered from illness'], 21),

    mc(1, 'Who oppressed Israel throughout Jehoahaz’s reign?', ['Hazael king of Syria', 'Amaziah', 'Moab', 'Jeroboam'], 22),
    blank(3, 'oppressed Israel all the days of _____.', 'Jeho’ahaz', 22, ['Jehoahaz']),
    word(2, 'What kingdom did the oppressor rule?', 'Syria', 22),
    tf(1, 'The oppression lasted through Jehoahaz’s days.', true, 22),

    mc(1, 'Why did the LORD show compassion to Israel?', ['Because of his covenant with Abraham, Isaac, and Jacob', 'Because Israel had fully repented', 'Because Hazael requested mercy', 'Because Joash struck six times'], 23),
    blank(2, 'and would not _____ them', 'destroy', 23),
    word(1, 'Name the three patriarchs in the covenant.', 'Abraham, Isaac, and Jacob', 23),
    tf(3, 'The LORD had not cast Israel from his presence at that time.', true, 23),

    mc(1, 'Who succeeded Hazael?', ['His son Ben-hadad', 'Joash', 'Jehoahaz', 'Jeroboam'], 24),
    blank(3, 'became king in his _____.', 'stead', 24),
    word(2, 'Which king died?', 'Hazael', 24, ["Haza'el"]),
    tf(1, 'The Syrian throne passed from father to son.', true, 24),

    mc(1, 'What did Jehoash recover from Ben-hadad?', ['Israelite cities taken from his father', 'The city of Samaria', 'Judah’s throne', 'Elisha’s grave'], 25),
    blank(2, 'Three times Jo’ash _____ him', 'defeated', 25),
    word(1, 'Whose cities had Hazael taken?', 'Jehoahaz’s', 25, ['Jehoahaz']),
    tf(3, 'The three victories fulfilled Elisha’s limited prediction.', true, 25),
  ],
}

export default bank
