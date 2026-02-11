import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Labrynth Automation — Custom AI Automations for Local Businesses",
  description:
    "Labrynth builds custom automations that handle scheduling, follow-ups, and client communication for local businesses. Save 10+ hours a week and reduce no-shows.",
  openGraph: {
    title: "Labrynth Automation — Stop Doing Busywork. Start Growing.",
    description:
      "Custom AI automations that handle scheduling, follow-ups, and client communication for local businesses.",
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
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
