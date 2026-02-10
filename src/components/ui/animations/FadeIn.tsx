"use client";

import { motion } from "framer-motion";
import { VIEWPORT_ONCE } from "@/constants/animation";
import { cn } from "@/utils";

type FadeInProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "p" | "span";
};

export function FadeIn({
  children,
  delay = 0,
  className,
  as = "div",
}: FadeInProps) {
  const MotionComponent = motion[as];

  return (
    <MotionComponent
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
        delay,
        ease: "easeOut" as const,
      }}
      viewport={VIEWPORT_ONCE}
      className={cn(className)}
    >
      {children}
    </MotionComponent>
  );
}
