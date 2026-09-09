// Mark 2 — quiz bank (NKJV, Orthodox Study Bible text as stored). Every row is anchored
// to a verse; fill-in-the-blank rows are verified against the stored verse text by
// scripts/seed-quiz-bank.ts. Questions are framed in the story (who, where, what followed),
// never as a single clause turned inside out.
import { mc, blank, word, tf, sa, type ChapterBank } from './types';

const bank: ChapterBank = {
  book: 'Mark',
  chapter: 2,
  tag: 'quiz-v2-mark-2',
  rows: [
    // ══════════════════════════════════ v1–2 · Jesus back in Capernaum; the packed house
    mc(1, 'After some days away, to which town did Jesus return, where word spread that He was in the house?', ['Capernaum', 'Nazareth', 'Jerusalem', 'Bethsaida'], 1),
    blank(1, 'And again He entered _____ after some days, and it was heard that He was in the house.', 'Capernaum', 1),
    word(1, 'In which town was Jesus staying in a house when the paralytic was brought to Him?', 'Capernaum', 1),
    tf(2, 'When Jesus returned to Capernaum, the people heard that He was teaching in the synagogue.', false, 1, 'The report was that "He was in the house."'),
    mc(2, 'When word spread that Jesus was in the house at Capernaum, how full did the house become?', ['So crowded there was no room left, not even near the door', 'Full enough that people climbed onto the roof to listen', 'Crowded only in the room where Jesus Himself was sitting', 'Full inside the house, with the doorway still left clear'], 2),
    blank(2, 'Immediately many gathered together, so that there was no longer room to receive them, not even near the _____.', 'door', 2),
    sa(1, 'What was Jesus doing for the crowd packed into the house at Capernaum before the paralytic arrived?', 'He preached the word to them.', 2),
    tf(1, 'Jesus preached the word to the crowd that gathered at the house in Capernaum.', true, 2),

    // ══════════════════════════════════ v3–5 · The paralytic through the roof
    mc(1, 'Who was brought to Jesus at the crowded house in Capernaum, carried by four men?', ['A paralytic lying on a bed', 'A leper asking to be cleansed', 'A man with a withered hand', 'A boy with a mute spirit'], 3),
    blank(1, 'Then they came to Him, bringing a _____ who was carried by four men.', 'paralytic', 3),
    tf(3, 'The paralytic at Capernaum was carried to Jesus by two men.', false, 3, 'He "was carried by four men."'),
    mc(1, 'When the four men could not reach Jesus in the crowded house at Capernaum, what did they do?', ['They uncovered the roof and let the paralytic down on his bed', 'They waited outside the door until the crowd had gone home', 'They shouted to Jesus over the heads of the crowd', 'They carried the paralytic to the synagogue to wait for Him'], 4),
    blank(2, 'And when they could not come near Him because of the _____, they uncovered the roof where He was.', 'crowd', 4),
    sa(2, 'Why did the four men carrying the paralytic break through the roof instead of coming in by the door?', 'They could not come near Jesus because of the crowd.', 4),
    word(2, 'What part of the house did the four men open up so they could lower the paralytic down to Jesus?', 'roof', 4),
    tf(1, 'The four men lowered the paralytic through the roof on the bed he was lying on.', true, 4),
    mc(1, 'What did Jesus say first to the paralytic who had been lowered through the roof?', ['"Son, your sins are forgiven you."', '"Arise, take up your bed and walk."', '"Go, show yourself to the priest."', '"Your faith has made you well."'], 5),
    blank(1, 'When Jesus saw their faith, He said to the paralytic, "Son, your _____ are forgiven you."', 'sins', 5),
    sa(2, 'What did Jesus see in the paralytic and his four friends that moved Him to speak to the man?', 'He saw their faith.', 5),
    word(2, 'When the paralytic was let down through the roof, what did Jesus see in the men that led Him to forgive the man’s sins?', 'faith', 5),
    tf(2, 'Jesus called the paralytic "Son" when He told him his sins were forgiven.', true, 5),

    // ══════════════════════════════════ v6–9 · The scribes object in their hearts
    mc(2, 'Who sat in the house at Capernaum silently reasoning in their hearts when Jesus forgave the paralytic’s sins?', ['Some of the scribes', 'Some of the Pharisees', 'The disciples of John', 'The four men who carried him'], 6),
    blank(2, 'And some of the _____ were sitting there and reasoning in their hearts,', 'scribes', 6),
    word(2, 'Which group was sitting in the house at Capernaum reasoning in their hearts against Jesus?', 'scribes', 6, ['the scribes']),
    mc(1, 'What did the scribes think to themselves when Jesus told the paralytic his sins were forgiven?', ['"Why does this Man speak blasphemies like this? Who can forgive sins but God alone?"', '"How is it that this Man eats and drinks with tax collectors and sinners?"', '"Why do this Man’s disciples do what is not lawful on the Sabbath?"', '"Why do the disciples of John fast, but this Man’s disciples do not fast?"'], 7),
    blank(1, 'Who can forgive sins but God _____?', 'alone', 7),
    blank(3, 'Why does this Man speak _____ like this? Who can forgive sins but God alone?', 'blasphemies', 7),
    sa(2, 'In the scribes’ own reasoning, why was it blasphemy for Jesus to forgive the paralytic’s sins?', 'Because, as they reasoned, no one can forgive sins but God alone.', 7),
    tf(1, 'The scribes reasoned that no one can forgive sins but God alone.', true, 7),
    mc(2, 'How did Jesus know what the scribes were reasoning about Him in the house at Capernaum?', ['He perceived in His spirit what they reasoned within themselves', 'One of His disciples overheard them and told Him', 'The scribes stood up and said it to Him openly', 'The men on the roof called down what they had heard'], 8),
    blank(2, 'But immediately, when Jesus perceived in His _____ that they reasoned thus within themselves,', 'spirit', 8),
    sa(2, 'What question did Jesus put to the scribes once He perceived what they were reasoning about Him?', 'He asked, "Why do you reason about these things in your hearts?"', 8),
    tf(3, 'Jesus learned of the scribes’ objection only after one of them spoke it aloud.', false, 8, 'Jesus "perceived in His spirit that they reasoned thus within themselves."'),
    mc(3, 'What two sayings did Jesus ask the scribes to compare when He asked, "Which is easier"?', ['"Your sins are forgiven you" and "Arise, take up your bed and walk"', '"Follow Me" and "Go to your house"', '"Be cleansed" and "Stretch out your hand"', '"Your faith has saved you" and "Go in peace"'], 9),
    blank(3, 'Which is easier, to say to the paralytic, \'Your sins are forgiven you,\' or to say, \'Arise, take up your bed and _____\'?', 'walk', 9),
    word(3, 'When Jesus challenged the scribes at Capernaum, He asked which was "easier": to forgive the paralytic’s sins, or to tell him to arise, take up his bed, and do what?', 'walk', 9),
    tf(3, 'Jesus asked the scribes which was easier: to say "Your sins are forgiven you" or to say "Arise, take up your bed and walk."', true, 9),

    // ══════════════════════════════════ v10–12 · "Arise, take up your bed"
    mc(1, 'By which title did Jesus refer to Himself when He told the scribes He had power on earth to forgive sins?', ['The Son of Man', 'The Son of David', 'The Holy One of God', 'The Lord of the Sabbath'], 10),
    mc(3, 'What reason did Jesus give the scribes for telling the paralytic to arise and take up his bed?', ['That they might know the Son of Man has power on earth to forgive sins', 'That the man’s faith might be rewarded in front of the whole crowd', 'That the scribes might be put to shame before all the people', 'That the four men might see their labor had not been in vain'], 10),
    blank(1, 'But that you may know that the Son of Man has power on _____ to forgive sins', 'earth', 10),
    sa(3, 'Why did Jesus say He would heal the paralytic in front of the scribes?', 'So that they might know that the Son of Man has power on earth to forgive sins.', 10),
    mc(1, 'What did Jesus command the paralytic to do after telling the scribes the Son of Man has power to forgive sins?', ['"Arise, take up your bed, and go to your house."', '"Arise, go and show yourself to the priest."', '"Arise, follow Me and leave your bed behind."', '"Arise, and tell everyone what God has done for you."'], 11),
    blank(1, 'I say to you, arise, take up your bed, and go to your _____.', 'house', 11),
    word(1, 'Where did Jesus tell the healed paralytic to go after he took up his bed?', 'house', 11, ['his house', 'home']),
    tf(1, 'Jesus told the healed paralytic to leave his bed behind and go home.', false, 11, 'Jesus said, "arise, take up your bed, and go to your house."'),
    mc(1, 'How did the crowd at Capernaum react when the paralytic got up, took his bed, and walked out?', ['They were all amazed and glorified God, saying they had never seen anything like it', 'They were afraid and begged Jesus to depart from their region', 'They ran to bring the sick from all around to Him', 'They were offended and said He was only the carpenter’s son'], 12),
    mc(3, 'Which detail does Mark give about how the healed paralytic left the house at Capernaum?', ['He went out in the presence of them all', 'He slipped out quietly through the roof', 'He was carried out by the four men', 'He stayed to hear Jesus preach the word'], 12),
    blank(3, 'Immediately he arose, took up the bed, and went out in the presence of them all, so that all were _____ and glorified God', 'amazed', 12),
    sa(1, 'What did the crowd say after the paralytic walked out carrying his bed?', '"We never saw anything like this!"', 12),
    word(2, 'When the paralytic walked out carrying his bed, whom did the amazed crowd glorify?', 'God', 12),

    // ══════════════════════════════════ v13–14 · By the sea; the call of Levi
    mc(2, 'After the healing at Capernaum, where did Jesus go next, and what did He do when the multitude came to Him?', ['He went out by the sea and taught them', 'He went into the synagogue and healed them', 'He went through the grainfields and fed them', 'He went up on a mountain and prayed with them'], 13),
    blank(2, 'Then He went out again by the _____; and all the multitude came to Him, and He taught them.', 'sea', 13),
    mc(1, 'Who was sitting at the tax office when Jesus passed by and said, "Follow Me"?', ['Levi the son of Alphaeus', 'Simon the son of Jonah', 'James the son of Zebedee', 'Judas the son of Simon'], 14),
    mc(2, 'What did Levi do when Jesus said to him, "Follow Me"?', ['He arose and followed Him', 'He asked to first go and bury his father', 'He went away sorrowful because he was rich', 'He finished collecting the taxes and then came'], 14),
    blank(1, 'As He passed by, He saw _____ the son of Alphaeus sitting at the tax office.', 'Levi', 14),
    word(1, 'Who was the father of Levi, the tax collector Jesus called?', 'Alphaeus', 14, ['alpheus']),
    sa(2, 'What did Jesus say to Levi as He passed the tax office, and how did Levi respond?', 'Jesus said, "Follow Me," and Levi arose and followed Him.', 14),
    tf(2, 'Jesus called Levi while Levi was mending his nets by the sea.', false, 14, 'Levi was "sitting at the tax office" when Jesus called him.'),

    // ══════════════════════════════════ v15–17 · Dinner at Levi’s house
    mc(1, 'In whose house was Jesus dining when many tax collectors and sinners sat with Him and His disciples?', ['Levi’s house', 'Simon’s house', 'Jairus’s house', 'The house of Simon the leper'], 15),
    mc(3, 'Why, according to Mark, were so many tax collectors and sinners at the table in Levi’s house?', ['For there were many, and they followed Him', 'Because Levi had invited all his fellow tax collectors', 'Because the Pharisees had brought them to test Jesus', 'Because they had come to be healed by Him'], 15),
    blank(3, 'Now it happened, as He was dining in Levi’s house, that many tax _____ and sinners also sat together with Jesus and His disciples', 'collectors', 15),
    sa(2, 'Who sat at the table with Jesus and His disciples at the dinner in Levi’s house?', 'Many tax collectors and sinners, for there were many and they followed Him.', 15),
    word(2, 'The dinner where Jesus ate with tax collectors and sinners was held in whose house?', 'Levi', 15, ['levis', 'levi’s']),
    mc(2, 'Who complained to Jesus’ disciples about His eating with tax collectors and sinners?', ['The scribes and Pharisees', 'The disciples of John', 'The chief priests and elders', 'The Herodians and Sadducees'], 16),
    mc(3, 'What exactly did the scribes and Pharisees ask the disciples at Levi’s house?', ['"How is it that He eats and drinks with tax collectors and sinners?"', '"Why do your disciples not fast as the disciples of John do?"', '"Why does your Teacher not wash His hands before He eats?"', '"Why do they do what is not lawful on the Sabbath?"'], 16),
    blank(2, 'they said to His disciples, "How is it that He eats and _____ with tax collectors and sinners?"', 'drinks', 16),
    word(3, 'Along with the Pharisees, which group saw Jesus eating with tax collectors and objected to His disciples?', 'scribes', 16, ['the scribes']),
    tf(3, 'The scribes and Pharisees brought their complaint about Jesus’ dinner companions directly to Jesus Himself.', false, 16, 'They "said to His disciples, ‘How is it that He eats and drinks with tax collectors and sinners?’"'),
    mc(1, 'How did Jesus answer the objection that He ate with tax collectors and sinners?', ['"Those who are well have no need of a physician, but those who are sick."', '"The Sabbath was made for man, and not man for the Sabbath."', '"Can the friends of the bridegroom fast while the bridegroom is with them?"', '"No one sews a piece of unshrunk cloth on an old garment."'], 17),
    mc(2, 'At Levi’s house, whom did Jesus say He had come to call to repentance?', ['Sinners, not the righteous', 'The righteous, not sinners', 'The scribes and the Pharisees', 'The disciples of John'], 17),
    mc(3, 'In His reply at Levi’s house, whom did Jesus say has no need of a physician?', ['Those who are well', 'Those who are sick', 'The righteous who fast', 'Sinners who repent'], 17),
    blank(1, 'Those who are well have no need of a _____, but those who are sick.', 'physician', 17),
    blank(2, 'I did not come to call the righteous, but sinners, to _____.', 'repentance', 17),
    sa(2, 'What did Jesus say about whom He came to call, right after His saying about the physician?', 'He said, "I did not come to call the righteous, but sinners, to repentance."', 17),
    tf(3, 'Jesus heard the scribes and Pharisees’ complaint even though they had spoken it to His disciples.', true, 17, '"When Jesus heard it, He said to them…"'),

    // ══════════════════════════════════ v18–20 · The question about fasting
    mc(3, 'Which two groups were fasting when people came to ask Jesus why His disciples did not fast?', ['The disciples of John and of the Pharisees', 'The disciples of the scribes and of the Sadducees', 'The disciples of John and of the Herodians', 'The disciples of the Pharisees and of the chief priests'], 18),
    blank(2, 'Why do the disciples of _____ and of the Pharisees fast, but Your disciples do not fast?', 'John', 18),
    word(1, 'Whose disciples, along with the Pharisees’, were fasting when Jesus’ disciples were not?', 'John', 18, ['john the baptist', 'johns']),
    sa(1, 'When the disciples of John and of the Pharisees were fasting, what question was put to Jesus?', '"Why do the disciples of John and of the Pharisees fast, but Your disciples do not fast?"', 18),
    tf(1, 'People asked Jesus why His disciples fasted while the disciples of John did not.', false, 18, 'It was the other way round: John’s and the Pharisees’ disciples fasted, "but Your disciples do not fast."'),
    mc(1, 'Whom did Jesus compare His disciples to when He explained why they did not fast?', ['The friends of the bridegroom', 'Servants waiting for their master', 'Laborers in a vineyard', 'Sowers scattering seed'], 19),
    blank(1, 'Can the friends of the _____ fast while the bridegroom is with them?', 'bridegroom', 19),
    word(1, 'In Jesus’ answer about fasting, whose friends cannot fast while he is with them?', 'bridegroom', 19, ['the bridegroom']),
    tf(2, 'Jesus said the friends of the bridegroom cannot fast as long as the bridegroom is with them.', true, 19),
    sa(3, 'How did Jesus use a wedding to answer why His disciples were not fasting?', 'He asked whether the friends of the bridegroom can fast while the bridegroom is with them, and said that as long as they have the bridegroom with them they cannot fast.', 19),
    mc(2, 'When did Jesus say the friends of the bridegroom would fast?', ['When the bridegroom is taken away from them', 'When the wedding feast has come to an end', 'When the next Sabbath day arrives', 'When the disciples of John ask them to'], 20),
    blank(3, 'But the days will come when the bridegroom will be taken _____ from them, and then they will fast in those days.', 'away', 20),
    tf(2, 'Jesus said His disciples would never fast at any time.', false, 20, 'He said the days will come when the bridegroom is taken away, "and then they will fast in those days."'),

    // ══════════════════════════════════ v21–22 · Unshrunk cloth and new wine
    mc(2, 'In Jesus’ saying about mending, what happens when unshrunk cloth is sewn onto an old garment?', ['The new piece pulls away from the old and the tear is made worse', 'The old garment is made as good as new again', 'The new piece shrinks to fit and the garment is saved', 'The whole garment must be thrown away and burned'], 21),
    blank(3, 'or else the new piece pulls away from the old, and the _____ is made worse.', 'tear', 21),
    word(3, 'What kind of cloth did Jesus say no one sews onto an old garment?', 'unshrunk', 21, ['unshrunk cloth']),
    tf(2, 'Jesus said no one sews a piece of unshrunk cloth on an old garment.', true, 21),
    mc(1, 'What did Jesus say happens when new wine is put into old wineskins?', ['The wine bursts the skins, the wine is spilled, and the wineskins are ruined', 'The wine turns sour and the old wineskins grow hard', 'The old skins stretch and hold the new wine safely', 'The wine ages well and the wineskins are preserved'], 22),
    mc(2, 'After warning about old wineskins, where did Jesus say new wine must be put?', ['Into new wineskins', 'Into old wineskins that have been mended', 'Into clay jars sealed with wax', 'Into the cup of the bridegroom'], 22),
    blank(1, 'But new wine must be put into new _____.', 'wineskins', 22),
    blank(3, 'And no one puts new wine into old wineskins; or else the new wine _____ the wineskins, the wine is spilled, and the wineskins are ruined.', 'bursts', 22),
    tf(2, 'Jesus said new wine must be put into new wineskins.', true, 22),
    sa(3, 'List the three results Jesus named when new wine is put into old wineskins.', 'The new wine bursts the wineskins, the wine is spilled, and the wineskins are ruined.', 22),

    // ══════════════════════════════════ v23–24 · Grain on the Sabbath
    mc(1, 'What were Jesus’ disciples doing as they went through the grainfields on the Sabbath?', ['Plucking the heads of grain', 'Eating bread with unwashed hands', 'Carrying their beds home', 'Fasting with the disciples of John'], 23),
    blank(2, 'and as they went His disciples began to pluck the heads of _____.', 'grain', 23),
    word(1, 'On what day did Jesus and His disciples walk through the grainfields?', 'Sabbath', 23, ['the sabbath']),
    tf(2, 'It was Jesus Himself who plucked the heads of grain in the grainfields.', false, 23, '"His disciples began to pluck the heads of grain."'),
    sa(1, 'Where was Jesus walking with His disciples when the Pharisees raised the Sabbath question, and what were the disciples doing?', 'He was going through the grainfields on the Sabbath, and His disciples began to pluck the heads of grain.', 23),
    mc(3, 'What did the Pharisees say to Jesus when His disciples plucked grain on the Sabbath?', ['"Look, why do they do what is not lawful on the Sabbath?"', '"Why does this Man speak blasphemies like this?"', '"How is it that He eats and drinks with tax collectors and sinners?"', '"Why do Your disciples not fast as ours do?"'], 24),
    blank(2, 'And the Pharisees said to Him, "Look, why do they do what is not _____ on the Sabbath?"', 'lawful', 24),
    word(2, 'Who challenged Jesus about His disciples plucking grain on the Sabbath?', 'Pharisees', 24, ['the pharisees']),
    tf(1, 'The Pharisees told Jesus that what His disciples were doing in the grainfields was not lawful on the Sabbath.', true, 24),

    // ══════════════════════════════════ v25–26 · David and the showbread
    mc(1, 'Whose example did Jesus cite in the grainfields to answer the Pharisees?', ['David, when he was in need and hungry', 'Moses, when he was in the wilderness', 'Elijah, when he was fed by ravens', 'Abraham, when he was tested'], 25),
    blank(2, 'Have you never read what _____ did when he was in need and hungry, he and those with him:', 'David', 25),
    word(1, 'Which king’s hungry deed did Jesus remind the Pharisees of in the grainfields?', 'David', 25),
    mc(2, 'Who was high priest when David went into the house of God and ate the showbread, according to Jesus?', ['Abiathar', 'Ahimelech', 'Zadok', 'Eli'], 26),
    mc(3, 'What did Jesus say David did with the showbread that was not lawful except for priests?', ['He ate it and also gave some to those who were with him', 'He offered it on the altar and burned the rest', 'He carried it away to share with his enemies', 'He put it back and ate the fresh bread instead'], 26),
    blank(3, 'how he went into the house of God in the days of _____ the high priest', 'Abiathar', 26),
    blank(3, 'and ate the _____, which is not lawful to eat except for the priests', 'showbread', 26),
    word(3, 'What bread did Jesus say David ate in the house of God?', 'showbread', 26, ['the showbread', 'shewbread']),
    word(3, 'Jesus said David entered the house of God in the days of which high priest?', 'Abiathar', 26),
    tf(3, 'According to Jesus, David ate the showbread himself and also gave some to those who were with him.', true, 26),
    sa(3, 'What did Jesus say David did in the house of God, and who alone was allowed to do it?', 'He ate the showbread and gave some to those with him, though it was not lawful to eat except for the priests.', 26),

    // ══════════════════════════════════ v27–28 · Lord of the Sabbath
    mc(2, 'After citing David, what did Jesus tell the Pharisees the Sabbath was made for?', ['For man, and not man for the Sabbath', 'For the priests, and not for the people', 'For rest, and not for eating', 'For the Pharisees, and not for sinners'], 27),
    blank(1, 'The Sabbath was made for _____, and not man for the Sabbath.', 'man', 27),
    tf(1, 'Jesus said, "The Sabbath was made for man, and not man for the Sabbath."', true, 27),
    sa(2, 'How did Jesus sum up the purpose of the Sabbath to the Pharisees in the grainfields?', 'He said the Sabbath was made for man, and not man for the Sabbath.', 27),
    mc(1, 'How did Jesus close His answer to the Pharisees about the Sabbath?', ['"Therefore the Son of Man is also Lord of the Sabbath."', '"Therefore the Son of Man has power on earth to forgive sins."', '"Therefore new wine must be put into new wineskins."', '"Therefore the Sabbath was made for man."'], 28),
    blank(2, 'Therefore the Son of Man is also _____ of the Sabbath.', 'Lord', 28),
    word(2, 'Jesus said the Son of Man is Lord of what?', 'Sabbath', 28, ['the sabbath']),
    tf(2, 'Jesus said the Pharisees were lords of the Sabbath.', false, 28, 'He said, "the Son of Man is also Lord of the Sabbath."'),
    sa(3, 'Which title did Jesus claim at the end of the grainfield dispute, and what did He say about it?', 'He called Himself the Son of Man and said the Son of Man is also Lord of the Sabbath.', 28),

    // ══════════════════════════════════ Whole-chapter
    mc(3, 'Which title does Jesus use for Himself twice in Mark 2, once at Capernaum and once in the grainfields?', ['The Son of Man', 'The Bridegroom', 'The Physician', 'The Son of David'], 28),
    sa(3, 'List the four disputes in Mark 2 in order, naming who raised each.', 'The scribes over forgiving the paralytic’s sins; the scribes and Pharisees over eating with tax collectors and sinners; a question over why His disciples did not fast; the Pharisees over plucking grain on the Sabbath.', 24),
  ],
};

export default bank;
