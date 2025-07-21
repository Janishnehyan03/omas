import { Phone } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ReservationSection() {
  const images = [
    '/images/party-hall-1.jpg',
    '/images/party-hall.jpg',
    '/images/party-hall-3.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="reservation"
      className="text-brand-brown py-24 px-4 bg-gradient-to-b from-brand-brown/5 to-white"
    >
      {/* Title */}
      <div className="mb-8 flex flex-col items-center">
        <span className="inline-block bg-brand-brown/10 text-brand-brown font-semibold px-4 py-2 rounded-full uppercase tracking-wide text-sm shadow-sm text-center">
          Reserve Now
        </span>
      </div>
      <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-brand-brown drop-shadow-sm mb-10 text-center font-serif">
        Celebrate in Style<br />
        <span className="text-brand-brown/80 font-normal text-3xl md:text-4xl block mt-2">
          Book Your Party Hall Today
        </span>
      </h2>

      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        {/* Carousel */}
        <div className="relative w-full max-w-3xl h-[350px] md:h-[500px] overflow-hidden rounded-2xl shadow-lg mb-10">
          <AnimatePresence>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={images[currentIndex]}
                alt={`Party Hall ${currentIndex + 1}`}
                fill
                className="object-cover rounded-2xl"
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${idx === currentIndex ? "bg-brand-brown w-6" : "bg-brand-brown/40"}`}
              />
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="mt-2 text-lg md:text-xl max-w-2xl mx-auto text-brand-brown/80 mb-8 leading-relaxed">
          Ready to host an unforgettable celebration? Call us now to reserve our party hall at your Oma's Panoor.
          Whether it's a birthday, engagement, or special occasion, we’ll take care of everything so you can enjoy the moment.
        </p>

        {/* Call to Action Button */}
        <a
          href="tel:9562051554"
          className="inline-flex items-center gap-3 bg-brand-brown hover:bg-brand-brown-dark transition-all text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg ring-2 ring-brand-brown/20 focus:ring-4 focus:ring-brand-brown/40 focus:outline-none hover:scale-105"
          aria-label="Call to Book Now"
        >
          <Phone className="w-6 h-6" />
          Call to Book Now
        </a>
      </div>
    </section>
  );
}

export default ReservationSection;
