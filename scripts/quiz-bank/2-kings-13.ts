import { mc, blank, word, tf, type ChapterBank, sa } from './types'

const bank: ChapterBank = {
  book: '2 Kings', chapter: 13, tag: 'quiz-v2-2kings-13', rows: [
    mc(1, 'Who began to reign over Israel in Joash of Judah’s twenty-third year?', ['Jehoahaz son of Jehu', 'Jehoash son of Jehoahaz', 'Hazael', 'Jeroboam'], 1),
    blank(1, 'and he reigned _____ years.', 'seventeen', 1, ['17']),
    word(3, 'Where did Jehoahaz reign?', 'Samaria', 1, ["Sama'ria"]),
    tf(2, 'Jehoahaz belonged to a different dynasty from Jehu.', false, 1, 'Jehoahaz was Jehu’s son and succeeded within his dynasty.'),
    mc(2, 'Which Judean king dated Jehoahaz’s accession?', ['Joash son of Ahaziah', 'Amaziah', 'Jehoshaphat', 'Ahaziah son of Jehoram'], 1),

    mc(1, 'Whose sins did Jehoahaz follow?', ['Jeroboam son of Nebat’s', 'David’s', 'Ahab’s Baal worship only', 'Hazael’s'], 2),
    blank(3, 'he did not _____ from them.', 'depart', 2),
    word(2, 'Whom had Jeroboam caused to sin?', 'Israel', 2),
    tf(1, 'Jehoahaz did evil in the LORD’s sight.', true, 2),
    mc(2, 'What persistent pattern defined his reign?', ['He continued Jeroboam’s sins', 'He removed every high place', 'He restored Davidic worship', 'He destroyed the calves'], 2),

    mc(1, 'Into whose hands did the LORD repeatedly give Israel?', ['Hazael and his son Ben-hadad', 'Amaziah and Joash', 'Moab and Edom', 'Jehu and Jeroboam'], 3),
    blank(2, 'the anger of the LORD was _____ against Israel', 'kindled', 3),
    word(1, 'What kingdom did Hazael rule?', 'Syria', 3),
    tf(3, 'Syria troubled Israel only briefly during Jehoahaz’s reign.', false, 3, 'The LORD repeatedly gave Israel into the hands of Hazael and Ben-hadad.'),
    mc(2, 'What judgment followed Israel’s continued sin?', ['Ongoing subjection to Syria’s rulers', 'Immediate exile to Assyria', 'Destruction of Samaria’s temple', 'Loss of Judah'], 3),

    mc(1, 'What did Jehoahaz do under oppression?', ['Besought the LORD', 'Asked Hazael for mercy', 'Fled Samaria', 'Called Elisha to battle'], 4),
    blank(3, 'the LORD _____ to him', 'hearkened', 4),
    sa(2, 'What did the LORD see?', 'Israel’s oppression', 4, ['how Syria oppressed Israel']),
    tf(1, 'The LORD listened to Jehoahaz’s plea.', true, 4),
    mc(2, 'Why did the LORD respond?', ['He saw how Syria oppressed Israel', 'Jehoahaz had removed all idols', 'Hazael repented', 'Judah sent an army'], 4),

    mc(1, 'What did the LORD give Israel?', ['A savior', 'A new temple', 'A Syrian king', 'A prophet’s mantle'], 5),
    blank(2, 'the people of Israel dwelt in their homes as _____.', 'formerly', 5),
    sa(1, 'From whose hand did Israel escape?', 'the Syrians’', 5, ['Syria']),
    tf(3, 'Deliverance forced Israel’s people to abandon their homes.', false, 5, 'They escaped Syria’s hand and lived in their homes as before.'),
    mc(2, 'What practical result followed the savior’s work?', ['Israel escaped Syria and resumed life at home', 'Israel invaded and conquered the kingdom of Judah', 'The residents permanently abandoned Samaria', 'Jehoahaz became the new king of Syria'], 5),

    mc(1, 'What idolatrous object remained in Samaria?', ['The Asherah', 'Baal’s pillar', 'The bronze serpent', 'A golden image of Hazael'], 6),
    blank(3, 'but _____ in them', 'walked', 6),
    word(2, 'From whose house’s sins did Israel not depart?', 'Jeroboam’s', 6, ['house of Jeroboam']),
    tf(1, 'Deliverance did not produce full repentance.', true, 6),
    mc(2, 'What contrast does the verse expose?', ['Israel received relief yet continued in Jeroboam’s sins', 'Syria repented while Israel sinned', 'The Asherah was removed but calves remained', 'Jehoahaz left Samaria'], 6),

    mc(1, 'How many horsemen remained to Jehoahaz?', ['Fifty', 'Ten', 'Ten thousand', 'Seventy'], 7),
    blank(2, 'and ten thousand _____.', 'footmen', 7),
    word(1, 'How many chariots remained?', 'ten', 7, ['10']),
    tf(3, 'Jehoahaz retained Israel’s full military strength against Syria.', false, 7, 'Syria reduced his army to fifty horsemen, ten chariots, and ten thousand footmen.'),
    mc(2, 'What force survived Syria’s destruction?', ['Fifty horsemen, ten chariots, and ten thousand infantry', 'Seventy chariots accompanied by fifty thousand infantry', 'Ten horsemen supported by fifty armored chariots', 'Only a small guard assigned to protect the king'], 7),

    mc(1, 'Where were Jehoahaz’s other acts recorded?', ['Chronicles of the Kings of Israel', 'Chronicles of Judah', 'Book of Elisha', 'Records of Syria'], 8),
    blank(3, 'and all that he did, and his _____.', 'might', 8),
    word(2, 'Whose reign is summarized?', 'Jehoahaz’s', 8, ['Jehoahaz']),
    tf(1, 'The narrator directs readers to Israel’s royal records.', true, 8),
    mc(2, 'What additional aspect besides acts is mentioned?', ['His might', 'His priestly service', 'His building program', 'His writings'], 8),

    mc(1, 'Who succeeded Jehoahaz?', ['His son Joash', 'Hazael', 'Ben-hadad', 'Amaziah'], 9),
    blank(2, 'they buried him in _____.', 'Sama’ria', 9, ['Samaria']),
    sa(1, 'What phrase reports Jehoahaz’s death?', 'slept with his fathers', 9, ['he slept with his fathers']),
    tf(3, 'Jehoahaz was buried in Jerusalem among Judah’s kings.', false, 9, 'He was buried in Samaria, and his son Joash succeeded him.'),
    mc(2, 'How did the dynasty continue?', ['Joash reigned in his father’s place', 'Ben-hadad seized the throne', 'Jehu returned to power', 'Israel chose a Judean king'], 9),

    mc(1, 'When did Jehoash begin reigning in Israel?', ['Joash of Judah’s thirty-seventh year', 'His twenty-third year', 'Jehu’s seventh year', 'Amaziah’s first year'], 10),
    blank(3, 'In the thirty-seventh year of Jo’ash king of Judah Jeho’ash the son of Jeho’ahaz began to reign over Israel in Sama’ria, and he reigned _____ years.', 'sixteen', 10, ['16']),
    word(2, 'Who was Jehoash’s father?', 'Jehoahaz', 10, ["Jeho'ahaz"]),
    tf(1, 'Jehoash ruled Israel from Samaria.', true, 10),
    mc(2, 'Which two kings named Joash frame the dating formula?', ['Joash of Judah and Jehoash of Israel', 'King Jehu of Israel and King Hazael of Syria', 'King Amaziah of Judah and King Jeroboam of Israel', 'King Ahab of Israel and King Jehoshaphat of Judah'], 10),

    mc(1, 'How did Jehoash act in the LORD’s sight?', ['He did evil', 'He did right like David', 'He removed Jeroboam’s sins', 'He restored the covenant'], 11),
    blank(2, 'but he _____ in them.', 'walked', 11),
    sa(1, 'Whose sins did he continue?', 'Jeroboam son of Nebat’s', 11, ['Jeroboam’s', 'Jeroboam son of Nebat']),
    tf(3, 'Jehoash departed from all of Jeroboam’s sins.', false, 11, 'He continued to walk in them.'),
    mc(2, 'What continuity joined Jehoash to earlier northern kings?', ['He maintained Jeroboam’s sinful worship', 'He served Baal in Jezreel', 'He worshiped in Jerusalem', 'He followed Hazael'], 11),

    mc(1, 'Against which king of Judah did Joash fight?', ['Amaziah', 'Jehoash', 'Ahaziah', 'Joram'], 12),
    blank(3, 'the might with which he _____ against Amazi’ah', 'fought', 12),
    sa(2, 'Where were Joash’s acts recorded?', 'Chronicles of the Kings of Israel', 12, ['Israel’s chronicles']),
    tf(1, 'The summary specifically mentions Joash’s military might.', true, 12),
    mc(2, 'What cross-kingdom conflict is highlighted?', ['Joash of Israel fought Amaziah of Judah', 'Joash allied with Amaziah against Syria', 'Amaziah ruled Israel', 'Judah captured Samaria'], 12),

    mc(1, 'Who sat on Joash’s throne after him?', ['Jeroboam', 'Jehoahaz', 'Amaziah', 'Elisha'], 13),
    blank(2, 'Jo’ash was buried in Sama’ria with the kings of _____.', 'Israel', 13),
    word(1, 'Where was Joash buried?', 'Samaria', 13, ["Sama'ria"]),
    tf(3, 'Joash was buried among the kings of Judah in Jerusalem.', false, 13, 'He was buried in Samaria with the kings of Israel.'),
    mc(2, 'How did the succession proceed?', ['Jeroboam took the throne after Joash', 'Amaziah ruled both kingdoms', 'Hazael became Israel’s king', 'Elisha assumed royal power'], 13),

    mc(1, 'Who visited Elisha during his final illness?', ['Joash king of Israel', 'Amaziah king of Judah', 'Hazael', 'Jehoahaz'], 14),
    blank(3, 'My father, my father! The chariots of Israel and its _____.', 'horsemen', 14),
    word(2, 'What did Joash do before Elisha?', 'wept', 14, ['wept before him']),
    tf(1, 'Elisha’s illness was the one from which he would die.', true, 14),
    mc(2, 'What did Joash cry as he wept over Elisha?', ['My father! The chariots and horsemen of Israel!', 'O man of God, come down from your mountain!', 'Long live the king of Israel forever!', 'Where is the LORD, the God of Elijah?'], 14),

    mc(1, 'What did Elisha tell Joash to take?', ['A bow and arrows', 'A staff and mantle', 'A sword and shield', 'A flask of oil'], 15),
    blank(2, 'Take a bow and _____.', 'arrows', 15),
    word(1, 'Did the king obey this instruction?', 'yes', 15, ['he took them', 'yes he did']),
    tf(3, 'Joash refused to take the bow and arrows Elisha requested.', false, 15, 'The king obeyed and took the bow and arrows.'),
    mc(2, 'What objects began Elisha’s acted prophecy?', ['A bow and arrows', 'A chariot and horses', 'A jar and oil', 'A chest and silver'], 15),

    mc(1, 'What did Elisha place on the king’s hands?', ['His own hands', 'The arrows', 'A crown', 'A cloth'], 16),
    blank(3, 'Then he said to the king of Israel, “_____ the bow.”', 'Draw', 16),
    sa(2, 'Who drew the bow?', 'the king of Israel', 16, ['Joash', 'King Joash']),
    tf(1, 'Elisha physically guided the king’s hands.', true, 16),
    mc(2, 'What did Elisha’s hands upon the king’s hands show?', ['The prophet directed the king’s symbolic act', 'Elisha surrendered Israel’s throne to Joash', 'The king used the bow to heal Elisha’s illness', 'Joash instructed the prophet in military archery'], 16),

    mc(1, 'In which direction did Elisha tell Joash to open the window?', ['Eastward', 'Westward', 'Northward', 'Southward'], 17),
    blank(2, 'The LORD’s arrow of _____', 'victory', 17),
    word(1, 'Where would Joash fight Syria?', 'Aphek', 17),
    tf(3, 'Joash opened the east window but did not release the arrow.', false, 17, 'At Elisha’s command, Joash shot the arrow through the opened window.'),
    mc(2, 'What did the fired arrow signify?', ['The LORD’s victory over Syria at Aphek', 'Joash’s coming defeat by the kingdom of Judah', 'The imminent death and burial of the prophet Elisha', 'A lasting treaty of peace negotiated with Hazael'], 17),

    mc(1, 'How many times did Joash strike the ground?', ['Three', 'Five', 'Six', 'Seven'], 18),
    blank(3, 'and he struck three times, and _____.', 'stopped', 18),
    sa(2, 'What did Elisha tell him to use?', 'the arrows', 18),
    tf(1, 'Joash stopped after the third strike.', true, 18),
    mc(2, 'What additional action followed the eastward shot?', ['The king struck the ground with the arrows', 'The king broke the bow into several pieces', 'The king immediately closed the eastern window', 'The king returned all the arrows to Elisha'], 18),

    mc(1, 'Why was Elisha angry with Joash?', ['He stopped after three strikes instead of five or six', 'He refused to shoot the first arrow toward the east', 'He deliberately broke the remaining arrows and bow', 'He abandoned Syria in order to attack Judah instead'], 19),
    blank(2, 'You should have struck _____ or six times', 'five', 19, ['5']),
    word(1, 'How many victories over Syria would Joash now have?', 'three', 19, ['3']),
    tf(3, 'Three strikes signified that Joash would completely destroy Syria.', false, 19, 'Five or six strikes would have meant complete victory; three meant only three victories.'),
    mc(2, 'How did Joash’s limited response affect the prophecy?', ['He would win three times without ending Syria', 'He would never win any victory against Syria', 'He would gain exactly six victories over Syria', 'He would surrender the city of Aphek to Syria'], 19),
    mc(3, 'What did Elisha say the king should have done?', ['Strike five or six times to finish Syria', 'Shoot seven arrows through the western window', 'Break the bow together with every remaining arrow', 'Hand the bow and arrows over to Jeroboam'], 19),

    mc(1, 'What happened to Elisha?', ['He died and was buried', 'He recovered', 'He was taken in a whirlwind', 'He became king'], 20),
    blank(3, 'bands of Moabites used to _____ the land', 'invade', 20),
    word(2, 'During what season did Moabite bands invade?', 'spring', 20, ['the spring of the year']),
    tf(1, 'Moabite raids form the setting after Elisha’s burial.', true, 20),
    mc(2, 'What contrast follows Elisha’s death?', ['His burial was followed by recurring invasions', 'Syria immediately negotiated lasting peace', 'Israel entered an era of permanent rest', 'Joash immediately surrendered the royal throne'], 20),

    mc(1, 'What happened when a dead man touched Elisha’s bones?', ['He revived and stood up', 'He remained dead', 'He became leprous', 'The grave opened'], 21),
    blank(2, 'he _____, and stood on his feet.', 'revived', 21),
    sa(1, 'Why was the body thrown hastily into Elisha’s grave?', 'a marauding band was seen', 21, ['raiders appeared', 'they saw a band']),
    tf(3, 'The dead man remained lifeless after touching Elisha’s bones.', false, 21, 'When the man touched Elisha’s bones, he revived and stood on his feet.'),
    mc(3, 'What extraordinary event occurred at Elisha’s grave?', ['A dead man touched the bones and revived', 'Elisha himself rose alive from the grave', 'The approaching Moabite band was struck blind', 'King Joash recovered from a terminal illness'], 21),

    mc(1, 'Who oppressed Israel throughout Jehoahaz’s reign?', ['Hazael king of Syria', 'Amaziah', 'Moab', 'Jeroboam'], 22),
    blank(3, 'oppressed Israel all the days of _____.', 'Jeho’ahaz', 22, ['Jehoahaz']),
    word(2, 'What kingdom did the oppressor rule?', 'Syria', 22),
    tf(1, 'The oppression lasted through Jehoahaz’s days.', true, 22),

    mc(1, 'Why did the LORD show compassion to Israel?', ['Because of his covenant with the patriarchs', 'Because the nation had completely repented', 'Because King Hazael had requested mercy', 'Because Joash had struck the ground six times'], 23),
    blank(2, 'and would not _____ them', 'destroy', 23),
    sa(1, 'Name the three patriarchs in the covenant.', 'Abraham, Isaac, and Jacob', 23),
    tf(3, 'The LORD had already cast Israel entirely from his presence.', false, 23, 'Because of his covenant, he had not yet cast Israel from his presence.'),

    mc(1, 'Who succeeded Hazael?', ['His son Ben-hadad', 'Joash', 'Jehoahaz', 'Jeroboam'], 24),
    blank(3, 'became king in his _____.', 'stead', 24),
    word(2, 'Which king died?', 'Hazael', 24, ["Haza'el"]),
    tf(1, 'The Syrian throne passed from father to son.', true, 24),

    mc(1, 'What did Jehoash recover from Ben-hadad?', ['Cities taken from his father Jehoahaz', 'The capital city of Samaria itself', 'The royal throne belonging to Judah', 'The burial site of the prophet Elisha'], 25),
    blank(2, 'Three times Jo’ash _____ him', 'defeated', 25),
    word(1, 'Whose cities had Hazael taken?', 'Jehoahaz’s', 25, ['Jehoahaz']),
    tf(3, 'Jehoash defeated Ben-hadad six times, exceeding Elisha’s prediction.', false, 25, 'He defeated Ben-hadad three times and recovered Israel’s cities, as Elisha had foretold.'),
  ],
}

export default bank
