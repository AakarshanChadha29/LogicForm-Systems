"use client";

import { ArrowRight } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const projectTypes = [
  "Website / Landing Page",
  "SaaS / Dashboard",
  "AI / Automation",
  "Cloud / Infrastructure",
  "IT Systems / Operations",
  "Ongoing Technical Partner",
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

const steps = [
  { key: "name", prompt: "Enter your name:" },
  { key: "email", prompt: "Enter your work email:" },
  { key: "company", prompt: "Enter your company:" },
  { key: "projectType", prompt: "Select project type:", options: projectTypes },
  { key: "budgetRange", prompt: "Select budget:", options: budgetRanges },
  { key: "timeline", prompt: "Select timeline:", options: timelines },
  { key: "message", prompt: "Share Your Idea, We will shape the Plan #:" },
  { key: "review", prompt: "Review inquiry. Submit? yes/no" },
] as const;

type StepKey = (typeof steps)[number]["key"];

export function TerminalContactForm() {
  const [values, setValues] = useState<InquiryValues>(initialValues);
  const [stepIndex, setStepIndex] = useState(0);
  const [input, setInput] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [terminalLines, setTerminalLines] = useState<string[]>([]);

  const currentStep = steps[stepIndex];

  const optionsText = useMemo(() => {
    if (!("options" in currentStep) || !currentStep.options) return "";
    return currentStep.options.map((option, idx) => `${idx + 1}) ${option}`).join("  ");
  }, [currentStep]);

  const appendLine = (line: string) => {
    setTerminalLines((existing) => [...existing.slice(-10), line]);
  };

  const resetTerminal = () => {
    setValues(initialValues);
    setInput("");
    setStepIndex(0);
    setStatus("idle");
    setTerminalLines(["Session reset."]);
  };

  const goBack = () => {
    setStatus("idle");
    setInput("");
    setStepIndex((idx) => Math.max(0, idx - 1));
    appendLine("Moved back one step.");
  };

  const printHelp = () => {
    appendLine("Commands: help | back | reset");
    appendLine("Use option number or full text for selection steps.");
  };

  const getSelectedValue = (value: string) => {
    if (!("options" in currentStep) || !currentStep.options) return value;
    const normalized = value.trim();
    const asNumber = Number.parseInt(normalized, 10);
    if (!Number.isNaN(asNumber) && asNumber >= 1 && asNumber <= currentStep.options.length) {
      return currentStep.options[asNumber - 1];
    }
    const matched = currentStep.options.find((option) => option.toLowerCase() === normalized.toLowerCase());
    return matched ?? "";
  };

  const submitInquiry = async () => {
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          website: honeypot,
        }),
      });

      if (!response.ok) {
        setStatus("error");
        appendLine("Submission failed. Try again or email directly.");
        return;
      }

      setStatus("success");
      appendLine("Inquiry sent successfully.");
      setValues(initialValues);
      setInput("");
      setStepIndex(0);
    } catch {
      setStatus("error");
      appendLine("Network error while sending inquiry.");
    }
  };

  const handleCommand = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = input.trim();
    if (!value || status === "loading") return;

    appendLine(`logicform@inquiry:~$ ${value}`);
    setInput("");

    const command = value.toLowerCase();
    if (command === "help") {
      printHelp();
      return;
    }
    if (command === "back") {
      goBack();
      return;
    }
    if (command === "reset") {
      resetTerminal();
      return;
    }

    if (currentStep.key === "review") {
      if (command === "yes" || command === "y") {
        await submitInquiry();
        return;
      }
      if (command === "no" || command === "n") {
        setStepIndex(steps.findIndex((step) => step.key === "message"));
        appendLine("Review cancelled. Update your message.");
        return;
      }
      appendLine('Please enter "yes" or "no".');
      return;
    }

    const nextValue = getSelectedValue(value);
    if (!nextValue) {
      appendLine("Input not recognized for this step.");
      return;
    }

    if (currentStep.key === "message" && nextValue.length < 20) {
      appendLine("Please enter at least 20 characters for your project idea.");
      return;
    }

    setValues((prev) => ({ ...prev, [currentStep.key]: nextValue }));
    setStepIndex((idx) => Math.min(idx + 1, steps.length - 1));
    setStatus("idle");
  };

  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[rgba(0,0,0,0.42)] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-5">
      <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
        <p className="text-eyebrow">Terminal inquiry</p>
        <span className="rounded-full border border-[var(--border)] bg-[var(--surface-card)] px-2 py-0.5 text-[10px] text-[var(--foreground-secondary)]">
          help · back · reset
        </span>
      </div>

      <div
        className="mt-3 max-h-64 overflow-y-auto rounded-[var(--radius-md)] border border-[var(--border)] bg-[rgba(0,0,0,0.52)] p-3 font-mono text-[11px] leading-relaxed text-[var(--foreground-secondary)] md:text-xs"
        aria-live="polite"
      >
        {terminalLines.length === 0 ? (
          <p className="text-muted-foreground">Type responses below. Use `help` for commands.</p>
        ) : (
          terminalLines.map((line, index) => <p key={`${line}-${index}`}>{line}</p>)
        )}
      </div>

      <div className="mt-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-[rgba(0,0,0,0.6)] p-3 font-mono text-[11px] md:text-xs">
        <p className="text-accent">logicform@inquiry:~$ {currentStep.prompt}</p>
        {optionsText ? <p className="mt-1 text-[var(--foreground-secondary)]">{optionsText}</p> : null}
      </div>

      {currentStep.key === "review" ? (
        <div className="mt-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-inset)] p-3 text-xs text-muted-foreground md:text-sm">
          <p>Name: {values.name}</p>
          <p>Email: {values.email}</p>
          <p>Company: {values.company || "Not provided"}</p>
          <p>Project type: {values.projectType}</p>
          <p>Budget: {values.budgetRange}</p>
          <p>Timeline: {values.timeline}</p>
          <p className="mt-2">Idea: {values.message}</p>
        </div>
      ) : null}

      <form onSubmit={handleCommand} className="mt-3" noValidate>
        <label htmlFor="terminal-inquiry-input" className="sr-only">
          Terminal inquiry input
        </label>
        <div className="flex gap-2">
          <input
            id="terminal-inquiry-input"
            type={currentStep.key === "email" ? "email" : "text"}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            className="input-field font-mono text-sm"
            autoComplete={
              currentStep.key === "name"
                ? "name"
                : currentStep.key === "email"
                  ? "email"
                  : currentStep.key === "company"
                    ? "organization"
                    : "off"
            }
            placeholder="Type response or command"
            disabled={status === "loading"}
            required
          />
          <button
            type="submit"
            className={cn(buttonVariants({ size: "lg" }), "shrink-0")}
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending…" : "Enter"}
            <ArrowRight size={16} aria-hidden />
          </button>
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
      </form>

      {status === "success" ? (
        <p className="mt-3 text-sm text-[var(--foreground-secondary)]" role="status">
          Inquiry received. Logicform Systems will respond with structured next steps.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="mt-3 text-sm text-[#f0a8a8]" role="alert">
          Unable to send inquiry. Email{" "}
          <a href={`mailto:${siteConfig.contactEmail}`} className="underline">
            {siteConfig.contactEmail}
          </a>{" "}
          directly.
        </p>
      ) : null}

      <p className="mt-3 text-xs text-muted-foreground">
        Fallback:{" "}
        <a href={`mailto:${siteConfig.contactEmail}`} className="underline hover:text-foreground">
          {siteConfig.contactEmail}
        </a>
        <span className="ml-2 inline-block animate-pulse text-accent" aria-hidden>
          █
        </span>
      </p>
    </div>
  );
}
