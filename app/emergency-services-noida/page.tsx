import { generateSeoMetadata } from "@/lib/metadata";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTABlock } from "@/components/ui/CTABlock";
import Link from "next/link";

export const metadata = generateSeoMetadata({
  title: "Emergency Services in Noida — Ambulance & Fire | MOYO",
  description: "Quick access to emergency services in Noida via MOYO — ambulance and fire support. In a life-threatening emergency, call the national emergency number first.",
  path: "/emergency-services-noida",
});

export default function EmergencyServicesPage() {
  return (
    <>
      <Header />
      <main className="bg-page min-h-screen">
        <Breadcrumbs trail={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Emergency Services", href: "/emergency-services-noida" }
        ]} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-ink tracking-tight mb-6">
              Emergency Services in Noida
            </h1>
            <p className="text-xl text-muted">
              Quick access to critical support when you need it most.
            </p>
          </div>

          {/* Section 1: Prominent Safety Note */}
          <div className="bg-red-600 rounded-[16px] p-8 text-white shadow-md mb-12 text-center border-4 border-red-700">
            <h2 className="text-2xl font-bold mb-4 uppercase tracking-wider flex items-center justify-center">
              <span className="mr-3 text-3xl">⚠️</span> Critical Alert
            </h2>
            <p className="text-lg md:text-xl font-medium mb-6">
              In a life-threatening emergency, severe medical crisis, or active fire, do not wait for private bookings. Call the national emergency numbers immediately.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-red-800 bg-opacity-50 p-4 rounded-lg">
                <span className="block text-sm uppercase tracking-wider mb-1 text-red-200">National Emergency</span>
                <strong className="text-3xl tracking-tight">112</strong>
              </div>
              <div className="bg-red-800 bg-opacity-50 p-4 rounded-lg">
                <span className="block text-sm uppercase tracking-wider mb-1 text-red-200">Ambulance</span>
                <strong className="text-3xl tracking-tight">102</strong>
              </div>
              <div className="bg-red-800 bg-opacity-50 p-4 rounded-lg">
                <span className="block text-sm uppercase tracking-wider mb-1 text-red-200">Fire Brigade</span>
                <strong className="text-3xl tracking-tight">101</strong>
              </div>
            </div>
          </div>

          {/* Section 2: What MOYO Offers */}
          <div className="bg-white rounded-[16px] p-8 md:p-12 border border-line shadow-sm mb-12">
            <h2 className="text-2xl font-bold text-ink mb-6">Urgent Booking via MOYO</h2>
            <p className="text-lg text-muted mb-8 leading-relaxed">
              For non-life-threatening situations that still require urgent attention, MOYO provides rapid booking options across Noida and Greater Noida through our network of verified providers.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-brand-50 text-brand flex items-center justify-center shrink-0 mr-4 text-2xl">🚑</div>
                <div>
                  <h3 className="text-xl font-bold text-ink mb-2">Private Ambulance Support</h3>
                  <p className="text-muted leading-relaxed">Book private ambulances for planned patient transfers, non-acute hospital visits, or returning home post-surgery. Available across major Noida sectors.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Also Urgent (Home Repairs) */}
          <div className="bg-section-alt rounded-[16px] p-8 border border-line mb-16 text-center">
            <h3 className="text-xl font-bold text-ink mb-3">Urgent Home Repairs?</h3>
            <p className="text-muted leading-relaxed mb-6">
              Dealing with a massive pipe burst, a severe electrical short circuit, or a broken lock? Our home repair professionals are available for urgent dispatch.
            </p>
            <Link 
              href="/home-repair-noida"
              className="inline-block bg-white text-brand border border-brand hover:bg-brand-50 font-bold py-3 px-8 rounded-full transition-colors"
            >
              Book Urgent Plumber or Electrician
            </Link>
          </div>

          {/* Section 4: FAQ */}
          <div className="bg-white rounded-[16px] p-8 border border-line shadow-sm mb-16">
            <h2 className="text-2xl font-bold text-ink mb-8 text-center">Frequently Asked Questions</h2>
            <FAQAccordion faqs={[
              { q: "Should I use MOYO for a heart attack or severe accident?", a: "No. For any acute, life-threatening emergency, immediately call the national ambulance service at 102 or the general emergency number 112." },
              { q: "What kind of ambulance can I book on the app?", a: "You can book private ambulances for planned hospital transfers, discharges, and non-critical patient transport." },
              { q: "Can I get an electrician immediately for a short circuit?", a: "Yes, you can book an urgent visit for electricians and plumbers through the Home Repairs section of the app." }
            ]} />
          </div>

        </div>

        {/* CTA */}
        <CTABlock 
          heading="Keep reliable support right in your pocket."
          primaryCta={{ label: "Download the MOYO app", href: "https://app.moyointernational.com" }}
          secondaryCta={{ label: "Save our WhatsApp number", href: "https://wa.me/919876543210" }}
        />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
