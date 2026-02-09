import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  style: "italic",
});

export const metadata: Metadata = {
  title: "Derek Han | UI/UX Designer & Engineer",
  description: "Portfolio of Derek Han - Designing and building digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased min-h-screen flex flex-col`}
      >
        <SmoothScroll>
          <div className="fixed inset-0 z-[-1] bg-grid-pattern opacity-50 pointer-events-none" />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
