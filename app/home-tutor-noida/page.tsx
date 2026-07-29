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
  title: "Home Tutors & Tuition in Noida | School, Language, Music — MOYO",
  description: "Book verified home tutors in Noida for all classes, languages, music & dance. One-on-one, at home. Download the MOYO app.",
  path: "/home-tutor-noida",
});

export default function HomeTutorPage() {
  return (
    <>
      <ServiceJsonLd 
        serviceType="Home Tutors & Tuition"
        description="Verified home tutors in Noida for all school classes, languages, music, and dance."
      />
      <Header />
      <main>
        <Breadcrumbs trail={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Home Tutors & Tuition", href: "/home-tutor-noida" }
        ]} />

        {/* Section 1: Hero */}
        <Hero 
          h1="Home Tutors & Tuition in Noida — Verified, One-on-One"
          subhead="A good tutor doesn't just cover the syllabus — they figure out where your child is stuck and fix it. MOYO connects Noida families with verified home tutors for every class and board, plus language, music and dance teachers."
          trustChips={[
            "✓ Verified professionals",
            "✓ Upfront pricing",
            "✓ Serving all of Noida"
          ]}
          image="/images/home-tutor-hero.jpg"
          primaryCta={{ label: "Download the App", href: "https://app.moyointernational.com" }}
          secondaryCta={{ label: "Book on WhatsApp", href: "https://wa.me/919876543210" }}
        />

        {/* Section 2: TOC */}
        <section className="bg-page py-4 border-b border-line sticky top-[72px] md:top-[80px] z-40 hidden lg:block shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-5 text-sm font-medium justify-center">
              <span className="text-faint uppercase tracking-wider text-xs font-semibold mr-2">Jump to:</span>
              <a href="#primary" className="text-ink hover:text-brand transition-colors">Primary</a>
              <a href="#secondary" className="text-ink hover:text-brand transition-colors">Secondary</a>
              <a href="#senior" className="text-ink hover:text-brand transition-colors">Class 11-12</a>
              <a href="#language" className="text-ink hover:text-brand transition-colors">Languages</a>
              <a href="#arts" className="text-ink hover:text-brand transition-colors">Music & Dance</a>
              <a href="#pricing" className="text-brand hover:text-brand-deep transition-colors ml-4 font-bold">Pricing</a>
            </div>
          </div>
        </section>

        {/* Section 3: TrustStrip */}
        <TrustStrip stats={[
          { icon: "📚", number: "4.8/5", label: "Tuition Bookings in Noida" },
          { icon: "🛡️", number: "48 Hr", label: "Verification Process" },
          { icon: "⭐", number: "4.8/5", label: "Average Rating" },
          { icon: "📍", number: "100+", label: "Noida Sectors Served" }
        ]} />

        {/* Section 4: Service Blocks */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-8">
          
          <ServiceBlock 
            id="primary"
            title="Primary Class Tutor in Noida"
            keyword="primary class tutor Noida"
            body={[
              "Home tuition for primary classes — one-on-one, verified tutors. The early years of schooling build the foundation for a child's entire academic future. But in a crowded classroom, it's easy for a young student to fall behind in reading, writing, or basic math without the teacher noticing.",
              "MOYO provides verified home tutors in Noida who specialize in primary education. Our tutors don't just teach the syllabus; they use engaging, child-friendly methods to make learning enjoyable and effective. By providing one-on-one attention in the comfort of your home—whether you live in Sector 76 or Greater Noida West—the tutor can adapt to your child's specific learning pace.",
              "You can review the tutor's educational background and past parent reviews in the app before setting your monthly tuition rate."
            ]}
            priceFrom="499"
            cta={{ label: "Book primary class tutor", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="senior"
            title="Senior Secondary Tutor in Noida"
            keyword="senior secondary tutor Noida"
            body={[
              "Class 11-12 subject tutors incl. PCM/PCB/Commerce. Classes 11 and 12 are critical for board exams and competitive entrance tests. The pressure is immense, and generic coaching centers with 50 students per batch often aren't enough.",
              "MOYO connects you with expert senior secondary tutors in Noida who specialize in specific streams—PCM, PCB, Commerce, and Humanities. Whether your child needs intensive coaching for Physics in Sector 62 or dedicated help with Accountancy in Noida Extension, we have qualified professionals ready to help. These tutors focus on conceptual clarity, board exam strategies, and regular assessments.",
              "Skip the commute to coaching centers and get personalized, high-level academic support directly at your home, with upfront pricing negotiated by you."
            ]}
            priceFrom="499"
            cta={{ label: "Book senior secondary tutor", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="secondary"
            title="Secondary Class Tutor in Noida"
            keyword="secondary tutor Noida"
            body={[
              "Class 9-10 subject tutors, board-focused. Classes 9 and 10 introduce complex subjects and the first major board exams. A strong grasp of Mathematics and Science at this stage is non-negotiable.",
              "MOYO offers specialized secondary class home tutors across Noida who understand the CBSE, ICSE, and state board curriculums inside out. They provide focused, one-on-one sessions that help students navigate difficult topics, practice previous years' papers, and build exam confidence.",
              "By hiring a verified home tutor, you ensure your child gets dedicated attention without the distractions of a group tuition class. Compare tutor profiles, read reviews from other Noida parents, and book the right fit for your child's academic success."
            ]}
            priceFrom="499"
            cta={{ label: "Book secondary class tutor", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="upper-primary"
            title="Upper Primary Tutor in Noida"
            keyword="upper primary tutor Noida"
            body={[
              "Class 6-8 all-subject tuition. The transition to middle school means more subjects and higher expectations. It's the perfect time to build strong study habits.",
              "MOYO connects you with upper primary home tutors in Noida who can handle all major subjects—Math, Science, English, and Social Studies—for Classes 6 through 8. These verified educators focus on ensuring foundational concepts are clear before the academic load increases in high school.",
              "With flexible timings and at-home convenience, your child can learn in a safe, familiar environment. Use the MOYO app to set your budget, review tutor qualifications, and start personalized sessions in your sector."
            ]}
            priceFrom="499"
            cta={{ label: "Book upper primary tutor", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="special-ed"
            title="Special Educator in Noida"
            keyword="special educator Noida"
            body={[
              "Trained educators for children with learning needs. Children with learning differences such as dyslexia, ADHD, or autism require specialized teaching methods and immense patience.",
              "MOYO connects Noida families with trained and certified special educators who understand these unique needs. These professionals use customized learning strategies to help children build cognitive skills, improve focus, and gain academic confidence at their own pace. We know trust is paramount here, which is why every special educator is strictly vetted and verified.",
              "You can find compassionate, qualified educators to provide safe, one-on-one support in the comfort of your home, ensuring your child receives the focused attention they deserve."
            ]}
            priceFrom="499"
            cta={{ label: "Book special educator", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="language"
            title="Foreign Language Tutor in Noida"
            keyword="foreign language tutor Noida"
            body={[
              "French, German, Spanish, etc. Whether for school curriculum, career advancement, or a hobby, learning a new language requires consistent speaking practice.",
              "MOYO provides expert foreign language tutors in Noida for French, German, Spanish, and more. Skip the generic language apps and get real, conversational practice with a verified home tutor. They tailor the lessons to your goal—from passing school exams to achieving professional certification (like DELF or Goethe-Zertifikat).",
              "Book a tutor for yourself or your child, set your preferred schedule, and learn a new language effectively without leaving your house."
            ]}
            priceFrom="499"
            cta={{ label: "Book foreign language tutor", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="arts"
            title="Dance Teacher in Noida"
            keyword="dance teacher Noida"
            body={[
              "Classical, Bollywood, hip-hop at home. Nurture your child's talent or learn a new skill yourself without the hassle of traveling to a dance studio.",
              "MOYO connects you with professional dance teachers in Noida offering at-home classes in Classical (Kathak, Bharatanatyam), Bollywood, Hip-Hop, and contemporary styles. Whether you need a choreographer for a family sangeet in Sector 137 or regular weekly classes for your kids, our verified instructors bring the rhythm to your living room.",
              "Set your budget in the app and find a passionate, skilled teacher who fits your schedule."
            ]}
            priceFrom="499"
            cta={{ label: "Book dance teacher", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="music"
            title="Music Teacher in Noida"
            keyword="music teacher Noida"
            body={[
              "Vocal, guitar, keyboard, tabla lessons. Learning to play an instrument or improving vocal skills requires dedicated, one-on-one guidance.",
              "MOYO offers verified music teachers in Noida for vocal training (Hindustani classical or western), guitar, keyboard, and tabla. Our instructors range from classically trained musicians to contemporary artists. They come to your home, so you don't have to haul a keyboard or guitar across town.",
              "Whether it's for a beginner discovering music or an advanced student refining their technique, you can find the perfect music teacher through our bidding platform."
            ]}
            priceFrom="499"
            cta={{ label: "Book music teacher", href: "https://app.moyointernational.com" }}
          />
          
          <div className="bg-section-alt p-8 rounded-[16px] border border-line shadow-sm">
            <h3 className="text-xl font-bold text-ink mb-3">Also Available</h3>
            <p className="text-muted leading-relaxed">
              MOYO also provides <strong className="text-ink">Pre-Primary Tutors</strong> for Nursery-KG early learning and <strong className="text-ink">Graduation Level Tutors</strong> for specialized college subjects. Find the exact academic support you need, directly in the app.
            </p>
          </div>
        </div>

        {/* Section 5: Pricing */}
        <section id="pricing" className="py-16 md:py-24 bg-page border-y border-line">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-ink mb-8 text-center tracking-tight">Home Tuition Pricing in Noida</h2>
            <PricingTable rows={[
              { service: "Primary Class (1-5)", partTime: "from ₹499", fullTime: "—", note: "Monthly / All subjects" },
              { service: "Secondary Class (9-10)", partTime: "from ₹499", fullTime: "—", note: "Monthly / Per subject" },
              { service: "Senior Secondary (11-12)", partTime: "from ₹499", fullTime: "—", note: "Monthly / Per subject" },
              { service: "Language / Music / Dance", partTime: "from ₹499", fullTime: "—", note: "Monthly (fixed sessions)" },
            ]} />
          </div>
        </section>

        {/* Section 6: Why MOYO */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-4">Why Book Home Tutors on MOYO?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Verified Tutors</h3>
                <p className="text-muted leading-relaxed">We strictly check ID and qualifications before any tutor enters your home.</p>
              </div>
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">1-on-1 Attention</h3>
                <p className="text-muted leading-relaxed">No crowded coaching centers. Your child gets complete, undivided focus.</p>
              </div>
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Set Your Budget</h3>
                <p className="text-muted leading-relaxed">Use our bidding system to propose a monthly tuition rate that works for you.</p>
              </div>
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Read Reviews</h3>
                <p className="text-muted leading-relaxed">Check feedback from other parents in Noida before confirming your booking.</p>
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
              MOYO verified home tutors are available across Noida and Greater Noida, including <strong className="text-ink">Sector 18, 62, 76, 137, 150, 168, Noida Extension and Greater Noida West</strong>.
            </p>
          </div>
        </section>

        {/* Reviews Section Temporarily Hidden */}

        {/* Section 10: FAQ */}
        <div className="px-4 sm:px-6 lg:px-8 bg-white">
          <FAQAccordion faqs={[
            { q: "How much do home tutors charge in Noida?", a: "Pricing depends on the class and subject, starting from ₹499/month. You can set your specific requirement and propose a rate in the app." },
            { q: "Are tutors verified?", a: "Yes — every tutor undergoes strict ID, qualification, and reference checks before they are onboarded." },
            { q: "Do you have tutors for classes 11-12 (PCM/PCB)?", a: "Yes — we have expert senior secondary subject tutors specializing in Science, Commerce, and Humanities streams." },
            { q: "Can I get a foreign language tutor?", a: "Yes — verified tutors are available for French, German, Spanish, and other foreign languages." }
          ]} />
        </div>

        {/* Internal Linking Block */}
        <section className="py-12 bg-section-alt border-t border-line text-center">
          <p className="text-muted mb-6 text-sm uppercase tracking-wider font-semibold">Looking for other services in Noida?</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <Link href="/fitness-trainer-noida" className="text-brand font-medium hover:text-brand-hover hover:underline transition-all">Book Fitness Trainers in Noida</Link>
            <span className="text-line hidden sm:inline">•</span>
            <Link href="/event-services-noida" className="text-brand font-medium hover:text-brand-hover hover:underline transition-all">Book Event Services in Noida</Link>
          </div>
        </section>

        {/* Section 11: Closing CTA */}
        <CTABlock 
          heading="Help your child excel with verified home tuition."
          primaryCta={{ label: "Download the MOYO app", href: "https://app.moyointernational.com" }}
          secondaryCta={{ label: "Book on WhatsApp", href: "https://wa.me/919876543210" }}
        />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
