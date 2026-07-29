"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Script from "next/script";

interface FAQ {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sanitizedFaqs = faqs.map(faq => ({
    q: faq.q.replace(/₹?\[X\](\/mo|\/month)?/g, "variable rates"),
    a: faq.a.replace(/₹?\[X\](\/mo|\/month)?/g, "variable rates")
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": sanitizedFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-16">
      <Script
        id={`faq-jsonld`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <h2 className="text-3xl md:text-4xl font-bold text-ink mb-10 text-center tracking-tight">
        Frequently Asked Questions
      </h2>
      
      <div className="flex flex-col gap-4">
        {sanitizedFaqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className={`border border-line rounded-[16px] bg-white overflow-hidden transition-all duration-300 ease-expo ${isOpen ? 'shadow-cardHover border-brand-200' : 'shadow-card hover:border-brand-200'}`}
            >
              <button
                className="w-full flex items-center justify-between py-6 px-6 md:px-8 text-left focus:outline-none"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-ink text-lg pr-8">{faq.q}</span>
                <span className={`flex-shrink-0 text-brand transition-transform duration-300 ease-expo bg-brand-50 p-2 rounded-full ${isOpen ? 'rotate-180 bg-brand text-white' : ''}`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 px-6 md:px-8 text-muted leading-relaxed text-lg">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
