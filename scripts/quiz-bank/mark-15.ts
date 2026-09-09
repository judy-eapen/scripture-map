// Mark 15 — quiz bank (NKJV, Orthodox Study Bible text as stored). Every row is anchored
// to a verse; fill-in-the-blank rows are verified against the stored verse text by
// scripts/seed-quiz-bank.ts. Questions are framed in the story (who / to whom / why / what
// followed), never by inverting a single clause.
import { mc, blank, word, tf, sa, type ChapterBank } from './types';

const bank: ChapterBank = {
  book: 'Mark',
  chapter: 15,
  tag: 'quiz-v2-mark-15',
  rows: [
    // ══════════════════════════════════ v1–5 · The morning council; Jesus before Pilate
    mc(1, 'On the morning after His arrest, who held a consultation and then bound Jesus and led Him away?', ['The chief priests with the elders, scribes, and the whole council', 'The soldiers of the whole garrison in the Praetorium', 'Pilate together with the centurion who stood opposite Him', 'The passers-by who wagged their heads at the cross'], 1),
    word(1, 'After the morning council bound Jesus and led Him away, to whom did they deliver Him?', 'Pilate', 1),
    blank(3, 'Immediately, in the morning, the chief priests held a consultation with the elders and scribes and the whole _____; and they bound Jesus, led Him away, and delivered Him to Pilate.', 'council', 1),
    tf(2, 'Mark says the chief priests held their consultation with the elders and scribes immediately in the morning.', true, 1),
    sa(3, 'Describe what the chief priests did with Jesus after their morning consultation with the elders, scribes, and the whole council.', 'They bound Jesus, led Him away, and delivered Him to Pilate.', 1),

    mc(1, 'What was the first question Pilate put to Jesus when the council delivered Him?', ['"Are You the King of the Jews?"', '"Do You answer nothing?"', '"Why, what evil has He done?"', '"What then do you want me to do with Him?"'], 2),
    sa(2, 'When Pilate asked Jesus, "Are You the King of the Jews?", how did Jesus answer him?', 'He said, "It is as you say."', 2),
    blank(1, 'Then Pilate asked Him, "Are You the King of the _____?" He answered and said to him, "It is as you say."', 'Jews', 2),
    tf(3, 'When Pilate asked Jesus whether He was the King of the Jews, Jesus answered nothing.', false, 2, 'To this question Jesus answered, "It is as you say." It was to the chief priests’ accusations that He answered nothing.'),

    mc(2, 'While Jesus stood before Pilate, who accused Him of many things?', ['The chief priests', 'The elders of the people', 'The whole garrison of soldiers', 'Those who passed by the cross'], 3),
    blank(3, 'And the chief priests accused Him of many things, but He answered _____.', 'nothing', 3),
    tf(1, 'When the chief priests accused Jesus of many things before Pilate, He answered nothing.', true, 3),

    sa(3, 'When Jesus stayed silent under the chief priests’ accusations, what did Pilate say to Him the second time he asked?', 'He said, "Do You answer nothing? See how many things they testify against You!"', 4),
    blank(3, 'Then Pilate asked Him again, saying, "Do You answer nothing? See how many things they _____ against You!"', 'testify', 4),
    mc(2, 'What did Pilate point out to Jesus when he urged Him to answer?', ['How many things the chief priests were testifying against Him', 'That the crowd was asking for Barabbas to be released', 'That the inscription of His accusation had already been written', 'That the soldiers had called together the whole garrison'], 4),

    word(2, 'When Jesus still answered nothing to Pilate’s second question, what did Pilate do?', 'marveled', 5, ['marvelled', 'marvel', 'he marveled', 'he marvelled']),
    blank(3, 'But Jesus still answered nothing, so that Pilate _____.', 'marveled', 5, ['marvelled']),
    tf(3, 'Pilate marveled because Jesus argued skillfully against the accusations of the chief priests.', false, 5, 'Pilate marveled because Jesus still answered nothing.'),
    mc(3, 'Mark says Pilate marveled twice in this chapter. What was the first thing that made him marvel?', ['That Jesus still answered nothing to the accusations', 'That Jesus was already dead when Joseph asked for the body', 'That the veil of the temple was torn from top to bottom', 'That darkness came over the whole land at the sixth hour'], 5, 'The second time (v44) he marveled that Jesus was already dead.'),

    // ══════════════════════════════════ v6–15 · The custom, Barabbas, "Crucify Him!"
    sa(2, 'What custom did Pilate keep at the feast, according to Mark?', 'He was accustomed to releasing one prisoner to the people, whomever they requested.', 6),
    blank(3, 'Now at the feast he was accustomed to releasing one _____ to them, whomever they requested.', 'prisoner', 6),
    tf(1, 'At the feast Pilate was accustomed to releasing one prisoner, whomever the people requested.', true, 6),
    word(3, 'How many prisoners was Pilate accustomed to releasing to the people at the feast?', 'one', 6, ['1']),

    mc(1, 'Who was Barabbas, according to Mark?', ['A rebel imprisoned for murder during the rebellion', 'A Cyrenian compelled to bear Jesus’ cross', 'A council member awaiting God’s kingdom', 'A centurion standing opposite Jesus'], 7),
    word(1, 'What crime had Barabbas and his fellow rebels committed in the rebellion?', 'murder', 7),
    blank(2, 'And there was one named _____, who was chained with his fellow rebels; they had committed murder in the rebellion.', 'Barabbas', 7),
    tf(3, 'Barabbas was chained with his fellow rebels because they had committed robbery in the rebellion.', false, 7, 'They had committed murder in the rebellion.'),
    sa(3, 'With whom was Barabbas chained, and why were they imprisoned?', 'He was chained with his fellow rebels; they had committed murder in the rebellion.', 7),

    mc(2, 'What did the multitude, crying aloud, begin to ask Pilate to do?', ['To do just as he had always done for them at the feast', 'To send Jesus back to be judged by the chief priests', 'To scourge Jesus and then let Him go', 'To write the inscription of His accusation'], 8),
    blank(3, 'Then the multitude, crying aloud, began to ask him to do just as he had always _____ for them.', 'done', 8),
    tf(3, 'The multitude waited quietly for Pilate to release a prisoner, as was his custom.', false, 8, 'The multitude was "crying aloud" as they began to ask him.'),

    sa(2, 'When the multitude asked Pilate to keep his custom of releasing a prisoner, what did Pilate offer them?', 'He asked, "Do you want me to release to you the King of the Jews?"', 9),
    blank(2, 'But Pilate answered them, saying, "Do you want me to _____ to you the King of the Jews?"', 'release', 9),
    mc(2, 'By what title did Pilate refer to Jesus when he offered to release Him to the multitude?', ['The King of the Jews', 'The Christ, the King of Israel', 'The Son of God', 'The Man from Nazareth'], 9),

    word(1, 'Pilate knew the chief priests had handed Jesus over because of what?', 'envy', 10),
    blank(1, 'For he knew that the chief priests had handed Him over because of _____.', 'envy', 10),
    tf(1, 'Mark says Pilate knew the chief priests had handed Jesus over because of envy.', true, 10),
    mc(3, 'Why, according to Mark, did Pilate offer to release the King of the Jews to the multitude?', ['Because he knew the chief priests had handed Jesus over because of envy', 'Because Jesus had answered him, "It is as you say"', 'Because the multitude had already cried out for Barabbas', 'Because Barabbas had committed murder in the rebellion'], 10),

    mc(1, 'How did the chief priests respond when Pilate offered to release the King of the Jews?', ['They stirred up the crowd so that he should rather release Barabbas', 'They accused Jesus of many more things before Pilate', 'They demanded that Pilate scourge Jesus first', 'They asked Pilate to write the inscription of His accusation'], 11),
    word(2, 'Whom did the crowd, stirred up by the chief priests, want Pilate to release instead of Jesus?', 'Barabbas', 11),
    blank(3, 'But the chief priests _____ up the crowd, so that he should rather release Barabbas to them.', 'stirred', 11),
    tf(2, 'The chief priests stirred up the crowd to ask Pilate to release Barabbas.', true, 11),

    sa(3, 'After the crowd was stirred up to ask for Barabbas, what did Pilate ask them about Jesus?', 'He asked, "What then do you want me to do with Him whom you call the King of the Jews?"', 12),
    blank(2, 'Pilate answered and said to them again, "What then do you want me to do with Him whom you _____ the King of the Jews?"', 'call', 12),
    tf(3, 'In his second question to the crowd, Pilate spoke of Jesus as "Him whom you call the King of the Jews."', true, 12),

    mc(1, 'When Pilate asked the crowd what he should do with the one they called King of the Jews, what did they cry out?', ['"Crucify Him!"', '"Let Him alone!"', '"Release to us Barabbas!"', '"Save Yourself, and come down!"'], 13),
    word(2, 'When Pilate asked the crowd what to do with Jesus, they cried out that He should be what?', 'crucified', 13, ['crucify', 'crucify him', 'crucifed']),
    blank(1, 'So they cried out again, "_____ Him!"', 'Crucify', 13),

    sa(2, 'What did Pilate ask the crowd when they cried "Crucify Him!", and how did they respond?', 'He asked, "Why, what evil has He done?" and they cried out all the more, "Crucify Him!"', 14),
    blank(2, 'Then Pilate said to them, "Why, what _____ has He done?" But they cried out all the more, "Crucify Him!"', 'evil', 14),
    tf(3, 'When Pilate asked, "Why, what evil has He done?", the crowd fell silent.', false, 14, 'They cried out all the more, "Crucify Him!"'),
    mc(2, 'How did the crowd react when Pilate asked, "Why, what evil has He done?"', ['They cried out all the more, "Crucify Him!"', 'They began to ask for Barabbas instead', 'They wagged their heads and blasphemed Him', 'They answered nothing, so that Pilate marveled'], 14),

    mc(1, 'Why did Pilate release Barabbas, according to Mark?', ['He wanted to gratify the crowd', 'He knew Barabbas was innocent of the murder', 'The chief priests asked him to keep his custom', 'The centurion advised him to release a prisoner'], 15),
    sa(3, 'Describe the two things Pilate did once he decided to gratify the crowd.', 'He released Barabbas to them, and he delivered Jesus, after he had scourged Him, to be crucified.', 15),
    blank(2, 'So Pilate, wanting to gratify the crowd, released _____ to them; and he delivered Jesus, after he had scourged Him, to be crucified.', 'Barabbas', 15),
    word(3, 'What did Pilate have done to Jesus before delivering Him to be crucified?', 'scourged', 15, ['scourging', 'scourge', 'he scourged him']),
    tf(1, 'Pilate delivered Jesus to be crucified after he had scourged Him.', true, 15),
    blank(3, 'So Pilate, wanting to _____ the crowd, released Barabbas to them; and he delivered Jesus, after he had scourged Him, to be crucified.', 'gratify', 15),

    // ══════════════════════════════════ v16–20 · The soldiers mock Jesus in the Praetorium
    word(1, 'Into what hall did the soldiers lead Jesus after Pilate delivered Him?', 'Praetorium', 16, ['the praetorium', 'pretorium']),
    blank(2, 'Then the soldiers led Him away into the hall called _____, and they called together the whole garrison.', 'Praetorium', 16),
    mc(2, 'Whom did the soldiers call together once they had led Jesus into the Praetorium?', ['The whole garrison', 'The chief priests and scribes', 'The passers-by from the country', 'The women from Galilee'], 16),
    tf(3, 'Only a handful of soldiers were present when Jesus was mocked in the Praetorium.', false, 16, 'They called together the whole garrison.'),

    mc(1, 'In the Praetorium, what did the soldiers clothe Jesus with and put on His head?', ['Purple, and a twisted crown of thorns', 'Fine linen, and a crown of reeds', 'His own clothes, and a crown of thorns', 'Purple, and a wreath of myrrh'], 17),
    word(1, 'What color did the soldiers clothe Jesus in when they mocked Him?', 'purple', 17),
    blank(1, 'And they clothed Him with purple; and they twisted a crown of _____, put it on His head,', 'thorns', 17),
    sa(3, 'Describe how the soldiers dressed Jesus in the Praetorium before saluting Him.', 'They clothed Him with purple, and twisted a crown of thorns and put it on His head.', 17),

    sa(1, 'After dressing Jesus in purple and a crown of thorns, how did the soldiers salute Him?', '"Hail, King of the Jews!"', 18),
    blank(1, 'and began to salute Him, "_____, King of the Jews!"', 'Hail', 18),
    tf(3, 'The soldiers saluted Jesus with the words, "Hail, King of Israel!"', false, 18, 'They said, "Hail, King of the Jews!"'),
    mc(3, 'What title did the soldiers use when they saluted Jesus in mockery?', ['King of the Jews', 'King of Israel', 'Son of God', 'The Christ'], 18),

    mc(1, 'With what did the soldiers strike Jesus on the head in the Praetorium?', ['A reed', 'A crown of thorns', 'A sponge', 'A stone'], 19),
    sa(3, 'List the three things the soldiers did to Jesus after saluting Him "Hail, King of the Jews!"', 'They struck Him on the head with a reed, spat on Him, and bowing the knee, they worshiped Him.', 19),
    blank(2, 'Then they struck Him on the head with a _____ and spat on Him; and bowing the knee, they worshiped Him.', 'reed', 19),
    tf(2, 'Bowing the knee, the soldiers worshiped Jesus in mockery after striking Him with a reed.', true, 19),
    word(3, 'After striking Jesus with a reed and spitting on Him, the soldiers bowed the knee and did what?', 'worshiped', 19, ['worshipped', 'worship', 'worshiped him', 'worshipped him']),

    mc(2, 'When the soldiers had finished mocking Jesus, what did they do before leading Him out to crucify Him?', ['They took the purple off Him and put His own clothes on Him', 'They wrapped Him in fine linen they had bought', 'They cast lots for the purple robe among themselves', 'They gave Him wine mingled with myrrh'], 20),
    blank(3, 'And when they had mocked Him, they took the purple off Him, put His own _____ on Him, and led Him out to crucify Him.', 'clothes', 20),
    tf(2, 'Jesus was led out to be crucified still wearing the purple the soldiers had put on Him.', false, 20, 'They took the purple off Him and put His own clothes on Him.'),

    // ══════════════════════════════════ v21–28 · Simon of Cyrene, Golgotha, the crucifixion
    mc(1, 'Who was compelled to carry Jesus’ cross, and how does Mark identify him?', ['Simon a Cyrenian, the father of Alexander and Rufus', 'Joseph of Arimathea, a prominent council member', 'Simon the leper, a man from Bethany', 'Alexander a Cyrenian, coming out of the country'], 21),
    word(1, 'Simon, who was compelled to bear Jesus’ cross, is called a man of what place?', 'Cyrene', 21, ['cyrenian', 'a cyrenian', 'cyrenean']),
    sa(2, 'Who were the sons of Simon the Cyrenian, as Mark names them?', 'Alexander and Rufus.', 21),
    blank(2, 'Then they compelled a certain man, Simon a Cyrenian, the father of Alexander and _____, as he was coming out of the country and passing by, to bear His cross.', 'Rufus', 21),
    tf(3, 'The soldiers compelled Simon the Cyrenian to bear Jesus’ cross as he came out of the country.', true, 21),
    mc(3, 'What was Simon the Cyrenian doing when the soldiers compelled him to bear the cross?', ['Coming out of the country and passing by', 'Looking on from afar with the women', 'Standing opposite Jesus with the centurion', 'Coming down from Jerusalem to Golgotha'], 21),
    word(3, 'Simon the Cyrenian was the father of Rufus and of whom else?', 'Alexander', 21),

    word(1, 'What is the name of the place where they brought Jesus to be crucified?', 'Golgotha', 22),
    sa(1, 'What does the name Golgotha mean, according to Mark’s translation?', 'Place of a Skull.', 22),
    blank(1, 'And they brought Him to the place Golgotha, which is translated, Place of a _____.', 'Skull', 22),
    mc(2, 'How does Mark translate the name Golgotha?', ['Place of a Skull', 'Place of the Preparation', 'Place of the Transgressors', 'Place of a Tomb'], 22),
    tf(1, 'Golgotha is translated "Place of a Skull."', true, 22),

    mc(1, 'What drink was offered to Jesus when they brought Him to Golgotha, and how did He respond?', ['Wine mingled with myrrh, which He did not take', 'Sour wine on a sponge, which He drank', 'Wine mingled with myrrh, which He drank', 'Water on a reed, which He refused'], 23),
    word(2, 'The wine given to Jesus to drink at Golgotha was mingled with what?', 'myrrh', 23),
    blank(1, 'Then they gave Him wine mingled with _____ to drink, but He did not take it.', 'myrrh', 23),
    tf(2, 'Jesus drank the wine mingled with myrrh that was given to Him at Golgotha.', false, 23, '"He did not take it."'),

    mc(1, 'How did those who crucified Jesus decide what each man should take of His garments?', ['They cast lots for them', 'The centurion assigned them', 'They tore them into equal pieces', 'They gave them to the women looking on'], 24),
    blank(3, 'And when they crucified Him, they divided His _____, casting lots for them to determine what every man should take.', 'garments', 24),
    word(2, 'What did those who crucified Jesus cast in order to divide His garments?', 'lots', 24),
    tf(1, 'Those who crucified Jesus divided His garments by casting lots.', true, 24),
    sa(3, 'In Mark’s words, what was the purpose of casting lots over Jesus’ garments?', 'To determine what every man should take.', 24),

    word(1, 'At what hour does Mark say they crucified Jesus?', 'third', 25, ['3rd', 'the third hour', 'third hour', '3']),
    blank(1, 'Now it was the _____ hour, and they crucified Him.', 'third', 25, ['3rd']),
    tf(3, 'Mark says Jesus was crucified at the third hour.', true, 25),
    mc(2, 'Which time marker does Mark attach to the crucifixion itself?', ['The third hour', 'The sixth hour', 'The ninth hour', 'Evening, on the Preparation Day'], 25),

    sa(1, 'What was written in the inscription of Jesus’ accusation above Him?', 'THE KING OF THE JEWS.', 26),
    blank(1, 'And the inscription of His accusation was written above: THE KING OF THE _____.', 'JEWS', 26),
    mc(2, 'What does Mark call the words written above Jesus on the cross?', ['The inscription of His accusation', 'The title of His kingdom', 'The charge of the chief priests', 'The decree of Pilate'], 26),
    tf(3, 'The inscription above Jesus read: THE CHRIST, THE KING OF ISRAEL.', false, 26, 'It read: THE KING OF THE JEWS.'),

    mc(1, 'Who was crucified alongside Jesus, and where were they placed?', ['Two robbers, one on His right and the other on His left', 'Two rebels, both on His right', 'Barabbas and one robber, on either side of Him', 'Two of His fellow prisoners, behind Him'], 27),
    word(1, 'How many robbers were crucified with Jesus?', 'two', 27, ['2']),
    blank(2, 'With Him they also crucified two _____, one on His right and the other on His left.', 'robbers', 27),
    tf(1, 'Two robbers were crucified with Jesus, one on His right and the other on His left.', true, 27),

    sa(3, 'What Scripture does Mark say was fulfilled when Jesus was crucified between two robbers?', '"And He was numbered with the transgressors."', 28),
    blank(3, 'So the Scripture was fulfilled which says, "And He was numbered with the _____."', 'transgressors', 28),
    word(3, 'The Scripture fulfilled at the crucifixion says Jesus was "numbered with" whom?', 'transgressors', 28, ['the transgressors']),
    tf(2, 'Mark quotes the Scripture, "And He was numbered with the transgressors," as fulfilled at the crucifixion.', true, 28),

    // ══════════════════════════════════ v29–32 · Mocked by passers-by, chief priests, and robbers
    mc(1, 'What did those who passed by the cross do and say to Jesus?', ['They wagged their heads and taunted Him about rebuilding the temple', 'They bowed and mocked Him as King of the Jews', 'They offered sour wine and waited for Elijah', 'They said He saved others but could not save Himself'], 29),
    blank(2, 'And those who passed by blasphemed Him, wagging their heads and saying, "Aha! You who destroy the temple and build it in _____ days,', 'three', 29, ['3']),
    word(2, 'The passers-by mocked Jesus as the one who would destroy the temple and build it in how many days?', 'three', 29, ['3']),
    tf(2, 'The passers-by who blasphemed Jesus wagged their heads as they spoke.', true, 29),
    sa(3, 'Quote the taunt the passers-by hurled at Jesus as they wagged their heads.', '"Aha! You who destroy the temple and build it in three days, save Yourself, and come down from the cross!"', 29),

    blank(1, 'save Yourself, and come down from the _____!"', 'cross', 30),
    mc(2, 'What did the passers-by challenge the one who would "destroy the temple" to do?', ['Save Himself and come down from the cross', 'Call for Elijah to take Him down', 'Answer the chief priests’ accusations', 'Drink the wine mingled with myrrh'], 30),
    tf(3, 'The passers-by challenged Jesus to save Himself and come down from the cross.', true, 30),

    mc(1, 'What did the chief priests, mocking among themselves with the scribes, say about Jesus on the cross?', ['"He saved others; Himself He cannot save."', '"Truly this Man was the Son of God!"', '"Look, He is calling for Elijah!"', '"Why, what evil has He done?"'], 31),
    blank(1, 'Likewise the chief priests also, mocking among themselves with the scribes, said, "He _____ others; Himself He cannot save.', 'saved', 31),
    word(3, 'With whom were the chief priests mocking among themselves at the cross?', 'scribes', 31, ['the scribes']),
    tf(3, 'The chief priests mocked Jesus at the cross together with the elders.', false, 31, 'They were mocking among themselves with the scribes.'),
    sa(3, 'What did the chief priests and scribes say Jesus could not do, in contrast to what He had done for others?', 'They said, "He saved others; Himself He cannot save."', 31),

    mc(2, 'What did the chief priests and scribes say would make them "see and believe"?', ['If the King of Israel came down from the cross', 'If Elijah came to take Him down', 'If the temple veil were torn in two', 'If darkness covered the whole land'], 32),
    blank(2, 'Let the Christ, the King of _____, descend now from the cross, that we may see and believe." Even those who were crucified with Him reviled Him.', 'Israel', 32),
    tf(1, 'Even those who were crucified with Jesus reviled Him.', true, 32),
    sa(3, 'By what titles did the chief priests and scribes refer to Jesus when they challenged Him to descend from the cross?', 'The Christ, the King of Israel.', 32),
    word(3, 'What did those who were crucified with Jesus do to Him, according to Mark?', 'reviled', 32, ['reviled him', 'revile']),

    // ══════════════════════════════════ v33–39 · Darkness, "Eloi, Eloi", the death of Jesus
    mc(1, 'What happened from the sixth hour until the ninth hour?', ['There was darkness over the whole land', 'The veil of the temple was torn in two', 'The soldiers cast lots for His garments', 'The women looked on from afar'], 33),
    word(2, 'From the sixth hour until the ninth hour, what was over the whole land?', 'darkness', 33),
    blank(2, 'Now when the sixth hour had come, there was _____ over the whole land until the ninth hour.', 'darkness', 33),
    blank(3, 'Now when the _____ hour had come, there was darkness over the whole land until the ninth hour.', 'sixth', 33, ['6th']),
    tf(3, 'The darkness over the whole land lasted from the third hour until the sixth hour.', false, 33, 'It lasted from the sixth hour until the ninth hour.'),
    sa(3, 'When did the darkness over the whole land begin and end, according to Mark?', 'It began at the sixth hour and lasted until the ninth hour.', 33),

    mc(1, 'What did Jesus cry out with a loud voice at the ninth hour?', ['"Eloi, Eloi, lama sabachthani?"', '"Truly this Man was the Son of God!"', '"Let Him alone; let us see if Elijah will come"', '"It is as you say"'], 34),
    sa(2, 'How does Mark translate Jesus’ cry, "Eloi, Eloi, lama sabachthani?"', '"My God, My God, why have You forsaken Me?"', 34),
    blank(3, 'And at the ninth hour Jesus cried out with a loud voice, saying, "Eloi, Eloi, lama _____?" which is translated, "My God, My God, why have You forsaken Me?"', 'sabachthani', 34),
    blank(2, 'which is translated, "My God, My God, why have You _____ Me?"', 'forsaken', 34),
    word(2, 'At what hour did Jesus cry out, "Eloi, Eloi, lama sabachthani?"', 'ninth', 34, ['9th', '9', 'the ninth hour', 'ninth hour']),
    tf(2, 'Jesus cried out "Eloi, Eloi, lama sabachthani?" at the sixth hour.', false, 34, 'He cried out at the ninth hour.'),
    word(3, 'What is the first word of Jesus’ cry at the ninth hour, translated "My God"?', 'Eloi', 34),

    mc(2, 'When some who stood by heard Jesus cry "Eloi, Eloi," whom did they say He was calling for?', ['Elijah', 'Moses', 'David', 'The King of Israel'], 35),
    word(1, 'Whom did some bystanders think Jesus was calling for when He cried out at the ninth hour?', 'Elijah', 35),
    blank(2, 'Some of those who stood by, when they heard that, said, "Look, He is calling for _____!"', 'Elijah', 35),
    tf(3, 'It was the chief priests who said, "Look, He is calling for Elijah!"', false, 35, 'It was "some of those who stood by."'),

    mc(1, 'What did someone run to offer Jesus after the bystanders spoke of Elijah?', ['A sponge full of sour wine, put on a reed', 'Wine mingled with myrrh in a cup', 'Fine linen to cover Him', 'Water drawn from the temple'], 36),
    word(2, 'The sponge offered to Jesus on a reed was filled with what kind of wine?', 'sour', 36, ['sour wine', 'vinegar']),
    blank(2, 'Then someone ran and filled a _____ full of sour wine, put it on a reed, and offered it to Him to drink,', 'sponge', 36),
    sa(3, 'What did the man who offered Jesus the sponge of sour wine say as he did so?', '"Let Him alone; let us see if Elijah will come to take Him down."', 36),
    tf(3, 'The man who offered the sponge of sour wine said, "Let us see if Elijah will come to take Him down."', true, 36),

    sa(1, 'What happened immediately after Jesus cried out with a loud voice the second time?', 'He breathed His last.', 37),
    blank(2, 'And Jesus cried out with a loud voice, and _____ His last.', 'breathed', 37),
    tf(1, 'Mark says Jesus breathed His last quietly, without a sound.', false, 37, 'Jesus "cried out with a loud voice, and breathed His last."'),
    mc(2, 'How does Mark describe the moment of Jesus’ death?', ['He cried out with a loud voice, and breathed His last', 'He answered nothing, and breathed His last', 'He drank the sour wine, and breathed His last', 'He called for Elijah, and breathed His last'], 37),

    mc(1, 'What happened to the veil of the temple when Jesus breathed His last?', ['It was torn in two from top to bottom', 'It was torn in two from bottom to top', 'It fell to the ground', 'It was rolled back like the stone'], 38),
    word(1, 'What part of the temple was torn in two from top to bottom when Jesus died?', 'veil', 38, ['the veil', 'curtain']),
    blank(1, 'Then the veil of the temple was torn in two from _____ to bottom.', 'top', 38),
    tf(2, 'The veil of the temple was torn in two from bottom to top.', false, 38, 'It was torn "from top to bottom."'),
    sa(3, 'Describe exactly how Mark says the veil of the temple was torn.', 'It was torn in two from top to bottom.', 38),

    mc(1, 'What did the centurion who stood opposite Jesus say when he saw how He cried out and breathed His last?', ['"Truly this Man was the Son of God!"', '"Look, He is calling for Elijah!"', '"He saved others; Himself He cannot save."', '"It is as you say."'], 39),
    word(2, 'Which officer, standing opposite Jesus, declared "Truly this Man was the Son of God!"?', 'centurion', 39, ['the centurion']),
    blank(1, 'So when the centurion, who stood opposite Him, saw that He cried out like this and breathed His last, he said, "Truly this Man was the _____ of God!"', 'Son', 39),
    tf(1, 'The centurion who stood opposite Jesus said, "Truly this Man was the King of the Jews!"', false, 39, 'He said, "Truly this Man was the Son of God!"'),
    sa(3, 'What did the centurion see that led him to say "Truly this Man was the Son of God!"?', 'He saw that Jesus cried out like this and breathed His last.', 39),
    blank(3, 'So when the centurion, who stood _____ Him, saw that He cried out like this and breathed His last, he said, "Truly this Man was the Son of God!"', 'opposite', 39),

    // ══════════════════════════════════ v40–41 · The women looking on from afar
    mc(1, 'Which women does Mark name among those looking on from afar at the crucifixion?', ['Mary Magdalene, Mary the mother of James the Less and of Joses, and Salome', 'Mary Magdalene, Salome, and the mother of Alexander and Rufus', 'Mary the mother of Joses, Salome, and the wife of Simon the Cyrenian', 'Mary Magdalene, Mary the mother of James the Less, and Herodias'], 40),
    word(1, 'Which Mary is named first among the women looking on from afar at the cross?', 'Magdalene', 40, ['mary magdalene']),
    word(2, 'Along with Mary Magdalene and Mary the mother of James the Less and of Joses, who was the third woman Mark names at the cross?', 'Salome', 40),
    blank(2, 'There were also women looking on from afar, among whom were Mary Magdalene, Mary the mother of James the _____ and of Joses, and Salome,', 'Less', 40),
    tf(2, 'The women watching the crucifixion stood close beside the cross.', false, 40, 'They were "looking on from afar."'),
    sa(3, 'How does Mark identify the second Mary who looked on from afar at the crucifixion?', 'She was Mary the mother of James the Less and of Joses.', 40),
    mc(3, 'Whose mother was the second Mary named among the women at the cross?', ['James the Less and Joses', 'Alexander and Rufus', 'James and John', 'Joseph and Simon'], 40),

    mc(2, 'What had the women who looked on at the crucifixion done for Jesus earlier?', ['They followed Him and ministered to Him when He was in Galilee', 'They anointed His head with oil in Bethany', 'They prepared the Passover for Him in Jerusalem', 'They brought Him wine mingled with myrrh'], 41),
    blank(2, 'who also followed Him and ministered to Him when He was in _____, and many other women who came up with Him to Jerusalem.', 'Galilee', 41),
    tf(1, 'Mark says the three named women were the only women who had come up with Jesus to Jerusalem.', false, 41, 'There were also "many other women who came up with Him to Jerusalem."'),
    sa(3, 'Where had these women followed and ministered to Jesus, and where had they come up with Him?', 'They followed and ministered to Him when He was in Galilee, and came up with Him to Jerusalem.', 41),

    // ══════════════════════════════════ v42–47 · Joseph of Arimathea and the tomb
    mc(1, 'What day was it when evening came after the crucifixion, and how does Mark explain it?', ['Preparation Day, the day before the Sabbath', 'The Sabbath, the appointed day of rest', 'The first day of Unleavened Bread', 'The day of the Passover feast'], 42),
    word(2, 'Mark says evening came on which day, "that is, the day before the Sabbath"?', 'Preparation', 42, ['preparation day', 'the preparation day']),
    blank(1, 'Now when evening had come, because it was the Preparation Day, that is, the day before the _____,', 'Sabbath', 42),
    tf(2, 'Mark explains the Preparation Day as the day before the Sabbath.', true, 42),

    mc(1, 'Who went in to Pilate and asked for the body of Jesus?', ['Joseph of Arimathea, a prominent council member', 'Simon of Cyrene, the father of Alexander and Rufus', 'The centurion who stood opposite Him', 'Mary Magdalene and Mary the mother of Joses'], 43),
    word(1, 'Joseph, who asked Pilate for Jesus’ body, was from what place?', 'Arimathea', 43, ['arimathaea']),
    blank(2, 'Joseph of Arimathea, a prominent _____ member, who was himself waiting for the kingdom of God, coming and taking courage, went in to Pilate and asked for the body of Jesus.', 'council', 43),
    sa(3, 'How does Mark describe Joseph of Arimathea, and what was he waiting for?', 'He was a prominent council member who was himself waiting for the kingdom of God.', 43),
    tf(2, 'Mark says Joseph of Arimathea went in to Pilate "taking courage."', true, 43),
    mc(3, 'What does Mark say Joseph of Arimathea was himself waiting for?', ['The kingdom of God', 'The coming of Elijah', 'The end of the Preparation Day', 'The Sabbath'], 43),
    blank(3, 'Joseph of Arimathea, a prominent council member, who was himself waiting for the kingdom of God, coming and taking _____, went in to Pilate and asked for the body of Jesus.', 'courage', 43),

    mc(2, 'Why did Pilate summon the centurion after Joseph asked for the body?', ['He wondered whether Jesus had already been dead for some time', 'He wanted the centurion to take Jesus from the cross', 'He wanted to know who had torn the temple veil', 'He wanted the centurion to seal the tomb with a stone'], 44),
    word(2, 'Whom did Pilate summon to confirm that Jesus had been dead for some time?', 'centurion', 44, ['the centurion']),
    blank(2, 'Pilate _____ that He was already dead; and summoning the centurion, he asked him if He had been dead for some time.', 'marveled', 44, ['marvelled']),
    tf(1, 'Pilate marveled that Jesus was already dead when Joseph asked for the body.', true, 44),
    sa(3, 'What did Pilate ask the centurion when he summoned him?', 'He asked him if Jesus had been dead for some time.', 44),

    sa(1, 'What did Pilate do once he found out from the centurion that Jesus was dead?', 'He granted the body to Joseph.', 45),
    blank(2, 'So when he found out from the centurion, he _____ the body to Joseph.', 'granted', 45),
    tf(2, 'Pilate refused to grant Joseph the body until the Sabbath had passed.', false, 45, 'When he found out from the centurion, he granted the body to Joseph.'),
    mc(2, 'From whom did Pilate find out that Jesus was dead before granting the body to Joseph?', ['The centurion', 'The chief priests', 'Mary Magdalene', 'Simon the Cyrenian'], 45),

    mc(1, 'What did Joseph buy to wrap the body of Jesus?', ['Fine linen', 'Purple cloth', 'A sponge', 'Myrrh'], 46),
    word(1, 'In what did Joseph wrap the body of Jesus after taking Him down?', 'linen', 46, ['fine linen']),
    blank(1, 'Then he bought fine _____, took Him down, and wrapped Him in the linen.', 'linen', 46),
    sa(3, 'Describe the tomb where Joseph laid Jesus and how he closed it.', 'The tomb had been hewn out of the rock, and he rolled a stone against the door of the tomb.', 46),
    blank(2, 'And he laid Him in a tomb which had been hewn out of the _____, and rolled a stone against the door of the tomb.', 'rock', 46),
    tf(1, 'Joseph rolled a stone against the door of the tomb after laying Jesus in it.', true, 46),
    mc(3, 'In what order does Mark list Joseph’s actions with the body of Jesus?', ['Bought fine linen, took Him down, wrapped Him, laid Him in a tomb, rolled a stone against the door', 'Took Him down, bought fine linen, laid Him in a tomb, wrapped Him, rolled a stone against the door', 'Rolled the stone away, took Him down, wrapped Him in linen, laid Him in the tomb', 'Wrapped Him in linen, took Him down, bought myrrh, laid Him in a tomb'], 46),
    word(3, 'The tomb where Jesus was laid had been hewn out of what?', 'rock', 46, ['the rock']),

    mc(1, 'Who observed where Jesus was laid in the tomb?', ['Mary Magdalene and Mary the mother of Joses', 'Mary Magdalene and Salome', 'Joseph of Arimathea and the centurion', 'Salome and Mary the mother of James'], 47),
    blank(1, 'And Mary Magdalene and Mary the mother of _____ observed where He was laid.', 'Joses', 47),
    tf(2, 'Salome is named with Mary Magdalene as observing where Jesus was laid.', false, 47, 'It was Mary the mother of Joses who observed with Mary Magdalene.'),
    word(2, 'Along with Mary Magdalene, the mother of which man observed where Jesus was laid?', 'Joses', 47),
    sa(3, 'Who observed where Jesus was laid, and how does Mark identify the second woman here?', 'Mary Magdalene and Mary the mother of Joses observed where He was laid.', 47),
  ],
};

export default bank;
