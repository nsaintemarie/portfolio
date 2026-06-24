"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeInUp } from "@/components/ui";

const navigation = [
  { name: "REALISATIONS", icon: "/diamond.svg", id: "projets", delay: 1.3 },
  { name: "A PROPOS",  id: "a-propos", delay: 1.4 },
  { name: "CONTACT", id: "contact", delay: 1.5 },
];

export function Navigation() {

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    target?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <FadeInUp
      as="nav"
      delay={1.2}
      y={100}
      animate
      className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
      aria-label="Navigation principale"
    >
      <ul
        className="grid grid-cols-3 justify-items-stretch min-w-100 border border-primary/7 bg-black/20 py-4 backdrop-blur divide-x divide-primary/12"
        role="list"
      >
        {navigation.map((item) => (
          <li key={item.name}>
            <FadeInUp
              delay={item.delay}
              y={20}
              animate
            >
              <Link
                href={`/#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className="flex items-center justify-center text-paragraph-sm transition-colors gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:text-white"
              >
                {item.icon && (
                  <Image
                    src={item.icon}
                    alt=""
                    width={12}
                    height={12}
                    aria-hidden="true"
                  />
                )}
                {item.name}
              </Link>
            </FadeInUp>
          </li>
        ))}
      </ul>
    </FadeInUp>
  );
}
