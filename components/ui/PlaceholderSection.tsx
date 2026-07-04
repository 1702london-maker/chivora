export function PlaceholderSection({ label }: { label: string }) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center border-b border-line">
      <p className="font-mono-chivora text-sm tracking-[0.08em] text-ink-mute uppercase">
        {label}
      </p>
    </div>
  );
}
