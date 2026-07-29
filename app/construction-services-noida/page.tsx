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
  title: "Painter, Carpenter, Tiles & Interior Design in Noida | MOYO",
  description: "Book painters, carpenters, tile & waterproofing workers, and interior designers in Noida. Verified, quoted upfront. Download the MOYO app.",
  path: "/construction-services-noida",
});

export default function ConstructionServicesPage() {
  return (
    <>
      <ServiceJsonLd 
        serviceType="Construction & Interiors"
        description="Book painters, carpenters, tile workers, interior designers, and construction labour in Noida."
      />
      <Header />
      <main>
        <Breadcrumbs trail={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Construction & Interiors", href: "/construction-services-noida" }
        ]} />

        {/* Section 1: Hero */}
        <Hero 
          h1="Construction, Interiors & Home Improvement in Noida"
          subhead="Whether it's a single room repaint or a full home interior, you want skilled hands and a clear quote — not a vague 'ho jayega'. MOYO connects you with verified painters, carpenters, tile and waterproofing workers, and interior designers across Noida."
          trustChips={[
            "✓ Verified professionals",
            "✓ Upfront pricing",
            "✓ Serving all of Noida"
          ]}
          image="/images/construction-services-hero.jpg"
          primaryCta={{ label: "Download the App", href: "https://app.moyointernational.com" }}
          secondaryCta={{ label: "Book on WhatsApp", href: "https://wa.me/919876543210" }}
        />

        {/* Section 2: TOC */}
        <section className="bg-page py-4 border-b border-line sticky top-[72px] md:top-[80px] z-40 hidden lg:block shadow-sm overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-5 text-sm font-medium">
              <span className="text-faint uppercase tracking-wider text-xs font-semibold mr-2 shrink-0">Jump to:</span>
              <a href="#painter" className="text-ink hover:text-brand transition-colors">Painter</a>
              <a href="#carpenter" className="text-ink hover:text-brand transition-colors">Carpenter</a>
              <a href="#tile-worker" className="text-ink hover:text-brand transition-colors">Tile Worker</a>
              <a href="#false-ceiling" className="text-ink hover:text-brand transition-colors">False Ceiling</a>
              <a href="#waterproofing" className="text-ink hover:text-brand transition-colors">Waterproofing</a>
              <a href="#interior-designer" className="text-ink hover:text-brand transition-colors">Interior Designer</a>
              <a href="#mason" className="text-ink hover:text-brand transition-colors">Mason</a>
              <a href="#welder" className="text-ink hover:text-brand transition-colors">Welder</a>
              <a href="#polisher" className="text-ink hover:text-brand transition-colors">Polisher</a>
              <a href="#fabricator" className="text-ink hover:text-brand transition-colors">Fabricator</a>
              <a href="#architect" className="text-ink hover:text-brand transition-colors">Architect</a>
              <a href="#general-labour" className="text-ink hover:text-brand transition-colors">Labour</a>
              <a href="#pricing" className="text-brand hover:text-brand-deep transition-colors ml-4 font-bold">Pricing</a>
            </div>
          </div>
        </section>

        {/* Section 3: TrustStrip */}
        <TrustStrip stats={[
          { icon: "🏗️", number: "4.8/5", label: "Construction Bookings in Noida" },
          { icon: "🛡️", number: "48 Hr", label: "Verification Process" },
          { icon: "⭐", number: "4.8/5", label: "Average Rating" },
          { icon: "📍", number: "100+", label: "Noida Sectors Served" }
        ]} />

        {/* Section 4: Service Blocks */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-8">
          
          <ServiceBlock 
            id="painter"
            title="Painter in Noida"
            keyword="painter in Noida"
            body={[
              "Interior & exterior painting — POP, texture, waterproof. Quoted upfront. Giving your home a fresh look shouldn't involve endless haggling over material costs and daily wages.",
              "MOYO connects you with verified professional painters in Noida who specialize in everything from simple whitewashing and touch-ups to premium texture painting and exterior weatherproofing. Whether you're repainting a newly rented flat in Sector 137 or giving your independent house in Sector 62 a complete makeover, our painters provide clear, upfront quotes based on square footage and chosen finish.",
              "Avoid the mess and the uncertainty. Use the app to schedule a site visit, agree on a price, and get the job done by skilled hands."
            ]}
            priceFrom="499"
            cta={{ label: "Book painter", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="carpenter"
            title="Carpenter in Noida"
            keyword="carpenter in Noida"
            body={[
              "Furniture, repairs, modular, custom woodwork. Finding a reliable carpenter who turns up on time and doesn't overcharge for small repairs is a common struggle in Noida.",
              "MOYO offers verified carpenters for all your woodwork needs. Whether you need a broken hinge fixed, a squeaky door shaved down, or full modular kitchen cabinets custom-built from scratch, our professionals are equipped for the job. From minor furniture repairs to extensive interior woodwork, you can request a quote, review the carpenter's past ratings, and agree on a fair price through our bidding system.",
              "Get your carpentry work completed with precision and professionalism, without the usual runaround."
            ]}
            priceFrom="499"
            cta={{ label: "Book carpenter", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="tile-worker"
            title="Tile Worker in Noida"
            keyword="tile fitting Noida"
            body={[
              "Floor & wall tiling, fitting & regrouting. Chipped tiles, hollow flooring, or a complete bathroom renovation require specialized skills to ensure longevity and a perfect finish.",
              "Book verified tile workers in Noida through MOYO for precision floor and wall tiling, regrouting, and repairs. Whether you are laying vitrified tiles in your living room in Noida Extension or installing intricate mosaic patterns in a kitchen backsplash, our tradespeople deliver quality workmanship. They handle surface preparation, level checking, and precise cutting to minimize wastage.",
              "Stop relying on guesswork. Request an upfront quote based on the area size and let a verified professional handle the heavy lifting."
            ]}
            priceFrom="499"
            cta={{ label: "Book tile worker", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="false-ceiling"
            title="False Ceiling Worker in Noida"
            keyword="false ceiling work Noida"
            body={[
              "POP & gypsum false ceiling design + install. A well-designed false ceiling completely transforms a room, but poor execution leads to cracks and uneven finishes.",
              "MOYO connects you with expert false ceiling workers in Noida experienced in both POP and gypsum installations. Whether you want a simple perimeter drop for cove lighting in your bedroom or an elaborate, multi-level design for a commercial office space, our verified contractors ensure structural safety and a flawless finish.",
              "Discuss your design requirements, get a clear estimate covering materials and labor, and upgrade your interior aesthetic with confidence."
            ]}
            priceFrom="499"
            cta={{ label: "Book false ceiling worker", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="waterproofing"
            title="Waterproofing Worker in Noida"
            keyword="waterproofing services Noida"
            body={[
              "Terrace, bathroom & wall waterproofing. Seepage and dampness can destroy your home's interiors and weaken its structural integrity.",
              "Don't wait for the monsoons to expose the cracks. MOYO provides specialized waterproofing workers in Noida who tackle terrace leaks, bathroom seepage, and exterior wall dampness. Using industry-standard chemical coatings, membrane applications, and injection grouting, our verified professionals identify the root cause of the leak and fix it permanently.",
              "Schedule a thorough site inspection through the app and receive a transparent, upfront quote to protect your property from water damage."
            ]}
            priceFrom="499"
            cta={{ label: "Book waterproofing worker", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="interior-designer"
            title="Interior Designer in Noida"
            keyword="interior designer in Noida"
            body={[
              "Full home/office interior design + execution. Turning a bare shell apartment or a dated office into a stunning, functional space requires vision and expert project management.",
              "MOYO gives you access to verified interior designers in Noida who handle everything from concept to completion. Whether you need a modern minimalist look for a 3BHK or a professional fit-out for a startup workspace, our designers work within your budget and timeline. They provide detailed 2D/3D layouts, material selection guidance, and oversee the on-site execution.",
              "Skip the unreliable contractors. Use MOYO to find a designer whose portfolio matches your style and agree on a transparent design fee."
            ]}
            priceFrom="499"
            cta={{ label: "Book interior designer", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="mason"
            title="Mason in Noida"
            keyword="mason in Noida"
            body={[
              "Brickwork, plaster, repairs. For structural modifications, wall construction, or essential plastering work, you need an experienced mason you can trust.",
              "MOYO connects you with verified masons across Noida for all types of brickwork, blockwork, cement plastering, and concrete repairs. Whether you are modifying a room layout, building a new partition wall, or fixing damaged exterior plaster, our skilled tradespeople ensure the structural integrity and alignment are perfect.",
              "Set your requirements in the app and hire a dependable mason on a daily wage or project basis, completely hassle-free."
            ]}
            priceFrom="499"
            cta={{ label: "Book mason", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="welder"
            title="Welder in Noida"
            keyword="welder in Noida"
            body={[
              "On-site welding & grill work. Broken hinges, damaged metal gates, or the need for a customized safety grill require immediate, professional attention.",
              "Find verified welders in Noida through MOYO for quick, on-site metal repairs and fabrication. Whether you need a quick fix for a window grill, a structural weld for a staircase railing, or heavy-duty metal joining, our tradespeople come equipped with the necessary tools and safety gear.",
              "Review quotes upfront and get your metalwork secured by professionals who prioritize strength and finishing."
            ]}
            priceFrom="499"
            cta={{ label: "Book welder", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="polisher"
            title="Polisher in Noida"
            keyword="floor polishing Noida"
            body={[
              "Wood & floor polishing. Over time, marble floors lose their shine and wooden furniture gets scratched and dull.",
              "MOYO offers specialized polishing workers in Noida who can restore the original luster to your surfaces. From intricate PU and melamine polishing for your premium wooden furniture and doors, to heavy-duty diamond polishing for marble and granite floors, our verified professionals use the right chemicals and machinery.",
              "Get an upfront estimate based on the surface area and material, and breathe new life into your home's interiors."
            ]}
            priceFrom="499"
            cta={{ label: "Book polisher", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="fabricator"
            title="Fabricator in Noida"
            keyword="fabrication work Noida"
            body={[
              "Steel gates, grills, railings. Custom metal structures require precise measurements and robust fabrication techniques.",
              "Through MOYO, you can hire verified fabricators in Noida for manufacturing and installing steel gates, balcony grills, stair railings, and custom metal sheds. Whether you prefer modern stainless steel designs or traditional wrought iron, our professionals handle the cutting, bending, welding, and finishing with accuracy.",
              "Request a site visit to discuss your design, receive a detailed quotation, and ensure your property is both secure and aesthetically pleasing."
            ]}
            priceFrom="499"
            cta={{ label: "Book fabricator", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="architect"
            title="Architect in Noida"
            keyword="architect in Noida"
            body={[
              "Design, drawings & approvals. Building a home from the ground up or undertaking a major structural renovation requires certified architectural planning.",
              "MOYO connects you with licensed, verified architects in Noida who provide comprehensive design services. From creating functional floor plans and structural drawings to navigating local Noida Authority building codes and securing necessary approvals, our professionals guide you through the complex construction process.",
              "Consult with experienced architects, review their past projects, and establish a clear fee structure before your construction begins."
            ]}
            priceFrom="499"
            cta={{ label: "Book architect", href: "https://app.moyointernational.com" }}
          />

          <ServiceBlock 
            id="general-labour"
            title="General Labour in Noida"
            keyword="construction labour Noida"
            body={[
              "Skilled & unskilled site labour. Managing a construction or renovation site often requires extra hands for material shifting, site cleanup, and assisting skilled tradespeople.",
              "MOYO simplifies the process of finding dependable construction labour in Noida. Whether you need unskilled helpers for a day to clear debris after a renovation, or semi-skilled laborers for an ongoing project, you can hire verified workers through our platform. No more searching at local labour chowks or dealing with uncertain turnups.",
              "Set a fair daily wage through our bidding system and ensure your site keeps moving efficiently."
            ]}
            priceFrom="499"
            cta={{ label: "Book general labour", href: "https://app.moyointernational.com" }}
          />
          
          <div className="bg-section-alt p-8 rounded-[16px] border border-line shadow-sm">
            <h3 className="text-xl font-bold text-ink mb-3">Also Available on MOYO</h3>
            <p className="text-muted leading-relaxed">
              For specialized construction needs, you can also book <strong className="text-ink">Stone Workers and Shuttering Carpenters</strong> through the MOYO app. We cover every aspect of your building and renovation journey.
            </p>
          </div>
        </div>

        {/* Section 5: Pricing */}
        <section id="pricing" className="py-16 md:py-24 bg-page border-y border-line">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-ink mb-8 text-center tracking-tight">Construction & Interiors Pricing in Noida</h2>
            <PricingTable rows={[
              { service: "Painter", partTime: "from ₹499", fullTime: "—", note: "Per sq. ft. / Per project" },
              { service: "Carpenter", partTime: "from ₹499", fullTime: "—", note: "Per day / Per project" },
              { service: "General Labour", partTime: "from ₹499", fullTime: "from ₹499", note: "Daily wage" },
              { service: "Interior Designer", partTime: "from ₹499", fullTime: "—", note: "Per sq. ft. / Design fee" },
            ]} />
          </div>
        </section>

        {/* Section 6: Why MOYO */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-4">Why Book Construction & Interiors on MOYO?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Verified Pros</h3>
                <p className="text-muted leading-relaxed">Every tradesperson and designer undergoes strict identity and background checks.</p>
              </div>
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Upfront Quotes</h3>
                <p className="text-muted leading-relaxed">No vague estimates. Get clear, upfront pricing before the work begins.</p>
              </div>
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">End-to-End Service</h3>
                <p className="text-muted leading-relaxed">From a single broken hinge to a complete home interior fit-out, one app covers it all.</p>
              </div>
              <div className="p-8 rounded-[16px] bg-section-alt border border-line hover:border-brand-200 transition-colors">
                <div className="text-brand text-3xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-ink mb-3">Bidding System</h3>
                <p className="text-muted leading-relaxed">Propose your budget and get matched with skilled workers who accept your rate.</p>
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
              MOYO tradespeople and designers are available across Noida and Greater Noida, including <strong className="text-ink">Sector 18, 62, 76, 137, 150, 168, Noida Extension and Greater Noida West</strong>.
            </p>
          </div>
        </section>

        {/* Reviews Section Temporarily Hidden */}

        {/* Section 10: FAQ */}
        <div className="px-4 sm:px-6 lg:px-8 bg-white">
          <FAQAccordion faqs={[
            { q: "How much does home painting cost in Noida?", a: "Priced per sq ft and finish — you get an upfront quote after a site assessment." },
            { q: "Can I hire an interior designer?", a: "Yes — interior designers and architects for full home/office projects." },
            { q: "Do you do waterproofing?", a: "Yes — terrace, bathroom and wall waterproofing." },
            { q: "Can I book just a carpenter for small work?", a: "Yes — carpenters for repairs, furniture and custom work." }
          ]} />
        </div>

        {/* Internal Linking Block */}
        <section className="py-12 bg-section-alt border-t border-line text-center">
          <p className="text-muted mb-6 text-sm uppercase tracking-wider font-semibold">Looking for other services in Noida?</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <Link href="/home-repair-noida" className="text-brand font-medium hover:text-brand-hover hover:underline transition-all">Book Home Repairs in Noida</Link>
            <span className="text-line hidden sm:inline">•</span>
            <Link href="/packers-movers-noida" className="text-brand font-medium hover:text-brand-hover hover:underline transition-all">Book Packers & Movers in Noida</Link>
            <span className="text-line hidden sm:inline">•</span>
            <Link href="/office-staff-noida" className="text-brand font-medium hover:text-brand-hover hover:underline transition-all">Book Office Staff in Noida</Link>
          </div>
        </section>

        {/* Section 11: Closing CTA */}
        <CTABlock 
          heading="Skilled hands, clear quotes."
          primaryCta={{ label: "Download the MOYO app", href: "https://app.moyointernational.com" }}
          secondaryCta={{ label: "Book on WhatsApp", href: "https://wa.me/919876543210" }}
        />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
