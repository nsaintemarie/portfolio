"use client";

import { MaskInText } from "@/components/ui";
import { ProjectContent } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";

const heroLines = [
  { text: "LEAD", label: "[ARCHITECTURE]", align: "start", delay: 0.3 },
  { text: "FULLSTACK", label: "[FORMATION]", align: "center", delay: 0.5 },
  { text: "DEVELOPER", label: "[CONSEIL]", align: "end", delay: 0.7 },
] as const;

export function Context({ data }: { data: ProjectContent["context"] }) { // Typer

  const RADIUS = 29.625;
  const PERIMETER = 2 * Math.PI * RADIUS;
  console.log("PERIMETER", PERIMETER);
  return (
    <section
      className="relative h-screen w-full overflow-hidden snap-start snap-always bg-background-secondary flex flex-col justify-between gap-6 pb-22"
      aria-label="Context"
    >
      <div className="flex justify-between items-start gap-12 pl-16 pr-10.5 ">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Image
            src={data.picture1}
            alt="Photo de contact"
            width={272}
            height={400}
            className="h-full object-cover opacity-85"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-24 -ml-10"
        >
          <Image
            src={data.picture2}
            alt="Photo de contact"
            width={430}
            height={385}
            className="h-full object-cover opacity-85"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Image
            src={data.picture3}
            alt="Photo de contact"
            width={350}
            height={461}
            className="h-full object-cover opacity-85 -mt-1.5"
          />
        </motion.div>

        <motion.a
          whileHover='hover'
          initial='rest'
          href="/#projets"
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            className="mt-5"
          >
            <rect opacity="0.32" x="0.375" y="0.375" width="59.25" height="59.25" rx="29.625" stroke="#EAE3DC" stroke-width="0.75" />
            <motion.rect
              x="0.300"
              y="0.375"
              width="59.25"
              height="59.25"
              rx="29.625"
              stroke="white"
              strokeWidth="0.75"
              fill="none"
              strokeDasharray={186}
              strokeDashoffset={130}
              variants={{
                rest: { strokeDashoffset: 130 },
                hover: { strokeDashoffset: 0 },
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
              style={{
                transformOrigin: "50% 50%",
                transform: "rotate(80deg)", // départ en haut
              }}
            />
            <path opacity="0.32" d="M24 24L36.375 36.375" stroke="#EAE3DC" stroke-width="1.5" />
            <path opacity="0.32" d="M36.375 24L24 36.375" stroke="#EAE3DC" stroke-width="1.5" />
          </svg>
        </motion.a>


      </div>

      <div className="px-10 max-w-6xl mx-auto">
        <MaskInText delay={0.5} className="flex gap-6">
          {data.stack.map((stack) => (
            <span
              key={stack}
              className="text-paragraph text-primary/80 uppercase"
            >
              [{stack}]
            </span>
          ))}
        </MaskInText>
        <MaskInText as='h1' delay={0.7} className="text-heading-lg text-primary/80 mt-2 mb-5">
          {data.title}
        </MaskInText>
        <div className='grid grid-cols-2 gap-6 text-paragraph text-primary/70'>
          <MaskInText as='p' delay={0.9} animate>
            {data.description1}
          </MaskInText>
          <MaskInText as='p' delay={1.1} animate>
            {data.description2}
          </MaskInText>
        </div>
      </div>

    </section>
  );
}
