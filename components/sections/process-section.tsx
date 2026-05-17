import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { deliveryPhases } from "@/data/process";

export function ProcessSection() {
  return (
    <Section id="process">
      <Container>
        <SectionHeader
          eyebrow="Delivery Method"
          title="A Clear Path from Brief to Production"
          description="Structured engineering execution with practical checkpoints—so projects move forward with clarity, not chaos."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {deliveryPhases.map((phase) => (
            <article
              key={phase.id}
              className="rounded-[var(--radius-lg)] border border-white/10 bg-white/[0.02] p-6"
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Phase {phase.step}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-white">{phase.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                {phase.description}
              </p>
              <ul className="mt-4 space-y-2">
                {phase.focus.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-zinc-400">
                    <span className="mt-[0.42rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/85" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
