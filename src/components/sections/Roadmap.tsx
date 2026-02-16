"use client";

import { useRef, useState, useCallback } from "react";
import { cn } from "@/utils";
import { FadeInUp, GridBackground, Timeline, MARKER_Y_PERCENTS } from "@/components/ui";
import { roadmapSteps } from "@/data/roadmap-steps";

export function Roadmap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [spotlightPos, setSpotlightPos] = useState(0);

  const handleProgressChange = useCallback((progress: number) => {
    setSpotlightPos(progress);
  }, []);

  const isStepPassed = (index: number) => {
    const markerY = MARKER_Y_PERCENTS[index];
    return spotlightPos >= markerY - 10;
  };

  return (
    <section
      id="roadmap"
      ref={containerRef}
      className="bg-background-secondary min-h-screen snap-start snap-always relative p-26 hidden lg:block"
    >
      <GridBackground />

      {/* Content wrapper */}
      <div className="relative max-w-7xl mx-auto">
        {/* SVG Timeline au centre */}
        <Timeline
          containerRef={containerRef}
          className="absolute left-1/2 -translate-x-1/2 top-20 bottom-26 flex items-start justify-center pointer-events-none"
          onProgressChange={handleProgressChange}
        />

        {/* Steps en quinconce */}
        <div className="relative z-10 grid grid-cols-2 gap-x-120 gap-y-20">
          {roadmapSteps.map((step, index) => (
            <FadeInUp
              key={index}
              className="grid grid-cols-subgrid col-span-2"
            >
              <div
                className={cn(
                  "max-w-md space-y-6 transition-opacity duration-300",
                  index % 2 ? "col-start-1" : "col-start-2",
                  isStepPassed(index) ? "opacity-100" : "opacity-30"
                )}
              >
                <span className="text-heading-xl block">[{index + 1}]</span>
                <h3 className="text-heading-md opacity-80">{step.title}</h3>
                <p className="text-paragraph-line opacity-80">{step.content}</p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
