// Run: npx tsx scripts/seed-1kings-7-12.ts
import * as fs from 'fs';
import * as path from 'path';
import { createClient } from '@supabase/supabase-js';

function loadEnvLocal() {
  const envPath = path.resolve(process.cwd(), '.env.local');
  if (!fs.existsSync(envPath)) return;
  const lines = fs.readFileSync(envPath, 'utf-8').split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const val = trimmed.slice(eqIdx + 1).trim();
    if (!process.env[key]) process.env[key] = val;
  }
}
loadEnvLocal();

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { persistSession: false } }
);

const quizData: Record<string, { question: string; options: string[]; correct_index: number; explanation: string }[]> = {
  '1 Kings:7': [
    {
      question: 'How many years did it take Solomon to build his own palace complex?',
      options: ['7 years', '10 years', '13 years', '20 years'],
      correct_index: 2,
      explanation: '1 Kings 7:1 — "Solomon was building his own house thirteen years, and he finished his entire house."',
    },
    {
      question: 'What was the name of the building Solomon constructed using cedars of Lebanon as its main feature?',
      options: ['Hall of Pillars', 'Hall of the Throne', 'House of the Forest of Lebanon', "Pharaoh's daughter's house"],
      correct_index: 2,
      explanation: '1 Kings 7:2 — "He built the House of the Forest of Lebanon; its length was a hundred cubits and its breadth fifty cubits and its height thirty cubits, and it was built on four rows of cedar pillars."',
    },
    {
      question: "What was Hiram the craftsman's parentage?",
      options: [
        'Son of a widow of the tribe of Dan, father a man of Tyre',
        'Son of a widow of the tribe of Naphtali, father a man of Tyre',
        'Son of a widow of the tribe of Judah, father an Israelite',
        'Son of a widow of the tribe of Ephraim, father a Phoenician',
      ],
      correct_index: 1,
      explanation: '1 Kings 7:14 — "He was the son of a widow of the tribe of Naphtali, and his father was a man of Tyre, a worker in bronze."',
    },
    {
      question: 'What were the names of the two bronze pillars Hiram made for the temple porch?',
      options: ['Asher and Zebulun', 'Jachin and Boaz', 'Gad and Manasseh', 'Ephraim and Benjamin'],
      correct_index: 1,
      explanation: '1 Kings 7:21 — "He set up the pillars at the vestibule of the temple. He set up the right pillar and called its name Jachin, and he set up the left pillar and called its name Boaz."',
    },
    {
      question: 'How many baths could the bronze Sea hold?',
      options: ['1,000 baths', '1,500 baths', '2,000 baths', '3,000 baths'],
      correct_index: 2,
      explanation: '1 Kings 7:26 — "Its thickness was a handbreadth, and its brim was made like the brim of a cup, like the flower of a lily. It held two thousand baths."',
    },
    {
      question: 'On what did the bronze Sea rest?',
      options: [
        'Twelve lions arranged in a circle',
        'Twelve oxen, three facing each cardinal direction',
        'Four bronze wheels',
        'A solid bronze platform',
      ],
      correct_index: 1,
      explanation: '1 Kings 7:25 — "It stood on twelve oxen, three facing north, three facing west, three facing south, and three facing east."',
    },
    {
      question: 'How many bronze stands (or carts) did Hiram make for the temple?',
      options: ['Five', 'Seven', 'Ten', 'Twelve'],
      correct_index: 2,
      explanation: '1 Kings 7:27 — "He also made the ten stands of bronze."',
    },
    {
      question: 'What material was used for all the vessels that Hiram made for the temple?',
      options: ['Gold', 'Silver', 'Polished bronze', 'Hammered iron'],
      correct_index: 2,
      explanation: '1 Kings 7:45 — "the pots, the shovels, and the basins. All these vessels in the house of the LORD, which Hiram made for King Solomon, were of burnished bronze."',
    },
    {
      question: "Where did Solomon place all the gold vessels that David his father had dedicated?",
      options: [
        'In the treasuries of the palace',
        'In the treasuries of the house of the LORD',
        'In the Hall of the Throne',
        'Buried beneath the temple mount',
      ],
      correct_index: 1,
      explanation: '1 Kings 7:51 — "Solomon brought in the things that David his father had dedicated, the silver, the gold, and the vessels, and stored them in the treasuries of the house of the LORD."',
    },
    {
      question: 'Which hall did Solomon build specifically for rendering judicial decisions, and what covered the floor?',
      options: [
        'Hall of Pillars, cedar wood floor',
        'Hall of the Throne where he was to pronounce judgment, cedar from floor to floor',
        'House of the Forest of Lebanon, stone floor',
        "Pharaoh's daughter's house, tiled floor",
      ],
      correct_index: 1,
      explanation: '1 Kings 7:7 — "And he made the Hall of the Throne where he was to pronounce judgment, even the Hall of Judgment, and it was finished with cedar from floor to floor."',
    },
  ],

  '1 Kings:8': [
    {
      question: 'What happened when the priests brought the ark into the Most Holy Place and withdrew?',
      options: [
        'A fire came down from heaven and consumed the sacrifices',
        'A cloud filled the house of the LORD so that the priests could not stand to minister',
        'The ground shook and the people fell on their faces',
        'A voice spoke from the ark declaring the covenant',
      ],
      correct_index: 1,
      explanation: '1 Kings 8:10-11 — "When the priests came out of the Holy Place, a cloud filled the house of the LORD, so that the priests could not stand to minister because of the cloud, for the glory of the LORD filled the house of the LORD."',
    },
    {
      question: 'What was inside the ark of the covenant when it was brought into the temple?',
      options: [
        'The two stone tablets, the golden pot of manna, and Aaron\'s staff',
        'Nothing but the two stone tablets of Moses',
        'The golden pot of manna and Aaron\'s budded staff only',
        'The two stone tablets, the book of the law, and a golden jar',
      ],
      correct_index: 1,
      explanation: '1 Kings 8:9 — "There was nothing in the ark except the two tablets of stone that Moses put there at Horeb, where the LORD made a covenant with the people of Israel."',
    },
    {
      question: "What key theological statement did Solomon make about God's relationship to the temple?",
      options: [
        '"This house shall be the only place where God may be found."',
        '"The LORD has said that he would dwell in thick darkness."',
        '"God now lives in Jerusalem and nowhere else."',
        '"This temple contains the fullness of the Almighty."',
      ],
      correct_index: 1,
      explanation: '1 Kings 8:12 — "Then Solomon said, \'The LORD has said that he would dwell in thick darkness.\'"',
    },
    {
      question: 'In his dedicatory prayer, Solomon acknowledged a fundamental truth about God and the temple. What was it?',
      options: [
        'God had finally found a permanent home among his people',
        'The temple was too small and must be expanded',
        '"But will God indeed dwell on the earth? Behold, heaven and the highest heaven cannot contain you; how much less this house that I have built!"',
        'God would leave if the people sinned against him',
      ],
      correct_index: 2,
      explanation: '1 Kings 8:27 — Solomon prays, "But will God indeed dwell on the earth? Behold, heaven and the highest heaven cannot contain you; how much less this house that I have built!"',
    },
    {
      question: 'How many petitions did Solomon include in his great dedicatory prayer?',
      options: ['Five', 'Six', 'Seven', 'Ten'],
      correct_index: 2,
      explanation: 'In 1 Kings 8:31-53, Solomon offers seven petitions covering situations such as oaths, defeat in battle, drought, famine, plague, foreigners who pray, and war.',
    },
    {
      question: "In Solomon's prayer, what did he ask God to do when a foreigner from a distant land prays toward the temple?",
      options: [
        'Ignore the prayer since the covenant was with Israel alone',
        'Hear in heaven and do according to all for which the foreigner calls, so all peoples may know the LORD',
        'Send an angel to escort the foreigner into the temple',
        'Require the foreigner to offer a sacrifice first',
      ],
      correct_index: 1,
      explanation: '1 Kings 8:43 — "hear in heaven your dwelling place and do according to all for which the foreigner calls to you, in order that all the peoples of the earth may know your name."',
    },
    {
      question: 'What posture did Solomon adopt during his dedicatory prayer?',
      options: [
        'Standing throughout with arms raised',
        'Prostrate on the ground the entire time',
        'He began standing before the altar, then knelt with hands spread toward heaven',
        'Seated on his throne facing the ark',
      ],
      correct_index: 2,
      explanation: '1 Kings 8:22, 54 — Solomon stood before the altar (v. 22) then knelt down with hands spread toward heaven (v. 54).',
    },
    {
      question: 'How long was the feast of dedication that Solomon held?',
      options: ['7 days', '14 days (7 + 7)', '21 days', '40 days'],
      correct_index: 1,
      explanation: '1 Kings 8:65 — "So Solomon held the feast at that time, and all Israel with him, a great assembly, from Lebo-hamath to the Brook of Egypt, before the LORD our God, seven days and seven days, fourteen days."',
    },
    {
      question: 'How many oxen and sheep did Solomon sacrifice at the dedication of the temple?',
      options: [
        '7,000 oxen and 14,000 sheep',
        '22,000 oxen and 120,000 sheep',
        '10,000 oxen and 100,000 sheep',
        '1,000 oxen and 7,000 sheep',
      ],
      correct_index: 1,
      explanation: '1 Kings 8:63 — "Solomon offered as peace offerings to the LORD 22,000 oxen and 120,000 sheep. So the king and all the people of Israel dedicated the house of the LORD."',
    },
    {
      question: "What was the people's response at the end of the dedication ceremony?",
      options: [
        'They wept for the sins they had committed',
        'They demanded Solomon build more temples in the north',
        'They blessed the king and went to their homes joyful and glad of heart',
        'They returned to their tribes and forgot the covenant',
      ],
      correct_index: 2,
      explanation: '1 Kings 8:66 — "On the eighth day he sent the people away, and they blessed the king and went to their homes joyful and glad of heart for all the goodness that the LORD had shown to David his servant and to Israel his people."',
    },
  ],

  '1 Kings:9': [
    {
      question: "When did God appear to Solomon the second time?",
      options: [
        'On the night Solomon finished the temple',
        'After Solomon finished building the temple and his own house and all that Solomon desired to build',
        'While Solomon was offering sacrifices at Gibeon',
        'On the fortieth year of his reign',
      ],
      correct_index: 1,
      explanation: '1 Kings 9:1-2 — "When Solomon had finished building the house of the LORD and the king\'s house and all that Solomon desired to build, the LORD appeared to Solomon a second time."',
    },
    {
      question: "In God's second appearance, what conditional promise did He make about Solomon's throne?",
      options: [
        'Your throne will stand forever regardless of your behavior',
        'If you walk in my ways as David your father walked, I will establish your royal throne over Israel forever',
        'Your son will rule after you only if the people remain faithful',
        'The throne will pass to the strongest of your sons',
      ],
      correct_index: 1,
      explanation: '1 Kings 9:4-5 — "And if you will walk before me, as David your father walked...then I will establish your royal throne over Israel forever."',
    },
    {
      question: 'What consequence did God warn of if Solomon and his descendants turned away from him?',
      options: [
        'Solomon would be struck with illness',
        'The northern tribes would rebel immediately',
        'Israel would be cut off from the land and the temple would become a heap of ruins and a proverb',
        'God would raise a foreign king to destroy Jerusalem at once',
      ],
      correct_index: 2,
      explanation: '1 Kings 9:7-8 — "then I will cut off Israel from the land...and this house will become a heap of ruins. Everyone passing by it will be astonished and will hiss."',
    },
    {
      question: "How did Hiram respond to the twenty cities Solomon gave him in Galilee?",
      options: [
        'He was delighted and sent back double the gold he owed',
        'He called the land Cabul and was displeased with the gift',
        'He accepted them and immediately settled Phoenician craftsmen there',
        'He refused the cities and demanded payment in timber instead',
      ],
      correct_index: 1,
      explanation: '1 Kings 9:12-13 — "When Hiram came from Tyre to see the cities that Solomon had given him, they did not please him. Therefore he called them the land of Cabul to this day."',
    },
    {
      question: "Who provided the forced labor for Solomon's building projects?",
      options: [
        'Israelites from every tribe in equal numbers',
        'Prisoners captured in Solomon\'s military campaigns',
        'The remnants of Amorites, Hittites, Perizzites, Hivites, and Jebusites — non-Israelites remaining in the land',
        'Hired laborers from Egypt and Phoenicia',
      ],
      correct_index: 2,
      explanation: '1 Kings 9:20-21 — "All the people who were left of the Amorites, the Hittites, the Perizzites, the Hivites, and the Jebusites...Solomon drafted to be slaves, and so they are to this day."',
    },
    {
      question: 'What happened to the Pharaoh\'s daughter that Solomon had married, in relation to his building projects?',
      options: [
        'She remained in the City of David until the palace and temple were complete',
        'She returned to Egypt after disagreeing with Solomon',
        'She was given the House of the Forest of Lebanon as her residence',
        'Solomon built her a separate house, then she moved from the City of David',
      ],
      correct_index: 3,
      explanation: '1 Kings 9:24 — "But Pharaoh\'s daughter went up from the city of David to her own house that Solomon had built for her."',
    },
    {
      question: 'How much gold did Solomon receive from Ophir through his navy?',
      options: ['120 talents', '420 talents', '666 talents', '1,000 talents'],
      correct_index: 1,
      explanation: '1 Kings 9:28 — "And they went to Ophir and brought from there gold, 420 talents, and they brought it to King Solomon."',
    },
    {
      question: "What city did Pharaoh capture and give as a dowry to Solomon's wife?",
      options: ['Megiddo', 'Hazor', 'Gezer', 'Lachish'],
      correct_index: 2,
      explanation: '1 Kings 9:16 — "Pharaoh king of Egypt had gone up and captured Gezer and burned it with fire...and given it as dowry to his daughter, Solomon\'s wife."',
    },
    {
      question: 'How often did Solomon offer burnt offerings and peace offerings at the temple?',
      options: [
        'Every Sabbath',
        'Three times a year on the appointed feasts',
        'Once a year on the Day of Atonement',
        'Every new moon',
      ],
      correct_index: 1,
      explanation: '1 Kings 9:25 — "Three times a year Solomon used to offer up burnt offerings and peace offerings on the altar that he built to the LORD."',
    },
    {
      question: "Where did Solomon station his fleet of ships, and who crewed them alongside Solomon's servants?",
      options: [
        'At Joppa, crewed entirely by Israelites',
        'At Ezion-geber on the Red Sea, crewed with Hiram\'s servants who were familiar with the sea',
        'At Acco, crewed with Phoenician sailors from Tyre',
        'At Ashdod on the Mediterranean, crewed with Egyptian mariners',
      ],
      correct_index: 1,
      explanation: '1 Kings 9:26-27 — "King Solomon built a fleet of ships at Ezion-geber...And Hiram sent with the fleet his servants, seamen who were familiar with the sea, together with the servants of Solomon."',
    },
  ],

  '1 Kings:10': [
    {
      question: 'Why did the Queen of Sheba come to Solomon?',
      options: [
        'To negotiate a trade agreement for spices and gold',
        'She heard of the fame of Solomon concerning the name of the LORD and came to test him with hard questions',
        'She was sent as a diplomatic envoy from her king',
        'She wanted to worship at the newly completed temple',
      ],
      correct_index: 1,
      explanation: '1 Kings 10:1 — "Now when the queen of Sheba heard of the fame of Solomon concerning the name of the LORD, she came to test him with hard questions."',
    },
    {
      question: "How did the Queen of Sheba describe her reaction to Solomon's wisdom and prosperity?",
      options: [
        "She said there was still no breath left in her, she was so overwhelmed",
        'She wept and said she had never seen such glory',
        'She stood speechless for three days before speaking',
        'She declared his wisdom was beyond any human and must be divine',
      ],
      correct_index: 0,
      explanation: '1 Kings 10:5 — "and there was no more breath in her" — she was overwhelmed by his wisdom, his house, his food, his servants, his ministers, their clothing, his cupbearers, and his burnt offerings.',
    },
    {
      question: 'How much gold did the Queen of Sheba give to Solomon?',
      options: ['66 talents', '120 talents', '420 talents', '666 talents'],
      correct_index: 1,
      explanation: '1 Kings 10:10 — "Then she gave the king 120 talents of gold, and a very great quantity of spices and precious stones. Never again came such an abundance of spices as these that the queen of Sheba gave to King Solomon."',
    },
    {
      question: "What was Solomon's annual income in gold?",
      options: ['420 talents', '500 talents', '666 talents', '1,000 talents'],
      correct_index: 2,
      explanation: '1 Kings 10:14 — "Now the weight of gold that came to Solomon in one year was 666 talents of gold."',
    },
    {
      question: "How was Solomon's great ivory throne decorated?",
      options: [
        'Overlaid with pure gold with eagle carvings on the armrests',
        'Six steps with six lions on each side — twelve lions total — and overlaid with fine gold',
        'Inlaid with precious gems and supported by twelve oxen',
        'Carved entirely from one piece of ivory with cedar pillars behind it',
      ],
      correct_index: 1,
      explanation: '1 Kings 10:18-20 — "The king also made a great ivory throne and overlaid it with the finest gold. The throne had six steps...and twelve lions stood there, one on each end of a step on the six steps."',
    },
    {
      question: "To what did the text compare the abundance of silver in Jerusalem during Solomon's reign?",
      options: ['Sand on the seashore', 'Stones in the street', 'Leaves on cedar trees', 'Drops of rain'],
      correct_index: 1,
      explanation: '1 Kings 10:27 — "And the king made silver as common as stone in Jerusalem, and he made cedar as plentiful as the sycamore of the Shephelah."',
    },
    {
      question: 'How often did Solomon\'s ships come in from Tarshish, and what did they bring?',
      options: [
        'Every year, bringing gold and silver',
        'Every two years, bringing exotic animals and timber',
        'Once every three years, bringing gold, silver, ivory, apes, and peacocks',
        'Every five years, bringing spices and precious stones',
      ],
      correct_index: 2,
      explanation: '1 Kings 10:22 — "For the king had a fleet of ships of Tarshish at sea with the fleet of Hiram. Once every three years the fleet of ships of Tarshish used to come bringing gold, silver, ivory, apes, and peacocks."',
    },
    {
      question: "What did the Queen of Sheba say about Solomon's servants?",
      options: [
        'She pitied them for serving such a demanding master',
        '"Happy are your men! Happy are your servants, who continually stand before you and hear your wisdom!"',
        'She offered to take them back to Sheba to train her own court',
        'She said they were better trained than any in Egypt',
      ],
      correct_index: 1,
      explanation: '1 Kings 10:8 — "Happy are your men! Happy are your servants, who continually stand before you and hear your wisdom!"',
    },
    {
      question: 'How many chariots and horsemen did Solomon accumulate?',
      options: [
        '400 chariots and 12,000 horsemen',
        '1,400 chariots and 12,000 horsemen',
        '2,000 chariots and 40,000 horsemen',
        '700 chariots and 7,000 horsemen',
      ],
      correct_index: 1,
      explanation: '1 Kings 10:26 — "And Solomon gathered together chariots and horsemen. He had 1,400 chariots and 12,000 horsemen, whom he stationed in the chariot cities and with the king in Jerusalem."',
    },
    {
      question: 'What overall assessment does the text give of Solomon among all earthly kings?',
      options: [
        'He was the most militarily powerful king who ever lived',
        'King Solomon excelled all the kings of the earth in riches and in wisdom',
        'He was beloved above all kings for his justice and mercy',
        'He surpassed all kings in building projects and architectural achievement',
      ],
      correct_index: 1,
      explanation: '1 Kings 10:23 — "Thus King Solomon excelled all the kings of the earth in riches and in wisdom."',
    },
  ],

  '1 Kings:11': [
    {
      question: 'How many wives and concubines did Solomon have in total?',
      options: [
        '300 wives and 700 concubines',
        '500 wives and 500 concubines',
        '700 wives and 300 concubines',
        '400 wives and 400 concubines',
      ],
      correct_index: 2,
      explanation: '1 Kings 11:3 — "He had 700 wives, who were princesses, and 300 concubines. And his wives turned away his heart."',
    },
    {
      question: "What did Solomon do that violated God's direct command?",
      options: [
        'He built a second temple in the northern kingdom',
        'He levied taxes on the priests',
        'He loved many foreign women — Moabites, Ammonites, Edomites, Sidonians, Hittites — whom God had explicitly forbidden Israel to intermarry',
        'He sacrificed to foreign gods in the temple itself',
      ],
      correct_index: 2,
      explanation: '1 Kings 11:1-2 — "Now King Solomon loved many foreign women...from the nations concerning which the LORD had said to the people of Israel, \'You shall not enter into marriage with them, neither shall they with you, for surely they will turn away your heart after their gods.\'"',
    },
    {
      question: 'To which Sidonian goddess did Solomon build a high place?',
      options: ['Asherah', 'Ashtoreth', 'Astarte of Byblos', 'Anath'],
      correct_index: 1,
      explanation: '1 Kings 11:5 — "For Solomon went after Ashtoreth the goddess of the Sidonians, and after Milcom the abomination of the Ammonites."',
    },
    {
      question: "God's punishment for Solomon's idolatry was that the kingdom would be torn from his son. What one exception did God make, and why?",
      options: [
        'God would leave one tribe with Solomon himself during his own lifetime for the sake of Jerusalem',
        "God would give Solomon's son one tribe to rule for the sake of David Solomon's father and for the sake of Jerusalem",
        'God would delay judgment until the third generation',
        "God would spare all twelve tribes if Solomon's son repented",
      ],
      correct_index: 1,
      explanation: '1 Kings 11:13 — "However, I will not tear away all the kingdom, but I will give one tribe to your son, for the sake of David my servant and for the sake of Jerusalem that I have chosen."',
    },
    {
      question: 'Who was the first adversary God raised against Solomon?',
      options: ['Rezon of Damascus', 'Jeroboam son of Nebat', 'Hadad the Edomite', 'Shishak king of Egypt'],
      correct_index: 2,
      explanation: '1 Kings 11:14 — "And the LORD raised up an adversary against Solomon, Hadad the Edomite. He was of the royal house in Edom."',
    },
    {
      question: 'What did the prophet Ahijah do to communicate to Jeroboam that he would rule ten tribes?',
      options: [
        'He poured oil on Jeroboam\'s head in the name of the LORD',
        'He tore his new cloak into twelve pieces and gave ten to Jeroboam',
        'He handed Jeroboam a scroll with the names of the ten tribes',
        'He placed a crown on Jeroboam\'s head in front of witnesses',
      ],
      correct_index: 1,
      explanation: '1 Kings 11:30-31 — "Then Ahijah laid hold of the new garment that was on him, and tore it into twelve pieces. And he said to Jeroboam, \'Take for yourself ten pieces, for thus says the LORD.\'"',
    },
    {
      question: 'What was the condition God gave Jeroboam for an enduring dynasty?',
      options: [
        'That he never go to war with the house of David',
        'That he maintain the temple worship in Jerusalem',
        'If he would listen to all that God commanded him, walk in His ways, and do what is right, God would be with him and build him a sure house as He did for David',
        'That he pay tribute to the house of David annually',
      ],
      correct_index: 2,
      explanation: '1 Kings 11:38 — "And if you will listen to all that I command you, and will walk in my ways...I will be with you and will build you a sure house, as I built for David."',
    },
    {
      question: "What did Solomon do when he learned of Ahijah's prophecy about Jeroboam?",
      options: [
        'He repented and destroyed the high places he had built',
        'He sought to kill Jeroboam, so Jeroboam fled to Egypt and stayed until Solomon died',
        'He imprisoned Jeroboam and held him until his death',
        'He sent Jeroboam as an ambassador to Pharaoh to be rid of him',
      ],
      correct_index: 1,
      explanation: '1 Kings 11:40 — "Solomon sought therefore to kill Jeroboam. But Jeroboam arose and fled into Egypt, to Shishak king of Egypt, and was in Egypt until the death of Solomon."',
    },
    {
      question: 'Who was Rezon of Damascus, and why was he an adversary to Solomon?',
      options: [
        'A former Israelite general who defected to Syria',
        'A servant of Hadadezer who fled when David defeated him and became a brigand and king over Syria, hostile to Israel all of Solomon\'s days',
        'A Philistine king who contested Solomon\'s trade routes',
        'A son of Hiram of Tyre who disputed the Cabul agreement',
      ],
      correct_index: 1,
      explanation: '1 Kings 11:23-25 — "God also raised up as an adversary to him, Rezon the son of Eliada...He was an adversary of Israel all the days of Solomon."',
    },
    {
      question: "How long did Solomon reign over Israel in Jerusalem, and where was he buried?",
      options: [
        '30 years; buried in the City of David',
        '40 years; buried in the City of David',
        '40 years; buried in Hebron with his ancestors',
        '33 years; buried on the Mount of Olives',
      ],
      correct_index: 1,
      explanation: '1 Kings 11:42-43 — "And the time that Solomon reigned in Jerusalem over all Israel was forty years. And Solomon slept with his fathers and was buried in the city of David his father."',
    },
  ],

  '1 Kings:12': [
    {
      question: 'Why did all Israel go to Shechem when Rehoboam became king?',
      options: [
        'To celebrate the new king at the ancient sanctuary',
        'To make him king — the assembly had gathered there',
        'To present military tribute from the northern tribes',
        'Because Jerusalem had been damaged and was uninhabitable',
      ],
      correct_index: 1,
      explanation: '1 Kings 12:1 — "Rehoboam went to Shechem, for all Israel had come to Shechem to make him king."',
    },
    {
      question: "What did the people of Israel ask Rehoboam before pledging their loyalty?",
      options: [
        'That he build a temple in the north equal to the one in Jerusalem',
        'Your father made our yoke heavy. Now therefore lighten the hard service of your father and his heavy yoke on us, and we will serve you',
        'That he set Jeroboam free from exile and appoint him as his co-regent',
        'That he swear an oath never to levy taxes on the northern tribes',
      ],
      correct_index: 1,
      explanation: '1 Kings 12:4 — "Your father made our yoke heavy. Now therefore lighten the hard service of your father and his heavy yoke on us, and we will serve you."',
    },
    {
      question: "What did the elders who had served Solomon advise Rehoboam?",
      options: [
        'To refuse any concession, as it would be seen as weakness',
        'If you will be a servant to this people today and serve them and speak good words to them, they will be your servants forever',
        'To promise leniency now and impose taxes gradually later',
        'To consult the prophet Ahijah before making any decision',
      ],
      correct_index: 1,
      explanation: '1 Kings 12:7 — "And they said to him, \'If you will be a servant to this people today and serve them...then they will be your servants forever.\'"',
    },
    {
      question: "What did the young men advise Rehoboam to tell the people?",
      options: [
        '"My father chastised you with whips, but I will chastise you with scorpions"',
        '"My father was lenient; I will be ten times more severe and just"',
        '"I will halve your taxes but double your military obligations"',
        '"I will build you cities and roads greater than my father ever did"',
      ],
      correct_index: 0,
      explanation: '1 Kings 12:11 — "And now, whereas my father laid on you a heavy yoke, I will add to your yoke. My father disciplined you with whips, but I will discipline you with scorpions."',
    },
    {
      question: 'How long did Rehoboam ask the people to return before he gave his answer?',
      options: ['One day', 'Three days', 'Seven days', 'Forty days'],
      correct_index: 1,
      explanation: '1 Kings 12:5 — "He said to them, \'Go away for three days, then come again to me.\' So the people went away."',
    },
    {
      question: "What was Israel's rallying cry of rebellion against the house of David?",
      options: [
        '"Long live Jeroboam, son of Nebat, king of Israel!"',
        '"What portion do we have in David? We have no inheritance in the son of Jesse. To your tents, O Israel!"',
        '"Away with the yoke! The God of Abraham is our king!"',
        '"Jeroboam shall reign, for God has chosen him over the house of David!"',
      ],
      correct_index: 1,
      explanation: '1 Kings 12:16 — "And when all Israel saw that the king did not listen to them, the people answered the king, \'What portion do we have in David? We have no inheritance in the son of Jesse. To your tents, O Israel!\'"',
    },
    {
      question: "What happened to Adoram (or Adoniram), whom Rehoboam sent to deal with the rebellious northern tribes?",
      options: [
        'He negotiated successfully and brought ten tribes back into submission',
        'He was captured and held hostage until Rehoboam paid a ransom',
        'All Israel stoned him to death, and Rehoboam quickly mounted his chariot and fled to Jerusalem',
        'He defected to Jeroboam and became his chief administrator',
      ],
      correct_index: 2,
      explanation: '1 Kings 12:18 — "And King Rehoboam sent Adoram, who was taskmaster over the forced labor, and all Israel stoned him to death with stones. And King Rehoboam hurried to mount his chariot to flee to Jerusalem."',
    },
    {
      question: "Where did Jeroboam set up the two golden calves, and what did he say about them?",
      options: [
        'At Shechem and Penuel; "Worship here rather than make the long journey to Jerusalem"',
        'At Bethel and Dan; "Behold your gods, O Israel, who brought you up out of the land of Egypt"',
        'At Gibeon and Mizpah; "These are the gods who fought for us against the Philistines"',
        'At Samaria and Jezreel; "The LORD dwells here and no longer in Jerusalem"',
      ],
      correct_index: 1,
      explanation: '1 Kings 12:28-29 — "So the king took counsel and made two calves of gold. And he said to the people, \'You have gone up to Jerusalem long enough. Behold your gods, O Israel, who brought you up out of the land of Egypt.\' And he set one in Bethel, and the other he put in Dan."',
    },
    {
      question: 'What kind of priests did Jeroboam appoint, and how did this violate the law?',
      options: [
        'He appointed only Levites but gave them titles reserved for Zadokite priests',
        'He appointed priests from among all the people who were not of the Levites',
        'He appointed foreign Phoenician priests to staff his new shrines',
        'He abolished the priesthood entirely and led worship himself',
      ],
      correct_index: 1,
      explanation: '1 Kings 12:31 — "He also made temples on high places and appointed priests from among all the people, who were not of the Levites."',
    },
    {
      question: "God told Rehoboam through a prophet not to fight against Israel. What reason was given?",
      options: [
        'Because Israel was too powerful and Judah would be defeated',
        'This thing is from me — the division of the kingdom was from the LORD',
        'Because Jeroboam had been anointed by a true prophet of the LORD',
        'Because Rehoboam had not yet inquired of the LORD before going to war',
      ],
      correct_index: 1,
      explanation: '1 Kings 12:24 — "Thus says the LORD, You shall not go up or fight against your relatives the people of Israel. Every man return to his home, for this thing is from me."',
    },
  ],
};

const passagesData: Record<string, { verse_start: number; verse_end: number; topic: string; plain_language: string; theological_context: string }[]> = {
  '1 Kings:7': [
    {
      verse_start: 1,
      verse_end: 12,
      topic: "Solomon's palace complex and the thirteen-year building project",
      plain_language:
        "After finishing the temple, Solomon spent thirteen years building his own palace complex, which included multiple halls: the House of the Forest of Lebanon (a large cedar columned structure), the Hall of Pillars, the Hall of Judgment (throne room), his personal residence, and a separate house for Pharaoh's daughter. The scale and cedar craftsmanship echoed the temple's design.",
      theological_context:
        "The juxtaposition of seven years for the temple (6:38) versus thirteen for the palace raises a question the text leaves open: what does the disproportion reveal about Solomon's priorities? In the ancient Near East, royal building projects were demonstrations of divine favor and royal glory. Solomon's palace complex was meant to project the glory of both God and king — but the seed of later judgment (excessive self-aggrandizement, foreign wives) is already embedded in this lengthy personal building program.",
    },
    {
      verse_start: 13,
      verse_end: 47,
      topic: "Hiram's bronze work: the pillars, the Sea, and the ten stands",
      plain_language:
        "Hiram, a skilled bronze craftsman from Tyre (his mother was from Naphtali, father Tyrian), cast all the ornamental bronze work for the temple. This included the two enormous pillars Jachin and Boaz at the entrance, the massive bronze Sea resting on twelve oxen, ten bronze wheeled stands (each with a basin), and numerous smaller vessels — pots, shovels, and bowls.",
      theological_context:
        "The two pillars (Jachin: 'He establishes'; Boaz: 'In him is strength') functioned as symbolic pillars of cosmic order framing the entrance to God's dwelling. The bronze Sea almost certainly carried cosmological significance: water represented the chaotic deep in ancient Near Eastern thought, and the LORD's temple, with its sea resting on orderly twelve oxen, proclaimed that Israel's God reigned over chaos. The ten stands with basins were for priestly cleansing — connecting the temple's beauty to the holiness required to approach God.",
    },
    {
      verse_start: 48,
      verse_end: 51,
      topic: "Solomon completes the temple furnishings with gold and with David's dedicated treasures",
      plain_language:
        "Solomon furnished the interior of the temple with gold: the altar, the table for the bread of the Presence, the ten golden lampstands, flowers, lamps, tongs, cups, snuffers, basins, dishes, and fire pans — all of pure gold. He also brought in everything David his father had dedicated — silver, gold, and vessels — and stored them in the temple treasuries.",
      theological_context:
        "The inclusion of David's dedicated treasures connects Solomon's temple to the covenant faithfulness of his father. David had wanted to build the temple but was forbidden; his accumulated offerings now find their proper resting place in Solomon's completed structure. This underscores that the temple was not purely Solomon's achievement — it was the fruit of multi-generational covenantal obedience and worship. The gold furnishings throughout reflect the cosmic-palace theology: the temple is YHWH's royal dwelling, and no expense is spared in honoring the divine king.",
    },
  ],

  '1 Kings:8': [
    {
      verse_start: 1,
      verse_end: 21,
      topic: "The ark is brought into the temple; the glory cloud fills the house",
      plain_language:
        "Solomon gathered the elders of Israel to Jerusalem to bring the ark of the covenant up from the City of David (Zion) to the newly completed temple. The priests carried the ark into the Most Holy Place beneath the wings of the cherubim. When they withdrew, a thick cloud filled the temple so that the priests could not stand to minister — the glory of the LORD had taken up residence. Solomon then spoke to the assembly, recalling that God had chosen David and Jerusalem and had now fulfilled the promise to build a house for God's name.",
      theological_context:
        "The cloud filling the temple is one of Scripture's most theologically charged moments, deliberately echoing the cloud that guided Israel in the wilderness (Exodus 40:34-38) and signaling that YHWH's presence was now stably dwelling among his people in the promised land. The ark's transfer from a tent in Zion to the temple marks the culmination of the Exodus narrative begun in Egypt: God's people, God's land, God's house. Solomon's opening speech emphasizes that what was promised to David has now been fulfilled — the temple is for God's 'name,' preserving the biblical tension between God's transcendence (he is not contained) and his real, personal presence among Israel.",
    },
    {
      verse_start: 22,
      verse_end: 53,
      topic: "Solomon's seven-petition dedicatory prayer",
      plain_language:
        "Standing before the altar with hands spread toward heaven, Solomon prays the most extensive recorded royal prayer in the Old Testament. He first acknowledges God's incomparability and the fulfillment of the Davidic promise. He then confronts a theological paradox: if the heaven of heavens cannot contain God, how could this temple? He prays nonetheless that God would hear prayers directed toward this house in seven scenarios: when an individual sins against a neighbor, when Israel is defeated in battle, when drought comes as judgment, when famine or plague or locusts come, when a foreigner prays toward the temple, when Israel goes to war at God's command, and when Israel is in exile because of sin. In each petition the refrain is: 'hear in heaven your dwelling place, and forgive.'",
      theological_context:
        "Solomon's prayer is one of the Old Testament's clearest articulations of how prayer mediates between a transcendent God and finite humanity. The temple is not where God lives (v. 27 insists heaven is his dwelling); rather it is the designated place of encounter — where earth and heaven are connected through prayer. The inclusion of the foreigner (vv. 41-43) is remarkable: Solomon prays that God would answer non-Israelites who pray toward the temple 'so that all peoples of the earth may know your name.' This universalist note anticipates prophetic visions of the temple as 'a house of prayer for all nations' (Isaiah 56:7). The exile petition (vv. 46-51) is particularly poignant: written into the dedicatory prayer is the acknowledgment that Israel will sin, be sent into exile, and need to pray from a far country — a prophetic realism about the covenant's future.",
    },
    {
      verse_start: 54,
      verse_end: 66,
      topic: "The blessing, the massive sacrifice, and the people sent home joyful",
      plain_language:
        "After kneeling in prayer, Solomon rose and blessed the whole assembly of Israel, praying that God would not leave or forsake them and that all peoples might know that the LORD is God. He urged Israel to be wholly devoted to God. He then consecrated the middle of the court for sacrifices — the bronze altar being too small for the volume — and offered 22,000 oxen and 120,000 sheep. The dedication feast lasted fourteen days (a double seven: one week for the altar, one week for the feast of booths). The people were then sent home overjoyed.",
      theological_context:
        "The scale of sacrifice — 22,000 oxen and 120,000 sheep — was not reckless extravagance but the proper response to an incomprehensibly great gift: the LORD dwelling among his people. Ancient Near Eastern treaties and temple dedications routinely featured massive sacrificial feasts that bound the community together. The fourteen-day feast structurally links to the Feast of Booths (Sukkot), reinforcing the temple's connection to the Exodus and wilderness themes. Solomon's closing blessing reframes the whole event missiologically: Israel's covenant faithfulness was never merely for their own benefit, but so that 'all peoples of the earth may know that the LORD is God; there is no other' (v. 60).",
    },
  ],

  '1 Kings:9': [
    {
      verse_start: 1,
      verse_end: 9,
      topic: "God's second appearance to Solomon: conditional blessing and conditional curse",
      plain_language:
        "After Solomon completed all his building projects, the LORD appeared to him a second time (the first was at Gibeon in chapter 3). God acknowledged that he had consecrated the temple and that his name would be there permanently. He then gave a conditional promise: if Solomon walked in David's ways with integrity of heart, God would establish his throne forever. But if Solomon or his sons turned away to serve other gods, God would cut Israel off from the land, abandon the temple, and make it a ruin — a proverb and a taunt among the nations.",
      theological_context:
        "This passage is structurally central to the entire Solomon narrative: it is the divine commentary that frames everything that follows, including Solomon's fall in chapter 11. The vision comes after the height of Solomon's achievement, not before it — God's conditional warning arrives precisely when the danger of self-sufficiency is greatest. The curse described in verses 7-9 is remarkable for its specificity: foreigners will ask why God abandoned this magnificent temple, and the answer will be that Israel abandoned the LORD first. This anticipates the actual destruction of both temples and encodes a theology of covenant: God's blessings are never unconditional entitlements but always tethered to faithful covenant relationship.",
    },
    {
      verse_start: 10,
      verse_end: 23,
      topic: "The Cabul cities, forced labor from Canaanites, and Solomon's administrative projects",
      plain_language:
        "After twenty years of building, Solomon gave Hiram twenty cities in Galilee as payment for the cedar, cypress, and gold Hiram had supplied. Hiram inspected them and was displeased, calling the region 'Cabul' (worthless). Solomon then used the remaining Canaanites in the land (Amorites, Hittites, Perizzites, Hivites, Jebusites) as conscripted laborers for his building projects, while Israelites served as soldiers, officials, and commanders — not as slaves. Solomon built up Hazor, Megiddo, Gezer (given by Pharaoh as a dowry), Lower Beth-horon, Baalath, and Tamar.",
      theological_context:
        "The Cabul episode is a small narrative crack in Solomon's otherwise glittering résumé: Hiram, his most important ally, is openly displeased. More theologically significant is the forced labor structure. The text carefully distinguishes Israelite officials from Canaanite slaves — but the labor system itself echoes Egypt, the paradigmatic place of oppression. The concern later voiced by the northern tribes in chapter 12 ('your father made our yoke heavy') suggests that in practice the distinction between Israelite service and Canaanite slavery blurred. Solomon's administrative genius was also the seed of his kingdom's fracture. The building of Megiddo and Hazor fulfills earlier narratives (Joshua 11-12) while simultaneously raising questions about Deuteronomy 17:16's prohibition on multiplying horses — Solomon was doing exactly that at these chariot cities.",
    },
    {
      verse_start: 26,
      verse_end: 28,
      topic: "Solomon's fleet at Ezion-geber and the gold from Ophir",
      plain_language:
        "Solomon built a fleet of ships at Ezion-geber (on the Red Sea, near Eloth in Edom). Hiram sent experienced Phoenician sailors to work alongside Solomon's own men. They sailed to Ophir and returned with 420 talents of gold for Solomon.",
      theological_context:
        "Ophir's location remains debated (Arabia, India, East Africa are all proposed), but the theological point of the passage is clear: Solomon's reach extended to the ends of the known world, and wealth flowed to Jerusalem from every direction. This maritime trade fulfilled a vision of Israel as the center of a peaceful, prosperous world order under God's blessing. However, Deuteronomy 17:17 warns the king not to 'acquire for himself excessive silver and gold' — the accumulation of 420 talents from a single trade expedition points toward the excess that would later mark Solomon's reign (666 talents annually, per chapter 10) and contribute to the burden the northern tribes found intolerable. The prosperity and the warning exist in tension from the beginning.",
    },
  ],

  '1 Kings:10': [
    {
      verse_start: 1,
      verse_end: 13,
      topic: "The Queen of Sheba tests Solomon and is overwhelmed",
      plain_language:
        "The Queen of Sheba, having heard of Solomon's fame in connection with the name of the LORD, traveled to Jerusalem with a very great caravan — camels bearing spices, gold, and precious stones — to test him with hard questions. Solomon answered all her questions; nothing was hidden from him. She saw his wisdom, his palace, his food, his servants, his officials and their clothing, his cupbearers, and his burnt offerings at the temple. She was left breathless and declared that the reports she had heard were only half the truth. She praised the LORD who had delighted in Solomon and set him on Israel's throne to execute justice and righteousness. She gave him 120 talents of gold, spices in unprecedented quantity, and precious stones. Solomon gave her in return all that she desired, beyond what she had brought.",
      theological_context:
        "The Queen of Sheba narrative is the high-water mark of Solomon's international reputation. Her journey from the ends of the earth to hear his wisdom is presented as the fulfillment of God's promise that Solomon's wisdom would surpass all (3:12) and that all nations would seek him out (cf. Psalm 72). Crucially, she connects Solomon's wisdom to the LORD: 'Blessed be the LORD your God, who has delighted in you' (v. 9). Her recognition that Solomon's purpose is 'to execute justice and righteousness' recalls the original prayer of chapter 3 — Solomon asked for wisdom to govern, not for wealth. Jesus later cites the Queen of the South's journey as a rebuke to his generation (Matthew 12:42), making this text a typological foreshadowing: the wisdom greater than Solomon's is now present, and those who fail to seek it stand condemned.",
    },
    {
      verse_start: 14,
      verse_end: 25,
      topic: "Solomon's annual income, the great throne, and the abundance of gold and silver",
      plain_language:
        "Solomon received 666 talents of gold annually, in addition to revenues from traders, merchants, kings of Arabia, and governors. He made 200 large shields and 300 smaller shields of hammered gold for the House of the Forest of Lebanon. He built a great ivory throne overlaid with gold, with six steps, a footstool of gold, armrests flanked by lions, and twelve lions standing on the six steps — unique among all kingdoms. Silver was so common in Jerusalem it was like stone. Gold and silver, cedar and almug wood, and precious stones all flowed into Jerusalem. Every three years ships from Tarshish brought gold, silver, ivory, apes, and peacocks.",
      theological_context:
        "The 666 talents of annual gold income is striking — a number later associated in Revelation with the beast — though its primary significance here is simply the extreme excess. More directly, this passage sits in tension with Deuteronomy 17:14-20, the law of the king, which explicitly prohibits multiplying gold and silver, multiplying horses from Egypt, and multiplying wives. Chapter 10 documents the first two violations in detail, and chapter 11 will complete the third. The literary structure is deliberate: the narrator places these chapters in canonical dialogue with the Deuteronomic law, inviting readers to recognize that Solomon's glory is simultaneously his judgment. The throne's twelve lions may ironically represent the twelve tribes over which this splendor is about to cease.",
    },
    {
      verse_start: 26,
      verse_end: 29,
      topic: "Solomon's chariot cities and the horse trade with Egypt and Kue",
      plain_language:
        "Solomon assembled 1,400 chariots and 12,000 horsemen, stationed in chariot cities and in Jerusalem. He imported horses from Egypt and Kue (Cilicia); his agents bought them there at market price. A chariot could be imported from Egypt for 600 shekels of silver and a horse for 150 shekels. Solomon's traders served as middlemen, exporting these to all the Hittite and Aramean kings.",
      theological_context:
        "This brief passage is among the most damning in the Solomon narrative when read against Deuteronomy 17:16: 'He must not acquire many horses for himself or make the people return to Egypt to acquire more horses.' Solomon's horse-trading operation did exactly this — importing from Egypt at scale and running an international arms market for neighboring kings. The irony is dense: the nation that God brought out of Egypt with signs and wonders now traffics with Egypt for military advantage. This represents a wholesale rejection of the theological vision of Exodus — that Israel's security rests in the LORD, not in Egyptian military hardware. By placing this note at the end of the 'glory' section (chapters 9-10), immediately before the account of Solomon's downfall (chapter 11), the narrator signals that accumulation of horses, gold, and wives are not separate sins but a unified turning of the heart away from total dependence on God.",
    },
  ],

  '1 Kings:11': [
    {
      verse_start: 1,
      verse_end: 13,
      topic: "Solomon's foreign wives turn his heart to other gods; God announces the kingdom's division",
      plain_language:
        "Solomon loved many foreign women — Moabites, Ammonites, Edomites, Sidonians, Hittites — from nations God had explicitly prohibited as marriage partners because they would turn Israel's hearts to other gods. By the time Solomon was old, his 700 wives and 300 concubines had turned his heart away. He went after Ashtoreth (Sidon), Milcom (Ammon), Chemosh (Moab), and Molech (Ammon), and built high places for all of them on a hill near Jerusalem. God appeared to Solomon twice and had forbidden this; his anger burned against him. God announced that he would tear the kingdom from Solomon — but not in Solomon's own lifetime, for David's sake; instead his son would lose it, retaining only one tribe for David's sake and for Jerusalem's sake.",
      theological_context:
        "This passage is the theological crisis of the entire Solomon narrative and, in many ways, of the Deuteronomistic History. Solomon's sin is not primarily sexual excess but idolatry — he literally built worship sites for gods who demanded child sacrifice (Molech) and fertility cult practices (Ashtoreth) on the very hill facing the temple he built for YHWH. The phrase 'Solomon did what was evil in the sight of the LORD and did not wholly follow the LORD, as David his father had done' (v. 6) introduces the evaluative standard by which every subsequent king will be measured. God's response demonstrates both justice and fidelity: justice requires judgment; fidelity to David requires mercy. The 'one tribe' for David's sake is a foretaste of the Messiah — the promise to David cannot ultimately be broken even by the worst failure of his son.",
    },
    {
      verse_start: 26,
      verse_end: 40,
      topic: "Ahijah's prophecy to Jeroboam: ten tribes given, conditional dynasty offered",
      plain_language:
        "Jeroboam son of Nebat, an Ephraimite whom Solomon had put in charge of the forced labor of the house of Joseph, rebelled against Solomon. The prophet Ahijah of Shiloh met Jeroboam on the road and dramatically tore his new cloak into twelve pieces, giving ten to Jeroboam. This enacted prophecy announced that God was tearing the kingdom from Solomon's family and giving ten tribes to Jeroboam, because of Solomon's idolatry. God promised Jeroboam a sure, enduring dynasty — like David's — if he obeyed God as David did. One tribe would remain with David's house for Jerusalem's sake. Solomon sought to kill Jeroboam; Jeroboam fled to Egypt and remained with Shishak until Solomon's death.",
      theological_context:
        "Ahijah's symbolic act of tearing the cloak is one of the Old Testament's most powerful prophetic sign-acts. Twelve pieces for twelve tribes; ten given to Jeroboam; one retained for David — the arithmetic of grace and judgment. The offer of a Davidic-style dynasty to Jeroboam is often overlooked: God was not merely punishing Solomon's line but genuinely offering Jeroboam the chance to establish a new covenant dynasty in the north. Jeroboam's eventual failure (the golden calves) makes this conditional offer bittersweet. Ahijah of Shiloh is significant: Shiloh was where the tabernacle once resided before God abandoned it (cf. Psalm 78:60; Jeremiah 7:12). The prophet from Shiloh pronouncing judgment on Jerusalem's royal house invokes the memory of God's willingness to abandon even the most sacred institution when his people are faithless.",
    },
    {
      verse_start: 41,
      verse_end: 43,
      topic: "The death of Solomon",
      plain_language:
        "The text concludes Solomon's reign with a reference to the Book of the Acts of Solomon for additional records of his wisdom and deeds. Solomon reigned in Jerusalem over all Israel for forty years. He died and was buried in the City of David, his father. His son Rehoboam reigned in his place.",
      theological_context:
        "The brevity of Solomon's death notice is striking compared to the elaborate account of his rise. No eulogy, no summary of his wisdom's lasting legacy — only the bare facts of death, burial, and succession. This is the narrator's implicit judgment: the man who began as the wisest in the world, who prayed for an understanding heart, who built the most glorious temple, ends his story as an idolater who fractured the united kingdom. The forty-year reign matches his father David's (2 Sam 5:4) and brackets the golden age of the united monarchy. After these forty years, Israel will never be fully reunited. The reference to the Book of the Acts of Solomon signals that there was more to tell — including presumably more of his wisdom — but the canonical account has said what matters theologically: greatness in God's economy is measured not by gold or wisdom but by wholehearted faithfulness.",
    },
  ],

  '1 Kings:12': [
    {
      verse_start: 1,
      verse_end: 15,
      topic: "Rehoboam rejects the elders' counsel and follows the young men's harsh advice",
      plain_language:
        "When Rehoboam went to Shechem to be made king, Jeroboam returned from Egypt and led the northern assembly in requesting relief from Solomon's heavy labor demands. Rehoboam consulted the elders who had served Solomon — they advised a posture of servanthood toward the people. He then consulted his young peers who had grown up with him — they advised him to assert even harsher authority. Rehoboam followed the young men's advice, announcing that his little finger would be thicker than his father's thigh, and that where Solomon had used whips, he would use scorpions. The narrator notes that this turn of events was from the LORD, fulfilling Ahijah's word to Jeroboam.",
      theological_context:
        "The counsel of the elders versus the counsel of the young men is one of the Bible's most memorable wisdom contrasts. The elders advise servant-leadership — a posture the wisdom literature consistently valorizes (Proverbs 15:1; Ecclesiastes 10:16-17). The young men advise coercive domination. That Rehoboam chose the latter is presented not merely as political folly but as divinely orchestrated: 'for it was a turn of affairs brought about by the LORD' (v. 15). This does not excuse Rehoboam's arrogance — throughout Scripture, divine sovereignty and human responsibility coexist — but it does embed the division of the kingdom within God's redemptive purposes. The broken kingdom is judgment, but it is also the means by which God's word through Ahijah is vindicated.",
    },
    {
      verse_start: 16,
      verse_end: 24,
      topic: "Israel's rebellion, Adoram stoned, and God's command not to fight",
      plain_language:
        "When Israel heard Rehoboam's harsh response, they cried out the ancient refrain of tribal independence: 'What portion do we have in David? To your tents, O Israel!' Rehoboam sent Adoram (the conscription officer) to deal with the situation; Israel stoned him to death. Rehoboam fled to Jerusalem. Israel made Jeroboam king. When Rehoboam assembled 180,000 warriors to reconquer the north, the prophet Shemaiah brought God's word: do not fight your brothers, for this division is from the LORD. They listened and went home.",
      theological_context:
        "The cry 'What portion do we have in David?' echoes an earlier rebellion — Sheba son of Bichri in 2 Samuel 20:1 — suggesting this fracture was a long-suppressed reality in Israel's tribal politics. The northern tribes are not simply being rebellious; they are invoking genuine grievances about being governed as a subject people rather than as covenant partners. The killing of Adoram (whose very role as conscription master embodied the oppression being protested) is an act of revolutionary justice in the eyes of the north. God's command through Shemaiah not to fight is one of Scripture's remarkable moments of divine restraint: the division is painful, but God will not permit it to be undone by fratricidal war. This leaves open the possibility of future reunion — a hope the prophets (Isaiah 11:13; Ezekiel 37:15-28) will develop extensively.",
    },
    {
      verse_start: 25,
      verse_end: 33,
      topic: "Jeroboam's golden calves, high places, non-Levite priests, and new feast",
      plain_language:
        "After establishing himself at Shechem and Penuel, Jeroboam faced a political-religious crisis: if his people continued going to Jerusalem to worship, their hearts would return to Rehoboam and he might be killed. He devised an alternative: two golden calves, placed at Bethel and Dan, with the declaration: 'Here are your gods, O Israel, who brought you up out of Egypt.' He built houses on high places, appointed non-Levite priests from all the people, and instituted a new feast on the fifteenth day of the eighth month (one month after the Jerusalem Feast of Booths), offering sacrifices himself at Bethel.",
      theological_context:
        "Jeroboam's golden calves are often misread as outright polytheism, but the text suggests something more subtle and more dangerous: syncretism. His declaration ('These are your gods who brought you up from Egypt') echoes the very words used at the golden calf incident in Exodus 32:4 — the narrator's parallel is not accidental. Jeroboam was not necessarily introducing foreign deities but creating an unauthorized, politically motivated representation of YHWH. This is precisely what makes it so corrupting: it maintained the language of Exodus faith while gutting its content. The appointment of non-Levite priests, the relocation of the feast, and worship at Bethel and Dan all violated the Deuteronomic centralization of worship. Every subsequent evaluation of northern kings in Kings will use Jeroboam's sin as the benchmark: 'he did not depart from the sins of Jeroboam son of Nebat' — a judgment repeated more than twenty times in the book.",
    },
  ],
};

async function main() {
  console.log('Seeding 1 Kings 7-12...');

  for (const [key, questions] of Object.entries(quizData)) {
    const [bookName, chNum] = key.split(':');
    const { data: book } = await supabase.from('books').select('id').eq('name', bookName).single();
    if (!book) { console.warn(`Book not found: ${bookName}`); continue; }
    const { data: chapter } = await supabase.from('chapters').select('id').eq('book_id', book.id).eq('chapter_number', parseInt(chNum)).single();
    if (!chapter) { console.warn(`Chapter not found: ${key}`); continue; }
    throw new Error('Legacy destructive quiz seeding is disabled; use scripts/seed-quiz-bank.ts');
    const { error } = await supabase.from('quiz_questions').insert(questions.map(q => ({ chapter_id: chapter.id, ...q })));
    if (error) console.error(`Quiz error ${key}:`, error.message);
    else console.log(`✓ Quiz: ${key} (${questions.length} questions)`);
  }

  for (const [key, passages] of Object.entries(passagesData)) {
    const [bookName, chNum] = key.split(':');
    const { data: book } = await supabase.from('books').select('id').eq('name', bookName).single();
    if (!book) continue;
    const { data: chapter } = await supabase.from('chapters').select('id').eq('book_id', book.id).eq('chapter_number', parseInt(chNum)).single();
    if (!chapter) continue;
    for (const p of passages) {
      const { error } = await supabase.from('difficult_passages').insert({ chapter_id: chapter.id, ...p });
      if (error && error.code !== '23505') console.error(`Passage error ${key}:`, error.message);
    }
    console.log(`✓ Passages: ${key} (${passages.length} passages)`);
  }

  console.log('Done!');
}

main().catch(console.error);
