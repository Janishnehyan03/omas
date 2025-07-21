import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone } from 'lucide-react'

// Data for navigation links (updated for modern UI)
const navLinks = [
  { href: "#about", label: "About Us" },
  { href: "#menu", label: "Signature Menu" },
  { href: "#locations", label: "Our Locations" },
  { href: "#reservation", label: "Book a party" },
];

export function Footer() {
  return (
    <footer className="bg-brand-brown text-brand-cream py-14">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-14 items-start">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-start">
          <div className="mb-4 flex items-center gap-3">
            <Image
              src="/images/omas-logo.png"
              alt="Omas Restaurant Logo"
              width={58}
              height={58}
              className="rounded-xl shadow-xl bg-brand-brown ring-2 ring-brand-cream/30"
              priority
            />
            <div>
              <h3 className="text-3xl font-extrabold mb-0.5 tracking-tight text-white drop-shadow-sm">
                Oma's Restaurant
              </h3>
           
            </div>
          </div>
          <p className="text-brand-cream/90 text-lg max-w-xs mt-3">
            Experience the Essence of Arabian Cuisine —<br />
            <span className="font-semibold text-white">Rich, Flavorful & Unforgettable.</span>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-bold mb-5 tracking-tight text-white">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3">
            {navLinks.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors text-brand-cream/90 hover:text-yellow-200 hover:underline font-medium text-lg tracking-wide"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-bold mb-5 tracking-tight text-white">
            Contact Us
          </h3>
          <div className="space-y-4 text-lg">
            <a
              href="tel:9526051554"
              className="flex items-center gap-3 hover:text-yellow-200 transition-colors group"
              aria-label="Call Oma's Restaurant"
            >
              <Phone size={22} strokeWidth={2.3} className="text-brand-cream group-hover:text-yellow-200" />
              <span className="font-semibold tracking-wide">+91 9526 051 554</span>
            </a>
            <p className="flex items-center gap-3">
              <MapPin size={22} strokeWidth={2.3} className="text-brand-cream" />
              <span>4 Branches in Kerala</span>
            </p>
          </div>
        </div>
      </div>
      {/* Divider & Copyright */}
      <div className="text-center mt-14 border-t border-brand-brown/30 pt-7">
        <p className="text-sm text-brand-cream/75 tracking-wide">
          © {new Date().getFullYear()} <span className="font-semibold text-white">Oma's Restaurant</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}