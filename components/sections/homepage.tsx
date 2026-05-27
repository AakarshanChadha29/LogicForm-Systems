import { SiteShell } from "@/components/layout/site-shell";
import { CtaBand } from "@/components/sections/cta-band";
import { HeroSection } from "@/components/sections/hero-section";
import { HomepageServicesSection } from "@/components/sections/homepage-services-section";
import { PlatformEcosystemStrip } from "@/components/sections/platform-ecosystem-strip";
import { SelectedWorkSection } from "@/components/sections/selected-work-section";
import { TrustPositioningSection } from "@/components/sections/trust-positioning-section";

export function Homepage() {
  return (
    <SiteShell>
      <main id="main-content" className="relative z-10">
        <HeroSection />
        <TrustPositioningSection />
        <PlatformEcosystemStrip compact className="!pt-0" />
        <HomepageServicesSection />
        <SelectedWorkSection />
        <CtaBand />
      </main>
    </SiteShell>
  );
}
