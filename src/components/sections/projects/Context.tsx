"use client";

import { FadeIn, FadeInUp, MaskInText } from "@/components/ui";
import { ProjectContent } from "@/types";
import Image from "next/image";

export function Context({ data }: { data: ProjectContent["context"] }) {
  return (
    <section
      className="relative md:h-screen w-full overflow-hidden bg-background-secondary flex flex-col justify-between gap-10 md:gap-6 pb-14 md:pb-21"
      aria-label="Context"
    >
      <div className="flex justify-between items-start gap-6 md:gap-12 pt-16 md:pt-0 md:pl-16 md:pr-10.5 md:mr-33">
        <FadeInUp>
          <Image
            src={data.picture1}
            alt={data.title}
            width={272}
            height={400}
            className="h-full object-cover hidden md:block"
          />
        </FadeInUp>
        <FadeInUp delay={0.2} className="mt-24 -ml-10">
          <Image
            src={data.picture2}
            alt={data.title}
            width={430}
            height={385}
            priority
            className="h-full object-cover"
          />
        </FadeInUp>
        <FadeInUp delay={0.4}>
          <Image
            src={data.picture3}
            alt={data.title}
            width={350}
            height={461}
            className="h-full object-cover -mt-1.5"
          />
        </FadeInUp>
      </div>

      <div className="px-5 md:px-20 max-w-7xl mx-auto">
        <MaskInText className="text-4xl tabular-nums opacity-60 tracking-wide">
          {data.date}
        </MaskInText>
        <MaskInText delay={0.5} className="flex flex-wrap space-x-2 md:space-x-6">
          {data.stack.map((stack) => (
            <span
              key={stack}
              className="text-paragraph text-primary/60 uppercase"
            >
              [{stack}]
            </span>
          ))}
        </MaskInText>
        <MaskInText as='h2' delay={0.7} className="text-heading-lg text-primary/80 mt-6 mb-8 md:mt-2 md:mb-5">
          {data.title}
        </MaskInText>
        <FadeIn delay={1.2} className="md:columns-2 gap-6 text-paragraph text-primary/70 flex flex-col md:block">
          {data.description.split("\n").filter(Boolean).map((paragraph, i) => (
            <p key={i}>{paragraph.trim()}</p>
          ))}
        </FadeIn>
      </div>

    </section>
  );
}
