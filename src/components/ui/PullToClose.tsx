"use client";

import { useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

const THRESHOLD = 120;

export function PullToClose() {
  const router = useRouter();
  const startY = useRef(0);
  const [dragY, setDragY] = useState(0);
  const isDragging = useRef(false);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const container = document.getElementById("main-content");
    // Only allow pull when scrolled to top
    if (container && container.scrollTop > 0) return;

    startY.current = e.touches[0].clientY;
    isDragging.current = true;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging.current) return;

    const delta = e.touches[0].clientY - startY.current;
    if (delta > 0) {
      setDragY(delta);
    }
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current = false;

    if (dragY >= THRESHOLD) {
      router.push("/#projets");
    } else {
      setDragY(0);
    }
  }, [dragY, router]);

  const progress = Math.min(dragY / THRESHOLD, 1);
  const opacity = 0.4 + progress * 0.6;

  return (
    <div
      className="md:hidden mt-8 flex justify-center py-3 bg-background-secondary rounded-t-2xl"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="w-1/3 h-1 rounded-full bg-primary/40 transition-transform"
        style={{
          opacity,
          transform: `scaleX(${1 + progress * 0.5})`,
          transition: isDragging.current ? "none" : "all 0.3s ease",
        }}
      />
    </div>
  );
}
