import type { SocialLink } from "@/types";

export const socialLinks: SocialLink[] = [
  {
    name: "Github",
    href: process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com",
  },
  {
    name: "Linkedin",
    href:
      process.env.NEXT_PUBLIC_LINKEDIN_URL ??
      "https://linkedin.com/in/noemie-sainte-marie",
  },
  {
    name: "Malt",
    href: process.env.NEXT_PUBLIC_MALT_URL ?? "https://malt.fr",
  },
];
