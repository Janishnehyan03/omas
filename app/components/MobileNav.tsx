"use client";

import { AnimatePresence, easeInOut, motion } from "framer-motion";
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

  // Ensure keys are unique: use both href and label, and fallback to index if needed
  // Also, fix reservation button key
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

      {/* Navigation Menu: does NOT close on click/touch inside */}
      <motion.div
        id="mobile-menu"
        className="fixed top-0 left-0 z-[55] h-full w-full max-w-sm bg-white md:hidden shadow-xl"
        variants={menuVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={stopPropagation}
        onTouchStart={stopPropagation}
      >
        {/* Card Top: Logo and Close Button */}
        <div className="flex items-center justify-between px-6 pt-6 pb-2">
          <Image
            src={logoUrl}
            alt="Omas Restaurant Logo"
            width={64}
            height={64}
            className="h-14 w-14 object-contain md:h-16 md:w-16"
            priority
          />
          {/* Add a physical close button for accessibility */}
          <button
            aria-label="Close menu"
            onClick={onClose}
            className="text-3xl ml-2"
          >
            &times;
          </button>
        </div>

        <motion.nav
          className="flex flex-col gap-4 px-8 pt-10 text-2xl font-semibold text-brand-charcoal"
          variants={navContainerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {navLinks.map((link, index) => (
            <motion.div
              key={`${link.label}`}
              variants={navItemVariants}
            >
              <a
                href={link.href}
                className="block border-b border-gray-200 py-3 cursor-pointer"
                onClick={(e) => handleNavLinkClick(link.href, e)}
                onTouchStart={(e) => handleNavLinkClick(link.href, e)}
                tabIndex={0}
                role="link"
              >
                {link.label}
              </a>
            </motion.div>
          ))}

          {/* Reservation Button in Mobile Menu */}
          <motion.div
            key="reservation-link"
            variants={navItemVariants}
            className="mt-6"
          >
            <a
              href="#reservation"
              className="inline-block w-full rounded-full bg-brand-charcoal py-4 px-7 text-center font-semibold text-white shadow-lg cursor-pointer"
              onClick={(e) => handleNavLinkClick("#reservation", e)}
              onTouchStart={(e) => handleNavLinkClick("#reservation", e)}
              tabIndex={0}
              role="link"
            >
              Reservation
            </a>
          </motion.div>
        </motion.nav>
      </motion.div>
    </AnimatePresence>
  );
}
