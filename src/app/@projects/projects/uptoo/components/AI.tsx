"use client";
import { FadeIn, MaskInText } from "@/components/ui";
import { UptooContentType } from "@/types";

export function AIApproach({ data }: { data: UptooContentType["ai"] }) {
  return (
    <section
      id="ia"
      className="relative w-full overflow-hidden bg-background-secondary text-foreground py-14 px-5 md:px-20"
      aria-label="IA appliquée"
    >
      <div className="max-w-6xl mx-auto">
      <div className="mb-14 md:mb-18">
        <MaskInText delay={0.2} className="text-paragraph uppercase opacity-40 tracking-widest">
          Les réalisations · 02
        </MaskInText>
        <MaskInText as="h2" delay={0.5} className="text-heading-lg mt-2">
          {data.title}
        </MaskInText>
      </div>

      <FadeIn delay={0.8} className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
        {data.subtitle && (
          <div className="flex-none md:w-72">
            <p className="text-paragraph italic opacity-40 leading-relaxed">{data.subtitle}</p>
          </div>
        )}

        <div className="flex-1 min-w-0">
          {data.descriptions.map((desc, index) => (
            <div
              key={index}
              className="pb-10 mb-10 border-b border-foreground/10 last:border-b-0"
            >
              {desc.title && (
                <p className="text-heading-sm uppercase opacity-40 mb-3 tracking-widest">{desc.title}</p>
              )}
              <p className="text-paragraph-line opacity-80 max-w-2xl">{desc.content}</p>

              {desc.detail && (
                <details className="border-t border-foreground/10 pt-4 mt-6 group">
                  <summary className="list-none cursor-pointer flex justify-between items-center py-1 select-none">
                    <span className="text-paragraph-sm uppercase opacity-40 tracking-widest">Détail technique</span>
                    <span className="text-paragraph opacity-30 group-open:hidden">+</span>
                    <span className="text-paragraph opacity-30 hidden group-open:block">−</span>
                  </summary>
                  <p className="text-paragraph-sm opacity-40 mt-4 leading-relaxed max-w-2xl">{desc.detail}</p>
                </details>
              )}
            </div>
          ))}
        </div>
      </FadeIn>
      </div>
    </section>
  );
}
