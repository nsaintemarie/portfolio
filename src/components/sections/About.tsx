"use client";

import { motion } from "framer-motion";
import { FramedImage } from "@/components/ui";

export function About() {
  return (
    <section id="a-propos" className="min-h-screen max-h-screen grid grid-cols-2 gap-6 lg:gap-10 px-12 lg:px-28 py-20 lg:py-26 snap-start snap-always overflow-hidden">
      {/* Left column: Title + Image 2 */}
      <div className="flex flex-col justify-between gap-6 lg:gap-10">
        {/* Title */}
        <h2 className="text-heading-lg flex flex-col">
          <div style={{ clipPath: "inset(0 0 0 0)" }}>
            <motion.span
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="block"
            >
              Structurer la
            </motion.span>
          </div>
          <div className="xl:self-center" style={{ clipPath: "inset(0 0 0 0)" }}>
            <motion.span
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="block pr-0.5"
            >
              complexité. Construire des
            </motion.span>
          </div>
          <div className="xl:self-end" style={{ clipPath: "inset(0 0 0 0)" }}>
            <motion.span
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="block"
            >
              solutions {"{ utiles }"}
            </motion.span>
          </div>
        </h2>

        {/* Image 2 - bottom left */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
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
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
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
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-12 min-h-1/2 xl:-ml-11"
        >
          <p className="text-paragraph-line opacity-80">
            Aujourd'hui, depuis plus de 3 ans, je suis développeuse full-stack. J'aime comprendre un besoin, en saisir la logique métier, imaginer une architecture claire et écrire un code solide qui servira vraiment le produit.
            <br /><br />
            On me reconnaît souvent une vraie capacité à prendre du recul, accompagner avec pédagogie et rendre compréhensible ce qui peut sembler complexe.
          </p>
          <p className="text-paragraph-line opacity-80 xl:mt-16">
            J'accompagne des startups, des équipes tech et des entrepreuneurs : pour donner vie à un projet, renforcer une équipe ou accompagner une organisation sur ses choix techniques.
            <br /><br />
            Mon approche est à la fois rigoureuse, flexible et orientée produit — parce que la technique n'a de sens que si elle répond à un besoin réel.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
