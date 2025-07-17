"use client";
// Make sure to add this import at the top of your app/page.tsx file
import { motion } from "framer-motion";
// Also ensure you have lucide-react for the chevron icon
import { ChevronDown } from "lucide-react";

// ... (keep the other component functions like AboutSection, etc.)

// REPLACEMENT FOR YOUR HeroSection FUNCTION
function HeroSection() {
  // Variants for the container to orchestrate staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Each child will animate 0.3s after the previous one
      },
    },
  };

  // Variants for the text and button elements
  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Start slightly below and invisible
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Animate to original position
  };

  return (
    // Add overflow-hidden to the parent to contain the zooming background
    <section className="relative h-[70vh] md:h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Image with Ken Burns Effect */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-image.jpg')" }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 15, ease: "easeInOut" }}
      />

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent"></div>

      {/* Animated Content */}
      <motion.div
        className="relative z-10 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold"
        >
          Welcome to Omas Restaurant
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-4 text-xl md:text-2xl max-w-3xl mx-auto"
        >
          Experience the Essence of Arabian Cuisine — Rich, Flavorful &
          Unforgettable
        </motion.p>

        <motion.a
          variants={itemVariants}
          href="#menu"
          className="mt-8 inline-block bg-brand-brown text-white px-8 py-3 rounded-full  text-lg hover:bg-brand-brown-dark transition-colors"
        >
          Explore Our Menu
        </motion.a>
      </motion.div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }} // Appears after the main animation
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
