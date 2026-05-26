import { SiteShell } from "@/components/layout/site-shell";
import { ContactSection } from "@/components/sections/contact-section";
import { FounderOperatorStorySection } from "@/components/sections/founder-operator-story-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HomepageServicesSection } from "@/components/sections/homepage-services-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { ProcessPreviewSection } from "@/components/sections/process-preview-section";
import { SelectedWorkSection } from "@/components/sections/selected-work-section";
import { TrustPositioningSection } from "@/components/sections/trust-positioning-section";

export function Homepage() {
  return (
    <SiteShell>
      <main id="main-content" className="relative z-10">
        <HeroSection />
        <TrustPositioningSection />
        <SelectedWorkSection />
        <HomepageServicesSection />
        <ProcessPreviewSection />
        <PricingSection />
        <FounderOperatorStorySection />
        <ContactSection />
      </main>
    </SiteShell>
  );
}
