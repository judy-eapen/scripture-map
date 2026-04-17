import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

type ConnectionSeed = {
  book: string
  chapter: number
  type: 'previously' | 'sets_up' | 'callback'
  description: string
  target_book?: string
  target_chapter?: number
  verse_number?: number
}

const connections: ConnectionSeed[] = [
  // ══════════════════════════════════════════════
  // 1 KINGS
  // ══════════════════════════════════════════════

  // 1 Kings 1
  { book: '1 Kings', chapter: 1, type: 'previously', description: 'David is Israel\'s greatest king, now dying. His reign established Jerusalem and the ark\'s resting place, but also left a succession crisis.' },
  { book: '1 Kings', chapter: 1, type: 'sets_up', description: 'Solomon\'s anointing sets up his wisdom, the temple project, and the golden era of chapters 2–10.', target_book: '1 Kings', target_chapter: 2 },

  // 1 Kings 2
  { book: '1 Kings', chapter: 2, type: 'previously', description: 'Solomon was anointed king at the end of chapter 1 despite Adonijah\'s rival claim.', target_book: '1 Kings', target_chapter: 1 },
  { book: '1 Kings', chapter: 2, type: 'sets_up', description: 'The elimination of rivals (Adonijah, Joab, Shimei) establishes Solomon\'s undivided rule — the foundation for the golden age ahead.', target_book: '1 Kings', target_chapter: 3 },
  { book: '1 Kings', chapter: 2, type: 'callback', description: 'David\'s charge to deal with Joab and Shimei fulfills unfinished business from 2 Samuel 3 and 2 Samuel 16.', verse_number: 1 },

  // 1 Kings 3
  { book: '1 Kings', chapter: 3, type: 'previously', description: 'Solomon has secured the throne after eliminating all rivals (chapter 2).', target_book: '1 Kings', target_chapter: 2 },
  { book: '1 Kings', chapter: 3, type: 'sets_up', description: 'God\'s gift of wisdom to Solomon is the basis for everything in chapters 4–10 — his administration, the temple, the wealth, the fame.', target_book: '1 Kings', target_chapter: 4 },

  // 1 Kings 4
  { book: '1 Kings', chapter: 4, type: 'previously', description: 'Solomon received wisdom and began his reign in chapters 1–3.', target_book: '1 Kings', target_chapter: 3 },
  { book: '1 Kings', chapter: 4, type: 'sets_up', description: 'The administrative framework and the description of Israel\'s unparalleled prosperity set the stage for Solomon\'s building projects.', target_book: '1 Kings', target_chapter: 5 },

  // 1 Kings 5
  { book: '1 Kings', chapter: 5, type: 'previously', description: 'David had wanted to build the temple but was told his son would do it (2 Samuel 7). That son is now preparing.', target_book: '1 Kings', target_chapter: 4 },
  { book: '1 Kings', chapter: 5, type: 'sets_up', description: 'The treaty with Hiram of Tyre and the labor conscription directly enable the temple construction beginning in chapter 6.', target_book: '1 Kings', target_chapter: 6 },

  // 1 Kings 6
  { book: '1 Kings', chapter: 6, type: 'previously', description: 'The materials and workforce were assembled in chapter 5.', target_book: '1 Kings', target_chapter: 5 },
  { book: '1 Kings', chapter: 6, type: 'sets_up', description: 'The temple completed here will be the focal point of the story — its dedication (chapter 8), its corruption, and its eventual destruction (2 Kings 25).', target_book: '1 Kings', target_chapter: 8 },
  { book: '1 Kings', chapter: 6, type: 'callback', description: 'God\'s conditional promise in verse 12 ("if you walk in my statutes") echoes the Deuteronomic covenant and foreshadows Solomon\'s eventual failure in chapter 11.', verse_number: 12 },

  // 1 Kings 7
  { book: '1 Kings', chapter: 7, type: 'previously', description: 'The main temple structure was completed in chapter 6.', target_book: '1 Kings', target_chapter: 6 },
  { book: '1 Kings', chapter: 7, type: 'sets_up', description: 'The furnishings crafted here (the bronze sea, the pillars, the lavers) are referenced at the temple\'s destruction — the Babylonians melt them down in 2 Kings 25:13-17.', target_book: '2 Kings', target_chapter: 25 },

  // 1 Kings 8
  { book: '1 Kings', chapter: 8, type: 'previously', description: 'The temple was built in chapters 6–7. The ark has been in Jerusalem since David brought it (2 Samuel 6).', target_book: '1 Kings', target_chapter: 7 },
  { book: '1 Kings', chapter: 8, type: 'sets_up', description: 'Solomon\'s prayer of dedication is the theological center of 1 & 2 Kings. His seven petitions (especially about exile and return) anticipate the entire story that follows.', target_book: '1 Kings', target_chapter: 11 },
  { book: '1 Kings', chapter: 8, type: 'callback', description: 'Solomon\'s prayer in verses 46-51 explicitly anticipates exile — remarkably, it gives the prayer for return before the exile has even happened.', verse_number: 46 },

  // 1 Kings 9
  { book: '1 Kings', chapter: 9, type: 'previously', description: 'The temple was dedicated with Solomon\'s great prayer in chapter 8.', target_book: '1 Kings', target_chapter: 8 },
  { book: '1 Kings', chapter: 9, type: 'sets_up', description: 'God\'s second appearance with its stark warning ("if you turn aside, I will cut off Israel from the land") establishes the condition that drives the rest of the books.', target_book: '1 Kings', target_chapter: 11 },
  { book: '1 Kings', chapter: 9, type: 'callback', description: 'The warning in verse 6-7 that God will make Israel a proverb among nations is fulfilled exactly in 2 Kings 17:20 and 2 Kings 24-25.', verse_number: 6 },

  // 1 Kings 10
  { book: '1 Kings', chapter: 10, type: 'previously', description: 'Solomon\'s kingdom was established and blessed by God in chapters 1–9.', target_book: '1 Kings', target_chapter: 9 },
  { book: '1 Kings', chapter: 10, type: 'sets_up', description: 'The peak of Solomon\'s wealth and fame makes the fall in chapter 11 more shocking. This chapter is the "before" picture.', target_book: '1 Kings', target_chapter: 11 },

  // 1 Kings 11
  { book: '1 Kings', chapter: 11, type: 'previously', description: 'Chapter 10 showed Solomon\'s wealth and glory at its height. The Queen of Sheba marveled.', target_book: '1 Kings', target_chapter: 10 },
  { book: '1 Kings', chapter: 11, type: 'sets_up', description: 'The fracture of Solomon\'s heart and God\'s decision to tear the kingdom sets up the split in chapter 12 and the two-kingdom story that fills the rest of both books.', target_book: '1 Kings', target_chapter: 12 },
  { book: '1 Kings', chapter: 11, type: 'callback', description: 'God tells Jeroboam he will receive 10 tribes — this is fulfilled in 1 Kings 12:20.', verse_number: 31, target_book: '1 Kings', target_chapter: 12 },

  // 1 Kings 12
  { book: '1 Kings', chapter: 12, type: 'previously', description: 'God announced the kingdom would be divided because of Solomon\'s idolatry in chapter 11.', target_book: '1 Kings', target_chapter: 11 },
  { book: '1 Kings', chapter: 12, type: 'sets_up', description: 'The golden calves at Bethel and Dan set the pattern for every northern king: "Jeroboam\'s sin" is the benchmark by which all Israel\'s kings are condemned.', target_book: '1 Kings', target_chapter: 13 },
  { book: '1 Kings', chapter: 12, type: 'callback', description: 'Jeroboam\'s golden calves echo Aaron\'s golden calf in Exodus 32 — the same words ("these are your gods who brought you out of Egypt") are used deliberately.', verse_number: 28 },

  // 1 Kings 13
  { book: '1 Kings', chapter: 13, type: 'previously', description: 'Jeroboam set up the golden calves at Bethel and Dan in chapter 12.', target_book: '1 Kings', target_chapter: 12 },
  { book: '1 Kings', chapter: 13, type: 'sets_up', description: 'The man of God\'s prophecy that Josiah will desecrate this very altar is a slow-burning prophecy fulfilled 300 years later in 2 Kings 23:15-16.', target_book: '2 Kings', target_chapter: 23 },
  { book: '1 Kings', chapter: 13, type: 'callback', description: 'The prophecy in verse 2 — "O altar, altar, a son named Josiah will burn human bones on you" — is fulfilled 300 years later in 2 Kings 23:15-16.', verse_number: 2, target_book: '2 Kings', target_chapter: 23 },

  // 1 Kings 14
  { book: '1 Kings', chapter: 14, type: 'previously', description: 'Jeroboam established idolatrous worship in chapter 12–13 despite being warned.', target_book: '1 Kings', target_chapter: 13 },
  { book: '1 Kings', chapter: 14, type: 'sets_up', description: 'Ahijah\'s prophecy of doom on Jeroboam\'s house sets the pattern: every northern dynasty will end violently. This begins in 1 Kings 15:29.', target_book: '1 Kings', target_chapter: 15 },

  // 1 Kings 15
  { book: '1 Kings', chapter: 15, type: 'previously', description: 'Ahijah prophesied the destruction of Jeroboam\'s house in chapter 14.', target_book: '1 Kings', target_chapter: 14 },
  { book: '1 Kings', chapter: 15, type: 'sets_up', description: 'Baasha\'s violent coup against Jeroboam\'s line begins the pattern of dynasty destruction by coup that will define northern history.', target_book: '1 Kings', target_chapter: 16 },
  { book: '1 Kings', chapter: 15, type: 'callback', description: 'Verse 29 fulfills Ahijah\'s prophecy from 1 Kings 14:10 that every male of Jeroboam\'s house would be cut off.', verse_number: 29, target_book: '1 Kings', target_chapter: 14 },

  // 1 Kings 16
  { book: '1 Kings', chapter: 16, type: 'previously', description: 'Baasha came to power by killing Jeroboam\'s son. Now Baasha\'s line faces the same judgment.', target_book: '1 Kings', target_chapter: 15 },
  { book: '1 Kings', chapter: 16, type: 'sets_up', description: 'Ahab\'s marriage to Jezebel introduces the most dangerous antagonist in the northern kingdom — she will drive the crisis that dominates chapters 17–21.', target_book: '1 Kings', target_chapter: 17 },

  // 1 Kings 17
  { book: '1 Kings', chapter: 17, type: 'previously', description: 'Ahab married Jezebel and built a Baal temple in Samaria (chapter 16) — the worst king so far.', target_book: '1 Kings', target_chapter: 16 },
  { book: '1 Kings', chapter: 17, type: 'sets_up', description: 'Elijah\'s drought sets up the confrontation on Mount Carmel in chapter 18. The drought is not resolved until that confrontation is complete.', target_book: '1 Kings', target_chapter: 18 },
  { book: '1 Kings', chapter: 17, type: 'callback', description: 'Elijah\'s raising of the widow\'s son (v.22) echoes Moses\' miraculous provision (Exodus 16) and anticipates Elisha\'s similar miracle in 2 Kings 4:34.', verse_number: 22, target_book: '2 Kings', target_chapter: 4 },

  // 1 Kings 18
  { book: '1 Kings', chapter: 18, type: 'previously', description: 'Elijah announced the drought in chapter 17. Three years have now passed without rain.', target_book: '1 Kings', target_chapter: 17 },
  { book: '1 Kings', chapter: 18, type: 'sets_up', description: 'Jezebel\'s fury after the Carmel victory drives Elijah into the wilderness in chapter 19. Victory is followed immediately by collapse.', target_book: '1 Kings', target_chapter: 19 },
  { book: '1 Kings', chapter: 18, type: 'callback', description: 'Elijah\'s rebuilding of the 12-stone altar (v.31) deliberately echoes Jacob\'s altar at Bethel (Genesis 35:10) — reclaiming all 12 tribes for Yahweh.', verse_number: 31 },

  // 1 Kings 19
  { book: '1 Kings', chapter: 19, type: 'previously', description: 'Elijah\'s great victory at Carmel ended in chapter 18. Now Jezebel has put a price on his life.', target_book: '1 Kings', target_chapter: 18 },
  { book: '1 Kings', chapter: 19, type: 'sets_up', description: 'God\'s commission of Hazael, Jehu, and Elisha at Horeb sets up a slow-moving triple judgment on Israel that unfolds across both books — especially 2 Kings 9-10.', target_book: '2 Kings', target_chapter: 9 },
  { book: '1 Kings', chapter: 19, type: 'callback', description: 'Elijah\'s 40-day journey to Horeb (v.8) echoes Moses\' 40 days on Sinai (Exodus 34:28) and Israel\'s 40 years in the wilderness — the author is drawing this parallel deliberately.', verse_number: 8 },

  // 1 Kings 20
  { book: '1 Kings', chapter: 20, type: 'previously', description: 'Elijah anointed Elisha and received his commission in chapter 19.', target_book: '1 Kings', target_chapter: 19 },
  { book: '1 Kings', chapter: 20, type: 'sets_up', description: 'Ahab\'s foolish mercy toward Ben-Hadad — releasing him when God ordered his death — leads directly to his own prophesied death in chapter 22.', target_book: '1 Kings', target_chapter: 22 },

  // 1 Kings 21
  { book: '1 Kings', chapter: 21, type: 'previously', description: 'Ahab showed weakness in battle and disobedience in chapter 20.', target_book: '1 Kings', target_chapter: 20 },
  { book: '1 Kings', chapter: 21, type: 'sets_up', description: 'Elijah\'s prophecy against Ahab and Jezebel sets up their deaths — Ahab in 1 Kings 22, Jezebel in 2 Kings 9.', target_book: '1 Kings', target_chapter: 22 },
  { book: '1 Kings', chapter: 21, type: 'callback', description: 'Elijah\'s prophecy in verse 19 ("dogs shall lick your blood") is fulfilled in 1 Kings 22:38.', verse_number: 19, target_book: '1 Kings', target_chapter: 22 },
  { book: '1 Kings', chapter: 21, type: 'callback', description: 'Elijah\'s prophecy about Jezebel in verse 23 is fulfilled in 2 Kings 9:36-37.', verse_number: 23, target_book: '2 Kings', target_chapter: 9 },

  // 1 Kings 22
  { book: '1 Kings', chapter: 22, type: 'previously', description: 'Elijah pronounced judgment on Ahab in chapter 21.', target_book: '1 Kings', target_chapter: 21 },
  { book: '1 Kings', chapter: 22, type: 'sets_up', description: 'Ahab\'s death at Ramoth-Gilead fulfills Elijah\'s prophecy and removes the central villain of the Elijah cycle. The stage is now set for Elisha\'s ministry.', target_book: '2 Kings', target_chapter: 1 },
  { book: '1 Kings', chapter: 22, type: 'callback', description: 'The dogs licking Ahab\'s blood in verse 38 fulfills Elijah\'s prophecy from 1 Kings 21:19 precisely.', verse_number: 38, target_book: '1 Kings', target_chapter: 21 },

  // ══════════════════════════════════════════════
  // 2 KINGS
  // ══════════════════════════════════════════════

  // 2 Kings 1
  { book: '2 Kings', chapter: 1, type: 'previously', description: 'Ahab died at Ramoth-Gilead in 1 Kings 22. His son Ahaziah now reigns.', target_book: '1 Kings', target_chapter: 22 },
  { book: '2 Kings', chapter: 1, type: 'sets_up', description: 'Elijah\'s final prophetic act before his translation in chapter 2. The fire from heaven echoes the Carmel fire and establishes Elijah\'s authority one last time.', target_book: '2 Kings', target_chapter: 2 },

  // 2 Kings 2
  { book: '2 Kings', chapter: 2, type: 'previously', description: 'Elijah was commissioned to anoint Elisha as his successor in 1 Kings 19.', target_book: '1 Kings', target_chapter: 19 },
  { book: '2 Kings', chapter: 2, type: 'sets_up', description: 'Elijah\'s departure passes the prophetic mantle to Elisha, who receives a double portion. The Elisha cycle of miracles (chapters 3–8) begins here.', target_book: '2 Kings', target_chapter: 3 },
  { book: '2 Kings', chapter: 2, type: 'callback', description: 'Elisha\'s parting of the Jordan (v.14) mirrors Elijah\'s parting in verse 8 — and both echo Moses parting the Red Sea and Joshua crossing the Jordan. The successor pattern is being drawn explicitly.', verse_number: 14 },

  // 2 Kings 3
  { book: '2 Kings', chapter: 3, type: 'previously', description: 'Elisha received the prophetic mantle in chapter 2.', target_book: '2 Kings', target_chapter: 2 },
  { book: '2 Kings', chapter: 3, type: 'sets_up', description: 'Elisha\'s ministry among kings continues in chapters 4–8, alternating between miraculous provision for individuals and political counsel to Israel\'s kings.' },

  // 2 Kings 4
  { book: '2 Kings', chapter: 4, type: 'previously', description: 'Elisha proved himself as Elijah\'s successor through the military miracle in chapter 3.', target_book: '2 Kings', target_chapter: 3 },
  { book: '2 Kings', chapter: 4, type: 'sets_up', description: 'The Shunammite woman\'s story is interrupted here and completed in chapter 8 — a structural device that brackets the Naaman story.', target_book: '2 Kings', target_chapter: 8 },
  { book: '2 Kings', chapter: 4, type: 'callback', description: 'Elisha raising the Shunammite\'s son (v.34) deliberately echoes Elijah raising the widow\'s son in 1 Kings 17:21, completing the Moses-Joshua parallel.', verse_number: 34, target_book: '1 Kings', target_chapter: 17 },

  // 2 Kings 5
  { book: '2 Kings', chapter: 5, type: 'previously', description: 'Elisha\'s miracle ministry for Israelites has been established in chapters 3–4.', target_book: '2 Kings', target_chapter: 4 },
  { book: '2 Kings', chapter: 5, type: 'sets_up', description: 'Elisha\'s healing of a foreign general previews the theme that God\'s blessing extends beyond Israel — and Gehazi\'s greed introduces a foil to the faithful prophet.' },

  // 2 Kings 6
  { book: '2 Kings', chapter: 6, type: 'previously', description: 'Elisha demonstrated supernatural knowledge and power in chapter 5.', target_book: '2 Kings', target_chapter: 5 },
  { book: '2 Kings', chapter: 6, type: 'sets_up', description: 'The siege of Samaria in this chapter and its resolution in chapter 7 form a single narrative about Elisha\'s role as Samaria\'s protector.', target_book: '2 Kings', target_chapter: 7 },

  // 2 Kings 7
  { book: '2 Kings', chapter: 7, type: 'previously', description: 'Aram besieged Samaria, causing a famine, and Elisha prophesied deliverance in chapter 6.', target_book: '2 Kings', target_chapter: 6 },
  { book: '2 Kings', chapter: 7, type: 'sets_up', description: 'The miraculous deliverance of Samaria sets up the Shunammite woman\'s return in chapter 8, which happens "at the end of seven years."', target_book: '2 Kings', target_chapter: 8 },
  { book: '2 Kings', chapter: 7, type: 'callback', description: 'The officer who doubted Elisha\'s prophecy (v.2) trampled to death in verse 17 — fulfilling Elisha\'s word exactly.', verse_number: 17 },

  // 2 Kings 8
  { book: '2 Kings', chapter: 8, type: 'previously', description: 'The Shunammite woman\'s son was raised in chapter 4. The text now picks up her story after 7 years.', target_book: '2 Kings', target_chapter: 4 },
  { book: '2 Kings', chapter: 8, type: 'sets_up', description: 'Elisha\'s anointing of Hazael as king of Aram and the news that Hazael will attack Israel sets up the Aramean attacks of chapters 9–13.', target_book: '2 Kings', target_chapter: 9 },
  { book: '2 Kings', chapter: 8, type: 'callback', description: 'Hazael\'s anointing fulfills God\'s command to Elijah in 1 Kings 19:15 — a commission given years earlier.', verse_number: 13, target_book: '1 Kings', target_chapter: 19 },

  // 2 Kings 9
  { book: '2 Kings', chapter: 9, type: 'previously', description: 'Elisha anointed Hazael king of Aram in chapter 8. Now he sends a young prophet to anoint Jehu over Israel.', target_book: '2 Kings', target_chapter: 8 },
  { book: '2 Kings', chapter: 9, type: 'sets_up', description: 'Jehu\'s violent purge of the house of Ahab continues through chapter 10. This fulfills all the prophecies against Ahab and Jezebel.', target_book: '2 Kings', target_chapter: 10 },
  { book: '2 Kings', chapter: 9, type: 'callback', description: 'Jezebel\'s death in verse 36 — her body eaten by dogs at Jezreel — fulfills Elijah\'s prophecy from 1 Kings 21:23 exactly.', verse_number: 36, target_book: '1 Kings', target_chapter: 21 },

  // 2 Kings 10
  { book: '2 Kings', chapter: 10, type: 'previously', description: 'Jehu killed Joram and Jezebel in chapter 9.', target_book: '2 Kings', target_chapter: 9 },
  { book: '2 Kings', chapter: 10, type: 'sets_up', description: 'Though Jehu wiped out Baal worship, his failure to remove Jeroboam\'s golden calves means the northern kingdom continues on the same downward trajectory.', target_book: '2 Kings', target_chapter: 13 },
  { book: '2 Kings', chapter: 10, type: 'callback', description: 'God\'s promise to Jehu in verse 30 — four generations on the throne — is fulfilled in 2 Kings 15:12.', verse_number: 30, target_book: '2 Kings', target_chapter: 15 },

  // 2 Kings 11
  { book: '2 Kings', chapter: 11, type: 'previously', description: 'Jehu killed all of Ahab\'s house (chapter 10), including King Ahaziah of Judah. Ahaziah\'s mother Athaliah now seizes power in Jerusalem.', target_book: '2 Kings', target_chapter: 10 },
  { book: '2 Kings', chapter: 11, type: 'sets_up', description: 'The survival of infant Joash and his eventual coronation sets up his reform reign in chapter 12.', target_book: '2 Kings', target_chapter: 12 },

  // 2 Kings 12
  { book: '2 Kings', chapter: 12, type: 'previously', description: 'Joash was hidden in the temple and crowned king in chapter 11 after Athaliah\'s death.', target_book: '2 Kings', target_chapter: 11 },
  { book: '2 Kings', chapter: 12, type: 'sets_up', description: 'Joash\'s temple repairs are a bright spot, but his dependence on Hazael\'s mercy foreshadows the weakness that will lead to his assassination.', target_book: '2 Kings', target_chapter: 13 },

  // 2 Kings 13
  { book: '2 Kings', chapter: 13, type: 'previously', description: 'Jehu\'s dynasty continues. Elisha is now an old man and dying.', target_book: '2 Kings', target_chapter: 10 },
  { book: '2 Kings', chapter: 13, type: 'sets_up', description: 'Elisha\'s final prophecy — the arrows of victory — sets a limit on Jehoash\'s victories against Aram, fulfilled in verse 25.', target_book: '2 Kings', target_chapter: 13 },
  { book: '2 Kings', chapter: 13, type: 'callback', description: 'The miracle at Elisha\'s grave in verse 21 — a dead man revived on touching Elisha\'s bones — is the final Elisha miracle, bridging his ministry to future hope.', verse_number: 21 },

  // 2 Kings 14
  { book: '2 Kings', chapter: 14, type: 'previously', description: 'The Aramean threat was partially relieved in chapter 13 after Elisha\'s death.', target_book: '2 Kings', target_chapter: 13 },
  { book: '2 Kings', chapter: 14, type: 'sets_up', description: 'Jeroboam II\'s prosperous but morally corrupt reign is the last gasp of the northern kingdom\'s power before its rapid collapse in chapters 15–17.', target_book: '2 Kings', target_chapter: 15 },

  // 2 Kings 15
  { book: '2 Kings', chapter: 15, type: 'previously', description: 'Jeroboam II\'s long prosperous reign is summarized in chapter 14.', target_book: '2 Kings', target_chapter: 14 },
  { book: '2 Kings', chapter: 15, type: 'sets_up', description: 'The rapid succession of assassinated northern kings in this chapter shows the kingdom in free fall — four dynasties in 20 years. This leads directly to Assyrian conquest in chapter 17.', target_book: '2 Kings', target_chapter: 17 },
  { book: '2 Kings', chapter: 15, type: 'callback', description: 'Zechariah\'s death ends Jehu\'s dynasty in verse 12, fulfilling God\'s promise in 2 Kings 10:30 that Jehu would have four generations on the throne.', verse_number: 12, target_book: '2 Kings', target_chapter: 10 },

  // 2 Kings 16
  { book: '2 Kings', chapter: 16, type: 'previously', description: 'The northern kingdom is collapsing under Assyrian pressure in chapter 15.', target_book: '2 Kings', target_chapter: 15 },
  { book: '2 Kings', chapter: 16, type: 'sets_up', description: 'Ahaz\'s invitation of Assyria sets Judah on a path of vassalage that will dominate chapters 17–20 and ultimately contribute to Judah\'s own fall.', target_book: '2 Kings', target_chapter: 17 },

  // 2 Kings 17
  { book: '2 Kings', chapter: 17, type: 'previously', description: 'The northern kingdom has been in political chaos since chapter 15, and Ahaz invited Assyria in (chapter 16).', target_book: '2 Kings', target_chapter: 16 },
  { book: '2 Kings', chapter: 17, type: 'sets_up', description: 'The author\'s extended theological explanation (vv. 7-23) is the interpretive lens for all of 1 & 2 Kings. Judah will now face the same pressure — will it learn the lesson?', target_book: '2 Kings', target_chapter: 18 },
  { book: '2 Kings', chapter: 17, type: 'callback', description: 'Verse 13 — "the LORD warned Israel and Judah by every prophet and seer" — is the summary of every prophetic encounter throughout both books.', verse_number: 13 },

  // 2 Kings 18
  { book: '2 Kings', chapter: 18, type: 'previously', description: 'Israel fell to Assyria and was explained theologically in chapter 17. Hezekiah becomes king of Judah.', target_book: '2 Kings', target_chapter: 17 },
  { book: '2 Kings', chapter: 18, type: 'sets_up', description: 'Sennacherib\'s threat and Hezekiah\'s choice to trust God rather than surrender sets up the miraculous deliverance in chapter 19.', target_book: '2 Kings', target_chapter: 19 },

  // 2 Kings 19
  { book: '2 Kings', chapter: 19, type: 'previously', description: 'Sennacherib\'s field commander threatened Jerusalem in chapter 18. Hezekiah tore his clothes and went to the temple.', target_book: '2 Kings', target_chapter: 18 },
  { book: '2 Kings', chapter: 19, type: 'sets_up', description: 'The miraculous deliverance of Jerusalem reinforces faith but also leads to Hezekiah\'s pride in chapter 20, which Isaiah then rebukes — setting up Babylon\'s eventual conquest.', target_book: '2 Kings', target_chapter: 20 },
  { book: '2 Kings', chapter: 19, type: 'callback', description: 'The angel killing 185,000 Assyrians (v.35) fulfills Isaiah\'s prophecy from verse 7 precisely. Sennacherib then dies exactly as prophesied in verse 7.', verse_number: 35 },

  // 2 Kings 20
  { book: '2 Kings', chapter: 20, type: 'previously', description: 'Jerusalem was miraculously delivered from Assyria in chapter 19.', target_book: '2 Kings', target_chapter: 19 },
  { book: '2 Kings', chapter: 20, type: 'sets_up', description: 'Isaiah\'s prophecy that Babylon will take everything Hezekiah showed them (v.17-18) looks ahead to 2 Kings 24-25. The story is not over.', target_book: '2 Kings', target_chapter: 24 },
  { book: '2 Kings', chapter: 20, type: 'callback', description: 'Isaiah\'s Babylon prophecy in verse 17-18 — "all that your fathers stored up will be carried to Babylon" — is fulfilled in 2 Kings 24:13 and 25:13-17.', verse_number: 17, target_book: '2 Kings', target_chapter: 24 },

  // 2 Kings 21
  { book: '2 Kings', chapter: 21, type: 'previously', description: 'Hezekiah\'s good reign ended in chapter 20 with a troubling coda — Babylon will come.', target_book: '2 Kings', target_chapter: 20 },
  { book: '2 Kings', chapter: 21, type: 'sets_up', description: 'Manasseh\'s 55-year reign is the theological turning point for Judah\'s fate. 2 Kings 23:26 explicitly says even Josiah\'s reform cannot undo what Manasseh did.', target_book: '2 Kings', target_chapter: 23 },
  { book: '2 Kings', chapter: 21, type: 'callback', description: 'God\'s declaration in verse 12-13 — "I will stretch over Jerusalem the measuring line of Samaria" — applies the same judgment Israel received in 2 Kings 17 to Judah.', verse_number: 12, target_book: '2 Kings', target_chapter: 17 },

  // 2 Kings 22
  { book: '2 Kings', chapter: 22, type: 'previously', description: 'Manasseh\'s catastrophically evil reign sealed Judah\'s fate in chapter 21, according to God\'s word.', target_book: '2 Kings', target_chapter: 21 },
  { book: '2 Kings', chapter: 22, type: 'sets_up', description: 'The discovery of the Torah scroll drives the sweeping reform in chapter 23 — Josiah\'s response to the word of God is the model of what every king should have done.', target_book: '2 Kings', target_chapter: 23 },

  // 2 Kings 23
  { book: '2 Kings', chapter: 23, type: 'previously', description: 'Josiah heard the Torah read and tore his clothes in chapter 22. Huldah prophesied that disaster cannot be averted — but Josiah will be spared.', target_book: '2 Kings', target_chapter: 22 },
  { book: '2 Kings', chapter: 23, type: 'sets_up', description: 'Despite the greatest reform in Judah\'s history, verse 26 makes clear the exile is still coming because of Manasseh. Josiah\'s death at Megiddo signals the beginning of the end.', target_book: '2 Kings', target_chapter: 24 },
  { book: '2 Kings', chapter: 23, type: 'callback', description: 'Josiah burns bones on the Bethel altar in verse 15-16, fulfilling the prophecy made 300 years earlier in 1 Kings 13:2 — the longest-range fulfilled prophecy in Kings.', verse_number: 15, target_book: '1 Kings', target_chapter: 13 },

  // 2 Kings 24
  { book: '2 Kings', chapter: 24, type: 'previously', description: 'Josiah died at Megiddo and the reform era ended in chapter 23. Judah is now a vassal nation.', target_book: '2 Kings', target_chapter: 23 },
  { book: '2 Kings', chapter: 24, type: 'sets_up', description: 'The first deportation — including Daniel and the best of Judah — sets up the final siege and destruction in chapter 25.', target_book: '2 Kings', target_chapter: 25 },
  { book: '2 Kings', chapter: 24, type: 'callback', description: 'Verse 13 — Nebuchadnezzar carried away all the treasures of the temple — fulfills Isaiah\'s prophecy to Hezekiah in 2 Kings 20:17.', verse_number: 13, target_book: '2 Kings', target_chapter: 20 },

  // 2 Kings 25
  { book: '2 Kings', chapter: 25, type: 'previously', description: 'The first deportation occurred in chapter 24. Zedekiah is Babylon\'s puppet king.', target_book: '2 Kings', target_chapter: 24 },
  { book: '2 Kings', chapter: 25, type: 'callback', description: 'The temple furnishings listed in verses 13-17 — the bronze sea, the pillars, the lavers — were crafted by Solomon in 1 Kings 7. They are now being melted down by Babylon.', verse_number: 13, target_book: '1 Kings', target_chapter: 7 },
  { book: '2 Kings', chapter: 25, type: 'callback', description: 'Jerusalem\'s fall fulfills Solomon\'s prayer of dedication in 1 Kings 8:46-51 — the scenario he prayed about has now come to pass, with the prayer\'s hope of return still ahead.', verse_number: 1, target_book: '1 Kings', target_chapter: 8 },
]

async function getChapterId(book: string, chapter: number): Promise<string | null> {
  const { data: bookRow } = await supabase
    .from('books')
    .select('id')
    .eq('name', book)
    .single()
  if (!bookRow) return null

  const { data: chapterRow } = await supabase
    .from('chapters')
    .select('id')
    .eq('book_id', bookRow.id)
    .eq('chapter_number', chapter)
    .single()
  return chapterRow?.id ?? null
}

async function main() {
  console.log('Seeding chapter connections...')

  // Clear existing
  await supabase.from('chapter_connections').delete().neq('id', '00000000-0000-0000-0000-000000000000')

  let inserted = 0
  for (const conn of connections) {
    const chapterId = await getChapterId(conn.book, conn.chapter)
    if (!chapterId) {
      console.warn(`  SKIP: ${conn.book} ${conn.chapter} — chapter not found`)
      continue
    }

    let targetChapterId: string | null = null
    if (conn.target_book && conn.target_chapter) {
      targetChapterId = await getChapterId(conn.target_book, conn.target_chapter)
    }

    const { error } = await supabase.from('chapter_connections').insert({
      chapter_id: chapterId,
      type: conn.type,
      description: conn.description,
      target_chapter_id: targetChapterId,
      verse_number: conn.verse_number ?? null,
    })

    if (error) {
      console.error(`  ERROR: ${conn.book} ${conn.chapter} — ${error.message}`)
    } else {
      inserted++
    }
  }

  console.log(`Done. Inserted ${inserted}/${connections.length} connections.`)
}

main().catch(console.error)
