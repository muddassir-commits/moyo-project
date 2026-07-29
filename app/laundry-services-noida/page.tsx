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
  title: "Laundry, Dry Cleaning & Sofa Cleaning in Noida | MOYO",
  description: "Book laundry, ironing, dry cleaning, sofa & shoe cleaning in Noida. Pickup & delivery, verified professionals. Download the MOYO app.",
  path: "/laundry-services-noida",
});

export default function LaundryServicesPage() {
  return (
    <>
      <ServiceJsonLd 
        serviceType="Laundry & Fabric Care"
        description="Laundry, dry cleaning, sofa cleaning, and ironing services with pickup and delivery in Noida."
      />
      <Header />
      <main>
        <Breadcrumbs trail={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Laundry & Fabric Care", href: "/laundry-services-noida" }
        ]} />

        {/* Section 1: Hero */}
        <Hero 
          h1="Laundry, Dry Cleaning & Fabric Care in Noida"
          subhead="Piled-up laundry, a sofa that's seen better days, sneakers you'd rather not throw out — MOYO handles fabric care with pickup, cleaning and delivery, done by verified professionals across Noida."
          trustChips={[
            "✓ Verified professionals",
            "✓ Upfront pricing",
            "✓ Serving all of Noida"
          ]}
          image="/images/laundry-hero.jpg"
          primaryCta={{ label: "Download the App", href: "https://app.moyointernational.com" }}
          secondaryCta={{ label: "Book on WhatsApp", href: "https://wa.me/919876543210" }}
        />

        {/* Section 2: TOC */}
        <section className="bg-page py-4 border-b border-line sticky top-[72px] md:top-[80px] z-40 hidden lg:block shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-5 text-sm font-medium justify-center">
              <span className="text-faint uppercase tracking-wider text-xs font-semibold mr-2">Jump to:</span>
              <a href="#sofa" className="text-ink hover:text-brand transition-colors">Sofa Cleaning</a>
              <a href="#washing" className="text-ink hover:text-brand transition-colors">Washing & Ironing</a>
              <a href="#dhobi" className="text-ink hover:text-brand transition-colors">Local Dhobi</a>
              <a href="#pricing" className="text-brand hover:text-brand-deep transition-colors ml-4 font-bold">Pricing</a>
            </div>
          </div>
        </section>

        {/* Section 3: TrustStrip */}
        <TrustStrip stats={[
          { icon: "🧺", number: "4.8/5", label: "Laundry Bookings in Noida" },
          { icon: "🛡️", number: "48 Hr", label: "Verification Process" },
          { icon: "⭐", number: "4.8/5", label: "Average Rating" },
          { icon: "📍", number: "100+", label: "Noida Sectors Served" }
        ]} />

        {/* Section 4: Service Blocks */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-8">
          
          <ServiceBlock 
            id="sofa"
            title="Sofa Cleaning in Noida"
            keyword="sofa cleaning Noida"
            body={[
              "Shampoo + vacuum + stain treatment for fabric & leather sofas. Your living room sofa absorbs sweat, dust, food spills, and pet dander every single day. A dry dusting isn't enough to pull out the embedded dirt.",
              "MOYO brings professional sofa cleaning services right to your home in Noida. We use industrial-grade vacuums to remove deep-seated dust, followed by specialized shampooing and stain treatment for both fabric and leather sofas. Our professionals know how to handle delicate materials without causing discoloration or water rings.",
              "Whether it's a 3-seater fabric couch in Sector 137 or an expensive leather sectional in Sector 150, we restore it to looking and smelling fresh. You'll see the exact price before you book. Stop hiding stains with throw blankets and book a verified sofa cleaning expert today."
            ]}
            priceFrom="499"
            cta={{ label: "Book sofa cleaning", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="washing"
            title="Washing & Ironing in Noida"
            keyword="washing ironing service Noida"
            body={[
              "Wash, dry, press & fold — pickup & delivery. Doing laundry takes up hours of your weekend that you'd rather spend relaxing. But finding a reliable local dhobi who won't lose your clothes or ruin your whites can be frustrating.",
              "MOYO's washing and ironing service makes fabric care effortless. We offer convenient doorstep pickup and delivery across Noida and Greater Noida West. Your clothes are carefully sorted, washed with premium detergents, dried, and professionally steam-pressed before being crisply folded and returned to you.",
              "We handle everything from your daily office wear to heavy winter blankets that won't fit in your home machine. Every professional is verified, and you can track your order status in the app. Set your rate, schedule a pickup, and reclaim your weekend."
            ]}
            priceFrom="499"
            cta={{ label: "Book washing & ironing", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="dhobi"
            title="Dhobi in Noida"
            keyword="dhobi near me Noida"
            body={[
              "Reliable local dhobi for daily/weekly laundry & pressing. Sometimes you don't need a full dry-cleaning service; you just need a dependable local dhobi for your everyday ironing.",
              "MOYO connects you with verified local dhobis who provide reliable, daily or weekly pressing services. Whether you need your cotton kurtas crisply ironed for work or your bedsheets perfectly pressed, we match you with trusted professionals in your specific sector, from Sector 62 to Noida Extension.",
              "Forget the hassle of haggling over per-piece rates or worrying if your expensive shirts will get scorched. With MOYO, pricing is transparent upfront, and the quality is consistent. You can even set up a recurring schedule so you always have fresh, ironed clothes ready in your wardrobe."
            ]}
            priceFrom="499"
            cta={{ label: "Book dhobi", href: "https://app.moyointernational.com" }}
          />
          
          <div className="bg-section-alt p-8 rounded-[16px] border border-line shadow-sm">
            <h3 className="text-xl font-bold text-ink mb-3">Also Available</h3>
            <p className="text-muted leading-relaxed">
              Need more specific fabric care? MOYO also offers specialized shoe cleaning services across Noida. From removing tough mud stains on your favorite running sneakers to carefully polishing formal leather shoes, our verified experts handle it all with fixed upfront pricing.
            </p>
          </div>
        </div>

        {/* Section 5: Pricing */}
        <section id="pricing" className="py-16 md:py-24 bg-page border-y border-line">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-ink mb-8 text-center tracking-tight">Laundry & Fabric Care Pricing in Noida</h2>
            <PricingTable rows={[
              { service: "Sofa Cleaning (3-Seater)", partTime: "from ₹499", fullTime: "—", note: "Depends on fabric" },
              { service: "Wash & Iron (per kg)", partTime: "from ₹499", fullTime: "—", note: "Pickup included" },
              { service: "Ironing Only (per piece)", partTime: "from ₹499", fullTime: "—", note: "Minimum order applies" },
              { service: "Dry Cleaning", partTime: "from ₹499", fullTime: "—", note: "Quoted per item" },
            ]} />
          </div>
        </section>

        {/* Section 6: Why MOYO */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-4">Why Book Laundry on MOYO?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Pickup & Delivery</h3>
                <p className="text-muted leading-relaxed">You don't have to leave the house. We collect your laundry and deliver it fresh.</p>
              </div>
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Upfront Pricing</h3>
                <p className="text-muted leading-relaxed">Know the exact per-item or per-kg price before you confirm the booking.</p>
              </div>
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Sofa & Shoe Specialists</h3>
                <p className="text-muted leading-relaxed">We don't just do wash-and-fold. Get dedicated experts for heavy fabric care.</p>
              </div>
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Verified Professionals</h3>
                <p className="text-muted leading-relaxed">Only ID-checked and vetted professionals will be handling your expensive clothes.</p>
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
              MOYO laundry and fabric care is available across Noida and Greater Noida, including <strong className="text-ink">Sector 18, 62, 76, 137, 150, 168, Noida Extension and Greater Noida West</strong>. Not sure if we cover your sector? Open the app and enter your location.
            </p>
          </div>
        </section>

        {/* Reviews Section Temporarily Hidden */}

        {/* Section 10: FAQ */}
        <div className="px-4 sm:px-6 lg:px-8 bg-white">
          <FAQAccordion faqs={[
            { q: "Do you offer pickup and delivery?", a: "Yes — simply schedule a pickup in the MOYO app and we will collect your items and return them cleaned." },
            { q: "How much is sofa cleaning in Noida?", a: "It starts from ₹499 depending on the number of seats and the fabric type. You'll see the full quote before confirming." },
            { q: "Do you clean leather sofas and shoes?", a: "Yes — we have dedicated specialists for both fabric and leather sofas, as well as sneaker and leather shoe cleaning." },
            { q: "What's the turnaround for laundry?", a: "Turnaround times vary, but standard wash & iron service is typically completed within 48 hours. You can track progress in the app." }
          ]} />
        </div>

        {/* Internal Linking Block */}
        <section className="py-12 bg-section-alt border-t border-line text-center">
          <p className="text-muted mb-6 text-sm uppercase tracking-wider font-semibold">Looking for other services in Noida?</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <Link href="/home-cleaning-noida" className="text-brand font-medium hover:text-brand-hover hover:underline transition-all">Book Home Cleaning in Noida</Link>
            <span className="text-line hidden sm:inline">•</span>
            <Link href="/domestic-help-noida" className="text-brand font-medium hover:text-brand-hover hover:underline transition-all">Book Domestic Help in Noida</Link>
          </div>
        </section>

        {/* Section 11: Closing CTA */}
        <CTABlock 
          heading="Reclaim your weekend. Book laundry and fabric care today."
          primaryCta={{ label: "Download the MOYO app", href: "https://app.moyointernational.com" }}
          secondaryCta={{ label: "Book on WhatsApp", href: "https://wa.me/919876543210" }}
        />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
