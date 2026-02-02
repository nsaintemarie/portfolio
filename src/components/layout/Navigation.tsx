"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "PROJETS", icon: "/diamond.svg", href: "#projets", delay: 1.3 },
  { name: "A PROPOS", href: "#a-propos", delay: 1.4 },
  { name: "CONTACT", href: "#contact", delay: 1.5 },
];

export function Navigation() {
  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 cursor-pointer"
    >
      <ul className="grid grid-cols-3 justify-items-stretch min-w-100 border border-primary/7 bg-black/20 py-4 backdrop-blur divide-x divide-primary/12">
        {navigation.map((item, index) => (
          <li key={item.name}>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: item.delay,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link
                href={item.href}
                className="flex items-center justify-center text-paragraph-sm text-primary transition-colors gap-2"
              >
                {item.icon && (
                  <Image src={item.icon} alt="" width={12} height={12} />
                )}
                {item.name}
              </Link>
            </motion.div>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
