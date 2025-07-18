"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, ChevronLeft, ChevronRight } from "lucide-react";

function GallerySection() {
  const images = [
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
    "/images/gallery-3.jpg",
  ];

  // Carousel state
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  // Handlers for next/prev
  const nextImage = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  // Touch events for swipe on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) prevImage();
      else nextImage();
    }
    touchStartX.current = null;
  };

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
          <h2 className=" text-4xl md:text-5xl text-brand-brown-dark">
            From Our Visitors
          </h2>
        </div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Moments of joy and great food shared by our beloved customers.
        </p>
      </motion.div>

      {/* Carousel for mobile, grid for md+ */}
      <div className="mt-12">
        {/* Mobile Carousel */}
        <div className="block md:hidden relative max-w-xs mx-auto select-none">
          <div
            className="overflow-hidden rounded-xl shadow-lg relative"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={images[current]}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-[430px] bg-gray-100"
              >
                <Image
                  src={images[current]}
                  alt="Visitor photo at Omas Restaurant"
                  fill
                  className="object-cover rounded-xl"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
                <div className="absolute inset-0 bg-black/0 active:bg-black/20 transition-colors duration-500" />
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Carousel Controls */}
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-brand-brown-dark" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-brand-brown-dark" />
          </button>
          {/* Dots */}
          <div className="flex justify-center gap-1 mt-3">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-2 w-2 rounded-full ${idx === current ? "bg-brand-brown-dark" : "bg-gray-300"}`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Grid for desktop */}
        <motion.div
          className="hidden md:grid grid-cols-2 md:grid-cols-3 gap-4"
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
                height={430}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default GallerySection;