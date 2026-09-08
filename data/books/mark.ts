import { markIntroduction } from '../mark-orthodox-notes'
import type { BookGuide } from './types'

export const markGuide: BookGuide = {
  slug: 'mark',
  title: 'The Gospel of Mark',
  shortTitle: 'Mark',
  translationLabel: 'NKJV · Orthodox Study Bible',
  testament: 'New Testament',
  tagline: markIntroduction.majorTheme,
  phases: [],
  spineChapters: [
    { ref: 'Mark 1', href: '/study/mark/1', title: 'The beginning of the gospel', reason: 'John prepares the way; Jesus is baptized, tempted, calls disciples, teaches, heals, and casts out an unclean spirit.' },
    { ref: 'Mark 4', href: '/study/mark/4', title: 'Parables and authority', reason: 'The sower, the growing seed, the mustard seed, and the wind and wave obeying Jesus.' },
    { ref: 'Mark 8', href: '/study/mark/8', title: 'Confession and the cross', reason: 'Peter confesses Jesus as the Christ; Jesus predicts His death and calls followers to take up the cross.' },
    { ref: 'Mark 10', href: '/study/mark/10', title: 'Greatness is serving', reason: 'Jesus teaches about discipleship, service, and giving His life, then heals blind Bartimaeus.' },
    { ref: 'Mark 14', href: '/study/mark/14', title: 'Passover and Gethsemane', reason: 'The Lord’s Supper, prayer in the garden, betrayal, arrest, the Sanhedrin, and Peter’s denial.' },
    { ref: 'Mark 16', href: '/study/mark/16', title: 'He is risen', reason: 'The Resurrection, appearances to the disciples, the Great Commission, and the Ascension.' },
  ],
  guide: [
    { label: 'Introduction', preview: 'Author and date', body: { kind: 'text', paragraphs: [markIntroduction.author, markIntroduction.date] } },
    { label: 'Major Theme', preview: markIntroduction.majorTheme, body: { kind: 'text', paragraphs: [markIntroduction.majorTheme] } },
    { label: 'Subthemes', preview: 'Suffering Messiah · Messianic secret · Discipleship', body: { kind: 'text', paragraphs: markIntroduction.subthemes } },
    { label: 'Background', preview: 'Mark’s first readers', body: { kind: 'text', paragraphs: [markIntroduction.background, markIntroduction.endingNote] } },
    { label: 'If You Only Read Six Chapters', preview: 'A spine drawn from the chapter headings', body: { kind: 'spine' } },
  ],
  tools: [
    { href: '/resources/mark', label: 'Teacher resources' },
    { href: '/flashcards', label: 'Flashcards' },
    { href: '/notes', label: 'My Notes' },
  ],
}
