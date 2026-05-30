import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { Section } from "@/components/layout/section";
import { GlassCard } from "@/components/ui/glass-card";
import { blogPosts, formatDate } from "@/data/blog";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Blog",
  description:
    "Practical articles on business automation, dashboards, websites, web applications, and AI-assisted systems from LogicForm Systems.",
  path: "/blog",
});

const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <SiteShell>
      <main id="main-content" className="relative z-10">
        <PageHero
          eyebrow="Blog"
          title="Practical systems thinking for growing businesses"
          description="Articles on automation, dashboards, websites, web applications, and AI-assisted execution."
        />

        <Section id="blog-content" className="section-divider pb-16">
          <Container>
            {/* Category filter row */}
            <div className="mb-8 flex flex-wrap gap-2">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {cat}
                </span>
              ))}
            </div>

            {/* Featured post — full width */}
            {featured && (
              <GlassCard interactive className="mb-6 p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="rounded-full border border-[var(--accent)] px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-[var(--accent)]">
                    {featured.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {formatDate(featured.date)} · {featured.readingTime}
                  </span>
                </div>
                <h2 className="text-2xl font-semibold text-foreground md:text-3xl">{featured.title}</h2>
                <p className="mt-3 max-w-2xl text-base text-muted-foreground">{featured.description}</p>
                <Link
                  href={`/blog/${featured.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-[var(--accent-hover)]"
                >
                  Read article
                  <ArrowRight size={14} aria-hidden />
                </Link>
              </GlassCard>
            )}

            {/* Rest of posts — 2-col grid */}
            <div className="grid gap-4 md:grid-cols-2">
              {rest.map((post) => (
                <GlassCard key={post.slug} interactive className="flex flex-col p-6">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="rounded-full border border-[var(--border)] px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wider text-muted-foreground">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {formatDate(post.date)} · {post.readingTime}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-foreground">{post.title}</h2>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{post.description}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-[var(--accent-hover)]"
                  >
                    Read article
                    <ArrowRight size={14} aria-hidden />
                  </Link>
                </GlassCard>
              ))}
            </div>
          </Container>
        </Section>
      </main>
    </SiteShell>
  );
}
