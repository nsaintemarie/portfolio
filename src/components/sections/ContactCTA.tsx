import { Section } from "@/components/layout";
import { Button } from "@/components/ui";

export function ContactCTA() {
  return (
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
  );
}
