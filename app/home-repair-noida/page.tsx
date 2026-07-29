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
  title: "Home Repair & Appliance Service in Noida | AC, Electrician, Plumber",
  description: "Book electricians, plumbers, AC, fridge & washing machine repair in Noida. Verified technicians, genuine parts, upfront quote. Download the MOYO app.",
  path: "/home-repair-noida",
});

export default function HomeRepairPage() {
  return (
    <>
      <ServiceJsonLd 
        serviceType="Home Repairs & Appliance Service"
        description="Home repair services in Noida including AC, electrician, plumber, fridge and washing machine repair."
      />
      <Header />
      <main>
        <Breadcrumbs trail={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Home Repairs", href: "/home-repair-noida" }
        ]} />

        {/* Section 1: Hero */}
        <Hero 
          h1="Home Repairs & Appliance Service in Noida — Verified Techs, Upfront Quotes"
          subhead="A leaking tap at 9pm, an AC that stopped cooling in May, a fridge that's gone warm — you don't want to gamble on whichever number you found on a poster. MOYO's technicians are verified, quote before they start, and use genuine parts. Electrician, plumber, AC, fridge, washing machine, TV — one app, no call-out surprises."
          trustChips={[
            "✓ Verified technicians",
            "✓ Upfront pricing",
            "✓ Serving all of Noida"
          ]}
          image="/images/home-repair-hero.jpg"
          primaryCta={{ label: "Download the App", href: "https://app.moyointernational.com" }}
          secondaryCta={{ label: "Book on WhatsApp", href: "https://wa.me/919876543210" }}
        />

        {/* Section 2: TOC */}
        <section className="bg-page py-4 border-b border-line sticky top-[72px] md:top-[80px] z-40 hidden lg:block shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-4 text-sm font-medium justify-center">
              <span className="text-faint uppercase tracking-wider text-xs font-semibold mr-1">Jump to:</span>
              <a href="#ac" className="text-ink hover:text-brand transition-colors">AC</a>
              <a href="#electrician" className="text-ink hover:text-brand transition-colors">Electrician</a>
              <a href="#plumber" className="text-ink hover:text-brand transition-colors">Plumber</a>
              <a href="#washing-machine" className="text-ink hover:text-brand transition-colors">Washing Machine</a>
              <a href="#fridge" className="text-ink hover:text-brand transition-colors">Fridge</a>
              <a href="#tv" className="text-ink hover:text-brand transition-colors">TV</a>
              <a href="#fan" className="text-ink hover:text-brand transition-colors">Fan</a>
              <a href="#light" className="text-ink hover:text-brand transition-colors">Lights</a>
              <a href="#stove" className="text-ink hover:text-brand transition-colors">Stove</a>
              <a href="#bike" className="text-ink hover:text-brand transition-colors">Bike</a>
              <a href="#car" className="text-ink hover:text-brand transition-colors">Car</a>
              <a href="#gadget" className="text-ink hover:text-brand transition-colors">Gadget</a>
              <a href="#pricing" className="text-brand hover:text-brand-deep transition-colors ml-3 font-bold">Pricing</a>
            </div>
          </div>
        </section>

        {/* Section 3: TrustStrip */}
        <TrustStrip stats={[
          { icon: "🔧", number: "[X]", label: "Repair Bookings in Noida" },
          { icon: "🛡️", number: "48 Hr", label: "Verification Process" },
          { icon: "⭐", number: "[X]", label: "Average Rating" },
          { icon: "📍", number: "100+", label: "Noida Sectors Served" }
        ]} />

        {/* Section 4: Service Blocks */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-8">
          
          <ServiceBlock 
            id="ac"
            title="AC Technician in Noida"
            keyword="AC repair service Noida"
            body={[
              "Foam-jet service, gas refill, cooling & installation. Genuine parts, upfront quote. Noida summers are brutal, and a broken AC isn't just an inconvenience—it's an emergency. But calling the local mechanic often means waiting days, only to be hit with surprise charges for gas refills you might not even need.",
              "MOYO connects you with verified AC technicians across Sector 62, Noida Extension, and beyond. Whether you need a regular foam-jet service before summer, a complete installation, or emergency cooling repair, our experts provide a clear diagnosis and quote before any work starts.",
              "We ensure only genuine spare parts are used, from compressors to copper piping. You propose the price through our bidding system, or accept a fixed quote. No hidden fees."
            ]}
            priceFrom="[X]"
            cta={{ label: "Book AC technician", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="electrician"
            title="Electrician in Noida"
            keyword="electrician in Noida"
            body={[
              "Wiring, switches, fans, MCB, short circuits — quoted before work starts. A sparking switch or a tripped MCB at 9 PM shouldn't mean a panic call to an unknown number on a flyer. Electrical work requires certified expertise.",
              "MOYO provides ID-verified electricians who arrive equipped to handle everything from installing a new chandelier in Sector 150 to fixing a dangerous short circuit. They diagnose the issue, provide a transparent quote for the fix and the parts, and wait for your approval before proceeding.",
              "No arbitrary call-out charges. You get safe, reliable electrical work done by professionals, not amateurs."
            ]}
            priceFrom="[X]"
            cta={{ label: "Book electrician", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="plumber"
            title="Plumber in Noida"
            keyword="plumber in Noida"
            body={[
              "Leaks, taps, blockages, geysers, fittings. No call-out surprise charges. A dripping tap might seem minor, but a burst pipe or a blocked drain can flood your kitchen in minutes.",
              "MOYO's professional plumbers handle the complete range of plumbing issues in Noida. From fixing a running toilet and unblocking kitchen sinks to installing new geysers and bathroom fittings, they come with the right tools.",
              "We don't charge random call-out fees just to look at the problem. You get an upfront quote for the repair. Every plumber is background-checked, so you don't have to worry about safety when letting them into your home."
            ]}
            priceFrom="[X]"
            cta={{ label: "Book plumber", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="washing-machine"
            title="Washing Machine Repair in Noida"
            keyword="washing machine repair Noida"
            body={[
              "Front & top load, all brands. Diagnosis + genuine spares. When your washing machine starts making a grinding noise or stops draining, the laundry piles up fast.",
              "MOYO offers doorstep repair for all major brands and models, whether it's a top-load agitator or a front-load inverter machine. Our technicians quickly diagnose issues like broken belts, faulty motherboards, or drum problems right in your utility area.",
              "You'll receive an upfront quote including the cost of any genuine spare parts required. No hauling your heavy appliance to a repair shop. Just reliable doorstep repair in Sector 76 or Greater Noida West."
            ]}
            priceFrom="[X]"
            cta={{ label: "Book washing machine repair", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="fridge"
            title="Refrigerator Mechanic in Noida"
            keyword="fridge repair Noida"
            body={[
              "Single/double door, no-cooling, gas, compressor — at home. A fridge that stops cooling means ruined groceries. You need someone fast and skilled.",
              "MOYO's refrigerator mechanics repair single-door, double-door, and side-by-side models directly at your home. Whether it's a gas leak, a blown compressor, or a faulty thermostat, they have the expertise to fix it.",
              "They don't take your appliance away for weeks. They diagnose the fault on the spot, give you the exact cost, and use genuine parts to restore your fridge's cooling."
            ]}
            priceFrom="[X]"
            cta={{ label: "Book refrigerator mechanic", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="tv"
            title="TV Technician in Noida"
            keyword="TV repair Noida"
            body={[
              "LED/LCD/Smart TV panel, display & board repair at home. Is your smart TV showing lines across the display or just refusing to turn on?",
              "MOYO's specialized TV technicians provide doorstep repair for LED, LCD, and Smart TVs of all brands. They can handle motherboard replacements, panel issues, and sound problems without you having to transport your fragile TV across Noida traffic.",
              "You get a clear diagnosis and a firm quote before they touch the internal circuits."
            ]}
            cta={{ label: "Book TV technician", href: "https://app.moyointernational.com" }}
          />
          
          <ServiceBlock 
            id="fan"
            title="Fan Technician in Noida"
            keyword="fan repair Noida"
            body={[
              "Ceiling, exhaust, wall fans — repair or replace. A slow ceiling fan or a noisy exhaust fan in the kitchen can be incredibly frustrating.",
              "MOYO's verified electricians also specialize in fan repair and installation. Whether you need a simple capacitor replaced in a ceiling fan in Sector 137 or a new heavy-duty exhaust fan installed in your kitchen, they get it done safely. No job is too small."
            ]}
            cta={{ label: "Book fan technician", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="light"
            title="Light Technician in Noida"
            keyword="light fitting Noida"
            body={[
              "Lights, chandeliers, panel & decorative fitting. Upgrading your home's lighting or installing a heavy chandelier requires care and precision.",
              "MOYO connects you with technicians who specialize in light fittings. From simple LED panel lights in your ceiling to complex decorative installations for a festival, they ensure the wiring is safe and the fixtures are securely mounted."
            ]}
            cta={{ label: "Book light technician", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="stove"
            title="Stove Repair in Noida"
            keyword="gas stove repair Noida"
            body={[
              "Gas stove & hob — burners, igniters, leaks. A leaking gas stove is a serious hazard, and weak burners make cooking a chore.",
              "MOYO provides specialized mechanics who can safely repair traditional gas stoves and modern built-in hobs. They fix broken auto-igniters, clean clogged burners, and ensure there are absolutely no gas leaks. Don't risk DIY fixes in the kitchen—book a verified pro."
            ]}
            cta={{ label: "Book stove repair", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="bike"
            title="Bike Service in Noida"
            keyword="bike service at home Noida"
            body={[
              "Doorstep bike service, oil change, general check. Finding the time to drop your bike at a service center and waiting around is a hassle.",
              "MOYO brings the service center to your parking lot in Noida. Book a doorstep bike service for oil changes, brake tightening, and general check-ups. Our mechanics bring all necessary tools and genuine oils."
            ]}
            cta={{ label: "Book bike service", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="car"
            title="Car Service in Noida"
            keyword="car service at home Noida"
            body={[
              "At-home car wash, minor service & detailing. Keep your car looking showroom-new without leaving your driveway.",
              "MOYO offers doorstep car washing, interior detailing, and minor servicing. Whether you need a deep interior vacuum and upholstery clean before a road trip or just a thorough exterior wash, our professionals use the right cleaning agents and microfiber cloths to protect your paint."
            ]}
            cta={{ label: "Book car service", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="gadget"
            title="Gadget Repair in Noida"
            keyword="gadget repair Noida"
            body={[
              "Mobile, laptop & small-appliance repair. A cracked phone screen or a slow laptop shouldn't mean a trip to a crowded market in Sector 18.",
              "MOYO connects you with gadget repair experts who come to your home or office. They diagnose issues, replace screens and batteries, and fix small appliances like microwaves and mixers with upfront pricing and genuine parts."
            ]}
            cta={{ label: "Book gadget repair", href: "https://app.moyointernational.com" }}
          />

          <div className="bg-section-alt p-8 rounded-[16px] border border-line shadow-sm">
            <h3 className="text-xl font-bold text-ink mb-3">Also Available</h3>
            <p className="text-muted leading-relaxed">
              Need more specific repairs? MOYO also connects you with professionals for Lift Maintenance and Toy Repair across Noida. Whether your society needs a reliable lift technician or you want to fix a high-end electronic toy, our verified experts handle it all with fixed upfront pricing.
            </p>
          </div>
        </div>

        {/* Section 5: Pricing */}
        <section id="pricing" className="py-16 md:py-24 bg-page border-y border-line">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-ink mb-8 text-center tracking-tight">Home Repair Pricing in Noida</h2>
            <PricingTable rows={[
              { service: "AC Service/Repair", partTime: "from ₹[X]", fullTime: "—", note: "Quote after diagnosis" },
              { service: "Electrician Visit", partTime: "from ₹[X]", fullTime: "—", note: "Quote upfront" },
              { service: "Plumbing Repair", partTime: "from ₹[X]", fullTime: "—", note: "Quote upfront" },
              { service: "Washing Machine / Fridge", partTime: "from ₹[X]", fullTime: "—", note: "Genuine parts used" },
              { service: "TV / Gadget Repair", partTime: "from ₹[X]", fullTime: "—", note: "Set your rate" },
            ]} />
          </div>
        </section>

        {/* Section 6: Why MOYO */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-4">Why Book Home Repairs on MOYO?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Quote Before Work Starts</h3>
                <p className="text-muted leading-relaxed">You approve the exact price before anyone opens a panel. No surprises.</p>
              </div>
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Genuine Spare Parts</h3>
                <p className="text-muted leading-relaxed">We use authentic replacements, not cheap roadside substitutes that break in a month.</p>
              </div>
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Verified Technicians</h3>
                <p className="text-muted leading-relaxed">Every mechanic is ID-checked and skill-tested before they knock on your door.</p>
              </div>
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">All Appliances, One App</h3>
                <p className="text-muted leading-relaxed">Stop hunting for a different guy each time. Everything from AC to TV is handled here.</p>
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
              MOYO repair services are available across Noida and Greater Noida, including <strong className="text-ink">Sector 18, 62, 76, 137, 150, 168, Noida Extension and Greater Noida West</strong>. Not sure if we cover your sector? Open the app and enter your location.
            </p>
          </div>
        </section>

        {/* Reviews Section Temporarily Hidden */}

        {/* Section 10: FAQ */}
        <div className="px-4 sm:px-6 lg:px-8 bg-white">
          <FAQAccordion faqs={[
            { q: "How much does AC service cost in Noida?", a: "A standard AC service starts from ₹[X]; repairs are quoted after diagnosis. You approve the quote before any work begins." },
            { q: "Do you use genuine spare parts?", a: "Yes — our technicians use only genuine spares for appliance repair, and the exact price is shown to you before replacement." },
            { q: "Is there a visit/inspection charge?", a: "Diagnosis is quoted upfront with no hidden call-out surprise charges. You always know what you'll pay." },
            { q: "Which appliance brands do you repair?", a: "Our experts repair all major brands for AC, fridge, washing machine, TV, and other home appliances." },
            { q: "Can I get same-day repair in Noida?", a: "Often yes, depending on technician availability in your specific sector. You can check live slots directly in the app." }
          ]} />
        </div>

        {/* Internal Linking Block */}
        <section className="py-12 bg-section-alt border-t border-line text-center">
          <p className="text-muted mb-6 text-sm uppercase tracking-wider font-semibold">Looking for other services in Noida?</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <Link href="/home-cleaning-noida" className="text-brand font-medium hover:text-brand-hover hover:underline transition-all">Book Home Cleaning Services in Noida</Link>
            <span className="text-line hidden sm:inline">•</span>
            <Link href="/construction-services-noida" className="text-brand font-medium hover:text-brand-hover hover:underline transition-all">Book Construction Services in Noida</Link>
            <span className="text-line hidden sm:inline">•</span>
            <Link href="/domestic-help-noida" className="text-brand font-medium hover:text-brand-hover hover:underline transition-all">Book Domestic Help Services in Noida</Link>
          </div>
        </section>

        {/* Section 11: Closing CTA */}
        <CTABlock 
          heading="Get your home repaired by verified experts today."
          primaryCta={{ label: "Download the MOYO app", href: "https://app.moyointernational.com" }}
          secondaryCta={{ label: "Book on WhatsApp", href: "https://wa.me/919876543210" }}
        />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
