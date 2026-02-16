"use client";

import { FadeIn, FramedImage, MaskInText } from "@/components/ui";

export function About() {
  return (
    <section
      id="a-propos"
      className="min-h-screen md:max-h-screen flex flex-col gap-6 xl:gap-10 px-4 md:px-6 lg:px-28 pt-14 xl:pt-16 pb-24 snap-start snap-always overflow-hidden"
    >
      {/* Row 1: Title + Image 2 (portrait) */}
      <div className="flex md:gap-6 lg:gap-20 flex-1 justify-between">
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
            src="/about-2.png"
            alt="Portrait"
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
            src="/about-1.png"
            alt="En action"
            className="w-full h-full min-h-60"
            imageClassName="min-h-60  p-3 md:pb-20 md:pt-4 object-[50%38%]"
          />
        </FadeIn>

        {/* Text */}
        <FadeIn delay={1.2} className="md:max-w-7/12 grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-12 xl:pt-4 xl:pl-10">
          <p className="text-paragraph-line opacity-80 self-start">
            Avant de devenir développeuse, je travaillais dans les operations d'une startup tech. C'est là que j'ai découvert le plaisir de résoudre des problèmes, d'améliorer des process… et l'envie de passer "de l'autre côté", celui où l'on construit des solutions.
            <br />
            <br />
            J'ai changé de voie il y a plus de 3 ans, appris, beaucoup expérimenté, et rapidement évolué vers un rôle de lead technique.
             Aujourd'hui, j'accompagne des startups, des équipes tech et des entrepreuneurs.

          </p>
          <p className="text-paragraph-line opacity-80 xl:self-end xl:-mb-10">

            Je ne code pas juste pour livrer :
            Je structure vos projets pour qu'ils tiennent dans le temps, j'accompagne vos équipes pour qu'elles montent en compétences, et je vulgarise la tech pour que vous gardiez le contrôle.
            <br />
            <br />
            J'aime comprendre un besoin, en saisir la logique métier, imaginer une architecture claire et écrire un code solide qui servira vraiment le produit — parce que la technique n'a de sens que si elle répond à un besoin réel.          </p>
        </FadeIn>
      </div>
    </section>
  );
}
