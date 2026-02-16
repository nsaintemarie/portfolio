import { CloseButton, ModalTransition, PullToClose } from "@/components/ui";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ModalTransition>
      {/* DESKTOP CLOSE */}
      <CloseButton />
      {/* MOBILE CLOSE */}
      <PullToClose />
      {children}
    </ModalTransition>
  );
}
