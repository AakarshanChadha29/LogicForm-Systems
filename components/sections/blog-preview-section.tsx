import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { GlassCard } from "@/components/ui/glass-card";
import { aiUpdates } from "@/data/ai-updates";
import { blogPosts } from "@/data/blog";

export function BlogPreviewSection() {
  const latestPosts = blogPosts.slice(0, 3);
  const latestUpdates = aiUpdates.slice(0, 2);

  return (
    <Section id="insights" className="section-divider">
      <Container>
        <SectionHeader
          eyebrow="Insights"
          title="Blog and AI updates"
          description="Practical thinking on systems, automation, dashboards, and AI-assisted execution for modern businesses."
        />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-eyebrow">Blog</p>
            <div className="mt-4 space-y-3">
              {latestPosts.map((post) => (
                <GlassCard key={post.slug} interactive className="p-5">
                  <p className="text-xs text-[var(--foreground-secondary)]">
                    {post.category} · {post.readingTime}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">{post.title}</h3>
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
            </div>
            <Link href="/blog" className="mt-4 inline-flex text-sm font-medium text-accent hover:text-[var(--accent-hover)]">
              View all articles
            </Link>
          </div>

          <div>
            <p className="text-eyebrow">AI Updates</p>
            <div className="mt-4 space-y-3">
              {latestUpdates.map((update) => (
                <GlassCard key={update.slug} interactive className="p-5">
                  <h3 className="text-base font-semibold text-foreground">{update.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{update.summary}</p>
                  <Link
                    href={`/ai-updates#${update.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-[var(--accent-hover)]"
                  >
                    Read update
                    <ArrowRight size={14} aria-hidden />
                  </Link>
                </GlassCard>
              ))}
            </div>
            <Link href="/ai-updates" className="mt-4 inline-flex text-sm font-medium text-accent hover:text-[var(--accent-hover)]">
              View all AI updates
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
