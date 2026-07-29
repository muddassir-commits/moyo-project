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
  title: "Salon at Home in Noida | Makeup, Beautician, Mehendi, Massage",
  description: "Book salon at home in Noida — beautician, bridal makeup, mehendi, massage, hair & nails. Hygiene-sealed kits, salon-trained pros. Download the MOYO app.",
  path: "/beauty-services-noida",
});

export default function BeautyServicesPage() {
  return (
    <>
      <ServiceJsonLd 
        serviceType="Beauty & Grooming at Home"
        description="Salon at home in Noida including bridal makeup, beautician, mehendi, massage, hair styling and nail art."
      />
      <Header />
      <main>
        <Breadcrumbs trail={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Beauty & Grooming", href: "/beauty-services-noida" }
        ]} />

        {/* Section 1: Hero */}
        <Hero 
          h1="Salon at Home in Noida — Bridal Makeup, Beautician, Mehendi & More"
          subhead="Getting ready shouldn't mean a crowded salon and a two-hour wait. MOYO brings salon-trained beauticians and makeup artists to your door in Noida — with hygiene-sealed, single-use kits where it matters. Bridal makeup, party looks, facials, waxing, mehendi, massage, hair and nails — book the professional and the time that suits you."
          trustChips={[
            "✓ Verified professionals",
            "✓ Upfront pricing",
            "✓ Serving all of Noida"
          ]}
          image="/images/beauty-services-hero.jpg"
          primaryCta={{ label: "Download the App", href: "https://app.moyointernational.com" }}
          secondaryCta={{ label: "Book on WhatsApp", href: "https://wa.me/919876543210" }}
        />

        {/* Section 2: TOC */}
        <section className="bg-page py-4 border-b border-line sticky top-[72px] md:top-[80px] z-40 hidden lg:block shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-5 text-sm font-medium justify-center">
              <span className="text-faint uppercase tracking-wider text-xs font-semibold mr-2">Jump to:</span>
              <a href="#makeup" className="text-ink hover:text-brand transition-colors">Makeup</a>
              <a href="#mehendi" className="text-ink hover:text-brand transition-colors">Mehendi</a>
              <a href="#beautician" className="text-ink hover:text-brand transition-colors">Beautician</a>
              <a href="#massage" className="text-ink hover:text-brand transition-colors">Massage</a>
              <a href="#hair" className="text-ink hover:text-brand transition-colors">Hair</a>
              <a href="#nails" className="text-ink hover:text-brand transition-colors">Nails</a>
              <a href="#pricing" className="text-brand hover:text-brand-deep transition-colors ml-4 font-bold">Pricing</a>
            </div>
          </div>
        </section>

        {/* Section 3: TrustStrip */}
        <TrustStrip stats={[
          { icon: "💄", number: "[X]", label: "Beauty Bookings in Noida" },
          { icon: "🛡️", number: "48 Hr", label: "Verification Process" },
          { icon: "⭐", number: "[X]", label: "Average Rating" },
          { icon: "📍", number: "100+", label: "Noida Sectors Served" }
        ]} />

        {/* Section 4: Service Blocks */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-8">
          
          <ServiceBlock 
            id="makeup"
            title="Makeup Artist in Noida"
            keyword="makeup artist in Noida"
            body={[
              "Bridal, party & event makeup at home. Hygiene-sealed kit, salon-trained. Getting ready for a wedding or a major party in Noida usually means navigating traffic and waiting in a crowded salon.",
              "MOYO brings professional, salon-trained makeup artists directly to your home or hotel. Whether you need an intricate bridal look, subtle party makeup, or HD makeup for a photoshoot, our verified artists deliver. They carry premium, branded products and hygiene-sealed kits, ensuring safety and a flawless finish.",
              "You can view an artist's portfolio and real customer reviews before booking. Discuss your look, agree on the rate, and get ready in the comfort of your own space in Sector 18 or Noida Extension."
            ]}
            priceFrom="[X]"
            cta={{ label: "Book makeup artist", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="mehendi"
            title="Mehendi Artist in Noida"
            keyword="mehendi artist in Noida"
            body={[
              "Bridal & festive mehendi — intricate, arabic, minimal styles. A good mehendi design requires time and patience.",
              "MOYO connects you with skilled mehendi artists in Noida who specialize in everything from heavy traditional bridal patterns to modern, minimal Arabic designs. Our artists use natural, high-quality henna that leaves a rich, dark stain without harmful chemical additives.",
              "Book a solo session for a festival like Karwa Chauth or hire a team of artists for a full family sangeet event. You see the artist's past work and reviews before confirming. Let the artists come to your home in Sector 62 or Sector 150, allowing you to relax while the intricate designs are applied."
            ]}
            priceFrom="[X]"
            cta={{ label: "Book mehendi artist", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="beautician"
            title="Beautician in Noida"
            keyword="beautician at home Noida"
            body={[
              "Facials, waxing, threading, cleanup at home. Sealed, single-use where needed. Regular grooming shouldn't require blocking out half your day.",
              "MOYO brings comprehensive beautician services directly to your living room. Book verified professionals for full-body waxing, threading, detan treatments, and deep-cleansing facials. We prioritize your health and safety by using hygiene-sealed, single-use products where it counts, and thoroughly sanitizing all reusable tools.",
              "It's the exact same quality you'd expect from a premium salon, delivered in the privacy of your home. Whether you need a quick threading session or a complete pre-vacation grooming package in Greater Noida West, set your time and get matched with a trusted beautician."
            ]}
            priceFrom="[X]"
            cta={{ label: "Book beautician", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="massage"
            title="Massage Therapist in Noida"
            keyword="massage at home Noida"
            body={[
              "Relaxation & therapeutic massage at home, trained therapists. After a long week of work or a tough workout, traveling to a spa defeats the purpose of a relaxing massage.",
              "MOYO provides trained and certified massage therapists who bring the spa experience to your home. Choose from deep tissue, Swedish, or specialized therapeutic massages. Our verified therapists arrive with professional massage beds, clean towels, and premium oils to create a serene environment in your own room.",
              "You don't have to worry about driving back through Noida traffic after your session—just relax and unwind. Book a trusted therapist with transparent upfront pricing."
            ]}
            priceFrom="[X]"
            cta={{ label: "Book massage therapist", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="hair"
            title="Hair Stylist in Noida"
            keyword="hair stylist at home Noida"
            body={[
              "Cut, colour, styling, spa at home. From a quick trim to a complete hair transformation, MOYO brings expert hair stylists to your doorstep.",
              "Our verified stylists are trained in modern cutting techniques, hair coloring, root touch-ups, and keratin treatments. Getting ready for an event? Book a stylist for professional blow-dries, intricate updos, or straightening.",
              "They bring all the necessary salon-grade equipment and products. No more waiting your turn in a noisy salon chair. Enjoy a relaxing hair spa or get a fresh haircut in the comfort of your home in Sector 76."
            ]}
            priceFrom="[X]"
            cta={{ label: "Book hair stylist", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="nails"
            title="Nail Artist in Noida"
            keyword="nail artist Noida"
            body={[
              "Manicure, pedicure, gel & nail art. Treat your hands and feet without leaving the house.",
              "MOYO connects you with professional nail artists who provide complete manicure and pedicure services. Whether you want a classic French manicure, long-lasting gel extensions, or intricate custom nail art, our verified artists deliver precision and quality.",
              "They arrive equipped with a wide range of colors, professional tools, and hygiene-sealed files and buffers. It's the perfect way to prep for a party or just pamper yourself on a Sunday afternoon."
            ]}
            priceFrom="[X]"
            cta={{ label: "Book nail artist", href: "https://app.moyointernational.com" }}
          />
        </div>

        {/* Section 5: Pricing */}
        <section id="pricing" className="py-16 md:py-24 bg-page border-y border-line">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-ink mb-8 text-center tracking-tight">At-Home Salon Pricing in Noida</h2>
            <PricingTable rows={[
              { service: "Makeup / Bridal", partTime: "from ₹[X]", fullTime: "—", note: "See portfolios in app" },
              { service: "Beautician (Waxing/Facial)", partTime: "from ₹[X]", fullTime: "—", note: "Build your package" },
              { service: "Mehendi", partTime: "from ₹[X]", fullTime: "—", note: "Depends on design" },
              { service: "Massage", partTime: "from ₹[X]", fullTime: "—", note: "Therapeutic / Swedish" },
              { service: "Hair & Nails", partTime: "from ₹[X]", fullTime: "—", note: "Set your rate" },
            ]} />
          </div>
        </section>

        {/* Section 6: Why MOYO */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-4">Why Book Beauty Services on MOYO?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Salon-Trained Pros</h3>
                <p className="text-muted leading-relaxed">Verified professionals at your door — no waiting room, no rushed appointments.</p>
              </div>
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Hygiene First</h3>
                <p className="text-muted leading-relaxed">We mandate hygiene-sealed, single-use kits where it counts, and sanitized tools.</p>
              </div>
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Book by Occasion</h3>
                <p className="text-muted leading-relaxed">Find exactly what you need — from heavy bridal looks to a quick everyday cleanup.</p>
              </div>
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">See Portfolios</h3>
                <p className="text-muted leading-relaxed">Review the artist's past work and read real customer ratings before you book.</p>
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
              MOYO beauty and grooming services are available across Noida and Greater Noida, including <strong className="text-ink">Sector 18, 62, 76, 137, 150, 168, Noida Extension and Greater Noida West</strong>. Not sure if we cover your sector? Open the app and enter your location.
            </p>
          </div>
        </section>

        {/* Reviews Section Temporarily Hidden */}

        {/* Section 10: FAQ */}
        <div className="px-4 sm:px-6 lg:px-8 bg-white">
          <FAQAccordion faqs={[
            { q: "How much does bridal makeup cost in Noida?", a: "Bridal packages start from ₹[X] depending on the look and products used. You can view various artist portfolios and their pricing directly in the app." },
            { q: "Are the kits hygienic?", a: "Yes — our professionals use single-use, sealed products where hygiene matters most, and all reusable tools are thoroughly sanitised before each booking." },
            { q: "Can I book a beautician for the same day?", a: "Often yes — you can check live availability of beauticians in your specific Noida sector directly in the MOYO app." },
            { q: "Do you offer men's grooming?", a: "Yes, comprehensive men's grooming services are available on the platform as well." },
            { q: "Do you cover Greater Noida?", a: "Yes — MOYO beauty services are available across both Noida and Greater Noida." }
          ]} />
        </div>

        {/* Internal Linking Block */}
        <section className="py-12 bg-section-alt border-t border-line text-center">
          <p className="text-muted mb-6 text-sm uppercase tracking-wider font-semibold">Looking for other services in Noida?</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <Link href="/event-services-noida" className="text-brand font-medium hover:text-brand-hover hover:underline transition-all">Book Event Services in Noida</Link>
            <span className="text-line hidden sm:inline">•</span>
            <Link href="/fitness-trainer-noida" className="text-brand font-medium hover:text-brand-hover hover:underline transition-all">Book Fitness Trainers in Noida</Link>
            <span className="text-line hidden sm:inline">•</span>
            <Link href="/home-nursing-noida" className="text-brand font-medium hover:text-brand-hover hover:underline transition-all">Book Home Nursing in Noida</Link>
          </div>
        </section>

        {/* Section 11: Closing CTA */}
        <CTABlock 
          heading="Salon-quality beauty services, delivered to your door."
          primaryCta={{ label: "Download the MOYO app", href: "https://app.moyointernational.com" }}
          secondaryCta={{ label: "Book on WhatsApp", href: "https://wa.me/919876543210" }}
        />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
