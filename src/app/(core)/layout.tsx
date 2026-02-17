import { Footer, Navigation } from "@/components/layout";
import { ScrollContainer, SkipLink } from "@/components/ui";

export default function CoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Navigation />
        <SkipLink />
        <ScrollContainer className="h-screen overflow-y-auto snap-y snap-mandatory">
          {children}
          <Footer />
        </ScrollContainer>
      </>
  );
}
