import type { Metadata, Viewport } from "next";
import Script from "next/script";

export const viewport: Viewport = {
  viewportFit: "cover",
};
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://noemiesaintemarie.com"),
  title: "Noémie Sainte-Marie | Lead développeuse fullstack — renfort pour équipes tech",
  description:
    "Lead développeuse fullstack freelance - Architecture, conseil et développement d'applications web et mobiles performantes et évolutives.",
  keywords: [
    "Noémie Sainte-Marie",
    "développeuse",
    "fullstack",
    "freelance",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
  ],
  icons: { icon: "/favicon.svg" },
  authors: [{ name: "Noémie Sainte-Marie" }],
  alternates: {
    canonical: "https://noemiesaintemarie.com",
  },
  openGraph: {
    type: "website",
    url: "https://noemiesaintemarie.com",
    locale: "fr_FR",
    title: "Noémie Sainte-Marie | Lead développeuse fullstack — renfort pour équipes tech",
    description:
      "Je m'intègre dans votre équipe tech pour structurer l'architecture, améliorer les pratiques et faire monter vos devs en compétences.",
    siteName: "Portfolio Noémie Sainte-Marie",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Noémie Sainte-Marie — Lead développeuse fullstack — renfort pour équipes tech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noémie Sainte-Marie | Lead développeuse fullstack — renfort pour équipes tech",
    description:
      "Je m'intègre dans votre équipe tech pour structurer l'architecture, améliorer les pratiques et faire monter vos devs en compétences.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
  projects,
}: Readonly<{
  children: React.ReactNode;
  projects: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Script
          id="mdi-font"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `var l=document.createElement('link');l.rel='stylesheet';l.href='https://cdn.jsdelivr.net/npm/@mdi/font@7.4.47/css/materialdesignicons.min.css';document.head.appendChild(l);`,
          }}
        />
        <Script
          id="json-ld-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Noémie Sainte-Marie",
              url: "https://noemiesaintemarie.com",
              jobTitle: "Lead Développeuse Fullstack Freelance",
              description:
                "Je m'intègre dans votre équipe tech pour structurer l'architecture, améliorer les pratiques et faire monter vos devs en compétences.",
              sameAs: [
                "https://github.com/nsaintemarie",
                "https://www.linkedin.com/in/no%C3%A9mie-sainte-marie-8209b9160/",
                "https://www.malt.fr/profile/noemiesaintemarie",
              ],
            }),
          }}
        />
        <main
          id="main"
          role="main"
        >
          {children}
          {projects}
        </main>
      </body>
    </html>
  );
}
