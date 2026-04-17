import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

async function getPersonId(name: string): Promise<string | null> {
  const { data } = await supabase.from('people').select('id').eq('name', name).single()
  return data?.id ?? null
}

const ELIJAH = {
  name: 'Elijah',
  biblical_echo: 'Moses',
  calling_narrative: "Elijah appears without introduction in 1 Kings 17:1 — no birth narrative, no calling scene, just a sudden declaration to Ahab: 'As the LORD God of Israel lives, before whom I stand, there shall be neither dew nor rain these years, except by my word.' His authority is assumed, his arrival as abrupt as a thunder-crack. The Tishbite from Gilead is the answer to the Baal crisis.",
  ministry_summary: "Elijah's ministry spans approximately 870–850 BC during the reigns of Ahab and Ahaziah, the darkest period of the northern kingdom. He is the prophetic counterweight to Ahab and Jezebel's organized Baal worship. His ministry culminates in the Carmel confrontation (1 Kings 18), the Horeb retreat (1 Kings 19), and his ascent in a whirlwind (2 Kings 2). He does not die — he is taken up. His successor Elisha inherits his mantle and his spirit.",
  miracles: [
    { title: 'Drought announcement', chapter_ref: '1 Kings 17:1', description: "Elijah announces a drought in Yahweh's name — a direct covenant curse (Deuteronomy 28:24). The drought lasts three years." },
    { title: 'Fed by ravens at Kerith', chapter_ref: '1 Kings 17:4–6', description: 'God miraculously feeds Elijah at the brook Kerith — bread and meat morning and evening brought by ravens.' },
    { title: "Widow's oil and flour never run out", chapter_ref: '1 Kings 17:14–16', description: "Elijah tells the Zarephath widow her jar of flour and jug of oil will not be exhausted until the drought ends. They are not." },
    { title: "Widow's son raised from death", chapter_ref: '1 Kings 17:21–22', description: "Elijah stretches himself over the widow's dead son three times and prays. The boy's life returns — the first resurrection in Scripture." },
    { title: 'Fire from heaven on Carmel', chapter_ref: '1 Kings 18:38', description: 'Elijah calls fire down on the water-soaked altar on Mount Carmel. The fire consumes the sacrifice, the wood, the stones, the dust, and the water in the trench.' },
    { title: 'Rain after three years of drought', chapter_ref: '1 Kings 18:45', description: "After Elijah prays seven times, a small cloud appears. The sky turns black with clouds and there is a great rain — the drought ends." },
    { title: 'Fire consumes two companies of soldiers', chapter_ref: '2 Kings 1:10–12', description: 'Two captains and their fifty men are consumed by fire from heaven when they demand Elijah come down from the hill.' },
    { title: 'Jordan parted', chapter_ref: '2 Kings 2:8', description: "Elijah strikes the Jordan with his rolled-up mantle and the water parts. He and Elisha cross on dry ground — a final echo of the Exodus." },
    { title: 'Translation to heaven in a whirlwind', chapter_ref: '2 Kings 2:11', description: 'A chariot of fire and horses of fire appear, and Elijah is taken up into heaven in a whirlwind. He does not die — he is translated.' },
  ],
  biblical_parallels: [
    { parallel_figure: 'Moses', this_event: '40 days and nights without food at Horeb (1 Kings 19:8)', parallel_event: 'Moses 40 days and nights on Sinai (Exodus 34:28)', significance: 'Elijah is journeying to the same mountain as Moses for a direct encounter with God. The duration is not coincidental — the author is flagging this as a new Mosaic encounter.' },
    { parallel_figure: 'Moses', this_event: "God passes by Elijah in wind, earthquake, fire, and still small voice (1 Kings 19:11–13)", parallel_event: "God passes by Moses in the cleft of the rock at Horeb (Exodus 33:21–23)", significance: "Both prophets experience God's 'passing by' at the same mountain. God's self-revelation uses the same language in both passages." },
    { parallel_figure: 'Moses', this_event: 'Elijah parts the Jordan with his mantle (2 Kings 2:8)', parallel_event: 'Moses parts the Red Sea with his staff (Exodus 14:21)', significance: 'The mantle is the prophetic equivalent of the staff. Both crossings involve water-parting on dry ground, marking a divine commissioning.' },
    { parallel_figure: 'Moses', this_event: "Elijah's mantle becomes Elisha's (2 Kings 2:13–14)", parallel_event: "Moses' spirit transferred to Joshua (Deuteronomy 34:9, Numbers 27:18)", significance: 'The succession pattern is identical: the great prophet commissions a successor who receives his spirit/mantle and crosses water to begin his own ministry.' },
    { parallel_figure: 'Moses', this_event: 'Elijah taken up without death (2 Kings 2:11)', parallel_event: "Moses buried by God himself — no one knows where (Deuteronomy 34:6)", significance: 'Both figures depart from history without normal deaths. The secrecy and mystery of their departure preserves their unique status.' },
    { parallel_figure: 'Moses', this_event: "Elijah's prayer ends the drought; rain obeys his word (1 Kings 17:1; 18:1)", parallel_event: 'Moses controls water in the wilderness — striking the rock (Exodus 17:6)', significance: 'Both prophets exercise authority over water as covenant mediators. Elijah\'s drought is the Deuteronomic covenant curse working through a prophet.' },
    { parallel_figure: 'Moses', this_event: "Elijah flees from Jezebel's death threat to the wilderness (1 Kings 19:3)", parallel_event: "Moses flees Pharaoh to the Midianite wilderness (Exodus 2:15)", significance: 'Both flee a murderous royal figure to the wilderness, and in both cases God meets them and recommissions them for further prophetic work.' },
  ],
  key_themes: ['Covenant enforcement', 'The prophetic word as God\'s weapon against idolatry', 'Mosaic typology', 'Intercession', 'The remnant of 7,000'],
}

const ELISHA = {
  name: 'Elisha',
  biblical_echo: 'Joshua (and Moses)',
  calling_narrative: "Elisha is called in a field — Elijah throws his mantle over him and walks on without a word (1 Kings 19:19). Elisha runs after him and asks only to say goodbye to his father. He then slaughters his oxen, burns his plowing equipment, and follows Elijah as his servant. He is a farmer who becomes a prophet by receiving a mantle. When Elijah is taken up, Elisha picks up the fallen mantle and becomes Elijah's double — and more. He asks for a double portion of Elijah's spirit (2 Kings 2:9).",
  ministry_summary: "Elisha's ministry spans approximately 850–800 BC across the reigns of Joram, Jehu, Jehoahaz, and Jehoash. He performs at least 14 miracles — twice as many as Elijah, fulfilling the 'double portion' promise. He operates primarily among the poor and the margins of Israelite society: widows, farmers, soldiers. He also counsels kings and plays a decisive role in anointing Hazael and Jehu. His last miracle happens after his death.",
  miracles: [
    { title: 'Jordan parted', chapter_ref: '2 Kings 2:14', description: 'Elisha strikes the Jordan with Elijah\'s mantle and the waters part — confirming his succession just as Elijah divided the Jordan. The prophetic company witnesses it.' },
    { title: "Jericho's water purified", chapter_ref: '2 Kings 2:21', description: "Elisha throws salt into Jericho's spring, healing the water. Jericho is no longer barren. The place of Israel's first conquest in Canaan is renewed." },
    { title: 'Bears and the mocking youths', chapter_ref: '2 Kings 2:24', description: "When youths mock Elisha's baldness and his prophetic authority, he curses them in the LORD's name. Two female bears come and maul 42 of them." },
    { title: 'Water for three armies in the wilderness', chapter_ref: '2 Kings 3:17–20', description: 'Elisha promises water for Judah, Israel, and Edom without wind or rain. The next morning, water comes from Edom and fills the ditches.' },
    { title: "Widow's oil fills every jar", chapter_ref: '2 Kings 4:1–7', description: 'A widow facing debt-slavery asks Elisha for help. He multiplies her one jar of oil until every borrowed vessel is full. She sells the oil and lives.' },
    { title: "Shunammite's son born from barrenness", chapter_ref: '2 Kings 4:16–17', description: "Elisha tells the childless Shunammite woman: 'At this season, about this time next year, you shall embrace a son.' She conceives and bears a son." },
    { title: "Shunammite's son raised from death", chapter_ref: '2 Kings 4:34–35', description: "Elisha lies on the dead child — eyes to eyes, hands to hands — and the child's flesh grows warm. The boy sneezes seven times and opens his eyes." },
    { title: 'Poisoned stew purified', chapter_ref: '2 Kings 4:41', description: "Wild gourds make the prophets' stew deadly. Elisha throws flour into the pot: 'Now pour it out for the men.' There is nothing harmful in the pot." },
    { title: 'Twenty loaves feed one hundred men', chapter_ref: '2 Kings 4:43–44', description: 'A man brings twenty barley loaves. Elisha says feed one hundred men with them. They eat and there is some left — exactly as the LORD said.' },
    { title: 'Naaman healed of leprosy', chapter_ref: '2 Kings 5:10–14', description: "Elisha tells Naaman to dip seven times in the Jordan. Naaman is furious at the simplicity but obeys. His flesh is restored like a little child's." },
    { title: 'Gehazi struck with leprosy', chapter_ref: '2 Kings 5:27', description: "Gehazi takes money from Naaman behind Elisha's back. Elisha pronounces: Naaman's leprosy shall cling to you and your descendants forever. Gehazi comes out leprous." },
    { title: 'Floating axe head', chapter_ref: '2 Kings 6:6', description: 'An iron axe head falls into the Jordan and sinks. Elisha cuts a stick and throws it at the spot. The iron axe head floats.' },
    { title: 'Aramean army blinded and led into Samaria', chapter_ref: '2 Kings 6:18–20', description: "Elisha prays for the Aramean army to be struck blind. He leads them, blind, to Samaria. There he prays again — and their eyes are opened inside the enemy city." },
    { title: 'Resurrection from his grave', chapter_ref: '2 Kings 13:21', description: "A dead man thrown hastily into Elisha's tomb touches his bones and comes back to life. The last Elisha miracle happens after his death — the prophetic word does not end with the prophet." },
  ],
  biblical_parallels: [
    { parallel_figure: 'Joshua', this_event: 'Elisha crosses the Jordan on dry ground, the company of prophets watches (2 Kings 2:14)', parallel_event: "Joshua leads Israel across the Jordan on dry ground (Joshua 3:15–17)", significance: "Both successor figures cross the Jordan at the start of their commissions. Both acts confirm the transfer of authority from the previous leader." },
    { parallel_figure: 'Moses', this_event: "Elisha's double portion of spirit (2 Kings 2:9)", parallel_event: "God takes of the Spirit on Moses and puts it on the seventy elders (Numbers 11:25); Joshua filled with the spirit of wisdom because Moses had laid hands on him (Deuteronomy 34:9)", significance: "The double portion means Elisha is the first-born heir of the prophetic spirit — more than a successor, a firstborn son in the prophetic lineage." },
    { parallel_figure: 'Moses', this_event: "Elisha feeds 100 men with 20 loaves — and there is some left over (2 Kings 4:43–44)", parallel_event: "God feeds Israel with manna in the wilderness (Exodus 16)", significance: "Both are miraculous provision from scarcity. The phrase 'as the LORD has said' connects the miracle explicitly to divine word, not human calculation." },
    { parallel_figure: 'Moses', this_event: "Elisha purifies Jericho's water by throwing in salt (2 Kings 2:21)", parallel_event: "Moses throws a log into Marah's bitter water and it becomes sweet (Exodus 15:25)", significance: "Both healings use a thrown object to purify water. Both are acts of divine provision in the land of Israel — one at the threshold of conquest, one renewing that threshold." },
    { parallel_figure: 'Elijah', this_event: "Elisha raises the Shunammite's son (2 Kings 4:34–35)", parallel_event: "Elijah raises the widow of Zarephath's son (1 Kings 17:21–22)", significance: "The double portion is literal: Elisha performs two resurrections (Shunammite's son, and the man in his grave), while Elijah performed one. The parallel narratives confirm Elisha has the double portion." },
    { parallel_figure: 'Joshua', this_event: "Elisha counsels the king and Israel in war against Aram repeatedly (2 Kings 6–7)", parallel_event: "Joshua leads Israel in military campaigns through divine guidance (Joshua 6–12)", significance: "As Joshua was the military-spiritual leader of Israel in conquest, Elisha plays the same role in Israel's warfare against Aram — the victory belongs to God's prophet, not the general." },
  ],
  key_themes: ['Double portion fulfillment', 'Moses-Joshua typology', 'Ministry to the margins', 'International reach of prophetic power', 'The word outlasting the prophet'],
}

async function main() {
  console.log('Seeding prophet profiles...')

  await supabase.from('prophet_profiles').delete().neq('id', '00000000-0000-0000-0000-000000000000')

  for (const prophet of [ELIJAH, ELISHA]) {
    const personId = await getPersonId(prophet.name)
    if (!personId) {
      console.warn(`SKIP: person '${prophet.name}' not found`)
      continue
    }

    const { error } = await supabase.from('prophet_profiles').insert({
      person_id: personId,
      biblical_echo: prophet.biblical_echo,
      calling_narrative: prophet.calling_narrative,
      ministry_summary: prophet.ministry_summary,
      miracles: prophet.miracles,
      biblical_parallels: prophet.biblical_parallels,
      key_themes: prophet.key_themes,
    })

    if (error) console.error(`ERROR: ${prophet.name} — ${error.message}`)
    else console.log(`Inserted: ${prophet.name}`)
  }

  console.log('Done.')
}

main().catch(console.error)
