"use client";

import { FadeIn, FramedImage, MaskInText } from "@/components/ui";
import { about } from "@/data";

export function About() {
  return (
    <section
      id="a-propos"
      className="min-h-screen lg:max-h-screen flex flex-col gap-6 xl:gap-10 px-5 md:px-20 lg:px-28 pt-12 md:pt-16 pb-26 md:snap-start md:snap-always overflow-hidden bg-background-secondary!"
    >
      {/* Row 1: Title + Image 2 (portrait) */}
      <div className="flex md:gap-6 lg:gap-16 flex-1 justify-between">
        {/* Title */}
        <h2 className="text-heading-lg flex flex-col max-w-141.5 pb-10">
          <MaskInText delay={0.2}>Structurer la</MaskInText>
          <MaskInText delay={0.4} wrapperClassName="md:self-center" className="pr-0.5">
            complexité. Construire des
          </MaskInText>
          <MaskInText delay={0.6} wrapperClassName="md:self-end">
            solutions {"{ utiles }"}
          </MaskInText>
        </h2>

        {/* Image 2 - portrait */}
        <FadeIn delay={0.8} className="hidden md:block flex-1 max-w-162.5 mx-auto xl:-mb-6 px-10 py-2">
          <FramedImage
            src="/about-2.web"
            alt="Noémie Sainte-Marie, développeuse fullstack"
            sizes="(max-width: 768px) 0px, 50vw"
            className="w-full h-full"
            imageClassName="p-3 object-cover"
          />
        </FadeIn>
      </div>

      {/* Row 2: Image 1 + Text */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-6 lg:gap-10 flex-1">
        {/* Image 1 - en action */}
        <FadeIn delay={1} className="w-full md:w-72 xl:w-80 flex-1 lg:-mt-10 p-2">
          <FramedImage
            src="/about-1.webp"
            alt="Noémie Sainte-Marie en action"
            sizes="(max-width: 768px) 100vw, 320px"
            className="w-full h-full min-h-60"
            imageClassName="min-h-60  p-3 md:pb-20 md:pt-4 object-[50%38%]"
          />
        </FadeIn>

        {/* Text */}
        <FadeIn delay={1.2} className="md:max-w-7/12 grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-12 xl:pt-4 xl:pl-10">
          <p className="text-paragraph-line opacity-80 self-start whitespace-pre-line">
            {about.description1}
          </p>
          <p className="text-paragraph-line opacity-80 xl:self-end xl:-mb-10 whitespace-pre-line">
            {about.description2}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
