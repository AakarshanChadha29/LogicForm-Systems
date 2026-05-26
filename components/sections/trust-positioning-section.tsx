import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { trustSignals } from "@/data/trust";

export function TrustPositioningSection() {
  return (
    <Section id="trust" className="!py-8 md:!py-10">
      <Container>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustSignals.map((signal) => (
            <div
              key={signal.id}
              className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-card)] px-4 py-4 backdrop-blur-md"
            >
              <p className="text-sm font-semibold text-foreground">{signal.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground md:text-sm">
                {signal.detail}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
