import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Superteam Brazil | The Solana Community in Brazil",
  description: "Join the most active community of builders, creatives, and operators in the Solana ecosystem in Brazil.",
  icons: {
    icon: '/images/logo.svg',
  },
  openGraph: {
    images: ['/images/banner.svg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-dark-bg text-white`}
      >
        {children}
      </body>
    </html>
  );
}
