"use client";

import { FadeIn, MaskInText, ProjectCards } from "@/components/ui";
import { projectsListing as projects } from "@/data";
import Link from "next/link";

const stacks = [
  "TypeScript",
  "Node.js",
  "NestJs",
  "Next.Js",
  "MongoDB",
  "ElasticSearch",
  "Redis",
  "GCP"
];
export function ProjectUptoo() {

  return (
    <section
      id="projets"
      className="min-h-screen flex flex-col justify-center pb-26 pt-12 px-5 md:pt-20 md:px-20 lg:px-28 md:snap-start md:snap-always bg-background-tertiary"
    >

      <div className="flex flex-col md:flex-row md:justify-between items-start mb-8">

        <h2 className="text-heading-lg">
          <MaskInText delay={0.2}>2022 - 2025, Uptoo</MaskInText>
          <MaskInText delay={0.5} className="text-right pr-0.5 md:text-left md:pl-28">
            Détail d'une transformation technique
          </MaskInText>
        </h2>
        <FadeIn delay={1} className="mt-5">
          <Link href="/projects/uptoo" className="text-paragraph-caps font-medium uppercase letter-spacing-[-2%] tabular-nums opacity-20 hover:opacity-80 transition-opacity">
            Voir le projet complet
          </Link>
        </FadeIn>
      </div>

      <ProjectCards data={projects} />
      <FadeIn delay={1} className="flex gap-3 flex-wrap mt-8 width-full justify-evenly">
        {stacks.map((stack) => (
          <span
            key={stack}
            className="rounded-full px-3 py-1 text-paragraph-sm border border-white/8 uppercase text-foreground/50"
          >
            {stack}
          </span>
        ))}
      </FadeIn>
    </section >
  );
}
