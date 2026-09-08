export type MarkSlideDeck = {
  chapter: number
  title: string
  pages: number
  file: string
  paddedImages: boolean
}

export const MARK_SLIDE_DECKS: MarkSlideDeck[] = [
  { chapter: 1, title: 'Prepare the Way', pages: 19, file: '/resources/mark/mark-chapter-1-teacher-slides.pdf', paddedImages: true },
  { chapter: 2, title: 'Jesus Meets People Where They Are', pages: 9, file: '/resources/mark/mark-chapter-2-teacher-slides.pdf', paddedImages: false },
  { chapter: 3, title: 'Courage, Compassion & Calling', pages: 8, file: '/resources/mark/mark-chapter-3-teacher-slides.pdf', paddedImages: false },
  { chapter: 4, title: 'Listen. Grow. Shine. Trust.', pages: 11, file: '/resources/mark/mark-chapter-4-teacher-slides.pdf', paddedImages: true },
  { chapter: 5, title: 'Jesus Brings Peace, Healing & Life', pages: 9, file: '/resources/mark/mark-chapter-5-teacher-slides.pdf', paddedImages: false },
]

export function markSlideDeck(chapter: number) {
  return MARK_SLIDE_DECKS.find(deck => deck.chapter === chapter)
}

export function markSlideImage(deck: MarkSlideDeck, slide: number) {
  const number = deck.paddedImages ? String(slide).padStart(2, '0') : String(slide)
  return `/resources/mark/chapter-${deck.chapter}/slide-${number}.jpg`
}
