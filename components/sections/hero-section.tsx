"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  motion,
  type MotionValue,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type LogicWindowData = {
  title: string;
  language: string;
  code: string;
  className: string;
};

const logicWindows: LogicWindowData[] = [
  {
    title: "Infrastructure Provisioning",
    language: "terraform",
    code: `module "vpc_core" {
  source  = "terraform-aws-modules/vpc/aws"
  cidr    = var.vpc_cidr
  azs     = var.availability_zones
}`,
    className: "top-0 right-2",
  },
  {
    title: "RAG Inference Pipeline",
    language: "python",
    code: `retriever = VectorIndex(
  provider="pgvector",
  embedder="text-embedding-3-large"
)
answer = rag_chain.invoke({"query": user_prompt})`,
    className: "top-[9.25rem] right-10",
  },
  {
    title: "Security Gateway",
    language: "java",
    code: `http.authorizeHttpRequests(auth -> auth
  .requestMatchers("/admin/**").hasRole("ADMIN")
  .anyRequest().authenticated());`,
    className: "top-[18.5rem] right-0",
  },
];

const trustBullets = [
  "Production-first delivery",
  "Secure-by-design patterns",
  "Europe & India market support",
] as const;

function LogicWindow({
  className,
  title,
  language,
  code,
  scrollOffset,
}: LogicWindowData & { scrollOffset: MotionValue<number> }) {
  const prefersReducedMotion = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const smoothRotateX = useSpring(rotateX, { stiffness: 140, damping: 18 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 140, damping: 18 });

  return (
    <motion.article
      className={cn(
        "relative w-[min(27rem,100%)] rounded-[var(--radius-lg)] border border-cyan-400/30 bg-[#0b1220]/85 p-4 shadow-[0_20px_48px_-28px_rgba(0,162,255,0.55)] backdrop-blur-md",
        className,
      )}
      style={{
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        y: scrollOffset,
      }}
      animate={prefersReducedMotion ? undefined : { y: [0, -7, 0] }}
      transition={{
        duration: prefersReducedMotion ? 0 : 8.5,
        ease: "easeInOut",
        repeat: Infinity,
      }}
      onMouseMove={(event) => {
        if (prefersReducedMotion) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        const px = (event.clientX - bounds.left) / bounds.width;
        const py = (event.clientY - bounds.top) / bounds.height;
        rotateY.set((px - 0.5) * 5);
        rotateX.set(-(py - 0.5) * 5);
      }}
      onMouseLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
      }}
    >
      <div className="mb-3 flex items-center justify-between">
        <p className="text-xs font-medium text-white/90">{title}</p>
        <span className="rounded-full border border-cyan-300/35 bg-cyan-300/10 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-200">
          {language}
        </span>
      </div>
      <pre className="overflow-x-auto rounded-[var(--radius-sm)] border border-white/15 bg-[#020712]/85 p-3 font-mono text-[11px] leading-relaxed text-zinc-100">
        <code>{code}</code>
      </pre>
    </motion.article>
  );
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const driftOne = useTransform(scrollYProgress, [0, 1], [18, -22]);
  const driftTwo = useTransform(scrollYProgress, [0, 1], [0, -18]);
  const driftThree = useTransform(scrollYProgress, [0, 1], [-14, -26]);

  return (
    <Section id="hero" ref={sectionRef} className="pt-18 md:pt-24">
      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
          <div className="relative z-20 pt-2 lg:pt-8">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-3 py-1 text-[11px] tracking-[0.14em] text-muted-foreground">
              {siteConfig.tagline}
              <ArrowRight size={14} aria-hidden />
            </p>
            <h1 className="max-w-2xl text-balance text-4xl font-semibold leading-[1.06] tracking-tight md:text-6xl">
              Engineering Production-Grade AI, Cloud, and Software Systems.
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-zinc-200 md:text-xl">
              {siteConfig.description}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="#contact" className={buttonVariants({ size: "lg" })}>
                Start a Project
              </Link>
              <Link
                href="#projects"
                className={buttonVariants({ variant: "ghost", size: "lg" })}
              >
                View Case Studies
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {trustBullets.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-zinc-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative hidden min-h-[34rem] lg:block">
            <div className="pointer-events-none absolute inset-0">
              <LogicWindow {...logicWindows[0]} scrollOffset={driftOne} />
              <LogicWindow {...logicWindows[1]} scrollOffset={driftTwo} />
              <LogicWindow {...logicWindows[2]} scrollOffset={driftThree} />
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 lg:hidden">
          {logicWindows.map((window, index) => (
            <LogicWindow
              key={window.title}
              {...window}
              className="static w-full"
              scrollOffset={index === 0 ? driftOne : index === 1 ? driftTwo : driftThree}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
