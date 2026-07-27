import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TradeVault Pro — The Smart Fintech Broker",
    template: "%s | TradeVault Pro",
  },
  description:
    "TradeVault Pro is a next-generation fintech broker offering stocks, forex, crypto, and ETFs trading with zero commission and institutional-grade tools.",
  keywords: [
    "fintech",
    "broker",
    "trading",
    "stocks",
    "forex",
    "crypto",
    "ETF",
    "investment",
  ],
  authors: [{ name: "TradeVault Pro" }],
  creator: "TradeVault Pro",
  metadataBase: new URL("https://tradevaultpro.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tradevaultpro.com",
    siteName: "TradeVault Pro",
    title: "TradeVault Pro — The Smart Fintech Broker",
    description:
      "Trade stocks, forex, crypto & ETFs with zero commission.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TradeVault Pro — The Smart Fintech Broker",
    description:
      "Trade stocks, forex, crypto & ETFs with zero commission.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} dark h-full scroll-smooth`}
    >
      <body className="min-h-screen bg-background text-foreground">


        {/* Fixed Navbar Height */}
        <main className="pt-20">
          <Navbar />
          {children}
        </main>

        {/* <Footer /> */}
      </body>
    </html>
  );
}