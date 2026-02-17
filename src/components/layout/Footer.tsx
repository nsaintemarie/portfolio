"use client";

import Link from "next/link";
import { cn } from "@/utils";

const navLinks = [
  { name: "[PROJETS]", href: "#projets", label: "Voir les projets" },
  { name: "[À PROPOS]", href: "#a-propos", label: "En savoir plus sur moi" },
  {
    name: "[LINKEDIN]",
    href: "https://linkedin.com/",
    external: true,
    label: "Voir mon profil LinkedIn",
  },
];

export function Footer() {

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const target = document.getElementById(id);
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className={cn("relative z-60 bg-background overflow-hidden snap-start")}
      role="contentinfo"
      aria-label="Pied de page"
    >
      {/* Navigation line */}
      <nav
        className="flex flex-col md:flex-row items-center justify-center gap-21 md:gap-38 md:py-16 p-6"
        aria-label="Navigation secondaire"
      >
        <span className="text-2xl md:text-paragraph-sm" aria-hidden="true">
          +
        </span>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            onClick={!link.external ? (e) => handleClick(e, link.href) : undefined}
            className="md:text-paragraph-sm text-paragraph-caps uppercase hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            aria-label={link.label}
          >
            {link.name}
          </Link>
        ))}
        <span className="text-2xl md:text-paragraph-sm" aria-hidden="true">
          +
        </span>
      </nav>

      {/* Footer logo */}
      <div className="flex justify-center px-2 md:px-10">
        <img
          src="/footer-logo.svg"
          alt="Noémie Sainte-Marie - Logo"
          className="w-full"
          loading="lazy"
        />
      </div>
    </footer>
  );
}
