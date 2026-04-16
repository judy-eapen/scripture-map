'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Polygon, Tooltip, useMap, ZoomControl } from 'react-leaflet';
import type { LatLngTuple, LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';

function fixLeafletIcons() {
  if (typeof window === 'undefined') return;
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const L = require('leaflet');
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  });
}

function createMarkerIcon(isActive: boolean, isAncient: boolean, name: string) {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const L = require('leaflet');
  const dotColor = isActive
    ? (isAncient ? '#C9A84C' : '#60A5FA')
    : (isAncient ? '#e8dcc8' : '#c0cfe8');
  const borderColor = isActive
    ? (isAncient ? 'rgba(201,168,76,0.9)' : 'rgba(96,165,250,0.9)')
    : (isAncient ? 'rgba(80,60,20,0.7)' : 'rgba(40,80,160,0.7)');
  const dotSize = isActive ? 16 : 13;
  const shadow = isActive
    ? '0 0 0 3px rgba(0,0,0,0.3), 0 3px 12px rgba(0,0,0,0.6)'
    : '0 0 0 2px rgba(0,0,0,0.25), 0 2px 8px rgba(0,0,0,0.45)';
  const labelBg = isAncient ? 'rgba(30,20,8,0.82)' : 'rgba(10,16,30,0.82)';
  const labelColor = isActive
    ? (isAncient ? '#C9A84C' : '#93c5fd')
    : 'rgba(255,255,255,0.8)';
  const fontWeight = isActive ? '700' : '600';

  const html = `
    <div style="position:relative;display:flex;flex-direction:column;align-items:center;gap:3px;">
      <div style="width:${dotSize}px;height:${dotSize}px;border-radius:50%;background:${dotColor};border:2.5px solid ${borderColor};box-shadow:${shadow};flex-shrink:0;"></div>
      <div style="background:${labelBg};color:${labelColor};font-size:10px;font-weight:${fontWeight};padding:2px 6px;border-radius:4px;white-space:nowrap;letter-spacing:0.02em;backdrop-filter:blur(4px);border:1px solid rgba(255,255,255,0.1);">${name}</div>
    </div>`;

  const totalHeight = dotSize + 3 + 18;
  return L.divIcon({
    className: '',
    html,
    iconSize: [80, totalHeight],
    iconAnchor: [40, dotSize / 2],
  });
}

// Geographic context label — no dot, text printed on the map like an atlas
function createContextLabelIcon(name: string, type: 'water' | 'region') {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const L = require('leaflet');
  // Vivid enough to read clearly but not competing with the kingdom boundaries
  const color = type === 'water' ? 'rgba(90,150,210,0.95)' : 'rgba(60,45,25,0.88)';
  const italic = type === 'water' ? 'italic' : 'normal';
  const size = type === 'water' ? '10px' : '12px';
  const shadow = type === 'water'
    ? '0 1px 3px rgba(255,255,255,0.7), 0 0 5px rgba(255,255,255,0.5)'
    : '0 1px 3px rgba(255,255,255,0.8), 0 0 6px rgba(255,255,255,0.6)';
  return L.divIcon({
    className: '',
    html: `<div style="font-size:${size};font-weight:800;font-style:${italic};letter-spacing:0.14em;text-transform:uppercase;color:${color};text-shadow:${shadow};white-space:nowrap;pointer-events:none;text-align:center;">${name}</div>`,
    iconSize: [160, 18],
    iconAnchor: [80, 9],
  });
}

function FlyToPlace({ center, zoom }: { center: LatLngTuple; zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, zoom, { duration: 0.8 });
  }, [map, center, zoom]);
  return null;
}

// Renders kingdom polygons; shows name labels only when zoomed in enough to avoid clutter
function ZoomAwareKingdoms() {
  const map = useMap();
  const [zoom, setZoom] = useState(() => map.getZoom());

  useEffect(() => {
    const onZoomEnd = () => setZoom(map.getZoom());
    map.on('zoomend', onZoomEnd);
    return () => { map.off('zoomend', onZoomEnd); };
  }, [map]);

  const showLabels = zoom >= 9;

  return (
    <>
      {ANCIENT_KINGDOMS.map(k => (
        <Polygon
          key={k.name}
          positions={k.positions}
          pathOptions={{
            color: k.color,
            fillColor: k.color,
            fillOpacity: 0.18,
            weight: 2,
            opacity: 0.72,
            dashArray: '6 7',
          }}
        >
          {showLabels && (
            <Tooltip
              permanent
              direction="center"
              className="kingdom-label"
              interactive={false}
              opacity={1}
            >
              <span style={{ color: k.color }}>{k.name}</span>
            </Tooltip>
          )}
        </Polygon>
      ))}
    </>
  );
}

type PlacePin = {
  id: string;
  name: string;
  modernName: string;
  lat: number;
  lng: number;
  isActive: boolean;
};

type Props = {
  mode: 'ancient' | 'modern';
  places: PlacePin[];
  activeCenter: LatLngTuple;
  zoom?: number;
  label: string;
  onPinClick?: (id: string) => void;
};

const TILES = {
  // World Physical Map: pure terrain/bathymetry, zero political labels or borders.
  // Native tiles only exist to zoom 8; Leaflet upscales beyond that (no "data unavailable").
  ancientBase: {
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}',
    attribution: '© Esri, Natural Earth',
  },
  modernBase: {
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    attribution: '© Esri, Maxar, Earthstar Geographics',
  },
  modernLabels: {
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',
    attribution: '',
  },
};

// Political boundaries c. 870 BC — non-overlapping, approximate historical territories
const ANCIENT_KINGDOMS: Array<{ name: string; color: string; positions: LatLngExpression[] }> = [
  {
    name: 'Kingdom of Israel',
    color: '#60A5FA',
    positions: [
      [33.1, 35.07], [32.95, 35.5], [32.72, 35.63], [32.6, 35.65],
      [32.45, 35.88], [32.15, 35.98], [31.95, 35.55], [31.95, 35.15],
      [31.95, 34.9], [32.25, 34.78], [32.62, 34.85], [33.0, 34.95],
      [33.1, 35.07],
    ] as LatLngExpression[],
  },
  {
    name: 'Kingdom of Judah',
    color: '#A78BFA',
    positions: [
      [31.95, 35.15], [31.82, 35.5], [31.5, 35.5], [31.18, 35.38],
      [31.0, 35.05], [30.85, 34.72], [31.15, 34.48], [31.62, 34.65],
      [31.88, 34.82], [31.95, 34.95], [31.95, 35.15],
    ] as LatLngExpression[],
  },
  {
    // Edom — plateau SE of Dead Sea / Negev, capital at Bozrah (Buseira)
    name: 'Edom',
    color: '#A16207',
    positions: [
      [30.82, 35.1], [30.82, 36.3], [30.35, 36.5], [29.85, 36.05],
      [29.82, 35.08], [30.2, 34.92], [30.82, 35.1],
    ] as LatLngExpression[],
  },
  {
    name: 'Aram-Damascus',
    color: '#F87171',
    positions: [
      [33.2, 35.72], [33.22, 36.1], [33.52, 36.2], [33.85, 36.38],
      [34.15, 36.45], [34.3, 36.72], [34.25, 37.1], [33.75, 37.25],
      [33.25, 37.0], [33.0, 36.72], [32.9, 36.28], [33.0, 35.95],
      [33.2, 35.72],
    ] as LatLngExpression[],
  },
  {
    name: 'Phoenicia',
    color: '#FBBF24',
    positions: [
      [33.12, 35.08], [33.28, 35.22], [33.58, 35.38], [34.12, 35.65],
      [34.45, 35.88], [34.45, 36.12], [34.08, 35.95], [33.62, 35.62],
      [33.3, 35.45], [33.12, 35.25], [33.12, 35.08],
    ] as LatLngExpression[],
  },
  {
    name: 'Philistia',
    color: '#34D399',
    positions: [
      [32.0, 34.75], [31.92, 34.98], [31.62, 34.85], [31.32, 34.55],
      [31.28, 34.28], [31.45, 34.22], [31.82, 34.55], [32.0, 34.75],
    ] as LatLngExpression[],
  },
  {
    name: 'Ammon',
    color: '#FB923C',
    positions: [
      [32.15, 35.95], [32.18, 36.55], [31.92, 36.75], [31.72, 36.62],
      [31.65, 36.08], [31.88, 35.82], [32.15, 35.95],
    ] as LatLngExpression[],
  },
  {
    name: 'Moab',
    color: '#D6D3D1',
    positions: [
      [31.65, 35.52], [31.65, 36.52], [31.12, 36.62], [30.9, 36.28],
      [30.82, 35.82], [31.0, 35.52], [31.65, 35.52],
    ] as LatLngExpression[],
  },
];

// Geographic context for the wider ancient world — visible when zoomed out
const CONTEXT_REGIONS: Array<{ name: string; lat: number; lng: number; type: 'water' | 'region' }> = [
  // Bodies of water
  { name: 'Mediterranean Sea',  lat: 35.4,  lng: 27.5,  type: 'water' },
  { name: 'Red Sea',            lat: 25.5,  lng: 36.2,  type: 'water' },
  { name: 'Nile River',         lat: 26.5,  lng: 32.0,  type: 'water' },
  // Major ancient powers and regions
  { name: 'Egypt',              lat: 29.5,  lng: 31.2,  type: 'region' },
  { name: 'Sinai',              lat: 29.75, lng: 33.8,  type: 'region' },
  { name: 'Cyprus',             lat: 35.05, lng: 33.0,  type: 'region' },
  { name: 'Assyria',            lat: 36.35, lng: 42.5,  type: 'region' },
  { name: 'Babylonia',          lat: 32.55, lng: 44.5,  type: 'region' },
  { name: 'Arabia',             lat: 27.0,  lng: 40.0,  type: 'region' },
  { name: 'Anatolia',           lat: 39.0,  lng: 34.5,  type: 'region' },
  { name: 'Elam',               lat: 31.5,  lng: 48.5,  type: 'region' },
];

export default function LeafletMap({ mode, places, activeCenter, zoom = 7, label, onPinClick }: Props) {
  useEffect(() => {
    fixLeafletIcons();
  }, []);

  const isAncient = mode === 'ancient';

  return (
    <div
      className="relative h-full w-full"
      style={isAncient ? { filter: 'sepia(22%) saturate(85%) brightness(108%)' } : undefined}
    >
      {/* Layer label */}
      <div
        className="absolute top-2 left-2 z-[1000] text-[11px] font-semibold px-2.5 py-1 rounded-lg pointer-events-none"
        style={{
          background: 'rgba(0,0,0,0.65)',
          color: isAncient ? 'var(--gold-300)' : 'var(--kingdom-north)',
          backdropFilter: 'blur(4px)',
          border: `1px solid ${isAncient ? 'rgba(201,168,76,0.3)' : 'rgba(96,165,250,0.3)'}`,
        }}
      >
        {label}
      </div>

      {/* Ancient kingdoms legend */}
      {isAncient && (
        <div
          className="absolute bottom-8 left-2 z-[1000] rounded-lg pointer-events-none"
          style={{
            background: 'rgba(10,16,30,0.82)',
            backdropFilter: 'blur(6px)',
            border: '1px solid rgba(255,255,255,0.07)',
            padding: '7px 9px',
          }}
        >
          <div className="text-[9px] font-semibold uppercase tracking-wider mb-1.5"
            style={{ color: 'rgba(255,255,255,0.35)' }}>
            c. 870 BC
          </div>
          <div className="space-y-1">
            {ANCIENT_KINGDOMS.map(k => (
              <div key={k.name} className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full shrink-0" style={{ background: k.color, opacity: 0.9 }} />
                <span className="text-[10px] font-medium leading-none" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  {k.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <MapContainer
        center={activeCenter}
        zoom={zoom}
        style={{ height: '100%', width: '100%', background: isAncient ? '#e8dcc8' : '#1a2535' }}
        zoomControl={false}
        scrollWheelZoom
        className={isAncient ? 'map-ancient' : 'map-modern'}
      >
        {isAncient ? (
          <TileLayer
            url={TILES.ancientBase.url}
            attribution={TILES.ancientBase.attribution}
            maxNativeZoom={8}
            maxZoom={18}
          />
        ) : (
          <>
            <TileLayer url={TILES.modernBase.url} attribution={TILES.modernBase.attribution} />
            <TileLayer url={TILES.modernLabels.url} attribution="" />
          </>
        )}

        {/* Kingdom polygons — labels appear only when zoomed in (zoom >= 9) */}
        {isAncient && <ZoomAwareKingdoms />}

        {/* Geographic context labels for the wider ancient world */}
        {isAncient && CONTEXT_REGIONS.map(region => (
          <Marker
            key={region.name}
            position={[region.lat, region.lng]}
            icon={createContextLabelIcon(region.name, region.type)}
            interactive={false}
          />
        ))}

        <ZoomControl position="bottomright" />
        <FlyToPlace center={activeCenter} zoom={zoom} />

        {places.map(pin => {
          const icon = createMarkerIcon(pin.isActive, isAncient, pin.name);
          return (
            <Marker
              key={pin.id}
              position={[pin.lat, pin.lng]}
              icon={icon}
              eventHandlers={onPinClick ? {
                click: (e) => {
                  e.originalEvent.stopPropagation();
                  onPinClick(pin.id);
                },
              } : {}}
            >
              <Tooltip direction="top" offset={[0, -28]}>
                <div>
                  <strong style={{ display: 'block', fontSize: '12px', marginBottom: '1px' }}>
                    {pin.name}
                  </strong>
                  <span style={{ fontSize: '11px', color: '#888' }}>
                    {pin.modernName.split(',')[0]}
                  </span>
                </div>
              </Tooltip>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
