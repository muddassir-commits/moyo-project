"use client";

import Link from "next/link";
import { CONTACT } from "@/config/navigation";
import { useEffect, useState } from "react";

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after scrolling down 100px
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-line shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] p-3 z-50 flex items-center gap-3">
      {!CONTACT.whatsapp.includes("[") && (
        <Link 
          href={`https://wa.me/${CONTACT.whatsapp.replace(/[^+\d]/g, "")}`}
          className="flex-1 flex items-center justify-center gap-2 bg-transparent border-[1.5px] border-brand text-brand-deep rounded-[12px] min-h-[44px] font-medium hover:bg-brand-50 transition-colors"
        >
          WhatsApp
        </Link>
      )}
      <Link 
        href="https://app.moyointernational.com"
        className="flex-[2] flex items-center justify-center bg-brand text-white rounded-[12px] min-h-[44px] font-medium hover:bg-brand-hover transition-colors"
      >
        Download App
      </Link>
    </div>
  );
}
