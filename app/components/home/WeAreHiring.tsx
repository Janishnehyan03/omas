"use client";
import { motion } from "framer-motion";
import { ChefHat, Smartphone, MapPin, Clock3, Send } from "lucide-react";

// --- Configuration ---
const whatsappNumber = "919562051554"; // Replace with your restaurant's number
const whatsappMessage = encodeURIComponent(
  "Hello Oma's Restaurant, I'm interested in joining your team!"
);
const roles = ["Passionate Chefs", "Friendly Waitstaff", "Kitchen Assistants"];

export default function WeAreHiringPage() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center p-4 bg-brand-cream">
      <motion.div
        className="w-full max-w-2xl bg-white/60 dark:bg-brand-brown-dark/50 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12 flex flex-col gap-6 border border-brand-brown/10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 0.8, bounce: 0.4 }}
      >
        <div className="flex items-center gap-4">
          <ChefHat className="w-12 h-12 text-brand-gold" />
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-brand-brown-dark dark:text-brand-cream">
              Join the Oma's Family
            </h1>
            <p className="text-brand-brown dark:text-gray-300">We are now hiring for several key roles.</p>
          </div>
        </div>

        <div className="text-brand-brown-dark dark:text-gray-200 text-lg">
          We’re looking for enthusiastic individuals to become part of our team. We have openings for: <span className="font-semibold text-brand-gold">{roles.join(", ")}</span>.
        </div>

        <ul className="space-y-4 text-brand-brown dark:text-gray-300">
          <li className="flex items-center gap-3">
            <Smartphone className="w-6 h-6 text-brand-gold flex-shrink-0" />
            <span>
              <strong>Competitive Salary</strong> with generous tips and performance bonuses.
            </span>
          </li>
          <li className="flex items-center gap-3">
            <Clock3 className="w-6 h-6 text-brand-gold flex-shrink-0" />
            <span>
              <strong>Flexible Shifts</strong> that respect your work-life balance (full & part-time available).
            </span>
          </li>
          {/* --- Added Time Information --- */}
          <li className="flex items-center gap-3">
            <Clock3 className="w-6 h-6 text-brand-gold flex-shrink-0" />
            <span>
              <strong>Operating Hours:</strong> 11 AM to 11 PM, seven days a week.
            </span>
          </li>
          <li className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-brand-gold flex-shrink-0" />
            <span>
              <strong>Prime Location</strong> in the heart of Mumbai, easily accessible via public transport.
            </span>
          </li>
        </ul>

        <div className="text-brand-brown-dark dark:text-gray-200 mt-2 p-4 bg-brand-cream/50 dark:bg-brand-brown/40 rounded-lg border border-brand-gold/30">
          <strong>Perks include:</strong> Daily staff meals, comprehensive training, and a supportive, fun-loving team environment.
        </div>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center justify-center gap-3 bg-brand-brown text-brand-cream px-8 py-4 rounded-xl text-lg font-bold shadow-lg hover:bg-brand-brown-dark transition-colors duration-300"
        >
          <Send className="w-5 h-5" />
          Apply Now on WhatsApp
        </motion.a>
      </motion.div>
    </main>
  );
}
