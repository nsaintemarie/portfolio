"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/constants/animation";
import { useRouter } from "next/navigation";
import { useScrollContainer } from "./ScrollContainer";

const CIRCUMFERENCE = 186;

export function CloseButton() {
  const [progress, setProgress] = useState(0);
  const [isLight, setIsLight] = useState(false);
  const router = useRouter();
  const scrollRef = useScrollContainer();

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const lightSections = document.querySelectorAll("[data-theme='light']");
    // Button center Y: top-5 (20px) + half of 60px = 50px
    const buttonCenterY = 50;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const maxScroll = scrollHeight - clientHeight;
      if (maxScroll > 0) {
        setProgress(scrollTop / maxScroll);
      }

      // Check if button overlaps a light section
      let light = false;
      lightSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= buttonCenterY && rect.bottom >= buttonCenterY) {
          light = true;
        }
      });
      setIsLight(light);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [scrollRef]);

  const strokeDashoffset = 130 * (1 - progress);
  const strokeColor = isLight ? "#221C1C" : "#EAE3DC";

  return (
    <motion.button
      onClick={() => router.back()}
      className="fixed top-5 right-10.5 z-50 hidden md:block cursor-pointer"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: EASE_OUT_EXPO }}
    >
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
      >
        <rect
          opacity="0.32"
          x="0.375"
          y="0.375"
          width="59.25"
          height="59.25"
          rx="29.625"
          stroke={strokeColor}
          strokeWidth="0.75"
          style={{ transition: "stroke 0.3s ease" }}
        />
        <rect
          x="0.300"
          y="0.375"
          width="59.25"
          height="59.25"
          rx="29.625"
          stroke={strokeColor}
          strokeWidth="0.75"
          fill="none"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={strokeDashoffset}
          style={{
            transformOrigin: "50% 50%",
            transform: "rotate(80deg)",
            transition: "stroke-dashoffset 0.1s linear, stroke 0.3s ease",
          }}
        />
        <path
          opacity="0.32"
          d="M24 24L36.375 36.375"
          stroke={strokeColor}
          strokeWidth="1.5"
          style={{ transition: "stroke 0.3s ease" }}
        />
        <path
          opacity="0.32"
          d="M36.375 24L24 36.375"
          stroke={strokeColor}
          strokeWidth="1.5"
          style={{ transition: "stroke 0.3s ease" }}
        />
      </svg>
    </motion.button>
  );
}
