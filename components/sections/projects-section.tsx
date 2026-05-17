"use client";

import Link from "next/link";
import { ArrowUpRight, Cpu, Quote, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { buttonVariants } from "@/components/ui/button";
import { projectCaseStudies, type ProjectCaseStudy } from "@/data/projects";
import { arroyoTestimonial } from "@/data/trust";
import { cn } from "@/lib/utils";

function ProjectCard({
  project,
  onOpen,
}: {
  project: ProjectCaseStudy;
  onOpen: (id: string) => void;
}) {
  return (
    <article
      className={cn(
        "surface-card-interactive group flex h-full flex-col p-6",
        project.featured &&
          "border-[color-mix(in_srgb,var(--accent)_22%,var(--border))] bg-[var(--accent-muted)]",
      )}
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-eyebrow">{project.label}</p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground">
            {project.title}
          </h3>
        </div>
        <span className="rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface-inset)] p-2 text-muted-foreground">
          <Cpu size={17} strokeWidth={1.75} aria-hidden />
        </span>
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <li
            key={item}
            className="rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface-inset)] px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
          >
            {item}
          </li>
        ))}
      </ul>

      <ul className="mt-6 space-y-2 border-t border-[var(--border)] pt-5 text-sm text-muted-foreground">
        {project.highlights.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => onOpen(project.id)}
          className={buttonVariants({ variant: "ghost" })}
        >
          View Engineering Specs
        </button>
        {project.liveUrl ? (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            Visit Live Project <ArrowUpRight size={15} />
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
        className="fixed inset-0 z-[70] flex items-end justify-center bg-slate-900/40 p-4 backdrop-blur-sm md:items-center"
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
          className="relative w-full max-w-3xl rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface-elevated)] p-6 shadow-[var(--shadow-elevated)] md:p-8"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16, scale: 0.98 }}
          animate={prefersReducedMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
          exit={prefersReducedMotion ? {} : { opacity: 0, y: 12, scale: 0.98 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/20 bg-white/5 text-muted-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
            aria-label="Close engineering specs modal"
          >
            <X size={16} />
          </button>

          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            {project.label}
          </p>
          <h3
            id={`${project.id}-title`}
            className="mt-2 text-2xl font-semibold text-foreground md:text-3xl"
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
                className="mt-2 text-sm leading-relaxed text-muted-foreground"
              >
                {project.modal.overview}
              </p>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Business Outcome
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {project.modal.outcome}
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-inset)] p-4">
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Architecture Notes
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {project.modal.architecture.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-[0.42rem] h-1.5 w-1.5 rounded-full bg-accent/85" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-inset)] p-4">
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Tools Used
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.modal.tools.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
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
                Visit Live Project
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
  const featured =
    projectCaseStudies.find((project) => project.featured) ?? projectCaseStudies[0];
  const otherProjects = projectCaseStudies.filter((project) => project.id !== featured.id);

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
    <Section id="projects" className="section-divider">
      <Container>
        <SectionHeader
          eyebrow="Case Studies"
          title="Engineering Work & Client Proof"
          description="Production delivery for international clients—structured for credibility, performance, and practical business outcomes."
        />

                <div className="mb-6 grid gap-5 lg:grid-cols-[1.12fr_0.88fr]">
          <article className="surface-card flex flex-col p-6 md:p-7">
            <p className="text-eyebrow">{featured.label}</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">{featured.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground md:text-base">{featured.summary}</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {featured.highlights.slice(0, 4).map((point) => (
                <li key={point} className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-inset)] px-3 py-2 text-xs leading-relaxed text-muted-foreground">{point}</li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-3">
              {featured.liveUrl ? (
                <Link href={featured.liveUrl} target="_blank" rel="noopener noreferrer" className={buttonVariants({ size: "lg" })}>
                  Visit Live Project <ArrowUpRight size={16} aria-hidden />
                </Link>
              ) : null}
              <Link href="#contact" className={buttonVariants({ variant: "ghost", size: "lg" })}>Discuss Similar Work</Link>
            </div>
          </article>
          <article className="surface-card flex flex-col p-6 md:p-7">
            <div className="flex items-start justify-between gap-3">
              <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface-inset)] px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--accent-secondary)]">{arroyoTestimonial.label}</span>
              <Quote size={18} className="text-[var(--border-strong)]" aria-hidden />
            </div>
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-[var(--foreground-secondary)]">&ldquo;{arroyoTestimonial.quote}&rdquo;</blockquote>
            <footer className="mt-5 border-t border-[var(--border)] pt-4">
              <p className="text-sm font-semibold text-foreground">{arroyoTestimonial.reviewerName}</p>
              <p className="text-xs text-muted-foreground">{arroyoTestimonial.reviewerRole}</p>
              <p className="text-xs text-muted-foreground">{arroyoTestimonial.company}</p>
            </footer>
          </article>
        </div>
        <p className="mb-4 text-eyebrow">More engineering work</p>
                <div className="grid gap-5 md:grid-cols-2">
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={(id) => setActiveProjectId(id)} />
          ))}
        </div>
      </Container>

      {activeProject ? (
        <ProjectModal project={activeProject} onClose={() => setActiveProjectId(null)} />
      ) : null}
    </Section>
  );
}
