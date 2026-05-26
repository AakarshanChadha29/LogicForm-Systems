"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { GlassModal } from "@/components/ui/glass-modal";
import { buttonVariants } from "@/components/ui/button";
import type { ProjectCaseStudy } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectDetailModalProps = {
  project: ProjectCaseStudy | null;
  onClose: () => void;
};

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  if (!project) return null;

  const titleId = `${project.id}-modal-title`;
  const descriptionId = `${project.id}-modal-description`;

  return (
    <GlassModal
      open={Boolean(project)}
      onClose={onClose}
      titleId={titleId}
      descriptionId={descriptionId}
      className="max-w-4xl"
    >
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">{project.label}</p>
      <h2 id={titleId} className="mt-2 pr-10 text-2xl font-semibold text-foreground md:text-3xl">
        {project.title}
      </h2>
      <p id={descriptionId} className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
        {project.modal.overview}
      </p>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <div className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-inset)] p-4">
          <p className="text-eyebrow">Problem</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.modal.problem}</p>
        </div>
        <div className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-inset)] p-4">
          <p className="text-eyebrow">Solution</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.modal.solution}</p>
        </div>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <div className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-inset)] p-4">
          <p className="text-eyebrow">Architecture notes</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {project.modal.architecture.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-[0.42rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-inset)] p-4">
          <p className="text-eyebrow">Tools used</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.modal.tools.map((tool) => (
              <li
                key={tool}
                className="rounded-full border border-[var(--border)] bg-[var(--surface-card)] px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
              >
                {tool}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-eyebrow">Business outcome</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.modal.outcome}</p>
        </div>
      </div>

      {project.liveUrl ? (
        <Link
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ size: "lg" }), "mt-6")}
        >
          Visit live project
          <ArrowUpRight size={16} aria-hidden />
        </Link>
      ) : null}
    </GlassModal>
  );
}
