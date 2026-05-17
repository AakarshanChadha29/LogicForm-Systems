import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type SectionProps = HTMLAttributes<HTMLElement> & {
  id: string;
};

export const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  { id, className, ...props },
  ref,
) {
  return (
    <section
      ref={ref}
      id={id}
      className={cn("py-[var(--section-space)] scroll-mt-28", className)}
      {...props}
    />
  );
});
