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
  title: "Event Services in Noida | Photographer, DJ, Planner, Bartender — MOYO",
  description: "Book event photographers, DJs, singers, planners, anchors & bartenders in Noida. Verified professionals for every occasion. Download the MOYO app.",
  path: "/event-services-noida",
});

export default function EventServicesPage() {
  return (
    <>
      <ServiceJsonLd 
        serviceType="Events & Entertainment"
        description="Event photographers, DJs, singers, planners, anchors, waitstaff, and bartenders in Noida."
      />
      <Header />
      <main>
        <Breadcrumbs trail={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Events & Entertainment", href: "/event-services-noida" }
        ]} />

        {/* Section 1: Hero */}
        <Hero 
          h1="Event Services in Noida — Photographers, DJs, Planners & More"
          subhead="From a house party to a full wedding, an event is only as good as the people running it. MOYO brings verified photographers, DJs, singers, planners, anchors and service staff together in one app, so you're not chasing ten vendors on ten numbers."
          trustChips={[
            "✓ Verified professionals",
            "✓ Upfront pricing",
            "✓ Serving all of Noida"
          ]}
          image="/images/event-services-hero.jpg"
          primaryCta={{ label: "Download the App", href: "https://app.moyointernational.com" }}
          secondaryCta={{ label: "Book on WhatsApp", href: "https://wa.me/919876543210" }}
        />

        {/* Section 2: TOC */}
        <section className="bg-page py-4 border-b border-line sticky top-[72px] md:top-[80px] z-40 hidden lg:block shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-5 text-sm font-medium justify-center">
              <span className="text-faint uppercase tracking-wider text-xs font-semibold mr-2">Jump to:</span>
              <a href="#dj" className="text-ink hover:text-brand transition-colors">DJ</a>
              <a href="#photo" className="text-ink hover:text-brand transition-colors">Photographer</a>
              <a href="#planner" className="text-ink hover:text-brand transition-colors">Event Planner</a>
              <a href="#singer" className="text-ink hover:text-brand transition-colors">Live Singer</a>
              <a href="#anchor" className="text-ink hover:text-brand transition-colors">Anchor</a>
              <a href="#staff" className="text-ink hover:text-brand transition-colors">Bartender & Waitstaff</a>
              <a href="#pricing" className="text-brand hover:text-brand-deep transition-colors ml-4 font-bold">Pricing</a>
            </div>
          </div>
        </section>

        {/* Section 3: TrustStrip */}
        <TrustStrip stats={[
          { icon: "🎉", number: "[X]", label: "Event Bookings in Noida" },
          { icon: "🛡️", number: "48 Hr", label: "Verification Process" },
          { icon: "⭐", number: "[X]", label: "Average Rating" },
          { icon: "📍", number: "100+", label: "Noida Sectors Served" }
        ]} />

        {/* Section 4: Service Blocks */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-8">
          
          <ServiceBlock 
            id="dj"
            title="Disc Jockey (DJ) in Noida"
            keyword="DJ for party Noida"
            body={[
              "DJ + setup for weddings, parties, corporate. The right music can make or break an event. But hiring a reliable DJ who understands the crowd and shows up with the right equipment is often a hassle.",
              "MOYO connects you with verified, professional DJs across Noida for everything from intimate house parties in Sector 137 to massive corporate galas in Greater Noida. Our DJs arrive with full sound setups—including speakers, mixers, and optional lighting—so you don't have to rent equipment separately.",
              "Whether you need an energetic Bollywood set for a sangeet or sophisticated lounge music for a networking event, you can review DJ profiles, listen to past mixes, and agree on a clear, upfront price before you book."
            ]}
            priceFrom="[X]"
            cta={{ label: "Book disc jockey (dj)", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="photo"
            title="Event Photographer in Noida"
            keyword="event photographer Noida"
            body={[
              "Weddings, birthdays, corporate — packages by event. You shouldn't have to rely on smartphone snaps to remember the most important days of your life.",
              "MOYO provides professional event photographers in Noida who know exactly how to capture candid moments, structured family portraits, and dynamic event coverage. Whether you are hosting a child's first birthday party, a silver jubilee anniversary, or a multi-day wedding, we match you with vetted photographers whose style fits your vision.",
              "Avoid the endless back-and-forth negotiations with studios. You can view comprehensive portfolios in the app, select a photographer whose work you love, and lock in a fixed package price for the exact hours you need."
            ]}
            priceFrom="[X]"
            cta={{ label: "Book event photographer", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="planner"
            title="Event Planner in Noida"
            keyword="event planner Noida"
            body={[
              "End-to-end planning: decor, vendors, coordination. Planning an event takes hundreds of hours of coordinating decorators, caterers, and venues. If you want to actually enjoy your own party, you need a professional to handle the logistics.",
              "MOYO connects you with experienced event planners in Noida who offer end-to-end management for weddings, corporate retreats, and milestone birthdays. They manage the stress of vendor coordination, venue setup, timeline execution, and on-the-day problem solving.",
              "Set your budget expectations in the app and get matched with a verified planner who can translate your ideas into a seamless reality, ensuring you are a guest at your own event."
            ]}
            priceFrom="[X]"
            cta={{ label: "Book event planner", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="singer"
            title="Singer in Noida"
            keyword="singer for events Noida"
            body={[
              "Live singers for sangeet, parties, events. Live music adds an unforgettable, premium touch to any gathering. MOYO helps you hire talented, verified live singers for events across Noida.",
              "Whether you want a soulful Ghazal singer for a quiet evening, a high-energy performer for a pre-wedding Sangeet, or an acoustic artist for a cafe launch, we have a diverse roster of vocalists. You don't have to rely on word-of-mouth recommendations that might fall through at the last minute.",
              "Browse through video portfolios, read reviews from previous hosts, and set a fixed performance fee through our transparent bidding system."
            ]}
            priceFrom="[X]"
            cta={{ label: "Book singer", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="anchor"
            title="Anchor in Noida"
            keyword="anchor emcee Noida"
            body={[
              "Emcees & hosts for events. A skilled anchor keeps the energy high, manages the flow of the event, and ensures the audience stays engaged.",
              "Whether you are organizing a formal corporate award ceremony, a lively wedding sangeet, or a mall activation event in Sector 18, MOYO connects you with professional emcees in Noida. Our verified hosts are adept at crowd control, script delivery, and impromptu engagement.",
              "Review their past hosting videos in the app, ensure their style matches your event's tone, and book them with complete confidence and transparent pricing."
            ]}
            priceFrom="[X]"
            cta={{ label: "Book anchor", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="video"
            title="Videographer in Noida"
            keyword="videographer Noida"
            body={[
              "Cinematic event videography. While photos capture a moment, a high-quality video captures the emotion, movement, and sound of your special day.",
              "MOYO connects you with professional videographers in Noida specializing in cinematic event coverage. From stunning wedding films with drone footage to crisp, multi-camera corporate event recaps, our vetted professionals have the high-end gear and editing skills required.",
              "Review their showreels in the app, discuss your vision, and secure a videographer at a price you agree upon upfront—no hidden post-production fees."
            ]}
            priceFrom="[X]"
            cta={{ label: "Book videographer", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="staff"
            title="Waiter/Waitress in Noida"
            keyword="waiter on hire Noida"
            body={[
              "Trained service staff for parties. Hosting a dinner party or a large celebration means you should be mingling with your guests, not constantly running to the kitchen to fetch drinks or clear plates.",
              "MOYO provides trained, professional waitstaff on hire in Noida. Our verified waiters and waitresses are experienced in serving at private house parties, corporate buffets, and wedding receptions. They ensure food is served elegantly and the venue remains tidy throughout the event.",
              "Book reliable service staff by the hour or for the entire day, knowing they have been thoroughly ID-checked by MOYO."
            ]}
            priceFrom="[X]"
            cta={{ label: "Book waiter/waitress", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="bartender"
            title="Bartender in Noida"
            keyword="bartender on hire Noida"
            body={[
              "Professional bartenders + optional bar setup. Elevate your next party with a professional bartender who knows how to craft the perfect cocktail.",
              "MOYO connects you with skilled, verified bartenders in Noida who can manage your home bar or set up a dedicated cocktail station for larger events. From classic mixes to custom flair bartending for a memorable night, our professionals handle the drinks so you can enjoy the party.",
              "You can even request optional bar setups and glassware. Review their experience, set the rate, and ensure your guests are well-served all night."
            ]}
            priceFrom="[X]"
            cta={{ label: "Book bartender", href: "https://app.moyointernational.com" }}
          />
          
          <div className="bg-section-alt p-8 rounded-[16px] border border-line shadow-sm">
            <h3 className="text-xl font-bold text-ink mb-3">Also Available on MOYO</h3>
            <p className="text-muted leading-relaxed">
              We also offer specialized entertainment options including a <strong className="text-ink">Pianist, Guitarist, Drummer, Harmonium Player, Dancer, and Stage Artist</strong> for hire in Noida. Find the exact performer you need through our verified marketplace.
            </p>
          </div>
        </div>

        {/* Section 5: Pricing */}
        <section id="pricing" className="py-16 md:py-24 bg-page border-y border-line">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-ink mb-8 text-center tracking-tight">Event Services Pricing in Noida</h2>
            <PricingTable rows={[
              { service: "DJ (with sound setup)", partTime: "from ₹[X]", fullTime: "—", note: "Per event package" },
              { service: "Event Photographer", partTime: "from ₹[X]", fullTime: "—", note: "Per day / Hours" },
              { service: "Waitstaff / Bartender", partTime: "from ₹[X]", fullTime: "—", note: "Per shift" },
              { service: "Live Singer / Anchor", partTime: "from ₹[X]", fullTime: "—", note: "Per performance" },
            ]} />
          </div>
        </section>

        {/* Section 6: Why MOYO */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-4">Why Book Event Services on MOYO?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">All in One App</h3>
                <p className="text-muted leading-relaxed">Stop juggling ten different numbers. Book your photographer, DJ, and waitstaff all in one place.</p>
              </div>
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">See Portfolios</h3>
                <p className="text-muted leading-relaxed">Review the artist's past work, mixes, and showreels before you make a decision.</p>
              </div>
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Verified Pros</h3>
                <p className="text-muted leading-relaxed">Every professional and vendor undergoes a strict identity and background check.</p>
              </div>
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Set Your Budget</h3>
                <p className="text-muted leading-relaxed">Use our bidding system to propose a rate that fits your event's budget perfectly.</p>
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
              MOYO event professionals are available across Noida and Greater Noida, including <strong className="text-ink">Sector 18, 62, 76, 137, 150, 168, Noida Extension and Greater Noida West</strong>.
            </p>
          </div>
        </section>

        {/* Reviews Section Temporarily Hidden */}

        {/* Section 10: FAQ */}
        <div className="px-4 sm:px-6 lg:px-8 bg-white">
          <FAQAccordion faqs={[
            { q: "Can I book a wedding photographer in Noida?", a: "Yes — we have event and wedding photographers offering comprehensive packages. You can review their portfolios directly in the app." },
            { q: "Do you provide DJs for parties?", a: "Yes — MOYO connects you with professional DJs who provide full sound and optional lighting setups for house parties, weddings, and corporate events." },
            { q: "Can I book bartenders and waiters?", a: "Yes — trained service staff and professional bartenders are available on hire for both small and large gatherings." },
            { q: "How far in advance should I book?", a: "For large events like weddings, we recommend booking early. You can check vendor availability for your specific date in the app." }
          ]} />
        </div>

        {/* Internal Linking Block */}
        <section className="py-12 bg-section-alt border-t border-line text-center">
          <p className="text-muted mb-6 text-sm uppercase tracking-wider font-semibold">Looking for other services in Noida?</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <Link href="/beauty-services-noida" className="text-brand font-medium hover:text-brand-hover hover:underline transition-all">Book Beauty Services in Noida</Link>
            <span className="text-line hidden sm:inline">•</span>
            <Link href="/pandit-services-noida" className="text-brand font-medium hover:text-brand-hover hover:underline transition-all">Book Pandit Services in Noida</Link>
            <span className="text-line hidden sm:inline">•</span>
            <Link href="/home-tutor-noida" className="text-brand font-medium hover:text-brand-hover hover:underline transition-all">Book Home Tutors in Noida</Link>
          </div>
        </section>

        {/* Section 11: Closing CTA */}
        <CTABlock 
          heading="Every event vendor, in one app."
          primaryCta={{ label: "Download the MOYO app", href: "https://app.moyointernational.com" }}
          secondaryCta={{ label: "Book on WhatsApp", href: "https://wa.me/919876543210" }}
        />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
