import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeProvider from "./components/ThemeProvider";
import PageTransition from "./components/PageTransition";

export const metadata: Metadata = {
  title: "VisionCut | Creative Digital Marketing Agency in Karnataka",
  description:
    "VisionCut is a premium creative digital marketing agency in Karnataka, India helping businesses, creators, and educational institutions grow through design, video, SEO, and performance marketing.",
  metadataBase: new URL("https://visioncut.agency"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "VisionCut | Creative Digital Marketing Agency in Karnataka",
    description:
      "High-end design, growth marketing, and SEO services for brands across Karnataka.",
    url: "https://visioncut.agency",
    siteName: "VisionCut",
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "VisionCut | Creative Digital Marketing Agency",
    description: "Design. Market. Grow with VisionCut."
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "VisionCut",
  description:
    "Creative digital marketing agency in Karnataka, India serving businesses, creators, and educational institutions.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karnataka",
    addressCountry: "IN"
  },
  areaServed: "Karnataka",
  url: "https://visioncut.agency",
  sameAs: ["https://instagram.com/visioncutstudio"]
};

const agencyJsonLd = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  name: "VisionCut",
  url: "https://visioncut.agency",
  logo: "https://visioncut.agency/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-90000-12345",
    contactType: "customer service"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          <main className="pt-28">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(agencyJsonLd) }}
        />
      </body>
    </html>
  );
}
