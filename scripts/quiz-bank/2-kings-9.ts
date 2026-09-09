import { mc, blank, word, tf, type ChapterBank, sa } from './types'

const bank: ChapterBank = {
  book: '2 Kings', chapter: 9, tag: 'quiz-v2-2kings-9', rows: [
    mc(2, 'Whom did Elisha summon for a mission?', ['One of the sons of the prophets', 'Gehazi', 'Jehu', 'Bidkar'], 1),
    blank(1, 'take this flask of _____ in your hand', 'oil', 1),
    word(3, 'Where was the young prophet sent?', 'Ramoth-gilead', 1, ['Ramoth Gilead']),
    tf(2, 'Elisha told the young prophet to prepare himself and travel promptly.', true, 1),

    mc(1, 'Whom was the messenger to find?', ['Jehu son of Jehoshaphat, son of Nimshi', 'Joram son of Ahab', 'Ahaziah king of Judah', 'Bidkar'], 2),
    blank(3, 'lead him to an inner _____.', 'chamber', 2),
    sa(2, 'From whom was Jehu to be separated?', 'his fellows', 2, ['the other commanders']),
    tf(1, 'The anointing was to occur privately.', true, 2),

    mc(1, 'What was the young prophet to do to Jehu?', ['Anoint him king over Israel', 'Make him army commander', 'Send him to Jezreel', 'Warn him against Ahab'], 3),
    blank(2, 'Then open the door and _____; do not tarry.', 'flee', 3),
    word(1, 'What was poured on Jehu’s head?', 'oil', 3),
    tf(3, 'The messenger was told to remain and explain the anointing.', false, 3, 'He was to open the door and flee without tarrying.'),
    mc(3, 'What was Elisha’s complete instruction for the private mission?', ['Anoint Jehu king, then open the door and flee without delay', 'Invite Jehu to Samaria and wait', 'Anoint Joram and return to Elisha', 'Pour oil on the commanders and remain'], 3),

    mc(1, 'Who went to Ramoth-gilead?', ['The young prophet', 'Elisha', 'Jezebel', 'Joram'], 4),
    blank(3, 'So the young man, the _____, went to Ramoth-gilead.', 'prophet', 4),
    sa(2, 'What describes the messenger’s age?', 'young man', 4, ['young']),
    tf(1, 'The messenger obeyed Elisha’s travel command.', true, 4),

    mc(1, 'What were the army commanders doing when the prophet arrived?', ['Sitting in council', 'Fighting Syria', 'Eating a feast', 'Guarding Jezreel'], 5),
    blank(2, 'I have an _____ to you, O commander.', 'errand', 5),
    sa(1, 'How did the messenger identify the intended recipient?', 'To you, O commander', 5, ['to Jehu', 'you']),
    tf(3, 'Jehu asked which commander the messenger meant.', true, 5),

    mc(1, 'What declaration accompanied Jehu’s anointing?', ['The LORD God of Israel appointed him king over Israel', 'Ahab had restored him as commander', 'Syria had made peace with him', 'Elisha chose him king over Judah'], 6),
    blank(3, 'I anoint you king over the people of the LORD, over _____.', 'Israel', 6),
    sa(2, 'Where did Jehu go for the anointing?', 'into the house', 6, ['the house', 'inside']),
    tf(1, 'The young prophet poured oil on Jehu’s head.', true, 6),

    mc(1, 'What house was Jehu commissioned to strike down?', ['The house of Ahab', 'The house of David', 'The house of Nimshi', 'The house of Hazael'], 7),
    blank(2, 'that I may _____ on Jez’ebel the blood of my servants', 'avenge', 7),
    sa(1, 'Whose shed blood would be avenged?', 'the LORD’s servants and prophets', 7, ['the prophets and servants of the LORD']),
    tf(3, 'Jezebel was held accountable for the blood of the LORD’s servants.', true, 7),

    mc(1, 'How complete would Ahab’s house’s destruction be?', ['Every male, bond or free, would be cut off', 'Only Ahab’s soldiers would die', 'The women would rule instead', 'The house would lose one city'], 8),
    blank(3, 'For the whole house of Ahab shall _____.', 'perish', 8),
    sa(2, 'Which social conditions were included?', 'bond or free', 8, ['slave and free']),
    tf(1, 'The judgment included every male of Ahab’s house in Israel.', true, 8),

    mc(1, 'Which two fallen dynasties were used as comparisons?', ['Jeroboam’s and Baasha’s', 'David’s and Solomon’s', 'Hazael’s and Ben-hadad’s', 'Omri’s and Nimshi’s'], 9),
    blank(2, 'like the house of Ba’asha the son of _____.', 'Ahi’jah', 9, ['Ahijah']),
    word(1, 'Whose son was Jeroboam?', 'Nebat’s', 9, ['Nebat']),
    tf(3, 'Ahab’s house would share the fate of earlier condemned royal houses.', true, 9),

    mc(1, 'What was foretold about Jezebel’s body?', ['Dogs would eat her in Jezreel and no one would bury her', 'She would be buried with Ahab', 'She would escape to Samaria', 'Fire would consume her'], 10),
    blank(3, 'and none shall _____ her.', 'bury', 10),
    sa(2, 'Where would dogs eat Jezebel?', 'the territory of Jezreel', 10, ['Jezreel']),
    tf(1, 'The prophet fled after delivering the oracle.', true, 10),

    mc(1, 'How did Jehu’s fellow servants describe the prophet?', ['This mad fellow', 'The man of God', 'The king’s messenger', 'A Syrian spy'], 11),
    blank(2, 'Is all _____?', 'well', 11),
    sa(1, 'What did Jehu initially say about the visitor’s talk?', 'You know the fellow and his talk', 11, ['they knew him and his talk']),
    tf(3, 'The commanders questioned why the young prophet had come.', true, 11),

    mc(1, 'What did Jehu finally tell the commanders?', ['The LORD had anointed him king over Israel', 'The prophet warned of defeat', 'Joram had died', 'Jezebel had fled'], 12),
    blank(3, 'I anoint you _____ over Israel.', 'king', 12),
    sa(2, 'How did the commanders respond to Jehu’s first dismissal?', 'That is not true; tell us now', 12, ['they demanded the truth', 'tell us now']),
    tf(1, 'Jehu disclosed the prophet’s words after being pressed.', true, 12),

    mc(1, 'How did the commanders proclaim Jehu?', ['They spread garments under him, blew a trumpet, and declared him king', 'They crowned him in Samaria’s temple', 'They sent a letter to Jezebel', 'They waited for Joram’s approval'], 13),
    blank(2, 'and they blew the _____.', 'trumpet', 13),
    sa(1, 'Where were the garments placed?', 'under Jehu on the bare steps', 13, ['under him', 'on the bare steps']),
    tf(3, 'The commanders acted immediately and proclaimed Jehu king.', true, 13),

    mc(1, 'Against whom did Jehu conspire?', ['Joram', 'Hazael', 'Ahaziah', 'Jezebel alone'], 14),
    blank(3, 'had been on guard at Ramoth-gilead against Haz’ael king of _____.', 'Syria', 14),
    word(2, 'Who was Jehu’s father?', 'Jehoshaphat son of Nimshi', 14, ['Jehoshaphat', 'son of Jehoshaphat son of Nimshi']),
    tf(1, 'Joram and Israel had guarded Ramoth-gilead against Hazael.', true, 14),

    mc(1, 'Why had Joram returned to Jezreel?', ['To recover from Syrian wounds', 'To crown Jehu', 'To visit Jezebel', 'To meet Ahaziah in battle'], 15),
    blank(2, 'let no one slip out of the city to go and tell the _____ in Jezreel.', 'news', 15),
    sa(1, 'Who had wounded Joram?', 'the Syrians', 15, ['Syria']),
    tf(3, 'Jehu wanted the conspiracy kept from Joram.', true, 15),

    mc(1, 'How did Jehu travel to Jezreel?', ['In his chariot', 'On foot', 'On horseback alone', 'With a Syrian escort'], 16),
    blank(3, 'for Joram _____ there.', 'lay', 16),
    word(2, 'Who had come to visit Joram?', 'Ahaziah king of Judah', 16, ['Ahaziah']),
    tf(1, 'Both Joram and Ahaziah were in Jezreel.', true, 16),

    mc(1, 'Who first spotted Jehu’s company?', ['The watchman on Jezreel’s tower', 'Joram', 'Jezebel', 'Ahaziah'], 17),
    blank(2, 'Take a _____, and send to meet them', 'horseman', 17),
    sa(1, 'What question was the rider to ask?', 'Is it peace?', 17, ['is it peace']),
    tf(3, 'Joram sent a mounted messenger after hearing the watchman’s report.', true, 17),

    mc(1, 'What did Jehu order the first messenger to do?', ['Turn around and ride behind him', 'Return to Joram', 'Fight the company', 'Go to Ramoth-gilead'], 18),
    blank(3, 'What have you to do with _____?', 'peace', 18),
    sa(2, 'What did the watchman observe about the messenger?', 'he reached them but did not return', 18, ['not coming back', 'he stayed with them']),
    tf(1, 'The first horseman joined Jehu’s company.', true, 18),

    mc(1, 'How did Jehu answer the second horseman?', ['As he had answered the first: ride behind me', 'He announced peace', 'He sent him back with a warning', 'He killed him'], 19),
    blank(2, 'Turn round and ride _____ me.', 'behind', 19),
    word(1, 'Who sent the second horseman?', 'Joram', 19, ['the king']),
    tf(3, 'The second messenger also asked whether there was peace.', true, 19),

    mc(1, 'How did the watchman identify Jehu’s approach?', ['By his furious driving', 'By a royal banner', 'By the sound of a trumpet', 'By his horses’ color'], 20),
    blank(3, 'for he drives _____.', 'furiously', 20),
    word(2, 'Whose son did the watchman call Jehu?', 'Nimshi’s', 20, ['Nimshi', 'son of Nimshi']),
    tf(1, 'Neither messenger returned after reaching the company.', true, 20),
    mc(3, 'What distinctive behavior led the watchman to name Jehu?', ['The company’s leader drove like Jehu son of Nimshi—furiously', 'He carried Elisha’s oil flask', 'He sounded a trumpet continuously', 'He rode behind two messengers'], 20),

    mc(1, 'Where did Joram and Ahaziah meet Jehu?', ['On Naboth the Jezreelite’s property', 'At Ramoth-gilead', 'At Jezreel’s gate', 'On Mount Carmel'], 21),
    blank(2, 'and they made ready his _____.', 'chariot', 21),
    sa(1, 'How did the two kings travel?', 'each in his own chariot', 21, ['in their chariots', 'each in his chariot']),
    tf(3, 'Joram and Ahaziah went out together to meet Jehu.', true, 21),

    mc(1, 'Why did Jehu deny that peace was possible?', ['Jezebel’s harlotries and sorceries remained many', 'Syria still held Ramoth-gilead', 'Ahaziah had arrived', 'The watchman had recognized him'], 22),
    blank(3, 'so long as the harlotries and the _____ of your mother Jez’ebel are so many?', 'sorceries', 22),
    word(2, 'Who asked Jehu whether it was peace?', 'Joram', 22),
    tf(1, 'Jehu confronted Joram with Jezebel’s wrongdoing.', true, 22),

    mc(1, 'What warning did Joram shout to Ahaziah?', ['Treachery, O Ahaziah!', 'Peace, O Ahaziah!', 'Flee to Ramoth-gilead!', 'Jehu is king!'], 23),
    blank(2, 'Then Joram reined about and _____.', 'fled', 23),
    word(1, 'Whom did Joram warn?', 'Ahaziah', 23, ["Ahazi'ah"]),
    tf(3, 'Joram turned his chariot away from Jehu.', true, 23),

    mc(1, 'How did Jehu kill Joram?', ['Shot an arrow between his shoulders through his heart', 'Struck him with a sword', 'Trampled him with horses', 'Threw him from a window'], 24),
    blank(3, 'so that the arrow pierced his _____.', 'heart', 24),
    sa(2, 'Where did Joram’s body fall?', 'in his chariot', 24, ['his chariot']),
    tf(1, 'Jehu drew his bow with full strength.', true, 24),

    mc(1, 'Whom did Jehu order to move Joram’s body?', ['Bidkar his aide', 'The watchman', 'The young prophet', 'Ahaziah'], 25),
    blank(2, 'cast him on the plot of ground belonging to _____', 'Naboth', 25),
    word(1, 'Behind whom had Jehu and Bidkar once ridden?', 'Ahab', 25),
    tf(3, 'Jehu remembered a divine oracle spoken against Ahab.', true, 25),

    mc(1, 'Why was Joram cast onto Naboth’s plot?', ['To fulfill the LORD’s word requiting Naboth’s blood there', 'Because it was nearest the road', 'To hide him from Jezebel', 'Because Bidkar owned it'], 26),
    blank(3, 'I will _____ you on this plot of ground.', 'requite', 26),
    sa(2, 'Whose blood had the LORD seen?', 'Naboth’s and his sons’', 26, ['Naboth and his sons', 'the blood of Naboth and his sons']),
    tf(1, 'The disposal of Joram’s body deliberately fulfilled the LORD’s oracle.', true, 26),
    mc(3, 'What connected Joram’s death to Ahab’s crime?', ['His body was cast on Naboth’s plot where the LORD promised requital for Naboth and his sons', 'He was buried beside Naboth', 'He confessed before dying', 'Bidkar returned Naboth’s land'], 26),

    mc(1, 'Where did the wounded Ahaziah die?', ['Megiddo', 'Jezreel', 'Beth-haggan', 'Ramoth-gilead'], 27),
    blank(2, 'And Jehu pursued him, and said, “_____ him also.”', 'Shoot', 27),
    sa(1, 'Where was Ahaziah shot?', 'at the ascent of Gur by Ibleam', 27, ['ascent of Gur', 'Gur by Ibleam']),
    tf(3, 'Ahaziah initially fled in the direction of Beth-haggan.', true, 27),

    mc(1, 'Where did Ahaziah’s servants bury him?', ['In his tomb in the city of David', 'On Naboth’s plot', 'At Megiddo', 'In Jezreel'], 28),
    blank(3, 'His servants carried him in a chariot to _____.', 'Jerusalem', 28),
    sa(2, 'Who transported Ahaziah’s body?', 'his servants', 28),
    tf(1, 'Ahaziah was buried with his fathers.', true, 28),

    mc(1, 'In whose eleventh year did Ahaziah begin to reign?', ['Joram son of Ahab’s', 'Jehu’s', 'Hazael’s', 'Jehoshaphat’s'], 29),
    blank(2, 'Ahazi’ah began to reign over _____.', 'Judah', 29),
    word(1, 'Who was Joram’s father?', 'Ahab', 29),
    tf(3, 'Ahaziah’s accession was dated by Joram’s reign.', true, 29),

    mc(1, 'How did Jezebel prepare when Jehu reached Jezreel?', ['Painted her eyes, adorned her head, and looked from a window', 'Put on sackcloth and fled', 'Gathered an army at the gate', 'Sent gifts to Jehu'], 30),
    blank(3, 'she painted her eyes, and _____ her head', 'adorned', 30),
    sa(2, 'From where did Jezebel look?', 'the window', 30, ['a window']),
    tf(1, 'Jezebel heard of Jehu’s arrival before appearing at the window.', true, 30),

    mc(1, 'Whom did Jezebel invoke in her insult to Jehu?', ['Zimri, murderer of his master', 'Nimshi, furious driver', 'Bidkar, Ahab’s aide', 'Hazael, king of Syria'], 31),
    blank(2, 'Is it peace, you Zimri, _____ of your master?', 'murderer', 31),
    sa(1, 'Where was Jehu when Jezebel addressed him?', 'entering the gate', 31, ['at the gate']),
    tf(3, 'Jezebel greeted Jehu by comparing him to a regicide.', true, 31),

    mc(1, 'Who responded to Jehu’s call from the window?', ['Two or three eunuchs', 'Jezebel’s sons', 'The watchman', 'Joram’s servants'], 32),
    blank(3, 'Who is on my _____? Who?', 'side', 32),
    sa(2, 'In what direction did Jehu look?', 'up to the window', 32, ['toward the window']),
    tf(1, 'Jehu asked who supported him.', true, 32),

    mc(1, 'What did Jehu command the eunuchs to do?', ['Throw Jezebel down', 'Hide her', 'Bring her to the gate', 'Send her to Samaria'], 33),
    blank(2, 'some of her blood _____ on the wall', 'spattered', 33),
    sa(1, 'What happened after Jezebel struck the ground?', 'horses trampled her', 33, ['they trampled on her', 'she was trampled']),
    tf(3, 'Jezebel’s blood spattered the wall and horses.', true, 33),

    mc(1, 'Why did Jehu later order Jezebel buried?', ['She was a king’s daughter', 'She had repented', 'Elijah requested it', 'She was Jehu’s relative'], 34),
    blank(3, 'See now to this _____ woman', 'cursed', 34),
    sa(2, 'What did Jehu do before giving the burial order?', 'ate and drank', 34, ['he ate and drank']),
    tf(1, 'Jehu acknowledged Jezebel’s royal birth.', true, 34),

    mc(1, 'What remained when they went to bury Jezebel?', ['Her skull, feet, and palms', 'Only her garments', 'Her whole body', 'Only her bones'], 35),
    blank(2, 'the skull and the feet and the _____ of her hands.', 'palms', 35),
    word(1, 'How many categories of remains are named?', 'three', 35, ['3']),
    tf(3, 'The burial party found most of Jezebel’s body intact.', false, 35, 'Only her skull, feet, and palms remained.'),
    mc(3, 'What exactly did the burial party recover?', ['The skull, feet, and palms of Jezebel’s hands', 'Her skull and crown', 'Her bones and royal garments', 'Nothing at all'], 35),

    mc(1, 'Whose prophecy did Jehu recognize in Jezebel’s fate?', ['Elijah the Tishbite’s', 'Elisha’s', 'The young prophet’s', 'Micaiah’s'], 36),
    blank(3, 'the _____ shall eat the flesh of Jez’ebel', 'dogs', 36),
    sa(2, 'Where did the prophecy say Jezebel would be eaten?', 'the territory of Jezreel', 36, ['Jezreel']),
    tf(1, 'Jehu identified the report as fulfillment of the LORD’s word.', true, 36),

    mc(1, 'What would Jezebel’s corpse become like?', ['Dung on the field', 'Ashes on the wall', 'Dust in the city', 'A memorial in Jezreel'], 37),
    blank(2, 'so that no one can say, This is _____.', 'Jez’ebel', 37, ['Jezebel']),
    sa(1, 'On what surface would her remains lie?', 'the face of the field', 37, ['the field']),
    tf(3, 'The prophecy said Jezebel’s remains would no longer be identifiable.', true, 37),
  ],
}

export default bank
