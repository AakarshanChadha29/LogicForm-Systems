"use client";

import { AlertCircle, ArrowRight, CheckCircle2, RotateCcw, X } from "lucide-react";
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
  projectTypes: string[];
  budgetRange: string;
  timeline: string;
  message: string;
};

const initialValues: InquiryValues = {
  name: "",
  email: "",
  company: "",
  projectTypes: [],
  budgetRange: "",
  timeline: "",
  message: "",
};

const requiredFields = ["name", "email", "projectTypes", "budgetRange", "timeline", "message"] as const;

function ChipGroup({
  options,
  selected,
  onChange,
  multiSelect = false,
}: {
  options: readonly string[];
  selected: string[];
  onChange: (value: string) => void;
  multiSelect?: boolean;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const isSelected = selected.includes(option);
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            aria-pressed={isSelected}
            className={cn(
              "rounded-[var(--radius-sm)] border px-3 py-1.5 text-xs font-medium transition-all",
              isSelected
                ? "border-[var(--accent)] bg-[var(--accent)] text-[#0a0a08]"
                : "border-[var(--border)] bg-[var(--surface-card)] text-muted-foreground hover:border-[var(--accent)] hover:text-[var(--accent)]",
            )}
          >
            {multiSelect && isSelected ? "✓ " : null}
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
  const [notice, setNotice] = useState("");

  const completion = useMemo(() => {
    const complete = requiredFields.filter((field) => {
      const value = values[field];
      return Array.isArray(value) ? value.length > 0 : value.trim().length > 0;
    }).length;
    return Math.round((complete / requiredFields.length) * 100);
  }, [values]);

  const updateValue = (key: Exclude<keyof InquiryValues, "projectTypes">, value: string) => {
    setValues((current) => ({ ...current, [key]: value }));
    setStatus("idle");
    setNotice("");
  };

  const toggleProjectType = (value: string) => {
    setValues((current) => {
      const projectTypes = current.projectTypes.includes(value)
        ? current.projectTypes.filter((item) => item !== value)
        : [...current.projectTypes, value];
      return { ...current, projectTypes };
    });
    setStatus("idle");
    setNotice("");
  };

  const resetForm = () => {
    setValues(initialValues);
    setStatus("idle");
    setNotice("");
  };

  const validate = () => {
    if (!values.name.trim()) return "Please add your name.";
    if (!values.email.includes("@")) return "Please add a valid work email.";
    if (values.projectTypes.length === 0) return "Choose at least one project direction.";
    if (!values.budgetRange) return "Choose a budget range.";
    if (!values.timeline) return "Choose a timeline.";
    if (values.message.trim().length < 20) return "Share at least a couple of sentences about the idea.";
    return "";
  };

  const submitInquiry = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationMessage = validate();
    if (validationMessage) {
      setNotice(validationMessage);
      setStatus("error");
      return;
    }

    setStatus("loading");
    setNotice("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, website: honeypot }),
      });

      if (!response.ok) {
        setStatus("error");
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        setNotice(data?.error ?? "The form could not send. Please email us directly.");
        return;
      }

      setStatus("success");
      setNotice("Your inquiry has been sent. We will reply with a practical next step shortly.");
      setValues(initialValues);
    } catch {
      setStatus("error");
      setNotice("Network issue while sending. Please email us directly if this keeps happening.");
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
          <span className="text-xs text-muted-foreground">
            {requiredFields.filter((field) => {
              const value = values[field];
              return Array.isArray(value) ? value.length > 0 : value.trim().length > 0;
            }).length} of {requiredFields.length} fields
          </span>
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
            selected={values.projectTypes}
            onChange={toggleProjectType}
            multiSelect
          />
          <p className="mt-1.5 text-xs text-muted-foreground">Choose one or more if the work overlaps.</p>
        </div>

        {/* Budget chips */}
        <div>
          <p className="mb-2 text-xs font-medium text-[var(--foreground-secondary)]">
            Budget <span className="text-[var(--accent)]">*</span>
          </p>
          <ChipGroup
            options={budgetRanges}
            selected={values.budgetRange ? [values.budgetRange] : []}
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
            selected={values.timeline ? [values.timeline] : []}
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

      {status === "error" && notice ? (
        <div className="mt-4 flex gap-2 rounded-[var(--radius-md)] border border-red-400/30 bg-red-950/20 p-3 text-sm leading-6 text-red-100">
          <AlertCircle size={16} className="mt-1 shrink-0 text-red-300" aria-hidden />
          <p>{notice}</p>
        </div>
      ) : null}

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

      {status === "success" ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-success-title"
          className="fixed inset-0 z-[80] flex items-end justify-center bg-black/70 p-4 backdrop-blur-sm sm:items-center"
        >
          <div className="w-full max-w-md rounded-[var(--radius-lg)] border border-[var(--border-strong)] bg-[#080806] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.6)]">
            <div className="flex items-start justify-between gap-4">
              <div className="flex gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-emerald-300/30 bg-emerald-400/10 text-emerald-300">
                  <CheckCircle2 size={18} aria-hidden />
                </span>
                <div>
                  <h3 id="contact-success-title" className="text-lg font-semibold text-foreground">
                    Inquiry sent
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {notice}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setStatus("idle");
                  setNotice("");
                }}
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--border)] text-muted-foreground transition-colors hover:border-[var(--border-strong)] hover:text-foreground"
                aria-label="Close confirmation"
              >
                <X size={15} aria-hidden />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </form>
  );
}
