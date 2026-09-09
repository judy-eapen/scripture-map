// Mark 7 — quiz bank (NKJV, Orthodox Study Bible). Every row is anchored to a verse;
// fill-in-the-blank rows are verified against the stored verse text by scripts/seed-quiz-bank.ts.
import { mc, blank, word, tf, sa, type ChapterBank } from './types';

const bank: ChapterBank = {
  book: 'Mark',
  chapter: 7,
  tag: 'quiz-v2-mark-7',
  rows: [
    // ══════════════════════════════════ v1–5 · Pharisees from Jerusalem and the unwashed hands
    mc(1, 'When the Pharisees and some of the scribes came together to Jesus at the start of Mark 7, where had they come from?', ['Jerusalem', 'Tyre', 'Sidon', 'Decapolis'], 1),
    blank(1, 'Then the Pharisees and some of the scribes came together to Him, having come from _____.', 'Jerusalem', 1),
    word(1, 'Along with some of the scribes, which group came together to Jesus from Jerusalem?', 'Pharisees', 1, ['the pharisees', 'pharisee']),
    tf(2, 'The scribes who came together to Jesus with the Pharisees had come from Decapolis.', false, 1, 'They had come from Jerusalem.'),

    mc(1, 'What did the Pharisees and scribes from Jerusalem see Jesus’ disciples doing that made them find fault?', ['Eating bread with unwashed hands', 'Eating bread in the marketplace', 'Eating without washing their cups and pitchers', 'Eating bread taken from the children'], 2),
    blank(2, 'Now when they saw some of His disciples eat bread with defiled, that is, with unwashed hands, they found _____.', 'fault', 2),
    sa(1, 'Why did the Pharisees and scribes find fault with some of Jesus’ disciples?', 'They saw the disciples eating bread with defiled, that is, unwashed hands.', 2),
    tf(1, 'The Pharisees found fault because some of Jesus’ disciples ate bread with unwashed hands.', true, 2),

    mc(2, 'According to Mark, why do the Pharisees and all the Jews wash their hands in a special way before eating?', ['They hold the tradition of the elders', 'Moses commanded it in the Law', 'Isaiah prophesied that they should', 'The scribes from Jerusalem required it'], 3),
    blank(2, 'For the Pharisees and all the Jews do not eat unless they wash their hands in a special way, holding the _____ of the elders.', 'tradition', 3),
    word(2, 'Mark explains that the Pharisees and all the Jews wash their hands in a special way, holding the tradition of whom?', 'elders', 3, ['the elders']),

    mc(2, 'What did the Pharisees and all the Jews do when they came from the marketplace?', ['They did not eat unless they washed', 'They washed their couches and copper vessels', 'They declared their purchases Corban', 'They asked the scribes to bless their bread'], 4),
    mc(3, 'Which four things does Mark list as items the Pharisees traditionally washed?', ['Cups, pitchers, copper vessels, and couches', 'Cups, plates, copper vessels, and tables', 'Pitchers, bowls, bread baskets, and beds', 'Hands, feet, cups, and pitchers'], 4),
    blank(3, 'And there are many other things which they have received and hold, like the washing of cups, pitchers, copper vessels, and _____.', 'couches', 4),
    word(3, 'Besides cups, pitchers, and copper vessels, what piece of furniture does Mark say the Pharisees washed by tradition?', 'couches', 4, ['couch']),

    mc(2, 'What question did the Pharisees and scribes put to Jesus about His disciples?', ['"Why do Your disciples not walk according to the tradition of the elders, but eat bread with unwashed hands?"', '"Why do Your disciples eat bread that has been thrown to the little dogs?"', '"Why do Your disciples not wash the cups and pitchers before they eat?"', '"Why do Your disciples reject the commandment of God to keep their own tradition?"'], 5),
    blank(1, 'Then the Pharisees and scribes asked Him, "Why do Your disciples not walk according to the tradition of the elders, but eat bread with _____ hands?"', 'unwashed', 5),
    sa(2, 'When the Pharisees and scribes questioned Jesus, what did they accuse His disciples of failing to walk according to?', 'The tradition of the elders — the disciples ate bread with unwashed hands.', 5),

    // ══════════════════════════════════ v6–8 · Jesus quotes Isaiah
    mc(1, 'When the Pharisees asked why the disciples ate with unwashed hands, which prophet did Jesus quote against them?', ['Isaiah', 'Moses', 'Elijah', 'John the Baptist'], 6),
    word(1, 'Which prophet did Jesus say had prophesied well of the Pharisees and scribes as hypocrites?', 'Isaiah', 6),
    word(2, 'What single name did Jesus call the Pharisees and scribes when He said Isaiah had prophesied of them?', 'hypocrites', 6, ['hypocrite']),
    blank(2, 'This people honors Me with their _____, But their heart is far from Me.', 'lips', 6),
    mc(2, 'In the Isaiah prophecy Jesus quoted to the Pharisees, what did the people honor God with while their heart was far from Him?', ['Their lips', 'Their gifts', 'Their washings', 'Their sacrifices'], 6),
    tf(2, 'In the Isaiah quotation Jesus used, the people’s heart was near to God while their lips were far from Him.', false, 6, 'It is the other way round: "This people honors Me with their lips, But their heart is far from Me."'),

    blank(3, 'And in vain they worship Me, Teaching as doctrines the commandments of _____.', 'men', 7),
    mc(2, 'According to the Isaiah prophecy Jesus quoted, why was the people’s worship in vain?', ['They taught the commandments of men as doctrines', 'They honored God with their lips only on the Sabbath', 'They washed cups and pitchers instead of their hands', 'They refused to hear the parable Jesus told the multitude'], 7),
    word(3, 'According to the Isaiah prophecy Jesus quoted, the people worshiped God in what — a single word meaning to no purpose?', 'vain', 7),
    tf(3, 'Isaiah, as Jesus quoted him, said the people were "teaching as doctrines the commandments of God."', false, 7, 'They were teaching as doctrines "the commandments of men."'),

    mc(3, 'Jesus said the Pharisees were laying aside the commandment of God in order to hold what?', ['The tradition of men', 'The word of God', 'The prophecy of Isaiah', 'The bread of the children'], 8),
    blank(3, 'For laying aside the commandment of God, you hold the tradition of men —the washing of _____ and cups, and many other such things you do.', 'pitchers', 8),
    sa(2, 'What examples did Jesus give of the "tradition of men" the Pharisees held while laying aside the commandment of God?', 'The washing of pitchers and cups, and many other such things.', 8),

    // ══════════════════════════════════ v9–13 · Corban and the commandment to honor parents
    blank(2, 'He said to them, "All too well you reject the commandment of God, that you may keep your _____."', 'tradition', 9),
    mc(2, 'Why, according to Jesus, did the Pharisees reject the commandment of God?', ['So that they might keep their own tradition', 'So that they might honor their father and mother', 'So that they might purify all foods', 'So that they might not be defiled by the marketplace'], 9),
    tf(1, 'Jesus told the Pharisees, "All too well you reject the commandment of God, that you may keep your tradition."', true, 9),

    mc(2, 'Which two sayings of Moses did Jesus quote to the Pharisees in the dispute over tradition?', ['"Honor your father and your mother" and "He who curses father or mother, let him be put to death"', '"Honor your father and your mother" and "You shall not steal"', '"Love your neighbor as yourself" and "He who curses father or mother, let him be put to death"', '"You shall have no other gods" and "Honor your father and your mother"'], 10),
    blank(1, 'For Moses said, ‘Honor your father and your _____’; and, ‘He who curses father or mother, let him be put to death.’', 'mother', 10),
    word(1, 'When Jesus contrasted God’s commandment with the Pharisees’ tradition, whose words "Honor your father and your mother" did He quote?', 'Moses', 10),
    mc(3, 'According to the words of Moses that Jesus quoted, what should happen to one who curses father or mother?', ['He should be put to death', 'He should be put out of the synagogue', 'He should be made to wash in a special way', 'He should give a gift of Corban to God'], 10),
    sa(3, 'According to Moses as Jesus quoted him, what penalty was set for one who curses father or mother?', 'Let him be put to death.', 10),

    mc(1, 'In Jesus’ rebuke of the Pharisees, what does the term "Corban" mean?', ['A gift to God', 'A tradition of the elders', 'A washing of the hands', 'A commandment of men'], 11),
    blank(3, 'But you say, ‘If a man says to his father or mother, "Whatever profit you might have received from me is _____"—’ (that is, a gift to God),', 'Corban', 11),
    word(1, 'What term did Jesus say a man might use to declare his property a gift to God, so that it was withheld from his parents?', 'Corban', 11),
    sa(2, 'What did Jesus say a man would tell his father or mother when declaring something Corban?', '"Whatever profit you might have received from me is Corban" — that is, a gift to God.', 11),
    tf(2, 'Jesus explained that "Corban" means a gift to the elders.', false, 11, 'Mark explains Corban as "a gift to God."'),

    mc(2, 'What was the result when a man declared his property "Corban," according to Jesus?', ['The Pharisees no longer let him do anything for his father or mother', 'The Pharisees made him wash his hands in a special way', 'The Pharisees put him to death for cursing his parents', 'The Pharisees required him to give the gift to the scribes'], 12),
    sa(3, 'How did the Corban practice, as Jesus described it, affect a man’s duty to his parents?', 'The Pharisees no longer let him do anything for his father or his mother.', 12),

    mc(2, 'What did Jesus say the Pharisees’ handed-down tradition did to the word of God?', ['Made it of no effect', 'Made it a doctrine of men', 'Made it pure', 'Made it hidden from the multitude'], 13),
    blank(3, 'making the word of God of no _____ through your tradition which you have handed down. And many such things you do.', 'effect', 13),

    // ══════════════════════════════════ v14–16 · Teaching the multitude on what defiles
    mc(2, 'After answering the Pharisees about unwashed hands, whom did Jesus call to Himself to teach about what defiles?', ['All the multitude', 'Only His disciples', 'The Pharisees and scribes', 'The scribes from Jerusalem'], 14),
    blank(1, 'When He had called all the multitude to Himself, He said to them, "Hear Me, everyone, and _____:', 'understand', 14),
    sa(1, 'What did Jesus say to the multitude before teaching them what defiles a man?', '"Hear Me, everyone, and understand."', 14),
    tf(1, 'Jesus taught about what defiles a man only in private, without calling the multitude.', false, 14, 'He first called all the multitude to Himself and said, "Hear Me, everyone, and understand."'),

    mc(1, 'What did Jesus tell the multitude truly defiles a man?', ['The things which come out of him', 'The things which enter him from outside', 'Bread eaten with unwashed hands', 'Food bought in the marketplace'], 15),
    blank(1, 'There is nothing that enters a man from outside which can _____ him; but the things which come out of him, those are the things that defile a man.', 'defile', 15),
    tf(1, 'Jesus told the multitude that nothing entering a man from outside can defile him.', true, 15),
    sa(1, 'Sum up what Jesus told the multitude about what can and cannot defile a man.', 'Nothing that enters a man from outside can defile him; the things that come out of him are what defile a man.', 15),

    blank(2, 'If anyone has ears to hear, let him _____!', 'hear', 16),
    mc(3, 'How did Jesus close His teaching to the multitude about what defiles a man?', ['"If anyone has ears to hear, let him hear!"', '"He who has ears, let him understand the parable!"', '"Go your way; your faith has made you clean!"', '"Hear Me, everyone, and be opened!"'], 16),
    word(2, 'When Jesus said "If anyone has ears to hear, let him hear!", what did He say a person with ears must do?', 'hear', 16, ['listen']),

    // ══════════════════════════════════ v17–23 · The explanation in the house
    mc(1, 'Where were Jesus’ disciples when they asked Him about the parable on what defiles?', ['In a house away from the crowd', 'On the Sea of Galilee', 'In the marketplace', 'In the region of Decapolis'], 17),
    blank(1, 'When He had entered a house away from the crowd, His disciples asked Him concerning the _____.', 'parable', 17),
    tf(1, 'The disciples asked Jesus about the parable while He was still with the crowd.', false, 17, 'They asked when He had entered a house away from the crowd.'),

    mc(3, 'How did Jesus respond when His disciples asked about the parable on what defiles?', ['"Are you thus without understanding also?"', '"Why do you reason because you have no bread?"', '"Do you still not perceive who I am?"', '"Why do you not walk according to the tradition?"'], 18),
    blank(2, 'So He said to them, "Are you thus without _____ also?', 'understanding', 18),
    sa(2, 'What did Jesus ask His disciples when they did not perceive that outside things cannot defile a man?', '"Are you thus without understanding also?"', 18),

    mc(3, 'According to Jesus, why can food entering a man from outside not defile him?', ['It does not enter his heart but his stomach, and is eliminated', 'It is purified by washing in a special way', 'It enters his heart and is purified there', 'It has been received and held as tradition'], 19),
    blank(3, 'because it does not enter his heart but his _____, and is eliminated, thus purifying all foods?"', 'stomach', 19),
    word(3, 'Jesus said food that enters a man does not enter his heart but goes into what?', 'stomach', 19, ['the stomach', 'belly']),
    tf(3, 'Jesus said that food entering from outside is eliminated, "thus purifying all foods."', true, 19),
    sa(3, 'What did Jesus say happens to food that enters a man, and what did He conclude from it?', 'It does not enter his heart but his stomach and is eliminated, thus purifying all foods.', 19),

    blank(1, 'And He said, "What comes out of a man, that _____ a man.', 'defiles', 20),
    mc(2, 'In the house, what did Jesus tell His disciples defiles a man?', ['What comes out of a man', 'What a man eats with unwashed hands', 'What a man buys in the marketplace', 'What a man withholds from his parents'], 20),
    tf(2, 'In the house, Jesus told the disciples that what goes into a man defiles him.', false, 20, 'He said, "What comes out of a man, that defiles a man."'),

    mc(2, 'From where did Jesus say evil thoughts, adulteries, fornications, and murders proceed?', ['From within, out of the heart of men', 'From outside, through the food men eat', 'From the traditions handed down by the elders', 'From the marketplace and unwashed hands'], 21),
    blank(2, 'For from within, out of the _____ of men, proceed evil thoughts, adulteries, fornications, murders,', 'heart', 21),
    word(2, 'Jesus said evil thoughts proceed from within, out of what part of men?', 'heart', 21, ['the heart']),
    sa(3, 'Along with evil thoughts, which three evils does Jesus first name as proceeding from the heart of men?', 'Adulteries, fornications, and murders.', 21),

    mc(3, 'Which of these is NOT in Jesus’ list of the evil things that come from within a man?', ['Unwashed hands', 'An evil eye', 'Lewdness', 'Foolishness'], 22),
    mc(3, 'Which two things close Jesus’ list of evils that proceed from within a man?', ['Pride and foolishness', 'Blasphemy and pride', 'Deceit and lewdness', 'Thefts and covetousness'], 22),
    blank(3, 'thefts, covetousness, wickedness, deceit, lewdness, an evil eye, _____, pride, foolishness.', 'blasphemy', 22),
    word(3, 'In Jesus’ list of evils that come from within, what comes right after "deceit"?', 'lewdness', 22),
    tf(3, 'Jesus’ list of evils from within ends with "pride, foolishness."', true, 22),
    sa(3, 'List the evils Jesus named as proceeding from within a man after "murders."', 'Thefts, covetousness, wickedness, deceit, lewdness, an evil eye, blasphemy, pride, foolishness.', 22),

    blank(1, 'All these evil things come from _____ and defile a man.', 'within', 23),
    mc(2, 'How did Jesus conclude His list of evil thoughts and deeds to the disciples?', ['"All these evil things come from within and defile a man."', '"All these evil things enter from outside and defile a man."', '"All these evil things come from the tradition of men."', '"All these evil things are purified in the stomach."'], 23),
    tf(1, 'Jesus concluded that all the evil things He listed come from within and defile a man.', true, 23),

    // ══════════════════════════════════ v24–30 · The Syro-Phoenician woman’s daughter
    mc(1, 'After the dispute over what defiles, to which region did Jesus go?', ['Tyre and Sidon', 'Decapolis', 'Jerusalem', 'Gennesaret'], 24),
    blank(1, 'From there He arose and went to the region of Tyre and _____. And He entered a house and wanted no one to know it, but He could not be hidden.', 'Sidon', 24),
    word(1, 'Jesus went to the region of Tyre and which other city before meeting the Syro-Phoenician woman?', 'Sidon', 24),
    sa(2, 'What did Jesus want when He entered a house in the region of Tyre and Sidon, and did He get it?', 'He wanted no one to know He was there, but He could not be hidden.', 24),

    mc(1, 'What was wrong with the young daughter of the woman who came to Jesus in the region of Tyre and Sidon?', ['She had an unclean spirit', 'She was deaf and could not speak plainly', 'She was lying sick with a fever', 'She had died that morning'], 25),
    blank(2, 'For a woman whose young daughter had an unclean _____ heard about Him, and she came and fell at His feet.', 'spirit', 25),
    word(1, 'When the woman whose daughter had an unclean spirit came to Jesus, she fell at His what?', 'feet', 25, ['his feet']),
    tf(1, 'The woman in the region of Tyre and Sidon came to Jesus because her young daughter had an unclean spirit.', true, 25),

    sa(1, 'How does Mark describe the woman who begged Jesus to cast the demon out of her daughter in the region of Tyre?', 'She was a Greek, a Syro-Phoenician by birth.', 26, ['a greek, a syro-phoenician by birth', 'greek, syro-phoenician', 'a greek syro-phoenician']),
    mc(1, 'The woman who begged Jesus to cast the demon out of her daughter was a Greek — by birth, what was she?', ['A Syro-Phoenician', 'A Galilean', 'A Nazarene', 'A Gerasene'], 26),
    blank(2, 'The woman was a Greek, a Syro-Phoenician by birth, and she kept asking Him to cast the _____ out of her daughter.', 'demon', 26),
    word(2, 'The Syro-Phoenician woman kept asking Jesus to cast what out of her daughter?', 'demon', 26, ['the demon', 'unclean spirit', 'spirit']),
    tf(3, 'Mark says the Syro-Phoenician woman asked Jesus only once to cast the demon out of her daughter.', false, 26, 'Mark says she "kept asking Him."'),

    mc(3, 'How did Jesus first answer the Syro-Phoenician woman’s plea for her daughter?', ['"Let the children be filled first, for it is not good to take the children’s bread and throw it to the little dogs."', '"Go your way; the demon has gone out of your daughter."', '"Are you thus without understanding also?"', '"Do not be afraid; only believe, and your daughter will be made well."'], 27),
    blank(2, 'But Jesus said to her, "Let the children be filled first, for it is not good to take the children’s bread and throw it to the little _____."', 'dogs', 27),
    tf(2, 'Jesus told the Syro-Phoenician woman, "Let the children be filled first."', true, 27),
    sa(2, 'Why did Jesus at first hold back from helping the Syro-Phoenician woman, in His own words?', '"Let the children be filled first, for it is not good to take the children’s bread and throw it to the little dogs."', 27),

    mc(1, 'How did the Syro-Phoenician woman reply when Jesus spoke of the children’s bread and the little dogs?', ['"Yes, Lord, yet even the little dogs under the table eat from the children’s crumbs."', '"Yes, Lord, yet the children have already been filled at Your table."', '"No, Lord, for my daughter is a child and not a little dog."', '"Lord, if You are willing, You can make my daughter clean."'], 28),
    blank(1, 'And she answered and said to Him, "Yes, Lord, yet even the little dogs under the table eat from the children’s _____."', 'crumbs', 28),
    word(1, 'By what title did the Syro-Phoenician woman address Jesus when she spoke of the little dogs under the table?', 'Lord', 28),
    tf(3, 'The Syro-Phoenician woman said the little dogs eat the crumbs "on the table."', false, 28, 'She said "the little dogs under the table eat from the children’s crumbs."'),

    mc(2, 'What did Jesus tell the Syro-Phoenician woman after her answer about the crumbs?', ['"For this saying go your way; the demon has gone out of your daughter."', '"For this saying your daughter shall be filled first."', '"Go your way; your faith has made your daughter well."', '"Go your way and tell no one what has been done."'], 29),
    blank(1, 'Then He said to her, "For this saying go your way; the demon has gone out of your _____."', 'daughter', 29),
    word(3, 'When Jesus sent the Syro-Phoenician woman home, what did He say had earned her request — "For this ___ go your way"?', 'saying', 29, ['this saying']),
    sa(2, 'Why did Jesus say the demon had gone out of the Syro-Phoenician woman’s daughter?', '"For this saying" — because of her answer that even the little dogs under the table eat the children’s crumbs.', 29),
    tf(2, 'Jesus went with the Syro-Phoenician woman to her house and laid His hands on her daughter.', false, 29, 'He sent her away with the words, "go your way; the demon has gone out of your daughter."'),

    mc(1, 'What did the Syro-Phoenician woman find when she came to her house?', ['The demon gone out and her daughter lying on the bed', 'Her daughter sitting up and eating bread', 'Her daughter still tormented by the demon', 'A multitude gathered around her daughter'], 30),
    blank(1, 'And when she had come to her house, she found the demon gone out, and her daughter lying on the _____.', 'bed', 30),
    word(1, 'When the Syro-Phoenician woman got home, where was her daughter lying?', 'bed', 30, ['the bed', 'on the bed']),
    tf(1, 'When the Syro-Phoenician woman came home, the demon had gone out of her daughter.', true, 30),

    // ══════════════════════════════════ v31–37 · The deaf man with the speech impediment
    mc(1, 'Leaving the region of Tyre and Sidon, through which region did Jesus travel to reach the Sea of Galilee?', ['Decapolis', 'Judea', 'Idumea', 'Gennesaret'], 31),
    blank(1, 'Again, departing from the region of Tyre and Sidon, He came through the midst of the region of _____ to the Sea of Galilee.', 'Decapolis', 31),
    word(1, 'After passing through the region of Decapolis, at which sea did Jesus arrive?', 'Galilee', 31, ['sea of galilee', 'the sea of galilee']),
    sa(3, 'Trace Jesus’ journey from the region of Tyre and Sidon to the Sea of Galilee as Mark tells it.', 'He departed from the region of Tyre and Sidon and came through the midst of the region of Decapolis to the Sea of Galilee.', 31),

    mc(1, 'What was wrong with the man brought to Jesus after He came to the Sea of Galilee?', ['He was deaf and had an impediment in his speech', 'He was blind and could not see clearly', 'He had an unclean spirit and lived among the tombs', 'He had a withered hand'], 32),
    blank(2, 'Then they brought to Him one who was _____ and had an impediment in his speech, and they begged Him to put His hand on him.', 'deaf', 32),
    sa(2, 'What did the people beg Jesus to do for the deaf man with the speech impediment?', 'They begged Him to put His hand on him.', 32),

    mc(2, 'What did Jesus do first with the deaf man before healing him?', ['He took him aside from the multitude', 'He commanded the multitude to be silent', 'He asked the man what he wanted', 'He sent the man to wash in the sea'], 33),
    mc(3, 'How did Jesus touch the deaf man with the speech impediment?', ['He put His fingers in his ears, and He spat and touched his tongue', 'He put His hands on his eyes and touched his ears', 'He spat on the ground and put clay on his ears', 'He laid His hand on his head and touched his lips'], 33),
    blank(2, 'And He took him aside from the multitude, and put His _____ in his ears, and He spat and touched his tongue.', 'fingers', 33),
    word(2, 'Jesus put His fingers in the deaf man’s ears, then spat and touched what?', 'tongue', 33, ['his tongue']),
    tf(2, 'Jesus healed the deaf man in front of the whole multitude.', false, 33, 'He "took him aside from the multitude."'),

    mc(1, 'What did Jesus say to the deaf man after looking up to heaven and sighing, and what does it mean?', ['"Ephphatha" — "Be opened"', '"Talitha, cumi" — "Little girl, arise"', '"Corban" — "A gift to God"', '"Eloi, Eloi" — "My God, My God"'], 34),
    blank(1, 'Then, looking up to heaven, He sighed, and said to him, "Ephphatha," that is, "Be _____."', 'opened', 34),
    word(1, 'What command did Jesus speak to the deaf man, which Mark translates as "Be opened"?', 'Ephphatha', 34, ['ephatha', 'ephphata']),
    word(2, 'Before saying "Ephphatha" to the deaf man, Jesus looked up to heaven and did what?', 'sighed', 34, ['sigh']),
    tf(1, 'Before healing the deaf man Jesus looked up to heaven and sighed.', true, 34),
    tf(2, 'Mark translates "Ephphatha," the word Jesus spoke to the deaf man, as "Be healed."', false, 34, 'Mark translates it "Be opened."'),
    sa(1, 'What does "Ephphatha," the command Jesus spoke to the deaf man, mean?', 'Be opened.', 34, ['be opened', 'open']),

    mc(1, 'What happened to the deaf man immediately after Jesus said "Ephphatha"?', ['His ears were opened, his tongue was loosed, and he spoke plainly', 'His eyes were opened and he saw everyone clearly', 'He rose up, took his bed, and went home', 'He fell at Jesus’ feet and worshiped Him'], 35),
    blank(3, 'Immediately his ears were opened, and the impediment of his tongue was _____, and he spoke plainly.', 'loosed', 35),
    word(2, 'After his tongue was loosed, how did the formerly deaf man speak — in one word?', 'plainly', 35, ['plain', 'clearly']),
    tf(1, 'The deaf man’s ears were opened immediately when Jesus spoke to him.', true, 35),

    mc(3, 'What did Jesus command the people after healing the deaf man, and how did they respond?', ['He told them to tell no one, but they proclaimed it all the more widely', 'He told them to tell everyone, and they proclaimed it widely', 'He told them to tell no one, and they kept silent', 'He told them to show the priests, and they went to Jerusalem'], 36),
    blank(3, 'Then He commanded them that they should tell no one; but the more He commanded them, the more widely they _____ it.', 'proclaimed', 36),
    tf(2, 'After the deaf man was healed, the people obeyed Jesus and told no one.', false, 36, 'The more He commanded them, the more widely they proclaimed it.'),
    sa(2, 'How did the people react to Jesus’ command to tell no one about the deaf man’s healing?', 'The more He commanded them, the more widely they proclaimed it.', 36),

    mc(1, 'What did the astonished people say after Jesus healed the deaf man?', ['"He has done all things well. He makes both the deaf to hear and the mute to speak."', '"We never saw anything like this! Even the unclean spirits obey Him."', '"Who can this be, that even the wind and the sea obey Him?"', '"Is this not the carpenter, the Son of Mary?"'], 37),
    blank(1, 'And they were astonished beyond measure, saying, "He has done all things _____. He makes both the deaf to hear and the mute to speak."', 'well', 37),
    blank(3, 'He makes both the deaf to hear and the _____ to speak.', 'mute', 37),
    tf(1, 'After the healing of the deaf man, the people said, "He has done all things well."', true, 37),
    sa(3, 'How does Mark measure the people’s astonishment after the deaf man was healed, and what did they say about Jesus?', 'They were astonished beyond measure and said, "He has done all things well. He makes both the deaf to hear and the mute to speak."', 37),

    // ══════════════════════════════════ Whole-chapter
    mc(2, 'Which episode in Mark 7 took place in the region of Tyre and Sidon?', ['The casting out of the demon from the Syro-Phoenician woman’s daughter', 'The dispute with the Pharisees over unwashed hands', 'The healing of the deaf man with the speech impediment', 'The teaching of the multitude about what defiles'], 24),
    tf(2, 'In Mark 7 the deaf man was healed in the region of Tyre and Sidon.', false, 31, 'Jesus had left Tyre and Sidon and come through Decapolis to the Sea of Galilee before the deaf man was brought to Him.'),
  ],
};

export default bank;
