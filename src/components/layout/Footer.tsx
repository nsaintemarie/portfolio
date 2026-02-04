import Link from "next/link";

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
  return (
    <footer
      className="relative z-60 bg-background overflow-hidden"
      role="contentinfo"
      aria-label="Pied de page"
    >
      {/* Navigation line */}
      <nav
        className="flex items-center justify-center gap-38 py-16 p-6"
        aria-label="Navigation secondaire"
      >
        <span className="text-paragraph-sm" aria-hidden="true">
          +
        </span>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="text-paragraph-sm uppercase hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            aria-label={link.label}
          >
            {link.name}
          </Link>
        ))}
        <span className="text-paragraph-sm" aria-hidden="true">
          +
        </span>
      </nav>

      {/* Footer logo */}
      <div className="flex justify-center px-10">
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
