import { SiteShell } from "@/components/layout/site-shell";
import { ContactSection } from "@/components/sections/contact-section";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Logicform Systems to discuss websites, dashboards, automation, internal tools, and ongoing technical partnership.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <SiteShell>
      <main id="main-content" className="relative z-10">
        <ContactSection compact />
      </main>
    </SiteShell>
  );
}
