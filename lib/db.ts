import { createClient } from '@/lib/supabase/server'
import type {
  ChapterData,
  TappablePerson,
  TappablePlace,
  ArchaeologicalEvidence,
  NeighboringNation,
  NavChapter,
  TimelineKing,
  QuizQuestion,
  DifficultPassage,
  GenealogyNode,
  GenealogyEdge,
  PersonAppearance,
  VerseNote,
} from './types'

// Get full chapter data for the chapter study page
// bookSlug: '1-kings' or '2-kings'
// chapterNum: 1-22 (1 Kings) or 1-25 (2 Kings)
// Returns null if not found
export async function getChapterData(
  bookSlug: string,
  chapterNum: number
): Promise<ChapterData | null> {
  const supabase = await createClient()

  const bookName = bookSlug === '1-kings' ? '1 Kings' : '2 Kings'

  // Get book
  const { data: book, error: bookError } = await supabase
    .from('books')
    .select('id, name')
    .eq('name', bookName)
    .single()

  if (bookError || !book) return null

  // Get chapter
  const { data: chapter, error: chapterError } = await supabase
    .from('chapters')
    .select('id, chapter_number, summary, year_start_bc, year_end_bc, verses')
    .eq('book_id', book.id)
    .eq('chapter_number', chapterNum)
    .single()

  if (chapterError || !chapter) return null

  // Fetch related data in parallel
  const [peopleResult, placesResult, evidenceResult, nationsResult, passagesResult, quizCountResult, genealogyPersonIdsResult] =
    await Promise.allSettled([
      supabase
        .from('chapter_people')
        .select('tappable_terms, people(*)')
        .eq('chapter_id', chapter.id),
      supabase
        .from('chapter_places')
        .select('tappable_terms, map_focus, places(*)')
        .eq('chapter_id', chapter.id),
      supabase
        .from('chapter_archaeological_evidence')
        .select('relevance_note, archaeological_evidence(*)')
        .eq('chapter_id', chapter.id),
      supabase
        .from('chapter_nations')
        .select('context_note, neighboring_nations(id, name, color_hex, key_rulers)')
        .eq('chapter_id', chapter.id),
      supabase
        .from('difficult_passages')
        .select('id, verse_start, verse_end, topic, plain_language, theological_context')
        .eq('chapter_id', chapter.id)
        .order('verse_start'),
      supabase
        .from('quiz_questions')
        .select('id', { count: 'exact', head: true })
        .eq('chapter_id', chapter.id),
      supabase
        .from('genealogy_nodes')
        .select('person_id'),
    ])

  type PeopleRow = { tappable_terms: string[]; people: { id: string; name: string; alt_names?: string[]; type: 'king' | 'prophet' | 'official' | 'foreign_ruler' | 'other'; kingdom?: 'north' | 'south' | 'foreign'; reign_start_bc?: number; reign_end_bc?: number; dates_approximate?: boolean; verdict?: 'good' | 'evil' | 'mixed'; bio: string; contemporary_events?: string; image_url?: string } }
  type PlacesRow = { tappable_terms: string[]; map_focus?: boolean; places: { id: string; ancient_name: string; modern_name: string; lat: number; lng: number; significance?: string; ancient_description: string; modern_description: string; image_url?: string } }
  type EvidenceRow = { relevance_note: string; archaeological_evidence: { id: string; name: string; artifact_type: string; date_bc: number; description: string; museum_location?: string } }
  type NationsRow = { context_note: string; neighboring_nations: { id: string; name: string; color_hex: string; key_rulers: { name: string; years: string; note: string }[] } }

  // Build set of person_ids in genealogy_nodes
  const genealogyPersonIds = new Set<string>(
    genealogyPersonIdsResult.status === 'fulfilled' && genealogyPersonIdsResult.value.data
      ? (genealogyPersonIdsResult.value.data as { person_id: string }[]).map(r => r.person_id)
      : []
  )

  // Map people
  const people: TappablePerson[] =
    peopleResult.status === 'fulfilled' && peopleResult.value.data
      ? (peopleResult.value.data as unknown as PeopleRow[]).map(row => ({
          person: {
            id: row.people.id,
            name: row.people.name,
            alt_names: row.people.alt_names,
            type: row.people.type,
            kingdom: row.people.kingdom,
            reign_start_bc: row.people.reign_start_bc,
            reign_end_bc: row.people.reign_end_bc,
            dates_approximate: row.people.dates_approximate,
            verdict: row.people.verdict,
            bio: row.people.bio,
            contemporary_events: row.people.contemporary_events,
            image_url: row.people.image_url,
            hasGenealogyNode: genealogyPersonIds.has(row.people.id),
          },
          tappable_terms: row.tappable_terms,
        }))
      : []

  // Map places
  const places: TappablePlace[] =
    placesResult.status === 'fulfilled' && placesResult.value.data
      ? (placesResult.value.data as unknown as PlacesRow[]).map(row => ({
          place: {
            id: row.places.id,
            ancient_name: row.places.ancient_name,
            modern_name: row.places.modern_name,
            lat: row.places.lat,
            lng: row.places.lng,
            significance: row.places.significance,
            ancient_description: row.places.ancient_description,
            modern_description: row.places.modern_description,
            image_url: row.places.image_url,
          },
          tappable_terms: row.tappable_terms,
          map_focus: row.map_focus,
        }))
      : []

  // Map archaeological evidence
  const evidence: ArchaeologicalEvidence[] =
    evidenceResult.status === 'fulfilled' && evidenceResult.value.data
      ? (evidenceResult.value.data as unknown as EvidenceRow[]).map(row => ({
          id: row.archaeological_evidence.id,
          name: row.archaeological_evidence.name,
          artifact_type: row.archaeological_evidence.artifact_type,
          date_bc: row.archaeological_evidence.date_bc,
          description: row.archaeological_evidence.description,
          museum_location: row.archaeological_evidence.museum_location,
          relevance_note: row.relevance_note,
        }))
      : []

  // Map nations
  const nations: NeighboringNation[] =
    nationsResult.status === 'fulfilled' && nationsResult.value.data
      ? (nationsResult.value.data as unknown as NationsRow[]).map(row => ({
          id: row.neighboring_nations.id,
          name: row.neighboring_nations.name,
          color: row.neighboring_nations.color_hex,
          context_note: row.context_note,
          key_rulers: row.neighboring_nations.key_rulers,
        }))
      : []

  // Map difficult passages
  const difficultPassages: DifficultPassage[] =
    passagesResult.status === 'fulfilled' && passagesResult.value.data
      ? (passagesResult.value.data as DifficultPassage[])
      : []

  const quizCount =
    quizCountResult.status === 'fulfilled'
      ? (quizCountResult.value.count ?? 0)
      : 0

  return {
    id: chapter.id,
    book: book.name as '1 Kings' | '2 Kings',
    book_slug: bookSlug as '1-kings' | '2-kings',
    chapter_number: chapter.chapter_number,
    summary: chapter.summary,
    year_start_bc: chapter.year_start_bc,
    year_end_bc: chapter.year_end_bc,
    verses: chapter.verses,
    people,
    places,
    evidence,
    nations,
    difficultPassages,
    quizCount,
    quizBestScore: null,
  }
}

// Get quiz questions for a chapter (random order, up to 10)
export async function getQuizQuestions(chapterId: string): Promise<QuizQuestion[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('quiz_questions')
    .select('id, question, options, correct_index, explanation')
    .eq('chapter_id', chapterId)
    .limit(50) // fetch all, shuffle client-side for true randomness

  if (error || !data) return []
  return data as QuizQuestion[]
}

// Get quiz best score for authenticated user
export async function getQuizBestScore(userId: string, chapterId: string): Promise<number | null> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('user_progress')
    .select('quiz_best_score')
    .eq('user_id', userId)
    .eq('chapter_id', chapterId)
    .single()
  return data?.quiz_best_score ?? null
}

// Get genealogy nodes and edges
export async function getGenealogyData(): Promise<{ nodes: GenealogyNode[]; edges: GenealogyEdge[] }> {
  const supabase = await createClient()

  const [nodesResult, edgesResult] = await Promise.all([
    supabase
      .from('genealogy_nodes')
      .select('id, person_id, dynasty, dynasty_color, notes, people(name, verdict, type, kingdom, is_queen, reign_start_bc, reign_end_bc, bio, contemporary_events)'),
    supabase
      .from('genealogy_edges')
      .select('id, parent_node_id, child_node_id, relationship_type, notes'),
  ])

  type NodeRow = {
    id: string;
    person_id: string;
    dynasty?: string;
    dynasty_color?: string;
    notes?: string;
    people: { name: string; verdict?: string; type?: string; kingdom?: string; is_queen?: boolean; reign_start_bc?: number | null; reign_end_bc?: number | null; bio?: string; contemporary_events?: string };
  }

  const nodes: GenealogyNode[] = nodesResult.data
    ? (nodesResult.data as unknown as NodeRow[]).map(row => ({
        id: row.id,
        person_id: row.person_id,
        name: row.people?.name ?? 'Unknown',
        dynasty: row.dynasty,
        dynasty_color: row.dynasty_color,
        notes: row.notes,
        verdict: row.people?.verdict as GenealogyNode['verdict'],
        type: row.people?.type as GenealogyNode['type'],
        kingdom: row.people?.kingdom as GenealogyNode['kingdom'],
        is_queen: row.people?.is_queen,
        reign_start_bc: row.people?.reign_start_bc,
        reign_end_bc: row.people?.reign_end_bc,
        bio: row.people?.bio,
        contemporary_events: row.people?.contemporary_events,
      }))
    : []

  const edges: GenealogyEdge[] = edgesResult.data
    ? (edgesResult.data as GenealogyEdge[])
    : []

  return { nodes, edges }
}

// Get nav chapters with read status for a user
// Returns the navData shape that ChapterNav expects
export async function getNavChapters(
  userId: string
): Promise<{ book: string; chapters: NavChapter[] }[]> {
  const supabase = await createClient()

  // 3 queries total: books, all chapters, user_progress
  const [booksResult, chaptersResult, progressResult] = await Promise.all([
    supabase.from('books').select('id, name').order('name'),
    supabase.from('chapters').select('id, chapter_number, book_id, year_start_bc').order('chapter_number'),
    supabase
      .from('user_progress')
      .select('chapter_id, read_at, quiz_best_score')
      .eq('user_id', userId),
  ])

  const books = booksResult.data ?? []
  const allChapters = chaptersResult.data ?? []
  const progress = progressResult.data ?? []

  type ProgressRow = { chapter_id: string; read_at: string | null; quiz_best_score: number | null }
  type ChapterRow = { id: string; chapter_number: number; book_id: string; year_start_bc: number | null }

  // Build maps from chapter_id for read status and quiz score
  const readIds = new Set(
    (progress as ProgressRow[])
      .filter(p => p.read_at !== null)
      .map(p => p.chapter_id)
  )
  const quizScoreMap = new Map<string, number | null>(
    (progress as ProgressRow[]).map(p => [p.chapter_id, p.quiz_best_score])
  )

  return books.map((book: { id: string; name: string }) => {
    const bookChapters = (allChapters as ChapterRow[])
      .filter(ch => ch.book_id === book.id)
      .map(ch => ({
        number: ch.chapter_number,
        is_read: readIds.has(ch.id),
        quiz_best_score: quizScoreMap.get(ch.id) ?? null,
        year_start_bc: ch.year_start_bc ? Math.abs(ch.year_start_bc) : undefined,
      }))

    return {
      book: book.name,
      chapters: bookChapters,
    }
  })
}

// Check if a specific chapter is marked read by user
// chapterId: the UUID from the chapters table
export async function getChapterReadStatus(
  userId: string,
  chapterId: string
): Promise<boolean> {
  const supabase = await createClient()

  const { data } = await supabase
    .from('user_progress')
    .select('read_at')
    .eq('user_id', userId)
    .eq('chapter_id', chapterId)
    .single()

  return !!(data && data.read_at !== null)
}

// Default nav data for unauthenticated users — all chapters marked unread
export function defaultNavData(): { book: string; chapters: NavChapter[] }[] {
  return [
    { book: '1 Kings', chapters: Array.from({ length: 22 }, (_, i) => ({ number: i + 1, is_read: false })) },
    { book: '2 Kings', chapters: Array.from({ length: 25 }, (_, i) => ({ number: i + 1, is_read: false })) },
  ]
}

// Get all verse notes for a user on a specific chapter
export async function getVerseNotes(userId: string, chapterId: string): Promise<VerseNote[]> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('verse_notes')
    .select('verse_number, highlighted, note_text')
    .eq('user_id', userId)
    .eq('chapter_id', chapterId)
  return (data ?? []) as VerseNote[]
}


// Get all chapters a person appears in, with optional read status for a user
export async function getPersonAppearances(
  personId: string,
  userId?: string
): Promise<PersonAppearance[]> {
  const supabase = await createClient()

  const { data: cpData } = await supabase
    .from('chapter_people')
    .select('chapters(id, chapter_number, books(name))')
    .eq('person_id', personId)

  if (!cpData || cpData.length === 0) return []

  type CpRow = { chapters: { id: string; chapter_number: number; books: { name: string } } }

  const chapters = (cpData as unknown as CpRow[])
    .map(row => row.chapters)
    .filter(Boolean)
    .sort((a, b) =>
      a.books.name !== b.books.name
        ? a.books.name.localeCompare(b.books.name)
        : a.chapter_number - b.chapter_number
    )

  if (!userId) {
    return chapters.map(ch => ({
      book: ch.books.name as '1 Kings' | '2 Kings',
      book_slug: (ch.books.name === '1 Kings' ? '1-kings' : '2-kings') as '1-kings' | '2-kings',
      chapter_number: ch.chapter_number,
      read_at: null,
    }))
  }

  const chapterIds = chapters.map(ch => ch.id)
  const { data: progress } = await supabase
    .from('user_progress')
    .select('chapter_id, read_at')
    .eq('user_id', userId)
    .in('chapter_id', chapterIds)

  type ProgressRow = { chapter_id: string; read_at: string | null }
  const readMap = new Map<string, string | null>(
    ((progress ?? []) as ProgressRow[]).map(p => [p.chapter_id, p.read_at])
  )

  return chapters.map(ch => ({
    book: ch.books.name as '1 Kings' | '2 Kings',
    book_slug: (ch.books.name === '1 Kings' ? '1-kings' : '2-kings') as '1-kings' | '2-kings',
    chapter_number: ch.chapter_number,
    read_at: readMap.get(ch.id) ?? null,
  }))
}

// Get all kings for the timeline page
// Returns TimelineKing[] sorted ascending by reign_start_bc (oldest first)
export async function getTimelineKings(): Promise<TimelineKing[]> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('people')
    .select(
      'id, name, kingdom, reign_start_bc, reign_end_bc, verdict, dates_approximate, is_queen, bio'
    )
    .eq('type', 'king')
    .not('reign_start_bc', 'is', null)

  if (error || !data) return []

  return (data as {
    id: string;
    name: string;
    kingdom: 'north' | 'south';
    reign_start_bc: number;
    reign_end_bc: number;
    verdict?: 'good' | 'evil' | 'mixed';
    dates_approximate?: boolean;
    is_queen?: boolean;
    bio?: string;
  }[])
    .map((row) => ({
      id: row.id,
      name: row.name,
      kingdom: row.kingdom,
      reign_start_bc: Math.abs(row.reign_start_bc),
      reign_end_bc: Math.abs(row.reign_end_bc),
      verdict: row.verdict,
      dates_approximate: row.dates_approximate,
      is_queen: row.is_queen,
      bio: row.bio,
    }))
    .sort((a, b) => a.reign_start_bc - b.reign_start_bc)
}
