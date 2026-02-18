import { Hero, Projects, About, Contact, Propositions, Roadmap } from "@/components/sections";

export default function Home() {
  return (
    <>
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
