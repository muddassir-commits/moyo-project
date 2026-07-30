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
            <Link href="/" className="inline-block group">
              <Image 
                src="/logo.svg" 
                alt="MOYO Logo" 
                width={140} 
                height={48} 
                className="w-auto h-10 group-hover:scale-105 transition-transform duration-300 ease-expo brightness-0 invert"
              />
            </Link>
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
            
            <div className="flex items-center gap-5 mt-4">
              <a href="#" className="text-gray-400 hover:text-brand hover:-translate-y-1 transition-all" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-brand hover:-translate-y-1 transition-all" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-brand hover:-translate-y-1 transition-all" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
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
