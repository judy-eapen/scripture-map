// 1 Kings 4 — quiz bank (RSV). Every row is anchored to a verse; fill-in-the-blank
// rows are verified against the stored verse text by scripts/seed-quiz-bank.ts.
import { mc, blank, word, tf, type ChapterBank, sa } from './types'

const bank: ChapterBank = {
  book: '1 Kings',
  chapter: 4,
  tag: 'quiz-v2-1kings-4',
  rows: [
    // ══════════════════════════════════ v1–6 · Solomon’s high officials
    blank(1, 'King Solomon was king over all _____,', 'Israel', 1),
    tf(1, 'At the start of 1 Kings 4, Solomon was king over Judah alone.', false, 1, 'The chapter begins, "King Solomon was king over all Israel."'),
    word(1, 'Who was king over all Israel in 1 Kings 4?', 'Solomon', 1),
    mc(1, 'According to 1 Kings 4:1, Solomon was king over what?', ['All Israel', 'Judah only', 'Jerusalem only', 'The northern tribes only'], 1),

    mc(1, 'Who is listed first among Solomon’s high officials, as the priest?', ['Azariah the son of Zadok', 'Zabud the son of Nathan', 'Abiathar', 'Jehoshaphat the son of Ahilud'], 2),
    blank(2, 'and these were his high officials: Azari’ah the son of _____ was the priest;', 'Zadok', 2),
    word(2, 'Azariah, the priest listed first among Solomon’s high officials, was the son of whom?', 'Zadok', 2),
    tf(2, 'Azariah the son of Zadok was the recorder.', false, 2, 'Azariah the son of Zadok was the priest; Jehoshaphat the son of Ahilud was recorder.'),

    mc(2, 'What office did Elihoreph and Ahijah, the sons of Shisha, hold?', ['Secretaries', 'Priests', 'Recorders', 'Commanders of the army'], 3),
    word(3, 'Elihoreph and Ahijah, the secretaries, were the sons of whom?', 'Shisha', 3),
    blank(2, 'Elihor’eph and Ahi’jah the sons of Shisha were _____;', 'secretaries', 3),
    blank(3, 'Jehosh’aphat the son of Ahi’lud was _____;', 'recorder', 3),
    word(2, 'Who was Solomon’s recorder?', 'Jehoshaphat', 3),
    tf(2, 'Jehoshaphat the son of Ahilud was one of Solomon’s secretaries.', false, 3, 'Elihoreph and Ahijah were secretaries; "Jehoshaphat the son of Ahilud was recorder."'),
    mc(3, 'Jehoshaphat the recorder was the son of whom?', ['Ahilud', 'Shisha', 'Zadok', 'Nathan'], 3),

    mc(1, 'Who was in command of Solomon’s army?', ['Benaiah the son of Jehoiada', 'Adoniram the son of Abda', 'Ahishar', 'Azariah the son of Nathan'], 4),
    word(1, 'Who commanded the army under King Solomon?', 'Benaiah', 4),
    blank(1, 'Benai’ah the son of Jehoi’ada was in command of the _____;', 'army', 4),
    mc(1, 'Which two men are named as priests in 1 Kings 4:4?', ['Zadok and Abiathar', 'Azariah and Zabud', 'Elihoreph and Ahijah', 'Zadok and Nathan'], 4),
    tf(1, 'Zadok and Abiathar were commanders of Solomon’s army.', false, 4, '"Benaiah the son of Jehoiada was in command of the army; Zadok and Abiathar were priests."'),
    blank(3, 'Zadok and _____ were priests;', 'Abiathar', 4),

    mc(2, 'Who was "over the officers"?', ['Azariah the son of Nathan', 'Azariah the son of Zadok', 'Ahishar', 'Ben-hur'], 5),
    word(2, 'Who was "priest and king’s friend"?', 'Zabud', 5),
    blank(3, 'Zabud the son of Nathan was priest and king’s _____;', 'friend', 5),
    mc(3, 'Azariah (over the officers) and Zabud (priest and king’s friend) were both sons of whom?', ['Nathan', 'Zadok', 'Ahilud', 'Shisha'], 5),
    tf(2, 'Zabud the son of Zadok was described as priest and king’s friend.', false, 5, 'The verse names "Zabud the son of Nathan" as priest and king’s friend.'),
    blank(3, 'Azari’ah the son of Nathan was over the _____;', 'officers', 5),
    tf(3, 'Zabud the son of Nathan was in charge of the palace.', false, 5, 'Ahishar was in charge of the palace; Zabud was priest and king’s friend.'),

    mc(1, 'Who was in charge of the palace?', ['Ahishar', 'Adoniram the son of Abda', 'Benaiah the son of Jehoiada', 'Zabud the son of Nathan'], 6),
    word(1, 'Who was in charge of the forced labor?', 'Adoniram', 6, ['adoniram']),
    blank(1, 'and Adoni’ram the son of Abda was in charge of the forced _____.', 'labor', 6),
    tf(1, 'Adoniram the son of Abda was in charge of the palace.', false, 6, 'Ahishar was in charge of the palace; Adoniram "was in charge of the forced labor."'),
    word(3, 'Adoniram, who was in charge of the forced labor, was the son of whom?', 'Abda', 6),
    blank(3, 'Ahi’shar was in charge of the _____;', 'palace', 6),
    mc(1, 'What was Adoniram the son of Abda in charge of?', ['The forced labor', 'The palace', 'The army', 'The officers'], 6),

    // ══════════════════════════════════ v7–19 · The twelve officers and their districts
    mc(1, 'How many officers did Solomon have over all Israel to provide food for the king?', ['Twelve', 'Ten', 'Seven', 'Twenty'], 7),
    word(1, 'How many officers did Solomon have over all Israel?', 'twelve', 7, ['12']),
    blank(1, 'Solomon had _____ officers over all Israel, who provided food for the king and his household;', 'twelve', 7, ['12']),
    blank(1, 'each man had to make provision for one _____ in the year.', 'month', 7),
    tf(1, 'Each of the twelve officers had to make provision for one month in the year.', true, 7),
    mc(1, 'What did Solomon’s twelve officers provide?', ['Food for the king and his household', 'Soldiers for the army', 'Horses for the chariots', 'Timber for the temple'], 7),
    tf(1, 'Solomon’s twelve officers each provided food for two months of the year.', false, 7, 'Each man had to make provision for one month in the year.'),

    mc(1, 'Which officer served in the hill country of Ephraim?', ['Ben-hur', 'Ben-deker', 'Ben-hesed', 'Ben-geber'], 8),
    word(2, 'Ben-hur was the officer in the hill country of which tribe?', 'Ephraim', 8),
    blank(1, 'These were their names: Ben-hur, in the hill country of _____;', 'Ephraim', 8),
    tf(1, 'Ben-hur was the officer in the hill country of Ephraim.', true, 8),

    mc(3, 'Which officer was over Makaz, Shaalbim, Beth-shemesh, and Elonbeth-hanan?', ['Ben-deker', 'Ben-hur', 'Ben-abinadab', 'Baana the son of Ahilud'], 9),
    blank(3, 'Ben-deker, in Makaz, Sha-al’bim, _____, and E’lonbeth-ha’nan;', 'Beth-shemesh', 9, ['bethshemesh', 'beth shemesh']),
    word(3, 'Ben-deker’s district included Makaz, Shaalbim, Beth-shemesh, and which fourth place?', 'Elonbeth-hanan', 9, ['elonbethhanan', 'elon beth hanan', 'elonbeth hanan']),
    tf(3, 'Beth-shemesh was in the district of Ben-hesed.', false, 9, 'Beth-shemesh was in Ben-deker’s district; Ben-hesed had Arubboth, Socoh and the land of Hepher.'),

    mc(2, 'To which officer belonged Socoh and all the land of Hepher?', ['Ben-hesed', 'Ben-deker', 'Ben-geber', 'Ahinadab the son of Iddo'], 10),
    blank(3, 'Ben-hesed, in Arub’both (to him belonged _____ and all the land of Hepher);', 'Socoh', 10),
    word(3, 'Ben-hesed was the officer in which place?', 'Arubboth', 10, ['arubboth']),
    tf(2, 'Ben-hesed was in Arubboth, and to him belonged Socoh and all the land of Hepher.', true, 10),

    mc(2, 'Which officer had Taphath the daughter of Solomon as his wife?', ['Ben-abinadab', 'Ahimaaz', 'Ben-geber', 'Geber the son of Uri'], 11),
    word(2, 'What was the name of Solomon’s daughter who was the wife of Ben-abinadab?', 'Taphath', 11),
    blank(3, 'Ben-abin’adab, in all _____ (he had Taphath the daughter of Solomon as his wife);', 'Naphath-dor', 11, ['naphathdor', 'naphath dor']),
    tf(1, 'Ben-abinadab was married to Taphath, a daughter of Solomon.', true, 11),
    tf(3, 'Ben-abinadab’s district was Naphtali.', false, 11, 'Ben-abinadab was in all Naphath-dor; Ahimaaz was in Naphtali.'),

    mc(2, 'Which officer was over Taanach, Megiddo, and all Beth-shean?', ['Baana the son of Ahilud', 'Baana the son of Hushai', 'Ben-deker', 'Jehoshaphat the son of Paruah'], 12),
    blank(3, 'Ba’ana the son of Ahi’lud, in Ta’anach, _____, and all Beth-she’an which is beside Zarethan below Jezreel,', 'Megiddo', 12),
    word(3, 'Baana the son of Ahilud’s district ran from Beth-shean to Abel-meholah, "as far as the other side of" what?', 'Jokmeam', 12),
    tf(3, 'Beth-shean is described as beside Zarethan below Jezreel.', true, 12),
    word(2, 'Baana, the officer over Taanach and Megiddo, was the son of whom?', 'Ahilud', 12),
    blank(3, 'and from Beth-she’an to A’bel-meho’lah, as far as the other side of _____;', 'Jokmeam', 12),

    mc(2, 'Which officer was in Ramoth-gilead?', ['Ben-geber', 'Geber the son of Uri', 'Ahinadab the son of Iddo', 'Ben-hesed'], 13),
    word(3, 'How many great cities with walls and bronze bars were in the region of Argob?', 'sixty', 13, ['60']),
    blank(3, 'and he had the region of Argob, which is in Bashan, _____ great cities with walls and bronze bars);', 'sixty', 13, ['60']),
    mc(3, 'The region of Argob, held by Ben-geber, is said to be in what land?', ['Bashan', 'Gilead', 'Ephraim', 'Judah'], 13),
    tf(2, 'Ben-geber had the villages of Jair the son of Manasseh, which are in Gilead.', true, 13),
    tf(3, 'The sixty great cities in Argob had walls and iron bars.', false, 13, 'They had "walls and bronze bars".'),
    blank(3, 'Ben-geber, in Ra’moth-gil’ead (he had the villages of Ja’ir the son of _____, which are in Gilead,', 'Manasseh', 13),
    word(2, 'The great cities of Argob had walls and bars made of what metal?', 'bronze', 13),

    mc(2, 'Who was the officer in Mahanaim?', ['Ahinadab the son of Iddo', 'Ahimaaz', 'Shimei the son of Ela', 'Ben-abinadab'], 14),
    blank(3, 'Ahin’adab the son of _____, in Mahana’im;', 'Iddo', 14),
    word(3, 'Ahinadab the son of Iddo served in which place?', 'Mahanaim', 14),
    tf(2, 'Ahinadab the son of Iddo was the officer in Mahanaim.', true, 14),

    mc(2, 'Which officer was in Naphtali?', ['Ahimaaz', 'Ahinadab', 'Ben-hur', 'Baana the son of Hushai'], 15),
    word(2, 'Which daughter of Solomon did Ahimaaz take as his wife?', 'Basemath', 15),
    blank(3, 'Ahi’ma-az, in _____ (he had taken Bas’emath the daughter of Solomon as his wife);', 'Naphtali', 15),
    tf(2, 'Ahimaaz had taken Basemath the daughter of Solomon as his wife.', true, 15),
    mc(3, 'Basemath, the daughter of Solomon, was the wife of which officer?', ['Ahimaaz', 'Ben-abinadab', 'Ben-geber', 'Geber the son of Uri'], 15),

    mc(2, 'Who was the officer in Asher and Bealoth?', ['Baana the son of Hushai', 'Baana the son of Ahilud', 'Ben-hesed', 'Jehoshaphat the son of Paruah'], 16),
    blank(3, 'Ba’ana the son of Hushai, in Asher and _____;', 'Bealoth', 16),
    word(3, 'Baana, the officer in Asher and Bealoth, was the son of whom?', 'Hushai', 16),
    tf(3, 'Baana the son of Hushai was the officer in Asher and Bealoth.', true, 16),

    mc(2, 'Which officer was in Issachar?', ['Jehoshaphat the son of Paruah', 'Jehoshaphat the son of Ahilud', 'Shimei the son of Ela', 'Ahimaaz'], 17),
    word(3, 'Jehoshaphat, the officer in Issachar, was the son of whom?', 'Paruah', 17),
    blank(2, 'Jehosh’aphat the son of Paru’ah, in _____;', 'Issachar', 17),
    tf(3, 'Jehoshaphat the son of Paruah was the officer in Benjamin.', false, 17, 'He was in Issachar; Shimei the son of Ela was in Benjamin.'),

    mc(2, 'Who was the officer in Benjamin?', ['Shimei the son of Ela', 'Geber the son of Uri', 'Ben-hur', 'Ahinadab the son of Iddo'], 18),
    word(2, 'Shimei, the officer in Benjamin, was the son of whom?', 'Ela', 18),
    blank(1, 'Shim’e-i the son of Ela, in _____;', 'Benjamin', 18),
    tf(2, 'Shimei the son of Ela was the officer in Benjamin.', true, 18),

    mc(2, 'Which officer was in the land of Gilead, the country of Sihon and Og?', ['Geber the son of Uri', 'Ben-geber', 'Ahinadab the son of Iddo', 'Baana the son of Ahilud'], 19),
    word(2, 'Sihon is called king of which people?', 'Amorites', 19, ['amorite']),
    blank(3, 'Geber the son of Uri, in the land of Gilead, the country of Sihon king of the Amorites and of _____ king of Bashan.', 'Og', 19),
    word(2, 'How many officers were there in the land of Judah?', 'one', 19, ['1']),
    tf(3, 'There were two officers in the land of Judah.', false, 19, 'And there was one officer in the land of Judah.'),
    blank(3, 'And there was one officer in the land of _____.', 'Judah', 19),
    mc(3, 'Og is described as king of what?', ['Bashan', 'The Amorites', 'Gilead', 'Judah'], 19),

    // ══════════════════════════════════ v20–28 · Prosperity, dominion, provisions
    mc(1, 'To what were the people of Judah and Israel compared in number?', ['The sand by the sea', 'The stars of heaven', 'The dust of the earth', 'The trees of Lebanon'], 20),
    blank(1, 'Judah and Israel were as many as the _____ by the sea; they ate and drank and were happy.', 'sand', 20),
    tf(1, 'Judah and Israel ate and drank and were happy.', true, 20),
    word(1, 'Judah and Israel were as many as the sand by the ___.', 'sea', 20),
    tf(1, 'Judah and Israel are said to have been few in number.', false, 20, 'They were as many as the sand by the sea.'),

    mc(1, 'Solomon ruled over all the kingdoms from which river?', ['The Euphrates', 'The Jordan', 'The Nile', 'The Tigris'], 21),
    blank(2, 'Solomon ruled over all the kingdoms from the Euphra’tes to the land of the _____ and to the border of Egypt;', 'Philistines', 21),
    word(1, 'What did the kingdoms bring to Solomon?', 'tribute', 21),
    tf(1, 'The kingdoms brought tribute and served Solomon all the days of his life.', true, 21),
    mc(1, 'How long did the kingdoms serve Solomon?', ['All the days of his life', 'Seven years', 'Until the temple was finished', 'Forty years'], 21),
    blank(3, 'they brought _____ and served Solomon all the days of his life.', 'tribute', 21),

    mc(3, 'How much fine flour was in Solomon’s provision for one day?', ['Thirty cors', 'Sixty cors', 'Ten cors', 'A hundred cors'], 22),
    word(3, 'How many cors of meal were in Solomon’s daily provision?', 'sixty', 22, ['60']),
    blank(3, 'Solomon’s provision for one day was _____ cors of fine flour, and sixty cors of meal,', 'thirty', 22, ['30']),
    tf(3, 'Solomon’s provision for one day included sixty cors of fine flour.', false, 22, 'It was thirty cors of fine flour, and sixty cors of meal.'),
    word(2, 'Solomon’s daily flour and meal were measured in what unit?', 'cors', 22, ['cor']),

    mc(3, 'How many fat oxen were part of Solomon’s daily provision?', ['Ten', 'Twenty', 'Thirty', 'A hundred'], 23),
    sa(3, 'How many sheep were in Solomon’s provision for one day?', 'a hundred', 23, ['100', 'hundred', 'one hundred']),
    blank(3, 'ten fat oxen, and _____ pasture-fed cattle, a hundred sheep, besides harts, gazelles, roebucks, and fatted fowl.', 'twenty', 23, ['20']),
    tf(3, 'Solomon’s daily provision included twenty pasture-fed cattle.', true, 23),
    mc(2, 'Which of these is NOT listed in Solomon’s daily provision in 1 Kings 4:23?', ['Goats', 'Harts', 'Gazelles', 'Roebucks'], 23),
    blank(3, 'a hundred sheep, besides harts, gazelles, _____, and fatted fowl.', 'roebucks', 23),

    mc(2, 'Solomon’s dominion west of the Euphrates stretched from Tiphsah to where?', ['Gaza', 'Dan', 'Beer-sheba', 'Egypt'], 24),
    word(3, 'Solomon had dominion over the region west of the Euphrates "from ___ to Gaza".', 'Tiphsah', 24),
    blank(2, 'and he had _____ on all sides round about him.', 'peace', 24),
    tf(1, 'Solomon had peace on all sides round about him.', true, 24),
    blank(3, 'For he had dominion over all the region west of the Euphra’tes from Tiphsah to _____,', 'Gaza', 24),
    tf(3, 'Solomon had dominion over all the kings east of the Euphrates.', false, 24, 'He had dominion "over all the kings west of the Euphrates".'),

    mc(1, 'Judah and Israel dwelt in safety "from Dan even to" where?', ['Beer-sheba', 'Gaza', 'Jerusalem', 'Hebron'], 25),
    blank(1, 'every man under his vine and under his _____ tree, all the days of Solomon.', 'fig', 25),
    word(1, 'Every man dwelt under his fig tree and under his what?', 'vine', 25),
    tf(1, 'Judah and Israel dwelt in safety from Dan to Beer-sheba all the days of Solomon.', true, 25),
    blank(2, 'And Judah and Israel dwelt in _____, from Dan even to Beer-sheba,', 'safety', 25),
    tf(2, 'Every man dwelt under his olive tree and under his fig tree.', false, 25, 'It was "every man under his vine and under his fig tree".'),

    mc(2, 'How many stalls of horses did Solomon have for his chariots?', ['Forty thousand', 'Twelve thousand', 'Four thousand', 'Fourteen hundred'], 26),
    sa(2, 'How many horsemen did Solomon have?', 'twelve thousand', 26, ['12000', '12,000']),
    blank(3, 'Solomon also had _____ stalls of horses for his chariots, and twelve thousand horsemen.', 'forty thousand', 26, ['40000', '40,000']),
    tf(1, 'Solomon had twelve thousand horsemen.', true, 26),
    tf(1, 'Solomon had forty thousand horsemen.', false, 26, 'He had forty thousand stalls of horses for his chariots, and twelve thousand horsemen.'),

    mc(2, 'For whom did the officers supply provisions?', ['King Solomon and all who came to his table', 'The army only', 'The priests and Levites', 'The kings west of the Euphrates'], 27),
    blank(2, 'each one in his month; they let nothing be _____.', 'lacking', 27),
    tf(1, 'The officers let nothing be lacking.', true, 27),
    word(3, 'The officers supplied provisions for all who came to King Solomon’s ___.', 'table', 27),
    blank(3, 'and for all who came to King Solomon’s _____, each one in his month;', 'table', 27),

    mc(1, 'What did the officers bring for the horses and swift steeds?', ['Barley and straw', 'Wheat and hay', 'Oats and water', 'Corn and grass'], 28),
    word(1, 'Along with straw, what grain was brought for the horses?', 'barley', 28),
    blank(3, 'Barley also and straw for the horses and swift _____ they brought to the place where it was required,', 'steeds', 28),
    tf(2, 'Barley and straw were brought for the horses to the place where it was required.', true, 28),
    blank(3, 'they brought to the place where it was required, each according to his _____.', 'charge', 28),
    tf(3, 'Wheat and hay were brought for the horses and swift steeds.', false, 28, 'It was "barley also and straw".'),

    // ══════════════════════════════════ v29–34 · Solomon’s wisdom
    mc(1, 'Who gave Solomon wisdom and understanding beyond measure?', ['God', 'David', 'Nathan', 'Zadok'], 29),
    blank(1, 'And God gave Solomon _____ and understanding beyond measure,', 'wisdom', 29),
    tf(1, 'God gave Solomon wisdom and understanding beyond measure.', true, 29),
    word(2, 'Solomon’s largeness of mind was like the sand on the ___.', 'seashore', 29, ['sea shore', 'shore']),
    blank(2, 'and largeness of _____ like the sand on the seashore,', 'mind', 29),
    mc(1, 'Solomon’s largeness of mind was compared to what?', ['The sand on the seashore', 'The stars of heaven', 'The depth of the sea', 'The cedars of Lebanon'], 29),

    mc(1, 'Solomon’s wisdom surpassed the wisdom of the people of the east and of which nation?', ['Egypt', 'Assyria', 'Babylon', 'Philistia'], 30),
    blank(2, 'so that Solomon’s wisdom surpassed the wisdom of all the people of the _____, and all the wisdom of Egypt.', 'east', 30),
    tf(1, 'Solomon’s wisdom surpassed all the wisdom of Egypt.', true, 30),
    word(2, 'Solomon’s wisdom surpassed that of all the people of which direction?', 'east', 30, ['the east']),
    tf(1, 'Solomon’s wisdom surpassed the wisdom of all the people of the west.', false, 30, 'It surpassed "the wisdom of all the people of the east".'),

    mc(2, 'Ethan, one of the wise men Solomon surpassed, is called what?', ['The Ezrahite', 'The son of Mahol', 'The Shunammite', 'The Ephraimite'], 31),
    word(3, 'Heman, Calcol, and Darda were the sons of whom?', 'Mahol', 31),
    blank(3, 'wiser than Ethan the Ez’rahite, and Heman, _____, and Darda, the sons of Mahol;', 'Calcol', 31),
    tf(1, 'Solomon was wiser than all other men.', true, 31),
    blank(2, 'and his _____ was in all the nations round about.', 'fame', 31),
    tf(3, 'Ethan the Ezrahite was one of the sons of Mahol.', false, 31, 'Heman, Calcol, and Darda were the sons of Mahol; Ethan is called the Ezrahite.'),
    mc(3, 'Which three men are named as the sons of Mahol?', ['Heman, Calcol, and Darda', 'Ethan, Heman, and Calcol', 'Elihoreph, Ahijah, and Zabud', 'Darda, Ethan, and Iddo'], 31),

    mc(1, 'How many proverbs did Solomon utter?', ['Three thousand', 'A thousand and five', 'Five thousand', 'Three hundred'], 32),
    sa(2, 'How many songs did Solomon have?', 'a thousand and five', 32, ['1005', '1,005', 'thousand and five', 'one thousand five', 'one thousand and five']),
    blank(1, 'He also uttered three thousand _____; and his songs were a thousand and five.', 'proverbs', 32),
    tf(2, 'Solomon’s songs numbered a thousand and five.', true, 32),
    tf(1, 'Solomon uttered three thousand songs.', false, 32, 'He uttered three thousand proverbs; his songs were a thousand and five.'),
    blank(3, 'He also uttered _____ proverbs;', 'three thousand', 32, ['3000', '3,000']),

    mc(1, 'Solomon spoke of trees "from the cedar that is in Lebanon to" what?', ['The hyssop that grows out of the wall', 'The vine under which the people of Israel dwelt', 'The fig tree under which every man lived in safety', 'The barley brought for the horses and swift steeds'], 33),
    word(2, 'Which plant "grows out of the wall" in 1 Kings 4:33?', 'hyssop', 33),
    blank(2, 'He spoke of trees, from the _____ that is in Lebanon to the hyssop that grows out of the wall;', 'cedar', 33),
    tf(1, 'Solomon spoke of beasts, birds, reptiles, and fish.', true, 33),
    blank(3, 'he spoke also of beasts, and of birds, and of _____, and of fish.', 'reptiles', 33),
    mc(1, 'The cedar Solomon spoke of is located where?', ['Lebanon', 'Bashan', 'Gilead', 'Egypt'], 33),

    mc(1, 'Why did men come from all peoples to Solomon?', ['To hear his wisdom', 'To pay tribute', 'To see the temple', 'To serve in his army'], 34),
    blank(1, 'And men came from all peoples to hear the _____ of Solomon,', 'wisdom', 34),
    tf(1, 'Men came from all peoples to hear the wisdom of Solomon.', true, 34),
    word(2, 'Men came to Solomon from "all the ___ of the earth".', 'kings', 34),
    tf(2, 'Men came only from Israel to hear Solomon’s wisdom.', false, 34, 'They came "from all peoples … and from all the kings of the earth".'),

    // ══════════════════════════════════ Whole-chapter
  ],
};

export default bank;
