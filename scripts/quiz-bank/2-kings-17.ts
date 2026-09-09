import { mc, blank, word, tf, type ChapterBank, sa } from './types'

const bank: ChapterBank = {
  book: '2 Kings', chapter: 17, tag: 'quiz-v2-2kings-17', rows: [
    mc(1, 'Who began ruling Israel in Ahaz’s twelfth year?', ['Hoshea son of Elah', 'Shalmaneser', 'Pekah', 'Hezekiah'], 1),
    blank(1, 'Hoshe’a the son of Elah began to reign in _____ over Israel', 'Sama’ria', 1, ['Samaria']),
    sa(3, 'How long did Hoshea reign?', 'nine years', 1, ['9 years']),
    tf(2, 'Hoshea ruled Judah from Jerusalem.', false, 1, 'Hoshea ruled Israel from Samaria for nine years.'),

    mc(2, 'How did Hoshea act in the LORD’s sight?', ['He did evil, but unlike the kings before him', 'He did what was right in the manner of David', 'He removed every idol from the northern kingdom', 'He fully restored Israel’s covenant faithfulness'], 2),
    blank(3, 'yet not as the kings of _____ who were before him.', 'Israel', 2),
    tf(2, 'Hoshea did evil in the sight of the LORD, but not as the kings of Israel who were before him.', true, 2),
    tf(1, 'Hoshea’s evil is qualified as unlike the kings before him.', true, 2),

    mc(1, 'Which Assyrian king came against Hoshea?', ['Shalmaneser', 'Tiglath-pileser', 'Sennacherib', 'Pul'], 3),
    blank(2, 'Hoshe’a became his _____, and paid him tribute.', 'vassal', 3),
    word(1, 'What did Hoshea pay Assyria?', 'tribute', 3),
    tf(3, 'Hoshea defeated Shalmaneser and ended Assyrian tribute.', false, 3, 'Hoshea became Shalmaneser’s vassal and paid him tribute.'),

    mc(1, 'With which Egyptian king did Hoshea communicate?', ['So', 'Pharaoh Neco', 'Shishak', 'Tirhakah'], 4),
    blank(2, 'the king of Assyria found _____ in Hoshe’a', 'treachery', 4),
    sa(1, 'What annual obligation did Hoshea stop paying?', 'tribute to Assyria', 4, ['tribute']),
    tf(3, 'Assyria’s king imprisoned Hoshea after discovering his treachery.', true, 4),

    mc(1, 'How long was Samaria besieged?', ['Three years', 'Nine years', 'One year', 'Seven years'], 5),
    blank(2, 'and for _____ years he besieged it.', 'three', 5, ['3']),
    sa(1, 'Who invaded all the land?', 'the king of Assyria', 5, ['Assyria’s king']),
    tf(3, 'The Assyrian invasion stopped before reaching Samaria.', false, 5, 'The king of Assyria invaded all the land, reached Samaria, and besieged it.'),

    mc(1, 'In which year of Hoshea did Samaria fall?', ['The ninth', 'The third', 'The twelfth', 'The seventeenth'], 6),
    blank(2, 'he carried the _____ away to Assyria', 'Israelites', 6),
    word(1, 'Which city did Assyria capture?', 'Samaria', 6, ['Sama’ria']),
    tf(2, 'The exiles were placed in Halah, on the Habor, and in cities of the Medes.', true, 6),
    mc(3, 'Where were the captured Israelites resettled?', ['Halah, Habor in Gozan, and Median cities', 'Only the cities of Babylon and Cuthah', 'The neighboring lands of Egypt and Ethiopia', 'The Syrian cities of Damascus and Kir'], 6),

    mc(1, 'Why did exile come upon Israel?', ['They sinned against the LORD and feared other gods', 'They lacked enough soldiers to defend the kingdom', 'The kingdom of Judah betrayed its northern neighbor', 'The Egyptian king refused to send promised assistance'], 7),
    blank(2, 'who had brought them up out of the land of _____.', 'Egypt', 7),
    sa(1, 'From whose hand had the LORD delivered Israel?', 'Pharaoh king of Egypt', 7, ['Pharaoh']),
    tf(3, 'Israel remained faithful to the God who brought them out of Egypt.', false, 7, 'They sinned against the LORD and feared other gods.'),

    mc(1, 'Whose customs did Israel follow?', ['The displaced nations and Israel’s kings', 'Moses together with King David', 'Only the ordained priests serving Judah', 'Only the customs established by Assyria'], 8),
    blank(2, 'walked in the _____ of the nations', 'customs', 8),
    word(1, 'Who had driven those nations out?', 'LORD', 8, ['the LORD']),
    tf(3, 'Israel’s kings had introduced corrupt customs.', true, 8),

    mc(1, 'What did Israel build throughout its towns?', ['High places', 'Schools', 'Palaces', 'City walls only'], 9),
    blank(2, 'things that were not _____.', 'right', 9),
    sa(1, 'How broadly were high places built?', 'from watchtower to fortified city', 9),
    tf(3, 'Israel avoided secret practices that opposed the LORD.', false, 9, 'The Israelites secretly did things against the LORD that were not right.'),

    mc(1, 'What did Israel set up on high hills?', ['Pillars and Asherim', 'Altars to the LORD only', 'Watchtowers', 'Bronze oxen'], 10),
    blank(2, 'pillars and _____ on every high hill', 'Ashe’rim', 10, ['Asherim']),
    sa(1, 'Where else were these objects placed?', 'under every green tree', 10),
    tf(3, 'Israel’s idolatrous objects were widely distributed.', true, 10),

    mc(1, 'What did Israel burn at the high places?', ['Incense', 'Royal records', 'Tribute', 'Weapons'], 11),
    blank(2, 'wicked things, _____ the LORD to anger', 'provoking', 11),
    sa(1, 'Whose behavior did Israel imitate?', 'the nations carried away before them', 11, ['the displaced nations']),
    tf(3, 'Their high-place worship was acceptable and did not provoke the LORD.', false, 11, 'They burned incense and did wicked things, provoking the LORD to anger.'),

    mc(1, 'What did Israel serve despite the LORD’s prohibition?', ['Idols', 'The prophets', 'The law', 'Judah'], 12),
    blank(2, 'and they _____ idols, of which the LORD had said to them, "You shall not do this."', 'served', 12),
    sa(1, 'What had the LORD said about this?', 'You shall not do this', 12),
    tf(3, 'Israel served idols the LORD had forbidden.', true, 12),

    mc(1, 'Through whom did the LORD warn Israel and Judah?', ['Every prophet and seer', 'Assyrian kings', 'Egyptian messengers', 'Only their priests'], 13),
    blank(2, 'Turn from your evil _____.', 'ways', 13),
    sa(1, 'What were the people commanded to keep?', 'the LORD’s commandments and statutes', 13, ['commandments and statutes']),
    tf(3, 'The prophets encouraged Israel and Judah to continue in their evil ways.', false, 13, 'The prophets told them to turn from evil and keep the LORD’s commandments and statutes.'),

    mc(1, 'How did Israel respond to the warnings?', ['They refused to listen and remained stubborn', 'They repented and returned to the covenant', 'They removed and destroyed every remaining idol', 'They left the northern kingdom and moved to Judah'], 14),
    blank(2, 'but were _____, as their fathers had been', 'stubborn', 14),
    sa(1, 'What did their fathers fail to do?', 'believe in the LORD', 14),
    tf(3, 'The people listened obediently to the prophets.', false, 14, 'They would not listen.'),

    mc(1, 'What happened as Israel pursued false idols?', ['They themselves became false', 'They became faithful', 'They defeated Assyria', 'They restored David’s throne'], 15),
    blank(2, 'They despised his _____, and his covenant that he made with their fathers, and the warnings which he gave them.', 'statutes', 15),
    sa(1, 'What agreement with their fathers did they reject?', 'the covenant', 15),
    tf(3, 'Israel rejected the practices of the surrounding nations.', false, 15, 'They followed the nations around them despite the LORD’s command not to do so.'),

    mc(1, 'Which images did Israel make?', ['Two molten calves and an Asherah', 'A bronze serpent only', 'Cherubim', 'A model altar'], 16),
    blank(2, 'worshiped all the host of _____.', 'heaven', 16),
    word(1, 'Which named god did they serve?', 'Baal', 16, ['Ba’al']),
    tf(3, 'Israel forsook all the LORD’s commandments.', true, 16),

    mc(1, 'What did Israel do with sons and daughters?', ['Burned them as offerings', 'Sent them to Judah', 'Made them priests of the LORD', 'Exiled them to Egypt'], 17),
    blank(2, 'used divination and _____.', 'sorcery', 17),
    sa(1, 'To what did Israel sell itself?', 'to do evil in the LORD’s sight', 17, ['doing evil']),
    tf(3, 'Divination, sorcery, and child sacrifice did not anger the LORD.', false, 17, 'These practices provoked the LORD to great anger.'),

    mc(1, 'What did the LORD do in anger?', ['Removed Israel from his sight', 'Destroyed Judah immediately', 'Restored Samaria', 'Made Hoshea king'], 18),
    blank(2, 'none was left but the tribe of _____ only.', 'Judah', 18),
    word(1, 'Which kingdom was removed?', 'Israel', 18),
    tf(3, 'Only Judah remained at this stage.', true, 18),

    tf(1, 'Judah kept the commandments of the LORD their God.', false, 19, 'Judah also did not keep them, but walked in the customs which Israel had introduced.'),
    blank(2, 'walked in the customs which _____ had introduced.', 'Israel', 19),
    word(1, 'Whose customs did Judah copy?', 'Israel’s', 19, ['Israel']),
    tf(3, 'Judah was untouched by Israel’s corrupt influence.', false, 19, 'Judah walked in customs Israel introduced.'),

    mc(1, 'What did the LORD do to Israel’s descendants?', ['Rejected and afflicted them', 'Made them rulers of Assyria', 'Settled them in Judah', 'Ignored them'], 20),
    blank(2, 'gave them into the hand of _____.', 'spoilers', 20),
    sa(1, 'How long did this judgment continue?', 'until he cast them out of his sight', 20),
    tf(3, 'Israel was afflicted before being cast from the LORD’s sight.', true, 20),

    mc(1, 'Whom did Israel make king after separation from David’s house?', ['Jeroboam son of Nebat', 'Hoshea', 'Shalmaneser', 'Ahaz'], 21),
    blank(2, 'made them commit great _____.', 'sin', 21),
    word(1, 'From whom did Jeroboam drive Israel away?', 'LORD', 21, ['the LORD']),
    tf(3, 'Jeroboam drew Israel back toward faithful worship of the LORD.', false, 21, 'He drove Israel from following the LORD and made them commit great sin.'),

    mc(1, 'Whose sins did Israel continue?', ['Jeroboam’s', 'David’s', 'Moses’', 'Hezekiah’s'], 22),
    blank(2, 'they did not _____ from them', 'depart', 22),
    sa(1, 'Who walked in those sins?', 'the people of Israel', 22, ['Israel']),
    tf(3, 'Israel abandoned Jeroboam’s pattern.', false, 22, 'They did not depart from it.'),

    mc(1, 'Where was Israel exiled?', ['Assyria', 'Egypt', 'Judah', 'Moab'], 23),
    blank(2, 'as he had spoken by all his servants the _____.', 'prophets', 23),
    sa(1, 'From what were the Israelites exiled?', 'their own land', 23),
    tf(3, 'Israel’s exile contradicted what the LORD had spoken through the prophets.', false, 23, 'The LORD removed Israel to Assyria as he had spoken through his servants the prophets.'),

    mc(1, 'Who repopulated Samaria’s cities?', ['Peoples brought by Assyria’s king', 'Returning Israelites', 'Judah’s army', 'Egyptian settlers only'], 24),
    blank(2, 'Babylon, Cuthah, Avva, Hamath, and _____.', 'Sephar-va’im', 24, ['Sephar-vaim']),
    sa(1, 'Whose place did the foreign settlers take?', 'the people of Israel’s', 24, ['Israelites']),
    tf(3, 'The new peoples took possession of Samaria’s cities.', true, 24),

    mc(1, 'What did the LORD send among settlers who did not fear him?', ['Lions', 'Famine', 'Locusts', 'An Assyrian army'], 25),
    blank(2, 'the LORD sent _____ among them', 'lions', 25),
    sa(1, 'What did the lions do?', 'killed some of them', 25),
    tf(3, 'The foreign settlers feared the LORD from the moment they arrived.', false, 25, 'At the beginning of their dwelling there, they did not fear the LORD.'),

    mc(1, 'Why did officials say the lions were killing settlers?', ['They did not know the god-of-the-land law', 'They refused Assyrian tribute', 'They attacked Bethel', 'They freed Israelite captives'], 26),
    blank(2, 'do not know the _____ of the god of the land', 'law', 26),
    sa(1, 'Who was told about the deaths?', 'the king of Assyria', 26, ['Assyria’s king']),
    tf(3, 'The report connected the lion attacks to religious ignorance.', true, 26),

    mc(1, 'What solution did Assyria’s king order?', ['Return an exiled priest to teach the law', 'Send soldiers to kill every lion', 'Remove all settlers', 'Rebuild Samaria’s walls'], 27),
    blank(2, 'Send there one of the _____ whom you carried away', 'priests', 27),
    sa(1, 'What was the priest to teach?', 'the law of the god of the land', 27),
    tf(3, 'The Assyrian king refused to return any exiled priest to Samaria.', false, 27, 'He ordered that one of the exiled priests return, live there, and teach the law.'),

    mc(1, 'Where did the returned priest live?', ['Bethel', 'Samaria city', 'Jerusalem', 'Halah'], 28),
    blank(2, 'taught them how they should _____ the LORD.', 'fear', 28),
    word(1, 'From where had the priest been exiled?', 'Samaria', 28, ['Sama’ria']),
    tf(2, 'An exiled priest returned to teach the settlers how to fear the LORD.', true, 28),
    mc(3, 'How did Assyria respond to the settlers’ deaths?', ['It returned a priest to teach them at Bethel', 'It permanently abandoned the cities of Samaria', 'It restored every Israelite exile to the land', 'It ordered the immediate destruction of all shrines'], 28),

    mc(1, 'What did each settler nation still make?', ['Its own gods', 'A copy of the law', 'A temple to the LORD only', 'A royal palace'], 29),
    blank(2, 'put them in the shrines of the high _____.', 'places', 29),
    sa(1, 'Who had made those high-place shrines?', 'the Samaritans', 29),
    tf(3, 'The settler nations abandoned their own gods after reaching Samaria.', false, 29, 'Each nation made its own gods and placed them in the high-place shrines.'),

    mc(1, 'Which god did Babylon’s settlers make?', ['Succoth-benoth', 'Nergal', 'Ashima', 'Tartak'], 30),
    blank(2, 'the men of Cuth made _____.', 'Nergal', 30),
    word(1, 'What god did the men of Hamath make?', 'Ashima', 30, ['Ashi’ma']),
    tf(3, 'Different settler groups retained different gods.', true, 30),

    mc(1, 'Which gods did the Avvites make?', ['Nibhaz and Tartak', 'Nergal and Ashima', 'Baal and Asherah', 'Adrammelech only'], 31),
    blank(2, 'burned their children in the _____', 'fire', 31),
    sa(1, 'Which people burned children to their gods?', 'the Sepharvites', 31, ['Sephar’vites']),
    tf(3, 'Adrammelech and Anammelech were gods worshiped by the Babylonian settlers.', false, 31, 'They were the gods of Sepharvaim, whose worshipers burned their children.'),

    mc(1, 'Whom did the settlers appoint as high-place priests?', ['People chosen from among themselves', 'Only qualified descendants of Levi', 'Officials appointed by Assyria’s king', 'Members of King David’s royal family'], 32),
    blank(2, 'appointed from among _____ all sorts of people', 'themselves', 32),
    sa(1, 'Where did these priests sacrifice?', 'high-place shrines', 32, ['shrines of the high places']),
    tf(3, 'The settlers combined fear of the LORD with unauthorized priesthood.', true, 32),

    mc(1, 'How did the settlers divide their worship?', ['They feared the LORD but served their own gods', 'They served the LORD alone', 'They abandoned all worship', 'They worshiped only Assyria’s king'], 33),
    blank(2, 'they feared the LORD but also served their own _____.', 'gods', 33),
    sa(1, 'Whose religious manner did they retain?', 'the nations from whom they had been carried away', 33, ['their former nations']),
    tf(2, 'The settlers abandoned their old gods when they began to fear the LORD.', false, 33, 'They feared the LORD while continuing to serve their own gods.'),
    mc(3, 'What made their worship double-minded?', ['They feared the LORD while serving their own gods', 'They worshiped without appointing any priests', 'They rejected every high-place shrine in Samaria', 'They voluntarily returned to their former exile'], 33),

    mc(1, 'What name had the LORD given Jacob?', ['Israel', 'Judah', 'Bethel', 'Samaria'], 34),
    blank(2, 'the children of Jacob, whom he named _____.', 'Israel', 34),
    sa(1, 'What did the people fail to follow?', 'statutes, ordinances, law, and commandment', 34),
    tf(3, 'Their continued practices truly fulfilled the LORD’s covenant law.', false, 34, 'They did not follow the LORD’s statutes or law.'),

    mc(1, 'What had the covenant forbidden?', ['Serving, bowing to, or sacrificing to other gods', 'Living in the towns and territory of Samaria', 'Carefully observing the LORD’s written statutes', 'Bringing sacrifices to the LORD alone'], 35),
    blank(2, 'You shall not fear other gods or bow _____ to them', 'yourselves', 35),
    word(1, 'Who made this covenant?', 'LORD', 35, ['the LORD']),
    tf(3, 'The covenant prohibited sacrifice to other gods.', true, 35),

    mc(1, 'Whom alone were the people to fear?', ['The LORD', 'Assyria’s king', 'Their own gods', 'Pharaoh'], 36),
    blank(2, 'brought you out of the land of _____', 'Egypt', 36),
    sa(1, 'How did the LORD bring them out?', 'with great power and an outstretched arm', 36),
    tf(3, 'They were commanded to bow and sacrifice to the LORD.', true, 36),

    mc(1, 'How often were the people to obey the written law?', ['Always', 'Only in exile', 'Once a year', 'Only under a king'], 37),
    blank(2, 'you shall always be _____ to do', 'careful', 37),
    sa(1, 'Whom were they forbidden to fear?', 'other gods', 37),
    tf(3, 'The written statutes and ordinances required continuing care.', true, 37),

    mc(1, 'What were the people commanded not to forget?', ['The LORD’s covenant', 'Assyrian tribute', 'Samaria’s shrines', 'Their former gods'], 38),
    blank(2, 'you shall not forget the _____ that I have made with you.', 'covenant', 38),
    sa(1, 'What prohibition is repeated?', 'Do not fear other gods', 38),
    tf(3, 'Remembering the covenant required rejecting other gods.', true, 38),

    mc(1, 'What did the LORD promise if they feared him?', ['Deliverance from all enemies', 'Return to Egypt', 'Rule over Assyria', 'Freedom to serve other gods'], 39),
    blank(2, 'he will _____ you out of the hand of all your enemies.', 'deliver', 39),
    sa(1, 'Whom were they to fear?', 'the LORD their God', 39, ['the LORD']),
    tf(3, 'The LORD promised deliverance from enemies.', true, 39),

    mc(1, 'How did the people respond to the covenant instruction?', ['They would not listen', 'They obeyed fully', 'They destroyed their images', 'They returned to Judah'], 40),
    blank(2, 'they did according to their former _____.', 'manner', 40),
    tf(1, 'The nations settled in Samaria listened and gave up their former customs.', false, 40, 'They did not listen, but did according to their former manner.'),
    tf(3, 'The people abandoned their former manner.', false, 40, 'They continued according to it.'),

    mc(1, 'What did the nations serve alongside fearing the LORD?', ['Their graven images', 'The law alone', 'The prophets', 'Jerusalem’s temple'], 41),
    blank(2, 'their children likewise, and their children’s _____.', 'children', 41),
    sa(1, 'How long did the inherited pattern continue?', 'to this day', 41),
    tf(3, 'Later generations continued the mixed worship of their fathers.', true, 41),
  ],
}

export default bank
