import { Navbar } from "@/components/layout/navbar";
import { ContactSection } from "@/components/sections/contact-section";
import { FounderSection } from "@/components/sections/founder-section";
import { HeroSection } from "@/components/sections/hero-section";
import { AiHumanBalanceSection } from "@/components/sections/ai-human-balance-section";
import { InteractiveProjectsShowcaseSection } from "@/components/sections/interactive-projects-showcase-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { ProcessPreviewSection } from "@/components/sections/process-preview-section";
import { VisualServicesPreviewSection } from "@/components/sections/visual-services-preview-section";

export function Homepage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="relative z-10">
        <HeroSection />
        <VisualServicesPreviewSection />
        <InteractiveProjectsShowcaseSection />
        <AiHumanBalanceSection />
        <ProcessPreviewSection />
        <PricingSection />
        <FounderSection />
        <ContactSection />
      </main>
    </>
  );
}
