"use client";

import { createContext, useContext, useRef } from "react";

export const ScrollContainerContext = createContext<React.RefObject<HTMLElement | null>>({ current: null });

export function useScrollContainer() {
  return useContext(ScrollContainerContext);
}

export function ScrollContainer({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <ScrollContainerContext.Provider value={ref}>
      <div ref={ref} className={className}>
        {children}
      </div>
    </ScrollContainerContext.Provider>
  );
}
