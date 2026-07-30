import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MultiStepForm } from "@/components/booking/MultiStepForm";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export default async function BookingPage({ params }: { params: { service: string } }) {
  const resolvedParams = await params;
  const serviceName = resolvedParams.service.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());

  return (
    <>
      <Header />
      <main className="bg-page min-h-screen pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs trail={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: `Book ${serviceName}`, href: `/book/${resolvedParams.service}` }
          ]} />
          
          <div className="text-center mt-8 mb-12">
            <h1 className="text-3xl md:text-5xl font-extrabold text-ink tracking-tight mb-4">
              Book {serviceName}
            </h1>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Tell us what you need. We'll broadcast your request to verified MOYO professionals near you.
            </p>
          </div>

          <MultiStepForm serviceType={resolvedParams.service} />
        </div>
      </main>
      <Footer />
    </>
  );
}
