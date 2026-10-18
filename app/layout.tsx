import type { Metadata, Viewport } from "next";
import "./globals.css";

// Production URL. Override with NEXT_PUBLIC_SITE_URL if the domain changes. Needed so the OG image URL is absolute.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dinnnah-arthur-ugochukwu-portfolio.vercel.app";

const TITLE = "Dinnah Arthur Ugochukwu — Graphic Designer";
const DESCRIPTION =
  "Creative graphic designer with 5 years of experience in branding, digital marketing assets and social media graphics. Selected work 2022–2026.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: "Dinnah Arthur Ugochukwu",
    type: "website",
    locale: "en_NG",
    images: [
      {
        url: "/og-img.png", // put a 1200×630 file at public/og-img.png
        width: 1200,
        height: 630,
        alt: "Dinnah Arthur Ugochukwu — Graphic Designer portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-img.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0d0d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}