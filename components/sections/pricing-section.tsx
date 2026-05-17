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
    <Section id="engagement" className="section-divider">
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
              className="surface-card-interactive flex h-full flex-col p-6"
            >
              <header className="mb-5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-accent/90">
                  <BriefcaseBusiness size={12} aria-hidden />
                  Engagement
                </span>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
                  {model.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{model.positioning}</p>
              </header>

              <div className="space-y-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    Target Client
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {model.targetClient}
                  </p>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    Value Proposition
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {model.valueProposition}
                  </p>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    Deliverables
                  </p>
                  <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
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
                  <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
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
