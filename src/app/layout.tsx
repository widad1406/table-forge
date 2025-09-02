import type { Metadata } from "next";
import { siteConfig, absoluteUrl } from "@/lib/seo";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.name,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  applicationName: siteConfig.name,
  classification: siteConfig.category,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    images: [
      {
        url: absoluteUrl("/og_image.png"),
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: siteConfig.social.twitter,
    images: [absoluteUrl("/og_image.png")],
  },
  authors: {
    name: "Anmoldeep Singh",
    url: siteConfig.social.github,
  },
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/icon" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-mono antialiased min-h-screen w-full relative bg-background`}
      >
        <div className="themed-bg" />
        <ThemeProvider>
          <div className="relative z-10">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  );
}
