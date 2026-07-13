import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions | Chivora",
  description: "Terms governing use of this site and Chivora's services.",
};

export default function TermsPage() {
  return (
    <LegalPageLayout eyebrow="Legal" title="Terms & Conditions">
      <p>
        This website is operated by Chivora, registered in England &amp;
        Wales.
      </p>
      <p>
        Engagement-specific terms (Statement of Work, day-rate agreement,
        or retainer contract) are agreed separately and directly with each
        client before work begins — see{" "}
        <a href="/how-we-engage" className="text-blue hover:underline">
          How We Engage
        </a>{" "}
        for an overview of the commercial process.
      </p>
      <p>
        All prices published on this site exclude VAT. Full website terms
        of use will be published here following legal review.
      </p>
      <p>
        Questions can be directed to info@chivora.co.uk.
      </p>
    </LegalPageLayout>
  );
}
