import { mc, blank, word, tf, type ChapterBank, sa } from './types'

const bank: ChapterBank = {
  book: '2 Kings', chapter: 8, tag: 'quiz-v2-2kings-8', rows: [
    mc(1, 'What warning did Elisha give the woman whose son he restored?', ['A seven-year famine was coming', 'Syria would capture her son', 'Her land would be taken that day', 'She should remain in Shunem'], 1),
    blank(1, 'the LORD has called for a _____.', 'famine', 1),
    sa(3, 'How long would the famine last?', 'seven years', 1, ['seven', '7 years', '7']),
    tf(2, 'Elisha told the woman to remain in Shunem throughout the famine.', false, 1, 'He told her to go with her household and sojourn wherever she could.'),
    mc(2, 'Why was the woman to leave with her household?', ['The LORD had called for a famine', 'Her son needed treatment abroad', 'The king had banished her family', 'Elisha sent her to find Gehazi'], 1),

    mc(1, 'Where did the woman live during the famine?', ['Philistine territory', 'The kingdom of Syria', 'The kingdom of Judah', 'The territory of Moab'], 2),
    blank(3, 'she went with her household and _____ in the land of the Philistines', 'sojourned', 2),
    sa(2, 'Whose word did the woman obey?', 'the man of God’s', 2, ['Elisha’s word', 'the word of the man of God']),
    tf(1, 'The woman remained away for seven years.', true, 2),
    mc(2, 'What showed the woman’s trust in Elisha’s warning?', ['She lived in Philistine territory for seven years', 'She asked Israel’s king to end the famine', 'She sold the inheritance belonging to her son', 'She remained in Shunem until its food was gone'], 2),

    mc(1, 'What did the woman seek after returning?', ['Restoration of her house and land', 'A place in the king’s court', 'A new home in Philistia', 'Payment from Gehazi'], 3),
    blank(2, 'she went forth to _____ to the king', 'appeal', 3),
    sa(1, 'From where did she return?', 'the land of the Philistines', 3, ['Philistia', 'Philistine land']),
    tf(3, 'The woman returned before the seven-year famine ended.', false, 3, 'She returned at the end of the seven years.'),
    mc(2, 'To whom did she present her property claim?', ['The king', 'Elisha', 'Gehazi', 'The army commander'], 3),

    mc(1, 'With whom was the king speaking?', ['Gehazi, Elisha’s servant', 'Hazael', 'Ben-hadad', 'The Shunammite’s husband'], 4),
    blank(3, 'Tell me all the great _____ that Eli’sha has done.', 'things', 4),
    sa(2, 'What subject interested the king?', 'Elisha’s great deeds', 4, ['the great things Elisha had done', 'Elisha’s miracles']),
    tf(1, 'Gehazi was recounting Elisha’s works to the king.', true, 4),
    mc(2, 'What role connected Gehazi to the stories he told?', ['He was the servant of the man of God', 'He was Syria’s king', 'He owned the woman’s land', 'He commanded Judah’s army'], 4),

    mc(1, 'Who arrived while Gehazi described the restored child?', ['The woman and her son', 'Hazael and Ben-hadad', 'Elisha and Jehoram', 'The king of Syria'], 5),
    blank(2, 'here is her son whom Eli’sha restored to _____.', 'life', 5),
    sa(1, 'What did the woman appeal to recover?', 'her house and land', 5, ['her property', 'house and her land']),
    tf(3, 'Gehazi failed to recognize the woman whose son had been restored.', false, 5, 'He identified both the woman and her restored son to the king.'),
    mc(3, 'What providential timing supported the Shunammite’s appeal?', ['She arrived while Gehazi recounted her son’s restoration', 'Elisha arrived while the king rejected her claim', 'The seven-year famine ended while she spoke', 'Her husband returned carrying royal documents'], 5),

    mc(1, 'What did the king order restored to the woman?', ['Her property and its produce since she left', 'Only the house in which she had lived', 'Only the most recent year’s harvest', 'Her land but none of its past produce'], 6),
    blank(3, 'the king appointed an _____ for her', 'official', 6),
    sa(2, 'From what point was the produce to be calculated?', 'the day she left the land', 6, ['when she left', 'from the day she departed']),
    tf(1, 'The king accepted the woman’s account.', true, 6),

    mc(1, 'Where did Elisha go when Ben-hadad was sick?', ['Damascus', 'Jezreel', 'Ramoth-gilead', 'Samaria'], 7),
    blank(2, 'Ben-ha’dad the king of Syria was _____.', 'sick', 7),
    sa(1, 'What title was used when Elisha’s arrival was reported?', 'the man of God', 7, ['man of God']),
    tf(3, 'Ben-hadad was unaware that Elisha had entered Damascus.', false, 7, 'He was told that the man of God had come there.'),

    mc(1, 'Whom did Ben-hadad send to Elisha?', ['Hazael', 'Gehazi', 'Naaman', 'Jehoram'], 8),
    blank(3, 'Shall I _____ from this sickness?', 'recover', 8),
    sa(2, 'What was Hazael to take with him?', 'a present', 8, ['gift']),
    tf(1, 'The king wanted Elisha to inquire of the LORD about his recovery.', true, 8),

    mc(1, 'How large was Hazael’s present?', ['Forty camel loads of Damascus goods', 'Ten talents of silver', 'Twenty barley loaves', 'Two mule loads of earth'], 9),
    blank(2, 'all kinds of goods of Damascus, _____ camel loads.', 'forty', 9, ['40']),
    sa(1, 'How did Hazael refer to Ben-hadad before Elisha?', 'your son', 9, ['your son Ben-hadad']),
    tf(3, 'Hazael asked Elisha whether Ben-hadad would win a battle.', false, 9, 'He asked whether Ben-hadad would recover from his sickness.'),

    mc(1, 'What two outcomes did Elisha distinguish?', ['Ben-hadad could recover, yet the LORD showed he would die', 'He would die immediately but later recover', 'Hazael would heal him and remain a servant', 'Syria would fall while the king lived'], 10),
    blank(3, 'the LORD has shown me that he shall certainly _____.', 'die', 10),
    sa(2, 'What message was Hazael to give Ben-hadad?', 'You shall certainly recover', 10, ['he would certainly recover']),
    tf(1, 'Elisha knew that the sickness itself need not prevent recovery.', true, 10),

    mc(1, 'What did Elisha do until Hazael felt ashamed?', ['Fixed his gaze and stared at him', 'Refused to look at him', 'Prayed with him', 'Accepted his present'], 11),
    blank(2, 'And he fixed his gaze and stared at him, until he was ashamed. And the man of God _____.', 'wept', 11),
    word(1, 'Who became ashamed under Elisha’s gaze?', 'Hazael', 11, ["Haza'el"]),
    tf(3, 'Elisha laughed after staring at Hazael.', false, 11, 'After staring at Hazael, the man of God wept.'),

    mc(1, 'Why did Elisha weep?', ['He foresaw Hazael’s violence against Israel', 'He learned that Ben-hadad was already dead', 'He objected to the great size of the present', 'He believed Judah had lost David’s lamp'], 12),
    blank(3, 'you will set on fire their _____.', 'fortresses', 12),
    sa(2, 'Whom would Hazael harm?', 'the people of Israel', 12, ['Israel', 'Israelites']),
    tf(1, 'Elisha foresaw Hazael killing young men and harming children and pregnant women.', true, 12),
    mc(3, 'What future made the man of God weep?', ['Hazael would devastate Israel’s people and strongholds', 'Hazael would reject the throne offered to him', 'Ben-hadad would peacefully take over Judah', 'Syria would release every Israelite captive'], 12),

    mc(1, 'What future office did the LORD show Elisha for Hazael?', ['King over Syria', 'King over Israel', 'Commander of Judah', 'Prophet in Damascus'], 13),
    blank(2, 'What is your servant, who is but a _____', 'dog', 13),
    sa(1, 'How did Hazael describe the predicted violence?', 'this great thing', 13, ['a great thing']),
    tf(3, 'Hazael immediately boasted that he was powerful enough to commit those acts.', false, 13, 'He called himself a mere dog and questioned how he could do such a great thing.'),

    mc(1, 'What did Hazael report to Ben-hadad?', ['Elisha said he would certainly recover', 'Elisha said he would die that day', 'Elisha refused to answer', 'Elisha demanded more gifts'], 14),
    blank(3, 'Then he departed from Eli’sha, and came to his _____.', 'master', 14),
    word(2, 'Who asked Hazael what Elisha had said?', 'Ben-hadad', 14, ["Ben-ha'dad", 'his master']),
    tf(1, 'Hazael omitted Elisha’s revelation that Ben-hadad would die.', true, 14),

    mc(1, 'How did Ben-hadad die?', ['Hazael spread a water-soaked coverlet over his face', 'His sickness took him naturally that night', 'He died in battle at Ramoth-gilead', 'Elisha struck him with leprosy'], 15),
    blank(2, 'he took the coverlet and dipped it in _____.', 'water', 15),
    word(1, 'Who became king after Ben-hadad?', 'Hazael', 15, ["Haza'el"]),
    tf(3, 'Ben-hadad died naturally from his illness on the following day.', false, 15, 'Hazael spread a water-soaked coverlet over his face, and he died.'),
    mc(3, 'What sequence transferred Syria’s throne to Hazael?', ['He smothered Ben-hadad and succeeded him', 'He defeated Ben-hadad and was elected', 'Elisha crowned him after the king recovered', 'Ben-hadad recovered and then abdicated'], 15),

    mc(1, 'Who began to reign over Judah in Joram of Israel’s fifth year?', ['Jehoram son of Jehoshaphat', 'Ahaziah son of Jehoram', 'Hazael', 'Ben-hadad'], 16),
    blank(3, 'Jeho’ram the son of Jehosh’aphat, king of _____', 'Judah', 16),
    word(2, 'Who was Jehoram’s father?', 'Jehoshaphat', 16, ["Jehosh'aphat"]),
    tf(1, 'Joram son of Ahab was ruling Israel when Jehoram began ruling Judah.', true, 16),

    mc(1, 'How old was Jehoram when he became king?', ['Thirty-two', 'Twenty-two', 'Forty', 'Eight'], 17),
    blank(2, 'and he reigned _____ years in Jerusalem.', 'eight', 17, ['8']),
    word(1, 'Where did Jehoram reign?', 'Jerusalem', 17),
    tf(3, 'Jehoram reigned in Jerusalem for thirty-two years.', false, 17, 'He was thirty-two when he became king and reigned for eight years.'),

    mc(1, 'Why did Jehoram follow the way of Ahab’s house?', ['Ahab’s daughter was his wife', 'Hazael forced him', 'Jehoshaphat commanded it', 'He lived in Samaria'], 18),
    blank(3, 'And he did what was _____ in the sight of the LORD.', 'evil', 18),
    sa(2, 'Whose dynasty’s pattern did Jehoram follow?', 'the house of Ahab', 18, ['Ahab’s house']),
    tf(1, 'Jehoram walked in the way of Israel’s kings.', true, 18),

    mc(1, 'Why would the LORD not destroy Judah?', ['For David’s sake and the promised lamp', 'Because King Jehoram lived righteously', 'Because Ahab’s daughter interceded', 'Because the nation of Edom stayed loyal'], 19),
    blank(2, 'he promised to give a _____ to him and to his sons for ever.', 'lamp', 19),
    sa(1, 'For whose sake was Judah preserved?', 'David his servant', 19, ['David’s', 'David']),
    tf(3, 'The promised lamp applied only to David and not to his descendants.', false, 19, 'The LORD promised a lamp to David and to his sons forever.'),
    mc(3, 'What covenant promise restrained judgment on evil King Jehoram?', ['David would have a continuing lamp through his sons', 'Judah would never experience a national revolt', 'Every descendant of David would act righteously', 'Jerusalem would permanently rule over Syria'], 19),

    mc(1, 'Which nation revolted from Judah during Jehoram’s reign?', ['Edom', 'Syria', 'Moab', 'Philistia'], 20),
    blank(3, 'and set up a king of their _____.', 'own', 20),
    word(2, 'From whose rule did Edom revolt?', 'Judah’s', 20, ['Judah']),
    tf(1, 'Edom established its own king.', true, 20),

    mc(1, 'Where did Joram cross with his chariots?', ['Zair', 'Jezreel', 'Damascus', 'Samaria'], 21),
    blank(2, 'Then Joram passed over to Za\'ir with all his chariots, and rose by _____, and he and his chariot commanders smote the E\'domites who had surrounded him;', 'night', 21),
    sa(1, 'Who had surrounded Joram?', 'the Edomites', 21, ['Edom']),
    tf(3, 'Joram’s army remained at Zair after striking the surrounding Edomites.', false, 21, 'After the nighttime attack, his army fled home.'),

    mc(1, 'What other place revolted when Edom did?', ['Libnah', 'Dothan', 'Shunem', 'Gilgal'], 22),
    blank(3, 'So Edom _____ from the rule of Judah to this day.', 'revolted', 22),
    sa(2, 'How long did Edom’s revolt remain in effect?', 'to this day', 22),
    tf(1, 'Libnah’s revolt occurred at the same time.', true, 22),

    mc(1, 'Where were Joram’s other acts recorded?', ['Chronicles of the Kings of Judah', 'Chronicles of Israel', 'Records of Syria', 'Book of Elisha'], 23),
    blank(2, 'the Book of the _____ of the Kings of Judah', 'Chronicles', 23),
    word(1, 'Whose deeds does the record summarize?', 'Joram’s', 23, ['Joram', 'Jehoram']),
    tf(3, 'The narrator says Joram’s other acts were recorded in Syria’s records.', false, 23, 'They were written in the Book of the Chronicles of the Kings of Judah.'),

    mc(1, 'Who succeeded Joram in Judah?', ['His son Ahaziah', 'Hazael', 'Jehoshaphat', 'Joram of Israel'], 24),
    blank(3, 'and was buried with his fathers in the city of _____.', 'David', 24),
    sa(2, 'What phrase describes Joram’s death?', 'slept with his fathers', 24, ['he slept with his fathers']),
    tf(1, 'Joram was buried in the city of David.', true, 24),

    mc(1, 'When did Ahaziah begin to reign in Judah?', ['Joram of Israel’s twelfth year', 'Joram’s fifth year', 'Hazael’s first year', 'Jehoshaphat’s eighteenth year'], 25),
    blank(2, 'Ahazi’ah the son of Jeho’ram, king of _____', 'Judah', 25),
    word(1, 'Who was Ahaziah’s father?', 'Jehoram', 25, ["Jeho'ram"]),
    tf(3, 'Ahaziah began reigning during Joram son of Ahab’s fifth year.', false, 25, 'His accession was in Joram’s twelfth year.'),

    mc(1, 'How old was Ahaziah when he became king?', ['Twenty-two', 'Thirty-two', 'Twelve', 'Eight'], 26),
    blank(3, 'and he reigned one year in _____.', 'Jerusalem', 26),
    word(2, 'Who was Ahaziah’s mother?', 'Athaliah', 26, ["Athali'ah"]),
    tf(1, 'Athaliah was a granddaughter of Omri.', true, 26),

    mc(1, 'What family’s way did Ahaziah follow?', ['The house of Ahab', 'The house of David', 'The house of Hazael', 'The house of Elisha'], 27),
    blank(2, 'for he was son-in-law to the house of _____.', 'Ahab', 27),
    sa(1, 'How did Ahaziah act in the LORD’s sight?', 'he did evil', 27, ['evil', 'what was evil']),
    tf(3, 'Ahaziah rejected the ways of Ahab’s house.', false, 27, 'He walked in the way of Ahab’s house and did evil in the LORD’s sight.'),

    mc(1, 'Against whom did Joram and Ahaziah fight at Ramoth-gilead?', ['Hazael king of Syria', 'The king of Edom', 'Ben-hadad', 'The Philistines'], 28),
    blank(3, 'where the Syrians _____ Joram.', 'wounded', 28),
    word(2, 'Who accompanied Joram to battle?', 'Ahaziah', 28, ["Ahazi'ah"]),
    tf(1, 'The Syrians wounded Joram at Ramoth-gilead.', true, 28),

    mc(1, 'Where did Joram go to recover from his wounds?', ['Jezreel', 'Jerusalem', 'Damascus', 'Dothan'], 29),
    blank(2, 'And King Joram returned to be _____ in Jezreel', 'healed', 29),
    sa(1, 'Who went down to visit the wounded Joram?', 'Ahaziah king of Judah', 29, ['Ahaziah', "Ahazi'ah"]),
    tf(3, 'Ahaziah avoided Joram while Joram recovered from his wounds.', false, 29, 'Ahaziah went down to Jezreel to see the wounded Joram.'),
  ],
}

export default bank
