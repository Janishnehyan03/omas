import { motion } from "framer-motion";
import { AnimatedCounter } from "../AnimatedCounter";
import { Clock, Globe, Star } from "lucide-react";
import Image from "next/image";

function AboutSection() {
  const stats = [
    {
      icon: <Clock size={28} />,
      value: 33,
      label: "Years Experience",
      suffix: "+",
    },
    {
      icon: <Globe size={28} />,
      value: 4,
      label: "Stores",
      suffix: "",
    },
    {
      icon: <Star size={28} />,
      value: 20000,
      label: "Happy Customers",
      suffix: "+",
    },
  ];

  const statsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const statItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="about"
      className="py-20 px-4 container mx-auto overflow-hidden"
    >
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left Column: Text */}
        <motion.div
          className="space-y-6 flex flex-col items-center w-full"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className=" text-4xl lg:text-5xl  text-brand-brown-dark text-center">
            About Oma's Restaurant
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 text-center max-w-3xl">
            At Oma's Restaurant, we bring you the true taste of Arabian
            hospitality. With over 6 years of culinary excellence, we’ve become
            a beloved dining destination. Our journey has been driven by
            passion, flavor, and community.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 text-center max-w-3xl">
            Proudly serving thousands of happy customers, Oma's is more than just
            a restaurant — it’s an experience. Our warm ambience and authentic
            dishes ensure every visit feels like home.
          </p>
          <p className=" text-2xl text-brand-brown text-center">
            Join us and taste the tradition!
          </p>
          <motion.div
            className="mt-20 w-full flex justify-center"
            variants={statsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl">
              {stats.map((stat, index) => (
                <motion.div
                  key={`${stat.label}-${index}`}
                  variants={statItemVariants}
                  className="p-8 rounded-xl bg-brand-off-white transition-transform duration-300 hover:scale-[1.05]"
                >
             
                  {/* Counter */}
                  <p className="text-5xl md:text-6xl font-bold text-brand-brown-dark flex justify-center items-end">
                    <AnimatedCounter value={stat.value} />
                    {stat.suffix && (
                      <span className="ml-1 text-3xl">{stat.suffix}</span>
                    )}
                  </p>
                  {/* Label */}
                  <p className="text-gray-600 text-lg mt-3 text-center">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <Image
            src="/images/about-image.jpg"
            alt="Interior of Oma's Restaurant"
            width={600}
            height={700}
            className="rounded-xl shadow-lg object-cover aspect-[4/5]"
          />
        </motion.div>
      </div>

      {/* Stats Section */}
    </section>
  );
}

export default AboutSection;
