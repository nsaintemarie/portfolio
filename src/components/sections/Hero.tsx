"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GridBackground, SocialLinks } from "@/components/ui";
import { EASE_OUT_EXPO } from "@/constants/animation";

const heroLines = [
  { text: "LEAD", label: "[ARCHITECTURE]", align: "start", delay: 0.3 },
  { text: "FULLSTACK", label: "[FORMATION]", align: "center", delay: 0.5 },
  { text: "DEVELOPER", label: "[CONSEIL]", align: "end", delay: 0.7 },
] as const;

export function Hero() {
  return (
    <section
      className="relative h-screen w-full overflow-hidden snap-start snap-always"
      aria-label="Introduction"
    >
      {/* Background image - optimized with Next/Image */}
      <Image
        src="/hero-bg.webp"
        alt=""
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden="true"
      />

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      {/* Vertical grid lines */}
      <GridBackground />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full px-5 pt-12 pb-26 md:pt-6 md:px-20">
        <motion.p
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-logo text-center"
        >
          NOEMIE S®
        </motion.p>

        <h1 className="flex flex-col w-full text-heading-xl uppercase gap-2.5 items-start">
          {heroLines.map((line) => (
            <div
              key={line.text}
              className={`relative ${
                line.align === "center"
                  ? "self-center lg:-translate-x-1/6"
                  : line.align === "end"
                  ? "self-end"
                  : ""
              }`}
            >
              {/* Label */}
              <div
                className="absolute lg:-top-6 left-full -translate-x-full"
                style={{ clipPath: "inset(0 0 0 0)" }}
              >
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1.3,
                    delay: line.delay - 0.1,
                    ease: EASE_OUT_EXPO,
                  }}
                  className="block text-paragraph-caps"
                  aria-hidden="true"
                >
                  {line.label}
                </motion.span>
              </div>
              {/* Text */}
              <div style={{ clipPath: "inset(-10% -10% 0 -10%)" }}>
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1.3,
                    delay: line.delay,
                    ease: EASE_OUT_EXPO,
                  }}
                  className="block"
                >
                  {line.text}
                </motion.span>
              </div>
            </div>
          ))}
        </h1>

        <div className="flex justify-between">
          {/* Description */}
          <div className="max-w-2/5" style={{ clipPath: "inset(0 0 0 0)" }}>
            <motion.p
              initial={{ y: "120%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.3, delay: 1.2, ease: EASE_OUT_EXPO }}
              className="text-paragraph-line"
            >
              Du site vitrine à l'application complexe, je construis et déploie
              vos sites et applications, ou accompagne vos équipes, pour des
              projets performants et évolutifs, pensés pour votre business.
            </motion.p>
          </div>

          {/* Social Links */}
          <SocialLinks
            showArrow
            animate
            baseDelay={1.2}
            linkClassName="text-paragraph-caps text-primary/80 uppercase hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          />
        </div>
      </div>
    </section>
  );
}
