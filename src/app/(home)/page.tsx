import { Hero, Projects, About, Contact, Propositions, Roadmap } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <Propositions />
      <Roadmap />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
