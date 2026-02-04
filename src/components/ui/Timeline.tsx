"use client";

import { useEffect, useState } from "react";

const SVG_PATH = "M542.682 1.54297L322.487 182.659C285.821 212.818 287.869 269.586 326.614 297.024L660.226 533.276C699.729 561.25 700.927 619.455 662.608 649.031L71.2539 1105.46C35.1074 1133.36 33.7265 1187.43 68.4018 1217.13L644.239 1710.48C679.468 1740.66 677.379 1795.79 639.966 1823.22L1.18164 2291.54";

// Positions des marqueurs sur le tracé (coordonnées X, Y du viewBox 693x2294)
// X calculé par interpolation linéaire sur les segments du path
const MARKER_POSITIONS = [
  { x: 459, y: 70.659 },      // Sur segment départ → premier coude
  { x: 660, y: 533.276 },     // Coude 2 (point exact du path)
  { x: 162, y: 1035.46 },     // Sur segment coude 2 → coude 3
  { x: 413, y: 1512.48 },     // Sur segment coude 3 → coude 4
  { x: 301, y: 2071.54 },     // Sur segment coude 4 → fin
];

// Marqueur actif (spotlight dessus) - Losange avec +
function MarkerActive() {
  return (
    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" className="absolute -translate-x-1/2 -translate-y-1/2">
      <rect x="4.18562" y="34.6484" width="43.0812" height="43.0812" rx="21.5406" transform="rotate(-45 4.18562 34.6484)" fill="#201916" stroke="#ECDBCA"/>
      <rect x="35.6484" y="29.1484" width="11" height="2" transform="rotate(90 35.6484 29.1484)" fill="#ECDBCA"/>
      <rect x="29.1484" y="33.6484" width="11" height="2" fill="#ECDBCA"/>
    </svg>
  );
}

// Marqueur passé (spotlight en-dessous) - Petit losange plein
function MarkerPassed() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="absolute -translate-x-1/2 -translate-y-1/2">
      <path d="M7.13253 0.145299L14.12 7.13281L7.13253 14.1203L0.145012 7.13281L7.13253 0.145299Z" fill="#ECDBCA" stroke="#ECDBCA" strokeWidth="0.20587"/>
    </svg>
  );
}

// Marqueur à venir (spotlight au-dessus) - Losange vide
function MarkerUpcoming() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="absolute -translate-x-1/2 -translate-y-1/2">
      <path d="M9.93333 0.20328L19.6636 9.93359L9.93333 19.6639L0.203017 9.93359L9.93333 0.20328Z" fill="#201916" stroke="#ECDBCA" strokeWidth="0.286692"/>
    </svg>
  );
}

type TimelineProps = {
  containerRef: React.RefObject<HTMLDivElement | null>;
  className?: string;
  onProgressChange?: (progress: number) => void;
};

// Exporter les positions Y des marqueurs en pourcentage pour usage externe
export const MARKER_Y_PERCENTS = MARKER_POSITIONS.map(pos => (pos.y / 2294) * 100);

export function Timeline({ containerRef, className, onProgressChange }: TimelineProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const scrollContainer = document.querySelector("main");
    if (!scrollContainer || !containerRef.current) return;

    const handleScroll = () => {
      const section = containerRef.current;
      if (!section) return;

      const sectionRect = section.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      const viewportHeight = window.innerHeight;

      // Calcul : 0 quand le haut de la section est en haut du viewport
      // 1 quand le bas de la section atteint le bas du viewport
      const scrollableDistance = sectionHeight - viewportHeight;

      if (scrollableDistance <= 0) {
        // Section plus petite que le viewport
        setScrollProgress(0);
        onProgressChange?.(0);
        return;
      }

      // sectionTop = 0 quand le haut de la section est en haut du viewport
      // sectionTop = -(sectionHeight - viewportHeight) quand on a scrollé tout en bas
      const progress = Math.max(0, Math.min(1, -sectionTop / scrollableDistance));

      setScrollProgress(progress);
      onProgressChange?.(progress * 100);
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, [onProgressChange]);

  // Position du spotlight en pourcentage (0-100)
  const spotlightPos = scrollProgress * 100;
  return (
    <div className={className}>
      {/* Base SVG - transparent */}
      <svg
        width="693"
        height="2294"
        viewBox="0 0 693 2294"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto absolute"
        style={{ opacity: 0.1 }}
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d={SVG_PATH}
          stroke="currentColor"
          strokeWidth="4"
          className="text-primary"
        />
      </svg>

      {/* Spotlight SVG - avec mask basé sur le scroll */}
      <svg
        width="693"
        height="2294"
        viewBox="0 0 693 2294"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto absolute transition-all duration-150"
        style={{
          opacity: 0.9,
          maskImage: `linear-gradient(to bottom, transparent 0%, transparent ${Math.max(0, spotlightPos - 10)}%, white ${Math.max(0, spotlightPos - 10)}%, white ${Math.min(100, spotlightPos + 10)}%, transparent ${Math.min(100, spotlightPos + 10)}%, transparent 100%)`,
          WebkitMaskImage: `linear-gradient(to bottom, transparent 0%, transparent ${Math.max(0, spotlightPos - 10)}%, white ${Math.max(0, spotlightPos - 10)}%, white ${Math.min(100, spotlightPos + 10)}%, transparent ${Math.min(100, spotlightPos + 10)}%, transparent 100%)`,
        }}
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d={SVG_PATH}
          stroke="currentColor"
          strokeWidth="4"
          className="text-primary"
        />
      </svg>

      {/* Conteneur des marqueurs - même ratio que le SVG */}
      <div
        className="absolute h-full"
        style={{ aspectRatio: "693 / 2294" }}
      >
        {MARKER_POSITIONS.map((pos, index) => {
          // Convertir les coordonnées en pourcentages du viewBox
          const xPercent = (pos.x / 693) * 100;
          const yPercent = (pos.y / 2294) * 100;

          // Déterminer l'état du marqueur en fonction du spotlight
          const isActive = spotlightPos >= yPercent - 10 && spotlightPos <= yPercent + 10;
          const isPassed = spotlightPos > yPercent + 10;

          return (
            <div
              key={index}
              className="absolute"
              style={{
                left: `${xPercent}%`,
                top: `${yPercent}%`,
              }}
            >
              {isActive ? <MarkerActive /> : isPassed ? <MarkerPassed /> : <MarkerUpcoming />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
