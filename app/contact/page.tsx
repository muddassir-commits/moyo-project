import { generateSeoMetadata } from "@/lib/metadata";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTABlock } from "@/components/ui/CTABlock";
import { CONTACT } from "@/config/navigation";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export const metadata = generateSeoMetadata({
  title: "Contact MOYO — Home Services in Noida",
  description: "Get in touch with MOYO. Call, WhatsApp or email for home services in Noida, or download the app to book.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "MOYO International Pvt. Ltd.",
            "image": "https://moyointernational.com/logo.png",
            "@id": "https://moyointernational.com",
            "url": "https://moyointernational.com",
            "telephone": CONTACT.phone,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": CONTACT.street,
              "addressLocality": CONTACT.city,
              "addressRegion": CONTACT.state,
              "postalCode": CONTACT.pin,
              "addressCountry": "IN"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "09:00",
              "closes": "20:00"
            }
          })
        }}
      />
      <Header />
      <main>
        <Breadcrumbs trail={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" }
        ]} />

        {/* Hero Section */}
        <section className="bg-brand text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Contact MOYO</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Have a question about a booking or want to partner with us? Reach out to our Noida-based team.
            </p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Left Column: Info & Map */}
              <div>
                <h2 className="text-2xl font-bold text-ink mb-8">Get in Touch</h2>
                
                <div className="space-y-6 mb-12">
                  {!CONTACT.phone.includes("[") && (
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center shrink-0 text-brand">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-ink">Phone</div>
                        <div className="text-muted mt-1">{CONTACT.phone}</div>
                      </div>
                    </div>
                  )}
                  
                  {!CONTACT.whatsapp.includes("[") && (
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center shrink-0 text-brand">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-ink">WhatsApp</div>
                        <div className="text-muted mt-1">Chat with us directly</div>
                      </div>
                    </div>
                  )}
                  
                  {!CONTACT.email.includes("[") && (
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center shrink-0 text-brand">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-ink">Email</div>
                        <div className="text-muted mt-1">{CONTACT.email}</div>
                      </div>
                    </div>
                  )}
                  
                  {!CONTACT.street.includes("[") && (
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center shrink-0 text-brand">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-ink">Office Address</div>
                        <div className="text-muted mt-1 leading-relaxed">{CONTACT.street}, {CONTACT.city}, {CONTACT.state} {CONTACT.pin}</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Map temporarily hidden pending embed code */}
              </div>

              {/* Right Column: Enquiry Form */}
              <div className="bg-section-alt p-8 rounded-[24px] border border-line shadow-sm">
                <h2 className="text-2xl font-bold text-ink mb-6">Send an Enquiry</h2>
                <form action="/api/contact" method="POST" className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      className="w-full px-4 py-3 rounded-[12px] border border-line focus:ring-2 focus:ring-brand/50 focus:border-brand outline-none transition-all bg-white text-ink"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-ink mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required 
                      className="w-full px-4 py-3 rounded-[12px] border border-line focus:ring-2 focus:ring-brand/50 focus:border-brand outline-none transition-all bg-white text-ink"
                      placeholder="+91"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-ink mb-2">Service (Optional)</label>
                    <select 
                      id="service" 
                      name="service" 
                      className="w-full px-4 py-3 rounded-[12px] border border-line focus:ring-2 focus:ring-brand/50 focus:border-brand outline-none transition-all bg-white text-ink"
                    >
                      <option value="">Select a service</option>
                      <option value="domestic-help">Domestic Help</option>
                      <option value="home-cleaning">Home Cleaning</option>
                      <option value="home-repair">Home Repair</option>
                      <option value="beauty">Beauty & Grooming</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={4} 
                      required 
                      className="w-full px-4 py-3 rounded-[12px] border border-line focus:ring-2 focus:ring-brand/50 focus:border-brand outline-none transition-all bg-white text-ink"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full py-4 px-6 bg-brand hover:bg-brand-hover text-white font-bold rounded-[12px] transition-colors shadow-card hover:shadow-cardHover hover:-translate-y-0.5"
                  >
                    Send Message
                  </button>
                </form>
              </div>

            </div>
          </div>
        </section>

        {/* Links Section */}
        <section className="py-12 bg-page border-y border-line text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
              <Link href="/services" className="text-lg font-bold text-ink hover:text-brand transition-colors">
                Browse All Services →
              </Link>
              <span className="hidden sm:inline text-line h-8 w-px bg-line"></span>
              <Link href="/become-a-provider" className="text-lg font-bold text-ink hover:text-brand transition-colors">
                Become a Provider →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Block (App Download Band) */}
        <CTABlock 
          heading="Ready to book? Download the MOYO app."
          primaryCta={{ label: "Download for iOS", href: "https://apps.apple.com" }}
          secondaryCta={{ label: "Download for Android", href: "https://play.google.com" }}
        />

      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
