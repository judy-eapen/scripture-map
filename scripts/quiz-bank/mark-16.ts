// Mark 16 — quiz bank (NKJV, Orthodox Study Bible text as stored). Every row is anchored to a
// verse; fill-in-the-blank rows are verified against the stored verse text by scripts/seed-quiz-bank.ts.
import { mc, blank, word, tf, sa, type ChapterBank } from './types';

const bank: ChapterBank = {
  book: 'Mark',
  chapter: 16,
  tag: 'quiz-v2-mark-16',
  rows: [
    // ══════════════════════════════════ v1–4 · The women come to the tomb
    mc(1, 'Which three women bought spices after the Sabbath was past, so that they might come and anoint Jesus?', ['Mary Magdalene, Mary the mother of James, and Salome', 'Mary Magdalene, Mary the mother of Joses, and Salome', 'Mary the mother of James, Salome, and Peter’s mother-in-law', 'Mary Magdalene, Salome, and the mother of James and John'], 1),
    blank(1, 'Now when the Sabbath was past, Mary Magdalene, Mary the mother of James, and Salome bought _____, that they might come and anoint Him.', 'spices', 1),
    word(1, 'Along with Mary Magdalene and Mary the mother of James, which woman went to buy spices to anoint Jesus?', 'Salome', 1),
    sa(2, 'Why did Mary Magdalene, Mary the mother of James, and Salome buy spices once the Sabbath was past?', 'So that they might come and anoint Jesus’ body.', 1),
    tf(1, 'Mary Magdalene, Mary the mother of James, and Salome bought spices after the Sabbath had passed.', true, 1),
    mc(3, 'How is the second Mary who bought spices with Mary Magdalene and Salome identified in Mark 16?', ['Mary the mother of James', 'Mary the mother of Joses', 'Mary the mother of Simon', 'Mary the mother of Judas'], 1),

    mc(1, 'When did the three women come to the tomb with their spices?', ['Early on the first day of the week, when the sun had risen', 'Late on the Sabbath, while the sun was setting', 'At the third hour on Preparation Day', 'At night, before the rooster had crowed'], 2),
    blank(3, 'Very early in the morning, on the _____ day of the week, they came to the tomb when the sun had risen.', 'first', 2),
    word(2, 'On which day of the week did the women come to the tomb very early in the morning?', 'first', 2, ['the first', 'first day', '1st']),
    tf(2, 'The women reached the tomb very early, when the sun had risen.', true, 2),

    mc(1, 'What question did the women ask among themselves on the way to the tomb?', ['"Who will roll away the stone from the door of the tomb for us?"', '"Who will let us pass the guards at the door of the tomb?"', '"Where have they laid Him?"', '"Who will help us anoint Him?"'], 3),
    blank(1, 'And they said among themselves, "Who will roll away the _____ from the door of the tomb for us?"', 'stone', 3),
    sa(2, 'What worried the women as they went to anoint Jesus, and to whom did they voice it?', 'They asked among themselves who would roll away the stone from the door of the tomb for them.', 3),

    mc(2, 'What did the women see when they looked up at the tomb?', ['That the stone had already been rolled away', 'That soldiers were seated at the door', 'That the young man was rolling the stone back', 'That the stone had been broken in pieces'], 4),
    blank(3, 'But when they looked up, they saw that the stone had been rolled away—for it was very _____.', 'large', 4, ['big']),
    tf(1, 'When the women looked up, they saw that the very large stone had been rolled away.', true, 4),
    sa(3, 'What detail does Mark add about the stone at the tomb, and how does it connect to the women’s question on the way?', 'The stone was very large — which is why they had asked who would roll it away for them.', 4),

    // ══════════════════════════════════ v5–8 · The young man in the tomb
    mc(1, 'When the women entered the tomb very early on the first day of the week, whom did they see and what was he wearing?', ['A young man clothed in a long white robe', 'A young man wearing only a linen cloth', 'A man clothed in camel’s hair with a leather belt', 'A centurion standing guard in his armor'], 5),
    blank(1, 'And entering the tomb, they saw a young man clothed in a long _____ robe sitting on the right side; and they were alarmed.', 'white', 5),
    word(3, 'On which side of the tomb was the young man in the long white robe sitting?', 'right', 5, ['the right', 'right side']),
    tf(2, 'The young man in the long white robe was sitting on the right side of the tomb.', true, 5),
    sa(1, 'How did the women react when they entered the tomb and saw the young man in the long white robe?', 'They were alarmed.', 5),
    mc(3, 'What was the young man in the long white robe doing when the women entered the tomb?', ['Sitting on the right side', 'Standing at the door', 'Sitting on the stone', 'Kneeling where Jesus had been laid'], 5),
    blank(3, 'And entering the tomb, they saw a young man clothed in a long white robe sitting on the right side; and they were _____.', 'alarmed', 5),

    mc(2, 'What were the young man’s first words to the alarmed women in the tomb?', ['"Do not be alarmed."', '"Do not be afraid; only believe."', '"Take heart, it is I; do not be afraid."', '"Why do you trouble her?"'], 6),
    blank(2, 'You seek Jesus of _____, who was crucified. He is risen! He is not here.', 'Nazareth', 6),
    word(1, 'The young man told the women that Jesus of Nazareth, who was crucified, was not there — what had happened to Him?', 'risen', 6, ['he is risen', 'arisen', 'resurrected']),
    sa(2, 'How did the young man describe the one the women were seeking?', 'Jesus of Nazareth, who was crucified.', 6),
    tf(1, 'The young man told the women, "He is risen! He is not here," and pointed them to the place where Jesus had been laid.', true, 6),
    mc(3, 'What did the young man invite the women to look at as proof that Jesus was not there?', ['The place where they laid Him', 'The linen cloth left behind', 'The stone that had been rolled away', 'The garden outside the tomb'], 6),
    sa(3, 'Give the young man’s full announcement to the women, from "Do not be alarmed" to "See the place."', 'Do not be alarmed. You seek Jesus of Nazareth, who was crucified. He is risen! He is not here. See the place where they laid Him.', 6),

    mc(1, 'What did the young man tell the women to say to the disciples and to Peter?', ['That Jesus was going before them into Galilee, where they would see Him', 'That Jesus would meet them in Jerusalem at the temple', 'That Jesus had gone ahead to Bethany and would wait there', 'That Jesus would appear to them on the Mount of Olives'], 7),
    blank(1, 'But go, tell His disciples—and _____—that He is going before you into Galilee; there you will see Him, as He said to you.', 'Peter', 7),
    blank(2, 'But go, tell His disciples—and Peter—that He is going before you into _____; there you will see Him, as He said to you.', 'Galilee', 7),
    word(1, 'Where did the young man say Jesus was going before the disciples, where they would see Him?', 'Galilee', 7),
    word(2, 'Which disciple did the young man single out by name when he told the women to go tell the disciples?', 'Peter', 7),
    tf(2, 'The young man told the women that the disciples would see Jesus in Galilee.', true, 7),
    sa(3, 'According to the young man, why should the disciples expect to see Jesus in Galilee?', 'Because He is going before them into Galilee, "as He said to you" — Jesus had already told them so.', 7),
    mc(3, 'How did the young man back up his promise that the disciples would see Jesus in Galilee?', ['"As He said to you"', '"As it is written in the prophets"', '"As Moses commanded you"', '"As I have shown you"'], 7),

    mc(1, 'What did the women do after hearing the young man’s message at the tomb?', ['They fled trembling and amazed, saying nothing to anyone', 'They ran to the disciples and told them everything', 'They wept in the tomb until the disciples arrived', 'They returned to the city to buy more spices'], 8),
    blank(2, 'And they said nothing to anyone, for they were _____.', 'afraid', 8),
    sa(2, 'Why did the women say nothing to anyone after fleeing the tomb?', 'Because they were afraid.', 8),
    tf(1, 'The women left the tomb trembling and amazed and said nothing to anyone.', true, 8),
    tf(3, 'After the young man spoke, the women walked calmly out of the tomb and went straight to tell the disciples.', false, 8, 'They "went out quickly and fled from the tomb... And they said nothing to anyone, for they were afraid."'),
    word(3, 'As the women fled the tomb they trembled and were what?', 'amazed', 8, ['amazement']),

    // ══════════════════════════════════ v9–13 · Appearances to Mary Magdalene and the two
    mc(1, 'To whom did Jesus appear first after He rose early on the first day of the week?', ['Mary Magdalene', 'Peter', 'Mary the mother of James', 'Salome'], 9),
    blank(1, 'Now when He rose early on the first day of the week, He appeared first to Mary _____, out of whom He had cast seven demons.', 'Magdalene', 9),
    blank(3, 'He appeared first to Mary Magdalene, out of whom He had cast _____ demons.', 'seven', 9, ['7']),
    word(2, 'How many demons had Jesus cast out of Mary Magdalene?', 'seven', 9, ['7']),
    tf(1, 'Jesus appeared first to Peter after He rose.', false, 9, 'He "appeared first to Mary Magdalene."'),
    sa(3, 'How does Mark identify Mary Magdalene when he records that the risen Jesus appeared to her first?', 'As the one out of whom He had cast seven demons.', 9),
    mc(3, 'When Mark records the first appearance of the risen Jesus, what does he remind the reader about Mary Magdalene?', ['That He had cast seven demons out of her', 'That she had anointed His head with costly oil', 'That she had looked on from afar at the crucifixion', 'That she was the sister of Salome'], 9),

    mc(2, 'What were Jesus’ companions doing when Mary Magdalene came to tell them she had seen Him?', ['Mourning and weeping', 'Fishing on the sea', 'Sitting at the table', 'Walking into the country'], 10),
    blank(3, 'She went and told those who had been with Him, as they _____ and wept.', 'mourned', 10),
    sa(1, 'What did Mary Magdalene do after the risen Jesus appeared to her?', 'She went and told those who had been with Him, who were mourning and weeping.', 10),
    word(3, 'Mary told those who had been with Jesus as they mourned and did what else?', 'wept', 10, ['weeping', 'weep', 'cried']),

    mc(1, 'How did Jesus’ companions respond when they heard from Mary Magdalene that He was alive and had been seen by her?', ['They did not believe', 'They rejoiced and set out for Galilee', 'They ran to the tomb to see for themselves', 'They asked her to bring Him to them'], 11),
    blank(1, 'And when they heard that He was alive and had been seen by her, they did not _____.', 'believe', 11),
    tf(1, 'When they heard Mary Magdalene’s report that Jesus was alive, His companions believed her at once.', false, 11, '"They did not believe."'),
    sa(3, 'What two things did the mourners hear from Mary Magdalene, and how did they take it?', 'That Jesus was alive and had been seen by her; they did not believe.', 11),

    mc(2, 'After appearing to Mary Magdalene, to whom did Jesus appear next, and where?', ['To two followers walking into the country', 'To Peter alone beside the sea', 'To the eleven seated at the table', 'To the women again at the tomb'], 12),
    blank(2, 'After that, He appeared in another form to _____ of them as they walked and went into the country.', 'two', 12, ['2']),
    word(1, 'How many of Jesus’ followers were walking into the country when He appeared to them?', 'two', 12, ['2']),
    tf(3, 'Jesus appeared to the two who were walking into the country in the same form they had always known.', false, 12, 'He "appeared in another form to two of them."'),

    mc(2, 'What happened when the two who had seen Jesus in the country went and told the rest?', ['The rest did not believe them either', 'The rest believed and rejoiced', 'The rest sent them on to Galilee', 'The rest went out to find Him'], 13),
    tf(2, 'The two who met Jesus in the country kept the appearance to themselves.', false, 13, 'They "went and told it to the rest."'),
    sa(3, 'Compare how the rest received the report of the two from the country with how they had received Mary Magdalene’s report.', 'The same way — they did not believe them either, just as they had not believed Mary.', 13),

    // ══════════════════════════════════ v14–18 · The eleven, the commission, the signs
    mc(1, 'When Jesus appeared to the eleven as they sat at the table, what did He rebuke?', ['Their unbelief and hardness of heart', 'Their fear of the chief priests', 'Their quarrel over who was the greatest', 'Their failure to watch and pray'], 14),
    blank(2, 'Later He appeared to the _____ as they sat at the table; and He rebuked their unbelief and hardness of heart', 'eleven', 14, ['11']),
    word(2, 'How many disciples were sitting at the table when Jesus appeared and rebuked their unbelief?', 'eleven', 14, ['11']),
    tf(2, 'Jesus appeared to the eleven while they were walking on the road to Galilee.', false, 14, 'He appeared to them "as they sat at the table."'),
    sa(3, 'Why did Jesus rebuke the eleven when He appeared to them at the table?', 'Because they did not believe those who had seen Him after He had risen — He rebuked their unbelief and hardness of heart.', 14),
    mc(3, 'What were the eleven doing when Jesus appeared and rebuked their unbelief and hardness of heart?', ['Sitting at the table', 'Walking into the country', 'Mourning and weeping', 'Standing at the tomb'], 14),
    tf(3, 'Jesus rebuked the eleven because they had not believed those who had seen Him after He had risen.', true, 14),

    mc(1, 'What did Jesus command the eleven to do in all the world?', ['Preach the gospel to every creature', 'Heal the sick and anoint them with oil', 'Take nothing for the journey except a staff', 'Cast out demons from every village'], 15),
    blank(1, 'And He said to them, "Go into all the _____ and preach the gospel to every creature.', 'world', 15),
    word(3, 'Jesus told the eleven to preach the gospel to every what?', 'creature', 15, ['creatures']),
    sa(2, 'How far did Jesus send the eleven, and what were they to do there?', 'Into all the world, to preach the gospel to every creature.', 15),

    mc(1, 'According to Jesus’ words to the eleven, who will be saved?', ['He who believes and is baptized', 'He who keeps all the commandments', 'He who sells all he has and gives to the poor', 'He who endures to the end'], 16),
    blank(1, 'He who believes and is _____ will be saved; but he who does not believe will be condemned.', 'baptized', 16),
    blank(2, 'He who believes and is baptized will be saved; but he who does not believe will be _____.', 'condemned', 16),
    tf(3, 'Jesus said that he who does not believe and is not baptized will be condemned.', false, 16, 'The condemnation clause names only unbelief: "he who does not believe will be condemned."'),
    sa(3, 'State the two outcomes Jesus set before the eleven in Mark 16:16, and what decides each.', 'He who believes and is baptized will be saved; he who does not believe will be condemned.', 16),
    mc(3, 'In Jesus’ words to the eleven, what alone is named as the ground of condemnation?', ['Not believing', 'Not being baptized', 'Not preaching the gospel', 'Hardness of heart'], 16),

    mc(2, 'Which two signs did Jesus name first among those that would follow believers?', ['Casting out demons and speaking with new tongues', 'Raising the dead and cleansing lepers', 'Walking on the sea and stilling the storm', 'Multiplying loaves and opening blind eyes'], 17),
    blank(2, 'And these signs will follow those who believe: In My name they will cast out _____; they will speak with new tongues;', 'demons', 17),
    blank(2, 'In My name they will cast out demons; they will speak with new _____;', 'tongues', 17),
    sa(2, 'Whom did Jesus say the signs would follow, and what was the first sign He named?', 'Those who believe; the first sign is casting out demons in His name.', 17),
    word(3, 'Jesus said believers would speak with new what?', 'tongues', 17, ['languages']),

    mc(2, 'What did Jesus say would happen if believers drank anything deadly?', ['It would by no means hurt them', 'They would be healed by the laying on of hands', 'They would recover after three days', 'It would be a sign to those who do not believe'], 18),
    blank(3, 'they will take up _____; and if they drink anything deadly, it will by no means hurt them;', 'serpents', 18, ['snakes']),
    blank(1, 'they will lay hands on the _____, and they will recover.', 'sick', 18),
    word(1, 'What did Jesus say believers would take up without harm?', 'serpents', 18, ['snakes', 'serpent']),
    sa(3, 'List the five signs Jesus said would follow those who believe.', 'Cast out demons in His name; speak with new tongues; take up serpents; drink anything deadly without being hurt; lay hands on the sick and they recover.', 18),
    tf(2, 'Jesus said that when believers lay hands on the sick, the sick will recover.', true, 18),
    mc(3, 'How many signs did Jesus list as following those who believe?', ['Five', 'Three', 'Seven', 'Twelve'], 18, 'Casting out demons, new tongues, taking up serpents, drinking deadly things unharmed, and healing the sick by laying on hands.'),
    tf(3, 'Jesus said that if believers drank anything deadly it would harm them only a little.', false, 18, '"It will by no means hurt them."'),

    // ══════════════════════════════════ v19–20 · Ascension and the disciples preaching
    mc(1, 'What happened to the Lord after He had spoken to the eleven?', ['He was taken into heaven and sat at God’s right hand', 'He went before them into Galilee', 'He vanished from their sight at the table', 'A cloud carried Him to the Mount of Olives'], 19),
    blank(1, 'So then, after the Lord had spoken to them, He was received up into _____, and sat down at the right hand of God.', 'heaven', 19),
    blank(2, 'He was received up into heaven, and sat down at the _____ hand of God.', 'right', 19),
    word(2, 'At whose right hand did the Lord sit down after He was received up into heaven?', 'God', 19, ['God’s', 'the Father']),
    tf(3, 'Mark says the Lord sat down at the left hand of God after He was received up into heaven.', false, 19, 'He "sat down at the right hand of God."'),
    sa(2, 'What took place immediately after the Lord finished speaking to the disciples?', 'He was received up into heaven and sat down at the right hand of God.', 19),

    mc(1, 'What did the disciples do after the Lord was received up into heaven?', ['They went out and preached everywhere', 'They returned to fishing in Galilee', 'They stayed at the tomb praying', 'They waited at the table for His return'], 20),
    blank(1, 'And they went out and _____ everywhere, the Lord working with them and confirming the word through the accompanying signs.', 'preached', 20),
    word(3, 'Mark’s gospel closes with which single word, after the accompanying signs?', 'Amen', 20),
    sa(2, 'How was the disciples’ preaching confirmed as they went out everywhere?', 'The Lord worked with them and confirmed the word through the accompanying signs.', 20),
    tf(1, 'Mark ends by saying the disciples went out and preached everywhere, with the Lord working with them.', true, 20),
    mc(3, 'In the last verse of Mark, how is the Lord said to have confirmed the word the disciples preached?', ['Through the accompanying signs', 'Through the testimony of the women', 'Through the empty tomb', 'Through the Scriptures they read aloud'], 20),
    tf(3, 'The disciples confined their preaching to Galilee, where the young man had said they would see Jesus.', false, 20, 'They "went out and preached everywhere."'),
  ],
};

export default bank;
