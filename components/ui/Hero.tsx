import Image from "next/image";
import Link from "next/link";
import { FloatingBadge } from "@/components/motion/FloatingBadge";
import { HeroStagger, HeroStaggerItem } from "@/components/motion/HeroStagger";

interface HeroProps {
  h1: React.ReactNode;
  subhead: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  trustChips?: string[];
  image: string;
  isMockup?: boolean;
  floatingBadges?: { text: string; icon: string; positionClass: string }[];
}

export function Hero({
  h1,
  subhead,
  primaryCta = { label: "Download the App", href: "https://app.moyointernational.com" },
  secondaryCta = { label: "Chat on WhatsApp", href: "https://wa.me/919876543210" },
  trustChips = ["✓ Verified Experts", "⚡ Instant Booking", "⭐ 4.8/5 Average Rating"],
  image,
  isMockup = false,
  floatingBadges,
}: HeroProps) {
  // If the image is a local path in /images/ and the user hasn't supplied it yet, show fallback
  const isPendingAsset = image.startsWith("/images/") || image.includes("placeholder");

  return (
    <section className="relative bg-hero pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-float" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none animate-float-alt" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <HeroStagger className="flex flex-col gap-6 max-w-2xl">
            <HeroStaggerItem>
              <h1 className="text-[44px] leading-[1.1] md:text-[52px] font-bold text-ink tracking-tight">
                {h1}
              </h1>
            </HeroStaggerItem>
            
            <HeroStaggerItem>
              <p className="text-lg text-muted md:text-xl leading-relaxed">
                {subhead}
              </p>
            </HeroStaggerItem>
            
            <HeroStaggerItem className="flex flex-wrap gap-4 mt-2">
              {trustChips.map((chip, idx) => (
                <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-line rounded-full text-sm font-medium text-ink shadow-sm">
                  {chip}
                </span>
              ))}
            </HeroStaggerItem>

            <HeroStaggerItem className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link 
                href={primaryCta.href}
                className="inline-flex items-center justify-center bg-brand text-white rounded-[12px] min-h-[44px] px-8 font-medium hover:bg-brand-hover transition-all duration-300 ease-expo shadow-card hover:shadow-cardHover hover:-translate-y-[2px]"
              >
                {primaryCta.label}
              </Link>
              <Link 
                href={secondaryCta.href}
                target={secondaryCta.href.startsWith("http") ? "_blank" : undefined}
                rel={secondaryCta.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center justify-center bg-transparent border-[1.5px] border-brand text-brand-deep rounded-[12px] min-h-[44px] px-8 font-medium hover:bg-brand-50 transition-colors"
              >
                {secondaryCta.label}
              </Link>
            </HeroStaggerItem>
          </HeroStagger>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-md flex justify-center mt-12 lg:mt-0">
            {/* The main image container */}
            <div className={`relative w-full ${isMockup ? 'max-w-[280px] h-[560px] rounded-[40px] border-[10px] border-ink bg-page shadow-2xl' : 'aspect-[4/5] md:aspect-square rounded-3xl bg-gradient-to-br from-brand-50 to-amber-50 shadow-2xl'} overflow-hidden`}>
              {/* Fallback pattern if image is missing/loading */}
              {isPendingAsset ? (
                <div className="absolute inset-0 bg-gradient-to-br from-brand/20 to-amber/30 flex items-center justify-center p-8 text-center border border-brand/10">
                  <span className="text-brand-deep/60 font-medium tracking-wide uppercase text-sm">
                    {isMockup ? "App Screenshot Pending" : "Hero Image Pending"}
                  </span>
                </div>
              ) : (
                <Image 
                  src={image}
                  alt="Moyo International Services"
                  fill
                  className="object-cover object-center relative z-10"
                  priority
                />
              )}
            </div>

            {/* Floating Badges */}
            {floatingBadges && floatingBadges.map((badge, idx) => (
              <FloatingBadge 
                key={idx} 
                delay={idx * 0.4}
                className={`absolute z-20 flex items-center gap-2 px-4 py-3 bg-white rounded-full shadow-cardHover border border-line ${badge.positionClass}`}
              >
                <span className="text-xl" aria-hidden="true">{badge.icon}</span>
                <span className="font-semibold text-ink text-sm tracking-wide">{badge.text}</span>
              </FloatingBadge>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
