import { SiteShell } from "@/components/layout/site-shell";
import { ContactSection } from "@/components/sections/contact-section";
import { FounderOperatorStorySection } from "@/components/sections/founder-operator-story-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HomepageServicesSection } from "@/components/sections/homepage-services-section";
import { PlatformEcosystemStrip } from "@/components/sections/platform-ecosystem-strip";
import { PricingSection } from "@/components/sections/pricing-section";
import { ProductFinderTest } from "@/components/sections/product-finder-test";
import { ProcessPreviewSection } from "@/components/sections/process-preview-section";
import { SelectedWorkSection } from "@/components/sections/selected-work-section";
import { TrustPositioningSection } from "@/components/sections/trust-positioning-section";
import { WorkflowTransformationSection } from "@/components/sections/workflow-transformation-section";

export function Homepage() {
  return (
    <SiteShell>
      <main id="main-content" className="relative z-10">
        <HeroSection />
        <TrustPositioningSection />
        <WorkflowTransformationSection />
        <PlatformEcosystemStrip compact />
        <ProductFinderTest />
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
