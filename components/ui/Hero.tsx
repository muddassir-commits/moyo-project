import Image from "next/image";
import Link from "next/link";
import { FloatingBadge } from "@/components/motion/FloatingBadge";
import { HeroStagger, HeroStaggerItem } from "@/components/motion/HeroStagger";

interface HeroProps {
  h1: React.ReactNode;
  subhead: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  trustChips?: (string | { text: string; icon: React.ReactNode })[];
  image: string;
  isMockup?: boolean;
  floatingBadges?: { text: string; icon: React.ReactNode; positionClass: string }[];
}

export function Hero({
  h1,
  subhead,
  primaryCta = { label: "Download the App", href: "https://app.moyointernational.com" },
  secondaryCta = { label: "Chat on WhatsApp", href: "https://wa.me/919876543210" },
  trustChips = [
    { text: "Verified Experts", icon: null },
    { text: "Instant Booking", icon: null },
    { text: "4.8/5 Average Rating", icon: null }
  ],
  image,
  isMockup = false,
  floatingBadges,
}: HeroProps) {
  // If the image is a local path in /images/ and the user hasn't supplied it yet, show fallback
  const isPendingAsset = image.startsWith("/images/") || image.includes("placeholder");

  return (
    <section className="relative bg-hero pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-brand/15 rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3 pointer-events-none animate-float" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-amber/20 rounded-full blur-[140px] translate-x-1/4 translate-y-1/4 pointer-events-none animate-float-alt" />
      
      {/* Subtle dot pattern texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none mix-blend-multiply" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <HeroStagger className="flex flex-col gap-6 max-w-2xl">
            <HeroStaggerItem>
              <h1 className="text-5xl md:text-[72px] font-extrabold text-ink tracking-tight leading-[1.1]">
                {h1}
              </h1>
            </HeroStaggerItem>
            
            <HeroStaggerItem>
              <p className="text-lg text-muted md:text-xl leading-relaxed">
                {subhead}
              </p>
            </HeroStaggerItem>
            
            <HeroStaggerItem className="flex flex-wrap gap-4 mt-2">
              {trustChips.map((chip, idx) => {
                const isString = typeof chip === 'string';
                const text = isString ? chip : chip.text;
                const icon = isString ? null : chip.icon;
                
                return (
                  <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-line rounded-full text-sm font-medium text-ink shadow-sm">
                    {icon && <span className="text-brand flex items-center justify-center">{icon}</span>}
                    {text}
                  </span>
                );
              })}
            </HeroStaggerItem>

            <HeroStaggerItem className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link 
                href={primaryCta.href}
                className="inline-flex items-center justify-center btn-primary min-h-[44px] px-8 font-medium"
              >
                {primaryCta.label}
              </Link>
              <Link 
                href={secondaryCta.href}
                target={secondaryCta.href.startsWith("http") ? "_blank" : undefined}
                rel={secondaryCta.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center justify-center btn-secondary min-h-[44px] px-8 font-medium"
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
                <div className="w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center text-brand shrink-0" aria-hidden="true">{badge.icon}</div>
                <span className="font-semibold text-ink text-sm tracking-wide">{badge.text}</span>
              </FloatingBadge>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
