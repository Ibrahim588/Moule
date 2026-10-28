import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Arabic, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { siteConfig } from "@/config/site";

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-arabic",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#30231F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://moule.com.sa"),
  title: {
    default: `${siteConfig.brandNameAr} | ${siteConfig.brandNameEn} — ضيافات الأفراح والمناسبات الفاخرة بجدة`,
    template: `%s | ${siteConfig.brandNameAr} — جدة`,
  },
  description: siteConfig.descriptionAr,
  keywords: [
    "موليه",
    "موليه جدة",
    "Moule",
    "Moule Jeddah",
    "ضيافات أفراح جدة",
    "ضيافة المناسبات",
    "تغليف هدايا المناسبات",
    "طلب ضيافة أفراح",
    "حفلات ملكة جدة",
    "استقبال مواليد جدة",
    "صواني شوكولاتة وضيافة",
    "توزيعات مناسبات جدة",
  ],
  authors: [{ name: "Moule Luxury Occasions" }],
  creator: "Moule",
  publisher: "Moule",
  formatDetection: {
    telephone: true,
    address: true,
  },
  openGraph: {
    title: `${siteConfig.brandNameAr} | ${siteConfig.taglineAr}`,
    description: siteConfig.descriptionAr,
    url: "https://moule.com.sa",
    siteName: "موليه | Moule",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "موليه — ضيافات الأفراح والمناسبات الفاخرة في جدة",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brandNameAr} | ${siteConfig.taglineAr}`,
    description: siteConfig.descriptionAr,
    images: ["https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const verifiedBranch = siteConfig.branches.find((b) => b.isVerified);

  // Structured Data for Google Local Business
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://moule.com.sa/#organization",
    name: "موليه | Moule",
    alternateName: "Moule Luxury Hospitality & Gifting",
    description: siteConfig.descriptionAr,
    telephone: siteConfig.phoneRaw,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    url: "https://moule.com.sa",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Al-Faisaliyah District",
      addressLocality: "Jeddah",
      addressRegion: "Makkah Province",
      addressCountry: "SA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "21.5645",
      longitude: "39.1728",
    },
    hasMap: siteConfig.social.googleMapsVerified,
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.tiktok,
      siteConfig.social.googleMapsVerified,
    ],
    priceRange: "$$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.ownerSuppliedRating.score.toString(),
      reviewCount: siteConfig.ownerSuppliedRating.totalReviews.toString(),
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <html lang="ar" dir="rtl" className={`${ibmPlexArabic.variable} ${cormorantGaramond.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="bg-moule-ivory text-moule-espresso font-arabic min-h-screen flex flex-col selection:bg-moule-champagne/30 selection:text-moule-espresso">
        <AnnouncementBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}

