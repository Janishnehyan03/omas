"use client";
import { motion } from "framer-motion";
import { ChefHat, Smartphone, MapPin, Clock3, Send, User, Phone, Mail, Briefcase } from "lucide-react";
import { useState } from "react";

// --- Configuration ---
const whatsappNumber = "919562051554";
const roles = ["Passionate Chefs", "Friendly Waitstaff", "Kitchen Assistants"];

export default function WeAreHiringPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vacancy: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Hello Oma's Restaurant! I'm interested in applying for ${formData.vacancy}.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nI look forward to hearing from you!`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <main className="min-h-screen w-full p-4 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid lg:grid-cols-2 gap-8 items-start"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          
          {/* Job Information Section */}
          <motion.div
            className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-amber-200/50"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-amber-100 rounded-2xl">
                <ChefHat className="w-8 h-8 text-amber-600" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Join the **Oma's Family**
                </h1>
                <p className="text-gray-600 text-lg">Building careers, one dish at a time</p>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                We're expanding our passionate team and looking for exceptional individuals to join us. 
                Current openings include:
              </p>
              <div className="flex flex-wrap gap-2">
                {roles.map((role, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium border border-amber-200"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-amber-50 rounded-lg mt-1">
                  <Smartphone className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-gray-800 font-semibold mb-1">Competitive Compensation</h3>
                  <p className="text-gray-600">Generous salary with performance bonuses and daily tips</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-amber-50 rounded-lg mt-1">
                  <Clock3 className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-gray-800 font-semibold mb-1">Flexible Schedule</h3>
                  <p className="text-gray-600">11 AM - 11 PM operations with work-life balance priority</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-amber-50 rounded-lg mt-1">
                  <MapPin className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-gray-800 font-semibold mb-1">Prime Mumbai Location</h3>
                  <p className="text-gray-600">Central location with excellent transport connectivity</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200">
              <h3 className="text-gray-800 font-semibold mb-2">Employee Benefits</h3>
              <p className="text-gray-600">
                Daily staff meals • Comprehensive training program • Supportive team environment • 
                Career growth opportunities • Health benefits
              </p>
            </div>
          </motion.div>

          {/* Application Form Section */}
          <motion.div
            className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-amber-200/50"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                **Apply Now**
              </h2>
              <p className="text-gray-600">
                Ready to start your culinary journey? Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-800 font-medium mb-3">
                  <User className="w-4 h-4 inline mr-2 text-amber-600" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-amber-50/50 border border-amber-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-gray-800 font-medium mb-3">
                  <Phone className="w-4 h-4 inline mr-2 text-amber-600" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-amber-50/50 border border-amber-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="block text-gray-800 font-medium mb-3">
                  <Mail className="w-4 h-4 inline mr-2 text-amber-600" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-amber-50/50 border border-amber-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-800 font-medium mb-3">
                  <Briefcase className="w-4 h-4 inline mr-2 text-amber-600" />
                  Position of Interest
                </label>
                <select
                  name="vacancy"
                  value={formData.vacancy}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-amber-50/50 border border-amber-200 rounded-xl text-gray-800 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                >
                  <option value="" className="text-gray-500">Select a position</option>
                  {roles.map((role, index) => (
                    <option key={index} value={role} className="text-gray-800">
                      {role}
                    </option>
                  ))}
                </select>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Send className="w-5 h-5" />
                Submit Application via WhatsApp
              </motion.button>
            </form>

          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
