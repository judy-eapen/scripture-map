// Mark 3 — quiz bank (NKJV, Orthodox Study Bible text as stored). Every row is anchored to a
// verse; fill-in-the-blank rows are verified against the stored verse text by scripts/seed-quiz-bank.ts.
import { mc, blank, word, tf, sa, type ChapterBank } from './types';

const bank: ChapterBank = {
  book: 'Mark',
  chapter: 3,
  tag: 'quiz-v2-mark-3',
  rows: [
    // ══════════════════════════════════ v1–6 · The man with the withered hand on the Sabbath
    mc(1, 'When Jesus entered the synagogue again, what was wrong with the man He found there?', ['He had a withered hand', 'He had an unclean spirit', 'He was a leper', 'He was paralyzed'], 1),
    blank(1, 'And He entered the synagogue again, and a man was there who had a _____ hand.', 'withered', 1),
    word(1, 'Where was Jesus when He met the man with the withered hand?', 'synagogue', 1, ['the synagogue', 'a synagogue']),
    tf(2, 'Mark says Jesus entered the synagogue for the first time when He met the man with the withered hand.', false, 1, 'Mark says He entered the synagogue "again."'),
    sa(1, 'Describe the man Jesus found when He entered the synagogue again.', 'A man who had a withered hand.', 1),

    mc(2, 'Why did the people in the synagogue watch Jesus closely when He saw the man with the withered hand?', ['To see whether He would heal him on the Sabbath, so that they might accuse Him', 'To see whether He would touch him, so that they might be healed as well', 'To see whether He would cast out an unclean spirit, so that they might report it', 'To see whether He would eat bread with him, so that they might lay hold of Him'], 2),
    blank(2, 'So they watched Him closely, whether He would heal him on the _____, so that they might accuse Him.', 'Sabbath', 2),
    tf(1, 'Those who watched Jesus in the synagogue were hoping to find grounds to accuse Him.', true, 2),
    sa(3, 'What were the watchers in the synagogue waiting to see Jesus do, and what did they intend to do if He did it?', 'They were waiting to see whether He would heal the man on the Sabbath, so that they might accuse Him.', 2),
    word(1, 'On what day was Jesus watched to see whether He would heal the man with the withered hand?', 'Sabbath', 2, ['the sabbath']),

    blank(1, 'And He said to the man who had the withered hand, "Step _____."', 'forward', 3),
    mc(2, 'What did Jesus first say to the man with the withered hand?', ['"Step forward."', '"Stretch out your hand."', '"Be quiet, and come out of him!"', '"Go your way; your faith has made you well."'], 3),

    mc(2, 'What question did Jesus put to the watchers before He healed the man with the withered hand?', ['"Is it lawful on the Sabbath to do good or evil, to save life or to kill?"', '"How can Satan cast out Satan and still allow his divided kingdom to stand?"','"Who are My mother and My brothers among all those gathered around Me?"','"Why does this generation continue to seek a sign before it will believe?"'], 4),
    blank(3, 'Then He said to them, "Is it lawful on the Sabbath to do good or to do evil, to save life or to _____?" But they kept silent.', 'kill', 4),
    sa(2, 'How did the watchers in the synagogue respond when Jesus asked whether it was lawful to do good or evil on the Sabbath?', 'They kept silent.', 4),
    tf(2, 'When Jesus asked whether it was lawful to do good or evil on the Sabbath, the watchers answered that it was lawful to do good.', false, 4, 'They kept silent.'),

    mc(2, 'How did Jesus feel as He looked around at those watching Him before He healed the withered hand?', ['Anger, being grieved by the hardness of their hearts', 'Compassion, being moved by the size of the multitude', 'Amazement, marveling at their unbelief', 'Fear, lest the multitude should crush Him'], 5),
    blank(3, 'And when He had looked around at them with anger, being grieved by the _____ of their hearts, He said to the man, "Stretch out your hand."', 'hardness', 5),
    sa(1, 'What did Jesus tell the man to do with his withered hand, and what happened when he obeyed?', 'Jesus said, "Stretch out your hand"; he stretched it out and his hand was restored as whole as the other.', 5),
    tf(1, 'When the man stretched out his hand, it was restored as whole as the other.', true, 5),
    tf(3, 'Mark says Jesus looked around at the watchers in the synagogue with sorrow but without anger.', false, 5, 'He looked around at them "with anger, being grieved by the hardness of their hearts."'),

    mc(1, 'After Jesus healed the man with the withered hand on the Sabbath, what did the Pharisees do next?', ['They went out and immediately plotted with the Herodians how they might destroy Him', 'They went out and told the scribes from Jerusalem that He had Beelzebub', 'They sent to His mother and brothers so they might lay hold of Him', 'They followed Him to the sea with a great multitude from Galilee'], 6),
    blank(2, 'Then the Pharisees went out and immediately plotted with the _____ against Him, how they might destroy Him.', 'Herodians', 6),
    word(1, 'With which group did the Pharisees plot against Jesus after the Sabbath healing?', 'Herodians', 6, ['the herodians']),
    tf(2, 'After the Sabbath healing, the Pharisees plotted with the scribes from Jerusalem to destroy Jesus.', false, 6, 'They plotted with the Herodians.'),
    sa(2, 'What was the aim of the Pharisees and Herodians when they plotted together after the Sabbath healing?', 'How they might destroy Jesus.', 6),
    word(3, 'How quickly did the Pharisees go out to plot with the Herodians after the healing on the Sabbath?', 'immediately', 6, ['at once']),

    // ══════════════════════════════════ v7–12 · The multitude at the sea
    mc(1, 'Where did Jesus withdraw with His disciples after the Pharisees began plotting against Him?', ['To the sea', 'To the mountain', 'Into a house', 'To Jerusalem'], 7),
    blank(1, 'But Jesus withdrew with His disciples to the _____. And a great multitude from Galilee followed Him, and from Judea', 'sea', 7),
    word(2, 'From which region did the great multitude that followed Jesus to the sea first come?', 'Galilee', 7),
    tf(1, 'When Jesus withdrew to the sea, a great multitude from Galilee followed Him.', true, 7),

    mc(3, 'Which regions does Mark list as sending the multitude that came to Jesus at the sea?', ['Galilee, Judea, Jerusalem, Idumea, beyond the Jordan, and Tyre and Sidon', 'Galilee, Decapolis, Capernaum, Nazareth, Bethsaida, and Tyre and Sidon', 'Judea, Gennesaret, Idumea, Decapolis, Caesarea Philippi, and Bethsaida', 'Galilee, Judea, Jerusalem, Dalmanutha, Jericho, Bethany, and Bethphage'], 8),
    blank(3, 'and Jerusalem and Idumea and beyond the Jordan; and those from _____ and Sidon, a great multitude, when they heard how many things He was doing, came to Him.', 'Tyre', 8),
    word(3, 'Which region, named alongside Jerusalem and "beyond the Jordan," sent people to Jesus at the sea?', 'Idumea', 8),
    sa(2, 'Why did the great multitude from Tyre and Sidon come to Jesus at the sea?', 'Because they heard how many things He was doing.', 8),

    mc(2, 'Why did Jesus tell His disciples to keep a small boat ready for Him at the sea?', ['Because of the multitude, lest they should crush Him', 'So that He could cross over to the other side and rest', 'So that He could teach the multitude from the boat', 'So that He could withdraw from the Pharisees and Herodians'], 9),
    blank(2, 'So He told His disciples that a small _____ should be kept ready for Him because of the multitude, lest they should crush Him.', 'boat', 9),
    word(1, 'What did Jesus ask His disciples to keep ready for Him because of the crowd at the sea?', 'boat', 9, ['a boat', 'small boat', 'a small boat']),

    mc(2, 'Why did so many afflicted people press about Jesus at the sea?', ['Because He healed many, and they wanted to touch Him', 'Because His mother and brothers were outside calling for Him', 'Because the unclean spirits had made Him known', 'Because He was teaching them in parables'], 10),
    blank(3, 'For He healed many, so that as many as had afflictions pressed about Him to _____ Him.', 'touch', 10),

    mc(1, 'What did the unclean spirits cry out whenever they saw Jesus?', ['"You are the Son of God."', '"He has Beelzebub."', '"He is out of His mind."', '"He has an unclean spirit."'], 11),
    blank(1, 'And the unclean spirits, whenever they saw Him, fell down before Him and cried out, saying, "You are the _____ of God."', 'Son', 11),
    sa(3, 'What did the unclean spirits do whenever they saw Jesus, and what did they say?', 'They fell down before Him and cried out, "You are the Son of God."', 11),
    tf(2, 'It was the scribes from Jerusalem who cried out, "You are the Son of God."', false, 11, 'The unclean spirits cried this out; the scribes said, "He has Beelzebub."'),
    word(2, 'Whenever the unclean spirits saw Jesus, they fell down before Him and called Him the Son of whom?', 'God', 11),

    mc(3, 'How did Jesus respond when the unclean spirits cried out, "You are the Son of God"?', ['He sternly warned them not to make Him known', 'He commanded them to go into the swine', 'He asked them, "What is your name?"', 'He sent them out to preach'], 12),
    tf(2, 'Jesus allowed the unclean spirits to make Him known as the Son of God.', false, 12, 'He sternly warned them that they should not make Him known.'),

    // ══════════════════════════════════ v13–19 · Jesus appoints the twelve
    mc(1, 'Where did Jesus go when He called to Himself those He wanted and appointed the twelve?', ['Up on the mountain', 'Down to the sea', 'Into a house', 'Into the synagogue'], 13),
    blank(1, 'And He went up on the _____ and called to Him those He Himself wanted. And they came to Him.', 'mountain', 13),
    sa(3, 'Whom did Jesus call to Himself on the mountain, and how did they respond?', 'He called those He Himself wanted, and they came to Him.', 13),

    mc(1, 'How many did Jesus appoint on the mountain?', ['Twelve', 'Seven', 'Ten', 'Three'], 14),
    mc(3, 'For what purposes did Jesus appoint the twelve?', ['That they might be with Him, that He might send them out to preach, and to have power to heal and cast out demons', 'That they might keep a boat ready, hold back the multitude, and carry His message to His mother and brothers', 'That they might fast, keep the Sabbath, and answer the scribes who came down from Jerusalem', 'That they might go before Him into every city and prepare a house for Him to eat bread in'], 14),
    blank(1, 'Then He appointed _____, that they might be with Him and that He might send them out to preach,', 'twelve', 14, ['12']),
    word(1, 'How many men did Jesus appoint on the mountain?', 'twelve', 14, ['12']),
    tf(1, 'Jesus appointed the twelve so that they might be with Him and be sent out to preach.', true, 14),
    sa(3, 'According to Mark 3:14, what two things did Jesus appoint the twelve to do?', 'To be with Him, and to be sent out to preach.', 14),

    blank(2, 'and to have power to heal sicknesses and to cast out _____:', 'demons', 15),
    mc(2, 'What power did Jesus give the twelve when He appointed them?', ['To heal sicknesses and to cast out demons', 'To forgive sins and to raise the dead', 'To still the wind and to walk on the sea', 'To feed the multitude and to bind the strong man'], 15),

    mc(1, 'Which of the twelve did Jesus give the name Peter?', ['Simon', 'Andrew', 'James the son of Zebedee', 'Simon the Cananite'], 16),
    blank(1, 'Simon, to whom He gave the name _____;', 'Peter', 16),
    word(1, 'What new name did Jesus give to Simon when He appointed the twelve?', 'Peter', 16),

    mc(2, 'Which two apostles did Jesus name Boanerges, "Sons of Thunder"?', ['James the son of Zebedee and John the brother of James', 'Simon Peter and Andrew his brother', 'Philip and Bartholomew', 'James the son of Alphaeus and Thaddaeus'], 17),
    blank(3, 'James the son of Zebedee and John the brother of James, to whom He gave the name _____, that is, "Sons of Thunder";', 'Boanerges', 17),
    word(2, 'What does the name Boanerges mean, according to Mark? "Sons of ___"', 'Thunder', 17),
    word(3, 'Who was the father of James and John, the Sons of Thunder?', 'Zebedee', 17),
    tf(2, 'Jesus gave the name Boanerges to Simon and Andrew.', false, 17, 'Boanerges, "Sons of Thunder," was the name given to James the son of Zebedee and John his brother.'),
    sa(2, 'Which two apostles received the name Boanerges, and what does Mark say it means?', 'James the son of Zebedee and John the brother of James; it means "Sons of Thunder."', 17),

    mc(3, 'Which name appears in Mark’s list of the twelve as "the son of Alphaeus"?', ['James', 'Thaddaeus', 'Bartholomew', 'Judas'], 18),
    mc(3, 'Which of these is NOT named among the twelve in Mark 3?', ['Levi', 'Bartholomew', 'Thaddaeus', 'Matthew'], 18, 'Levi the son of Alphaeus is called in Mark 2, but the name does not appear in the list of the twelve.'),
    blank(3, 'Andrew, Philip, Bartholomew, Matthew, Thomas, James the son of Alphaeus, _____, Simon the Cananite;', 'Thaddaeus', 18),
    word(3, 'In Mark’s list of the twelve, what title distinguishes the second Simon from Simon Peter?', 'Cananite', 18, ['the cananite', 'simon the cananite', 'canaanite']),
    tf(3, 'In Mark’s list of the twelve, Thaddaeus is called the son of Alphaeus.', false, 18, 'James is "the son of Alphaeus"; Thaddaeus is listed next with no father named.'),
    tf(3, 'Thomas and Matthew are both named among the twelve in Mark 3.', true, 18),

    sa(3, 'Name the twelve apostles as Mark lists them, and say which one is noted as the betrayer.', 'Simon (Peter), James the son of Zebedee, John, Andrew, Philip, Bartholomew, Matthew, Thomas, James the son of Alphaeus, Thaddaeus, Simon the Cananite, and Judas Iscariot, who betrayed Him.', 19),
    mc(1, 'Which of the twelve does Mark note "also betrayed Him"?', ['Judas Iscariot', 'Simon the Cananite', 'Thomas', 'Thaddaeus'], 19),
    blank(1, 'and Judas Iscariot, who also _____ Him. And they went into a house.', 'betrayed', 19),
    word(1, 'Which apostle is listed last among the twelve, noted as the one who betrayed Jesus?', 'Judas', 19, ['judas iscariot', 'iscariot']),
    tf(3, 'After Jesus appointed the twelve, they went into a house.', true, 19),

    // ══════════════════════════════════ v20–30 · "He has Beelzebub" and the answer
    mc(2, 'When the multitude gathered again at the house, what could Jesus and those with Him not do?', ['They could not so much as eat bread', 'They could not get into the boat', 'They could not go up on the mountain', 'They could not cast out the demons'], 20),
    blank(3, 'Then the multitude came together again, so that they could not so much as eat _____.', 'bread', 20),

    mc(1, 'What did Jesus’ own people say about Him when they went out to lay hold of Him?', ['"He is out of His mind."', '"He has Beelzebub."', '"He has an unclean spirit."', '"You are the Son of God."'], 21),
    blank(2, 'But when His own people heard about this, they went out to lay hold of Him, for they said, "He is out of His _____."', 'mind', 21),
    sa(2, 'Why did Jesus’ own people go out to lay hold of Him?', 'Because they said, "He is out of His mind."', 21),
    tf(2, 'It was the scribes from Jerusalem who said of Jesus, "He is out of His mind."', false, 21, 'His own people said this; the scribes said, "He has Beelzebub."'),

    mc(2, 'What did the scribes who came down from Jerusalem say about Jesus?', ['"He has Beelzebub," and "By the ruler of the demons He casts out demons"', '"He is out of His mind," and they went out to lay hold of Him', '"You are the Son of God," and they fell down before Him', '"Look, Your mother and Your brothers are outside seeking You"'], 22),
    blank(1, 'And the scribes who came down from Jerusalem said, "He has _____," and, "By the ruler of the demons He casts out demons."', 'Beelzebub', 22),
    word(1, 'By what name did the scribes from Jerusalem say Jesus was possessed?', 'Beelzebub', 22, ['beelzebul']),
    word(2, 'From what city had the scribes come down who said Jesus had Beelzebub?', 'Jerusalem', 22),
    sa(2, 'By whose power did the scribes from Jerusalem claim Jesus was casting out demons?', 'By the ruler of the demons — they said, "He has Beelzebub."', 22),

    mc(3, 'When Jesus answered the scribes’ charge that He had Beelzebub, how did He begin?', ['He called them to Himself and asked in parables, "How can Satan cast out Satan?"', 'He looked around at them with anger and said, "Stretch out your hand."', 'He sternly warned them that they should not make Him known', 'He looked around in a circle and asked, "Who is My mother, or My brothers?"'], 23),
    blank(1, 'So He called them to Himself and said to them in parables: "How can _____ cast out Satan?', 'Satan', 23),
    word(2, 'Jesus answered the scribes’ Beelzebub charge by speaking to them in what form?', 'parables', 23, ['parable']),

    blank(1, 'If a _____ is divided against itself, that kingdom cannot stand.', 'kingdom', 24),
    mc(1, 'In answering the scribes, what did Jesus say happens to a kingdom divided against itself?', ['That kingdom cannot stand', 'That kingdom is plundered', 'That kingdom never has forgiveness', 'That kingdom has an end'], 24),

    sa(2, 'What two things did Jesus say cannot stand if divided against themselves?', 'A kingdom and a house.', 25),
    blank(2, 'And if a _____ is divided against itself, that house cannot stand.', 'house', 25),
    word(1, 'After the divided kingdom, Jesus said that a divided what also cannot stand?', 'house', 25, ['a house']),

    mc(3, 'What did Jesus say would happen to Satan if he has risen up against himself and is divided?', ['He cannot stand, but has an end', 'He will be bound and his goods plundered', 'He is subject to eternal condemnation', 'He will be cast out by the ruler of the demons'], 26),
    blank(3, 'And if Satan has risen up against himself, and is divided, he cannot stand, but has an _____.', 'end', 26),
    sa(3, 'What was Jesus’ point about Satan when He asked, "How can Satan cast out Satan?"', 'If Satan has risen up against himself and is divided, he cannot stand but has an end.', 26),

    mc(2, 'According to Jesus, what must someone do before he can plunder a strong man’s goods?', ['First bind the strong man', 'First divide the strong man’s house', 'First cast out the strong man', 'First warn the strong man sternly'], 27),
    blank(3, 'No one can enter a strong man’s house and plunder his goods, unless he first _____ the strong man. And then he will plunder his house.', 'binds', 27),
    tf(2, 'Jesus said that no one can plunder a strong man’s house unless he first binds the strong man.', true, 27),
    sa(2, 'In Jesus’ saying about the strong man, what happens after the strong man is bound?', 'Then the intruder will plunder his house.', 27),

    mc(3, 'What did Jesus say will be forgiven the sons of men?', ['All sins, and whatever blasphemies they may utter', 'All sins except those committed on the Sabbath', 'All sins except speaking against the Son of Man', 'Only the sins of those who do the will of God'], 28),
    blank(3, '"Assuredly, I say to you, all sins will be forgiven the sons of men, and whatever _____ they may utter;', 'blasphemies', 28),
    word(3, 'Jesus opened His saying about forgiveness with what solemn word? "___, I say to you"', 'Assuredly', 28),
    tf(2, 'Jesus said that all sins will be forgiven the sons of men, and whatever blasphemies they may utter.', true, 28),

    mc(1, 'Which sin did Jesus say never has forgiveness?', ['Blasphemy against the Holy Spirit', 'Healing on the Sabbath', 'Saying that Jesus is out of His mind', 'Plotting with the Herodians'], 29),
    blank(1, 'but he who blasphemes against the Holy _____ never has forgiveness, but is subject to eternal condemnation"—', 'Spirit', 29),
    blank(3, 'but he who blasphemes against the Holy Spirit never has forgiveness, but is subject to eternal _____"—', 'condemnation', 29),
    sa(3, 'What did Jesus say is the fate of the one who blasphemes against the Holy Spirit?', 'He never has forgiveness, but is subject to eternal condemnation.', 29),
    tf(2, 'Jesus said the one who blasphemes against the Holy Spirit will be forgiven in the end.', false, 29, 'He "never has forgiveness, but is subject to eternal condemnation."'),
    word(1, 'Blasphemy against whom did Jesus say never has forgiveness? The Holy ___', 'Spirit', 29, ['holy spirit', 'the holy spirit']),

    mc(3, 'Why did Jesus give the warning about blaspheming the Holy Spirit, according to Mark?', ['Because they said, "He has an unclean spirit"', 'Because they said, "He is out of His mind"', 'Because they watched Him so that they might accuse Him', 'Because they cried out, "You are the Son of God"'], 30),
    blank(2, 'because they said, "He has an _____ spirit."', 'unclean', 30),
    tf(3, 'Mark connects Jesus’ warning about blasphemy against the Holy Spirit to the charge that He had an unclean spirit.', true, 30),
    sa(3, 'What accusation, in Mark’s words, drew Jesus’ warning about the sin that never has forgiveness?', 'They said, "He has an unclean spirit."', 30),

    // ══════════════════════════════════ v31–35 · Jesus’ mother and brothers
    mc(1, 'Who came and stood outside the house, sending in a message to call Jesus?', ['His brothers and His mother', 'The Pharisees and the Herodians', 'The scribes who came down from Jerusalem', 'The twelve He had appointed'], 31),
    blank(1, 'Then His brothers and His mother came, and standing _____ they sent to Him, calling Him.', 'outside', 31),
    tf(1, 'When Jesus’ brothers and mother came, they stood outside and sent in for Him.', true, 31),
    word(2, 'When Jesus’ mother and brothers came for Him, where did they stand?', 'outside', 31),

    mc(2, 'What message was passed to Jesus while the multitude sat around Him?', ['"Look, Your mother and Your brothers are outside seeking You."', '"Look, the Pharisees and Herodians are plotting to destroy You."', '"Look, the scribes from Jerusalem are saying You have Beelzebub."', '"Look, the multitude is so great that we cannot eat bread."'], 32),
    blank(2, 'And a multitude was sitting around Him; and they said to Him, "Look, Your mother and Your brothers are outside _____ You."', 'seeking', 32),
    tf(2, 'The message brought to Jesus said that His mother and brothers were outside seeking Him.', true, 32),

    mc(1, 'How did Jesus reply when told that His mother and brothers were outside seeking Him?', ['"Who is My mother, or My brothers?"', '"But who do you say that I am?"', '"How can Satan cast out Satan?"', '"A prophet is not without honor except in his own country."'], 33),
    blank(1, 'But He answered them, saying, "Who is My mother, or My _____?"', 'brothers', 33),
    tf(2, 'When told His mother and brothers were outside, Jesus answered, "Bring them in to Me."', false, 33, 'He answered, "Who is My mother, or My brothers?"'),

    mc(2, 'Whom did Jesus point to as His mother and brothers?', ['Those who sat about Him in a circle', 'His brothers and mother standing outside', 'The twelve He had appointed on the mountain', 'The multitude from Galilee that followed Him to the sea'], 34),
    blank(3, 'And He looked around in a _____ at those who sat about Him, and said, "Here are My mother and My brothers!', 'circle', 34),
    word(3, 'Jesus looked around in what shape at those who sat about Him before calling them His mother and brothers?', 'circle', 34, ['a circle']),
    tf(1, 'Jesus said of those sitting around Him, "Here are My mother and My brothers!"', true, 34),
    sa(3, 'What did Jesus do and say after asking, "Who is My mother, or My brothers?"', 'He looked around in a circle at those who sat about Him and said, "Here are My mother and My brothers!"', 34),

    mc(1, 'According to Jesus, who is His brother, sister, and mother?', ['Whoever does the will of God', 'Whoever follows Him to the sea', 'Whoever has power to cast out demons', 'Whoever sits around Him in a circle'], 35),
    blank(1, 'For whoever does the _____ of God is My brother and My sister and mother."', 'will', 35),
    tf(2, 'Jesus said that whoever does the will of God is His brother and sister and mother.', true, 35),
    tf(3, 'Jesus said that whoever keeps the Sabbath is His brother and sister and mother.', false, 35, 'He said "whoever does the will of God."'),
    sa(1, 'Who did Jesus say counts as His brother, sister, and mother?', 'Whoever does the will of God.', 35),
  ],
};

export default bank;
