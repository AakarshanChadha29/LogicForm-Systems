"use client";

import Link from "next/link";
import { ArrowUpRight, Cpu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { buttonVariants } from "@/components/ui/button";
import { projectCaseStudies, type ProjectCaseStudy } from "@/data/projects";
import { cn } from "@/lib/utils";

function ProjectCard({
  project,
  onOpen,
}: {
  project: ProjectCaseStudy;
  onOpen: (id: string) => void;
}) {
  return (
    <article className="group flex h-full flex-col rounded-[var(--radius-lg)] border border-white/10 bg-white/[0.02] p-6 transition-[border-color,transform,box-shadow,background-color] duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.03] hover:shadow-[0_18px_48px_-34px_rgba(0,0,0,0.75)]">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-accent/90">
            {project.label}
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
            {project.title}
          </h3>
        </div>
        <span className="rounded-md border border-white/15 bg-white/5 p-2 text-muted-foreground">
          <Cpu size={18} />
        </span>
      </div>

      <p className="text-sm leading-relaxed text-zinc-300">{project.summary}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <li
            key={item}
            className="rounded-full border border-white/15 bg-black/35 px-2.5 py-1 font-mono text-[11px] text-zinc-300"
          >
            {item}
          </li>
        ))}
      </ul>

      <ul className="mt-6 space-y-2 text-sm text-zinc-300">
        {project.impact.map((point) => (
          <li key={point} className="flex gap-2">
            <span className="mt-[0.42rem] h-1.5 w-1.5 rounded-full bg-accent/90" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => onOpen(project.id)}
          className={cn(buttonVariants({ variant: "ghost" }), "border-white/25")}
        >
          View Engineering Specs
        </button>
        {project.liveUrl ? (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-white"
          >
            Visit Live System <ArrowUpRight size={15} />
          </Link>
        ) : null}
      </div>
    </article>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: ProjectCaseStudy;
  onClose: () => void;
}) {
  const prefersReducedMotion = useReducedMotion();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[70] flex items-end justify-center bg-black/70 p-4 backdrop-blur-sm md:items-center"
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={prefersReducedMotion ? {} : { opacity: 1 }}
        exit={prefersReducedMotion ? {} : { opacity: 0 }}
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) onClose();
        }}
      >
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${project.id}-title`}
          aria-describedby={`${project.id}-overview`}
          className="relative w-full max-w-3xl rounded-[var(--radius-xl)] border border-white/15 bg-[#0d0d10]/95 p-6 shadow-[0_24px_60px_-32px_rgba(0,0,0,0.9)] backdrop-blur-md md:p-8"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16, scale: 0.98 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
          exit={prefersReducedMotion ? {} : { opacity: 0, y: 12, scale: 0.98 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/20 bg-white/5 text-muted-foreground transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
            aria-label="Close engineering specs modal"
          >
            <X size={16} />
          </button>

          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            {project.label}
          </p>
          <h3
            id={`${project.id}-title`}
            className="mt-2 text-2xl font-semibold text-white md:text-3xl"
          >
            {project.title}
          </h3>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                System Overview
              </p>
              <p
                id={`${project.id}-overview`}
                className="mt-2 text-sm leading-relaxed text-zinc-300"
              >
                {project.modal.overview}
              </p>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Business Outcome
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                {project.modal.outcome}
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-[var(--radius-md)] border border-white/10 bg-black/35 p-4">
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Architecture Notes
              </p>
              <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                {project.modal.architecture.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-[0.42rem] h-1.5 w-1.5 rounded-full bg-accent/85" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[var(--radius-md)] border border-white/10 bg-black/35 p-4">
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Tools Used
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.modal.tools.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-zinc-300"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {project.liveUrl ? (
            <div className="mt-7">
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                Open Live System
              </Link>
            </div>
          ) : null}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function ProjectsSection() {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  const activeProject = useMemo(
    () => projectCaseStudies.find((project) => project.id === activeProjectId) ?? null,
    [activeProjectId],
  );

  useEffect(() => {
    if (!activeProject) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeProject]);

  return (
    <Section id="projects">
      <Container>
        <SectionHeader
          eyebrow="Case Studies"
          title="Selected Engineering Systems"
          description="Real and conceptual systems engineered to combine deep technical execution with measurable business value."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {projectCaseStudies.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={(id) => setActiveProjectId(id)}
            />
          ))}
        </div>
      </Container>

      {activeProject ? (
        <ProjectModal project={activeProject} onClose={() => setActiveProjectId(null)} />
      ) : null}
    </Section>
  );
}
