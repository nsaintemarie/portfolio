import { Footer, Navigation } from "@/components/layout";
import { ScrollContainer, SkipLink } from "@/components/ui";

export default function CoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Navigation */}
      <Navigation />
      <SkipLink />
      <ScrollContainer className="h-dvh overflow-y-auto md:snap-y md:snap-mandatory">
        {children}
        <Footer />
      </ScrollContainer>
    </>
  );
}
