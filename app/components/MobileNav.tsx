"use client";

import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { Facebook, Instagram, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

// --- Framer Motion Variants ---
const menuVariants = {
  hidden: {
    x: -400,
    transition: { duration: 0.3, ease: easeInOut },
  },
  visible: {
    x: 0,
    transition: { duration: 0.3, ease: easeInOut },
  },
};

const navContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const navItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 120 },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export function MobileNav({
  navLinks,
  onClose,
  logoUrl,
}: {
  navLinks: { href: string; label: string }[];
  onClose: () => void;
  logoUrl: string;
}) {
  // Prevent scroll when menu is open
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Only close when clicking/touching on the overlay, not inside the menu
  const handleOverlayClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    onClose?.();
  };

  // Stop propagation for menu, so clicking inside does not close
  const stopPropagation = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
  };

  // Fix navigation: Use router for client navigation and close after route change
  const router = require("next/navigation").useRouter?.() ?? null;

  const handleNavLinkClick = (
    href: string,
    e: React.MouseEvent | React.TouchEvent
  ) => {
    e.preventDefault();
    e.stopPropagation();
    if (router) {
      router.push(href);
    } else {
      window.location.href = href;
    }
    // Close after navigation
    onClose?.();
  };

  return (
    <AnimatePresence>
      {/* Background Overlay: closes on click/touch */}
      <motion.div
        className="fixed inset-0 z-40 bg-black/40 md:hidden"
        onClick={handleOverlayClick}
        onTouchStart={handleOverlayClick}
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ duration: 0.3 }}
      />

      {/* Mobile Menu */}
      <motion.div
        id="mobile-menu"
        className="
          fixed top-0 left-0 z-[55] h-full w-full max-w-[100vw] bg-white md:hidden shadow-xl
          flex flex-col
        "
        variants={menuVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={stopPropagation}
        onTouchStart={stopPropagation}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
          <Image
            src={logoUrl}
            alt="Omas Restaurant Logo"
            width={64}
            height={64}
            className="h-14 w-14 object-contain"
            priority
          />
          <button
            aria-label="Close menu"
            onClick={onClose}
            className="text-4xl text-gray-800"
          >
            &times;
          </button>
        </div>

        {/* Navigation Links (Scrollable) */}
        <motion.nav
          className="flex flex-col gap-4 px-6 py-6 text-lg font-semibold text-gray-900 flex-1 overflow-y-auto"
          variants={navContainerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {navLinks.map((link) => (
            <motion.div key={link.href} variants={navItemVariants}>
              <a
                href={link.href}
                className="block py-3 px-4 rounded-md hover:bg-gray-100 hover:text-yellow-600 transition-all duration-200"
                onClick={(e) => handleNavLinkClick(link.href, e)}
                onTouchStart={(e) => handleNavLinkClick(link.href, e)}
              >
                {link.label}
              </a>
            </motion.div>
          ))}
        </motion.nav>

        {/* Social Links & Contact Info */}

        {/* Divider & Copyright */}
        <div className="text-center mt-2 pb-7">
          <p className="text-sm text-brand-cream/75 tracking-wide">
            © {new Date().getFullYear()} <span className="font-semibold  text-gray-700">Oma&apos;s Restaurant</span>. All Rights Reserved.
          </p>
        </div>

      </motion.div>
      {/* End of Mobile Menu */}
    </AnimatePresence>
  );
}