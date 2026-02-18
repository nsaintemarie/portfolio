import { Navigation } from "@/components/layout/Navigation";
import { Hero, Projects, About, Contact, Propositions, Roadmap } from "@/components/sections";
import { SkipLink } from "@/components/ui/SkipLink";

export default function Home() {
  return (
    <>
    {/* Navigation */}
      <Navigation />
      <SkipLink />

      {/* Sections */}
      <Hero />
      <Projects />
      <About />
      <Propositions />
      <Roadmap />
      <Contact />
    </>
  );
}
