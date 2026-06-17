"use client";

import { useScrollProgress } from "@/lib/hooks";
import { MarkerActive, MarkerPassed, MarkerUpcoming, MARKER_Y_PERCENTS } from "./Markers";
import { cn } from "@/lib/utils";

type MobileTimelineProps = {
  containerRef: React.RefObject<HTMLDivElement | null>;
  className?: string;
  onProgressChange?: (progress: number) => void;
};

export function MobileTimeline({ containerRef, className, onProgressChange }: MobileTimelineProps) {
  const scrollProgress = useScrollProgress({ containerRef, onProgressChange });
  const lastMarkerYPercent = MARKER_Y_PERCENTS[MARKER_Y_PERCENTS.length - 1];
  const spotlightPos = Math.min(scrollProgress * 100, lastMarkerYPercent + 10);

  return (
    <div className={cn("absolute left-5 top-0 bottom-0 w-0.5", className)}>
      {/* Base line - dim */}
      <div
        className="absolute inset-0 bg-primary"
        style={{ opacity: 0.1 }}
      />

      {/* Spotlight line - bright with mask */}
      <div
        className="absolute inset-0 bg-primary transition-all duration-150"
        style={{
          opacity: 0.9,
          maskImage: `linear-gradient(to bottom, transparent 0%, transparent ${Math.max(0, spotlightPos - 10)}%, white ${Math.max(0, spotlightPos - 10)}%, white ${Math.min(100, spotlightPos + 10)}%, transparent ${Math.min(100, spotlightPos + 10)}%, transparent 100%)`,
          WebkitMaskImage: `linear-gradient(to bottom, transparent 0%, transparent ${Math.max(0, spotlightPos - 10)}%, white ${Math.max(0, spotlightPos - 10)}%, white ${Math.min(100, spotlightPos + 10)}%, transparent ${Math.min(100, spotlightPos + 10)}%, transparent 100%)`,
        }}
      />

      {/* Markers */}
      {MARKER_Y_PERCENTS.map((yPercent, index) => {
        const isActive = spotlightPos >= yPercent - 10 && spotlightPos <= yPercent + 10;
        const isPassed = spotlightPos > yPercent + 10;

        return (
          <div
            key={index}
            className="absolute left-1/2"
            style={{ top: `${yPercent}%` }}
          >
            {isActive ? <MarkerActive /> : isPassed ? <MarkerPassed /> : <MarkerUpcoming />}
          </div>
        );
      })}
    </div>
  );
}
