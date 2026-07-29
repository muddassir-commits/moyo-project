"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MAIN_NAV } from "@/config/navigation";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ease-expo ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-line' : 'bg-white/80 backdrop-blur-[12px] border-b border-gray-200/50'}`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ease-expo ${scrolled ? 'h-16' : 'h-20'}`}>
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/logo.svg" 
            alt="MOYO Logo" 
            width={120} 
            height={40} 
            className="w-auto h-8"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {MAIN_NAV.map((item) => (
            <div key={item.name} className="relative group">
              {item.children ? (
                <div 
                  className="flex items-center gap-1 cursor-pointer text-muted hover:text-brand transition-colors py-2"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <Link href={item.href}>{item.name}</Link>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  
                  {isServicesOpen && (
                    <div className="absolute top-full left-0 w-72 bg-white shadow-cardHover rounded-2xl border border-line p-2 grid gap-1 mt-2 before:absolute before:-top-4 before:left-0 before:w-full before:h-4">
                      {item.children.map(child => (
                        <Link 
                          key={child.href} 
                          href={child.href}
                          className="px-4 py-2 text-sm font-medium text-muted hover:text-brand hover:bg-brand-50 rounded-lg transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link 
                  href={item.href}
                  className="text-muted font-medium hover:text-brand transition-colors py-2"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link 
            href="https://app.moyointernational.com" 
            className="inline-flex items-center justify-center btn-primary min-h-[44px] px-6 font-medium"
          >
            Download App
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-ink"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-line shadow-card h-[calc(100vh-4rem)] overflow-y-auto pb-24">
          <div className="p-4 flex flex-col gap-4">
            {MAIN_NAV.map((item) => (
              <div key={item.name} className="flex flex-col border-b border-line pb-2 last:border-0">
                <Link 
                  href={item.href}
                  className="text-lg font-medium text-ink py-2"
                  onClick={() => !item.children && setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="flex flex-col gap-2 pl-4 mt-2">
                    {item.children.map(child => (
                      <Link 
                        key={child.href} 
                        href={child.href}
                        className="text-muted hover:text-brand py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link 
              href="https://app.moyointernational.com" 
              className="mt-4 flex items-center justify-center btn-primary min-h-[44px] px-6 font-medium"
            >
              Download App
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
