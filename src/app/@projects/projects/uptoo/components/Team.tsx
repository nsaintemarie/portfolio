"use client";
import { FadeIn, MaskInText } from "@/components/ui";
import { UptooContentType } from "@/types";

type TeamDesc = UptooContentType["team"]["descriptions"][0];

function TeamItem({ desc }: { desc: TeamDesc; }) {

  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-16 py-12 md:py-16 last:border-0 border-b border-background-secondary/10">
      <div className="flex-none md:w-52">
        <p className="text-heading-sm uppercase leading-snug opacity-80">{desc.title}</p>
        <p className="text-paragraph-sm opacity-40 italic md:mt-2 leading-snug">{desc.subtitle}</p>
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-paragraph-line opacity-80 max-w-2xl mb-4 last:mb-0 whitespace-pre-line">{desc.content}</p>

        {desc.cards && desc.cards.length > 0 && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-background-secondary/10">
            {desc.cards.map((card, i) => (
              <div key={i} className="md:first:pl-0 md:last:pr-0 p-5 md:p-6">
                <p className="text-paragraph-sm font-semibold mb-3">{card.label}</p>
                <p className="text-paragraph-sm opacity-60 leading-relaxed">{card.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function Team({ data }: { data: UptooContentType["team"] }) {
  return (
    <section
      id="autonomie"
      data-theme="light"
      className="relative w-full overflow-hidden bg-foreground text-background-secondary px-5 md:px-20 py-14"
      aria-label="Équipe autonome"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-2">
          <MaskInText delay={0.2} className="text-paragraph uppercase opacity-40 tracking-widest">
            Les réalisations · 03
          </MaskInText>
          <MaskInText as="h2" delay={0.5} className="text-heading-lg mt-2 mb-4">
            {data.title}
          </MaskInText>
          {data.subtitle && (
            <MaskInText as="p" delay={0.8} className="text-paragraph-line opacity-60 max-w-2xl italic leading-relaxed">
              {data.subtitle}
            </MaskInText>
          )}
        </div>

        <FadeIn delay={1.2}>
          {data.descriptions.map((desc, index) => (
            <TeamItem key={index} desc={desc} />
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
