import { Footer } from "@/components/layout";
import { ScrollContainer } from "@/components/ui";

export default function CoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ScrollContainer className="h-screen overflow-y-auto snap-y snap-mandatory">
      {children}
      <Footer />
    </ScrollContainer>
  );
}
