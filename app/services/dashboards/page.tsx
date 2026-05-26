import type { Metadata } from "next";

import { ServiceFullPage } from "@/components/sections/service-full-page";
import { servicePageBySlug } from "@/data/service-pages";
import { siteConfig } from "@/lib/site";

const service = servicePageBySlug.dashboards;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  keywords: service.keywords,
  alternates: { canonical: "/services/dashboards" },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: `${siteConfig.url}/services/dashboards`,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function DashboardsPage() {
  return <ServiceFullPage service={service} />;
}
