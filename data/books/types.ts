export type BookPhase = { title: string; range: string; href: string; desc: string }
export type SpineChapter = { ref: string; href: string; title: string; reason: string }
export type GuideBody =
  | { kind: 'text'; paragraphs: string[] }
  | { kind: 'phases' }
  | { kind: 'spine' }
  | { kind: 'concepts'; items: { title: string; subtitle: string; body: string }[] }

export type BookGuide = {
  slug: string
  title: string
  shortTitle: string
  translationLabel: string
  testament: 'Old Testament' | 'New Testament' | ''
  tagline: string
  phases: BookPhase[]
  spineChapters: SpineChapter[]
  guide: { label: string; preview: string; body: GuideBody }[]
  tools: { href: string; label: string }[]
}
