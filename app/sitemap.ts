import type { MetadataRoute } from "next";

import { blogPosts } from "@/data/blog";
import { legalPages } from "@/data/legal";
import { servicePages } from "@/data/service-pages";
import { siteConfig } from "@/lib/site";

const staticPages = [
  "",
  "/about",
  "/finder",
  "/pricing",
  "/work",
  "/blog",
  "/ai-updates",
  "/faq",
  "/contact",
  "/services",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const corePages: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceEntries: MetadataRoute.Sitemap = servicePages.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const legalEntries: MetadataRoute.Sitemap = legalPages.map((page) => ({
    url: `${siteConfig.url}/legal/${page.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.4,
  }));

  return [...corePages, ...serviceEntries, ...blogEntries, ...legalEntries];
}
