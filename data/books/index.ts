import { firstKingsGuide } from './1-kings'
import { secondKingsGuide } from './2-kings'
import { markGuide } from './mark'
import type { BookGuide } from './types'

export type { BookGuide } from './types'

const guides: Record<string, BookGuide> = {
  '1-kings': firstKingsGuide,
  '2-kings': secondKingsGuide,
  mark: markGuide,
}

export function getBookGuide(slug: string, title = titleFromSlug(slug), chapterCount = 0): BookGuide {
  return guides[slug] ?? {
    slug, title, shortTitle: title, translationLabel: '', testament: '',
    tagline: `${chapterCount} chapter${chapterCount === 1 ? '' : 's'} available to read and study.`,
    phases: [], spineChapters: [], guide: [], tools: [],
  }
}

function titleFromSlug(slug: string) {
  return slug.split('-').map(word => word ? word[0].toUpperCase() + word.slice(1) : word).join(' ')
}
