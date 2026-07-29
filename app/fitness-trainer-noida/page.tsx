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
  title: "Personal Trainer, Yoga & Dietitian at Home in Noida | MOYO",
  description: "Book personal trainers, yoga instructors, dietitians & sports coaches in Noida — at home or your society gym. Download the MOYO app.",
  path: "/fitness-trainer-noida",
});

export default function FitnessTrainerPage() {
  return (
    <>
      <ServiceJsonLd 
        serviceType="Fitness & Wellness"
        description="Personal trainers, yoga instructors, dietitians, and sports coaches at home or society gyms in Noida."
      />
      <Header />
      <main>
        <Breadcrumbs trail={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Fitness & Wellness", href: "/fitness-trainer-noida" }
        ]} />

        {/* Section 1: Hero */}
        <Hero 
          h1="Personal Trainer, Yoga & Wellness at Home in Noida"
          subhead="The best workout is the one you actually show up for — and that's a lot easier when the trainer comes to you. MOYO connects you with verified personal trainers, yoga instructors, dietitians and coaches across Noida, at home or your society gym."
          trustChips={[
            "✓ Verified professionals",
            "✓ Upfront pricing",
            "✓ Serving all of Noida"
          ]}
          image="/images/fitness-trainer-hero.jpg"
          primaryCta={{ label: "Download the App", href: "https://app.moyointernational.com" }}
          secondaryCta={{ label: "Book on WhatsApp", href: "https://wa.me/919876543210" }}
        />

        {/* Section 2: TOC */}
        <section className="bg-page py-4 border-b border-line sticky top-[72px] md:top-[80px] z-40 hidden lg:block shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-5 text-sm font-medium justify-center">
              <span className="text-faint uppercase tracking-wider text-xs font-semibold mr-2">Jump to:</span>
              <a href="#gym" className="text-ink hover:text-brand transition-colors">Gym Trainer</a>
              <a href="#yoga" className="text-ink hover:text-brand transition-colors">Yoga</a>
              <a href="#diet" className="text-ink hover:text-brand transition-colors">Dietitian</a>
              <a href="#sports" className="text-ink hover:text-brand transition-colors">Sports Coach</a>
              <a href="#pricing" className="text-brand hover:text-brand-deep transition-colors ml-4 font-bold">Pricing</a>
            </div>
          </div>
        </section>

        {/* Section 3: TrustStrip */}
        <TrustStrip stats={[
          { icon: "💪", number: "[X]", label: "Fitness Bookings in Noida" },
          { icon: "🛡️", number: "48 Hr", label: "Verification Process" },
          { icon: "⭐", number: "[X]", label: "Average Rating" },
          { icon: "📍", number: "100+", label: "Noida Sectors Served" }
        ]} />

        {/* Section 4: Service Blocks */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-8">
          
          <ServiceBlock 
            id="gym"
            title="Gym Trainer in Noida"
            keyword="gym trainer Noida"
            body={[
              "Personal training at home or society gym. Plans to your goal. Staying consistent with your workouts is the hardest part of getting fit. Gym memberships often go unused because of the commute or lack of motivation.",
              "MOYO brings certified personal trainers to you—whether you want to work out in your living room or at your society gym. Our trainers design personalized workout plans tailored to your specific goals, whether it's weight loss, building strength, or general fitness. They focus on proper form to prevent injuries and keep you accountable.",
              "You can book a trainer for a one-off form-check session or a monthly package in sectors like 76 or Noida Extension. View their certifications and client reviews in the app before confirming your booking."
            ]}
            priceFrom="[X]"
            cta={{ label: "Book gym trainer", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="yoga"
            title="Yoga Instructor in Noida"
            keyword="yoga instructor at home Noida"
            body={[
              "At-home yoga — beginners, prenatal, therapy, general fitness. Practicing yoga in a crowded class often means missing out on the personalized corrections that make the practice effective.",
              "MOYO connects you with certified yoga instructors who bring the studio experience into your home. Whether you are a complete beginner looking to improve flexibility, an expectant mother needing safe prenatal yoga, or someone seeking therapeutic yoga for back pain, we have the right instructor for you. By practicing in the calm environment of your own space in Sector 137 or Greater Noida, you can focus deeply on your breath and alignment.",
              "Select your preferred style—Ashtanga, Hatha, or restorative—and set the price that works for you."
            ]}
            priceFrom="[X]"
            cta={{ label: "Book yoga instructor", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="diet"
            title="Dietitian in Noida"
            keyword="dietitian in Noida"
            body={[
              "Personalised diet plans — weight, medical, lifestyle. You can't out-train a bad diet, but generic meal plans rarely work long-term.",
              "MOYO gives you access to qualified dietitians in Noida who create realistic, personalized nutrition plans based on your actual lifestyle and food preferences. Whether you need a weight management plan, a medical diet for PCOS or diabetes, or just guidance for healthier eating, our verified professionals can help. Consultations can be done at home or online.",
              "They work with you to build sustainable eating habits rather than restrictive crash diets. Compare profiles, check reviews, and start your journey towards better health with transparent upfront pricing."
            ]}
            priceFrom="[X]"
            cta={{ label: "Book dietitian", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="sports"
            title="Sports Coach in Noida"
            keyword="sports coach Noida"
            body={[
              "Cricket, football, badminton, tennis coaching. Looking to improve your game or get your kids active? MOYO connects you with experienced sports coaches for private or small-group training in Noida.",
              "From cricket and football to badminton and tennis, our coaches help refine technique, build stamina, and improve overall performance. Whether you're hiring a tennis coach for your society court in Sector 150 or a cricket coach for weekend net sessions, we ensure all professionals are thoroughly vetted.",
              "Set your rate in the app and get matched with a coach who fits your schedule and skill level."
            ]}
            priceFrom="[X]"
            cta={{ label: "Book sports coach", href: "https://app.moyointernational.com" }}
          />

          <div className="bg-section-alt p-8 rounded-[16px] border border-line shadow-sm">
            <h3 className="text-xl font-bold text-ink mb-3">Also Available</h3>
            <p className="text-muted leading-relaxed">
              Looking for a Meditation Coach, Sports Partner, Umpire, Team Coordinator, or Referee? MOYO connects you with a wide network of wellness professionals and sports personnel for hire across Noida.
            </p>
          </div>
        </div>

        {/* Section 5: Pricing */}
        <section id="pricing" className="py-16 md:py-24 bg-page border-y border-line">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-ink mb-8 text-center tracking-tight">Fitness & Wellness Pricing in Noida</h2>
            <PricingTable rows={[
              { service: "Personal Trainer", partTime: "from ₹[X]", fullTime: "from ₹[X]", note: "Per session / Monthly" },
              { service: "Yoga Instructor", partTime: "from ₹[X]", fullTime: "from ₹[X]", note: "Per session / Monthly" },
              { service: "Dietitian Consult", partTime: "from ₹[X]", fullTime: "—", note: "Includes diet plan" },
              { service: "Sports Coach", partTime: "from ₹[X]", fullTime: "—", note: "Per session" },
            ]} />
          </div>
        </section>

        {/* Section 6: Why MOYO */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-4">Why Book Wellness on MOYO?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">No Commute</h3>
                <p className="text-muted leading-relaxed">Train at home or your society gym. Remove the commute excuse from your routine.</p>
              </div>
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Custom Plans</h3>
                <p className="text-muted leading-relaxed">Built specifically for your goals — weight, strength, mobility, or prenatal.</p>
              </div>
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Verified Pros</h3>
                <p className="text-muted leading-relaxed">Every trainer and dietitian is vetted for their qualifications and identity.</p>
              </div>
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">No Rigid Contracts</h3>
                <p className="text-muted leading-relaxed">Book a one-off session or an ongoing monthly package without gym lock-ins.</p>
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
              MOYO fitness and wellness professionals are available across Noida and Greater Noida, including <strong className="text-ink">Sector 18, 62, 76, 137, 150, 168, Noida Extension and Greater Noida West</strong>.
            </p>
          </div>
        </section>

        {/* Reviews Section Temporarily Hidden */}

        {/* Section 10: FAQ */}
        <div className="px-4 sm:px-6 lg:px-8 bg-white">
          <FAQAccordion faqs={[
            { q: "How much is a personal trainer in Noida?", a: "Per-session and monthly plans start from ₹[X]. You can set your specific goal and propose your rate in the app." },
            { q: "Can I do yoga at home?", a: "Yes — our certified instructors offer at-home yoga for beginners, prenatal, therapy, and general fitness." },
            { q: "Do you offer diet plans?", a: "Yes — you can consult with qualified dietitians for personalised meal and nutrition plans." },
            { q: "Can a trainer come to my society gym?", a: "Yes — many of our clients prefer to train at their own society gym with our verified trainers." }
          ]} />
        </div>

        {/* Internal Linking Block */}
        <section className="py-12 bg-section-alt border-t border-line text-center">
          <p className="text-muted mb-6 text-sm uppercase tracking-wider font-semibold">Looking for other services in Noida?</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <Link href="/home-nursing-noida" className="text-brand font-medium hover:text-brand-hover hover:underline transition-all">Book Home Nursing in Noida</Link>
            <span className="text-line hidden sm:inline">•</span>
            <Link href="/home-tutor-noida" className="text-brand font-medium hover:text-brand-hover hover:underline transition-all">Book Home Tutors in Noida</Link>
            <span className="text-line hidden sm:inline">•</span>
            <Link href="/beauty-services-noida" className="text-brand font-medium hover:text-brand-hover hover:underline transition-all">Book Beauty Services in Noida</Link>
          </div>
        </section>

        {/* Section 11: Closing CTA */}
        <CTABlock 
          heading="Hit your goals with verified pros at home."
          primaryCta={{ label: "Download the MOYO app", href: "https://app.moyointernational.com" }}
          secondaryCta={{ label: "Book on WhatsApp", href: "https://wa.me/919876543210" }}
        />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
