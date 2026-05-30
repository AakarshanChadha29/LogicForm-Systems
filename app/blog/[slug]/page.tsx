import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ExternalLink } from "lucide-react";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { Section } from "@/components/layout/section";
import { buttonVariants } from "@/components/ui/button";
import { blogPostBySlug, blogPosts, formatDate } from "@/data/blog";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

type BlogArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = blogPostBySlug[slug];
  if (!post) return {};

  return createPageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: [post.category.toLowerCase()],
    type: "article",
  });
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = blogPostBySlug[slug];
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };

  return (
    <SiteShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main id="main-content" className="relative z-10">
        <PageHero
          eyebrow={`${post.category} · ${post.readingTime}`}
          title={post.title}
          description={post.description}
        />

        <Section id="article-content" className="section-divider pb-16">
          <Container className="max-w-3xl prose-page">
            {/* Date chip */}
            <p className="mb-8 text-sm text-muted-foreground">{formatDate(post.date)}</p>

            {post.sections.map((section) => (
              <div key={section.heading} className="mb-8">
                <h2 className="text-xl font-semibold text-foreground mb-3">{section.heading}</h2>
                <p className="text-base leading-8 text-muted-foreground">{section.body}</p>
              </div>
            ))}

            {/* Sources */}
            {post.sources && post.sources.length > 0 && (
              <div className="mt-10 border-t border-[var(--border-subtle)] pt-6">
                <p className="text-eyebrow mb-4">Sources</p>
                <ul className="space-y-2">
                  {post.sources.map((source) => (
                    <li key={source.href}>
                      <a
                        href={source.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-[var(--accent-hover)]"
                      >
                        <ExternalLink size={12} aria-hidden />
                        {source.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-8">
              <Link href={post.ctaHref} className={buttonVariants({ size: "lg" })}>
                {post.ctaLabel}
                <ArrowRight size={16} aria-hidden />
              </Link>
            </div>
          </Container>
        </Section>
      </main>
    </SiteShell>
  );
}
