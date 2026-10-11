"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MdSection() {
  return (
    <section id="leadership" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-brand-cream/60">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="overflow-hidden rounded-2xl md:rounded-3xl shadow-lg bg-white transition-all duration-300 hover:shadow-2xl"
        >
          <Image
            src="/images/md web.png"
            alt="Meet our Managing Director Aslam UV - Oma's Restaurant"
            width={1024}
            height={576}
            className="w-full h-auto object-contain block"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1024px"
            priority={false}
          />
        </motion.div>
      </div>
    </section>
  );
}
