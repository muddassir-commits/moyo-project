import { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}

export function generateSeoMetadata({ title, description, path, noindex = false }: SEOProps): Metadata {
  const url = `https://www.moyointernational.com${path}`;
  
  return {
    title: `${title} | MOYO`,
    description,
    alternates: {
      canonical: url,
    },
    robots: {
      index: !noindex,
      follow: !noindex,
    },
    openGraph: {
      title: `${title} | MOYO`,
      description,
      url,
      siteName: "MOYO",
      images: [
        {
          url: "https://www.moyointernational.com/og-image.png",
          width: 1200,
          height: 630,
          alt: "MOYO International",
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | MOYO`,
      description,
      images: ["https://www.moyointernational.com/og-image.png"],
    },
  };
}
