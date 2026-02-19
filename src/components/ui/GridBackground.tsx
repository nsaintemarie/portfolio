import { cn } from "@/lib/utils";

type GridBackgroundProps = {
  className?: string;
  lineSpacing?: number;
  opacity?: number;
  fade?: "bottom" | "top" | "both" | "none";
};

export function GridBackground({
  className,
  lineSpacing = 40,
  opacity = 0.12,
  fade = "bottom",
}: GridBackgroundProps) {
  const maskImage = {
    bottom: "linear-gradient(to bottom, white 0%, transparent 100%)",
    top: "linear-gradient(to top, white 0%, transparent 100%)",
    both: "linear-gradient(to bottom, transparent 0%, white 20%, white 80%, transparent 100%)",
    none: undefined,
  }[fade];

  return (
    <div
      className={cn("absolute inset-0 pointer-events-none", className)}
      style={{
        backgroundImage: `repeating-linear-gradient(to right, rgba(255,255,255,${opacity}) 0px, rgba(255,255,255,0) 1px, transparent 1px, transparent ${lineSpacing}px)`,
        backgroundSize: `${lineSpacing}px 100%`,
        maskImage,
        WebkitMaskImage: maskImage,
      }}
    />
  );
}
