import Link from "next/link";
import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  href: string;
  image?: string;
  tags?: string[];
};

export function Card({ title, description, href, image, tags }: CardProps) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-[var(--radius-lg)] border border-border bg-background transition-all duration-[var(--transition-base)] hover:border-border-hover hover:shadow-lg"
    >
      {image && (
        <div className="relative aspect-video overflow-hidden bg-background-secondary">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-[var(--transition-slow)] group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-[var(--spacing-lg)]">
        <h3 className="text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
          {title}
        </h3>
        <p className="mt-2 text-foreground-muted line-clamp-2">{description}</p>
        {tags && tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-[var(--radius-full)] bg-background-secondary px-3 py-1 text-sm text-foreground-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
