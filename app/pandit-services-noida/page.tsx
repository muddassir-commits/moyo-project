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
  title: "Pandit for Puja in Noida | Griha Pravesh, Havan, Astrologer — MOYO",
  description: "Book verified pandits, astrologers & tarot readers in Noida for puja, griha pravesh, havan & weddings. By ritual & language. Download the MOYO app.",
  path: "/pandit-services-noida",
});

export default function PanditServicesPage() {
  return (
    <>
      <ServiceJsonLd 
        serviceType="Pandit & Religious Services"
        description="Verified pandits, astrologers, tarot readers, and numerologists in Noida for pujas and consultations."
      />
      <Header />
      <main>
        <Breadcrumbs trail={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Pandit & Religious", href: "/pandit-services-noida" }
        ]} />

        {/* Section 1: Hero */}
        <Hero 
          h1="Pandit for Puja in Noida — Griha Pravesh, Havan, Weddings & More"
          subhead="The right pandit, the right vidhi, the right muhurat — booked without a dozen phone calls. MOYO connects you with verified pandits in Noida for griha pravesh, satyanarayan katha, havan, weddings and more, filtered by ritual and language. Plus astrologers, tarot readers and numerologists for consultations."
          trustChips={[
            "✓ Verified professionals",
            "✓ Upfront pricing",
            "✓ Serving all of Noida"
          ]}
          image="/images/pandit-services-hero.jpg"
          primaryCta={{ label: "Download the App", href: "https://app.moyointernational.com" }}
          secondaryCta={{ label: "Book on WhatsApp", href: "https://wa.me/919876543210" }}
        />

        {/* Section 2: TOC */}
        <section className="bg-page py-4 border-b border-line sticky top-[72px] md:top-[80px] z-40 hidden lg:block shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-5 text-sm font-medium justify-center">
              <span className="text-faint uppercase tracking-wider text-xs font-semibold mr-2">Jump to:</span>
              <a href="#pandit" className="text-ink hover:text-brand transition-colors">Pandit</a>
              <a href="#astrologer" className="text-ink hover:text-brand transition-colors">Astrologer</a>
              <a href="#tarot" className="text-ink hover:text-brand transition-colors">Tarot Reader</a>
              <a href="#numerologist" className="text-ink hover:text-brand transition-colors">Numerologist</a>
              <a href="#pricing" className="text-brand hover:text-brand-deep transition-colors ml-4 font-bold">Pricing</a>
            </div>
          </div>
        </section>

        {/* Section 3: TrustStrip */}
        <TrustStrip stats={[
          { icon: "🪔", number: "[X]", label: "Religious Bookings in Noida" },
          { icon: "🛡️", number: "48 Hr", label: "Verification Process" },
          { icon: "⭐", number: "[X]", label: "Average Rating" },
          { icon: "📍", number: "100+", label: "Noida Sectors Served" }
        ]} />

        {/* Section 4: Service Blocks */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-8">
          
          <ServiceBlock 
            id="pandit"
            title="Pandit in Noida"
            keyword="pandit for puja Noida"
            body={[
              "Verified pandits for griha pravesh, puja, wedding, havan. By ritual + language. Finding the right pandit for your specific rituals and language preference is often a stressful task for families in Noida.",
              "Whether you need a North Indian pandit for a traditional Griha Pravesh in your new Sector 150 apartment, or a South Indian priest for an elaborate wedding ceremony, MOYO makes the process seamless. We connect you with verified pandits experienced in conducting diverse pujas including Satyanarayan Katha, Havan, Namkaran, and Navagraha Shanti.",
              "Every pandit on the platform is thoroughly vetted for their knowledge of Vedic vidhi and mantras. You don't have to make a dozen phone calls or rely on unverified recommendations. Use the app to specify your ritual, language, and date, review the pandit's credentials, and finalize your booking with upfront pricing. Our pandits also provide exact samagri guidance so you are perfectly prepared for the auspicious day."
            ]}
            priceFrom="[X]"
            cta={{ label: "Book pandit", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="astrologer"
            title="Astrologer in Noida"
            keyword="astrologer in Noida"
            body={[
              "Consultations — kundli, matchmaking, muhurat. Navigating major life decisions often requires the guidance of a trusted astrologer, but finding one whose expertise you can rely on is difficult.",
              "MOYO offers access to verified, experienced astrologers in Noida who specialize in Vedic astrology. Whether you need an in-depth Kundli (horoscope) analysis, Guna Milan (matchmaking) before a wedding, or the exact Shubh Muhurat for starting a new business or buying a house, our professionals provide precise, personalized consultations.",
              "You can book an in-person session at your home or opt for a convenient on-call consultation. Review their experience, read feedback from previous clients, and set a consultation fee through our bidding system, ensuring a transparent and enlightening experience without hidden charges."
            ]}
            priceFrom="[X]"
            cta={{ label: "Book astrologer", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="tarot"
            title="Tarot Card Reader in Noida"
            keyword="tarot card reader Noida"
            body={[
              "Tarot sessions in person or on call. Sometimes you need immediate clarity on your career path, relationships, or personal growth.",
              "MOYO connects you with gifted, verified Tarot Card readers across Noida. These professionals offer intuitive readings that help you navigate life's uncertainties with confidence. Whether you prefer a detailed in-person session in the quiet of your home or a quick, focused reading on a phone call, you can find a reader whose energy aligns with yours.",
              "Browse through profiles, check their areas of expertise, and book a session that fits your schedule. Our transparent pricing means you know exactly what the consultation will cost before the reading begins."
            ]}
            priceFrom="[X]"
            cta={{ label: "Book tarot card reader", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="numerologist"
            title="Numerologist in Noida"
            keyword="numerologist Noida"
            body={[
              "Name & number consultations. The numbers associated with your name, birthdate, and business can significantly influence your success and harmony.",
              "MOYO provides access to certified numerologists in Noida who can help you unlock the power of numbers. Whether you are looking to align a newborn's name for a prosperous future, optimize your business name for success, or simply understand your life path number, our verified experts offer comprehensive numerology reports and consultations.",
              "You can consult with them online or in-person. Choose the right expert based on reviews and agree on a consultation fee through the app, ensuring professional guidance tailored to your specific needs."
            ]}
            priceFrom="[X]"
            cta={{ label: "Book numerologist", href: "https://app.moyointernational.com" }}
          />
          
          <div className="bg-section-alt p-8 rounded-[16px] border border-line shadow-sm">
            <h3 className="text-xl font-bold text-ink mb-3">Also Available on MOYO</h3>
            <p className="text-muted leading-relaxed">
              We respect and cater to diverse faiths and traditions. You can also book a <strong className="text-ink">Katha Vachak, Sikh Granthi, Imam, Pastor, or Palm Reader</strong> through the MOYO app for your specific religious and spiritual needs in Noida.
            </p>
          </div>
        </div>

        {/* Section 5: Pricing */}
        <section id="pricing" className="py-16 md:py-24 bg-page border-y border-line">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-ink mb-8 text-center tracking-tight">Pandit & Religious Services Pricing in Noida</h2>
            <PricingTable rows={[
              { service: "Pandit (Basic Puja / Havan)", partTime: "from ₹[X]", fullTime: "—", note: "Per ceremony" },
              { service: "Pandit (Griha Pravesh / Wedding)", partTime: "from ₹[X]", fullTime: "—", note: "Per ceremony" },
              { service: "Astrologer Consultation", partTime: "from ₹[X]", fullTime: "—", note: "Per session / Kundli" },
              { service: "Tarot / Numerology", partTime: "from ₹[X]", fullTime: "—", note: "Per session" },
            ]} />
          </div>
        </section>

        {/* Section 6: Why MOYO */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-4">Why Book Religious Services on MOYO?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Verified Pandits</h3>
                <p className="text-muted leading-relaxed">Every professional is checked for their identity and knowledge of specific rituals and languages.</p>
              </div>
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">No Phone Marathons</h3>
                <p className="text-muted leading-relaxed">Stop calling multiple contacts to find an available priest. Book directly based on your date and muhurat.</p>
              </div>
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Samagri Guidance</h3>
                <p className="text-muted leading-relaxed">Get accurate lists of required samagri beforehand so you are not caught short on the day of the puja.</p>
              </div>
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Upfront Bidding</h3>
                <p className="text-muted leading-relaxed">Propose your dakshina or consultation fee in the app and avoid any awkward negotiations later.</p>
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
              MOYO pandits and spiritual guides are available across Noida and Greater Noida, including <strong className="text-ink">Sector 18, 62, 76, 137, 150, 168, Noida Extension and Greater Noida West</strong>.
            </p>
          </div>
        </section>

        {/* Reviews Section Temporarily Hidden */}

        {/* Section 10: FAQ */}
        <div className="px-4 sm:px-6 lg:px-8 bg-white">
          <FAQAccordion faqs={[
            { q: "Can I book a pandit for griha pravesh in Noida?", a: "Yes — verified pandits for griha pravesh, havan, puja and weddings, by ritual and language." },
            { q: "Will the pandit arrange samagri?", a: "[Confirm per team] — samagri guidance provided; arrangement options in the app." },
            { q: "Can I book an astrologer consultation?", a: "Yes — in-person or on-call astrology, tarot and numerology consultations." },
            { q: "Do you have granthi / imam / pastor services?", a: "Yes — the platform covers multiple faiths." }
          ]} />
        </div>

        {/* Internal Linking Block */}
        <section className="py-12 bg-section-alt border-t border-line text-center">
          <p className="text-muted mb-6 text-sm uppercase tracking-wider font-semibold">Looking for other services in Noida?</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <Link href="/event-services-noida" className="text-brand font-medium hover:text-brand-hover hover:underline transition-all">Book Event Services in Noida</Link>
            <span className="text-line hidden sm:inline">•</span>
            <Link href="/beauty-services-noida" className="text-brand font-medium hover:text-brand-hover hover:underline transition-all">Book Beauty Services in Noida</Link>
          </div>
        </section>

        {/* Section 11: Closing CTA */}
        <CTABlock 
          heading="Sacred rituals, simplified bookings."
          primaryCta={{ label: "Download the MOYO app", href: "https://app.moyointernational.com" }}
          secondaryCta={{ label: "Book on WhatsApp", href: "https://wa.me/919876543210" }}
        />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
