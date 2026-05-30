"use client";

import { ArrowRight, CheckCircle2, RotateCcw } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

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

const timelines = ["As soon as possible", "2–4 weeks", "1–3 months", "Flexible"] as const;

type FormStatus = "idle" | "loading" | "success" | "error";

type InquiryValues = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  message: string;
};

const initialValues: InquiryValues = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  budgetRange: "",
  timeline: "",
  message: "",
};

const requiredFields: Array<keyof InquiryValues> = [
  "name",
  "email",
  "projectType",
  "budgetRange",
  "timeline",
  "message",
];

function ChipGroup({
  options,
  selected,
  onChange,
}: {
  options: readonly string[];
  selected: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const isSelected = selected === option;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={cn(
              "rounded-[var(--radius-sm)] border px-3 py-1.5 text-xs font-medium transition-all",
              isSelected
                ? "border-[var(--accent)] bg-[var(--accent)] text-[#0a0a08]"
                : "border-[var(--border)] bg-[var(--surface-card)] text-muted-foreground hover:border-[var(--accent)] hover:text-[var(--accent)]",
            )}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export function TerminalContactForm() {
  const [values, setValues] = useState<InquiryValues>(initialValues);
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [terminalLines, setTerminalLines] = useState<string[]>([
    "boot logicform-intake",
    "status: ready to understand the messy part",
  ]);

  const completion = useMemo(() => {
    const complete = requiredFields.filter((field) => values[field].trim().length > 0).length;
    return Math.round((complete / requiredFields.length) * 100);
  }, [values]);

  const appendLine = (line: string) => {
    setTerminalLines((existing) => [...existing.slice(-7), line]);
  };

  const updateValue = (key: keyof InquiryValues, value: string) => {
    setValues((current) => ({ ...current, [key]: value }));
    if (["projectType", "budgetRange", "timeline"].includes(key)) {
      appendLine(`set ${key}="${value}"`);
    }
    setStatus("idle");
  };

  const resetForm = () => {
    setValues(initialValues);
    setStatus("idle");
    setTerminalLines(["session reset", "status: ready to understand the messy part"]);
  };

  const validate = () => {
    if (!values.name.trim()) return "Please add your name.";
    if (!values.email.includes("@")) return "Please add a valid work email.";
    if (!values.projectType) return "Choose the closest project direction.";
    if (!values.budgetRange) return "Choose a budget range.";
    if (!values.timeline) return "Choose a timeline.";
    if (values.message.trim().length < 20) return "Share at least a couple of sentences about the idea.";
    return "";
  };

  const submitInquiry = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationMessage = validate();
    if (validationMessage) {
      appendLine(`needs_input: ${validationMessage}`);
      setStatus("error");
      return;
    }

    setStatus("loading");
    appendLine("packaging inquiry...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, website: honeypot }),
      });

      if (!response.ok) {
        setStatus("error");
        appendLine("send failed: use direct email fallback");
        return;
      }

      setStatus("success");
      appendLine("sent: next steps will follow");
      setValues(initialValues);
    } catch {
      setStatus("error");
      appendLine("network error: use direct email fallback");
    }
  };

  return (
    <form
      onSubmit={submitInquiry}
      className="rounded-[var(--radius-lg)] border-t-2 border-[var(--accent)] border-x border-b border-[var(--border)] bg-[rgba(0,0,0,0.42)] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-5"
      style={{ borderTopColor: "var(--accent)", borderTopWidth: "2px" }}
      noValidate
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-4 border-b border-[var(--border)] pb-3">
        <div>
          <p className="text-eyebrow">Plan builder</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Choose the closest direction, add the problem, and we will reply with a practical next step.
          </p>
        </div>
        <button
          type="button"
          onClick={resetForm}
          className="mt-0.5 shrink-0 text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Reset form"
        >
          <RotateCcw size={14} />
        </button>
      </div>

      {/* Progress bar */}
      <div className="mt-3 mb-4">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs text-[var(--accent)] font-medium">{completion}% complete</span>
          <span className="text-xs text-muted-foreground">{requiredFields.filter(f => values[f].trim().length > 0).length} of {requiredFields.length} fields</span>
        </div>
        <div className="h-0.5 w-full rounded-full bg-[var(--border)]">
          <div
            className="h-0.5 rounded-full bg-[var(--accent)] transition-all duration-500"
            style={{ width: `${completion}%` }}
          />
        </div>
      </div>

      {/* Honeypot */}
      <input
        type="text"
        name="website"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        className="sr-only"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {/* Fields */}
      <div className="space-y-4">
        {/* Name + Email */}
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label htmlFor="tcf-name" className="mb-1.5 block text-xs font-medium text-[var(--foreground-secondary)]">
              Name <span className="text-[var(--accent)]">*</span>
            </label>
            <input
              id="tcf-name"
              type="text"
              autoComplete="name"
              value={values.name}
              onChange={(e) => updateValue("name", e.target.value)}
              placeholder="Your name"
              className="w-full rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface-inset)] px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
            />
          </div>
          <div>
            <label htmlFor="tcf-email" className="mb-1.5 block text-xs font-medium text-[var(--foreground-secondary)]">
              Work email <span className="text-[var(--accent)]">*</span>
            </label>
            <input
              id="tcf-email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={(e) => updateValue("email", e.target.value)}
              placeholder="you@company.com"
              className="w-full rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface-inset)] px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
            />
          </div>
        </div>

        {/* Company */}
        <div>
          <label htmlFor="tcf-company" className="mb-1.5 block text-xs font-medium text-[var(--foreground-secondary)]">
            Company
          </label>
          <input
            id="tcf-company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={(e) => updateValue("company", e.target.value)}
            placeholder="Company name (optional)"
            className="w-full rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface-inset)] px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
          />
        </div>

        {/* Project type chips */}
        <div>
          <p className="mb-2 text-xs font-medium text-[var(--foreground-secondary)]">
            Direction <span className="text-[var(--accent)]">*</span>
          </p>
          <ChipGroup
            options={projectTypes}
            selected={values.projectType}
            onChange={(v) => updateValue("projectType", v)}
          />
        </div>

        {/* Budget chips */}
        <div>
          <p className="mb-2 text-xs font-medium text-[var(--foreground-secondary)]">
            Budget <span className="text-[var(--accent)]">*</span>
          </p>
          <ChipGroup
            options={budgetRanges}
            selected={values.budgetRange}
            onChange={(v) => updateValue("budgetRange", v)}
          />
        </div>

        {/* Timeline chips */}
        <div>
          <p className="mb-2 text-xs font-medium text-[var(--foreground-secondary)]">
            Timeline <span className="text-[var(--accent)]">*</span>
          </p>
          <ChipGroup
            options={timelines}
            selected={values.timeline}
            onChange={(v) => updateValue("timeline", v)}
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="tcf-message" className="mb-1.5 block text-xs font-medium text-[var(--foreground-secondary)]">
            Idea / Problem <span className="text-[var(--accent)]">*</span>
          </label>
          <textarea
            id="tcf-message"
            rows={4}
            value={values.message}
            onChange={(e) => updateValue("message", e.target.value)}
            placeholder="Describe the goal, bottleneck, or system you want to build…"
            className="w-full resize-none rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface-inset)] px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
          />
        </div>
      </div>

      {/* Terminal */}
      <div className="mt-4 rounded-[var(--radius-sm)] border border-[var(--border)] bg-[rgba(0,0,0,0.55)] p-3 font-mono text-xs leading-5">
        {terminalLines.map((line, i) => (
          <p key={i} className="text-[var(--foreground-secondary)]">
            <span className="text-[var(--accent)]">›</span> {line}
          </p>
        ))}
        {status === "loading" && (
          <p className="animate-pulse text-[var(--accent)]">› sending…</p>
        )}
        {status === "success" && (
          <p className="flex items-center gap-1.5 text-emerald-400">
            <CheckCircle2 size={12} /> inquiry sent — we will be in touch shortly
          </p>
        )}
      </div>

      {/* Email escape */}
      <p className="mt-3 text-xs text-muted-foreground">
        Rather just email us?{" "}
        <a href={`mailto:${siteConfig.contactEmail}`} className="text-[var(--accent)] hover:text-[var(--accent-hover)]">
          {siteConfig.contactEmail}
        </a>
      </p>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className={cn(
          buttonVariants({ size: "lg" }),
          "mt-4 w-full justify-center",
          (status === "loading" || status === "success") && "opacity-60 pointer-events-none",
        )}
      >
        {status === "loading" ? "Sending…" : status === "success" ? "Sent" : "Send inquiry"}
        {status !== "loading" && status !== "success" && <ArrowRight size={16} aria-hidden />}
      </button>
    </form>
  );
}
