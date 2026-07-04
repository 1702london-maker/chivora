import type { Metadata } from "next";
import { Mail, Phone, Link2, MapPin } from "lucide-react";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Chivora — D365 Data Migration Specialists",
  description: "Book a discovery call with Chivora to talk about your D365 data migration.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-6 py-16">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="font-display mt-3 text-[var(--text-h2)] font-bold tracking-[-0.02em] text-ink">
            Book a discovery call.
          </h1>
          <p className="mt-3 max-w-[52ch] text-ink-soft">
            Tell us about your migration and we&apos;ll come back with next
            steps within one business day.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
            <ContactForm />

            <div className="flex flex-col gap-8">
              <div className="rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-[var(--shadow-card)]">
                <p className="font-mono-chivora text-xs tracking-[0.08em] text-ink-mute uppercase">
                  Direct
                </p>
                <ul className="mt-4 flex flex-col gap-3 text-sm text-ink-soft">
                  <li className="flex items-center gap-2">
                    <Mail className="h-4 w-4 stroke-ink-mute" />
                    hello@chivora.co.uk
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="h-4 w-4 stroke-ink-mute" />
                    +44 20 0000 0000
                  </li>
                  <li className="flex items-center gap-2">
                    <Link2 className="h-4 w-4 stroke-ink-mute" />
                    linkedin.com/company/chivora
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 stroke-ink-mute" />
                    Registered in England &amp; Wales
                  </li>
                </ul>
              </div>

              <div className="rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-[var(--shadow-card)]">
                <p className="font-mono-chivora text-xs tracking-[0.08em] text-ink-mute uppercase">
                  Book directly
                </p>
                {/* Cal.com embed placeholder — swap for real Cal.com booking
                    link/embed once the account is connected. */}
                <div className="mt-4 flex h-56 flex-col items-center justify-center rounded-lg border border-dashed border-line bg-gray-50 text-center">
                  <span className="font-mono-chivora text-[10px] tracking-[0.08em] text-ink-mute uppercase">
                    Cal.com widget placeholder
                  </span>
                  <span className="mt-1 max-w-[220px] text-xs text-ink-mute">
                    Awaiting Cal.com account connection
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
