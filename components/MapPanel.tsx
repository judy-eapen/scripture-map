'use client';

import { useState, useRef, useCallback } from 'react';
import dynamic from 'next/dynamic';
import type { LatLngTuple } from 'leaflet';
import type { TappablePlace, Place } from '@/lib/types';

// No SSR — Leaflet requires window
const LeafletMap = dynamic(() => import('./LeafletMap'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full"
      style={{ background: 'var(--navy-900)' }}>
      <div className="flex flex-col items-center gap-3">
        <div className="w-6 h-6 border-2 rounded-full animate-spin"
          style={{ borderColor: 'rgba(201,168,76,0.2)', borderTopColor: 'var(--gold-400)' }} />
        <span className="text-xs" style={{ color: 'var(--muted-400)' }}>Loading map…</span>
      </div>
    </div>
  ),
});

type MapMode = 'ancient' | 'modern' | 'split';

type Props = {
  places: TappablePlace[];
  activePlaceId?: string;
  chapterTitle: string;
  onPlaceClick?: (place: Place) => void;
};

const DEFAULT_CENTER: LatLngTuple = [32.5, 35.3];
const OVERVIEW_ZOOM = 7;  // wide context view — Egypt, Cyprus, Assyria visible
const FOCUSED_ZOOM = 9;   // zoomed in when a specific place is active
const MIN_MAP_HEIGHT = 160;
const MAX_MAP_HEIGHT = 780;

export default function MapPanel({ places, activePlaceId, chapterTitle, onPlaceClick }: Props) {
  const handlePinClick = (id: string) => {
    const tappable = places.find(p => p.place.id === id);
    if (tappable && onPlaceClick) onPlaceClick(tappable.place);
  };
  const [mode, setMode] = useState<MapMode>('split');
  const [mapHeight, setMapHeight] = useState(340);
  const panelRef = useRef<HTMLDivElement>(null);
  const isResizing = useRef(false);

  const startVerticalResize = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    isResizing.current = true;
    const startY = e.clientY;
    const startHeight = mapHeight;

    const onMove = (ev: MouseEvent) => {
      if (!isResizing.current) return;
      const delta = ev.clientY - startY;
      const next = Math.max(MIN_MAP_HEIGHT, Math.min(MAX_MAP_HEIGHT, startHeight + delta));
      setMapHeight(next);
    };
    const onUp = () => {
      isResizing.current = false;
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  }, [mapHeight]);

  const activePlace = activePlaceId
    ? places.find(p => p.place.id === activePlaceId)
    : places.find(p => p.map_focus) ?? places[0];

  // Wide context zoom shows Egypt/Cyprus/Assyria; focus in when user selects a place
  const mapZoom = activePlaceId ? FOCUSED_ZOOM : OVERVIEW_ZOOM;

  const center: LatLngTuple = activePlace
    ? [activePlace.place.lat, activePlace.place.lng]
    : DEFAULT_CENTER;

  const pins = places.map(({ place }) => ({
    id: place.id,
    name: place.ancient_name,
    modernName: place.modern_name,
    lat: place.lat,
    lng: place.lng,
    isActive: place.id === (activePlace?.place.id ?? ''),
  }));

  return (
    <div ref={panelRef} className="flex flex-col h-full" style={{ background: 'var(--navy-900)' }}>

      {/* Panel header */}
      <div className="flex items-center justify-between px-4 py-3 shrink-0"
        style={{ borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
        <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--muted-400)' }}>
          {activePlace ? activePlace.place.ancient_name : chapterTitle}
        </span>

        {/* Mode toggle */}
        <div className="flex rounded-lg overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
          {(['ancient', 'split', 'modern'] as MapMode[]).map(m => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className="px-2.5 py-1 text-[11px] font-medium capitalize transition-all"
              style={{
                background: mode === m ? 'rgba(201,168,76,0.18)' : 'transparent',
                color: mode === m ? 'var(--gold-300)' : 'var(--muted-500)',
              }}>
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* Map area — vertically resizable */}
      <div className="relative shrink-0" style={{ height: `${mapHeight}px` }}>
        {mode === 'split' ? (
          <div className="flex h-full">
            <div className="flex-1 h-full overflow-hidden">
              <LeafletMap mode="ancient" places={pins} activeCenter={center} zoom={mapZoom} label="Ancient (~870 BC)" onPinClick={handlePinClick} />
            </div>
            <div style={{ width: '1px', background: 'rgba(201,168,76,0.25)', flexShrink: 0 }} />
            <div className="flex-1 h-full overflow-hidden">
              <LeafletMap mode="modern" places={pins} activeCenter={center} zoom={mapZoom} label="Modern" onPinClick={handlePinClick} />
            </div>
          </div>
        ) : (
          <LeafletMap
            mode={mode}
            places={pins}
            activeCenter={center}
            zoom={mapZoom}
            label={mode === 'ancient' ? 'Ancient (~870 BC)' : 'Modern'}
            onPinClick={handlePinClick}
          />
        )}
      </div>

      {/* Vertical resize handle */}
      <div
        onMouseDown={startVerticalResize}
        className="shrink-0 flex items-center justify-center cursor-row-resize group"
        style={{ height: '10px', position: 'relative' }}
        title="Drag to resize map">
        <div
          className="rounded-full transition-all duration-150"
          style={{
            width: '40px',
            height: '3px',
            background: 'rgba(201,168,76,0.25)',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,0.6)'; (e.currentTarget as HTMLElement).style.width = '64px'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,0.25)'; (e.currentTarget as HTMLElement).style.width = '40px'; }}
        />
      </div>

      {/* Active place info */}
      {activePlace && (
        <div className="px-4 py-3 shrink-0"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-sm font-medium" style={{ color: 'var(--ivory-100)' }}>
                {activePlace.place.ancient_name}
              </p>
              <p className="text-xs mt-0.5 flex items-center gap-1" style={{ color: 'var(--kingdom-north)' }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                </svg>
                {activePlace.place.modern_name.split(',').slice(0, 2).join(',')}
              </p>
            </div>
            <span className="text-[10px] shrink-0" style={{ color: 'var(--muted-500)' }}>
              {activePlace.place.lat.toFixed(2)}°N {activePlace.place.lng.toFixed(2)}°E
            </span>
          </div>
        </div>
      )}

      {/* All places in chapter */}
      <div className="flex-1 overflow-y-auto px-4 py-3 min-h-0">
        <p className="text-xs font-semibold uppercase tracking-wider mb-2.5" style={{ color: 'var(--muted-500)' }}>
          Locations in this chapter
        </p>
        <div className="space-y-1">
          {places.map(({ place }) => {
            const isActive = place.id === activePlace?.place.id;
            return (
              <div key={place.id}
                className="flex items-center gap-2.5 rounded-lg px-2.5 py-2"
                style={{
                  background: isActive ? 'rgba(96,165,250,0.08)' : 'transparent',
                  border: `1px solid ${isActive ? 'rgba(96,165,250,0.2)' : 'transparent'}`,
                }}>
                <div className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: isActive ? 'var(--kingdom-north)' : 'var(--navy-600)' }} />
                <div className="min-w-0 flex-1">
                  <span className="text-xs font-medium block" style={{ color: isActive ? 'var(--ivory-100)' : 'var(--ivory-200)' }}>
                    {place.ancient_name}
                  </span>
                  <span className="text-[11px]" style={{ color: 'var(--muted-500)' }}>
                    {place.modern_name.split(',')[0]}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Hint */}
      <div className="px-4 py-2 shrink-0 text-center"
        style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <p className="text-[10px]" style={{ color: 'var(--muted-500)' }}>
          Tap a place name in the text to recentre · drag handles to resize
        </p>
      </div>
    </div>
  );
}
