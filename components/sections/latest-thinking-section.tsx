import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { buttonVariants } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { aiUpdates } from "@/data/ai-updates";
import { blogPosts } from "@/data/blog";
import { cn } from "@/lib/utils";

export function LatestThinkingSection() {
  const latestPost = blogPosts[0];
  const latestUpdate = aiUpdates[0];

  if (!latestPost || !latestUpdate) {
    return null;
  }

  return (
    <Section id="insights" className="section-divider">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-eyebrow">Latest thinking</p>
              <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                Practical notes on systems and execution
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              One recent article and one AI update—enough context without turning the homepage into
              a content feed.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <ScrollReveal>
            <GlassCard interactive className="flex h-full flex-col p-5 md:p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--foreground-secondary)]">
                Blog
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                {latestPost.category} · {latestPost.readingTime}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">{latestPost.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {latestPost.description}
              </p>
              <Link
                href={`/blog/${latestPost.slug}`}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-[var(--accent-hover)]"
              >
                Read article
                <ArrowRight size={14} aria-hidden />
              </Link>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <GlassCard interactive className="flex h-full flex-col p-5 md:p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--foreground-secondary)]">
                AI update
              </p>
              <p className="mt-2 text-xs text-muted-foreground">{latestUpdate.date}</p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">{latestUpdate.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {latestUpdate.summary}
              </p>
              <Link
                href={`/ai-updates#${latestUpdate.slug}`}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-[var(--accent-hover)]"
              >
                Read update
                <ArrowRight size={14} aria-hidden />
              </Link>
            </GlassCard>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.1}>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/blog" className={cn(buttonVariants({ variant: "ghost", size: "md" }))}>
              View blog
            </Link>
            <Link href="/ai-updates" className={cn(buttonVariants({ variant: "ghost", size: "md" }))}>
              View AI updates
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
