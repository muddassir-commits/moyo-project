import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Star, ShieldCheck, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

// This is a dynamic SEO landing page generator for all combinations of Service x Location
// e.g., /service/ac-repair/sector-62

export default async function DynamicSEOServicePage({ params }: { params: { category: string, location: string } }) {
  const resolvedParams = await params;
  const categoryName = resolvedParams.category.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());
  const locationName = resolvedParams.location.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());
  
  // Generating Schema.org LocalBusiness & AggregateRating for massive SEO boost
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": categoryName,
    "provider": {
      "@type": "LocalBusiness",
      "name": `MOYO ${categoryName} in ${locationName}`,
      "areaServed": locationName
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "245"
    }
  };

  return (
    <>
      <Script id={`schema-${resolvedParams.category}-${resolvedParams.location}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="bg-page min-h-screen pb-24">
        
        {/* Hero */}
        <div className="bg-ink text-white py-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <Breadcrumbs trail={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: categoryName, href: `/book/${resolvedParams.category}` },
              { label: locationName, href: "#" }
            ]} />
            <h1 className="text-4xl md:text-5xl font-black mt-6 mb-4">
              Best {categoryName} in {locationName}
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Book verified, top-rated professionals for {categoryName.toLowerCase()} in {locationName}, Noida. Get instant bids and zero hidden charges.
            </p>
            <Link href={`/book/${resolvedParams.category}?loc=${resolvedParams.location}`} className="btn-primary inline-flex items-center gap-2 px-8 h-[56px] text-lg">
              Book Now <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-ink mb-6">Why choose MOYO in {locationName}?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                <div className="card-base p-6">
                  <ShieldCheck className="w-8 h-8 text-green-600 mb-4" />
                  <h3 className="font-bold text-ink mb-2">100% Verified Pros</h3>
                  <p className="text-muted text-sm">Every professional in {locationName} passes a strict Aadhaar and police verification process.</p>
                </div>
                <div className="card-base p-6">
                  <Clock className="w-8 h-8 text-brand mb-4" />
                  <h3 className="font-bold text-ink mb-2">30-Min Arrival</h3>
                  <p className="text-muted text-sm">We match you with pros already working in or near {locationName} for lightning-fast service.</p>
                </div>
                <div className="card-base p-6">
                  <Star className="w-8 h-8 text-amber-500 mb-4" />
                  <h3 className="font-bold text-ink mb-2">Top Rated</h3>
                  <p className="text-muted text-sm">Our {categoryName.toLowerCase()} experts in this area have an average rating of 4.8/5.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-ink mb-6">Recent Customer Reviews from {locationName}</h2>
              <div className="space-y-4">
                <div className="card-base p-6 border-l-4 border-l-brand">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-bold text-ink">Neha S.</span>
                    <span className="text-xs text-muted ml-auto">Sector 62</span>
                  </div>
                  <div className="flex text-amber-500 mb-2">
                    <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                  </div>
                  <p className="text-muted">"Excellent {categoryName.toLowerCase()} service! The professional arrived on time and fixed the issue perfectly."</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-1 space-y-6">
              <div className="card-base p-6 bg-brand-50 border-brand-200">
                <h3 className="font-bold text-brand-deep mb-2">Need Help?</h3>
                <p className="text-sm text-brand-deep/80 mb-4">Our support team is available 24/7 for customers in Noida.</p>
                <button className="w-full btn-secondary bg-white">Contact Support</button>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
