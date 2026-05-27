import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CtaBand() {
  return (
    <section className="py-10 md:py-12">
      <Container>
        <div className="cta-band px-6 py-8 md:flex md:items-center md:justify-between md:gap-8 md:px-10 md:py-10">
          <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/15 blur-3xl" />
          <div className="relative max-w-xl">
            <p className="text-eyebrow">Ready to build?</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Not sure what should come first? Start with the right question.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              Use the guided finder if the problem is still unclear, or send the project brief if
              you already know what needs to change.
            </p>
          </div>
          <div className="relative mt-6 flex shrink-0 flex-wrap gap-3 md:mt-0">
            <Link href="/finder" className={buttonVariants({ size: "lg" })}>
              Take the finder
              <ArrowRight size={16} aria-hidden />
            </Link>
            <Link href="/contact" className={cn(buttonVariants({ variant: "ghost", size: "lg" }))}>
              Start an inquiry
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
