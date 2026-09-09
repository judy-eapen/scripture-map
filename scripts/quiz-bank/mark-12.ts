// Mark 12 — quiz bank (NKJV, Orthodox Study Bible text). Every row is anchored to a verse;
// fill-in-the-blank rows are verified against the stored verse text by scripts/seed-quiz-bank.ts.
import { mc, blank, word, tf, sa, type ChapterBank } from './types';

const bank: ChapterBank = {
  book: 'Mark',
  chapter: 12,
  tag: 'quiz-v2-mark-12',
  rows: [
    // ══════════════════════════════════ v1–9 · The parable of the vineyard
    mc(1, 'At the start of Mark 12 Jesus spoke to the leaders in parables. What did the man in the parable plant?', ['A vineyard', 'A fig tree', 'A mustard seed', 'A field of grain'], 1),
    sa(3, 'In the parable of the vineyard, what four things did the man do to the vineyard before leasing it out?', 'He planted it, set a hedge around it, dug a place for the wine vat, and built a tower.', 1),
    blank(3, 'A man planted a vineyard and set a hedge around it, dug a place for the wine vat and built a _____.', 'tower', 1),
    word(1, 'In the parable of the vineyard, to whom did the owner lease his vineyard before going into a far country?', 'vinedressers', 1, ['vinedresser', 'the vinedressers']),

    blank(1, 'Now at vintage-time he sent a _____ to the vinedressers, that he might receive some of the fruit of the vineyard from the vinedressers.', 'servant', 2),
    sa(2, 'In the parable of the vineyard, why did the owner send a servant to the vinedressers at vintage-time?', 'So that he might receive some of the fruit of the vineyard from the vinedressers.', 2),
    word(3, 'In the parable of the vineyard, at what season did the owner first send a servant to the vinedressers?', 'vintage-time', 2, ['vintage time', 'vintage', 'vintagetime']),

    mc(1, 'In the parable of the vineyard, what did the vinedressers do to the first servant the owner sent?', ['They beat him and sent him away empty-handed', 'They threw stones at him and wounded him in the head', 'They killed him and cast him out of the vineyard', 'They gave him some of the fruit and sent him back'], 3),
    blank(2, 'And they took him and beat him and sent him away _____.', 'empty-handed', 3, ['empty handed', 'emptyhanded']),

    mc(3, 'In the parable of the vineyard, how did the vinedressers treat the second servant?', ['They stoned him, wounded his head, and sent him away shamefully', 'They beat him and sent him away empty-handed', 'They killed him and cast him out of the vineyard', 'They seized him and shut him up in the tower'], 4),
    word(3, 'In the parable of the vineyard, where on his body was the second servant wounded?', 'head', 4, ['the head', 'his head', 'in the head']),
    blank(3, 'Again he sent them another servant, and at him they threw _____, wounded him in the head, and sent him away shamefully treated.', 'stones', 4),

    blank(2, 'And again he sent another, and him they _____; and many others, beating some and killing some.', 'killed', 5),
    sa(3, 'In the parable of the vineyard, after the third servant was killed, what does Jesus say happened to the many others the owner sent?', 'The vinedressers beat some of them and killed some of them.', 5),
    tf(3, 'In the parable of the vineyard, the owner sent only three servants before he sent his son.', false, 5, 'After the third servant was killed he sent "many others," some of whom were beaten and some killed.'),

    mc(1, 'In the parable of the vineyard, whom did the owner send to the vinedressers last of all?', ['His beloved son', 'One more servant, the last he had', 'His own brother', 'One of the vinedressers he trusted'], 6),
    blank(1, 'Therefore still having one son, his _____, he also sent him to them last, saying, "They will respect my son."', 'beloved', 6),
    sa(2, 'In the parable of the vineyard, what did the owner say when he decided to send his beloved son?', '"They will respect my son."', 6),

    mc(2, 'In the parable of the vineyard, what did the vinedressers say among themselves when the son came?', ['"This is the heir. Come, let us kill him, and the inheritance will be ours."', '"This is the owner. Come, let us honor him and give him the fruit."', '"This is a servant. Come, let us beat him and send him away."', '"This is a stranger. Come, let us cast him out of the vineyard."'], 7),
    blank(2, 'But those vinedressers said among themselves, "This is the _____. Come, let us kill him, and the inheritance will be ours."', 'heir', 7),
    sa(2, 'In the parable of the vineyard, why did the vinedressers decide to kill the owner’s son?', 'They believed that if they killed the heir, the inheritance would be theirs.', 7),

    mc(3, 'In the parable of the vineyard, what did the vinedressers do with the owner’s son after they killed him?', ['They cast him out of the vineyard', 'They buried him beneath the tower', 'They threw him into the wine vat', 'They sent his body back to his father'], 8),
    blank(1, 'So they took him and killed him and cast him out of the _____.', 'vineyard', 8),
    tf(1, 'In the parable of the vineyard, the vinedressers killed the son and cast him out of the vineyard.', true, 8),

    mc(1, 'In the parable of the vineyard, what did Jesus say the owner would do to the vinedressers?', ['Come and destroy them, and give the vineyard to others', 'Come and forgive them, and lease the vineyard to them again', 'Send more servants to demand the fruit from them', 'Leave them in the vineyard and stay in the far country'], 9),
    blank(2, 'He will come and destroy the vinedressers, and give the vineyard to _____.', 'others', 9),
    tf(2, 'In the parable of the vineyard, Jesus said the owner would give the vineyard to the vinedressers’ children.', false, 9, 'He said the owner would destroy the vinedressers and give the vineyard to others.'),

    // ══════════════════════════════════ v10–12 · The rejected stone; the leaders’ reaction
    mc(1, 'After the parable of the vineyard, Jesus quoted a Scripture about a stone. What had become of the stone which the builders rejected?', ['It had become the chief cornerstone', 'It had been cast out of the vineyard', 'It had been thrown at the owner’s servant', 'It had been broken in pieces'], 10),
    blank(1, 'Have you not even read this Scripture: "The stone which the builders rejected Has become the chief _____.', 'cornerstone', 10, ['corner stone']),
    sa(3, 'After the parable of the vineyard, Jesus asked the leaders, "Have you not even read this Scripture?" What Scripture did He then quote?', '"The stone which the builders rejected has become the chief cornerstone. This was the Lord’s doing, and it is marvelous in our eyes."', 10),
    mc(3, 'How did Jesus introduce the Scripture about the rejected stone to the leaders?', ['"Have you not even read this Scripture"', '"Have you not read in the book of Moses"', '"For David himself said by the Holy Spirit"', '"Hear, O Israel"'], 10),

    blank(3, 'This was the _____ doing, And it is marvelous in our eyes"?', 'Lord’s', 11, ['lords', 'the lords']),
    mc(2, 'In the Scripture Jesus quoted about the rejected stone, whose doing was it that the stone became the chief cornerstone?', ['The Lord’s', 'The builders’', 'David’s', 'Caesar’s'], 11),
    tf(3, 'In the Scripture Jesus quoted about the stone, it is the builders’ work that is called "marvelous in our eyes."', false, 11, 'It was "the Lord’s doing" that was marvelous in our eyes.'),

    mc(1, 'After Jesus told the parable of the vineyard, why did the leaders not lay hands on Him?', ['They feared the multitude', 'They feared Pilate', 'They feared the Herodians', 'They feared His disciples'], 12),
    blank(2, 'And they sought to lay hands on Him, but feared the _____, for they knew He had spoken the parable against them.', 'multitude', 12, ['the multitude']),
    tf(1, 'The leaders realized that Jesus had spoken the parable of the vineyard against them.', true, 12),
    sa(3, 'What did the leaders do after deciding not to seize Jesus for the parable of the vineyard?', 'They left Him and went away.', 12),

    // ══════════════════════════════════ v13–17 · Taxes to Caesar
    mc(1, 'Whom did the leaders send to Jesus to catch Him in His words?', ['Some of the Pharisees and the Herodians', 'Some of the Sadducees and the scribes', 'Some of the chief priests and the elders', 'Some of the disciples of John'], 13),
    word(2, 'Along with the Pharisees, which group was sent to catch Jesus in His words?', 'Herodians', 13, ['the herodians']),
    tf(1, 'The Sadducees and the Herodians were sent to catch Jesus in His words.', false, 13, 'It was the Pharisees and the Herodians; the Sadducees came later with the question about the resurrection.'),

    mc(3, 'When the Pharisees and Herodians came to Jesus, how did they flatter Him before their question?', ['"Teacher, we know that You are true, and care about no one"', '"Teacher, we know that You have come from God"', '"Teacher, we know that You do all things well"', '"Teacher, we know that You are the Son of David"'], 14),
    mc(1, 'What question did the Pharisees and Herodians put to Jesus?', ['"Is it lawful to pay taxes to Caesar, or not?"', '"Is it lawful to heal on the Sabbath?"', '"Is it lawful for a man to divorce his wife?"', '"By what authority are You doing these things?"'], 14),
    blank(1, 'Is it lawful to pay taxes to _____, or not?', 'Caesar', 14),
    sa(3, 'In their flattery, the Pharisees and Herodians said Jesus did not regard something and did teach something. What were the two?', 'He did not regard the person of men, but taught the way of God in truth.', 14),

    mc(2, 'When the Pharisees and Herodians pressed, "Shall we pay, or shall we not pay?", what did Jesus ask them to bring Him?', ['A denarius', 'Two mites', 'A quadrans', 'A book of Moses'], 15),
    blank(1, 'But He, knowing their hypocrisy, said to them, "Why do you test Me? Bring Me a _____ that I may see it."', 'denarius', 15),
    word(2, 'What did Mark say Jesus knew about the Pharisees and Herodians when they asked about taxes?', 'hypocrisy', 15, ['their hypocrisy']),
    tf(3, 'The Pharisees and Herodians pressed Jesus with the words, "Shall we pay, or shall we not pay?"', true, 15),

    word(1, 'When Jesus asked whose image and inscription were on the denarius, what did the Pharisees and Herodians answer?', 'Caesar’s', 16, ['caesars', 'caesar']),
    blank(2, 'So they brought it. And He said to them, "Whose _____ and inscription is this?" They said to Him, "Caesar’s."', 'image', 16),

    mc(1, 'How did Jesus answer the question about paying taxes to Caesar?', ['"Render to Caesar the things that are Caesar’s, and to God the things that are God’s."', '"Give to Caesar all that he asks, for his authority is from God."', '"Pay nothing to Caesar, for the earth is the Lord’s."', '"Render to God the things that are Caesar’s, and Caesar will have nothing."'], 17),
    word(2, 'How did the Pharisees and Herodians react when Jesus said, "Render to Caesar the things that are Caesar’s"?', 'marveled', 17, ['they marveled', 'marvelled', 'they marvelled']),
    tf(1, 'After Jesus answered the question about taxes, the Pharisees and Herodians marveled at Him.', true, 17),

    // ══════════════════════════════════ v18–27 · The Sadducees and the resurrection
    mc(1, 'Which group came to Jesus with the question about the woman married to seven brothers?', ['Some Sadducees', 'Some Pharisees', 'Some Herodians', 'Some scribes'], 18),
    word(1, 'Which group, who say there is no resurrection, came to question Jesus?', 'Sadducees', 18, ['the sadducees']),
    tf(1, 'The Sadducees who questioned Jesus about the seven brothers believed in the resurrection.', false, 18, 'Mark notes the Sadducees "say there is no resurrection."'),

    mc(2, 'According to the Sadducees, what did Moses write should happen if a man’s brother dies leaving a wife but no children?', ['His brother should marry the widow and raise up offspring', 'The widow should return to her father’s house', 'The inheritance should be given to the poor', 'The brother should give her a divorce certificate'], 19),
    blank(3, 'Teacher, Moses wrote to us that if a man’s brother dies, and leaves his wife behind, and leaves no _____, his brother should take his wife and raise up offspring for his brother.', 'children', 19),
    sa(3, 'In the Sadducees’ question, under what three conditions did Moses’ rule about a brother taking his brother’s wife apply?', 'If a man’s brother dies, leaves his wife behind, and leaves no children.', 19),

    blank(1, 'Now there were _____ brothers. The first took a wife; and dying, he left no offspring.', 'seven', 20, ['7']),
    tf(1, 'In the Sadducees’ story, the first brother took a wife and died leaving no offspring.', true, 20),

    blank(3, 'And the second took her, and he died; nor did he leave any offspring. And the _____ likewise.', 'third', 21),
    tf(2, 'In the Sadducees’ story, the second brother left a child before he died.', false, 21, 'The second took her and died, "nor did he leave any offspring."'),

    mc(2, 'In the Sadducees’ story, what happened after all seven brothers had the woman?', ['Last of all the woman died also', 'The woman bore a son to the seventh brother', 'The woman was given to an eighth man', 'The woman returned to her father’s house'], 22),
    blank(3, 'So the seven had her and left no offspring. Last of all the _____ died also.', 'woman', 22),
    word(3, 'In the Sadducees’ story, how many offspring did the seven brothers leave altogether?', 'none', 22, ['no offspring', 'zero', '0', 'no']),

    mc(1, 'What question did the Sadducees finally ask Jesus about the woman married to seven brothers?', ['"In the resurrection, when they rise, whose wife will she be?"', '"In the resurrection, will she rise with the seven?"', '"Which of the seven brothers sinned the most?"', '"Was it lawful for the seven to marry her?"'], 23),
    blank(2, 'Therefore, in the resurrection, when they rise, whose _____ will she be? For all seven had her as wife.', 'wife', 23),
    tf(2, 'The Sadducees asked Jesus which of the seven brothers would rise first in the resurrection.', false, 23, 'They asked whose wife the woman would be in the resurrection.'),

    mc(1, 'What did Jesus say the Sadducees did not know, which caused their mistake?', ['The Scriptures and the power of God', 'The law of Moses and the prophets', 'The tradition of the elders', 'The commandments of God'], 24),
    blank(1, 'Jesus answered and said to them, "Are you not therefore mistaken, because you do not know the _____ nor the power of God?', 'Scriptures', 24, ['scripture']),
    sa(2, 'How did Jesus begin His answer to the Sadducees’ question about the seven brothers?', '"Are you not therefore mistaken, because you do not know the Scriptures nor the power of God?"', 24),
    tf(1, 'Jesus told the Sadducees they were mistaken because they did not know the Scriptures nor the power of God.', true, 24),

    mc(1, 'What did Jesus tell the Sadducees about marriage for those who rise from the dead?', ['They do not marry but are like the angels in heaven', 'They return to the spouse they had first', 'They marry again within their own family', 'They are given in marriage by God Himself'], 25),
    blank(1, 'For when they rise from the dead, they neither marry nor are given in marriage, but are like _____ in heaven.', 'angels', 25, ['angel']),
    tf(2, 'Jesus said that in the resurrection people marry and are given in marriage just as on earth.', false, 25, 'He said they "neither marry nor are given in marriage, but are like angels in heaven."'),

    mc(2, 'To show the Sadducees that the dead rise, Jesus pointed to which passage in the book of Moses?', ['The burning bush passage', 'The creation passage', 'The commandment to honor father and mother', 'The law about a certificate of divorce'], 26),
    blank(3, 'But concerning the dead, that they rise, have you not read in the book of Moses, in the burning _____ passage, how God spoke to him, saying, "I am the God of Abraham, the God of Isaac, and the God of Jacob"?', 'bush', 26),
    blank(2, 'I am the God of Abraham, the God of _____, and the God of Jacob', 'Isaac', 26),
    mc(1, 'What did God say to Moses in the burning bush passage, as Jesus quoted it to the Sadducees?', ['"I am the God of Abraham, the God of Isaac, and the God of Jacob"', '"Hear, O Israel, the Lord our God, the Lord is one"', '"Sit at My right hand, till I make Your enemies Your footstool"', '"You shall love your neighbor as yourself"'], 26),
    sa(3, 'What book and what passage did Jesus tell the Sadducees to read concerning the dead rising?', 'The book of Moses, in the burning bush passage.', 26),

    mc(2, 'How did Jesus conclude His answer to the Sadducees about the God of Abraham, Isaac and Jacob?', ['"He is not the God of the dead, but the God of the living. You are therefore greatly mistaken."', '"He is the God of the dead and of the living. You are therefore without excuse."', '"He is the God of the fathers only. You are therefore not far from the kingdom."', '"He is the God of the living, and the dead know Him not. You have answered well."'], 27),
    blank(1, 'He is not the God of the dead, but the God of the _____. You are therefore greatly mistaken."', 'living', 27),
    word(2, 'Jesus told the Sadducees God is not the God of the dead but the God of whom?', 'living', 27, ['the living']),
    tf(3, 'Jesus ended His answer to the Sadducees by telling them they were not far from the kingdom of God.', false, 27, 'He told the Sadducees, "You are therefore greatly mistaken"; it was the scribe He told was not far from the kingdom of God.'),

    // ══════════════════════════════════ v28–34 · The greatest commandment
    mc(1, 'Who asked Jesus, "Which is the first commandment of all?"', ['One of the scribes', 'One of the Sadducees', 'One of the Pharisees', 'One of His disciples'], 28),
    blank(2, 'Then one of the scribes came, and having heard them reasoning together, perceiving that He had answered them well, asked Him, "Which is the first _____ of all?"', 'commandment', 28),
    sa(3, 'What prompted the scribe to come and ask Jesus about the first commandment?', 'He had heard them reasoning together and perceived that Jesus had answered them well.', 28),
    tf(3, 'The scribe asked Jesus about the first commandment in order to catch Him in His words.', false, 28, 'The scribe came because he perceived Jesus had answered the Sadducees well; it was the Pharisees and Herodians who tried to catch Him in His words.'),

    mc(1, 'How did Jesus begin His answer about the first of all the commandments?', ['"Hear, O Israel, the Lord our God, the Lord is one."', '"I am the God of Abraham, the God of Isaac, and the God of Jacob."', '"You shall love your neighbor as yourself."', '"Render to God the things that are God’s."'], 29),
    blank(2, 'Jesus answered him, "The first of all the commandments is: ‘Hear, O _____, the Lord our God, the Lord is one.', 'Israel', 29),
    sa(1, 'When the scribe asked which commandment is the first of all, how did Jesus answer?', '"Hear, O Israel, the Lord our God, the Lord is one. And you shall love the Lord your God with all your heart, with all your soul, with all your mind, and with all your strength."', 29),

    mc(1, 'According to the first commandment as Jesus gave it, with what are we to love the Lord our God?', ['All your heart, all your soul, all your mind, and all your strength', 'All your heart, all your soul, and all your possessions', 'All your understanding, all your might, and all your goods', 'All your heart, all your body, and all your riches'], 30),
    blank(2, 'And you shall love the Lord your God with all your heart, with all your soul, with all your _____, and with all your strength.', 'mind', 30),
    tf(2, 'Jesus said the command to love the Lord your God with all your heart, soul, mind and strength is the second commandment.', false, 30, 'He said, "This is the first commandment."'),

    mc(1, 'What did Jesus say is the second commandment, like the first?', ['"You shall love your neighbor as yourself."', '"You shall not bear false witness."', '"Honor your father and your mother."', '"You shall not defraud."'], 31),
    blank(1, 'And the second, like it, is this: "You shall love your _____ as yourself." There is no other commandment greater than these."', 'neighbor', 31, ['neighbour']),
    word(1, 'Jesus said the second commandment is to love whom as yourself?', 'neighbor', 31, ['neighbour', 'your neighbor', 'your neighbour']),
    sa(2, 'After giving the two commandments to the scribe, what did Jesus say about all other commandments?', 'There is no other commandment greater than these.', 31),

    mc(3, 'How did the scribe respond after Jesus named the two greatest commandments?', ['Jesus had spoken truly: there is one God and no other', 'Jesus was true and taught God’s way in truth', 'He asked how he might inherit eternal life', 'He said Moses had written that there is one God'], 32),
    blank(2, 'So the scribe said to Him, "Well said, Teacher. You have spoken the truth, for there is one _____, and there is no other but He.', 'God', 32),
    sa(3, 'What reason did the scribe give when he told Jesus, "You have spoken the truth"?', 'For there is one God, and there is no other but He.', 32),
    tf(2, 'The scribe told Jesus, "Well said, Teacher. You have spoken the truth."', true, 32),

    mc(2, 'The scribe said loving God and loving one’s neighbor is more than what?', ['All the whole burnt offerings and sacrifices', 'All the gold in the temple treasury', 'All the traditions of the elders', 'All the long prayers of the scribes'], 33),
    blank(3, 'And to love Him with all the heart, with all the _____, with all the soul, and with all the strength, and to love one’s neighbor as oneself, is more than all the whole burnt offerings and sacrifices.', 'understanding', 33),
    tf(2, 'The scribe said that loving God and one’s neighbor is more than all the whole burnt offerings and sacrifices.', true, 33),
    sa(3, 'The scribe listed four things to love God with. What were they, in his words?', 'All the heart, all the understanding, all the soul, and all the strength.', 33, 'Where Jesus had said "mind" (v30), the scribe said "understanding."'),

    mc(1, 'When Jesus saw that the scribe answered wisely, what did He tell him?', ['"You are not far from the kingdom of God."', '"Your faith has made you well."', '"Go your way; your sins are forgiven."', '"You are therefore greatly mistaken."'], 34),
    blank(1, 'Now when Jesus saw that he answered wisely, He said to him, "You are not far from the _____ of God."', 'kingdom', 34),
    sa(1, 'When the scribe agreed that loving God and neighbour is more than sacrifices, what did Jesus tell him?', '"You are not far from the kingdom of God."', 34),
    word(2, 'Jesus told the scribe he was not far from the kingdom of God after seeing that he had answered how?', 'wisely', 34),
    mc(3, 'What happened after Jesus told the scribe he was not far from the kingdom of God?', ['No one dared question Him after that', 'The scribe followed Him on the road', 'The Sadducees returned with another question', 'The common people heard Him gladly'], 34),

    // ══════════════════════════════════ v35–37 · David’s Lord
    mc(1, 'Where was Jesus teaching when He asked how the scribes could say the Christ is the Son of David?', ['In the temple', 'In the synagogue', 'By the sea', 'On the Mount of Olives'], 35),
    blank(2, 'Then Jesus answered and said, while He taught in the temple, "How is it that the scribes say that the Christ is the Son of _____?', 'David', 35),
    sa(3, 'What question did Jesus raise about the scribes’ teaching while He taught in the temple?', '"How is it that the scribes say that the Christ is the Son of David?"', 35),

    mc(2, 'Jesus said David spoke by the Holy Spirit. Which saying of David did He quote?', ['The Lord told my Lord to sit at His right hand', 'The rejected stone has become the chief cornerstone', 'The Lord our God, the Lord is one', 'I am the God of Abraham, Isaac, and Jacob'], 36),
    blank(3, 'For David himself said by the Holy Spirit: ‘The Lord said to my Lord, "Sit at My right hand, Till I make Your enemies Your _____."’', 'footstool', 36),
    word(2, 'By whom did Jesus say David spoke when he said, "The Lord said to my Lord"?', 'Spirit', 36, ['the spirit', 'holy spirit', 'the holy spirit']),
    word(3, 'In the psalm Jesus quoted, what would the enemies of David’s Lord be made?', 'footstool', 36, ['a footstool', 'your footstool', 'his footstool']),
    tf(2, 'Jesus said David spoke the words "The Lord said to my Lord" by the Holy Spirit.', true, 36),
    sa(3, 'In the psalm Jesus quoted in the temple, what did the Lord say to David’s Lord?', '"Sit at My right hand, till I make Your enemies Your footstool."', 36),

    mc(3, 'What point did Jesus draw from David calling the Christ "Lord"?', ['If David himself calls Him Lord, how is He then his Son?', 'If David calls Him Lord, then David was not truly king', 'If David calls Him Lord, the scribes must be His servants', 'If David calls Him Lord, then the Christ must sit on David’s throne'], 37),
    blank(2, 'Therefore David himself calls Him ‘Lord’; how is He then his _____?" And the common people heard Him gladly.', 'Son', 37),
    tf(2, 'After Jesus asked how the Christ could be David’s Son, the common people heard Him gladly.', true, 37),
    sa(3, 'Jesus asked, "David himself calls Him ‘Lord’; how is He then his Son?" Who responded, and how?', 'The common people heard Him gladly.', 37),

    // ══════════════════════════════════ v38–40 · Beware of the scribes
    mc(1, 'Whom did Jesus tell the people to beware of in His teaching?', ['The scribes', 'The Pharisees', 'The Sadducees', 'The Herodians'], 38),
    blank(1, 'Then He said to them in His teaching, "Beware of the _____, who desire to go around in long robes, love greetings in the marketplaces,', 'scribes', 38),
    word(2, 'Jesus said the scribes desire to go around in what kind of robes?', 'long', 38, ['long robes']),
    sa(3, 'Jesus warned, "Beware of the scribes." What did He say they desire and what did He say they love?', 'They desire to go around in long robes and love greetings in the marketplaces.', 38),
    tf(2, 'Jesus warned the people to beware of the Sadducees who go around in long robes.', false, 38, 'The warning was about the scribes.'),

    mc(3, 'According to Jesus, what did the scribes want in the synagogues and at feasts?', ['The best seats in the synagogues and the best places at feasts', 'The first word in the synagogues and the first cup at feasts', 'The chief offerings in the synagogues and the chief portions at feasts', 'The reading of the law in the synagogues and the blessing at feasts'], 39),
    blank(2, 'the best seats in the _____, and the best places at feasts,', 'synagogues', 39, ['synagogue']),
    tf(1, 'Jesus said the scribes wanted the best seats in the synagogues.', true, 39),
    sa(3, 'Jesus named four things the scribes desired or loved when He warned about them. Name all four.', 'Long robes, greetings in the marketplaces, the best seats in the synagogues, and the best places at feasts.', 39),

    mc(1, 'Whose houses did Jesus say the scribes devour?', ['Widows’ houses', 'The poor’s houses', 'Their neighbors’ houses', 'Their brothers’ houses'], 40),
    blank(1, 'who devour _____ houses, and for a pretense make long prayers. These will receive greater condemnation."', 'widows’', 40, ['widows']),
    blank(3, 'who devour widows’ houses, and for a _____ make long prayers. These will receive greater condemnation."', 'pretense', 40, ['pretence']),
    word(2, 'Jesus said the scribes make long prayers for a what?', 'pretense', 40, ['pretence', 'a pretense']),
    sa(2, 'What did Jesus say would happen to the scribes who devour widows’ houses and make long prayers for a pretense?', 'They will receive greater condemnation.', 40),
    tf(3, 'Jesus said the scribes made short prayers for a pretense.', false, 40, 'He said they "for a pretense make long prayers."'),

    // ══════════════════════════════════ v41–44 · The widow’s two mites
    mc(1, 'Where did Jesus sit when He watched the people put in their money?', ['Opposite the treasury', 'On the Mount of Olives', 'In the best seat in the synagogue', 'At the door of the temple'], 41),
    blank(1, 'Now Jesus sat opposite the _____ and saw how the people put money into the treasury.', 'treasury', 41),
    sa(2, 'As Jesus sat opposite the treasury, what did He see the rich doing?', 'Many who were rich put in much.', 41),
    tf(2, 'As Jesus sat opposite the treasury, He saw many rich people put in much.', true, 41),

    mc(1, 'What did the poor widow throw into the treasury?', ['Two mites, which make a quadrans', 'Two denarii, out of her abundance', 'One mite, half of a quadrans', 'A single denarius bearing Caesar’s image'], 42),
    blank(1, 'Then one poor widow came and threw in two _____, which make a quadrans.', 'mites', 42, ['mite']),
    word(1, 'How many mites did the poor widow throw into the treasury?', 'two', 42, ['2']),
    word(3, 'The widow’s two mites together made what coin?', 'quadrans', 42, ['a quadrans']),
    tf(1, 'The poor widow threw two mites into the treasury.', true, 42),

    mc(1, 'What did Jesus tell His disciples about the poor widow’s gift?', ['She had put in more than all those who had given to the treasury', 'She had put in the least of all who gave to the treasury', 'She had put in exactly as much as the rich, in God’s eyes', 'She should have kept her mites for her own livelihood'], 43),
    blank(2, 'So He called His disciples to Himself and said to them, "Assuredly, I say to you that this poor _____ has put in more than all those who have given to the treasury;', 'widow', 43),
    tf(2, 'Jesus called the scribes to Himself to tell them about the poor widow’s gift.', false, 43, 'He called His disciples to Himself.'),
    mc(3, 'How did Jesus begin His words to the disciples about the poor widow?', ['"Assuredly, I say to you"', '"Have you not even read"', '"Beware of the scribes"', '"Are you not therefore mistaken"'], 43),

    mc(2, 'Why did Jesus say the poor widow had given more than the rich?', ['They gave from abundance; she gave all she had from poverty', 'Her two mites were worth more than their gold', 'She gave in secret while they gave for a pretense', 'She gave with all her heart, soul, mind and strength'], 44),
    blank(1, 'for they all put in out of their abundance, but she out of her _____ put in all that she had, her whole livelihood."', 'poverty', 44),
    blank(3, 'for they all put in out of their abundance, but she out of her poverty put in all that she had, her whole _____."', 'livelihood', 44),
    sa(3, 'In Jesus’ words, what did the rich give out of, and what did the widow give out of?', 'The rich gave out of their abundance; the widow gave out of her poverty, putting in all that she had, her whole livelihood.', 44),
    tf(1, 'Jesus said the widow put in all that she had, her whole livelihood.', true, 44),
    tf(3, 'Jesus said the rich put in out of their poverty.', false, 44, 'The rich gave "out of their abundance"; it was the widow who gave out of her poverty.'),
  ],
};

export default bank;
