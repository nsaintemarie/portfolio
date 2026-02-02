"use client";

import { cn } from "@/utils";
import { motion } from "framer-motion";
import Image from "next/image";

const propositions = [
  {
    title: "Concevoir et lancer votre produit",
    description: "J’accompagne la création de votre produit de l’idée au déploiement, en prenant en charge toutes les étapes clés : conception, cadrage technique, développement et mise en production.",
    image: "/proposition-1.webp",
  },
  {
    title: "Renforcer et structurer votre équipe",
    description: "J’intègre vos équipes en tant que développeuse ou lead technique, selon vos enjeux du moment.Je peux prendre en charge des fonctionnalités clés, structurer le travail, faciliter la collaboration ou apporter une vision plus claire sur la direction technique d’un projet.",
    image: "/proposition-2.png",
  },
  {
    title: "Optimiser vos choix techniques",
    description: "Je vous accompagne,  que ce soit pour structurer votre stack, vous aider sur des migrations, améliorer la qualité de votre code ou faire monter une équipe en compétences. C’est un format flexible : quelques séances, un audit léger ou un suivi régulier, selon vos besoins.",
    image: "/proposition-3.png",
  },
];

export function Propositions() {
  return (
    <section
      id="propositions"
      className="min-h-screen flex flex-col justify-center px-28 py-26 snap-start snap-always bg-background-secondary!"
    >
      <div className="flex gap-6 items-start">
        {propositions.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2 + index * 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true, margin: "-100px" }}
            className={cn('flex-1 rounded-lg bg-white/3 p-8',
              index === 1 && "mt-20"
            )}
          >
            {/* Image zone with lines background */}
            <div
              className="relative h-48 mb-8 flex items-end justify-center"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to right, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0) 1px, transparent 1px, transparent 14px)",
                backgroundSize: "100% 14px",
              }}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={210}
                height={202}
                className="object-contain translate-y-2"
              />
            </div>

            {/* Title */}
            <h3 className="text-heading-md text-primary mb-3">{item.title}</h3>

            {/* Description */}
            <p className="text-paragraph text-primary/56">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
