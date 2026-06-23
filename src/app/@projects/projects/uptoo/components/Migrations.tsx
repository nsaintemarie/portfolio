"use client";
import { FadeIn, MaskInText } from "@/components/ui";
import { UptooContentType } from "@/types";

type MigrationDesc = UptooContentType["migrations"]["descriptions"][0];

function MigrationItem({ desc }: { desc: MigrationDesc }) {

  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-16 py-12 md:py-16 border-b border-background-secondary/10 last:border-b-0">
      <div className="flex-none md:w-46 md:pr-10 ">
        <div className="flex flex-wrap md:flex-col md:gap-1 gap-x-2 items-center md:items-start">
          <p className="hidden md:block text-heading-sm font-light opacity-50 leading-snug uppercase">{desc.title.from}</p>
          <p className="text-paragraph opacity-25 my-1 hidden md:block">↓</p>
          <p className="hidden md:block text-heading-sm font-semibold leading-snug uppercase">{desc.title.to}</p>
          <p className="text-heading-sm font-semibold leading-snug uppercas md:hidden block">{desc.title.from} → {desc.title.to}</p>
          <p className="text-paragraph-sm opacity-40 italic md:mt-2 leading-snug">{desc.title.subtitle}</p>
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6">
          <div>
            <p className="text-paragraph-sm uppercase opacity-40 mb-2 tracking-widest">Le problème</p>
            <p className="text-paragraph-line opacity-80">{desc.content.problem}</p>
          </div>
          <div>
            <p className="text-paragraph-sm uppercase opacity-40 mb-2 tracking-widest">Le choix</p>
            <p className="text-paragraph-line opacity-80">{desc.content.solution}</p>
          </div>
          <div>
            <p className="text-paragraph-sm uppercase opacity-40 mb-2 tracking-widest">Mon rôle</p>
            <p className="text-paragraph-line opacity-80">{desc.content.role}</p>
          </div>
        </div>

        {desc.content.detail && (
          <details className="md:border-t md:border-background-secondary/8 pt-4 group">
            <summary className="list-none cursor-pointer flex justify-between items-center py-1 select-none">
              <span className="text-paragraph-sm uppercase opacity-40 tracking-widest">Détail technique</span>
              <span className="text-paragraph opacity-30 group-open:hidden">+</span>
              <span className="text-paragraph opacity-30 hidden group-open:block">−</span>
            </summary>
            <p className="text-paragraph-sm opacity-50 mt-4 leading-relaxed max-w-3xl">{desc.content.detail}</p>
          </details>
        )}
      </div>
    </div>
  );
}


export function Migrations({ data }: { data: UptooContentType["migrations"] }) {
  return (
    <section id="anticiper" aria-label="Migrations" className="bg-foreground text-background-secondary py-14 px-5 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-2">
          <MaskInText delay={0.2} className="text-paragraph uppercase opacity-40 tracking-widest">
            Les réalisations · 01
          </MaskInText>
          <MaskInText as="h2" delay={0.5} className="text-heading-lg my-2">
            {data.title}
          </MaskInText>
          <MaskInText as="p" delay={0.8} className="text-paragraph-line opacity-60 max-w-xl italic leading-relaxed">
            {data.subtitle}
          </MaskInText>
        </div>

        <div data-theme="light">
          <FadeIn delay={1.2}>
            {data.descriptions.map((desc, index) => (
              <MigrationItem key={index} desc={desc} />
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
