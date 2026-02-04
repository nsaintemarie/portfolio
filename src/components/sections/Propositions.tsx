"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/utils";
import { propositions } from "@/data/propositions";
import { EASE_OUT_EXPO, VIEWPORT_ONCE } from "@/constants/animation";

export function Propositions() {
  return (
    <section
      id="propositions"
      className="min-h-screen flex flex-col justify-center px-28 py-26 snap-start snap-always bg-background-secondary!"
    >
      <div className="flex gap-6 items-start">
        {propositions.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2 + index * 0.15,
              ease: EASE_OUT_EXPO,
            }}
            viewport={VIEWPORT_ONCE}
            className={cn(
              "flex-1 rounded-lg bg-white/3 p-8",
              index === 1 && "mt-20"
            )}
          >
            {/* Image zone with lines background */}
            <div
              className="relative h-48 mb-8 flex items-end justify-center"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to right, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0) 1px, transparent 1px, transparent 14px)",
                backgroundSize: "100% 14px",
              }}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={210}
                height={202}
                className="object-contain translate-y-2"
              />
            </div>

            {/* Title */}
            <h3 className="text-heading-md text-primary mb-3">{item.title}</h3>

            {/* Description */}
            <p className="text-paragraph text-primary/56">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
