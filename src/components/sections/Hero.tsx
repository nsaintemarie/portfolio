"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FadeIn, GridBackground, SocialLinks } from "@/components/ui";
import { EASE_OUT_EXPO } from "@/constants/animation";

const heroLines: { text: string; label: string; align: string; delay: number }[] = [
  { text: "LEAD", label: "[ARCHITECTURE]", align: "start", delay: 0.3 },
  { text: "FULLSTACK", label: "[ARBITRAGES]", align: "center", delay: 0.5 },
  { text: "DEVELOPER", label: "[TRANSMISSION]", align: "end", delay: 0.7 },
]

const stacksLeft = [
  "TypeScript",
  "Node.js",
  "NestJs",
  "Next.Js",
];

const stacksRight = [
  "MongoDB",
  "ElasticSearch",
  "Redis",
  "GCP"
];


export function Hero() {
  return (
    <section
      className="relative h-dvh w-full overflow-hidden md:snap-start md:snap-always"
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

      <motion.div
        className="absolute z-10 md:flex gap-3 bottom-38 md:top-0 md:left-0 w-1/2 justify-around pl-3 md:pl-5 pt-1.5 lg:pt-2.5 md:pr-8.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
      >
        {stacksLeft.map((stack) => (
          <span
            key={stack}
            className="px-3 py-1 text-paragraph-sm uppercase text-foreground/40"
          >
            {stack}
          </span>
        ))}
      </motion.div>
      <motion.div
        className="absolute z-10 md:flex gap-3 bottom-34 md:top-0 md:right-0 w-1/2 justify-around pl-3 md:pr-5 pt-1.5 lg:pt-2.5 md:pl-8.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
      >
        {stacksRight.map((stack) => (
          <span
            key={stack}
            className="px-3 py-1 text-paragraph-sm uppercase text-foreground/40"
          >
            {stack}
          </span>
        ))}
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full px-5 pt-6 pb-28 md:pb-26 md:px-20 xl:px-28">
        <motion.p
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-logo text-center"
        >
          NOEMIE S®
        </motion.p>
        {/* </div> */}

        <div>
          <h1 className="flex flex-col w-full text-heading-xl uppercase gap-2.5 items-start">
            {heroLines.map((line) => (
              <div
                key={line.text}
                className={`relative ${line.align === "center"
                  ? "md:self-center md:-translate-x-1/6"
                  : line.align === "end"
                    ? "md:self-end"
                    : ""
                  }`}
              >
                {/* Label - desktop only */}
                <div
                  className="hidden md:block absolute -top-6 left-full -translate-x-full"
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

          {/* Tags - mobile only */}
          <div
            className="flex gap-4 mt-4 md:hidden"
            style={{ clipPath: "inset(0 0 0 0)" }}
          >
            {heroLines.map((line) => (
              <motion.span
                key={line.label}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.3,
                  delay: 0.9,
                  ease: EASE_OUT_EXPO,
                }}
                className="block text-paragraph-caps"
              >
                {line.label}
              </motion.span>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-8 md:flex-row md:justify-between">
            {/* Description */}
            <div className="max-w-sm lg:max-w-2/5" style={{ clipPath: "inset(0 0 0 0)" }}>
              <motion.p
                initial={{ y: "150%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.3, delay: 1.2, ease: EASE_OUT_EXPO }}
                className="text-paragraph-line"
              >
                Je rejoins votre équipe tech en immersion : je code avec elle, j'identifie les frictions, je tiens l'architecture dans le temps et je rends les choix techniques lisibles pour tous, devs comme produit.
                <br />Pour aller vite aujourd'hui sans que chaque évolution coûte plus cher demain.
              </motion.p>
            </div>

            {/* Social Links */}
            <SocialLinks
              showArrow
              animate
              baseDelay={1.2}
              className="items-end"
              linkClassName="text-paragraph-caps text-primary/80 uppercase hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
