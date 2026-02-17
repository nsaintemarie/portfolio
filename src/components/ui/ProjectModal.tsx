"use client";

import { motion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/constants/animation";
import { ScrollContainer } from "./ScrollContainer";

interface ProjectModalProps {
  children: React.ReactNode;
}

export function ProjectModal({ children }: ProjectModalProps) {
  return (
    <motion.div
      className="absolute inset-0"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
    >
      <ScrollContainer className="h-full overflow-y-auto">
        {children}
      </ScrollContainer>
    </motion.div>
  );
}
