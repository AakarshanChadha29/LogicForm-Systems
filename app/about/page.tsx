import Link from "next/link";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { Section } from "@/components/layout/section";
import { buttonVariants } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "LogicForm Systems is a Berlin-based digital systems studio built by two founders who came from humble backgrounds and spent years learning the hard way before deciding to build something of their own.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <SiteShell>
      <main id="main-content" className="relative z-10">
        <PageHero
          eyebrow="About"
          title="A lean digital systems company for serious operators"
          description="LogicForm Systems helps businesses move from scattered tools to connected websites, applications, dashboards, automation, and long-term technical partnership."
        />

        {/* Company Vision */}
        <Section id="company-vision" className="section-divider pb-8">
          <Container>
            <div className="max-w-3xl">
              <p className="text-eyebrow mb-3">Company</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Built to last. Designed for businesses that are serious about growing.
              </h2>
              <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
                LogicForm Systems is a Berlin-based digital systems studio. We build and operate the websites,
                web applications, dashboards, automations, and technical systems that help growing businesses
                gain clarity, control, and operational confidence.
              </p>
              <p className="mt-4 text-base leading-8 text-muted-foreground md:text-lg">
                Our model is simple: a small technical-commercial team that works closely with founders,
                operators, and decision-makers who need real execution — not agency overhead, not offshore
                quality, and not off-the-shelf templates. Every system is scoped individually and built
                with long-term maintainability in mind.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                {
                  label: "Vision to 2031",
                  text: "Become the most trusted digital systems partner for small and mid-size businesses operating across Europe — known for execution quality, not for size.",
                },
                {
                  label: "How we work",
                  text: "Remote-first, project-scoped, founder-led. Every client speaks directly to the people building the system. No account managers in the middle.",
                },
                {
                  label: "Who we work with",
                  text: "Founders, operations leads, and technical decision-makers who know something is not working and want a partner who understands both the business and the build.",
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
