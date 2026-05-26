import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { ServiceCard } from "@/components/sections/service-card";
import { serviceOfferings } from "@/data/services";

export function ServicesSection() {
  return (
    <Section id="services" className="section-divider">
      <Container>
        <SectionHeader
          eyebrow="Services"
          title="AI-First and Practical Technical Services"
          description="From websites and internal tools to AI workflows, dashboards, cloud deployment, and IT operations—Logicform Solutions delivers business systems with clear scope, dependable execution, and technology matched to real needs."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {serviceOfferings.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
