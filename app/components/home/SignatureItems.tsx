// components/SignatureItemsSection.jsx
import Image from "next/image";
import { easeInOut, motion } from "framer-motion";

// Framer Motion Variants for animations
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeInOut }, // NOT "easeInOut" as a string
  },
};

const cardContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // This will make cards animate in one by one
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: easeInOut },
  },
};

function SignatureItemsSection() {
  const signatureItems = [
    {
      name: "Chicken Mandi",
      image: "/images/mandi.jpg",
      description:
        "Slow-cooked chicken with aromatic basmati rice, a true classic.",
    },
    {
      name: "Al Faham",
      image: "/images/alfaham.jpg",
      description:
        "Charcoal-grilled chicken marinated in special Arabian spices.",
    },
    {
      name: "Shawarma Plate",
      image: "/images/shawarma.jpg",
      description:
        "Juicy, thinly sliced meat served with fresh salads and pita bread.",
    },
  ];

  return (
    <section id="menu" className="bg-brand-cream py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="container mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Animate when 30% of the section is in view
        variants={sectionVariants}
      >
        <h2 className=" text-5xl text-brand-charcoal">
          Our Signature Items
        </h2>
        <div className="mt-4 mb-12 h-1 w-24 bg-brand-gold mx-auto rounded-full" />
        <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto ">
          A selection of our most loved dishes, prepared with authentic recipes
          and the finest ingredients.
        </p>
      </motion.div>

      <motion.div
        className="mt-16 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={cardContainerVariants}
      >
        {signatureItems.map((item) => (
          <motion.div
            key={item.name}
            className="bg-white rounded-xl shadow-lg overflow-hidden group"
            variants={cardVariants}
            whileHover={{
              y: -10,
              scale: 1.03,
              boxShadow: "0px 20px 30px rgba(0,0,0,0.1)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="relative h-64 w-full">
              <Image
                src={item.image}
                alt={item.name}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-8 text-left">
              <h3 className="text-3xl font-bold  text-brand-charcoal">
                {item.name}
              </h3>
              <p className="mt-3 text-gray-600 ">{item.description}</p>
            
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default SignatureItemsSection;
