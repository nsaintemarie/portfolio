import { CloseButton, ProjectModal, PullToClose } from "@/components/ui";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProjectModal>
      {/* DESKTOP CLOSE */}
      <CloseButton />
      {/* MOBILE CLOSE */}
      <PullToClose />
      {children}
    </ProjectModal>
  );
}
