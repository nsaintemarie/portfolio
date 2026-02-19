"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "[PROJETS]", href: "#projets", label: "Voir les projets" },
  { name: "[MENTIONS LÉGALES]", href: "/mentions-legales", label: "Voir les mentions légales", redirect: true },
  {
    name: "[LINKEDIN]",
    href: "https://www.linkedin.com/in/no%C3%A9mie-sainte-marie-8209b9160/",
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
      className={cn("relative z-60 bg-background overflow-hidden md:snap-start")}
      role="contentinfo"
      aria-label="Pied de page"
    >
      {/* Navigation line */}
      <nav
        className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-38 md:py-16 p-6"
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
            onClick={!link.external && !link.redirect ? (e) => handleClick(e, link.href) : undefined}
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

      <a
        className="relative z-70 flex justify-end text-paragraph-sm text-primary/30 hover:text-primary/50 transition-opacity mt-2 mb-1 mr-5 md:mt-1 md:-mb-6 lg:-mb-9 lg:mt-4 md:mr-6 lg:mr-10 whitespace-pre"
        href="https://www.linkedin.com/in/quentin-laforge-244048155/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Designed by <span className="underline">Quentin Laforge</span>
      </a>

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
