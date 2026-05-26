import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { GlassCard } from "@/components/ui/glass-card";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="!pt-[calc(4.25rem+1.5rem)] pb-8 md:!pt-[calc(4.25rem+2.5rem)]">
      <Container>
        <GlassCard className="p-6 md:p-8">
          <p className="text-eyebrow">{eyebrow}</p>
          <h1 className="mt-3 max-w-4xl text-balance text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
          {children ? <div className="mt-6">{children}</div> : null}
        </GlassCard>
      </Container>
    </section>
  );
}
