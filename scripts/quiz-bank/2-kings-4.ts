import { mc, blank, word, tf, type ChapterBank, sa } from './types'

const bank: ChapterBank = {
  book: '2 Kings', chapter: 4, tag: 'quiz-v2-2kings-4', rows: [
    mc(2, 'What danger did the prophet’s widow face?', ['A creditor would take her two children as slaves', 'Her house would be seized by the king', 'Her children had become ill', 'She had been expelled from Israel'], 1),
    blank(1, 'the creditor has come to take my two children to be his _____.', 'slaves', 1),
    word(3, 'Whom did the widow say her husband had feared?', 'LORD', 1, ['the LORD', 'God']),
    tf(2, 'The widow’s husband had been one of the sons of the prophets.', true, 1),

    mc(1, 'What did the widow have in her house?', ['A jar of oil', 'A sack of grain', 'A bowl of salt', 'Twenty barley loaves'], 2),
    blank(3, 'Your maidservant has nothing in the house, except a jar of _____.', 'oil', 2),
    word(2, 'Who asked the widow what she owned?', 'Elisha', 2, ["Eli'sha"]),
    tf(1, 'The widow initially described her household possessions as almost nothing.', true, 2),

    mc(1, 'What did Elisha tell the widow to borrow?', ['Empty vessels from all her neighbors', 'Money from the king', 'Oil from the prophets', 'Grain from Shunem'], 3),
    blank(2, 'empty vessels and not too _____.', 'few', 3),
    sa(1, 'From whom was she to borrow the vessels?', 'all her neighbors', 3, ['her neighbors', 'all of her neighbors']),
    tf(3, 'Elisha told the widow to borrow only one vessel.', false, 3, 'He told her to borrow empty vessels and “not too few.”'),
    mc(3, 'What precise instruction did Elisha give about gathering containers?', ['Borrow empty vessels from every neighbor, and not too few', 'Buy one full jar from a merchant', 'Borrow twelve bowls from the prophets', 'Collect only vessels already containing oil'], 3),

    mc(1, 'What was the widow to do after entering her house?', ['Shut the door and pour oil into every borrowed vessel', 'Sell her remaining jar of oil immediately to a merchant', 'Call the creditor inside to witness what she possessed', 'Prepare food for Elisha before filling any of the vessels'], 4),
    blank(3, 'when one is full, set it _____.', 'aside', 4),
    sa(2, 'Who would be inside with the widow?', 'her sons', 4, ['her children']),
    tf(1, 'The filled vessels were to be set aside.', true, 4),

    mc(1, 'What did the widow’s sons do while she poured?', ['They brought the vessels to her', 'They sold the oil', 'They went to Elisha', 'They hid from the creditor'], 5),
    blank(2, 'and as she poured they brought the _____ to her.', 'vessels', 5),
    sa(1, 'What did the widow close before pouring?', 'the door', 5),
    tf(3, 'The pouring took place publicly before the neighbors.', false, 5, 'She shut the door upon herself and her sons.'),

    mc(1, 'When did the oil stop flowing?', ['When there were no more vessels', 'When the creditor arrived', 'At noon', 'When Elisha entered'], 6),
    blank(3, 'There is not _____. Then the oil stopped flowing.', 'another', 6),
    sa(2, 'What had become full?', 'the vessels', 6, ['all the vessels']),
    tf(1, 'The supply of oil continued until every available vessel was full.', true, 6),

    mc(1, 'What was the widow told to do with the oil?', ['Sell it and pay her debts', 'Give it all to the creditor', 'Pour it into the spring', 'Offer it at Bethel'], 7),
    blank(2, 'you and your sons can live on the _____.', 'rest', 7),
    sa(1, 'Who gave the widow the final instructions?', 'the man of God', 7, ['Elisha']),
    tf(3, 'After paying her debts, nothing would remain for the family.', false, 7, 'Elisha said she and her sons could live on the remainder.'),

    mc(1, 'Where did a wealthy woman regularly host Elisha?', ['Shunem', 'Jericho', 'Samaria', 'Gilgal'], 8),
    blank(3, 'who urged him to eat some _____.', 'food', 8),
    sa(2, 'How often did Elisha stop there after accepting her hospitality?', 'whenever he passed that way', 8, ['whenever he passed', 'each time he passed']),
    tf(1, 'The woman of Shunem urged Elisha to share a meal.', true, 8),

    mc(1, 'How did the woman describe Elisha to her husband?', ['A holy man of God', 'A traveling merchant', 'A royal commander', 'A son of the king'], 9),
    blank(2, 'who is continually _____ our way.', 'passing', 9),
    sa(1, 'To whom did the Shunammite woman speak?', 'her husband', 9),
    tf(3, 'The woman believed Elisha was merely an ordinary traveler.', false, 9, 'She perceived that he was a holy man of God.'),

    mc(1, 'What room did the couple propose making for Elisha?', ['A small walled roof chamber', 'A chamber inside the palace', 'A tent beside the road', 'A room beneath the house'], 10),
    blank(3, 'and put there for him a bed, a table, a chair, and a _____.', 'lamp', 10),
    sa(2, 'Name the four furnishings placed in Elisha’s room.', 'a bed, a table, a chair, and a lamp', 10, ['bed table chair and lamp']),
    tf(1, 'The room was intended for Elisha to use whenever he visited.', true, 10),
    mc(3, 'Which complete furnishing list belonged in Elisha’s roof chamber?', ['A bed, table, chair, and lamp', 'A bed, chest, altar, and lamp', 'A couch, desk, stool, and brazier', 'A table, jar, basin, and mantle'], 10),

    mc(1, 'What did Elisha do in the prepared chamber?', ['Rested there', 'Stored the widow’s oil', 'Met the king', 'Taught one hundred men'], 11),
    blank(2, 'he turned into the chamber and _____ there.', 'rested', 11),
    sa(1, 'When did Elisha use the chamber?', 'one day when he came there', 11, ['one day', 'when he came']),
    tf(3, 'Elisha refused to enter the chamber made for him.', false, 11, 'He turned into it and rested there.'),

    mc(1, 'Whom did Elisha tell Gehazi to call?', ['The Shunammite woman', 'The prophet’s widow', 'The king', 'A minstrel'], 12),
    blank(3, 'And he said to Geha’zi his _____.', 'servant', 12),
    sa(2, 'What did the woman do after Gehazi called her?', 'stood before Elisha', 12, ['stood before him']),
    tf(1, 'Gehazi served Elisha.', true, 12),

    mc(1, 'What favor did Elisha offer to arrange for the woman?', ['A word to the king or army commander', 'A place among the prophets', 'Payment for the room', 'Protection from Moab'], 13),
    blank(2, 'See, you have taken all this _____ for us', 'trouble', 13),
    sa(1, 'How did the woman describe her social security?', 'I dwell among my own people', 13, ['she dwelt among her own people']),
    tf(3, 'The woman asked Elisha to speak to the king for her.', false, 13, 'She answered that she dwelt among her own people.'),

    mc(1, 'What need did Gehazi identify in the Shunammite woman’s household?', ['She had no son, and her husband was old', 'She owed a creditor who threatened to take her children', 'Her city’s water was bad and the land was unfruitful', 'Her husband had died and left her without anyone to help'], 14),
    blank(3, 'she has no son, and her husband is _____.', 'old', 14),
    word(2, 'Who pointed out that the woman had no son?', 'Gehazi', 14, ["Geha'zi"]),
    tf(1, 'The Shunammite woman was childless.', true, 14),

    mc(1, 'Where did the woman stand when she was called again?', ['In the doorway', 'On the roof', 'At Mount Carmel', 'Beside the Jordan'], 15),
    blank(2, 'And when he had called her, she stood in the _____.', 'doorway', 15),
    word(1, 'Who ordered that she be called?', 'Elisha', 15, ["Eli'sha"]),
    tf(3, 'The woman entered and sat beside Elisha.', false, 15, 'She stood in the doorway.'),

    mc(1, 'What did Elisha promise the Shunammite woman?', ['She would embrace a son when the season returned', 'Her husband would become young', 'The king would reward her', 'She would receive many vessels of oil'], 16),
    blank(3, 'you shall embrace a _____.', 'son', 16),
    sa(2, 'What did the woman plead that Elisha not do?', 'lie to her', 16, ['deceive her', 'lie to your maidservant']),
    tf(1, 'The promise of a son initially seemed unbelievable to the woman.', true, 16),

    mc(1, 'When did the woman bear the son Elisha had promised?', ['About that time the following spring', 'Seven years after Elisha first stayed in her house', 'At the next new moon after her husband returned home', 'Before the beginning of winter in that same year'], 17),
    blank(2, 'But the woman _____, and she bore a son', 'conceived', 17),
    word(1, 'Whose word was fulfilled by the birth?', 'Elisha’s', 17, ['Elisha', "Eli'sha's"]),
    tf(3, 'The promised child was born exactly as Elisha had said.', true, 17),

    mc(1, 'Where did the grown child go one day?', ['To his father among the reapers', 'To Elisha at Mount Carmel', 'To the prophets at Gilgal', 'To the king in Samaria'], 18),
    blank(3, 'he went out one day to his father among the _____.', 'reapers', 18),
    sa(2, 'Whom did the child visit in the field?', 'his father', 18),
    tf(1, 'The child went out during the harvest work.', true, 18),

    mc(1, 'What complaint did the child make?', ['My head, my head!', 'The water is bad!', 'There is death in the pot!', 'I am hungry!'], 19),
    blank(2, 'And he said to his father, "Oh, my head, my head!" The father said to his servant, "Carry him to his _____."', 'mother', 19),
    sa(1, 'Who was told to carry the child?', 'the father’s servant', 19, ['a servant', 'his servant']),
    tf(3, 'The father personally carried the child home.', false, 19, 'He instructed his servant to carry the child to his mother.'),

    mc(1, 'How long did the sick child sit on his mother’s lap?', ['Until noon', 'Until evening', 'For three days', 'Until the next morning'], 20),
    blank(3, 'the child sat on her lap till noon, and then he _____.', 'died', 20),
    sa(2, 'Who received the child from the servant?', 'his mother', 20, ['the mother']),
    tf(1, 'The child died while on his mother’s lap.', true, 20),

    mc(1, 'Where did the mother lay her dead son?', ['On the man of God’s bed', 'In the field with his father', 'At the city gate', 'On her own bed'], 21),
    blank(2, 'and shut the _____ upon him', 'door', 21),
    sa(1, 'What did the woman do after laying him down?', 'shut the door and went out', 21, ['she closed the door and left']),
    tf(3, 'The woman immediately announced the child’s death publicly.', false, 21, 'She placed him in Elisha’s room, shut the door, and went out.'),

    mc(1, 'What did the woman request from her husband?', ['A servant and one donkey', 'Two reapers and a cart', 'A bowl and salt', 'Gehazi and Elisha’s staff'], 22),
    blank(3, 'that I may quickly go to the man of God, and come _____ again.', 'back', 22),
    sa(2, 'Whom did she intend to visit?', 'the man of God', 22, ['Elisha']),
    tf(1, 'The woman intended to make the journey quickly.', true, 22),

    mc(1, 'Why did the husband question her trip?', ['It was neither new moon nor sabbath', 'The donkey was sick', 'Elisha was in Samaria', 'The reapers needed her'], 23),
    blank(2, 'She said, “It will be _____.”', 'well', 23),
    sa(1, 'Which two observances did the husband mention?', 'new moon and sabbath', 23, ['the new moon and the sabbath']),
    tf(3, 'The husband believed it was the customary day to visit the prophet.', false, 23, 'He noted that it was neither new moon nor sabbath.'),

    mc(1, 'What instruction did the woman give her servant about the journey?', ['Keep the animal moving unless she said otherwise', 'Travel slowly through every village', 'Return to the reapers first', 'Wait until the sabbath'], 24),
    blank(3, 'do not _____ the pace for me unless I tell you.', 'slacken', 24),
    sa(2, 'What animal did the woman saddle?', 'the ass', 24, ['a donkey', 'donkey']),
    tf(1, 'The woman wanted to travel without unnecessary delay.', true, 24),

    mc(1, 'Where did the woman find Elisha?', ['Mount Carmel', 'Shunem', 'Samaria', 'Gilgal'], 25),
    blank(2, 'Look, yonder is the _____.', 'Shu’nammite', 25, ['Shunammite']),
    sa(1, 'Whom did Elisha address when he saw her coming?', 'Gehazi his servant', 25, ['Gehazi']),
    tf(3, 'Gehazi noticed the woman before Elisha did.', false, 25, 'Elisha saw her coming and pointed her out to Gehazi.'),

    mc(1, 'What three welfare questions was Gehazi to ask?', ['Whether she, her husband, and her child were well', 'Whether the king, army, and city were well', 'Whether her house, field, and animals were well', 'Whether Elisha, Gehazi, and the prophets were well'], 26),
    blank(3, 'And she answered, “It is _____.”', 'well', 26),
    word(2, 'Who ran to meet the Shunammite?', 'Gehazi', 26, ["Geha'zi"]),
    tf(1, 'The woman initially answered that all was well.', true, 26),

    mc(1, 'What did the woman do when she reached Elisha?', ['Caught hold of his feet', 'Accused Gehazi', 'Placed the child before him', 'Gave him a jar of oil'], 27),
    blank(2, 'for she is in bitter _____.', 'distress', 27),
    word(1, 'Who tried to push the woman away?', 'Gehazi', 27, ["Geha'zi"]),
    tf(3, 'Elisha said the LORD had already explained the woman’s distress to him.', false, 27, 'He said the LORD had hidden it from him and had not told him.'),

    mc(1, 'What earlier warning did the woman recall?', ['Do not deceive me about a son', 'Do not borrow too few vessels', 'Do not travel on the sabbath', 'Do not send a search party'], 28),
    blank(3, 'Did I not say, Do not _____ me?', 'deceive', 28),
    sa(2, 'What gift had she not originally requested?', 'a son', 28),
    tf(1, 'Her words expressed grief over the promise that now seemed broken.', true, 28),

    mc(1, 'What did Elisha send Gehazi to place on the child?', ['Elisha’s staff', 'A new bowl', 'A jar of oil', 'His mantle'], 29),
    blank(2, 'He said to Geha\'zi, "Gird up your _____, and take my staff in your hand, and go.', 'loins', 29),
    sa(1, 'How was Gehazi to respond to greetings on the way?', 'he was not to reply', 29, ['do not reply', 'not answer']),
    tf(3, 'Gehazi was instructed to stop and greet everyone he met.', false, 29, 'He was to go without greeting or replying to greetings.'),

    mc(1, 'What oath did the child’s mother make?', ['She would not leave Elisha', 'She would not return to Shunem', 'She would never speak to Gehazi', 'She would give away her home'], 30),
    blank(3, 'As the LORD lives, and as you yourself live, I will not _____ you.', 'leave', 30),
    word(2, 'Who followed the woman back?', 'Elisha', 30, ["Eli'sha"]),
    tf(1, 'Elisha arose and followed the mother.', true, 30),

    mc(1, 'What happened when Gehazi laid the staff on the child?', ['There was no sound or sign of life', 'The child immediately stood', 'The child sneezed seven times', 'The mother entered the room'], 31),
    blank(2, 'Therefore he returned to meet him, and told him, "The child has not _____."', 'awaked', 31, ['awakened']),
    word(1, 'Who returned to report the unsuccessful attempt?', 'Gehazi', 31, ["Geha'zi"]),
    tf(3, 'The child revived when Gehazi placed the staff on his face.', false, 31, 'There was no sound or sign of life.'),

    mc(1, 'What did Elisha see when he entered the house?', ['The child lying dead on his bed', 'The child speaking with his mother', 'Gehazi holding the child', 'An empty chamber'], 32),
    blank(3, 'he saw the child lying _____ on his bed.', 'dead', 32),
    sa(2, 'On whose bed was the child lying?', 'Elisha’s bed', 32, ['his bed', 'the man of God’s bed']),
    tf(1, 'The child remained in the chamber where his mother had placed him.', true, 32),

    mc(1, 'What did Elisha do after shutting the door?', ['Prayed to the LORD', 'Called the king', 'Sent Gehazi away again', 'Poured oil on the child'], 33),
    blank(2, 'So he went in and shut the door upon the two of them, and _____ to the LORD.', 'prayed', 33),
    sa(1, 'Who was inside the closed room?', 'Elisha and the child', 33, ['the two of them']),
    tf(3, 'Elisha prayed publicly before the household.', false, 33, 'He shut the door upon the two of them and prayed.'),

    mc(1, 'How did Elisha position himself over the child?', ['Mouth to mouth, eyes to eyes, and hands to hands', 'With his staff on the child’s feet', 'Kneeling beside the doorway', 'Seated at the head of the bed'], 34),
    blank(3, 'the flesh of the child became _____.', 'warm', 34),
    sa(2, 'What physical change first occurred?', 'the child’s flesh became warm', 34, ['his flesh became warm', 'warmth']),
    tf(1, 'Elisha stretched himself upon the child.', true, 34),

    mc(1, 'What did the child do before opening his eyes?', ['Sneezed seven times', 'Spoke Elisha’s name', 'Cried out twice', 'Sat up immediately'], 35),
    blank(2, 'the child _____ seven times', 'sneezed', 35),
    word(1, 'How many times did the child sneeze?', 'seven', 35, ['7']),
    tf(3, 'Elisha remained motionless beside the child until he awoke.', false, 35, 'He walked once to and fro, then stretched himself upon the child again.'),
    mc(3, 'What sequence marked the child’s return to life?', ['After Elisha stretched upon him again, he sneezed seven times and opened his eyes', 'After Gehazi struck him with the staff again, the child stood and walked', 'After his mother poured oil over him, he spoke to her and left the room', 'After the sons of the prophets prayed together, the child arose at noon'], 35),

    mc(1, 'What did Elisha tell the Shunammite woman to do?', ['Take up her son', 'Bring another vessel', 'Return to Mount Carmel', 'Call her husband'], 36),
    blank(3, 'Call this _____.', 'Shu’nammite', 36, ['Shunammite']),
    word(2, 'Who summoned the woman for Elisha?', 'Gehazi', 36, ["Geha'zi"]),
    tf(1, 'Elisha presented the living child to his mother.', true, 36),

    mc(1, 'How did the woman respond before taking her son?', ['She fell at Elisha’s feet and bowed', 'She rebuked Gehazi', 'She called the reapers', 'She ran to her husband'], 37),
    sa(1, 'To what did she bow?', 'the ground', 37),
    tf(3, 'The woman left without acknowledging Elisha.', false, 37, 'She fell at his feet and bowed to the ground.'),

    mc(1, 'What condition afflicted the land when Elisha returned to Gilgal?', ['Famine', 'War', 'Flood', 'Plague'], 38),
    blank(3, 'Set on the great pot, and boil _____ for the sons of the prophets.', 'pottage', 38),
    sa(2, 'Who were sitting before Elisha?', 'the sons of the prophets', 38, ['sons of the prophets']),
    tf(1, 'Elisha ordered food prepared during the famine.', true, 38),

    mc(1, 'What did one man unknowingly add to the pottage?', ['Wild gourds from a wild vine', 'Poisoned water', 'Spoiled barley loaves', 'Bitter salt'], 39),
    blank(2, 'and found a wild vine and gathered from it his lap full of wild _____.', 'gourds', 39),
    sa(1, 'Why did the man add the gourds?', 'he did not know what they were', 39, ['not knowing what they were', 'he was unaware']),
    tf(3, 'The gatherer recognized the wild gourds as dangerous.', false, 39, 'He cut them into the pot without knowing what they were.'),

    mc(1, 'What did the men cry after tasting the pottage?', ['“O man of God, there is death in the pot!”', '“The water is bad, and the land is unfruitful!”', '“Bring me a new bowl, and put salt in it!”', '“The child has awaked, but there is no sound!”'], 40),
    blank(3, 'there is _____ in the pot!', 'death', 40),
    tf(2, 'After the men cried out that there was death in the pot, they could not eat the stew.', true, 40),
    tf(1, 'The men stopped eating because they believed the stew was deadly.', true, 40),

    mc(1, 'What did Elisha throw into the pot?', ['Meal', 'Salt', 'Oil', 'Barley loaves'], 41),
    blank(2, 'And there was no _____ in the pot.', 'harm', 41),
    word(1, 'What did Elisha tell the servant to bring?', 'meal', 41, ['flour']),
    tf(3, 'The pottage remained harmful after the meal was added.', false, 41, 'There was no harm in the pot.'),
    mc(3, 'How was the deadly pottage made safe?', ['Elisha threw meal into the pot and told the men to eat', 'He poured it out and filled the pot with water', 'He added salt from a new bowl', 'He touched it with Elijah’s mantle'], 41),

    mc(1, 'What food did the man from Baal-shalishah bring?', ['Twenty barley loaves and fresh ears of grain in his sack', 'A jar of oil and a measure of meal from his household', 'One hundred lambs and the wool of one hundred rams', 'Wild gourds and herbs gathered from the surrounding fields'], 42),
    blank(3, 'A man came from Ba\'al-shal\'ishah, bringing the man of God bread of the first fruits, twenty loaves of _____, and fresh ears of grain in his sack.', 'barley', 42),
    word(2, 'From where did the man come?', 'Baal-shalishah', 42, ["Ba'al-shal'ishah"]),
    tf(1, 'The food was described as bread of the first fruits.', true, 42),
    mc(3, 'What provision was brought for the men?', ['Twenty barley loaves with fresh ears of grain', 'One hundred wheat loaves with oil', 'Seven jars of meal and salt', 'Two hundred lambs and wool'], 42),

    mc(1, 'How many men did the servant doubt the food could feed?', ['One hundred', 'Fifty', 'Forty-two', 'Twenty'], 43),
    blank(2, 'They shall eat and have some _____.', 'left', 43),
    word(1, 'Whose promise supported Elisha’s command to serve the food?', 'LORD', 43, ['the LORD', 'the LORD’s', "LORD's", 'God']),
    tf(3, 'Elisha withdrew his instruction after the servant questioned the amount.', false, 43, 'He repeated the command and cited the LORD’s promise of leftovers.'),

    mc(1, 'What happened when the food was set before the men?', ['They ate and had some left', 'They refused to eat', 'It ran out before all were served', 'They found death in it'], 44),
    blank(3, 'And they ate, and had some _____.', 'left', 44),
    sa(2, 'Whose word was fulfilled when the men ate and had food left over?', 'the LORD’s word', 44, ['the word of the LORD', 'the LORD']),
    tf(1, 'The result fulfilled the word of the LORD.', true, 44),
  ],
}

export default bank
