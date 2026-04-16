import { getTimelineKings, getNavChapters } from '@/lib/db'
import { createClient } from '@/lib/supabase/server'
import TimelineView from '@/components/TimelineView'

export default async function TimelinePage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const [kings, navData] = await Promise.all([
    getTimelineKings(),
    user ? getNavChapters(user.id) : Promise.resolve([
      { book: '1 Kings', chapters: Array.from({ length: 22 }, (_, i) => ({ number: i + 1, is_read: false })) },
      { book: '2 Kings', chapters: Array.from({ length: 25 }, (_, i) => ({ number: i + 1, is_read: false })) },
    ])
  ])

  return <TimelineView kings={kings} navData={navData} />
}
