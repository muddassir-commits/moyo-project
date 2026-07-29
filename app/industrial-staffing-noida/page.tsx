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
  title: "Security Guards & Industrial Labour Supply in Noida | MOYO",
  description: "Hire verified security guards, bouncers, warehouse labour & machine operators in Noida. Reliable manpower supply. Download the MOYO app.",
  path: "/industrial-staffing-noida",
});

export default function IndustrialStaffingPage() {
  return (
    <>
      <ServiceJsonLd 
        serviceType="Industrial & Security Staffing"
        description="Hire verified security guards, bouncers, warehouse labour and machine operators in Noida."
      />
      <Header />
      <main>
        <Breadcrumbs trail={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Industrial & Security Staffing", href: "/industrial-staffing-noida" }
        ]} />

        {/* Section 1: Hero */}
        <Hero 
          h1="Security, Labour & Industrial Staffing in Noida"
          subhead="For sites, warehouses, factories and events, reliable manpower is the whole game. MOYO supplies verified security guards, bouncers, warehouse labour and certified machine operators across Noida — the people who keep operations running."
          trustChips={[
            "✓ Verified professionals",
            "✓ Upfront pricing",
            "✓ Serving all of Noida"
          ]}
          image="/images/industrial-staffing-hero.jpg"
          primaryCta={{ label: "Enquire / Request a Callback", href: "/contact" }}
          secondaryCta={{ label: "Book on WhatsApp", href: "https://wa.me/919876543210" }}
        />

        {/* Section 2: TOC */}
        <section className="bg-page py-4 border-b border-line sticky top-[72px] md:top-[80px] z-40 hidden lg:block shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-5 text-sm font-medium justify-center">
              <span className="text-faint uppercase tracking-wider text-xs font-semibold mr-2">Jump to:</span>
              <a href="#security-guard" className="text-ink hover:text-brand transition-colors">Security Guard</a>
              <a href="#bouncer" className="text-ink hover:text-brand transition-colors">Bouncer</a>
              <a href="#armed-guard" className="text-ink hover:text-brand transition-colors">Armed Guard</a>
              <a href="#pricing" className="text-brand hover:text-brand-deep transition-colors ml-4 font-bold">Pricing</a>
            </div>
          </div>
        </section>

        {/* Section 3: TrustStrip */}
        <TrustStrip stats={[
          { icon: "🏭", number: "4.8/5", label: "Industrial Bookings in Noida" },
          { icon: "🛡️", number: "48 Hr", label: "Verification Process" },
          { icon: "⭐", number: "4.8/5", label: "Average Rating" },
          { icon: "📍", number: "100+", label: "Noida Sectors Served" }
        ]} />

        {/* Section 4: Service Blocks */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-8">
          
          <ServiceBlock 
            id="security-guard"
            title="Security Guard in Noida"
            keyword="security guard Noida"
            body={[
              "Trained, verified guards for homes, societies, offices, sites. Ensuring the safety of your premises requires vigilant, well-trained personnel, not just a uniform.",
              "MOYO connects you with verified security guards in Noida for residential societies, corporate offices, construction sites, and private homes. Whether you need a 12-hour night shift guard for your standalone house in Sector 150 or a team of 10 guards to secure a new commercial complex in Noida Extension, our platform provides thoroughly vetted manpower. Every guard undergoes strict identity checks and background verification.",
              "Instead of negotiating with unreliable local agencies, submit your staffing requirements, agree on transparent shift rates, and secure your property with reliable professionals."
            ]}
            priceFrom="499"
            cta={{ label: "Hire security guards", href: "/contact" }}
          />

          <ServiceBlock 
            id="bouncer"
            title="Bouncer in Noida"
            keyword="bouncer on hire Noida"
            body={[
              "Event & venue bouncers on hire. Managing large crowds, VIP movements, and high-energy events requires a specialized physical presence that commands respect.",
              "Hire verified bouncers in Noida through MOYO for your events, weddings, nightclubs, or personal security needs. Our bouncers are professionally trained in crowd control, conflict de-escalation, and venue management. Whether you are hosting a high-profile corporate event in Sector 18 or need personal protection for a VIP guest, you can scale your security team instantly.",
              "Review candidate profiles, agree on clear daily or event-based pricing, and ensure your event runs smoothly without any security breaches."
            ]}
            priceFrom="499"
            cta={{ label: "Hire bouncers", href: "/contact" }}
          />

          <ServiceBlock 
            id="armed-guard"
            title="Armed Guard in Noida"
            keyword="armed guard hire Noida"
            body={[
              "Licensed armed guards (B2B). For high-value asset protection, cash transit, and critical infrastructure security, standard guarding is often not enough.",
              "MOYO supplies licensed, verified armed guards on hire for businesses in Noida. Perfect for banks, jewelry stores, cash-in-transit operations, and high-risk commercial facilities, our armed guards carry valid firearm licenses and undergo rigorous background checks. We understand that B2B security requires absolute trust and strict compliance.",
              "Bypass the lengthy agency procurement cycles. Request a callback, discuss your specific security protocols, and get matched with highly trained armed personnel ready for deployment."
            ]}
            priceFrom="499"
            cta={{ label: "Hire armed guards", href: "/contact" }}
          />
          
          <div className="bg-section-alt p-8 rounded-[16px] border border-line shadow-sm">
            <h3 className="text-xl font-bold text-ink mb-3">Industrial & Warehouse Labour</h3>
            <p className="text-muted leading-relaxed">
              We also supply verified B2B labour crews including <strong className="text-ink">Warehouse Labour, Loaders/Unloaders, Packers, Lifting Staff, and Waste Management Staff</strong>. Need certified operators? We provide <strong className="text-ink">Forklift, Crane, JCB, CNC, Lathe, and Boiler Operators</strong> across Noida.
            </p>
          </div>
        </div>

        {/* Section 5: Pricing */}
        <section id="pricing" className="py-16 md:py-24 bg-page border-y border-line">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-ink mb-8 text-center tracking-tight">Industrial & Security Pricing in Noida</h2>
            <PricingTable rows={[
              { service: "Security Guard", partTime: "from ₹499", fullTime: "from ₹499", note: "Daily shift / Monthly" },
              { service: "Bouncer (Event)", partTime: "from ₹499", fullTime: "—", note: "Per event / Per day" },
              { service: "Armed Guard", partTime: "from ₹499", fullTime: "from ₹499", note: "Daily shift / Monthly" },
              { service: "Warehouse / General Labour", partTime: "from ₹499", fullTime: "from ₹499", note: "Daily wage / Monthly" },
            ]} />
          </div>
        </section>

        {/* Section 6: Why MOYO */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-4">Why Hire Industrial Staff on MOYO?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Verified Guards & Labour</h3>
                <p className="text-muted leading-relaxed">Every guard and laborer undergoes a strict background and identity check for your site's safety.</p>
              </div>
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Certified Operators</h3>
                <p className="text-muted leading-relaxed">Access skilled operators with valid certifications for heavy machinery like forklifts and JCBs.</p>
              </div>
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Scalable Crews</h3>
                <p className="text-muted leading-relaxed">Need 2 guards today and a crew of 20 loaders tomorrow? Scale your manpower up or down easily.</p>
              </div>
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">One Supplier</h3>
                <p className="text-muted leading-relaxed">Manage your security personnel, warehouse labor, and machine operators all through one reliable platform.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: How it Works */}
        <StepsHowItWorks />

        {/* Section 8: Coverage */}
        <section className="py-16 md:py-24 bg-white border-y border-line">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-ink mb-6">Serving Industries Across Noida</h2>
            <p className="text-lg text-muted leading-relaxed">
              MOYO supplies industrial manpower and security staff to sites, factories, and warehouses across Noida and Greater Noida, including <strong className="text-ink">Sector 18, 62, 76, 137, 150, 168, Noida Extension and Greater Noida West</strong>.
            </p>
          </div>
        </section>

        {/* Reviews Section Temporarily Hidden */}

        {/* Section 10: FAQ */}
        <div className="px-4 sm:px-6 lg:px-8 bg-white">
          <FAQAccordion faqs={[
            { q: "Can I hire security guards in Noida?", a: "Yes — trained, verified guards for homes, societies, offices and sites." },
            { q: "Do you supply warehouse labour?", a: "Yes — warehouse and industrial labour crews (B2B)." },
            { q: "Are machine operators certified?", a: "Yes — forklift, crane, JCB and other operators." },
            { q: "Can I hire bouncers for an event?", a: "Yes — event and venue bouncers on hire." }
          ]} />
        </div>

        {/* Internal Linking Block */}
        <section className="py-12 bg-section-alt border-t border-line text-center">
          <p className="text-muted mb-6 text-sm uppercase tracking-wider font-semibold">Looking for other business services in Noida?</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <Link href="/office-staff-noida" className="text-brand font-medium hover:text-brand-hover hover:underline transition-all">Book Office Staff in Noida</Link>
            <span className="text-line hidden sm:inline">•</span>
            <Link href="/construction-services-noida" className="text-brand font-medium hover:text-brand-hover hover:underline transition-all">Book Construction Services in Noida</Link>
          </div>
        </section>

        {/* Section 11: Closing CTA */}
        <CTABlock 
          heading="Reliable manpower, verified for your site."
          primaryCta={{ label: "Enquire / Request a Callback", href: "/contact" }}
          secondaryCta={{ label: "Message us on WhatsApp", href: "https://wa.me/919876543210" }}
        />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
