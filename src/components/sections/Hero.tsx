"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg-2.webp')" }}
      />

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Vertical grid lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, rgba(255,255,255,0.12) 0px, rgba(255,255,255,0) 1px, transparent 1px, transparent 40px)",
          backgroundSize: "40px 100%",
          maskImage: "linear-gradient(to bottom, white 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, white 0%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full px-5 pt-12 pb-26 md:pt-6 md:px-20">
        <motion.p
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-logo text-primary text-center"
        >
          NOEMIE S®
        </motion.p>

        <div className="flex flex-col w-full text-primary text-heading-xl uppercase gap-2.5 items-start">
          {/* LEAD */}
          <div className="relative">
            {/* Label - mask in first */}
            <div
              className="absolute lg:-top-6 left-full -translate-x-full"
              style={{ clipPath: "inset(0 0 0 0)" }}
            >
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.3, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="block text-paragraph-caps text-primary"
              >
                [ARCHITECTURE]
              </motion.span>
            </div>
            {/* Text - mask in after */}
            <div style={{ clipPath: "inset(-10% -10% 0 -10%)" }}>
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.3, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                LEAD
              </motion.span>
            </div>
          </div>

          {/* FULLSTACK */}
          <div className="relative self-center lg:-translate-x-1/6">
            {/* Label - mask in first */}
            <div
              className="absolute lg:-top-6 left-full -translate-x-full"
              style={{ clipPath: "inset(0 0 0 0)" }}
            >
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.3, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="block text-paragraph-caps text-primary"
              >
                [FORMATION]
              </motion.span>
            </div>
            {/* Text - mask in after */}
            <div style={{ clipPath: "inset(-10% -10% 0 -10%)" }}>
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.3, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                FULLSTACK
              </motion.span>
            </div>
          </div>

          {/* DEVELOPER */}
          <div className="relative self-end">
            {/* Label - mask in first */}
            <div
              className="absolute lg:-top-6 left-full -translate-x-full"
              style={{ clipPath: "inset(0 0 0 0)" }}
            >
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.3, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="block text-paragraph-caps text-primary"
              >
                [CONSEIL]
              </motion.span>
            </div>
            {/* Text - mask in after */}
            <div style={{ clipPath: "inset(-10% -10% 0 -10%)" }}>
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.3, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                DEVELOPER
              </motion.span>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          {/* Description - mask in */}
          <div
            className="max-w-2/5"
            style={{ clipPath: "inset(0 0 0 0)" }}
          >
            <motion.p
              initial={{ y: "120%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.3, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-paragraph-line text-primary"
            >
              Du site vitrine à l'application complexe, je construis et déploie vos sites et applications, ou accompagne vos équipes, pour des projets performants et évolutifs, pensés pour votre business.
            </motion.p>
          </div>

          {/* Links - slide in from bottom */}
          <div className="flex flex-col gap-1 text-paragraph-caps text-primary/80 uppercase">
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-1 hover:text-primary transition-colors"
            >
              Github <span className="mdi mdi-arrow-bottom-right" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-1 hover:text-primary transition-colors"
            >
              Linkedin <span className="mdi mdi-arrow-bottom-right" />
            </motion.a>
            <motion.a
              href="https://malt.fr"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-1 hover:text-primary transition-colors"
            >
              Malt <span className="mdi mdi-arrow-bottom-right" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
