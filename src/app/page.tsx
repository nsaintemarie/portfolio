import { Hero, Projects, About, ContactCTA, Propositions, Roadmap } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Propositions />
      <About />
      <Roadmap />
      <ContactCTA />
    </>
  );
}
