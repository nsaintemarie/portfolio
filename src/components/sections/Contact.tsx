"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="min-h-screen max-h-screen snap-start snap-always px-26 pt-16 pb-22 flex flex-col justify-between bg-background-tertiary">
      <div className="flex justify-between items-end mr-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2/3 mb-8"
        >
          <h2 className="text-heading-lg">
            Transformons une idée en produit.<br />
            Contactez-moi pour en parler.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-8"
        >
          <div className="space-y-2">
            <span className="text-paragraph-sm opacity-56 block">Reseau</span>
            <a
              href="https://linkedin.com/in/noemie-sainte-marie"
              target="_blank"
              rel="noopener noreferrer"
              className="text-paragraph block hover:opacity-80 transition-opacity"
            >
              LinkedIn
            </a>
          </div>
          <div className="space-y-2">
            <span className="text-paragraph-sm opacity-56 block">Email</span>
            <a
              href="mailto:contact@noemie-sainte-marie.fr"
              className="text-paragraph block hover:opacity-80 transition-opacity"
            >
              contact@noemie-sainte-marie.fr
            </a>
          </div>
        </motion.div>
      </div>

      {/* Second view */}
      <div className="flex justify-between gap-24 items-end">
        {/* Left - Contact form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          onSubmit={handleSubmit}
          className="w-full flex-1 space-y-6"
        >
          <div>
            <label htmlFor="name" className="text-paragraph-sm opacity-56 block">Nom *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-primary/56 py-2 text-paragraph-line focus-visible:outline-none!"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-paragraph-sm opacity-56 block">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-primary/56 py-2 text-paragraph-line focus-visible:outline-none!"
            />
          </div>
          <div>
            <label htmlFor="phone" className="text-paragraph-sm opacity-56 block">Numéro de téléphone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-primary/56 py-2 text-paragraph-line focus-visible:outline-none!"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-paragraph-sm opacity-56 block">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={3}
              className="w-full bg-transparent border-b border-primary/56 py-2 text-paragraph-line focus-visible:outline-none! resize-none"
            />
          </div>
          <button
            type="submit"
            className="relative overflow-hidden text-paragraph-sm uppercase w-full border border-primary/56 text-primary/90 py-3 rounded-sm cursor-pointer hover:border-primary hover:text-background-tertiary transition-all before:absolute before:inset-0 before:bg-primary/80 before:origin-left before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-600 before:ease-out"
          >
            <span className="relative z-10">Envoyer</span>
          </button>
        </motion.form>

        {/* Right - Photo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative w-96 aspect-square -mb-22"
        >
          <Image
            src="/contact.png"
            alt="Photo de contact"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
