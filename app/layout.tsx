import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Roatan Tours & Water Activities | Splash Tours",
  description:
    "Discover the best Roatan tours with Splash Tours. Water bike tours, mangrove tunnels, beach activities & more. Perfect for cruise ship guests visiting Roatan Island.",
  keywords: "Roatan tours, water bike tour Roatan, mangrove tunnel tour, island tours, snorkeling Roatan, beach tours, Roatan activities, Caribbean tours, cruise tours",
  authors: [{ name: "Marty Dixon" }],
  openGraph: {
    title: "Roatan Tours & Water Activities | Splash Tours",
    description:
      "Discover the best Roatan tours with Splash Tours. Water bike tours, mangrove tunnels, beach activities & more. Perfect for cruise ship guests visiting Roatan Island.",
    type: "website",
    url: "https://www.splashtoursroatan.com",
    siteName: "Splash Tours",
    images: [
      {
        url: "https://www.splashtoursroatan.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Splash Tours - Roatan Island Adventures",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roatan Tours & Water Activities | Splash Tours",
    description: "Discover the best Roatan tours - water bikes, mangrove tunnels, beach activities & more",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-gray-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
