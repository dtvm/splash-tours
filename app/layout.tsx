import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Splash Tours | Roatan Island Tours & Activities",
  description:
    "Ride. Explore. Discover Paradise. Turn Your Cruise Stop Into the Best Day of Your Trip",
  keywords: "Roatan tours, island tours, snorkeling, beach tours, Roatan activities, Caribbean tours",
  authors: [{ name: "Splash Tours" }],
  openGraph: {
    title: "Splash Tours | Roatan Island Tours & Activities",
    description:
      "Ride. Explore. Discover Paradise. Turn Your Cruise Stop Into the Best Day of Your Trip",
    type: "website",
    url: "https://splashtours.com",
    siteName: "Splash Tours",
    images: [
      {
        url: "https://splashtours.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Splash Tours - Roatan Island Adventures",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Splash Tours | Roatan Island Tours",
    description: "Ride. Explore. Discover Paradise",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
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
      </body>
    </html>
  );
}
