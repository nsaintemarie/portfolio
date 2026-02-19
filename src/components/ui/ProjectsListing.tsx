"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "./animations";
import { cn } from "@/lib/utils";
import { Project } from "@/types";

interface ProjectsListingProps {
  data: Project[];
  background?: "bg-background" | "bg-background-tertiary";
  replace?: boolean;
}

export function ProjectsListing({ data, background = "bg-background", replace = false }: ProjectsListingProps) {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

  const currentImage = hoveredProject?.image || "/projects/project-placeholder.webp";

  const cornerClass = (position: string) =>
    cn(
      "absolute text-white/0 group-hover/item:text-white transition-colors duration-150 text-sm/4",
      position,
      `group-hover/item:${background}`
    );

  return (
    <>
      {/* Mobile - Project Cards with images */}
      <FadeIn delay={1} className="flex flex-col gap-6 md:hidden">
        {data.map((project) => (
          <Link
            key={project.title}
            href={`/projects/${project.slug}`}
            replace={replace}
            className="group/item block"
          >
            <div className="relative w-full h-80 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-[50%_15%]"
              />
            </div>
            <div className="mt-4 space-y-4 px-6 py-8">
              <h3 className="text-2xl">{project.title}</h3>
              <div className="flex gap-3 flex-wrap">
                {project.stacks.map((stack) => (
                  <span
                    key={stack}
                    className="rounded-full px-3 py-1 text-paragraph-caps border border-white/8 uppercase"
                  >
                    {stack}
                  </span>
                ))}
              </div>
              <span className="text-xs font-medium uppercase letter-spacing-[-2%] block hover:opacity-60 transition-opacity">
                En savoir plus
              </span>
            </div>
          </Link>
        ))}
      </FadeIn>

      {/* Desktop - Project Cards with hover image */}
      <FadeIn delay={1} className="hidden md:grid md:grid-cols-3 gap-8 h-full my-auto">
        <div className="md:col-span-3 lg:col-span-2 flex flex-col gap-4 peer">
          {data.map((project) => (
            <Link
              key={project.title}
              href={`/projects/${project.slug}`}
              replace={replace}
              className="group/item relative bg-black/16 p-8 border-[1.5px] border-background hover:border-white/24"
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <span className={cornerClass("-top-0.5 left-0 -translate-x-1/2 -translate-y-1/2 px-1.5")}>+</span>
              <span className={cornerClass("-top-0.5 right-0 translate-x-1/2 -translate-y-1/2 p-0.5")}>+</span>
              <span className={cornerClass("bottom-0.5 left-0 -translate-x-1/2 translate-y-1/2 p-0.5")}>+</span>
              <span className={cornerClass("bottom-0.5 right-0 translate-x-1/2 translate-y-1/2 p-0.5")}>+</span>

              <div className="flex justify-between items-center gap-2">
                <h3 className="text-paragraph-line text-nowrap">{project.title}</h3>
                <div className="flex gap-3 flex-wrap justify-end">
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
            </Link>
          ))}
        </div>

        {/* Right - Image (1/3) */}
        <div className="md:hidden lg:block relative h-full border-[1.5px] border-background overflow-hidden bg-[#0E0E0E]">
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
                className={cn("object-cover", replace ? "object-[50%_15%]" : "object-top")}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </FadeIn>
    </>
  );
}
