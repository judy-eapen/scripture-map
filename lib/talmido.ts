import type curriculum from '@/data/talmido-grade-6.json'
export type TalmidoLesson = typeof curriculum.lessons[number]
export const TALMIDO_PDF = '/talmido/grade-6/curriculum.pdf'
export const TALMIDO_FOCUS = [6, 7, 8, 9, 10]
export function talmidoPageImage(page: number) { return `/talmido/grade-6/page-${String(page).padStart(3, '0')}.webp` }
export function talmidoPageNumber(requested: string | undefined, lesson: TalmidoLesson) {
  const page = Number(requested)
  return Number.isInteger(page) ? Math.max(lesson.startPage, Math.min(lesson.endPage, page)) : lesson.startPage
}
export function restoreTalmidoProgress(raw: string | null): number[] {
  if (!raw) return []
  const parsed: unknown = JSON.parse(raw)
  if (!Array.isArray(parsed) || !parsed.every(n => Number.isInteger(n) && n >= 1 && n <= 16)) throw new Error('Invalid progress')
  return [...new Set(parsed)]
}
