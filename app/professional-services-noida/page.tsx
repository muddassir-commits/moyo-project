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
  title: "Professional & Business Services in Noida | CA, Legal, IT — MOYO",
  description: "Hire verified professionals in Noida — chartered accountants, advocates, tax consultants, IT developers, digital marketing & more. Enquire via MOYO.",
  path: "/professional-services-noida",
});

export default function ProfessionalServicesPage() {
  return (
    <>
      <ServiceJsonLd 
        serviceType="Professional & Business Services"
        description="Hire verified chartered accountants, advocates, IT developers, and marketing professionals in Noida."
      />
      <Header />
      <main>
        <Breadcrumbs trail={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Professional Services", href: "/professional-services-noida" }
        ]} />

        {/* Section 1: Hero */}
        <Hero 
          h1="Professional & Business Services in Noida"
          subhead="Scaling your startup in Sector 62 or managing a retail business in Sector 18? Connect with verified Chartered Accountants, Advocates, IT Developers, and Marketing professionals in Noida to handle your core business functions."
          trustChips={[
            "✓ Verified professionals",
            "✓ Transparent engagement",
            "✓ Serving businesses in Noida"
          ]}
          image="/images/professional-services-hero.jpg"
          primaryCta={{ label: "Enquire / Request a Callback", href: "/contact" }}
          secondaryCta={{ label: "Book on WhatsApp", href: "https://wa.me/919876543210" }}
        />

        {/* Section 2: TOC */}
        <section className="bg-page py-4 border-b border-line sticky top-[72px] md:top-[80px] z-40 hidden lg:block shadow-sm overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-5 text-sm font-medium">
              <span className="text-faint uppercase tracking-wider text-xs font-semibold mr-2 shrink-0">Jump to:</span>
              <a href="#finance" className="text-ink hover:text-brand transition-colors">CA & Tax</a>
              <a href="#legal" className="text-ink hover:text-brand transition-colors">Advocate</a>
              <a href="#hr-sales" className="text-ink hover:text-brand transition-colors">HR & Sales</a>
              <a href="#tech" className="text-ink hover:text-brand transition-colors">IT & Tech</a>
              <a href="#creative" className="text-ink hover:text-brand transition-colors">Marketing & Design</a>
              <a href="#pricing" className="text-brand hover:text-brand-deep transition-colors ml-4 font-bold">Pricing</a>
            </div>
          </div>
        </section>

        {/* Section 3: TrustStrip */}
        <TrustStrip stats={[
          { icon: "💼", number: "[X]", label: "B2B Engagements" },
          { icon: "🛡️", number: "48 Hr", label: "Verification Process" },
          { icon: "⭐", number: "[X]", label: "Average Rating" },
          { icon: "📍", number: "100+", label: "Noida Sectors Served" }
        ]} />

        {/* Section 4: Service Blocks */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-8">
          
          <h2 id="finance" className="text-2xl font-bold text-ink mt-8 mb-4 border-b border-line pb-2">Finance & Legal</h2>
          
          <ServiceBlock 
            id="ca"
            title="Chartered Accountant in Noida"
            keyword="chartered accountant Noida"
            body={[
              "Company registration, annual filing, GST, audits. Navigating the complex financial regulatory landscape requires absolute precision and up-to-date knowledge.",
              "MOYO connects your business with verified, practicing Chartered Accountants in Noida. Whether you are incorporating a new private limited company, managing quarterly GST returns, conducting statutory audits, or seeking strategic financial planning, our professionals deliver compliant, timely services.",
              "Discuss your corporate requirements, agree on retainer or project-based fees, and ensure your books are immaculate."
            ]}
            priceFrom="[X]"
            cta={{ label: "Consult a CA", href: "/contact" }}
          />

          <ServiceBlock 
            id="advocate"
            title="Advocate / Lawyer in Noida"
            keyword="advocate in Noida"
            body={[
              "Corporate law, contracts, property registration, disputes. Operating a business exposes you to various legal liabilities, making sound legal counsel essential.",
              "Find verified advocates and legal consultants in Noida through MOYO. Our network covers experts in drafting robust corporate contracts, handling employee disputes, managing commercial real estate registrations, and providing general legal counsel. Protect your intellectual property and ensure labor law compliance.",
              "Request a consultation, outline your legal requirements, and hire dedicated legal representation on a case-by-case basis or monthly retainer."
            ]}
            priceFrom="[X]"
            cta={{ label: "Consult an advocate", href: "/contact" }}
          />

          <ServiceBlock 
            id="tax-consultant"
            title="Tax & Financial Advisor in Noida"
            keyword="tax consultant Noida"
            body={[
              "Income tax filing, wealth management, insurance. Optimizing your tax structure legally saves your business significant capital over the long term.",
              "MOYO provides access to specialized Tax Consultants, Financial Advisors, and Insurance Advisors. Whether you need expert advice on corporate tax planning, employee group health insurance policies, or investment structuring for your startup, our verified consultants provide tailored strategies.",
              "Get transparent fee structures and actionable financial advice to secure your company's fiscal future."
            ]}
            priceFrom="[X]"
            cta={{ label: "Hire tax consultant", href: "/contact" }}
          />

          <h2 id="hr-sales" className="text-2xl font-bold text-ink mt-12 mb-4 border-b border-line pb-2">Business Operations</h2>

          <ServiceBlock 
            id="hr-recruiter"
            title="HR Recruiter in Noida"
            keyword="hr recruiter Noida"
            body={[
              "Talent acquisition, payroll management, HR compliance. Finding the right talent is often the biggest bottleneck for growing businesses.",
              "Hire experienced HR Recruiters and Business Analysts through MOYO to streamline your operations. Our verified HR professionals manage end-to-end recruitment cycles, from sourcing and interviewing candidates to onboarding and payroll processing. Business analysts can help you map operational inefficiencies and drive data-backed decisions.",
              "Scale your team effectively without committing to full-time in-house HR departments."
            ]}
            priceFrom="[X]"
            cta={{ label: "Hire HR professional", href: "/contact" }}
          />

          <ServiceBlock 
            id="sales-executive"
            title="Sales Executive in Noida"
            keyword="sales executive hire Noida"
            body={[
              "B2B sales, field sales, lead generation. Driving revenue requires a proactive, aggressive, and professional sales force on the ground.",
              "MOYO connects you with verified Sales Executives experienced in B2B and B2C sales across Noida. Whether you need field executives to cover Sector 18 retail outlets, or corporate sales professionals to pitch software solutions in Noida IT parks, we supply the talent.",
              "Set your base pay and incentive structures, review candidate track records, and accelerate your business growth."
            ]}
            priceFrom="[X]"
            cta={{ label: "Hire sales executive", href: "/contact" }}
          />

          <h2 id="tech" className="text-2xl font-bold text-ink mt-12 mb-4 border-b border-line pb-2">Technology & Creative</h2>

          <ServiceBlock 
            id="it-developer"
            title="Software / IT Developer in Noida"
            keyword="software developer hire Noida"
            body={[
              "Web development, app creation, IT support. In today's digital-first economy, a robust digital presence and smooth IT infrastructure are non-negotiable.",
              "Find verified Software Developers, Frontend Engineers, and IT Support technicians in Noida through MOYO. Whether you are building a custom CRM, launching an e-commerce platform, or just need reliable IT maintenance for your office network, our tech professionals deliver quality code and support.",
              "Hire developers for specific freelance projects or on a monthly contract basis."
            ]}
            priceFrom="[X]"
            cta={{ label: "Hire IT developer", href: "/contact" }}
          />

          <ServiceBlock 
            id="marketing"
            title="Digital Marketing & Content in Noida"
            keyword="digital marketing Noida"
            body={[
              "SEO, social media management, content writing, graphic design. Brand visibility dictates market share.",
              "MOYO provides access to verified Digital Marketers, SEO experts, Graphic Designers, and Content Writers. Build comprehensive marketing campaigns, design compelling brand identities, and rank higher on search engines. Instead of locking into expensive long-term agency contracts, hire specialized professionals for targeted growth campaigns.",
              "Propose your project budget, review portfolios, and execute your digital strategy."
            ]}
            priceFrom="[X]"
            cta={{ label: "Hire marketing professional", href: "/contact" }}
          />

        </div>

        {/* Section 5: Pricing */}
        <section id="pricing" className="py-16 md:py-24 bg-page border-y border-line">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-ink mb-8 text-center tracking-tight">Professional Services Pricing in Noida</h2>
            <PricingTable rows={[
              { service: "Chartered Accountant", partTime: "from ₹[X]", fullTime: "from ₹[X]", note: "Per filing / Monthly retainer" },
              { service: "Advocate / Legal Consult", partTime: "from ₹[X]", fullTime: "—", note: "Per hour / Per contract" },
              { service: "Digital Marketing / SEO", partTime: "from ₹[X]", fullTime: "from ₹[X]", note: "Per project / Monthly" },
              { service: "IT Developer", partTime: "from ₹[X]", fullTime: "from ₹[X]", note: "Per project / Monthly" },
            ]} />
          </div>
        </section>

        {/* Section 6: Why MOYO */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-4">Why Hire Professionals on MOYO?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Verified Experts</h3>
                <p className="text-muted leading-relaxed">CAs, lawyers, and developers are vetted for their professional credentials and past experience.</p>
              </div>
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">No Agency Bloat</h3>
                <p className="text-muted leading-relaxed">Work directly with the professional executing the task, saving on massive agency overheads.</p>
              </div>
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Flexible Contracts</h3>
                <p className="text-muted leading-relaxed">Engage experts for a one-off tax filing, a specific software build, or an ongoing monthly retainer.</p>
              </div>
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Bidding System</h3>
                <p className="text-muted leading-relaxed">Propose your project budget and receive tailored quotes from interested professionals.</p>
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
              MOYO provides professional and business services to startups, MSMEs, and corporates across Noida and Greater Noida, including <strong className="text-ink">Sector 18, 62, 76, 137, 150, 168, Noida Extension and Greater Noida West</strong>.
            </p>
          </div>
        </section>

        {/* Section 10: FAQ */}
        <div className="px-4 sm:px-6 lg:px-8 bg-page py-16">
          <h2 className="text-3xl font-bold text-ink mb-12 text-center">Frequently Asked Questions</h2>
          <FAQAccordion faqs={[
            { q: "Can I hire a Chartered Accountant for my startup?", a: "Yes, you can hire verified CAs for company registration, GST filing, and annual audits." },
            { q: "Are the developers and designers freelancers or agencies?", a: "MOYO connects you with verified independent professionals, allowing you to bypass agency markups." },
            { q: "Can I hire a lawyer on a retainer?", a: "Yes, you can negotiate monthly retainers for ongoing corporate legal support." },
            { q: "Is this service for B2B only?", a: "Yes, this category is designed to serve businesses and corporate requirements." }
          ]} />
        </div>

        {/* Internal Linking Block */}
        <section className="py-12 bg-section-alt border-t border-line text-center">
          <p className="text-muted mb-6 text-sm uppercase tracking-wider font-semibold">Need physical manpower for your business?</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <Link href="/office-staff-noida" className="text-brand font-medium hover:text-brand-hover hover:underline transition-all">Book Office Support Staff</Link>
            <span className="text-line hidden sm:inline">•</span>
            <Link href="/industrial-staffing-noida" className="text-brand font-medium hover:text-brand-hover hover:underline transition-all">Book Industrial Labour & Security</Link>
          </div>
        </section>

        {/* Section 11: Closing CTA */}
        <CTABlock 
          heading="Professional services, executed with precision."
          primaryCta={{ label: "Enquire / Request a Callback", href: "/contact" }}
          secondaryCta={{ label: "Message us on WhatsApp", href: "https://wa.me/919876543210" }}
        />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
