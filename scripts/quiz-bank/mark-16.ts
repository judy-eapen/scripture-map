import { mc, blank, word, tf, type ChapterBank, sa } from './types'
const bank: ChapterBank = { book: 'Mark', chapter: 16, tag: 'quiz-v2-mark-16', rows: [
mc(1,'Which women bought spices to anoint Jesus?',['Mary Magdalene, Mary mother of James, and Salome','Martha, Joanna, and Elizabeth','Mary mother of Joses alone','Herodias and her daughter'],1),blank(2,'when the Sabbath was past, Mary Magdalene, Mary the mother of James, and Salome bought _____','spices',1),
sa(1,'When did the women come to the tomb?','very early on the first day of the week',2,['first day of the week','when the sun had risen']),tf(3,'The women arrived before the Sabbath had ended.',false,2,'They came after the Sabbath, when the sun had risen.'),
mc(1,'What problem did the women discuss on the way?',['Who would roll away the stone','Who would buy spices','Where Peter had gone','How to enter Galilee'],3),blank(2,'Who will roll away the _____ from the door of the tomb for us?','stone',3),
sa(2,'What had happened to the very large stone?','it had been rolled away',4,['rolled away']),tf(1,'The women found the stone still sealing the tomb.',false,4,'They saw that it had been rolled away.'),
mc(2,'Whom did the women see inside the tomb?',['A young man in a long white robe','Peter and John','Two Roman guards','Mary Magdalene'],5),blank(3,'a young man clothed in a long white robe sitting on the _____ side','right',5),
sa(1,'What announcement did the young man make about Jesus?','He is risen',6,['risen','He has risen']),tf(2,'The young man said Jesus of Nazareth was still lying there.',false,6,'He said Jesus had risen and was not there.'),
mc(1,'Where would the disciples see Jesus?',['Galilee','Jerusalem’s temple','Bethany','Golgotha'],7),blank(3,'go, tell His disciples—and _____','Peter',7),
sa(2,'Why did the women initially say nothing to anyone?','they were afraid',8,['fear','afraid']),tf(1,'The women left trembling and amazed.',true,8),
mc(1,'To whom did the risen Jesus appear first?',['Mary Magdalene','Peter','Salome','The Eleven'],9),blank(2,'out of whom He had cast _____ demons.','seven',9,['7']),
sa(2,'What were Jesus’ former companions doing when Mary told them?','mourning and weeping',10,['they mourned and wept']),tf(3,'Mary kept the appearance entirely to herself.',false,10,'She went and told those who had been with Jesus.'),
mc(3,'How did the mourners respond to Mary’s report?',['They did not believe','They immediately went to Galilee','They celebrated','They returned to the tomb with her'],11),blank(1,'He was alive and had been seen by her, they did not _____.','believe',11),
word(3,'To how many people did Jesus appear in another form?','two',12,['2']),tf(1,'The two were walking into the country.',true,12),
mc(1,'How did the others receive the two witnesses’ report?',['They did not believe them either','They believed immediately','They accused Mary','They went preaching'],13),blank(2,'they went and told it to the _____','rest',13),
sa(2,'What two faults did Jesus rebuke in the Eleven?','unbelief and hardness of heart',14),tf(3,'Jesus praised the Eleven for believing every resurrection witness.',false,14,'He rebuked their unbelief and hardness of heart.'),
mc(1,'Where were the disciples commanded to preach?',['All the world','Only Galilee','Only Jerusalem','Only the synagogues'],15),blank(3,'preach the gospel to every _____.','creature',15),
sa(1,'Who will be saved?','the one who believes and is baptized',16,['he who believes and is baptized']),tf(2,'Jesus said unbelief leads to condemnation.',true,16),
mc(2,'Name one sign that would follow believers.',['Casting out demons in Jesus’ name','Building a new temple','Calling down fire','Becoming earthly kings'],17),blank(1,'they will speak with new _____.','tongues',17),
sa(3,'What would happen when believers laid hands on the sick?','they would recover',18,['the sick would recover']),tf(1,'Jesus said deadly drink would certainly kill believers.',false,18,'He said it would by no means hurt them.'),
mc(1,'Where was the Lord seated after being received into heaven?',['At God’s right hand','On the Mount of Olives','Inside the tomb','At the disciples’ table'],19),blank(2,'He was received up into heaven, and sat down at the right hand of _____.','God',19),
sa(2,'How did the Lord confirm the preached word?','through accompanying signs',20,['accompanying signs']),tf(3,'The disciples remained inside and did not preach.',false,20,'They went out and preached everywhere.'),
]};
export default bank;
