"use client";

import { motion } from "framer-motion";
import { EASE_OUT_EXPO, VIEWPORT_ONCE } from "@/constants/animation";
import { cn } from "@/lib/utils";

type FadeInUpProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number ;
  as?: "div" | "p" | "span" | "nav" | "a";
  animate?: boolean;
  [key: string]: unknown;
};

export function FadeInUp({
  children,
  delay = 0,
  className,
  y = 40,
  as = "div",
  animate = false,
  ...rest
}: FadeInUpProps) {
  const MotionComponent = motion[as];

  const animationProps = animate
    ? {
      initial: { opacity: 0, y },
      animate: { opacity: 1, y: 0 },
    }
    : {
      initial: { opacity: 0, y },
      whileInView: { opacity: 1, y: 0 },
      viewport: VIEWPORT_ONCE,
    };

  return (
    <MotionComponent
      {...animationProps}
      transition={{ duration: 0.8, delay, ease: EASE_OUT_EXPO }}
      className={cn(className)}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
}
