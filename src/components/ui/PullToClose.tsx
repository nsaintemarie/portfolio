"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useScrollContainer } from "./ScrollContainer";

const THRESHOLD = 80;

export function PullToClose() {
  const router = useRouter();
  const scrollRef = useScrollContainer();
  const startY = useRef(0);
  const dragYRef = useRef(0);
  const isDragging = useRef(false);
  const [dragY, setDragY] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const onTouchStart = (e: TouchEvent) => {
      if (container.scrollTop > 4) return;
      startY.current = e.touches[0].clientY;
      dragYRef.current = 0;
      isDragging.current = true;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return;
      const delta = e.touches[0].clientY - startY.current;
      if (delta > 0) {
        e.preventDefault();
        dragYRef.current = delta;
        setDragY(delta);
      } else {
        // Scroll vers le haut → annule le drag
        isDragging.current = false;
        dragYRef.current = 0;
        setDragY(0);
      }
    };

    const onTouchEnd = () => {
      if (!isDragging.current) return;
      isDragging.current = false;
      if (dragYRef.current >= THRESHOLD) {
        router.back();
      } else {
        dragYRef.current = 0;
        setDragY(0);
      }
    };

    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchmove", onTouchMove, { passive: false });
    container.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchend", onTouchEnd);
    };
  }, [scrollRef, router]);

  const progress = Math.min(dragY / THRESHOLD, 1);

  return (
    <div
      className="md:hidden sticky top-0 z-10 flex justify-center py-4 bg-background-secondary"
      style={{ paddingTop: "max(1rem, env(safe-area-inset-top))" }}
    >
      <div
        className="w-10 h-1 rounded-full bg-primary/40"
        style={{
          opacity: 0.4 + progress * 0.6,
          transform: `scaleX(${1 + progress * 0.5})`,
          transition: isDragging.current ? "none" : "all 0.3s ease",
        }}
      />
    </div>
  );
}
