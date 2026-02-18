import { GridBackground } from "@/components/ui";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col justify-between px-5 pt-12 pb-26 md:pt-6 md:px-20 xl:px-28">
      <div className="relative z-10 flex flex-col justify-between h-full">
        <GridBackground />
        <p className="text-logo text-center">NOEMIE S®</p>

        <h1 className="text-heading-xl text-center">
          404
          <span className="text-heading-md text-primary/60"> NOT FOUND</span>
        </h1>

        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-end">
          <p className="text-paragraph-line text-primary/60 max-w-sm">
            Cette page n'existe pas ou a été déplacée.
          </p>

          <Link
            href="/"
            className="text-paragraph-caps uppercase text-primary/80 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          >
            <span className="mdi mdi-arrow-left" /> Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
