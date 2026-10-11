"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const images = [
    "/images/6thmail.jpg",
    "/images/kannur.jpg",
    "/images/panoor.jpg",
    "/images/mambram.jpg",
  ];

  // Carousel logic
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [current, images.length]);

  return (
    <section className="relative h-[70vh] md:h-[92vh] flex items-start justify-start text-left text-white overflow-hidden lg:p-10 px-3 sm:px-5">
      {/* Background Carousel */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence initial={false}>
          <motion.div
            key={images[current]}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${images[current]}')` }}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0, scale: 1.12 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      {/* Small Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/45 pointer-events-none"></div>

      {/* Gradient Overlay (optional, keeps top fade) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent pointer-events-none"></div>

      {/* Animated Content */}
      <motion.div
        className="relative z-10 px-4 sm:px-6 pt-20 md:pt-36 lg:pt-48 w-full max-w-xs sm:max-w-md md:max-w-3xl lg:max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight drop-shadow-xl "
        >
          Welcome to Oma&apos;s Restaurant
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="mt-6 text-3xl lg:text-7xl text-white/90 font-medium"
        >
          Experience the Essence of Multi Cuisine —{" "}
          <span className="text-brand-gold font-semibold">
            Rich, Flavorful &amp; Unforgettable.
          </span>
        </motion.h1>

        {/* Button Row */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-row gap-3"
        >
          <a
            href="#reservation"
            className="flex-1 sm:flex-none text-base md:text-lg font-semibold px-5 py-2 rounded-full
              shadow border 
              bg-white/80 text-gray-600 hover:bg-brand-gold hover:bg-transparent hover:text-white transition
              duration-150 backdrop-blur"
          >
            Reservation
          </a>
          <a
            href="#reviews"
            className="flex-1 sm:flex-none text-base md:text-lg font-semibold px-5 py-2 rounded-full
              border border-white/70 bg-transparent text-white hover:bg-white/80 hover:text-gray-700 transition
              duration-150 backdrop-blur"
          >
            Testimonials
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
