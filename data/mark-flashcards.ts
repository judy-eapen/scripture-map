import { MARK_6_FLASHCARDS } from './mark-6-flashcards'
import { MARK_LESSONS_7_16 } from './mark-lessons-7-16'

export type MarkFlashcard = { id: string; scene: string; passage: string; kind: 'fact' | 'understanding'; question: string; answer: string }
type Lesson = { eyebrow: string; title: string; passage: string; summary: string; details: string[]; carefulNote?: string }

function scenesFor(chapter: number): Lesson[] {
  const lessons = MARK_LESSONS_7_16[chapter as keyof typeof MARK_LESSONS_7_16] as readonly Lesson[] | undefined
  return lessons?.filter(item => item.eyebrow !== 'Chapter map' && item.eyebrow !== 'Chapter review') ?? []
}

const CURATED: Record<number, Array<[string, string, string, string]>> = {
  7: [
    ['3–4', 'Why did the Pharisees wash before eating, and what other washings does Mark name?', 'They held the tradition of the elders, including special handwashing and washings of cups, pitchers, copper vessels, and couches.', 'Why are they asking about washing?'],
    ['21–22', 'Which evils does Jesus explicitly list as coming from within the human heart?', 'Evil thoughts, adulteries, fornications, murders, thefts, covetousness, wickedness, deceit, lewdness, an evil eye, blasphemy, pride, and foolishness.', 'What comes from the heart'],
  ],
  8: [
    ['1–10', 'What numbers distinguish Mark 8’s feeding from Mark 6’s feeding?', 'The crowd had stayed three days; there were seven loaves and a few small fish, about four thousand people, and seven large baskets left.', 'Compassion and seven baskets'],
    ['19–20', 'What two feeding totals did Jesus make the disciples recall?', 'Five loaves for five thousand with twelve baskets, and seven loaves for four thousand with seven baskets.', 'Leaven and short memories'],
  ],
  9: [
    ['2–4', 'Who went up the high mountain, and who appeared with Jesus there?', 'Peter, James, and John went with Jesus; Elijah and Moses appeared and talked with Him.', '“Listen to Him”'],
    ['7', 'What did the voice from the cloud say at the Transfiguration?', '“This is My beloved Son. Hear Him!”', '“Listen to Him”'],
  ],
  10: [
    ['33–34', 'What sequence did Jesus predict would happen to the Son of Man in Jerusalem?', 'He would be delivered to the chief priests and scribes, condemned, handed to Gentiles, mocked, scourged, spit upon, killed, and rise on the third day.', 'The Son of Man came to serve'],
    ['46', 'What does Mark tell us about Bartimaeus before he calls to Jesus?', 'He was blind, the son of Timaeus, and sat begging by the road as Jesus left Jericho.', 'Bartimaeus follows on the road'],
    ['49–50', 'How did Bartimaeus respond when Jesus called him?', 'He took courage, threw aside his garment, rose, and came to Jesus.', 'Bartimaeus follows on the road'],
  ],
  12: [
    ['13–17', 'Who joined to trap Jesus about taxes, and what object did He ask them to bring?', 'Pharisees and Herodians came, and Jesus asked for a denarius.', 'Two traps, two answers'],
    ['18–27', 'Which group questioned Jesus about resurrection, and what mistaken assumptions did He identify?', 'The Sadducees, who say there is no resurrection; Jesus said they did not know the Scriptures or God’s power.', 'Two traps, two answers'],
    ['28–34', 'What two commandments did Jesus identify as greatest?', 'Love the one Lord with all heart, soul, mind, and strength, and love your neighbor as yourself.', 'The greatest commandments'],
  ],
  14: [
    ['13–16', 'What sign identified the place where the disciples should prepare Passover?', 'They would meet a man carrying a pitcher of water and follow him to a furnished and prepared upper room.', 'Passover becomes covenant meal'],
    ['22–24', 'What did Jesus say over the bread and the cup?', 'He identified the bread with His body and the cup with His blood of the new covenant, shed for many.', 'Passover becomes covenant meal'],
    ['55–59', 'Why did the testimony against Jesus fail to agree?', 'Many bore false witness, including claims about destroying the temple, but their testimonies did not agree.', 'Jesus confesses; Peter denies'],
    ['66–72', 'What marked Peter’s three denials, and what did he do when he remembered Jesus’ words?', 'After his third denial the rooster crowed a second time; Peter remembered the prediction, broke down, and wept.', 'Jesus confesses; Peter denies'],
  ],
  15: [
    ['21', 'Who was compelled to carry Jesus’ cross, and whose father was he?', 'Simon of Cyrene, the father of Alexander and Rufus.', 'Mocked as King, crucified at Golgotha'],
    ['25, 33–34', 'What times does Mark give for the Crucifixion and the darkness?', 'Jesus was crucified at the third hour; darkness covered the land from the sixth to the ninth hour, when Jesus cried out.', 'Darkness, death, and confession'],
    ['40–41', 'Which women does Mark name as witnesses from a distance?', 'Mary Magdalene, Mary the mother of James the Less and Joses, and Salome; Mark says they had followed and served Jesus in Galilee.', 'Darkness, death, and confession'],
    ['42–47', 'Who arranged Jesus’ burial, and who watched where He was laid?', 'Joseph of Arimathea requested and buried the body; Mary Magdalene and Mary the mother of Joses observed the tomb.', 'Joseph’s tomb; the women watch'],
  ],
  16: [
    ['1–2', 'Which women brought spices to the tomb, and when did they arrive?', 'Mary Magdalene, Mary the mother of James, and Salome came very early on the first day of the week, when the sun had risen.', 'The stone is already rolled away'],
    ['5–7', 'What message did the young man in the tomb give the women?', 'Jesus of Nazareth, who was crucified, had risen; they should tell His disciples and Peter that He was going before them to Galilee.', 'The stone is already rolled away'],
    ['15–18', 'What mission and accompanying signs are named in the received ending?', 'Proclaim the gospel to every creature; signs include casting out demons, speaking with new tongues, divine protection in danger, and healing the sick.', 'Proclaim the gospel to every creature'],
  ],
}

function factQuestion(chapter: number, scene: string, detail: string) {
  const words = detail.replace(/[.!]$/, '').split(' ')
  const visible = words.slice(0, Math.max(4, Math.ceil(words.length * 0.55))).join(' ')
  return `Complete this important Mark ${chapter} fact from “${scene}”: “${visible} …”`
}

function generateChapter(chapter: number): MarkFlashcard[] {
  const scenes = scenesFor(chapter)
  const facts = scenes.flatMap((scene, sceneIndex) => scene.details.map((detail, detailIndex) => ({ id: `m${chapter}-s${sceneIndex + 1}f${detailIndex + 1}`, scene: scene.title, passage: scene.passage, kind: 'fact' as const, question: factQuestion(chapter, scene.title, detail), answer: `${detail} (${scene.passage})` })))
  const curated = (CURATED[chapter] ?? []).map(([verses, question, answer, scene], index) => ({ id: `m${chapter}-d${String(index + 1).padStart(2, '0')}`, scene, passage: `Mark ${chapter}:${verses}`, kind: 'fact' as const, question, answer: `${answer} (Mark ${chapter}:${verses})` }))
  const understanding = scenes.map((scene, index) => ({ id: `m${chapter}-u${String(index + 1).padStart(2, '0')}`, scene: scene.title, passage: scene.passage, kind: 'understanding' as const, question: `In your own words, what should a careful reader understand from “${scene.title}”?`, answer: `Sample answer / key ideas: ${scene.summary} ${scene.details.join(' ')}${scene.carefulNote ? ` Read carefully: ${scene.carefulNote}` : ''} (${scene.passage})` }))
  return [...facts, ...curated, ...understanding]
}

const GENERATED = Object.fromEntries(Array.from({ length: 10 }, (_, index) => index + 7).map(chapter => [chapter, generateChapter(chapter)])) as Record<number, MarkFlashcard[]>

export function getMarkFlashcards(chapter: number): MarkFlashcard[] { return chapter === 6 ? MARK_6_FLASHCARDS : GENERATED[chapter] ?? [] }
export function getMarkFlashcardScenes(chapter: number): string[] { return Array.from(new Set(getMarkFlashcards(chapter).map(card => card.scene))) }
export const MARK_FLASHCARD_CHAPTERS = Array.from({ length: 11 }, (_, index) => index + 6)
