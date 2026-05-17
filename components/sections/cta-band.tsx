import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CtaBand() {
  return (
    <section className="py-10 md:py-12">
      <Container>
        <div className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[color-mix(in_srgb,var(--accent)_20%,var(--border))] bg-[linear-gradient(135deg,#ffffff_0%,#eef3f8_55%,#e8f0fe_100%)] px-6 py-8 md:flex md:items-center md:justify-between md:gap-8 md:px-10 md:py-10">
          <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative max-w-xl">
            <p className="text-eyebrow">Ready to build?</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Turn your product idea into production-grade software.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              Websites from €999 · Custom systems from €2,500 · Ongoing partnership from €750/mo.
              Share your scope and get practical next steps.
            </p>
          </div>
          <div className="relative mt-6 flex shrink-0 flex-wrap gap-3 md:mt-0">
            <Link href="#contact" className={buttonVariants({ size: "lg" })}>
              Start a Project
              <ArrowRight size={16} aria-hidden />
            </Link>
            <Link href="#pricing" className={cn(buttonVariants({ variant: "ghost", size: "lg" }))}>
              View Pricing
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
