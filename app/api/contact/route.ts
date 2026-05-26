import { Resend } from "resend";
import { NextResponse } from "next/server";

import { siteConfig } from "@/lib/site";

const projectTypes = [
  "Website system",
  "Custom web app",
  "Dashboard / reporting",
  "CRM / client system",
  "AI automation",
  "Ongoing technical partner",
] as const;

const budgetRanges = [
  "Under €2,500",
  "€2,500–€7,500",
  "€7,500–€15,000",
  "€15,000–€30,000",
  "€30,000+",
] as const;

const timelines = [
  "As soon as possible",
  "2–4 weeks",
  "1–3 months",
  "Flexible",
] as const;

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  projectType?: string;
  budgetRange?: string;
  timeline?: string;
  message?: string;
  website?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 503 },
      );
    }

    const body = (await request.json()) as ContactPayload;

    if (body.website?.trim()) {
      return NextResponse.json({ success: true });
    }

    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const company = body.company?.trim() ?? "Not provided";
    const projectType = body.projectType?.trim() ?? "Not specified";
    const budgetRange = body.budgetRange?.trim() ?? "Not specified";
    const timeline = body.timeline?.trim() ?? "Not specified";
    const message = body.message?.trim() ?? "";

    if (!name) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "A valid work email is required." },
        { status: 400 },
      );
    }

    if (message.length < 20) {
      return NextResponse.json(
        { error: "Please provide a project summary (at least 20 characters)." },
        { status: 400 },
      );
    }

    if (projectType && !projectTypes.includes(projectType as (typeof projectTypes)[number])) {
      return NextResponse.json({ error: "Invalid project type." }, { status: 400 });
    }

    if (budgetRange && !budgetRanges.includes(budgetRange as (typeof budgetRanges)[number])) {
      return NextResponse.json({ error: "Invalid budget range." }, { status: 400 });
    }

    if (timeline && !timelines.includes(timeline as (typeof timelines)[number])) {
      return NextResponse.json({ error: "Invalid timeline." }, { status: 400 });
    }

    const subject = `New inquiry — ${name}${company !== "Not provided" ? ` · ${company}` : ""}`;

    const html = `
      <h2>New project inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Company:</strong> ${escapeHtml(company)}</p>
      <p><strong>Project type:</strong> ${escapeHtml(projectType)}</p>
      <p><strong>Budget range:</strong> ${escapeHtml(budgetRange)}</p>
      <p><strong>Timeline:</strong> ${escapeHtml(timeline)}</p>
      <p><strong>Summary:</strong></p>
      <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
    `;

    const text = [
      "New project inquiry",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Project type: ${projectType}`,
      `Budget range: ${budgetRange}`,
      `Timeline: ${timeline}`,
      "",
      "Summary:",
      message,
    ].join("\n");

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "Logicform Systems Website <onboarding@resend.dev>",
      to: siteConfig.contactEmail,
      replyTo: email,
      subject,
      html,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send inquiry." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to process inquiry." },
      { status: 500 },
    );
  }
}
