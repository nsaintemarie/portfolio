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
    <section id={id} className={`py-16 md:py-24 ${bgClass} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
