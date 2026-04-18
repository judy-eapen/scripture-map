'use client'

import Link from 'next/link'

type SceneEnergy = 'setup' | 'tension' | 'climax' | 'resolution' | 'failure'

type Scene = {
  number: number
  icon: string
  title: string
  summary: string
  energy: SceneEnergy
  wide?: boolean
}

type Connection = {
  direction: 'back' | 'forward'
  label: string
  bookSlug: string
  chapter: number
  note: string
}

type StoryMapData = {
  chapterRef: string
  title: string
  logline: string
  scenes: Scene[]
  connections: Connection[]
}

// ─── Energy → visual style ────────────────────────────────────────────────────

const ENERGY: Record<SceneEnergy, { accent: string; glow: string; label: string }> = {
  setup:      { accent: '#60a5fa', glow: 'rgba(96,165,250,0.15)',  label: 'Setup' },
  tension:    { accent: '#f97316', glow: 'rgba(249,115,22,0.15)',  label: 'Tension' },
  failure:    { accent: '#6B7A96', glow: 'rgba(107,116,150,0.12)', label: 'Failure' },
  climax:     { accent: '#C9A84C', glow: 'rgba(201,168,76,0.2)',   label: 'Climax' },
  resolution: { accent: '#34d399', glow: 'rgba(52,211,153,0.15)',  label: 'Resolution' },
}

// ─── Data: 1 Kings 18 ─────────────────────────────────────────────────────────

const STORY_MAP_1K18: StoryMapData = {
  chapterRef: '1 Kings 18',
  title: 'The Contest on Carmel',
  logline: 'After 3 years of drought, Elijah forces a national reckoning: Yahweh or Baal?',
  scenes: [
    {
      number: 1,
      icon: '⚔️',
      title: 'The Confrontation',
      summary: 'Elijah walks out of hiding and faces Ahab. The king calls him the troubler of Israel. Elijah flips it: you abandoned God and followed Baal — you did this.',
      energy: 'tension',
    },
    {
      number: 2,
      icon: '🏔️',
      title: 'The Challenge',
      summary: 'All Israel gathers on Mount Carmel. Two bulls. Two altars. Whichever God answers by fire is the real God. The crowd is silent.',
      energy: 'setup',
    },
    {
      number: 3,
      icon: '🌀',
      title: 'Baal Is Silent',
      summary: '450 prophets cry out from morning to noon. They cut themselves. They dance. Nothing. Elijah mocks: maybe he\'s asleep, or on a trip.',
      energy: 'failure',
    },
    {
      number: 4,
      icon: '🔥',
      title: 'Fire Falls',
      summary: 'Elijah soaks the altar with water three times and prays 3 quiet sentences. Fire from God falls and consumes everything — stone, wood, dust, water. The crowd falls on their faces: "The LORD, he is God."',
      energy: 'climax',
      wide: true,
    },
    {
      number: 5,
      icon: '🌧️',
      title: 'Rain Returns',
      summary: 'The 3-year drought breaks. A small cloud rises from the sea. Elijah outruns Ahab\'s chariot 17 miles to Jezreel in the storm.',
      energy: 'resolution',
    },
  ],
  connections: [
    {
      direction: 'back',
      label: '1 Kings 17',
      bookSlug: '1-kings',
      chapter: 17,
      note: 'Elijah announced the drought — this chapter is its end',
    },
    {
      direction: 'forward',
      label: '1 Kings 19',
      bookSlug: '1-kings',
      chapter: 19,
      note: 'Jezebel hears what happened and threatens Elijah\'s life. Victory collapses into despair.',
    },
  ],
}

// ─── Scene Panel ──────────────────────────────────────────────────────────────

function ScenePanel({ scene }: { scene: Scene }) {
  const e = ENERGY[scene.energy]
  return (
    <div
      className="rounded-2xl flex flex-col overflow-hidden"
      style={{
        background: 'var(--navy-800)',
        border: `1px solid ${e.accent}33`,
        boxShadow: `0 0 0 0 transparent`,
      }}
    >
      {/* Colored top bar */}
      <div className="h-1.5 w-full" style={{ background: e.accent }} />

      <div className="flex flex-col p-5 gap-3 flex-1">
        {/* Scene number + energy label */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold tracking-widest uppercase"
            style={{ color: e.accent }}>
            Scene {scene.number}
          </span>
          <span className="text-xs px-2 py-0.5 rounded-full"
            style={{ background: e.glow, color: e.accent }}>
            {e.label}
          </span>
        </div>

        {/* Icon — big visual anchor */}
        <div className="flex items-center justify-center py-4"
          style={{ fontSize: scene.wide ? '80px' : '64px', lineHeight: 1 }}>
          {scene.icon}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold leading-tight text-center"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--ivory-100)' }}>
          {scene.title}
        </h3>

        {/* Summary */}
        <p className="text-sm leading-relaxed text-center"
          style={{ color: 'var(--muted-400)' }}>
          {scene.summary}
        </p>
      </div>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function StoryMap({ data = STORY_MAP_1K18 }: { data?: StoryMapData }) {
  return (
    <div style={{ background: 'var(--navy-950)', color: 'var(--ivory-100)', minHeight: '100vh' }}>
      <div className="max-w-2xl mx-auto px-4 py-8 pb-24">

        {/* ── Header ── */}
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: 'var(--gold-400)' }}>
            {data.chapterRef}
          </p>
          <h1 className="text-3xl font-bold mb-3 leading-tight"
            style={{ fontFamily: 'var(--font-playfair)', color: 'var(--ivory-100)' }}>
            {data.title}
          </h1>
          <p className="text-sm leading-relaxed max-w-sm mx-auto"
            style={{ color: 'var(--muted-400)' }}>
            {data.logline}
          </p>
        </div>

        {/* ── Energy legend ── */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {(Object.entries(ENERGY) as [SceneEnergy, typeof ENERGY[SceneEnergy]][]).map(([key, val]) => (
            <div key={key} className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full" style={{ background: val.accent }} />
              <span className="text-xs" style={{ color: 'var(--muted-500)' }}>{val.label}</span>
            </div>
          ))}
        </div>

        {/* ── Scene grid ── */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {data.scenes.map(scene => (
            <div key={scene.number} className={scene.wide ? 'col-span-2' : ''}>
              <ScenePanel scene={scene} />
            </div>
          ))}
        </div>

        {/* ── Flow arrows between panels ── */}
        <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
          {data.scenes.map((scene, i) => {
            const e = ENERGY[scene.energy]
            return (
              <div key={scene.number} className="flex items-center gap-2">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ background: e.glow, border: `1px solid ${e.accent}66`, color: e.accent }}>
                    {scene.number}
                  </div>
                  <span className="text-xs text-center w-16 leading-tight"
                    style={{ color: 'var(--muted-500)' }}>
                    {scene.title}
                  </span>
                </div>
                {i < data.scenes.length - 1 && (
                  <svg width="20" height="12" viewBox="0 0 20 12" className="mb-5 shrink-0">
                    <path d="M0 6h16M12 1l5 5-5 5" stroke="var(--muted-500)" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                )}
              </div>
            )
          })}
        </div>

        {/* ── Connections ── */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-center"
            style={{ color: 'var(--muted-500)' }}>
            Before &amp; After
          </p>
          <div className="grid grid-cols-2 gap-3">
            {data.connections.map(conn => (
              <Link key={conn.label} href={`/study/${conn.bookSlug}/${conn.chapter}`}
                className="rounded-xl p-4 transition-opacity hover:opacity-80"
                style={{ background: 'var(--navy-800)', border: '1px solid rgba(45,58,85,0.8)' }}>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-base" style={{ color: 'var(--muted-400)' }}>
                    {conn.direction === 'back' ? '←' : '→'}
                  </span>
                  <span className="text-xs font-semibold" style={{ color: 'var(--gold-300)' }}>
                    {conn.label}
                  </span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--muted-400)' }}>
                  {conn.note}
                </p>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
