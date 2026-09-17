export type LessonConnection = {
  label: 'Parallel Gospel account' | 'Scripture cross-reference' | 'Old Testament background' | 'Thematic parallel' | 'Orthodox study note' | 'Text note'
  references: string
  explanation: string
}

export type MarkLessonSlide = {
  eyebrow: string
  title: string
  passage: string
  summary: string
  details: string[]
  carefulNote?: string
  image?: { src: string; alt: string; caption: string }
  culture?: { title: string; body: string; source?: { label: string; href: string } }[]
  connections: LessonConnection[]
  recall: string[]
}

export const MARK_6_LESSON: MarkLessonSlide[] = [
  {
    eyebrow: 'Chapter map',
    title: 'Who will recognize Jesus?',
    passage: 'Mark 6:1–56',
    summary: 'Mark 6 moves quickly: rejection at home, the Twelve sent out, John’s death, a hungry crowd, a stormy crossing, and healing in Gennesaret.',
    details: [
      'Watch the repeated contrast: some people dismiss Jesus, some fear Him, and others run to Him.',
      'Also watch the disciples. They act with Jesus’ authority, but they are still learning who He is.',
      'Use the Read tab for the story, Connections for deeper study, and Recall for optional quiz practice.',
    ],
    connections: [
      { label: 'Text note', references: 'Mark 6:6, 12, 34, 52, 54', explanation: 'These verses form useful checkpoints: unbelief, repentance, compassion, misunderstanding, and recognition.' },
    ],
    recall: ['Name the six scenes in Mark 6 in order.', 'Which groups recognize Jesus, and which do not?'],
  },
  {
    eyebrow: 'Scene 1',
    title: 'Rejected in His own country',
    passage: 'Mark 6:1–6',
    summary: 'Jesus teaches in the synagogue on the Sabbath. His neighbors are astonished by His wisdom and mighty works, yet familiarity becomes an obstacle: they take offense instead of receiving Him.',
    details: [
      'They identify Him as the carpenter, the son of Mary, and name James, Joses, Judas, Simon, and His sisters.',
      'Jesus says a prophet lacks honor in his own country, among relatives, and at home.',
      'He lays hands on a few sick people and heals them, then marvels at the people’s unbelief and continues teaching in nearby villages.',
    ],
    carefulNote: 'The text does not say their offense came from one particular disagreement with earlier teaching. It emphasizes unbelief rooted in over-familiarity. This passage does not mean God lacks power or that a sick person is to blame for illness.',
    image: { src: '/resources/mark/chapter-6/nazareth-reconstruction.jpg', alt: 'Imagined historical reconstruction of Jesus teaching adults inside a modest Galilean village gathering place', caption: 'Imagined historical reconstruction—not a photograph or an exact reconstruction of Nazareth’s synagogue.' },
    culture: [
      { title: 'A village Sabbath gathering', body: 'Mark places the scene in a synagogue: a local assembly for prayer, Scripture, and teaching. The image uses a restrained village interior because the exact first-century building and furnishings at Nazareth are not established.' },
      { title: '“The carpenter”', body: 'The word can describe a builder or craft worker, not only someone who made furniture. Mark’s point is the neighbors’ familiarity with Jesus and His family, not a detailed job description.' },
    ],
    connections: [
      { label: 'Parallel Gospel account', references: 'Luke 4:16–30; Matthew 13:53–58', explanation: 'The other Gospels also record rejection in Jesus’ hometown. Luke supplies a longer synagogue scene; Matthew closely parallels Mark’s account.' },
      { label: 'Orthodox study note', references: 'Mark 6:5–6', explanation: 'The Orthodox study note supplied for this lesson emphasizes that divine grace is offered to all, while its benefits must be received in faith. It should be read as a call to trust, not as blame placed on suffering people.' },
    ],
    recall: ['What four family details do the neighbors mention?', 'What three places does Jesus name where a prophet may lack honor?'],
  },
  {
    eyebrow: 'Scene 2',
    title: 'The Twelve go two by two',
    passage: 'Mark 6:7–13',
    summary: 'Jesus sends the Twelve in pairs and gives them authority over unclean spirits. Their message and actions extend His mission: repentance, deliverance, anointing, and healing.',
    details: [
      'Take a staff and wear sandals—but no bread, bag, money, or second tunic.',
      'Stay in one house until leaving that place. If people refuse to receive or hear them, shake the dust from their feet as testimony.',
      'They preach repentance, cast out demons, anoint many sick people with oil, and heal them.',
    ],
    carefulNote: 'The Sodom and Gomorrah comparison in Mark 6:11 appears in the NKJV/Orthodox text used here, but is absent from some early manuscripts and therefore from some modern translations. The limited supplies train the Twelve to depend on God and the hospitality they receive; Mark does not say that planning itself is wrong.',
    image: { src: '/resources/mark/chapter-6/twelve-travel-reconstruction.jpg', alt: 'Imagined historical reconstruction of two disciples walking together with staffs and sandals toward a Galilean village', caption: 'Imagined historical reconstruction. Mark names their equipment, but not their route, clothing colors, or destination village.' },
    culture: [
      { title: 'Staff, sandals, and one tunic', body: 'A staff assisted walking on rough ground; sandals protected feet; a second tunic could serve as warmth or bedding. Mark stresses how little they carry: no bread, bag, money, or spare tunic.' },
      { title: 'Hospitality mattered', body: 'Travelers commonly depended on hosts. Staying in one house avoids shopping for a more impressive welcome and keeps the mission focused on the message.' },
    ],
    connections: [
      { label: 'Parallel Gospel account', references: 'Matthew 10:1, 5–15; Luke 9:1–6', explanation: 'Matthew and Luke tell the same sending story with overlapping instructions. Small wording differences should be compared rather than forced into one list.' },
      { label: 'Thematic parallel', references: 'Exodus 12:11; 1 Kings 17:8–16', explanation: 'Staff and sandals can recall readiness for God’s mission, while Elijah’s dependence on a household illustrates provision through hospitality. These are thematic echoes, not references Mark explicitly names.' },
    ],
    recall: ['What could the Twelve take, and what must they leave behind?', 'What four things do they do in verses 12–13?'],
  },
  {
    eyebrow: 'Scene 3',
    title: 'Herod silences John',
    passage: 'Mark 6:14–29',
    summary: 'Reports about Jesus trouble Herod. Mark pauses for a flashback showing how Herod imprisoned and killed John the Baptist after John confronted his unlawful marriage.',
    details: [
      'People suggest Jesus might be John raised, Elijah, or a prophet. Herod fears John has returned.',
      'Herodias resents John, while Herod knows John is righteous and holy, protects him, and listens with confused interest.',
      'At Herod’s birthday feast, Herodias’s daughter dances. Herod makes a public oath; after consulting her mother, she asks for John’s head.',
      'Herod is deeply sorry, but chooses reputation and his oath before the guests over doing what is right. John is executed; his disciples bury him.',
    ],
    carefulNote: 'Herod is not trapped without a choice. Mark preserves his grief while also showing his moral responsibility. The execution is important to the story, but it does not need graphic treatment.',
    image: { src: '/resources/mark/chapter-6/herod-banquet-reconstruction.jpg', alt: 'Imagined historical reconstruction of a distressed Herod Antipas seated among elite banquet guests after hearing a troubling request', caption: 'Imagined historical reconstruction of political pressure at the banquet. John’s death is deliberately not pictured.' },
    culture: [
      { title: 'Herod under Rome', body: 'Herod Antipas governed Galilee and Perea as a Roman-backed tetrarch. Mark calls him “king,” reflecting popular or narrative usage; he was not the Roman emperor. His own officers and Galilean elites—not an invented unit of Roman soldiers—fill Mark’s guest list.', source: { label: 'Bible Odyssey: Herodians', href: 'https://www.bibleodyssey.org/people/main-articles/herodians/' } },
      { title: 'An elite birthday banquet', body: 'Roman-era elite dining displayed status before invited guests. That social setting helps explain Herod’s concern for his oath and reputation, but it does not excuse his decision.', source: { label: 'Metropolitan Museum: The Roman Banquet', href: 'https://www.metmuseum.org/essays/the-roman-banquet' } },
    ],
    connections: [
      { label: 'Scripture cross-reference', references: 'Leviticus 18:16; Matthew 14:1–12; Luke 3:19–20', explanation: 'Leviticus explains John’s rebuke of the marriage. Matthew parallels the death account; Luke briefly records the rebuke and imprisonment.' },
      { label: 'Thematic parallel', references: '1 Kings 19:1–3; 21:5–16', explanation: 'Like Elijah before Ahab and Jezebel, John confronts a ruler and faces a ruler’s wife determined to destroy a prophetic witness. Mark does not state this comparison directly.' },
    ],
    recall: ['Whose birthday is being celebrated?', 'What does Herod know about John, and why does he still give the order?'],
  },
  {
    eyebrow: 'Scene 4A',
    title: 'Rest interrupted by compassion',
    passage: 'Mark 6:30–34',
    summary: 'The apostles return and report what they did and taught. Jesus invites them to rest in a deserted place, but the crowd runs ahead. He responds with compassion and teaches them.',
    details: [
      'So many people are coming and going that Jesus and the apostles do not have time to eat.',
      'They travel by boat, while people from the cities run on foot and arrive first.',
      'Jesus sees people like sheep without a shepherd. Their need changes the plan for solitude, and He teaches them many things.',
    ],
    connections: [
      { label: 'Old Testament background', references: 'Numbers 27:15–17; Ezekiel 34:1–16', explanation: '“Sheep without a shepherd” is biblical leadership language. Moses asks God for a leader so Israel will not be shepherdless; Ezekiel condemns failed shepherds and promises that God Himself will seek His sheep.' },
      { label: 'Thematic parallel', references: 'Psalm 23:1–3', explanation: 'The shepherd who provides rest and food offers a helpful lens for the next scene, though Mark does not quote this psalm here.' },
    ],
    recall: ['Why does Jesus suggest going away?', 'What changes His plan when He reaches the shore?'],
    culture: [
      { title: 'Running around the shore', body: 'Mark says the crowd recognized the departing group and ran on foot from the towns. He does not identify the deserted place, so no exact land route or mileage should be attached to this scene.' },
      { title: 'Rest is part of the story', body: 'The invitation to rest follows demanding travel and teaching. Compassion interrupts the plan, but the text still treats human need for food and rest as real.' },
    ],
  },
  {
    eyebrow: 'Scene 4B',
    title: 'Five loaves, two fish, twelve baskets',
    passage: 'Mark 6:35–44',
    summary: 'In a deserted place late in the day, Jesus tells the disciples to feed the crowd. He blesses and breaks the small meal they find, gives it through the disciples, and everyone eats until satisfied.',
    details: [
      'The disciples ask whether they should buy two hundred denarii of bread; Mark does not say they possessed that amount.',
      'The food is five loaves and two fish. People sit on green grass in groups of hundreds and fifties.',
      'Jesus looks to heaven, blesses, breaks, and gives the food to the disciples to distribute.',
      'All eat and are filled. Twelve baskets of fragments remain. Mark counts about five thousand men; he does not give a total for every person present.',
    ],
    image: { src: '/resources/mark/chapter-6/feeding-reconstruction.jpg', alt: 'Imagined historical reconstruction of disciples distributing bread and small fish to family groups seated on green grass beside the Sea of Galilee', caption: 'Imagined historical reconstruction at an unspecified lakeside setting; Mark does not locate the feeding precisely.' },
    culture: [
      { title: 'Bread, fish, and a shared meal', body: 'Loaves were practical staple food, and fish belonged naturally to life around the lake. The scene image shows distribution after the blessing; it should not be read as an inventory of the original five loaves and two fish.' },
      { title: 'Bless, break, give', body: 'Looking toward heaven and blessing acknowledges God as giver. Jesus breaks the loaves and gives them through the disciples; the repeated actions make the disciples participants in serving the crowd.' },
      { title: 'Groups on green grass', body: 'The groups make a very large crowd manageable and memorable. Mark’s green grass suggests season and setting, but it does not identify an exact modern site.' },
    ],
    connections: [
      { label: 'Thematic parallel', references: '2 Kings 4:42–44', explanation: 'Elisha tells his servant to feed one hundred people with twenty barley loaves. They eat and have some left—an especially close Old Testament pattern of multiplied bread and leftovers.' },
      { label: 'Thematic parallel', references: 'Exodus 16:4–18; Mark 8:1–10', explanation: 'Bread in the wilderness recalls God feeding Israel, and Mark later records a second wilderness feeding. These patterns help readers ask what the disciples should learn about Jesus.' },
    ],
    recall: ['Put these numbers in context: 200, 5, 2, 100, 50, 12, 5,000.', 'Who distributes the food to the crowd?'],
  },
  {
    eyebrow: 'Scene 5',
    title: 'Jesus walks on the sea',
    passage: 'Mark 6:45–52',
    summary: 'Jesus sends the disciples toward Bethsaida, dismisses the crowd, and prays alone. During the fourth watch, He comes across the sea as they strain against the wind.',
    details: [
      'The boat is in the middle of the sea while Jesus is alone on land. He sees them struggling to row.',
      'He walks on the sea and “would have passed them by.” They think He is a ghost and cry out.',
      'Jesus immediately says, “Be of good cheer! It is I; do not be afraid.” He enters the boat, and the wind stops.',
      'Mark links their amazement to the previous miracle: they did not understand the loaves, and their hearts were hardened.',
    ],
    carefulNote: 'Mark names the intended direction as Bethsaida and the eventual landing as Gennesaret, but does not explain the route. The phrase “passed them by” can echo biblical appearances of God’s glory; that is interpretation, not a claim that Jesus meant to abandon them.',
    image: { src: '/resources/mark/chapter-6/sea-reconstruction.jpg', alt: 'Imagined historical reconstruction of disciples straining at oars in a wooden boat at night while a distant figure approaches across the Sea of Galilee', caption: 'Imagined historical reconstruction. The exact position on the lake, boat appearance, weather, and route are not known.' },
    culture: [
      { title: 'A working lake boat', body: 'A discovered Roman-period Sea of Galilee boat confirms local construction with reused timbers from several tree types. It helps supply scale and technology, but it cannot be identified as this boat or as belonging to Jesus’ disciples.', source: { label: 'Israel Antiquities Authority: Ancient Galilee boat timbers', href: 'https://publications.iaa.org.il/atiqot/vol50/iss1/13/' } },
      { title: 'The fourth watch', body: 'Under Roman night-reckoning, the fourth watch is the final part of the night, roughly 3–6 a.m. Mark’s point is that the disciples have struggled for hours before Jesus comes.' },
    ],
    connections: [
      { label: 'Old Testament background', references: 'Job 9:8; Psalm 77:19', explanation: 'Israel’s Scriptures describe God as treading the waves and making a path through the sea. Mark’s scene uses imagery associated with divine authority over the waters.' },
      { label: 'Thematic parallel', references: 'Exodus 33:18–23; 1 Kings 19:11–13', explanation: 'God “passes by” Moses and Elijah in moments of revelation. Many interpreters hear that echo in Mark 6:48, but Mark does not quote either passage.' },
      { label: 'Parallel Gospel account', references: 'Matthew 14:22–33; John 6:15–21', explanation: 'Matthew includes Peter walking toward Jesus; John also connects the crossing with the feeding. Mark focuses on the disciples’ fear and failure to understand the loaves.' },
    ],
    recall: ['What is Jesus doing while the disciples cross?', 'What three unusual details does Mark include in verses 48 and 52?'],
  },
  {
    eyebrow: 'Scene 6',
    title: 'Recognized in Gennesaret',
    passage: 'Mark 6:53–56',
    summary: 'After landing at Gennesaret, Jesus is immediately recognized. People carry the sick from across the region and seek even to touch the hem of His garment.',
    details: [
      'The search spreads through the whole surrounding region.',
      'People bring the sick on beds wherever they hear Jesus is.',
      'In villages, cities, and the countryside, the sick are placed in marketplaces. Those who touch Him are made well.',
    ],
    culture: [
      { title: 'Gennesaret', body: 'Gennesaret refers to the fertile plain on the lake’s northwestern shore. The modern Ginosar area preserves the name; this is a regional identification, not a claim that every healing occurred at one pin.' },
      { title: 'The garment’s hem', body: 'The crowd’s desire to touch Jesus’ garment echoes the woman in Mark 5. The healing comes from Jesus; the cloth is not presented as an independent magical object.' },
    ],
    connections: [
      { label: 'Scripture cross-reference', references: 'Mark 5:25–34; Matthew 14:34–36', explanation: 'The desire to touch Jesus’ garment recalls the woman healed in Mark 5. Matthew’s parallel account also names Gennesaret and the garment’s hem.' },
      { label: 'Thematic parallel', references: 'Malachi 4:2', explanation: 'The promise of healing associated with the coming “Sun of Righteousness” is sometimes connected to Jesus’ healing ministry. Mark does not cite it here.' },
    ],
    recall: ['Where do they land?', 'List the three kinds of places named in verse 56.'],
  },
  {
    eyebrow: 'Chapter review',
    title: 'The Mark 6 memory path',
    passage: 'Mark 6:1–56',
    summary: 'Use one keyword and one number set for each scene. Retell the chapter aloud before answering the questions.',
    details: [
      'Nazareth — familiarity and unbelief (1–6).',
      'Sent — two by two, traveling light (7–13).',
      'Herod — fear, compromise, and John’s faithfulness (14–29).',
      'Compassion — sheep without a shepherd (30–34).',
      'Bread — 5 + 2, groups, 12 baskets, about 5,000 men (35–44).',
      'Sea — prayer, fourth watch, fear, wind stops, loaves not understood (45–52).',
      'Gennesaret — recognized, carried, touched, healed (53–56).',
    ],
    connections: [
      { label: 'Text note', references: 'Mark 6:1–56', explanation: 'A strong retelling distinguishes what the text states from connections that help explain it. References are memory aids, not replacements for reading the chapter.' },
    ],
    recall: ['Retell all six scenes without looking.', 'Where does Mark show unbelief or misunderstanding? Where does he show trust or recognition?', 'Which Old Testament connection helped you understand the chapter most, and why?'],
  },
]
