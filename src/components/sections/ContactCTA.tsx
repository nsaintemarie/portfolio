"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout";
import { Button } from "@/components/ui";

export function ContactCTA() {
  return (
    <Section>
      <div className="text-center">
        <div style={{ clipPath: "inset(0 0 0 0)" }}>
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl font-bold text-foreground"
          >
            Travaillons ensemble
          </motion.h2>
        </div>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mt-4 max-w-xl text-foreground-muted"
        >
          Vous avez un projet en tête ? Je serais ravie d&apos;en discuter avec vous.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-8"
        >
          <Button href="/contact">Me contacter</Button>
        </motion.div>
      </div>
    </Section>
  );
}
