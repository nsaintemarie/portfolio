"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils";
import { Timeline, MARKER_Y_PERCENTS } from "@/components/ui";

const steps = [
  {
    title: "On fait connaissance",
    content: "On échange sur votre idée, votre contexte et vos objectifs. Je vous pose quelques questions pour bien cerner le besoin, les contraintes et les priorités, afin de partir sur des bases claires.",
  },
  {
    title: "Je vous propose une approche claire",
    content: "Je vous envoie une proposition de mission avec un plan d'action, un planning et un budget. Vous savez exactement ce qui est inclus, ce qui ne l'est pas, et comment on avance étape par étape.",
  },
  {
    title: "On construit, étape par étape",
    content: "Je développe de façon itérative, avec des points réguliers et des démos. Vous voyez le projet prendre forme au fil de l'eau, ce qui permet d'ajuster tôt plutôt que de découvrir tout à la fin.",
  },
  {
    title: "On affine ensemble",
    content: "Vous testez, vous me faites vos retours, et j'ajuste en conséquence. L'objectif : améliorer l'expérience, corriger les détails, et s'assurer que le produit colle à vos usages réels.",
  },
  {
    title: "Mise en ligne et accompagnement",
    content: "Je gère la mise en production (déploiement, configuration, vérifications) et je vous accompagne après la livraison. En cas de question, de bug ou d'évolution, je reste disponible pour assurer une transition sereine.",
  },
];

export function Roadmap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [spotlightPos, setSpotlightPos] = useState(0);

  const handleProgressChange = useCallback((progress: number) => {
    setSpotlightPos(progress);
  }, []);

  // Déterminer si une étape est "passée" (spotlight au-delà de sa position Y)
  const isStepPassed = (index: number) => {
    const markerY = MARKER_Y_PERCENTS[index];
    return spotlightPos >= markerY - 10;
  };

  return (
    <section
      id="roadmap"
      ref={containerRef}
      className="bg-background-secondary min-h-screen snap-start snap-always relative p-26"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, rgba(255,255,255,0.12) 0px, rgba(255,255,255,0) 1px, transparent 1px, transparent 40px)",
          backgroundSize: "40px 100%",
          maskImage: "linear-gradient(to bottom, white 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, white 0%, transparent 100%)",
        }}
      />

      {/* Content wrapper */}
      <div className="relative max-w-7xl mx-auto">
        {/* SVG Timeline au centre */}
        <Timeline
          containerRef={containerRef}
          className="absolute left-1/2 -translate-x-1/2 top-20 bottom-26 flex items-start justify-center pointer-events-none"
          onProgressChange={handleProgressChange}
        />

        {/* Steps en quinconce */}
        <div className="relative z-10 grid grid-cols-2 gap-x-120 gap-y-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-subgrid col-span-2"
            >
              <div
                className={cn(
                  "max-w-md space-y-6 transition-opacity duration-300",
                  index % 2 ? "col-start-1" : "col-start-2",
                  isStepPassed(index) ? "opacity-100" : "opacity-30"
                )}
              >
                <span className="text-heading-xl block">[{index + 1}]</span>
                <h3 className="text-heading-md opacity-80">{step.title}</h3>
                <p className="text-paragraph-line opacity-80">{step.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
