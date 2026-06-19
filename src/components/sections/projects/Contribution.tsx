"use client";
import { FadeIn, MaskInText } from "@/components/ui";
import { ProjectContent } from "@/types";

export function Contribution({ data, index }: { data: ProjectContent["contributions"][number], index: number }) {

  return (
    <section
      data-theme="light"
      className="relative w-full overflow-hidden bg-foreground text-background-secondary py-14 md:py-22 px-5 md:px-20"
      aria-label="Contribution"
      key={`contribution-${index}`}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20">
        <div>
          <MaskInText delay={0.2} className="text-paragraph uppercase">
            [L'APPROCHE]
          </MaskInText>
          <MaskInText as='h2' delay={0.5} className="text-heading-lg my-2">
            {data.title}
          </MaskInText>
          <MaskInText as='p' delay={0.8} className="text-paragraph-line hover:opacity-100 opacity-70 ml-1.5 cursor-default">
            {data.subtitle}
          </MaskInText>
        </div>
        <FadeIn delay={1.2} className="space-y-9">
          {data.descriptions.map((desc, index) => (
            <div key={index}>
              <h3 className="text-paragraph-caps uppercase mb-2">{desc.title}</h3>
              <div className="text-paragraph whitespace-pre-line" dangerouslySetInnerHTML={{ __html: desc.content }} />
            </div>
          ))}
        </FadeIn>
      </div>
    </section >
  );
}
