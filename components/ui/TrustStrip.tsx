import { Home, ShieldCheck, Star, MapPin } from "lucide-react";
import { StatCounter } from "@/components/motion/StatCounter";
import { Reveal } from "@/components/motion/Reveal";

interface Stat {
  icon: React.ReactNode;
  number: string;
  label: string;
}

interface TrustStripProps {
  stats?: Stat[];
}

export function TrustStrip({ stats = [
  { icon: <ShieldCheck className="w-10 h-10 text-brand" strokeWidth={1.5} />, number: "10,000+", label: "Verified Experts" },
  { icon: <Home className="w-10 h-10 text-brand" strokeWidth={1.5} />, number: "30 Min", label: "Average Response" },
  { icon: <Star className="w-10 h-10 text-brand" strokeWidth={1.5} />, number: "4.8/5", label: "Customer Rating" },
  { icon: <MapPin className="w-10 h-10 text-brand" strokeWidth={1.5} />, number: "100%", label: "Secure Booking" }
]}: TrustStripProps) {
  const validStats = stats.filter(stat => !stat.number.includes("[X]"));

  if (validStats.length === 0) return null;

  return (
    <Reveal>
      <section className="bg-section-alt border-y border-line py-12 md:py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {validStats.length === 1 ? (
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-8 bg-brand-50 border-y border-brand-100 rounded-2xl mx-auto max-w-4xl shadow-sm">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand shadow-sm">
                {validStats[0].icon}
              </div>
              <div className="text-center md:text-left flex flex-col">
                <span className="text-4xl md:text-5xl font-extrabold text-brand tracking-tight">
                  <StatCounter value={validStats[0].number} />
                </span>
                <span className="text-sm font-semibold text-ink uppercase tracking-widest mt-1">
                  {validStats[0].label}
                </span>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 text-center divide-y md:divide-y-0 md:divide-x divide-line">
              {validStats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center gap-3 p-4 hover:-translate-y-1 transition-transform duration-300 ease-expo">
                  <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center text-brand mb-2 mx-auto shadow-sm">
                    {stat.icon}
                  </div>
                  <span className="text-4xl md:text-5xl font-extrabold text-brand tracking-tight">
                    <StatCounter value={stat.number} />
                  </span>
                  <span className="text-sm font-semibold text-muted uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Reveal>
  );
}
