"use client";

import { motion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/constants/animation";

export function ModalTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
    >
      {children}
    </motion.div>
  );
}
