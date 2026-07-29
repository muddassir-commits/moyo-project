import { generateSeoMetadata } from "@/lib/metadata";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Hero } from "@/components/ui/Hero";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTABlock } from "@/components/ui/CTABlock";
import Link from "next/link";
import Script from "next/script";

export const metadata = generateSeoMetadata({
  title: "Doctor Consultation & Doctor on Call in Noida | MOYO",
  description: "Connect with verified doctors for consultation in Noida via the MOYO app — general physician, and specialists. Book an appointment.",
  path: "/doctor-consultation-noida",
});

export default function DoctorConsultationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "MOYO Doctor Consultation",
    "description": "Platform connecting patients with verified, independent medical practitioners in Noida.",
    "areaServed": "Noida, Uttar Pradesh",
    "provider": {
      "@type": "Organization",
      "name": "MOYO Professionals"
    }
  };

  return (
    <>
      <Script 
        id="medical-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Breadcrumbs trail={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Doctor Consultation", href: "/doctor-consultation-noida" }
        ]} />

        {/* Section 1: Hero */}
        <Hero 
          h1="Doctor Consultation in Noida — Verified Professionals via MOYO"
          subhead="MOYO connects you with verified, registered medical professionals for consultation in Noida. Get access to qualified doctors from the comfort of your home."
          trustChips={[
            "✓ Verified Practitioners",
            "✓ Secure Booking",
            "✓ Serving Noida & Greater Noida"
          ]}
          image="/images/doctor-consultation-hero.jpg"
          primaryCta={{ label: "Download the App", href: "https://app.moyointernational.com" }}
          secondaryCta={{ label: "Book on WhatsApp", href: "https://wa.me/919876543210" }}
        />

        {/* Section 4: Disclaimer Band (moved up for visibility) */}
        <div className="bg-red-50 border-y border-red-100 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-red-800 text-sm md:text-base font-medium flex items-start">
              <span className="text-red-600 mr-2 shrink-0">⚠️</span>
              <span><strong>Medical Disclaimer:</strong> MOYO connects users with independent, registered medical practitioners. It is not a medical provider. In a life-threatening emergency, call your local emergency number (112 or 102) immediately.</span>
            </p>
          </div>
        </div>

        {/* Section 2: Available Consultations */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-ink mb-8">Available Consultations</h2>
            <p className="text-lg text-muted mb-12">
              Our platform connects you with registered medical professionals across various specialties for initial consultations, second opinions, and routine check-ups.
            </p>
            
            <div className="space-y-4">
              <div className="p-6 rounded-[16px] bg-page border border-line">
                <h3 className="text-xl font-bold text-ink mb-2">General Physician</h3>
                <p className="text-muted">Consult for routine illnesses, fevers, and general health assessments.</p>
              </div>
              <div className="p-6 rounded-[16px] bg-page border border-line">
                <h3 className="text-xl font-bold text-ink mb-2">Dermatologist</h3>
                <p className="text-muted">Consult for skin, hair, and nail-related concerns.</p>
              </div>
              <div className="p-6 rounded-[16px] bg-page border border-line">
                <h3 className="text-xl font-bold text-ink mb-2">Pediatrician</h3>
                <p className="text-muted">Consult regarding children's health, development, and common pediatric conditions.</p>
              </div>
              <div className="p-6 rounded-[16px] bg-page border border-line">
                <h3 className="text-xl font-bold text-ink mb-2">ENT Specialist</h3>
                <p className="text-muted">Consult for ear, nose, and throat-related issues.</p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-brand-50 rounded-[16px] border border-brand-100">
              <h3 className="text-lg font-bold text-brand-deep mb-2">Need at-home medical support?</h3>
              <p className="text-muted mb-4">
                If you require post-operative care, elderly care, or physical rehabilitation at home, we also connect you with registered nurses and physiotherapists.
              </p>
              <Link href="/home-nursing-noida" className="text-brand font-bold hover:underline inline-flex items-center">
                Explore Home Nursing Services <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Section 3: How it works */}
        <section className="py-16 md:py-24 bg-section-alt border-y border-line">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-ink mb-4">How It Works</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-8 rounded-[16px] border border-line">
                <div className="w-12 h-12 bg-brand text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-6">1</div>
                <h3 className="font-bold text-lg text-ink mb-3">Book via App</h3>
                <p className="text-muted">Select the required specialty and request an appointment through the MOYO app.</p>
              </div>
              <div className="bg-white p-8 rounded-[16px] border border-line">
                <div className="w-12 h-12 bg-brand text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-6">2</div>
                <h3 className="font-bold text-lg text-ink mb-3">Consultation</h3>
                <p className="text-muted">Connect with the registered practitioner at your scheduled time for an assessment.</p>
              </div>
              <div className="bg-white p-8 rounded-[16px] border border-line">
                <div className="w-12 h-12 bg-brand text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-6">3</div>
                <h3 className="font-bold text-lg text-ink mb-3">Follow-up</h3>
                <p className="text-muted">Receive necessary guidance and book any required follow-up consultations easily.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: FAQ */}
        <div className="px-4 sm:px-6 lg:px-8 bg-white py-16">
          <h2 className="text-3xl font-bold text-ink mb-12 text-center">Frequently Asked Questions</h2>
          <FAQAccordion faqs={[
            { q: "How do I book a doctor consultation?", a: "You can select the required medical specialty and book an appointment directly through the MOYO app." },
            { q: "Are the doctors registered?", a: "Yes, MOYO only connects you with independent practitioners who hold valid medical registration and licenses." },
            { q: "Is this a substitute for emergency care?", a: "No. For any life-threatening emergency, severe trauma, or acute medical crisis, call the national emergency number (112 or 102) immediately." }
          ]} />
        </div>

        {/* Internal Linking Block */}
        <section className="py-12 bg-section-alt border-t border-line text-center">
          <p className="text-muted mb-6 text-sm uppercase tracking-wider font-semibold">Other support services</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <Link href="/emergency-services-noida" className="text-brand font-medium hover:text-brand-hover hover:underline transition-all">Emergency Services Directory</Link>
          </div>
        </section>

        {/* Section 6: CTA */}
        <CTABlock 
          heading="Connect with verified practitioners in Noida."
          primaryCta={{ label: "Download the MOYO app", href: "https://app.moyointernational.com" }}
          secondaryCta={{ label: "Book on WhatsApp", href: "https://wa.me/919876543210" }}
        />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
