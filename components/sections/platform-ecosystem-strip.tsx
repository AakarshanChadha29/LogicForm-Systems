import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { cn } from "@/lib/utils";

export const corePlatformStripItems = [
  "Google Workspace",
  "Atlassian",
  "Jira",
  "Confluence",
  "Slack",
  "Microsoft 365",
  "Notion",
  "HubSpot",
  "Airtable",
  "Make",
  "Zapier",
  "n8n",
  "OpenAI",
  "Vercel",
  "GitHub",
  "Cloudflare",
  "Stripe",
  "Resend",
];

type PlatformEcosystemStripProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  items?: string[];
  className?: string;
  compact?: boolean;
};

export function PlatformEcosystemStrip({
  id = "platform-ecosystem",
  eyebrow = "Platforms and tools",
  title = "We connect the software your business already depends on.",
  description = "From Google services and Atlassian workflows to CRMs, dashboards, cloud platforms, and AI layers, the goal is to turn scattered tools into one usable operating system.",
  items = corePlatformStripItems,
  className,
  compact = false,
}: PlatformEcosystemStripProps) {
  const uniqueItems = [...new Set(items)];
  const marqueeItems = [...uniqueItems, ...uniqueItems];

  return (
    <Section
      id={id}
      className={cn("section-divider overflow-hidden", compact ? "py-8 md:py-10" : undefined, className)}
    >
      <Container>
        <div className={cn("grid gap-6", compact ? "lg:grid-cols-[0.7fr_1.3fr]" : "lg:grid-cols-[0.82fr_1.18fr]")}>
          <div>
            <p className="text-eyebrow">{eyebrow}</p>
            <h2 className={cn("mt-3 font-semibold tracking-tight text-foreground", compact ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl")}>
              {title}
            </h2>
          </div>
          <div className="min-w-0">
            <p className="max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">
              {description}
            </p>
            <div className="platform-marquee mt-6 rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[rgba(255,255,255,0.025)] py-3">
              <div className="platform-marquee-track">
                {marqueeItems.map((item, index) => (
                  <span key={`${item}-${index}`} className="platform-logo-chip">
                    <span className="platform-logo-mark" aria-hidden>
                      {item.slice(0, 1)}
                    </span>
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-3 text-xs leading-6 text-[var(--muted-foreground)]">
              Tool names are examples of platforms we can work with. Final integrations depend on
              access, API availability, security requirements, and project scope.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
