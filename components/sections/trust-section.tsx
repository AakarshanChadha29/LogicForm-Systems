import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { audienceSegments, trustSignals } from "@/data/trust";

export function TrustSection() {
  return (
    <Section id="trust" className="py-14 md:py-16">
      <Container>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustSignals.map((signal) => (
            <article key={signal.id} className="surface-card px-5 py-4">
              <p className="text-sm font-medium text-foreground">{signal.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {signal.detail}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-6 surface-card p-6 md:p-7">
          <p className="text-eyebrow">Who we serve</p>
          <ul className="mt-4 grid gap-2 md:grid-cols-2">
            {audienceSegments.map((segment) => (
              <li key={segment} className="text-sm text-muted-foreground">
                {segment}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
