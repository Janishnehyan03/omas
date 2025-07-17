import type { Metadata } from 'next';
import { Inter, Playfair_Display, Dancing_Script } from 'next/font/google';
import './globals.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Font configuration
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfairDisplay = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair-display' });
const dancingScript = Dancing_Script({ subsets: ['latin'], variable: '--font-dancing-script', weight: ['400', '500', '700'] });

export const metadata: Metadata = {
  title: 'Omas Restaurant - The Essence of Arabian Cuisine',
  description:
    'Experience rich, flavorful, and unforgettable Arabian dishes at Omas Restaurant. Serving authentic cuisine across 4 locations.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.variable} ${playfairDisplay.variable} ${dancingScript.variable} bg-brand-cream text-brand-brown-dark font-sans`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
