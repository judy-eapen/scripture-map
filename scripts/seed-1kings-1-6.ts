// Run: npx tsx scripts/seed-1kings-1-6.ts
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
  '1 Kings:1': [
    {
      question: 'Why was Abishag the Shunammite brought to King David?',
      options: [
        'To serve as a royal scribe',
        'To warm him and care for him because he could not get warm',
        'To be given in marriage to Solomon',
        'To perform music in the royal court',
      ],
      correct_index: 1,
      explanation: '1 Kings 1:2–4 — David\'s servants searched for a young woman to lie with the king and keep him warm, for he could not get warm. Abishag was found and cared for him, though David did not know her.',
    },
    {
      question: 'Which two influential figures allied themselves with Adonijah when he exalted himself as king?',
      options: [
        'Nathan the prophet and Zadok the priest',
        'Benaiah and Solomon',
        'Joab the commander and Abiathar the priest',
        'Shimei and Bathsheba',
      ],
      correct_index: 2,
      explanation: '1 Kings 1:7 — Adonijah conferred with Joab son of Zeruiah and Abiathar the priest, and they supported him.',
    },
    {
      question: 'Who did NOT support Adonijah\'s bid for kingship?',
      options: [
        'Joab son of Zeruiah',
        'Abiathar the priest',
        'Zadok the priest',
        'The sons of David',
      ],
      correct_index: 2,
      explanation: '1 Kings 1:8 — Zadok the priest, Benaiah son of Jehoiada, Nathan the prophet, Shimei, Rei, and David\'s mighty men did not side with Adonijah.',
    },
    {
      question: 'How did Nathan the prophet respond to Adonijah\'s self-proclamation as king?',
      options: [
        'He openly rebuked Adonijah in the city square',
        'He went to Bathsheba and urged her to speak to David on Solomon\'s behalf',
        'He traveled to Gibeon to seek God\'s guidance',
        'He rallied the troops at the Gihon spring',
      ],
      correct_index: 1,
      explanation: '1 Kings 1:11–14 — Nathan came to Bathsheba and told her that Adonijah had become king without David\'s knowledge, and instructed her to go to the king and confirm Solomon\'s right to the throne, with Nathan following to support her words.',
    },
    {
      question: 'Where did David command that Solomon be anointed as king?',
      options: [
        'At the tabernacle in Shiloh',
        'On the threshing floor of Araunah',
        'At the Gihon spring',
        'At the altar on Mount Moriah',
      ],
      correct_index: 2,
      explanation: '1 Kings 1:33–34 — David ordered his servants to have Solomon ride on his own mule and bring him to the Gihon spring, where Zadok and Nathan were to anoint him king over Israel.',
    },
    {
      question: 'Who anointed Solomon as king at the Gihon spring?',
      options: [
        'Nathan and Benaiah',
        'Zadok the priest and Nathan the prophet',
        'Abiathar and Joab',
        'Bathsheba and Nathan',
      ],
      correct_index: 1,
      explanation: '1 Kings 1:39 — Zadok the priest took the horn of oil from the tent and anointed Solomon. Then they blew the trumpet, and all the people shouted, "Long live King Solomon!"',
    },
    {
      question: 'What was Adonijah\'s reaction when he heard that Solomon had been anointed king?',
      options: [
        'He immediately surrendered to Solomon',
        'He fled to Egypt to seek military support',
        'All his guests rose in alarm and dispersed, and he went and took hold of the horns of the altar',
        'He challenged Solomon to a duel before the elders of Israel',
      ],
      correct_index: 2,
      explanation: '1 Kings 1:49–50 — All of Adonijah\'s guests trembled and rose, and each went his own way. Adonijah, fearing Solomon, went and seized the horns of the altar seeking asylum.',
    },
    {
      question: 'What condition did Solomon set for sparing Adonijah\'s life?',
      options: [
        'That Adonijah leave Israel and never return',
        'That Adonijah show himself worthy — if wickedness is found in him he shall die',
        'That Adonijah serve in the temple as a Levite',
        'That Adonijah swear loyalty before Zadok the priest',
      ],
      correct_index: 1,
      explanation: '1 Kings 1:52 — Solomon said, "If he proves to be a worthy man, not one of his hairs shall fall to the earth, but if wickedness is found in him, he shall die."',
    },
    {
      question: 'What instrument was used to publicly announce Solomon\'s anointing?',
      options: [
        'Harp',
        'Trumpet',
        'Lyre',
        'Cymbals',
      ],
      correct_index: 1,
      explanation: '1 Kings 1:39 — After Zadok anointed Solomon at the Gihon spring, they blew the trumpet and all the people shouted, "Long live King Solomon!"',
    },
    {
      question: 'What was David\'s immediate response when Bathsheba told him Adonijah had made himself king?',
      options: [
        'He summoned Joab to arrest Adonijah',
        'He wept and refused to eat',
        'He reaffirmed his oath that Solomon would reign after him and gave instructions to anoint Solomon immediately',
        'He called for Nathan to confirm whether the report was true',
      ],
      correct_index: 2,
      explanation: '1 Kings 1:29–33 — David swore by the Lord, confirming his oath that Solomon would sit on his throne after him, then immediately commanded his servants to act: put Solomon on the royal mule and anoint him at Gihon.',
    },
  ],

  '1 Kings:2': [
    {
      question: 'What was David\'s primary charge to Solomon before his death regarding spiritual conduct?',
      options: [
        'Build the temple as quickly as possible',
        'Keep God\'s statutes, commandments, rules, and testimonies as written in the Law of Moses',
        'Maintain the alliance with Hiram of Tyre',
        'Never allow foreign women to enter Jerusalem',
      ],
      correct_index: 1,
      explanation: '1 Kings 2:3 — David charged Solomon to keep the charge of the Lord: to walk in his ways and keep his statutes, commandments, rules, and testimonies, as written in the Law of Moses.',
    },
    {
      question: 'Why did David instruct Solomon to deal with Joab son of Zeruiah?',
      options: [
        'Because Joab had betrayed military secrets to the Philistines',
        'Because Joab had murdered Abner and Amasa, shedding their blood in peacetime as if in war',
        'Because Joab had stolen from the royal treasury',
        'Because Joab had worshipped foreign gods',
      ],
      correct_index: 1,
      explanation: '1 Kings 2:5 — David told Solomon that Joab had killed Abner son of Ner and Amasa son of Jether, two commanders of Israel, shedding innocent blood in peacetime and putting the guilt of blood on David\'s belt and sandals.',
    },
    {
      question: 'What request did Adonijah make of Bathsheba that led to his death?',
      options: [
        'That he be made commander of the northern army',
        'That he receive a portion of David\'s treasury',
        'That Abishag the Shunammite be given to him as a wife',
        'That he be allowed to return from exile',
      ],
      correct_index: 2,
      explanation: '1 Kings 2:17 — Adonijah asked Bathsheba to request from King Solomon that Abishag the Shunammite be given to him as his wife.',
    },
    {
      question: 'Why did Solomon interpret Adonijah\'s request for Abishag as a bid for the throne?',
      options: [
        'Because Abishag had been secretly promised to the next king',
        'Because asking for the king\'s concubine was tantamount to claiming the kingdom',
        'Because Joab had whispered this plan to Solomon',
        'Because the Law of Moses forbade a woman to serve two kings',
      ],
      correct_index: 1,
      explanation: '1 Kings 2:22 — Solomon said to Bathsheba, "Why do you ask Abishag the Shunammite for Adonijah? Ask for him the kingdom also, for he is my older brother." Taking a king\'s woman was a claim to royal succession.',
    },
    {
      question: 'What happened to Abiathar the priest as a result of his support for Adonijah?',
      options: [
        'He was executed at the altar',
        'He was exiled to Anathoth and stripped of his priestly office',
        'He fled to Egypt and served Pharaoh\'s court',
        'He was imprisoned in the palace dungeon',
      ],
      correct_index: 1,
      explanation: '1 Kings 2:26–27 — Solomon told Abiathar to go to Anathoth, to his own fields, but spared his life because he had carried the ark and shared in David\'s hardships. This fulfilled the word of the Lord concerning the house of Eli.',
    },
    {
      question: 'Which ancient prophecy was fulfilled by Abiathar\'s removal from the priesthood?',
      options: [
        'The prophecy of Samuel about a faithful priest',
        'The word of the Lord spoken against the house of Eli at Shiloh',
        'Nathan\'s oracle concerning David\'s descendants',
        'Moses\'s blessing on the tribe of Levi',
      ],
      correct_index: 1,
      explanation: '1 Kings 2:27 — The narrator notes that this fulfilled the word of the Lord that he had spoken concerning the house of Eli in Shiloh (cf. 1 Samuel 2:31–33).',
    },
    {
      question: 'Where did Joab flee for sanctuary after hearing that Adonijah and Abiathar had been dealt with?',
      options: [
        'The tabernacle at Gibeon',
        'The tent of the Lord, holding the horns of the altar',
        'The city of refuge at Kedesh',
        'The house of Abiathar in Anathoth',
      ],
      correct_index: 1,
      explanation: '1 Kings 2:28 — Joab fled to the tent of the Lord and took hold of the horns of the altar, seeking sanctuary.',
    },
    {
      question: 'Why did Solomon authorize Joab to be killed even though he was clinging to the altar?',
      options: [
        'Because Joab had renounced his faith in God',
        'Because the altar offered no sanctuary for a man who had shed innocent blood deliberately',
        'Because Joab had stolen gold from the ark',
        'Because God appeared to Solomon in a dream and commanded it',
      ],
      correct_index: 1,
      explanation: '1 Kings 2:31–33 — Solomon told Benaiah to strike Joab down so that innocent blood Joab shed would be removed from Solomon and from David\'s house, and Joab\'s blood would return on his own head.',
    },
    {
      question: 'What oath did Solomon require Shimei to swear, and what boundary was set for him?',
      options: [
        'He must leave Judah and go to Benjamin; crossing the Jordan would mean death',
        'He must build a house in Jerusalem and not cross the Kidron Valley on pain of death',
        'He must serve in the temple for seven years or face execution',
        'He must never speak the name of David under penalty of death',
      ],
      correct_index: 1,
      explanation: '1 Kings 2:36–37 — Solomon told Shimei to build a house in Jerusalem and live there, and that on the day he crossed the Kidron Valley he would surely die and his blood would be on his own head.',
    },
    {
      question: 'What event caused Shimei to break his oath and leave Jerusalem, leading to his execution?',
      options: [
        'He traveled to Bethlehem to offer a sacrifice',
        'He went to Gath to retrieve two of his servants who had run away',
        'He journeyed to Hebron to attend his son\'s wedding',
        'He crossed the Jordan to purchase land in Gilead',
      ],
      correct_index: 1,
      explanation: '1 Kings 2:39–40 — After three years, two of Shimei\'s servants ran away to Achish king of Gath. Shimei went to Gath to retrieve them, thereby breaking his oath. When Solomon was told, he summoned Shimei and had Benaiah execute him.',
    },
  ],

  '1 Kings:3': [
    {
      question: 'What politically significant marriage did Solomon make early in his reign?',
      options: [
        'He married a daughter of the king of Tyre',
        'He married a daughter of Pharaoh, king of Egypt',
        'He married a Moabite princess to secure the eastern border',
        'He married a daughter of the king of Sidon',
      ],
      correct_index: 1,
      explanation: '1 Kings 3:1 — Solomon made a marriage alliance with Pharaoh king of Egypt and took Pharaoh\'s daughter and brought her into the city of David.',
    },
    {
      question: 'Why did Solomon sacrifice at the high places, and where was the greatest high place?',
      options: [
        'Because the temple had already been built at Jerusalem',
        'Because no house had yet been built for the Lord\'s name, and Gibeon was the great high place',
        'Because God commanded him to sacrifice at the high places during the wilderness period',
        'Because Jerusalem was declared unclean after Adonijah\'s rebellion',
      ],
      correct_index: 1,
      explanation: '1 Kings 3:2–4 — The people sacrificed at the high places because no house had yet been built for the name of the Lord. Solomon loved the Lord, walking in the statutes of David his father, except that he sacrificed at the high places. He went to Gibeon, the great high place, and offered a thousand burnt offerings.',
    },
    {
      question: 'When God appeared to Solomon at Gibeon and said "Ask what I shall give you," what did Solomon request?',
      options: [
        'Long life and victory over his enemies',
        'Great riches to fund the temple',
        'An understanding mind to govern the people and discern between good and evil',
        'The gift of prophecy like Moses',
      ],
      correct_index: 2,
      explanation: '1 Kings 3:9 — Solomon asked for "an understanding mind to govern your people, that I may discern between good and evil, for who is able to govern this your great people?"',
    },
    {
      question: 'What additional blessings did God grant Solomon beyond what he requested?',
      options: [
        'Military power and the gift of prophecy',
        'Riches and honor, and long life if he walked in God\'s ways',
        'A hundred years of peace and the loyalty of all neighboring nations',
        'Victory over Egypt and dominion to the Euphrates',
      ],
      correct_index: 1,
      explanation: '1 Kings 3:13–14 — God gave Solomon riches and honor, such that no other king would compare all his days. And if Solomon walked in God\'s ways and kept his statutes and commandments as David his father had, God would also lengthen his days.',
    },
    {
      question: 'After the dream at Gibeon, where did Solomon go and what did he do?',
      options: [
        'He went to Hebron and built an altar',
        'He returned to Jerusalem, stood before the ark of the covenant, offered burnt offerings and peace offerings, and made a feast',
        'He traveled to Tyre to inform Hiram of his dream',
        'He summoned all the priests to Gibeon for a week of sacrifices',
      ],
      correct_index: 1,
      explanation: '1 Kings 3:15 — Solomon awoke, and it was a dream. He came to Jerusalem and stood before the ark of the covenant of the Lord and offered burnt offerings and peace offerings, and made a feast for all his servants.',
    },
    {
      question: 'In the famous case of the two women and one living baby, what did Solomon initially threaten to do?',
      options: [
        'Exile both women until the true mother was identified',
        'Divide the living child in two and give half to each woman',
        'Place the child in the temple until God revealed the truth',
        'Require both women to swear an oath before the ark',
      ],
      correct_index: 1,
      explanation: '1 Kings 3:25 — The king said, "Divide the living child in two, and give half to the one and half to the other."',
    },
    {
      question: 'How did the true mother reveal herself in the dispute over the living child?',
      options: [
        'She produced witnesses who had seen her give birth',
        'She wept and begged Solomon to give the child to the other woman rather than kill him',
        'She recited the child\'s birthmark before the court',
        'She offered to take a lesser payment in exchange for the baby',
      ],
      correct_index: 1,
      explanation: '1 Kings 3:26 — The woman whose son was alive said to the king (because her heart yearned for her son), "Oh, my lord, give her the living child, and by no means put him to death." But the other said, "He shall be neither mine nor yours; divide him."',
    },
    {
      question: 'What was the reaction of all Israel when they heard Solomon\'s judgment in the case of the two mothers?',
      options: [
        'They brought gifts to the palace in celebration',
        'They feared the king, because they perceived that the wisdom of God was in him to do justice',
        'They debated whether Solomon\'s ruling was fair to both women',
        'They went to Gibeon to offer sacrifices of thanksgiving',
      ],
      correct_index: 1,
      explanation: '1 Kings 3:28 — All Israel heard of the judgment that the king had rendered, and they stood in awe of the king, because they perceived that the wisdom of God was in him to do justice.',
    },
    {
      question: 'In his prayer at Gibeon, how did Solomon describe himself and his situation before God?',
      options: [
        'As a mighty warrior who needed wisdom in battle',
        'As a little child who did not know how to go out or come in, governing a people too great to number',
        'As a humble servant unworthy of even entering the tent of meeting',
        'As David\'s chosen heir who had already proven himself in battle',
      ],
      correct_index: 1,
      explanation: '1 Kings 3:7–8 — Solomon said, "I am but a little child. I do not know how to go out or come in. And your servant is in the midst of your people whom you have chosen, a great people, too many to be numbered or counted for multitude."',
    },
    {
      question: 'What pleased God about Solomon\'s request at Gibeon?',
      options: [
        'That Solomon chose wisdom over long life, riches, and the death of his enemies',
        'That Solomon offered a thousand burnt offerings before asking',
        'That Solomon mentioned David\'s faithfulness as the basis for his request',
        'That Solomon asked for wisdom to build the temple',
      ],
      correct_index: 0,
      explanation: '1 Kings 3:10–11 — It pleased the Lord that Solomon had asked for understanding. God said that because Solomon had not asked for long life or riches or the life of his enemies, but had asked for understanding to discern what is right, God would grant his request.',
    },
  ],

  '1 Kings:4': [
    {
      question: 'Who served as the chief priests under Solomon\'s administration?',
      options: [
        'Abiathar and Jonathan',
        'Azariah son of Zadok, and Abiathar',
        'Zadok and Nathan',
        'Benaiah and Jehoshaphat',
      ],
      correct_index: 0,
      explanation: '1 Kings 4:2 — Azariah the son of Zadok was the priest. (Abiathar had been deposed in chapter 2; the text lists Azariah, Zadok\'s son, as serving under Solomon.)',
    },
    {
      question: 'How many district governors did Solomon appoint over all Israel, and what was their primary duty?',
      options: [
        'Six governors, each serving two months of the year',
        'Twelve governors, each responsible for providing provisions for the king and his household for one month of the year',
        'Ten governors, rotating through the twelve tribes',
        'Twenty-four governors serving the king and the Levitical cities',
      ],
      correct_index: 1,
      explanation: '1 Kings 4:7 — Solomon had twelve officers over all Israel who provided food for the king and his household; each man had to make provision for one month in the year.',
    },
    {
      question: 'What were Solomon\'s daily provisions for his household, according to 1 Kings 4?',
      options: [
        '10 cors of fine flour, 20 cors of meal, and 10 oxen',
        '30 cors of fine flour, 60 cors of meal, 10 fat oxen, 20 pasture-fed cattle, 100 sheep, and various other provisions',
        '100 cors of wheat and 40 oxen per day',
        '50 loaves of bread, 5 oxen, and 20 sheep per day',
      ],
      correct_index: 1,
      explanation: '1 Kings 4:22–23 — Solomon\'s provision for one day was thirty cors of fine flour and sixty cors of meal, ten fat oxen and twenty pasture-fed cattle, a hundred sheep, besides deer, gazelles, roebucks, and fattened fowl.',
    },
    {
      question: 'How vast was Solomon\'s dominion described in 1 Kings 4?',
      options: [
        'From Dan to Beersheba',
        'From the Euphrates to the land of the Philistines and to the border of Egypt',
        'From Egypt to Assyria',
        'From the Red Sea to the Mediterranean coast',
      ],
      correct_index: 1,
      explanation: '1 Kings 4:21 — Solomon ruled over all the kingdoms from the Euphrates to the land of the Philistines and to the border of Egypt; they brought tribute and served Solomon all the days of his life.',
    },
    {
      question: 'How many proverbs did Solomon speak, and how many songs did he compose?',
      options: [
        '1,000 proverbs and 500 songs',
        '3,000 proverbs and 1,005 songs',
        '2,500 proverbs and 750 songs',
        '3,600 proverbs and 1,000 songs',
      ],
      correct_index: 1,
      explanation: '1 Kings 4:32 — He also spoke 3,000 proverbs, and his songs were 1,005.',
    },
    {
      question: 'Solomon\'s wisdom is compared to that of which peoples and individuals in 1 Kings 4?',
      options: [
        'The sages of Babylon and the wise men of Persia',
        'The people of the east and all the wisdom of Egypt, and men such as Ethan, Heman, Calcol, and Darda',
        'The scribes of Pharaoh and the oracles of Tyre',
        'Daniel, Ezra, and the prophets of Elijah\'s school',
      ],
      correct_index: 1,
      explanation: '1 Kings 4:30–31 — Solomon\'s wisdom surpassed the wisdom of all the people of the east and all the wisdom of Egypt. He was wiser than all other men, including Ethan the Ezrahite and Heman, Calcol, and Darda, the sons of Mahol.',
    },
    {
      question: 'What subjects did Solomon\'s wisdom encompass, according to 1 Kings 4?',
      options: [
        'Military strategy and diplomatic protocol',
        'Trees from the cedar of Lebanon to the hyssop, and also beasts, birds, reptiles, and fish',
        'Mathematics, astronomy, and architecture',
        'Temple liturgy, priestly law, and sacred music',
      ],
      correct_index: 1,
      explanation: '1 Kings 4:33 — He spoke of trees, from the cedar that is in Lebanon to the hyssop that grows out of the wall. He spoke also of beasts, and of birds, and of reptiles, and of fish.',
    },
    {
      question: 'What does 1 Kings 4 say about the state of Judah and Israel during Solomon\'s reign?',
      options: [
        'There were frequent skirmishes with the Philistines along the coast',
        'Judah and Israel were as many as the sand by the sea; they ate and drank and were happy',
        'The people labored heavily under taxation and were discontent',
        'The northern tribes chafed under the governor system and sought independence',
      ],
      correct_index: 1,
      explanation: '1 Kings 4:20 — Judah and Israel were as many as the sand by the sea. They ate and drank and were happy.',
    },
    {
      question: 'How many stalls of horses for his chariots and horsemen did Solomon have?',
      options: [
        '4,000 stalls and 12,000 horsemen',
        '40,000 stalls of horses and 12,000 horsemen',
        '20,000 stalls and 8,000 horsemen',
        '10,000 stalls and 5,000 charioteers',
      ],
      correct_index: 1,
      explanation: '1 Kings 4:26 — Solomon also had 40,000 stalls of horses for his chariots, and 12,000 horsemen.',
    },
    {
      question: 'From where did people come to hear Solomon\'s wisdom?',
      options: [
        'From throughout the twelve tribes of Israel only',
        'From all peoples and from all kings of the earth who had heard of his wisdom',
        'From Egypt and Mesopotamia exclusively',
        'From all cities of the Philistine coast',
      ],
      correct_index: 1,
      explanation: '1 Kings 4:34 — And people of all nations came to hear the wisdom of Solomon, and from all the kings of the earth who had heard of his wisdom.',
    },
  ],

  '1 Kings:5': [
    {
      question: 'What was the nature of the relationship between Hiram king of Tyre and David that set the stage for Solomon\'s temple partnership?',
      options: [
        'Hiram and David had a trade agreement regarding the copper mines of the Negev',
        'Hiram had always loved David, and he sent his servants to Solomon when he heard Solomon had been anointed king',
        'David had rescued Hiram from a Philistine siege early in his reign',
        'Hiram was David\'s brother-in-law through marriage',
      ],
      correct_index: 1,
      explanation: '1 Kings 5:1 — Hiram king of Tyre sent his servants to Solomon, for Hiram had always loved David. And when Hiram heard that Solomon had been anointed king in place of his father, he sent his servants.',
    },
    {
      question: 'Why had David been unable to build the temple himself?',
      options: [
        'Because David lacked the financial resources to undertake such a large project',
        'Because of the warfare that surrounded David on every side; God told him his son would build it instead',
        'Because the Levites objected to a military man building the Lord\'s house',
        'Because David\'s sin with Bathsheba disqualified him from the sacred task',
      ],
      correct_index: 1,
      explanation: '1 Kings 5:3 — David could not build a house for the name of the Lord his God because of the warfare with which his enemies surrounded him. But God told him his son who would sit on his throne would build it.',
    },
    {
      question: 'What materials did Hiram agree to provide for the temple construction?',
      options: [
        'Gold, silver, and precious stones from Phoenician mines',
        'Cedar and cypress timber, floated down by sea in rafts',
        'Dressed stone blocks quarried from the mountains of Lebanon',
        'Iron tools and bronze fittings for the temple furnishings',
      ],
      correct_index: 1,
      explanation: '1 Kings 5:8–9 — Hiram said he would fulfill all Solomon\'s desires concerning cedar and cypress timber. His servants would bring the logs down from Lebanon to the sea and he would make them into rafts and float them to wherever Solomon directed.',
    },
    {
      question: 'What did Solomon provide to Hiram annually in exchange for the timber?',
      options: [
        '20,000 talents of gold and 500 talents of silver',
        '20,000 cors of wheat as food for his household and 20,000 cors of beaten oil',
        '1,000 talents of cedar and 500 of cypress in crafted goods',
        'Access to the port of Ezion-geber on the Red Sea',
      ],
      correct_index: 1,
      explanation: '1 Kings 5:11 — Solomon gave Hiram 20,000 cors of wheat as food for his household, and 20,000 cors of beaten oil. Solomon gave this to Hiram year by year.',
    },
    {
      question: 'How many men did Solomon conscript from all Israel for the Lebanon logging operation, and how did they rotate?',
      options: [
        '10,000 men going in shifts of 5,000 per month',
        '30,000 men, 10,000 a month in shifts — one month in Lebanon and two months at home',
        '50,000 men in four rotating groups of 12,500',
        '20,000 men working six months in Lebanon and six months at home',
      ],
      correct_index: 1,
      explanation: '1 Kings 5:13–14 — King Solomon drafted forced labor out of all Israel, and the draft numbered 30,000 men. He sent them to Lebanon, 10,000 a month in shifts. They would be a month in Lebanon and two months at home.',
    },
    {
      question: 'How many burden-bearers and stonecutters did Solomon have in the hill country?',
      options: [
        '40,000 burden-bearers and 40,000 stonecutters',
        '70,000 burden-bearers and 80,000 stonecutters in the hill country',
        '50,000 burden-bearers and 60,000 stonecutters',
        '80,000 burden-bearers and 70,000 stonecutters',
      ],
      correct_index: 1,
      explanation: '1 Kings 5:15–16 — Solomon had 70,000 burden-bearers and 80,000 stonecutters in the hill country, besides Solomon\'s 3,300 chief officers who were over the work.',
    },
    {
      question: 'What special instruction was given regarding the preparation of the foundation stones for the temple?',
      options: [
        'They were to be consecrated with oil before being laid',
        'They were to be costly stones, hewn and dressed according to measure',
        'They were to be transported only during the month of harvest',
        'Only Levites were permitted to touch the foundation stones',
      ],
      correct_index: 1,
      explanation: '1 Kings 5:17 — The king commanded, and they quarried out great, costly stones in order to lay the foundation of the house with dressed stones.',
    },
    {
      question: 'What was the basis of the formal treaty (covenant) between Solomon and Hiram?',
      options: [
        'A military alliance against the Philistines and Arameans',
        'The Lord gave Solomon wisdom as he had promised; they made a treaty and both parties kept the terms',
        'A marriage between Solomon\'s son and Hiram\'s daughter',
        'Hiram\'s conversion to the worship of Israel\'s God',
      ],
      correct_index: 1,
      explanation: '1 Kings 5:12 — The Lord gave Solomon wisdom, as he promised him. And there was peace between Hiram and Solomon, and the two of them made a treaty.',
    },
    {
      question: 'Where did Hiram\'s men work alongside Solomon\'s men in preparing timber?',
      options: [
        'In the Jezreel Valley',
        'In Lebanon, with Solomon\'s Gebalites also doing the heavy cutting',
        'In the forests of Bashan east of the Jordan',
        'On the slopes of Mount Hermon near Damascus',
      ],
      correct_index: 1,
      explanation: '1 Kings 5:18 — Solomon\'s builders and Hiram\'s builders and the men of Gebal did the cutting and prepared the timber and the stone to build the house.',
    },
    {
      question: 'Solomon\'s proposed purpose for the temple is stated in his message to Hiram. What was it?',
      options: [
        'To house the ark permanently and replace the tabernacle',
        'To build a house for the name of the Lord his God, as God had promised',
        'To establish Jerusalem as the center of worship for all nations',
        'To fulfill a vow David had made at the time of Absalom\'s rebellion',
      ],
      correct_index: 1,
      explanation: '1 Kings 5:5 — Solomon said he intended to build a house for the name of the Lord his God, as the Lord had said to David his father, "Your son, whom I will set on your throne in your place, shall build the house for my name."',
    },
  ],

  '1 Kings:6': [
    {
      question: 'In what year of Solomon\'s reign did construction of the temple begin, and how is that year dated in relation to the Exodus?',
      options: [
        'In the seventh year of Solomon\'s reign, 520 years after the Exodus',
        'In the fourth year of Solomon\'s reign, in the 480th year after the people of Israel came out of Egypt',
        'In the first year of Solomon\'s reign, 400 years after the Exodus',
        'In the tenth year of Solomon\'s reign, in the 500th year after the Exodus',
      ],
      correct_index: 1,
      explanation: '1 Kings 6:1 — In the 480th year after the people of Israel came out of the land of Egypt, in the fourth year of Solomon\'s reign over Israel, in the month of Ziv, which is the second month, he began to build the house of the Lord.',
    },
    {
      question: 'What were the dimensions of the temple building (excluding the porch)?',
      options: [
        '100 cubits long, 50 cubits wide, and 50 cubits high',
        '60 cubits long, 20 cubits wide, and 30 cubits high',
        '40 cubits long, 20 cubits wide, and 20 cubits high',
        '80 cubits long, 30 cubits wide, and 40 cubits high',
      ],
      correct_index: 1,
      explanation: '1 Kings 6:2 — The house that King Solomon built for the Lord was 60 cubits long, 20 cubits wide, and 30 cubits high.',
    },
    {
      question: 'What was the notable rule about the tools used during the construction of the temple on site?',
      options: [
        'No bronze tools were used, only iron',
        'No hammer or axe or any iron tool was heard in the house while it was being built',
        'Only Levite craftsmen were permitted to use tools within the temple precinct',
        'Tools had to be ritually washed before each day\'s work',
      ],
      correct_index: 1,
      explanation: '1 Kings 6:7 — When the house was built, it was built with stone prepared at the quarry, so that neither hammer nor axe nor any iron tool was heard in the house while it was being built.',
    },
    {
      question: 'What was the inner sanctuary (the Most Holy Place) built to house?',
      options: [
        'The bronze altar of burnt offering',
        'The ark of the covenant of the Lord',
        'The golden lampstand and table of showbread',
        'The laver and the priests\' garments',
      ],
      correct_index: 1,
      explanation: '1 Kings 6:19 — The inner sanctuary he prepared in the innermost part of the house, to set there the ark of the covenant of the Lord.',
    },
    {
      question: 'What were the dimensions of the inner sanctuary (the Most Holy Place)?',
      options: [
        '30 cubits long, 20 cubits wide, and 20 cubits high',
        '20 cubits long, 20 cubits wide, and 20 cubits high — a perfect cube',
        '40 cubits long, 20 cubits wide, and 30 cubits high',
        '15 cubits long, 15 cubits wide, and 15 cubits high',
      ],
      correct_index: 1,
      explanation: '1 Kings 6:20 — The inner sanctuary was 20 cubits long, 20 cubits wide, and 20 cubits high. He overlaid it with pure gold.',
    },
    {
      question: 'What were the two large cherubim in the inner sanctuary made of, and how large were they?',
      options: [
        'Pure gold, each 5 cubits tall with a 5-cubit wingspan',
        'Olivewood, each 10 cubits tall with wings of 5 cubits each, so each cherub\'s wingspan was 10 cubits',
        'Cedar wood overlaid with silver, each 8 cubits tall',
        'Bronze, cast in the foundry east of the Jordan, each 12 cubits tall',
      ],
      correct_index: 1,
      explanation: '1 Kings 6:23–24 — In the inner sanctuary he made two cherubim of olivewood, each 10 cubits high. Five cubits was the length of one wing of the cherub and five cubits the length of the other wing; it was 10 cubits from the tip of one wing to the tip of the other.',
    },
    {
      question: 'What conditional promise did God make to Solomon during the temple\'s construction?',
      options: [
        'That God would make the temple indestructible as long as it stood',
        'That God would dwell among the children of Israel and not forsake them, if Solomon walked in God\'s statutes and obeyed his commandments',
        'That all the nations would come to worship at the temple within Solomon\'s lifetime',
        'That God would give Solomon forty more years to reign if the temple was built in seven years',
      ],
      correct_index: 1,
      explanation: '1 Kings 6:12–13 — The Lord said to Solomon: "Concerning this house that you are building, if you will walk in my statutes and obey my rules and keep all my commandments and walk in them, then I will establish my word with you, which I spoke to David your father. And I will dwell among the children of Israel and will not forsake my people Israel."',
    },
    {
      question: 'How long did it take Solomon to build the temple?',
      options: [
        'Ten years',
        'Seven years',
        'Twenty years',
        'Four years',
      ],
      correct_index: 1,
      explanation: '1 Kings 6:38 — In the eleventh year, in the month of Bul, which is the eighth month, the house was finished in all its parts and according to all its specifications. He was seven years in building it.',
    },
    {
      question: 'What material covered the interior walls and floor of the temple?',
      options: [
        'Polished limestone plastered with gypsum',
        'Cedar planks and boards covering the stone walls, and cypress planks for the floor, all overlaid with gold',
        'Bronze panels hammered onto the stone walls',
        'Hewn marble from the quarries of Lebanon',
      ],
      correct_index: 1,
      explanation: '1 Kings 6:15, 30 — He lined the walls of the house on the inside with boards of cedar; from the floor of the house to the walls of the ceiling he covered them on the inside with wood, and he covered the floor of the house with boards of cypress. He covered the floor of the inner and outer rooms with gold.',
    },
    {
      question: 'What was carved on the cedar walls and olivewood doors inside the temple?',
      options: [
        'The ten commandments and scenes from the Exodus',
        'Cherubim, palm trees, and open flowers',
        'The genealogy of Aaron and the names of the twelve tribes',
        'Scenes from the battle of Jericho and David\'s victories',
      ],
      correct_index: 1,
      explanation: '1 Kings 6:29, 32 — He carved all the walls of the house around with carved engravings of cherubim, palm trees, and open flowers, in the inner and outer rooms. The two doors of olivewood had carved cherubim, palm trees, and open flowers, and he overlaid them with gold.',
    },
  ],
};

const passagesData: Record<string, { verse_start: number; verse_end: number; topic: string; plain_language: string; theological_context: string }[]> = {
  '1 Kings:1': [
    {
      verse_start: 1,
      verse_end: 4,
      topic: 'Abishag and the aging David',
      plain_language: 'King David in his old age could not stay warm even under many blankets, so his servants searched the land for a beautiful young woman who could lie beside him and keep him warm. They found Abishag from Shunem, who cared for David and served him — but David did not have sexual relations with her.',
      theological_context: 'This passage introduces the theme of the transition of power by showing David\'s physical decline. In the ancient Near East, a king\'s virility was associated with his fitness to rule. David\'s inability to "know" Abishag signals that the old king\'s era is ending. Abishag later becomes a flashpoint in the succession narrative (ch. 2), illustrating how closely a king\'s women were tied to claims on the throne.',
    },
    {
      verse_start: 28,
      verse_end: 35,
      topic: 'David\'s oath and Solomon\'s anointing',
      plain_language: 'After Nathan and Bathsheba remind David of his private oath to make Solomon king, David re-declares the oath to Bathsheba, then immediately commands that Solomon be placed on the royal mule and brought to the Gihon spring to be anointed by Zadok the priest and Nathan the prophet.',
      theological_context: 'This passage demonstrates the importance of covenant faithfulness: David honors a prior oath even on his deathbed. The anointing at the Gihon spring — outside Jerusalem\'s walls — is publicly visible and audible, contrasting with Adonijah\'s more private feast at En-rogel. It also fulfills the divine promise made through Nathan in 2 Samuel 7 that a son of David would sit on the throne.',
    },
    {
      verse_start: 49,
      verse_end: 53,
      topic: 'Adonijah at the altar and Solomon\'s mercy',
      plain_language: 'When Adonijah\'s supporters heard the news of Solomon\'s anointing, they scattered in fear. Adonijah himself ran to the tabernacle and grabbed hold of the horns of the altar, a traditional act of seeking sanctuary. Solomon spared his life on condition of good behavior, and Adonijah came and bowed before Solomon.',
      theological_context: 'Altar horns were the most sacred point of the sanctuary; clinging to them was a plea for divine asylum (cf. Exodus 21:13–14). Solomon\'s conditional mercy reflects wisdom — he neither executes his brother immediately nor allows an unguarded rival to roam free. This incident sets up the tragic irony of chapter 2, where Adonijah again overreaches and forfeits the mercy he was given.',
    },
  ],

  '1 Kings:2': [
    {
      verse_start: 1,
      verse_end: 9,
      topic: 'David\'s final charge to Solomon',
      plain_language: 'As David neared death, he gave Solomon two types of instructions: first, a spiritual charge — obey God\'s law as Moses taught, so that you and your dynasty will prosper; second, practical political directives — deal wisely with Joab (who murdered innocent commanders) and with Shimei (who cursed the king), but show kindness to Barzillai\'s family who helped David in exile.',
      theological_context: 'The charge is structured like the Deuteronomic covenant-renewal pattern: it ties dynastic success directly to Torah obedience (cf. Deuteronomy 17:18–20). Scholars note that the political instructions sit in tension with the spiritual ideal — David is essentially asking Solomon to settle old scores. The passage raises enduring questions about the relationship between justice, revenge, and royal power.',
    },
    {
      verse_start: 26,
      verse_end: 27,
      topic: 'Abiathar exiled — the Eli prophecy fulfilled',
      plain_language: 'Solomon removed Abiathar from being priest — sparing his life because he had carried the ark of God before David and shared all of David\'s hardships — and sent him to his home in Anathoth. This ended the line of Eli from the high priesthood.',
      theological_context: 'This short passage is a key theological marker in the Deuteronomistic History. It explicitly notes the fulfillment of the oracle against the house of Eli (1 Samuel 2:27–36; 3:11–14), showing that God\'s word is reliable across generations. Anathoth later becomes the hometown of Jeremiah, creating a notable canonical echo. Zadok\'s line now holds the priesthood — the line from which Second Temple priesthood derived.',
    },
    {
      verse_start: 36,
      verse_end: 46,
      topic: 'Shimei\'s oath, violation, and execution',
      plain_language: 'Solomon placed Shimei under house arrest in Jerusalem: he could live freely within the city but must never cross the Kidron Valley. Shimei agreed. Three years later, two of his servants ran away to Gath and Shimei went to retrieve them, crossing the valley. Solomon viewed this as a willful breaking of the oath and had Benaiah execute him.',
      theological_context: 'The Shimei episode illustrates Solomon consolidating royal security by eliminating any remaining threat from the house of Saul. Shimei had cursed David (2 Samuel 16:5–8), and although David had pardoned him, he recognized the ongoing danger. The passage also raises theological questions about oaths, mercy extended, and the limits of forgiveness when an oath is broken. The conclusion — "So the kingdom was established in the hand of Solomon" — frames all of chapter 2 as Solomon securing his throne.',
    },
  ],

  '1 Kings:3': [
    {
      verse_start: 5,
      verse_end: 15,
      topic: 'Solomon\'s dream at Gibeon — the gift of wisdom',
      plain_language: 'While Solomon was at the great high place of Gibeon, God appeared to him in a dream at night and offered him anything he wished. Solomon acknowledged God\'s love for David, admitted his own youth and inexperience, and asked for an understanding heart to govern God\'s people wisely. God was pleased because Solomon did not ask for wealth, long life, or victory over enemies. God granted wisdom and also gave him what he did not ask for: riches and honor.',
      theological_context: 'This theophanic dream is the theological center of 1 Kings 3. The narrative follows a common ancient pattern of divine audience in a dream at a sacred site. Solomon\'s request for "lev shomea" (a hearing heart) is a profound expression of servant leadership. The story functions as the legitimizing account of Solomonic wisdom — all subsequent demonstrations of his wisdom (including the two mothers) flow from this moment. The conditional note ("if you walk in my ways") embedded within the blessing foreshadows the later tragedy of Solomon\'s apostasy.',
    },
    {
      verse_start: 16,
      verse_end: 22,
      topic: 'Two mothers, one living child — the disputed claim',
      plain_language: 'Two women who lived in the same house both gave birth. One baby died during the night, and both women now claimed the living child as their own. Each insisted the dead child belonged to the other. There were no witnesses — only the two women\'s contradictory testimonies before the king.',
      theological_context: 'This case functions as the immediate demonstration of God\'s granted wisdom. It is deliberately chosen for its apparent insolubility: there is no evidence, no witness, no documentary proof. Solomon\'s solution does not rely on legal procedure but on psychological insight into maternal love. The passage illustrates that divine wisdom operates not merely through intellect but through understanding human nature. It is also a statement about access to justice — even the lowest (prostitutes had no social standing) could bring their case to the king.',
    },
    {
      verse_start: 23,
      verse_end: 28,
      topic: 'Solomon\'s judgment — the living child revealed',
      plain_language: 'Solomon called for a sword and ordered the living child cut in two, giving half to each woman. The real mother immediately gave up her claim to save the child\'s life, while the other woman agreed to the division. By this psychological test Solomon identified the true mother and awarded her the child. All Israel heard the verdict and stood in awe.',
      theological_context: 'Solomon\'s command to divide the child is not a literal sentence but a diagnostic test. The true mother\'s self-sacrificial love reveals her identity more surely than any witness could. The conclusion — "the wisdom of God was in him to do justice" — directly ties the legal outcome to the divine gift of chapter 3:12. The narrative also serves a political function: demonstrating to all Israel that the new king possesses the discernment necessary to govern justly, legitimizing his reign.',
    },
  ],

  '1 Kings:4': [
    {
      verse_start: 20,
      verse_end: 25,
      topic: 'The prosperity and peace of Solomon\'s kingdom',
      plain_language: 'Judah and Israel were as numerous as sand on the seashore. They ate, drank, and were happy. Solomon ruled from the Euphrates to the border of Egypt, and all those kingdoms paid tribute to him. Every man sat under his own vine and fig tree during Solomon\'s lifetime — a picture of complete security and abundance.',
      theological_context: 'The image of "sitting under one\'s own vine and fig tree" (v. 25) is a potent symbol of covenantal shalom in the Hebrew Bible — it recurs in Micah 4:4 and Zechariah 3:10 as an eschatological promise. The narrative presents Solomon\'s reign as a realized fulfillment of Deuteronomic covenant blessings (cf. Deuteronomy 28:1–14): obedience to God yields prosperity, security, and honor. This golden age is the highwater mark against which Solomon\'s later decline will be measured.',
    },
    {
      verse_start: 29,
      verse_end: 31,
      topic: 'Solomon\'s wisdom surpassing all others',
      plain_language: 'God gave Solomon wisdom and understanding beyond measure, and breadth of mind like the sand of the seashore. His wisdom surpassed that of all the wise men of the ancient Near East — including famous sages of Egypt and men like Ethan, Heman, Calcol, and Darda who were celebrated for their wisdom.',
      theological_context: 'This passage situates Solomon within the wider ancient Near Eastern wisdom tradition. Egypt was renowned for its wisdom literature (e.g., the Instruction of Amenemope); the "sons of the east" — Edomites, Arabians, and Mesopotamians — were famous for proverbial wisdom. The text\'s claim is not that Israel is hostile to this tradition but that God\'s gift surpasses it. This reflects the theological conviction that true wisdom begins with the fear of the Lord (Proverbs 1:7) and that Israel\'s king embodies its fullest expression.',
    },
    {
      verse_start: 32,
      verse_end: 34,
      topic: 'Solomon\'s literary and natural-historical wisdom',
      plain_language: 'Solomon composed 3,000 proverbs and 1,005 songs. He taught about all kinds of plants, from the great cedar of Lebanon down to the tiny hyssop plant growing from a wall. He also taught about animals, birds, reptiles, and fish. Kings and people from every nation came to hear his wisdom.',
      theological_context: 'This encyclopedic wisdom — sometimes called "onomastic" or "list" wisdom — was a recognized genre in the ancient Near East, in which sages catalogued the natural world to demonstrate mastery of God\'s creation. Solomon\'s role as author is credited for Proverbs, Ecclesiastes, and the Song of Solomon in the canon. The international character of those who came to hear him prefigures the Queen of Sheba\'s visit in chapter 10 and frames Israel\'s wisdom as a gift meant to draw the nations toward the God of Israel.',
    },
  ],

  '1 Kings:5': [
    {
      verse_start: 3,
      verse_end: 5,
      topic: 'Why David could not build the temple — Solomon\'s purpose',
      plain_language: 'Solomon explained to Hiram that his father David had wanted to build a temple for God\'s name but was prevented because of the constant warfare surrounding his reign. God had told David that his son, who would sit on his throne in peace, was the one appointed to build the temple. Now Solomon intended to fulfill that calling.',
      theological_context: 'This passage preserves a key theological distinction in the Deuteronomistic History between David the warrior-king and Solomon the builder-king. The restraint on David from building the temple (cf. 2 Samuel 7:5–13; 1 Chronicles 22:8) is not a punishment but a division of vocations: David secured the land by warfare; Solomon built the house in the peace that followed. This typology influenced later Christian theology, where David is seen as a type of the Law/conflict and Solomon as a type of Christ and the eschatological peace.',
    },
    {
      verse_start: 13,
      verse_end: 18,
      topic: 'Solomon\'s forced labor levy',
      plain_language: 'Solomon conscripted 30,000 Israelite men for logging in Lebanon, rotating them in shifts of 10,000 per month — one month in Lebanon, two months at home. He also had 80,000 stonecutters in the hills and 70,000 burden-bearers, supervised by 3,300 officers. The workers prepared massive, costly foundation stones.',
      theological_context: 'The labor levy (Hebrew: "mas") is theologically and politically charged. Earlier, Samuel had warned Israel that a king would conscript their sons and daughters (1 Samuel 8:11–17). The fulfillment of that warning begins here and grows under Solomon. Later (1 Kings 12), the northern tribes will cite the heavy labor burden as justification for secession. The passage illustrates the tension between glorious achievement and the human cost that underwrites it — a tension the narrative does not fully resolve.',
    },
    {
      verse_start: 7,
      verse_end: 12,
      topic: 'Hiram\'s joy and the covenant of peace',
      plain_language: 'When Hiram heard Solomon\'s full proposal, he rejoiced greatly and blessed the Lord for giving David such a wise son to rule over this great people. Hiram agreed to provide cedar and cypress timber in exchange for annual payments of wheat and olive oil. A formal treaty of peace was established between the two kings.',
      theological_context: 'A Gentile king\'s blessing of the Lord God of Israel ("Blessed be the Lord this day") is remarkable and theologically significant — it echoes Jethro\'s blessing in Exodus 18:10. The commercial partnership is cast not merely as a trade deal but as an expression of the divine gift of wisdom generating peace with surrounding nations. The Hiram-Solomon alliance illustrates the Deuteronomic vision in which Israel\'s obedience brings blessing that spills over to the nations.',
    },
  ],

  '1 Kings:6': [
    {
      verse_start: 1,
      verse_end: 7,
      topic: 'Temple construction begins — silence of iron tools',
      plain_language: 'The temple construction began in the 480th year after the Exodus from Egypt, in the fourth year of Solomon\'s reign. The building was 60 cubits long, 20 wide, and 30 high, with a vestibule at the front. All the stone was dressed at the quarry so that no hammer, axe, or iron tool was heard on site during construction.',
      theological_context: 'The 480-year figure is a significant chronological anchor linking the temple to the Exodus — the defining act of Israel\'s creation as a nation. It signals that building the temple is the culminating act of Israel\'s journey from slavery to settled worship. The silence of iron tools on site reflects the holiness of the sacred space: iron was associated with warfare and death (cf. Numbers 35:16), and the sanctuary was to be approached without instruments of violence. The principle influenced later Jewish and Christian thought about sacred spaces being set apart from the violence of ordinary life.',
    },
    {
      verse_start: 11,
      verse_end: 13,
      topic: 'God\'s conditional promise during construction',
      plain_language: 'While the temple was being built, the word of the Lord came to Solomon with a conditional promise: if Solomon walked in God\'s statutes, obeyed his rules, and kept all his commandments, then God would fulfill his promise to David — God would dwell among Israel and never abandon his people.',
      theological_context: 'This divine speech inserted into the middle of the construction account is one of the most theologically important passages in Kings. It interrupts the architectural description to make the crucial point: the temple\'s value is not architectural or cultic but covenantal. God\'s presence is conditional on obedience, not guaranteed by the building. This principle explains why the temple could be destroyed (2 Kings 25) — God\'s departure (cf. Ezekiel 10–11) preceded its fall. The passage is the theological hinge on which the entire Solomonic narrative turns.',
    },
    {
      verse_start: 23,
      verse_end: 30,
      topic: 'The cherubim and the gold overlay of the inner sanctuary',
      plain_language: 'In the Most Holy Place, Solomon placed two large cherubim carved from olivewood, each 10 cubits tall with a 10-cubit wingspan. They stood facing the main hall, their wings touching each other and the walls on both sides, spanning the full width of the inner sanctuary. The entire interior — walls, floor, and cherubim — was covered with gold.',
      theological_context: 'The cherubim in the inner sanctuary extend and fulfill the pattern of the tabernacle, where cherubim adorned the ark\'s mercy seat (Exodus 25:18–22). They represent the heavenly guardians of the divine throne — God was said to be "enthroned between the cherubim" (1 Samuel 4:4; Psalm 80:1). The total gold overlay of the innermost sanctuary represents its absolute holiness: nothing ordinary, no raw material, is visible. Theologically, the inner sanctuary is conceived as the earthly counterpart of the heavenly throne room, the meeting point between heaven and earth.',
    },
  ],
};

async function main() {
  console.log('Seeding 1 Kings 1-6...');

  for (const [key, questions] of Object.entries(quizData)) {
    const [bookName, chNum] = key.split(':');
    const { data: book } = await supabase.from('books').select('id').eq('name', bookName).single();
    if (!book) { console.warn(`Book not found: ${bookName}`); continue; }
    const { data: chapter } = await supabase.from('chapters').select('id').eq('book_id', book.id).eq('chapter_number', parseInt(chNum)).single();
    if (!chapter) { console.warn(`Chapter not found: ${key}`); continue; }
    await supabase.from('quiz_questions').delete().eq('chapter_id', chapter.id);
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
