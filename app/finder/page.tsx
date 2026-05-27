import { PageHero } from "@/components/layout/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { ProductFinderTest } from "@/components/sections/product-finder-test";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Logicform Finder",
  description:
    "Use the Logicform Finder to choose the right starting point: website, custom web app, dashboard, client system, or automation.",
  path: "/finder",
  keywords: ["service finder", "business systems quiz", "digital systems planning"],
});

export default function FinderPage() {
  return (
    <SiteShell>
      <main id="main-content" className="relative z-10">
        <PageHero
          eyebrow="Logicform Finder"
          title="Find the right system before you build the wrong thing"
          description="A short guided flow for founders and teams who know something feels messy, but are not sure whether they need a website, app, dashboard, client system, or automation."
        />
        <ProductFinderTest />
      </main>
    </SiteShell>
  );
}
