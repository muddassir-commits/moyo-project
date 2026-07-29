import { Reveal } from "@/components/motion/Reveal";
import Link from "next/link";

interface ServiceBlockProps {
  id: string;
  title: string;
  keyword: string;
  body: string[];
  priceFrom?: string;
  cta?: { label: string; href: string };
}

export function ServiceBlock({
  id,
  title,
  keyword,
  body,
  priceFrom,
  cta = { label: "Download the App", href: "https://app.moyointernational.com" }
}: ServiceBlockProps) {
  return (
    <Reveal>
      <section id={id} className="py-12 md:py-16 scroll-mt-24 border-b border-line last:border-0 relative">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-6">
            {title}
          </h2>
          
          <div className="prose prose-lg prose-p:text-muted prose-p:leading-relaxed max-w-none mb-8">
            {body.map((para, idx) => (
              <p key={idx} className="mb-4 last:mb-0 text-lg">
                {para}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-6 mt-8 p-6 bg-white border border-line rounded-[16px] shadow-card hover:shadow-cardHover hover:border-brand-200 transition-all duration-300">
            {priceFrom && !priceFrom.includes("[X]") ? (
              <div className="flex flex-col">
                <span className="text-xs text-faint uppercase tracking-wider font-semibold mb-1">Starting From</span>
                <span className="text-2xl font-bold text-ink">₹{priceFrom}</span>
              </div>
            ) : priceFrom ? (
              <div className="flex flex-col">
                <span className="text-xs text-faint uppercase tracking-wider font-semibold mb-1">Pricing</span>
                <span className="text-xl font-bold text-ink">Set your rate</span>
              </div>
            ) : null}
            
            <div className="flex-1 min-w-[200px]" />
            
            <Link 
              href={cta.href}
              title={keyword}
              className="inline-flex items-center justify-center bg-brand text-white rounded-[12px] min-h-[48px] px-8 font-medium hover:bg-brand-hover transition-all duration-300 ease-expo w-full sm:w-auto"
            >
              {cta.label}
            </Link>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
