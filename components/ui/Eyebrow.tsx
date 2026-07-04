export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mono-eyebrow">
      <span className="slash">// </span>
      {children}
    </p>
  );
}
