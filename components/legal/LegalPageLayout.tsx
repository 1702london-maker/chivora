import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function LegalPageLayout({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 py-16">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="font-display mt-3 text-[var(--text-h2)] font-bold tracking-[-0.02em] text-ink">
            {title}
          </h1>
          <div className="mt-4 rounded-lg border border-dashed border-line bg-gray-50 px-4 py-3 text-sm text-ink-mute">
            This page is a placeholder pending formal legal review. Nothing
            below should be treated as a final, binding policy until
            confirmed by Chivora / Nwoye Concepts Ltd.
          </div>
          <div className="mt-8 flex flex-col gap-5 text-sm leading-[1.7] text-ink-soft">
            {children}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
