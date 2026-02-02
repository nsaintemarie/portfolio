import { Section } from "@/components/layout";
import { Button } from "@/components/ui";

const skills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Git"];

export function About() {
  return (
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
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-[var(--radius-full)] bg-background px-3 py-1 text-sm text-foreground-muted"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
