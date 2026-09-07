import type { TappablePerson, TappablePlace } from '@/lib/types'
import markSource from '@/data/mark-source.json'
import { additionalMarkPeople, additionalMarkPlaces } from '@/data/mark-study-data-expanded'

const people: TappablePerson[] = [
  {
    person: {
      id: 'mark-jesus', name: 'Jesus Christ', alt_names: ['Jesus of Nazareth', 'Christ', 'Son of God', 'Son of Man'], type: 'other',
      bio: 'The central figure of the Gospel: the incarnate Son of God, Messiah, teacher, healer, crucified Lord, and risen Savior. Mark emphasizes both His divine authority and His willing service and suffering.',
      contemporary_events: 'Jesus’ public ministry took place in the early first century while Judea and Galilee were under Roman rule.',
      scripture_references: {
        mark: ['Mark 1–16 (throughout the Gospel)'],
        other_gospels: ['Matthew 1–28', 'Luke 1–24', 'John 1–21'],
        new_testament: ['Acts 1–28', 'Romans 1:1–7', '1 Corinthians 15:1–28', 'Philippians 2:5–11', 'Hebrews 1:1–14', 'Revelation 1:1–18'],
        old_testament: ['Genesis 3:15', 'Deuteronomy 18:15–19', 'Psalm 2', 'Psalm 22', 'Isaiah 7:14', 'Isaiah 9:6–7', 'Isaiah 42:1–4', 'Isaiah 52:13–53:12', 'Daniel 7:13–14', 'Micah 5:2'],
      },
    },
    tappable_terms: ['Jesus Christ', 'Jesus of Nazareth', 'Jesus', 'Christ', 'Son of God', 'Holy One of God'],
  },
  {
    person: {
      id: 'mark-john-baptist', name: 'John the Baptist', alt_names: ['John', 'The Forerunner'], type: 'prophet',
      bio: 'The prophet who prepared Israel for the Messiah by preaching repentance and baptizing in the Jordan. He identified himself as unworthy before the coming One and later died as a martyr under Herod Antipas.',
      scripture_references: {
        mark: ['Mark 1:2–14', 'Mark 2:18', 'Mark 6:14–29', 'Mark 8:28', 'Mark 11:27–33'],
        other_gospels: ['Matthew 3:1–17; 11:2–19; 14:1–12', 'Luke 1:5–80; 3:1–22; 7:18–35; 9:7–9', 'John 1:6–36; 3:22–36; 5:33–36'],
        new_testament: ['Acts 1:5, 22', 'Acts 10:37', 'Acts 13:24–25', 'Acts 18:25', 'Acts 19:1–7'],
        old_testament: ['Isaiah 40:3', 'Malachi 3:1', 'Malachi 4:5–6'],
      },
    },
    tappable_terms: ['John the Baptist', 'John came baptizing', 'baptized by John'],
  },
  {
    person: {
      id: 'mark-peter', name: 'Simon Peter', alt_names: ['Simon', 'Peter', 'Cephas'], type: 'other',
      bio: 'A Galilean fisherman called by Jesus to become a fisher of men. Peter became one of the Twelve and a leading witness to Jesus’ ministry, Passion, and Resurrection.',
      scripture_references: {
        mark: ['Mark 1–3', 'Mark 5', 'Mark 8–11', 'Mark 13–14', 'Mark 16:7'],
        other_gospels: ['Matthew 4:18–20; 14:28–33; 16:13–23; 26:33–75', 'Luke 5:1–11; 22:31–62; 24:12, 34', 'John 1:40–42; 6:68–69; 13:6–10; 18:10–27; 21:1–23'],
        new_testament: ['Acts 1–12', 'Galatians 1:18; 2:7–14', '1 Peter 1–5', '2 Peter 1–3'],
      },
    },
    tappable_terms: ['Simon and Andrew', 'Simon’s', 'Simon and those'],
  },
  {
    person: {
      id: 'mark-andrew', name: 'Andrew', alt_names: ['Andrew the Apostle'], type: 'other',
      bio: 'Simon Peter’s brother and a Galilean fisherman. Jesus called him among the first disciples, and he became one of the Twelve.',
      scripture_references: { mark: ['Mark 1:16–18, 29', 'Mark 3:18', 'Mark 13:3'], other_gospels: ['Matthew 4:18–20; 10:2', 'Luke 6:14', 'John 1:35–44; 6:8–9; 12:20–22'], new_testament: ['Acts 1:13'] },
    },
    tappable_terms: ['Andrew'],
  },
  {
    person: {
      id: 'mark-james-zebedee', name: 'James, son of Zebedee', alt_names: ['James the Apostle'], type: 'other',
      bio: 'A fisherman called with his brother John. Jesus named the brothers Boanerges, “Sons of Thunder.” James belonged to the inner circle with Peter and John.',
      scripture_references: { mark: ['Mark 1:19–20, 29', 'Mark 3:17', 'Mark 5:37', 'Mark 9:2', 'Mark 10:35–41', 'Mark 13:3', 'Mark 14:33'], other_gospels: ['Matthew 4:21–22; 10:2; 17:1; 20:20–28', 'Luke 5:10–11; 6:14; 8:51; 9:28, 54'], new_testament: ['Acts 1:13', 'Acts 12:1–2'] },
    },
    tappable_terms: ['James the son of Zebedee', 'with James'],
  },
  {
    person: {
      id: 'mark-john-apostle', name: 'John the Apostle', alt_names: ['John, son of Zebedee', 'The Beloved Disciple'], type: 'other',
      bio: 'Brother of James and one of the Twelve. John belonged to Jesus’ inner circle and witnessed the raising of Jairus’ daughter, the Transfiguration, and Gethsemane.',
      scripture_references: { mark: ['Mark 1:19–20, 29', 'Mark 3:17', 'Mark 5:37', 'Mark 9:2, 38', 'Mark 10:35–41', 'Mark 13:3', 'Mark 14:33'], other_gospels: ['Matthew 4:21–22; 10:2; 17:1', 'Luke 5:10–11; 9:28, 49, 54', 'John 13:23–26; 19:25–27; 20:1–10; 21:1–24'], new_testament: ['Acts 1:13; 3:1–4:23; 8:14–25', 'Galatians 2:9', 'Revelation 1:1–11'] },
    },
    tappable_terms: ['John his brother'],
  },
  {
    person: {
      id: 'mark-zebedee', name: 'Zebedee', type: 'other',
      bio: 'A Galilean fisherman and the father of James and John. His sons left the family boat and hired servants when Jesus called them.',
      scripture_references: { mark: ['Mark 1:19–20', 'Mark 3:17', 'Mark 10:35'], other_gospels: ['Matthew 4:21–22; 10:2; 20:20', 'Luke 5:10', 'John 21:2'] },
    },
    tappable_terms: ['Zebedee'],
  },
  {
    person: {
      id: 'mark-moses', name: 'Moses', type: 'prophet',
      bio: 'The great prophet and lawgiver through whom God delivered Israel from Egypt and gave the covenant at Sinai. Jesus refers to Mosaic law throughout Mark.',
      scripture_references: { mark: ['Mark 1:44', 'Mark 7:10', 'Mark 9:4–5', 'Mark 10:3–5', 'Mark 12:19, 26'], other_gospels: ['Matthew 8:4; 17:3–4; 19:7–8; 22:24', 'Luke 2:22; 9:30–33; 16:29–31; 20:28, 37', 'John 1:17, 45; 3:14; 5:45–47; 6:32'], new_testament: ['Acts 3:22; 7:20–44', 'Romans 5:14; 9:15', 'Hebrews 3:1–6; 11:23–29'], old_testament: ['Exodus 2–Deuteronomy 34'] },
    },
    tappable_terms: ['Moses'],
  },
  {
    person: {
      id: 'mark-satan', name: 'Satan', alt_names: ['The Adversary'], type: 'other',
      bio: 'The spiritual adversary who tempts Jesus in the wilderness and opposes God’s kingdom. Jesus defeats his work through obedience, teaching, healing, exorcism, the Cross, and Resurrection.',
      scripture_references: { mark: ['Mark 1:13', 'Mark 3:23–27', 'Mark 4:15', 'Mark 8:33'], other_gospels: ['Matthew 4:1–11; 12:26; 16:23', 'Luke 4:1–13; 10:18; 22:3, 31', 'John 13:27'], new_testament: ['Acts 5:3; 26:18', 'Romans 16:20', '2 Corinthians 11:14', '1 Peter 5:8', 'Revelation 12:9; 20:1–10'], old_testament: ['Genesis 3:1–15', 'Job 1–2', 'Zechariah 3:1–2'] },
    },
    tappable_terms: ['Satan'],
  },
]

const places: TappablePlace[] = [
  { place: { id: 'mark-wilderness', ancient_name: 'Wilderness of Judea', modern_name: 'Judean Desert, Israel/West Bank', lat: 31.72, lng: 35.38, significance: 'John preached and baptized in the wilderness, and Jesus was tempted there.', ancient_description: 'An arid region east of Jerusalem descending toward the Jordan Valley and Dead Sea. In Scripture the wilderness is a place of testing, preparation, dependence, and encounter with God.', modern_description: 'Today this rugged desert includes protected landscapes, monasteries, archaeological sites, and communities between Jerusalem and the Dead Sea.', mark_chapters: [1, 8], bible_references: ['Exodus 16–17', 'Isaiah 40:3', 'Matthew 3:1–4:11', 'Luke 3:2–4:13'] }, tappable_terms: ['wilderness'], map_focus: true },
  { place: { id: 'mark-judea', ancient_name: 'Judea', modern_name: 'Central and southern Israel/West Bank', lat: 31.78, lng: 35.21, significance: 'The southern Jewish region centered on Jerusalem.', ancient_description: 'Judea was governed by Rome in the first century and included Jerusalem and the surrounding hill country.', modern_description: 'The historical region overlaps parts of modern Israel and the West Bank.', mark_chapters: [1, 3, 10, 13], bible_references: ['Matthew 2:1', 'Luke 1:5', 'John 3:22', 'Acts 1:8'] }, tappable_terms: ['Judea'] },
  { place: { id: 'mark-jerusalem', ancient_name: 'Jerusalem', modern_name: 'Jerusalem', lat: 31.7683, lng: 35.2137, significance: 'The holy city and location of the Temple, Jesus’ Passion, and Resurrection.', ancient_description: 'Jerusalem was the religious center of Jewish life. Pilgrims came to the Temple, and Roman authority was strongly present during major feasts.', modern_description: 'Jerusalem remains a major city sacred to Jews, Christians, and Muslims.', mark_chapters: [1, 3, 7, 10, 11, 12, 13, 14, 15, 16], bible_references: ['2 Samuel 5:6–10', 'Psalm 122', 'Matthew 21–28', 'Luke 19–24', 'Acts 1–7'] }, tappable_terms: ['Jerusalem'] },
  { place: { id: 'mark-jordan', ancient_name: 'Jordan River', modern_name: 'Jordan River, Israel/Jordan/West Bank', lat: 32.0, lng: 35.56, significance: 'The river where John baptized and where Jesus’ baptism revealed the Father, Son, and Holy Spirit.', ancient_description: 'The Jordan runs from the Sea of Galilee to the Dead Sea and marked an important boundary in Israel’s history.', modern_description: 'The river continues to flow along portions of the borders between Israel, Jordan, and the West Bank, though its volume is much reduced.', mark_chapters: [1], bible_references: ['Joshua 3–4', '2 Kings 2:6–14', 'Matthew 3:5–17', 'Luke 3:3–22', 'John 1:28–34'] }, tappable_terms: ['Jordan River', 'Jordan'] },
  { place: { id: 'mark-nazareth', ancient_name: 'Nazareth', modern_name: 'Nazareth, Israel', lat: 32.6996, lng: 35.3035, significance: 'Jesus’ hometown in Galilee.', ancient_description: 'Nazareth was a small Jewish village in lower Galilee. Jesus grew up there and was widely known as Jesus of Nazareth.', modern_description: 'Nazareth is now a large city in northern Israel with major Christian pilgrimage sites.', mark_chapters: [1, 6, 10, 14, 16], bible_references: ['Matthew 2:23', 'Luke 1:26; 2:39–51; 4:16–30', 'John 1:45–46', 'Acts 10:38'] }, tappable_terms: ['Nazareth'] },
  { place: { id: 'mark-galilee', ancient_name: 'Galilee', modern_name: 'Northern Israel', lat: 32.75, lng: 35.5, significance: 'The principal region of Jesus’ early ministry in Mark.', ancient_description: 'Galilee was a fertile northern region ruled by Herod Antipas. Its towns, villages, lake, fishing trade, and roads form the setting for much of Jesus’ ministry.', modern_description: 'Galilee remains a distinct geographic region of northern Israel surrounding the Sea of Galilee.', mark_chapters: [1, 3, 6, 7, 9, 14, 16], bible_references: ['Isaiah 9:1–2', 'Matthew 4:12–25', 'Luke 4:14–44', 'John 2:1–12; 4:43–54'] }, tappable_terms: ['Galilee'] },
  { place: { id: 'mark-sea-galilee', ancient_name: 'Sea of Galilee', modern_name: 'Lake Kinneret, Israel', lat: 32.82, lng: 35.59, significance: 'The freshwater lake around which Jesus called disciples, taught crowds, calmed storms, and performed miracles.', ancient_description: 'Fishing towns ringed this lake in first-century Galilee. Sudden storms could sweep down from the surrounding heights.', modern_description: 'Known in Israel as Lake Kinneret, it remains the country’s largest freshwater lake and a major pilgrimage and recreation area.', mark_chapters: [1, 2, 3, 4, 5, 6, 7, 8], bible_references: ['Matthew 4:18; 8:23–27; 14:22–33', 'Luke 5:1–11; 8:22–25', 'John 6:1–21; 21:1–14'] }, tappable_terms: ['Sea of Galilee', 'sea'] },
  { place: { id: 'mark-capernaum', ancient_name: 'Capernaum', modern_name: 'Kfar Nahum archaeological site, Israel', lat: 32.8803, lng: 35.5733, significance: 'A center of Jesus’ Galilean ministry and the setting of many teachings and healings.', ancient_description: 'A fishing village on the northwestern shore of the Sea of Galilee, situated near an important route and customs station.', modern_description: 'The archaeological site preserves remains of an ancient synagogue and a church built over a house traditionally associated with Peter.', mark_chapters: [1, 2, 9], bible_references: ['Matthew 4:13; 8:5–17; 9:1–8; 11:23', 'Luke 4:31–41; 7:1–10', 'John 6:17–71'] }, tappable_terms: ['Capernaum'] },
]

export function getMarkStudyData(chapter: number) {
  const source = markSource.chapters.find(item => item.chapter === chapter)
  if (!source) return { people: [], places: [] }
  const text = source.verses.map(verse => verse.text).join(' ')
  const occurs = (term: string) => new RegExp(`(^|[^A-Za-z])${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}([^A-Za-z]|$)`, 'i').test(text)
  const chapterPeople = [...people, ...additionalMarkPeople].filter(item =>
    (!item.person.mark_chapters || item.person.mark_chapters.includes(chapter)) && item.tappable_terms.some(occurs)
  )
  const chapterPlaces = [...places, ...additionalMarkPlaces].filter(item => item.tappable_terms.some(occurs))
  return { people: chapterPeople, places: chapterPlaces }
}
