import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dinnah Arthur Ugochukwu — Graphic Designer",
  description:
    "Creative graphic designer with 5 years of experience in branding, digital marketing assets and social media graphics. Selected work 2022–2026.",
  openGraph: {
    title: "Dinnah Arthur Ugochukwu — Graphic Designer",
    description: "Branding, social media graphics and print design. Selected work 2022–2026.",
    type: "website",
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
