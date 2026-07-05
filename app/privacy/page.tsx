import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Chivora",
  description: "How Chivora handles personal data.",
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout eyebrow="Legal" title="Privacy Policy">
      <p>
        Chivora (trading name of Nwoye Concepts Ltd) collects personal data
        submitted through this site&apos;s forms — including contact
        details, company information, and project context — solely to
        respond to enquiries and deliver requested services.
      </p>
      <p>
        Data submitted via the contact, capability statement, and Health
        Check forms is stored securely and is not sold or shared with third
        parties for marketing purposes.
      </p>
      <p>
        A full privacy policy, including data retention periods, your
        rights under UK GDPR, and our data processing basis, will be
        published here following legal review.
      </p>
      <p>
        Questions about your data can be directed to hello@chivora.co.uk.
      </p>
    </LegalPageLayout>
  );
}
