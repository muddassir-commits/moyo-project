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
  title: "Home Nursing & Elder Care in Noida | Nurse, Physio, Attendant — MOYO",
  description: "Book trained nurses, physiotherapists & elderly caretakers at home in Noida. Verified, compassionate care. Download the MOYO app.",
  path: "/home-nursing-noida",
});

export default function HomeNursingPage() {
  return (
    <>
      <ServiceJsonLd 
        serviceType="Home Nursing & Elder Care"
        description="Trained nurses, physiotherapists, and elderly caretakers at home in Noida."
      />
      <Header />
      <main>
        <Breadcrumbs trail={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Home Nursing", href: "/home-nursing-noida" }
        ]} />

        {/* Section 1: Hero */}
        <Hero 
          h1="Home Nursing & Elder Care in Noida — Trained, Verified, Compassionate"
          subhead="When someone at home needs care, you need people you can trust in your house — not strangers off a listing. MOYO's nurses, physiotherapists and elder-care attendants are trained and verified, so recovery and daily care happen at home, safely. Injections, wound care, post-operative support, physiotherapy, and day/night attendants for seniors — booked in the app."
          trustChips={[
            "✓ Verified professionals",
            "✓ Upfront pricing",
            "✓ Serving all of Noida"
          ]}
          image="/images/home-nursing-hero.jpg"
          primaryCta={{ label: "Download the App", href: "https://app.moyointernational.com" }}
          secondaryCta={{ label: "Book on WhatsApp", href: "https://wa.me/919876543210" }}
        />

        {/* Section 2: TOC */}
        <section className="bg-page py-4 border-b border-line sticky top-[72px] md:top-[80px] z-40 hidden lg:block shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-5 text-sm font-medium justify-center">
              <span className="text-faint uppercase tracking-wider text-xs font-semibold mr-2">Jump to:</span>
              <a href="#nurse" className="text-ink hover:text-brand transition-colors">Nurse</a>
              <a href="#physio" className="text-ink hover:text-brand transition-colors">Physiotherapist</a>
              <a href="#elderly" className="text-ink hover:text-brand transition-colors">Elderly Care</a>
              <a href="#pricing" className="text-brand hover:text-brand-deep transition-colors ml-4 font-bold">Pricing</a>
            </div>
          </div>
        </section>

        {/* Section 3: TrustStrip */}
        <TrustStrip stats={[
          { icon: "❤️", number: "4.8/5", label: "Nursing Bookings in Noida" },
          { icon: "🛡️", number: "48 Hr", label: "Verification Process" },
          { icon: "⭐", number: "4.8/5", label: "Average Rating" },
          { icon: "📍", number: "100+", label: "Noida Sectors Served" }
        ]} />

        {/* Section 4: Service Blocks */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-8">
          
          <ServiceBlock 
            id="nurse"
            title="Nurse in Noida"
            keyword="nurse at home Noida"
            body={[
              "Trained nurses for injections, wound care, post-op & bed-ridden patients at home. Recovering from surgery or managing a chronic illness is stressful enough without daily trips to a crowded clinic.",
              "MOYO brings trained, qualified nurses directly to your home in Noida. Whether you need a short visit for IV injections, catheter care, and wound dressing, or a dedicated nurse for a bed-ridden patient, our verified professionals handle it with clinical expertise and compassion. We understand that medical needs require absolute trust, which is why every nurse on our platform undergoes a strict 48-hour verification process, including credential and reference checks.",
              "Receive hospital-standard care in the comfort of your own bedroom in Sector 62 or Noida Extension, with complete transparency in pricing."
            ]}
            priceFrom="499"
            cta={{ label: "Book nurse", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="physio"
            title="Physiotherapist in Noida"
            keyword="physiotherapist at home Noida"
            body={[
              "At-home physio for recovery, mobility, pain — no clinic trips. Consistent physiotherapy is crucial for recovering from sports injuries, joint replacement surgeries, or managing chronic back pain. But traveling to a clinic with limited mobility often worsens the pain.",
              "MOYO connects you with certified physiotherapists who provide tailored rehabilitation at your home. They assess your condition and create a targeted exercise plan to improve mobility and reduce pain, using specialized equipment they bring along. By conducting the sessions in your own space—whether that's a living room in Sector 137 or a society park in Greater Noida West—you ensure consistency and comfort.",
              "Review their qualifications, agree on a per-session or monthly rate, and focus entirely on your recovery."
            ]}
            priceFrom="499"
            cta={{ label: "Book physiotherapist", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="elderly"
            title="Elderly Caretaker in Noida"
            keyword="elderly care at home Noida"
            body={[
              "Day/night attendants for seniors — meals, medicine reminders, companionship. Caring for aging parents while managing a full-time job can be overwhelming.",
              "MOYO provides compassionate, verified elderly caretakers in Noida who act as dedicated companions and helpers for your senior family members. You can book a daytime attendant to assist with meals, mobility, and medicine reminders while you are at the office, or a nighttime attendant to ensure safety and support for those with sleep disturbances or dementia.",
              "We prioritize empathy and patience, matching you with caregivers who truly understand the needs of the elderly. Since you propose the rate through our bidding system, you can find consistent, affordable support for your parents, allowing you peace of mind whether you're at work or away."
            ]}
            priceFrom="499"
            cta={{ label: "Book elderly caretaker", href: "https://app.moyointernational.com" }}
          />
        </div>

        {/* Section 5: Pricing */}
        <section id="pricing" className="py-16 md:py-24 bg-page border-y border-line">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-ink mb-8 text-center tracking-tight">Home Nursing & Care Pricing in Noida</h2>
            <PricingTable rows={[
              { service: "Nurse (Visit/Injections)", partTime: "from ₹499", fullTime: "—", note: "Per visit" },
              { service: "Physiotherapist", partTime: "from ₹499", fullTime: "—", note: "Per session" },
              { service: "Elderly Attendant (12 hrs)", partTime: "from ₹499", fullTime: "—", note: "Day or Night shift" },
              { service: "Live-in Caretaker (24 hrs)", partTime: "—", fullTime: "from ₹499", note: "Monthly package" },
            ]} />
          </div>
        </section>

        {/* Section 6: Why MOYO */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-4">Why Book Care on MOYO?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Trained & Verified</h3>
                <p className="text-muted leading-relaxed">Caregivers undergo strict ID, address, and reference checks before onboarding.</p>
              </div>
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Care at Home</h3>
                <p className="text-muted leading-relaxed">No need to travel to crowded clinics for routine procedures or physio sessions.</p>
              </div>
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Flexible Timings</h3>
                <p className="text-muted leading-relaxed">Book a quick visit, a 12-hour day/night shift, or a full 24-hour live-in attendant.</p>
              </div>
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Continuity of Care</h3>
                <p className="text-muted leading-relaxed">Request the same caregiver for ongoing needs to ensure comfort and familiarity.</p>
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
              MOYO home nursing and elder care is available across Noida and Greater Noida, including <strong className="text-ink">Sector 18, 62, 76, 137, 150, 168, Noida Extension and Greater Noida West</strong>.
            </p>
          </div>
        </section>

        {/* Reviews Section Temporarily Hidden */}

        {/* Section 10: FAQ */}
        <div className="px-4 sm:px-6 lg:px-8 bg-white">
          <FAQAccordion faqs={[
            { q: "Can I get a nurse at home in Noida?", a: "Yes — we connect you with trained nurses for injections, wound care, post-op support, and care for bed-ridden patients." },
            { q: "Do you provide physiotherapy at home?", a: "Yes — certified physiotherapists are available for at-home recovery, mobility improvement, and pain management." },
            { q: "How much does an elderly caretaker cost?", a: "It depends on whether you need a day, night, or live-in attendant. Prices start from ₹499. You can set your specific requirement in the app." },
            { q: "Are caretakers verified?", a: "Yes — strict ID, address, and reference checks are completed before any caregiver is onboarded to the MOYO platform." }
          ]} />
        </div>

        {/* Internal Linking Block */}
        <section className="py-12 bg-section-alt border-t border-line text-center">
          <p className="text-muted mb-6 text-sm uppercase tracking-wider font-semibold">Looking for other services in Noida?</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <Link href="/domestic-help-noida" className="text-brand font-medium hover:text-brand-hover hover:underline transition-all">Book Domestic Help in Noida</Link>
            <span className="text-line hidden sm:inline">•</span>
            <Link href="/fitness-trainer-noida" className="text-brand font-medium hover:text-brand-hover hover:underline transition-all">Book Fitness Trainers in Noida</Link>
            <span className="text-line hidden sm:inline">•</span>
            <Link href="/doctor-consultation-noida" className="text-brand font-medium hover:text-brand-hover hover:underline transition-all">Book Doctor Consultations in Noida</Link>
          </div>
        </section>

        {/* Section 11: Closing CTA */}
        <CTABlock 
          heading="Trusted, verified care in the comfort of your home."
          primaryCta={{ label: "Download the MOYO app", href: "https://app.moyointernational.com" }}
          secondaryCta={{ label: "Book on WhatsApp", href: "https://wa.me/919876543210" }}
        />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
