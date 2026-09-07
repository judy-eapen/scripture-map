import Link from 'next/link'
import Image from 'next/image'
import ChapterNav from '@/components/ChapterNav'
import { createClient } from '@/lib/supabase/server'
import { defaultNavData, getNavChapters } from '@/lib/db'

const decks = [
  { chapter: 1, title: 'Prepare the Way', pages: 19, file: '/resources/mark/mark-chapter-1-teacher-slides.pdf' },
  { chapter: 2, title: 'Jesus Meets People Where They Are', pages: 9, file: '/resources/mark/mark-chapter-2-teacher-slides.pdf' },
  { chapter: 3, title: 'Courage, Compassion & Calling', pages: 8, file: '/resources/mark/mark-chapter-3-teacher-slides.pdf' },
  { chapter: 4, title: 'Listen. Grow. Shine. Trust.', pages: 11, file: '/resources/mark/mark-chapter-4-teacher-slides.pdf' },
  { chapter: 5, title: 'Jesus Brings Peace, Healing & Life', pages: 9, file: '/resources/mark/mark-chapter-5-teacher-slides.pdf' },
]

export default async function MarkResourcesPage({ searchParams }: { searchParams: Promise<{ chapter?: string; slide?: string }> }) {
  const params = await searchParams
  const requested = Number(params.chapter ?? 1)
  const selected = decks.find(deck => deck.chapter === requested) ?? decks[0]
  const slide = Math.max(1, Math.min(selected.pages, Number(params.slide ?? 1) || 1))
  const slideNumber = String(slide).padStart(2, '0')
  const slideImage = `/resources/mark/chapter-${selected.chapter}/slide-${slideNumber}.jpg`
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const navData = user ? await getNavChapters(user.id) : defaultNavData()

  return (
    <div className="flex h-screen-safe overflow-hidden" style={{ background: 'var(--navy-950)' }}>
      <div className="hidden md:block shrink-0">
        <ChapterNav currentBook="Mark" currentChapter={selected.chapter} navData={navData} isAuthenticated={!!user} />
      </div>
      <main className="flex-1 min-w-0 overflow-y-auto p-4 md:p-7">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--gold-400)' }}>Mark resources</p>
              <h1 className="text-3xl font-medium" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--ivory-100)' }}>Teacher Slide Decks</h1>
              <p className="text-sm mt-2" style={{ color: 'var(--muted-400)' }}>Original teacher-provided slides, preserved without rewriting.</p>
            </div>
            <a href={selected.file} target="_blank" rel="noreferrer" className="rounded-xl px-4 py-2 text-sm font-medium"
              style={{ color: 'var(--gold-300)', border: '1px solid rgba(201,168,76,0.25)', background: 'rgba(201,168,76,0.07)' }}>
              Open full screen
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-5">
            {decks.map(deck => {
              const active = deck.chapter === selected.chapter
              return (
                <Link key={deck.chapter} href={`/resources/mark?chapter=${deck.chapter}&slide=1`}
                  className="rounded-xl p-3 transition-colors"
                  style={{ background: active ? 'rgba(201,168,76,0.12)' : 'var(--navy-800)', border: `1px solid ${active ? 'rgba(201,168,76,0.35)' : 'rgba(255,255,255,0.06)'}` }}>
                  <p className="text-xs font-semibold" style={{ color: active ? 'var(--gold-300)' : 'var(--muted-400)' }}>MARK {deck.chapter}</p>
                  <p className="text-sm mt-1 leading-snug" style={{ color: 'var(--ivory-100)' }}>{deck.title}</p>
                  <p className="text-xs mt-2" style={{ color: 'var(--muted-500)' }}>{deck.pages} slides</p>
                </Link>
              )
            })}
          </div>

          <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(201,168,76,0.16)', background: 'var(--navy-900)' }}>
            <div className="px-4 py-3 flex flex-wrap items-center justify-between gap-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <div>
                <span className="text-sm font-medium" style={{ color: 'var(--ivory-100)' }}>Mark {selected.chapter}: {selected.title}</span>
                <span className="text-xs ml-3" style={{ color: 'var(--muted-500)' }}>Slide {slide} of {selected.pages}</span>
              </div>
              <div className="flex items-center gap-2">
                {slide > 1 && <Link aria-label="Previous slide" href={`/resources/mark?chapter=${selected.chapter}&slide=${slide - 1}`} className="rounded-lg px-3 py-1.5 text-xs" style={{ color: 'var(--ivory-200)', background: 'rgba(255,255,255,0.05)' }}>← Previous</Link>}
                {slide < selected.pages && <Link aria-label="Next slide" href={`/resources/mark?chapter=${selected.chapter}&slide=${slide + 1}`} className="rounded-lg px-3 py-1.5 text-xs" style={{ color: 'var(--ivory-200)', background: 'rgba(255,255,255,0.05)' }}>Next →</Link>}
                <Link href={`/study/mark/${selected.chapter}`} className="text-xs ml-1" style={{ color: 'var(--gold-300)' }}>Study chapter →</Link>
              </div>
            </div>
            <div className="flex items-center justify-center p-2 md:p-4" style={{ background: '#090e1c' }}>
              <Image src={slideImage} alt={`Mark ${selected.chapter} teacher slide ${slide}`} width={1600} height={900} priority className="block w-full h-auto rounded-lg" />
            </div>
            <div className="flex gap-1.5 overflow-x-auto px-3 py-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              {Array.from({ length: selected.pages }, (_, index) => index + 1).map(number => (
                <Link key={number} href={`/resources/mark?chapter=${selected.chapter}&slide=${number}`}
                  className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs"
                  style={{ color: number === slide ? 'var(--navy-950)' : 'var(--muted-400)', background: number === slide ? 'var(--gold-400)' : 'rgba(255,255,255,0.05)' }}>
                  {number}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
