import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { trustSignals } from "@/data/trust";

export function TrustPositioningSection() {
  return (
    <Section id="trust" className="!py-6">
      <Container>
        <div className="grid gap-0 border-y border-[var(--border-subtle)] sm:grid-cols-2 lg:grid-cols-4">
          {trustSignals.map((signal) => (
            <div
              key={signal.id}
              className="border-b border-[var(--border-subtle)] py-5 sm:px-5 lg:border-b-0 lg:border-r last:lg:border-r-0"
            >
              <p className="text-sm font-semibold tracking-tight text-foreground">{signal.label}</p>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {signal.detail}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
