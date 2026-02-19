"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Drawer } from "vaul";
import { Dialog } from "radix-ui";
import { EASE_OUT_EXPO } from "@/constants/animation";
import { ScrollContainer } from "./ScrollContainer";
import { useMediaQuery } from "@/lib/hooks";
import { CloseButton } from "./CloseButton";

interface ProjectModalProps {
  children: React.ReactNode;
}

function MobileDrawer({ children }: ProjectModalProps) {
  const router = useRouter();
  return (
    <Drawer.Root open onClose={() => router.back()} direction="bottom">
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-60 bg-black/40" />
        <Drawer.Content className="fixed inset-x-0 bottom-0 z-70 flex flex-col bg-background-secondary focus:outline-none h-dvh">
          <Drawer.Title className="sr-only">Projet</Drawer.Title>
          <div className="mx-auto mt-4 mb-2.5 h-1.5 w-20 shrink-0 rounded-full bg-primary/30" />
          <ScrollContainer className="flex-1 overflow-y-auto">
            {children}
          </ScrollContainer>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

function DesktopDialog({ children }: ProjectModalProps) {
  const router = useRouter();
  return (
    <Dialog.Root open onOpenChange={(open) => !open && router.back()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-60 bg-black/40" />
        <Dialog.Content asChild aria-describedby={undefined}>
          <motion.div
            className="fixed inset-0 z-70 bg-background focus:outline-none"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
          >
            <Dialog.Title className="sr-only">Projet</Dialog.Title>
            <ScrollContainer className="h-full overflow-y-auto">
              <CloseButton />
              {children}
            </ScrollContainer>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export function ProjectModal({ children }: ProjectModalProps) {
  const isMobile = useMediaQuery();
  if (isMobile) return <MobileDrawer>{children}</MobileDrawer>;
  return <DesktopDialog>{children}</DesktopDialog>;
}
