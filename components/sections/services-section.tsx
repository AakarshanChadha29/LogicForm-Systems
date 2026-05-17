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
          title="Engineering Services for Real Business Systems"
          description="Veltrix Labs delivers production-oriented software, AI workflows, cloud foundations, IT systems support, and data dashboards for teams that need dependable technical execution."
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
