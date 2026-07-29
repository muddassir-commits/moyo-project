import { generateSeoMetadata } from "@/lib/metadata";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StepsHowItWorks } from "@/components/ui/StepsHowItWorks";
import { CTABlock } from "@/components/ui/CTABlock";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export const metadata = generateSeoMetadata({
  title: "All Services in Noida — 170+ Verified Professionals",
  description: "Explore all 170+ MOYO services in Noida across 14 categories — home help, cleaning, repairs, beauty, healthcare, events & more. Book verified pros in the app.",
  path: "/services",
});

import { PILLARS } from "@/config/navigation";

const CATEGORIES = [
  {
    name: "Domestic Help & Home Care",
    desc: "Reliable domestic support for your household.",
    examples: ["Maid", "Cook", "Nanny", "Babysitter", "Chef", "Gardener"],
    href: "/domestic-help-noida"
  },
  {
    name: "Home Cleaning",
    desc: "Professional deep cleaning for every corner.",
    examples: ["Deep clean", "Bathroom", "Kitchen", "Pest control", "Water tank"],
    href: "/home-cleaning-noida"
  },
  {
    name: "Home Repairs",
    desc: "Expert fixes for your home and gadgets.",
    examples: ["Electrician", "Plumber", "AC", "Fridge", "Washing machine", "TV"],
    href: "/home-repair-noida"
  },
  {
    name: "Beauty & Grooming",
    desc: "Salon-quality services in your living room.",
    examples: ["Salon at home", "Makeup", "Mehendi", "Massage", "Hair", "Nails"],
    href: "/beauty-services-noida"
  },
  {
    name: "Laundry & Fabric Care",
    desc: "Crisp clothes and spotless upholstery.",
    examples: ["Dhobi", "Wash & iron", "Sofa cleaning", "Shoe cleaning"],
    href: "/laundry-services-noida"
  },
  {
    name: "Home Nursing & Elder Care",
    desc: "Compassionate care for your loved ones.",
    examples: ["Nurse", "Physiotherapist", "Elder care"],
    href: "/home-nursing-noida"
  },
  {
    name: "Fitness & Wellness",
    desc: "Achieve your health goals at home.",
    examples: ["Gym trainer", "Yoga", "Dietitian", "Sports coach"],
    href: "/fitness-trainer-noida"
  },
  {
    name: "Home Tutors",
    desc: "Quality education for all ages.",
    examples: ["School tutors", "Languages", "Music teachers", "Dance teachers"],
    href: "/home-tutor-noida"
  },
  {
    name: "Events & Entertainment",
    desc: "Everything you need for a memorable party.",
    examples: ["Photographer", "DJ", "Singer", "Planner", "Bartender"],
    href: "/event-services-noida"
  },
  {
    name: "Pandit & Religious",
    desc: "Spiritual guidance and ceremonies.",
    examples: ["Pandit", "Astrologer", "Tarot", "Granthi"],
    href: "/pandit-services-noida"
  },
  {
    name: "Packers, Movers & Drivers",
    desc: "Seamless relocation and transport.",
    examples: ["Personal driver", "Chauffeur", "Travel support"],
    href: "/packers-movers-noida"
  },
  {
    name: "Construction & Interiors",
    desc: "Build or renovate your dream space.",
    examples: ["Painter", "Carpenter", "Tiles", "Interior designer"],
    href: "/construction-services-noida"
  },
  {
    name: "Office & Business Support",
    desc: "Reliable staff for your business needs.",
    examples: ["Office boy", "Receptionist", "Data entry"],
    href: "/office-staff-noida"
  },
  {
    name: "Industrial & Security Staffing",
    desc: "Heavy-duty personnel and protection.",
    examples: ["Guards", "Warehouse labour", "Operators"],
    href: "/industrial-staffing-noida"
  },
].map(cat => ({
  ...cat,
  image: PILLARS.find(p => p.href === cat.href)?.image
}));

const SPECIAL_CATEGORIES = [
  { name: "Doctor Consultation", desc: "Expert medical advice.", href: "/doctor-consultation-noida" },
  { name: "Emergency Services", desc: "Urgent utility support.", href: "/emergency-services-noida" },
  { name: "Professional Services", desc: "B2B consulting & legal.", href: "/professional-services-noida" }
];

export default function ServicesHub() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "All MOYO Services in Noida",
    "description": "Explore all 170+ MOYO services in Noida across 14 categories.",
    "url": "https://www.moyointernational.com/services"
  };

  return (
    <>
      <Script
        id="collection-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <Header />
      <main>
        {/* Breadcrumbs */}
        <Breadcrumbs trail={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" }
        ]} />

        {/* Intro */}
        <section className="pt-8 pb-16 md:pt-12 md:pb-24 bg-page">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-[36px] leading-[1.2] md:text-[48px] font-bold text-ink tracking-tight mb-6">
              All MOYO Services in Noida — 170+ Verified Professionals, One App
            </h1>
            <p className="text-lg text-muted md:text-xl leading-relaxed mb-8">
              From a maid for the morning to a DJ for the sangeet, from an emergency electrician to a full home deep-clean — MOYO covers 170+ services across Noida, every one delivered by an ID-verified professional. Pick a category below to see what's included, or download the app to book in minutes. And remember: with bidding, you set the price.
            </p>
          </div>
        </section>

        {/* Directory */}
        <section className="py-16 md:py-24 bg-section-alt border-y border-line">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {CATEGORIES.map((cat, idx) => (
                <Link 
                  key={idx} 
                  href={cat.href}
                  className="group flex flex-col card-base card-hover p-8 h-full"
                >
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-20 h-20 bg-[#FFF7ED] rounded-full flex shrink-0 items-center justify-center p-[14px] border border-brand/10 group-hover:scale-110 transition-transform duration-500 ease-expo">
                      {cat.image && (
                        <Image 
                          src={cat.image} 
                          alt={cat.name}
                          width={52}
                          height={52}
                          className="object-contain"
                        />
                      )}
                    </div>
                    <h2 className="text-xl font-bold text-ink group-hover:text-brand transition-colors leading-tight">{cat.name}</h2>
                  </div>
                  
                  <p className="text-muted mb-6 text-sm">{cat.desc}</p>
                  
                  <div className="mb-8">
                    <ul className="flex flex-wrap gap-2">
                      {cat.examples.map((ex, i) => (
                        <li key={i} className="text-xs px-2.5 py-1 bg-brand-50 text-brand-deep rounded-md font-medium">
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-line text-brand font-semibold text-sm group-hover:text-brand-hover transition-colors flex items-center justify-between">
                    <span>View all services</span>
                    <span aria-hidden="true" className="text-lg group-hover:translate-x-1 transition-transform ease-expo leading-none">→</span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Special Categories */}
            <div className="mt-16 border-t border-line pt-16">
              <h3 className="text-2xl font-bold text-ink mb-8 text-center">Special & Urgent Services</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {SPECIAL_CATEGORIES.map((spec, idx) => (
                  <Link 
                    key={idx}
                    href={spec.href}
                    className="flex flex-col items-center bg-white border border-line p-6 rounded-[12px] shadow-sm hover:border-brand hover:shadow-card transition-all w-full sm:w-80 group"
                  >
                    <span className="font-bold text-ink text-lg mb-2 group-hover:text-brand transition-colors">{spec.name}</span>
                    <span className="text-muted text-center text-sm">{spec.desc}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-ink text-center mb-12">Why book any service on MOYO?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-ink mb-2">100% Verified</h3>
                <p className="text-muted">ID, address, and reference checks before they arrive at your door in Noida.</p>
              </div>
              <div>
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-bold text-ink mb-2">You Set The Price</h3>
                <p className="text-muted">Propose a fair rate. Professionals bid or accept. No hidden fees.</p>
              </div>
              <div>
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-ink mb-2">Instant Matching</h3>
                <p className="text-muted">Book your service, and get matched with available experts immediately.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Steps */}
        <StepsHowItWorks />

        {/* FAQ */}
        <div className="px-4 sm:px-6 lg:px-8 bg-page">
          <FAQAccordion faqs={[
            { q: "How many services are available on MOYO?", a: "We offer more than 170 individual services across 14 main pillars, covering everything from domestic help to event planning in Noida." },
            { q: "Do you cover all areas of Noida?", a: "Yes. Our professionals serve all sectors of Noida, Greater Noida, and Noida Extension." },
            { q: "How does verification work?", a: "Before any professional is active on the app, they must pass a background check including ID, address, and past reference verifications." },
            { q: "What is bidding on MOYO?", a: "Instead of a high fixed price, you can submit your own offer. Professionals nearby will review it and can accept it instantly or provide a counter-offer, ensuring fair market rates." },
          ]} />
        </div>

        {/* Closing CTA */}
        <CTABlock 
          heading="Ready to get things done?"
          primaryCta={{ label: "Download the App", href: "https://app.moyointernational.com" }}
          secondaryCta={{ label: "Chat on WhatsApp", href: "https://wa.me/919876543210" }}
        />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
