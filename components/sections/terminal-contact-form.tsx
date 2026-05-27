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

const fieldLabels: Record<keyof InquiryValues, string> = {
  name: "Name",
  email: "Work email",
  company: "Company",
  projectType: "Direction",
  budgetRange: "Budget",
  timeline: "Timeline",
  message: "Idea",
};

const requiredFields: Array<keyof InquiryValues> = [
  "name",
  "email",
  "projectType",
  "budgetRange",
  "timeline",
  "message",
];

export function TerminalContactForm() {
  const [values, setValues] = useState<InquiryValues>(initialValues);
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [terminalLines, setTerminalLines] = useState<string[]>([
    "boot logicform-intake",
    "status: ready to shape your plan",
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
    setTerminalLines(["session reset", "status: ready to shape your plan"]);
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
      className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[rgba(0,0,0,0.42)] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-5"
      noValidate
    >
      <div className="flex items-start justify-between gap-4 border-b border-[var(--border)] pb-3">
        <div>
          <p className="text-eyebrow">Plan builder</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Tell us what feels messy. We will shape the next move.
          </p>
        </div>
        <button
          type="button"
          onClick={resetForm}
          className="inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--border)] text-muted-foreground transition-colors hover:border-[var(--border-strong)] hover:text-foreground"
          aria-label="Reset inquiry form"
        >
          <RotateCcw size={15} aria-hidden />
        </button>
      </div>

      <div className="mt-4 rounded-[var(--radius-md)] border border-[var(--border)] bg-[rgba(0,0,0,0.55)] p-3 font-mono text-[11px] leading-relaxed text-[var(--foreground-secondary)] md:text-xs">
        <div className="mb-3 flex items-center justify-between gap-4">
          <span className="text-accent">logicform@plan:~</span>
          <span>{completion}% complete</span>
        </div>
        {terminalLines.map((line, index) => (
          <p key={`${line}-${index}`}>$ {line}</p>
        ))}
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <Field
          id="inquiry-name"
          label="Name"
          value={values.name}
          autoComplete="name"
          onChange={(value) => updateValue("name", value)}
        />
        <Field
          id="inquiry-email"
          label="Work email"
          type="email"
          value={values.email}
          autoComplete="email"
          onChange={(value) => updateValue("email", value)}
        />
        <Field
          id="inquiry-company"
          label="Company"
          value={values.company}
          autoComplete="organization"
          onChange={(value) => updateValue("company", value)}
        />
        <div className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] p-3">
          <p className="text-xs font-medium text-[var(--foreground-secondary)]">Timeline</p>
          <ChipGroup
            options={timelines}
            value={values.timeline}
            onChange={(value) => updateValue("timeline", value)}
          />
        </div>
      </div>

      <ChoicePanel
        label="What direction feels closest?"
        options={projectTypes}
        value={values.projectType}
        onChange={(value) => updateValue("projectType", value)}
      />

      <ChoicePanel
        label="Budget range"
        options={budgetRanges}
        value={values.budgetRange}
        onChange={(value) => updateValue("budgetRange", value)}
      />

      <div className="mt-4">
        <label htmlFor="inquiry-message" className="text-xs font-medium text-[var(--foreground-secondary)]">
          What are you trying to make better?
        </label>
        <textarea
          id="inquiry-message"
          value={values.message}
          onChange={(event) => updateValue("message", event.target.value)}
          className="input-field mt-2 min-h-32 resize-y"
          placeholder="Example: We get leads from the website, manage them in spreadsheets, and want a better client workflow with AI summaries and clear reporting."
        />
      </div>

      <div className="mt-4 rounded-[var(--radius-md)] border border-[var(--border-subtle)] p-3">
        <p className="text-xs font-medium text-[var(--foreground-secondary)]">Plan snapshot</p>
        <div className="mt-3 grid gap-2 text-xs text-muted-foreground sm:grid-cols-2">
          {(Object.keys(fieldLabels) as Array<keyof InquiryValues>).map((key) => (
            <p key={key} className="truncate">
              <span className="text-[var(--foreground-secondary)]">{fieldLabels[key]}:</span>{" "}
              {values[key] || "Not set"}
            </p>
          ))}
        </div>
      </div>

      <input
        type="text"
        name="website"
        value={honeypot}
        onChange={(event) => setHoneypot(event.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
      />

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button type="submit" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")} disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Send plan request"}
          <ArrowRight size={16} aria-hidden />
        </button>
        <a href={`mailto:${siteConfig.contactEmail}`} className="text-sm text-muted-foreground hover:text-accent">
          Email directly
        </a>
      </div>

      {status === "success" ? (
        <p className="mt-3 flex items-center gap-2 text-sm text-[var(--foreground-secondary)]" role="status">
          <CheckCircle2 size={15} className="text-accent" aria-hidden />
          Inquiry received. We will respond with structured next steps.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="mt-3 text-sm text-[#f0a8a8]" role="alert">
          Check the missing detail above, or email{" "}
          <a href={`mailto:${siteConfig.contactEmail}`} className="underline">
            {siteConfig.contactEmail}
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-xs font-medium text-[var(--foreground-secondary)]">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="input-field mt-2"
        autoComplete={autoComplete}
      />
    </div>
  );
}

function ChoicePanel({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="mt-4 rounded-[var(--radius-md)] border border-[var(--border-subtle)] p-3">
      <p className="text-xs font-medium text-[var(--foreground-secondary)]">{label}</p>
      <ChipGroup options={options} value={value} onChange={onChange} />
    </div>
  );
}

function ChipGroup({
  options,
  value,
  onChange,
}: {
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={cn(
            "rounded-full border px-3 py-1.5 text-xs transition-colors",
            value === option
              ? "border-[var(--border-strong)] bg-[var(--accent-muted)] text-foreground"
              : "border-[var(--border-subtle)] text-muted-foreground hover:border-[var(--border-strong)] hover:text-foreground",
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
