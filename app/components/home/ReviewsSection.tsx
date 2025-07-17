import { motion } from "framer-motion";
import { Quote } from "lucide-react";

function ReviewsSection() {
  const reviews = [
    {
      name: "Aisha R.",
      quote:
        "The best Mandi I've ever had! The ambiance is cozy and the service is top-notch. Highly recommended for families.",
    },
    {
      name: "John P.",
      quote:
        "Authentic Arabian flavors that transport you straight to the Middle East. Omas is my go-to place for a great meal.",
    },
    {
      name: "Priya K.",
      quote:
        "A wonderful experience every single time. The staff is friendly and the food is consistently delicious. A must-visit!",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <section id="reviews" className="bg-brand-off-white py-20 px-6">
      <motion.div
        className="container mx-auto text-center"
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-brown-dark mb-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Real experiences from people who love our food.
        </p>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {reviews.map((review) => (
            <motion.div
              key={review.name}
              variants={cardVariants}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 relative"
            >
              <div className="absolute -top-6 left-6 bg-brand-brown text-white p-3 rounded-full shadow-md">
                <Quote className="w-6 h-6" />
              </div>
              <p className="text-lg italic text-gray-700 mt-4">"{review.quote}"</p>
              <p className="mt-6 font-bold text-brand-brown text-lg">
                - {review.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default ReviewsSection;
