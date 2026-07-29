import { generateSeoMetadata } from "@/lib/metadata";
import { CONTACT } from "@/config/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata = generateSeoMetadata({
  title: "Code of Conduct | MOYO",
  description: "Code of Conduct for MOYO International Pvt. Ltd.",
  path: "/code-of-conduct",
});

export default function CodeOfConductPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        <div className="bg-page border-b border-line">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
            <Breadcrumbs trail={[
              { label: "Home", href: "/" },
              { label: "Code of Conduct", href: "/code-of-conduct" }
            ]} />
            <h1 className="text-3xl md:text-5xl font-extrabold text-ink tracking-tight mt-8 mb-4">
              Code of Conduct
            </h1>
            <p className="text-muted text-lg">
              Last updated: July 2026
            </p>
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-lg prose-headings:font-bold prose-headings:text-ink prose-p:text-muted prose-a:text-brand hover:prose-a:text-brand-deep prose-li:text-muted">
          <p>
            At <strong>MOYO International Pvt. Ltd.</strong>, we are committed to building a safe, respectful, and reliable marketplace for both our customers and our verified professionals. This Code of Conduct outlines the behavioral expectations for all users of the MOYO platform.
          </p>
          
          <h2>1. Respect and Professionalism</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h2>2. Safety and Security</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h2>3. Transparency and Honesty</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h2>4. Consequences of Violation</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h2>5. Reporting Misconduct</h2>
          <p>
            If you witness or experience a violation of this Code of Conduct, please report it immediately through the help section in our app or contact us at:
            <br />
            <strong>MOYO International Pvt. Ltd.</strong>
            <br />
            Email: safety@moyointernational.com
            <br />
            Address: {CONTACT.street}, {CONTACT.city}, {CONTACT.state} {CONTACT.pin}
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
