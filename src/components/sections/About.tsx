"use client";

import { motion } from "framer-motion";
import { FramedImage, MaskInText } from "@/components/ui";
import { transitions, VIEWPORT_ONCE } from "@/constants/animation";

export function About() {
  return (
    <section
      id="a-propos"
      className="min-h-screen max-h-screen grid grid-cols-2 gap-6 lg:gap-10 px-12 lg:px-28 py-20 lg:pt-20 lg:pb-24 snap-start snap-always overflow-hidden"
    >
      {/* Left column: Title + Image 2 */}
      <div className="flex flex-col justify-between gap-6 lg:gap-10">
        {/* Title */}
        <h2 className="text-heading-lg flex flex-col">
          <MaskInText delay={0.2}>Structurer la</MaskInText>
          <MaskInText delay={0.4} wrapperClassName="xl:self-center" className="pr-0.5">
            complexité. Construire des
          </MaskInText>
          <MaskInText delay={0.6} wrapperClassName="xl:self-end">
            solutions {"{ utiles }"}
          </MaskInText>
        </h2>

        {/* Image 2 - bottom left */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={transitions.fadeInSlow(1)}
          viewport={VIEWPORT_ONCE}
          className="flex-1 max-w-md"
        >
          <FramedImage
            src="/about-placeholder.webp"
            alt="En action"
            className="w-full h-full"
            imageClassName="px-3 pb-22 pt-4"
          />
        </motion.div>
      </div>

{/* Right column: Image 1 + Text */}
      <div className="flex flex-col justify-between gap-6 lg:gap-10">
        {/* Image 1 - top right */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={transitions.fadeInSlow(0.8)}
          viewport={VIEWPORT_ONCE}
          className="flex-1 ml-8 xl:ml-20 mr-4"
        >
          <FramedImage
            src="/about-placeholder.webp"
            alt="Portrait"
            className="w-full h-full"
            imageClassName="p-3"
          />
        </motion.div>

        {/* Text - bottom right */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={transitions.fadeInSlow(1.2)}
          viewport={VIEWPORT_ONCE}
          className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-12 min-h-1/2 xl:-ml-7 xl:-mr-6"
        >
          <p className="text-paragraph-line opacity-80">
            Avant de devenir développeuse, je travaillais dans les operations d’une startup tech. C’est là que j’ai découvert le plaisir de résoudre des problèmes, d’améliorer des process… et l’envie de passer “de l’autre côté”, celui où l’on construit des solutions.
            <br />
            <br />
            J’ai changé de voie il y a plus de 3 ans, appris, beaucoup expérimenté, et rapidement évolué vers un rôle de lead technique. 
            Aujourd'hui, j'accompagne des startups, des équipes tech et des entrepreuneurs.
            <br />
            <br />
            
          </p>
          <p className="text-paragraph-line opacity-80 xl:mt-9">
            Je ne code pas juste pour livrer :
            Je structure vos projets pour qu'ils tiennent dans le temps, j'accompagne vos équipes pour qu'elles montent en compétences, et je vulgarise la tech pour que vous gardiez le contrôle.
            <br />
            <br />
            J’aime comprendre un besoin, en saisir la logique métier, imaginer une architecture claire et écrire un code solide qui servira vraiment le produit — parce que la technique n’a de sens que si elle répond à un besoin réel.          </p>
        </motion.div>
      </div>
    </section>
  );
}
