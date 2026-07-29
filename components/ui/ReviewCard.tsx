interface ReviewCardProps {
  text: string;
  name: string;
  sector: string;
  rating: number;
}

export function ReviewCard({ text, name, sector, rating }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-[16px] border border-line p-8 shadow-card hover:shadow-cardHover hover:border-brand-200 transition-all duration-300 flex flex-col h-full">
      <div className="flex items-center gap-1 mb-6 text-amber text-xl">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>{i < rating ? "★" : "☆"}</span>
        ))}
      </div>
      <p className="text-muted leading-relaxed text-lg mb-8 flex-grow italic">
        "{text}"
      </p>
      <div className="mt-auto border-t border-line pt-5 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-brand-50 text-brand-deep flex items-center justify-center font-bold text-xl shadow-sm">
          {name.charAt(0)}
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-ink text-lg leading-tight">{name}</span>
          <span className="text-sm text-faint uppercase tracking-wider mt-0.5">{sector}</span>
        </div>
      </div>
    </div>
  );
}
