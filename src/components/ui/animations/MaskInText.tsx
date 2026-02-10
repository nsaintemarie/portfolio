"use client";

import { motion } from "framer-motion";
import { EASE_OUT_EXPO, VIEWPORT_ONCE } from "@/constants/animation";
import { cn } from "@/utils";

type MaskInTextProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  wrapperClassName?: string;
  as?: "span" | "p" | "h1" | "h2" | "h3" | "div";
  animate?: boolean; // true = animate on mount, false = whileInView
};

export function MaskInText({
  children,
  delay = 0,
  className,
  wrapperClassName,
  as = "span",
  animate = false,
}: MaskInTextProps) {
  const MotionComponent = motion[as];

  const animationProps = animate
    ? {
        initial: { y: "100%" },
        animate: { y: 0 },
      }
    : {
        initial: { y: "100%" },
        whileInView: { y: 0 },
        viewport: VIEWPORT_ONCE,
      };

  return (
    <div className={wrapperClassName} style={{ clipPath: "inset(0 0 0 0)" }}>
      <MotionComponent
        {...animationProps}
        transition={{ duration: 1, delay, ease: EASE_OUT_EXPO }}
        className={cn("block", className)}
      >
        {children}
      </MotionComponent>
    </div>
  );
}
