import { SiteShell } from "@/components/layout/site-shell";
import { ContactSection } from "@/components/sections/contact-section";
import { FaqPreviewSection } from "@/components/sections/faq-preview-section";
import { FeaturedPackagesSection } from "@/components/sections/featured-packages-section";
import { FounderOperatorStorySection } from "@/components/sections/founder-operator-story-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HomepageServicesSection } from "@/components/sections/homepage-services-section";
import { LatestThinkingSection } from "@/components/sections/latest-thinking-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { ProblemStorySection } from "@/components/sections/problem-story-section";
import { ProcessPreviewSection } from "@/components/sections/process-preview-section";
import { SelectedWorkSection } from "@/components/sections/selected-work-section";
import { TrustPositioningSection } from "@/components/sections/trust-positioning-section";
import { WhatWeBuildSection } from "@/components/sections/what-we-build-section";

export function Homepage() {
  return (
    <SiteShell>
      <main id="main-content" className="relative z-10">
        <HeroSection />
        <TrustPositioningSection />
        <ProblemStorySection />
        <WhatWeBuildSection />
        <HomepageServicesSection />
        <FeaturedPackagesSection />
        <SelectedWorkSection />
        <ProcessPreviewSection />
        <PricingSection />
        <FounderOperatorStorySection />
        <FaqPreviewSection />
        <LatestThinkingSection />
        <ContactSection />
      </main>
    </SiteShell>
  );
}
