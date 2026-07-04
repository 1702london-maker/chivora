"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FieldGroup, TextInput } from "@/components/forms/FormField";

export function CapabilityStatementForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">(
    "idle"
  );

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/download", {
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
      <div className="rounded-[var(--radius-card)] border border-line bg-white p-6 text-center shadow-[var(--shadow-card)]">
        <p className="font-display text-lg font-medium text-ink">
          Check your inbox.
        </p>
        <p className="mt-2 text-sm text-ink-soft">
          The capability statement is on its way to your email.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-4 rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-[var(--shadow-card)]"
    >
      <FieldGroup label="Name">
        <TextInput name="name" required placeholder="Jane Smith" />
      </FieldGroup>
      <FieldGroup label="Work email">
        <TextInput name="email" type="email" required placeholder="jane@company.com" />
      </FieldGroup>
      <FieldGroup label="Company">
        <TextInput name="company" required placeholder="Company Ltd" />
      </FieldGroup>
      <FieldGroup label="Role">
        <TextInput name="role" placeholder="Finance Director" />
      </FieldGroup>
      <Button type="submit" variant="primary" className="w-fit">
        {status === "submitting" ? "Sending..." : "Send me the PDF"}
      </Button>
      {status === "error" && (
        <p className="text-sm text-amber">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
