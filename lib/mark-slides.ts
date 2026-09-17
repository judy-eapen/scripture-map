import { MARK_6_LESSON, type MarkLessonSlide } from '../data/mark-6-lesson'
import { MARK_LESSONS_7_16 } from '../data/mark-lessons-7-16'

export type MarkImageDeck = {
  kind: 'images'
  chapter: number
  title: string
  pages: number
  file: string
  paddedImages: boolean
}

export type MarkLessonDeck = {
  kind: 'lesson'
  chapter: number
  title: string
  pages: number
  slides: MarkLessonSlide[]
}

export type MarkSlideDeck = MarkImageDeck | MarkLessonDeck

export const MARK_SLIDE_DECKS: MarkSlideDeck[] = [
  { kind: 'images', chapter: 1, title: 'Prepare the Way', pages: 19, file: '/resources/mark/mark-chapter-1-teacher-slides.pdf', paddedImages: true },
  { kind: 'images', chapter: 2, title: 'Jesus Meets People Where They Are', pages: 9, file: '/resources/mark/mark-chapter-2-teacher-slides.pdf', paddedImages: false },
  { kind: 'images', chapter: 3, title: 'Courage, Compassion & Calling', pages: 8, file: '/resources/mark/mark-chapter-3-teacher-slides.pdf', paddedImages: false },
  { kind: 'images', chapter: 4, title: 'Listen. Grow. Shine. Trust.', pages: 11, file: '/resources/mark/mark-chapter-4-teacher-slides.pdf', paddedImages: true },
  { kind: 'images', chapter: 5, title: 'Jesus Brings Peace, Healing & Life', pages: 9, file: '/resources/mark/mark-chapter-5-teacher-slides.pdf', paddedImages: false },
  { kind: 'lesson', chapter: 6, title: 'Recognizing Jesus', pages: MARK_6_LESSON.length, slides: MARK_6_LESSON },
  ...Object.entries(MARK_LESSONS_7_16).map(([chapter, slides]) => ({
    kind: 'lesson' as const,
    chapter: Number(chapter),
    title: ({ 7: 'The Heart and the Boundaries', 8: 'Seeing Jesus Clearly', 9: 'Listen, Believe, Serve', 10: 'The Servant King’s Road', 11: 'The King and His House', 12: 'Love, Loyalty, and True Giving', 13: 'Watch and Endure', 14: 'Covenant, Prayer, and Betrayal', 15: 'The Crucified King', 16: 'He Is Risen' } as Record<number, string>)[Number(chapter)],
    pages: slides.length,
    slides,
  })),
]

export function markSlideDeck(chapter: number) {
  return MARK_SLIDE_DECKS.find(deck => deck.chapter === chapter)
}

export function markSlideImage(deck: MarkImageDeck, slide: number) {
  const number = deck.paddedImages ? String(slide).padStart(2, '0') : String(slide)
  return `/resources/mark/chapter-${deck.chapter}/slide-${number}.jpg`
}
