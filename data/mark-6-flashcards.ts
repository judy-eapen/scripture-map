export const MARK_6_FLASHCARD_SCENES = [
  'Nazareth',
  'The Twelve Sent',
  'Herod and John',
  'Return and Feeding',
  'Jesus Walks on the Sea',
  'Gennesaret',
] as const

export type Mark6FlashcardScene = typeof MARK_6_FLASHCARD_SCENES[number]
export type Mark6Flashcard = {
  id: string
  scene: Mark6FlashcardScene
  passage: string
  kind: 'fact' | 'understanding'
  question: string
  answer: string
  hint?: string
}

const f = (id: string, scene: Mark6FlashcardScene, passage: string, question: string, answer: string, hint?: string): Mark6Flashcard => ({ id, scene, passage, kind: 'fact', question, answer, hint })
const u = (id: string, scene: Mark6FlashcardScene, passage: string, question: string, answer: string, hint?: string): Mark6Flashcard => ({ id, scene, passage, kind: 'understanding', question, answer, hint })

export const MARK_6_FLASHCARDS: Mark6Flashcard[] = [
  f('m6-001', 'Nazareth', 'Mark 6:1', 'Who followed Jesus when He came to His own country?', 'His disciples followed Him. (Mark 6:1)'),
  f('m6-002', 'Nazareth', 'Mark 6:2', 'On what day and in what setting did Jesus teach in His own country?', 'On the Sabbath, in the synagogue. (Mark 6:2)'),
  f('m6-003', 'Nazareth', 'Mark 6:2', 'How did many listeners first react to Jesus’ teaching?', 'They were astonished. (Mark 6:2)'),
  f('m6-004', 'Nazareth', 'Mark 6:2', 'What three things did the listeners question about Jesus?', 'Where He got these things, what wisdom had been given to Him, and how mighty works were performed by His hands. (Mark 6:2)'),
  f('m6-005', 'Nazareth', 'Mark 6:3', 'What occupation did the people call Jesus?', 'They called Him “the carpenter.” (Mark 6:3)'),
  f('m6-006', 'Nazareth', 'Mark 6:3', 'Whose son did the people call Jesus?', 'The son of Mary. (Mark 6:3)'),
  f('m6-007', 'Nazareth', 'Mark 6:3', 'Which four men are named as Jesus’ brothers in Mark 6:3?', 'James, Joses, Judas, and Simon. Mark uses kinship language; the verse itself does not settle modern questions about the precise biological relationship. (Mark 6:3)'),
  f('m6-008', 'Nazareth', 'Mark 6:3', 'What unnamed relatives of Jesus did the townspeople say were with them?', 'His sisters. Mark does not give their names or number. (Mark 6:3)'),
  f('m6-009', 'Nazareth', 'Mark 6:3', 'What did the people do after listing Jesus’ familiar family connections?', 'They were offended at Him. (Mark 6:3)'),
  f('m6-010', 'Nazareth', 'Mark 6:1–4', 'In what narrative setting did Jesus say a prophet lacks honor?', 'In His own country—presented here as the hometown setting where He taught in the synagogue and the people took offense. The saying also names relatives and one’s own house. (Mark 6:1–4)'),
  f('m6-011', 'Nazareth', 'Mark 6:4', 'What three circles did Jesus name where a prophet may lack honor?', 'His own country, among his own relatives, and in his own house. (Mark 6:4)'),
  f('m6-012', 'Nazareth', 'Mark 6:5', 'What healing did Jesus still perform there?', 'He laid His hands on a few sick people and healed them. (Mark 6:5)'),
  f('m6-013', 'Nazareth', 'Mark 6:6', 'At what did Jesus marvel?', 'He marveled at their unbelief. (Mark 6:6)'),
  f('m6-014', 'Nazareth', 'Mark 6:6', 'What did Jesus do after the rejection?', 'He went around the surrounding villages in a circuit, teaching. (Mark 6:6)'),
  u('m6-015', 'Nazareth', 'Mark 6:5–6', 'Why did Jesus do few mighty works in Nazareth? Explain in your own words.', 'Sample answer / key ideas: The people did not receive Him with faith. Mark connects their unbelief with the few mighty works, while also saying Jesus healed some sick people. This is not divine powerlessness and does not blame sick people for illness. (Mark 6:5–6)'),

  f('m6-016', 'The Twelve Sent', 'Mark 6:7', 'How did Jesus send out the Twelve?', 'Two by two. (Mark 6:7)'),
  f('m6-017', 'The Twelve Sent', 'Mark 6:7', 'What authority did Jesus give the Twelve?', 'Authority over unclean spirits. (Mark 6:7)'),
  f('m6-018', 'The Twelve Sent', 'Mark 6:8–9', 'What two travel items were the Twelve explicitly allowed?', 'A staff and sandals. (Mark 6:8–9)'),
  f('m6-019', 'The Twelve Sent', 'Mark 6:8', 'What food were the Twelve told not to take?', 'No bread. (Mark 6:8)'),
  f('m6-020', 'The Twelve Sent', 'Mark 6:8', 'What carrying item were the Twelve told not to take?', 'No bag. (Mark 6:8)'),
  f('m6-021', 'The Twelve Sent', 'Mark 6:8', 'What money were the Twelve told not to carry?', 'No copper in their money belts. (Mark 6:8)'),
  f('m6-022', 'The Twelve Sent', 'Mark 6:9', 'How many tunics were the Twelve told to wear?', 'One; they were told not to put on two tunics. (Mark 6:9)'),
  f('m6-023', 'The Twelve Sent', 'Mark 6:10', 'How long were the Twelve to stay in a house?', 'They were to stay there until they departed from that place. (Mark 6:10)'),
  f('m6-024', 'The Twelve Sent', 'Mark 6:11', 'What were the Twelve to do when a place would not receive or hear them?', 'Depart and shake off the dust under their feet as a testimony against that place. (Mark 6:11)'),
  f('m6-025', 'The Twelve Sent', 'Mark 6:11', 'In the NKJV/Orthodox text, which two ancient cities are compared favorably with a rejecting city on judgment day?', 'Sodom and Gomorrah. This clause appears in the NKJV/Orthodox textual tradition but is absent from some early manuscripts and modern translations. (Mark 6:11)'),
  f('m6-026', 'The Twelve Sent', 'Mark 6:12', 'What message did the Twelve preach?', 'That people should repent. (Mark 6:12)'),
  f('m6-027', 'The Twelve Sent', 'Mark 6:13', 'What did the Twelve do to many demons?', 'They cast them out. (Mark 6:13)'),
  f('m6-028', 'The Twelve Sent', 'Mark 6:13', 'What did the Twelve use when ministering to many sick people?', 'They anointed them with oil and healed them. (Mark 6:13)'),
  u('m6-029', 'The Twelve Sent', 'Mark 6:7–13', 'What do the Twelve’s message and actions show about their mission?', 'Sample answer / key ideas: Jesus shares His authority with them; they call people to repentance, confront unclean spirits, and care for the sick while depending on God and received hospitality. (Mark 6:7–13)'),

  f('m6-030', 'Herod and John', 'Mark 6:14', 'Why did Herod hear about Jesus?', 'Because Jesus’ name had become well known. (Mark 6:14)'),
  f('m6-031', 'Herod and John', 'Mark 6:14–15', 'What three identifications of Jesus circulated?', 'John the Baptist raised from the dead, Elijah, or the Prophet / one like the prophets. (Mark 6:14–15)'),
  f('m6-032', 'Herod and John', 'Mark 6:16', 'Whom did Herod think Jesus was?', 'John, whom Herod had beheaded, raised from the dead. (Mark 6:16)'),
  f('m6-033', 'Herod and John', 'Mark 6:17', 'Why had Herod imprisoned John?', 'Because of Herodias, the wife of his brother Philip, whom Herod had married. (Mark 6:17)'),
  f('m6-034', 'Herod and John', 'Mark 6:18', 'What had John told Herod about the marriage?', '“It is not lawful for you to have your brother’s wife.” (Mark 6:18)'),
  f('m6-035', 'Herod and John', 'Mark 6:19', 'How did Herodias respond to John?', 'She held a grudge against him and wanted to kill him, but she could not. (Mark 6:19)'),
  f('m6-036', 'Herod and John', 'Mark 6:20', 'Why did Herod protect John?', 'Herod feared John, knowing he was a just and holy man. (Mark 6:20)'),
  f('m6-037', 'Herod and John', 'Mark 6:20', 'How does the NKJV/Orthodox text describe Herod’s response when he heard John?', 'Herod “did many things” and heard John gladly, even though his later choices opposed John’s message. (Mark 6:20)'),
  f('m6-038', 'Herod and John', 'Mark 6:21', 'Whose birthday was celebrated at the banquet?', 'Herod’s birthday—not the daughter’s. (Mark 6:21)'),
  f('m6-039', 'Herod and John', 'Mark 6:21', 'Which three guest groups does Mark name at Herod’s banquet?', 'Herod’s nobles, high officers, and the chief men of Galilee. (Mark 6:21)'),
  f('m6-040', 'Herod and John', 'Mark 6:22', 'Who danced at the banquet?', 'Herodias’s daughter. Mark does not name her in this Gospel. (Mark 6:22)'),
  f('m6-041', 'Herod and John', 'Mark 6:22', 'Whom did the daughter’s dance please?', 'Herod and those sitting with him. (Mark 6:22)'),
  f('m6-042', 'Herod and John', 'Mark 6:22–23', 'What did Herod promise the girl?', 'Whatever she asked, up to half his kingdom. (Mark 6:22–23)'),
  f('m6-043', 'Herod and John', 'Mark 6:24', 'Whom did the daughter consult about her request?', 'Her mother, Herodias. (Mark 6:24)'),
  f('m6-044', 'Herod and John', 'Mark 6:24–25', 'What did Herodias tell her daughter to request?', 'The head of John the Baptist. The lesson remembers the fact without graphic treatment. (Mark 6:24–25)'),
  f('m6-045', 'Herod and John', 'Mark 6:25', 'How quickly and in what form did the girl present the request?', 'She came in immediately, with haste, and asked for it at once on a platter. (Mark 6:25)'),
  f('m6-046', 'Herod and John', 'Mark 6:26', 'How did Herod feel about the request?', 'He was exceedingly sorry. (Mark 6:26)'),
  f('m6-047', 'Herod and John', 'Mark 6:26', 'Why did Herod grant the request?', 'Because of his oaths and the guests; he did not want to refuse her. Mark still presents the order as Herod’s choice. (Mark 6:26)'),
  f('m6-048', 'Herod and John', 'Mark 6:27–28', 'Trace the order of delivery after Herod gave the command.', 'An executioner carried out the order; John’s head was brought to the girl, and the girl gave it to her mother. (Mark 6:27–28)'),
  f('m6-049', 'Herod and John', 'Mark 6:29', 'What did John’s disciples do when they heard?', 'They took his body and laid it in a tomb. (Mark 6:29)'),
  u('m6-050', 'Herod and John', 'Mark 6:20, 26–27', 'Why is Herod morally responsible even though he feared John and felt sorry?', 'Sample answer / key ideas: Herod knew John was just and holy and was grieved, but he valued his public oath and reputation before the guests over doing what was right. He still chose to give the order. (Mark 6:20, 26–27)'),

  f('m6-051', 'Return and Feeding', 'Mark 6:30', 'What did the apostles report to Jesus when they returned?', 'Everything they had done and everything they had taught. (Mark 6:30)'),
  f('m6-052', 'Return and Feeding', 'Mark 6:31', 'Why did Jesus invite the apostles to rest in a deserted place?', 'Many people were coming and going, and they did not even have time to eat. (Mark 6:31)'),
  f('m6-053', 'Return and Feeding', 'Mark 6:32', 'How did Jesus and the apostles travel toward the deserted place?', 'By boat, by themselves. (Mark 6:32)'),
  f('m6-054', 'Return and Feeding', 'Mark 6:33', 'How did the crowds respond when they recognized them leaving?', 'People ran on foot from all the cities, arrived before them, and gathered to Jesus. (Mark 6:33)'),
  f('m6-055', 'Return and Feeding', 'Mark 6:34', 'Why was Jesus moved with compassion for the crowd?', 'They were like sheep without a shepherd. (Mark 6:34)'),
  f('m6-056', 'Return and Feeding', 'Mark 6:34', 'What did Jesus do first for the shepherdless crowd?', 'He began to teach them many things. (Mark 6:34)'),
  f('m6-057', 'Return and Feeding', 'Mark 6:35–36', 'What did the disciples suggest late in the day?', 'Send the people into the surrounding country and villages to buy bread. (Mark 6:35–36)'),
  f('m6-058', 'Return and Feeding', 'Mark 6:37', 'What command did Jesus give the disciples about the crowd?', '“You give them something to eat.” (Mark 6:37)'),
  f('m6-059', 'Return and Feeding', 'Mark 6:37', 'What large amount did the disciples mention when discussing bread?', 'Two hundred denarii worth of bread. Mark does not say they possessed that sum. (Mark 6:37)'),
  f('m6-060', 'Return and Feeding', 'Mark 6:38', 'What food inventory did the disciples find?', 'Five loaves and two fish. (Mark 6:38)'),
  f('m6-061', 'Return and Feeding', 'Mark 6:39', 'On what did Jesus command everyone to sit?', 'On the green grass. (Mark 6:39)'),
  f('m6-062', 'Return and Feeding', 'Mark 6:40', 'In what group sizes did the people sit?', 'In groups of hundreds and fifties. (Mark 6:40)'),
  f('m6-063', 'Return and Feeding', 'Mark 6:41', 'What four actions did Jesus perform with the loaves?', 'He looked up to heaven, blessed, broke the loaves, and gave them to the disciples. (Mark 6:41)'),
  f('m6-064', 'Return and Feeding', 'Mark 6:41', 'Who distributed the food to the crowd?', 'The disciples distributed what Jesus gave them. (Mark 6:41)'),
  f('m6-065', 'Return and Feeding', 'Mark 6:42', 'How much did the people eat?', 'They all ate and were filled—satisfied. (Mark 6:42)'),
  f('m6-066', 'Return and Feeding', 'Mark 6:43', 'How many baskets of leftovers were gathered?', 'Twelve baskets full of fragments and fish. (Mark 6:43)'),
  f('m6-067', 'Return and Feeding', 'Mark 6:44', 'How many people does Mark specifically count as eating the loaves?', 'About five thousand men. Mark does not provide a total count for every person present. (Mark 6:44)'),
  u('m6-068', 'Return and Feeding', 'Mark 6:34–44', 'How does Jesus meet both kinds of need in this scene?', 'Sample answer / key ideas: He teaches the crowd because they are like sheep without a shepherd, and He also feeds them when they are hungry. His compassion addresses spiritual and physical need. (Mark 6:34–44)'),

  f('m6-069', 'Jesus Walks on the Sea', 'Mark 6:45', 'Immediately after the feeding, where did Jesus direct the disciples to go by boat?', 'Toward Bethsaida, on the other side, while He sent the crowd away. (Mark 6:45)'),
  f('m6-070', 'Jesus Walks on the Sea', 'Mark 6:46', 'Where did Jesus go after dismissing the crowd?', 'To the mountain to pray. (Mark 6:46)'),
  f('m6-071', 'Jesus Walks on the Sea', 'Mark 6:47', 'Where were the boat and Jesus when evening came?', 'The boat was in the middle of the sea, and Jesus was alone on land. (Mark 6:47)'),
  f('m6-072', 'Jesus Walks on the Sea', 'Mark 6:48', 'What struggle did Jesus see the disciples having?', 'They were straining at rowing because the wind was against them. (Mark 6:48)'),
  f('m6-073', 'Jesus Walks on the Sea', 'Mark 6:48', 'During what watch of the night did Jesus come to them?', 'About the fourth watch—the final part of the night in Roman reckoning, roughly 3–6 a.m. (Mark 6:48; the clock range is historical context.)'),
  f('m6-074', 'Jesus Walks on the Sea', 'Mark 6:48', 'How did Jesus come to the disciples?', 'Walking on the sea. (Mark 6:48)'),
  f('m6-075', 'Jesus Walks on the Sea', 'Mark 6:48', 'What surprising intention does Mark state as Jesus approached?', 'He “would have passed them by.” (Mark 6:48)'),
  f('m6-076', 'Jesus Walks on the Sea', 'Mark 6:49–50', 'What did the disciples think they saw?', 'They thought Jesus was a ghost, cried out, and were troubled because they all saw Him. (Mark 6:49–50)'),
  f('m6-077', 'Jesus Walks on the Sea', 'Mark 6:50', 'What three-part reassurance did Jesus give?', '“Be of good cheer! It is I; do not be afraid.” (Mark 6:50)'),
  f('m6-078', 'Jesus Walks on the Sea', 'Mark 6:51', 'What happened when Jesus entered the boat?', 'The wind ceased. (Mark 6:51)'),
  f('m6-079', 'Jesus Walks on the Sea', 'Mark 6:51', 'How did the disciples react after the wind ceased?', 'They were greatly amazed beyond measure and marveled. (Mark 6:51)'),
  f('m6-080', 'Jesus Walks on the Sea', 'Mark 6:52', 'Why does Mark say the disciples were so amazed?', 'They had not understood about the loaves, because their hearts were hardened. (Mark 6:52)'),
  f('m6-081', 'Jesus Walks on the Sea', 'Mark 6:45–52', 'Which famous action from Matthew’s account is not narrated in Mark 6?', 'Peter walking on the water. Do not import that detail into a Mark-only retelling. (Compare Matthew 14:28–31; it is absent from Mark 6:45–52.)'),
  u('m6-082', 'Jesus Walks on the Sea', 'Mark 6:45–52', 'What connection does Mark make between the feeding and the sea crossing?', 'Sample answer / key ideas: The disciples’ amazement shows they had not understood what the loaves revealed about Jesus. The sea scene continues their lesson about who He is and His authority. (Mark 6:51–52)'),

  f('m6-083', 'Gennesaret', 'Mark 6:53', 'Where did Jesus and the disciples land after crossing?', 'At Gennesaret, where they anchored. (Mark 6:53)'),
  f('m6-084', 'Gennesaret', 'Mark 6:54', 'What happened as soon as they came out of the boat?', 'The people immediately recognized Jesus. (Mark 6:54)'),
  f('m6-085', 'Gennesaret', 'Mark 6:55', 'What did people do throughout the surrounding region?', 'They ran through it and carried sick people on beds to wherever they heard Jesus was. (Mark 6:55)'),
  f('m6-086', 'Gennesaret', 'Mark 6:56', 'What three kinds of places does Mark name in the final healing summary?', 'Villages, cities, and the country. (Mark 6:56)'),
  f('m6-087', 'Gennesaret', 'Mark 6:56', 'Where were sick people laid?', 'In the marketplaces. (Mark 6:56)'),
  f('m6-088', 'Gennesaret', 'Mark 6:56', 'What did the sick beg to touch?', 'The hem of Jesus’ garment. (Mark 6:56)'),
  f('m6-089', 'Gennesaret', 'Mark 6:56', 'What happened to those who touched Jesus?', 'As many as touched Him were made well. (Mark 6:56)'),
  u('m6-090', 'Gennesaret', 'Mark 6:53–56', 'How does the response in Gennesaret contrast with the response in Jesus’ own country?', 'Sample answer / key ideas: In His own country many took offense and Jesus marveled at unbelief; in Gennesaret people immediately recognized Him, sought Him throughout the region, and brought the sick. (Mark 6:3–6, 53–56)'),
]
