import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { deliveryPhases } from "@/data/process";

export function ProcessSection() {
  return (
    <Section id="process" className="section-divider">
      <Container>
        <SectionHeader
          eyebrow="Delivery Method"
          title="Structured Engineering from Discovery to Optimization"
          description="A disciplined delivery model designed for clarity, accountability, and production outcomes."
        />

        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {deliveryPhases.map((phase) => (
            <li key={phase.id} className="surface-card p-5">
              <p className="font-mono text-xs text-accent">{phase.step}</p>
              <h3 className="mt-3 text-base font-semibold text-foreground">{phase.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {phase.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
