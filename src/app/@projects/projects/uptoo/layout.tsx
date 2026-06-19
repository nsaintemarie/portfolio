import { ProjectModal } from "@/components/ui";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProjectModal>
      {children}
    </ProjectModal>
  );
}
