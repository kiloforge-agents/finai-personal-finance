import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FinAI — Your AI-Powered Personal Finance Assistant",
  description:
    "Meet your personal finance AI. Get ChatGPT-style spending insights, real-time in-store budget mode, and smarter money decisions — all in one app.",
  keywords: "personal finance AI, spending tracker, in-store mode, AI finance assistant, budget app",
  openGraph: {
    title: "FinAI — Your AI-Powered Personal Finance Assistant",
    description:
      "AI spending insights + real-time in-store mode. The finance app consumers have been asking for.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
