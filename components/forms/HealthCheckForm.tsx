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
import { SOURCE_SYSTEMS } from "@/lib/constants";

export function HealthCheckForm() {
  const [sourceSystems, setSourceSystems] = useState<string[]>([]);
  const [partnerEngaged, setPartnerEngaged] = useState<"yes" | "no" | "unsure">(
    "unsure"
  );
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">(
    "idle"
  );

  const toggle = (value: string) => {
    setSourceSystems((s) =>
      s.includes(value) ? s.filter((v) => v !== value) : [...s, value]
    );
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
      domainsCount: formData.get("domainsCount"),
      qualityConcerns: formData.get("qualityConcerns"),
      partnerEngaged,
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, requestType: "health-check" }),
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
          Health Check request received.
        </p>
        <p className="mt-2 text-sm text-ink-soft">
          We&apos;ll follow up within one business day to scope the engagement.
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
              onChange={() => toggle(s)}
            />
          ))}
        </div>
      </FieldGroup>

      <FieldGroup label="Number of data domains to review">
        <SelectInput name="domainsCount">
          <option value="1-2">1–2</option>
          <option value="3-4">3–4</option>
          <option value="5-7">5–7 (all domains)</option>
        </SelectInput>
      </FieldGroup>

      <FieldGroup label="Current data quality concerns">
        <TextArea
          name="qualityConcerns"
          placeholder="Duplicates, incomplete masters, reconciliation issues..."
        />
      </FieldGroup>

      <FieldGroup label="Is a D365 partner/SI already engaged?">
        <div className="grid grid-cols-3 gap-2">
          <RadioOption
            name="partnerEngaged"
            label="Yes"
            checked={partnerEngaged === "yes"}
            onChange={() => setPartnerEngaged("yes")}
          />
          <RadioOption
            name="partnerEngaged"
            label="No"
            checked={partnerEngaged === "no"}
            onChange={() => setPartnerEngaged("no")}
          />
          <RadioOption
            name="partnerEngaged"
            label="Not yet sure"
            checked={partnerEngaged === "unsure"}
            onChange={() => setPartnerEngaged("unsure")}
          />
        </div>
      </FieldGroup>

      <FieldGroup label="Message / context">
        <TextArea name="message" placeholder="Anything else we should know?" />
      </FieldGroup>

      <label className="flex items-start gap-2 text-xs text-ink-soft">
        <input type="checkbox" required className="mt-0.5 accent-blue" />
        I consent to Chivora storing and processing this information to
        respond to my enquiry.
      </label>

      <Button type="submit" variant="primary" className="w-fit">
        {status === "submitting" ? "Sending..." : "Request a Health Check"}
      </Button>

      {status === "error" && (
        <p className="text-sm text-amber">
          Something went wrong. Please try again or email hello@chivora.co.uk.
        </p>
      )}
    </form>
  );
}
