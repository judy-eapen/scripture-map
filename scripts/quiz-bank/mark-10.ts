// Mark 10 — quiz bank (NKJV, Orthodox Study Bible). Every row is anchored to a verse;
// fill-in-the-blank rows are verified against the stored verse text by scripts/seed-quiz-bank.ts.
import { mc, blank, word, tf, sa, type ChapterBank } from './types';

const bank: ChapterBank = {
  book: 'Mark',
  chapter: 10,
  tag: 'quiz-v2-mark-10',
  rows: [
    // ══════════════════════════════════ v1–12 · The Pharisees test Jesus about divorce
    mc(1, 'At the start of Mark 10, Jesus arose and came to which region, where multitudes gathered to Him again?', ['The region of Judea by the other side of the Jordan', 'Jericho, where a great multitude went out with Him', 'Jerusalem, where He would be delivered to the chief priests', 'The house where His disciples questioned Him'], 1),
    blank(2, 'Then He arose from there and came to the region of Judea by the other side of the _____.', 'Jordan', 1),
    tf(1, 'When multitudes gathered to Jesus in the region of Judea beyond the Jordan, He taught them again, as He was accustomed.', true, 1),
    sa(2, 'When Jesus came to the region of Judea by the other side of the Jordan and multitudes gathered to Him, what did He do?', 'As He was accustomed, He taught them again.', 1),

    mc(1, 'What question did the Pharisees bring to Jesus in Judea beyond the Jordan, testing Him?', ['"Is it lawful for a man to divorce his wife?"', '"What shall I do that I may inherit eternal life?"', '"Who then can be saved?"', '"What did Moses command you?"'], 2),
    word(1, 'Which group came to Jesus in Judea and asked whether it is lawful for a man to divorce his wife?', 'Pharisees', 2, ['the pharisees', 'pharisee']),
    blank(1, 'The Pharisees came and asked Him, "Is it lawful for a man to _____ his wife?" testing Him.', 'divorce', 2),
    tf(2, 'Mark says the Pharisees asked Jesus about divorce because they sincerely wanted to learn from Him.', false, 2, 'Mark says they asked the question "testing Him."'),
    sa(2, 'According to Mark, why did the Pharisees ask Jesus whether it is lawful for a man to divorce his wife?', 'They were testing Him.', 2),

    mc(2, 'When the Pharisees asked whether a man may divorce his wife, how did Jesus first answer them?', ['He asked, "What did Moses command you?"', 'He said, "What God has joined together, let not man separate."', 'He said, "Because of the hardness of your heart he wrote you this precept."', 'He asked, "Why do you call Me good?"'], 3),
    word(1, 'When the Pharisees tested Jesus about divorce, He asked them what which lawgiver had commanded them?', 'Moses', 3),
    blank(2, 'And He answered and said to them, "What did _____ command you?"', 'Moses', 3),

    mc(2, 'When Jesus asked the Pharisees what Moses commanded, what did they say Moses had permitted a man to do?', ['Write a certificate of divorce and dismiss his wife', 'Leave his father and mother and be joined to his wife', 'Divorce his wife and marry another without committing adultery', 'Bring his little children to be touched and blessed'], 4),
    blank(2, 'They said, "Moses permitted a man to write a certificate of _____, and to dismiss her."', 'divorce', 4),
    tf(1, 'The Pharisees answered Jesus that Moses permitted a man to write a certificate of divorce and to dismiss his wife.', true, 4),
    sa(3, 'When Jesus asked the Pharisees, "What did Moses command you?", what exactly did they answer?', 'Moses permitted a man to write a certificate of divorce, and to dismiss her.', 4),

    mc(2, 'According to Jesus, why did Moses write the Pharisees the precept about a certificate of divorce?', ['Because of the hardness of their heart', 'Because from the beginning God made them male and female', 'Because the two shall become one flesh', 'Because a man must leave his father and mother'], 5),
    blank(2, 'And Jesus answered and said to them, "Because of the _____ of your heart he wrote you this precept.', 'hardness', 5),
    word(2, 'Jesus told the Pharisees that Moses wrote the divorce precept because of the ___ of their heart.', 'hardness', 5, ['hard']),
    tf(2, 'Jesus told the Pharisees that Moses wrote the divorce precept because of the hardness of their heart.', true, 5),

    blank(1, 'But from the beginning of the creation, God ‘made them male and _____.’', 'female', 6),
    mc(2, 'Answering the Pharisees about divorce, Jesus pointed back to "the beginning of the creation." What did He say God did then?', ['Made them male and female', 'Wrote them a certificate of divorce', 'Commanded them to honor father and mother', 'Joined the two into one flesh'], 6),
    tf(2, 'Jesus told the Pharisees that from the beginning of the creation God made them male and female.', true, 6),

    blank(2, '‘For this reason a man shall leave his father and mother and be joined to his _____,', 'wife', 7),
    sa(1, 'In Jesus’ answer to the Pharisees about divorce, whom does a man leave in order to be joined to his wife?', 'His father and mother.', 7),
    mc(3, 'Quoting the creation account to the Pharisees, Jesus said that "for this reason" a man shall do what?', ['Leave his father and mother and be joined to his wife', 'Write a certificate of divorce and dismiss her', 'Sell whatever he has and give to the poor', 'Receive the kingdom of God as a little child'], 7),

    blank(2, 'and the two shall become one _____’; so then they are no longer two, but one flesh.', 'flesh', 8),
    tf(1, 'Jesus told the Pharisees that a husband and wife become one flesh, so they are no longer two.', true, 8),
    word(1, 'Jesus told the Pharisees that when a man is joined to his wife, the two become one ___.', 'flesh', 8),

    blank(1, 'Therefore what God has joined together, let not _____ separate."', 'man', 9),
    mc(1, 'How did Jesus conclude His answer to the Pharisees about divorce?', ['"Therefore what God has joined together, let not man separate."', '"Whoever divorces his wife and marries another commits adultery against her."', '"Because of the hardness of your heart he wrote you this precept."', '"Moses permitted a man to write a certificate of divorce."'], 9),
    tf(2, 'Jesus told the Pharisees, "What Moses has joined together, let not man separate."', false, 9, 'Jesus said "what God has joined together, let not man separate."'),
    sa(2, 'What did Jesus tell the Pharisees should happen to what God has joined together?', 'Let not man separate it.', 9),

    mc(2, 'After Jesus answered the Pharisees about divorce, who asked Him again about the same matter, and where?', ['His disciples, in the house', 'The Pharisees, by the Jordan', 'Peter, on the road to Jerusalem', 'The scribes, outside Jericho'], 10),
    blank(3, 'In the _____ His disciples also asked Him again about the same matter.', 'house', 10),
    tf(2, 'The disciples asked Jesus again about divorce while they were still standing in front of the Pharisees.', false, 10, 'They asked Him again "in the house."'),
    word(2, 'Where were the disciples when they asked Jesus again about the matter of divorce?', 'house', 10, ['in the house', 'the house']),

    blank(2, 'So He said to them, "Whoever divorces his wife and marries another commits _____ against her.', 'adultery', 11),
    mc(2, 'In the house, what did Jesus tell His disciples about a man who divorces his wife and marries another?', ['He commits adultery against her', 'He has done what Moses permitted', 'He will be last, and the last first', 'He will by no means enter the kingdom of God'], 11),
    word(2, 'Jesus told His disciples that whoever divorces his wife and marries another commits what against her?', 'adultery', 11),

    tf(1, 'Jesus told His disciples that if a woman divorces her husband and marries another, she commits adultery.', true, 12),
    blank(3, 'And if a woman divorces her _____ and marries another, she commits adultery."', 'husband', 12),
    sa(3, 'In the house, Jesus applied His teaching on divorce to both husband and wife. What did He say about a woman who divorces her husband and marries another?', 'She commits adultery.', 12),

    // ══════════════════════════════════ v13–16 · Jesus blesses the little children
    mc(1, 'Why did people bring little children to Jesus?', ['That He might touch them', 'That He might teach them the commandments', 'That He might heal them of blindness', 'That they might sit on His right and His left'], 13),
    word(1, 'When little children were brought to Jesus, who rebuked those who brought them?', 'disciples', 13, ['the disciples', 'his disciples']),
    blank(2, 'Then they brought little children to Him, that He might touch them; but the _____ rebuked those who brought them.', 'disciples', 13),
    tf(1, 'When little children were brought to Jesus, the Pharisees rebuked those who brought them.', false, 13, 'It was the disciples who rebuked those who brought the children.'),

    mc(2, 'How did Jesus react when He saw the disciples rebuking those who brought the children?', ['He was greatly displeased', 'He was greatly astonished', 'He looked at them and loved them', 'He stood still and commanded them to be called'], 14),
    blank(1, 'Let the little children come to Me, and do not _____ them; for of such is the kingdom of God.', 'forbid', 14),
    sa(2, 'When Jesus saw the disciples turning the children away, what did He tell them to do, and what reason did He give?', 'Let the little children come to Me and do not forbid them, for of such is the kingdom of God.', 14),
    tf(2, 'Jesus said the little children should be allowed to come to Him because "of such is the kingdom of God."', true, 14),
    word(3, 'When Jesus saw the disciples rebuking those who brought the children, Mark says He was greatly ___.', 'displeased', 14),

    mc(2, 'According to Jesus, who "will by no means enter" the kingdom of God?', ['Whoever does not receive the kingdom of God as a little child', 'Whoever trusts in riches', 'Whoever divorces his wife and marries another', 'Whoever desires to be first among the disciples'], 15),
    blank(2, 'Assuredly, I say to you, whoever does not receive the kingdom of God as a little _____ will by no means enter it."', 'child', 15),
    tf(3, 'Jesus said that whoever does not receive the kingdom of God as a little child will find it hard to enter.', false, 15, 'He said such a person "will by no means enter it."'),

    mc(1, 'What did Jesus do with the little children after telling the disciples to let them come to Him?', ['Took them up in His arms, laid His hands on them, and blessed them', 'Sat them one on His right hand and one on His left', 'Sent them back to their fathers and mothers', 'Told them to sell whatever they had and give to the poor'], 16),
    blank(2, 'And He took them up in His arms, laid His hands on them, and _____ them.', 'blessed', 16),
    tf(1, 'Jesus took the little children up in His arms, laid His hands on them, and blessed them.', true, 16),
    sa(2, 'Describe the three things Jesus did with the little children once He had them brought to Him.', 'He took them up in His arms, laid His hands on them, and blessed them.', 16),

    // ══════════════════════════════════ v17–22 · The rich man and eternal life
    mc(1, 'As Jesus was going out on the road, a man came running and knelt before Him. What did he ask?', ['"Good Teacher, what shall I do that I may inherit eternal life?"', '"Teacher, we want You to do for us whatever we ask."', '"Rabboni, that I may receive my sight."', '"Is it lawful for a man to divorce his wife?"'], 17),
    blank(1, 'Now as He was going out on the road, one came running, knelt before Him, and asked Him, "Good Teacher, what shall I do that I may inherit _____ life?"', 'eternal', 17),
    word(2, 'The man who ran up and knelt before Jesus on the road addressed Him as "Good ___."', 'Teacher', 17, ['master']),
    tf(2, 'The man who asked about inheriting eternal life walked up slowly and stood before Jesus.', false, 17, 'He "came running, knelt before Him."'),
    sa(1, 'How did the man who asked Jesus about eternal life approach Him?', 'He came running and knelt before Him on the road.', 17),

    mc(2, 'When the man called Jesus "Good Teacher," how did Jesus respond?', ['"Why do you call Me good? No one is good but One, that is, God."', '"You do not know what you ask."', '"One thing you lack."', '"With men it is impossible, but not with God."'], 18),
    blank(2, 'So Jesus said to him, "Why do you call Me good? No one is good but One, that is, _____.', 'God', 18),
    tf(2, 'Jesus told the man who called Him "Good Teacher" that no one is good but One, that is, God.', true, 18),
    word(3, 'Jesus told the rich man that "No one is good but One" — whom did He name as that One?', 'God', 18),

    mc(3, 'Which of these is NOT among the commandments Jesus recited to the man who asked about eternal life?', ['Do not covet', 'Do not defraud', 'Do not bear false witness', 'Honor your father and your mother'], 19, 'Jesus listed: do not commit adultery, murder, steal, bear false witness, or defraud; honor your father and your mother.'),
    blank(3, 'You know the commandments: ‘Do not commit adultery,’ ‘Do not murder,’ ‘Do not steal,’ ‘Do not bear false witness,’ ‘Do not _____,’ ‘Honor your father and your mother.’', 'defraud', 19),
    sa(3, 'List the six commandments Jesus recited to the man who asked how to inherit eternal life.', 'Do not commit adultery, do not murder, do not steal, do not bear false witness, do not defraud, honor your father and your mother.', 19),
    tf(3, 'The first commandment Jesus recited to the rich man was "Do not murder."', false, 19, 'The list begins with "Do not commit adultery," then "Do not murder."'),
    word(3, 'Jesus recited six commandments to the rich man; how many of them begin "Do not"?', 'five', 19, ['5']),

    mc(2, 'How did the man reply after Jesus recited the commandments to him?', ['"Teacher, all these things I have kept from my youth."', '"Good Teacher, what shall I do that I may inherit eternal life?"', '"See, we have left all and followed You."', '"Who then can be saved?"'], 20),
    blank(2, 'And he answered and said to Him, "Teacher, all these things I have kept from my _____."', 'youth', 20),
    tf(1, 'The man told Jesus he had kept all the commandments from his youth.', true, 20),

    mc(1, 'When the rich man said he had kept the commandments from his youth, what did Jesus tell him he still lacked?', ['To sell whatever he had, give to the poor, and come follow Him', 'To be baptized with the baptism Jesus was baptized with', 'To receive the kingdom of God as a little child', 'To become the servant of all'], 21),
    blank(2, 'Then Jesus, looking at him, _____ him, and said to him, "One thing you lack: Go your way, sell whatever you have and give to the poor, and you will have treasure in heaven; and come, take up the cross, and follow Me."', 'loved', 21),
    blank(1, 'One thing you lack: Go your way, sell whatever you have and give to the _____, and you will have treasure in heaven; and come, take up the cross, and follow Me.', 'poor', 21),
    word(2, 'Jesus told the rich man that if he sold what he had and gave to the poor, he would have treasure where?', 'heaven', 21, ['in heaven']),
    tf(2, 'Mark says that when Jesus looked at the rich man, He loved him.', true, 21),
    sa(2, 'After telling the rich man to sell what he had and give to the poor, what did Jesus tell him to do next?', 'Come, take up the cross, and follow Me.', 21),
    tf(3, 'Jesus told the rich man, "Two things you lack."', false, 21, 'Jesus said, "One thing you lack."'),

    mc(1, 'How did the rich man respond when Jesus told him to sell what he had and follow Him?', ['He was sad and went away sorrowful, for he had great possessions', 'He sold all he had and followed Jesus on the road', 'He knelt again and said all these things he had kept from his youth', 'He asked, "Who then can be saved?"'], 22),
    blank(2, 'But he was sad at this word, and went away sorrowful, for he had great _____.', 'possessions', 22),
    word(1, 'The man who went away sorrowful from Jesus did so because he had great ___.', 'possessions', 22, ['wealth', 'riches']),
    sa(2, 'Why did the man who asked about eternal life go away sorrowful?', 'Because he had great possessions and Jesus had told him to sell whatever he had.', 22),

    // ══════════════════════════════════ v23–27 · Riches and the kingdom of God
    mc(2, 'After the rich man went away, what did Jesus say to His disciples as He looked around?', ['"How hard it is for those who have riches to enter the kingdom of God!"', '"With men it is impossible, but not with God."', '"Many who are first will be last, and the last first."', '"Whoever desires to become great among you shall be your servant."'], 23),
    blank(2, 'Then Jesus looked around and said to His disciples, "How hard it is for those who have _____ to enter the kingdom of God!"', 'riches', 23),
    tf(1, 'After the rich man left, Jesus told His disciples how hard it is for those who have riches to enter the kingdom of God.', true, 23),

    mc(2, 'How did the disciples react when Jesus said how hard it is for the rich to enter the kingdom of God?', ['They were astonished at His words', 'They began to be greatly displeased with Him', 'They were amazed and afraid', 'They were of good cheer'], 24),
    blank(3, 'But Jesus answered again and said to them, "_____, how hard it is for those who trust in riches to enter the kingdom of God!', 'Children', 24),
    word(3, 'When Jesus repeated His warning about riches to the astonished disciples, what did He call them?', 'Children', 24, ['child']),
    tf(2, 'The second time Jesus spoke of riches, He said how hard it is for those who "trust in" riches to enter the kingdom of God.', true, 24),

    mc(1, 'Jesus said it is easier for what to happen than for a rich man to enter the kingdom of God?', ['A camel to go through the eye of a needle', 'A man to leave his father and mother', 'The first to become last', 'A blind man to receive his sight'], 25),
    blank(1, 'It is easier for a _____ to go through the eye of a needle than for a rich man to enter the kingdom of God."', 'camel', 25),
    word(1, 'Jesus said a camel could more easily go through the eye of what than a rich man enter the kingdom of God?', 'needle', 25, ['a needle']),
    tf(1, 'Jesus said it is easier for a camel to go through the eye of a needle than for a rich man to enter the kingdom of God.', true, 25),

    mc(2, 'After the saying about the camel and the needle, what did the greatly astonished disciples say among themselves?', ['"Who then can be saved?"', '"See, we have left all and followed You."', '"What do you want Me to do for you?"', '"We are able."'], 26),
    blank(2, 'And they were greatly astonished, saying among themselves, "Who then can be _____?"', 'saved', 26),
    tf(2, 'After the camel saying, the disciples asked Jesus to His face, "Who then can be saved?"', false, 26, 'They said it "among themselves."'),

    mc(2, 'How did Jesus answer the disciples’ question, "Who then can be saved?"', ['"With men it is impossible, but not with God; for with God all things are possible."', '"Whoever does not receive the kingdom of God as a little child will by no means enter it."', '"Many who are first will be last, and the last first."', '"It is not Mine to give, but it is for those for whom it is prepared."'], 27),
    blank(1, 'But Jesus looked at them and said, "With men it is impossible, but not with God; for with God all things are _____."', 'possible', 27),
    sa(2, 'When the disciples asked "Who then can be saved?", what contrast did Jesus draw between men and God?', 'With men it is impossible, but not with God; for with God all things are possible.', 27),

    // ══════════════════════════════════ v28–31 · Peter: "we have left all"
    word(1, 'Which disciple told Jesus, "See, we have left all and followed You"?', 'Peter', 28),
    blank(2, 'Then Peter began to say to Him, "See, we have left _____ and followed You."', 'all', 28),
    tf(2, 'It was John who said to Jesus, "See, we have left all and followed You."', false, 28, 'Peter said it.'),
    mc(2, 'After Jesus said that with God all things are possible, what did Peter begin to say to Him?', ['"See, we have left all and followed You."', '"Teacher, all these things I have kept from my youth."', '"Grant us that we may sit on Your right hand and Your left."', '"Teacher, we want You to do for us whatever we ask."'], 28),

    mc(3, 'For whose sake did Jesus say a person might leave house, family, or lands and be repaid a hundredfold?', ['For My sake and the gospel’s', 'For the kingdom of God and the poor', 'For the sake of the twelve', 'For the sake of the little children'], 29),
    blank(3, 'Assuredly, I say to you, there is no one who has left house or brothers or sisters or father or mother or wife or children or lands, for My sake and the _____,', 'gospel’s', 29, ['gospels', 'gospel']),
    sa(3, 'In reply to Peter, Jesus listed what a person might leave "for My sake and the gospel’s." Name at least five items from that list.', 'House, brothers, sisters, father, mother, wife, children, lands.', 29),
    tf(3, 'Jesus’ list of things left for His sake and the gospel’s included both "wife" and "lands."', true, 29),

    mc(2, 'Jesus promised that those who left everything for His sake would receive how much "now in this time"?', ['A hundredfold', 'Treasure in heaven', 'Eternal life', 'A seat at His right hand in glory'], 30, 'Eternal life is promised "in the age to come."'),
    blank(2, 'who shall not receive a _____ now in this time—houses and brothers and sisters and mothers and children and lands, with persecutions—and in the age to come, eternal life.', 'hundredfold', 30, ['hundred fold', '100 fold', '100fold']),
    word(2, 'Along with houses, family, and lands, what did Jesus say His followers would receive "now in this time"?', 'persecutions', 30, ['persecution', 'with persecutions']),
    tf(3, 'Jesus promised that the hundredfold reward in this time would come without persecutions.', false, 30, 'He said it would come "with persecutions."'),
    sa(3, 'Jesus promised a hundredfold "now in this time." What did He promise "in the age to come"?', 'Eternal life.', 30),

    blank(1, 'But many who are first will be last, and the _____ first."', 'last', 31),
    mc(2, 'How did Jesus close His reply to Peter about leaving all?', ['"But many who are first will be last, and the last first."', '"Whoever of you desires to be first shall be slave of all."', '"Yet it shall not be so among you."', '"Go your way; your faith has made you well."'], 31),
    tf(1, 'Jesus told Peter and the disciples, "Many who are first will be last, and the last first."', true, 31),

    // ══════════════════════════════════ v32–34 · The third passion prediction
    mc(2, 'On the road going up to Jerusalem, how did those with Jesus feel as He went before them?', ['They were amazed, and as they followed they were afraid', 'They were greatly displeased with James and John', 'They were astonished and asked who could be saved', 'They were of good cheer and cried out for mercy'], 32),
    blank(2, 'Now they were on the road, going up to _____, and Jesus was going before them; and they were amazed.', 'Jerusalem', 32),
    word(2, 'On the road to Jerusalem, whom did Jesus take aside to tell them the things that would happen to Him?', 'twelve', 32, ['the twelve', '12', 'the 12']),
    tf(2, 'On the road up to Jerusalem, Jesus walked behind His disciples.', false, 32, '"Jesus was going before them."'),
    sa(2, 'Whom did Jesus take aside on the way to Jerusalem, and what did He begin to tell them?', 'He took the twelve aside and began to tell them the things that would happen to Him.', 32),

    mc(2, 'Jesus told the twelve that in Jerusalem the Son of Man would be betrayed to whom?', ['The chief priests and the scribes', 'The Pharisees and the Gentiles', 'The rulers over the Gentiles', 'The ten and the multitude'], 33),
    blank(3, 'Behold, we are going up to Jerusalem, and the Son of Man will be betrayed to the chief priests and to the _____; and they will condemn Him to death and deliver Him to the Gentiles;', 'scribes', 33),
    word(3, 'After the chief priests and scribes condemn the Son of Man to death, Jesus said they would deliver Him to whom?', 'Gentiles', 33, ['the gentiles']),
    tf(2, 'Jesus said the chief priests and scribes would condemn the Son of Man to death and deliver Him to the Gentiles.', true, 33),

    mc(3, 'In the third passion prediction, what four things did Jesus say would be done to Him after He was delivered to the Gentiles?', ['Mock Him, scourge Him, spit on Him, and kill Him', 'Betray Him, condemn Him, deliver Him, and kill Him', 'Bind Him, mock Him, crucify Him, and bury Him', 'Scourge Him, strike Him, crown Him, and kill Him'], 34),
    blank(3, 'and they will mock Him, and scourge Him, and spit on Him, and kill Him. And the _____ day He will rise again."', 'third', 34, ['3rd']),
    tf(2, 'Jesus told the twelve that after being killed He would rise again on the third day.', true, 34),
    sa(3, 'Jesus told the twelve what would happen after He was killed. What was it?', 'The third day He will rise again.', 34),
    word(2, 'Jesus said that after being mocked, scourged, spit on, and killed, He would rise again on which day?', 'third', 34, ['3rd', 'the third day', '3']),

    // ══════════════════════════════════ v35–45 · James and John's request; the Son of Man came to serve
    mc(1, 'Which two disciples came to Jesus saying, "Teacher, we want You to do for us whatever we ask"?', ['James and John, the sons of Zebedee', 'Peter and John', 'Peter and James', 'Peter and the ten'], 35),
    word(1, 'James and John, who asked to sit at Jesus’ right and left, were the sons of whom?', 'Zebedee', 35),
    blank(1, 'Then James and John, the sons of _____, came to Him, saying, "Teacher, we want You to do for us whatever we ask."', 'Zebedee', 35),
    tf(1, 'Peter and John came to Jesus saying, "Teacher, we want You to do for us whatever we ask."', false, 35, 'It was James and John, the sons of Zebedee.'),
    sa(2, 'What did James and John say when they first came to Jesus with their request?', 'Teacher, we want You to do for us whatever we ask.', 35),

    mc(2, 'How did Jesus answer James and John when they said they wanted Him to do whatever they asked?', ['"What do you want Me to do for you?"', '"You do not know what you ask."', '"Are you able to drink the cup that I drink?"', '"It is not Mine to give."'], 36),
    tf(2, 'When James and John said they wanted Him to do whatever they asked, Jesus replied, "What do you want Me to do for you?"', true, 36),
    sa(3, 'Jesus asked James and John the very question He would later ask blind Bartimaeus. What was it?', 'What do you want Me to do for you?', 36, 'The same words appear when Bartimaeus is brought to Him outside Jericho.'),

    mc(1, 'What did James and John ask Jesus to grant them?', ['To sit one on His right hand and the other on His left, in His glory', 'To drink the cup that He drinks', 'To be first among the twelve', 'To receive a hundredfold now in this time'], 37),
    blank(2, 'They said to Him, "Grant us that we may sit, one on Your right hand and the other on Your left, in Your _____."', 'glory', 37),
    word(2, 'James and John asked to sit at Jesus’ right and left "in Your ___."', 'glory', 37),
    tf(1, 'James and John asked Jesus to let them sit on His right hand and on His left in His glory.', true, 37),

    mc(2, 'When James and John asked for the seats at His right and left, what did Jesus first tell them?', ['"You do not know what you ask."', '"Yet it shall not be so among you."', '"Children, how hard it is."', '"Why do you call Me good?"'], 38),
    blank(2, 'Are you able to drink the _____ that I drink, and be baptized with the baptism that I am baptized with?', 'cup', 38),
    sa(2, 'What two things did Jesus ask James and John whether they were able to share with Him?', 'To drink the cup that He drinks and to be baptized with the baptism He is baptized with.', 38),
    tf(2, 'Jesus asked James and John whether they were able to drink the cup that He drinks.', true, 38),

    mc(2, 'How did James and John answer when Jesus asked if they could drink His cup and share His baptism?', ['"We are able."', '"We have left all and followed You."', '"Grant us that we may sit at Your right and left."', '"Rabboni, that I may receive my sight."'], 39),
    blank(3, 'They said to Him, "We are _____." So Jesus said to them, "You will indeed drink the cup that I drink, and with the baptism I am baptized with you will be baptized;', 'able', 39),
    tf(3, 'Jesus told James and John that they would indeed drink the cup that He drinks.', true, 39),
    word(3, 'When James and John said "We are able," Jesus said they would indeed drink His cup and be baptized with His ___.', 'baptism', 39),

    mc(2, 'What did Jesus say about the seats on His right hand and on His left?', ['They were not His to give, but for those for whom it is prepared', 'They belonged to James and John, the sons of Zebedee', 'They belonged to Peter and the first of the twelve', 'They would go to whoever drank His cup'], 40),
    blank(3, 'but to sit on My right hand and on My left is not Mine to give, but it is for those for whom it is _____."', 'prepared', 40),
    tf(2, 'Jesus told James and John that the seats on His right and left were His to give to whomever He chose.', false, 40, 'He said they were "not Mine to give, but it is for those for whom it is prepared."'),
    sa(3, 'For whom did Jesus say the places at His right and left are reserved?', 'For those for whom it is prepared.', 40),

    mc(2, 'How did the other ten disciples react when they heard what James and John had asked?', ['They began to be greatly displeased with James and John', 'They were greatly astonished at His words', 'They were amazed and afraid', 'They rebuked those who brought them'], 41),
    blank(2, 'And when the _____ heard it, they began to be greatly displeased with James and John.', 'ten', 41, ['10']),
    word(2, 'How many disciples were greatly displeased with James and John over their request?', 'ten', 41, ['10', 'the ten']),
    tf(1, 'The other ten disciples were greatly displeased with James and John when they heard their request.', true, 41),

    mc(3, 'When Jesus called the disciples to Himself after the ten grew displeased, what did He say the rulers of the Gentiles do?', ['Lord it over them, and their great ones exercise authority over them', 'Condemn to death and deliver to the Gentiles', 'Sit on the right hand and on the left in glory', 'Write certificates of divorce and dismiss'], 42),
    blank(3, 'You know that those who are considered rulers over the _____ lord it over them, and their great ones exercise authority over them.', 'Gentiles', 42),
    tf(2, 'Jesus said that those who are considered rulers over the Gentiles lord it over them.', true, 42),

    blank(1, 'Yet it shall not be so among you; but whoever desires to become great among you shall be your _____.', 'servant', 43),
    mc(1, 'Jesus told the disciples that whoever desires to become great among them must become what?', ['Their servant', 'Slave of all', 'First among the twelve', 'A ruler over the Gentiles'], 43, '"Servant" goes with becoming great; "slave of all" goes with desiring to be first (v44).'),
    word(1, 'Jesus said that whoever desires to become great among the disciples shall be their ___.', 'servant', 43),
    tf(2, 'Jesus said that, unlike the rulers of the Gentiles, "it shall not be so among you."', true, 43),

    blank(2, 'And whoever of you desires to be _____ shall be slave of all.', 'first', 44),
    word(2, 'Jesus said whoever of the disciples desires to be first shall be slave of whom?', 'all', 44, ['of all', 'everyone']),
    tf(2, 'Jesus said whoever desires to be first among the disciples shall be slave of the twelve.', false, 44, 'He said "slave of all."'),
    sa(2, 'Jesus gave two parallel sayings about greatness. What did He say about whoever desires to be first?', 'Whoever desires to be first shall be slave of all.', 44),

    mc(1, 'According to Jesus, why did the Son of Man come?', ['Not to be served, but to serve, and to give His life a ransom for many', 'To sit at the right hand in glory', 'To lord it over the Gentiles', 'To condemn the chief priests and scribes'], 45),
    blank(1, 'For even the Son of Man did not come to be served, but to serve, and to give His life a _____ for many."', 'ransom', 45),
    word(2, 'Jesus said the Son of Man came to give His life a ransom for how many?', 'many', 45, ['for many']),
    tf(1, 'Jesus said the Son of Man came to be served.', false, 45, 'He "did not come to be served, but to serve."'),
    sa(2, 'Jesus ended His teaching on greatness by pointing to His own mission. What did He say the Son of Man came to do?', 'Not to be served, but to serve, and to give His life a ransom for many.', 45),

    // ══════════════════════════════════ v46–52 · Blind Bartimaeus at Jericho
    mc(1, 'Where was blind Bartimaeus when Jesus passed by with His disciples and a great multitude?', ['Sitting by the road outside Jericho, begging', 'Sitting by the Jordan in the region of Judea', 'Standing on the road going up to Jerusalem', 'Waiting in the house where the disciples asked about divorce'], 46),
    word(1, 'Blind Bartimaeus was the son of whom?', 'Timaeus', 46),
    word(1, 'Near which city did Jesus meet blind Bartimaeus?', 'Jericho', 46),
    blank(1, 'As He went out of Jericho with His disciples and a great multitude, blind _____, the son of Timaeus, sat by the road begging.', 'Bartimaeus', 46, ['bartimeus']),
    blank(2, 'Now they came to Jericho. As He went out of Jericho with His disciples and a great multitude, blind Bartimaeus, the son of Timaeus, sat by the road _____.', 'begging', 46),
    tf(2, 'Jesus met blind Bartimaeus as He was entering Jericho.', false, 46, 'Bartimaeus sat by the road "as He went out of Jericho."'),
    sa(1, 'What was blind Bartimaeus doing when Jesus came out of Jericho?', 'He sat by the road begging.', 46),

    mc(1, 'What did blind Bartimaeus cry out from the roadside at Jericho when he heard it was Jesus of Nazareth?', ['"Jesus, Son of David, have mercy on me!"', '"Rabboni, that I may receive my sight!"', '"Good Teacher, what shall I do that I may inherit eternal life?"', '"Be of good cheer. Rise, He is calling you."'], 47),
    blank(1, 'And when he heard that it was Jesus of Nazareth, he began to cry out and say, "Jesus, Son of _____, have mercy on me!"', 'David', 47),
    word(2, 'Bartimaeus began to cry out when he heard it was Jesus of which town?', 'Nazareth', 47),
    tf(1, 'Bartimaeus called out to Jesus as "Son of David."', true, 47),
    word(1, 'Bartimaeus cried out, "Jesus, Son of David, have ___ on me!"', 'mercy', 47),

    mc(2, 'How did the crowd respond when Bartimaeus cried out, and what did he do?', ['Many warned him to be quiet, but he cried out all the more', 'They called him, saying, "Be of good cheer"', 'They rebuked him and he went away sorrowful', 'They were greatly displeased and he fell silent'], 48),
    blank(2, 'Then many warned him to be quiet; but he cried out all the _____, "Son of David, have mercy on me!"', 'more', 48),
    tf(2, 'When many warned Bartimaeus to be quiet, he stopped crying out.', false, 48, 'He "cried out all the more."'),
    sa(2, 'When many people warned Bartimaeus to be quiet, how did he respond?', 'He cried out all the more, "Son of David, have mercy on me!"', 48),

    mc(2, 'What did Jesus do when He heard blind Bartimaeus crying out?', ['He stood still and commanded him to be called', 'He went on toward Jerusalem', 'He warned him to be quiet', 'He went over and laid His hands on him'], 49),
    blank(2, 'Then they called the blind man, saying to him, "Be of good _____. Rise, He is calling you."', 'cheer', 49),
    sa(2, 'What did the people say to blind Bartimaeus when they called him to Jesus?', 'Be of good cheer. Rise, He is calling you.', 49),
    tf(2, 'Jesus stood still and commanded that blind Bartimaeus be called to Him.', true, 49),

    mc(2, 'What did Bartimaeus do when he was told Jesus was calling him?', ['He threw aside his garment, rose, and came to Jesus', 'He sold his garment and gave to the poor', 'He knelt by the road and waited', 'He followed the multitude on the road to Jerusalem'], 50),
    blank(2, 'And throwing aside his _____, he rose and came to Jesus.', 'garment', 50),
    word(1, 'What did Bartimaeus throw aside when he rose to come to Jesus?', 'garment', 50, ['his garment', 'cloak']),
    tf(1, 'Bartimaeus threw aside his garment before coming to Jesus.', true, 50),

    mc(2, 'When Jesus asked Bartimaeus, "What do you want Me to do for you?", what did he answer?', ['"Rabboni, that I may receive my sight."', '"Jesus, Son of David, have mercy on me!"', '"Grant that I may sit at Your right hand."', '"Teacher, all these things I have kept from my youth."'], 51),
    word(2, 'By what title did the blind man address Jesus when asking to receive his sight?', 'Rabboni', 51, ['rabbi']),
    blank(2, 'The blind man said to Him, "_____, that I may receive my sight."', 'Rabboni', 51),
    tf(2, 'Bartimaeus addressed Jesus as "Rabboni" when he asked to receive his sight.', true, 51),
    sa(1, 'What did Jesus ask blind Bartimaeus once he stood before Him, and what did Bartimaeus ask for?', 'Jesus asked, "What do you want Me to do for you?" and Bartimaeus asked to receive his sight.', 51),

    mc(1, 'What did Jesus say had made Bartimaeus well?', ['His faith', 'His crying out', 'His garment thrown aside', 'The multitude calling him'], 52),
    blank(1, 'Then Jesus said to him, "Go your way; your _____ has made you well."', 'faith', 52),
    word(1, 'Jesus told Bartimaeus, "Go your way; your ___ has made you well."', 'faith', 52),
    tf(2, 'After receiving his sight, Bartimaeus went his own way home.', false, 52, 'He "followed Jesus on the road."'),
    sa(2, 'What happened immediately after Jesus told Bartimaeus his faith had made him well?', 'He immediately received his sight and followed Jesus on the road.', 52),
    tf(1, 'Bartimaeus received his sight immediately after Jesus spoke to him.', true, 52),
  ],
};

export default bank;
