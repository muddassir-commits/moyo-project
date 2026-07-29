import { generateSeoMetadata } from "@/lib/metadata";
import { CONTACT } from "@/config/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata = generateSeoMetadata({
  title: "Privacy Policy | MOYO",
  description: "Privacy Policy for MOYO International Pvt. Ltd.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <div className="bg-page border-b border-line">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
            <Breadcrumbs trail={[
              { label: "Home", href: "/" },
              { label: "Privacy Policy", href: "/privacy-policy" }
            ]} />
            <h1 className="text-3xl md:text-5xl font-extrabold text-ink tracking-tight mt-8 mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted text-lg">
              Last updated: July 2026
            </p>
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-lg prose-headings:font-bold prose-headings:text-ink prose-p:text-muted prose-a:text-brand hover:prose-a:text-brand-deep prose-li:text-muted">
          <p>
            Welcome to the Privacy Policy for <strong>MOYO International Pvt. Ltd.</strong> This document explains how we collect, use, disclose, and safeguard your information when you visit our website or use our mobile application.
          </p>
          
          <h2>1. Information We Collect</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h2>3. Data Sharing and Disclosure</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h2>4. Data Security</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h2>5. Your Rights</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at:
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
