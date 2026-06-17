"use client";

import { useState } from "react";
import Image from "next/image";
import { FadeInUp, ObfuscatedEmail } from "@/components/ui";
import { cn } from "@/lib/utils/cn";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="min-h-screen md:max-h-screen md:snap-start md:snap-always px-5 md:px-20 lg:px-28 pt-12 md:pt-20 pb-26 flex flex-col justify-between bg-background-tertiary gap-12 md:gap-0">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end mr-10">
        <FadeInUp delay={0.2} className="lg:max-w-2/3 mb-12 md:mb-8">
          <h2 className="text-heading-lg">
            Si aller vite commence à vous ralentir, parlons-en.
          </h2>
        </FadeInUp>
        <FadeInUp className="flex flex-col gap-6 md:gap-8">
          <div className="space-y-1 md:space-y-2">
            <span className="text-paragraph-sm opacity-56 block">Reseau</span>
            <a
              href="https://www.linkedin.com/in/no%C3%A9mie-sainte-marie-8209b9160/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-paragraph block hover:opacity-80 transition-opacity underline underline-offset-2"
            >
              LinkedIn
            </a>
          </div>
          <div className="space-y-1 md:space-y-2">
            <span className="text-paragraph-sm opacity-56 block">Email</span>
            <ObfuscatedEmail user="contact" domain="noemiesaintemarie.com" className="text-paragraph block hover:opacity-80 transition-opacity underline underline-offset-2" />
          </div>
        </FadeInUp>
      </div>

      <div className={cn("flex justify-between gap-24 ", status !== "success" ? "items-end" : "items-start")}>
        {status === "success" ? (
          <FadeInUp className="w-full flex-1 flex flex-col items-center gap-10">
            <div className="space-y-6">
              <p className="text-heading-xl opacity-60"> MERCI </p>
              <p className="text-paragraph-lines text-foreground">Message envoyé ! Je vous répondrai rapidement.</p>
            </div>
            <button
              onClick={() => setStatus("idle")}
              className="relative overflow-hidden text-paragraph-sm uppercase w-full border border-primary/56 text-primary/90 py-3 rounded-sm cursor-pointer hover:border-primary hover:text-background-tertiary transition-all before:absolute before:inset-0 before:bg-primary/80 before:origin-left before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-600 before:ease-out"
            >
              <span className="relative z-10">
                Envoyer un autre message
              </span>
            </button>
          </FadeInUp>
        ) : (
          <FadeInUp className="w-full flex-1">
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
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
              {status === "error" && (
                <p className="text-paragraph-sm text-red-800">Une erreur s&apos;est produite. Veuillez réessayer.</p>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="relative overflow-hidden text-paragraph-sm uppercase w-full border border-primary/56 text-primary/90 py-3 rounded-sm cursor-pointer hover:border-primary hover:text-background-tertiary transition-all before:absolute before:inset-0 before:bg-primary/80 before:origin-left before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-600 before:ease-out disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10">
                  {status === "loading" ? "Envoi en cours…" : "Envoyer"}
                </span>
              </button>
            </form>
          </FadeInUp>
        )}

        {/* Right - Photo */}
        <FadeInUp delay={0.2} className="hidden md:block relative md:w-1/2 lg:w-96 aspect-square -mb-26">
          <Image
            src="/contact.webp"
            alt="Noémie Sainte-Marie"
            fill
            sizes="(max-width: 1024px) 50vw, 384px"
            className="object-cover"
          />
        </FadeInUp>
      </div>
    </section>
  );
}
