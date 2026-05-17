import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { audienceSegments } from "@/data/trust";

export function TrustSection() {
  return (
    <Section id="trust" className="!py-8 md:!py-10">
      <Container>
        <div className="surface-card px-5 py-5 md:px-7 md:py-6">
          <p className="text-eyebrow">Who we serve</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {audienceSegments.map((segment) => (
              <li
                key={segment}
                className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-inset)] px-3 py-2.5 text-sm leading-snug text-muted-foreground"
              >
                {segment}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
