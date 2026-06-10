from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
from textwrap import wrap

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import cm
from reportlab.platypus import (
    Flowable,
    KeepTogether,
    ListFlowable,
    ListItem,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

OUT_DIR = Path(__file__).resolve().parent

BLACK = colors.HexColor("#070707")
GOLD = colors.HexColor("#D4AF37")
GOLD_DARK = colors.HexColor("#8A6A16")
INK = colors.HexColor("#1A1A1A")
MUTED = colors.HexColor("#5D5D5D")
LINE = colors.HexColor("#D8D2C2")
FILL = colors.HexColor("#FBF8EF")


@dataclass
class Section:
    title: str
    body: list[str]
    bullets: list[str] | None = None
    table: tuple[list[str], list[list[str]]] | None = None


class Rule(Flowable):
    def __init__(self, width: float, color=GOLD, thickness: float = 1.3):
        super().__init__()
        self.width = width
        self.color = color
        self.thickness = thickness
        self.height = 8

    def draw(self):
        self.canv.setStrokeColor(self.color)
        self.canv.setLineWidth(self.thickness)
        self.canv.line(0, 4, self.width, 4)


def styles():
    base = getSampleStyleSheet()
    base.add(
        ParagraphStyle(
            "CoverKicker",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=9,
            leading=12,
            textColor=GOLD_DARK,
            alignment=TA_CENTER,
            spaceAfter=10,
        )
    )
    base.add(
        ParagraphStyle(
            "CoverTitle",
            parent=base["Title"],
            fontName="Helvetica-Bold",
            fontSize=26,
            leading=31,
            textColor=BLACK,
            alignment=TA_CENTER,
            spaceAfter=8,
        )
    )
    base.add(
        ParagraphStyle(
            "CoverSub",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=11.5,
            leading=16,
            textColor=MUTED,
            alignment=TA_CENTER,
            spaceAfter=18,
        )
    )
    base.add(
        ParagraphStyle(
            "H1Custom",
            parent=base["Heading1"],
            fontName="Helvetica-Bold",
            fontSize=17,
            leading=22,
            textColor=BLACK,
            spaceBefore=14,
            spaceAfter=8,
        )
    )
    base.add(
        ParagraphStyle(
            "H2Custom",
            parent=base["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=12.5,
            leading=16,
            textColor=GOLD_DARK,
            spaceBefore=10,
            spaceAfter=5,
        )
    )
    base.add(
        ParagraphStyle(
            "BodyCustom",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=9.7,
            leading=14.2,
            textColor=INK,
            spaceAfter=6,
        )
    )
    base.add(
        ParagraphStyle(
            "Small",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=8,
            leading=10.5,
            textColor=MUTED,
            spaceAfter=4,
        )
    )
    base.add(
        ParagraphStyle(
            "BulletCustom",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=9.2,
            leading=13,
            textColor=INK,
            leftIndent=10,
            firstLineIndent=0,
            spaceAfter=3,
        )
    )
    return base


def para(text: str, style):
    return Paragraph(text.replace("&", "&amp;"), style)


def bullet_list(items: list[str], style):
    return ListFlowable(
        [ListItem(para(item, style), leftIndent=10) for item in items],
        bulletType="bullet",
        start="circle",
        leftIndent=14,
        bulletFontName="Helvetica",
        bulletFontSize=6,
        bulletColor=GOLD_DARK,
    )


def build_table(headers: list[str], rows: list[list[str]], style_sheet):
    data = [[para(h, style_sheet["Small"]) for h in headers]]
    for row in rows:
        data.append([para(cell, style_sheet["Small"]) for cell in row])
    table = Table(data, repeatRows=1, hAlign="LEFT")
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), BLACK),
                ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
                ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
                ("GRID", (0, 0), (-1, -1), 0.35, LINE),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 6),
                ("RIGHTPADDING", (0, 0), (-1, -1), 6),
                ("TOPPADDING", (0, 0), (-1, -1), 5),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
                ("BACKGROUND", (0, 1), (-1, -1), colors.white),
            ]
        )
    )
    return table


def on_page(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(BLACK)
    canvas.setFont("Helvetica-Bold", 8)
    canvas.drawString(doc.leftMargin, A4[1] - 1.15 * cm, "LogicForm Systems")
    canvas.setFillColor(GOLD_DARK)
    canvas.setFont("Helvetica", 8)
    canvas.drawRightString(A4[0] - doc.rightMargin, A4[1] - 1.15 * cm, "Business plan package")
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.4)
    canvas.line(doc.leftMargin, A4[1] - 1.35 * cm, A4[0] - doc.rightMargin, A4[1] - 1.35 * cm)
    canvas.setFillColor(MUTED)
    canvas.setFont("Helvetica", 8)
    canvas.drawCentredString(A4[0] / 2, 0.9 * cm, f"Page {doc.page}")
    canvas.restoreState()


def make_doc(filename: str, title: str, subtitle: str, metadata: list[tuple[str, str]], sections: list[Section], sources: list[str]):
    s = styles()
    doc = SimpleDocTemplate(
        str(OUT_DIR / filename),
        pagesize=A4,
        rightMargin=1.8 * cm,
        leftMargin=1.8 * cm,
        topMargin=2.0 * cm,
        bottomMargin=1.55 * cm,
        title=title,
        author="LogicForm Systems",
    )
    width = A4[0] - doc.leftMargin - doc.rightMargin
    story = [
        Spacer(1, 1.2 * cm),
        para("CONFIDENTIAL BUSINESS PLAN", s["CoverKicker"]),
        para(title, s["CoverTitle"]),
        para(subtitle, s["CoverSub"]),
        Rule(width),
        Spacer(1, 0.35 * cm),
    ]
    meta_rows = [[para(k, s["Small"]), para(v, s["Small"])] for k, v in metadata]
    meta = Table(meta_rows, colWidths=[3.2 * cm, width - 3.2 * cm])
    meta.setStyle(
        TableStyle(
            [
                ("BOX", (0, 0), (-1, -1), 0.5, LINE),
                ("INNERGRID", (0, 0), (-1, -1), 0.25, LINE),
                ("BACKGROUND", (0, 0), (0, -1), FILL),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 7),
                ("RIGHTPADDING", (0, 0), (-1, -1), 7),
                ("TOPPADDING", (0, 0), (-1, -1), 6),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
            ]
        )
    )
    story.append(meta)
    story.append(Spacer(1, 0.4 * cm))
    story.append(
        para(
            "Prepared as a working plan for founders, investors, banks, and market partners. Numbers are planning assumptions and should be validated against signed contracts, legal setup, tax advice, and live operating data.",
            s["Small"],
        )
    )
    story.append(PageBreak())

    for section in sections:
        block = [para(section.title, s["H1Custom"])]
        for body in section.body:
            block.append(para(body, s["BodyCustom"]))
        if section.bullets:
            block.append(bullet_list(section.bullets, s["BulletCustom"]))
            block.append(Spacer(1, 4))
        if section.table:
            headers, rows = section.table
            block.append(Spacer(1, 4))
            block.append(build_table(headers, rows, s))
            block.append(Spacer(1, 6))
        story.append(KeepTogether(block))

    story.append(PageBreak())
    story.append(para("Sources And Evidence Base", s["H1Custom"]))
    story.append(
        para(
            "Market statements were drafted from the inspected repository, the public live domain, GitHub metadata, and the external sources below as of 2026-06-10.",
            s["BodyCustom"],
        )
    )
    for source in sources:
        story.append(para(source, s["Small"]))

    doc.build(story, onFirstPage=on_page, onLaterPages=on_page)


common_sources = [
    "European Commission, Germany 2025 Digital Decade Country Report: https://digital-strategy.ec.europa.eu/en/factpages/germany-2025-digital-decade-country-report",
    "European Commission, Italy 2025 Digital Decade Country Report: https://digital-strategy.ec.europa.eu/en/factpages/italy-2025-digital-decade-country-report",
    "European Commission, Digital Decade 2025 - Digitalisation of Business in the EU Member States: https://digital-strategy.ec.europa.eu/en/library/digital-decade-2025-digitalisation-business-eu-member-states",
    "OECD, Empowering SMEs in the age of AI, 2026 D4SME Survey: https://www.oecd.org/content/dam/oecd/en/publications/reports/2026/04/empowering-smes-in-the-age-of-ai_7f58652c/bf5a9816-en.pdf",
    "IfM Bonn, Digitalization of SMEs in the EU Comparison: https://www.ifm-bonn.org/en/statistics/mittelstand-themes/digitalization-of-smes-in-the-eu-comparison",
    "Eurostat, Use of artificial intelligence in enterprises: https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Use_of_artificial_intelligence_in_enterprises",
    "LogicForm Systems live domain inspection: https://logicformsystems.com",
    "GitHub repository metadata: https://github.com/AakarshanChadha29/LogicForm-Systems",
]


germany_sections = [
    Section(
        "Executive Thesis",
        [
            "LogicForm Systems should enter Germany as a lean digital systems partner for Mittelstand-style companies that already understand the need for digitalisation but struggle with implementation capacity, integration quality, and long-term maintenance.",
            "The strongest German-market offer is not a generic AI agency. It is a practical operating-systems company: audits first, then websites, dashboards, workflow automation, internal tools, and monthly technical partnership."
        ],
        [
            "Position around trust, execution discipline, documentation, data protection, and measurable operational improvement.",
            "Lead with Berlin credibility, founder-led delivery, and business-friendly German/EU compliance awareness.",
            "Use audits as the wedge product, then convert into build projects and retainers."
        ],
    ),
    Section(
        "Market Context: Germany",
        [
            "Germany shows solid business technology uptake, but the gap between large enterprises and SMEs remains commercially useful. IfM Bonn reports that around one in four German SMEs used AI applications in 2025, while large enterprises reached 57 percent adoption. German SMEs also increased paid cloud usage by 12 percentage points from 2021 to 2025.",
            "The European Commission's 2025 country report notes Germany's strength in advanced technologies, while still calling for improvement in digital public services, skills, and high-capacity networks. For LogicForm, this means buyers may be aware of digital transformation but still need hands-on implementation."
        ],
        [
            "Primary demand: websites connected to lead flows, CRM reporting, dashboards, automation, and AI governance.",
            "Best-fit buyers: owner-led B2B service firms, consultants, industrial suppliers, clinics, education/training businesses, real-estate and construction operators, and local growth companies.",
            "Buyer anxiety: reliability, GDPR, vendor lock-in, hidden maintenance cost, and AI risk."
        ],
    ),
    Section(
        "Go-To-Market Strategy",
        [
            "The first 12 months should focus on Berlin, Brandenburg, North Rhine-Westphalia, Bavaria, and Baden-Wuerttemberg, using founder-led sales and partner referrals rather than paid advertising at scale.",
            "The sales motion should begin with a diagnostic conversation, move into a paid Systems & AI Audit, and then propose one of three implementation paths: Website System, Business System, or Technical Partner."
        ],
        table=(
            ["Channel", "Action", "Why It Works In Germany"],
            [
                ["Founder network", "Direct outreach to operators, founders, and TU Berlin/startup contacts.", "Trust-led market where warm introductions reduce perceived delivery risk."],
                ["Local partners", "Partner with accountants, consultants, IT support providers, and small agencies.", "These partners see workflow pain but may not build full-stack systems."],
                ["Proof content", "Publish German/English case studies on dashboards, audits, and AI readiness.", "German buyers reward specificity, proof, and seriousness."],
                ["Audit offer", "Sell a fixed-scope Digital Systems & AI Audit from EUR 1,200.", "Low-risk entry that creates a roadmap and paid qualification."],
            ],
        ),
    ),
    Section(
        "Offer Packaging",
        [
            "Germany should use a conservative, trust-first package architecture. Avoid over-promising autonomous AI; emphasise human-in-the-loop workflows, documentation, security basics, and operational visibility.",
        ],
        table=(
            ["Package", "Price Anchor", "Target Buyer", "Conversion Goal"],
            [
                ["Digital Systems & AI Audit", "From EUR 1,200", "SME owners unsure what to build first", "Convert to roadmap implementation"],
                ["Website System", "From EUR 2,500", "Businesses needing credible inbound presence", "Attach CRM/contact flow and maintenance"],
                ["Business System", "From EUR 8,000", "Teams with reporting or workflow bottlenecks", "Deliver dashboard, portal, or automation"],
                ["Technical Partner", "From EUR 2,000/month", "Operators without internal engineering capacity", "Recurring revenue and continuous improvements"],
            ],
        ),
    ),
    Section(
        "Operating And Financial Plan",
        [
            "A disciplined first-year target is 12 to 18 paid audits, 6 to 10 build projects, and 3 to 5 active retainers by month 12. This creates a credible EUR 90k to EUR 180k annualised services base before hiring.",
            "Gross margin can stay high if delivery remains founder-led with selective contractor support for design, copy, SEO, and QA. The first hires should not be account managers; they should be delivery multipliers."
        ],
        [
            "Month 1-2: fix live deployment, publish German landing variant, collect first testimonials.",
            "Month 3-6: close first audit-to-build conversions and document every delivery as a case study.",
            "Month 7-12: introduce retainer governance, monthly reporting, and partner referral agreements.",
            "Month 12+: hire part-time delivery support only after repeatable scopes are proven."
        ],
    ),
    Section(
        "Risks And Mitigation",
        [
            "The largest immediate risk is proof mismatch: the GitHub repository contains a sophisticated Next.js platform, while the live domain currently shows a simpler legacy-style page. Before investor or bank presentation, DNS/deployment should be corrected or explicitly explained as an in-progress migration.",
        ],
        [
            "Legal/tax structure: verify German business registration, contracts, VAT handling, imprint, privacy policy, and processor agreements.",
            "AI compliance: maintain a use-case register, human review points, data minimisation, and vendor documentation.",
            "Delivery capacity: cap concurrent builds until the process library, QA checklist, and support model are repeatable.",
            "Cash flow: use deposits, milestone billing, and monthly retainers; avoid long unpaid discovery."
        ],
    ),
]


italy_sections = [
    Section(
        "Executive Thesis",
        [
            "Italy should be approached as a relationship-led market with a sharper education and trust-building motion. The opportunity is strong because many businesses have basic digital presence but lower AI and advanced workflow adoption.",
            "LogicForm Systems should sell practical modernisation: better websites, clearer lead capture, CRM/reporting discipline, workflow automation, and AI adoption that stays controlled and explainable."
        ],
        [
            "Use Francesca's commercial role and Italian market understanding as a front-door advantage.",
            "Start with bilingual positioning and industries where digital clarity directly affects sales.",
            "Make the offer concrete: audit, website refresh, dashboard, automation, and monthly support."
        ],
    ),
    Section(
        "Market Context: Italy",
        [
            "The European Commission's 2025 Italy Digital Decade report says Italy has made strong progress in digital infrastructure and public services, but still faces challenges in AI adoption and startup growth. It reports that 70.2 percent of Italian SMEs reached at least basic digital intensity, while only 8.2 percent of Italian enterprises adopted AI.",
            "That gap is the commercial opening: many Italian companies are digitally present but not yet operationally integrated. LogicForm can help them move from website-only digitalisation to connected systems."
        ],
        [
            "Best-fit buyers: family businesses, B2B services, tourism/hospitality operators, real estate, wellness/clinics, professional services, light manufacturing, and export-oriented SMEs.",
            "Buyer anxiety: cost clarity, trust, language, handover, data protection, and fear of complicated technology.",
            "Sales style: relational, proof-led, phased, and bilingual where possible."
        ],
    ),
    Section(
        "Go-To-Market Strategy",
        [
            "The Italian strategy should prioritise commercial trust and practical before/after proof. Start with Lombardy, Veneto, Emilia-Romagna, Lazio, and tourism-heavy regions where business owners can see quick value from better digital systems.",
            "Use a two-founder story: technical execution from Berlin, commercial/client clarity through Francesca, and remote-first delivery with structured checkpoints."
        ],
        table=(
            ["Channel", "Action", "Why It Works In Italy"],
            [
                ["Founder-led referrals", "Use personal and business networks for first pilots.", "Trust and relationship reduce risk for SMEs."],
                ["Industry packages", "Create packages for tourism, clinics, consultants, and local B2B firms.", "Specificity beats abstract digital transformation messaging."],
                ["Before/after audits", "Show workflow maps, website gaps, and lead-capture improvements.", "Owners need concrete evidence before committing budget."],
                ["Bilingual assets", "Publish Italian service one-pagers and outreach scripts.", "Language clarity raises conversion and perceived local commitment."],
            ],
        ),
    ),
    Section(
        "Offer Packaging",
        [
            "Italy should use a more accessible first step than Germany. The audit remains valuable, but an entry website/lead-flow package can open doors quickly for businesses that need immediate commercial improvement."
        ],
        table=(
            ["Package", "Price Anchor", "Target Buyer", "Conversion Goal"],
            [
                ["Digital Presence Sprint", "From EUR 2,500", "SMEs with weak website/lead flow", "Improve trust and capture leads"],
                ["Systems & AI Audit", "From EUR 1,200", "Owners unsure where automation fits", "Create phased roadmap"],
                ["Dashboard / CRM View", "From EUR 6,000", "Teams managing sales or operations in spreadsheets", "Centralise decisions"],
                ["Automation System", "From EUR 6,000", "Teams losing time on repetitive admin", "Reduce manual handoffs"],
                ["Technical Partner", "From EUR 2,000/month", "Businesses needing ongoing execution", "Recurring support relationship"],
            ],
        ),
    ),
    Section(
        "Operating And Financial Plan",
        [
            "A realistic first-year Italian target is 10 to 15 paid entry engagements, 4 to 7 larger implementations, and 2 to 4 retainers. Italy may require more education before close, so the sales cycle should be supported by visual proposals, testimonials, and phased pricing.",
            "Prioritise fast proof: one strong Italian-language website transformation, one operational dashboard case, and one automation case. These three proof points can anchor the market."
        ],
        [
            "Month 1-2: prepare Italian landing assets, pitch deck, one-page packages, and partner list.",
            "Month 3-6: close 3 pilot clients with strict scope and testimonial rights.",
            "Month 7-12: build referral partnerships with consultants, accountants, web/design freelancers, and local business groups.",
            "Month 12+: consider part-time Italian client success support if recurring accounts justify it."
        ],
    ),
    Section(
        "Risks And Mitigation",
        [
            "The main Italian risk is selling too broadly. The market needs practical stories, not a long list of technical capabilities. Package by business problem: more inquiries, less admin, clearer reporting, safer AI adoption."
        ],
        [
            "Payment risk: use deposits and short milestones; avoid large unpaid custom proposals.",
            "Language risk: provide Italian-facing sales material and clear handover documents.",
            "Delivery risk: keep early Italian scopes narrow and testimonial-focused.",
            "Compliance risk: verify contracts, privacy notices, cookie handling, and data-processing terms for Italian/EU clients."
        ],
    ),
]


technical_sections = [
    Section(
        "Technical Platform Summary",
        [
            "The repository is a Next.js 15, React 19, TypeScript, Tailwind CSS v4, and Framer Motion application. It presents LogicForm Systems as a premium black/gold digital systems company with structured service pages, pricing anchors, selected work, FAQ, blog, AI updates, legal routes, and a Resend-backed contact form.",
            "The technical direction is strong for a lean consultancy: modern stack, static/content-driven marketing pages, App Router metadata, sitemap/robots/manifest routes, structured data, and a clear service taxonomy."
        ],
        [
            "Immediate priority: align live domain and GitHub metadata with this application.",
            "Commercial priority: turn the site into a proof asset, not only a brochure.",
            "Operational priority: create repeatable delivery templates for audit, build, QA, handover, and retainer reporting."
        ],
    ),
    Section(
        "Repository And Deployment Findings",
        [
            "GitHub metadata still describes the project as 'Veltrix Labs' and points the homepage to a Vercel preview URL. The code itself is branded LogicForm Systems and uses https://logicformsystems.com as the canonical site URL.",
            "The public live domain inspected on 2026-06-10 did not show the full Next.js application. It showed a simple German software-solutions contact page with cookie notice and generic contact form. This mismatch should be treated as launch-critical before investor or client presentations."
        ],
        table=(
            ["Area", "Current State", "Required Action"],
            [
                ["Domain", "logicformsystems.com is configured in code but live page differs.", "Point DNS/Vercel production deployment to the Next.js app."],
                ["GitHub", "Public repo, main branch, latest inspected push 2026-05-30.", "Update description, homepage URL, topics, and README."],
                ["Contact", "API validates fields, honeypot spam check, Resend email.", "Configure production RESEND_API_KEY and run live test."],
                ["SEO", "Metadata, structured data, sitemap, robots, manifest present.", "Verify rendered production pages and Search Console setup."],
            ],
        ),
    ),
    Section(
        "Service Architecture",
        [
            "The service catalogue is commercially coherent: audit, website, automation, dashboard, custom app, IT operations, cloud maintenance, AI governance, and technical partner. The services can become a stepped revenue ladder from low-risk diagnosis to project implementation to recurring support.",
        ],
        table=(
            ["Service", "Technical Scope", "Commercial Role"],
            [
                ["Systems & AI Audit", "Workflow maps, architecture notes, AI-readiness review.", "Entry wedge and paid qualification."],
                ["Website System", "Next.js site, SEO, contact flow, analytics, deployment.", "Fast proof and lead-generation foundation."],
                ["Automation", "APIs, webhooks, LLM-assisted steps, logging, approvals.", "High-value operational savings."],
                ["Dashboards", "Data sources, SQL/API integrations, charting, role views.", "Leadership visibility and recurring maintenance."],
                ["Custom Apps", "Portals, admin tools, auth-ready architecture, APIs.", "Higher-ticket implementation path."],
                ["Technical Partner", "Monthly support, improvements, monitoring, roadmap.", "Recurring revenue and client retention."],
            ],
        ),
    ),
    Section(
        "Aggressive 18-Month Execution Plan",
        [
            "The aggressive path is to become the practical implementation partner for SMEs adopting AI and digital operations under EU constraints. That requires moving faster than traditional agencies while being more disciplined than freelancers.",
        ],
        [
            "Weeks 1-2: fix production deployment, contact email, legal pages, GitHub metadata, and analytics.",
            "Weeks 3-6: publish Germany and Italy market pages, three one-page service PDFs, and one audit sample report.",
            "Months 2-4: close 5 paid audits and convert at least 2 into implementation projects.",
            "Months 4-8: package repeatable dashboard, website, and automation templates without making them look generic.",
            "Months 8-12: build retainer reporting, incident/support process, and client success rhythm.",
            "Months 12-18: hire fractional design/copy/QA support and reserve founders for architecture, sales, and key delivery."
        ],
    ),
    Section(
        "Delivery Operating Model",
        [
            "Every engagement should follow one delivery spine: discovery, systems map, scope, build, QA, launch, handover, support. The company should sell clarity as much as code.",
        ],
        table=(
            ["Phase", "Client Output", "Internal Control"],
            [
                ["Discovery", "Problem statement, current tools, success criteria.", "Qualification checklist and risk score."],
                ["Scope", "Fixed deliverables, price, timeline, assumptions.", "SOW template and change-control rules."],
                ["Build", "Weekly progress demo and decision log.", "GitHub issues, branch discipline, QA checklist."],
                ["Launch", "Production deployment and contact/analytics checks.", "Rollback notes, env var checklist, performance pass."],
                ["Support", "Monthly improvement report.", "Retainer backlog, SLA boundaries, incident notes."],
            ],
        ),
    ),
    Section(
        "Technical Risk Register",
        [
            "The business can move aggressively only if delivery risk is made visible. Investors and banks should see that the founders understand the difference between attractive demos and maintainable systems."
        ],
        [
            "Deployment mismatch: fix domain and Vercel alignment before external presentations.",
            "Email dependency: verify Resend domain/authentication and production API key.",
            "Compliance: maintain GDPR-ready privacy, imprint, cookie, DPA, and AI-use documentation.",
            "Security: add rate limiting or stronger spam protection if contact volume increases.",
            "Scalability: introduce shared component and delivery templates only after two or three repeated projects prove the pattern.",
            "Founder bottleneck: document decisions and handover early to make contractor support possible."
        ],
    ),
]


make_doc(
    "logicform-germany-business-plan.pdf",
    "Germany Market Business Plan",
    "Mittelstand-focused digital systems, AI workflow automation, dashboards, and technical partnership.",
    [
        ("Company", "LogicForm Systems"),
        ("Market", "Germany"),
        ("Prepared", "2026-06-10"),
        ("Use", "Investor, bank, founder planning, and market-entry discussion"),
    ],
    germany_sections,
    common_sources,
)

make_doc(
    "logicform-italy-business-plan.pdf",
    "Italy Market Business Plan",
    "Relationship-led digital modernisation, bilingual service packaging, and practical AI adoption for Italian SMEs.",
    [
        ("Company", "LogicForm Systems"),
        ("Market", "Italy"),
        ("Prepared", "2026-06-10"),
        ("Use", "Investor, bank, founder planning, and market-entry discussion"),
    ],
    italy_sections,
    common_sources,
)

make_doc(
    "logicform-technical-services-plan.pdf",
    "Technical And Services Execution Plan",
    "Repository findings, service architecture, aggressive delivery plan, and operational controls.",
    [
        ("Company", "LogicForm Systems"),
        ("Scope", "Technical platform, services, delivery model, and growth execution"),
        ("Prepared", "2026-06-10"),
        ("Use", "Founder operating plan, investor diligence, and bank technical appendix"),
    ],
    technical_sections,
    common_sources,
)

print("Generated business plan PDFs in", OUT_DIR)
