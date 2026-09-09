// Mark 8 — quiz bank (NKJV, Orthodox Study Bible text). Every row is anchored to a verse;
// fill-in-the-blank rows are verified against the stored verse text by scripts/seed-quiz-bank.ts.
import { mc, blank, word, tf, sa, type ChapterBank } from './types';

const bank: ChapterBank = {
  book: 'Mark',
  chapter: 8,
  tag: 'quiz-v2-mark-8',
  rows: [
    // ══════════════════════════════════ v1–9 · The four thousand fed
    mc(1, 'At the start of Mark 8, why did Jesus call His disciples to Him while a great multitude was gathered?', ['The multitude was very great and had nothing to eat', 'The Pharisees had come out to dispute with Him', 'A blind man had been brought to Him to be touched', 'The disciples had forgotten to take bread in the boat'], 1),
    blank(2, 'In those days, the multitude being very great and having nothing to _____, Jesus called His disciples to Him and said to them,', 'eat', 1),

    word(1, 'When Jesus told His disciples He had compassion on the multitude, how many days did He say the people had continued with Him?', 'three', 2, ['3']),
    mc(2, 'What reason did Jesus give His disciples for having compassion on the multitude before He fed the four thousand?', ['They had continued with Him three days and had nothing to eat', 'They had come to Him seeking a sign from heaven', 'They had brought a blind man begging Him to touch him', 'They had followed Him out of the town of Bethsaida'], 2),
    sa(2, 'Before feeding the four thousand, what did Jesus say He felt toward the multitude, and why?', 'He had compassion on them because they had continued with Him three days and had nothing to eat.', 2),

    mc(2, 'What did Jesus say would happen if He sent the hungry multitude away to their own houses?', ['They would faint on the way', 'They would go and tell everyone in the town', 'They would seek a sign from heaven', 'They would reason among themselves about bread'], 3),
    blank(2, 'And if I send them away hungry to their own houses, they will _____ on the way; for some of them have come from afar."', 'faint', 3),
    tf(2, 'Jesus said that if He sent the multitude away hungry they would faint on the way, since some had come from afar.', true, 3),
    sa(3, 'Why did Jesus say the multitude would faint if He sent them home hungry?', 'Because some of them had come from afar.', 3),

    mc(1, 'When Jesus said He had compassion on the hungry multitude, how did His disciples answer Him?', ['"How can one satisfy these people with bread here in the wilderness?"', '"Send them away, that they may buy bread for themselves"', '"It is because we have no bread"', '"Why does this generation seek a sign?"'], 4),
    blank(1, 'Then His disciples answered Him, "How can one satisfy these people with bread here in the _____?"', 'wilderness', 4),
    word(2, 'When the disciples doubted that the multitude could be fed with bread, where did they say they were?', 'wilderness', 4, ['the wilderness']),

    mc(1, 'When Jesus asked the disciples before feeding the four thousand, "How many loaves do you have?", what did they answer?', ['Seven', 'Five', 'Twelve', 'One'], 5),
    blank(1, 'He asked them, "How many loaves do you have?" And they said, "_____."', 'Seven', 5, ['7']),
    word(1, 'How many loaves did the disciples have when Jesus fed the four thousand?', 'seven', 5, ['7']),

    mc(2, 'Before feeding the four thousand, what did Jesus command the multitude to do?', ['Sit down on the ground', 'Go into the town to buy bread', 'Get into the boats', 'Go away to their own houses'], 6),
    blank(3, 'And He took the seven loaves and gave thanks, _____ them and gave them to His disciples to set before them; and they set them before the multitude.', 'broke', 6),
    sa(2, 'Describe what Jesus did with the seven loaves when He fed the four thousand.', 'He took the seven loaves, gave thanks, broke them, and gave them to His disciples to set before the multitude.', 6),

    mc(1, 'Besides the seven loaves, what else did the disciples have when Jesus fed the four thousand?', ['A few small fish', 'Two large fish', 'Twelve baskets of fragments', 'One loaf in the boat'], 7),
    blank(2, 'They also had a few small _____; and having blessed them, He said to set them also before them.', 'fish', 7),
    tf(3, 'At the feeding of the four thousand, Jesus blessed the few small fish and said to set them before the people too.', true, 7),
    word(3, 'What did Jesus do to the few small fish before He told the disciples to set them before the multitude?', 'blessed', 7, ['bless', 'blessed them']),

    mc(1, 'After the four thousand ate and were filled, how many large baskets of leftover fragments were taken up?', ['Seven', 'Twelve', 'Five', 'Four'], 8),
    blank(1, 'So they ate and were filled, and they took up _____ large baskets of leftover fragments.', 'seven', 8, ['7']),
    tf(1, 'After the four thousand were fed, the disciples took up twelve baskets of leftover fragments.', false, 8, 'They took up seven large baskets; twelve was the count after the five thousand were fed (v. 19).'),

    mc(1, 'About how many people ate when Jesus fed the crowd with seven loaves in Mark 8?', ['About four thousand', 'About five thousand', 'About three thousand', 'About seven thousand'], 9),
    blank(2, 'Now those who had eaten were about four _____. And He sent them away,', 'thousand', 9),

    // ══════════════════════════════════ v10–13 · Dalmanutha: the Pharisees seek a sign
    mc(2, 'After sending the four thousand away, where did Jesus go by boat with His disciples?', ['The region of Dalmanutha', 'The town of Bethsaida', 'The towns of Caesarea Philippi', 'The region of Tyre and Sidon'], 10),
    word(2, 'To which region did Jesus and His disciples come by boat immediately after the feeding of the four thousand?', 'Dalmanutha', 10),
    tf(3, 'After the feeding of the four thousand, Jesus sailed with His disciples to the region of Bethsaida.', false, 10, 'They came to the region of Dalmanutha; Bethsaida is where the blind man was later brought to Him (v. 22).'),

    mc(2, 'What were the Pharisees seeking from Jesus when they came out to dispute with Him at Dalmanutha?', ['A sign from heaven', 'Bread in the wilderness', 'An explanation of the leaven', 'Permission to follow Him'], 11),
    blank(2, 'Then the Pharisees came out and began to dispute with Him, seeking from Him a sign from _____, testing Him.', 'heaven', 11),
    sa(3, 'Why did the Pharisees come to Jesus in the region of Dalmanutha, according to Mark?', 'They came to dispute with Him, seeking a sign from heaven and testing Him.', 11),
    tf(2, 'The Pharisees at Dalmanutha asked Jesus for a sign from heaven in order to test Him.', true, 11),

    mc(3, 'How did Jesus respond inwardly when the Pharisees sought a sign from heaven?', ['He sighed deeply in His spirit', 'He rejoiced in His spirit', 'He was moved with compassion', 'He marveled at their unbelief'], 12),
    blank(3, 'But He sighed deeply in His spirit, and said, "Why does this _____ seek a sign?', 'generation', 12),
    blank(3, 'Assuredly, I say to you, no _____ shall be given to this generation."', 'sign', 12),
    sa(2, 'What did Jesus say to the Pharisees who sought a sign from heaven?', 'He asked why this generation seeks a sign, and said that assuredly no sign would be given to this generation.', 12),
    tf(1, 'Jesus told the Pharisees that a sign from heaven would be given to this generation.', false, 12, 'He said, "Assuredly, I say to you, no sign shall be given to this generation."'),
    word(3, 'When the Pharisees demanded a sign, what did Jesus do "deeply in His spirit" before He answered them?', 'sighed', 12, ['sigh', 'sighing']),

    mc(2, 'What did Jesus do after telling the Pharisees that no sign would be given?', ['He left them, got into the boat again, and departed to the other side', 'He led them out of the town and healed a blind man', 'He commanded them to sit down on the ground', 'He strictly warned them to tell no one about Him'], 13),
    blank(2, 'And He left them, and getting into the _____ again, departed to the other side.', 'boat', 13),

    // ══════════════════════════════════ v14–21 · One loaf in the boat; the leaven warning
    mc(2, 'How many loaves did the disciples have with them in the boat after leaving the Pharisees at Dalmanutha?', ['Not more than one loaf', 'Seven loaves', 'Five loaves', 'No loaves at all'], 14),
    blank(1, 'Now the disciples had forgotten to take _____, and they did not have more than one loaf with them in the boat.', 'bread', 14),
    word(2, 'In the boat after leaving Dalmanutha, the disciples had no more than how many loaves?', 'one', 14, ['1']),
    tf(1, 'Crossing the sea after the dispute with the Pharisees, the disciples had forgotten to take bread and had only one loaf in the boat.', true, 14),

    mc(1, 'In the boat, Jesus charged His disciples to beware of the leaven of which two parties?', ['The Pharisees and Herod', 'The scribes and the elders', 'The chief priests and the Sadducees', 'The Pharisees and the Herodians'], 15),
    blank(2, 'Then He charged them, saying, "Take heed, beware of the leaven of the _____ and the leaven of Herod."', 'Pharisees', 15),
    word(2, 'Besides the Pharisees, whose leaven did Jesus tell His disciples to beware of in the boat?', 'Herod', 15, ['herod’s', "herod's"]),
    sa(2, 'What warning did Jesus give the disciples in the boat when they had only one loaf?', '"Take heed, beware of the leaven of the Pharisees and the leaven of Herod."', 15),
    tf(2, 'In the boat, Jesus warned His disciples to beware of the leaven of the Pharisees and the leaven of the scribes.', false, 15, 'It was the leaven of the Pharisees and the leaven of Herod.'),

    mc(2, 'How did the disciples interpret Jesus’ warning about leaven?', ['They reasoned that it was because they had no bread', 'They asked Him to explain the parable to them privately', 'They thought He meant they should avoid the Pharisees', 'They argued about who had forgotten the bread'], 16),
    blank(1, 'And they reasoned among themselves, saying, "It is because we have no _____."', 'bread', 16),
    sa(2, 'When Jesus warned about the leaven of the Pharisees and of Herod, what did the disciples say to one another?', 'They said, "It is because we have no bread."', 16),

    mc(3, 'When Jesus knew the disciples were reasoning about having no bread, what did He ask about their hearts?', ['"Is your heart still hardened?"', '"Is your heart far from Me?"', '"Why do you doubt in your heart?"', '"Is your heart troubled?"'], 17),
    blank(3, 'Is your heart still _____?', 'hardened', 17),
    sa(3, 'List the three questions Jesus asked the disciples when He knew they were reasoning about having no bread (Mark 8:17).', '"Why do you reason because you have no bread? Do you not yet perceive nor understand? Is your heart still hardened?"', 17),

    mc(3, 'In the boat, Jesus asked His disciples, "Having eyes, do you not see? And having ears, do you not hear?" What third question followed?', ['"And do you not remember?"', '"And do you not believe?"', '"And do you not perceive?"', '"And do you not fear?"'], 18),
    blank(3, 'Having eyes, do you not see? And having ears, do you not _____? And do you not remember?', 'hear', 18),
    word(3, 'After asking whether His disciples had eyes yet did not see and ears yet did not hear, Jesus asked whether they did not do what?', 'remember', 18),
    tf(3, 'Jesus asked the disciples in the boat, "Having eyes, do you not see? And having ears, do you not hear?"', true, 18),

    mc(2, 'Jesus reminded the disciples that when He broke the five loaves for the five thousand, how many baskets of fragments were taken up?', ['Twelve', 'Seven', 'Five', 'Four'], 19),
    blank(2, 'When I broke the five loaves for the five thousand, how many baskets full of fragments did you take up?" They said to Him, "_____."', 'Twelve', 19, ['12']),
    word(2, 'In the boat, Jesus recalled breaking how many loaves for the five thousand?', 'five', 19, ['5']),
    sa(3, 'In the boat, how did Jesus contrast the two feedings when He questioned the disciples about their lack of understanding?', 'He recalled the five loaves for the five thousand with twelve baskets of fragments taken up, and the seven loaves for the four thousand with seven large baskets taken up.', 19),

    mc(2, 'Jesus asked the disciples how many large baskets were taken up when He broke the seven loaves for the four thousand. What did they answer?', ['Seven', 'Twelve', 'Four', 'Five'], 20),
    blank(2, '"Also, when I broke the seven for the four thousand, how many large baskets full of fragments did you take up?" And they said, "_____."', 'Seven', 20, ['7']),
    blank(3, '"Also, when I broke the seven for the four _____, how many large baskets full of fragments did you take up?"', 'thousand', 20),
    tf(3, 'In the boat Jesus recalled that the seven loaves had fed five thousand people.', false, 20, 'The seven loaves were broken "for the four thousand"; the five loaves fed the five thousand.'),
    sa(3, 'In the boat, Jesus asked two questions about the baskets of fragments. What two numbers did the disciples answer?', 'Twelve (after the five loaves for the five thousand) and seven (after the seven loaves for the four thousand).', 20),

    mc(3, 'After the disciples recalled the twelve baskets and the seven large baskets, what did Jesus say to them?', ['"How is it you do not understand?"', '"How is it that you have no faith?"', '"Your faith has made you well"', '"O faithless generation, how long shall I be with you?"'], 21),
    word(3, 'After the disciples recalled the baskets of fragments, Jesus asked how it was that they did not do what?', 'understand', 21),

    // ══════════════════════════════════ v22–26 · The blind man at Bethsaida
    mc(1, 'In which town did people bring a blind man to Jesus and beg Him to touch him?', ['Bethsaida', 'Dalmanutha', 'Caesarea Philippi', 'Capernaum'], 22),
    blank(1, 'Then He came to _____; and they brought a blind man to Him, and begged Him to touch him.', 'Bethsaida', 22),
    tf(1, 'At Bethsaida, the people brought a blind man to Jesus and begged Him to touch him.', true, 22),

    mc(2, 'What did Jesus do first with the blind man at Bethsaida?', ['He took him by the hand and led him out of the town', 'He commanded him to sit down on the ground', 'He sent him away to his house', 'He put His hands on his eyes a second time'], 23),
    mc(3, 'Before asking the blind man at Bethsaida whether he saw anything, what two things had Jesus done?', ['Spit on his eyes and put His hands on him', 'Put His fingers in his ears and touched his tongue', 'Taken him by the hand and said, "Ephphatha"', 'Looked up to heaven and sighed'], 23),
    blank(3, 'And when He had _____ on his eyes and put His hands on him, He asked him if he saw anything.', 'spit', 23),
    sa(2, 'Describe how Jesus first treated the blind man after leading him out of Bethsaida.', 'He spit on his eyes, put His hands on him, and asked him if he saw anything.', 23),

    mc(1, 'After Jesus first touched the blind man at Bethsaida and asked if he saw anything, what did the man say?', ['"I see men like trees, walking"', '"I see everyone clearly"', '"I see nothing at all"', '"I see a great light"'], 24),
    blank(1, 'And he looked up and said, "I see men like _____, walking."', 'trees', 24),
    word(2, 'The blind man at Bethsaida first said he saw men like what, walking?', 'trees', 24),
    tf(2, 'After the first touch, the blind man at Bethsaida said he saw everyone clearly.', false, 24, 'He said, "I see men like trees, walking"; he saw clearly only after Jesus touched his eyes again (v. 25).'),
    sa(2, 'After the blind man at Bethsaida was first touched, what did he say he saw?', 'He looked up and said, "I see men like trees, walking."', 24),

    mc(2, 'How was the blind man of Bethsaida finally healed?', ['Jesus put His hands on his eyes again and made him look up, and he saw everyone clearly', 'Jesus spoke a word from a distance and he was restored', 'Jesus told him to wash in the sea and his sight returned', 'Jesus sent him into the town and he was healed on the way'], 25),
    blank(3, 'Then He put His hands on his eyes again and made him look up. And he was restored and saw everyone _____.', 'clearly', 25),
    tf(2, 'Jesus put His hands on the blind man’s eyes a second time, and then he was restored and saw everyone clearly.', true, 25),
    word(2, 'After Jesus put His hands on his eyes again, the man of Bethsaida saw everyone how?', 'clearly', 25),
    sa(3, 'Explain the two stages of the healing of the blind man at Bethsaida as Mark tells them.', 'After the first touch he saw men like trees walking; only after Jesus put His hands on his eyes again was he restored and saw everyone clearly.', 25),

    mc(1, 'After healing the blind man at Bethsaida, where did Jesus send him?', ['To his house', 'Into the town', 'To the synagogue', 'To show himself to the priest'], 26),
    tf(2, 'Jesus told the healed man of Bethsaida to go into the town and tell everyone what had happened.', false, 26, 'He said, "Neither go into the town, nor tell anyone in the town."'),
    sa(2, 'What instructions did Jesus give the healed man of Bethsaida when He sent him away?', 'He sent him to his house, saying, "Neither go into the town, nor tell anyone in the town."', 26),
    word(2, 'When Jesus sent the healed man of Bethsaida away, He sent him to his what?', 'house', 26, ['home']),

    // ══════════════════════════════════ v27–30 · Caesarea Philippi: Peter’s confession
    mc(1, 'On the road to which towns did Jesus ask His disciples, "Who do men say that I am?"', ['Caesarea Philippi', 'Bethsaida', 'Dalmanutha', 'Decapolis'], 27),
    blank(1, 'Now Jesus and His disciples went out to the towns of _____ Philippi;', 'Caesarea', 27),
    tf(1, 'Jesus asked His disciples "Who do men say that I am?" on the road to the towns of Caesarea Philippi.', true, 27),
    sa(1, 'What question did Jesus first ask His disciples on the road to Caesarea Philippi?', '"Who do men say that I am?"', 27),

    mc(2, 'When Jesus asked who men said He was, the disciples gave three answers. Which was NOT among them?', ['The Christ', 'John the Baptist', 'Elijah', 'One of the prophets'], 28, '"The Christ" was Peter’s own answer (v. 29), not what men were saying.'),
    mc(3, 'Which name did the disciples mention first when telling Jesus who men said He was?', ['John the Baptist', 'Elijah', 'One of the prophets', 'Moses'], 28),
    blank(1, 'So they answered, "John the Baptist; but some say, _____; and others, one of the prophets."', 'Elijah', 28),
    sa(2, 'When Jesus asked "Who do men say that I am?", what three answers did the disciples report?', 'John the Baptist; some said Elijah; and others, one of the prophets.', 28),

    mc(1, 'When Jesus asked the disciples at Caesarea Philippi "But who do you say that I am?", what did Peter answer?', ['"You are the Christ"', '"You are John the Baptist risen"', '"You are Elijah"', '"You are one of the prophets"'], 29),
    blank(1, 'Peter answered and said to Him, "You are the _____."', 'Christ', 29),
    word(1, 'Which disciple answered Jesus, "You are the Christ"?', 'Peter', 29),
    tf(1, 'It was John who answered Jesus, "You are the Christ."', false, 29, 'Peter answered and said, "You are the Christ."'),
    sa(1, 'After hearing who men said He was, what second question did Jesus ask, and who answered it?', 'He asked, "But who do you say that I am?" and Peter answered, "You are the Christ."', 29),

    mc(2, 'After Peter confessed "You are the Christ," what did Jesus do?', ['He strictly warned them to tell no one about Him', 'He sent them to proclaim it in the towns', 'He blessed Peter before the disciples', 'He took them up on a high mountain'], 30),
    word(3, 'After Peter’s confession, Jesus strictly warned the disciples that they should tell how many people about Him?', 'none', 30, ['no one', 'nobody', 'noone', 'zero']),

    // ══════════════════════════════════ v31–33 · The first passion prediction; “Get behind Me, Satan!”
    mc(1, 'After Peter’s confession, Jesus began to teach that the Son of Man must suffer many things and be rejected by whom?', ['The elders, chief priests, and scribes', 'The Pharisees and Herod', 'The Romans and the Gentiles', 'The multitude and His own disciples'], 31),
    mc(2, 'In His first passion prediction, Jesus said that after being killed the Son of Man would rise again after how long?', ['Three days', 'Seven days', 'Forty days', 'One day'], 31),
    blank(1, 'And He began to teach them that the Son of Man must suffer many things, and be rejected by the elders and chief priests and scribes, and be killed, and after _____ days rise again.', 'three', 31, ['3']),
    blank(3, 'and be rejected by the elders and chief _____ and scribes, and be killed, and after three days rise again.', 'priests', 31),
    sa(3, 'In Mark 8:31, what four things did Jesus teach that the Son of Man must undergo?', 'He must suffer many things, be rejected by the elders, chief priests, and scribes, be killed, and after three days rise again.', 31),
    tf(2, 'Jesus taught that the Son of Man would be rejected by the elders, chief priests, and scribes.', true, 31),
    tf(3, 'Jesus taught that the Son of Man would rise again after seven days.', false, 31, 'He said "after three days rise again."'),

    mc(1, 'Who took Jesus aside and began to rebuke Him after He spoke openly about the Son of Man suffering and being killed?', ['Peter', 'James', 'John', 'Andrew'], 32),
    blank(3, 'Then Peter took Him aside and began to _____ Him.', 'rebuke', 32),
    sa(2, 'How did Peter react when Jesus spoke openly about the Son of Man suffering and being killed?', 'Peter took Him aside and began to rebuke Him.', 32),

    mc(1, 'When Jesus turned and rebuked Peter for rebuking Him, what did He say?', ['"Get behind Me, Satan!"', '"O faithless generation!"', '"Why are you so fearful?"', '"Go your way; your faith has made you well"'], 33),
    mc(3, 'What reason did Jesus give when He rebuked Peter with "Get behind Me, Satan!"?', ['Peter was not mindful of the things of God, but the things of men', 'Peter had asked for a sign from heaven', 'Peter had forgotten to take bread', 'Peter had told others about Him'], 33),
    blank(1, 'He rebuked Peter, saying, "Get behind Me, _____!', 'Satan', 33),
    blank(3, 'But when He had turned around and looked at His _____, He rebuked Peter,', 'disciples', 33),
    word(1, 'Whom did Jesus rebuke with the words "Get behind Me, Satan!"?', 'Peter', 33),
    tf(1, 'Jesus said to Peter, "Get behind Me, Satan! For you are not mindful of the things of God, but the things of men."', true, 33),
    tf(3, 'Jesus rebuked Peter privately, without the other disciples seeing.', false, 33, 'He "turned around and looked at His disciples" and then rebuked Peter.'),
    sa(2, 'What did Jesus do and say when Peter rebuked Him for predicting His suffering?', 'He turned around, looked at His disciples, and rebuked Peter: "Get behind Me, Satan! For you are not mindful of the things of God, but the things of men."', 33),

    // ══════════════════════════════════ v34–38 · Take up his cross; losing and saving one’s life
    mc(1, 'What three things did Jesus say whoever desires to come after Him must do?', ['Deny himself, take up his cross, and follow Me', 'Sell all he has, give to the poor, and follow Me', 'Leave his house, his family, and his fields', 'Fast, pray, and give alms'], 34),
    mc(3, 'To whom did Jesus speak the words about denying oneself and taking up one’s cross?', ['The people He had called to Himself, with His disciples also', 'Peter alone, after rebuking him', 'The Pharisees who sought a sign', 'The multitude of four thousand before He fed them'], 34),
    blank(1, 'Whoever desires to come after Me, let him deny himself, and take up his _____, and follow Me.', 'cross', 34),
    word(1, 'Jesus said whoever desires to come after Him must deny himself and take up his what?', 'cross', 34),
    sa(1, 'What did Jesus say a person must do who desires to come after Him?', 'Deny himself, take up his cross, and follow Him.', 34),

    mc(2, 'According to Jesus, who will save his life?', ['Whoever loses his life for Jesus’ sake and the gospel’s', 'Whoever desires to save his life', 'Whoever gains the whole world', 'Whoever is not ashamed before men'], 35),
    blank(2, 'For whoever desires to save his life will _____ it, but whoever loses his life for My sake and the gospel’s will save it.', 'lose', 35),
    tf(2, 'Jesus said that whoever desires to save his life will lose it.', true, 35),
    sa(3, 'State the saying of Jesus about saving and losing one’s life (Mark 8:35).', '"Whoever desires to save his life will lose it, but whoever loses his life for My sake and the gospel’s will save it."', 35),
    word(3, 'Jesus said whoever loses his life for His sake and for the sake of what else will save it?', 'gospel', 35, ["gospel's", 'gospel’s', 'the gospel']),

    mc(1, 'Jesus asked what it would profit a man if he gains the whole world and loses what?', ['His own soul', 'His own house', 'His own life on the way', 'His place among the disciples'], 36),
    blank(3, 'For what will it _____ a man if he gains the whole world, and loses his own soul?', 'profit', 36),
    word(2, 'Jesus asked what it profits a man to gain the whole world and lose his own what?', 'soul', 36),

    mc(2, 'After asking what it profits a man to gain the world and lose his soul, what did Jesus ask next?', ['"Or what will a man give in exchange for his soul?"', '"Or what will a man give to save his life?"', '"Or how will a man take up his cross?"', '"Or what sign will a man seek from heaven?"'], 37),
    blank(2, 'Or what will a man give in _____ for his soul?', 'exchange', 37),
    tf(3, 'Jesus asked, "Or what will a man give in exchange for his life?"', false, 37, 'The question is "what will a man give in exchange for his soul?"'),
    sa(3, 'Quote the two rhetorical questions Jesus asked about the soul after teaching about taking up the cross (Mark 8:36–37).', '"For what will it profit a man if he gains the whole world, and loses his own soul? Or what will a man give in exchange for his soul?"', 37),

    mc(3, 'Of whom did Jesus say the Son of Man will be ashamed when He comes in the glory of His Father?', ['Whoever is ashamed of Him and His words in this adulterous and sinful generation', 'Whoever seeks a sign from heaven', 'Whoever reasons about having no bread', 'Whoever is mindful of the things of men'], 38),
    mc(3, 'With whom did Jesus say the Son of Man will come in the glory of His Father?', ['The holy angels', 'The elders and prophets', 'Moses and Elijah', 'The twelve disciples'], 38),
    blank(3, 'of him the Son of Man also will be ashamed when He comes in the glory of His Father with the holy _____."', 'angels', 38),
    word(2, 'Jesus said the Son of Man will come in the glory of His Father with the holy what?', 'angels', 38),
    tf(1, 'Jesus said that the Son of Man will be ashamed of whoever is ashamed of Him and His words.', true, 38),
    sa(3, 'How did Jesus describe the generation in which people might be ashamed of Him and His words?', 'He called it "this adulterous and sinful generation."', 38),
    word(3, 'Jesus said the Son of Man will come in the glory of whom?', 'Father', 38, ['his father', 'the father']),
  ],
};

export default bank;
