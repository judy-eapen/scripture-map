import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

type ProphecySeed = {
  title: string
  prophet?: string
  prophecy_book: string
  prophecy_chapter: number
  prophecy_verse_start: number
  prophecy_verse_end: number
  prophecy_summary: string
  fulfillment_book?: string
  fulfillment_chapter?: number
  fulfillment_verse_start?: number
  fulfillment_verse_end?: number
  fulfillment_summary?: string
  fulfilled: boolean
}

const prophecies: ProphecySeed[] = [
  // ── Solomon & the Temple ─────────────────────────────────────────────
  {
    title: "God's conditional promise about the temple",
    prophecy_book: '1 Kings', prophecy_chapter: 6, prophecy_verse_start: 12, prophecy_verse_end: 13,
    prophecy_summary: "God tells Solomon: if you keep my statutes, I will dwell among Israel and not forsake them — but if they turn away, the temple will become a heap of ruins.",
    fulfillment_book: '2 Kings', fulfillment_chapter: 25, fulfillment_verse_start: 9, fulfillment_verse_end: 9,
    fulfillment_summary: "Nebuzaradan burns the temple to the ground. The conditional curse is fulfilled.",
    fulfilled: true,
  },
  {
    title: "Solomon's prayer anticipates exile and return",
    prophecy_book: '1 Kings', prophecy_chapter: 8, prophecy_verse_start: 46, prophecy_verse_end: 51,
    prophecy_summary: "Solomon prays: when Israel sins and is exiled, if they turn back to God and pray toward Jerusalem, hear from heaven and forgive. He prays this before any exile has happened.",
    fulfillment_book: '2 Kings', fulfillment_chapter: 25, fulfillment_verse_start: 27, fulfillment_verse_end: 30,
    fulfillment_summary: "Jehoiachin is released from prison in Babylon — a small but real sign of the hope Solomon prayed for. The return will come, as promised.",
    fulfilled: true,
  },
  {
    title: "God warns: Israel will be cut off if they turn away",
    prophecy_book: '1 Kings', prophecy_chapter: 9, prophecy_verse_start: 6, prophecy_verse_end: 9,
    prophecy_summary: "God appears to Solomon a second time and warns: if you or your children turn from me to other gods, I will cut off Israel from this land and the temple will become a ruin.",
    fulfillment_book: '2 Kings', fulfillment_chapter: 17, fulfillment_verse_start: 20, fulfillment_verse_end: 23,
    fulfillment_summary: "Israel is exiled to Assyria. The author explicitly states God rejected all the descendants of Israel and afflicted them, just as he warned.",
    fulfilled: true,
  },

  // ── Jeroboam's dynasty ───────────────────────────────────────────────
  {
    title: "Ahijah's prophecy: Jeroboam's house will be destroyed",
    prophet: 'Ahijah',
    prophecy_book: '1 Kings', prophecy_chapter: 14, prophecy_verse_start: 10, prophecy_verse_end: 14,
    prophecy_summary: "Ahijah tells Jeroboam: God will bring disaster on your house and cut off every male in Israel. A new king will destroy the house of Jeroboam today.",
    fulfillment_book: '1 Kings', fulfillment_chapter: 15, fulfillment_verse_start: 29, fulfillment_verse_end: 30,
    fulfillment_summary: "Baasha strikes down Nadab and kills all of Jeroboam's household, fulfilling the word of Ahijah exactly.",
    fulfilled: true,
  },

  // ── The man of God at Bethel — 300 years fulfilled ───────────────────
  {
    title: "Prophecy at Bethel: Josiah will burn bones on this altar",
    prophecy_book: '1 Kings', prophecy_chapter: 13, prophecy_verse_start: 2, prophecy_verse_end: 3,
    prophecy_summary: "A man of God cries against Jeroboam's altar: 'O altar, a son named Josiah will be born to the house of David. He will burn human bones on you.' He gives a sign: the altar will split apart.",
    fulfillment_book: '2 Kings', fulfillment_chapter: 23, fulfillment_verse_start: 15, fulfillment_verse_end: 16,
    fulfillment_summary: "Josiah tears down the altar at Bethel, burns human bones on it, and defiles it — exactly as the man of God prophesied 300 years earlier. The text explicitly notes the fulfillment.",
    fulfilled: true,
  },

  // ── Elijah vs. Ahab & Jezebel ────────────────────────────────────────
  {
    title: "Elijah: dogs will lick Ahab's blood at Jezreel",
    prophet: 'Elijah',
    prophecy_book: '1 Kings', prophecy_chapter: 21, prophecy_verse_start: 19, prophecy_verse_end: 19,
    prophecy_summary: "Elijah tells Ahab: in the place where dogs licked Naboth's blood, dogs shall also lick your blood.",
    fulfillment_book: '1 Kings', fulfillment_chapter: 22, fulfillment_verse_start: 38, fulfillment_verse_end: 38,
    fulfillment_summary: "After Ahab dies at Ramoth-Gilead, his blood-soaked chariot is washed at the pool of Samaria and dogs lick his blood — fulfilling Elijah's word.",
    fulfilled: true,
  },
  {
    title: "Elijah: Jezebel will be eaten by dogs at Jezreel",
    prophet: 'Elijah',
    prophecy_book: '1 Kings', prophecy_chapter: 21, prophecy_verse_start: 23, prophecy_verse_end: 23,
    prophecy_summary: "Elijah prophesies: the dogs shall devour Jezebel within the walls of Jezreel.",
    fulfillment_book: '2 Kings', fulfillment_chapter: 9, fulfillment_verse_start: 35, fulfillment_verse_end: 37,
    fulfillment_summary: "After Jehu throws Jezebel from a window, she is eaten by dogs at Jezreel. Only her skull, feet, and hands remain. Jehu says: 'This is the word of the LORD which Elijah spoke.'",
    fulfilled: true,
  },
  {
    title: "Elijah: Ahab's dynasty will be destroyed",
    prophet: 'Elijah',
    prophecy_book: '1 Kings', prophecy_chapter: 21, prophecy_verse_start: 20, prophecy_verse_end: 22,
    prophecy_summary: "Elijah tells Ahab: because you have sold yourself to do evil, God will bring disaster on you and cut off every male of your house.",
    fulfillment_book: '2 Kings', fulfillment_chapter: 10, fulfillment_verse_start: 11, fulfillment_verse_end: 11,
    fulfillment_summary: "Jehu kills all who remained of Ahab's house in Jezreel — every great man, his close friends, his priests — leaving no survivor.",
    fulfilled: true,
  },

  // ── Micaiah & Ahab's death ───────────────────────────────────────────
  {
    title: "Micaiah: Ahab will die at Ramoth-Gilead",
    prophet: 'Micaiah',
    prophecy_book: '1 Kings', prophecy_chapter: 22, prophecy_verse_start: 17, prophecy_verse_end: 28,
    prophecy_summary: "Micaiah alone tells Ahab the truth: he saw Israel scattered like sheep with no shepherd. Ahab will not return alive. The spirit has put a lying spirit in the mouths of the 400 prophets.",
    fulfillment_book: '1 Kings', fulfillment_chapter: 22, fulfillment_verse_start: 34, fulfillment_verse_end: 38,
    fulfillment_summary: "A random arrow strikes Ahab between armor joints. He dies at sunset, propped in his chariot. His blood runs to the bottom of the chariot. He does not return to Samaria alive.",
    fulfilled: true,
  },

  // ── Elijah: Ahaziah will die ─────────────────────────────────────────
  {
    title: "Elijah: Ahaziah will not recover — he will die",
    prophet: 'Elijah',
    prophecy_book: '2 Kings', prophecy_chapter: 1, prophecy_verse_start: 4, prophecy_verse_end: 4,
    prophecy_summary: "Elijah intercepts Ahaziah's messengers going to Baal-Zebub and says: tell the king he will not recover from his injuries — he will surely die.",
    fulfillment_book: '2 Kings', fulfillment_chapter: 1, fulfillment_verse_start: 17, fulfillment_verse_end: 17,
    fulfillment_summary: "Ahaziah dies according to the word of the LORD which Elijah had spoken.",
    fulfilled: true,
  },

  // ── Elisha's arrows ──────────────────────────────────────────────────
  {
    title: "Elisha's arrows: three victories — then stops",
    prophet: 'Elisha',
    prophecy_book: '2 Kings', prophecy_chapter: 13, prophecy_verse_start: 18, prophecy_verse_end: 19,
    prophecy_summary: "Elisha tells Jehoash to strike the ground with arrows. He strikes three times and stops. Elisha is angry: you should have struck five or six times — now you will only defeat Aram three times.",
    fulfillment_book: '2 Kings', fulfillment_chapter: 13, fulfillment_verse_start: 25, fulfillment_verse_end: 25,
    fulfillment_summary: "Jehoash defeats Ben-Hadad three times and recovers the cities of Israel — exactly three times, as Elisha prophesied.",
    fulfilled: true,
  },

  // ── Elisha: Hazael king of Aram ──────────────────────────────────────
  {
    title: "God commands Elijah: anoint Hazael king of Aram",
    prophet: 'Elijah',
    prophecy_book: '1 Kings', prophecy_chapter: 19, prophecy_verse_start: 15, prophecy_verse_end: 15,
    prophecy_summary: "God tells Elijah at Horeb: go, return, and anoint Hazael as king over Aram. This commission is passed to Elisha.",
    fulfillment_book: '2 Kings', fulfillment_chapter: 8, fulfillment_verse_start: 13, fulfillment_verse_end: 15,
    fulfillment_summary: "Elisha tells Hazael he will be king of Aram. The next day Hazael smothers Ben-Hadad and becomes king — fulfilling the word given to Elijah at Horeb.",
    fulfilled: true,
  },

  // ── Jehu's dynasty ───────────────────────────────────────────────────
  {
    title: "God promises Jehu: four generations on the throne",
    prophecy_book: '2 Kings', prophecy_chapter: 10, prophecy_verse_start: 30, prophecy_verse_end: 30,
    prophecy_summary: "God tells Jehu: because you have done what is right in my sight against Ahab's house, your sons to the fourth generation shall sit on the throne of Israel.",
    fulfillment_book: '2 Kings', fulfillment_chapter: 15, fulfillment_verse_start: 12, fulfillment_verse_end: 12,
    fulfillment_summary: "Zechariah, Jehu's great-great-grandson, reigns and is assassinated — the fourth generation. The text notes: this was the word of the LORD to Jehu.",
    fulfilled: true,
  },

  // ── Baasha's dynasty ─────────────────────────────────────────────────
  {
    title: "Jehu the prophet: Baasha's house will be destroyed",
    prophet: 'Jehu son of Hanani',
    prophecy_book: '1 Kings', prophecy_chapter: 16, prophecy_verse_start: 3, prophecy_verse_end: 4,
    prophecy_summary: "The prophet Jehu tells Baasha: God will consume your house like the house of Jeroboam. Dogs will eat whoever dies in the city.",
    fulfillment_book: '1 Kings', fulfillment_chapter: 16, fulfillment_verse_start: 11, fulfillment_verse_end: 13,
    fulfillment_summary: "Zimri kills Elah and all of Baasha's house — not leaving a single male. Fulfilling the word of God against Baasha.",
    fulfilled: true,
  },

  // ── Hezekiah & Sennacherib ───────────────────────────────────────────
  {
    title: "Isaiah: Sennacherib will not enter Jerusalem",
    prophet: 'Isaiah',
    prophecy_book: '2 Kings', prophecy_chapter: 19, prophecy_verse_start: 32, prophecy_verse_end: 34,
    prophecy_summary: "Isaiah tells Hezekiah: Sennacherib will not enter Jerusalem or shoot an arrow into it. He will return by the way he came. God will defend the city.",
    fulfillment_book: '2 Kings', fulfillment_chapter: 19, fulfillment_verse_start: 35, fulfillment_verse_end: 37,
    fulfillment_summary: "That night the angel of the LORD strikes 185,000 Assyrians. Sennacherib breaks camp and returns to Nineveh, where his own sons kill him — never having entered Jerusalem.",
    fulfilled: true,
  },
  {
    title: "Isaiah: Sennacherib will be killed by the sword in his own land",
    prophet: 'Isaiah',
    prophecy_book: '2 Kings', prophecy_chapter: 19, prophecy_verse_start: 7, prophecy_verse_end: 7,
    prophecy_summary: "Isaiah tells Hezekiah that God will put a spirit in Sennacherib — he will hear a rumor and return to his own land, and there he will fall by the sword.",
    fulfillment_book: '2 Kings', fulfillment_chapter: 19, fulfillment_verse_start: 37, fulfillment_verse_end: 37,
    fulfillment_summary: "Sennacherib returns to Nineveh and is killed by his sons Adrammelech and Sharezer while worshipping in the temple of Nisroch — exactly as prophesied.",
    fulfilled: true,
  },

  // ── Hezekiah's life extended ─────────────────────────────────────────
  {
    title: "Isaiah: Hezekiah will live 15 more years",
    prophet: 'Isaiah',
    prophecy_book: '2 Kings', prophecy_chapter: 20, prophecy_verse_start: 5, prophecy_verse_end: 6,
    prophecy_summary: "After Hezekiah prays, Isaiah returns with God's word: I have heard your prayer and seen your tears. I will add 15 years to your life.",
    fulfillment_book: '2 Kings', fulfillment_chapter: 20, fulfillment_verse_start: 21, fulfillment_verse_end: 21,
    fulfillment_summary: "Hezekiah reigns a total of 29 years (2 Kings 18:2). He became ill in year 14 and was given 15 more, dying at the appointed time — the arithmetic confirms the prophecy.",
    fulfilled: true,
  },

  // ── Isaiah's Babylon prophecy ────────────────────────────────────────
  {
    title: "Isaiah: Babylon will carry away everything Hezekiah showed them",
    prophet: 'Isaiah',
    prophecy_book: '2 Kings', prophecy_chapter: 20, prophecy_verse_start: 17, prophecy_verse_end: 18,
    prophecy_summary: "After Hezekiah shows Babylonian envoys all his treasure, Isaiah says: the days are coming when everything in your palace will be carried to Babylon. Your own sons will serve as eunuchs in the palace of Babylon.",
    fulfillment_book: '2 Kings', fulfillment_chapter: 24, fulfillment_verse_start: 13, fulfillment_verse_end: 14,
    fulfillment_summary: "Nebuchadnezzar carries away all the treasures of the temple and palace, and exiles Jehoiachin and the leading men to Babylon — fulfilling Isaiah's prophecy 100 years later.",
    fulfilled: true,
  },

  // ── Josiah's death ───────────────────────────────────────────────────
  {
    title: "Huldah: disaster on Jerusalem cannot be averted",
    prophet: 'Huldah',
    prophecy_book: '2 Kings', prophecy_chapter: 22, prophecy_verse_start: 16, prophecy_verse_end: 17,
    prophecy_summary: "Huldah tells Josiah: God will bring disaster on this place because they have abandoned me and burned incense to other gods. The disaster cannot be stopped.",
    fulfillment_book: '2 Kings', fulfillment_chapter: 25, fulfillment_verse_start: 1, fulfillment_verse_end: 10,
    fulfillment_summary: "Nebuchadnezzar besieges Jerusalem, burns the city and temple, breaks down the walls — the full disaster Huldah announced arrives under Zedekiah.",
    fulfilled: true,
  },
  {
    title: "Huldah: Josiah will be gathered to his grave in peace",
    prophet: 'Huldah',
    prophecy_book: '2 Kings', prophecy_chapter: 22, prophecy_verse_start: 20, prophecy_verse_end: 20,
    prophecy_summary: "Huldah tells Josiah: because your heart was responsive and you humbled yourself, you will be gathered to your grave in peace — your eyes will not see the disaster.",
    fulfillment_book: '2 Kings', fulfillment_chapter: 23, fulfillment_verse_start: 29, fulfillment_verse_end: 30,
    fulfillment_summary: "Josiah is killed at Megiddo by Pharaoh Neco — before Jerusalem falls. He dies before seeing the full disaster, gathered to his grave before the exile.",
    fulfilled: true,
  },

  // ── Omri & Zimri ─────────────────────────────────────────────────────
  {
    title: "God announces Jeroboam will receive 10 tribes",
    prophet: 'Ahijah',
    prophecy_book: '1 Kings', prophecy_chapter: 11, prophecy_verse_start: 31, prophecy_verse_end: 32,
    prophecy_summary: "Ahijah tears his cloak into 12 pieces and gives 10 to Jeroboam: God will tear the kingdom from Solomon and give you 10 tribes. One tribe will remain for David's sake.",
    fulfillment_book: '1 Kings', fulfillment_chapter: 12, fulfillment_verse_start: 20, fulfillment_verse_end: 20,
    fulfillment_summary: "When Jeroboam returns from Egypt, all Israel makes him king. Only the tribe of Judah remains with the house of David — 10 tribes to Jeroboam, exactly as prophesied.",
    fulfilled: true,
  },

  // ── Elijah: Elisha's commission ──────────────────────────────────────
  {
    title: "God commands Elijah: anoint Elisha as prophet in your place",
    prophet: 'Elijah',
    prophecy_book: '1 Kings', prophecy_chapter: 19, prophecy_verse_start: 16, prophecy_verse_end: 16,
    prophecy_summary: "God tells Elijah at Horeb: anoint Elisha son of Shaphat as prophet to succeed you.",
    fulfillment_book: '2 Kings', fulfillment_chapter: 2, fulfillment_verse_start: 9, fulfillment_verse_end: 15,
    fulfillment_summary: "Elijah ascends in a whirlwind and Elisha picks up his mantle. The company of prophets says: the spirit of Elijah rests on Elisha. The succession is complete.",
    fulfilled: true,
  },

  // ── Elisha: Naaman will be healed ───────────────────────────────────
  {
    title: "Elisha: Naaman the Aramean will be healed of leprosy",
    prophet: 'Elisha',
    prophecy_book: '2 Kings', prophecy_chapter: 5, prophecy_verse_start: 8, prophecy_verse_end: 8,
    prophecy_summary: "Elisha sends word to the king of Israel: send the man to me and he will know that there is a prophet in Israel.",
    fulfillment_book: '2 Kings', fulfillment_chapter: 5, fulfillment_verse_start: 14, fulfillment_verse_end: 14,
    fulfillment_summary: "Naaman dips seven times in the Jordan and his flesh is restored like the flesh of a little child — clean.",
    fulfilled: true,
  },

  // ── Elisha: siege of Samaria broken ─────────────────────────────────
  {
    title: "Elisha: tomorrow food will be cheap in Samaria's gate",
    prophet: 'Elisha',
    prophecy_book: '2 Kings', prophecy_chapter: 7, prophecy_verse_start: 1, prophecy_verse_end: 2,
    prophecy_summary: "During the Aramean siege and famine, Elisha says: tomorrow a seah of flour will sell for a shekel in the gate of Samaria. The royal officer scoffs: impossible.",
    fulfillment_book: '2 Kings', fulfillment_chapter: 7, fulfillment_verse_start: 16, fulfillment_verse_end: 17,
    fulfillment_summary: "The Arameans flee at night. The next day people plunder the abandoned camp and food is sold cheaply in the gate. The officer who scoffed is trampled to death in the crowd.",
    fulfilled: true,
  },

  // ── Elijah: Jehu will be king ─────────────────────────────────────────
  {
    title: "God commands Elijah: anoint Jehu king over Israel",
    prophet: 'Elijah',
    prophecy_book: '1 Kings', prophecy_chapter: 19, prophecy_verse_start: 16, prophecy_verse_end: 16,
    prophecy_summary: "God tells Elijah at Horeb: anoint Jehu son of Nimshi as king over Israel.",
    fulfillment_book: '2 Kings', fulfillment_chapter: 9, fulfillment_verse_start: 6, fulfillment_verse_end: 10,
    fulfillment_summary: "Elisha sends a young prophet to Ramoth-Gilead who anoints Jehu and commissions him to destroy the house of Ahab — the commission given to Elijah 15 years earlier is now executed.",
    fulfilled: true,
  },

  // ── Fall of Israel ────────────────────────────────────────────────────
  {
    title: "The persistent warning through every prophet and seer",
    prophecy_book: '2 Kings', prophecy_chapter: 17, prophecy_verse_start: 13, prophecy_verse_end: 13,
    prophecy_summary: "The author summarizes: the LORD warned Israel and Judah by every prophet and every seer, saying turn from your evil ways and keep my commandments. But they would not listen.",
    fulfillment_book: '2 Kings', fulfillment_chapter: 17, fulfillment_verse_start: 18, fulfillment_verse_end: 18,
    fulfillment_summary: "So the LORD was very angry with Israel and removed them out of his sight — none was left but the tribe of Judah only. The warning, unheeded, became judgment.",
    fulfilled: true,
  },
]

async function getChapterId(book: string, chapter: number): Promise<string | null> {
  const { data: bookRow } = await supabase.from('books').select('id').eq('name', book).single()
  if (!bookRow) return null
  const { data: chapterRow } = await supabase.from('chapters').select('id').eq('book_id', bookRow.id).eq('chapter_number', chapter).single()
  return chapterRow?.id ?? null
}

async function main() {
  console.log('Seeding prophecies...')
  await supabase.from('prophecies').delete().neq('id', '00000000-0000-0000-0000-000000000000')

  let inserted = 0
  for (const p of prophecies) {
    const prophecyChapterId = await getChapterId(p.prophecy_book, p.prophecy_chapter)
    if (!prophecyChapterId) { console.warn(`SKIP: ${p.prophecy_book} ${p.prophecy_chapter}`); continue }

    let fulfillmentChapterId: string | null = null
    if (p.fulfillment_book && p.fulfillment_chapter) {
      fulfillmentChapterId = await getChapterId(p.fulfillment_book, p.fulfillment_chapter)
    }

    const { error } = await supabase.from('prophecies').insert({
      title: p.title,
      prophet: p.prophet ?? null,
      prophecy_chapter_id: prophecyChapterId,
      prophecy_verse_start: p.prophecy_verse_start,
      prophecy_verse_end: p.prophecy_verse_end,
      prophecy_summary: p.prophecy_summary,
      fulfillment_chapter_id: fulfillmentChapterId,
      fulfillment_verse_start: p.fulfillment_verse_start ?? null,
      fulfillment_verse_end: p.fulfillment_verse_end ?? null,
      fulfillment_summary: p.fulfillment_summary ?? '',
      fulfilled: p.fulfilled,
    })

    if (error) console.error(`ERROR: ${p.title} — ${error.message}`)
    else inserted++
  }

  console.log(`Done. Inserted ${inserted}/${prophecies.length} prophecies.`)
}

main().catch(console.error)
