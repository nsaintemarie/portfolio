import { Container } from "../ui";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "default" | "secondary";
};

export function Section({
  children,
  className = "",
  id,
  background = "default",
}: SectionProps) {
  const bgClass =
    background === "secondary" ? "bg-background-secondary" : "bg-background";

  return (
    <section id={id} className={`h-screen flex flex-col justify-center py-16 md:py-24 snap-start snap-always ${bgClass} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
