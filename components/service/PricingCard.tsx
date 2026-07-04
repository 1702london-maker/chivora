import { Button } from "@/components/ui/Button";

export function PricingCard({
  title,
  price,
  detail,
  ctaLabel = "Book a discovery call",
  ctaHref = "/contact",
}: {
  title: string;
  price: string;
  detail: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <div className="rounded-[var(--radius-card)] bg-blue-tint p-8">
      <div className="rounded-[var(--radius-card)] border border-line bg-white p-8 shadow-[var(--shadow-card)]">
        <p className="font-mono-chivora text-xs tracking-[0.08em] text-ink-mute uppercase">
          {title}
        </p>
        <p className="font-display mt-3 text-3xl font-bold text-ink">
          {price}
        </p>
        <p className="mt-2 text-sm text-ink-soft">{detail}</p>
        <div className="mt-6">
          <Button href={ctaHref} variant="primary">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
