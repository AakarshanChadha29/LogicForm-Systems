import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="pt-10 pb-10 md:pt-12 md:pb-14">
      <Container>
        <div className="max-w-4xl border-b border-[var(--border-subtle)] pb-8 md:pb-10">
          <p className="text-eyebrow mb-3">{eyebrow}</p>
          <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[rgba(255,255,255,0.82)] md:text-lg">
            {description}
          </p>
          {children ? <div className="mt-6">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
