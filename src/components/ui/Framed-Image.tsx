"use client";
import { cn } from "@/utils";
import Image from "next/image";

type FramedImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
};

export function FramedImage({ src, alt, className, imageClassName }: FramedImageProps) {
  return (
    <div className={cn('relative', className)}>
      {/* Border frame */}
      <div className="absolute inset-0 border border-white/24">
        {/* Corner + signs */}
        <span className="absolute -top-0.5 -left-0.5 -translate-x-1/2 -translate-y-1/2 text-white bg-background px-1 text-sm/4">+</span>
        <span className="absolute -top-0.5 -right-0.5 translate-x-1/2 -translate-y-1/2 text-white bg-background px-1 text-sm/4">+</span>
        <span className="absolute -bottom-0.5 -left-0.5 -translate-x-1/2 translate-y-1/2 text-white bg-background px-1 text-sm/4">+</span>
        <span className="absolute -bottom-0.5 -right-0.5 translate-x-1/2 translate-y-1/2 text-white bg-background px-1 text-sm/4">+</span>
      </div>
      {/* Image container with padding */}
      <div className="relative w-full h-full">
        <Image
          src={src}
          alt={alt}
          fill
          className={cn("object-cover", imageClassName)}
        />
      </div>
    </div>
  );
}