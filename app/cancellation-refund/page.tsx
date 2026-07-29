import { generateSeoMetadata } from "@/lib/metadata";
import { CONTACT } from "@/config/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata = generateSeoMetadata({
  title: "Cancellation & Refund Policy | MOYO",
  description: "Cancellation & Refund Policy for MOYO International Pvt. Ltd.",
  path: "/cancellation-refund",
});

export default function CancellationRefundPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <div className="bg-page border-b border-line">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
            <Breadcrumbs trail={[
              { label: "Home", href: "/" },
              { label: "Cancellation & Refund Policy", href: "/cancellation-refund" }
            ]} />
            <h1 className="text-3xl md:text-5xl font-extrabold text-ink tracking-tight mt-8 mb-4">
              Cancellation & Refund Policy
            </h1>
            <p className="text-muted text-lg">
              Last updated: July 2026
            </p>
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-lg prose-headings:font-bold prose-headings:text-ink prose-p:text-muted prose-a:text-brand hover:prose-a:text-brand-deep prose-li:text-muted">
          <p>
            At <strong>MOYO International Pvt. Ltd.</strong>, we strive to provide a seamless and transparent booking experience. We understand that plans change, which is why we have established a clear framework for cancellations and refunds.
          </p>
          
          <h2>1. Cancellation by the Customer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h2>2. Cancellation by the Professional</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h2>3. Refund Eligibility</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h2>4. Refund Processing Time</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h2>5. Dispute Resolution for Refunds</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            For any questions or concerns regarding a cancellation or refund, please contact our support team:
            <br />
            <strong>MOYO International Pvt. Ltd.</strong>
            <br />
            Email: support@moyointernational.com
            <br />
            Address: {CONTACT.street}, {CONTACT.city}, {CONTACT.state} {CONTACT.pin}
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
