import React from "react";
import type { Metadata } from "next";
import HomeClient from "./HomeClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.riyaescortservices.com";

export const metadata: Metadata = {
  title: "Riya Escorts Hyderabad | #1 VIP Call Girls & Escorts Service (24/7 Available)",
  description:
    "Riya Escorts Hyderabad offers elite, verified call girls and independent escort models in Hyderabad. 100% genuine photos, cash on delivery, and 20-30 min hotel/home outcall in Banjara Hills, Jubilee Hills, Hitec City, Gachibowli & Madhapur.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Riya Escorts Hyderabad | #1 VIP Call Girls & Escorts Service",
    description:
      "Book 100% verified VIP escorts and independent call girls in Hyderabad. Available 24/7 for luxury hotel & home outcalls across all locations.",
    url: siteUrl,
    siteName: "Riya Escorts Hyderabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/homepart.png",
        width: 1200,
        height: 630,
        alt: "Riya Escorts Hyderabad VIP Call Girls",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Riya Escorts Hyderabad | #1 VIP Call Girls & Escorts Service",
    description:
      "Book 100% verified VIP escorts and independent call girls in Hyderabad. Available 24/7 for luxury hotel & home outcalls.",
    images: ["/images/homepart.png"],
  },
};

export default function Page() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Riya Escorts Hyderabad",
        description:
          "Elite, verified call girls and independent escort models in Hyderabad with 100% privacy and cash on delivery.",
        inLanguage: "en-IN",
      },
      {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/#organization`,
        name: "Riya Escorts Hyderabad",
        url: siteUrl,
        logo: `${siteUrl}/favicon.ico.png`,
        image: `${siteUrl}/images/homepart.png`,
        telephone: "+919004067952",
        priceRange: "₹₹₹",
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, UPI, Online",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Hyderabad",
          addressRegion: "Telangana",
          postalCode: "500081",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 17.385,
          longitude: 78.4867,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "250",
          bestRating: "5",
          worstRating: "1",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <HomeClient />
    </>
  );
}
