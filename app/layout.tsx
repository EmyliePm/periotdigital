import type { Metadata } from "next";
import "./globals.css";
import AnalyticsConsent from "@/components/AnalyticsConsent";
import { Inter, Cormorant_Garamond } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Affordable Bespoke Web Design | Periot Digital",
  description:
    "Affordable bespoke websites for small businesses, startups and independent brands worldwide. Modern, responsive web design from £299. UK-based, working internationally.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable}`}>
        {children}
        <AnalyticsConsent />
      </body>
    </html>
  );
}
