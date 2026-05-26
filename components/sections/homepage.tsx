import { Navbar } from "@/components/layout/navbar";
import { BuildPathSection } from "@/components/sections/build-path-section";
import { CompanyStoryVideoSection } from "@/components/sections/company-story-video-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FounderOperatorStorySection } from "@/components/sections/founder-operator-story-section";
import { HeroSection } from "@/components/sections/hero-section";
import { AiHumanBalanceSection } from "@/components/sections/ai-human-balance-section";
import { InteractiveProjectsShowcaseSection } from "@/components/sections/interactive-projects-showcase-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { ProblemStorySection } from "@/components/sections/problem-story-section";
import { ProcessPreviewSection } from "@/components/sections/process-preview-section";
import { VisualServicesPreviewSection } from "@/components/sections/visual-services-preview-section";

export function Homepage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="relative z-10">
        <HeroSection />
        <ProblemStorySection />
        <CompanyStoryVideoSection />
        <BuildPathSection />
        <VisualServicesPreviewSection />
        <InteractiveProjectsShowcaseSection />
        <AiHumanBalanceSection />
        <ProcessPreviewSection />
        <PricingSection />
        <FounderOperatorStorySection />
        <ContactSection />
      </main>
    </>
  );
}
