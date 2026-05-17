import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";

const comparison = [
  {
    title: "Prototype",
    tone: "muted" as const,
    points: [
      "Works in demos, not under real load",
      "Manual processes and fragile workflows",
      "Inconsistent behavior across environments",
      "Limited scalability and unclear operating costs",
    ],
  },
  {
    title: "Production",
    tone: "accent" as const,
    points: [
      "Built for real users, traffic, and operations",
      "Automated workflows with clear ownership",
      "Reliable, monitored, and maintainable systems",
      "Architecture structured for growth and integrations",
    ],
  },
] as const;

export function PrototypeProductionSection() {
  return (
    <Section id="solutions">
      <Container>
        <SectionHeader
          eyebrow="Delivery Maturity"
          title="From Prototype to Production"
          description="Many teams can prototype quickly. Scaling into dependable production systems requires stronger architecture, security awareness, and operational discipline. Veltrix Labs bridges that gap."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {comparison.map((column) => (
            <article
              key={column.title}
              className={
                column.tone === "accent"
                  ? "rounded-[var(--radius-lg)] border border-accent/30 bg-accent/[0.06] p-6"
                  : "rounded-[var(--radius-lg)] border border-white/10 bg-white/[0.02] p-6"
              }
            >
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {column.points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm text-zinc-300">
                    <span className="mt-[0.46rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/90" />
                    <span>{point}</span>
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
