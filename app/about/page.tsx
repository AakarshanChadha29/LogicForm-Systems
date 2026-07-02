import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { Section } from "@/components/layout/section";
import { buttonVariants } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { projectCaseStudies } from "@/data/projects";
import { arroyoTestimonial } from "@/data/trust";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "About LogicForm Systems, a founder-led digital systems studio that builds and maintains websites, platforms, dashboards, automation, and long-term technical systems.",
  path: "/about",
});

export default function AboutPage() {
  const arroyoProject = projectCaseStudies.find((project) => project.id === "arroyo-technologies");

  return (
    <SiteShell>
      <main id="main-content" className="relative z-10">
        <PageHero
          eyebrow="About"
          title="A lean digital systems partner for serious operators"
          description="We help businesses turn scattered digital work into clear websites, practical platforms, dashboards, automation, and ongoing technical support."
        />

        {/* Company Vision */}
        <Section id="company-vision" className="section-divider pb-8">
          <Container>
            <div className="max-w-3xl">
              <p className="text-eyebrow mb-3">Company</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Built for clarity, delivery, and long-term care.
              </h2>
              <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
                LogicForm Systems is a Berlin-based digital systems studio. We build and maintain
                the websites, web applications, dashboards, automations, and technical systems that
                help growing businesses look credible, work cleaner, and respond faster.
              </p>
              <p className="mt-4 text-base leading-8 text-muted-foreground md:text-lg">
                Our model is direct: a small technical-commercial team working closely with founders,
                operators, and decision-makers who need real execution, not agency overhead or generic
                templates. Every system is scoped around the business problem and built so it can be
                improved after launch.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                {
                  label: "Vision to 2031",
                  text: "Become a trusted digital systems partner for small and mid-size businesses across Europe, known for execution quality and steady technical care.",
                },
                {
                  label: "How we work",
                  text: "Remote-first, project-scoped, founder-led. Clients speak directly with the people shaping and building the system.",
                },
                {
                  label: "Who we work with",
                  text: "Founders, operations leads, and decision-makers who know something is not working and want a partner who understands both business and build.",
                },
              ].map((item) => (
                <GlassCard key={item.label} className="p-5">
                  <p className="text-eyebrow mb-2">{item.label}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </GlassCard>
              ))}
            </div>
          </Container>
        </Section>

        {arroyoProject ? (
          <Section id="our-work" className="section-divider pb-8">
            <Container>
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <div>
                  <p className="text-eyebrow mb-3">Our work</p>
                  <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                    Live client work, kept close after launch.
                  </h2>
                  <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
                    For now, we keep the work section focused on what is live, maintained, and
                    useful as proof. Arroyo Technologies is a production platform we delivered and
                    continue to support as their needs evolve.
                  </p>
                </div>

                <div className="grid gap-4">
                  <GlassCard className="p-6">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="text-eyebrow">{arroyoProject.label}</p>
                        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                          {arroyoProject.title}
                        </h3>
                      </div>
                      <Link
                        href={arroyoProject.liveUrl ?? "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-[var(--accent-hover)]"
                      >
                        View live
                        <ArrowUpRight size={15} aria-hidden />
                      </Link>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
                      {arroyoProject.summary}
                    </p>
                    <div className="mt-5 grid gap-2 sm:grid-cols-3">
                      {arroyoProject.highlights.map((point) => (
                        <p
                          key={point}
                          className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-inset)] px-3 py-2 text-xs leading-relaxed text-[var(--foreground-secondary)]"
                        >
                          {point}
                        </p>
                      ))}
                    </div>
                  </GlassCard>

                  <GlassCard className="p-6">
                    <div className="flex items-start gap-3">
                      <Quote size={18} className="mt-1 shrink-0 text-accent" aria-hidden />
                      <div>
                        <p className="text-eyebrow">{arroyoTestimonial.label}</p>
                        <blockquote className="mt-3 text-sm leading-7 text-[var(--foreground-secondary)] md:text-base">
                          &ldquo;{arroyoTestimonial.quote}&rdquo;
                        </blockquote>
                        <p className="mt-4 text-sm font-semibold text-foreground">
                          Bharati, Founder
                        </p>
                        <p className="text-xs text-muted-foreground">{arroyoTestimonial.company}</p>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </div>
            </Container>
          </Section>
        ) : null}

        {/* Founder Story */}
        <Section id="founders-story" className="section-divider pb-8">
          <Container>
            <div className="max-w-3xl">
              <p className="text-eyebrow mb-3">The story</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Two people. Different cities. The same hunger to build.
              </h2>
              <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
                LogicForm Systems was built by two people who did not come from privilege or an easy start.
                Both Aakarshan and Francesca grew up finding their own way — learning through setbacks,
                picking up skills in the gaps between what was expected and what they actually wanted.
              </p>
              <p className="mt-4 text-base leading-8 text-muted-foreground md:text-lg">
                The pandemic hit during a period of real momentum. It disrupted plans, shifted industries,
                and forced a reckoning — not just professionally, but personally. Like many people in their
                generation, they had to rebuild: adapt to remote work, learn new tools, navigate a job
                market that had changed overnight, and figure out what actually mattered.
              </p>
              <p className="mt-4 text-base leading-8 text-muted-foreground md:text-lg">
                What came out of that period was not frustration — it was clarity. Both of them had always
                wanted to build something of their own. The pandemic accelerated that conviction. The years
                that followed were spent deepening technical knowledge, understanding how businesses actually
                operate, and working out what kind of company they wanted to create.
              </p>
              <p className="mt-4 text-base leading-8 text-muted-foreground md:text-lg">
                LogicForm Systems is that company. Based in Berlin. Built for Europe. Focused on
                businesses that are serious about growing and need a technical partner who can keep up.
              </p>
            </div>
          </Container>
        </Section>

        {/* Founder cards */}
        <Section id="founders" className="section-divider pb-16">
          <Container>
            <p className="text-eyebrow mb-6">The founders</p>
            <div className="grid gap-4 md:grid-cols-2">
              <GlassCard className="p-6">
                {/* Gold initials avatar */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--accent)] bg-[var(--accent-muted)]">
                  <span className="text-lg font-bold text-[var(--accent)]">AC</span>
                </div>
                <h2 className="text-lg font-semibold text-foreground">
                  {siteConfig.founders.technical.name}
                </h2>
                <p className="mt-1 text-sm text-[var(--foreground-secondary)]">
                  {siteConfig.founders.technical.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Full-stack systems, automation, dashboards, IT operations, cloud deployment,
                  AI-assisted workflows, and technical architecture. Aakarshan brings the engineering
                  depth that turns business problems into maintainable, production-grade systems.
                </p>
              </GlassCard>
              <GlassCard className="p-6">
                {/* Gold initials avatar */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--accent)] bg-[var(--accent-muted)]">
                  <span className="text-lg font-bold text-[var(--accent)]">FM</span>
                </div>
                <h2 className="text-lg font-semibold text-foreground">
                  {siteConfig.founders.commercial.name}
                </h2>
                <p className="mt-1 text-sm text-[var(--foreground-secondary)]">
                  {siteConfig.founders.commercial.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Sales operations, market positioning, client communication, marketing clarity,
                  partnerships, and commercial execution. Francesca ensures that what we build
                  is positioned clearly, delivered well, and built around real client needs.
                </p>
              </GlassCard>
            </div>

            <div className="mt-8">
              <Link href="/contact" className={buttonVariants({ size: "lg" })}>
                Build with LogicForm Systems
              </Link>
            </div>
          </Container>
        </Section>
      </main>
    </SiteShell>
  );
}
