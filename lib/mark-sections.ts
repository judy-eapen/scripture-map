type MarkSection = { start: number; end: number; title: string }

const MARK_SECTIONS: Record<number, MarkSection[]> = {
  1: [{ start: 1, end: 13, title: 'John, Jesus’ baptism, and temptation' }, { start: 14, end: 20, title: 'The kingdom and the first disciples' }, { start: 21, end: 39, title: 'Teaching and healing in Capernaum' }, { start: 40, end: 45, title: 'Jesus cleanses a leper' }],
  2: [{ start: 1, end: 12, title: 'The paralytic and forgiveness' }, { start: 13, end: 17, title: 'The call of Levi' }, { start: 18, end: 22, title: 'Fasting and the new covenant' }, { start: 23, end: 28, title: 'Lord of the Sabbath' }],
  3: [{ start: 1, end: 6, title: 'Healing on the Sabbath' }, { start: 7, end: 19, title: 'Crowds and the Twelve' }, { start: 20, end: 30, title: 'A divided kingdom and the unforgivable sin' }, { start: 31, end: 35, title: 'Jesus’ true family' }],
  4: [{ start: 1, end: 20, title: 'The parable of the sower' }, { start: 21, end: 34, title: 'Lamp, seed, and mustard seed' }, { start: 35, end: 41, title: 'Jesus calms the storm' }],
  5: [{ start: 1, end: 20, title: 'The Gerasene demoniac' }, { start: 21, end: 34, title: 'The woman healed by faith' }, { start: 35, end: 43, title: 'Jairus’ daughter raised' }],
  6: [{ start: 1, end: 13, title: 'Rejection at Nazareth and mission of the Twelve' }, { start: 14, end: 29, title: 'Herod and the death of John' }, { start: 30, end: 44, title: 'Feeding the five thousand' }, { start: 45, end: 56, title: 'Walking on water and healings' }],
  7: [{ start: 1, end: 23, title: 'Tradition and purity of heart' }, { start: 24, end: 30, title: 'The Syrophoenician woman' }, { start: 31, end: 37, title: 'Healing the deaf man' }],
  8: [{ start: 1, end: 21, title: 'Feeding four thousand and the disciples’ blindness' }, { start: 22, end: 26, title: 'Healing at Bethsaida' }, { start: 27, end: 33, title: 'Peter’s confession and rebuke' }, { start: 34, end: 38, title: 'The cost of discipleship' }],
  9: [{ start: 1, end: 13, title: 'The Transfiguration and Elijah' }, { start: 14, end: 29, title: 'Deliverance of a suffering boy' }, { start: 30, end: 37, title: 'The Passion prediction and true greatness' }, { start: 38, end: 50, title: 'Belonging, stumbling, and salt' }],
  10: [{ start: 1, end: 16, title: 'Marriage and welcoming children' }, { start: 17, end: 31, title: 'The rich man and the kingdom' }, { start: 32, end: 45, title: 'The Passion and servant leadership' }, { start: 46, end: 52, title: 'Blind Bartimaeus' }],
  11: [{ start: 1, end: 11, title: 'The entry into Jerusalem' }, { start: 12, end: 26, title: 'Fig tree, temple, and faithful prayer' }, { start: 27, end: 33, title: 'Jesus’ authority challenged' }],
  12: [{ start: 1, end: 12, title: 'The wicked tenants' }, { start: 13, end: 27, title: 'Caesar and the resurrection' }, { start: 28, end: 34, title: 'The greatest commandments' }, { start: 35, end: 44, title: 'David’s Son, the scribes, and the widow' }],
  13: [{ start: 1, end: 13, title: 'Temple prophecy and coming trials' }, { start: 14, end: 27, title: 'Tribulation and the coming of the Son of Man' }, { start: 28, end: 37, title: 'The fig tree and watchfulness' }],
  14: [{ start: 1, end: 11, title: 'Anointing and betrayal' }, { start: 12, end: 31, title: 'Passover and the Last Supper' }, { start: 32, end: 52, title: 'Gethsemane and arrest' }, { start: 53, end: 72, title: 'Trial and Peter’s denial' }],
  15: [{ start: 1, end: 20, title: 'Jesus before Pilate' }, { start: 21, end: 32, title: 'The Crucifixion' }, { start: 33, end: 41, title: 'Jesus’ death' }, { start: 42, end: 47, title: 'Jesus’ burial' }],
  16: [{ start: 1, end: 8, title: 'The empty tomb' }, { start: 9, end: 14, title: 'Resurrection appearances' }, { start: 15, end: 20, title: 'Commission and Ascension' }],
}

export function markSectionForVerse(chapter: number, verse: number | null) {
  if (!verse) return 'Whole chapter review'
  return MARK_SECTIONS[chapter]?.find(section => verse >= section.start && verse <= section.end)?.title ?? 'Whole chapter review'
}
