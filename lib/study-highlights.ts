export const HIGHLIGHT_COLORS = {
  yellow: '#f5dc7b',
  green: '#9cddb6',
  pink: '#edb6d3',
  blue: '#a9cff5',
  purple: '#cbb5ee',
  orange: '#f5bd8c',
  teal: '#92dcd6',
} as const
export type StudyHighlight = { start: number; end: number; quote: string; color: keyof typeof HIGHLIGHT_COLORS }
export function restoreHighlights(raw: string | null, text: string): StudyHighlight[] {
  if (!raw) return []
  const value: unknown = JSON.parse(raw)
  if (!Array.isArray(value)) throw new Error('Invalid highlights')
  return value.filter((h): h is StudyHighlight => !!h && typeof h === 'object' && Number.isInteger(h.start) && Number.isInteger(h.end) && h.start >= 0 && h.end > h.start && h.end <= text.length && Object.hasOwn(HIGHLIGHT_COLORS,h.color) && text.slice(h.start,h.end) === h.quote)
}
export function addHighlight(existing: StudyHighlight[], next: StudyHighlight): StudyHighlight[] {
  // Replace the selected region, preserving either side of an older highlight.
  return [...existing.flatMap(h => {
    if (h.end <= next.start || h.start >= next.end) return [h]
    const pieces: StudyHighlight[] = []
    if (h.start < next.start) pieces.push({...h,end:next.start,quote:h.quote.slice(0,next.start-h.start)})
    if (h.end > next.end) pieces.push({...h,start:next.end,quote:h.quote.slice(next.end-h.start)})
    return pieces
  }),next].sort((a,b)=>a.start-b.start)
}
