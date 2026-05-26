import { SiteShell } from "@/components/layout/site-shell";
import { BlogPreviewSection } from "@/components/sections/blog-preview-section";
import { BuildPathSection } from "@/components/sections/build-path-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FaqPreviewSection } from "@/components/sections/faq-preview-section";
import { FounderOperatorStorySection } from "@/components/sections/founder-operator-story-section";
import { HeroSection } from "@/components/sections/hero-section";
import { InteractiveProjectsShowcaseSection } from "@/components/sections/interactive-projects-showcase-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { ProblemStorySection } from "@/components/sections/problem-story-section";
import { ProcessPreviewSection } from "@/components/sections/process-preview-section";
import { TrustPositioningSection } from "@/components/sections/trust-positioning-section";
import { VisualServicesPreviewSection } from "@/components/sections/visual-services-preview-section";

export function Homepage() {
  return (
    <SiteShell>
      <main id="main-content" className="relative z-10">
        <HeroSection />
        <TrustPositioningSection />
        <ProblemStorySection />
        <BuildPathSection />
        <VisualServicesPreviewSection />
        <InteractiveProjectsShowcaseSection />
        <ProcessPreviewSection />
        <PricingSection />
        <FounderOperatorStorySection />
        <FaqPreviewSection />
        <BlogPreviewSection />
        <ContactSection />
      </main>
    </SiteShell>
  );
}
