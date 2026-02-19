"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useScrollContainer } from "./ScrollContainer";

const THRESHOLD = 80;

export function PullToClose() {
  const router = useRouter();
  const scrollRef = useScrollContainer();
  const handleRef = useRef<HTMLDivElement>(null);
  const startY = useRef(0);
  const dragYRef = useRef(0);
  const isDragging = useRef(false);
  const [dragY, setDragY] = useState(0);

  useEffect(() => {
    const el = handleRef.current;
    if (!el) return;

    const onTouchStart = (e: TouchEvent) => {
      const container = scrollRef.current;
      // Tolérance de 4px pour le rubber-banding iOS
      if (container && container.scrollTop > 4) return;
      startY.current = e.touches[0].clientY;
      dragYRef.current = 0;
      isDragging.current = true;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return;
      const delta = e.touches[0].clientY - startY.current;
      if (delta > 0) {
        e.preventDefault(); // Bloque le rubber-band iOS
        dragYRef.current = delta;
        setDragY(delta);
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

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [scrollRef, router]);

  const progress = Math.min(dragY / THRESHOLD, 1);

  return (
    <div
      ref={handleRef}
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
