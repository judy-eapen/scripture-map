// 1 Kings 7 — quiz bank (RSV). Every row is anchored to a verse; fill-in-the-blank
// rows are verified against the stored verse text by scripts/seed-quiz-bank.ts.
import { mc, blank, word, tf, type ChapterBank, sa } from './types'

const bank: ChapterBank = {
  book: '1 Kings',
  chapter: 7,
  tag: 'quiz-v2-1kings-7',
  rows: [
    // ══════════════════════════════════ v1–5 · Solomon’s house, House of the Forest of Lebanon
    word(1, 'How many years was Solomon building his own house?', 'thirteen', 1, ['13']),
    blank(1, 'Solomon was building his own house _____ years, and he finished his entire house.', 'thirteen', 1, ['13']),
    tf(1, 'Solomon spent thirteen years building his own house.', true, 1),
    mc(1, 'Whose house took thirteen years to build in 1 Kings 7:1?', ['Solomon’s own house', 'The house of the LORD', 'Hiram’s house', 'Pharaoh’s daughter’s house'], 1),

    mc(1, 'What was the name of the building described in 1 Kings 7:2?', ['The House of the Forest of Lebanon', 'The Hall of Pillars', 'The Hall of Judgment', 'The house of the LORD'], 2),
    sa(2, 'How many cubits long was the House of the Forest of Lebanon?', 'a hundred', 2, ['100', 'hundred', 'one hundred']),
    blank(1, 'He built the House of the Forest of _____; its length was a hundred cubits, and its breadth fifty cubits, and its height thirty cubits,', 'Lebanon', 2),
    blank(3, 'its length was a hundred cubits, and its breadth _____ cubits, and its height thirty cubits,', 'fifty', 2, ['50']),
    mc(3, 'What were the dimensions of the House of the Forest of Lebanon?', ['100 cubits long, 50 wide, 30 high', '60 cubits long, 20 wide, 30 high', '50 cubits long, 30 wide, 20 high', '100 cubits long, 100 wide, 50 high'], 2),
    tf(2, 'The House of the Forest of Lebanon was built upon three rows of cedar pillars.', true, 2),
    word(1, 'What wood were the pillars and beams of the House of the Forest of Lebanon made of?', 'cedar', 2),
    tf(3, 'The House of the Forest of Lebanon was fifty cubits high.', false, 2, 'Its height was thirty cubits; fifty cubits was its breadth.'),

    word(2, 'How many pillars in total were the chambers of the House of the Forest of Lebanon built upon?', 'forty-five', 3, ['45', 'forty five']),
    blank(3, 'And it was covered with cedar above the chambers that were upon the forty-five pillars, _____ in each row.', 'fifteen', 3, ['15']),
    mc(3, 'How many pillars stood in each row, according to 1 Kings 7:3?', ['Fifteen', 'Three', 'Twelve', 'Forty-five'], 3),
    blank(1, 'And it was covered with _____ above the chambers that were upon the forty-five pillars, fifteen in each row.', 'cedar', 3),

    blank(2, 'There were window frames in three rows, and window opposite window in three _____.', 'tiers', 4),
    word(1, 'The window frames were in how many rows?', 'three', 4, ['3']),
    blank(1, 'There were window frames in _____ rows, and window opposite window in three tiers.', 'three', 4, ['3']),
    mc(3, 'How were the windows arranged in 1 Kings 7:4?', ['Window frames in three rows, window opposite window in three tiers', 'A single row of windows facing east', 'Windows only on the upper story', 'Two rows of round windows'], 4),

    word(1, 'What shape were the frames of all the doorways and windows?', 'square', 5),
    blank(1, 'All the doorways and windows had _____ frames, and window was opposite window in three tiers.', 'square', 5),
    tf(1, 'All the doorways and windows had round frames.', false, 5, 'They had square frames.'),
    mc(3, 'What does 1 Kings 7:5 say about the doorways and windows?', ['They had square frames, with window opposite window in three tiers', 'They were arched and overlaid with gold', 'They were covered with cedar shutters', 'They all faced the inner court'], 5),

    // ══════════════════════════════════ v6–8 · Hall of Pillars, Hall of Judgment, Solomon’s and Pharaoh’s daughter’s houses
    mc(1, 'Which hall was fifty cubits long and thirty cubits broad?', ['The Hall of Pillars', 'The Hall of the Throne', 'The House of the Forest of Lebanon', 'The house for Pharaoh’s daughter'], 6),
    blank(1, 'And he made the Hall of _____; its length was fifty cubits, and its breadth thirty cubits;', 'Pillars', 6),
    word(3, 'What was in front of the porch of the Hall of Pillars, before the pillars?', 'canopy', 6, ['a canopy']),
    mc(3, 'How long was the Hall of Pillars?', ['Fifty cubits', 'Thirty cubits', 'A hundred cubits', 'Eighteen cubits'], 6),
    blank(3, 'there was a porch in front with pillars, and a _____ before them.', 'canopy', 6),

    mc(1, 'What was Solomon to do in the Hall of the Throne?', ['Pronounce judgment', 'Offer sacrifices', 'Receive foreign kings', 'Store the temple vessels'], 7),
    word(1, 'The Hall of the Throne was also called the Hall of ___.', 'Judgment', 7, ['judgement']),
    blank(1, 'And he made the Hall of the Throne where he was to pronounce _____, even the Hall of Judgment;', 'judgment', 7, ['judgement']),
    blank(3, 'even the Hall of Judgment; it was finished with cedar from floor to _____.', 'rafters', 7),
    tf(1, 'The Hall of Judgment was finished with cedar from floor to rafters.', true, 7),
    tf(2, 'The Hall of the Throne was finished with gold from floor to rafters.', false, 7, 'It was finished with cedar.'),

    mc(1, 'For whom did Solomon make a house like the hall?', ['Pharaoh’s daughter, whom he had taken in marriage', 'Hiram of Tyre', 'His mother Bathsheba', 'The queen of Sheba'], 8),
    word(1, 'Solomon built a house for the daughter of which ruler?', 'Pharaoh', 8),
    blank(2, 'Solomon also made a house like this hall for _____ daughter whom he had taken in marriage.', 'Pharaoh’s', 8, ['pharaohs', 'pharaoh']),
    tf(2, 'Solomon’s own dwelling was in the other court back of the hall.', true, 8),
    mc(3, 'Where was Solomon’s own house, where he was to dwell?', ['In the other court back of the hall', 'On the roof of the House of the Forest of Lebanon', 'Beside the molten sea', 'In Tyre'], 8),
    tf(1, 'Solomon had taken Pharaoh’s daughter in marriage.', true, 8),

    // ══════════════════════════════════ v9–12 · Costly stones
    word(2, 'All these buildings were made of what kind of stones?', 'costly', 9, ['costly stones']),
    blank(2, 'All these were made of costly stones, hewn according to measure, sawed with _____, back and front,', 'saws', 9),
    tf(2, 'The costly stones were sawed with saws, back and front.', true, 9),
    mc(3, 'From where to where did the costly stonework extend, according to 1 Kings 7:9?', ['From the foundation to the coping', 'From the floor to the rafters', 'From the brim to the base', 'From the porch to the canopy'], 9),
    blank(3, 'even from the foundation to the _____, and from the court of the house of the LORD to the great court.', 'coping', 9),

    word(3, 'The huge foundation stones measured eight and how many cubits?', 'ten', 10, ['10']),
    blank(2, 'The foundation was of costly stones, huge stones, stones of _____ and ten cubits.', 'eight', 10, ['8']),
    mc(2, 'What was the foundation made of?', ['Costly, huge stones of eight and ten cubits', 'Cedar beams', 'Bronze plates', 'Bricks baked in the plain of the Jordan'], 10),
    tf(3, 'The foundation stones measured four and five cubits.', false, 10, 'They were stones of eight and ten cubits.'),
    tf(1, 'The foundation was laid with cedar beams.', false, 10, 'The foundation was of costly stones, huge stones.'),

    blank(2, 'And above were costly stones, hewn according to measurement, and _____.', 'cedar', 11),
    tf(2, 'Above the foundation were costly stones hewn according to measurement, and cedar.', true, 11),
    mc(3, 'What was above the foundation, according to 1 Kings 7:11?', ['Costly stones hewn according to measurement, and cedar', 'Bronze pillars', 'Gold-plated panels', 'Rough unhewn stones'], 11),
    word(3, 'Above the foundation, the costly stones were hewn according to what?', 'measurement', 11, ['measure']),

    word(2, 'How many courses of hewn stone did the great court have round about?', 'three', 12, ['3']),
    blank(2, 'The great court had three courses of hewn stone round about, and a course of _____ beams;', 'cedar', 12),
    mc(3, 'Which other places had the same construction as the great court — three courses of hewn stone and a course of cedar beams?', ['The inner court of the house of the LORD and the vestibule of the house', 'The Hall of Pillars and the Hall of Judgment', 'The house of Pharaoh’s daughter', 'The House of the Forest of Lebanon'], 12),
    tf(3, 'The great court had five courses of hewn stone round about.', false, 12, 'It had three courses of hewn stone and a course of cedar beams.'),

    // ══════════════════════════════════ v13–14 · Hiram of Tyre
    word(1, 'Whom did King Solomon send and bring from Tyre?', 'Hiram', 13),
    mc(1, 'Where did Solomon bring Hiram from?', ['Tyre', 'Sidon', 'Egypt', 'Jerusalem'], 13),
    blank(1, 'And King Solomon sent and brought Hiram from _____.', 'Tyre', 13),
    tf(1, 'Solomon brought Hiram from Tyre.', true, 13),
    tf(1, 'Hiram came to Solomon from Egypt.', false, 13, 'Solomon sent and brought Hiram from Tyre.'),

    mc(1, 'Hiram’s mother was a widow of which tribe?', ['Naphtali', 'Judah', 'Dan', 'Benjamin'], 14),
    word(1, 'Hiram was the son of a widow of which tribe?', 'Naphtali', 14),
    blank(2, 'He was the son of a widow of the tribe of _____, and his father was a man of Tyre, a worker in bronze;', 'Naph’tali', 14, ['naphtali']),
    mc(2, 'What was Hiram’s father?', ['A man of Tyre, a worker in bronze', 'A priest of Naphtali', 'A carpenter of Lebanon', 'A stonemason of Jerusalem'], 14),
    blank(3, 'and he was full of wisdom, understanding, and skill, for making any work in _____.', 'bronze', 14),
    word(1, 'Hiram was skilled at making any work in what metal?', 'bronze', 14, ['brass']),
    tf(1, 'Hiram’s mother was a widow of the tribe of Naphtali.', true, 14),
    tf(3, 'Hiram’s father was a man of Naphtali.', false, 14, 'His mother was of Naphtali; his father was a man of Tyre, a worker in bronze.'),
    mc(3, 'Which three qualities is Hiram said to be full of?', ['Wisdom, understanding, and skill', 'Faith, hope, and love', 'Strength, courage, and zeal', 'Knowledge, riches, and honor'], 14),

    // ══════════════════════════════════ v15–22 · The two bronze pillars
    word(1, 'How many pillars of bronze did Hiram cast?', 'two', 15, ['2']),
    mc(2, 'How tall was each bronze pillar?', ['Eighteen cubits', 'Twelve cubits', 'Five cubits', 'Thirty cubits'], 15),
    blank(2, 'He cast two pillars of bronze. _____ cubits was the height of one pillar, and a line of twelve cubits measured its circumference;', 'Eighteen', 15, ['18']),
    blank(3, 'and a line of _____ cubits measured its circumference; it was hollow, and its thickness was four fingers;', 'twelve', 15, ['12']),
    word(3, 'The thickness of the bronze pillar was four what?', 'fingers', 15, ['finger']),
    tf(2, 'The bronze pillars were hollow.', true, 15),
    tf(3, 'A line of twelve cubits measured the height of each pillar.', false, 15, 'Twelve cubits was the circumference; the height was eighteen cubits.'),
    mc(3, 'What was the thickness of the bronze pillar?', ['Four fingers', 'A handbreadth', 'One cubit', 'Half a cubit'], 15),

    word(2, 'How many cubits high was each capital on the pillars?', 'five', 16, ['5']),
    blank(2, 'He also made two _____ of molten bronze, to set upon the tops of the pillars;', 'capitals', 16),
    mc(2, 'What did Hiram make of molten bronze to set upon the tops of the pillars?', ['Two capitals', 'Two lavers', 'Two bowls of gold', 'Two cherubim'], 16),
    mc(3, 'How tall was each capital of molten bronze?', ['Five cubits', 'Four cubits', 'Eighteen cubits', 'Twelve cubits'], 16),
    blank(3, 'the height of the one capital was five cubits, and the height of the other capital was _____ cubits.', 'five', 16, ['5']),

    mc(2, 'What did Hiram make for the capitals on the tops of the pillars?', ['Nets of checker work with wreaths of chain work', 'Curtains of blue and purple', 'Rings of gold', 'Carved cedar panels'], 17),
    blank(3, 'Then he made two nets of _____ work with wreaths of chain work for the capitals upon the tops of the pillars;', 'checker', 17, ['chequer']),
    word(3, 'The wreaths on the nets for the capitals were of what kind of work?', 'chain', 17, ['chain work']),
    mc(2, 'How many nets did Hiram make for the capitals?', ['Two — a net for each capital', 'One large net covering both', 'Four', 'Twelve'], 17),

    word(1, 'What fruit was made in two rows round about upon the network?', 'pomegranates', 18, ['pomegranate']),
    blank(2, 'Likewise he made _____; in two rows round about upon the one network, to cover the capital that was upon the top of the pillar;', 'pomegranates', 18),
    mc(1, 'How were the pomegranates arranged upon the network?', ['In two rows round about', 'In a single line down the pillar', 'In four clusters at the corners', 'In three tiers'], 18),
    tf(2, 'The pomegranates were arranged in three rows upon the network.', false, 18, 'They were in two rows round about.'),

    word(2, 'The capitals in the vestibule were of what kind of work?', 'lily-work', 19, ['lily', 'lily work', 'lilywork']),
    blank(3, 'Now the capitals that were upon the tops of the pillars in the vestibule were of lily-work, _____ cubits.', 'four', 19, ['4']),
    mc(3, 'The lily-work of the capitals in the vestibule measured how many cubits?', ['Four', 'Five', 'Twelve', 'Eighteen'], 19),
    tf(2, 'The capitals in the vestibule were of lily-work.', true, 19),

    sa(2, 'How many pomegranates were there on each capital, in two rows round about?', 'two hundred', 20, ['200']),
    blank(2, 'there were _____ pomegranates, in two rows round about; and so with the other capital.', 'two hundred', 20, ['200']),
    mc(3, 'How many pomegranates were on one capital according to 1 Kings 7:20?', ['Two hundred', 'One hundred', 'Four hundred', 'Fifty'], 20),
    tf(3, 'Each capital had one hundred pomegranates in two rows round about.', false, 20, 'There were two hundred pomegranates.'),
    blank(3, 'The capitals were upon the two pillars and also above the rounded _____ which was beside the network;', 'projection', 20),

    mc(1, 'What were the names of the two pillars?', ['Jachin and Boaz', 'Jachin and Hiram', 'Boaz and Obed', 'Zion and Moriah'], 21),
    word(1, 'What was the name of the pillar set up on the south?', 'Jachin', 21),
    word(1, 'What was the name of the pillar set up on the north?', 'Boaz', 21),
    blank(1, 'he set up the pillar on the south and called its name _____;', 'Jachin', 21),
    blank(2, 'and he set up the pillar on the north and called its name _____.', 'Bo’az', 21, ['boaz']),
    mc(1, 'Where did Hiram set up the two pillars?', ['At the vestibule of the temple', 'In the great court', 'In the Hall of Judgment', 'By the molten sea'], 21),
    tf(1, 'The pillar on the south was called Jachin.', true, 21),
    tf(2, 'The pillar on the north was called Jachin.', false, 21, 'The north pillar was Boaz; Jachin was on the south.'),
    mc(3, 'Which pillar stood on the north?', ['Boaz', 'Jachin', 'Both stood on the south', 'Neither — they stood east and west'], 21),

    blank(2, 'And upon the tops of the pillars was _____. Thus the work of the pillars was finished.', 'lily-work', 22, ['lily work', 'lilywork']),
    tf(2, 'Upon the tops of the pillars were carved palm trees.', false, 22, 'Upon the tops of the pillars was lily-work.'),
    word(3, 'What does 1 Kings 7:22 say was "finished"? The work of the ___.', 'pillars', 22),
    mc(3, 'What was on the tops of the pillars, according to 1 Kings 7:22?', ['Lily-work', 'Gold crowns', 'Cherubim', 'Carved palm trees'], 22),

    // ══════════════════════════════════ v23–26 · The molten sea
    mc(1, 'What large round object did Hiram make, ten cubits from brim to brim?', ['The molten sea', 'The great laver', 'The bronze altar', 'The throne'], 23),
    word(1, 'The great round bronze vessel Hiram made was called the molten ___.', 'sea', 23),
    blank(1, 'Then he made the molten sea; it was round, _____ cubits from brim to brim, and five cubits high,', 'ten', 23, ['10']),
    blank(3, 'and five cubits high, and a line of _____ cubits measured its circumference.', 'thirty', 23, ['30']),
    mc(3, 'What were the measurements of the molten sea?', ['Ten cubits brim to brim, five cubits high, thirty cubits around', 'Twelve cubits brim to brim, eighteen high, thirty around', 'Five cubits brim to brim, ten high, twenty around', 'Thirty cubits brim to brim, ten high, fifty around'], 23),
    word(2, 'How many cubits high was the molten sea?', 'five', 23, ['5']),
    tf(1, 'The molten sea was round.', true, 23),
    mc(3, 'What was the circumference of the molten sea?', ['Thirty cubits', 'Ten cubits', 'Twelve cubits', 'Fifty cubits'], 23),
    tf(2, 'The molten sea was square, ten cubits on each side.', false, 23, 'It was round, ten cubits from brim to brim.'),

    word(1, 'What was under the brim of the sea, compassing it round about?', 'gourds', 24, ['gourd']),
    blank(2, 'Under its brim were _____, for thirty cubits, compassing the sea round about;', 'gourds', 24),
    mc(3, 'How were the gourds under the brim of the sea made?', ['Cast with the sea when it was cast', 'Hammered on afterward', 'Carved from cedar and overlaid', 'Attached with rings of gold'], 24),
    mc(3, 'In how many rows were the gourds under the brim of the sea?', ['Two', 'Three', 'One', 'Four'], 24),
    tf(2, 'Under the brim of the sea were pomegranates in two rows.', false, 24, 'Under the brim were gourds; pomegranates were on the pillar capitals.'),

    mc(1, 'What did the molten sea stand upon?', ['Twelve oxen', 'Four bronze wheels', 'Ten stands', 'A pedestal of costly stones'], 25),
    word(1, 'How many oxen did the sea stand upon?', 'twelve', 25, ['12']),
    blank(1, 'It stood upon _____ oxen, three facing north, three facing west, three facing south, and three facing east;', 'twelve', 25, ['12']),
    mc(1, 'How were the twelve oxen under the sea arranged?', ['Three facing each of the four directions', 'Six on the north and six on the south', 'Four facing east, four west, four south', 'All twelve facing the temple'], 25),
    blank(3, 'the sea was set upon them, and all their hinder parts were _____.', 'inward', 25),
    mc(2, 'Which way did the hinder parts of the twelve oxen face?', ['Inward', 'Outward', 'North', 'Toward the temple'], 25),
    tf(1, 'The sea stood upon twelve lions.', false, 25, 'It stood upon twelve oxen.'),
    word(3, 'How many of the oxen under the sea faced north?', 'three', 25, ['3']),

    sa(2, 'How many baths did the molten sea hold?', 'two thousand', 26, ['2000', '2,000']),
    blank(2, 'Its thickness was a _____; and its brim was made like the brim of a cup, like the flower of a lily;', 'handbreadth', 26, ['hand breadth']),
    blank(3, 'like the flower of a lily; it held _____ baths.', 'two thousand', 26, ['2000', '2,000']),
    mc(2, 'The brim of the sea was made like what?', ['The brim of a cup, like the flower of a lily', 'The rim of a chariot wheel', 'A crown of gold', 'The mouth of a lion'], 26),
    mc(3, 'How much did the molten sea hold?', ['Two thousand baths', 'Forty baths', 'Two hundred baths', 'Ten thousand baths'], 26),
    tf(3, 'The thickness of the sea was four fingers.', false, 26, 'Its thickness was a handbreadth; four fingers was the thickness of the pillars.'),
    tf(1, 'The molten sea held forty baths.', false, 26, 'It held two thousand baths; forty baths was the capacity of each laver.'),

    // ══════════════════════════════════ v27–37 · The ten bronze stands
    word(1, 'How many stands of bronze did Hiram make?', 'ten', 27, ['10']),
    blank(2, 'He also made the _____ stands of bronze; each stand was four cubits long, four cubits wide, and three cubits high.', 'ten', 27, ['10']),
    mc(2, 'What were the dimensions of each bronze stand?', ['Four cubits long, four wide, three high', 'Three cubits long, three wide, four high', 'Ten cubits long, five wide, five high', 'Four cubits long, four wide, four high'], 27),
    tf(2, 'Each bronze stand was four cubits high.', false, 27, 'Each stand was four cubits long and four wide, but three cubits high.'),
    blank(3, 'each stand was four cubits long, four cubits wide, and _____ cubits high.', 'three', 27, ['3']),

    word(2, 'The stands had panels, which were set in what?', 'frames', 28, ['the frames']),
    blank(2, 'This was the construction of the stands: they had _____, and the panels were set in the frames', 'panels', 28),
    tf(1, 'The panels of the stands were set in the frames.', true, 28),
    mc(3, 'What does 1 Kings 7:28 say the stands had?', ['Panels set in the frames', 'Curtains hung on rings', 'Steps leading up', 'Horns at the corners'], 28),

    mc(1, 'What figures were on the panels of the stands?', ['Lions, oxen, and cherubim', 'Eagles, lions, and men', 'Palm trees, pomegranates, and gourds', 'Horses, chariots, and oxen'], 29),
    blank(2, 'and on the panels that were set in the frames were lions, oxen, and _____.', 'cherubim', 29, ['cherubims', 'cherubs']),
    word(3, 'Above and below the lions and oxen on the frames were wreaths of what kind of work?', 'beveled', 29, ['bevelled', 'beveled work']),
    tf(2, 'The panels of the stands had lions, oxen, and cherubim on them.', true, 29),
    tf(3, 'Above and below the lions and oxen were wreaths of chain work.', false, 29, 'They were wreaths of beveled work; chain work was on the pillar capitals.'),

    word(1, 'How many bronze wheels did each stand have?', 'four', 30, ['4']),
    blank(2, 'Moreover each stand had four bronze _____ and axles of bronze; and at the four corners were supports for a laver.', 'wheels', 30),
    mc(2, 'What were at the four corners of each stand?', ['Supports for a laver', 'Bronze lions', 'Golden lampstands', 'Carved pomegranates'], 30),
    tf(1, 'Each stand had four bronze wheels and axles of bronze.', true, 30),
    blank(3, 'The supports were cast, with _____ at the side of each.', 'wreaths', 30),

    word(3, 'The opening of the stand was within a crown that projected upward how many cubits?', 'one', 31, ['1', 'one cubit', 'a cubit']),
    blank(3, 'Its opening was within a _____ which projected upward one cubit;', 'crown', 31),
    mc(3, 'What shape were the panels of the stand, according to 1 Kings 7:31?', ['Square, not round', 'Round, not square', 'Triangular', 'Oval'], 31),
    tf(3, 'The opening of the stand was three cubits deep.', false, 31, 'It was a cubit and a half deep.'),
    tf(2, 'The panels of the stand were round, not square.', false, 31, 'They were square, not round.'),

    word(2, 'What was the height of a wheel on the stand? A cubit and a ___.', 'half', 32),
    blank(2, 'And the four wheels were underneath the _____; the axles of the wheels were of one piece with the stands;', 'panels', 32),
    mc(3, 'How high was each wheel of the stands?', ['A cubit and a half', 'One cubit', 'Three cubits', 'Half a cubit'], 32),
    tf(3, 'The axles of the wheels were of one piece with the stands.', true, 32),

    mc(2, 'The wheels of the stands were made like what?', ['A chariot wheel', 'A millstone', 'A potter’s wheel', 'A shield'], 33),
    word(1, 'The wheels of the stands were made like what kind of wheel?', 'chariot', 33, ['chariot wheel']),
    blank(2, 'The wheels were made like a _____ wheel; their axles, their rims, their spokes, and their hubs, were all cast.', 'chariot', 33),
    tf(3, 'The axles, rims, spokes, and hubs of the wheels were all cast.', true, 33),
    blank(3, 'their axles, their rims, their _____, and their hubs, were all cast.', 'spokes', 33),

    word(2, 'How many supports were at the corners of each stand?', 'four', 34, ['4']),
    blank(3, 'There were four supports at the four corners of each stand; the supports were of one _____ with the stands.', 'piece', 34),
    tf(3, 'The supports at the corners were attached separately with bronze pins.', false, 34, 'The supports were of one piece with the stands.'),
    mc(2, 'Where were the four supports of each stand located?', ['At the four corners', 'Under the wheels', 'On top of the round band', 'Inside the opening'], 34),

    word(3, 'How high was the round band on top of the stand? ___ a cubit.', 'half', 35),
    blank(3, 'And on the top of the stand there was a round _____ half a cubit high;', 'band', 35),
    mc(3, 'What was on the top of each stand?', ['A round band half a cubit high', 'A square crown one cubit high', 'A bronze lion', 'A lampstand of gold'], 35),
    tf(2, 'On the top of the stand was a round band half a cubit high.', true, 35),

    mc(2, 'What did Hiram carve on the surfaces of the stays and panels?', ['Cherubim, lions, and palm trees', 'Oxen, gourds, and pomegranates', 'Eagles, serpents, and vines', 'Stars, moons, and suns'], 36),
    sa(2, 'Along with cherubim and lions, what trees were carved on the stays and panels?', 'palm trees', 36, ['palm', 'palms', 'palm tree']),
    blank(2, 'And on the surfaces of its stays and on its panels, he carved cherubim, lions, and _____ trees, according to the space of each, with wreaths round about.', 'palm', 36),
    tf(3, 'The cherubim, lions, and palm trees were carved "according to the space of each".', true, 36),

    blank(2, 'After this manner he made the ten stands; all of them were cast alike, of the same _____ and the same form.', 'measure', 37),
    tf(1, 'All ten stands were cast alike, of the same measure and the same form.', true, 37),
    mc(2, 'What does 1 Kings 7:37 say about the ten stands?', ['All were cast alike, of the same measure and form', 'Each was a different size', 'Five were bronze and five were gold', 'They were carved from cedar'], 37),
    word(3, 'All ten stands were cast alike, of the same measure and the same ___.', 'form', 37),

    // ══════════════════════════════════ v38–39 · The ten lavers and their placement
    word(1, 'How many lavers of bronze did Hiram make?', 'ten', 38, ['10']),
    mc(1, 'How many baths did each laver hold?', ['Forty', 'Two thousand', 'Ten', 'Four'], 38),
    blank(2, 'And he made ten lavers of bronze; each laver held _____ baths, each laver measured four cubits,', 'forty', 38, ['40']),
    blank(3, 'each laver measured _____ cubits, and there was a laver for each of the ten stands.', 'four', 38, ['4']),
    tf(1, 'There was a laver for each of the ten stands.', true, 38),
    tf(1, 'Each laver held two thousand baths.', false, 38, 'Each laver held forty baths; the sea held two thousand.'),

    mc(1, 'Where was the sea set?', ['On the southeast corner of the house', 'On the north side of the house', 'In the great court', 'At the vestibule of the temple'], 39),
    word(2, 'On which corner of the house was the sea set?', 'southeast', 39, ['south east', 'south-east']),
    blank(2, 'And he set the stands, five on the south side of the house, and five on the _____ side of the house;', 'north', 39),
    blank(3, 'and he set the sea on the _____ corner of the house.', 'southeast', 39, ['south east', 'south-east']),
    tf(1, 'Five stands were set on the south side of the house and five on the north.', true, 39),
    tf(3, 'The sea was set on the northwest corner of the house.', false, 39, 'It was set on the southeast corner.'),
    mc(2, 'How were the ten stands placed?', ['Five on the south side and five on the north side of the house', 'All ten around the sea', 'Ten in a row at the vestibule', 'Five in the great court and five in the inner court'], 39),

    // ══════════════════════════════════ v40–47 · Summary of Hiram’s bronze work
    mc(2, 'Which three items does 1 Kings 7:40 say Hiram also made?', ['The pots, the shovels, and the basins', 'The lampstands, the tables, and the altar', 'The cups, the snuffers, and the tongs', 'The doors, the sockets, and the hinges'], 40),
    blank(1, 'Hiram also made the pots, the _____, and the basins.', 'shovels', 40),
    tf(1, 'Hiram finished all the work that he did for King Solomon on the house of the LORD.', true, 40),
    word(2, 'Along with the pots and shovels, Hiram made the ___.', 'basins', 40, ['basin', 'bowls']),

    word(3, 'In 1 Kings 7:41, the tops of the capitals are called the two ___ of the capitals.', 'bowls', 41, ['bowl']),
    blank(3, 'the two pillars, the two _____ of the capitals that were on the tops of the pillars, and the two networks to cover the two bowls of the capitals that were on the tops of the pillars;', 'bowls', 41),
    mc(3, 'What covered the two bowls of the capitals?', ['The two networks', 'The two lavers', 'Two sheets of gold', 'Two cedar canopies'], 41),
    tf(2, 'The list of Hiram’s finished work begins with the two pillars.', true, 41),

    sa(2, 'How many pomegranates in total were made for the two networks?', 'four hundred', 42, ['400']),
    blank(2, 'and the _____ pomegranates for the two networks, two rows of pomegranates for each network,', 'four hundred', 42, ['400']),
    mc(2, 'How many pomegranates were there for the two networks together?', ['Four hundred', 'Two hundred', 'One hundred', 'Two thousand'], 42),
    tf(3, 'There were four hundred pomegranates for the two networks.', true, 42),
    tf(2, 'There were three rows of pomegranates for each network.', false, 42, 'There were two rows of pomegranates for each network.'),

    blank(1, 'the ten stands, and the ten _____ upon the stands;', 'lavers', 43, ['laver']),
    word(2, 'What sat upon the ten stands?', 'lavers', 43, ['laver', 'the lavers']),
    tf(1, 'There were ten lavers upon the ten stands.', true, 43),
    mc(2, 'According to 1 Kings 7:43, how many stands and lavers were there?', ['Ten stands and ten lavers', 'Twelve stands and twelve lavers', 'Ten stands and one laver', 'Five stands and five lavers'], 43),

    blank(1, 'and the one sea, and the _____ oxen underneath the sea;', 'twelve', 44, ['12']),
    mc(1, 'What was underneath the sea?', ['Twelve oxen', 'Ten stands', 'Four wheels', 'Two pillars'], 44),
    word(2, 'How many seas did Hiram make?', 'one', 44, ['1']),
    tf(2, 'Hiram made two seas with twelve oxen each.', false, 44, 'He made one sea with twelve oxen underneath it.'),

    word(2, 'The pots, shovels, and basins were of what kind of bronze?', 'burnished', 45, ['burnished bronze']),
    blank(2, 'all these vessels in the house of the LORD, which Hiram made for King Solomon, were of _____ bronze.', 'burnished', 45),
    mc(1, 'What were the pots, shovels, and basins made of?', ['Burnished bronze', 'Pure gold', 'Silver', 'Iron'], 45),
    tf(1, 'The pots, shovels, and basins were made of pure gold.', false, 45, 'They were of burnished bronze.'),

    mc(1, 'Where were the bronze vessels cast?', ['In the plain of the Jordan, between Succoth and Zarethan', 'In Tyre', 'In the great court in Jerusalem', 'In the plain of Sharon'], 46),
    word(1, 'The vessels were cast in the plain of which river?', 'Jordan', 46, ['the jordan']),
    blank(2, 'In the plain of the _____ the king cast them, in the clay ground between Succoth and Zarethan.', 'Jordan', 46),
    blank(3, 'in the clay ground between Succoth and _____.', 'Zarethan', 46, ['zaretan']),
    word(3, 'The vessels were cast in the clay ground between Zarethan and which other place?', 'Succoth', 46, ['sukkoth', 'succot']),
    tf(3, 'The king cast the vessels in the clay ground between Succoth and Zarethan.', true, 46),
    tf(1, 'The bronze vessels were cast in Tyre and shipped to Jerusalem.', false, 46, 'They were cast in the plain of the Jordan, between Succoth and Zarethan.'),

    mc(1, 'Why did Solomon leave all the vessels unweighed?', ['Because there were so many of them', 'Because the scales were lost', 'Because Hiram forbade it', 'Because they were too heavy to lift'], 47),
    blank(2, 'And Solomon left all the vessels _____, because there were so many of them; the weight of the bronze was not found out.', 'unweighed', 47),
    word(2, 'The weight of what metal was "not found out"?', 'bronze', 47),
    tf(1, 'Solomon carefully weighed every bronze vessel and recorded the total.', false, 47, 'He left all the vessels unweighed because there were so many; the weight of the bronze was not found out.'),
    tf(2, 'The weight of the bronze was not found out.', true, 47),

    // ══════════════════════════════════ v48–51 · The gold furnishings; the work finished
    mc(1, 'What was the golden table in 1 Kings 7:48 for?', ['The bread of the Presence', 'The incense', 'The lampstands', 'The ark'], 48),
    blank(2, 'So Solomon made all the vessels that were in the house of the LORD: the golden _____, the golden table for the bread of the Presence,', 'altar', 48),
    word(2, 'The golden table was for the bread of the ___.', 'Presence', 48),
    tf(2, 'The altar and the table for the bread of the Presence were of gold.', true, 48),
    tf(1, 'The table for the bread of the Presence was made of bronze.', false, 48, 'It was a golden table.'),

    mc(1, 'How many lampstands of pure gold were there, and where?', ['Ten — five on the south side and five on the north', 'Seven, all before the ark', 'Twelve, one for each tribe', 'Two, one at each pillar'], 49),
    word(1, 'The lampstands were made of what?', 'gold', 49, ['pure gold']),
    blank(2, 'the lampstands of pure gold, five on the south side and five on the north, before the inner _____;', 'sanctuary', 49),
    blank(3, 'the _____, the lamps, and the tongs, of gold;', 'flowers', 49),
    mc(2, 'Where did the lampstands of pure gold stand?', ['Before the inner sanctuary', 'In the great court', 'At the vestibule of the temple', 'Beside the molten sea'], 49),
    tf(1, 'The lampstands were of burnished bronze.', false, 49, 'The lampstands were of pure gold.'),
    mc(3, 'Which items are listed with the lamps as being "of gold" in 1 Kings 7:49?', ['The flowers and the tongs', 'The pots and the shovels', 'The cups and the firepans', 'The wheels and the axles'], 49),

    mc(2, 'Which of these items was made of pure gold according to 1 Kings 7:50?', ['Dishes for incense', 'Shovels', 'Wheels', 'Lavers'], 50),
    word(3, 'The sockets of gold were for the doors of the innermost part of the house, also called the most ___ place.', 'holy', 50, ['most holy']),
    blank(2, 'the cups, snuffers, basins, dishes for _____, and firepans, of pure gold;', 'incense', 50),
    blank(3, 'and the sockets of gold, for the doors of the innermost part of the house, the most holy place, and for the doors of the _____ of the temple.', 'nave', 50),
    tf(2, 'The sockets for the doors of the most holy place were of gold.', true, 50),
    tf(3, 'The cups, snuffers, and firepans were of burnished bronze.', false, 50, 'They were of pure gold.'),
    mc(3, 'For which doors were the gold sockets made?', ['The doors of the most holy place and the doors of the nave of the temple', 'The doors of the Hall of Judgment', 'The gates of the great court', 'The doors of the House of the Forest of Lebanon'], 50),

    mc(1, 'What did Solomon bring into the house of the LORD after the work was finished?', ['The things David his father had dedicated — the silver, the gold, and the vessels', 'The ark of the covenant', 'The spoils of Egypt', 'Hiram’s wages'], 51),
    word(1, 'Whose dedicated things did Solomon bring into the house of the LORD?', 'David', 51, ['david his father', 'his father david']),
    blank(2, 'And Solomon brought in the things which David his father had dedicated, the silver, the gold, and the vessels, and stored them in the _____ of the house of the LORD.', 'treasuries', 51, ['treasury']),
    blank(1, 'Thus all the work that King Solomon did on the house of the LORD was _____.', 'finished', 51),
    tf(2, 'Solomon stored the things David had dedicated in the treasuries of the house of the LORD.', true, 51),
    tf(3, 'Solomon brought in the things which Hiram had dedicated and stored them in the treasuries.', false, 51, 'They were the things David his father had dedicated.'),
    mc(3, 'Which three kinds of dedicated things are listed in 1 Kings 7:51?', ['The silver, the gold, and the vessels', 'The bronze, the cedar, and the stones', 'The oxen, the sheep, and the goats', 'The garments, the spices, and the oil'], 51),

    // ══════════════════════════════════ Whole-chapter
    mc(1, 'Who was the bronze craftsman Solomon brought from Tyre in 1 Kings 7?', ['Hiram', 'Adoniram', 'Zadok', 'Benaiah'], 13),
    mc(2, 'Which of these did Hiram make of bronze in 1 Kings 7?', ['The molten sea', 'The lampstands', 'The dishes for incense', 'The sockets for the doors of the most holy place'], 23),
    mc(2, 'Which items in 1 Kings 7 were made of gold rather than bronze?', ['The lampstands, cups, snuffers, and firepans', 'The pillars Jachin and Boaz', 'The ten stands and lavers', 'The molten sea and the twelve oxen'], 50),
    mc(3, 'Which of these buildings is NOT named in 1 Kings 7?', ['The House of Cedar', 'The House of the Forest of Lebanon', 'The Hall of Pillars', 'The Hall of the Throne'], 2),
    tf(2, 'Hiram’s bronze work was left unweighed because there was so much of it.', true, 47),
    mc(3, 'In the order of the account in 1 Kings 7, which did Hiram make FIRST?', ['The two bronze pillars', 'The molten sea', 'The ten stands', 'The ten lavers'], 15),
  ],
};

export default bank;
