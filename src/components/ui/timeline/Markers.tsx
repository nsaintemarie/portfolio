
export const MARKER_POSITIONS = [
  { x: 459, y: 70.659 },      // Sur segment départ → premier coude
  { x: 660, y: 533.276 },     // Coude 2 (point exact du path)
  { x: 162, y: 1035.46 },     // Sur segment coude 2 → coude 3
  { x: 413, y: 1512.48 },     // Sur segment coude 3 → coude 4
  { x: 301, y: 2071.54 },     // Sur segment coude 4 → fin
];

// Marqueur actif (spotlight dessus) - Cercle avec +
export function MarkerActive() {
  return (
    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" className="absolute -translate-x-1/2 -translate-y-1/2">
      <rect x="4.18562" y="34.6484" width="43.0812" height="43.0812" rx="21.5406" transform="rotate(-45 4.18562 34.6484)" fill="#201916" stroke="#ECDBCA"/>
      <rect x="35.6484" y="29.1484" width="11" height="2" transform="rotate(90 35.6484 29.1484)" fill="#ECDBCA"/>
      <rect x="29.1484" y="33.6484" width="11" height="2" fill="#ECDBCA"/>
    </svg>
  );
}

// Marqueur passé (spotlight en-dessous) - Petit losange plein
export function MarkerPassed() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="absolute -translate-x-1/2 -translate-y-1/2">
      <path d="M7.13253 0.145299L14.12 7.13281L7.13253 14.1203L0.145012 7.13281L7.13253 0.145299Z" fill="#ECDBCA" stroke="#ECDBCA" strokeWidth="0.20587"/>
    </svg>
  );
}

// Marqueur à venir (spotlight au-dessus) - Losange vide
export function MarkerUpcoming() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="absolute -translate-x-1/2 -translate-y-1/2">
      <path d="M9.93333 0.20328L19.6636 9.93359L9.93333 19.6639L0.203017 9.93359L9.93333 0.20328Z" fill="#201916" stroke="#ECDBCA" strokeWidth="0.286692"/>
    </svg>
  );
}
export const MARKER_Y_PERCENTS = MARKER_POSITIONS.map(pos => (pos.y / 2294) * 100);