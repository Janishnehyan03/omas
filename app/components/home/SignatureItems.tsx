import { motion } from "framer-motion";
import Image from "next/image";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

type SignatureItem = {
  name: string;
  image: string;
  description: string;
};

function SignatureItemsSection() {
  const signatureItems: SignatureItem[] = [
    { name: "Omas Paal Porotta", image: "/images/omas paal.jpg", description: "" },
    { name: "Peppery Grilled Paneer", image: "/images/Peppery grilled paneer .JPG", description: "" },
    { name: "Kabab", image: "/images/Kabab .jpg", description: "" },
    { name: "Thali Meals", image: "/images/Thali meals .jpg", description: "" },
    { name: "Beef Oma’s", image: "/images/Beef Oma’s .JPEG.jpg", description: "" },
    { name: "Ginger Chicken", image: "/images/Ginger chicken .JPG", description: "" },
    { name: "Peri Peri Al-fahm", image: "/images/Peri peri Al-fahm .JPG", description: "" },
    { name: "Chicken Kolhapuri", image: "/images/Chicken kolhapuri .JPEG.jpg", description: "" },
    { name: "Oma’s Fried Rice", image: "/images/Oma’s fried rice .JPG", description: "" },
    { name: "Honey Alfahm", image: "/images/Honey alfahm .JPG", description: "" },
    { name: "Fish Tawa Fry", image: "/images/Fish tawa fry.JPEG.jpg", description: "" },
    { name: "Puyyapala ", image: "/images/Puyyapala c .JPG", description: "" },
    // { name: "Kanthari Kabab", image: "/images/Kanthari kabab .JPG", description: "" },
    // { name: "Alfahm Cashew", image: "/images/Alfahm cashew .JPG", description: "" }
  ];

  return (
    <section id="menu" className="bg-brand-cream py-24 px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <motion.div
        className="container mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-brand-charcoal">
          Our Signature Items
        </h2>
        <div className="mt-4 mb-12 h-1 w-24 bg-brand-gold mx-auto rounded-full" />
        <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          A selection of our most loved dishes, prepared with authentic recipes
          and the finest ingredients.
        </p>
      </motion.div>

      {/* Signature Items Grid */}
      <motion.div
        className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={gridVariants}
      >
        {signatureItems.map((item, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ scale: 1.04 }}
            className="group rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden bg-white"
          >
            <div className="relative w-full h-60 md:h-72 overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-90" />
              {/* Title */}
              <h3 className="absolute bottom-4 left-1/2 w-full -translate-x-1/2 text-center text-2xl font-bold text-white drop-shadow-md px-4">
                {item.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default SignatureItemsSection;
