import Link from "next/link";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { Section } from "@/components/layout/section";
import { buttonVariants } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "About LogicForm Systems, a digital systems studio helping businesses choose, build, and maintain the right websites, platforms, dashboards, automation, and AI-enabled systems.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <SiteShell>
      <main id="main-content" className="relative z-10">
        <PageHero
          eyebrow="About"
          title="A digital systems partner for businesses that need clarity"
          description="We help teams choose the right tools, avoid costly platform mistakes, and turn scattered digital work into reliable websites, platforms, dashboards, automation, and support."
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
                LogicForm Systems is a remote-first digital systems studio. We build and maintain
                websites, web applications, dashboards, automations, and technical systems around
                each business&apos;s specific requirements, growth stage, and operating reality.
              </p>
              <p className="mt-4 text-base leading-8 text-muted-foreground md:text-lg">
                Our model is direct: practical advice, careful scoping, clean delivery, and long-term
                care. Every system is shaped around the real business problem first, then built so it
                can be improved after launch without trapping the company in a messy stack.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                {
                  label: "Vision to 2031",
                  text: "Become a trusted digital systems partner for small and mid-size businesses that need reliable remote delivery, execution quality, and steady technical care.",
                },
                {
                  label: "How we work",
                  text: "Remote-first, requirement-led, and plain-spoken. Clients get clear recommendations before committing to platforms, tools, or technical spend.",
                },
                {
                  label: "Who we work with",
                  text: "Business owners, operations leads, and decision-makers who know something is not working and want a partner who understands both business and build.",
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

        <Section id="company-origin" className="section-divider pb-8">
          <Container>
            <div className="max-w-3xl">
              <p className="text-eyebrow mb-3">Why LogicForm exists</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                The digital market is moving fast. Most businesses are being asked to guess.
              </h2>
              <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
                The idea for LogicForm Systems came from watching the market change faster than most
                business owners could reasonably keep up with. New platforms, AI tools, automation
                products, website builders, CRM systems, dashboards, and cloud services appear every
                month, each promising to be the obvious choice.
              </p>
              <p className="mt-4 text-base leading-8 text-muted-foreground md:text-lg">
                For a growing company, that creates real pressure. Choose too quickly and the business
                can end up paying for tools it does not need. Choose the wrong vendor and a simple launch
                can become expensive, confusing, or impossible to maintain. Delay the decision and the
                company falls behind competitors who are already using better systems.
              </p>
              <p className="mt-4 text-base leading-8 text-muted-foreground md:text-lg">
                AI has made that gap wider. It can unlock speed, better decisions, and cleaner operations,
                but it has also created noise: exaggerated promises, weak implementations, hidden costs,
                and businesses being sold solutions before anyone has understood the actual problem.
              </p>
              <p className="mt-4 text-base leading-8 text-muted-foreground md:text-lg">
                LogicForm Systems exists to bring order to that moment. We help businesses understand
                what they need, what they should avoid, and what is worth building now. Then we turn that
                clarity into systems that are practical, maintainable, and ready to grow with the company.
              </p>
            </div>
          </Container>
        </Section>

        <Section id="principles" className="section-divider pb-16">
          <Container>
            <div className="max-w-3xl">
              <p className="text-eyebrow mb-3">What guides the work</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Fewer wrong turns. Better systems. Clearer launches.
              </h2>
              <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
                We focus on the decisions that make digital growth easier to manage: what to build,
                what to buy, what to automate, what to connect, and what to leave alone until the
                business is ready.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                {
                  label: "Choose with context",
                  text: "Recommendations start with the business model, team capacity, budget, and growth stage, not with a fashionable tool.",
                },
                {
                  label: "Build what lasts",
                  text: "Systems should be easy to understand, maintain, and improve after launch, even as the company changes.",
                },
                {
                  label: "Keep AI practical",
                  text: "AI belongs where it saves time, reduces manual work, improves decisions, or strengthens service quality.",
                },
              ].map((item) => (
                <GlassCard key={item.label} className="p-5">
                  <p className="text-eyebrow mb-2">{item.label}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </GlassCard>
              ))}
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
