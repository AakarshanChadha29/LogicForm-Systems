import { ServicesIndexContent } from "@/components/sections/services-index-content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "Explore Logicform Systems services: websites, custom web apps, dashboards, AI automation, cloud maintenance, IT operations, and technical partnership.",
  path: "/services",
  keywords: ["digital systems services", "business automation", "custom software"],
});

export default function ServicesPage() {
  return <ServicesIndexContent />;
}
