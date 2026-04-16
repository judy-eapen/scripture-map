'use client';

import type { Place } from '@/lib/types';

type Props = {
  place: Place;
  onClose: () => void;
};

export default function PlaceCardModal({ place, onClose }: Props) {
  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0"
        style={{ background: 'rgba(0,0,0,0.5)', zIndex: 9998 }}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="fixed right-0 top-0 h-full w-full max-w-sm flex flex-col overflow-y-auto"
        style={{
          zIndex: 9999,
          background: 'var(--navy-800)',
          borderLeft: '1px solid rgba(96,165,250,0.15)',
          boxShadow: '-24px 0 48px rgba(0,0,0,0.5)',
        }}>

        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-4 shrink-0"
          style={{ borderBottom: '1px solid rgba(96,165,250,0.1)' }}>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider"
                style={{ background: 'rgba(96,165,250,0.1)', color: 'var(--kingdom-north)', border: '1px solid rgba(96,165,250,0.2)' }}>
                Location
              </span>
            </div>
            <h2 className="text-2xl font-medium leading-tight"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--ivory-100)' }}>
              {place.ancient_name}
            </h2>
            <p className="text-sm mt-1 flex items-center gap-1.5"
              style={{ color: 'var(--kingdom-north)' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" fill="currentColor" opacity="0.6" />
              </svg>
              {place.modern_name}
            </p>
          </div>

          <button
            onClick={onClose}
            className="ml-4 shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ color: 'var(--muted-400)', background: 'rgba(255,255,255,0.04)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Significance callout */}
        {place.significance && (
          <div className="mx-6 mt-4 px-4 py-3 rounded-xl"
            style={{ background: 'rgba(96,165,250,0.05)', border: '1px solid rgba(96,165,250,0.15)' }}>
            <p className="text-sm leading-relaxed italic" style={{ color: 'var(--kingdom-north)' }}>
              {place.significance}
            </p>
          </div>
        )}

        {/* Map placeholder */}
        <div className="mx-6 mt-4 rounded-xl overflow-hidden"
          style={{
            height: '200px',
            background: 'linear-gradient(135deg, #1a2a1a 0%, #0d1a2a 40%, #1a1a0d 100%)',
            border: '1px solid rgba(96,165,250,0.15)',
            position: 'relative',
          }}>
          {/* Simulated map grid */}
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `linear-gradient(rgba(96,165,250,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.4) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }} />
          {/* Map pin */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center mb-1"
                style={{ background: 'var(--kingdom-north)', borderColor: 'white' }}>
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
              <div className="text-xs font-semibold px-2 py-0.5 rounded-full"
                style={{ background: 'rgba(0,0,0,0.7)', color: 'white', backdropFilter: 'blur(4px)' }}>
                {place.ancient_name}
              </div>
            </div>
          </div>
          <div className="absolute bottom-3 right-3 text-xs px-2 py-1 rounded-lg"
            style={{ background: 'rgba(0,0,0,0.6)', color: 'var(--muted-400)', backdropFilter: 'blur(4px)' }}>
            Mapbox loads in execute phase
          </div>
        </div>

        {/* Content */}
        <div className="px-6 pt-5 pb-4 space-y-5">
          {/* Ancient */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--gold-400)' }}>
              In biblical times
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--ivory-200)', lineHeight: '1.8' }}>
              {place.ancient_description}
            </p>
          </div>

          {/* Modern */}
          <div className="rounded-xl p-4"
            style={{ background: 'rgba(96,165,250,0.04)', border: '1px solid rgba(96,165,250,0.1)' }}>
            <h3 className="text-xs font-semibold uppercase tracking-wider mb-2 flex items-center gap-2"
              style={{ color: 'var(--kingdom-north)' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              Today
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-400)', lineHeight: '1.75' }}>
              {place.modern_description}
            </p>
          </div>

          {/* Coordinates */}
          <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--muted-500)' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            {place.lat.toFixed(4)}°N, {place.lng.toFixed(4)}°E
          </div>
        </div>

        <div className="flex-1" />
      </div>
    </>
  );
}
