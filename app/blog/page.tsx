import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { Section } from "@/components/layout/section";
import { GlassCard } from "@/components/ui/glass-card";
import { blogPosts } from "@/data/blog";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Blog",
  description:
    "Practical articles on business automation, dashboards, websites, web applications, and AI-assisted systems from Logicform Systems.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <SiteShell>
      <main id="main-content" className="relative z-10">
        <PageHero
          eyebrow="Blog"
          title="Practical systems thinking for growing businesses"
          description="Articles on automation, dashboards, websites, web applications, and AI-assisted execution."
        />

        <Section id="blog-content" className="section-divider pb-16">
          <Container className="space-y-4">
            {blogPosts.map((post) => (
              <GlassCard key={post.slug} interactive className="p-6">
                <p className="text-xs text-[var(--foreground-secondary)]">
                  {post.category} · {post.date} · {post.readingTime}
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-foreground">{post.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{post.description}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-[var(--accent-hover)]"
                >
                  Read article
                  <ArrowRight size={14} aria-hidden />
                </Link>
              </GlassCard>
            ))}
          </Container>
        </Section>
      </main>
    </SiteShell>
  );
}
