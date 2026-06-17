"use client";

import { useScrollProgress } from "@/lib/hooks";
import { MARKER_POSITIONS, MARKER_Y_PERCENTS, MarkerActive, MarkerPassed, MarkerUpcoming } from "./Markers";

const SVG_PATH = "M501.436 1.54297L281.241 182.659C244.575 212.818 246.623 269.586 285.368 297.024L618.98 533.276C658.483 561.25 659.681 619.455 621.362 649.031L30.0078 1105.46C-6.13874 1133.36 -7.5196 1187.43 27.1557 1217.13L602.767 1710.28C638.068 1740.53 635.885 1795.8 598.309 1823.16L418.936 1953.79L165.936 2138.04";


type TimelineProps = {
  containerRef: React.RefObject<HTMLDivElement | null>;
  className?: string;
  onProgressChange?: (progress: number) => void;
};



export function Timeline({ containerRef, className, onProgressChange }: TimelineProps) {
  const scrollProgress = useScrollProgress({ containerRef, onProgressChange });

  const lastMarkerYPercent = MARKER_Y_PERCENTS[MARKER_Y_PERCENTS.length - 1];
  const spotlightPos = Math.min(scrollProgress * 100, lastMarkerYPercent + 10);
  return (
    <div className={className}>
      {/* Base SVG - transparent */}
      <svg
        width="693"
        height="2294"
        viewBox="0 0 693 2294"
        fill="none"
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
                transform: "translate(-50%, -50%)",
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
