import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type SectionHeaderProps = HTMLAttributes<HTMLDivElement> & {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 max-w-3xl", className)} {...props}>
      <p className="text-[11px] uppercase tracking-[0.18em] text-accent/90">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
        {description}
      </p>
    </div>
  );
}
