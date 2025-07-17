"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";

function GallerySection() {
  const images = [
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
    "/images/gallery-3.jpg",
    "/images/gallery-4.jpg",
    "/images/gallery-5.jpg",
    "/images/gallery-6.jpg",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <section id="gallery" className="py-20 px-4 container mx-auto">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Camera className="w-8 h-8 text-brand-brown-dark" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-brown-dark">
            From Our Visitors
          </h2>
        </div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Moments of joy and great food shared by our beloved customers.
        </p>
      </motion.div>

      <motion.div
        className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {images.map((src) => (
          <motion.div
            key={src}
            className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative group"
            variants={itemVariants}
          >
            <Image
              src={src}
              alt="Visitor photo at Omas Restaurant"
              width={400}
              height={400}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default GallerySection;
