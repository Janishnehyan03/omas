import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone } from 'lucide-react'

// Data for navigation links (updated for modern UI)
const navLinks = [
  { href: "#about", label: "About Us" },
  { href: "#menu", label: "Signature Menu" },
  { href: "#locations", label: "Our Locations" },
  { href: "#reservation", label: "Book a Table" },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-brand-brown-dark via-[#4d3928] to-[#2c1b0d] text-brand-cream py-14">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-start">
          <div className="mb-4">
            <Image
              src="/images/omas-logo.png"
              alt="Omas Restaurant Logo"
              width={54}
              height={54}
              className="rounded-lg shadow-lg bg-brand-brown"
              priority
            />
          </div>
          <h3 className="text-3xl font-serif font-bold mb-2 tracking-tight">Omas Restaurant</h3>
          <p className="text-brand-cream/80 text-lg max-w-xs">
            Experience the Essence of Arabian Cuisine — Rich, Flavorful & Unforgettable.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-serif font-bold mb-4 tracking-tight">Quick Links</h3>
          <ul className="flex flex-col gap-3">
            {navLinks.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors text-brand-cream/90 hover:text-white hover:underline font-medium text-lg"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-serif font-bold mb-4 tracking-tight">Contact Us</h3>
          <div className="space-y-3 text-lg">
            <a
              href="tel:9526051554"
              className="flex items-center gap-3 hover:text-white transition-colors"
              aria-label="Call Omas Restaurant"
            >
              <Phone size={20} strokeWidth={2.2} className="text-brand-cream" />
              <span className="font-semibold tracking-wide">+91 9526 051 554</span>
            </a>
            <p className="flex items-center gap-3">
              <MapPin size={20} strokeWidth={2.2} className="text-brand-cream" />
              <span>4 Branches in Kerala</span>
            </p>
          </div>
        </div>
      </div>
      {/* Divider & Copyright */}
      <div className="text-center mt-12 border-t border-brand-brown/40 pt-6">
        <p className="text-sm text-brand-cream/80 tracking-wide">
          © {new Date().getFullYear()} <span className="font-serif font-semibold">Omas Restaurant</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}