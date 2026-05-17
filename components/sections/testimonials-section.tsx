import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { testimonialPlaceholders } from "@/data/trust";

export function TestimonialsSection() {
  return (
    <Section id="testimonials" className="py-[calc(var(--section-space)*0.7)]">
      <Container>
        <SectionHeader
          eyebrow="Trust Signals"
          title="Client References"
          description="Verified client feedback can be added here as it becomes available. We do not publish fabricated testimonials."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {testimonialPlaceholders.map((item) => (
            <article
              key={item.id}
              className="rounded-[var(--radius-lg)] border border-dashed border-[var(--border)] bg-[var(--surface-card)]/50 p-6"
            >
              <p className="text-eyebrow">{item.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.note}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
