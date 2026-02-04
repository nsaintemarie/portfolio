import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer, Navigation } from "@/components/layout";
import { LenisProvider } from "@/components/providers";
import { SkipLink } from "@/components/ui";
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
  title: "Noémie Sainte-Marie | Développeuse Fullstack",
  description:
    "Développeuse fullstack freelance - Architecture, conseil et développement d'applications web performantes et évolutives.",
  keywords: [
    "développeuse",
    "fullstack",
    "freelance",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
  ],
  authors: [{ name: "Noémie Sainte-Marie" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Noémie Sainte-Marie | Développeuse Fullstack",
    description:
      "Développeuse fullstack freelance - Architecture, conseil et développement d'applications web.",
    siteName: "Portfolio Noémie Sainte-Marie",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noémie Sainte-Marie | Développeuse Fullstack",
    description:
      "Développeuse fullstack freelance - Architecture, conseil et développement d'applications web.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@mdi/font@7.4.47/css/materialdesignicons.min.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <LenisProvider>
          <SkipLink />
          <Navigation />
          <main id="main-content" role="main">
            {children}
            <Footer />
          </main>
        </LenisProvider>
      </body>
    </html>
  );
}
