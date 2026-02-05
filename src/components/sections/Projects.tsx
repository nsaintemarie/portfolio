"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MaskInText } from "@/components/ui";
import { cn } from "@/utils";
import { projects } from "@/data/projects";
import { transitions, VIEWPORT_ONCE } from "@/constants/animation";

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const currentImage =
    hoveredIndex !== null
      ? projects[hoveredIndex].image
      : "/project-placeholder.webp";

  return (
    <section
      id="projets"
      className="min-h-screen flex flex-col justify-center px-28 py-20 snap-start snap-always"
    >
      {/* Title */}
      <div className="mb-8">
        <h2 className="text-heading-lg">
          <MaskInText delay={0.2}>Des projets pensés pour durer</MaskInText>
          <MaskInText delay={0.5} className="pl-30">
            Fondations solides, résultats concrets.
          </MaskInText>
        </h2>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={transitions.fadeInSlow(1)}
        viewport={VIEWPORT_ONCE}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full my-auto"
      >
        {/* Left - Project Cards (2/3) */}
        <div className="lg:col-span-2 flex flex-col gap-4 peer">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.href}
              className="group/item relative bg-black/16 p-8 border-[1.5px] border-background hover:border-white/24"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Corner + signs */}
              <span className="absolute -top-0.5 left-0 -translate-x-1/2 -translate-y-1/2 text-white/0 px-1.5 group-hover/item:text-white group-hover/item:bg-background transition-colors duration-150 text-sm/4">
                +
              </span>
              <span className="absolute -top-0.5 right-0 translate-x-1/2 -translate-y-1/2 text-white/0 p-0.5 group-hover/item:text-white group-hover/item:bg-background transition-colors duration-150 text-sm/4">
                +
              </span>
              <span className="absolute bottom-0.5 left-0 -translate-x-1/2 translate-y-1/2 text-white/0 p-0.5 group-hover/item:text-white group-hover/item:bg-background transition-colors duration-150 text-sm/4">
                +
              </span>
              <span className="absolute bottom-0.5 right-0 translate-x-1/2 translate-y-1/2 text-white/0 p-0.5 group-hover/item:text-white group-hover/item:bg-background transition-colors duration-150 text-sm/4">
                +
              </span>

              <div className="flex justify-between items-center">
                <h3 className="text-paragraph-line ">{project.title}</h3>
                <div className="flex gap-3">
                  {project.stacks.map((stack) => (
                    <span
                      key={stack}
                      className="rounded-full px-3 py-1 text-paragraph-sm border border-white/8 uppercase"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Right - Image (1/3) */}
        <div
          className={cn(
            "hidden lg:block relative h-full border-[1.5px] border-background overflow-hidden bg-[#0E0E0E]",
          )}
        >
          <AnimatePresence>
            <motion.div
              key={currentImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={currentImage}
                alt="Project preview"
                fill
                className="object-cover object-top"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
