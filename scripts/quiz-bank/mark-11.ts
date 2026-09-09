// Mark 11 — quiz bank (NKJV, Orthodox Study Bible text). Every row is anchored to a verse;
// fill-in-the-blank rows are verified against the stored verse text by scripts/seed-quiz-bank.ts.
import { mc, blank, word, tf, sa, type ChapterBank } from './types';

const bank: ChapterBank = {
  book: 'Mark',
  chapter: 11,
  tag: 'quiz-v2-mark-11',
  rows: [
    // ══════════════════════════════════ v1–6 · The colt at Bethphage and Bethany
    mc(1, 'When Jesus and His disciples drew near Jerusalem, at which mount were they when He sent two disciples ahead for the colt?', ['The Mount of Olives', 'The Sea of Galilee', 'The region of the Decapolis', 'The wilderness of Judea'], 1),
    blank(2, 'Now when they drew near Jerusalem, to Bethphage and Bethany, at the Mount of Olives, He sent _____ of His disciples;', 'two', 1, ['2']),
    word(1, 'As they drew near Jerusalem at the Mount of Olives, how many of His disciples did Jesus send ahead for the colt?', 'two', 1, ['2']),
    sa(3, 'Which two villages does Mark name as Jesus and His disciples drew near Jerusalem at the Mount of Olives?', 'Bethphage and Bethany.', 1, ['bethphage and bethany', 'bethany and bethphage']),

    mc(1, 'What did Jesus tell the two disciples they would find as soon as they entered the village opposite them?', ['A colt tied, on which no one had sat', 'A man carrying a pitcher of water', 'A large upper room furnished and prepared', 'A fig tree with leaves but no fruit'], 2),
    blank(1, 'Go into the village opposite you; and as soon as you have entered it you will find a _____ tied, on which no one has sat. Loose it and bring it.', 'colt', 2),
    tf(1, 'Jesus said the colt the two disciples would find was one on which no one had ever sat.', true, 2),
    sa(2, 'What two things did Jesus tell the two disciples to do with the colt once they found it tied in the village?', 'Loose it and bring it to Him.', 2, ['loose it and bring it', 'untie it and bring it']),

    mc(1, 'When Jesus sent two disciples to Bethphage and Bethany for the colt, what were they to say if anyone asked why they were taking it?', ['"The Lord has need of it"', '"The Teacher says, Where is the guest room?"', '"The Son of Man must go up to Jerusalem"', '"My house shall be called a house of prayer"'], 3),
    blank(3, 'And if anyone says to you, "Why are you doing this?" say, "The Lord has need of it," and immediately he will send it _____.', 'here', 3),
    word(2, 'Jesus said that once the disciples answered "The Lord has need of it," the man would send the colt how soon?', 'immediately', 3, ['at once', 'right away']),
    tf(2, 'Jesus told the two disciples to say "The Teacher has need of it" if anyone questioned them about the colt.', false, 3, 'They were to say, "The Lord has need of it."'),
    sa(3, 'According to Jesus, what would happen as soon as the disciples said "The Lord has need of it"?', 'Immediately the man would send the colt there to Jesus.', 3),

    mc(2, 'Where did the two disciples find the colt when they went into the village?', ['Tied by the door outside on the street', 'Tied to a fig tree beside the road', 'Standing in a stable behind a house', 'Grazing on the slope of the Mount of Olives'], 4),
    blank(3, 'So they went their way, and found the colt tied by the _____ outside on the street, and they loosed it.', 'door', 4),
    tf(1, 'The two disciples found the colt just as Jesus had said, tied by a door outside on the street.', true, 4),

    mc(3, 'Who questioned the two disciples as they were loosing the colt?', ['Some of those who stood there', 'The owner of the colt', 'The chief priests and the scribes', 'The crowd going up to Jerusalem'], 5),
    blank(3, 'But some of those who stood there said to them, "What are you doing, _____ the colt?"', 'loosing', 5),
    tf(2, 'The owner of the colt came out and asked the disciples, "What are you doing, loosing the colt?"', false, 5, 'Mark says it was "some of those who stood there" who asked.'),

    mc(2, 'Why did the bystanders let the two disciples take the colt?', ['The disciples answered just as Jesus had commanded them', 'The disciples paid the bystanders for the colt', 'Jesus Himself came and spoke to the bystanders', 'The bystanders recognized the disciples as followers of Jesus'], 6),
    blank(1, 'And they spoke to them just as _____ had commanded. So they let them go.', 'Jesus', 6),
    tf(1, 'After the disciples answered the bystanders as Jesus had told them, the bystanders let them go with the colt.', true, 6),

    // ══════════════════════════════════ v7–11 · The entry into Jerusalem
    mc(1, 'What did the disciples put on the colt before Jesus sat on it?', ['Their clothes', 'Leafy branches cut from the trees', 'A purple robe', 'A linen cloth'], 7),
    blank(2, 'Then they brought the colt to Jesus and threw their _____ on it, and He sat on it.', 'clothes', 7),
    word(1, 'When the disciples brought the colt to Jesus, what did they throw on it for Him to sit on?', 'clothes', 7, ['their clothes', 'garments', 'cloaks']),

    mc(2, 'As Jesus rode the colt toward Jerusalem, what did the people spread on the road?', ['Their clothes, and leafy branches cut from the trees', 'Only leafy branches cut down from the trees', 'Only their clothes, laid down as He rode by', 'Linen cloths bought from the sellers in the temple'], 8),
    blank(3, 'And many spread their clothes on the road, and others cut down leafy _____ from the trees and spread them on the road.', 'branches', 8),

    mc(1, 'As Jesus rode toward Jerusalem, what did those who went before Him and those who followed cry out?', ['Hosanna! Blessed is He who comes in the Lord’s name!', 'Truly this Man was the Son of God!', 'Jesus, Son of David, have mercy on me!', 'Rabbi, it is good for us to be here!'], 9),
    blank(1, 'Then those who went before and those who followed cried out, saying: "_____! "Blessed is He who comes in the name of the Lord!"', 'Hosanna', 9),
    tf(2, 'Only those who followed behind Jesus cried out "Hosanna"; those who went before Him were silent.', false, 9, 'Both "those who went before and those who followed" cried out.'),
    sa(3, 'In whose name did the crowd say the One riding into Jerusalem was coming?', 'In the name of the Lord: "Blessed is He who comes in the name of the Lord!"', 9, ['the lord', 'in the name of the lord']),

    mc(2, 'Whose coming kingdom did the crowd bless as Jesus rode toward Jerusalem?', ['The kingdom of our father David', 'The kingdom of our father Abraham', 'The kingdom of Herod the king', 'The kingdom of Caesar'], 10),
    blank(2, 'Blessed is the kingdom of our father _____ That comes in the name of the Lord! Hosanna in the highest!', 'David', 10),
    sa(3, 'Quote the crowd’s blessing on the kingdom as Jesus rode toward Jerusalem.', '"Blessed is the kingdom of our father David that comes in the name of the Lord! Hosanna in the highest!"', 10),
    tf(3, 'The crowd blessed "the kingdom of our father Abraham that comes in the name of the Lord."', false, 10, 'They blessed "the kingdom of our father David."'),

    mc(1, 'On the day Jesus rode into Jerusalem, what did He do in the temple?', ['He looked around at all things and left, since the hour was late', 'He overturned the tables of the money changers', 'He taught that His house should be a house of prayer', 'He answered the chief priests about His authority'], 11, 'The cleansing of the temple came the next day.'),
    blank(2, 'So when He had looked around at all things, as the hour was already late, He went out to _____ with the twelve.', 'Bethany', 11),
    tf(2, 'On the day after He rode into Jerusalem, Jesus drove the money changers out of the temple.', true, 15),
    sa(3, 'Why did Jesus leave Jerusalem for Bethany on the day He entered the city and looked around the temple?', 'Because the hour was already late.', 11, ['the hour was late', 'it was late']),
    mc(3, 'Who went with Jesus out to Bethany after He looked around the temple on the day of His entry?', ['The twelve', 'Peter, James, and John', 'The two disciples He had sent for the colt', 'The crowd that had cried "Hosanna"'], 11),

    // ══════════════════════════════════ v12–14 · The fig tree with leaves but no figs
    blank(1, 'Now the next day, when they had come out from _____, He was hungry.', 'Bethany', 12),

    mc(1, 'When the hungry Jesus went to the fig tree He had seen from afar, what did He find on it?', ['Nothing but leaves', 'A few unripe figs', 'Ripe figs ready to eat', 'Bare branches with no leaves'], 13),
    blank(2, 'And seeing from afar a fig tree having _____, He went to see if perhaps He would find something on it.', 'leaves', 13),
    blank(3, 'When He came to it, He found nothing but leaves, for it was not the _____ for figs.', 'season', 13),
    word(2, 'What did Jesus see on the fig tree from afar that made Him go to look for fruit on it?', 'leaves', 13, ['it had leaves']),
    tf(2, 'When Jesus came to the fig tree, He found a few figs hidden among the leaves.', false, 13, 'He found nothing but leaves, for it was not the season for figs.'),
    sa(2, 'Why did Jesus go over to the fig tree He saw from afar on the road from Bethany?', 'He was hungry and went to see if perhaps He would find something on it.', 13),

    mc(1, 'What did Jesus say to the fig tree that had leaves but no fruit?', ['"Let no one eat fruit from you ever again"', '"Be removed and be cast into the sea"', '"You have made it a den of thieves"', '"Peace, be still!"'], 14),
    word(3, 'Who does Mark say heard Jesus speak to the fig tree?', 'disciples', 14, ['his disciples', 'the disciples']),
    sa(1, 'What did Jesus say to the fig tree when He found nothing but leaves on it?', '"Let no one eat fruit from you ever again."', 14),

    // ══════════════════════════════════ v15–19 · The temple cleansed
    mc(1, 'When Jesus entered the temple after cursing the fig tree, whose tables did He overturn?', ['The tables of the money changers', 'The tables of those who sold doves', 'The tables of the scribes', 'The tables of the tax collectors'], 15),
    mc(3, 'Whose seats did Jesus overturn in the temple?', ['Those who sold doves', 'The money changers', 'The chief priests', 'Those who sold sheep'], 15),
    blank(1, 'Then Jesus went into the temple and began to drive out those who bought and sold in the temple, and overturned the tables of the money _____ and the seats of those who sold doves.', 'changers', 15),
    word(1, 'Jesus overturned the seats of those who sold which birds in the temple?', 'doves', 15, ['dove', 'pigeons']),
    tf(2, 'In the temple Jesus drove out those who sold but allowed those who bought to stay.', false, 15, 'He drove out "those who bought and sold in the temple."'),
    sa(3, 'Name the three things Mark says Jesus did when He went into the temple the day after the triumphal entry.', 'He drove out those who bought and sold in the temple, overturned the tables of the money changers, and overturned the seats of those who sold doves.', 15),

    mc(3, 'Besides driving out the buyers and sellers, what else would Jesus not allow in the temple?', ['Anyone to carry wares through the temple', 'Anyone to teach in the temple', 'Anyone to pray in the temple courts', 'Anyone to enter the temple after evening'], 16),
    blank(2, 'And He would not allow anyone to carry _____ through the temple.', 'wares', 16),
    word(2, 'After driving out the buyers and sellers, Jesus would not let anyone carry what through the temple?', 'wares', 16, ['goods', 'merchandise']),
    tf(1, 'Jesus would not allow anyone to carry wares through the temple.', true, 16),

    mc(1, 'When Jesus taught in the temple after driving out the sellers, what did He say His house should be called?', ['A house of prayer for all nations', 'A house of sacrifice for Israel', 'A den of thieves', 'The kingdom of our father David'], 17),
    blank(1, 'Is it not written, "My house shall be called a house of _____ for all nations"? But you have made it a "den of thieves."', 'prayer', 17),
    blank(3, 'Is it not written, "My house shall be called a house of prayer for all _____"?', 'nations', 17),
    word(1, 'Jesus told the sellers they had made the temple a "den of" what?', 'thieves', 17, ['robbers']),
    tf(2, 'Jesus said the temple was to be a house of prayer for Israel alone.', false, 17, 'He said "a house of prayer for all nations."'),
    sa(3, 'Quote the two-part teaching Jesus gave in the temple after overturning the tables: what is written, and what they had made it.', '"Is it not written, ‘My house shall be called a house of prayer for all nations’? But you have made it a ‘den of thieves.’"', 17),

    mc(2, 'How did the scribes and chief priests respond when they heard what Jesus said and did in the temple?', ['They sought how they might destroy Him', 'They asked Him by what authority He did these things', 'They sent the elders to question Him about John', 'They had Him arrested that same evening'], 18),
    mc(3, 'Why did the scribes and chief priests fear Jesus after the temple cleansing?', ['Because all the people were astonished at His teaching', 'Because He had overturned the tables of the money changers', 'Because the crowd had shouted "Hosanna" as He entered', 'Because the fig tree had withered at His word'], 18),
    blank(2, 'And the scribes and chief priests heard it and sought how they might _____ Him;', 'destroy', 18),
    blank(3, 'for they feared Him, because all the people were _____ at His teaching.', 'astonished', 18),
    word(3, 'How does Mark record the people’s reaction to Jesus’ teaching in the temple, the reaction that made the chief priests fear Him?', 'astonished', 18, ['amazed']),
    tf(2, 'It was the Pharisees and the Herodians who heard Jesus’ teaching in the temple and sought to destroy Him.', false, 18, 'Mark names "the scribes and chief priests."'),
    sa(3, 'Which two groups heard Jesus’ teaching in the temple and sought how they might destroy Him?', 'The scribes and the chief priests.', 18, ['scribes and chief priests', 'chief priests and scribes']),

    blank(1, 'When _____ had come, He went out of the city.', 'evening', 19),
    tf(1, 'Jesus went out of Jerusalem when evening came after cleansing the temple.', true, 19),

    // ══════════════════════════════════ v20–26 · The withered fig tree; faith, prayer, forgiveness
    mc(1, 'The morning after Jesus cleansed the temple, what did the disciples see as they passed by?', ['The fig tree dried up from the roots', 'The fig tree covered with ripe figs', 'The money changers back at their tables', 'The chief priests waiting at the temple gate'], 20),
    blank(2, 'Now in the morning, as they passed by, they saw the fig tree dried up from the _____.', 'roots', 20),
    word(2, 'When the disciples passed the cursed fig tree the next morning, from what part had it dried up?', 'roots', 20, ['the roots', 'root']),
    tf(2, 'The fig tree Jesus cursed had withered only in its upper branches by the next morning.', false, 20, 'They saw it "dried up from the roots."'),
    sa(1, 'After Jesus cursed the fig tree and cleansed the temple, what did the disciples notice the next morning as they passed by?', 'They saw the fig tree dried up from the roots.', 20),
    tf(3, 'The disciples saw the cursed fig tree dried up from the roots the next morning.', true, 20),

    mc(1, 'Which disciple remembered and pointed out the withered fig tree to Jesus?', ['Peter', 'John', 'James', 'Andrew'], 21),
    mc(3, 'What did Peter say when he saw the withered fig tree?', ['"Rabbi, look! The fig tree which You cursed has withered away."', '"Rabbi, it is good for us to be here."', '"Teacher, see what manner of stones and what buildings are here!"', '"Teacher, do You not care that we are perishing?"'], 21),
    blank(1, 'And Peter, remembering, said to Him, "Rabbi, look! The fig tree which You _____ has withered away."', 'cursed', 21),
    blank(3, 'And _____, remembering, said to Him, "Rabbi, look! The fig tree which You cursed has withered away."', 'Peter', 21),
    tf(1, 'It was John who said, "Rabbi, look! The fig tree which You cursed has withered away."', false, 21, 'It was Peter, "remembering," who said it.'),

    blank(1, 'So Jesus answered and said to them, "Have _____ in God.', 'faith', 22),
    word(1, 'When Peter pointed out the withered fig tree, Jesus told the disciples to have faith in whom?', 'God', 22),

    mc(2, 'In His teaching after the fig tree withered, what did Jesus say a person of faith could tell "this mountain" to do?', ['"Be removed and be cast into the sea"', '"Be split in two and fall to the ground"', '"Be moved to the other side of the Jordan"', '"Be lifted up above Jerusalem"'], 23),
    mc(3, 'According to Jesus, what must be true in the heart of the one who speaks to the mountain for it to be done?', ['He does not doubt, but believes that what he says will be done', 'He fasts and prays for three days beforehand', 'He first confesses every trespass against his brother', 'He speaks it in the temple before the chief priests'], 23),
    blank(2, 'For assuredly, I say to you, whoever says to this mountain, "Be removed and be cast into the _____," and does not doubt in his heart, but believes that those things he says will be done, he will have whatever he says.', 'sea', 23),
    blank(3, 'and does not _____ in his heart, but believes that those things he says will be done, he will have whatever he says.', 'doubt', 23),
    word(2, 'In Jesus’ saying after the fig tree withered, where would the mountain be cast for the one who speaks in faith and does not doubt?', 'sea', 23, ['the sea', 'into the sea']),
    sa(3, 'In Jesus’ saying about the mountain, what does the one who does not doubt but believes end up receiving?', 'He will have whatever he says.', 23),

    mc(2, 'After the fig tree withered, what did Jesus tell the disciples to do about whatever they ask when they pray?', ['Believe that you receive them, and you will have them', 'Forgive first, and then they will be given to you', 'Say to the mountain, "Be removed," and it will be done', 'Wait until the season comes, and they will be given'], 24),
    blank(1, 'Therefore I say to you, whatever things you ask when you _____, believe that you receive them, and you will have them.', 'pray', 24),
    word(2, 'Jesus said that whatever things you ask when you pray, you must do what, that you receive them?', 'believe', 24),
    tf(2, 'Jesus said that whatever the disciples ask when they pray, they should believe that they receive it, and they will have it.', true, 24),
    sa(3, 'What promise did Jesus attach to praying in belief, in His teaching after the fig tree withered?', 'Whatever things you ask when you pray, believe that you receive them, and you will have them.', 24),

    mc(1, 'What did Jesus say to do when you stand praying and have anything against anyone?', ['Forgive him', 'Go and tell him his fault', 'Pray for him in secret', 'Bring him before the elders'], 25),
    blank(2, 'And whenever you stand praying, if you have anything against anyone, _____ him, that your Father in heaven may also forgive you your trespasses.', 'forgive', 25),
    blank(3, 'And whenever you stand praying, if you have anything against anyone, forgive him, that your Father in heaven may also forgive you your _____.', 'trespasses', 25),
    sa(2, 'Why, according to Jesus, should a person forgive anyone he has something against when he stands praying?', 'So that his Father in heaven may also forgive him his trespasses.', 25),

    mc(2, 'What did Jesus say would happen if a person does not forgive?', ['Neither will your Father in heaven forgive your trespasses', 'Your prayers will not be heard in the temple', 'The mountain will not be cast into the sea', 'You will be handed over to the judge'], 26),
    tf(2, 'Jesus taught that the Father in heaven forgives our trespasses whether or not we forgive others.', false, 26, '"If you do not forgive, neither will your Father in heaven forgive your trespasses."'),
    sa(2, 'What did Jesus warn would follow if the disciples did not forgive?', 'Neither would their Father in heaven forgive their trespasses.', 26),

    // ══════════════════════════════════ v27–33 · The question about authority
    mc(1, 'Who came to Jesus as He was walking in the temple after the fig tree teaching?', ['The chief priests, the scribes, and the elders', 'The Pharisees and the Herodians', 'The Sadducees and the Pharisees', 'The money changers and the dove sellers'], 27),
    blank(2, 'And as He was walking in the _____, the chief priests, the scribes, and the elders came to Him.', 'temple', 27),
    word(3, 'Along with the chief priests and the scribes, which third group came to question Jesus in the temple?', 'elders', 27, ['the elders']),
    sa(3, 'Where was Jesus, and what was He doing, when the chief priests, scribes, and elders came to challenge His authority?', 'He was back in Jerusalem, walking in the temple.', 27, ['walking in the temple', 'in the temple']),

    mc(1, 'What did the chief priests, scribes, and elders ask Jesus in the temple?', ['"By what authority are You doing these things?"', '"Is it lawful to pay taxes to Caesar, or not?"', '"Which is the first commandment of all?"', '"Are You the Christ, the Son of the Blessed?"'], 28),
    tf(1, 'The leaders asked Jesus two questions: by what authority He was doing these things, and who gave Him that authority.', true, 28),
    sa(3, 'Quote the two questions the chief priests, scribes, and elders put to Jesus in the temple.', '"By what authority are You doing these things? And who gave You this authority to do these things?"', 28),

    mc(2, 'How did Jesus respond to the leaders’ question about His authority?', ['He said He would ask them one question, and would answer them if they answered Him', 'He said He did these things by the authority of His Father in heaven', 'He quoted the Scripture about the house of prayer for all nations', 'He told them to have faith in God and not to doubt'], 29),
    blank(2, 'But Jesus answered and said to them, "I also will ask you one _____; then answer Me, and I will tell you by what authority I do these things:', 'question', 29),
    word(2, 'How many questions did Jesus say He would ask the leaders before answering theirs?', 'one', 29, ['1']),
    sa(3, 'What bargain did Jesus offer the chief priests, scribes, and elders when they asked about His authority?', 'He would ask them one question; if they answered Him, He would tell them by what authority He did these things.', 29),

    mc(1, 'What counter-question did Jesus ask the leaders who challenged His authority?', ['Whether the baptism of John was from heaven or from men', 'Whether it was lawful to pay taxes to Caesar', 'Whose image and inscription were on the denarius', 'Whose wife the woman would be in the resurrection'], 30),
    blank(1, 'The baptism of _____—was it from heaven or from men? Answer Me.', 'John', 30),
    sa(1, 'What two possible sources did Jesus name for John’s baptism in His question to the leaders?', 'From heaven or from men.', 30, ['heaven or men', 'from heaven or from men']),
    tf(3, 'Jesus ended His counter-question about John’s baptism with the words "Answer Me."', true, 30),

    mc(2, 'What did the leaders fear Jesus would say if they answered that John’s baptism was from heaven?', ['"Why then did you not believe him?"', '"Why then did you kill him?"', '"Why then did you not repent?"', '"Why then do you test Me?"'], 31),
    blank(2, 'If we say, "From heaven," He will say, "Why then did you not _____ him?"', 'believe', 31),
    tf(1, 'The leaders reasoned among themselves before answering Jesus’ question about John’s baptism.', true, 31),
    sa(3, 'Why did the leaders decide they could not answer "From heaven" to Jesus’ question about John’s baptism?', 'Because He would then say, "Why then did you not believe him?"', 31),
    word(3, 'Mark says the leaders "reasoned among" whom before answering Jesus about John’s baptism?', 'themselves', 31),

    mc(2, 'Why were the leaders afraid to say John’s baptism was "from men"?', ['They feared the people, who all counted John a prophet', 'They feared Herod, who had beheaded John', 'They feared Jesus would curse them like the fig tree', 'They feared John’s disciples, who were standing there'], 32),
    blank(2, 'But if we say, "From men"—they feared the people, for all counted John to have been a _____ indeed.', 'prophet', 32),
    word(2, 'Whom did the leaders fear when they weighed answering "From men" about John’s baptism?', 'people', 32, ['the people']),
    word(1, 'According to the leaders’ own reasoning, the people all counted John to have been what?', 'prophet', 32, ['a prophet']),
    tf(2, 'The leaders were afraid to answer "From men" because they feared Herod.', false, 32, 'They feared the people, "for all counted John to have been a prophet indeed."'),
    sa(3, 'How did the people regard John, according to the leaders’ reasoning among themselves?', 'All counted John to have been a prophet indeed.', 32),

    mc(1, 'What answer did the leaders finally give to Jesus’ question about John’s baptism?', ['"We do not know."', '"From heaven."', '"From men."', '"Neither will we tell You."'], 33),
    mc(3, 'How did Jesus reply after the leaders said "We do not know"?', ['"Neither will I tell you by what authority I do these things."', '"You are not far from the kingdom of God."', '"Render to Caesar the things that are Caesar’s."', '"You know neither the Scriptures nor the power of God."'], 33),
    blank(1, 'So they answered and said to Jesus, "We do not _____."', 'know', 33),
    blank(2, 'And Jesus answered and said to them, "Neither will I tell you by what _____ I do these things."', 'authority', 33),
    tf(2, 'Because the leaders would not answer His question, Jesus refused to tell them by what authority He acted.', true, 33),
    sa(1, 'How did the exchange about authority end between Jesus and the chief priests, scribes, and elders?', 'They said, "We do not know," and Jesus said, "Neither will I tell you by what authority I do these things."', 33),

    // ══════════════════════════════════ Whole-chapter
    mc(3, 'In Mark 11, which of these happened on the day AFTER Jesus rode into Jerusalem on the colt?', ['He cursed the fig tree and cleansed the temple', 'He looked around the temple and returned to Bethany with the twelve', 'Peter pointed out that the fig tree had withered', 'The leaders asked Him by what authority He did these things'], 15),
  ],
};

export default bank;
