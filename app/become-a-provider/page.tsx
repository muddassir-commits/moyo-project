import { generateSeoMetadata } from "@/lib/metadata";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Hero } from "@/components/ui/Hero";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTABlock } from "@/components/ui/CTABlock";
import Link from "next/link";
import { PILLARS } from "@/config/navigation";

export const metadata = generateSeoMetadata({
  title: "Work with MOYO in Noida — Earn as a Verified Professional",
  description: "Join MOYO Professionals in Noida. Fair pay, no commission trap, work near you. Maids, technicians, beauticians, tutors & more. Apply now.",
  path: "/become-a-provider",
});

export default function BecomeProviderPage() {
  return (
    <>
      {/* We can use a basic BreadcrumbList + FAQPage schema if needed, standard page layout */}
      <Header />
      <main>
        <Breadcrumbs trail={[
          { label: "Home", href: "/" },
          { label: "Become a Provider", href: "/become-a-provider" }
        ]} />

        {/* Section 1: Hero / The Pitch */}
        <Hero 
          h1="Earn with MOYO — Work on Your Terms in Noida"
          subhead="Keep more of what you earn. No agent taking a cut from both sides. Work near you, get paid fairly, and build your own customer base with MOYO Professionals."
          trustChips={[
            "✓ Fair wages (Zero agent cut)",
            "✓ Flexible timings",
            "✓ Work in your own sector"
          ]}
          image="/images/provider-hero.jpg"
          primaryCta={{ label: "Download Partner App", href: "https://app.moyointernational.com/partner" }}
          secondaryCta={{ label: "WhatsApp to Apply", href: "https://wa.me/919876543210" }}
        />

        {/* Section 2: Why MOYO vs Agents */}
        <section className="py-16 md:py-24 bg-page">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-4">Why work with MOYO?</h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">Stop paying heavy commissions to middlemen. Our platform connects you directly to customers who need your skills.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-[16px] border border-line shadow-sm hover:shadow-md transition-all">
                <div className="text-brand text-4xl mb-6">💰</div>
                <h3 className="text-xl font-bold text-ink mb-3">Keep Your Earnings</h3>
                <p className="text-muted leading-relaxed">Unlike traditional agencies that take 20-30% of your hard-earned money every month, our transparent bidding system means you agree on the price directly with the customer.</p>
              </div>
              <div className="bg-white p-8 rounded-[16px] border border-line shadow-sm hover:shadow-md transition-all">
                <div className="text-brand text-4xl mb-6">🕒</div>
                <h3 className="text-xl font-bold text-ink mb-3">Your Schedule</h3>
                <p className="text-muted leading-relaxed">Want to work part-time, full-time, or just on weekends? You control your availability in the app. Accept only the bookings that fit your schedule.</p>
              </div>
              <div className="bg-white p-8 rounded-[16px] border border-line shadow-sm hover:shadow-md transition-all">
                <div className="text-brand text-4xl mb-6">📍</div>
                <h3 className="text-xl font-bold text-ink mb-3">Work Near Home</h3>
                <p className="text-muted leading-relaxed">Stop traveling for hours across the city. We show you booking requests from your own sector or nearby societies in Noida and Greater Noida.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: How it works */}
        <section className="py-16 md:py-24 bg-section-alt border-y border-line">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-ink mb-4">How to Join</h2>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-line before:to-transparent">
              
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-page bg-brand text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-sm">1</div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white rounded-[16px] border border-line shadow-sm">
                  <h3 className="font-bold text-lg text-ink mb-2">Download & Register</h3>
                  <p className="text-muted">Download the MOYO Partner app and enter your basic details, skills, and preferred work location.</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-page bg-brand text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-sm">2</div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white rounded-[16px] border border-line shadow-sm">
                  <h3 className="font-bold text-lg text-ink mb-2">Document Verification</h3>
                  <p className="text-muted">Upload your Aadhaar card and required documents. We complete our 48-hour verification process to ensure platform safety.</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-page bg-brand text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-sm">3</div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white rounded-[16px] border border-line shadow-sm">
                  <h3 className="font-bold text-lg text-ink mb-2">Receive Bookings</h3>
                  <p className="text-muted">Start seeing job requests from customers in your area. Use our bidding system to propose a fair price for your work.</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-page bg-brand text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-sm">4</div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white rounded-[16px] border border-line shadow-sm">
                  <h3 className="font-bold text-lg text-ink mb-2">Work & Get Paid</h3>
                  <p className="text-muted">Complete the job with high quality to earn 5-star ratings, which will bring you even more bookings in the future.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 4: Who we are looking for */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-ink mb-12 text-center">Who We're Looking For</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 text-center">
              {PILLARS.map((pillar) => (
                <Link 
                  key={pillar.href} 
                  href={pillar.href}
                  className="p-4 rounded-[12px] bg-page border border-line hover:border-brand-200 hover:shadow-sm transition-all"
                >
                  <span className="block text-sm font-semibold text-ink">{pillar.name}</span>
                </Link>
              ))}
            </div>
            <p className="text-center text-muted mt-8">
              ...and many more! If you have a skill that helps homes run smoothly, we have customers looking for you.
            </p>
          </div>
        </section>

        {/* Section 5: Requirements */}
        <section className="py-16 md:py-24 bg-page border-t border-line">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 md:p-12 rounded-[24px] border border-line shadow-sm">
              <h2 className="text-2xl font-bold text-ink mb-6">What you need to apply</h2>
              <ul className="space-y-4 text-muted">
                <li className="flex items-start">
                  <span className="text-brand mr-3 mt-1">✓</span>
                  <span><strong>Valid Government ID:</strong> Aadhaar Card is mandatory for identity verification.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-3 mt-1">✓</span>
                  <span><strong>Proof of Address:</strong> Current address proof in Noida / NCR.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-3 mt-1">✓</span>
                  <span><strong>Professional References:</strong> 2 references from previous employers or clients.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-3 mt-1">✓</span>
                  <span><strong>Smartphone:</strong> An Android or iOS device to use the MOYO Partner app.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-3 mt-1">✓</span>
                  <span><strong>Bank Account:</strong> A valid bank account in your name for receiving payments (if opting for online transfers).</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <div className="px-4 sm:px-6 lg:px-8 bg-white py-16">
          <h2 className="text-3xl font-bold text-ink mb-12 text-center">Frequently Asked Questions</h2>
          <FAQAccordion faqs={[
            { q: "Is there a joining fee to become a MOYO Partner?", a: "No, joining MOYO is completely free. We do not charge any registration fees to verify your profile." },
            { q: "How long does verification take?", a: "Once you upload all required documents (Aadhaar, address proof), our team completes the background check within 48 hours." },
            { q: "How do I get paid?", a: "You get paid directly by the customer based on the price you agreed upon in the app. MOYO ensures the transaction is transparent." },
            { q: "Do I have to work every day?", a: "No. You are your own boss. You can turn your availability on or off in the app based on your schedule." }
          ]} />
        </div>

        {/* Section 7: CTA */}
        <CTABlock 
          heading="Ready to start earning on your own terms?"
          primaryCta={{ label: "Download Partner App", href: "https://app.moyointernational.com/partner" }}
          secondaryCta={{ label: "Message us on WhatsApp", href: "https://wa.me/919876543210" }}
        />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
