import Link from "next/link";
import { ShieldCheck, Star, Zap } from "lucide-react";

interface CTABlockProps {
  heading: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function CTABlock({
  heading,
  primaryCta = { label: "Download the App", href: "https://app.moyointernational.com" },
  secondaryCta = { label: "Chat on WhatsApp", href: "https://wa.me/919876543210" }
}: CTABlockProps) {
  return (
    <section className="bg-gradient-to-br from-brand to-brand-deep py-16 md:py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="text-center lg:text-left max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-10 tracking-tight leading-tight">
            {heading}
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mt-8">
            <Link 
              href={primaryCta.href}
              className="inline-flex items-center justify-center bg-white text-brand-deep rounded-[12px] min-h-[52px] px-8 text-lg font-bold hover:bg-page transition-all duration-300 ease-expo w-full sm:w-auto shadow-card hover:-translate-y-0.5"
            >
              {primaryCta.label}
            </Link>
            <Link 
              href={secondaryCta.href}
              target={secondaryCta.href.startsWith("http") ? "_blank" : undefined}
              rel={secondaryCta.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex items-center justify-center bg-transparent border-2 border-white/80 text-white hover:bg-white/10 rounded-[12px] min-h-[52px] px-8 text-lg font-bold transition-colors w-full sm:w-auto hover:-translate-y-0.5 ease-expo"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </div>
        
        {/* Trust Badges on the right side */}
        <div className="hidden lg:flex flex-col gap-4 min-w-[280px]">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[16px] p-5 flex items-center gap-4 text-white hover:bg-white/15 transition-colors">
            <ShieldCheck className="w-8 h-8 opacity-90" strokeWidth={1.5} />
            <div>
              <div className="font-bold text-lg leading-tight">100% Verified</div>
              <div className="text-sm opacity-80">ID & background checked</div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[16px] p-5 flex items-center gap-4 text-white ml-8 hover:bg-white/15 transition-colors">
            <Star className="w-8 h-8 opacity-90" strokeWidth={1.5} />
            <div>
              <div className="font-bold text-lg leading-tight">4.9★ Rated</div>
              <div className="text-sm opacity-80">Thousands of reviews</div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[16px] p-5 flex items-center gap-4 text-white hover:bg-white/15 transition-colors">
            <Zap className="w-8 h-8 opacity-90" strokeWidth={1.5} />
            <div>
              <div className="font-bold text-lg leading-tight">Instant Booking</div>
              <div className="text-sm opacity-80">You set the price</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
