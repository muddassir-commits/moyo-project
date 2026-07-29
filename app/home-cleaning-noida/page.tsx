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
  title: "Home Deep Cleaning Services in Noida | Bathroom, Kitchen, Pest",
  description: "Book home deep cleaning in Noida — bathroom, kitchen, sofa, water tank & pest control. Verified cleaners, upfront pricing. Download the MOYO app.",
  path: "/home-cleaning-noida",
});

export default function HomeCleaningPage() {
  return (
    <>
      <ServiceJsonLd 
        serviceType="Home Deep Cleaning Services"
        description="Home deep cleaning in Noida including bathroom, kitchen, pest control, and water tank cleaning."
      />
      <Header />
      <main>
        <Breadcrumbs trail={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Home Cleaning", href: "/home-cleaning-noida" }
        ]} />

        {/* Section 1: Hero */}
        <Hero 
          h1="Home Deep Cleaning Services in Noida — Done Properly, Not Half-Done"
          subhead="A quick wipe-down isn't cleaning. Descaled bathroom tiles, a degreased kitchen chimney, a disinfected water tank — that's the difference between 'looks okay' and actually clean. MOYO's cleaning professionals are verified, come with proper equipment, and you see the price before they start. Book a one-time deep clean or a regular schedule across any Noida sector."
          trustChips={[
            "✓ Verified professionals",
            "✓ Upfront pricing",
            "✓ Serving all of Noida"
          ]}
          image="/images/home-cleaning-hero.jpg"
          primaryCta={{ label: "Download the App", href: "https://app.moyointernational.com" }}
          secondaryCta={{ label: "Book on WhatsApp", href: "https://wa.me/919876543210" }}
        />

        {/* Section 2: TOC */}
        <section className="bg-page py-4 border-b border-line sticky top-[72px] md:top-[80px] z-40 hidden lg:block shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-5 text-sm font-medium justify-center">
              <span className="text-faint uppercase tracking-wider text-xs font-semibold mr-2">Jump to:</span>
              <a href="#bathroom" className="text-ink hover:text-brand transition-colors">Bathroom</a>
              <a href="#pest-control" className="text-ink hover:text-brand transition-colors">Pest Control</a>
              <a href="#kitchen" className="text-ink hover:text-brand transition-colors">Kitchen</a>
              <a href="#window" className="text-ink hover:text-brand transition-colors">Window & Door</a>
              <a href="#water-tank" className="text-ink hover:text-brand transition-colors">Water Tank</a>
              <a href="#pricing" className="text-brand hover:text-brand-deep transition-colors ml-4 font-bold">Pricing</a>
            </div>
          </div>
        </section>

        {/* Section 3: TrustStrip */}
        <TrustStrip stats={[
          { icon: "✨", number: "[X]", label: "Cleaning Bookings in Noida" },
          { icon: "🛡️", number: "48 Hr", label: "Verification Process" },
          { icon: "⭐", number: "[X]", label: "Average Rating" },
          { icon: "📍", number: "100+", label: "Noida Sectors Served" }
        ]} />

        {/* Section 4: Service Blocks */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-8">
          
          <ServiceBlock 
            id="bathroom"
            title="Bathroom Cleaner in Noida"
            keyword="bathroom cleaning Noida"
            body={[
              "Deep scrub, descaling, sanitising — the job nobody wants to do themselves. Hard water stains on tiles and fixtures are a common headache in Noida. A quick wipe-down with regular floor cleaner won't remove them. MOYO's professional bathroom cleaners arrive equipped with specialized descaling chemicals, heavy-duty scrubbers, and the expertise to restore your tiles, taps, and shower enclosures.",
              "We thoroughly descale bathroom tiles, remove hard water stains from mirrors and glass, unclog drains, and sanitize the entire space including the toilet bowl and sink. Every corner is meticulously cleaned, leaving your bathroom smelling fresh and looking spotless.",
              "You can book a one-off deep clean before moving into a new apartment in Sector 137, or schedule regular monthly sessions to keep the grime away. Our cleaners are fully verified in 48 hours and you know exactly what you'll pay upfront. Set your rate, get matched, and let the experts handle the heavy scrubbing."
            ]}
            priceFrom="[X]"
            cta={{ label: "Book bathroom cleaner", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="pest-control"
            title="Pest Control Expert in Noida"
            keyword="pest control in Noida"
            body={[
              "Cockroach, termite, bedbug, mosquito treatments with safe chemicals + follow-up. Finding pests in your kitchen cabinets or waking up with bedbug bites is stressful. But letting an unverified exterminator spray unknown chemicals around your children and pets is worse. MOYO connects you with certified pest control experts in Noida who use government-approved, safe chemicals.",
              "Whether you're dealing with a stubborn cockroach infestation in Greater Noida West or termite damage in your wooden furniture in Sector 62, our verified professionals provide targeted treatments. They assess the severity of the infestation, apply the correct treatment—be it gel baits, odorless sprays, or intense fumigation—and provide clear follow-up instructions to prevent a recurrence.",
              "You see the full price before you book. No hidden charges added on the spot. Book a comprehensive pest control session on your schedule and protect your home safely."
            ]}
            priceFrom="[X]"
            cta={{ label: "Book pest control expert", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="kitchen"
            title="Kitchen Cleaner in Noida"
            keyword="kitchen cleaning Noida"
            body={[
              "Degreasing, chimney, cabinets, tiles — restaurant-level kitchen deep clean. Indian cooking leaves behind tough grease on exhaust fans, chimneys, and kitchen tiles. A daily maid's wipe isn't enough to remove this sticky residue. MOYO provides specialized kitchen cleaning professionals who use industrial-grade degreasers to break down years of accumulated oil and grime.",
              "Our service covers deep cleaning of the chimney filter, scrubbing grease off wall tiles, degreasing the stovetop, and thoroughly cleaning the inside and outside of all cabinets. We even tackle the tough spots behind the fridge and under the sink. Every cleaner on our platform is ID-verified and background-checked. You get a spotless, hygienic kitchen without lifting a finger.",
              "Propose your rate through our bidding system and get your kitchen deep cleaned by a verified professional before your next big family gathering."
            ]}
            priceFrom="[X]"
            cta={{ label: "Book kitchen cleaner", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="window"
            title="Window & Door Cleaner in Noida"
            keyword="window cleaning Noida"
            body={[
              "Glass, grills, tracks & frames — including high/hard-to-reach panes. Noida's dust settles into window tracks and coats your glass panes, blocking out the light. Cleaning them safely, especially in high-rise apartments in Sector 76 or Sector 150, requires the right tools and training.",
              "MOYO connects you with experienced cleaners who specialize in windows, doors, and balconies. They systematically vacuum the dust out of sliding window tracks, scrub the grills, and use professional squeegees for a streak-free finish on all glass surfaces.",
              "Hard-to-reach panes are handled safely and efficiently. You don't have to risk leaning out of your high-rise balcony. Just book a verified window cleaner, see the price upfront, and enjoy the clear view."
            ]}
            priceFrom="[X]"
            cta={{ label: "Book window cleaner", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="water-tank"
            title="Water Tank Cleaner in Noida"
            keyword="water tank cleaning Noida"
            body={[
              "Drain, scrub, disinfect overhead + underground tanks. Health-critical, done right. The water your family uses for bathing and brushing teeth comes from your overhead and underground tanks. In Noida, it's recommended to clean these tanks every six months to prevent algae, sludge, and harmful bacteria buildup.",
              "MOYO's water tank cleaning professionals follow a strict, multi-step mechanized process. They completely drain the tank, scrub the walls to remove scale and bio-film, vacuum the sludge from the bottom, and finally disinfect the entire tank using safe, food-grade agents.",
              "Don't compromise your family's health with a quick, unverified cleaning. Our experts are background-checked and bring all the necessary equipment, including high-pressure washers and industrial vacuums. Book a thorough, hygienic water tank clean and ensure your water supply is safe."
            ]}
            priceFrom="[X]"
            cta={{ label: "Book water tank cleaner", href: "https://app.moyointernational.com" }}
          />
          
          <div className="bg-section-alt p-8 rounded-[16px] border border-line shadow-sm">
            <h3 className="text-xl font-bold text-ink mb-3">Also Available</h3>
            <p className="text-muted leading-relaxed">
              Need more specific cleaning? MOYO also connects you with professionals for Balcony Cleaning, Garage Cleaning, and Staircase Cleaning across Noida. Whether you need your high-rise balcony scrubbed down in Sector 137 or your society's common staircase deep-cleaned, our verified experts handle it all with fixed upfront pricing.
            </p>
          </div>
        </div>

        {/* Section 5: Pricing */}
        <section id="pricing" className="py-16 md:py-24 bg-page border-y border-line">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-ink mb-8 text-center tracking-tight">Home Cleaning Pricing in Noida</h2>
            <PricingTable rows={[
              { service: "Bathroom Deep Clean", partTime: "from ₹[X]", fullTime: "—", note: "Depends on size" },
              { service: "Pest Control (2BHK)", partTime: "from ₹[X]", fullTime: "—", note: "Includes follow-up" },
              { service: "Kitchen Deep Clean", partTime: "from ₹[X]", fullTime: "—", note: "Includes chimney" },
              { service: "Water Tank Cleaning", partTime: "from ₹[X]", fullTime: "—", note: "Mechanized process" },
              { service: "Full Home Deep Clean", partTime: "from ₹[X]", fullTime: "—", note: "Set your rate" },
            ]} />
          </div>
        </section>

        {/* Section 6: Why MOYO */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-4">Why Book Home Cleaning on MOYO?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Proper Equipment</h3>
                <p className="text-muted leading-relaxed">Verified cleaners arrive with specialized chemicals and tools — not just a bucket and a prayer.</p>
              </div>
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Upfront Fixed Price</h3>
                <p className="text-muted leading-relaxed">Know the exact price per job before you confirm. No haggling or negotiation at your door.</p>
              </div>
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Flexible Scheduling</h3>
                <p className="text-muted leading-relaxed">Book a one-time deep clean before Diwali or set up a regular weekly maintenance routine.</p>
              </div>
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Tough Jobs Covered</h3>
                <p className="text-muted leading-relaxed">We handle the jobs you avoid — water tank draining, greasy chimneys, and hard water bathroom descaling.</p>
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
              MOYO cleaning services are available across Noida and Greater Noida, including <strong className="text-ink">Sector 18, 62, 76, 137, 150, 168, Noida Extension and Greater Noida West</strong>. Not sure if we cover your sector? Open the app and enter your location.
            </p>
          </div>
        </section>

        {/* Reviews Section Temporarily Hidden */}

        {/* Section 10: FAQ */}
        <div className="px-4 sm:px-6 lg:px-8 bg-white">
          <FAQAccordion faqs={[
            { q: "How much does home deep cleaning cost in Noida?", a: "It depends on the home size and scope — a bathroom deep clean starts from ₹[X], and a full-home clean from ₹[X]. You always see the price before booking." },
            { q: "Do you bring your own cleaning material?", a: "Yes — MOYO professionals arrive fully equipped with their own industry-grade cleaning chemicals, tools, and supplies unless you specifically request otherwise." },
            { q: "Is pest control safe for kids and pets?", a: "Our pest control treatments use government-approved chemicals and come with safety guidance. Please mention any children or pets when booking so the expert can take necessary precautions." },
            { q: "How often should a water tank be cleaned?", a: "In Noida, it is highly recommended to clean your water tanks every 6 months. MOYO thoroughly drains, scrubs, and disinfects both overhead and underground tanks." },
            { q: "Can I book cleaning for a society common area?", a: "Yes — staircase and common-area cleaning is readily available for independent homes and large societies." }
          ]} />
        </div>

        {/* Internal Linking Block */}
        <section className="py-12 bg-section-alt border-t border-line text-center">
          <p className="text-muted mb-6 text-sm uppercase tracking-wider font-semibold">Looking for other services in Noida?</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <Link href="/domestic-help-noida" className="text-brand font-medium hover:text-brand-hover hover:underline transition-all">Book Domestic Help Services in Noida</Link>
            <span className="text-line hidden sm:inline">•</span>
            <Link href="/laundry-services-noida" className="text-brand font-medium hover:text-brand-hover hover:underline transition-all">Book Laundry Services in Noida</Link>
            <span className="text-line hidden sm:inline">•</span>
            <Link href="/home-repair-noida" className="text-brand font-medium hover:text-brand-hover hover:underline transition-all">Book Home Repair Services in Noida</Link>
          </div>
        </section>

        {/* Section 11: Closing CTA */}
        <CTABlock 
          heading="Get your home professionally deep cleaned today."
          primaryCta={{ label: "Download the MOYO app", href: "https://app.moyointernational.com" }}
          secondaryCta={{ label: "Book on WhatsApp", href: "https://wa.me/919876543210" }}
        />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
