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
    <div className={cn("mb-8 max-w-3xl md:mb-10", className)} {...props}>
      <p className="text-eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
        {description}
      </p>
    </div>
  );
}
