"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const codeSnippets = [
  {
    title: "Infrastructure",
    language: "terraform",
    code: `module "vpc" {
  source = "terraform-aws-modules/vpc/aws"
  cidr   = var.vpc_cidr
}`,
  },
  {
    title: "AI workflow",
    language: "python",
    code: `pipeline = RAGPipeline(
  retriever="pgvector",
  guardrails=True,
)`,
  },
  {
    title: "Access control",
    language: "policy",
    code: `roles:
  admin: [deploy, audit]
  ops:   [monitor, support]`,
  },
] as const;

const trustBullets = [
  "TU Berlin engineering foundation",
  "Germany-based · Europe & international delivery",
  "Production systems, not demo projects",
] as const;

function SystemPanel({ className }: { className?: string }) {
  return (
    <div className={cn("surface-card overflow-hidden", className)}>
      <div className="border-b border-[var(--border)] px-4 py-3 md:px-5">
        <p className="text-eyebrow">Delivery stack</p>
        <p className="mt-1 text-xs text-muted-foreground">
          Architecture · AI · Security · Operations
        </p>
      </div>
      <div className="space-y-3 p-4 md:p-5">
        {codeSnippets.map((snippet) => (
          <div
            key={snippet.title}
            className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-inset)] p-3"
          >
            <div className="mb-2 flex items-center justify-between gap-2">
              <span className="text-xs font-medium text-foreground/90">{snippet.title}</span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {snippet.language}
              </span>
            </div>
            <pre className="overflow-x-auto font-mono text-[11px] leading-relaxed text-muted-foreground">
              <code>{snippet.code}</code>
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section id="hero" className="pt-20 pb-8 md:pt-28 md:pb-12">
      <Container>
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16"
        >
          <div className="max-w-xl">
            <p className="text-eyebrow">{siteConfig.tagline}</p>
            <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-foreground md:text-[2.75rem] md:leading-[1.06]">
              Engineering Production-Grade Software, AI, and Infrastructure.
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground/90">
              Reliable engineering intelligence for teams that need systems built to last—not
              prototypes dressed as products.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="#contact" className={buttonVariants({ size: "lg" })}>
                Book Consultation
              </Link>
              <Link
                href="#projects"
                className={buttonVariants({ variant: "ghost", size: "lg" })}
              >
                View Case Studies
              </Link>
            </div>

            <ul className="mt-10 space-y-2.5 border-t border-[var(--border)] pt-8">
              {trustBullets.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-muted-foreground">
                  <span
                    className="mt-2 h-px w-3 shrink-0 bg-accent/70"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <SystemPanel className="lg:max-w-md lg:justify-self-end" />
        </motion.div>
      </Container>
    </Section>
  );
}
