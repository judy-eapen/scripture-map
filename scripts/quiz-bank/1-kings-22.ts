import { mc, blank, word, tf, type ChapterBank, sa } from './types'

const bank: ChapterBank = {
  book: '1 Kings', chapter: 22, tag: 'quiz-v2-1kings-22', rows: [
    mc(1, 'How long did Syria and Israel remain without war?', ['Three years', 'Two years', 'Seven years', 'Forty years'], 1),
    blank(1, 'For _____ years Syria and Israel continued without war.', 'three', 1, ['3']),
    sa(3, 'Which two nations were at peace?', 'Syria and Israel', 1),
    tf(1, 'Syria and Israel continued for three years without war.', true, 1),

    mc(1, 'Who came down to visit the king of Israel in the third year?', ['Jehoshaphat king of Judah', 'Ben-hadad king of Syria', 'Micaiah son of Imlah', 'Zedekiah son of Chenaanah'], 2),
    word(2, 'Of which kingdom was Jehoshaphat king?', 'Judah', 2),
    tf(3, 'Jehoshaphat came down to the king of Israel in the third year.', true, 2),

    mc(1, 'Which city did Israel’s king say belonged to Israel?', ['Ramoth-gilead', 'Samaria', 'Damascus', 'Jezreel'], 3),
    blank(3, 'and we keep quiet and do not _____ it out of the hand of the king of Syria?', 'take', 3),
    sa(1, 'Who held Ramoth-gilead?', 'the king of Syria', 3, ['Syria']),
    tf(2, 'Israel’s king said Ramoth-gilead belonged to Israel and questioned why they had not taken it from Syria.', true, 3),

    mc(1, 'What did Israel’s king ask Jehoshaphat to do?', ['Join him in battle at Ramoth-gilead', 'Give him Jerusalem', 'Consult Micaiah alone', 'Fight against Israel'], 4),
    blank(2, 'I am as you are, my people as your people, my _____ as your horses.', 'horses', 4),
    sa(2, 'How did Jehoshaphat describe his people?', 'as your people', 4, ['like the king of Israel’s people']),
    tf(3, 'Jehoshaphat said that he, his people, and his horses were as the king of Israel’s.', true, 4),

    mc(1, 'What did Jehoshaphat ask Ahab to do first?', ['Inquire for the word of the LORD', 'Muster the army', 'Consult the king of Syria', 'Disguise himself'], 5),
    blank(3, 'Inquire _____ for the word of the LORD.', 'first', 5),
    word(1, 'Whose word were they to seek?', 'LORD', 5, ['the LORD', 'the LORD’s', "LORD's"]),
    tf(2, 'Jehoshaphat wanted divine counsel before battle.', true, 5),
    mc(3, 'Before agreeing to battle, what priority did Jehoshaphat state?', ['First inquire for the LORD’s word', 'First appoint thirty-two captains', 'First imprison Micaiah', 'First disguise both kings'], 5),

    mc(1, 'About how many prophets did Israel’s king gather?', ['Four hundred', 'Four hundred and fifty', 'One hundred', 'Thirty-two'], 6),
    blank(2, 'Go up; for the Lord will _____ it into the hand of the king.', 'give', 6),
    word(2, 'What place did the king ask about attacking?', 'Ramoth-gilead', 6),
    tf(3, 'The gathered prophets told the king to go up and promised that Ramoth-gilead would be given into his hand.', true, 6),

    mc(1, 'What did Jehoshaphat ask for after hearing the prophets?', ['Another prophet of the LORD', 'More soldiers', 'A Syrian messenger', 'A new king'], 7),
    blank(3, 'Is there not here _____ prophet of the LORD of whom we may inquire?', 'another', 7),
    word(1, 'Who requested another prophet?', 'Jehoshaphat', 7, ["Jehosh'aphat"]),
    tf(2, 'Jehoshaphat asked whether another prophet of the LORD was available for inquiry.', true, 7),

    mc(1, 'Why did Ahab say he hated Micaiah?', ['Micaiah never prophesied good concerning him, but evil', 'Micaiah openly supported Syria’s claim to Ramoth-gilead', 'Micaiah refused to speak any message in the LORD’s name', 'Micaiah served Jehoshaphat and would answer only Judah’s king'], 8),
    blank(3, 'Micai’ah the son of _____.', 'Imlah', 8),
    word(1, 'Which prophet did Ahab name?', 'Micaiah', 8, ["Micai'ah"]),
    tf(2, 'Ahab said Micaiah never prophesied good concerning him, but evil.', true, 8),
    mc(3, 'What complaint did Ahab make about Micaiah son of Imlah?', ['He never prophesied good concerning Ahab, but evil', 'He had destroyed the iron horns made by Zedekiah', 'He served among the prophets who ate at Jezebel’s table', 'He refused to accompany the kings to Ramoth-gilead'], 8),

    mc(1, 'Whom did the king order an officer to bring?', ['Micaiah son of Imlah', 'Zedekiah son of Chenaanah', 'Amon', 'Joash'], 9),
    blank(2, 'Bring _____ Micai’ah the son of Imlah.', 'quickly', 9),
    sa(2, 'Who was sent to summon Micaiah?', 'an officer', 9),
    tf(3, 'The king told an officer to bring Micaiah son of Imlah quickly.', true, 9),

    mc(2, 'Where were the kings of Israel and Judah seated while the prophets spoke?', ['On thrones at Samaria’s gate entrance on the threshing floor', 'On seats inside the temple court in Jerusalem', 'On military thrones before the walls of Ramoth-gilead', 'Together inside Ahab’s chariot outside the city gate'], 10),
    blank(3, 'were sitting on their thrones, arrayed in their _____.', 'robes', 10),
    word(1, 'What were the prophets doing before the kings?', 'prophesying', 10),
    tf(2, 'The two kings sat on their thrones arrayed in robes while the prophets prophesied.', true, 10),

    mc(1, 'Who made horns of iron?', ['Zedekiah son of Chenaanah', 'Micaiah son of Imlah', 'Ahab', 'Jehoshaphat'], 11),
    blank(3, 'With these you shall _____ the Syrians until they are destroyed.', 'push', 11),
    word(1, 'What material were Zedekiah’s horns?', 'iron', 11),
    tf(2, 'Zedekiah made horns of iron as a sign that Ahab would push the Syrians.', true, 11),
    mc(3, 'What symbolic object accompanied Zedekiah’s promise of victory?', ['Horns of iron', 'A broken bow', 'A lying spirit', 'A blood-stained chariot'], 11),

    mc(1, 'What did all the prophets tell Ahab?', ['Go to Ramoth-gilead and triumph', 'Remain in Samaria', 'Release Micaiah', 'Make peace with Syria'], 12),
    blank(2, 'the LORD will give it into the _____ of the king.', 'hand', 12),
    word(2, 'What outcome did they promise?', 'triumph', 12, ['victory']),
    tf(3, 'All the prophets told Ahab to go to Ramoth-gilead and triumph.', true, 12),

    mc(2, 'What did the messenger urge Micaiah to do?', ['Agree with the favorable prophets', 'Condemn Jehoshaphat', 'Refuse to speak', 'Flee Samaria'], 13),
    blank(3, 'let your word be like the word of _____ of them', 'one', 13),
    word(1, 'How were the other prophets speaking?', 'favorably', 13),
    tf(2, 'The messenger urged Micaiah to agree with the prophets’ favorable message.', true, 13),

    mc(1, 'What did Micaiah promise to speak?', ['Whatever the LORD said to him', 'Whatever Ahab wanted', 'The other prophets’ words', 'Nothing at all'], 14),
    blank(2, 'what the LORD says to me, that I will _____.', 'speak', 14),
    word(2, 'By whose life did Micaiah swear?', 'LORD', 14, ['the LORD', 'the LORD’s', "LORD's"]),
    tf(3, 'Micaiah swore that he would speak whatever the LORD said to him.', true, 14),

    mc(1, 'What did Micaiah initially tell the king?', ['Go up and triumph', 'Forbear from battle', 'Disguise yourself', 'Imprison the prophets'], 15),
    blank(3, 'the LORD will give it into the hand of the _____.', 'king', 15),
    word(1, 'Where was the proposed battle?', 'Ramoth-gilead', 15),
    tf(2, 'Micaiah’s first answer sounded like the other prophets’ prediction.', true, 15),

    mc(1, 'What did Ahab demand from Micaiah after his first answer?', ['That he speak nothing but the truth in the LORD’s name', 'That he repeat a favorable prophecy like all the others', 'That he remain silent and return immediately to prison', 'That he swear an oath of loyalty to the king of Syria'], 16),
    blank(2, 'How many times shall I _____ you', 'adjure', 16),
    word(2, 'In whose name was Micaiah to speak truth?', 'LORD', 16, ['the LORD', 'the LORD’s', "LORD's"]),
    tf(3, 'Ahab adjured Micaiah to tell him nothing but the truth in the LORD’s name.', true, 16),

    mc(1, 'How did Micaiah see Israel in his vision?', ['Scattered upon the mountains like sheep without a shepherd', 'Triumphant over Syria under the leadership of Ahab', 'Gathered safely around Ahab at the gate of Samaria', 'Protected within Samaria while the Syrians fled home'], 17),
    blank(3, 'as sheep that have no _____.', 'shepherd', 17),
    sa(1, 'What were the people told to do?', 'return home in peace', 17, ['return to his home', 'go home']),
    tf(2, 'Micaiah saw Israel scattered like sheep without a shepherd and heard that they had no master.', true, 17),

    mc(1, 'How did Ahab interpret Micaiah’s vision?', ['As another evil prophecy about him', 'As a promise of victory', 'As counsel to free Micaiah', 'As praise for his leadership'], 18),
    blank(2, 'he would not prophesy good concerning me, but _____.', 'evil', 18),
    word(2, 'To whom did Ahab complain?', 'Jehoshaphat', 18, ["Jehosh'aphat"]),
    tf(3, 'Ahab said Micaiah’s vision confirmed that the prophet spoke evil concerning him rather than good.', true, 18),

    mc(1, 'Where did Micaiah see the LORD?', ['Sitting on his throne', 'Standing at Ramoth-gilead', 'Inside Samaria’s gate', 'In Ahab’s chariot'], 19),
    blank(3, 'and all the host of _____ standing beside him', 'heaven', 19),
    sa(1, 'On which sides did heaven’s host stand?', 'right and left', 19, ['his right hand and his left']),
    tf(2, 'Micaiah’s vision showed the LORD surrounded by the host of heaven.', true, 19),

    mc(1, 'What outcome did the LORD ask about bringing upon Ahab?', ['That he go up and fall at Ramoth-gilead', 'That he return home in peace', 'That he release Micaiah', 'That he conquer Syria'], 20),
    blank(2, 'Who will _____ Ahab, that he may go up and fall at Ramoth-gilead?', 'entice', 20),
    word(2, 'Where would Ahab fall?', 'Ramoth-gilead', 20),
    tf(3, 'Members of the heavenly host proposed different means of enticing Ahab.', true, 20),

    mc(1, 'Who volunteered to entice Ahab?', ['A spirit', 'Micaiah', 'Zedekiah', 'Jehoshaphat'], 21),
    blank(3, 'Then a spirit came _____ and stood before the LORD', 'forward', 21),
    sa(1, 'What did the spirit say?', 'I will entice him', 21, ['I will entice Ahab']),
    tf(2, 'A spirit came forward and volunteered to entice Ahab.', true, 21),
    mc(3, 'In Micaiah’s vision, who stepped forward before the LORD?', ['A spirit volunteering to entice Ahab', 'A Syrian captain', 'Zedekiah with iron horns', 'Jehoshaphat'], 21),

    mc(1, 'How did the spirit propose to entice Ahab?', ['By becoming a lying spirit in the mouths of all Ahab’s prophets', 'By appearing to Ahab in a dream promising victory at Ramoth-gilead', 'By hiding Micaiah so that the king could hear no opposing prophecy', 'By defeating the Syrians before Israel’s army reached the battlefield'], 22),
    blank(3, 'I will go forth, and will be a _____ spirit in the mouth of all his prophets.', 'lying', 22),
    sa(1, 'In whose mouths would the spirit operate?', 'all Ahab’s prophets', 22, ['all his prophets', 'the prophets']),
    tf(2, 'The LORD said the spirit would succeed in enticing Ahab.', true, 22),
    mc(3, 'What role did the spirit say it would take to entice Ahab?', ['A lying spirit in the mouths of all his prophets', 'A spirit of courage placed within Ahab before battle', 'A silent spirit preventing Micaiah from speaking to the king', 'A spirit of peace sent among the rulers of Syria'], 22),

    mc(2, 'What did Micaiah say the LORD had placed in the prophets’ mouths?', ['A lying spirit', 'Words of peace', 'A song of victory', 'Silence'], 23),
    blank(3, 'the LORD has spoken _____ concerning you.', 'evil', 23),
    sa(1, 'How many of Ahab’s prophets were affected?', 'all of them', 23, ['all these prophets']),
    tf(2, 'Micaiah said a lying spirit had been placed in the mouths of all Ahab’s prophets.', true, 23),

    mc(1, 'What did Zedekiah do to Micaiah?', ['Struck him on the cheek', 'Imprisoned him', 'Made him iron horns', 'Released him'], 24),
    blank(2, 'How did the _____ of the LORD go from me to speak to you?', 'Spirit', 24),
    word(2, 'Whose son was Zedekiah?', 'Chenaanah’s', 24, ['Chenaanah']),
    tf(3, 'Zedekiah struck Micaiah on the cheek and challenged his claim to speak by the Spirit of the LORD.', true, 24),

    mc(1, 'When would Zedekiah recognize Micaiah’s truth?', ['When he hid in an inner chamber', 'When Ahab returned victorious', 'When the prophets were released', 'When Syria surrendered'], 25),
    blank(3, 'when you go into an inner chamber to _____ yourself.', 'hide', 25),
    sa(1, 'Where would Zedekiah go?', 'an inner chamber', 25),
    tf(2, 'Micaiah said Zedekiah would publicly celebrate.', false, 25, 'He would hide in an inner chamber.'),

    mc(1, 'To whom did Ahab order that Micaiah be taken?', ['Amon the city governor and Joash the king’s son', 'Zedekiah the prophet and Jehoshaphat king of Judah', 'The king of Syria and his commander at Ramoth-gilead', 'The thirty-two captains who commanded Syria’s chariots'], 26),
    blank(2, 'take him back to Amon the _____ of the city', 'governor', 26),
    sa(2, 'What was Joash’s relationship to the king?', 'his son', 26, ['the king’s son']),
    tf(3, 'Ahab ordered Micaiah taken to Jehoshaphat.', false, 26, 'He ordered him taken to Amon and Joash.'),

    mc(2, 'What treatment did Ahab order for Micaiah?', ['Prison with scant bread and water', 'Freedom with a reward', 'Exile to Syria', 'Service in the army'], 27),
    blank(3, 'feed him with _____ fare of bread and water', 'scant', 27),
    sa(1, 'Until when was Micaiah to remain confined?', 'until Ahab came in peace', 27, ['until I come in peace']),
    tf(2, 'Micaiah was to receive plentiful food in prison.', false, 27, 'He was to receive scant bread and water.'),

    mc(1, 'What would prove the LORD had not spoken by Micaiah?', ['Ahab returning in peace', 'Israel losing Ramoth-gilead', 'Micaiah remaining in prison', 'Jehoshaphat returning home'], 28),
    blank(2, 'And Micai\'ah said, "If you return in peace, the LORD has not spoken by me." And he said, "Hear, all you _____!"', 'peoples', 28),
    sa(2, 'What condition did Micaiah state?', 'If you return in peace', 28, ['Ahab returning in peace']),
    tf(3, 'Micaiah withdrew his prophecy before the peoples.', false, 28, 'He publicly tied its truth to Ahab’s failure to return in peace.'),

    mc(1, 'Who went up to Ramoth-gilead?', ['The kings of Israel and Judah', 'Micaiah and Zedekiah', 'Ahab alone', 'The Syrian captains'], 29),
    blank(3, 'So the king of Israel and Jehosh\'aphat the king of Judah went up to _____-gilead.', 'Ramoth', 29, ['Ramoth-gilead']),
    word(1, 'Which king of Judah joined the battle?', 'Jehoshaphat', 29, ["Jehosh'aphat"]),
    tf(2, 'The kings abandoned the campaign after Micaiah’s warning.', false, 29, 'They went up to Ramoth-gilead.'),

    mc(1, 'How did Ahab plan to enter battle?', ['In disguise', 'In royal robes', 'On foot', 'Under a flag of peace'], 30),
    blank(2, 'And the king of Israel said to Jehosh\'aphat, "I will disguise myself and go into battle, but you wear your _____." And the king of Israel disguised himself and went into battle.', 'robes', 30),
    word(2, 'Who continued wearing royal robes?', 'Jehoshaphat', 30),
    tf(3, 'Both kings disguised themselves.', false, 30, 'Ahab disguised himself while Jehoshaphat wore his robes.'),

    mc(2, 'Whom were Syria’s chariot captains ordered to fight?', ['Only the king of Israel', 'Only Jehoshaphat', 'Every soldier equally', 'Micaiah'], 31),
    blank(3, 'Fight with neither small nor great, but _____ with the king of Israel.', 'only', 31),
    word(1, 'How many chariot captains received the order?', 'thirty-two', 31, ['32']),
    tf(2, 'The Syrian king ordered the captains to fight everyone they saw.', false, 31, 'They were to focus only on Israel’s king.'),

    mc(1, 'Whom did the captains mistake for Israel’s king?', ['Jehoshaphat', 'Micaiah', 'Zedekiah', 'Amon'], 32),
    sa(2, 'What did Jehoshaphat do when surrounded?', 'cried out', 32),
    tf(3, 'The captains immediately recognized Jehoshaphat as Judah’s king.', false, 32, 'They first thought he was Israel’s king.'),

    mc(1, 'Why did the captains stop pursuing Jehoshaphat?', ['They saw he was not Israel’s king', 'He defeated them', 'Ahab ordered them away', 'The battle ended'], 33),
    blank(3, 'they turned _____ from pursuing him.', 'back', 33),
    sa(1, 'Who stopped pursuing Jehoshaphat?', 'the chariot captains', 33, ['captains']),
    tf(2, 'The captains continued pursuing him after recognizing him.', false, 33, 'They turned back.'),

    mc(1, 'How was Ahab wounded?', ['A man drew a bow at a venture and struck him between pieces of armor', 'A Syrian captain recognized the disguised king and struck him with a spear', 'Jehoshaphat mistook him for a Syrian soldier and struck him in battle', 'He fell from his chariot when the horses turned away from the Syrians'], 34),
    blank(3, 'struck the king of Israel between the scale armor and the _____.', 'breastplate', 34),
    sa(1, 'What weapon wounded Ahab?', 'a bow', 34, ['arrow']),
    tf(2, 'The archer deliberately aimed at the disguised king.', false, 34, 'The man drew his bow at a venture.'),
    mc(3, 'Despite Ahab’s disguise, how was he struck?', ['An arrow shot at a venture hit between his scale armor and breastplate', 'A Syrian captain recognized his face and deliberately aimed a spear', 'His chariot overturned while the army retreated from Ramoth-gilead', 'His driver betrayed him by revealing his identity to the captains'], 34),

    mc(1, 'Until when was wounded Ahab propped in his chariot?', ['Until evening', 'Until noon', 'Until the next morning', 'Until sunset the next day'], 35),
    blank(2, 'and the blood of the wound flowed into the _____ of the chariot.', 'bottom', 35),
    sa(2, 'Which direction did Ahab face?', 'toward the Syrians', 35, ['the Syrians']),
    tf(3, 'Ahab recovered before evening.', false, 35, 'He died at evening.'),

    mc(1, 'What cry went through the army around sunset?', ['Every man to his city and country', 'Victory belongs to Israel', 'Capture the Syrian king', 'Bring Micaiah'], 36),
    blank(3, 'Every man to his _____, and every man to his country!', 'city', 36),
    sa(1, 'When did the cry go out?', 'about sunset', 36, ['sunset']),
    tf(2, 'The army was ordered to remain at Ramoth-gilead.', false, 36, 'The cry told every man to return home.'),

    mc(1, 'Where was Ahab buried?', ['Samaria', 'Ramoth-gilead', 'Jezreel', 'Jerusalem'], 37),
    blank(2, 'So the king died, and was brought to _____.', 'Sama’ria', 37, ['Samaria']),
    sa(2, 'What happened to Israel’s king?', 'he died', 37, ['died']),
    tf(3, 'Ahab was buried at Ramoth-gilead.', false, 37, 'He was buried in Samaria.'),

    mc(1, 'Where did dogs lick up Ahab’s blood?', ['By the pool of Samaria', 'At Ramoth-gilead', 'In Naboth’s vineyard', 'At Jezreel’s gate'], 38),
    blank(3, 'and the dogs licked up his _____', 'blood', 38),
    sa(1, 'What was washed beside the pool?', 'the chariot', 38),
    tf(2, 'The event fulfilled the LORD’s spoken word.', true, 38),
    mc(3, 'What happened when Ahab’s chariot was washed by the pool of Samaria?', ['Dogs licked up his blood, fulfilling the LORD’s spoken word', 'Birds carried away his blood from the field at Ramoth-gilead', 'His blood was poured onto Naboth’s vineyard outside Jezreel', 'The blood was gathered and buried with Ahab in his tomb'], 38),

    mc(1, 'What notable house had Ahab built?', ['An ivory house', 'A cedar temple', 'A house of iron', 'A golden palace'], 39),
    blank(2, 'and all the _____ that he built', 'cities', 39),
    sa(2, 'Where were Ahab’s other acts recorded?', 'the Chronicles of the Kings of Israel', 39, ['Israel’s chronicles']),
    tf(3, 'The record mentions no building projects by Ahab.', false, 39, 'It mentions his ivory house and cities.'),

    mc(1, 'Who succeeded Ahab?', ['Ahaziah his son', 'Jehoshaphat', 'Micaiah', 'Jehoram'], 40),
    blank(3, 'So Ahab slept with his _____.', 'fathers', 40),
    word(1, 'Whose son was Ahaziah?', 'Ahab’s', 40, ['Ahab']),
    tf(2, 'Jehoshaphat succeeded Ahab as king of Israel.', false, 40, 'Ahaziah reigned in his stead.'),

    mc(1, 'In which year of Ahab did Jehoshaphat begin to reign?', ['The fourth year', 'The seventeenth year', 'The twenty-fifth year', 'The third year'], 41),
    blank(2, 'Jehosh’aphat the son of _____ began to reign over Judah', 'Asa', 41),
    word(2, 'Over which kingdom did Jehoshaphat reign?', 'Judah', 41),
    tf(3, 'Jehoshaphat began reigning in Ahab’s fourteenth year.', false, 41, 'It was Ahab’s fourth year.'),

    mc(2, 'How old was Jehoshaphat when he began to reign?', ['Thirty-five', 'Twenty-five', 'Forty', 'Seventeen'], 42),
    blank(3, 'and he reigned _____-five years in Jerusalem.', 'twenty', 42, ['25', 'twenty-five']),
    sa(1, 'Who was Jehoshaphat’s mother?', 'Azubah daughter of Shilhi', 42, ['Azubah', "Azu'bah"]),
    tf(2, 'Jehoshaphat began reigning at age twenty-five.', false, 42, 'He was thirty-five years old.'),

    mc(1, 'Whose righteous way did Jehoshaphat follow?', ['Asa his father’s', 'Ahab’s', 'Jeroboam’s', 'Micaiah’s'], 43),
    blank(2, 'yet the high places were not taken _____.', 'away', 43),
    sa(2, 'What did the people still do at high places?', 'sacrificed and burned incense', 43),
    tf(3, 'Jehoshaphat removed every high place.', false, 43, 'The high places remained.'),

    mc(1, 'What relationship did Jehoshaphat establish with Israel’s king?', ['Peace', 'Continual war', 'A tribute arrangement', 'No contact'], 44),
    blank(3, 'Jehosh’aphat also made _____ with the king of Israel.', 'peace', 44),
    sa(1, 'With whom did he make peace?', 'the king of Israel', 44),
    tf(2, 'Jehoshaphat remained at war with Israel.', false, 44, 'He made peace with its king.'),

    mc(1, 'Which aspects of Jehoshaphat’s reign were recorded?', ['His acts, might, and warfare', 'Only his age', 'Only his ships', 'Only his peace treaty'], 45),
    blank(2, 'and his _____ that he showed', 'might', 45),
    word(2, 'Which kingdom’s chronicles recorded him?', 'Judah', 45),
    tf(3, 'Jehoshaphat’s warfare was absent from the record.', false, 45, 'How he warred was among the recorded acts.'),

    mc(1, 'Whom did Jehoshaphat remove from the land?', ['The remaining male cult prostitutes', 'All Syrian captains', 'The prophets of the LORD', 'The people of Edom'], 46),
    blank(3, 'And the remnant of the male cult prostitutes who remained in the days of his father Asa, he _____ from the land.', 'exterminated', 46),
    word(1, 'During whose reign had the remnant remained?', 'Asa’s', 46, ['his father Asa’s']),
    tf(2, 'Jehoshaphat preserved the cult prostitutes.', false, 46, 'He exterminated the remnant from the land.'),

    mc(1, 'Who ruled Edom in the absence of a king?', ['A deputy', 'Jehoshaphat', 'Ahaziah', 'A Syrian captain'], 47),
    blank(2, 'There was no _____ in Edom', 'king', 47),
    sa(2, 'What office governed Edom?', 'a deputy', 47, ['deputy']),
    tf(3, 'Edom had its own king at this time.', false, 47, 'A deputy ruled because there was no king.'),

    mc(1, 'Why did Jehoshaphat’s ships fail to reach Ophir?', ['They were wrecked at Ezion-geber', 'Syria captured them', 'They lacked sailors', 'Ahaziah refused to help'], 48),
    blank(3, 'ships of Tarshish to go to Ophir for _____.', 'gold', 48),
    word(1, 'Where were the ships wrecked?', 'Ezion-geber', 48, ["E'zion-ge'ber"]),
    tf(2, 'The ships successfully returned with gold.', false, 48, 'They did not go because they were wrecked.'),

    mc(1, 'What did Ahaziah propose to Jehoshaphat?', ['Let their servants sail together', 'Give him the ships', 'Rebuild Ramoth-gilead', 'Make him king of Edom'], 49),
    blank(2, 'but Jehosh’aphat was not _____.', 'willing', 49),
    word(2, 'Who proposed combining the two kings’ servants on the ships?', 'Ahaziah', 49, ["Ahazi'ah"]),
    tf(3, 'Jehoshaphat accepted Ahaziah’s proposal.', false, 49, 'He was not willing.'),

    mc(1, 'Who succeeded Jehoshaphat?', ['Jehoram his son', 'Ahaziah', 'Ahab', 'Asa'], 50),
    blank(3, 'and was buried with his fathers in the city of _____ his father', 'David', 50),
    sa(1, 'Where was Jehoshaphat buried?', 'the city of David', 50, ['city of David']),
    tf(2, 'Jehoshaphat’s son Jehoram reigned after him.', true, 50),

    mc(2, 'When did Ahaziah begin to reign over Israel?', ['Jehoshaphat’s seventeenth year', 'Ahab’s fourth year', 'Jehoshaphat’s twenty-fifth year', 'The third year of peace'], 51),
    blank(3, 'and he reigned _____ years over Israel.', 'two', 51, ['2']),
    word(1, 'Where did Ahaziah reign?', 'Samaria', 51, ["Sama'ria"]),
    tf(2, 'Ahaziah reigned over Israel for seventeen years.', false, 51, 'He reigned two years.'),

    mc(1, 'Whose sinful ways did Ahaziah follow?', ['His father, mother, and Jeroboam', 'Asa and Jehoshaphat', 'Micaiah and Zedekiah', 'David and Solomon'], 52),
    blank(2, 'He did what was _____ in the sight of the LORD', 'evil', 52),
    word(2, 'Whom had Jeroboam made to sin?', 'Israel', 52),
    tf(3, 'Ahaziah did right in the LORD’s sight.', false, 52, 'He did evil and followed sinful examples.'),

    mc(1, 'Whom did Ahaziah serve and worship?', ['Baal', 'The LORD', 'The king of Syria', 'Micaiah'], 53),
    blank(3, 'and provoked the LORD, the God of Israel, to _____.', 'anger', 53),
    sa(1, 'Whose pattern did Ahaziah follow in provoking the LORD?', 'his father’s', 53, ['his father', 'Ahab’s']),
    tf(2, 'Ahaziah rejected Baal worship.', false, 53, 'He served and worshiped Baal.'),
  ],
}

export default bank
