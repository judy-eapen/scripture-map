'use client'

import dynamic from 'next/dynamic'
import { MARK_6_PLACES, straightLineKm } from '@/lib/mark-6-geography'

const LeafletMap = dynamic(() => import('./LeafletMap'), { ssr: false, loading: () => <div className="h-64 animate-pulse rounded-xl" style={{ background: 'rgba(255,255,255,0.04)' }} /> })

const places = [
  { id: 'nazareth', name: 'Nazareth', modernName: 'Nazareth', ...MARK_6_PLACES.nazareth, isActive: true },
  { id: 'sea-galilee', name: 'Sea of Galilee', modernName: 'Lake Kinneret', ...MARK_6_PLACES.seaGalilee, isActive: false },
  { id: 'bethsaida', name: 'Bethsaida?', modernName: 'Et-Tell / El-Araj candidates', ...MARK_6_PLACES.bethsaidaCandidateArea, isActive: false },
  { id: 'gennesaret', name: 'Gennesaret', modernName: 'Ginosar plain', ...MARK_6_PLACES.gennesaret, isActive: false },
]

export default function Mark6PlacesPanel() {
  const nazarethToGennesaret = Math.round(straightLineKm(MARK_6_PLACES.nazareth, MARK_6_PLACES.gennesaret))
  const bethsaidaToGennesaret = Math.round(straightLineKm(MARK_6_PLACES.bethsaidaCandidateArea, MARK_6_PLACES.gennesaret))
  return <div className="mt-5 space-y-4">
    <div className="h-64 md:h-72 overflow-hidden rounded-xl" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
      <LeafletMap mode="modern" places={places} activeCenter={[32.80, 35.47]} zoom={9} label="Mark 6 geographic context" />
    </div>
    <div className="grid sm:grid-cols-2 gap-3 text-xs leading-relaxed">
      <div className="rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.035)', color: 'var(--muted-400)' }}><strong style={{ color: 'var(--ivory-100)' }}>Named by Mark:</strong> Nazareth, the Sea, intended direction toward Bethsaida, and eventual landing at Gennesaret.</div>
      <div className="rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.035)', color: 'var(--muted-400)' }}><strong style={{ color: 'var(--ivory-100)' }}>Not known:</strong> the feeding site, the point where Jesus walked on the water, and the boat’s actual course.</div>
      <div className="rounded-xl p-3 sm:col-span-2" style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.14)', color: 'var(--muted-400)' }}><strong style={{ color: 'var(--gold-300)' }}>Scale, not an itinerary:</strong> Nazareth to the Ginosar/Gennesaret area is about {nazarethToGennesaret} km (16 mi) in a straight line. The Bethsaida candidate area is roughly {bethsaidaToGennesaret} km (8 mi) straight-line from Ginosar. These are great-circle calculations between modern coordinates—not walked or sailed distances, and not Mark’s claimed route.</div>
    </div>
    <p className="text-[11px] leading-relaxed" style={{ color: 'var(--muted-500)' }}>Bethsaida’s archaeological identification remains debated between nearby candidate sites. Its marker is intentionally labeled with a question mark.</p>
  </div>
}
