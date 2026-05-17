import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { testimonialPlaceholders } from "@/data/trust";

export function TestimonialsSection() {
  return (
    <Section id="testimonials" className="py-[calc(var(--section-space)*0.75)]">
      <Container>
        <SectionHeader
          eyebrow="Trust Signals"
          title="Client References"
          description="This site does not display fabricated testimonials. Verified client feedback can be added here as it becomes available."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {testimonialPlaceholders.map((item) => (
            <article
              key={item.id}
              className="rounded-[var(--radius-lg)] border border-dashed border-white/15 bg-white/[0.015] p-6"
            >
              <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                {item.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.note}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
