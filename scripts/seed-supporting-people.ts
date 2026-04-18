import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

// People to add with their chapter appearances
// chapters: { book: '1 Kings' | '2 Kings', chapter: number, terms: string[] }[]
const PEOPLE: {
  name: string
  type: 'king' | 'prophet' | 'official' | 'foreign_ruler' | 'other'
  kingdom?: 'north' | 'south' | 'foreign'
  verdict?: 'good' | 'evil' | 'mixed'
  bio: string
  contemporary_events?: string
  chapters: { book: '1 Kings' | '2 Kings'; chapter: number; terms: string[] }[]
}[] = [
  {
    name: 'Abishag',
    type: 'other',
    kingdom: 'south',
    bio: "A beautiful young woman from Shunem brought to care for King David in his old age. She kept him warm and ministered to him, though David did not know her. After David's death, Adonijah's request to marry Abishag cost him his life — Solomon recognized it as a bid for the throne.",
    chapters: [
      { book: '1 Kings', chapter: 1, terms: ["Abishag", "Ab'ishag", "Shunammite"] },
      { book: '1 Kings', chapter: 2, terms: ["Abishag", "Ab'ishag"] },
    ],
  },
  {
    name: 'Nathan',
    type: 'prophet',
    kingdom: 'south',
    verdict: 'good',
    bio: "David's court prophet and God's voice throughout the transition to Solomon. When Adonijah seized the throne, Nathan moved quickly — coaching Bathsheba on how to approach David and following her to confirm Solomon's right to succeed. He anointed Solomon at the Gihon spring. Earlier, Nathan delivered God's rebuke to David over Bathsheba and Uriah (2 Samuel 12).",
    chapters: [
      { book: '1 Kings', chapter: 1, terms: ['Nathan'] },
      { book: '1 Kings', chapter: 4, terms: ['Nathan'] },
    ],
  },
  {
    name: 'Bathsheba',
    type: 'official',
    kingdom: 'south',
    bio: "Mother of Solomon and queen mother. Originally the wife of Uriah the Hittite, she became David's wife after his great sin. In 1 Kings 1, she is the one Nathan coaches to go to David and secure Solomon's throne. She kneels and bows to the dying king, then rises as queen mother when Solomon takes the throne — a position of real power in Israelite court.",
    chapters: [
      { book: '1 Kings', chapter: 1, terms: ['Bathsheba', "Bathshe'ba"] },
      { book: '1 Kings', chapter: 2, terms: ['Bathsheba', "Bathshe'ba"] },
    ],
  },
  {
    name: 'Zadok',
    type: 'official',
    kingdom: 'south',
    verdict: 'good',
    bio: "The high priest who remained loyal to David when Abiathar defected to Adonijah's cause. Zadok anointed Solomon at the Gihon spring alongside Nathan. Solomon rewarded his loyalty by making him sole high priest, fulfilling the prophecy against Eli's house. The Zadokite priesthood became the dominant priestly line in Judah.",
    chapters: [
      { book: '1 Kings', chapter: 1, terms: ['Zadok'] },
      { book: '1 Kings', chapter: 2, terms: ['Zadok'] },
      { book: '1 Kings', chapter: 4, terms: ['Zadok'] },
    ],
  },
  {
    name: 'Benaiah',
    type: 'official',
    kingdom: 'south',
    verdict: 'good',
    bio: "Son of Jehoiada the priest and commander of David's elite guard. Benaiah stayed loyal when Joab and Abiathar sided with Adonijah. He anointed Solomon at Gihon, executed Adonijah and Joab on Solomon's orders, and replaced Joab as commander of Israel's armies. A man of fierce loyalty and military prowess.",
    chapters: [
      { book: '1 Kings', chapter: 1, terms: ['Benaiah', "Benai'ah"] },
      { book: '1 Kings', chapter: 2, terms: ['Benaiah', "Benai'ah"] },
      { book: '1 Kings', chapter: 4, terms: ['Benaiah', "Benai'ah"] },
    ],
  },
  {
    name: 'Abiathar',
    type: 'official',
    kingdom: 'south',
    verdict: 'mixed',
    bio: "The high priest who had been loyal to David through his wilderness years but backed the wrong heir — joining Adonijah's bid for the throne instead of Solomon's. Solomon deposed him and exiled him to Anathoth, fulfilling the ancient prophecy against the house of Eli (1 Samuel 2:31–33). He was spared because he had carried the ark before David.",
    chapters: [
      { book: '1 Kings', chapter: 1, terms: ['Abiathar', "Abi'athar"] },
      { book: '1 Kings', chapter: 2, terms: ['Abiathar', "Abi'athar"] },
    ],
  },
  {
    name: 'Joab',
    type: 'official',
    kingdom: 'south',
    verdict: 'mixed',
    bio: "David's longtime military commander — brilliant, brutal, and utterly loyal to David's political interests, if not always to God's. He backed Adonijah's bid for the throne, likely calculating that Adonijah would preserve his position. Solomon had him executed at the altar of the tabernacle for his past murders of Abner and Amasa. He died clinging to the horns of the altar.",
    contemporary_events: "Joab had served David for decades, including the wars against Ammon, Aram, and Edom. His killing of Absalom against David's explicit orders, and his murders of Abner and Amasa, were the basis for Solomon's death warrant.",
    chapters: [
      { book: '1 Kings', chapter: 1, terms: ['Joab', "Jo'ab"] },
      { book: '1 Kings', chapter: 2, terms: ['Joab', "Jo'ab"] },
    ],
  },
  {
    name: 'Shimei',
    type: 'official',
    kingdom: 'south',
    verdict: 'evil',
    bio: "A Benjaminite from Saul's clan who had cursed David when he fled Absalom. David pardoned him but warned Solomon to deal with him wisely. Solomon placed him under house arrest in Jerusalem — he could live, but must never cross the Kidron Valley. When Shimei violated the terms to retrieve his slaves, Solomon had him executed. His death ended the last significant Saulide threat.",
    chapters: [
      { book: '1 Kings', chapter: 1, terms: ['Shimei', "Shim'ei"] },
      { book: '1 Kings', chapter: 2, terms: ['Shimei', "Shim'ei"] },
    ],
  },
  {
    name: 'Hiram',
    type: 'foreign_ruler',
    kingdom: 'foreign',
    bio: "King of Tyre (Phoenicia) and ally of both David and Solomon. He supplied cedar and cypress timber, skilled craftsmen, and the master artisan Hiram-Abi for the construction of the temple and Solomon's palace. In exchange, Solomon gave him twenty cities in Galilee — which Hiram inspected and named Cabul ('good for nothing'), suggesting he was not impressed.",
    contemporary_events: "Tyre was the dominant Phoenician maritime power, controlling Mediterranean trade routes. Hiram's alliance gave Israel access to the finest timber and metalwork in the ancient Near East.",
    chapters: [
      { book: '1 Kings', chapter: 5, terms: ['Hiram'] },
      { book: '1 Kings', chapter: 7, terms: ['Hiram'] },
      { book: '1 Kings', chapter: 9, terms: ['Hiram'] },
    ],
  },
  {
    name: 'Queen of Sheba',
    type: 'foreign_ruler',
    kingdom: 'foreign',
    bio: "An unnamed queen from Sheba (likely modern Yemen or Ethiopia) who traveled to Jerusalem with a great caravan to test Solomon's wisdom with hard questions. She was overwhelmed by what she found — his wisdom, his palace, his table, his burnt offerings. 'The half was not told me,' she said. She gave Solomon 120 talents of gold and great quantities of spice and precious stones.",
    contemporary_events: "Sheba controlled lucrative incense and spice trade routes. Her visit was both diplomatic and commercial — Israel under Solomon was a regional power worth cultivating.",
    chapters: [
      { book: '1 Kings', chapter: 10, terms: ['Queen of Sheba', 'Sheba'] },
    ],
  },
  {
    name: 'Jeroboam',
    type: 'king',
    kingdom: 'north',
    verdict: 'evil',
    bio: "An Ephraimite official under Solomon who was told by the prophet Ahijah that he would rule ten tribes. Solomon tried to kill him; he fled to Egypt. After Solomon's death, he returned and led the ten northern tribes in revolt against Rehoboam. He became the first king of Northern Israel and set up golden calves at Bethel and Dan — the 'sin of Jeroboam' that defined every northern king after him.",
    contemporary_events: "Jeroboam's revolt was enabled by Solomon's forced labor and heavy taxation. He ruled c. 930–909 BC.",
    chapters: [
      { book: '1 Kings', chapter: 11, terms: ['Jeroboam'] },
      { book: '1 Kings', chapter: 12, terms: ['Jeroboam'] },
      { book: '1 Kings', chapter: 13, terms: ['Jeroboam'] },
      { book: '1 Kings', chapter: 14, terms: ['Jeroboam'] },
    ],
  },
  {
    name: 'Rehoboam',
    type: 'king',
    kingdom: 'south',
    verdict: 'evil',
    bio: "Solomon's son and successor who caused the kingdom to split. When the northern tribes asked him to lighten Solomon's tax burden, he rejected the elders' advice and threatened to increase it. Ten tribes revolted under Jeroboam. Rehoboam was left with Judah and Benjamin. He allowed high places and male shrine prostitutes to flourish — the worst evils since the Canaanites.",
    chapters: [
      { book: '1 Kings', chapter: 12, terms: ['Rehoboam'] },
      { book: '1 Kings', chapter: 14, terms: ['Rehoboam'] },
    ],
  },
  {
    name: 'Ahijah',
    type: 'prophet',
    kingdom: 'north',
    verdict: 'good',
    bio: "The prophet from Shiloh who tore his cloak into twelve pieces and gave ten to Jeroboam, announcing that God would give him ten tribes (1 Kings 11). Later, when Jeroboam sent his wife to ask about their sick son, Ahijah — now old and blind — pronounced judgment on Jeroboam's entire house for his idolatry. Every prediction he made came to pass.",
    chapters: [
      { book: '1 Kings', chapter: 11, terms: ['Ahijah'] },
      { book: '1 Kings', chapter: 14, terms: ['Ahijah'] },
      { book: '1 Kings', chapter: 15, terms: ['Ahijah'] },
    ],
  },
  {
    name: 'Naboth',
    type: 'other',
    kingdom: 'north',
    verdict: 'good',
    bio: "A Jezreelite who owned a vineyard adjacent to Ahab's palace. When Ahab asked to buy it, Naboth refused — it was his ancestral inheritance, and the law protected it. Jezebel arranged false testimony that he had cursed God and the king; he was stoned to death. Elijah's prophecy against Ahab was directly triggered by this murder. Naboth represents every Israelite whose inheritance was stolen by royal power.",
    chapters: [
      { book: '1 Kings', chapter: 21, terms: ['Naboth'] },
      { book: '2 Kings', chapter: 9, terms: ['Naboth'] },
    ],
  },
  {
    name: 'Micaiah',
    type: 'prophet',
    kingdom: 'north',
    verdict: 'good',
    bio: "The prophet who told Ahab the truth about the battle of Ramoth-Gilead when 400 false prophets predicted victory. Ahab hated him — 'he never prophesies anything good about me, but always evil.' Micaiah described seeing a spirit volunteer to be a lying spirit in the mouths of all Ahab's prophets. He was slapped and imprisoned for his words — and proven right when Ahab died exactly as he predicted.",
    chapters: [
      { book: '1 Kings', chapter: 22, terms: ['Micaiah', "Micai'ah"] },
    ],
  },
  {
    name: 'Naaman',
    type: 'foreign_ruler',
    kingdom: 'foreign',
    bio: "Commander of the Aramean army — a great man, mighty in valor — who had leprosy. An Israelite slave girl told his wife to send him to the prophet in Samaria. Naaman traveled with horses and chariots expecting a dramatic cure. Elisha simply told him to dip seven times in the Jordan. Naaman was furious at the simplicity but his servant persuaded him to obey. He was healed and confessed: 'There is no God in all the earth but in Israel.'",
    contemporary_events: "Aram-Damascus was Israel's most persistent enemy during the 9th century BC. Naaman's healing is one of the most striking examples of prophetic power reaching a foreign military commander.",
    chapters: [
      { book: '2 Kings', chapter: 5, terms: ['Naaman'] },
    ],
  },
  {
    name: 'Gehazi',
    type: 'official',
    kingdom: 'north',
    verdict: 'evil',
    bio: "Elisha's servant who appears in several narratives — he ran ahead to lay Elisha's staff on the Shunammite's dead son, he served as intermediary between Elisha and the Shunammite woman. But his downfall came after Naaman's healing: he ran after Naaman and took silver and clothing by deception, claiming Elisha needed them for two prophets. Elisha pronounced Naaman's leprosy on him permanently.",
    chapters: [
      { book: '2 Kings', chapter: 4, terms: ['Gehazi'] },
      { book: '2 Kings', chapter: 5, terms: ['Gehazi'] },
      { book: '2 Kings', chapter: 8, terms: ['Gehazi'] },
    ],
  },
  {
    name: 'Shunammite Woman',
    type: 'other',
    kingdom: 'north',
    bio: "An unnamed wealthy woman from Shunem who recognized Elisha as a holy man of God and built him a rooftop room for his travels. When Elisha asked what she wanted, she said she needed nothing. His servant Gehazi noticed she had no son. Elisha prophesied she would embrace a son the following year — she did. When that son died, she traveled to Elisha at Carmel, and he raised the boy from death.",
    chapters: [
      { book: '2 Kings', chapter: 4, terms: ['Shunammite', 'Shunamm'] },
      { book: '2 Kings', chapter: 8, terms: ['Shunammite'] },
    ],
  },
  {
    name: 'Hazael',
    type: 'foreign_ruler',
    kingdom: 'foreign',
    verdict: 'evil',
    bio: "An official of Aram-Damascus whom Elisha identified as the next king of Aram. When Ben-hadad sent him to ask Elisha if he would recover from illness, Elisha wept and told Hazael what he would do to Israel — how he would burn their fortresses, kill their young men, dash their little ones to pieces. Hazael returned, smothered the sick king with a wet cloth, and seized the throne. He then devastated Israel for decades.",
    contemporary_events: "Hazael's aggressive campaigns against Israel and Judah are confirmed by Assyrian inscriptions and the Tel Dan Stele, which records a king of Aram boasting of killing a 'king of Israel' from the 'House of David'.",
    chapters: [
      { book: '2 Kings', chapter: 8, terms: ['Hazael'] },
      { book: '2 Kings', chapter: 9, terms: ['Hazael'] },
      { book: '2 Kings', chapter: 10, terms: ['Hazael'] },
      { book: '2 Kings', chapter: 12, terms: ['Hazael'] },
      { book: '2 Kings', chapter: 13, terms: ['Hazael'] },
    ],
  },
  {
    name: 'Huldah',
    type: 'prophet',
    kingdom: 'south',
    verdict: 'good',
    bio: "A prophetess in Jerusalem, wife of Shallum the keeper of the wardrobe. When Josiah discovered the Book of the Law in the temple, he sent a delegation of five officials to inquire of the Lord — and they went to Huldah, not to Jeremiah or Zephaniah who were also active at the time. She authenticated the scroll, confirmed its judgment on Judah, but promised Josiah would die before the disaster came.",
    contemporary_events: "Huldah's consultation in 621 BC is remarkable — a woman was chosen over two active male prophets to authenticate the most important religious document of Josiah's reign.",
    chapters: [
      { book: '2 Kings', chapter: 22, terms: ['Huldah'] },
    ],
  },
  {
    name: 'Gedaliah',
    type: 'official',
    kingdom: 'south',
    verdict: 'good',
    bio: "Son of Ahikam (who had protected Jeremiah), appointed by Nebuchadnezzar as governor over the Judeans remaining in the land after Jerusalem's fall. He governed from Mizpah and urged the remnant to submit to Babylon and work the land in peace. He was assassinated by Ishmael, a royal prince with ties to Ammon, triggering the flight of the remaining population to Egypt.",
    contemporary_events: "Gedaliah's assassination ended the last possibility of a stable Judean remnant in the land. The Jewish calendar observes a fast on the third day of Tishri to commemorate his death.",
    chapters: [
      { book: '2 Kings', chapter: 25, terms: ['Gedaliah'] },
    ],
  },
  {
    name: 'Ben-hadad',
    type: 'foreign_ruler',
    kingdom: 'foreign',
    bio: "The dynastic name/title of multiple kings of Aram-Damascus. Ben-hadad I made a treaty with Asa of Judah. Ben-hadad II besieged Samaria twice — once reduced to begging Ahab's mercy (1 Kings 20), and once causing a famine so severe that women ate their children (2 Kings 6–7). He was killed by Hazael. Ben-hadad III, son of Hazael, was repeatedly defeated by Jehoash fulfilling Elisha's deathbed prophecy.",
    contemporary_events: "Aram-Damascus controlled the trade routes east of the Jordan and repeatedly contested Israel's territory in Gilead.",
    chapters: [
      { book: '1 Kings', chapter: 15, terms: ['Ben-hadad', 'Benhadad'] },
      { book: '1 Kings', chapter: 20, terms: ['Ben-hadad', 'Benhadad'] },
      { book: '2 Kings', chapter: 6, terms: ['Ben-hadad', 'Benhadad'] },
      { book: '2 Kings', chapter: 7, terms: ['Ben-hadad', 'Benhadad'] },
      { book: '2 Kings', chapter: 8, terms: ['Ben-hadad', 'Benhadad'] },
      { book: '2 Kings', chapter: 13, terms: ['Ben-hadad', 'Benhadad'] },
    ],
  },
  {
    name: 'Widow of Zarephath',
    type: 'other',
    kingdom: 'foreign',
    bio: "An unnamed Phoenician widow from Zarephath in Sidon — the heart of Baal country — who encountered Elijah during the drought. She had only enough flour and oil for one last meal for herself and her son before they would starve. Elijah asked for it first. She obeyed, and her flour and oil did not run out until the rain returned. When her son died, Elijah raised him — the first resurrection in Scripture.",
    contemporary_events: "That God sent Elijah to a widow in Jezebel's own homeland — not to an Israelite — is a pointed theological statement. The covenant blessings were flowing to a Gentile while Israel burned incense to Baal.",
    chapters: [
      { book: '1 Kings', chapter: 17, terms: ['widow', 'Zarephath'] },
    ],
  },
]

async function getChapterId(book: string, chapterNum: number, bookMap: Map<string, string>): Promise<string | null> {
  const bookId = bookMap.get(book)
  if (!bookId) return null
  const { data } = await supabase.from('chapters').select('id').eq('book_id', bookId).eq('chapter_number', chapterNum).single()
  return data?.id ?? null
}

async function main() {
  console.log('Seeding supporting people...\n')

  const { data: books } = await supabase.from('books').select('id, name')
  const bookMap = new Map(books?.map(b => [b.name, b.id]) ?? [])

  let peopleAdded = 0
  let peopleSkipped = 0
  let chaptersLinked = 0

  for (const person of PEOPLE) {
    // Check if person already exists
    const { data: existing } = await supabase.from('people').select('id').eq('name', person.name).single()

    let personId: string

    if (existing?.id) {
      personId = existing.id
      console.log(`  EXISTS: ${person.name}`)
      peopleSkipped++
    } else {
      const { data: inserted, error } = await supabase.from('people').insert({
        name: person.name,
        type: person.type,
        kingdom: person.kingdom,
        verdict: person.type === 'king' ? person.verdict : null,
        bio: person.bio,
        contemporary_events: person.contemporary_events,
      }).select('id').single()

      if (error || !inserted) {
        console.error(`  ERROR inserting ${person.name}: ${error?.message}`)
        continue
      }
      personId = inserted.id
      console.log(`  ADDED: ${person.name}`)
      peopleAdded++
    }

    // Link to chapters
    for (const chapterRef of person.chapters) {
      const chapterId = await getChapterId(chapterRef.book, chapterRef.chapter, bookMap)
      if (!chapterId) {
        console.warn(`    SKIP chapter: ${chapterRef.book} ${chapterRef.chapter} not found`)
        continue
      }

      // Check if already linked
      const { data: existingLink } = await supabase
        .from('chapter_people')
        .select('id')
        .eq('chapter_id', chapterId)
        .eq('person_id', personId)
        .single()

      if (existingLink?.id) {
        console.log(`    LINKED already: ${chapterRef.book} ${chapterRef.chapter}`)
        continue
      }

      const { error: linkError } = await supabase.from('chapter_people').insert({
        chapter_id: chapterId,
        person_id: personId,
        tappable_terms: chapterRef.terms,
      })

      if (linkError) {
        console.error(`    ERROR linking to ${chapterRef.book} ${chapterRef.chapter}: ${linkError.message}`)
      } else {
        console.log(`    linked → ${chapterRef.book} ${chapterRef.chapter}`)
        chaptersLinked++
      }
    }
  }

  console.log(`\nDone. Added ${peopleAdded} people, skipped ${peopleSkipped} existing, linked ${chaptersLinked} chapters.`)
}

main().catch(console.error)
