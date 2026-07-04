export function DomainMappingTable({
  rows,
}: {
  rows: { source: string; target: string }[];
}) {
  return (
    <div className="overflow-hidden rounded-[var(--radius-card)] border border-line">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-line bg-blue-tint">
            <th className="font-mono-chivora px-4 py-3 text-xs tracking-wide text-ink-mute uppercase">
              Source entity
            </th>
            <th className="font-mono-chivora px-4 py-3 text-xs tracking-wide text-ink-mute uppercase">
              D365 entity
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.source}
              className="border-b border-line last:border-0 transition-colors hover:bg-blue-tint/40"
            >
              <td className="font-mono-chivora px-4 py-3 text-ink-soft">
                {row.source}
              </td>
              <td className="font-mono-chivora px-4 py-3 text-blue">
                {row.target}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
