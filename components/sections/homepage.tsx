import { SiteShell } from "@/components/layout/site-shell";
import { CtaBand } from "@/components/sections/cta-band";
import { HeroSection } from "@/components/sections/hero-section";
import { HomepageServicesSection } from "@/components/sections/homepage-services-section";
import { SelectedWorkSection } from "@/components/sections/selected-work-section";
import { TrustPositioningSection } from "@/components/sections/trust-positioning-section";

export function Homepage() {
  return (
    <SiteShell>
      <main id="main-content" className="relative z-10">
        <HeroSection />
        <TrustPositioningSection />
        <HomepageServicesSection />
        <SelectedWorkSection />
        <CtaBand />
      </main>
    </SiteShell>
  );
}
