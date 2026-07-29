import { generateSeoMetadata } from "@/lib/metadata";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTABlock } from "@/components/ui/CTABlock";
import { Reveal } from "@/components/motion/Reveal";
import Link from "next/link";

export const metadata = generateSeoMetadata({
  title: "About MOYO — Verified Home Services in Noida, Built on Fair Work",
  description: "MOYO connects Noida homes with verified professionals across 170+ services, on a bidding model that's fair to customers and workers alike. Our story.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "MOYO International Pvt. Ltd.",
              "url": "https://moyointernational.com"
            }
          })
        }}
      />
      <Header />
      <main>
        <Breadcrumbs trail={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" }
        ]} />

        {/* Hero Section */}
        <section className="bg-brand text-white py-20 md:py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">About MOYO — Helping Homes, Creating Work</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              We connect Noida families with verified professionals across 170+ services, built on a bidding model that's fair to customers and workers alike.
            </p>
          </div>
        </section>

        {/* The Problem & Solution */}
        <section className="py-16 md:py-24 bg-white">
          <Reveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none text-ink">
              <h2 className="text-3xl font-bold mb-6">The Problem We Saw in Noida</h2>
              <p className="mb-8 text-muted leading-relaxed">
                Finding reliable home help in Noida has always been a gamble. Families rely on unverified local agents, paying a premium without any guarantee of safety or quality. On the other side, skilled workers—maids, plumbers, and technicians—lose a significant chunk of their hard-earned money to double commissions taken by middlemen. It's a broken system that hurts both sides.
              </p>
              
              <h2 className="text-3xl font-bold mb-6">What MOYO Does Differently</h2>
              <p className="mb-8 text-muted leading-relaxed">
                MOYO removes the middleman. We provide one verified platform offering over 170 home services. Our unique bidding system allows customers to propose the rate they want to pay, and professionals to accept or counter it. You get complete transparency and upfront pricing, while workers receive fair pay without hidden agent cuts.
              </p>
            </div>
          </Reveal>
        </section>

        {/* Mission & Stats */}
        <section className="py-16 bg-section-alt border-y border-line">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-ink mb-12">Helping Homes. Creating Work. Changing Lives.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Stats temporarily hidden pending real data */}
              <div className="p-8 bg-white rounded-[16px] border border-line shadow-sm">
                <div className="text-4xl font-black text-brand mb-2">170+</div>
                <div className="text-ink font-semibold">Services Live</div>
                <p className="text-muted text-sm mt-2">Everything from deep cleaning to AC repair in one app.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Verification Process */}
        <section className="py-16 md:py-24 bg-white">
          <Reveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-ink mb-6">Our Strict Verification Process</h2>
            <p className="text-lg text-muted leading-relaxed mb-12">
              Trust isn't built on a phone call. Before any professional reaches your door, they go through our mandatory 48-hour verification process. We physically verify their ID (Aadhaar/PAN), check their current residential address, conduct a thorough reference check, and assess their skills. Only those who pass this rigorous vetting are allowed onto the MOYO platform.
            </p>
          </Reveal>
        </section>

        {/* Company & Milestones */}
        <section className="py-16 bg-page border-y border-line">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-ink mb-8 text-center">MOYO International Pvt. Ltd.</h2>
            {/* Founder story temporarily hidden pending real data */}
            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="flex items-start gap-4 p-4 bg-white rounded-[8px] shadow-sm border border-line">
                <div className="w-24 font-bold text-brand shrink-0">Phase 1</div>
                <div className="text-ink font-medium">App Launch across Noida & Greater Noida.</div>
              </div>
              {/* Phase 2 temporarily hidden pending real data */}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABlock 
          heading="Join the MOYO community."
          primaryCta={{ label: "Download the App", href: "https://app.moyointernational.com" }}
          secondaryCta={{ label: "Become a Provider", href: "/become-a-provider" }}
        />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
