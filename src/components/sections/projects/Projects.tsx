"use client";

import { FadeIn, MaskInText, ProjectsListing } from "@/components/ui";
import { projectsListing as projects } from "@/data";
import Link from "next/link";

export function Projects({ current }: { current?: string }) {
  const filteredProjects = projects.filter((project) => project.slug !== current);

  return (
    <section
      className="min-h-screen flex flex-col justify-center pb-26 pt-12 md:pt-20 md:px-20 lg:px-28 bg-background-tertiary"
      aria-label="Autres projets"
    >
      <h2 className="text-heading-lg px-5 mb-8 md:px-0">
        <MaskInText delay={0.2}>Mes autres projets</MaskInText>
      </h2>

      <ProjectsListing
        data={filteredProjects}
        background="bg-background-tertiary"
        replace
      />
      <FadeIn delay={0.2} className="mx-5 md:hidden mt-4 flex justify-end">
        <Link
          href="/"
          className="text-paragraph-caps uppercase text-primary/60 hover:text-primary transition-colors"
        >
          <span className="mdi mdi-arrow-left" /> Retourner à l'accueil
        </Link>
      </FadeIn>
    </section>
  );
}
