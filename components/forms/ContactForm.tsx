"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  FieldGroup,
  TextInput,
  TextArea,
  SelectInput,
  CheckboxOption,
  RadioOption,
} from "@/components/forms/FormField";
import { SOURCE_SYSTEMS, DATA_DOMAINS } from "@/lib/constants";

const STAGE_OPTIONS = [
  "Planning",
  "Mid-project",
  "Post-go-live issues",
  "Not yet started",
];

export function ContactForm() {
  const [sourceSystems, setSourceSystems] = useState<string[]>([]);
  const [domains, setDomains] = useState<string[]>([]);
  const [platform, setPlatform] = useState("F&O");
  const [stage, setStage] = useState(STAGE_OPTIONS[0]);
  const [role, setRole] = useState<"partner" | "end-client">("end-client");
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">(
    "idle"
  );

  const toggle = (list: string[], setList: (v: string[]) => void, value: string) => {
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const formData = new FormData(e.currentTarget);
    const payload = {
      fullName: formData.get("fullName"),
      workEmail: formData.get("workEmail"),
      company: formData.get("company"),
      jobTitle: formData.get("jobTitle"),
      sourceSystems,
      platform,
      domains,
      stage,
      role,
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="rounded-[var(--radius-card)] border border-line bg-white p-8 text-center shadow-[var(--shadow-card)]">
        <p className="font-display text-xl font-medium text-ink">
          Thanks — we&apos;ll be in touch shortly.
        </p>
        <p className="mt-2 text-sm text-ink-soft">
          A member of the team will follow up within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-6 rounded-[var(--radius-card)] border border-line bg-white p-8 shadow-[var(--shadow-card)]"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FieldGroup label="Full name">
          <TextInput name="fullName" required placeholder="Jane Smith" />
        </FieldGroup>
        <FieldGroup label="Work email">
          <TextInput name="workEmail" type="email" required placeholder="jane@company.com" />
        </FieldGroup>
        <FieldGroup label="Company name">
          <TextInput name="company" required placeholder="Company Ltd" />
        </FieldGroup>
        <FieldGroup label="Job title">
          <TextInput name="jobTitle" placeholder="Finance Director" />
        </FieldGroup>
      </div>

      <FieldGroup label="Source system(s) currently in use">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[...SOURCE_SYSTEMS.map((s) => s.name), "Other"].map((s) => (
            <CheckboxOption
              key={s}
              label={s}
              checked={sourceSystems.includes(s)}
              onChange={() => toggle(sourceSystems, setSourceSystems, s)}
            />
          ))}
        </div>
      </FieldGroup>

      <FieldGroup label="Target D365 platform">
        <SelectInput value={platform} onChange={(e) => setPlatform(e.target.value)}>
          <option value="F&O">Finance & Operations (F&O)</option>
          <option value="CE">Customer Engagement (CE)</option>
          <option value="Both">Both</option>
          <option value="Not sure">Not sure yet</option>
        </SelectInput>
      </FieldGroup>

      <FieldGroup label="Data domains in scope">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {DATA_DOMAINS.map((d) => (
            <CheckboxOption
              key={d.code}
              label={d.code}
              checked={domains.includes(d.code)}
              onChange={() => toggle(domains, setDomains, d.code)}
            />
          ))}
        </div>
      </FieldGroup>

      <FieldGroup label="Approximate go-live date or project stage">
        <SelectInput value={stage} onChange={(e) => setStage(e.target.value)}>
          {STAGE_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </SelectInput>
      </FieldGroup>

      <FieldGroup label="Are you a Microsoft Partner/SI or an end client?">
        <div className="grid grid-cols-2 gap-2">
          <RadioOption
            name="role"
            label="End client"
            checked={role === "end-client"}
            onChange={() => setRole("end-client")}
          />
          <RadioOption
            name="role"
            label="Partner / SI"
            checked={role === "partner"}
            onChange={() => setRole("partner")}
          />
        </div>
      </FieldGroup>

      <FieldGroup label="Message / context">
        <TextArea name="message" placeholder="Tell us about your migration..." />
      </FieldGroup>

      <label className="flex items-start gap-2 text-xs text-ink-soft">
        <input type="checkbox" required className="mt-0.5 accent-blue" />
        I consent to Chivora storing and processing this information to
        respond to my enquiry.
      </label>

      <Button type="submit" variant="primary" className="w-fit">
        {status === "submitting" ? "Sending..." : "Book a discovery call"}
      </Button>

      {status === "error" && (
        <p className="text-sm text-amber">
          Something went wrong. Please try again or email hello@chivora.co.uk.
        </p>
      )}
    </form>
  );
}
