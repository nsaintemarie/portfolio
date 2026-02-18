"use client";

import { useEffect, useState } from "react";
import { useScrollContainer } from "./ScrollContainer";

type UseScrollProgressOptions = {
  containerRef: React.RefObject<HTMLElement | null>;
  onProgressChange?: (progress: number) => void;
};

export function useScrollProgress({ containerRef, onProgressChange }: UseScrollProgressOptions) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollRef = useScrollContainer();

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || !containerRef.current) return;

    const handleScroll = () => {
      const section = containerRef.current;
      if (!section) return;

      const sectionRect = section.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      const viewportHeight = window.innerHeight;

      const scrollableDistance = sectionHeight - viewportHeight;

      if (scrollableDistance <= 0) {
        setScrollProgress(0);
        onProgressChange?.(0);
        return;
      }

      const progress = Math.max(0, Math.min(1, -sectionTop / scrollableDistance));

      setScrollProgress(progress);
      onProgressChange?.(progress * 100);
    };

    scrollContainer.addEventListener("scroll", handleScroll);

    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, [scrollRef, containerRef, onProgressChange]);

  return scrollProgress;
}
