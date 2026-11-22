import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = "https://1mj23cd024-hwa-hackathon.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PawPal — They're never really alone",
    template: "%s · PawPal",
  },
  description:
    "Meet PawPal, the AI dog companion robot that keeps your dog entertained, connected and cared for while you're away. Play, treats, two-way video and your voice — all in one friendly robot.",
  keywords: [
    "PawPal",
    "dog companion robot",
    "AI pet robot",
    "dog camera",
    "treat dispenser",
    "pet tech",
    "separation anxiety dog",
  ],
  authors: [{ name: "PawPal Robotics" }],
  creator: "PawPal Robotics",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "PawPal",
    title: "PawPal — They're never really alone",
    description:
      "The AI companion that keeps your dog entertained, connected and cared for while you're away.",
  },
  twitter: {
    card: "summary_large_image",
    title: "PawPal — They're never really alone",
    description:
      "The AI companion that keeps your dog entertained, connected and cared for while you're away.",
  },
  alternates: { canonical: "/" },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B2B20",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-forest-900 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-cream-50"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
