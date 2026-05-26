import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { Section } from "@/components/layout/section";
import { buttonVariants } from "@/components/ui/button";
import { blogPostBySlug, blogPosts } from "@/data/blog";
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
            {post.sections.map((section) => (
              <div key={section.heading}>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </div>
            ))}
            <Link href={post.ctaHref} className={buttonVariants({ size: "lg" })}>
              {post.ctaLabel}
              <ArrowRight size={16} aria-hidden />
            </Link>
          </Container>
        </Section>
      </main>
    </SiteShell>
  );
}
