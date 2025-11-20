import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadataBase = new URL(siteConfig.url);

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.shortName,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Crystal ERP dashboards",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@Crystal ERPco",
    images: ["/twitter-image"],
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-KE": "/",
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/opengraph-image`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.contact.phone,
    contactType: "customer support",
    areaServed: "KE",
    availableLanguage: ["en"],
  },
  sameAs: Object.values(siteConfig.social),
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.shortName,
  url: siteConfig.url,
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteConfig.url}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Crystal ERP & POS Suite",
  description: siteConfig.description,
  brand: {
    "@type": "Brand",
    name: siteConfig.shortName,
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "KES",
    lowPrice: "2900",
    highPrice: "6500",
    availability: "https://schema.org/InStock",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-slate-50">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-slate-900`}
      >
        <Navbar />
        <main className="mx-auto w-full max-w-6xl px-4 py-12 lg:px-6">
          {children}
        </main>
        <Footer />
        <Script
          id="schema-organization"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(organizationJsonLd)}
        </Script>
        <Script
          id="schema-website"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(websiteJsonLd)}
        </Script>
        <Script
          id="schema-product"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(productJsonLd)}
        </Script>
      </body>
    </html>
  );
}
