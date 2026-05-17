import Link from "next/link";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { buttonVariants } from "@/components/ui/button";
import { engagementModels } from "@/data/pricing";
import { cn } from "@/lib/utils";

export function EngagementSection() {
  return (
    <Section id="engagement">
      <Container>
        <SectionHeader
          eyebrow="Engagement Models"
          title="Choose the Right Level of Technical Partnership"
          description="Clear engagement paths—from market-ready websites to custom systems and long-term technical support."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {engagementModels.map((model) => (
            <article
              key={model.id}
              className="flex h-full flex-col rounded-[var(--radius-lg)] border border-white/10 bg-white/[0.02] p-6 transition-[transform,border-color,box-shadow,background-color] duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.03] hover:shadow-[0_16px_40px_-30px_rgba(0,0,0,0.75)]"
            >
              <header className="mb-5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-accent/90">
                  <BriefcaseBusiness size={12} aria-hidden />
                  Engagement
                </span>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                  {model.name}
                </h3>
                <p className="mt-2 text-sm text-zinc-300">{model.positioning}</p>
              </header>

              <div className="space-y-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    Target Client
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-300">
                    {model.targetClient}
                  </p>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    Value Proposition
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-300">
                    {model.valueProposition}
                  </p>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    Deliverables
                  </p>
                  <ul className="mt-2 space-y-1.5 text-sm text-zinc-300">
                    {model.deliverables.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-[0.42rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/90" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    Ideal Outcomes
                  </p>
                  <ul className="mt-2 space-y-1.5 text-sm text-zinc-300">
                    {model.idealOutcomes.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-[0.42rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/90" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {model.engagementStyle}
                </p>
                <Link
                  href="#contact"
                  className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "mt-4")}
                >
                  {model.ctaLabel}
                  <ArrowRight size={16} aria-hidden />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
