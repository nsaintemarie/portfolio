"use client";

import { MaskInText, ProjectsListing } from "@/components/ui";
import { projectsListing as projects } from "@/data";

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
    </section>
  );
}
