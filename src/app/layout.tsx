import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // TOTO JE TEN NEJDŮLEŽITĚJŠÍ ŘÁDEK

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Statek Krátice",
  description: "Tradiční rodinné hospodářství a prodej ze dvora",
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="cs">
      <body className={`${inter.className} bg-stone-50 text-stone-900`}>{children}</body>
      </html>
  );
}
