import { generateSeoMetadata } from "@/lib/metadata";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Hero } from "@/components/ui/Hero";
import { TrustStrip } from "@/components/ui/TrustStrip";
import { ServiceBlock } from "@/components/ui/ServiceBlock";
import { PricingTable } from "@/components/ui/PricingTable";
import { StepsHowItWorks } from "@/components/ui/StepsHowItWorks";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTABlock } from "@/components/ui/CTABlock";
import { ServiceJsonLd } from "@/components/seo/ServiceJsonLd";
import Link from "next/link";

export const metadata = generateSeoMetadata({
  title: "Packers & Movers + Personal Drivers in Noida | MOYO",
  description: "Book packers & movers, personal drivers & chauffeurs in Noida. Verified, upfront pricing. Download the MOYO app.",
  path: "/packers-movers-noida",
});

export default function PackersMoversPage() {
  return (
    <>
      <ServiceJsonLd 
        serviceType="Packers, Movers & Drivers"
        description="Packers, movers, personal drivers, chauffeurs, and travel agents in Noida."
      />
      <Header />
      <main>
        <Breadcrumbs trail={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Packers, Movers & Drivers", href: "/packers-movers-noida" }
        ]} />

        {/* Section 1: Hero */}
        <Hero 
          h1="Packers, Movers & Drivers in Noida — Verified & Upfront"
          subhead="Moving house or need a driver you can rely on daily — either way you want verified people and a price you agreed in advance. MOYO covers personal drivers, chauffeurs and moving help across Noida."
          trustChips={[
            "✓ Verified professionals",
            "✓ Upfront pricing",
            "✓ Serving all of Noida"
          ]}
          image="/images/packers-movers-hero.jpg"
          primaryCta={{ label: "Download the App", href: "https://app.moyointernational.com" }}
          secondaryCta={{ label: "Book on WhatsApp", href: "https://wa.me/919876543210" }}
        />

        {/* Section 2: TOC */}
        <section className="bg-page py-4 border-b border-line sticky top-[72px] md:top-[80px] z-40 hidden lg:block shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-5 text-sm font-medium justify-center">
              <span className="text-faint uppercase tracking-wider text-xs font-semibold mr-2">Jump to:</span>
              <a href="#personal-driver" className="text-ink hover:text-brand transition-colors">Personal Driver</a>
              <a href="#chauffeur" className="text-ink hover:text-brand transition-colors">Chauffeur</a>
              <a href="#travel-agent" className="text-ink hover:text-brand transition-colors">Travel Agent</a>
              <a href="#commercial-driver" className="text-ink hover:text-brand transition-colors">Commercial Driver</a>
              <a href="#pricing" className="text-brand hover:text-brand-deep transition-colors ml-4 font-bold">Pricing</a>
            </div>
          </div>
        </section>

        {/* Section 3: TrustStrip */}
        <TrustStrip stats={[
          { icon: "🚚", number: "4.8/5", label: "Transport Bookings in Noida" },
          { icon: "🛡️", number: "48 Hr", label: "Verification Process" },
          { icon: "⭐", number: "4.8/5", label: "Average Rating" },
          { icon: "📍", number: "100+", label: "Noida Sectors Served" }
        ]} />

        {/* Section 4: Service Blocks */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-8">
          
          {/* Note: The spec combines Packers & Movers into the H1/Title but the sub-services focus on Drivers and Travel. The "Packers & Movers" base service is typically implied as a core offering here too, but I'll strictly stick to the 4 explicit blocks provided in the spec + the 'Also available' note. */}

          <ServiceBlock 
            id="personal-driver"
            title="Personal Driver in Noida"
            keyword="personal driver in Noida"
            body={[
              "Daily/monthly personal drivers — verified, your car. Finding a reliable, safe driver for your daily commute or school runs shouldn't be a gamble. MOYO connects you with verified personal drivers in Noida who are trained to handle your personal vehicle with care.",
              "Whether you need a driver for a daily 9-to-5 commute from Noida Extension to Gurugram, or a dedicated monthly driver for your family's errands, our platform ensures every professional undergoes a strict background and driving history check.",
              "Forget haggling over salaries or dealing with sudden absences. You propose your monthly or daily rate through our bidding system, read reviews from other vehicle owners, and hire a dependable driver who values punctuality."
            ]}
            priceFrom="499"
            cta={{ label: "Book personal driver", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="chauffeur"
            title="Chauffeur in Noida"
            keyword="chauffeur on hire Noida"
            body={[
              "Chauffeur on hire for occasions & travel. Special occasions demand a premium, stress-free travel experience. MOYO provides professional chauffeurs on hire in Noida for weddings, corporate VIP transport, or long-distance outstation travel in your vehicle.",
              "Our chauffeurs are trained in professional etiquette, defensive driving, and route navigation. If you have guests arriving at the Delhi airport or need a smartly dressed driver for a formal event in Sector 18, you can book a highly-rated chauffeur by the hour or for the day.",
              "Review their profiles, agree on the fixed upfront price, and ensure your journey is smooth and secure."
            ]}
            priceFrom="499"
            cta={{ label: "Book chauffeur", href: "https://app.moyointernational.com" }}
          />
          
          <ServiceBlock 
            id="travel-agent"
            title="Travel Agent in Noida"
            keyword="travel agent Noida"
            body={[
              "Trip planning, bookings, packages. Planning a vacation or corporate trip can easily become a stressful full-time job. Instead of endlessly scrolling through booking sites, connect with a verified travel agent in Noida through MOYO.",
              "Our local travel experts handle end-to-end trip planning, including flight bookings, hotel reservations, and custom itinerary creation. Whether you are organizing a large family holiday, a corporate offsite, or a quick weekend getaway, they use their industry connections to get you the best packages.",
              "Discuss your destination and budget preferences, and let a professional manage the logistics while you just pack your bags."
            ]}
            priceFrom="499"
            cta={{ label: "Book travel agent", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="commercial-driver"
            title="Commercial Vehicle Driver in Noida"
            keyword="commercial driver Noida"
            body={[
              "Drivers for commercial vehicles (B2B). For businesses relying on logistics, a dependable driver is critical to the supply chain. MOYO connects Noida-based businesses with experienced commercial vehicle drivers.",
              "Whether you need someone to operate a delivery tempo, a goods truck, or a company shuttle bus, our verified drivers hold the necessary commercial licenses and experience. Perfect for short-term leave covers or long-term logistics partnerships, our platform allows you to hire vetted drivers on a daily or monthly basis.",
              "Keep your business moving without the overhead of traditional recruitment agencies."
            ]}
            priceFrom="499"
            cta={{ label: "Book commercial vehicle driver", href: "https://app.moyointernational.com" }}
          />
          
          <div className="bg-section-alt p-8 rounded-[16px] border border-line shadow-sm">
            <h3 className="text-xl font-bold text-ink mb-3">Also Available on MOYO</h3>
            <p className="text-muted leading-relaxed">
              Need assistance while traveling? We also offer <strong className="text-ink">Travel Support, Tour Guides, and Elderly Travel Support</strong> across Noida to ensure your journeys are safe and well-managed.
            </p>
          </div>
        </div>

        {/* Section 5: Pricing */}
        <section id="pricing" className="py-16 md:py-24 bg-page border-y border-line">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-ink mb-8 text-center tracking-tight">Driver & Transport Pricing in Noida</h2>
            <PricingTable rows={[
              { service: "Personal Driver", partTime: "from ₹499", fullTime: "from ₹499", note: "Daily / Monthly" },
              { service: "Chauffeur on Hire", partTime: "from ₹499", fullTime: "—", note: "Per hour / Day rate" },
              { service: "Packers & Movers", partTime: "from ₹499", fullTime: "—", note: "Per move (distance based)" },
              { service: "Commercial Driver", partTime: "from ₹499", fullTime: "from ₹499", note: "Daily / Monthly" },
            ]} />
          </div>
        </section>

        {/* Section 6: Why MOYO */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-4">Why Book Movers & Drivers on MOYO?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Verified Pros</h3>
                <p className="text-muted leading-relaxed">Every driver and mover is thoroughly ID-checked for your safety and security.</p>
              </div>
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Upfront Pricing</h3>
                <p className="text-muted leading-relaxed">The price you agree to in the app is the price you pay. No mid-move renegotiation.</p>
              </div>
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Flexible Hiring</h3>
                <p className="text-muted leading-relaxed">Hire a driver for a quick daily drop-off, a one-off occasion, or on a monthly basis.</p>
              </div>
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Bidding System</h3>
                <p className="text-muted leading-relaxed">Set your budget by proposing a rate, and get matched with pros who accept it.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: How it Works */}
        <StepsHowItWorks />

        {/* Section 8: Coverage */}
        <section className="py-16 md:py-24 bg-white border-y border-line">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-ink mb-6">Serving Your Neighbourhood</h2>
            <p className="text-lg text-muted leading-relaxed">
              MOYO drivers, movers, and travel experts are available across Noida and Greater Noida, including <strong className="text-ink">Sector 18, 62, 76, 137, 150, 168, Noida Extension and Greater Noida West</strong>.
            </p>
          </div>
        </section>

        {/* Reviews Section Temporarily Hidden */}

        {/* Section 10: FAQ */}
        <div className="px-4 sm:px-6 lg:px-8 bg-white">
          <FAQAccordion faqs={[
            { q: "Can I hire a personal driver in Noida?", a: "Yes — you can hire verified daily and monthly personal drivers to operate your own vehicle." },
            { q: "Do you offer chauffeur on hire?", a: "Yes — professional chauffeurs are available for special occasions, VIP transport, and outstation travel." },
            { q: "How much do packers and movers cost?", a: "Pricing depends on the load and distance. You get a clear, upfront quote in the app before you confirm the booking." },
            { q: "Are drivers verified?", a: "Yes — every driver goes through strict ID and reference checks before joining the MOYO platform." }
          ]} />
        </div>

        {/* Internal Linking Block */}
        <section className="py-12 bg-section-alt border-t border-line text-center">
          <p className="text-muted mb-6 text-sm uppercase tracking-wider font-semibold">Looking for other services in Noida?</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <Link href="/construction-services-noida" className="text-brand font-medium hover:text-brand-hover hover:underline transition-all">Book Construction Services in Noida</Link>
            <span className="text-line hidden sm:inline">•</span>
            <Link href="/industrial-staffing-noida" className="text-brand font-medium hover:text-brand-hover hover:underline transition-all">Book Industrial Staffing in Noida</Link>
          </div>
        </section>

        {/* Section 11: Closing CTA */}
        <CTABlock 
          heading="Reliable transport and travel, sorted."
          primaryCta={{ label: "Download the MOYO app", href: "https://app.moyointernational.com" }}
          secondaryCta={{ label: "Book on WhatsApp", href: "https://wa.me/919876543210" }}
        />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
