import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Karachi Kitchen Manchester | Authentic Pakistani Restaurant",
    template: "%s | Karachi Kitchen Manchester",
  },
  description:
    "Authentic Pakistani home cooking in the heart of Manchester — recipes passed down through generations. Dine in, takeaway and delivery on Wilmslow Road, Rusholme.",
  keywords: [
    "Pakistani restaurant Manchester",
    "Pakistani takeaway Rusholme",
    "Karachi Kitchen Manchester",
    "Curry Mile restaurant",
    "halal restaurant Manchester",
    "biryani Manchester",
    "nihari Manchester",
    "Pakistani food delivery Manchester",
  ],
  openGraph: {
    type: "website",
    siteName: "Karachi Kitchen Manchester",
    locale: "en_GB",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Karachi Kitchen Manchester",
    description:
      "Authentic Pakistani home cooking in the heart of Manchester's Curry Mile.",
    url: "https://www.karachikitchenmanchester.co.uk",
    telephone: "+44 161 234 5678",
    email: "hello@karachikitchen.co.uk",
    address: {
      "@type": "PostalAddress",
      streetAddress: "142 Wilmslow Road",
      addressLocality: "Rusholme",
      addressRegion: "Manchester",
      postalCode: "M14 5AN",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.4468,
      longitude: -2.2218,
    },
    servesCuisine: ["Pakistani", "South Asian", "Halal"],
    priceRange: "££",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday"],
        opens: "17:00",
        closes: "22:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "12:00",
        closes: "23:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "12:00",
        closes: "22:00",
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        {children}
        <Footer />
        <CartDrawer />
      </body>
    </html>
  );
}
