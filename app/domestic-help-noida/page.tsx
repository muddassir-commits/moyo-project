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
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { Reveal } from "@/components/motion/Reveal";
import Link from "next/link";

export const metadata = generateSeoMetadata({
  title: "Maid, Cook & Nanny Services in Noida | Verified Home Help",
  description: "Book verified maids, cooks, nannies & house help in Noida. Background-checked, fixed pricing, and you set the rate with bidding. Download the MOYO app.",
  path: "/domestic-help-noida",
});

export default function DomesticHelpPage() {
  return (
    <>
      <ServiceJsonLd 
        serviceType="Domestic Help & Home Care"
        description="Verified maids, cooks, nannies and house help in Noida."
      />
      <Header />
      <main>
        <Breadcrumbs trail={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Domestic Help & Home Care", href: "/domestic-help-noida" }
        ]} />

        {/* Section 1: Hero */}
        <Hero 
          h1="Verified Maids, Cooks & Home Help in Noida — On Your Terms"
          subhead="Finding house help in Noida usually means calling a local agent, paying a fat commission, and hoping the person who shows up is who they said they'd be. MOYO does it differently. Every professional is ID-verified. You see the price before you book. And with bidding, you set the rate you want to pay."
          trustChips={[
            "✓ ID-verified",
            "✓ Fixed or bid pricing",
            "✓ Replacement guarantee",
            "✓ Serving all of Noida"
          ]}
          image="/images/domestic-help-hero.jpg"
          primaryCta={{ label: "Download the MOYO app", href: "https://app.moyointernational.com" }}
          secondaryCta={{ label: "Book on WhatsApp", href: "https://wa.me/919876543210" }}
        />

        {/* Section 2: TOC */}
        <section className="bg-page py-4 border-b border-line sticky top-[72px] md:top-[80px] z-40 hidden lg:block shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-5 text-sm font-medium justify-center">
              <span className="text-faint uppercase tracking-wider text-xs font-semibold mr-2">Jump to:</span>
              <a href="#maid" className="text-ink hover:text-brand transition-colors">Maid</a>
              <a href="#cook" className="text-ink hover:text-brand transition-colors">Cook</a>
              <a href="#chef" className="text-ink hover:text-brand transition-colors">Chef</a>
              <a href="#nanny" className="text-ink hover:text-brand transition-colors">Nanny</a>
              <a href="#babysitter" className="text-ink hover:text-brand transition-colors">Babysitter</a>
              <a href="#all-rounder" className="text-ink hover:text-brand transition-colors">All-Rounder</a>
              <a href="#japa" className="text-ink hover:text-brand transition-colors">Japa</a>
              <a href="#gardener" className="text-ink hover:text-brand transition-colors">Gardener</a>
              <a href="#pet-care" className="text-ink hover:text-brand transition-colors">Pet Care</a>
              <a href="#pricing" className="text-brand hover:text-brand-deep transition-colors ml-4 font-bold">Pricing</a>
            </div>
          </div>
        </section>

        {/* Section 3: TrustStrip */}
        <TrustStrip stats={[
          { icon: "🏠", number: "15,000+", label: "Homes Served in Noida" },
          { icon: "🛡️", number: "48 Hr", label: "Verification Process" },
          { icon: "🔄", number: "48 Hr", label: "Replacement Guarantee" },
          { icon: "💬", number: "100%", label: "You Set The Price" }
        ]} />

        {/* Section 4: Service Blocks */}
        <StaggerGroup className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-8 bg-page">
          
          <ServiceBlock 
            id="maid"
            title="Maid Services in Noida"
            keyword="maid service in Noida"
            body={[
              "Whether you need someone for a couple of hours a day or a full-time live-in maid, MOYO connects you with women who've been ID-verified and reference-checked — not just whoever the local agent had free that week.",
              "Part-time maids handle the daily basics: sweeping, mopping, dusting, dishes and laundry. Full-time and live-in maids take on the whole running of the house. You tell the app your hours and what you need; you see profiles and rates; you book.",
              "If your maid stops showing up, you're not stranded — you request a replacement in the app instead of starting the agent hunt all over again."
            ]}
            priceFrom="499"
            cta={{ label: "Book a maid", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="cook"
            title="Cooks for Home in Noida"
            keyword="cook for home Noida"
            body={[
              "A good home cook does more than fill tiffins — they cook the food your family actually eats. On MOYO you can filter cooks by the cuisine you want (North Indian, South Indian, Bengali, Jain, or a specific regional style) and by veg / non-veg preference, so you're not settling for 'she can make everything' and getting nothing done well.",
              "Book a cook for one meal a day, both meals, or full-time. Every cook is verified before onboarding, and you agree the menu and rate up front — no surprises at month-end."
            ]}
            priceFrom="499"
            cta={{ label: "Book a cook", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="chef"
            title="Personal & Party Chefs in Noida"
            keyword="chef for home Noida"
            body={[
              "Hosting at home, or want restaurant-grade food without the restaurant? Book a trained chef through MOYO for a dinner party, a festival meal, or a one-off special occasion.",
              "Tell the app the cuisine, the headcount and the date; get a verified chef who arrives with the skill to match. Book by the event or the day."
            ]}
            cta={{ label: "Book a chef", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="nanny"
            title="Nanny Services in Noida"
            keyword="nanny in Noida"
            body={[
              "Handing your child to someone new is the hardest booking a parent makes — so this is where verification matters most. Every MOYO nanny is background-checked and ID-verified before onboarding, and you can see experience and reviews from other Noida parents before you decide.",
              "Book full-time, part-time or live-in nannies for infants and older children. You set the hours and the rate."
            ]}
            cta={{ label: "Book a nanny", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="babysitter"
            title="Babysitters in Noida"
            keyword="babysitter in Noida"
            body={[
              "Need someone for an evening out, a work trip, or the odd afternoon? Book a verified babysitter by the hour or day — no monthly commitment.",
              "Same verification as full-time nannies, just on your schedule."
            ]}
            cta={{ label: "Book a babysitter", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="all-rounder"
            title="All-Rounder House Help in Noida"
            keyword="all rounder house help Noida"
            body={[
              "One person, the whole house. An all-rounder handles cleaning, cooking and general help together — ideal for smaller homes or anyone who'd rather manage one helper than three.",
              "Book part-time or full-time, verified either way."
            ]}
            cta={{ label: "Book an all-rounder", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="japa"
            title="Japa & Post-Partum Care in Noida"
            keyword="japa maid / post-partum care Noida"
            body={[
              "The weeks after a baby arrives need someone who knows what they're doing — newborn care, feeding support, and traditional post-partum care for the mother.",
              "MOYO's Japa maids are experienced in exactly this and verified before they enter your home, so a new family gets help it can trust at the point it's needed most."
            ]}
            cta={{ label: "Book Japa care", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="gardener"
            title="Gardeners in Noida"
            keyword="gardener in Noida"
            body={[
              "Balcony garden, terrace setup, or a full lawn to maintain — book a gardener for one-time work or a regular weekly visit.",
              "Planting, pruning, lawn care and upkeep, done by someone who does it for a living."
            ]}
            cta={{ label: "Book a gardener", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="pet-care"
            title="Pet & Animal Care in Noida"
            keyword="pet/animal caretaker Noida"
            body={[
              "Travelling, or just need a hand? Book a pet caretaker or trainer for walking, feeding, sitting and basic training — verified people, for the family member who can't book for themselves."
            ]}
            cta={{ label: "Book pet care", href: "https://app.moyointernational.com" }}
          />
        </StaggerGroup>

        {/* Section 5: Pricing */}
        <Reveal>
          <section id="pricing" className="py-16 md:py-24 bg-section-alt border-y border-line">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-ink mb-8 text-center tracking-tight">Domestic Help Pricing in Noida</h2>
              <PricingTable rows={[
                { service: "Maid", partTime: "₹1999/mo", fullTime: "₹8999/mo", note: "Set your rate" },
                { service: "Cook", partTime: "₹2499/mo", fullTime: "₹10999/mo", note: "Set your rate" },
                { service: "Nanny", partTime: "₹2999/mo", fullTime: "₹11999/mo", note: "Set your rate" },
                { service: "All-Rounder", partTime: "₹3499/mo", fullTime: "₹13999/mo", note: "Set your rate" },
                { service: "Japa", partTime: "—", fullTime: "₹29999/confinement", note: "Set your rate" },
              ]} />
            </div>
          </section>
        </Reveal>

        {/* Section 6: Why MOYO */}
        <section className="py-16 md:py-24 bg-page">
          <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-4">Why Book Domestic Help on MOYO?</h2>
            </div>
            <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-8 card-base card-hover">
                <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center text-brand text-xl font-black mb-6">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Verified before they enter</h3>
                <p className="text-muted leading-relaxed">ID, address and reference checks in 48 hours — not "trust me" from an agent.</p>
              </div>
              <div className="p-8 card-base card-hover">
                <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center text-brand text-xl font-black mb-6">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">You set the price</h3>
                <p className="text-muted leading-relaxed">Bidding puts the rate in your hands. No fixed agent markup.</p>
              </div>
              <div className="p-8 card-base card-hover">
                <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center text-brand text-xl font-black mb-6">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Replacement, not restart</h3>
                <p className="text-muted leading-relaxed">If your helper can't continue, request a replacement in-app instead of hunting again.</p>
              </div>
              <div className="p-8 card-base card-hover">
                <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center text-brand text-xl font-black mb-6">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Fair wages = help that stays</h3>
                <p className="text-muted leading-relaxed">Workers keep more (no double commission), so they stick around longer. Lower turnover for you.</p>
              </div>
              <div className="p-8 card-base card-hover">
                <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center text-brand text-xl font-black mb-6">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Everything in one app</h3>
                <p className="text-muted leading-relaxed">Maid today, cook next week, electrician next month — same verified platform, same account.</p>
              </div>
            </StaggerGroup>
          </Reveal>
        </section>

        {/* Section 7: How it Works */}
        <StepsHowItWorks />

        {/* Section 8: Coverage */}
        <section className="py-16 md:py-24 bg-section-alt border-y border-line">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-ink mb-6">Serving Your Neighbourhood</h2>
            <p className="text-lg text-muted leading-relaxed">
              MOYO domestic help is available across Noida and Greater Noida, including <strong className="text-ink">Sector 18, 62, 76, 137, 150, 168, Noida Extension and Greater Noida West</strong>. Not sure if we cover your sector? Open the app and enter your location.
            </p>
          </div>
        </section>

        {/* Reviews Section Temporarily Hidden */}

        {/* Section 10: FAQ */}
        <div className="px-4 sm:px-6 lg:px-8 bg-page py-16 md:py-24">
          <FAQAccordion faqs={[
            { q: "How much does a maid cost in Noida?", a: "Part-time maids on MOYO start from around ₹1999/month depending on hours and work. Because MOYO uses bidding, you can propose your own rate and the maid confirms — so you're not locked into a fixed agent price." },
            { q: "Are MOYO's maids and nannies verified?", a: "Yes. Every domestic worker is ID-verified, address-verified and reference-checked before they're onboarded — usually within 48 hours. Nannies and babysitters go through background checks." },
            { q: "What if my maid stops coming?", a: "Request a replacement directly in the app. You're not left restarting the search with a local agent." },
            { q: "Can I book a live-in maid or cook in Noida?", a: "Yes — full-time and live-in options are available for maids, cooks, nannies and all-rounders. Set your requirement in the app." },
            { q: "Do you cover Greater Noida West?", a: "Yes. MOYO serves Noida and Greater Noida including Noida Extension and Greater Noida West. Enter your location in the app to confirm." },
            { q: "How is MOYO different from a local bai/agent?", a: "No middleman commission, verified workers, fixed or bid pricing you can see upfront, in-app replacement, and reviews from real Noida customers. A local agent gives you none of that." }
          ]} />
        </div>

        {/* Internal Linking Block */}
        <section className="py-12 bg-section-alt border-t border-line text-center">
          <p className="text-muted mb-6 text-sm uppercase tracking-wider font-semibold">Looking for other services in Noida?</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <Link href="/home-cleaning-noida" className="text-brand font-medium hover:text-brand-hover hover:underline transition-all">Book Home Cleaning Services in Noida</Link>
            <span className="text-line hidden sm:inline">•</span>
            <Link href="/home-repair-noida" className="text-brand font-medium hover:text-brand-hover hover:underline transition-all">Book Home Repair Services in Noida</Link>
            <span className="text-line hidden sm:inline">•</span>
            <Link href="/home-nursing-noida" className="text-brand font-medium hover:text-brand-hover hover:underline transition-all">Book Home Nursing Services in Noida</Link>
          </div>
        </section>

        {/* Section 11: Closing CTA */}
        <CTABlock 
          heading="Stop chasing agents. Book verified home help in Noida on your terms."
          primaryCta={{ label: "Download the MOYO app", href: "https://app.moyointernational.com" }}
          secondaryCta={{ label: "Book on WhatsApp", href: "https://wa.me/919876543210" }}
        />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
