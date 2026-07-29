import Script from "next/script";

interface ServiceJsonLdProps {
  serviceType: string;
  description: string;
}

export function ServiceJsonLd({ serviceType, description }: ServiceJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceType,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "MOYO International",
      "image": "https://www.moyointernational.com/logo.svg"
    },
    "areaServed": {
      "@type": "City",
      "name": "Noida"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <Script
      id={`service-jsonld-${serviceType.replace(/\s+/g, '-').toLowerCase()}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
