import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

// Font configuration
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Oma's Restaurant - The Essence of Arabian Cuisine",
  description:
    "Experience rich, flavorful, and unforgettable Arabian dishes at Oma's Restaurant. Serving authentic cuisine across 4 locations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.className}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Experience rich, flavorful, and unforgettable Arabian dishes at Oma's Restaurant. Serving authentic cuisine across 4 locations."
        />
      </head>
      <body className={`bg-brand-cream text-brand-brown-dark `}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
