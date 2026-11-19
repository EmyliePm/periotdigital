
import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
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
  title: "Affordable Bespoke Web Design UK | Periot Digital",
  description:
    "Affordable bespoke web design for small businesses, charities and independent brands across the UK. Modern, responsive websites from £299.",
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
        <GoogleAnalytics gaId="G-V118L4LK6F" />
      </body>
    </html>
  );
}
