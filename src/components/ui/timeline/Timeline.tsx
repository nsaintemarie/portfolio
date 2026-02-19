"use client";

import { useScrollProgress } from "@/lib/hooks";
import { MARKER_POSITIONS, MarkerActive, MarkerPassed, MarkerUpcoming } from "./Markers";

const SVG_PATH = "M542.682 1.54297L322.487 182.659C285.821 212.818 287.869 269.586 326.614 297.024L660.226 533.276C699.729 561.25 700.927 619.455 662.608 649.031L71.2539 1105.46C35.1074 1133.36 33.7265 1187.43 68.4018 1217.13L644.239 1710.48C679.468 1740.66 677.379 1795.79 639.966 1823.22L1.18164 2291.54";


type TimelineProps = {
  containerRef: React.RefObject<HTMLDivElement | null>;
  className?: string;
  onProgressChange?: (progress: number) => void;
};



export function Timeline({ containerRef, className, onProgressChange }: TimelineProps) {
  const scrollProgress = useScrollProgress({ containerRef, onProgressChange });

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
