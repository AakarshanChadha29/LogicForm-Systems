import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { audienceSegments, trustSignals } from "@/data/trust";

export function TrustSection() {
  return (
    <Section id="trust" className="py-12 md:py-16">
      <Container>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustSignals.map((signal) => (
            <article
              key={signal.id}
              className="rounded-[var(--radius-md)] border border-white/10 bg-white/[0.02] px-4 py-4"
            >
              <p className="text-sm font-medium text-white">{signal.label}</p>
              <p className="mt-1 text-xs text-muted-foreground">{signal.detail}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-[var(--radius-lg)] border border-white/10 bg-white/[0.02] p-5 md:p-6">
          <p className="text-[11px] uppercase tracking-[0.18em] text-accent/90">
            Who we help
          </p>
          <ul className="mt-4 grid gap-2 md:grid-cols-2">
            {audienceSegments.map((segment) => (
              <li key={segment} className="flex gap-2.5 text-sm text-zinc-300">
                <span className="mt-[0.42rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/90" />
                <span>{segment}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
