export type SceneEnergy = 'setup' | 'tension' | 'climax' | 'resolution' | 'failure'

export type Scene = {
  number: number
  icon: string
  title: string
  summary: string
  energy: SceneEnergy
  wide?: boolean
}

export type StoryConnection = {
  direction: 'back' | 'forward'
  label: string
  bookSlug: string
  chapter: number
  note: string
}

export type StoryMapData = {
  chapterRef: string
  title: string
  logline: string
  scenes: Scene[]
  connections: StoryConnection[]
}

// ─── All 47 chapters ─────────────────────────────────────────────────────────

export const STORY_MAP_DATA: Record<string, StoryMapData> = {

  // ══════════════════════════════════════════════════════════════════
  // 1 KINGS
  // ══════════════════════════════════════════════════════════════════

  '1-kings-1': {
    chapterRef: '1 Kings 1',
    title: 'The Succession Crisis',
    logline: 'King David is dying. His son Adonijah seizes the moment — but a prophet and a mother have other plans.',
    scenes: [
      { number: 1, icon: '👴', title: 'David Fades', summary: 'David is old and cannot get warm. Abishag the Shunammite is brought to care for him. The king who conquered empires cannot heat his own body.', energy: 'setup' },
      { number: 2, icon: '👑', title: "Adonijah's Grab", summary: "Without asking his father, Adonijah prepares chariots and riders and proclaims himself king at En-rogel. Joab and Abiathar support him. No one has stopped him — yet.", energy: 'tension' },
      { number: 3, icon: '🤫', title: "Nathan's Plan", summary: 'The prophet Nathan coaches Bathsheba: go to David, remind him of his oath to make Solomon king, and I will follow to confirm it. A carefully staged intervention.', energy: 'tension' },
      { number: 4, icon: '🌊', title: 'Anointed at Gihon', summary: 'David acts. Solomon rides the royal mule to Gihon and is anointed by Zadok. The trumpet sounds. All the people follow him rejoicing. The city shakes with the sound.', energy: 'climax', wide: true },
      { number: 5, icon: '🏛️', title: 'Adonijah Clings to the Altar', summary: "Adonijah hears the noise and grabs the horns of the altar. Solomon spares him — 'if he proves worthy.' A conditional mercy that won't last.", energy: 'resolution' },
    ],
    connections: [
      { direction: 'forward', label: '1 Kings 2', bookSlug: '1-kings', chapter: 2, note: "David's deathbed instructions include a hit list. Solomon follows it precisely." },
    ],
  },

  '1-kings-2': {
    chapterRef: '1 Kings 2',
    title: 'Solomon Settles Accounts',
    logline: "David's dying instructions are a hit list. Solomon follows them precisely — and the kingdom is firmly his hands.",
    scenes: [
      { number: 1, icon: '📜', title: "David's Last Words", summary: 'Keep the covenant and walk in God\'s ways. But also: Joab killed two men of war in peacetime. Shimei cursed me. Do not let them die in peace.', energy: 'setup' },
      { number: 2, icon: '💍', title: "Adonijah's Fatal Ask", summary: "Adonijah asks Bathsheba to petition Solomon for Abishag as his wife. Solomon reads it instantly as a bid for the throne. 'Ask for the kingdom for him also.'", energy: 'tension' },
      { number: 3, icon: '⚔️', title: 'Joab Killed at the Altar', summary: 'Joab flees to the tabernacle and grabs the horns of the altar. Benaiah hesitates. Solomon: strike him down. Joab is killed at the altar — where he fled for sanctuary.', energy: 'climax', wide: true },
      { number: 4, icon: '📯', title: 'Abiathar Exiled, Shimei Executed', summary: 'Abiathar is exiled to Anathoth — fulfilling the prophecy against the house of Eli. Shimei leaves Jerusalem to chase his servants, breaking his oath. He is killed.', energy: 'resolution' },
      { number: 5, icon: '🏛️', title: 'Kingdom Established', summary: '"The kingdom was established in the hand of Solomon." Every threat from the previous generation is gone.', energy: 'resolution' },
    ],
    connections: [
      { direction: 'back', label: '1 Kings 1', bookSlug: '1-kings', chapter: 1, note: 'Adonijah seized the throne; David named Solomon instead' },
      { direction: 'forward', label: '1 Kings 3', bookSlug: '1-kings', chapter: 3, note: 'Solomon turns to building and wisdom — the golden era begins' },
    ],
  },

  '1-kings-3': {
    chapterRef: '1 Kings 3',
    title: 'The Wisdom Gift',
    logline: "God offers Solomon anything. He asks for the one thing that will define his reign — and gets everything else as a bonus.",
    scenes: [
      { number: 1, icon: '💍', title: "Pharaoh's Daughter", summary: "Solomon marries Pharaoh's daughter and brings her to the City of David. He also worships at the high places — because no temple yet. A future problem planted in the opening lines.", energy: 'setup' },
      { number: 2, icon: '🌙', title: 'God Appears at Gibeon', summary: '"Ask what I shall give you." God appears in a dream at the great high place of Gibeon. The most open-ended divine offer in scripture.', energy: 'climax', wide: true },
      { number: 3, icon: '🧠', title: 'Solomon Asks for Wisdom', summary: 'Not riches, not long life, not victory over enemies. "Give your servant an understanding mind to govern your people, to discern between good and evil."', energy: 'climax' },
      { number: 4, icon: '✅', title: 'God Says Yes — and More', summary: "Wisdom granted. And because he didn't ask for riches or long life, those come too. If he walks in God's ways, he will also have long life.", energy: 'resolution' },
      { number: 5, icon: '👶', title: 'Two Mothers, One Baby', summary: "Wisdom demonstrated immediately. Two women, one baby, each claiming the child. Solomon: cut the baby in half. The real mother gives up her claim to save her child. Solomon knows.", energy: 'resolution' },
    ],
    connections: [
      { direction: 'back', label: '1 Kings 2', bookSlug: '1-kings', chapter: 2, note: 'Kingdom secured; Solomon now builds' },
      { direction: 'forward', label: '1 Kings 4', bookSlug: '1-kings', chapter: 4, note: "Solomon's administration at its peak" },
    ],
  },

  '1-kings-4': {
    chapterRef: '1 Kings 4',
    title: "Solomon's Empire",
    logline: "The kingdom hums like a machine. Twelve governors, vast territory, inexhaustible provision — and wisdom that draws the world to Jerusalem.",
    scenes: [
      { number: 1, icon: '🗺️', title: 'Twelve Districts', summary: 'Twelve governors, each responsible for one month of royal provisions. The administrative machine is elegant, efficient, and total.', energy: 'setup' },
      { number: 2, icon: '🌍', title: 'The Full Territory', summary: 'From the Euphrates to the land of the Philistines to the border of Egypt — the full Abrahamic promise, temporarily realized. Every nation under Solomon brings tribute.', energy: 'setup' },
      { number: 3, icon: '🐴', title: 'Military Power', summary: '40,000 stalls for horses, 12,000 horsemen. The Deuteronomy 17 warning against multiplying horses is visible in the background — Solomon is already walking the line.', energy: 'tension' },
      { number: 4, icon: '🦁', title: 'Wisdom Beyond Measure', summary: "3,000 proverbs, 1,005 songs. Solomon speaks of trees, animals, reptiles, fish. Kings from every nation send envoys just to hear him. His wisdom surpasses all the east.", energy: 'climax', wide: true },
      { number: 5, icon: '🍽️', title: 'Daily Provision', summary: 'Judah and Israel are as numerous as sand by the sea, eating and drinking and rejoicing. Solomon reigns over all kingdoms from the Euphrates to Egypt.', energy: 'resolution' },
    ],
    connections: [
      { direction: 'back', label: '1 Kings 3', bookSlug: '1-kings', chapter: 3, note: "Wisdom granted; now it's on display" },
      { direction: 'forward', label: '1 Kings 5', bookSlug: '1-kings', chapter: 5, note: 'Solomon turns the empire toward building the temple' },
    ],
  },

  '1-kings-5': {
    chapterRef: '1 Kings 5',
    title: 'The Temple Bargain',
    logline: "Solomon strikes a deal with Hiram of Tyre. Cedar from Lebanon, labor from Israel — for the house David was never allowed to build.",
    scenes: [
      { number: 1, icon: '🤝', title: "Hiram's Alliance", summary: "Hiram of Tyre loved David and sends envoys to Solomon. Solomon replies: I want to build the temple my father couldn't. Will you help?", energy: 'setup' },
      { number: 2, icon: '🌲', title: 'The Cedar Deal', summary: 'Hiram supplies cedar and cypress logs from Lebanon, floated down the coast. Solomon pays wheat and olive oil annually. A precise, mutually beneficial arrangement.', energy: 'setup' },
      { number: 3, icon: '⚒️', title: 'The Scale of Labor', summary: '30,000 Israelites sent to Lebanon in rotating shifts of 10,000 per month. 80,000 stonecutters in the hill country. 70,000 burden bearers. A national mobilization.', energy: 'tension' },
      { number: 4, icon: '🪨', title: 'Quarried in Silence', summary: 'Stone dressed at the quarry with such precision that no hammer, chisel, or iron tool will be heard at the temple site. The building arrives already finished.', energy: 'climax', wide: true },
      { number: 5, icon: '🕊️', title: 'Peace and Agreement', summary: '"The LORD gave Solomon wisdom as he promised. There was peace between Hiram and Solomon, and the two of them made a treaty."', energy: 'resolution' },
    ],
    connections: [
      { direction: 'back', label: '1 Kings 4', bookSlug: '1-kings', chapter: 4, note: 'Empire established; now Solomon turns to building' },
      { direction: 'forward', label: '1 Kings 6', bookSlug: '1-kings', chapter: 6, note: 'Construction of the temple begins' },
    ],
  },

  '1-kings-6': {
    chapterRef: '1 Kings 6',
    title: 'The House of God',
    logline: "Every surface covered in cedar and gold. Every dimension precise. God makes one condition: obey me, and I will dwell here.",
    scenes: [
      { number: 1, icon: '📏', title: 'Construction Begins', summary: '480 years after the exodus, in Solomon\'s 4th year. 60 cubits long, 20 wide, 30 high. The proportions of the universe compressed into a building.', energy: 'setup' },
      { number: 2, icon: '🌲', title: 'Cedar Everywhere', summary: 'No stone visible inside — every wall lined with cedar. The floor: cypress. Walls carved with gourds and open flowers. The whole interior enclosed in wood.', energy: 'setup' },
      { number: 3, icon: '✨', title: 'God Speaks Mid-Construction', summary: '"If you will walk in my statutes and observe my rules and keep all my commandments... I will dwell among the children of Israel." The temple is conditional from the beginning.', energy: 'climax', wide: true },
      { number: 4, icon: '🏠', title: 'The Most Holy Place', summary: 'A perfect cube — 20 cubits in each direction — overlaid entirely in gold. Two cherubim of olive wood, 10 cubits tall, wings spanning the full width of the room.', energy: 'climax' },
      { number: 5, icon: '🪙', title: 'Seven Years', summary: 'Construction takes 7 years. Every surface — floor, walls, ceiling — covered in gold. No stone left bare. The most expensive building in Israel\'s history, finished in silence.', energy: 'resolution' },
    ],
    connections: [
      { direction: 'back', label: '1 Kings 5', bookSlug: '1-kings', chapter: 5, note: 'Materials secured from Hiram of Tyre' },
      { direction: 'forward', label: '1 Kings 7', bookSlug: '1-kings', chapter: 7, note: "Solomon's palace and the bronze furnishings" },
    ],
  },

  '1-kings-7': {
    chapterRef: '1 Kings 7',
    title: 'Bronze and Pillars',
    logline: "The temple took 7 years. Solomon's palace takes 13. Then the craftsman Hiram fills the temple courts with magnificent bronze.",
    scenes: [
      { number: 1, icon: '🏛️', title: "Solomon's Palace Complex", summary: 'The House of the Forest of Lebanon, the Hall of Pillars, the Throne Hall. 13 years of construction — more time than the temple. A deliberate statement of royal power.', energy: 'tension' },
      { number: 2, icon: '🔧', title: 'Hiram the Craftsman', summary: 'Solomon summons Hiram from Tyre — not the king, but a craftsman: son of a widow from Naphtali, filled with skill and understanding. He does all the bronze work.', energy: 'setup' },
      { number: 3, icon: '🏛️', title: 'Jachin and Boaz', summary: "Two bronze pillars at the temple entrance, 18 cubits tall. Jachin: 'He establishes.' Boaz: 'In him is strength.' Every worshipper enters between these names.", energy: 'setup' },
      { number: 4, icon: '🌊', title: 'The Bronze Sea', summary: 'A circular basin 10 cubits across, resting on 12 bronze oxen facing the four directions. Holds 2,000 baths of water. The largest piece of metalwork in the ancient near east.', energy: 'climax', wide: true },
      { number: 5, icon: '🪙', title: 'The Complete Inventory', summary: 'Stands, basins, pots, shovels, bowls — all polished bronze. "So Hiram finished all the work that he did for King Solomon." The temple is complete.', energy: 'resolution' },
    ],
    connections: [
      { direction: 'back', label: '1 Kings 6', bookSlug: '1-kings', chapter: 6, note: 'Temple structure complete' },
      { direction: 'forward', label: '1 Kings 8', bookSlug: '1-kings', chapter: 8, note: 'The ark enters and the glory fills the house' },
    ],
  },

  '1-kings-8': {
    chapterRef: '1 Kings 8',
    title: 'The Dedication',
    logline: "The ark enters the Most Holy Place. A cloud fills the temple. Solomon prays the longest prayer in Kings — and the world is invited.",
    scenes: [
      { number: 1, icon: '📦', title: 'The Ark Comes Home', summary: 'The priests carry the ark into the Most Holy Place beneath the cherubim wings. Only the two stone tablets inside — nothing else. The ark rests.', energy: 'setup' },
      { number: 2, icon: '☁️', title: 'The Cloud Fills the Temple', summary: 'The priests cannot stand to minister. The glory of the LORD fills his house. Heaven has descended to earth. The building is overtaken by its Owner.', energy: 'climax', wide: true },
      { number: 3, icon: '🙏', title: "Solomon's Seven Petitions", summary: 'Solomon spreads his hands toward heaven: when we sin, forgive. When rain fails, send it. When enemies defeat us, restore us. When famine comes, hear us.', energy: 'setup' },
      { number: 4, icon: '🌍', title: 'For the Foreigner', summary: '"The foreigner who is not of your people Israel, when he comes and prays toward this temple — hear in heaven." The temple is meant for every nation. A seed planted here.', energy: 'tension' },
      { number: 5, icon: '🎉', title: '14 Days of Celebration', summary: '22,000 oxen, 120,000 sheep. Seven days of feasting, then seven more. All Israel — from Lebo-hamath to the Brook of Egypt — glad and joyful in heart.', energy: 'resolution' },
    ],
    connections: [
      { direction: 'back', label: '1 Kings 7', bookSlug: '1-kings', chapter: 7, note: 'Temple and furnishings complete' },
      { direction: 'forward', label: '1 Kings 9', bookSlug: '1-kings', chapter: 9, note: "God's second appearance to Solomon — with a warning" },
    ],
  },

  '1-kings-9': {
    chapterRef: '1 Kings 9',
    title: "God's Warning",
    logline: "God appears a second time with a sharp condition: obey, and this temple stands. Turn away, and I will cut Israel off.",
    scenes: [
      { number: 1, icon: '👁️', title: "God's Second Appearance", summary: '"I have heard your prayer. I have consecrated this house." But: if you turn away, this temple will become a heap of ruins and a byword among all peoples. The dedication has a shadow.', energy: 'climax', wide: true },
      { number: 2, icon: '🤝', title: "Hiram's Disappointment", summary: 'Solomon gives Hiram 20 cities in Galilee as payment. Hiram visits and hates them. He names them Cabul — "good for nothing." A sour note in the alliance.', energy: 'tension' },
      { number: 3, icon: '⚒️', title: 'The Conscripted Labor', summary: 'Solomon conscripts the remaining Canaanites as forced labor for his building projects. Israelites serve as officers. The distinction matters — but the labor system is troubling.', energy: 'tension' },
      { number: 4, icon: '🚢', title: 'Ships at Ezion-geber', summary: "Solomon builds a fleet on the Red Sea. Hiram's sailors train Solomon's sailors. They sail to Ophir and bring back 420 talents of gold.", energy: 'setup' },
      { number: 5, icon: '👑', title: 'The Peak Before the Fall', summary: 'The empire is at its height. But foreign wives, high places, and forced labor are already present. The conditions for collapse are built into the success.', energy: 'resolution' },
    ],
    connections: [
      { direction: 'back', label: '1 Kings 8', bookSlug: '1-kings', chapter: 8, note: 'Temple dedicated with great celebration' },
      { direction: 'forward', label: '1 Kings 10', bookSlug: '1-kings', chapter: 10, note: 'The Queen of Sheba — the high-water mark' },
    ],
  },

  '1-kings-10': {
    chapterRef: '1 Kings 10',
    title: 'The Queen of Sheba',
    logline: "A foreign queen travels 1,500 miles to test Solomon's wisdom. She leaves breathless — and the world flows toward Jerusalem.",
    scenes: [
      { number: 1, icon: '👸', title: 'The Queen Arrives', summary: 'The queen of Sheba comes with hard questions, camels, spices, gold, and precious stones. She has heard reports of Solomon and the name of the LORD. She wants to test it herself.', energy: 'setup' },
      { number: 2, icon: '🧠', title: 'Every Question Answered', summary: 'Solomon answers everything. There is nothing hidden from him that he cannot explain. The queen sees the house, the table, the servants, the burnt offerings.', energy: 'climax', wide: true },
      { number: 3, icon: '😮', title: 'She Is Overwhelmed', summary: '"The half was not told me." She praises God for placing Solomon on the throne of Israel because of God\'s eternal love for Israel. A foreign queen recognizes the covenant.', energy: 'climax' },
      { number: 4, icon: '💰', title: 'The Gift Exchange', summary: '120 talents of gold, spices, and precious stones from her. Everything she desired — and more, the royal bounty — from him.', energy: 'resolution' },
      { number: 5, icon: '🌍', title: 'The World Flows to Jerusalem', summary: 'Year after year, kings and envoys bring silver, gold, garments, spices, horses, mules. 666 talents of gold annually. The world comes to Solomon.', energy: 'resolution' },
    ],
    connections: [
      { direction: 'back', label: '1 Kings 9', bookSlug: '1-kings', chapter: 9, note: "Empire at its peak — but God's warning is already on record" },
      { direction: 'forward', label: '1 Kings 11', bookSlug: '1-kings', chapter: 11, note: 'The fracture: foreign wives turn Solomon\'s heart' },
    ],
  },

  '1-kings-11': {
    chapterRef: '1 Kings 11',
    title: 'The Fracture',
    logline: "Solomon's 700 wives turn his heart. In one generation the empire he built will be split in two.",
    scenes: [
      { number: 1, icon: '💍', title: 'The Foreign Wives', summary: "700 wives, 300 concubines — Moabite, Ammonite, Edomite, Sidonian, Hittite. God had warned: they will turn your heart after their gods. They do.", energy: 'tension' },
      { number: 2, icon: '🏚️', title: 'High Places for Chemosh and Molech', summary: 'Solomon builds a high place for Chemosh of Moab and Molech of Ammon on the hill east of Jerusalem — in full view of the temple. The abomination sits opposite the glory.', energy: 'climax', wide: true },
      { number: 3, icon: '😡', title: "God's Verdict", summary: '"Because you have not kept my covenant, I will tear the kingdom from you and give it to your servant. Not in your lifetime — for David\'s sake. But it will happen."', energy: 'climax' },
      { number: 4, icon: '⚔️', title: 'Three Adversaries Rise', summary: "Hadad the Edomite, Rezon of Damascus, Jeroboam — God raises enemies against Solomon from within and without. The cracks are spreading.", energy: 'tension' },
      { number: 5, icon: '📜', title: "Ahijah's Torn Cloak", summary: "The prophet Ahijah tears his new cloak into 12 pieces and gives 10 to Jeroboam: ten tribes will follow you after Solomon dies. The announcement is made before the king is even dead.", energy: 'resolution' },
    ],
    connections: [
      { direction: 'back', label: '1 Kings 10', bookSlug: '1-kings', chapter: 10, note: 'The empire at its height — then this' },
      { direction: 'forward', label: '1 Kings 12', bookSlug: '1-kings', chapter: 12, note: "The split: Rehoboam's arrogance completes what Solomon's sin began" },
    ],
  },

  '1-kings-12': {
    chapterRef: '1 Kings 12',
    title: 'The Kingdom Splits',
    logline: "Rehoboam listens to young men, not elders. In one speech he loses ten tribes forever.",
    scenes: [
      { number: 1, icon: '🗣️', title: "Israel's Demand", summary: 'Jeroboam returns from Egypt. All Israel assembles at Shechem: your father made our yoke heavy. Lighten it, and we will serve you.', energy: 'setup' },
      { number: 2, icon: '🧓', title: "The Elders' Advice", summary: 'The elders who served Solomon: speak kind words to them and they will be your servants forever.', energy: 'setup' },
      { number: 3, icon: '😤', title: "The Young Men's Reply", summary: '"My little finger is thicker than my father\'s waist. My father disciplined you with whips; I will discipline you with scorpions." Rehoboam chooses the young men.', energy: 'tension' },
      { number: 4, icon: '💔', title: 'The Split', summary: '"What portion do we have in David? To your tents, O Israel!" Ten tribes follow Jeroboam. The kingdom David built, that Solomon inherited, is broken in a single audience.', energy: 'climax', wide: true },
      { number: 5, icon: '🐃', title: "Jeroboam's Golden Calves", summary: "Jeroboam sets up golden calves at Bethel and Dan: 'Here are your gods who brought you up from Egypt.' The north starts with a broken altar and a stolen exodus.", energy: 'resolution' },
    ],
    connections: [
      { direction: 'back', label: '1 Kings 11', bookSlug: '1-kings', chapter: 11, note: "God said the kingdom would be torn — here it is" },
      { direction: 'forward', label: '1 Kings 13', bookSlug: '1-kings', chapter: 13, note: "A prophet names Josiah at Bethel — 300 years before Josiah is born" },
    ],
  },

  '1-kings-13': {
    chapterRef: '1 Kings 13',
    title: 'The Man of God and the Lie',
    logline: "A prophet delivers a 300-year prophecy and refuses a king's meal. Then a lying old prophet tricks him to his death.",
    scenes: [
      { number: 1, icon: '📯', title: 'The Prophecy at Bethel', summary: 'As Jeroboam burns incense, a man of God from Judah cries out: "O altar, altar, a son shall be born to the house of David named Josiah, and he will burn human bones on you."', energy: 'setup' },
      { number: 2, icon: '🤚', title: 'The Withered Hand', summary: "Jeroboam stretches out his hand: 'Seize him!' His hand withers. The altar splits. Ashes pour out. Then Jeroboam begs the man of God to restore his hand — and he does.", energy: 'climax', wide: true },
      { number: 3, icon: '🙅', title: 'Refusing the King\'s Table', summary: '"God said: eat nothing, drink nothing, do not return by the way you came." The man of God keeps the command and leaves by a different road.', energy: 'setup' },
      { number: 4, icon: '🤥', title: "The Old Prophet's Lie", summary: "An old prophet in Bethel catches up with him: 'An angel told me to bring you back and feed you.' He lies. The man of God returns with him and eats.", energy: 'tension' },
      { number: 5, icon: '🦁', title: 'The Lion on the Road', summary: 'On his way home, a lion kills the man of God but does not eat the body or touch the donkey. The old prophet buries him, mourning: "He is the man of God who disobeyed the word of the LORD."', energy: 'resolution' },
    ],
    connections: [
      { direction: 'back', label: '1 Kings 12', bookSlug: '1-kings', chapter: 12, note: "Jeroboam's altar at Bethel — now judged" },
      { direction: 'forward', label: '2 Kings 23', bookSlug: '2-kings', chapter: 23, note: 'Josiah fulfills this prophecy 300 years later — exactly as spoken' },
    ],
  },

  '1-kings-14': {
    chapterRef: '1 Kings 14',
    title: 'Two Kingdoms Declining',
    logline: "Jeroboam's sick son dies as prophesied. Rehoboam's kingdom is stripped bare by Egypt.",
    scenes: [
      { number: 1, icon: '👩', title: "Jeroboam's Disguise Plan", summary: "Jeroboam sends his wife in disguise to the blind prophet Ahijah: will our son recover? She brings gifts as if she's a stranger.", energy: 'setup' },
      { number: 2, icon: '👁️', title: 'Ahijah Sees Through the Disguise', summary: '"Come in, wife of Jeroboam. Why do you pretend to be another? I am sent to you with heavy news."', energy: 'tension' },
      { number: 3, icon: '💀', title: 'The Sentence on the House', summary: 'Your son will die when your feet enter the city. Every male in Jeroboam\'s house will be cut off and swept away like dung. The dynasty ends before it truly begins.', energy: 'climax', wide: true },
      { number: 4, icon: '⚔️', title: 'Egypt Plunders Jerusalem', summary: "In Rehoboam's 5th year, Shishak of Egypt takes the temple treasures and palace treasures — including Solomon's gold shields. Everything the Queen of Sheba saw, gone.", energy: 'climax' },
      { number: 5, icon: '🛡️', title: 'Bronze Replaces Gold', summary: 'Rehoboam makes bronze shields to replace the gold ones. The kingdom is already substituting bronze for gold. The decline has a texture.', energy: 'resolution' },
    ],
    connections: [
      { direction: 'back', label: '1 Kings 13', bookSlug: '1-kings', chapter: 13, note: 'Jeroboam defied the prophecy at Bethel' },
      { direction: 'forward', label: '1 Kings 15', bookSlug: '1-kings', chapter: 15, note: 'Good king Asa in Judah; rapid dynasty changes in Israel' },
    ],
  },

  '1-kings-15': {
    chapterRef: '1 Kings 15',
    title: 'Asa and the Cycle',
    logline: "Asa of Judah tears down the high places and fires his grandmother. In Israel, three dynasties rise and fall in one chapter.",
    scenes: [
      { number: 1, icon: '👑', title: 'Asa — A Good King', summary: "Asa does what is right. He removes male cult prostitutes, smashes idols, and even deposes his grandmother Maacah from being queen mother because she made a detestable image.", energy: 'setup' },
      { number: 2, icon: '🏛️', title: 'The High Places Remain', summary: "But the high places are not taken away. Even the good kings don't finish the job. A pattern that will haunt every reform in the book.", energy: 'tension' },
      { number: 3, icon: '💰', title: 'Asa Bribes Syria', summary: 'Baasha of Israel fortifies Ramah to threaten Judah. Asa strips the temple treasury and bribes Ben-hadad of Syria to break his alliance with Israel. It works — but it costs the temple.', energy: 'tension' },
      { number: 4, icon: '💀', title: 'Nadab Killed by Baasha', summary: "Jeroboam's son Nadab reigns 2 years before Baasha kills him — and all of Jeroboam's house. Ahijah's prophecy fulfilled exactly.", energy: 'climax', wide: true },
      { number: 5, icon: '🔄', title: 'The Pattern Sets In', summary: 'Good king / bad king in Judah. Dynasty after dynasty in Israel, each one fulfilling and then becoming a prophecy. The two-track structure of the rest of the book is now clear.', energy: 'resolution' },
    ],
    connections: [
      { direction: 'back', label: '1 Kings 14', bookSlug: '1-kings', chapter: 14, note: "Jeroboam's dynasty sentenced; Rehoboam stripped by Egypt" },
      { direction: 'forward', label: '1 Kings 16', bookSlug: '1-kings', chapter: 16, note: 'Five kings in rapid succession — then Ahab and Jezebel' },
    ],
  },

  '1-kings-16': {
    chapterRef: '1 Kings 16',
    title: 'The Worst Yet',
    logline: "Five kings in rapid succession. Then Ahab marries Jezebel — and everything gets darker.",
    scenes: [
      { number: 1, icon: '💀', title: "Baasha's House Destroyed", summary: "Just as Baasha destroyed Jeroboam's house, God sentences Baasha's. His son Elah reigns 2 years before his commander Zimri kills him while he's drunk at a party.", energy: 'setup' },
      { number: 2, icon: '🔥', title: "Zimri's 7-Day Reign", summary: 'Zimri kills Elah and all of Baasha\'s family. The army makes Omri king instead. Zimri is surrounded, burns the palace down around himself, and dies. Shortest reign in the book.', energy: 'tension' },
      { number: 3, icon: '🏙️', title: 'Omri Builds Samaria', summary: "Omri buys the hill of Samaria and builds a new capital. Brilliant strategist, terrible theology. Assyria will call Israel 'the house of Omri' for generations — but God barely notices him.", energy: 'setup' },
      { number: 4, icon: '💍', title: 'Ahab Marries Jezebel', summary: 'Ahab marries Jezebel, daughter of the king of Sidon. He builds a Baal temple in Samaria, erects an Asherah pole. "Ahab did more to provoke the LORD than all the kings before him."', energy: 'climax', wide: true },
      { number: 5, icon: '🏗️', title: 'Jericho Rebuilt', summary: "Hiel of Bethel rebuilds Jericho — at the cost of his firstborn son for the foundation and his youngest for the gates, fulfilling Joshua's curse spoken 500 years earlier.", energy: 'resolution' },
    ],
    connections: [
      { direction: 'back', label: '1 Kings 15', bookSlug: '1-kings', chapter: 15, note: 'The cycle of dynasties accelerating' },
      { direction: 'forward', label: '1 Kings 17', bookSlug: '1-kings', chapter: 17, note: 'Elijah appears — out of nowhere' },
    ],
  },

  '1-kings-17': {
    chapterRef: '1 Kings 17',
    title: 'Elijah Appears',
    logline: "Out of nowhere, a wild prophet announces a drought. Then God hides him and provides miraculously — even in enemy territory.",
    scenes: [
      { number: 1, icon: '⚡', title: "Elijah's Opening Line", summary: 'No introduction. No backstory. Elijah appears before Ahab: "As the LORD God of Israel lives, there shall be no dew or rain except by my word." Then he disappears.', energy: 'climax', wide: true },
      { number: 2, icon: '🐦', title: 'Ravens at Cherith', summary: 'God hides Elijah east of the Jordan. Ravens bring bread and meat morning and evening. He drinks from the brook. God feeds the prophet who announced the drought.', energy: 'setup' },
      { number: 3, icon: '🏺', title: "The Widow's Last Meal", summary: 'The brook dries up. God sends Elijah to a Phoenician widow — in Jezebel\'s home territory. She has one meal left before she and her son die of starvation.', energy: 'tension' },
      { number: 4, icon: '🌾', title: 'The Jar That Never Empties', summary: '"The jar of flour shall not be spent and the jug of oil shall not be empty until the day the LORD sends rain." The three of them eat for many days. The miracle is quiet and daily.', energy: 'resolution' },
      { number: 5, icon: '💀', title: 'The Son Dies and Lives', summary: "The widow's son dies. Elijah cries out to God and stretches himself over the boy three times. The child's life returns. 'Now I know you are a man of God and the word in your mouth is truth.'", energy: 'resolution' },
    ],
    connections: [
      { direction: 'back', label: '1 Kings 16', bookSlug: '1-kings', chapter: 16, note: "Ahab's reign — the worst yet" },
      { direction: 'forward', label: '1 Kings 18', bookSlug: '1-kings', chapter: 18, note: 'Three years later — the drought ends on Carmel' },
    ],
  },

  '1-kings-18': {
    chapterRef: '1 Kings 18',
    title: 'The Contest on Carmel',
    logline: 'After 3 years of drought, Elijah forces a national reckoning: Yahweh or Baal?',
    scenes: [
      { number: 1, icon: '⚔️', title: 'The Confrontation', summary: "Elijah walks out of hiding and faces Ahab. The king calls him the troubler of Israel. Elijah flips it: you abandoned God and followed Baal — you did this.", energy: 'tension' },
      { number: 2, icon: '🏔️', title: 'The Challenge', summary: "All Israel gathers on Mount Carmel. Two bulls. Two altars. Whichever God answers by fire is the real God. The crowd is silent — 'limping between two opinions.'", energy: 'setup' },
      { number: 3, icon: '🌀', title: 'Baal Is Silent', summary: "450 prophets cry out from morning to noon. They cut themselves. They dance. Nothing. Elijah mocks: maybe he's asleep, or on a trip.", energy: 'failure', wide: true },
      { number: 4, icon: '🔥', title: 'Fire Falls', summary: 'Elijah soaks the altar with water three times and prays 3 quiet sentences. Fire from God falls and consumes everything — stone, wood, dust, water. "The LORD, he is God!"', energy: 'climax', wide: true },
      { number: 5, icon: '🌧️', title: 'Rain Returns', summary: "The 3-year drought breaks. A small cloud rises from the sea. Elijah outruns Ahab's chariot 17 miles to Jezreel in the storm.", energy: 'resolution', wide: true },
    ],
    connections: [
      { direction: 'back', label: '1 Kings 17', bookSlug: '1-kings', chapter: 17, note: 'Elijah announced the drought — this chapter is its end' },
      { direction: 'forward', label: '1 Kings 19', bookSlug: '1-kings', chapter: 19, note: "Jezebel's threat collapses Elijah's victory into despair" },
    ],
  },

  '1-kings-19': {
    chapterRef: '1 Kings 19',
    title: 'After the Fire',
    logline: "Elijah wins the greatest victory of his life — then collapses under a broom tree and begs to die.",
    scenes: [
      { number: 1, icon: '😨', title: "Jezebel's Threat", summary: '"So may the gods do to me and more also, if I do not make your life as the life of one of them by this time tomorrow." The most feared woman in Israel sends one message.', energy: 'tension' },
      { number: 2, icon: '🌿', title: 'Under the Broom Tree', summary: '"It is enough, O LORD; take away my life. I am no better than my fathers." The prophet who called down fire sits in the desert wanting to die. Burnout after victory is real.', energy: 'climax', wide: true },
      { number: 3, icon: '🍞', title: 'The Angel Provision', summary: 'Twice an angel touches him: arise and eat. Bread baked on hot stones and a jar of water. "The journey is too great for you." The provision is tender, not scolding.', energy: 'resolution' },
      { number: 4, icon: '🏔️', title: 'The Still Small Voice', summary: 'At Horeb, God appears — not in wind, earthquake, or fire, but in a still small voice. "What are you doing here, Elijah?" The question is gentle, not accusatory.', energy: 'climax' },
      { number: 5, icon: '🧤', title: 'Elisha Called', summary: "God's answer to Elijah's despair: here is your successor. Elijah finds Elisha plowing with 12 yoke of oxen and throws his cloak over him. Elisha slaughters his oxen and follows.", energy: 'resolution' },
    ],
    connections: [
      { direction: 'back', label: '1 Kings 18', bookSlug: '1-kings', chapter: 18, note: 'The victory on Carmel — immediately followed by this collapse' },
      { direction: 'forward', label: '1 Kings 20', bookSlug: '1-kings', chapter: 20, note: "Ahab's wasted victory against Syria" },
    ],
  },

  '1-kings-20': {
    chapterRef: '1 Kings 20',
    title: "Ahab's Wasted Victory",
    logline: "Ahab defeats Syria twice through prophecy he barely believes. Then he makes a treaty with the enemy — and loses God's favor.",
    scenes: [
      { number: 1, icon: '🏰', title: "Ben-hadad's Demands", summary: "Ben-hadad besieges Samaria and sends increasingly humiliating demands. Ahab agrees to the first but draws the line at the second. The siege begins.", energy: 'setup' },
      { number: 2, icon: '📯', title: "The Prophet's Battle Plan", summary: 'An unnamed prophet gives Ahab the strategy: 232 young officers attack first, then 7,000. Attack at noon. Ahab asks who will do it. You will lead it yourself.', energy: 'setup' },
      { number: 3, icon: '⚔️', title: 'Two Victories', summary: 'Ahab defeats Syria at Samaria, then again at Aphek in the plain. Twice, through prophetic instruction. God wants Israel to know "I am the LORD."', energy: 'climax', wide: true },
      { number: 4, icon: '🤝', title: 'The Treaty with Ben-hadad', summary: 'Ben-hadad is captured. Ahab calls him "my brother" and makes a trade deal. He lets him go — the man God had devoted to destruction. A diplomatic triumph, a theological failure.', energy: 'tension' },
      { number: 5, icon: '😡', title: "The Prophet's Parable", summary: 'A prophet confronts Ahab through a staged parable: because you let go the man I devoted to destruction, your life shall go for his life. The verdict is delivered before Ahab reaches home.', energy: 'resolution' },
    ],
    connections: [
      { direction: 'back', label: '1 Kings 19', bookSlug: '1-kings', chapter: 19, note: "Elijah's recovery and calling of Elisha" },
      { direction: 'forward', label: '1 Kings 21', bookSlug: '1-kings', chapter: 21, note: "Naboth's vineyard — Ahab's low point" },
    ],
  },

  '1-kings-21': {
    chapterRef: '1 Kings 21',
    title: "Naboth's Vineyard",
    logline: "Ahab wants a vineyard. Jezebel takes it. The blood of an innocent man becomes the most precise prophecy in the book.",
    scenes: [
      { number: 1, icon: '🌿', title: 'The Coveted Vineyard', summary: 'Naboth has a vineyard next to the palace. Ahab wants it for a garden. Naboth refuses: "The LORD forbid that I should give up the inheritance of my fathers." A man keeps his covenant.', energy: 'setup' },
      { number: 2, icon: '😤', title: 'Ahab Sulks', summary: 'Ahab goes home resentful, lies on his bed, turns his face away, and will not eat. A king of Israel, sulking like a child. Jezebel finds him.', energy: 'tension' },
      { number: 3, icon: '📜', title: "Jezebel's Letters", summary: 'Letters in Ahab\'s name, sealed with his seal, sent to the elders: proclaim a fast, seat Naboth at the head, plant two false witnesses to accuse him of cursing God and king.', energy: 'tension' },
      { number: 4, icon: '🩸', title: 'Naboth Is Stoned', summary: 'The elders obey exactly. Naboth is taken outside the city and stoned to death. Jezebel: "Arise and take the vineyard — Naboth is not alive, but dead."', energy: 'climax', wide: true },
      { number: 5, icon: '🔥', title: "Elijah's Verdict", summary: 'Elijah confronts Ahab in the vineyard itself: "In the place where dogs licked the blood of Naboth shall dogs lick your own blood." The most geographically precise prophecy in Kings.', energy: 'resolution' },
    ],
    connections: [
      { direction: 'back', label: '1 Kings 20', bookSlug: '1-kings', chapter: 20, note: "Ahab's wasted victory" },
      { direction: 'forward', label: '1 Kings 22', bookSlug: '1-kings', chapter: 22, note: 'Ahab dies exactly as Elijah prophesied' },
    ],
  },

  '1-kings-22': {
    chapterRef: '1 Kings 22',
    title: 'The Last Battle',
    logline: "Ahab ignores one true prophet and listens to 400 false ones. He disguises himself for battle. A random arrow finds the gap in his armor.",
    scenes: [
      { number: 1, icon: '🎭', title: '400 Yes-Men', summary: '400 prophets: "Go up to Ramoth-gilead — the Lord will give it into your hand." Jehoshaphat of Judah asks: is there not a prophet of the LORD besides these?', energy: 'setup' },
      { number: 2, icon: '🤡', title: "Micaiah's Sarcasm", summary: 'First Micaiah mimics the false prophets sarcastically. Then the truth: I saw all Israel scattered like sheep on the mountains, with no shepherd. Ahab will not return from this battle.', energy: 'tension' },
      { number: 3, icon: '👊', title: 'Micaiah Struck and Imprisoned', summary: 'Zedekiah slaps Micaiah. Ahab imprisons him: "Feed him bread of affliction until I return in peace." Micaiah: "If you return in peace, the LORD has not spoken by me."', energy: 'tension' },
      { number: 4, icon: '🏹', title: "The Arrow in the Armor's Gap", summary: 'Ahab disguises himself. The Syrian king orders: attack no one except the king of Israel. A random arrow finds the gap between the scales of his armor. He dies at sunset, bleeding in his chariot.', energy: 'climax', wide: true },
      { number: 5, icon: '🐕', title: 'Dogs Lick His Blood', summary: 'They wash the chariot at the pool of Samaria. Dogs lick his blood and prostitutes bathe there. Just as Elijah had said: in the very place where Naboth died.', energy: 'resolution' },
    ],
    connections: [
      { direction: 'back', label: '1 Kings 21', bookSlug: '1-kings', chapter: 21, note: "Elijah prophesied Ahab's blood would be licked by dogs" },
      { direction: 'forward', label: '2 Kings 1', bookSlug: '2-kings', chapter: 1, note: "Ahaziah, Ahab's son, continues the pattern" },
    ],
  },

  // ══════════════════════════════════════════════════════════════════
  // 2 KINGS
  // ══════════════════════════════════════════════════════════════════

  '2-kings-1': {
    chapterRef: '2 Kings 1',
    title: 'Fire from Heaven',
    logline: "Ahab's son falls through a lattice, consults a Philistine god, and sends three companies of soldiers to arrest Elijah. Two companies die by fire.",
    scenes: [
      { number: 1, icon: '🏚️', title: 'Ahaziah Falls', summary: "Ahaziah falls through the lattice of his upper chamber and is injured. He sends messengers to consult Baal-zebub, the god of Ekron: will I recover from this injury?", energy: 'setup' },
      { number: 2, icon: '📯', title: 'Elijah Intercepts', summary: 'God sends Elijah to intercept the messengers: "Is there no God in Israel that you go to Baal-zebub? Tell the king: you will not come down from that bed."', energy: 'setup' },
      { number: 3, icon: '🔥', title: 'Two Companies Consumed', summary: '"Man of God, the king says come down." Elijah: "If I am a man of God, let fire come down from heaven and consume you." Fire does. Twice.', energy: 'climax', wide: true },
      { number: 4, icon: '🙏', title: 'The Third Captain Kneels', summary: 'The third captain falls on his knees: "O man of God, please let my life be precious." The angel tells Elijah: go with him. Elijah goes.', energy: 'tension' },
      { number: 5, icon: '💀', title: 'The Verdict Delivered', summary: 'Elijah delivers the verdict face to face: you will not come down from the bed. Ahaziah dies. No son. His brother Jehoram succeeds him.', energy: 'resolution' },
    ],
    connections: [
      { direction: 'back', label: '1 Kings 22', bookSlug: '1-kings', chapter: 22, note: "Ahab died; his son Ahaziah continues the line" },
      { direction: 'forward', label: '2 Kings 2', bookSlug: '2-kings', chapter: 2, note: "Elijah's final journey and translation" },
    ],
  },

  '2-kings-2': {
    chapterRef: '2 Kings 2',
    title: "Elijah's Translation",
    logline: "Elijah is taken up in a whirlwind. Elisha picks up the mantle — and the Jordan parts.",
    scenes: [
      { number: 1, icon: '🚶', title: 'The Last Journey', summary: 'Elijah and Elisha travel together: Gilgal, Bethel, Jericho, the Jordan. Three times Elijah says "stay here." Three times Elisha refuses: "As the LORD lives, I will not leave you."', energy: 'setup' },
      { number: 2, icon: '🌊', title: 'Parting the Jordan', summary: "Elijah rolls up his cloak and strikes the water. It parts. They cross on dry ground. Fifty sons of the prophets watch from a distance.", energy: 'setup' },
      { number: 3, icon: '🧤', title: 'The Double Portion Request', summary: '"What shall I do for you before I am taken?" Elisha asks for a double portion of Elijah\'s spirit. "You have asked a hard thing. If you see me taken, it shall be yours."', energy: 'tension' },
      { number: 4, icon: '🔥', title: 'The Chariot of Fire', summary: 'A chariot of fire and horses of fire separate them. Elijah goes up in a whirlwind. Elisha tears his clothes and cries: "My father, my father! The chariots of Israel and its horsemen!"', energy: 'climax', wide: true },
      { number: 5, icon: '🌊', title: 'The Mantle Works', summary: 'Elisha picks up the cloak, strikes the Jordan: "Where is the LORD, the God of Elijah?" The water parts. The sons of the prophets bow: "The spirit of Elijah rests on Elisha."', energy: 'resolution' },
    ],
    connections: [
      { direction: 'back', label: '2 Kings 1', bookSlug: '2-kings', chapter: 1, note: "Elijah's final confrontation with Ahaziah" },
      { direction: 'forward', label: '2 Kings 3', bookSlug: '2-kings', chapter: 3, note: 'Elisha steps into his ministry' },
    ],
  },

  '2-kings-3': {
    chapterRef: '2 Kings 3',
    title: 'War Against Moab',
    logline: "Three kings march against Moab and nearly die of thirst. Elisha provides water, a victory — and a troubling ending.",
    scenes: [
      { number: 1, icon: '🏜️', title: 'Three Kings, No Water', summary: 'Jehoram of Israel, Jehoshaphat of Judah, and the king of Edom march 7 days around Edom. No water. Is God bringing us together just to be defeated?', energy: 'tension' },
      { number: 2, icon: '🎵', title: 'Elisha and the Musician', summary: '"Bring me a musician." As the musician plays, the hand of the LORD comes on Elisha. "Make this valley full of trenches." No wind, no rain — but they will be filled with water.', energy: 'climax', wide: true },
      { number: 3, icon: '💧', title: 'Water in the Morning', summary: 'In the morning, water flows from the direction of Edom. The valley fills. Army and animals drink.', energy: 'resolution' },
      { number: 4, icon: '⚔️', title: 'Moab Sees Blood', summary: 'Moab sees the sunrise glinting off the water and thinks it is blood: "The kings have killed each other!" They rush in — and walk straight into the waiting army.', energy: 'climax' },
      { number: 5, icon: '🧒', title: 'The Child on the Wall', summary: "The king of Moab sacrifices his firstborn son on the wall. 'Great wrath came against Israel.' The three kings withdraw. The chapter ends without explanation — theology, not history.", energy: 'resolution' },
    ],
    connections: [
      { direction: 'back', label: '2 Kings 2', bookSlug: '2-kings', chapter: 2, note: 'Elisha receives the double portion' },
      { direction: 'forward', label: '2 Kings 4', bookSlug: '2-kings', chapter: 4, note: "Elisha's miracles in private — for the poor and forgotten" },
    ],
  },

  '2-kings-4': {
    chapterRef: '2 Kings 4',
    title: "Elisha's Miracles",
    logline: "Four miracles in one chapter: oil for a widow, life for a barren woman's son, detoxified stew, a hundred men fed from 20 loaves.",
    scenes: [
      { number: 1, icon: '🏺', title: "The Widow's Oil", summary: "A prophet's widow owes a creditor her sons as slaves. Elisha: 'What do you have?' Just a jar of oil. 'Borrow all the empty jars you can.' She fills every single one.", energy: 'climax', wide: true },
      { number: 2, icon: '🏡', title: 'The Shunammite Gives', summary: "A wealthy woman in Shunem builds a room on her roof for Elisha. When he asks what he can give her, she asks for nothing. She has no son; her husband is old.", energy: 'setup' },
      { number: 3, icon: '👶', title: 'The Son Given and Lost', summary: 'Elisha prophesies: next year you will hold a son. She does. Then the boy collapses in the harvest field and dies in her lap by noon.', energy: 'tension' },
      { number: 4, icon: '⚡', title: 'The Boy Restored', summary: 'Elisha stretches himself over the boy: eye to eye, hand to hand, mouth to mouth. The boy sneezes seven times. He opens his eyes.', energy: 'climax' },
      { number: 5, icon: '🥣', title: 'Stew and Bread', summary: 'Elisha detoxifies a pot of deadly stew with flour. Then feeds 100 men from 20 loaves of barley. "They ate and had some left" — echoes of Moses, echoes of what is coming.', energy: 'resolution' },
    ],
    connections: [
      { direction: 'back', label: '2 Kings 3', bookSlug: '2-kings', chapter: 3, note: "Elisha's public ministry with kings" },
      { direction: 'forward', label: '2 Kings 5', bookSlug: '2-kings', chapter: 5, note: 'Naaman — the outsider who gets the miracle' },
    ],
  },

  '2-kings-5': {
    chapterRef: '2 Kings 5',
    title: 'Naaman the Leper',
    logline: "A foreign general has leprosy. A captured servant girl points him to Israel. He nearly misses the healing because it is too simple.",
    scenes: [
      { number: 1, icon: '👧', title: "The Servant Girl's Word", summary: "Naaman, commander of Syria's army, has leprosy. A captured Israelite girl tells his wife: 'Would that my lord were with the prophet in Samaria — he would cure him.'", energy: 'setup' },
      { number: 2, icon: '📜', title: 'Letters and Gifts', summary: "Naaman arrives with silver, gold, garments, and a letter from the king of Syria to the king of Israel. The king tears his robes: 'Am I God, to kill and make alive?'", energy: 'tension' },
      { number: 3, icon: '😡', title: 'The Jordan Insult', summary: "Elisha sends a messenger — doesn't even come out — with instructions: wash seven times in the Jordan. Naaman is furious. Are not the rivers of Damascus better?", energy: 'climax', wide: true },
      { number: 4, icon: '🌊', title: 'Seven Times in the Jordan', summary: "His servants persuade him: if he'd asked something hard, you'd have done it. He dips seven times. His flesh is restored like the flesh of a little child.", energy: 'climax' },
      { number: 5, icon: '💰', title: "Gehazi's Greed", summary: "Elisha refuses all payment. Gehazi secretly runs after Naaman and takes silver and garments with a lie. Elisha knows. Naaman's leprosy transfers to Gehazi and his descendants forever.", energy: 'resolution' },
    ],
    connections: [
      { direction: 'back', label: '2 Kings 4', bookSlug: '2-kings', chapter: 4, note: "Elisha's miracles for Israelites" },
      { direction: 'forward', label: '2 Kings 6', bookSlug: '2-kings', chapter: 6, note: 'The invisible army around Dothan' },
    ],
  },

  '2-kings-6': {
    chapterRef: '2 Kings 6',
    title: 'The Invisible Army',
    logline: "Elisha floats an axe head, reads Syrian war councils, blinds an entire army, and feeds them before sending them home.",
    scenes: [
      { number: 1, icon: '🪓', title: 'The Floating Axe Head', summary: '"Alas, master! It was borrowed!" A prophet\'s axe head flies into the Jordan. Elisha cuts a stick and throws it in. The iron floats. Even the smallest need reaches him.', energy: 'setup' },
      { number: 2, icon: '🗺️', title: "Elisha Reads Syria's Plans", summary: "Elisha keeps revealing Syrian ambushes to the king of Israel. The Syrian king is furious: who is the spy in my court? His officer: 'Elisha in Israel tells the king what you say in your bedroom.'", energy: 'tension' },
      { number: 3, icon: '🔥', title: 'Mountains Full of Fire', summary: '"Do not be afraid — those with us are more than those with them." The servant\'s eyes open and he sees the mountain full of horses and chariots of fire surrounding Elisha.', energy: 'climax', wide: true },
      { number: 4, icon: '🙈', title: 'An Army Struck Blind', summary: "Elisha prays that the Syrian army be blinded and leads them into Samaria. Then he prays their eyes open. They find themselves inside the city, surrounded.", energy: 'climax' },
      { number: 5, icon: '🍽️', title: 'Fed and Sent Home', summary: 'The king of Israel wants to kill them. Elisha: no — feed them and send them home. He does. The Syrian raids into Israel stop — for a time.', energy: 'resolution' },
    ],
    connections: [
      { direction: 'back', label: '2 Kings 5', bookSlug: '2-kings', chapter: 5, note: "Naaman's healing" },
      { direction: 'forward', label: '2 Kings 7', bookSlug: '2-kings', chapter: 7, note: 'The siege of Samaria — and the fulfilled oracle' },
    ],
  },

  '2-kings-7': {
    chapterRef: '2 Kings 7',
    title: 'The Abandoned Camp',
    logline: "Four lepers go to surrender to the Syrian army at twilight. They find it completely abandoned — and an oracle fulfilled to the hour.",
    scenes: [
      { number: 1, icon: '💀', title: 'Famine in Samaria', summary: 'The siege is so severe that a donkey\'s head costs 80 pieces of silver. Women are eating their own children. The city is dying.', energy: 'setup' },
      { number: 2, icon: '📯', title: "Elisha's Oracle", summary: '"Tomorrow at this time, flour will be plentiful at the gate of Samaria." The officer beside the king: "Even if God opened windows in heaven, could this be?" Elisha: you will see it but not eat it.', energy: 'climax', wide: true },
      { number: 3, icon: '🚶', title: "Four Lepers' Logic", summary: '"Why are we sitting here until we die? If we go to the city, we die of famine. If we surrender to the Syrians, they might let us live. Let us go." They leave at twilight.', energy: 'tension' },
      { number: 4, icon: '👻', title: 'An Abandoned Camp', summary: 'God made the Syrians hear the sound of a great army. They fled in panic, leaving everything — tents, horses, food, silver, gold, garments.', energy: 'climax' },
      { number: 5, icon: '⚰️', title: 'The Fulfillment', summary: 'The people rush out to plunder. The officer who doubted is put in charge of the gate — and trampled to death by the crowd. He saw it but did not eat it. Exactly as Elisha said.', energy: 'resolution' },
    ],
    connections: [
      { direction: 'back', label: '2 Kings 6', bookSlug: '2-kings', chapter: 6, note: "Elisha and the Syrian army" },
      { direction: 'forward', label: '2 Kings 8', bookSlug: '2-kings', chapter: 8, note: 'The Shunammite, Hazael, and two wicked kings of Judah' },
    ],
  },

  '2-kings-8': {
    chapterRef: '2 Kings 8',
    title: 'Trouble Brewing',
    logline: "The Shunammite reclaims her land. Hazael murders his king. Two Judean kings walk in the way of Ahab.",
    scenes: [
      { number: 1, icon: '🏡', title: 'The Shunammite Returns', summary: "The Shunammite whose son Elisha raised has lived 7 years in Philistia during the famine. She returns at the exact moment Gehazi is telling the king about her — and she gets her land back.", energy: 'resolution' },
      { number: 2, icon: '😢', title: "Elisha Weeps", summary: '"Why does my lord weep?" "Because I know what you will do to Israel — burn their fortresses, kill their young men, dash their little ones in pieces." Elisha sees the coming horror in Hazael\'s face.', energy: 'tension' },
      { number: 3, icon: '🪤', title: 'The Murder of Ben-hadad', summary: "Hazael returns to Ben-hadad: 'You shall recover.' The next day he smothers the king with a wet cloth while he sleeps. He becomes king of Syria.", energy: 'climax', wide: true },
      { number: 4, icon: '💍', title: 'Jehoram Marries into Ahab\'s House', summary: "Jehoram of Judah marries Ahab's daughter. He does evil like the house of Israel. Edom revolts and escapes Judah's hand to this day.", energy: 'tension' },
      { number: 5, icon: '👑', title: 'Ahaziah — More of the Same', summary: "Ahaziah walks in the ways of the house of Ahab — his mother's family. He goes to war alongside Joram of Israel against Hazael. The setup for Jehu is complete.", energy: 'resolution' },
    ],
    connections: [
      { direction: 'back', label: '2 Kings 7', bookSlug: '2-kings', chapter: 7, note: 'The siege lifted' },
      { direction: 'forward', label: '2 Kings 9', bookSlug: '2-kings', chapter: 9, note: "Jehu's coup: two kings dead in one afternoon" },
    ],
  },

  '2-kings-9': {
    chapterRef: '2 Kings 9',
    title: "Jehu's Coup",
    logline: "A commander is anointed king in secret. Within hours two kings are dead and Jezebel's body is being eaten by dogs.",
    scenes: [
      { number: 1, icon: '🫙', title: 'The Secret Anointing', summary: "Elisha sends a prophet to Ramoth-gilead: anoint Jehu. 'I anoint you king over Israel. Destroy the house of Ahab. Avenge Jezebel's blood.' The young prophet runs.", energy: 'setup' },
      { number: 2, icon: '⚔️', title: 'Joram Killed at Naboth\'s Field', summary: 'Joram rides out to meet Jehu: "Is it peace?" "What peace, as long as the harlotries of your mother Jezebel are so many?" Jehu shoots him through the heart. The body falls in Naboth\'s field.', energy: 'climax', wide: true },
      { number: 3, icon: '🏹', title: 'Ahaziah Killed', summary: "Ahaziah of Judah flees but is shot in his chariot on the ascent of Gur. He dies at Megiddo.", energy: 'tension' },
      { number: 4, icon: '💄', title: "Jezebel's Last Stand", summary: 'Jezebel paints her eyes, arranges her hair, and looks down from a window: "Is it peace, you Zimri, murderer of your master?" Jehu: "Who is on my side?" Two or three eunuchs throw her down.', energy: 'climax' },
      { number: 5, icon: '🐕', title: 'Dogs at Jezreel', summary: 'When they go to bury Jezebel, only the skull, feet, and palms remain. The dogs ate her in the plot of Naboth the Jezreelite. Exactly as Elijah had spoken.', energy: 'resolution' },
    ],
    connections: [
      { direction: 'back', label: '2 Kings 8', bookSlug: '2-kings', chapter: 8, note: 'Hazael crowned; Ahab\'s house in Judah and Israel both compromised' },
      { direction: 'forward', label: '2 Kings 10', bookSlug: '2-kings', chapter: 10, note: "Jehu finishes the purge — but keeps the golden calves" },
    ],
  },

  '2-kings-10': {
    chapterRef: '2 Kings 10',
    title: 'Jehu Cleans House',
    logline: "Jehu eliminates Ahab's 70 sons, 42 princes of Judah, and every Baal worshipper in Israel. Then reintroduces the golden calves.",
    scenes: [
      { number: 1, icon: '👑', title: '70 Heads at the Gate', summary: "Jehu challenges Ahab's 70 sons' guardians: fight for your master's house, or surrender. By morning, 70 heads arrive in baskets. Jehu piles them at the city gate.", energy: 'climax', wide: true },
      { number: 2, icon: '🤝', title: 'Jehonadab Joins the Purge', summary: '"Is your heart true to mine?" "It is." "Give me your hand." Jehu pulls Jehonadab into his chariot. The Rechabite witnesses the slaughter of the rest of Ahab\'s family.', energy: 'tension' },
      { number: 3, icon: '🎭', title: 'The Baal Trap', summary: '"Ahab served Baal a little; Jehu will serve him much." He proclaims a great sacrifice to Baal. Every Baal worshipper in Israel must come or die. The temple is packed.', energy: 'tension' },
      { number: 4, icon: '💀', title: 'The Baal Temple Destroyed', summary: '80 guards slaughter every Baal worshipper. They demolish the temple and make it a latrine. "It remains a latrine to this day." Baal worship in Israel is over.', energy: 'climax' },
      { number: 5, icon: '🐃', title: 'But the Calves Remain', summary: "Jehu does not turn from the sins of Jeroboam: the golden calves at Bethel and Dan. His zeal is real but partial. God gives him 4 generations — but Hazael begins to devour Israel.", energy: 'resolution' },
    ],
    connections: [
      { direction: 'back', label: '2 Kings 9', bookSlug: '2-kings', chapter: 9, note: 'Jehu anointed and begins the purge' },
      { direction: 'forward', label: '2 Kings 11', bookSlug: '2-kings', chapter: 11, note: 'Athaliah seizes Judah; one baby hidden in the temple' },
    ],
  },

  '2-kings-11': {
    chapterRef: '2 Kings 11',
    title: 'The Hidden Prince',
    logline: "Athaliah murders the royal family and seizes Judah's throne. The line of David survives in one hidden infant.",
    scenes: [
      { number: 1, icon: '👸', title: "Athaliah's Purge", summary: "When Athaliah sees that her son Ahaziah is dead, she destroys all the royal family of Judah. She is Ahab and Jezebel's daughter — and she acts exactly like them.", energy: 'climax', wide: true },
      { number: 2, icon: '👶', title: 'Joash Hidden in the Temple', summary: "Ahaziah's sister hides the infant Joash in the temple for 6 years while Athaliah rules Judah. The Davidic line is one baby in a secret room.", energy: 'tension' },
      { number: 3, icon: '📯', title: "Jehoiada's Coup", summary: 'In the 7th year, the priest Jehoiada arms the guards, stations them at every gate and post, and brings out the prince. The crown is placed on Joash. The trumpet sounds.', energy: 'setup' },
      { number: 4, icon: '👑', title: 'Joash Crowned, Athaliah Killed', summary: 'Athaliah tears her clothes: "Treason! Treason!" Jehoiada: take her outside the temple precinct and kill her. Do not let her be killed in the temple.', energy: 'climax' },
      { number: 5, icon: '📜', title: 'The Covenant Renewed', summary: 'Jehoiada makes a covenant between God, king, and people. The Baal temple is torn down. Joash sits on the throne. "The city was quiet after Athaliah had been put to death."', energy: 'resolution' },
    ],
    connections: [
      { direction: 'back', label: '2 Kings 10', bookSlug: '2-kings', chapter: 10, note: "Jehu's purge in Israel" },
      { direction: 'forward', label: '2 Kings 12', bookSlug: '2-kings', chapter: 12, note: "Joash's reign — the temple repaired, then the king assassinated" },
    ],
  },

  '2-kings-12': {
    chapterRef: '2 Kings 12',
    title: 'The Temple Repaired',
    logline: "Joash spends 23 years trying to fix the temple funding system. It finally works. Then he strips the temple to buy off Hazael.",
    scenes: [
      { number: 1, icon: '🏛️', title: '23 Years of Nothing', summary: 'Joash tells the priests to use offering money for temple repairs. For 23 years they do not repair a single breach. He has to confront them directly.', energy: 'tension' },
      { number: 2, icon: '💰', title: 'The Chest Solution', summary: 'A chest with a hole in the lid is placed beside the altar. Gifts drop in. The royal secretary and priest count it, bag it, and pay the workers directly. The system works.', energy: 'setup' },
      { number: 3, icon: '⚒️', title: 'Honest Workers', summary: 'No accounting is required from the workers — they deal honestly. The temple is repaired. A rare moment of institutional integrity in Kings.', energy: 'resolution' },
      { number: 4, icon: '⚔️', title: "Hazael's Threat", summary: 'Hazael takes Gath and sets his face toward Jerusalem. Joash takes all the dedicated temple gifts and gold from the treasury and sends it to Hazael. He withdraws.', energy: 'climax', wide: true },
      { number: 5, icon: '🗡️', title: 'Joash Assassinated', summary: "Joash's servants kill him in his bed. He who had the priest Zechariah stoned is himself killed by his servants. His son Amaziah reigns.", energy: 'resolution' },
    ],
    connections: [
      { direction: 'back', label: '2 Kings 11', bookSlug: '2-kings', chapter: 11, note: 'Joash crowned by Jehoiada the priest' },
      { direction: 'forward', label: '2 Kings 13', bookSlug: '2-kings', chapter: 13, note: "Elisha's death and his last arrows" },
    ],
  },

  '2-kings-13': {
    chapterRef: '2 Kings 13',
    title: "Elisha's Last Arrows",
    logline: "Elisha is dying. A king shoots three arrows instead of five — and the difference costs Israel three victories.",
    scenes: [
      { number: 1, icon: '🔄', title: 'The Familiar Cycle', summary: 'Jehoahaz does evil. God gives Israel into Syria\'s hand. Jehoahaz prays and God sends a deliverer. But the Asherah pole stays in Samaria. The high places stay at Bethel.', energy: 'setup' },
      { number: 2, icon: '😢', title: 'The King Weeps at Elisha\'s Bed', summary: 'Joash king of Israel comes to Elisha who is dying. He weeps: "My father, my father! The chariots of Israel and its horsemen!" — the same cry Elisha once made over Elijah.', energy: 'tension' },
      { number: 3, icon: '🏹', title: 'The Arrow Oracle', summary: '"Take the bow." Elisha puts his hands over the king\'s hands. "Shoot." He shoots east — toward Syria. "The LORD\'s arrow of victory! You shall defeat Syria at Aphek."', energy: 'climax', wide: true },
      { number: 4, icon: '😤', title: 'Five Arrows Not Taken', summary: '"Strike the ground." Joash strikes three times and stops. Elisha is angry: you should have struck five or six times. Now you will defeat Syria only three times.', energy: 'climax' },
      { number: 5, icon: '💀', title: "Elisha's Bones Raise the Dead", summary: 'Elisha dies. The next year, a dead man is thrown into his tomb and touches his bones — and comes to life and stands on his feet. Even in death, the power remains.', energy: 'resolution' },
    ],
    connections: [
      { direction: 'back', label: '2 Kings 12', bookSlug: '2-kings', chapter: 12, note: "Joash's reign in Judah" },
      { direction: 'forward', label: '2 Kings 14', bookSlug: '2-kings', chapter: 14, note: 'Amaziah wins a battle, then picks a fight he loses' },
    ],
  },

  '2-kings-14': {
    chapterRef: '2 Kings 14',
    title: 'Pride Before the Fall',
    logline: "Amaziah wins against Edom and immediately picks a fight with Israel. Jeroboam II expands Israel to its greatest extent since Solomon.",
    scenes: [
      { number: 1, icon: '⚖️', title: 'Amaziah Restrains Himself', summary: "Amaziah executes his father's assassins but not their sons — citing Deuteronomy 24:16. A rare act of legal restraint in a book of ruthless purges.", energy: 'setup' },
      { number: 2, icon: '🧱', title: 'Victory over Edom, Pride Follows', summary: 'Amaziah defeats 10,000 Edomites in the Valley of Salt. Immediately he challenges Joash king of Israel. Joash sends back a fable.', energy: 'tension' },
      { number: 3, icon: '🌳', title: 'The Thistle and the Cedar', summary: '"A thistle in Lebanon sent to a cedar: give me your daughter in marriage. A wild beast came by and trampled the thistle." Stay home, Amaziah. You will fall.', energy: 'tension' },
      { number: 4, icon: '💔', title: 'Jerusalem Walls Broken', summary: 'Amaziah ignores the warning. Joash defeats Judah at Beth-shemesh, breaks 400 cubits of Jerusalem\'s wall, and plunders the temple and palace.', energy: 'climax', wide: true },
      { number: 5, icon: '🌍', title: "Jeroboam II's Extraordinary Reign", summary: 'Jeroboam II restores Israel\'s border from Lebo-hamath to the Dead Sea — the greatest extent since Solomon. But Amos and Hosea are already preaching against the injustice underneath the wealth.', energy: 'resolution' },
    ],
    connections: [
      { direction: 'back', label: '2 Kings 13', bookSlug: '2-kings', chapter: 13, note: "Joash of Israel, Elisha's death" },
      { direction: 'forward', label: '2 Kings 15', bookSlug: '2-kings', chapter: 15, note: 'The disintegration: six kings, rapid assassinations' },
    ],
  },

  '2-kings-15': {
    chapterRef: '2 Kings 15',
    title: 'The Disintegration',
    logline: "Six kings in rapid succession. Assassinations. Tribute to Assyria. The northern kingdom is visibly falling apart.",
    scenes: [
      { number: 1, icon: '🦟', title: 'Uzziah: 52 Years, Then Leprosy', summary: "Uzziah reigns 52 years and does right. But he doesn't remove the high places. At the end of his life he is struck with leprosy and lives in isolation until his death.", energy: 'setup' },
      { number: 2, icon: '⚡', title: 'Four Kings, Four Lines', summary: 'Zechariah (6 months) killed by Shallum. Shallum (1 month) killed by Menahem. Each dynasty ends in assassination. The prophetic word to Jehu — 4 generations — is fulfilled exactly.', energy: 'tension' },
      { number: 3, icon: '💰', title: 'Menahem Buys Off Assyria', summary: 'Tiglath-pileser invades. Menahem raises 1,000 talents of silver by taxing every wealthy man 50 shekels. He pays the tribute. Assyria leaves — for now.', energy: 'climax', wide: true },
      { number: 4, icon: '⚔️', title: 'Pekah and the First Deportations', summary: 'Pekah kills Pekahiah with 50 Gileadites. Then Tiglath-pileser takes large territories — Gilead, Galilee, all the land of Naphtali — into exile. The end is visible.', energy: 'climax' },
      { number: 5, icon: '🌑', title: 'The Last King Rising', summary: "Hoshea kills Pekah and becomes the last king of the north. Jotham of Judah ends his reign watching the north collapse. The question is now when, not if.", energy: 'resolution' },
    ],
    connections: [
      { direction: 'back', label: '2 Kings 14', bookSlug: '2-kings', chapter: 14, note: "Jeroboam II's peak — this is the collapse after it" },
      { direction: 'forward', label: '2 Kings 16', bookSlug: '2-kings', chapter: 16, note: 'Ahaz burns his son and strips the temple to pay Assyria' },
    ],
  },

  '2-kings-16': {
    chapterRef: '2 Kings 16',
    title: 'Ahaz and the Altar',
    logline: "Ahaz burns his son as an offering, replaces the bronze altar with a Syrian model, and strips the temple to pay Assyria.",
    scenes: [
      { number: 1, icon: '🔥', title: 'Ahaz Burns His Son', summary: '"He even burned his son as an offering." Child sacrifice — following the abominations of the nations God drove out. The worst act by a Judean king to this point.', energy: 'climax', wide: true },
      { number: 2, icon: '🤝', title: 'Ahaz Calls Assyria for Help', summary: 'Syria and Israel threaten Jerusalem. Instead of trusting God, Ahaz strips the temple and palace treasury and sends it to Tiglath-pileser: "I am your servant and your son. Come rescue me."', energy: 'tension' },
      { number: 3, icon: '🏛️', title: 'Ahaz Sees the Damascus Altar', summary: 'Tiglath-pileser defeats Damascus. Ahaz visits and admires the altar there. He sends exact measurements to the priest Uriah: build me one exactly like this.', energy: 'climax' },
      { number: 4, icon: '⚙️', title: 'The Temple Rearranged', summary: 'The new Syrian altar replaces the bronze altar. Ahaz dismantles the bronze sea, removes the bases, relocates the basin. He modifies everything his fathers built.', energy: 'tension' },
      { number: 5, icon: '🔄', title: 'The Setup for Hezekiah', summary: 'Ahaz is the worst king of Judah since the split. His son Hezekiah will be described as the best. The contrast is about to become the most dramatic in the book.', energy: 'resolution' },
    ],
    connections: [
      { direction: 'back', label: '2 Kings 15', bookSlug: '2-kings', chapter: 15, note: 'The north disintegrating; Judah about to follow a different path' },
      { direction: 'forward', label: '2 Kings 17', bookSlug: '2-kings', chapter: 17, note: 'Samaria falls — the theological autopsy' },
    ],
  },

  '2-kings-17': {
    chapterRef: '2 Kings 17',
    title: 'The Fall of Israel',
    logline: "Hoshea gambles on Egypt and loses. Samaria falls after a 3-year siege. Kings explains exactly why it happened.",
    scenes: [
      { number: 1, icon: '🤝', title: "Hoshea's Fatal Gamble", summary: 'Hoshea secretly sends envoys to Egypt and stops paying tribute to Assyria. Shalmaneser discovers the conspiracy, arrests Hoshea, and besieges Samaria.', energy: 'tension' },
      { number: 2, icon: '🏰', title: 'Three Years, Then Exile', summary: 'After a 3-year siege, Samaria falls. Israel is deported to Halah, Habor, and the cities of the Medes. 722 BC. The northern kingdom is over.', energy: 'climax', wide: true },
      { number: 3, icon: '📜', title: 'The Theological Autopsy', summary: 'Kings pauses to explain: this happened because Israel sinned against God who brought them out of Egypt. They walked in the customs of the nations. They rejected his covenant. They went after worthless idols.', energy: 'climax' },
      { number: 4, icon: '🌍', title: 'Foreign Nations Resettled', summary: "Assyria imports people from Babylon, Cuthah, Avva, and other places to resettle Samaria. They don't fear the LORD. God sends lions to kill them.", energy: 'tension' },
      { number: 5, icon: '🦁', title: 'A Priest Sent Back', summary: 'An Israelite priest is sent back to teach the new settlers how to fear the LORD. They fear the LORD but also serve their own gods. They do so to this day. The syncretism is permanent.', energy: 'resolution' },
    ],
    connections: [
      { direction: 'back', label: '2 Kings 16', bookSlug: '2-kings', chapter: 16, note: "Ahaz strips the temple; the north about to fall" },
      { direction: 'forward', label: '2 Kings 18', bookSlug: '2-kings', chapter: 18, note: "Hezekiah — the best king — now faces the same Assyria" },
    ],
  },

  '2-kings-18': {
    chapterRef: '2 Kings 18',
    title: 'Hezekiah and the Speech',
    logline: "Hezekiah tears down every high place and trusts God completely. Then Assyria invades and delivers the most devastating speech in the book.",
    scenes: [
      { number: 1, icon: '🏛️', title: "Hezekiah's Reforms", summary: 'He removes high places, breaks pillars, cuts down the Asherah, and smashes the bronze serpent Moses made — because Israel had been burning incense to it. He names it Nehushtan: just a piece of bronze.', energy: 'setup' },
      { number: 2, icon: '🌟', title: 'Uniquely Faithful', summary: '"He trusted in the LORD, the God of Israel, so that there was none like him among all the kings of Judah after him, nor among those before him."', energy: 'climax', wide: true },
      { number: 3, icon: '⚔️', title: 'Assyria Invades', summary: "Sennacherib takes all Judah's fortified cities. Hezekiah sends tribute — strips the temple doors of their gold. It doesn't satisfy Sennacherib.", energy: 'tension' },
      { number: 4, icon: '🗣️', title: "The Rabshakeh's Speech", summary: "In Hebrew, from the wall: 'Do not trust Egypt. Do not trust your God. Has any god saved any nation from Assyria? What makes you think yours is different?'", energy: 'climax' },
      { number: 5, icon: '🤐', title: 'The People Are Silent', summary: "The people say nothing, per the king's order. But inside the city, Hezekiah tears his clothes and goes to the temple.", energy: 'tension' },
    ],
    connections: [
      { direction: 'back', label: '2 Kings 17', bookSlug: '2-kings', chapter: 17, note: "Israel exiled by this same Assyria" },
      { direction: 'forward', label: '2 Kings 19', bookSlug: '2-kings', chapter: 19, note: 'Hezekiah prays; one angel kills 185,000' },
    ],
  },

  '2-kings-19': {
    chapterRef: '2 Kings 19',
    title: 'One Night, 185,000 Dead',
    logline: "Hezekiah spreads Sennacherib's letter before God in the temple and prays. One angel kills 185,000 Assyrian soldiers in a single night.",
    scenes: [
      { number: 1, icon: '🧎', title: "Hezekiah's Prayer", summary: '"You alone are God over all kingdoms. Sennacherib has insulted you. Deliver us, so that all kingdoms of the earth may know that you alone are God."', energy: 'climax', wide: true },
      { number: 2, icon: '📜', title: "Isaiah's Answer", summary: '"The virgin daughter of Zion despises you. Who have you mocked? The Holy One of Israel. You have not entered this city. You will not shoot an arrow here."', energy: 'climax' },
      { number: 3, icon: '🌱', title: 'The Sign', summary: 'This year you eat what grows by itself. Next year the same. In the third year: sow and reap. The remnant will take root downward and bear fruit upward.', energy: 'setup' },
      { number: 4, icon: '💀', title: '185,000 Dead', summary: 'That night, the angel of the LORD strikes 185,000 in the Assyrian camp. In the morning: dead bodies everywhere. Sennacherib breaks camp and returns to Nineveh.', energy: 'climax' },
      { number: 5, icon: '🗡️', title: 'Sennacherib Assassinated', summary: 'While worshipping in the temple of his god Nisroch in Nineveh, his sons Adrammelech and Sharezer strike him with the sword and flee to Ararat. His son Esarhaddon reigns.', energy: 'resolution' },
    ],
    connections: [
      { direction: 'back', label: '2 Kings 18', bookSlug: '2-kings', chapter: 18, note: "The Rabshakeh's speech — Hezekiah's response" },
      { direction: 'forward', label: '2 Kings 20', bookSlug: '2-kings', chapter: 20, note: "Hezekiah's illness and the Babylonian envoys" },
    ],
  },

  '2-kings-20': {
    chapterRef: '2 Kings 20',
    title: "Hezekiah's Last Test",
    logline: "Hezekiah is healed from a terminal illness with a 15-year extension. Then he shows the Babylonian envoys everything — and Isaiah delivers the final verdict.",
    scenes: [
      { number: 1, icon: '💀', title: 'The Terminal Prognosis', summary: 'Isaiah comes to Hezekiah: "Set your house in order, for you shall die; you shall not recover." Hezekiah turns his face to the wall and weeps.', energy: 'tension' },
      { number: 2, icon: '🙏', title: 'The Prayer and the Answer', summary: "Before Isaiah has left the middle court, God sends him back: I have heard your prayer. I will add 15 years to your life and deliver you from Assyria.", energy: 'climax', wide: true },
      { number: 3, icon: '🌞', title: 'The Shadow Goes Backward', summary: 'The sign: the shadow on the sundial of Ahaz goes backward 10 steps. The sun reverses. Hezekiah will recover.', energy: 'climax' },
      { number: 4, icon: '🎁', title: 'The Babylonian Envoys', summary: 'Merodach-baladan sends envoys with gifts. Hezekiah shows them everything — the silver, gold, spices, precious oil, armory, all his treasury. Nothing is hidden.', energy: 'tension' },
      { number: 5, icon: '📯', title: "Isaiah's Verdict", summary: '"Everything you showed them will be carried to Babylon. Your sons will be eunuchs in the palace of Babylon." Hezekiah: "At least there will be peace in my days."', energy: 'resolution' },
    ],
    connections: [
      { direction: 'back', label: '2 Kings 19', bookSlug: '2-kings', chapter: 19, note: "Sennacherib's defeat" },
      { direction: 'forward', label: '2 Kings 21', bookSlug: '2-kings', chapter: 21, note: "Manasseh — 55 years of the worst evil in the book" },
    ],
  },

  '2-kings-21': {
    chapterRef: '2 Kings 21',
    title: 'The Worst King',
    logline: "Manasseh reigns 55 years and fills Jerusalem with innocent blood. His evil is so total it seals Judah's fate regardless of what comes next.",
    scenes: [
      { number: 1, icon: '🏚️', title: 'Everything Hezekiah Tore Down', summary: 'Manasseh rebuilds the high places, erects Baal altars in the temple courts, places a carved Asherah image in the temple itself, and worships the host of heaven.', energy: 'tension' },
      { number: 2, icon: '🔥', title: 'Child Sacrifice', summary: '"He burned his son as an offering." He practiced soothsaying, dealt with mediums and necromancers. He did more evil than the nations God drove out before Israel.', energy: 'climax', wide: true },
      { number: 3, icon: '📯', title: 'The Prophetic Verdict', summary: '"I will stretch over Jerusalem the measuring line of Samaria. I will wipe Jerusalem as one wipes a dish, turning it upside down." The exile of the north is coming to the south.', energy: 'climax' },
      { number: 4, icon: '🩸', title: 'Innocent Blood', summary: 'Manasseh sheds very much innocent blood, filling Jerusalem from one end to the other. Tradition says he killed Isaiah by sawing him in two.', energy: 'resolution' },
      { number: 5, icon: '👑', title: 'Amon: Two Years, Same Evil', summary: "Amon reigns 2 years and does exactly as Manasseh. His servants kill him. The people of the land kill the conspirators and make 8-year-old Josiah king.", energy: 'resolution' },
    ],
    connections: [
      { direction: 'back', label: '2 Kings 20', bookSlug: '2-kings', chapter: 20, note: "Hezekiah's faithfulness — now completely undone" },
      { direction: 'forward', label: '2 Kings 22', bookSlug: '2-kings', chapter: 22, note: 'The Book of the Law found — the last chance' },
    ],
  },

  '2-kings-22': {
    chapterRef: '2 Kings 22',
    title: 'The Book Found',
    logline: "While repairing the temple, a priest finds the Book of the Law. Josiah hears it and tears his clothes. The prophetess Huldah delivers two messages.",
    scenes: [
      { number: 1, icon: '👑', title: 'Josiah at Eight', summary: "Josiah becomes king at 8. At 18, he orders temple repairs. He does right, walking in all the way of David. He is the last great hope of the book.", energy: 'setup' },
      { number: 2, icon: '📜', title: 'The Scroll Discovered', summary: 'Hilkiah the priest finds the Book of the Law in the temple. Shaphan the secretary reads it to the king.', energy: 'tension' },
      { number: 3, icon: '😱', title: 'The King Tears His Clothes', summary: '"Great is the wrath of the LORD that is kindled against us, because our fathers have not obeyed the words of this book, to do according to all that is written concerning us."', energy: 'climax', wide: true },
      { number: 4, icon: '🔮', title: 'Huldah the Prophetess', summary: 'They go to Huldah. She confirms: disaster is coming on this place, as written. Because Josiah humbled himself and wept, he will be gathered to his grave in peace before the disaster comes.', energy: 'climax' },
      { number: 5, icon: '📯', title: 'Two Messages', summary: "Disaster is coming — but not in Josiah's lifetime. One good king cannot undo what 55 years of Manasseh did. The mercy and the tragedy exist at the same time.", energy: 'resolution' },
    ],
    connections: [
      { direction: 'back', label: '2 Kings 21', bookSlug: '2-kings', chapter: 21, note: "Manasseh's evil sealed the verdict" },
      { direction: 'forward', label: '2 Kings 23', bookSlug: '2-kings', chapter: 23, note: "Josiah's reform — the greatest in the book" },
    ],
  },

  '2-kings-23': {
    chapterRef: '2 Kings 23',
    title: 'The Great Reform',
    logline: "Josiah destroys every altar, high place, and cult object in the land — and celebrates a Passover that hasn't been kept since the judges.",
    scenes: [
      { number: 1, icon: '📜', title: 'The Covenant Read Aloud', summary: "Josiah reads the entire Book of the Law to all the people in the temple. They covenant to follow it. The most complete covenant renewal since Joshua.", energy: 'setup' },
      { number: 2, icon: '💥', title: 'The Great Purge', summary: "Josiah tears down Baal altars, the Asherah, the high places for Chemosh and Molech, the horses dedicated to the sun, the high places Solomon built. All of it, in one chapter.", energy: 'climax', wide: true },
      { number: 3, icon: '🏚️', title: 'Bethel Fulfilled', summary: 'Josiah burns bones on the altar at Bethel — fulfilling the prophecy from 1 Kings 13, spoken 300 years earlier, that named him by name.', energy: 'climax' },
      { number: 4, icon: '🐑', title: 'The Great Passover', summary: '"No such Passover had been kept since the days of the judges." The entire nation observes it together. The calendar of covenant is reset.', energy: 'climax' },
      { number: 5, icon: '💔', title: "The Verdict Stands", summary: "Still, the LORD did not turn from his great wrath because of Manasseh. Josiah dies at Megiddo, shot by Pharaoh Necho. The greatest reform doesn't save the city.", energy: 'resolution' },
    ],
    connections: [
      { direction: 'back', label: '2 Kings 22', bookSlug: '2-kings', chapter: 22, note: 'The Book found; Huldah\'s prophecy' },
      { direction: 'forward', label: '2 Kings 24', bookSlug: '2-kings', chapter: 24, note: 'Babylon comes — the first deportation' },
    ],
  },

  '2-kings-24': {
    chapterRef: '2 Kings 24',
    title: 'Babylon Comes',
    logline: "Three kings in one chapter. Three deportations begin. Everything of value — people, gold, vessels — flows toward Babylon.",
    scenes: [
      { number: 1, icon: '👑', title: "Jehoiakim's Rebellion", summary: "Jehoiakim serves Nebuchadnezzar 3 years, then rebels. Babylon sends raiding bands. 'Surely this came at the command of the LORD, to remove Judah from his sight, for the sins of Manasseh.'", energy: 'setup' },
      { number: 2, icon: '👑', title: 'Jehoiachin: 3 Months', summary: "Jehoiachin reigns 3 months before Nebuchadnezzar himself comes. He surrenders.", energy: 'tension' },
      { number: 3, icon: '💰', title: 'The Temple Plundered', summary: 'Nebuchadnezzar cuts in pieces the gold vessels Solomon made. Just as Isaiah had prophesied to Hezekiah 100 years earlier.', energy: 'climax', wide: true },
      { number: 4, icon: '🔗', title: 'The Best People Exiled', summary: "10,000 captives taken: the king, his mother, his wives, his officials, the military, the craftsmen. Only the poorest of the people remain.", energy: 'climax' },
      { number: 5, icon: '👑', title: 'Zedekiah: The Last King', summary: "Nebuchadnezzar makes Mattaniah king and renames him Zedekiah. The last king. When he rebels, there will be no more mercy.", energy: 'resolution' },
    ],
    connections: [
      { direction: 'back', label: '2 Kings 23', bookSlug: '2-kings', chapter: 23, note: "Josiah's death; the final kings begin" },
      { direction: 'forward', label: '2 Kings 25', bookSlug: '2-kings', chapter: 25, note: 'Jerusalem falls. The temple burns. The exile.' },
    ],
  },

  '2-kings-25': {
    chapterRef: '2 Kings 25',
    title: 'The End',
    logline: "Jerusalem falls. The temple burns. The exile begins. A thousand years of covenant history collapses — but one lamp remains lit.",
    scenes: [
      { number: 1, icon: '🏰', title: 'The Siege', summary: 'Zedekiah rebels. Nebuchadnezzar besieges Jerusalem for 18 months. Famine inside is severe. A breach is made in the wall.', energy: 'tension' },
      { number: 2, icon: '🏃', title: 'Zedekiah Caught', summary: 'Zedekiah escapes by night through the royal garden. He is overtaken near Jericho. He watches his sons killed — the last thing he sees before his eyes are put out. He is taken to Babylon in bronze chains.', energy: 'climax', wide: true },
      { number: 3, icon: '🔥', title: 'The Temple Burns', summary: 'Nebuzaradan burns the temple, the palace, every great house in Jerusalem. He breaks down the walls. The place where God said he would dwell forever is ash.', energy: 'climax' },
      { number: 4, icon: '🔗', title: 'The Exile', summary: 'The rest of the population is carried to Babylon. Only the poorest remain to tend the land. Gedaliah is appointed governor — then assassinated. The remnant flees to Egypt.', energy: 'resolution' },
      { number: 5, icon: '🕯️', title: 'One Lamp Remains', summary: '37 years into exile, Jehoiachin is released from prison in Babylon and given a seat at the king\'s table for the rest of his life. The line of David is not dead. The story is not over.', energy: 'resolution' },
    ],
    connections: [
      { direction: 'back', label: '2 Kings 24', bookSlug: '2-kings', chapter: 24, note: 'The first deportations — now the final one' },
    ],
  },
}
