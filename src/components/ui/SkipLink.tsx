export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:bg-background focus:text-primary focus:border focus:border-primary/50 focus:rounded"
    >
      Aller au contenu principal
    </a>
  );
}
