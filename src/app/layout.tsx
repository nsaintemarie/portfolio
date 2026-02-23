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
  icons: { icon: "/favicon.svg" },
  authors: [{ name: "Noémie Sainte-Marie" }],
  alternates: {
    canonical: "https://noemiesaintemarie.com",
  },
  openGraph: {
    type: "website",
    url: "https://noemiesaintemarie.com",
    locale: "fr_FR",
    title: "Noémie Sainte-Marie | Développeuse Fullstack",
    description:
      "Développeuse fullstack freelance - Architecture, conseil et développement d'applications web.",
    siteName: "Portfolio Noémie Sainte-Marie",
    images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "Noémie Sainte-Marie — Développeuse Fullstack Freelance" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noémie Sainte-Marie | Développeuse Fullstack",
    description:
      "Développeuse fullstack freelance - Architecture, conseil et développement d'applications web.",
    images: ["/og-image.webp"],
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
