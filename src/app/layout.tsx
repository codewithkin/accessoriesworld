import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/reusable/DesktopNavbar";
import Footer from "@/components/reusable/Footer";
import MobileNavbar from "@/components/reusable/MobileNavbar";
import QueryClientWrapper from "@/providers/QueryClientWrapper";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Accessories World | Affordable Electronics & Phone Accessories in Mutare",
  description:
    "Shop affordable phone accessories, chargers, earphones, and more at Accessories World in Mutare. Quality products, great prices, and amazing service.",
  keywords: [
    "Accessories World",
    "phone accessories Mutare",
    "Mutare electronics",
    "cheap earphones Mutare",
    "charging cables Mutare",
    "affordable electronics Zimbabwe"
  ],
  authors: [{ name: "Accessories World" }],
  creator: "Accessories World",
  icons: "/favicon.ico",
  metadataBase: new URL("https://accessoriesworld.co.zw"), // update with actual domain if different
  openGraph: {
    title: "Accessories World | Affordable Electronics in Mutare",
    description:
      "Accessories World brings you the best in phone accessories and electronics at unbeatable prices. Find us in Mutare, Africa Mall.",
    url: "https://accessoriesworld.co.zw",
    siteName: "Accessories World",
    images: [
      {
        url: "/og-image.png", // replace with actual OG image path
        width: 1200,
        height: 630,
        alt: "Accessories World - Best Accessories in Mutare",
      },
    ],
    locale: "en_ZW",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryClientWrapper>
          <Navbar />
          <MobileNavbar />
          {children}
          <Footer />
          <Toaster richColors expand position="top-center" />
        </QueryClientWrapper>
      </body>
    </html>
  );
}
