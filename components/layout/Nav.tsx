"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Database, Server } from "lucide-react";
import { SERVICES, SOURCE_SYSTEMS } from "@/lib/constants";
import { SOURCE_SYSTEMS_CONTENT } from "@/lib/content/sourceSystems";
import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", dropdown: "services" as const },
  { label: "Source Systems", dropdown: "source-systems" as const },
  { label: "How We Engage", href: "/how-we-engage" },
  { label: "Methodology", href: "/methodology" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        animate={{ height: scrolled ? 62 : 76 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="sticky top-0 z-50 w-full bg-white"
        style={{
          boxShadow: scrolled
            ? "0 1px 0 var(--line), 0 4px 16px rgb(0 0 0 / 0.04)"
            : "none",
        }}
      >
        <motion.div
          className="absolute top-0 left-0 h-[2px] w-full bg-blue origin-left"
          style={{ scaleX }}
        />

        <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/brand/icon.svg" alt="" width={28} height={28} priority />
            <span className="font-display text-xl font-bold text-ink">Chivora</span>
          </Link>

          <div className="hidden flex-nowrap items-center gap-5 xl:gap-6 lg:flex">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.dropdown)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="group flex items-center gap-1 whitespace-nowrap text-sm font-medium text-ink-soft transition-colors hover:text-ink">
                    {link.label}
                    <ChevronDown className="h-3.5 w-3.5 shrink-0 stroke-ink-mute transition-colors group-hover:stroke-blue" />
                  </button>

                  <AnimatePresence>
                    {openDropdown === link.dropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 8 }}
                        exit={{ opacity: 0, y: 0 }}
                        transition={{ duration: 0.25 }}
                        className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]"
                      >
                        <div className="grid grid-cols-2 gap-3">
                          {link.dropdown === "services"
                            ? SERVICES.map((item) => (
                                <Link
                                  key={item.slug}
                                  href={`/services/${item.slug}`}
                                  className="group flex items-start gap-3 rounded-lg p-2 text-sm transition-colors hover:bg-blue-tint"
                                >
                                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-tint group-hover:bg-white">
                                    <Database className="h-4 w-4 stroke-blue" />
                                  </span>
                                  <span>
                                    <span className="block font-medium text-ink">
                                      {item.title}
                                    </span>
                                    <span className="mt-0.5 block text-xs text-ink-mute">
                                      {item.description}
                                    </span>
                                  </span>
                                </Link>
                              ))
                            : SOURCE_SYSTEMS.map((s) => {
                                const detail = SOURCE_SYSTEMS_CONTENT.find(
                                  (c) => c.slug === s.slug
                                );
                                return (
                                  <Link
                                    key={s.slug}
                                    href={`/source-systems/${s.slug}`}
                                    className="group flex items-start gap-3 rounded-lg p-2 text-sm transition-colors hover:bg-blue-tint"
                                  >
                                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-tint group-hover:bg-white">
                                      <Server className="h-4 w-4 stroke-blue" />
                                    </span>
                                    <span>
                                      <span className="block font-medium text-ink">
                                        {s.name} to D365
                                      </span>
                                      <span className="mt-0.5 block text-xs text-ink-mute">
                                        {detail
                                          ? `→ D365 ${detail.platform}`
                                          : "Data migration engagement"}
                                      </span>
                                    </span>
                                  </Link>
                                );
                              })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href!}
                  className="whitespace-nowrap text-sm font-medium text-ink-soft transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="hidden shrink-0 items-center lg:flex">
            <Button href="/contact" className="!px-5 !py-2.5 whitespace-nowrap text-sm">
              Book a discovery call
            </Button>
          </div>

          <button
            className="lg:hidden"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col bg-white p-6 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Image src="/brand/icon.svg" alt="" width={28} height={28} />
                <span className="font-display text-xl font-bold text-ink">Chivora</span>
              </span>
              <button aria-label="Close menu" onClick={() => setMobileOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-12 flex flex-col gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={link.href ?? "/"}
                    onClick={() => setMobileOpen(false)}
                    className="font-display text-3xl font-bold text-ink"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Button href="/contact" className="mt-4 w-fit">
                Book a discovery call
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
