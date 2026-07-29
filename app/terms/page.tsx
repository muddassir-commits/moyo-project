import { generateSeoMetadata } from "@/lib/metadata";
import { CONTACT } from "@/config/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata = generateSeoMetadata({
  title: "Terms & Conditions | MOYO",
  description: "Terms & Conditions for MOYO International Pvt. Ltd.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <div className="bg-page border-b border-line">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
            <Breadcrumbs trail={[
              { label: "Home", href: "/" },
              { label: "Terms & Conditions", href: "/terms" }
            ]} />
            <h1 className="text-3xl md:text-5xl font-extrabold text-ink tracking-tight mt-8 mb-4">
              Terms & Conditions
            </h1>
            <p className="text-muted text-lg">
              Last updated: July 2026
            </p>
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-lg prose-headings:font-bold prose-headings:text-ink prose-p:text-muted prose-a:text-brand hover:prose-a:text-brand-deep prose-li:text-muted">
          <p>
            Welcome to <strong>MOYO International Pvt. Ltd.</strong> These Terms and Conditions govern your use of our website, mobile application, and the services provided by MOYO. By accessing or using our platform, you agree to be bound by these Terms.
          </p>
          
          <h2>1. Platform Role</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h2>2. User Obligations</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h2>3. Bidding & Payments</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h2>4. Dispute Resolution</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h2>6. Contact Information</h2>
          <p>
            For any queries regarding these Terms & Conditions, please reach out to us:
            <br />
            <strong>MOYO International Pvt. Ltd.</strong>
            <br />
            Email: legal@moyointernational.com
            <br />
            Address: {CONTACT.street}, {CONTACT.city}, {CONTACT.state} {CONTACT.pin}
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
