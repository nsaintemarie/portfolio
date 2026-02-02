"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout";
import { Button } from "@/components/ui";

const skills = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Git"];

export function About() {
  return (
    <Section id="a-propos">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <div style={{ clipPath: "inset(0 0 0 0)" }}>
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-3xl font-bold text-foreground"
            >
              À propos
            </motion.h2>
          </div>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-4 text-foreground-muted"
          >
            Je suis une développeuse web avec une passion pour la création de sites et d&apos;applications modernes. Je me spécialise dans les technologies front-end avec une solide expérience en React, Next.js et TypeScript.
          </motion.p>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-4 text-foreground-muted"
          >
            Mon approche combine design soigné et code propre pour livrer des produits qui répondent aux besoins des utilisateurs.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-8"
          >
            <Button href="/a-propos" variant="outline">
              En savoir plus
            </Button>
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="rounded-[var(--radius-lg)] bg-background-secondary p-8"
        >
          <h3 className="font-semibold text-foreground">Compétences</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="rounded-[var(--radius-full)] bg-background px-3 py-1 text-sm text-foreground-muted"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
