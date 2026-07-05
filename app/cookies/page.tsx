import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Cookie Policy | Chivora",
  description: "How Chivora uses cookies on this site.",
};

export default function CookiesPage() {
  return (
    <LegalPageLayout eyebrow="Legal" title="Cookie Policy">
      <p>
        This site uses only the minimum technical cookies required for it
        to function correctly. No third-party advertising or tracking
        cookies are currently in use.
      </p>
      <p>
        If analytics or booking tools (such as Cal.com) are added in future,
        this policy will be updated to reflect exactly what is set and why,
        along with any consent controls required.
      </p>
      <p>
        Questions about cookie use can be directed to hello@chivora.co.uk.
      </p>
    </LegalPageLayout>
  );
}
