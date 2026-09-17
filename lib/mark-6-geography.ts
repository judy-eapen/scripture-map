export const MARK_6_PLACES = {
  nazareth: { lat: 32.6996, lng: 35.3035 },
  seaGalilee: { lat: 32.82, lng: 35.59 },
  bethsaidaCandidateArea: { lat: 32.91, lng: 35.63 },
  gennesaret: { lat: 32.85, lng: 35.52 },
} as const

/** Great-circle distance between two coordinates. This is scale context, never a reconstructed route. */
export function straightLineKm(a: { lat: number; lng: number }, b: { lat: number; lng: number }) {
  const radians = Math.PI / 180
  const dLat = (b.lat - a.lat) * radians
  const dLng = (b.lng - a.lng) * radians
  const haversine = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * radians) * Math.cos(b.lat * radians) * Math.sin(dLng / 2) ** 2
  return 2 * 6371 * Math.asin(Math.sqrt(haversine))
}
