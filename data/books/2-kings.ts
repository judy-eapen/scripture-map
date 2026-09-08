import type { BookGuide } from './types'
import { kingsSharedGuide } from './1-kings'

export const secondKingsGuide: BookGuide = {
  slug: '2-kings', title: '2 Kings', shortTitle: '2 Kings', ...kingsSharedGuide,
}
