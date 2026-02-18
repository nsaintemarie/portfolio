"use client";

import { GridBackground } from "@/components/ui";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col justify-between px-5 pt-12 pb-26 md:pt-6 md:px-20 xl:px-28">
      <div className="relative z-10 flex flex-col justify-between h-full">
        <GridBackground />
        <p className="text-logo text-center">NOEMIE S®</p>

        <h1 className="text-heading-xl text-center">
          500
          <span className="text-heading-md text-primary/60"> ERROR</span>
        </h1>

        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-end">
          <p className="text-paragraph-line text-primary/60 max-w-sm">
            Une erreur inattendue s'est produite.
          </p>

          <div className="flex flex-col gap-8 items-end">
            <button
              onClick={reset}
              className="text-paragraph-caps uppercase text-primary/80 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 cursor-pointer"
            >
              <span className="mdi mdi-arrow-u-up-right" /> Réessayer
            </button>
            <Link
              href="/"
              className="text-paragraph-caps uppercase text-primary/80 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              <span className="mdi mdi-arrow-left" /> Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
