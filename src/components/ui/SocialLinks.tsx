"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/data/social-links";
import { EASE_OUT_EXPO } from "@/constants/animation";
import { cn } from "@/utils";

type SocialLinksProps = {
  className?: string;
  linkClassName?: string;
  showArrow?: boolean;
  animate?: boolean;
  baseDelay?: number;
};

export function SocialLinks({
  className,
  linkClassName,
  showArrow = false,
  animate = false,
  baseDelay = 0,
}: SocialLinksProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      {socialLinks.map((link, index) => {
        const content = (
          <>
            {link.name}
            {showArrow && <span className="mdi mdi-arrow-bottom-right" />}
          </>
        );

        if (animate) {
          return (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: baseDelay + index * 0.1,
                ease: EASE_OUT_EXPO,
              }}
              className={cn(
                "flex items-center gap-1 hover:opacity-80 transition-opacity",
                linkClassName
              )}
            >
              {content}
            </motion.a>
          );
        }

        return (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center gap-1 hover:opacity-80 transition-opacity",
              linkClassName
            )}
          >
            {content}
          </a>
        );
      })}
    </div>
  );
}
