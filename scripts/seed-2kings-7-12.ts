// Run: npx tsx scripts/seed-2kings-7-12.ts
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

// ---------------------------------------------------------------------------
// Quiz Data
// ---------------------------------------------------------------------------

const quizData: Record<string, { question: string; options: string[]; correct_index: number; explanation: string }[]> = {

  '2 Kings:7': [
    {
      question: 'What did Elisha prophesy would happen to the price of food in Samaria by the next day?',
      options: [
        'Prices would double because of the siege',
        'A seah of fine flour would sell for a shekel and two seahs of barley for a shekel',
        'Food would be given away freely at the city gate',
        'Aram would send grain as a peace offering',
      ],
      correct_index: 1,
      explanation: '2 Kings 7:1 — Elisha said, "Hear the word of the LORD: tomorrow about this time a seah of fine flour shall be sold for a shekel, and two seahs of barley for a shekel, at the gate of Samaria."',
    },
    {
      question: 'How did the royal officer respond to Elisha\'s prophecy of abundant food?',
      options: [
        'He believed and went to prepare the market',
        'He wept with relief',
        'He said even if God made windows in heaven such a thing could not happen',
        'He asked Elisha for a sign',
      ],
      correct_index: 2,
      explanation: '2 Kings 7:2 — The officer said, "If the LORD himself should make windows in heaven, could this thing be?" Elisha replied he would see it but not eat of it.',
    },
    {
      question: 'Where were the four lepers when they decided to go to the Aramean camp?',
      options: [
        'Inside the city walls of Samaria',
        'At the entrance of the city gate',
        'In the fields outside Jezreel',
        'At the Jordan River',
      ],
      correct_index: 1,
      explanation: '2 Kings 7:3 — "Now there were four men who were lepers at the entrance to the gate."',
    },
    {
      question: 'What did the four lepers reason among themselves about surrendering to the Arameans?',
      options: [
        'They might be shown mercy and fed, and if killed they would have died anyway',
        'They could spy out the camp for the king',
        'God had promised to protect them',
        'They planned to steal weapons and return to fight',
      ],
      correct_index: 0,
      explanation: '2 Kings 7:3-4 — They said, "If we say let us enter the city, the famine is in the city and we shall die there; and if we sit here, we die also. So now come, let us go over to the camp of the Syrians; if they spare our lives we shall live, and if they kill us we shall but die."',
    },
    {
      question: 'What had caused the Aramean army to flee their camp in panic?',
      options: [
        'An angel of the LORD appeared to them',
        'The LORD had made them hear the sound of chariots and horses and a great army',
        'Elisha struck them with blindness',
        'A great earthquake shook their camp',
      ],
      correct_index: 1,
      explanation: '2 Kings 7:6 — "For the LORD had made the army of the Syrians hear the sound of chariots and of horses, the sound of a great army, so that they said to one another, \'The king of Israel has hired against us the kings of the Hittites and the kings of Egypt to come against us.\'"',
    },
    {
      question: 'What did the four lepers do when they realized the Aramean camp was abandoned?',
      options: [
        'They immediately reported to the king',
        'They ate, drank, and hid silver, gold, and clothing, then felt guilty and reported to the city',
        'They brought the army out from the city to loot',
        'They burned the camp to prevent it from being used again',
      ],
      correct_index: 1,
      explanation: '2 Kings 7:8-9 — They ate and drank and hid plunder, then said, "We are not doing right. This day is a day of good news; if we are silent and wait until the morning light, punishment will overtake us. Now therefore come; let us go and tell the king\'s household."',
    },
    {
      question: 'What did the king of Israel initially suspect when told the Aramean camp was empty?',
      options: [
        'It was an act of God',
        'The lepers were lying to plunder the city themselves',
        'It was an Aramean trick to lure Israel out of the city',
        'The Arameans had retreated permanently',
      ],
      correct_index: 2,
      explanation: '2 Kings 7:12 — The king said, "I will tell you what the Syrians have prepared against us. They know that we are hungry; therefore they have gone out of the camp to hide themselves in the open country."',
    },
    {
      question: 'How did the king verify the Arameans had truly fled before opening the city?',
      options: [
        'Elisha confirmed it by prophecy',
        'Scouts from the city gate ran out and confirmed the Arameans fled as far as the Jordan',
        'The four lepers returned with proof',
        'Elisha sent ravens with a message',
      ],
      correct_index: 1,
      explanation: '2 Kings 7:14-15 — Two horsemen were sent and they followed as far as the Jordan; "the whole way was littered with garments and equipment that the Syrians had thrown away in their haste."',
    },
    {
      question: 'What happened to the royal officer who had scoffed at Elisha\'s prophecy?',
      options: [
        'He died of the famine before the food arrived',
        'He was trampled to death by the people in the gate rush',
        'He was executed by the king for his unbelief',
        'He was exiled from Samaria',
      ],
      correct_index: 1,
      explanation: '2 Kings 7:17 — "The king appointed the captain on whose hand he leaned to have charge of the gate; and the people trampled him to death in the gate." This fulfilled Elisha\'s word.',
    },
    {
      question: 'What was the exact fulfillment of Elisha\'s prophecy regarding the scoffing officer?',
      options: [
        'He saw the food but was struck blind before he could eat',
        'He saw the abundance with his own eyes but was trampled and did not eat of it',
        'He was sold into slavery in Aram',
        'He starved to death the very night of the prophecy',
      ],
      correct_index: 1,
      explanation: '2 Kings 7:19-20 — The man of God had said, "You shall see it with your own eyes, but you shall not eat of it." So it happened; the people trampled him in the gate and he died.',
    },
  ],

  '2 Kings:8': [
    {
      question: 'Why did Elisha advise the Shunammite woman to leave her land?',
      options: [
        'The Arameans were about to invade her region',
        'The LORD had called a seven-year famine on the land',
        'King Joram wanted to confiscate her property',
        'Elisha needed her house for his school of the prophets',
      ],
      correct_index: 1,
      explanation: '2 Kings 8:1 — Elisha told the woman, "Arise, and depart, you and your household, and sojourn wherever you can; for the LORD has called for a famine, and it will come upon the land for seven years."',
    },
    {
      question: 'When the Shunammite woman returned after the famine, what had happened to her house and land?',
      options: [
        'They had been kept safe by Elisha',
        'They had been given to her neighbors',
        'They had been taken over, and she appealed to the king for restitution',
        'They had been destroyed by Aramean raiders',
      ],
      correct_index: 2,
      explanation: '2 Kings 8:3 — "At the end of the seven years, when the woman returned from the land of the Philistines, she went to appeal to the king for her house and her land."',
    },
    {
      question: 'What providential coincidence helped the Shunammite woman regain her property?',
      options: [
        'Elisha himself was standing before the king when she arrived',
        'Gehazi happened to be telling the king about Elisha\'s miracles, including restoring her son, at the very moment she appeared',
        'The king had just received a letter from Elisha on her behalf',
        'Her son testified about the miracle before the king',
      ],
      correct_index: 1,
      explanation: '2 Kings 8:4-5 — While Gehazi was telling the king how Elisha had restored a dead child to life, the woman came to appeal, and Gehazi said, "My lord, O king, here is the woman, and here is her son whom Elisha restored to life."',
    },
    {
      question: 'How many camel-loads of gifts did Hazael bring when he went to consult Elisha in Damascus?',
      options: [
        'Ten',
        'Twenty',
        'Forty',
        'Seventy',
      ],
      correct_index: 2,
      explanation: '2 Kings 8:9 — "So Hazael went to meet him, and took a present with him, all kinds of goods of Damascus, forty camel loads."',
    },
    {
      question: 'Why did Elisha weep when he looked at Hazael?',
      options: [
        'He was moved by Hazael\'s display of generosity',
        'He saw that Hazael would become king and harm Israel terribly',
        'He was grieving the recent death of Ben-hadad',
        'He wept because he knew his own death was near',
      ],
      correct_index: 1,
      explanation: '2 Kings 8:11-12 — Elisha wept and said, "Because I know the evil that you will do to the people of Israel: you will set on fire their fortresses, and you will kill their young men with the sword, and dash in pieces their little ones, and rip up their pregnant women."',
    },
    {
      question: 'How did Hazael respond to Elisha\'s prophecy that he would do great harm to Israel?',
      options: [
        'He denied it was possible, calling himself a mere dog',
        'He accepted the prophecy with humility',
        'He threatened to kill Elisha',
        'He returned to Damascus immediately without answering',
      ],
      correct_index: 0,
      explanation: '2 Kings 8:13 — "Hazael said, \'What is your servant, who is but a dog, that he should do this great thing?\'"',
    },
    {
      question: 'How did Hazael kill Ben-hadad and become king of Aram?',
      options: [
        'He poisoned his food',
        'He stabbed him with a sword in the throne room',
        'He smothered him by dipping a thick cloth in water and spreading it over his face',
        'He strangled him in his sleep',
      ],
      correct_index: 2,
      explanation: '2 Kings 8:15 — "But the next day he took the bed cloth and dipped it in water and spread it over his face, till he died."',
    },
    {
      question: 'What was the relationship between Jehoram of Judah and the house of Ahab?',
      options: [
        'He was Ahab\'s brother',
        'He was the son-in-law of Ahab, having married Athaliah daughter of Ahab',
        'He was a commander in Ahab\'s army',
        'He was Ahab\'s cousin through Jehoshaphat',
      ],
      correct_index: 1,
      explanation: '2 Kings 8:18 — "He walked in the way of the kings of Israel, as the house of Ahab had done, for the daughter of Ahab was his wife."',
    },
    {
      question: 'Which two peoples revolted against Judah during Jehoram\'s reign?',
      options: [
        'Moab and Ammon',
        'Edom and Libnah',
        'Philistia and Syria',
        'Ammon and Philistia',
      ],
      correct_index: 1,
      explanation: '2 Kings 8:20-22 — "In his days Edom revolted from the rule of Judah... At that time Libnah revolted at the same time."',
    },
    {
      question: 'How long did Ahaziah reign over Judah?',
      options: [
        'Eight years',
        'Two years',
        'One year',
        'Three years',
      ],
      correct_index: 2,
      explanation: '2 Kings 8:26 — "Ahaziah was twenty-two years old when he began to reign, and he reigned one year in Jerusalem."',
    },
  ],

  '2 Kings:9': [
    {
      question: 'Who did Elisha commission to go to Ramoth-gilead to anoint Jehu?',
      options: [
        'Gehazi',
        'Elijah',
        'A young man from the company of the prophets',
        'Elisha himself',
      ],
      correct_index: 2,
      explanation: '2 Kings 9:1 — "Then Elisha the prophet called one of the sons of the prophets and said to him, \'Gird up your loins, and take this flask of oil in your hand, and go to Ramoth-gilead.\'"',
    },
    {
      question: 'What was Jehu to do after being anointed, according to his commission?',
      options: [
        'Lead the army against Aram immediately',
        'Strike down the house of Ahab, avenging the blood of the prophets and servants of the LORD',
        'Summon the elders of Israel and declare himself king publicly',
        'Travel to Jerusalem and announce himself to the king of Judah',
      ],
      correct_index: 1,
      explanation: '2 Kings 9:7 — "You shall strike down the house of Ahab your master, that I may avenge on Jezebel the blood of my servants the prophets, and the blood of all the servants of the LORD."',
    },
    {
      question: 'When Jehu\'s fellow officers asked what the young prophet had said to him, how did Jehu first respond?',
      options: [
        'He told them immediately that he had been anointed king',
        'He tried to dismiss it, saying the man said nothing',
        'He said the prophet told him he would conquer Aram',
        'He wept and shared the full prophecy',
      ],
      correct_index: 1,
      explanation: '2 Kings 9:11 — "Then Jehu came out to the servants of his master, and one said to him, \'Is all well? Why did this mad fellow come to you?\' And he said to them, \'You know the fellow and his talk.\'"',
    },
    {
      question: 'What did Jehu\'s officers do when he told them he had been anointed king?',
      options: [
        'They pledged loyalty and blew the trumpet, saying, "Jehu is king!"',
        'Several refused and had to be compelled',
        'They asked to consult the elders of Samaria first',
        'They went to tell Joram',
      ],
      correct_index: 0,
      explanation: '2 Kings 9:13 — "Then in haste every man of them took his garment and put it under him on the bare steps, and they blew the trumpet and proclaimed, \'Jehu is king.\'"',
    },
    {
      question: 'What notable characteristic of Jehu\'s driving was recognized by the watchman in Jezreel?',
      options: [
        'He rode very slowly, which was a sign of royalty',
        'He drove furiously',
        'He came with a great company of horsemen in formal array',
        'He approached with white banners of peace',
      ],
      correct_index: 1,
      explanation: '2 Kings 9:20 — "The driving is like the driving of Jehu the son of Nimshi; for he drives furiously."',
    },
    {
      question: 'Where was Joram\'s body thrown after Jehu killed him, and why?',
      options: [
        'Into the Jezreel valley, as a warning to Israel',
        'Into the field of Naboth the Jezreelite, to fulfill Elijah\'s word against Ahab',
        'Into the river, so there would be no grave',
        'Outside the walls of Jezreel',
      ],
      correct_index: 1,
      explanation: '2 Kings 9:25-26 — Jehu said to Bidkar, "Take him up and throw him on the plot of ground belonging to Naboth the Jezreelite; for remember, when you and I rode side by side behind Ahab his father, the LORD uttered this oracle against him."',
    },
    {
      question: 'What happened to King Ahaziah of Judah during Jehu\'s purge?',
      options: [
        'He escaped back to Jerusalem unharmed',
        'He was killed immediately at the same time as Joram',
        'He was wounded at the ascent of Gur and died at Megiddo',
        'He was taken prisoner and later released',
      ],
      correct_index: 2,
      explanation: '2 Kings 9:27 — "Jehu pursued him, and said, \'Shoot him also\'; and they shot him in the chariot at the ascent of Gur... He fled to Megiddo and died there."',
    },
    {
      question: 'What did Jezebel do when she heard Jehu had come to Jezreel?',
      options: [
        'She fled through the city gate',
        'She put on sackcloth and prayed',
        'She painted her eyes, adorned her head, and looked out a window',
        'She sent servants to negotiate with Jehu',
      ],
      correct_index: 2,
      explanation: '2 Kings 9:30 — "When Jehu came to Jezreel, Jezebel heard of it. And she painted her eyes and adorned her head and looked out of the window."',
    },
    {
      question: 'How did Jezebel die?',
      options: [
        'Jehu struck her with his sword',
        'Two or three eunuchs threw her down from the window at Jehu\'s command and she was trampled by horses',
        'She was stoned by the people of Jezreel',
        'She fell from the wall while trying to escape',
      ],
      correct_index: 1,
      explanation: '2 Kings 9:33 — "He said, \'Throw her down.\' So they threw her down. And some of her blood spattered on the wall and on the horses, and he trampled over her."',
    },
    {
      question: 'What did they find when they went to bury Jezebel, fulfilling Elijah\'s prophecy?',
      options: [
        'Her body had already been taken by the people of Jezreel',
        'Nothing — her body was untouched',
        'Only her skull, her feet, and the palms of her hands',
        'Only her garments remained',
      ],
      correct_index: 2,
      explanation: '2 Kings 9:35 — "But when they went to bury her, they found no more of her than the skull and the feet and the palms of her hands." This fulfilled Elijah\'s prophecy in 1 Kings 21:23.',
    },
  ],

  '2 Kings:10': [
    {
      question: 'How many sons of Ahab were in Samaria when Jehu wrote his challenge to the city\'s leaders?',
      options: [
        'Forty',
        'Seventy',
        'Twelve',
        'Twenty-five',
      ],
      correct_index: 1,
      explanation: '2 Kings 10:1 — "Now Ahab had seventy sons in Samaria."',
    },
    {
      question: 'What did the leaders of Samaria send to Jehu in response to his letter demanding they champion Ahab\'s sons?',
      options: [
        'A letter of surrender',
        'The heads of the seventy sons in baskets',
        'Soldiers to negotiate a truce',
        'The sons themselves bound in chains',
      ],
      correct_index: 1,
      explanation: '2 Kings 10:7 — "When the letter came to them, they took the king\'s sons and slaughtered them, seventy persons, and put their heads in baskets, and sent them to him at Jezreel."',
    },
    {
      question: 'How many relatives of King Ahaziah of Judah did Jehu kill on the road?',
      options: [
        'Twelve',
        'Twenty-four',
        'Forty-two',
        'Seventy',
      ],
      correct_index: 2,
      explanation: '2 Kings 10:14 — "He said, \'Take them alive.\' And they took them alive and slaughtered them at the pit of Beth-eked, forty-two persons, and he left none of them."',
    },
    {
      question: 'Who helped Jehu in his purge of Baal worship from Israel?',
      options: [
        'Elisha the prophet',
        'Jehonadab the son of Rechab',
        'Gehazi, Elisha\'s servant',
        'The high priest of Jerusalem',
      ],
      correct_index: 1,
      explanation: '2 Kings 10:15-16 — Jehu met Jehonadab the son of Rechab and said, "Is your heart right, as my heart is with your heart?" And Jehonadab answered, "It is." Jehu invited him into the chariot.',
    },
    {
      question: 'What deception did Jehu use to gather all the Baal worshippers in one place?',
      options: [
        'He claimed to hold a royal feast in honor of Baal',
        'He announced a great assembly for Baal, saying Ahab served Baal a little but he would serve him much',
        'He said God had commanded a national day of prayer to Baal',
        'He sent priests who said Baal had appeared to them',
      ],
      correct_index: 1,
      explanation: '2 Kings 10:18-19 — Jehu declared, "Ahab served Baal a little, but Jehu will serve him much more. Now therefore call to me all the prophets of Baal, all his worshipers and all his priests; let none be missing."',
    },
    {
      question: 'What did Jehu do to the worshippers after they were assembled in the Baal temple?',
      options: [
        'He gave them one chance to convert to the LORD',
        'He sent eighty men in who killed them all; then he demolished the Baal temple',
        'He exiled them to Aram',
        'He burned the temple with them inside',
      ],
      correct_index: 1,
      explanation: '2 Kings 10:25 — "As soon as he had made an end of offering the burnt offering, Jehu commanded his guard and the officers, \'Go in and strike them down; let not a man escape.\'" Then they demolished the house of Baal.',
    },
    {
      question: 'What sin did Jehu nonetheless fail to turn away from?',
      options: [
        'He kept the Asherah poles standing throughout Israel',
        'He did not depart from the sins of Jeroboam — the golden calves at Bethel and Dan',
        'He maintained the high places for the worship of Chemosh',
        'He built a new temple to Baal in Samaria',
      ],
      correct_index: 1,
      explanation: '2 Kings 10:29 — "But Jehu did not turn aside from the sins of Jeroboam the son of Nebat, which he made Israel to sin, the golden calves that were in Bethel and in Dan."',
    },
    {
      question: 'What promise did God make to Jehu because he had carried out what was right in God\'s eyes concerning the house of Ahab?',
      options: [
        'His descendants would rule forever',
        'Four generations of his sons would sit on the throne of Israel',
        'Israel would be victorious over Aram in his lifetime',
        'His own reign would last forty years',
      ],
      correct_index: 1,
      explanation: '2 Kings 10:30 — "The LORD said to Jehu, \'Because you have done well in carrying out what is right in my eyes, and have done to the house of Ahab according to all that was in my heart, your sons of the fourth generation shall sit on the throne of Israel.\'"',
    },
    {
      question: 'How did Hazael of Aram threaten Israel during Jehu\'s reign?',
      options: [
        'He besieged Samaria for three years',
        'He cut off parts of Israel\'s territory east of the Jordan',
        'He sacked Jerusalem and looted the temple',
        'He imposed heavy tribute on all of Israel',
      ],
      correct_index: 1,
      explanation: '2 Kings 10:32-33 — "In those days the LORD began to cut off parts of Israel. Hazael defeated them throughout the territory of Israel: from the Jordan eastward, all the land of Gilead..."',
    },
    {
      question: 'How long did Jehu reign over Israel in Samaria?',
      options: [
        'Twelve years',
        'Seventeen years',
        'Twenty-eight years',
        'Forty years',
      ],
      correct_index: 2,
      explanation: '2 Kings 10:36 — "The time that Jehu reigned over Israel in Samaria was twenty-eight years."',
    },
  ],

  '2 Kings:11': [
    {
      question: 'Why did Athaliah attempt to destroy all the royal family of Judah?',
      options: [
        'She was avenging the death of her father Ahab',
        'She wanted to seize the throne of Judah for herself after her son Ahaziah died',
        'She was fulfilling a prophecy from the priests of Baal',
        'She feared a coup by the military commanders',
      ],
      correct_index: 1,
      explanation: '2 Kings 11:1 — "Now when Athaliah the mother of Ahaziah saw that her son was dead, she arose and destroyed all the royal family."',
    },
    {
      question: 'Who rescued the infant Joash from Athaliah\'s massacre, and where was he hidden?',
      options: [
        'The captain of the guard, hidden in the palace treasury',
        'Jehosheba, who hid him in the house of the LORD for six years',
        'Elisha the prophet, who hid him in Samaria',
        'The high priest Jehoiada, who hid him in the gatehouse',
      ],
      correct_index: 1,
      explanation: '2 Kings 11:2-3 — "But Jehosheba, the daughter of King Joram, sister of Ahaziah, took Joash the son of Ahaziah and stole him away from among the king\'s sons who were being put to death, and she put him and his nurse in the bedroom. Thus he was hidden from Athaliah, and he was not put to death. He remained with her six years, hidden in the house of the LORD."',
    },
    {
      question: 'How long did Athaliah reign over the land?',
      options: [
        'Three years',
        'Six years',
        'Seven years',
        'Twelve years',
      ],
      correct_index: 1,
      explanation: '2 Kings 11:3 — "He remained with her six years, hidden in the house of the LORD, while Athaliah reigned over the land." (Six years of hiding = six years of her reign, followed by the coup in the seventh year.)',
    },
    {
      question: 'In what year did Jehoiada the priest act to reveal Joash and crown him?',
      options: [
        'The third year',
        'The fifth year',
        'The seventh year',
        'The tenth year',
      ],
      correct_index: 2,
      explanation: '2 Kings 11:4 — "But in the seventh year Jehoiada sent and brought the captains of the Carites and of the guards..."',
    },
    {
      question: 'What did the guards use to protect Joash at his coronation?',
      options: [
        'New weapons purchased from Tyre',
        'David\'s spears and shields that were in the house of the LORD',
        'Bows and arrows from the royal armory',
        'Iron swords taken from the Philistines',
      ],
      correct_index: 1,
      explanation: '2 Kings 11:10 — "And the priest delivered to the captains the spears and shields that had been King David\'s, which were in the house of the LORD."',
    },
    {
      question: 'What was Athaliah\'s reaction when she heard the noise of the coronation?',
      options: [
        'She gathered the palace guard and marched to the temple',
        'She went into the house of the LORD, tore her clothes, and cried, "Treason! Treason!"',
        'She fled immediately to Aram for protection',
        'She sent a messenger to Jehu asking for mercy',
      ],
      correct_index: 1,
      explanation: '2 Kings 11:13-14 — "When Athaliah heard the noise of the guard and of the people, she went into the house of the LORD to the people. And when she looked, there was the king standing by the pillar, according to the custom, and the captains and the trumpeters beside the king, and all the people of the land rejoicing and blowing trumpets. And Athaliah tore her clothes and cried, \'Treason! Treason!\'"',
    },
    {
      question: 'Where was Athaliah killed on Jehoiada\'s orders?',
      options: [
        'In the temple courtyard',
        'At the Horse Gate behind the palace',
        'At the city gate of Jerusalem',
        'In the palace throne room',
      ],
      correct_index: 1,
      explanation: '2 Kings 11:16 — "So they laid hands on her; and she went through the horses\' entrance to the king\'s house, and there she was put to death."',
    },
    {
      question: 'What three-way covenant did Jehoiada establish after crowning Joash?',
      options: [
        'Between Judah, Israel, and Aram',
        'Between the LORD, the king, and the people — that they would be the LORD\'s people',
        'Between the priests, the prophets, and the military',
        'Between Jerusalem, the northern tribes, and the Levites',
      ],
      correct_index: 1,
      explanation: '2 Kings 11:17 — "And Jehoiada made a covenant between the LORD and the king and the people, that they should be the LORD\'s people, and also between the king and the people."',
    },
    {
      question: 'What happened to the Baal temple in Jerusalem after Joash was crowned?',
      options: [
        'It was converted into a storehouse',
        'It was torn down and Mattan the priest of Baal was killed before the altars',
        'It was left standing but sealed shut',
        'It was burned by Jehu\'s soldiers who came from Israel',
      ],
      correct_index: 1,
      explanation: '2 Kings 11:18 — "Then all the people of the land went to the house of Baal and tore it down; his altars and his images they broke in pieces, and they killed Mattan the priest of Baal before the altars."',
    },
    {
      question: 'How old was Joash when he became king?',
      options: [
        'Three years old',
        'Five years old',
        'Seven years old',
        'Ten years old',
      ],
      correct_index: 2,
      explanation: '2 Kings 11:21 — "Jehoash was seven years old when he began to reign."',
    },
  ],

  '2 Kings:12': [
    {
      question: 'How long did Joash (Jehoash) reign in Jerusalem?',
      options: [
        'Twenty years',
        'Twenty-five years',
        'Forty years',
        'Fifty years',
      ],
      correct_index: 2,
      explanation: '2 Kings 12:1 — "In the seventh year of Jehu, Jehoash began to reign, and he reigned forty years in Jerusalem."',
    },
    {
      question: 'Under whose influence did Joash do what was right in the eyes of the LORD?',
      options: [
        'The prophet Elisha',
        'His mother Zibiah',
        'Jehoiada the priest',
        'The elders of Judah',
      ],
      correct_index: 2,
      explanation: '2 Kings 12:2 — "And Jehoash did what was right in the eyes of the LORD all his days, because Jehoiada the priest instructed him."',
    },
    {
      question: 'What problem did Joash discover regarding the offering money collected by the priests?',
      options: [
        'The money had been stolen by the temple workers',
        'The priests were keeping the money and not making repairs to the temple',
        'The offerings had declined because the people were impoverished',
        'Foreign currency could not be exchanged at the temple',
      ],
      correct_index: 1,
      explanation: '2 Kings 12:7 — Joash called Jehoiada and the priests and said, "Why are you not repairing the house? Now therefore take no more money from your donors, but hand it over for the repair of the house."',
    },
    {
      question: 'How did Joash reform the collection of temple money for repairs?',
      options: [
        'He appointed a royal treasurer to oversee all temple finances',
        'He had a chest placed beside the altar at the entrance where people would drop their money',
        'He levied a special tax on all households in Judah',
        'He auctioned temple objects to raise funds',
      ],
      correct_index: 1,
      explanation: '2 Kings 12:9 — "Then Jehoiada the priest took a chest and bored a hole in the lid of it and set it beside the altar on the right side as one entered the house of the LORD. And the priests who guarded the threshold put in it all the money that was brought into the house of the LORD."',
    },
    {
      question: 'How was the money distributed to the craftsmen repairing the temple?',
      options: [
        'The high priest paid each craftsman directly',
        'The king set wages by royal decree',
        'The royal secretary and high priest counted the chest and gave it to the workers who paid craftsmen on trust, without individual accounting',
        'The Levites distributed weekly stipends',
      ],
      correct_index: 2,
      explanation: '2 Kings 12:11 — "Then they would give the money that was weighed out into the hands of the workmen who had the oversight of the house of the LORD." Verse 15 notes they did not ask an accounting because they dealt honestly.',
    },
    {
      question: 'What items were NOT to be purchased with the repair money, according to Joash\'s instructions?',
      options: [
        'Timber and stone',
        'Silver basins, snuffers, bowls, trumpets, or any vessels of gold or silver',
        'Mortar and bricks',
        'Tools and scaffolding',
      ],
      correct_index: 1,
      explanation: '2 Kings 12:13 — "But there were not made for the house of the LORD basins of silver, snuffers, bowls, trumpets, or any vessels of gold, or of silver, from the money that was brought into the house of the LORD."',
    },
    {
      question: 'What threat prompted Joash to hand over the temple treasures to Hazael of Aram?',
      options: [
        'Hazael had already sacked Lachish and was marching on Jerusalem',
        'Hazael attacked Gath and then set his face to go up against Jerusalem',
        'Hazael captured the high priest Jehoiada as a hostage',
        'Hazael demanded tribute or he would destroy the altar of the LORD',
      ],
      correct_index: 1,
      explanation: '2 Kings 12:17-18 — "Then Hazael king of Syria went up and fought against Gath and took it. But when Hazael set his face to go up against Jerusalem, Jehoash king of Judah took all the sacred gifts... and sent these to Hazael king of Syria. Then Hazael went away from Jerusalem."',
    },
    {
      question: 'What did Joash give Hazael to persuade him to withdraw from Jerusalem?',
      options: [
        'A large tribute of gold from the royal palace only',
        'All the sacred gifts that Jehoshaphat, Jehoram, and Ahaziah had dedicated, plus all the gold in the temple and palace treasuries',
        'The city of Gath and surrounding villages',
        'His own sons as hostages',
      ],
      correct_index: 1,
      explanation: '2 Kings 12:18 — "Jehoash king of Judah took all the sacred gifts that Jehoshaphat and Jehoram and Ahaziah his fathers, the kings of Judah, had dedicated, and his own sacred gifts, and all the gold that was found in the treasuries of the house of the LORD and of the king\'s house, and sent these to Hazael king of Syria."',
    },
    {
      question: 'Where was Joash assassinated?',
      options: [
        'In the temple courtyard',
        'At the palace at Beth-millo, on the way that goes down to Silla',
        'At the city gate of Jerusalem',
        'In the Valley of Hinnom',
      ],
      correct_index: 1,
      explanation: '2 Kings 12:20 — "His servants arose and made a conspiracy and struck down Joash in the house of Millo, on the way that goes down to Silla."',
    },
    {
      question: 'Who succeeded Joash as king of Judah?',
      options: [
        'Joash\'s brother Jehoahaz',
        'His son Amaziah',
        'Jehoiada\'s son',
        'His son Azariah',
      ],
      correct_index: 1,
      explanation: '2 Kings 12:21 — "Amaziah his son reigned in his place."',
    },
  ],
};

// ---------------------------------------------------------------------------
// Passages Data
// ---------------------------------------------------------------------------

const passagesData: Record<string, { verse_start: number; verse_end: number; topic: string; plain_language: string; theological_context: string }[]> = {

  '2 Kings:7': [
    {
      verse_start: 1,
      verse_end: 2,
      topic: 'Elisha\'s prophecy and the officer\'s unbelief',
      plain_language: 'Elisha predicts that by the next day food prices in famine-struck Samaria will return to normal. A royal officer dismisses it as impossible even for God. Elisha responds that the officer will see it happen but will not eat any of the food himself.',
      theological_context: 'This passage establishes a classic prophetic pattern: God\'s word is certain, but human cynicism that limits God\'s power brings judgment. The officer\'s sarcasm ("even if the LORD made windows in heaven") echoes the broader Israelite tendency to doubt divine intervention. His death at the gate (v. 17) demonstrates that God\'s word always accomplishes what it announces (cf. Isaiah 55:11), and that scoffing at prophecy is spiritually dangerous.',
    },
    {
      verse_start: 3,
      verse_end: 9,
      topic: 'Four lepers discover the abandoned Aramean camp',
      plain_language: 'Four lepers, with nothing to lose, walk into the enemy camp expecting to surrender and find it completely deserted. They eat, drink, and plunder. Then, convicted that they are keeping good news to themselves, they go back to report to the city gatekeepers.',
      theological_context: 'God uses the most marginalized people — social and ceremonial outcasts — as the first recipients of his deliverance. The lepers\' reasoning ("if we are silent until morning, punishment will come upon us") shows an unexpected moral sensitivity. This mirrors God\'s pattern throughout Scripture of choosing the humble and overlooked for his purposes. The divine reversal of the siege through sound alone (v. 6) underscores that Israel\'s deliverance is purely God\'s initiative.',
    },
    {
      verse_start: 17,
      verse_end: 20,
      topic: 'Fulfillment of Elisha\'s prophecy about the scoffing officer',
      plain_language: 'The king appoints the officer who had mocked Elisha to control the city gate when the people rush out for food. He is trampled to death in the crowd, exactly as Elisha had said — he saw the abundance but did not eat of it.',
      theological_context: 'The verbatim fulfillment of Elisha\'s word (compare v. 2 with v. 19-20) is the narrator\'s theological point: prophetic word is divine word, and it comes to pass in precise detail. This also connects to a recurring Deuteronomistic criterion for true prophecy (Deuteronomy 18:21-22): if it happens, the LORD spoke it. Unbelief does not cancel God\'s grace to others, but it forfeits personal participation in it.',
    },
  ],

  '2 Kings:8': [
    {
      verse_start: 1,
      verse_end: 6,
      topic: 'The Shunammite woman\'s land restored by divine providence',
      plain_language: 'Elisha had previously warned the Shunammite woman to leave because of a coming seven-year famine. When she returns, her property has been seized. At the exact moment she appears before the king, Gehazi happens to be recounting how Elisha raised her son from the dead. The king is moved to restore everything, including seven years of lost harvest.',
      theological_context: 'This account presents divine providence working through human coincidence. The text does not say God arranged it — it simply narrates the convergence and lets the reader draw the conclusion. This woman had previously served Elisha without expecting reward (2 Kings 4). Here God\'s care for the faithful is shown not through spectacular miracle but through ordinary timing. The restoration of land and produce points forward to eschatological themes of full restitution for those who trust God.',
    },
    {
      verse_start: 7,
      verse_end: 15,
      topic: 'Elisha\'s encounter with Hazael and the prediction of Aramean atrocities',
      plain_language: 'Elisha visits Damascus. Hazael, an official of Ben-hadad, comes to ask whether the sick king will recover. Elisha weeps because he foresees all the harm Hazael will inflict on Israel. He tells Hazael the king will recover, but that Hazael himself will be king. The next day Hazael smothers Ben-hadad and takes the throne.',
      theological_context: 'This passage raises the sharp theological problem of prophetic complicity: does Elisha\'s disclosure of Hazael\'s destiny enable the murder? The text leaves this unresolved, reflecting its honest grappling with God\'s sovereign use of foreign powers to punish Israel (cf. Isaiah\'s treatment of Assyria). Hazael\'s incredulous question — "Am I a dog, that I should do this?" — is darkly ironic. The suffering Elisha foresees for Israel\'s children is framed as divine judgment mediated through human cruelty.',
    },
    {
      verse_start: 16,
      verse_end: 24,
      topic: 'Jehoram of Judah: evil reign and Edom\'s revolt',
      plain_language: 'Jehoram of Judah reigns for eight years. He is the son-in-law of Ahab through his marriage to Athaliah, and he follows the ways of Ahab\'s house. Edom revolts and establishes its own kingship despite Jehoram\'s attempt to suppress it. Libnah also revolts. Jehoram dies and his son Ahaziah succeeds him.',
      theological_context: 'The Deuteronomistic historian explains Judah\'s political losses in explicitly theological terms: Edom\'s successful revolt is the cost of Jehoram\'s covenant unfaithfulness. Yet the note in verse 19 is significant — "the LORD was not willing to destroy Judah, for the sake of David his servant." God\'s covenant with David provides a restraining grace that keeps Judah from total ruin even when its kings are wicked. This tension between judgment and mercy through the Davidic promise is a central theological thread of Kings.',
    },
  ],

  '2 Kings:9': [
    {
      verse_start: 1,
      verse_end: 13,
      topic: 'Jehu anointed king at Elisha\'s commission',
      plain_language: 'Elisha sends a young prophet to Ramoth-gilead with a flask of oil to anoint Jehu in private. The prophet anoints him and delivers a commission to destroy the house of Ahab and avenge the blood of the prophets. When Jehu\'s officers learn what happened, they immediately acclaim him king.',
      theological_context: 'The anointing of Jehu continues the long thread begun by Elijah at Horeb (1 Kings 19:16), where God commissioned Elisha to anoint Jehu. The fulfillment comes through Elisha\'s delegate, emphasizing that prophetic authority persists and is transmitted. Jehu\'s anointing is explicitly about justice — avenging shed blood — echoing the Deuteronomistic concern that blood guilt pollutes the land and must be addressed. The officers\' immediate acclamation shows how quickly legitimacy transfers when the prophetic word is spoken.',
    },
    {
      verse_start: 14,
      verse_end: 26,
      topic: 'Jehu kills Joram and throws his body in Naboth\'s field',
      plain_language: 'Jehu races to Jezreel. Both Joram of Israel and Ahaziah of Judah ride out to meet him, mistaking his intent. Jehu shoots Joram through the heart. He commands that Joram\'s body be thrown into the field of Naboth the Jezreelite, explicitly recalling Elijah\'s prophecy about Ahab\'s bloodline paying for Naboth\'s murder.',
      theological_context: 'The disposal of Joram\'s body in Naboth\'s field is an act of deliberate theological memory. Jehu himself recites the oracle (vv. 25-26), making the connection explicit. This is divine retributive justice: the land stolen by judicial murder is the land that receives the murderer\'s dynasty\'s blood. The pattern reflects the Torah\'s principle that the punishment fits the crime and that God does not forget covenant violations against the innocent.',
    },
    {
      verse_start: 30,
      verse_end: 37,
      topic: 'The death of Jezebel and the fulfillment of Elijah\'s prophecy',
      plain_language: 'Jezebel hears Jehu is coming. She prepares herself — paints her eyes, dresses her hair — and calls out from the window. Jehu calls for those with him to throw her down. She is thrown out, trampled by horses, and when they go to bury her, only her skull, feet, and palms remain. Dogs have eaten the rest, as Elijah prophesied.',
      theological_context: 'Jezebel\'s death closes a major narrative arc stretching from 1 Kings 21 (Naboth\'s vineyard) and her confrontation with Elijah. Her careful self-adornment has been read as a defiant act of queenly dignity — or as a seduction attempt — but either way it fails completely. The gruesome fulfillment of the prophecy about dogs eating her body in the plot of Jezreel (1 Kings 21:23) is presented by the narrator as the precise, literal word of God coming to pass. It functions as a theological proof: the word of the LORD stands.',
    },
  ],

  '2 Kings:10': [
    {
      verse_start: 1,
      verse_end: 11,
      topic: 'The execution of Ahab\'s seventy sons and the elimination of his house',
      plain_language: 'Jehu challenges the leaders of Samaria to produce a king from among Ahab\'s sons to fight him. The frightened leaders instead slaughter all seventy sons and send their heads to Jehu. Jehu then kills all the remaining supporters of Ahab\'s house in Jezreel.',
      theological_context: 'The mass execution is brutal, yet the narrator frames it as fulfillment of Elijah\'s prophecy (1 Kings 21:21). Jehu\'s speech to the people in verse 9 — "You are innocent; it was I who conspired against my master" — is a rhetorical move that also acknowledges the weight of what has happened. The Deuteronomistic frame insists that covenant violation by a ruling dynasty brings dynasty-ending judgment. The pattern recapitulates what happened to the houses of Jeroboam and Baasha earlier in Kings.',
    },
    {
      verse_start: 15,
      verse_end: 28,
      topic: 'Jehu\'s purge of Baal worship from Israel',
      plain_language: 'Jehu recruits Jehonadab the Rechabite as a witness to his zeal. He deceives all Baal worshippers into assembling for a great feast for Baal. Once they are all inside the temple, he has guards kill them all, demolishes the temple, and turns it into a latrine.',
      theological_context: 'Jehu\'s violent elimination of Baal worship in Israel is the largest single act against syncretism in the northern kingdom. Yet the narrator immediately qualifies its value (vv. 29-31) — because Jehu did not turn from Jeroboam\'s golden calves. This is the author\'s essential point: zeal against one form of unfaithfulness does not excuse another. Partial obedience is not obedience. Jehonadab\'s presence serves as a witness to legitimize the purge, connecting to the later Rechabite tradition honored in Jeremiah 35.',
    },
    {
      verse_start: 29,
      verse_end: 36,
      topic: 'Jehu\'s mixed legacy and God\'s promise of four generations',
      plain_language: 'Despite eliminating Baal worship, Jehu keeps the golden calves of Jeroboam. God commends him for carrying out justice on Ahab\'s house and promises four generations on the throne. But because of Jehu\'s sin, Hazael begins cutting away Israel\'s territory east of the Jordan.',
      theological_context: 'This passage holds in tension divine reward and divine discipline. God honors Jehu\'s partial faithfulness with a dynastic promise, while simultaneously allowing Aram to erode Israel\'s territory as a consequence of continued idolatry. The four-generation promise is eventually fulfilled through Jehoahaz, Joash, Jeroboam II, and Zechariah (2 Kings 15:12). The territorial losses foreshadow the eventual total loss of the northern kingdom — a trajectory that began the moment the golden calves were set up at Bethel and Dan.',
    },
  ],

  '2 Kings:11': [
    {
      verse_start: 1,
      verse_end: 3,
      topic: 'Athaliah\'s usurpation and the hiding of infant Joash',
      plain_language: 'When Athaliah learns her son Ahaziah is dead, she kills all the royal heirs and makes herself queen. Her niece Jehosheba hides the infant Joash in the temple for six years, keeping the Davidic line alive.',
      theological_context: 'This is the closest the Davidic line comes to extinction in the entire book of Kings. Athaliah, daughter of Ahab (or Omri), represents the Baalist influence of the north penetrating the Davidic dynasty of the south. The survival of Joash is a theological statement: God\'s covenant with David (2 Samuel 7) cannot be undone by human violence. The temple becomes the instrument of preservation — God\'s house shelters the future king. This narrative is structurally parallel to the birth narratives of Moses and, later, to the infancy of Jesus.',
    },
    {
      verse_start: 4,
      verse_end: 12,
      topic: 'Jehoiada\'s coup and the coronation of Joash',
      plain_language: 'In the seventh year Jehoiada the priest organizes five military commanders, shows them the hidden prince, and distributes David\'s weapons from the temple. Guards are positioned at all entrances. Joash is brought out, crowned, given the covenant document, anointed, and acclaimed king.',
      theological_context: 'Jehoiada\'s action is both political restoration and theological renewal. Arming the guards with David\'s spears links the coronation to the Davidic covenant. Giving Joash "the covenant" (v. 12) — likely the Torah or a covenant document — frames kingship as conditional on obedience rather than absolute power. The proclamation "Long live the king!" at the moment of anointing is a liturgical act recapitulating the covenantal basis of Davidic monarchy. The seven-year structure (hiding, then coronation) echoes sabbatical patterns in the Torah.',
    },
    {
      verse_start: 17,
      verse_end: 21,
      topic: 'The covenant, the people\'s response, and Athaliah\'s death',
      plain_language: 'Jehoiada establishes a covenant between God, the king, and the people. The people tear down the Baal temple and kill its priest Mattan. Guards escort Joash to the palace through the gate. The city rejoices and Athaliah is executed at the Horse Gate.',
      theological_context: 'The triple covenant (LORD, king, people) deliberately mirrors the Sinai covenant structure and covenant renewal moments in Deuteronomy and Joshua. The people\'s destruction of the Baal temple immediately after swearing loyalty to the LORD demonstrates that covenant with God requires the elimination of rivals. Mattan the Baal priest dying before the altars inverts the scene of proper sacrificial worship. The chapter ends with a rare moment of joy in Kings: the city is at peace, and the Davidic line is restored.',
    },
  ],

  '2 Kings:12': [
    {
      verse_start: 4,
      verse_end: 16,
      topic: 'The temple repair fund and Joash\'s administrative reform',
      plain_language: 'Joash instructs the priests to use all dedicated money for temple repairs, but after years pass nothing is done. He rebuffs the priests, sets up a chest at the temple entrance, and hands oversight to the royal secretary and the high priest. Money is counted, given directly to supervisors, and the work proceeds honestly. The text notes no accounting was required because the workers were trustworthy.',
      theological_context: 'This passage is a rare positive administrative narrative in Kings. The temple repair project is a concrete sign of covenant fidelity — caring for the place of God\'s presence. The shift from priestly to mixed royal-priestly oversight reflects the tension between institutional inertia and reforming kingship. The detail about trust-based disbursement (v. 15) is theologically significant: in a context where corruption is endemic, honest dealing with sacred funds is itself an act of worship. The reform also shows that even a good king must actively push institutions toward faithfulness.',
    },
    {
      verse_start: 17,
      verse_end: 18,
      topic: 'Joash pays tribute to Hazael from the temple treasury',
      plain_language: 'Hazael of Aram takes Gath and then threatens Jerusalem. To prevent the attack, Joash strips the temple of all consecrated gifts — the accumulated dedications of his predecessors and himself — and sends everything to Hazael, who then withdraws.',
      theological_context: 'This is a devastating irony: the same king who labored to repair and fund the temple now empties it to buy off a foreign enemy. The temple treasures represent generations of covenant devotion. Their transfer to a pagan king signals spiritual bankruptcy — the reform was external and institutional, not deeply covenantal. It also fulfills the pattern warned in Deuteronomy: covenant unfaithfulness leads to enemies stripping the land. Hazael here functions as an agent of divine discipline, pressing on Israel and Judah alike.',
    },
    {
      verse_start: 19,
      verse_end: 21,
      topic: 'The assassination of Joash',
      plain_language: 'Joash is killed by his servants at Beth-millo. The conspirators are named — Jozabad son of Shimeath and Jehozabad son of Shomer. Joash is buried in Jerusalem with his ancestors, and his son Amaziah becomes king.',
      theological_context: 'The assassination of Joash, who began his reign as the divinely protected infant and the hope of Davidic restoration, is a sobering conclusion. The narrator does not explain the conspirators\' motive here (2 Chronicles 24 connects it to Joash\'s later apostasy after Jehoiada died). The bare report of the killing underscores the Deuteronomistic pattern: kings who begin well often end badly. Even the best human institutions cannot sustain covenant faithfulness without ongoing dependence on God. The naming of the assassins in verse 21 is unusual and may reflect a preserved legal record.',
    },
  ],
};

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log('Seeding 2 Kings 7-12...');

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
