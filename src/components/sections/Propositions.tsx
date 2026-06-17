"use client";

import { cn } from "@/lib/utils";
import { propositions } from "@/data/propositions";
import { FadeInUp, GridBackground, MaskInText } from "../ui";

export function Propositions() {
  return (
    <section
      id="propositions"
      className="min-h-screen flex flex-col px-5 md:px-20 lg:px-28 pb-26 pt-12 md:pt-20  md:snap-start md:snap-always bg-background-tertiary!"
    >
      <MaskInText as="h2" className="text-heading-lg px-5 mb-12 md:px-0" delay={0.2}>Vous reconnaissez l'une de ces situations ?</MaskInText>

      <div className="flex flex-1 flex-col md:flex-row flex-wrap gap-5 md:gap-6 items-start">
        {propositions.map((item, index) => (
          <FadeInUp
            key={item.title}
            y={40}
            delay={0.4 + index * 0.15}
            className={cn(
              "flex-1 rounded-lg bg-white/3 p-8 md:p-6 lg:p-8 min-w-60 group relative cursor-default",
              index === 1 && "md:self-end"
            )}
          >
            <GridBackground lineSpacing={16} />
            <h3 className={cn(
              "inline text-heading-md text-primary",
              "bg-[linear-gradient(--theme(--color-primary/0.6),--theme(--color-primary/0.6))] bg-no-repeat bg-bottom-left bg-size-[0%_1px]",
              "transition-[background-size] duration-400 group-hover:bg-size-[100%_1px]")}>
              {item.title}
            </h3>

            <p className="text-paragraph text-primary/56 mt-6">{item.description}</p>
          </FadeInUp>
        ))}
      </div>
    </section>
  );
}
