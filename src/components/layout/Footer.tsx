import Link from "next/link";

const navLinks = [
  { name: "[PROJETS]", href: "#projets" },
  { name: "[À PROPOS]", href: "#a-propos" },
  { name: "[LINKEDIN]", href: "https://linkedin.com/in/noemie-sainte-marie", external: true },
];

export function Footer() {
  return (
    <footer className="relative z-60 bg-background overflow-hidden snap-start">
      {/* Navigation line */}
      <div className="flex items-center justify-center gap-38 py-16 p-6">
        <span className="text-paragraph-sm">+</span>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="text-paragraph-sm uppercase hover:opacity-80 transition-opacity"
          >
            {link.name}
          </Link>
        ))}
        <span className="text-paragraph-sm">+</span>
      </div>

      {/* Footer logo */}
      <div className="flex justify-center px-10">
        <img src="/footer-logo.svg" alt="Noémie Sainte-Marie" className="w-full" />
      </div>
    </footer>
  );
}
