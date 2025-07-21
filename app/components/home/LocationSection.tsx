import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import { motion, easeInOut } from "framer-motion";

// --- Data remains the same ---
const locations = [
  {
    name: "6th Mile",
    mapLink: "https://maps.app.goo.gl/Zgjkaz63jNgPo11m8",
    phone: "9526 051 554",
    image: "/images/6thmail.jpg",
  },
  {
    name: "Mambaram",
    mapLink: "https://maps.app.goo.gl/JmFGXy6Gr9ZroYNy6",
    phone: "9526 002 444",
    image: "/images/mambram.jpg",
  },
  {
    name: "Kannur",
    mapLink: "https://maps.app.goo.gl/GbjmNVpXtcgkq1VM9?g_st=ac",
    phone: "9526 006 444",
    image: "/images/kannur.jpg",
  },
  {
    name: "Panoor",
    mapLink: "https://maps.app.goo.gl/6s6MVNZk9g5V8mAJ6",
    phone: "+91 8606 019 888",
    image: "/images/panoor.jpg",
  },
];

// --- Animation variants remain the same ---
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeInOut,
    },
  },
};

// --- Recommended: Add these to your tailwind.config.js for consistency ---
// theme: {
//   extend: {
//     colors: {
//       'brand-brown-dark': '#4a2c2a',
//       'brand-gold': '#c7a17a',
//     },
//   },
// },

function LocationsSection() {
  return (
    <section id="locations" className="py-20 px-4 bg-stone-50">
      <div className="container mx-auto max-w-7xl">
        {/* --- Heading is great, no major changes needed --- */}
        <div className="text-center mb-16">
          <h2 className=" text-5xl md:text-6xl text-brand-brown-dark tracking-tight">
            Our Store Locations
          </h2>
          <div className="mx-auto mt-4 mb-8 h-1 w-24 bg-gradient-to-r from-brand-gold to-brand-brown-dark rounded-full opacity-80" />
          <p className="text-xl text-gray-700 max-w-xl mx-auto ">
            Find an Oma's Restaurant near you and experience our signature
            hospitality.
          </p>
        </div>

        {/* --- Cards Grid --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {locations.map((loc) => (
            <motion.div
              key={loc.name}
              variants={cardVariants}
              // Card container: New styling for a cleaner look.
              // 'flex flex-col' allows the image and content to stack vertically.
              className="group flex flex-col rounded-xl bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Image Container: This now isolates the image at the top. */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={loc.image}
                  alt={`Exterior of Omas Restaurant at ${loc.name}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
              </div>

              {/* Content Area: All text is now on a clean background for readability. */}
              <div className="flex-1 flex flex-col p-6">
                {/* Location Name */}
                <h3 className="text-2xl font-bold  text-brand-brown-dark mb-2">
                  {loc.name}
                </h3>

                {/* Info section with better UX */}
                <div className="flex-1 space-y-2 mt-2">
                  {/* Clickable Phone Number */}
                  <a
                    href={`tel:${loc.phone.replace(/\s/g, "")}`} // Make phone number clickable
                    className="flex items-center gap-3 text-gray-600 transition-colors hover:text-brand-gold"
                  >
                    <Phone size={16} className="text-brand-gold/80" />
                    <span className="font-medium">{loc.phone}</span>
                  </a>
                </div>

                {/* Primary Call-to-Action Button */}
                <div className="mt-2">
                  <a
                    href={loc.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg font-semibold bg-brand-brown-dark text-white transition-all duration-300 hover:bg-brand-brown-dark/90 hover:gap-3"
                  >
                    <MapPin size={18} />
                    Get Directions
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default LocationsSection;
