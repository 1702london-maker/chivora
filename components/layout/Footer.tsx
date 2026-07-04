import Link from "next/link";
import Image from "next/image";
import { Link2, Mail, Phone, CalendarClock } from "lucide-react";
import { SERVICES, SOURCE_SYSTEMS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white text-ink">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <p className="flex items-center gap-2">
              <Image src="/brand/icon.svg" alt="" width={24} height={24} />
              <span className="font-display text-xl font-bold text-ink">Chivora</span>
            </p>
            <p className="mt-4 max-w-xs text-sm text-ink-soft">
              Specialist Dynamics 365 data migration. Cleanly. Completely. On
              time.
            </p>
            <Link
              href="https://linkedin.com"
              className="group mt-6 inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-blue"
            >
              <Link2 className="h-4 w-4 stroke-ink-mute transition-colors group-hover:stroke-blue" />
              LinkedIn
            </Link>
          </div>

          <div>
            <p className="mono-eyebrow">
              <span className="slash">// </span>Services
            </p>
            <ul className="mt-4 space-y-3">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-blue"
                  >
                    <Link2 className="h-3.5 w-3.5 stroke-ink-mute transition-colors group-hover:stroke-blue" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mono-eyebrow">
              <span className="slash">// </span>Source Systems
            </p>
            <ul className="mt-4 space-y-3">
              {SOURCE_SYSTEMS.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/source-systems/${s.slug}`}
                    className="group flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-blue"
                  >
                    <Link2 className="h-3.5 w-3.5 stroke-ink-mute transition-colors group-hover:stroke-blue" />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mono-eyebrow">
              <span className="slash">// </span>Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-ink-soft">
              <li className="group flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 stroke-ink-mute transition-colors group-hover:stroke-blue" />
                hello@chivora.co.uk
              </li>
              <li className="group flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 stroke-ink-mute transition-colors group-hover:stroke-blue" />
                +44 20 0000 0000
              </li>
              <li>
                <Link
                  href="/contact"
                  className="group flex items-center gap-2 transition-colors hover:text-blue"
                >
                  <CalendarClock className="h-3.5 w-3.5 stroke-ink-mute transition-colors group-hover:stroke-blue" />
                  Book a call
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t-[1px] border-blue">
        <p className="font-mono-chivora mx-auto max-w-7xl px-6 py-5 text-[0.6875rem] tracking-[0.08em] text-ink-mute uppercase">
          Chivora — Registered in England &amp; Wales · All prices exclude VAT
        </p>
      </div>
    </footer>
  );
}
