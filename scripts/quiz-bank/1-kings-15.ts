import { mc, blank, word, tf, type ChapterBank, sa } from './types'

const bank: ChapterBank = {
  book: '1 Kings', chapter: 15, tag: 'quiz-v2-1kings-15', rows: [
    mc(1, 'In whose eighteenth year did Abijam begin to reign?', ['Jeroboam son of Nebat', 'Rehoboam', 'Asa', 'Nadab'], 1),
    blank(1, 'Now in the _____ year of King Jerobo’am the son of Nebat, Abi’jam began to reign over Judah.', 'eighteenth', 1, ['18th']),
    word(3, 'Over which kingdom did Abijam begin to reign?', 'Judah', 1),
    tf(1, 'Abijam began reigning in Jeroboam’s eighteenth year.', true, 1),

    mc(1, 'How long did Abijam reign in Jerusalem?', ['Three years', 'Twenty years', 'Forty-one years', 'Two years'], 2),
    blank(2, 'His mother’s name was Ma’acah the daughter of _____.', 'Abish’alom', 2, ['Abishalom']),
    word(2, 'Who was Abijam’s mother?', 'Maacah', 2, ["Ma'acah"]),
    tf(3, 'Abijam reigned in Jerusalem for three years.', true, 2),

    mc(2, 'How did Abijam’s heart compare with David’s?', ['It was not wholly true to the LORD', 'It was more faithful than David’s', 'It was wholly true to the LORD', 'The text makes no comparison'], 3),
    blank(3, 'and his heart was not wholly _____ to the LORD his God', 'true', 3),
    sa(1, 'In whose sins did Abijam walk?', 'his father’s', 3, ['his father', 'the sins of his father']),
    tf(2, 'Abijam’s heart was not wholly true to the LORD as David’s heart had been.', true, 3),

    mc(1, 'For whose sake did the LORD give Abijam a lamp in Jerusalem?', ['David’s', 'Solomon’s', 'Jeroboam’s', 'Rehoboam’s'], 4),
    blank(2, 'the LORD his God gave him a _____ in Jerusalem', 'lamp', 4),
    word(2, 'What did the LORD establish?', 'Jerusalem', 4),
    tf(3, 'The LORD set up Abijam’s son after him.', true, 4),
    mc(3, 'Why did Abijam’s dynasty retain a lamp in Jerusalem?', ['For David’s sake', 'Because Abijam removed every idol', 'Because Jeroboam supported him', 'For Maacah’s sake'], 4),

    mc(2, 'What exception is named in the account of David’s obedience?', ['The matter of Uriah the Hittite', 'The census of Israel', 'His flight from Saul', 'The building of the temple'], 5),
    blank(3, 'except in the matter of Uri’ah the _____.', 'Hittite', 5),
    sa(1, 'What did David do in the LORD’s eyes?', 'what was right', 5, ['right']),
    tf(2, 'David never turned aside from the LORD’s commands, except in the matter of Uriah.', true, 5),
    mc(3, 'What does the account say about David’s obedience?', ['He did right and did not turn aside, except in the matter of Uriah', 'He obeyed without any exception throughout his entire life', 'He was less faithful to the LORD than Abijam proved to be', 'He abandoned the LORD’s commands to honor Jeroboam’s house'], 5),

    mc(1, 'What existed between Rehoboam and Jeroboam throughout his life?', ['War', 'Peace', 'A league', 'Shared rule'], 6),
    blank(2, 'Now there was _____ between Rehobo’am and Jerobo’am all the days of his life.', 'war', 6),
    sa(2, 'Between which two kings was there war?', 'Rehoboam and Jeroboam', 6),
    tf(3, 'There was war between Rehoboam and Jeroboam throughout Rehoboam’s life.', true, 6),

    mc(1, 'Where were Abijam’s other acts recorded?', ['The Chronicles of the Kings of Judah', 'The Chronicles of the Kings of Israel', 'The book of Uriah', 'The records of Damascus'], 7),
    blank(3, 'And there was _____ between Abi’jam and Jerobo’am.', 'war', 7),
    word(1, 'With whom was Abijam at war?', 'Jeroboam', 7),
    tf(2, 'Abijam’s acts were recorded in the chronicles of Judah’s kings.', true, 7),

    mc(1, 'Who succeeded Abijam?', ['Asa his son', 'Nadab his brother', 'Baasha', 'Jehoshaphat'], 8),
    blank(2, 'and they buried him in the city of _____.', 'David', 8),
    sa(2, 'What happened to Abijam before Asa reigned?', 'he slept with his fathers', 8, ['slept with his fathers', 'died']),
    tf(3, 'Abijam was buried in the city of David.', true, 8),

    mc(1, 'In which year of Jeroboam did Asa begin to reign?', ['The twentieth year', 'The eighteenth year', 'The third year', 'The forty-first year'], 9),
    blank(3, 'In the _____ year of Jerobo’am king of Israel Asa began to reign over Judah', 'twentieth', 9, ['20th']),
    word(1, 'Who began to reign over Judah?', 'Asa', 9),
    tf(2, 'Asa began his reign in Jeroboam’s twentieth year.', true, 9),

    mc(2, 'How long did Asa reign in Jerusalem?', ['Forty-one years', 'Three years', 'Twenty-four years', 'Two years'], 10),
    blank(3, 'and he reigned _____-one years in Jerusalem.', 'forty', 10, ['41', 'forty-one']),
    word(1, 'Whose daughter was Maacah?', 'Abishalom’s', 10, ['Abishalom', "Abish'alom"]),
    tf(2, 'Asa reigned in Jerusalem for forty-one years.', true, 10),

    mc(1, 'Whose example did Asa follow in doing right?', ['David', 'Abijam', 'Jeroboam', 'Rehoboam'], 11),
    blank(2, 'And Asa did what was _____ in the eyes of the LORD', 'right', 11),
    word(2, 'In whose eyes did Asa do right?', 'LORD', 11, ['the LORD', 'the LORD’s', "LORD's"]),
    tf(3, 'Asa did what was right in the LORD’s eyes, as David had done.', true, 11),

    mc(1, 'Whom did Asa put away from the land?', ['The male cult prostitutes', 'All foreign residents', 'The officers of the guard', 'The sons of Jeroboam'], 12),
    blank(3, 'and removed all the _____ that his fathers had made.', 'idols', 12),
    word(1, 'What objects made by his fathers did Asa remove?', 'idols', 12),
    tf(2, 'Asa removed all the idols that his fathers had made.', true, 12),

    mc(2, 'Why did Asa remove Maacah from being queen mother?', ['She had made an abominable image for Asherah', 'She had supported Baasha’s blockade at Ramah', 'She had taken silver from the temple treasury', 'She had abandoned Jerusalem to settle in Tirzah'], 13),
    blank(3, 'and Asa cut down her image and burned it at the brook _____.', 'Kidron', 13),
    word(1, 'For whom had Maacah’s image been made?', 'Asherah', 13, ["Ashe'rah"]),
    tf(2, 'Asa cut down Maacah’s image and burned it at the brook Kidron.', true, 13),
    mc(3, 'What complete action did Asa take against Maacah and her image?', ['He removed her as queen mother, cut down the image, and burned it at Kidron', 'He exiled her to Damascus and sold the image to Ben-hadad', 'He appointed her as a priestess and moved the image to Ramah', 'He removed her from office but preserved the image in Jerusalem'], 13),

    mc(1, 'What did Asa fail to take away?', ['The high places', 'The idols', 'The cult prostitutes', 'Maacah’s image'], 14),
    blank(2, 'Nevertheless the heart of Asa was wholly _____ to the LORD all his days.', 'true', 14),
    sa(2, 'For how long was Asa’s heart wholly true?', 'all his days', 14),
    tf(3, 'The high places were taken away during Asa’s reign.', false, 14, 'The high places were not taken away.'),

    mc(2, 'What did Asa bring into the LORD’s house?', ['His father’s votive gifts and his own votive gifts', 'Maacah’s Asherah image after taking it from Kidron', 'The stones and timber removed from Baasha’s Ramah', 'The weapons captured from Baasha’s army at Gibbethon'], 15),
    blank(3, 'silver, and gold, and _____.', 'vessels', 15),
    sa(1, 'What kind of gifts did Asa bring?', 'votive gifts', 15),
    tf(2, 'Asa brought both his father’s gifts and his own into the LORD’s house.', true, 15),

    mc(1, 'Who was king of Israel during Asa’s continuing war?', ['Baasha', 'Nadab', 'Jeroboam', 'Ben-hadad'], 16),
    blank(2, 'And there was war between Asa and _____ king of Israel all their days.', 'Ba’asha', 16, ['Baasha']),
    sa(2, 'How long did the war between Asa and Baasha continue?', 'all their days', 16),
    tf(3, 'Asa and Baasha maintained a lasting peace.', false, 16, 'There was war between them all their days.'),

    mc(2, 'Why did Baasha build Ramah?', ['To prevent anyone from going out from or coming in to Asa', 'To defend Judah’s southern border from an Egyptian attack', 'To transfer Israel’s royal treasury from Tirzah to Ramah', 'To prepare a fortified base for an attack against Damascus'], 17),
    blank(3, 'Ba’asha king of Israel went up against Judah, and built _____.', 'Ramah', 17),
    word(1, 'Against which kingdom did Baasha go up?', 'Judah', 17),
    tf(2, 'Baasha built Ramah to make travel to and from Asa easier.', false, 17, 'He built it to permit no one to go out or come in to Asa.'),

    mc(2, 'To whom did Asa send the remaining temple and palace treasure?', ['Ben-hadad king of Syria', 'Baasha king of Israel', 'The king of Egypt', 'Nadab son of Jeroboam'], 18),
    blank(3, 'and King Asa sent them to Ben-ha’dad the son of _____', 'Tabrim’mon', 18, ['Tabrimmon']),
    word(1, 'In which city did Ben-hadad live?', 'Damascus', 18),
    tf(2, 'Asa sent only treasure from his own house, leaving the LORD’s house untouched.', false, 18, 'He took the silver and gold left in both treasuries.'),
    mc(3, 'What resources did Asa use to seek Ben-hadad’s help?', ['Silver and gold from the temple and palace treasuries', 'Stones and timber that Baasha had gathered at Ramah', 'Only the votive vessels that Asa’s father had dedicated', 'The fortified cities of Benjamin as a territorial payment'], 18),

    mc(1, 'What did Asa ask Ben-hadad to break?', ['His league with Baasha', 'The walls of Ramah', 'His alliance with Egypt', 'The gates of Damascus'], 19),
    blank(2, 'behold, I am sending to you a present of silver and _____', 'gold', 19),
    sa(2, 'What did Asa want Baasha to do?', 'withdraw from him', 19, ['withdraw', 'withdraw from me']),
    tf(3, 'Asa asked Ben-hadad to strengthen his league with Baasha.', false, 19, 'He asked Ben-hadad to break that league.'),

    mc(2, 'Which city was among those Ben-hadad conquered?', ['Dan', 'Jerusalem', 'Ramah', 'Tirzah'], 20),
    blank(3, 'and all Chin’neroth, with all the land of _____.', 'Naph’tali', 20, ['Naphtali']),
    word(1, 'Who sent commanders against Israel’s cities?', 'Ben-hadad', 20, ["Ben-ha'dad"]),
    tf(2, 'Ben-hadad refused to listen to Asa.', false, 20, 'He listened and sent his commanders against Israel’s cities.'),

    mc(1, 'What did Baasha stop doing after hearing of the attacks?', ['Building Ramah', 'Besieging Gibbethon', 'Fighting in Dan', 'Ruling Israel'], 21),
    blank(2, 'he stopped building Ramah, and he dwelt in _____.', 'Tirzah', 21),
    word(2, 'Where did Baasha dwell?', 'Tirzah', 21),
    tf(3, 'Baasha continued building Ramah after Ben-hadad’s campaign.', false, 21, 'He stopped building Ramah.'),

    mc(2, 'What did Asa have all Judah carry away from Ramah?', ['Its stones and timber', 'Its gold shields', 'Its idols and pillars', 'Its food and livestock'], 22),
    blank(3, 'Then King Asa made a _____ to all Judah, none was exempt', 'proclamation', 22),
    sa(1, 'Which two cities did Asa build with Ramah’s materials?', 'Geba and Mizpah', 22),
    tf(2, 'Some people in Judah were exempt from Asa’s proclamation.', false, 22, 'None was exempt.'),

    mc(1, 'What illness troubled Asa in his old age?', ['A disease in his feet', 'Blindness', 'Leprosy', 'A disease in his hands'], 23),
    blank(2, 'But in his old age he was diseased in his _____.', 'feet', 23),
    sa(2, 'When did Asa’s disease occur?', 'in his old age', 23, ['old age']),
    tf(3, 'The account says Asa was diseased in his hands.', false, 23, 'He was diseased in his feet.'),
    mc(3, 'What physical condition affected Asa in his old age?', ['He became diseased in his feet', 'He became unable to see', 'He suffered a disease in his hands', 'He became unable to walk after a battle wound'], 23),

    mc(1, 'Who succeeded Asa?', ['Jehoshaphat his son', 'Baasha', 'Nadab', 'Abijam'], 24),
    blank(3, 'and was buried with his fathers in the city of _____ his father', 'David', 24),
    sa(1, 'Where was Asa buried?', 'the city of David', 24, ['city of David']),
    tf(2, 'Jehoshaphat reigned after Asa.', true, 24),

    mc(2, 'When did Nadab begin to reign over Israel?', ['Asa’s second year', 'Asa’s third year', 'Jeroboam’s eighteenth year', 'Rehoboam’s fifth year'], 25),
    blank(3, 'and he reigned over Israel _____ years.', 'two', 25, ['2']),
    word(1, 'Whose son was Nadab?', 'Jeroboam’s', 25, ['Jeroboam']),
    tf(2, 'Nadab reigned over Israel for twenty years.', false, 25, 'He reigned for two years.'),

    mc(1, 'Whose sinful way did Nadab follow?', ['His father’s', 'David’s', 'Asa’s', 'Ben-hadad’s'], 26),
    blank(2, 'He did what was _____ in the sight of the LORD', 'evil', 26),
    word(2, 'Whom had Nadab’s father caused to sin?', 'Israel', 26),
    tf(3, 'Nadab did what was right in the LORD’s sight.', false, 26, 'He did evil and walked in his father’s sinful way.'),

    mc(1, 'Who conspired against Nadab?', ['Baasha son of Ahijah', 'Ben-hadad son of Tabrimmon', 'Asa son of Abijam', 'Jehoshaphat son of Asa'], 27),
    blank(3, 'and Ba’asha struck him down at _____.', 'Gib’bethon', 27, ['Gibbethon']),
    word(1, 'To which tribe’s house did Baasha belong?', 'Issachar', 27, ["Is'sachar"]),
    tf(2, 'Nadab and Israel were laying siege to Gibbethon when Baasha struck him.', true, 27),
    mc(3, 'Which description correctly identifies Nadab’s killer?', ['Baasha son of Ahijah of Issachar', 'Ben-hadad of Damascus', 'Jehoshaphat son of Asa', 'Shishak king of Egypt'], 27),

    mc(1, 'In which year of Asa did Baasha kill Nadab?', ['The third year', 'The second year', 'The twentieth year', 'The eighteenth year'], 28),
    blank(2, 'So Ba’asha _____ him in the third year of Asa king of Judah', 'killed', 28),
    word(2, 'Who reigned in Nadab’s place?', 'Baasha', 28, ["Ba'asha"]),
    tf(3, 'Baasha killed Nadab in Asa’s second year.', false, 28, 'He killed him in Asa’s third year.'),

    mc(2, 'What did Baasha do as soon as he became king?', ['Killed all the house of Jeroboam', 'Made peace with Judah', 'Rebuilt Gibbethon', 'Returned the throne to Nadab’s brother'], 29),
    blank(3, 'he left to the house of Jerobo’am not one that _____.', 'breathed', 29),
    sa(1, 'Through which servant had the LORD spoken this outcome?', 'Ahijah the Shilonite', 29, ['Ahijah', "Ahi'jah the Shilonite"]),
    tf(2, 'Baasha spared part of Jeroboam’s house.', false, 29, 'He left not one that breathed.'),

    mc(1, 'What had Jeroboam caused Israel to do?', ['Sin', 'Build Ramah', 'Fight Syria', 'Serve Asa'], 30),
    blank(2, 'and because of the _____ to which he provoked the LORD', 'anger', 30),
    sa(2, 'Whom did Jeroboam provoke?', 'the LORD, the God of Israel', 30, ['the LORD', 'LORD']),
    tf(3, 'The destruction of Jeroboam’s house was unrelated to his sins.', false, 30, 'It came because of his sins and the anger he provoked.'),

    mc(1, 'Where were Nadab’s remaining acts recorded?', ['The Chronicles of the Kings of Israel', 'The Chronicles of the Kings of Judah', 'The records of Gibbethon', 'The book of Baasha'], 31),
    blank(3, 'Now the rest of the _____ of Nadab, and all that he did', 'acts', 31),
    word(1, 'Which kingdom’s chronicles recorded Nadab?', 'Israel', 31),
    tf(2, 'Nadab’s acts were written in Judah’s royal chronicles.', false, 31, 'They were written in the Book of the Chronicles of the Kings of Israel.'),

    mc(1, 'What continued between Asa and Baasha?', ['War', 'Peace', 'Trade', 'A family alliance'], 32),
    blank(2, 'And there was _____ between Asa and Ba’asha king of Israel all their days.', 'war', 32),
    sa(2, 'How long did their conflict continue?', 'all their days', 32),
    tf(3, 'Asa and Baasha were at peace throughout their reigns.', false, 32, 'There was war between them all their days.'),

    mc(2, 'How long did Baasha reign over Israel?', ['Twenty-four years', 'Forty-one years', 'Three years', 'Two years'], 33),
    blank(3, 'Ba’asha the son of Ahi’jah began to reign over all Israel at _____.', 'Tirzah', 33),
    sa(1, 'In which year of Asa did Baasha begin to reign?', 'the third year', 33, ['third', '3rd']),
    tf(2, 'Baasha reigned at Tirzah for twenty-four years.', true, 33),

    mc(1, 'In whose way did Baasha walk?', ['Jeroboam’s', 'David’s', 'Asa’s', 'Nadab’s'], 34),
    blank(2, 'and walked in the way of _____ and in his sin which he made Israel to sin.', 'Jerobo’am', 34, ['Jeroboam']),
    word(2, 'Whom did Jeroboam’s sin lead into sin?', 'Israel', 34),
    tf(3, 'Baasha rejected Jeroboam’s sinful example.', false, 34, 'He walked in Jeroboam’s way and sin.'),
  ],
}

export default bank
