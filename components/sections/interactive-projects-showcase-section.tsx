"use client";

import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { ProjectDetailModal } from "@/components/sections/project-detail-modal";
import { ProjectMockupPreview } from "@/components/sections/project-mockup-preview";
import { GlassCard } from "@/components/ui/glass-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { buttonVariants } from "@/components/ui/button";
import { projectCaseStudies, type ProjectCaseStudy } from "@/data/projects";
import { cn } from "@/lib/utils";

export function InteractiveProjectsShowcaseSection() {
  const [activeProject, setActiveProject] = useState<ProjectCaseStudy | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const featured = projectCaseStudies.find((project) => project.featured) ?? projectCaseStudies[0];
  const otherProjects = projectCaseStudies.filter((project) => project.id !== featured.id);

  return (
    <Section id="projects" className="section-divider">
      <Container>
        <ScrollReveal>
          <SectionHeader
            eyebrow="Work"
            title="Projects and delivery examples"
            description="Selected examples of websites, dashboards, automation, and connected systems. View the full work catalogue on the Work page."
          />
        </ScrollReveal>

        <ScrollReveal>
          <GlassCard className="overflow-hidden p-0">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <ProjectMockupPreview
                type={featured.mockupType}
                title={featured.title}
                className="m-4 min-h-[220px] lg:m-5 lg:min-h-[280px]"
              />
              <div className="flex flex-col justify-center border-t border-[var(--border)] p-6 lg:border-t-0 lg:border-l lg:p-8">
                <p className="text-eyebrow">{featured.label}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">{featured.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {featured.summary}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {featured.stack.slice(0, 4).map((item) => (
                    <li
                      key={item}
                      className="rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface-inset)] px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  {featured.liveUrl ? (
                    <Link
                      href={featured.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonVariants({ size: "lg" })}
                    >
                      See demo
                      <ExternalLink size={16} aria-hidden />
                    </Link>
                  ) : null}
                  <button
                    type="button"
                    onClick={() => setActiveProject(featured)}
                    className={buttonVariants({ variant: "ghost", size: "lg" })}
                  >
                    View technical details
                  </button>
                </div>
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>

        <motion.ul
          className="mt-5 grid gap-4 md:grid-cols-2"
          initial={prefersReducedMotion ? false : "hidden"}
          whileInView={prefersReducedMotion ? {} : "visible"}
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.07 } },
          }}
        >
          {otherProjects.map((project) => (
            <motion.li
              key={project.id}
              variants={
                prefersReducedMotion
                  ? {}
                  : { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }
              }
            >
              <GlassCard interactive className="flex h-full flex-col overflow-hidden p-0">
                <ProjectMockupPreview
                  type={project.mockupType}
                  title={project.title}
                  className="m-4 mb-0 min-h-[140px]"
                />
                <div className="flex flex-1 flex-col p-5 pt-4">
                  <p className="text-eyebrow">{project.label}</p>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">{project.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{project.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.liveUrl ? (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(buttonVariants({ variant: "ghost" }), "h-9")}
                      >
                        Live link
                        <ArrowUpRight size={14} aria-hidden />
                      </Link>
                    ) : null}
                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className={cn(buttonVariants({ variant: "ghost" }), "h-9")}
                    >
                      Technical details
                    </button>
                  </div>
                </div>
              </GlassCard>
            </motion.li>
          ))}
        </motion.ul>
      </Container>

      <ProjectDetailModal project={activeProject} onClose={() => setActiveProject(null)} />
    </Section>
  );
}
