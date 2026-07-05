export function TodoChip({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="rounded bg-amber/10 px-1.5 py-0.5 font-mono-chivora text-[0.9em] text-amber"
      title="Confirm this figure before publishing"
    >
      {children}
    </span>
  );
}
