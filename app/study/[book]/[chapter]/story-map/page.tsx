import { notFound } from 'next/navigation'
import Link from 'next/link'
import StoryMap from '@/components/StoryMap'

export default async function StoryMapPage({
  params,
}: {
  params: Promise<{ book: string; chapter: string }>
}) {
  const { book, chapter } = await params
  const chapterNum = parseInt(chapter, 10)

  // Prototype: only 1 Kings 18 has data
  const isPrototype = book === '1-kings' && chapterNum === 18
  if (!isPrototype) notFound()

  return (
    <div style={{ background: 'var(--navy-950)', minHeight: '100vh' }}>
      {/* Back nav */}
      <div className="sticky top-0 z-10 flex items-center gap-3 px-4 py-3 border-b"
        style={{ background: 'rgba(12,18,32,0.95)', borderColor: 'rgba(45,58,85,0.5)', backdropFilter: 'blur(8px)' }}>
        <Link href={`/study/${book}/${chapter}`}
          className="flex items-center gap-1.5 text-xs font-medium transition-colors hover:opacity-80"
          style={{ color: 'var(--muted-400)' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M12 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to chapter
        </Link>
        <span style={{ color: 'var(--navy-600)' }}>·</span>
        <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--gold-400)' }}>
          Story Map — Prototype
        </span>
      </div>

      <StoryMap />
    </div>
  )
}
