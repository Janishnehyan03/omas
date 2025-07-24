"use client";
import { motion } from "framer-motion";
import {
  ChefHat, Smartphone, MapPin, Clock3,
  Send, User, Phone, Mail, Briefcase
} from "lucide-react";
import { useState } from "react";

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
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Hello Oma's Restaurant! I'm interested in applying for ${formData.vacancy}.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <main className="min-h-screen w-full px-4 py-8 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-amber-200 space-y-8"
        >
          {/* Header */}
          <div className="flex items-start gap-4">
            <div className="p-3 bg-amber-100 rounded-2xl">
              <ChefHat className="w-8 h-8 text-amber-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">We're Hiring</h1>
              <p className="text-gray-600 text-lg">Join us to create memorable dining experiences.</p>
            </div>
          </div>

          {/* Openings & Perks */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">Open Roles</h2>
              <div className="flex flex-wrap gap-2">
                {roles.map((role, i) => (
                  <span key={i} className="px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm border border-amber-200">
                    {role}
                  </span>
                ))}
              </div>

              <div className="space-y-3 pt-4">
                <Info icon={Smartphone} title="Competitive Pay" desc="Salary + tips + performance bonuses" />
                <Info icon={Clock3} title="Flexible Timing" desc="11 AM – 11 PM shifts with balance" />
                <Info icon={MapPin} title="Prime Location" desc="Centrally located in Panoor" />
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <FormInput icon={User} name="name" type="text" value={formData.name} onChange={handleInputChange} placeholder="Full Name" />
              <FormInput icon={Phone} name="phone" type="tel" value={formData.phone} onChange={handleInputChange} placeholder="Phone Number" />
              <FormInput icon={Mail} name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="Email Address" />

              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  <Briefcase className="w-4 h-4 inline mr-2 text-amber-600" />
                  Position
                </label>
                <select
                  name="vacancy"
                  value={formData.vacancy}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-amber-50 border border-amber-200 rounded-xl text-gray-800 focus:outline-none focus:ring-amber-500 focus:ring-2"
                >
                  <option value="">Select a role</option>
                  {roles.map((role, i) => (
                    <option key={i} value={role}>{role}</option>
                  ))}
                </select>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold py-3 px-6 rounded-xl shadow hover:from-amber-600 hover:to-amber-700 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" /> Submit via WhatsApp
              </motion.button>
            </form>
          </div>

        </motion.div>
      </div>
    </main>
  );
}

// Reusable components
function Info({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="p-2 bg-amber-50 rounded-lg">
        <Icon className="w-5 h-5 text-amber-600" />
      </div>
      <div>
        <h4 className="font-semibold text-gray-800">{title}</h4>
        <p className="text-gray-600 text-sm">{desc}</p>
      </div>
    </div>
  );
}

function FormInput({ icon: Icon, name, type, value, onChange, placeholder }: any) {
  return (
    <div>
      <label className="block text-gray-800 font-medium mb-2">
        <Icon className="w-4 h-4 inline mr-2 text-amber-600" />
        {placeholder}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="w-full px-4 py-3 bg-amber-50 border border-amber-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-amber-500 focus:ring-2"
        placeholder={placeholder}
      />
    </div>
  );
}
