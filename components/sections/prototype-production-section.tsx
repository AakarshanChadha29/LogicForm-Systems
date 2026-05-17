import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";

const comparison = [
  {
    title: "Prototype",
    points: [
      "Demonstrates ideas under ideal conditions",
      "Manual workflows and fragile dependencies",
      "Unclear ownership and operating cost",
    ],
  },
  {
    title: "Production",
    highlighted: true,
    points: [
      "Designed for real users, load, and operations",
      "Automated, observable, and maintainable",
      "Structured for security, scale, and iteration",
    ],
  },
] as const;

export function PrototypeProductionSection() {
  return (
    <Section id="solutions" className="section-divider">
      <Container>
        <SectionHeader
          eyebrow="Delivery Maturity"
          title="From Prototype to Production"
          description="We help teams cross the gap between proof of concept and systems that operate reliably in real business environments."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {comparison.map((column) => (
            <article
              key={column.title}
              className={
                "highlighted" in column && column.highlighted
                  ? "surface-card border-[color-mix(in_srgb,var(--accent)_28%,var(--border))] bg-[var(--accent-muted)] p-6"
                  : "surface-card p-6"
              }
            >
              <h3 className="text-xl font-semibold tracking-tight text-foreground">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {column.points.map((point) => (
                  <li key={point} className="text-sm leading-relaxed text-muted-foreground">
                    {point}
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
