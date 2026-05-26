import type { Metadata } from "next";

import { ServiceFullPage } from "@/components/sections/service-full-page";
import { servicePageBySlug } from "@/data/service-pages";
import { siteConfig } from "@/lib/site";

const service = servicePageBySlug["cloud-maintenance"];

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  keywords: service.keywords,
  alternates: { canonical: "/services/cloud-maintenance" },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: `${siteConfig.url}/services/cloud-maintenance`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function CloudMaintenancePage() {
  return <ServiceFullPage service={service} />;
}
