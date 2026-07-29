import { generateSeoMetadata } from "@/lib/metadata";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { Hero } from "@/components/ui/Hero";
import { TrustStrip } from "@/components/ui/TrustStrip";
import { CategoryGrid } from "@/components/ui/CategoryGrid";
import { StepsHowItWorks } from "@/components/ui/StepsHowItWorks";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { CTABlock } from "@/components/ui/CTABlock";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";
import Link from "next/link";
import Script from "next/script";
import { Home as HomeIcon, ShieldCheck, Star, MapPin, Search, HandCoins, UserCheck, Smartphone, IndianRupee } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup } from "@/components/motion/StaggerGroup";

export const metadata = generateSeoMetadata({
  title: "Home Services in Noida — Book 170+ Verified Professionals",
  description: "Book verified maids, cleaners, electricians, beauticians & 170+ home services in Noida. Set your own price with bidding. Download the MOYO app.",
  path: "/",
});

export default function Home() {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://www.moyointernational.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.moyointernational.com/services?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <LocalBusinessJsonLd />
      <Script
        id="website-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Header />
      <main>
        {/* Section 1: Hero */}
        <Hero 
          h1={<>Book Verified Professionals for <span className="text-brand">170+ Home Services</span> in Noida</>}
          subhead="One app for your whole home — maids, cleaners, electricians, beauticians, tutors and 170+ more. Every professional is ID-verified. And with bidding, you set the price you want to pay."
          trustChips={[
            "✓ 170+ Services",
            "✓ Verified Experts",
            "✓ You Set the Price (Bidding)",
            "✓ Serving all of Noida"
          ]}
          image="/images/hero-app-mockup.jpg"
          isMockup={true}
          floatingBadges={[
            { text: "Verified Expert", icon: "🛡️", positionClass: "top-20 -left-6 md:-left-12" },
            { text: "4.9★", icon: "⭐", positionClass: "bottom-40 -right-4 md:-right-8" },
            { text: "Under 5 min", icon: "⚡", positionClass: "bottom-16 -left-4 md:-left-10" }
          ]}
          primaryCta={{ label: "Download the App", href: "https://app.moyointernational.com" }}
          secondaryCta={{ label: "Book on WhatsApp", href: "https://wa.me/919876543210" }}
        />

        {/* Section 2: TrustStrip */}
        <TrustStrip stats={[
          { icon: <HomeIcon className="w-10 h-10 text-brand" strokeWidth={1.5} />, number: "[X]+", label: "Homes Served in Noida" },
          { icon: <ShieldCheck className="w-10 h-10 text-brand" strokeWidth={1.5} />, number: "[X]+", label: "Verified Professionals" },
          { icon: <Star className="w-10 h-10 text-brand" strokeWidth={1.5} />, number: "[X]", label: "Average Rating" },
          { icon: <MapPin className="w-10 h-10 text-brand" strokeWidth={1.5} />, number: "100+", label: "Noida Sectors Served" }
        ]} />

        {/* Section 3: CategoryGrid */}
        <CategoryGrid />

        {/* Section 4: The MOYO Difference */}
        <section className="py-16 md:py-24 bg-white">
          <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-[44px] font-bold text-ink tracking-tight mb-4">The MOYO <span className="text-brand">Difference</span></h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">Why homeowners in Noida choose us over local agents and other apps.</p>
            </div>
            
            <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Verified before they reach you", desc: "ID, address & reference checks in 48 hours. Not \"trust me\" from an agent.", icon: <UserCheck className="w-6 h-6" /> },
                { title: "You set the price", desc: "Bidding puts the rate in your hands. Propose what you'll pay; the pro confirms.", icon: <HandCoins className="w-6 h-6" /> },
                { title: "Fixed pricing, shown upfront", desc: "See the full price before you book. No surprises at the door.", icon: <IndianRupee className="w-6 h-6" /> },
                { title: "Fair wages = help that stays", desc: "No double commission. Workers keep more, so quality stays high.", icon: <ShieldCheck className="w-6 h-6" /> },
                { title: "Live tracking", desc: "Track your professional from dispatch to arrival, in real time.", icon: <MapPin className="w-6 h-6" /> },
                { title: "One app, everything", desc: "Maid today, electrician next week, beautician for the wedding. Same account, same trust.", icon: <Smartphone className="w-6 h-6" /> }
              ].map((diff, i) => (
                <div key={i} className="p-8 card-base card-hover">
                  <div className="w-12 h-12 bg-[#FFF7ED] text-brand rounded-full flex items-center justify-center mb-6 border border-brand/10">
                    {diff.icon}
                  </div>
                  <h3 className="text-xl font-bold text-ink mb-3">{diff.title}</h3>
                  <p className="text-muted leading-relaxed">{diff.desc}</p>
                </div>
              ))}
            </StaggerGroup>
          </Reveal>
        </section>

        {/* Section 5: Why MOYO vs the alternatives */}
        <section className="py-16 md:py-24 bg-section-alt">
          <Reveal className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-[44px] font-bold text-ink tracking-tight mb-4">MOYO vs The <span className="text-brand">Alternatives</span></h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">See how we stack up against traditional agents and funded apps in Noida.</p>
            </div>

            <div className="overflow-x-auto rounded-[16px] border border-line shadow-card bg-white">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-page border-b border-line">
                    <th className="py-5 px-6 font-semibold text-ink">Feature</th>
                    <th className="py-5 px-6 font-semibold text-ink text-center">Local Agent</th>
                    <th className="py-5 px-6 font-semibold text-ink text-center">Funded Apps</th>
                    <th className="py-5 px-6 font-bold text-brand text-center bg-brand-50/50">MOYO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {[
                    { feature: "Verification", agent: "✗ None", app: "~ Some", moyo: "✓ ID + reference" },
                    { feature: "Price control", agent: "✗ Agent decides", app: "✗ Fixed high", moyo: "✓ You bid" },
                    { feature: "Commission", agent: "✗ Both sides", app: "✗ High", moyo: "✓ Fair to workers" },
                    { feature: "Replacement", agent: "✗ Start over", app: "~ Slow", moyo: "✓ In-app" },
                    { feature: "Range", agent: "✗ Narrow", app: "~ Limited", moyo: "✓ 170+ services" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-page transition-colors group">
                      <td className="py-4 px-6 font-medium text-ink">{row.feature}</td>
                      <td className="py-4 px-6 text-muted text-center">{row.agent}</td>
                      <td className="py-4 px-6 text-muted text-center">{row.app}</td>
                      <td className="py-4 px-6 font-semibold text-brand-deep text-center bg-brand-50/30">{row.moyo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </section>

        {/* Section 6: StepsHowItWorks */}
        <StepsHowItWorks />

        {/* Section 7: Popular services strip */}
        <section className="py-16 bg-white border-y border-line">
          <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-ink mb-8">Popular in Noida</h2>
            <StaggerGroup className="flex flex-wrap gap-4">
              {[
                { name: "Maid", href: "/domestic-help-noida" },
                { name: "AC Repair", href: "/home-repair-noida" },
                { name: "Salon at Home", href: "/beauty-services-noida" },
                { name: "Deep Cleaning", href: "/home-cleaning-noida" },
                { name: "Electrician", href: "/home-repair-noida" },
                { name: "Nurse at Home", href: "/home-nursing-noida" },
              ].map((service, i) => (
                <Link
                  key={i}
                  href={service.href}
                  className="px-6 py-3 rounded-full border border-line bg-page text-ink font-medium hover:border-brand hover:text-brand transition-colors duration-300 ease-expo shadow-sm hover:shadow"
                >
                  {service.name}
                </Link>
              ))}
            </StaggerGroup>
          </Reveal>
        </section>

        {/* Reviews Section Temporarily Hidden */}

        {/* Section 9: Earn with MOYO */}
        <section className="py-16 bg-brand-50 border-y border-brand-200">
          <Reveal className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
            <h2 className="text-4xl md:text-[44px] font-bold text-ink tracking-tight mb-4">Are you a skilled <span className="text-brand">professional?</span></h2>
            <p className="text-lg text-muted">
              Earn on your terms with MOYO — fair pay, no commission trap, work near you in Noida.
            </p>
            <Link 
              href="/become-a-provider"
              className="inline-flex items-center justify-center btn-primary min-h-[48px] px-8 font-medium mt-2"
            >
              Become a Provider
            </Link>
          </Reveal>
        </section>

        {/* Section 10: FAQ */}
        <div className="px-4 sm:px-6 lg:px-8">
          <FAQAccordion faqs={[
            { q: "What services does MOYO offer in Noida?", a: "We offer over 170 services across 14 categories, including domestic help (maids, cooks), home cleaning, repairs (plumbers, electricians), beauty and grooming, home nursing, tutors, and more." },
            { q: "How does MOYO's bidding work?", a: "You propose a price you're willing to pay for a service. Professionals in your area review it and can accept it or counter with their best rate. You stay in control of the final price." },
            { q: "Are MOYO professionals verified?", a: "Yes. Every professional undergoes a strict verification process including ID, address, and reference checks. For sensitive roles like childcare, we conduct thorough background checks." },
            { q: "Which areas of Noida does MOYO cover?", a: "We serve all of Noida and Greater Noida, including Noida Extension (Greater Noida West)." },
            { q: "Is there any booking charge?", a: "Our pricing structure is completely transparent. The price you agree upon in the app is the final price, with no hidden booking fees or surprise charges at the door." },
          ]} />
        </div>

        {/* Section 11: Closing CTA */}
        <CTABlock 
          heading="Your whole home, sorted in one app."
          primaryCta={{ label: "Download MOYO", href: "https://app.moyointernational.com" }}
          secondaryCta={{ label: "WhatsApp Us", href: "https://wa.me/919876543210" }}
        />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
