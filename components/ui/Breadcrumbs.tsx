import Link from "next/link";
import Script from "next/script";
import React from "react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  trail: BreadcrumbItem[];
}

export function Breadcrumbs({ trail }: BreadcrumbsProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": trail.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://moyointernational.com${item.href}`
    }))
  };

  return (
    <>
      <Script
        id={`breadcrumb-jsonld-${trail[trail.length - 1]?.label.replace(/\s+/g, '-')}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
          {trail.map((item, index) => {
            const isLast = index === trail.length - 1;
            return (
              <React.Fragment key={item.href}>
                <li className="flex items-center gap-2">
                  {isLast ? (
                    <span className="text-ink font-medium" aria-current="page">
                      {item.label}
                    </span>
                  ) : (
                    <Link href={item.href} className="hover:text-brand transition-colors">
                      {item.label}
                    </Link>
                  )}
                </li>
                {!isLast && (
                  <li aria-hidden="true" className="text-faint">
                    ›
                  </li>
                )}
              </React.Fragment>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
