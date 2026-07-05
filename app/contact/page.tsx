import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, Link2, MapPin, CalendarClock } from "lucide-react";
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
                <p className="mt-3 text-sm text-ink-soft">
                  Prefer to talk? Book a 20-minute discovery call using the
                  link below — or email us directly.
                </p>
                <ul className="mt-4 flex flex-col gap-3 text-sm text-ink-soft">
                  <li className="flex items-center gap-2">
                    <Mail className="h-4 w-4 stroke-ink-mute" />
                    hello@chivora.co.uk
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="h-4 w-4 stroke-ink-mute" />
                    <a href="tel:+447918554877" className="hover:text-blue">
                      +44 7918 554877
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Link2 className="h-4 w-4 stroke-ink-mute" />
                    <Link
                      href="https://www.linkedin.com/in/sunday-ukwungwu-0bb642161"
                      className="hover:text-blue"
                    >
                      linkedin.com/in/sunday-ukwungwu
                    </Link>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 stroke-ink-mute" />
                    Nwoye Concepts Ltd, registered in England &amp; Wales
                  </li>
                </ul>
              </div>

              <div className="rounded-[var(--radius-card)] border border-line bg-white p-6 shadow-[var(--shadow-card)]">
                <p className="font-mono-chivora text-xs tracking-[0.08em] text-ink-mute uppercase">
                  Book a 20-Minute Discovery Call with Sunday Ukwungwu, Founder — Chivora
                </p>
                <p className="mt-2 text-sm text-ink-soft">
                  A short, focused call to understand your D365 migration
                  challenge and whether Chivora is the right fit. No sales
                  pitch. No obligation.
                </p>
                {/* Cal.com embed — replace this placeholder with the real
                    embed code once the Cal.com account is connected
                    (calcom event: "Chivora — 20-Minute Discovery Call"). */}
                <div className="mt-4 flex h-40 flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-line bg-gray-50 text-center">
                  <CalendarClock className="h-5 w-5 stroke-ink-mute" />
                  <span className="max-w-[220px] text-xs text-ink-mute">
                    Cal.com booking embed pending account connection
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
