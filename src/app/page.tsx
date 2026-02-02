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

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section className="flex min-h-[calc(100vh-4rem)] items-center">
        <div className="max-w-2xl">
          <p className="text-lg text-primary">Bonjour, je suis</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Noémie Sainte-Marie
          </h1>
          <p className="mt-4 text-xl text-foreground-muted md:text-2xl">
            Développeuse web passionnée par la création d&apos;expériences numériques élégantes et performantes.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/projets">Voir mes projets</Button>
            <Button href="/contact" variant="outline">
              Me contacter
            </Button>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
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

      {/* About Section */}
      <Section id="a-propos">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground">À propos</h2>
            <p className="mt-4 text-foreground-muted">
              Je suis une développeuse web avec une passion pour la création de sites et d&apos;applications modernes. Je me spécialise dans les technologies front-end avec une solide expérience en React, Next.js et TypeScript.
            </p>
            <p className="mt-4 text-foreground-muted">
              Mon approche combine design soigné et code propre pour livrer des produits qui répondent aux besoins des utilisateurs.
            </p>
            <div className="mt-8">
              <Button href="/a-propos" variant="outline">
                En savoir plus
              </Button>
            </div>
          </div>
          <div className="rounded-[var(--radius-lg)] bg-background-secondary p-8">
            <h3 className="font-semibold text-foreground">Compétences</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Git"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="rounded-[var(--radius-full)] bg-background px-3 py-1 text-sm text-foreground-muted"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* Contact CTA */}
      <Section background="secondary">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground">Travaillons ensemble</h2>
          <p className="mx-auto mt-4 max-w-xl text-foreground-muted">
            Vous avez un projet en tête ? Je serais ravie d&apos;en discuter avec vous.
          </p>
          <div className="mt-8">
            <Button href="/contact">Me contacter</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
