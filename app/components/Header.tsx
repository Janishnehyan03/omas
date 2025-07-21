"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MobileNav } from "./MobileNav";

// Data for navigation links
const navLinks = [
  { href: "#about", label: "ABOUT" },
  { href: "#menu", label: "MENU" },
  { href: "#locations", label: "LOCATIONS" },
  { href: "#reviews", label: "REVIEWS" },
];

// Framer Motion variants for the hamburger icon lines
const hamburgerLineVariants = {
  closed: { rotate: 0, y: 0 },
  open_top: { rotate: 45, y: 7 },
  open_bottom: { rotate: -45, y: -7 },
};

export function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const toggleMobileNav = () => setMobileNavOpen((prev) => !prev);

  // Effect to lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileNavOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 shadow-sm backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* --- Logo --- */}
          <Link href="/" className="flex-shrink-0 group" aria-label="Homepage">
            <Image
              src="/images/omas-logo.png"
              alt="Omas Restaurant Logo"
              width={64}
              height={64}
              className="h-16 w-16 object-contain md:h-20 md:w-20 transition-transform group-hover:scale-105 group-hover:rotate-3"
              priority
            />
          </Link>

          {/* --- Desktop Navigation --- */}
          <nav className="hidden items-center gap-8 text-lg font-medium text-brand-charcoal md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-3 py-1 text-sm rounded-md transition-all duration-200 hover:text-brand-gold focus:outline-none
                  hover:bg-brand-cream/80  group"
              >
                <span className="group-hover:drop-shadow-sm">{link.label}</span>
                <span
                  className="absolute inset-x-1 bottom-0 h-0.5 bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </nav>

          {/* --- Desktop Stores Button --- */}
          <Link
            href="#locations"
            className="hidden rounded-full px-7 py-3 font-semibold text-white
                       transition-all duration-300 hover:scale-105 bg-yellow-600 hover:text-brand-charcoal hover:shadow-lg md:inline-block border border-transparent hover:border-brand-charcoal"
          >
            Stores
          </Link>

          {/* --- Mobile Stores Button + Hamburger Button (Row) --- */}
          <div className="flex items-center gap-3 md:hidden">
            <Link
              href="#locations"
              className="rounded-full bg-brand-brown px-4 py-2 font-semibold text-white text-sm shadow transition-all hover:bg-brand-gold hover:text-brand-charcoal hover:shadow-lg border border-transparent hover:border-brand-charcoal"
              tabIndex={0}
            >
              Stores
            </Link>
            <button
              className="relative z-[60] h-8 w-8 text-brand-charcoal flex items-center justify-center"
              onClick={toggleMobileNav}
              aria-label="Toggle menu"
              aria-expanded={mobileNavOpen}
              aria-controls="mobile-menu"
            >
              {/* Hamburger/close icon with animation */}
              <motion.div
                className="absolute top-1/2 left-1/2 h-0.5 w-7 -translate-x-1/2 -translate-y-[9px] rounded-full bg-brand-charcoal"
                variants={hamburgerLineVariants}
                animate={mobileNavOpen ? "open_top" : "closed"}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 h-0.5 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-charcoal"
                animate={{ opacity: mobileNavOpen ? 0 : 1 }}
                transition={{ duration: 0.1 }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 h-0.5 w-7 -translate-x-1/2 translate-y-[7px] rounded-full bg-brand-charcoal"
                variants={hamburgerLineVariants}
                animate={mobileNavOpen ? "open_bottom" : "closed"}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* --- Mobile Navigation Drawer (componentized) --- */}
      <AnimatePresence>
        {mobileNavOpen && (
          <MobileNav
            navLinks={navLinks}
            onClose={toggleMobileNav}
            logoUrl={"/images/omas-logo.png"}
          />
        )}
      </AnimatePresence>
    </>
  );
}
