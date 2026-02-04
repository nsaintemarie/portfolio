"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
      className="min-h-screen flex flex-col justify-center px-28 py-26"
    >
      {/* Title */}
      <div className="mb-12">
        <h2 className="text-heading-lg">
          <MaskInText delay={0.2}>Des projets pensés pour durer</MaskInText>
          <MaskInText delay={0.5} className="pl-30">
            Architectures claires, produits utiles.
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
              className="group/item relative bg-black/16 px-8 py-10 hover:border-[1.5px] hover:border-white/24"
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
                      className="rounded-full px-3 py-1 text-paragraph-caps border border-white/8 uppercase"
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
            "hidden lg:block relative h-full",
            hoveredIndex == null && "peer-hover:hidden"
          )}
        >
          <Image
            src={currentImage}
            alt="Project preview"
            fill
            className="object-cover object-top transition-opacity duration-500"
          />
        </div>
      </motion.div>
    </section>
  );
}
