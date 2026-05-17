import { Navbar } from "@/components/layout/navbar";
import { ContactSection } from "@/components/sections/contact-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { FounderSection } from "@/components/sections/founder-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { PrototypeProductionSection } from "@/components/sections/prototype-production-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TrustSection } from "@/components/sections/trust-section";

export function Homepage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="relative z-10">
        <HeroSection />
        <TrustSection />
        <ServicesSection />
        <PrototypeProductionSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ProcessSection />
        <SkillsSection />
        <PricingSection />
        <FounderSection />
        <ContactSection />
      </main>
    </>
  );
}
