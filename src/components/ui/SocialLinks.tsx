"use client";

import { socialLinks } from "@/data/social-links";
import { cn } from "@/lib/utils";
import { FadeInUp } from "./animations/FadeInUp";

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
            <FadeInUp
              as="a"
              animate
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              y={20}
              delay={baseDelay + index * 0.1}
              className={cn(
                "flex items-center gap-1 hover:opacity-80 transition-opacity",
                linkClassName
              )}
            >
              {content}
            </FadeInUp>
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
