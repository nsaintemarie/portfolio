"use client";

import { FadeIn, MaskInText } from "@/components/ui";
import { ProjectContent } from "@/types";
import Image from "next/image";

export function Results({ data }: { data: ProjectContent["results"] }) {

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden bg-foreground-white text-background-secondary py-24 px-10"
      aria-label="Résultats"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-20">
        <div>
          <MaskInText delay={0.2} className="text-paragraph uppercase">
            [LES RÉSULTATS]
          </MaskInText>
          <MaskInText as='h1' delay={0.5} className="text-heading-lg mt-2 mb-10">
            {data.title}
          </MaskInText>
          <FadeIn delay={1.2} className="space-y-9">
            {data.descriptions.map((desc, index) => (
              <div key={index}>
                <h3 className="text-paragraph-sm uppercase mb-2">{desc.title}</h3>
                <p className="text-paragraph">{desc.content}</p>
              </div>
            ))}
          </FadeIn>
        </div>
        <FadeIn delay={1.3} className="flex flex-col items-center gap-8">
          <Image
            src={data.picture1}
            alt="Photo de contact"
            width={460}
            height={301}
            className="h-full object-contain opacity-95"
          />
          <Image
            src={data.picture2}
            alt="Photo de contact"
            width={460}
            height={301}
            className="h-full object-contain opacity-95"
          />
        </FadeIn>
      </div>
    </section>
  );
}
