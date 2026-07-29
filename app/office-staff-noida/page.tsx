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
  title: "Office Staff on Hire in Noida | Office Boy, Receptionist, Data Entry — MOYO",
  description: "Hire verified office boys, receptionists, data entry operators & admin staff in Noida — daily or monthly. Download the MOYO app.",
  path: "/office-staff-noida",
});

export default function OfficeStaffPage() {
  return (
    <>
      <ServiceJsonLd 
        serviceType="Office & Business Support"
        description="Hire verified office boys, receptionists, data entry operators, and admin assistants in Noida."
      />
      <Header />
      <main>
        <Breadcrumbs trail={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Office & Business Support", href: "/office-staff-noida" }
        ]} />

        {/* Section 1: Hero */}
        <Hero 
          h1="Office & Business Support Staff on Hire in Noida"
          subhead="Short-staffed at the office, or setting up and need reliable support fast? MOYO supplies verified office boys, receptionists, data-entry operators and admin assistants across Noida — daily or monthly, without a long recruitment cycle."
          trustChips={[
            "✓ Verified professionals",
            "✓ Upfront pricing",
            "✓ Serving all of Noida"
          ]}
          image="/images/office-staff-hero.jpg"
          primaryCta={{ label: "Enquire / Request a Callback", href: "/contact" }}
          secondaryCta={{ label: "Book on WhatsApp", href: "https://wa.me/919876543210" }}
        />

        {/* Section 2: TOC */}
        <section className="bg-page py-4 border-b border-line sticky top-[72px] md:top-[80px] z-40 hidden lg:block shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-5 text-sm font-medium justify-center">
              <span className="text-faint uppercase tracking-wider text-xs font-semibold mr-2">Jump to:</span>
              <a href="#office-boy" className="text-ink hover:text-brand transition-colors">Office Boy</a>
              <a href="#receptionist" className="text-ink hover:text-brand transition-colors">Receptionist</a>
              <a href="#data-entry" className="text-ink hover:text-brand transition-colors">Data Entry</a>
              <a href="#admin" className="text-ink hover:text-brand transition-colors">Admin Assistant</a>
              <a href="#pricing" className="text-brand hover:text-brand-deep transition-colors ml-4 font-bold">Pricing</a>
            </div>
          </div>
        </section>

        {/* Section 3: TrustStrip */}
        <TrustStrip stats={[
          { icon: "🏢", number: "4.8/5", label: "B2B Bookings in Noida" },
          { icon: "🛡️", number: "48 Hr", label: "Verification Process" },
          { icon: "⭐", number: "4.8/5", label: "Average Rating" },
          { icon: "📍", number: "100+", label: "Noida Sectors Served" }
        ]} />

        {/* Section 4: Service Blocks */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-8">
          
          <ServiceBlock 
            id="office-boy"
            title="Office Boy in Noida"
            keyword="office boy on hire Noida"
            body={[
              "On-hire office boys — daily/monthly. Keeping an office running smoothly requires reliable on-ground support, from managing pantry duties and serving tea to handling local document deliveries.",
              "MOYO supplies verified office boys on hire across Noida. Whether your startup in Sector 62 needs a full-time peon for daily operations, or your corporate branch in Sector 137 requires temporary staff to cover an employee's leave, we have you covered. Our platform eliminates the need for expensive placement agencies. You simply set your requirements, propose a monthly or daily salary, and get matched with background-verified candidates who are ready to work.",
              "Ensure your office operations never stall due to a lack of basic support staff."
            ]}
            priceFrom="499"
            cta={{ label: "Hire office boy", href: "/contact" }}
          />

          <ServiceBlock 
            id="receptionist"
            title="Receptionist in Noida"
            keyword="receptionist hire Noida"
            body={[
              "Front-desk staff on hire. The reception desk is the face of your business. When a front-desk executive goes on sudden leave, or when you are opening a new branch, finding a professional replacement quickly is critical.",
              "MOYO connects businesses in Noida with verified receptionists available for immediate hire. Our candidates are vetted for communication skills, professional etiquette, and basic computer literacy. Whether you need a temporary receptionist for a week to manage walk-ins and phone calls, or a permanent front-desk executive on a monthly contract, you can find the right fit through our platform.",
              "Bypass the lengthy interview cycles. Request a callback, set your budget, and get a professional front-desk manager fast."
            ]}
            priceFrom="499"
            cta={{ label: "Hire receptionist", href: "/contact" }}
          />

          <ServiceBlock 
            id="data-entry"
            title="Data Entry Operator in Noida"
            keyword="data entry operator Noida"
            body={[
              "On-hire data entry staff. Digitizing records, managing CRM inputs, and processing invoices are time-consuming tasks that can pull your core team away from high-value work.",
              "Scale your administrative capacity effortlessly by hiring verified data entry operators in Noida through MOYO. Perfect for short-term digitization projects, end-of-financial-year accounting support, or ongoing backend tasks, our operators are tested for typing speed and software familiarity. You can hire them on a daily or monthly basis depending on your project volume.",
              "Submit your staffing requirements, agree on a transparent daily or monthly wage, and boost your office productivity without the overhead of permanent hires."
            ]}
            priceFrom="499"
            cta={{ label: "Hire data entry operator", href: "/contact" }}
          />

          <ServiceBlock 
            id="admin"
            title="Admin Assistant in Noida"
            keyword="admin assistant Noida"
            body={[
              "Admin support staff. Behind every successful executive or busy department is an organized admin assistant handling the logistics, scheduling, and paperwork.",
              "MOYO provides verified admin assistants on hire for businesses in Noida. If you need help managing vendor communications, organizing office supplies, or assisting HR with documentation, our platform connects you with experienced administrative professionals. This is an ideal solution for growing startups or established companies looking to scale their support team quickly without dealing with traditional recruiters.",
              "Use our bidding system to propose a fair salary, review candidate profiles, and hire an assistant who keeps your business organized."
            ]}
            priceFrom="499"
            cta={{ label: "Hire admin assistant", href: "/contact" }}
          />

        </div>

        {/* Section 5: Pricing */}
        <section id="pricing" className="py-16 md:py-24 bg-page border-y border-line">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-ink mb-8 text-center tracking-tight">Office Staff Pricing in Noida</h2>
            <PricingTable rows={[
              { service: "Office Boy / Peon", partTime: "from ₹499", fullTime: "from ₹499", note: "Daily / Monthly" },
              { service: "Receptionist", partTime: "from ₹499", fullTime: "from ₹499", note: "Daily / Monthly" },
              { service: "Data Entry Operator", partTime: "from ₹499", fullTime: "from ₹499", note: "Daily / Monthly" },
              { service: "Admin Assistant", partTime: "from ₹499", fullTime: "from ₹499", note: "Daily / Monthly" },
            ]} />
          </div>
        </section>

        {/* Section 6: Why MOYO */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-4">Why Hire Office Staff on MOYO?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Fast Turnaround</h3>
                <p className="text-muted leading-relaxed">Skip the long recruitment cycles. Get verified staff ready to work in days, not weeks.</p>
              </div>
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Flexible Hiring</h3>
                <p className="text-muted leading-relaxed">Hire on a daily basis for short-term projects or monthly for permanent roles.</p>
              </div>
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Verified Profiles</h3>
                <p className="text-muted leading-relaxed">Every candidate goes through a strict ID and background verification process for your security.</p>
              </div>
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Transparent Cost</h3>
                <p className="text-muted leading-relaxed">No hidden agency commissions. You set the salary or daily wage directly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: How it Works */}
        <StepsHowItWorks />

        {/* Section 8: Coverage */}
        <section className="py-16 md:py-24 bg-white border-y border-line">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-ink mb-6">Serving Businesses Across Noida</h2>
            <p className="text-lg text-muted leading-relaxed">
              MOYO provides B2B support staff to corporate parks and standalone offices across Noida and Greater Noida, including <strong className="text-ink">Sector 18, 62, 76, 137, 150, 168, Noida Extension and Greater Noida West</strong>.
            </p>
          </div>
        </section>

        {/* Reviews Section Temporarily Hidden */}

        {/* Section 10: FAQ */}
        <div className="px-4 sm:px-6 lg:px-8 bg-white">
          <FAQAccordion faqs={[
            { q: "Can I hire an office boy in Noida?", a: "Yes — office boys on daily or monthly hire, verified." },
            { q: "Do you provide receptionists and admin staff?", a: "Yes — front-desk, admin and data-entry staff." },
            { q: "How fast can staff start?", a: "Depends on role and availability — check in the app." },
            { q: "Is this for businesses only?", a: "Primarily B2B office support; enquire in the app." }
          ]} />
        </div>

        {/* Internal Linking Block */}
        <section className="py-12 bg-section-alt border-t border-line text-center">
          <p className="text-muted mb-6 text-sm uppercase tracking-wider font-semibold">Looking for other business services in Noida?</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <Link href="/professional-services-noida" className="text-brand font-medium hover:text-brand-hover hover:underline transition-all">Book Professional Services in Noida</Link>
            <span className="text-line hidden sm:inline">•</span>
            <Link href="/industrial-staffing-noida" className="text-brand font-medium hover:text-brand-hover hover:underline transition-all">Book Industrial Staffing in Noida</Link>
          </div>
        </section>

        {/* Section 11: Closing CTA */}
        <CTABlock 
          heading="Staff up your office without the wait."
          primaryCta={{ label: "Enquire / Request a Callback", href: "/contact" }}
          secondaryCta={{ label: "Message us on WhatsApp", href: "https://wa.me/919876543210" }}
        />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
