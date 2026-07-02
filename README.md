# LogicForm Systems

Premium digital systems company website for **LogicForm Systems**: a founder-led studio building websites, custom web applications, dashboards, AI-assisted workflows, IT operations systems, cloud maintenance, and ongoing technical partnership for serious business operators.

## Current Status

- **Repository:** https://github.com/AakarshanChadha29/LogicForm-Systems
- **Default branch:** `main`
- **Latest inspected commit:** `6de7585` from 2026-05-30
- **Configured production URL:** https://logicformsystems.com
- **GitHub homepage URL:** https://veltrix-labs-zeta.vercel.app
- **Important deployment note:** as of 2026-06-10, `logicformsystems.com` resolves to a simpler legacy-style German contact page, not this full Next.js application. The domain, Vercel project, and DNS deployment should be aligned before using the site as the primary investor/client proof point.

## Business Positioning

LogicForm Systems is positioned as a lean technical-commercial partner for small and mid-size businesses that need practical digital execution without agency overhead. The offer is built around connected operating systems rather than isolated one-off websites.

Core service lines:

- **Digital Systems & AI Audit:** roadmap, workflow analysis, AI-readiness review, architecture recommendations, and 90-day action plan.
- **Websites & Digital Presence:** premium websites, landing pages, redesigns, SEO foundations, contact flows, and launch handover.
- **AI Workflow Automation:** human-in-the-loop automations for email, documents, approvals, CRM flows, and reporting.
- **Dashboards & Reporting:** operational dashboards, KPI reporting, data integrations, and weekly decision views.
- **Custom Web Applications:** portals, admin panels, SaaS MVPs, internal tools, APIs, and role-aware systems.
- **IT Systems & Operations:** workspace setup, access workflows, SOPs, Jira/Atlassian workflows, and practical support processes.
- **Cloud Deployment & Maintenance:** Vercel/cloud deployment, monitoring, fixes, backup discipline, and release support.
- **Technical Partner:** ongoing monthly improvement, support, automation care, documentation, and roadmap guidance.

## Pricing Anchors

- Digital Systems & AI Audit: from **EUR 1,200**
- Website System: from **EUR 2,500**
- IT Systems & Operations: from **EUR 1,500**
- AI Workflow Automation: from **EUR 6,000**
- Dashboards & Reporting: from **EUR 6,000**
- Custom Web Applications: from **EUR 8,000**
- Technical Partner retainer: from **EUR 2,000/month**

All prices are scoped per engagement and should be confirmed after discovery.

## Product Surface

Main routes:

- `/` homepage
- `/services` service index
- `/services/systems-audit`
- `/services/websites`
- `/services/ai-automation`
- `/services/ai-governance`
- `/services/dashboards`
- `/services/custom-web-apps`
- `/services/it-operations`
- `/services/cloud-maintenance`
- `/services/technical-partner`
- `/finder` System Finder
- `/work` selected work and case-study concepts
- `/pricing`
- `/about`
- `/blog`
- `/ai-updates`
- `/faq`
- `/contact`
- `/legal/[slug]`

The current contact flow posts to `/api/contact`, validates required fields, uses a honeypot field for spam filtering, and sends email through Resend.

## Technical Stack

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React
- Resend for contact email delivery
- Vercel-compatible deployment model

SEO and platform routes:

- `/sitemap.xml` from `app/sitemap.ts`
- `/robots.txt` from `app/robots.ts`
- `/manifest.webmanifest` from `app/manifest.ts`
- Open Graph metadata and structured data in `app/layout.tsx`

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Required environment variable:

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx
RESEND_FROM_EMAIL=contact@logicformsystems.com
```

## Quality Checks

```bash
npm run lint
npm run build
```

Recommended before launch:

- Confirm `logicformsystems.com` points to the deployed Next.js application.
- Update GitHub repository description/homepage from the old Veltrix/Vercel reference.
- Configure `RESEND_API_KEY` and a verified `RESEND_FROM_EMAIL` in production.
- Send a real contact-form test from production.
- Verify legal pages, imprint, privacy, GDPR, and cookie policy for Germany/EU usage.
- Run mobile checks for homepage, pricing, services, and contact.
- Run Lighthouse/performance checks on the production URL.

## Strategic Documents

Investor and bank-facing planning documents are stored in:

```text
docs/business-plan/
```

Generated deliverables:

- Germany market business plan
- Italy market business plan
- Technical and services execution plan

These documents should be refreshed whenever the live deployment, pricing, legal status, or market-entry assumptions change.
