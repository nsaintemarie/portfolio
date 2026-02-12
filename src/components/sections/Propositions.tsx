"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/utils";
import { propositions } from "@/data/propositions";
import { EASE_OUT_EXPO, VIEWPORT_ONCE } from "@/constants/animation";
import { FadeInUp } from "../ui";

export function Propositions() {
  return (
    <section
      id="propositions"
      className="min-h-screen flex justify-center px-5 md:px-10 lg:px-28 pt-12 pb-22 lg:py-26 snap-start snap-always bg-background-secondary!"
    >
      <div className="flex flex-col md:flex-row gap-5 md:gap-6 items-start">
        {propositions.map((item, index) => (
          <FadeInUp
            key={item.title}
            y={40}
            delay={0.2 + index * 0.15}
            className={cn(
              "flex-1 rounded-lg bg-white/3 p-8 md:p-6 lg:p-8",
              index === 1 && "md:self-end"
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
                className="object-contain translate-y-2 md:translate-y-0 lg:translate-y-2"
              />
            </div>

            {/* Title */}
            <h3 className="text-heading-md text-primary mb-3">{item.title}</h3>

            {/* Description */}
            <p className="text-paragraph text-primary/56">{item.description}</p>
          </FadeInUp>
        ))}
      </div>
    </section>
  );
}
