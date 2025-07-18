import Image from "next/image";
import { useState, useRef } from "react";
import {
  easeInOut,
  motion,
  AnimatePresence,
  AnimationType,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Framer Motion Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeInOut },
  },
};

const cardVariants = {
  center: {
    zIndex: 2,
    scale: 1,
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { type: "spring" as const, stiffness: 300, damping: 30 },
  },
  left: {
    zIndex: 1,
    scale: 0.92,
    opacity: 0.5,
    x: "-70%",
    filter: "blur(4px)",
    transition: { type: "spring" as const, stiffness: 300, damping: 30 },
  },
  right: {
    zIndex: 1,
    scale: 0.92,
    opacity: 0.5,
    x: "70%",
    filter: "blur(4px)",
    transition: { type: "spring" as const, stiffness: 300, damping: 30 },
  },
  hidden: {
    opacity: 0,
    scale: 0.8,
    zIndex: 0,
    x: 0,
    filter: "blur(8px)",
    transition: { duration: 0.2 },
  },
};

type SignatureItem = {
  name: string;
  image: string;
  description: string;
};

function SignatureItemsSection() {
  const signatureItems: SignatureItem[] = [
    { name: "Chicken Mandi", image: "/images/item1.jpg", description: "" },
    { name: "Al Faham", image: "/images/item2.jpg", description: "" },
    { name: "Shawarma Plate", image: "/images/item3.jpg", description: "" },
    { name: "Chicken Mandi", image: "/images/item4.jpg", description: "" },
    { name: "Al Faham", image: "/images/item5.jpg", description: "" },
    { name: "Shawarma Plate", image: "/images/item6.jpg", description: "" },
    { name: "Chicken Mandi", image: "/images/item7.jpg", description: "" },
    { name: "Al Faham", image: "/images/item8.jpg", description: "" },
    { name: "Shawarma Plate", image: "/images/item9.jpg", description: "" },
  ];

  const [current, setCurrent] = useState<number>(0);
  const touchStartX = useRef<number | null>(null);

  const goPrev = () =>
    setCurrent(
      (prev) => (prev - 1 + signatureItems.length) % signatureItems.length
    );
  const goNext = () => setCurrent((prev) => (prev + 1) % signatureItems.length);

  // Touch/Swipe for mobile
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current == null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) goPrev();
      else goNext();
    }
    touchStartX.current = null;
  };

  // Utility to get three items (prev, current, next) given current index
  const getDisplayItems = () => {
    const prev = (current - 1 + signatureItems.length) % signatureItems.length;
    const next = (current + 1) % signatureItems.length;
    return [
      { ...signatureItems[prev], idx: prev, pos: "left" as const },
      { ...signatureItems[current], idx: current, pos: "center" as const },
      { ...signatureItems[next], idx: next, pos: "right" as const },
    ];
  };

  return (
    <section id="menu" className="bg-brand-cream py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="container mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-5xl text-brand-charcoal">Our Signature Items</h2>
        <div className="mt-4 mb-12 h-1 w-24 bg-brand-gold mx-auto rounded-full" />
        <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto">
          A selection of our most loved dishes, prepared with authentic recipes
          and the finest ingredients.
        </p>
      </motion.div>

      {/* Carousel for all screens */}
      <div className="mt-16 flex flex-col items-center justify-center relative overflow-x-hidden w-full">
        {/* Controls */}
        <button
          aria-label="Previous"
          onClick={goPrev}
          className="absolute left-2 md:left-12 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-brand-gold text-brand-charcoal rounded-full p-2 shadow transition-all"
          tabIndex={0}
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button
          aria-label="Next"
          onClick={goNext}
          className="absolute right-2 md:right-12 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-brand-gold text-brand-charcoal rounded-full p-2 shadow transition-all"
          tabIndex={0}
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        <div
          className="relative flex items-center justify-center w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl h-96 md:h-[28rem] select-none overflow-x-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence initial={false}>
            {getDisplayItems().map((item) => (
              <motion.div
                key={item.idx}
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 md:w-80 h-80 md:h-[22rem] rounded-xl shadow-lg overflow-hidden group cursor-pointer
                  ${item.pos === "center" ? "z-20" : "z-10"}
                `}
                variants={cardVariants}
                initial="hidden"
                animate={item.pos}
                exit="hidden"
                whileHover={
                  item.pos === "center" ? { y: -12, scale: 1.04 } : {}
                }
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{
                  pointerEvents: item.pos === "center" ? "auto" : "none",
                  boxShadow:
                    item.pos === "center"
                      ? "0px 20px 30px rgba(0,0,0,0.13)"
                      : "0px 10px 14px rgba(0,0,0,0.08)",
                }}
              >
                <div className="relative h-full w-full">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {signatureItems.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to item ${idx + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-200
                ${idx === current ? "bg-brand-gold scale-125" : "bg-gray-300"}
              `}
              tabIndex={0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SignatureItemsSection;
