import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site.config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.siteTitle,
  description: siteConfig.siteDescription,
  icons: {
    icon: siteConfig.favicon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ background: siteConfig.colors.backgroundStart, minHeight: '100vh' }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ background: siteConfig.colors.backgroundStart, minHeight: '100vh', color: '#fff' }}
      >
        {children}
      </body>
    </html>
  );
}
