import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const THEMES = [
  { name: 'Covenant Faithfulness', description: 'How Israel keeps or breaks the binding agreement made at Sinai. The covenant is the lens through which every king is judged.', color_hex: '#10b981', icon: 'shield' },
  { name: 'High Places', description: 'Unauthorized hilltop shrines where Baal and Asherah were worshipped, or where Yahweh was worshipped wrongly. Almost every king is judged by whether these were removed.', color_hex: '#ef4444', icon: 'flame' },
  { name: 'The Prophetic Word', description: "God always speaks before he acts. The prophets announce what God will do — and it always comes to pass. Kings is built to make this pattern unmissable.", color_hex: '#8b5cf6', icon: 'book-open' },
  { name: 'Temple & Presence', description: "The temple is where God's name dwells among Israel. Its construction, corruption, repair, and destruction mark the turning points of the story.", color_hex: '#f59e0b', icon: 'building' },
  { name: 'Kingship Theology', description: 'The king represents the whole people before God. When the king is faithful, the nation flourishes. When the king sins, the nation suffers the consequences.', color_hex: '#3b82f6', icon: 'crown' },
  { name: 'Exile as Consequence', description: "The threatened covenant curse of Deuteronomy 28 slowly becoming reality. Every act of disobedience is a step closer to the exile that Sinai warned about.", color_hex: '#6b7280', icon: 'map-pin-off' },
  { name: 'Reform & Renewal', description: "Moments when a king or prophet tears down the high places, restores Torah, and calls the nation back. These are the bright spots — and reveal how dark the rest is.", color_hex: '#06b6d4', icon: 'refresh' },
  { name: 'Foreign Entanglements', description: "Alliances with pagan nations, intermarriage with foreign royalty, and syncretism with their gods. The gateway through which most of Israel's apostasy enters.", color_hex: '#f97316', icon: 'globe' },
]

// Per-chapter theme assignments: [book, chapter, themeNames[], note]
type Assignment = [string, number, string[], string]

const assignments: Assignment[] = [
  // 1 Kings 1
  ['1 Kings', 1, ['Kingship Theology'], 'The succession crisis around David reveals the fragility of the Davidic dynasty and the importance of the king as covenant representative.'],
  // 1 Kings 2
  ['1 Kings', 2, ['Covenant Faithfulness', 'Kingship Theology'], "Solomon's charge from David: keep God's statutes as written in Moses' Torah. This is the covenant lens for his whole reign."],
  // 1 Kings 3
  ['1 Kings', 3, ['Covenant Faithfulness', 'The Prophetic Word'], "God offers Solomon whatever he wishes — Solomon asks for wisdom to govern. This is the model of covenant faithfulness: seeking God's ways."],
  // 1 Kings 4
  ['1 Kings', 4, ['Covenant Faithfulness'], "Solomon's administration and Israel's prosperity mirror the Deuteronomic blessing for obedience: every man under his vine and fig tree."],
  // 1 Kings 5
  ['1 Kings', 5, ['Temple & Presence', 'Foreign Entanglements'], "Preparations for the temple use Phoenician materials and labor — a sign of Solomon's international connections, helpful here but a pattern that will corrupt later."],
  // 1 Kings 6
  ['1 Kings', 6, ['Temple & Presence', 'Covenant Faithfulness'], "God's conditional promise embedded in the temple construction: if you obey my statutes, I will dwell among you. The temple is not magic — it requires covenant fidelity."],
  // 1 Kings 7
  ['1 Kings', 7, ['Temple & Presence'], "The temple furnishings — the bronze sea, the pillars, the lavers — are sacred objects that will be carried to Babylon centuries later when the covenant is finally broken."],
  // 1 Kings 8
  ['1 Kings', 8, ['Temple & Presence', 'Covenant Faithfulness', 'Exile as Consequence'], "The theological center of both books. Solomon's prayer explicitly anticipates exile and asks God to be responsive when his exiled people repent. The whole story is previewed here."],
  // 1 Kings 9
  ['1 Kings', 9, ['Covenant Faithfulness', 'Exile as Consequence'], "God's second appearance with the stark warning: if you turn aside, I will cut off Israel from the land. The condition is named before it is broken."],
  // 1 Kings 10
  ['1 Kings', 10, ['Kingship Theology', 'Foreign Entanglements'], "Solomon's glory peaks: the Queen of Sheba, unprecedented wealth, unmatched wisdom. But the foreign queen and the accumulated wealth are precursors to what chapter 11 reveals."],
  // 1 Kings 11
  ['1 Kings', 11, ['Covenant Faithfulness', 'High Places', 'Foreign Entanglements', 'Kingship Theology'], "The fracture. Solomon's foreign wives turn his heart to other gods. He builds high places for Chemosh and Molech. The covenant is broken by the most gifted king."],
  // 1 Kings 12
  ['1 Kings', 12, ['High Places', 'Kingship Theology', 'Covenant Faithfulness'], "Jeroboam's golden calves establish the pattern for every northern king: he made Israel to sin. The 'high place' sin is institutionalized at the national level."],
  // 1 Kings 13
  ['1 Kings', 13, ['The Prophetic Word', 'High Places'], "The man of God's prophecy about Josiah is the longest-range prophecy in Kings — spoken 300 years before its fulfillment. The prophetic word operates on God's timescale."],
  // 1 Kings 14
  ['1 Kings', 14, ['The Prophetic Word', 'Kingship Theology', 'High Places'], "Ahijah's verdict on Jeroboam: you have done more evil than all before you. The king as representative means the nation bears his sin."],
  // 1 Kings 15
  ['1 Kings', 15, ['Covenant Faithfulness', 'High Places', 'Reform & Renewal'], "Asa of Judah removes the idols and deposes his grandmother for her Asherah pole — partial reform. He did right in the LORD's eyes, though the high places remained."],
  // 1 Kings 16
  ['1 Kings', 16, ['High Places', 'Kingship Theology', 'Foreign Entanglements'], "Ahab's marriage to Jezebel and the Baal temple in Samaria: more evil than all before him. Foreign entanglement directly produces the worst king yet."],
  // 1 Kings 17
  ['1 Kings', 17, ['The Prophetic Word', 'Covenant Faithfulness'], "Elijah announces the drought — the covenant curse for unfaithfulness (Deuteronomy 28:24). God's word through the prophet activates the covenant consequence."],
  // 1 Kings 18
  ['1 Kings', 18, ['The Prophetic Word', 'High Places', 'Covenant Faithfulness', 'Reform & Renewal'], "The confrontation on Carmel: the prophetic word against Baal, the dramatic vindication of Yahweh, the call to return. The greatest renewal attempt in the North."],
  // 1 Kings 19
  ['1 Kings', 19, ['The Prophetic Word', 'Covenant Faithfulness'], "Elijah's Horeb experience: God is not in the wind or fire but in the still small voice. The prophetic commission continues even when the prophet collapses."],
  // 1 Kings 20
  ['1 Kings', 20, ['The Prophetic Word', 'Kingship Theology'], "Ahab's foolish mercy toward Ben-Hadad after God gave him into Israel's hands. The king who spares what God condemned condemns himself."],
  // 1 Kings 21
  ['1 Kings', 21, ['The Prophetic Word', 'Kingship Theology', 'Covenant Faithfulness'], "Naboth's vineyard: Jezebel uses royal power to kill an innocent man. Elijah's threefold prophecy against Ahab and Jezebel shows the prophetic word as covenant justice."],
  // 1 Kings 22
  ['1 Kings', 22, ['The Prophetic Word', 'Kingship Theology'], "Micaiah's vision and Ahab's death. The 400 false prophets lie; one true prophet speaks; the king dies exactly as prophesied. God's word cannot be outmaneuvered."],
  // 2 Kings 1
  ['2 Kings', 1, ['The Prophetic Word', 'Covenant Faithfulness'], "Ahaziah consults Baal-Zebub — is there no God in Israel? Elijah's triple fire from heaven and his prophecy of Ahaziah's death: covenant breach is met with covenant consequence."],
  // 2 Kings 2
  ['2 Kings', 2, ['The Prophetic Word', 'Covenant Faithfulness'], "Elijah's translation and Elisha's succession. The double portion of the Spirit. The prophetic word does not die with the prophet — it continues through the one who succeeds him."],
  // 2 Kings 3
  ['2 Kings', 3, ['The Prophetic Word'], "Elisha prophesies water and victory. God works through the prophet even in ambiguous military situations. The prophetic word is the decisive factor."],
  // 2 Kings 4
  ['2 Kings', 4, ['The Prophetic Word', 'Covenant Faithfulness'], "Elisha's cycle of miracles: widow's oil, Shunammite's son raised. The prophet as Moses-figure providing supernatural care for the faithful poor of Israel."],
  // 2 Kings 5
  ['2 Kings', 5, ['The Prophetic Word', 'Covenant Faithfulness', 'Foreign Entanglements'], "Naaman the Aramean is healed — a foreigner believes while Israel's king panics. God's blessing extends beyond Israel's borders. Gehazi's greed contrasts with Elisha's purity."],
  // 2 Kings 6
  ['2 Kings', 6, ['The Prophetic Word', 'Covenant Faithfulness'], "Elisha sees the heavenly army surrounding Dothan. The prophet's insight into God's protection is the antidote to fear. The Lord's unseen forces protect his servant."],
  // 2 Kings 7
  ['2 Kings', 7, ['The Prophetic Word'], "Elisha promises cheap food tomorrow; the scoffing officer is trampled. The prophetic word comes to pass exactly — including the detail of judgment on the doubter."],
  // 2 Kings 8
  ['2 Kings', 8, ['The Prophetic Word', 'Kingship Theology'], "Hazael anointed king of Aram — God's judgment on Israel executed through a foreign nation. Elisha weeps knowing what Hazael will do to Israel's children."],
  // 2 Kings 9
  ['2 Kings', 9, ['The Prophetic Word', 'Covenant Faithfulness'], "Jehu's anointing and purge: Joram killed, Jezebel thrown from a window and eaten by dogs. Three long-standing prophecies fulfilled in rapid succession."],
  // 2 Kings 10
  ['2 Kings', 10, ['High Places', 'The Prophetic Word', 'Reform & Renewal'], "Jehu destroys Baal worship — a partial reform. But he does not depart from the sins of Jeroboam. Half-obedience: he removes one idol and keeps another."],
  // 2 Kings 11
  ['2 Kings', 11, ['Kingship Theology', 'Temple & Presence'], "Athaliah seizes the throne; baby Joash hidden in the temple. The Davidic line preserved by one act of courage in the house of God. The temple as place of refuge."],
  // 2 Kings 12
  ['2 Kings', 12, ['Temple & Presence', 'Reform & Renewal', 'High Places'], "Joash repairs the temple — genuine reform. But the high places remain. And he buys off Hazael with temple treasures when threatened. Reform is incomplete and fragile."],
  // 2 Kings 13
  ['2 Kings', 13, ['The Prophetic Word', 'Covenant Faithfulness'], "Elisha's final prophecy: the arrows of victory. His bones raise a dead man. Even in death, the prophet's power persists. God's word and grace do not retire."],
  // 2 Kings 14
  ['2 Kings', 14, ['Kingship Theology', 'Covenant Faithfulness'], "Jeroboam II restores Israel's territory — prosperity without faithfulness. God delivers Israel not because they deserve it but because he has not yet said he would blot them out."],
  // 2 Kings 15
  ['2 Kings', 15, ['Kingship Theology', 'Exile as Consequence', 'The Prophetic Word'], "Six kings in one chapter; four dynasties destroyed by coup. The North is in free fall. Zechariah's death fulfills Jehu's four-generation promise exactly."],
  // 2 Kings 16
  ['2 Kings', 16, ['Foreign Entanglements', 'High Places', 'Temple & Presence'], "Ahaz makes himself a vassal of Assyria and replaces the temple altar with a Syrian model. Foreign entanglement corrupts even the worship space."],
  // 2 Kings 17
  ['2 Kings', 17, ['Exile as Consequence', 'Covenant Faithfulness', 'High Places', 'The Prophetic Word', 'Foreign Entanglements'], "The theological verdict on the North. The author stops the narrative to explain exactly why Israel fell: they broke the covenant, worshipped other gods, and ignored every prophet. The Deuteronomic framework is made explicit."],
  // 2 Kings 18
  ['2 Kings', 18, ['Covenant Faithfulness', 'Reform & Renewal', 'High Places'], "Hezekiah removes the high places and breaks the bronze serpent Moses made. The most thorough reform since David. He trusts God rather than paying tribute to Assyria."],
  // 2 Kings 19
  ['2 Kings', 19, ['The Prophetic Word', 'Covenant Faithfulness', 'Temple & Presence'], "Hezekiah spreads Sennacherib's letter before God in the temple and prays. Isaiah's prophecy is exact and detailed. The angel kills 185,000. Covenant prayer answered with covenant rescue."],
  // 2 Kings 20
  ['2 Kings', 20, ['The Prophetic Word', 'Covenant Faithfulness', 'Exile as Consequence'], "Hezekiah's prayer extends his life 15 years. But his pride in showing Babylon everything plants the seed of the Babylonian exile — Isaiah names it precisely."],
  // 2 Kings 21
  ['2 Kings', 21, ['High Places', 'Kingship Theology', 'Exile as Consequence'], "Manasseh's 55-year catastrophe: rebuilt every high place Hezekiah demolished, sacrificed his son to Molech, shed innocent blood. God declares the exile is now inevitable."],
  // 2 Kings 22
  ['2 Kings', 22, ['Covenant Faithfulness', 'The Prophetic Word', 'Reform & Renewal'], "Josiah finds the Torah scroll and tears his clothes. Huldah the prophet confirms disaster is coming — but Josiah will be spared. The prophetic word both threatens and comforts."],
  // 2 Kings 23
  ['2 Kings', 23, ['Reform & Renewal', 'High Places', 'Covenant Faithfulness', 'The Prophetic Word'], "The greatest reform in 1 & 2 Kings: Josiah tears down every high place, defiles Bethel, destroys Asherah poles. But verse 26: even this cannot undo what Manasseh did. Too late."],
  // 2 Kings 24
  ['2 Kings', 24, ['Exile as Consequence', 'Kingship Theology'], "The first wave of exile: Jehoiachin and the best of Judah taken to Babylon. What Isaiah prophesied to Hezekiah is now beginning. The covenant curse arrives."],
  // 2 Kings 25
  ['2 Kings', 25, ['Exile as Consequence', 'Temple & Presence', 'Covenant Faithfulness'], "The temple burned, walls broken, people exiled. The covenant curse of Deuteronomy 28 has arrived in full. But the book ends with Jehoiachin lifted up — a small ember of hope."],
]

async function getChapterId(book: string, chapter: number): Promise<string | null> {
  const { data: bookRow } = await supabase.from('books').select('id').eq('name', book).single()
  if (!bookRow) return null
  const { data: chapterRow } = await supabase.from('chapters').select('id').eq('book_id', bookRow.id).eq('chapter_number', chapter).single()
  return chapterRow?.id ?? null
}

async function main() {
  console.log('Seeding themes...')

  // Clear existing
  await supabase.from('chapter_themes').delete().neq('id', '00000000-0000-0000-0000-000000000000')
  await supabase.from('themes').delete().neq('id', '00000000-0000-0000-0000-000000000000')

  // Insert themes
  const { data: insertedThemes, error: themesError } = await supabase
    .from('themes')
    .insert(THEMES)
    .select('id, name')

  if (themesError || !insertedThemes) {
    console.error('Failed to insert themes:', themesError?.message)
    return
  }

  const themeIdMap = new Map(insertedThemes.map((t: { id: string; name: string }) => [t.name, t.id]))
  console.log(`Inserted ${insertedThemes.length} themes.`)

  // Insert chapter_themes
  let inserted = 0
  for (const [book, chapter, themeNames, note] of assignments) {
    const chapterId = await getChapterId(book, chapter)
    if (!chapterId) { console.warn(`SKIP: ${book} ${chapter}`); continue }

    for (const themeName of themeNames) {
      const themeId = themeIdMap.get(themeName)
      if (!themeId) { console.warn(`SKIP theme: ${themeName}`); continue }

      const { error } = await supabase.from('chapter_themes').insert({
        chapter_id: chapterId,
        theme_id: themeId,
        note,
      })
      if (error) console.error(`ERROR: ${book} ${chapter} / ${themeName} — ${error.message}`)
      else inserted++
    }
  }

  console.log(`Done. Inserted ${inserted} chapter_theme records.`)
}

main().catch(console.error)
