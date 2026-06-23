"use client";

import { MaskInText, ProjectsListing } from "@/components/ui";
import { projectsListing as projects } from "@/data";

export function Projects() {

  return (
    <section
      id="projets"
      className="min-h-screen flex flex-col justify-center pb-26 pt-12 md:pt-20 md:px-20 lg:px-28 md:snap-start md:snap-always bg-background-secondary"
    >
      <h2 className="text-heading-lg px-5 mb-8 md:px-0">
        <MaskInText delay={0.2}>Des projets pensés pour durer</MaskInText>
        <MaskInText delay={0.5} className="text-right pr-0.5 md:text-left md:pl-30">
          Fondations solides, résultats concrets.
        </MaskInText>
      </h2>

      <ProjectsListing data={projects} />
    </section>
  );
}
