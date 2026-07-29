interface PricingRow {
  service: string;
  partTime?: string;
  fullTime?: string;
  note?: string;
}

interface PricingTableProps {
  rows: PricingRow[];
}

export function PricingTable({ rows }: PricingTableProps) {
  return (
    <div className="my-10">
      <div className="overflow-x-auto rounded-[16px] border border-line shadow-card bg-white">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-page border-b border-line">
              <th className="py-5 px-6 font-semibold text-ink">Service</th>
              <th className="py-5 px-6 font-semibold text-ink">Part-Time / One-off</th>
              <th className="py-5 px-6 font-semibold text-ink">Full-Time (Monthly)</th>
              <th className="py-5 px-6 font-semibold text-ink">Note</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {rows.map((row, idx) => {
              const sanitizePrice = (price?: string) => price?.includes("[X]") ? "Set your price (bidding)" : (price || "-");
              return (
                <tr key={idx} className="hover:bg-brand-50/30 transition-colors group">
                  <td className="py-4 px-6 font-medium text-ink group-hover:text-brand-deep transition-colors">{row.service}</td>
                  <td className="py-4 px-6 text-muted">{sanitizePrice(row.partTime)}</td>
                  <td className="py-4 px-6 text-muted">{sanitizePrice(row.fullTime)}</td>
                  <td className="py-4 px-6 text-sm text-faint">{row.note || "-"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-muted flex items-start gap-2 bg-hero p-4 rounded-[12px] border border-amber-100">
        <span className="text-amber mt-0.5">ℹ️</span> 
        <span>
          <strong>Transparent Pricing:</strong> The rates above are indicative. On Moyo, professionals bid for your job, ensuring you always get the fairest market rate.
        </span>
      </p>
    </div>
  );
}
