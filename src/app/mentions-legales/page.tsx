import Link from "next/link";
import type { Metadata } from "next";
import { GridBackground, ObfuscatedEmail } from "@/components/ui";
import { mentions } from "@/data";

const EMAIL_REGEX = /([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/;

function renderLine(line: string) {
  const match = line.match(EMAIL_REGEX);
  if (!match || match.index === undefined) return line;

  const [fullEmail, user, domain] = match;
  const before = line.slice(0, match.index);
  const after = line.slice(match.index + fullEmail.length);

  return (
    <>
      {before}
      <ObfuscatedEmail user={user} domain={domain} className="hover:underline" />
      {after}
    </>
  );
}

export const metadata: Metadata = {
  title: "Mentions légales | Noémie Sainte-Marie",
  robots: { index: false },
};



export default function MentionsLegales() {
  console.log('test')
  return (
    <section className="relative py-12 md:py-20">
      <GridBackground />
      
      {/* Header */}
      <div className="relative overflow-hidden px-5 pb-16 md:px-20 xl:px-28 md:pb-24 border-b border-white/8">
        <div className="relative z-10 flex flex-col gap-12">
          <div className="flex items-center justify-between">
            <p className="text-logo">NOEMIE S®</p>
            <Link
              href="/"
              className="text-paragraph-caps uppercase text-primary/60 hover:text-primary transition-colors"
            >
              <span className="mdi mdi-arrow-left"/> Accueil
            </Link>
          </div>
          <h1 className="text-heading-xl uppercase">
            Mentions<br />légales
          </h1>
        </div>
      </div>

      {/* Sections */}
      <div>
        {mentions.map((section, i) => (
          <div
            key={section.title}
            className="grid md:grid-cols-3 gap-6 md:gap-12 py-10 border-b border-white/8 px-5 md:px-20 xl:px-28"
          >
            {/* Left — index + title */}
            <div className="flex items-baseline gap-4">
              <span className="text-paragraph-sm text-primary/30 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="text-paragraph-caps uppercase text-primary/60">
                {section.title}
              </h2>
            </div>

            {/* Right — content */}
            <div className="md:col-span-2 flex flex-col gap-2">
              {section.content.map((line, j) => (
                <p key={j} className="text-paragraph-line text-primary/90">
                  {renderLine(line)}
                </p>
              ))}
            </div>
          </div>
        ))}

        <p className="text-paragraph-sm text-primary/30 mt-10 px-5 md:px-20 xl:px-28">
          Dernière mise à jour : février 2026
        </p>
      </div>
    </section>
  );
}
