"use client";

import Link from "next/link";
import { FadeIn } from "./animations";
import { cn } from "@/lib/utils";
import { Project } from "@/types";

interface ProjectsListingProps {
  data: Project[];
}

export function ProjectCards({ data }: ProjectsListingProps) {

  const cornerClass = (position: string) =>
    cn(
      "absolute text-white/0 group-hover/item:text-white transition-colors duration-150 text-sm/4",
      position,
      `group-hover/item:bg-background-tertiary`
    );

  return (
      <FadeIn delay={1} className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full my-auto">
        {data.map((project, index) => (
          <Link
            key={project.title}
            href={project.link}
            aria-label={`Voir le projet ${project.title}`}
            className="group/item relative bg-black/16 p-8 border-[1.5px] border-background hover:border-white/24"
          >
            <span aria-hidden="true" className={cornerClass("-top-0.5 left-0 -translate-x-1/2 -translate-y-1/2 px-1.5")}>+</span>
            <span aria-hidden="true" className={cornerClass("-top-0.5 right-0 translate-x-1/2 -translate-y-1/2 p-0.5")}>+</span>
            <span aria-hidden="true" className={cornerClass("bottom-0.5 left-0 -translate-x-1/2 translate-y-1/2 p-0.5")}>+</span>
            <span aria-hidden="true" className={cornerClass("bottom-0.5 right-0 translate-x-1/2 translate-y-1/2 p-0.5")}>+</span>

            <div className="flex flex-col justify-between gap-8 h-full">
              <div className="flex flex-col gap-2">

                <div className="flex gap-2 items-center opacity-20">
                  <span className="text-paragraph-caps font-medium uppercase letter-spacing-[-2%] tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="h-px flex-1 bg-foreground w-full" />
                </div>
                <h3 className="text-heading-md">{project.title}</h3>
                <div className="text-paragraph text-white/40 whitespace-pre-line">{project.content}</div>
              </div>
              <div className="text-paragraph text-white/50 font-medium"> {`>`} {project.results}</div>
              <div className="text-paragraph-caps font-medium uppercase letter-spacing-[-2%] tabular-nums opacity-20 group-hover/item:opacity-80 transition-opacity">
                En savoir plus
              </div>
            </div>
          </Link>
        ))}
      </FadeIn>
  );
}
