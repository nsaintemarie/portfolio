import { Section } from "@/components/layout";
import { Button, Card } from "@/components/ui";

const projects = [
  {
    title: "Projet 1",
    description: "Description du premier projet. Technologies utilisées et objectifs atteints.",
    href: "/projets/projet-1",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "Projet 2",
    description: "Description du deuxième projet. Technologies utilisées et objectifs atteints.",
    href: "/projets/projet-2",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
  },
  {
    title: "Projet 3",
    description: "Description du troisième projet. Technologies utilisées et objectifs atteints.",
    href: "/projets/projet-3",
    tags: ["Vue.js", "Firebase", "SCSS"],
  },
];

export function Projects() {
  return (
    <Section id="projets" background="secondary">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-foreground">Projets récents</h2>
        <p className="mt-2 text-foreground-muted">
          Découvrez une sélection de mes derniers travaux.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title} {...project} />
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button href="/projets" variant="secondary">
          Voir tous les projets
        </Button>
      </div>
    </Section>
  );
}
