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
  return (
    <Reveal>
      <section className="bg-section-alt border-y border-line py-12 md:py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.filter(stat => !stat.number.includes("[X]")).map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3 p-4 rounded-[16px] hover:bg-white hover:shadow-sm transition-all duration-300 ease-expo">
                <span className="mb-2" aria-hidden="true">{stat.icon}</span>
                <span className="text-4xl md:text-5xl font-extrabold text-ink tracking-tight">
                  <StatCounter value={stat.number} />
                </span>
                <span className="text-sm font-semibold text-muted uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
