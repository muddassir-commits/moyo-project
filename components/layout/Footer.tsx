import Link from "next/link";
import Image from "next/image";
import { PILLARS, LEGAL_LINKS, CONTACT } from "@/config/navigation";

export function Footer() {
  const topServices = PILLARS.slice(0, 6);

  return (
    <footer className="bg-section-dark text-white pt-16 pb-24 md:pb-8">
      {/* Increased mobile padding bottom to avoid overlap with sticky CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1 */}
          <div className="flex flex-col gap-6">
            <Image 
              src="/logo-wide.svg" 
              alt="MOYO Logo" 
              width={160} 
              height={50} 
              className="w-auto h-10 -ml-2"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Noida's premier multi-service marketplace. Connecting you with verified experts for all your home and professional needs.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://apps.apple.com/in/app/moyo-international/id6760649410" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-transform">
                <Image 
                  src="/badges/app-store.svg" 
                  alt="Download on the App Store" 
                  width={120} 
                  height={40} 
                  className="h-10 w-auto"
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.acore.moyo" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 transition-transform">
                <Image 
                  src="/badges/google-play.svg" 
                  alt="Get it on Google Play" 
                  width={135} 
                  height={40} 
                  className="h-10 w-auto"
                />
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg text-white">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {LEGAL_LINKS.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-brand transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg text-white">Top Services</h3>
            <ul className="flex flex-col gap-3">
              {topServices.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-brand transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg text-white">Contact Us</h3>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              {!CONTACT.street.includes("[") && <p>{CONTACT.street}, {CONTACT.city}, {CONTACT.state} {CONTACT.pin}</p>}
              {!CONTACT.phone.includes("[") && (
                <p>
                  <a href={`tel:${CONTACT.phone.replace(/[^+\d]/g, "")}`} className="hover:text-brand transition-colors">
                    {CONTACT.phone}
                  </a>
                </p>
              )}
              {!CONTACT.email.includes("[") && (
                <p>
                  <a href={`mailto:${CONTACT.email}`} className="hover:text-brand transition-colors">
                    {CONTACT.email}
                  </a>
                </p>
              )}
              {!CONTACT.whatsapp.includes("[") && (
                <a 
                  href={`https://wa.me/${CONTACT.whatsapp.replace(/[^+\d]/g, "")}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand hover:text-brand-hover transition-colors font-medium mt-2"
                >
                  Chat on WhatsApp
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-1.5"><span className="text-brand">✓</span> Verified Experts</span>
            <span className="flex items-center gap-1.5"><span className="text-brand">⚡</span> Instant Booking</span>
            <span className="flex items-center gap-1.5"><span className="text-brand">🔒</span> 100% Secure</span>
          </div>
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Moyo International. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
