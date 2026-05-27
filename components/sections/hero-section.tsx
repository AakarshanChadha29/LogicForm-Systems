"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section
      id="hero"
      className="overflow-hidden !pt-[calc(4.25rem+2rem)] !pb-12 md:!pt-[calc(4.25rem+3.25rem)] lg:!pb-16"
    >
      <Container>
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="grid items-center gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-12 xl:gap-16"
        >
          <div>
            <p className="text-sm font-medium text-[var(--foreground-secondary)]">
              Logicform Systems
            </p>

            <h1 className="mt-4 max-w-[13ch] text-balance text-[2.65rem] font-semibold leading-[1] tracking-tight sm:text-6xl lg:text-[4.9rem]">
              Premium digital systems for businesses ready to move cleaner.
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
              We turn unclear tools, manual handoffs, and scattered data into sharp websites,
              internal systems, dashboards, and automation that feel built around the way you work.
            </p>

            <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap sm:items-center">
              <Link href="/finder" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}>
                Find your starting point
                <ArrowRight size={16} aria-hidden />
              </Link>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "w-full sm:w-auto",
                )}
              >
                Start a project inquiry
              </Link>
            </div>

            <div className="mt-9 grid max-w-xl grid-cols-3 gap-2 border-y border-[var(--border-subtle)] py-4">
              {[
                ["Web", "Lead flow"],
                ["Ops", "Less manual"],
                ["AI", "Automation"],
              ].map(([value, label]) => (
                <div key={label} className="min-w-0 pr-1">
                  <p className="text-2xl font-semibold tracking-tight text-foreground">{value}</p>
                  <p className="mt-1 text-[0.65rem] uppercase tracking-[0.1em] text-muted-foreground sm:text-xs">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="premium-media relative aspect-[16/10] overflow-hidden rounded-[var(--radius-xl)]"
          >
            <Image
              src="/brand/logicform-systems-hero.png"
              alt="Abstract connected operating system visual for Logicform Systems"
              fill
              priority
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,4,0.22),transparent_48%,rgba(5,5,4,0.18))]" />
            <div className="absolute bottom-4 left-4 right-4 grid gap-2 rounded-[var(--radius-md)] border border-[rgba(255,255,255,0.12)] bg-[rgba(5,5,4,0.58)] p-3 backdrop-blur-md sm:grid-cols-3">
              {["Strategy", "Engineering", "Maintenance"].map((item) => (
                <p key={item} className="text-xs font-medium text-[var(--foreground-secondary)]">
                  {item}
                </p>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
