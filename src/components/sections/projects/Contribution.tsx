"use client";

import { MaskInText } from "@/components/ui";
import { ProjectContent } from "@/types";

export function Contribution({ data }: { data: ProjectContent["contribution"] }) {

  return (
    <section
      className="relative w-full overflow-hidden snap-start snap-always bg-foreground text-background-secondary py-24 px-10"
      aria-label="Contribution"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-20">
        <div>
          <MaskInText delay={0.5} className="text-paragraph uppercase">
            [L'APPROCHE]
          </MaskInText>
          <MaskInText as='h1' delay={0.7} className="text-heading-lg mt-2">
            {data.title}
          </MaskInText>
        </div>
        <MaskInText as='p' delay={0.9} animate className="space-y-6">
          {data.descriptions.map((desc, index) => (
            <div key={index}>
              <h3 className="text-paragraph-sm uppercase mb-2">{desc.title}</h3>
              <p className="text-paragraph">{desc.content}</p>
            </div>
          ))}
        </MaskInText>
      </div>
    </section>
  );
}
