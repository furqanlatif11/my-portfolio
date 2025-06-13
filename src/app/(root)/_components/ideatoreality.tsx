"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Lightbulb, Rocket, Target } from "lucide-react";
import Button from "./button";

const phases = [
  {
    title: "Spark the Idea",
    description:
      "We listen, brainstorm, and understand your goals at the root level.",
    icon: <Lightbulb className="text-yellow-400" size={28} />,
  },
  {
    title: "Engineer the Solution",
    description:
      "We design, prototype, and build functional digital solutions.",
    icon: <Rocket className="text-blue-400" size={28} />,
  },
  {
    title: "Achieve the Goal",
    description:
      "We launch with purpose — driving real, measurable business success.",
    icon: <Target className="text-green-400" size={28} />,
  },
];

export default function IdeaToReality() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="relative w-full px-6 py-16 text-white">
      <div className="customWidth mx-auto text-center">
        <h2 className="sectionHeading font-bold mb-4 tracking-tight">
          From Idea to Reality
        </h2>
        <p className="text-lg text-gray-300 mb-12 max-w-xl mx-auto">
          I help you turn your spark of inspiration into polished products that
          push boundaries and bring measurable results.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-10">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-white/10 backdrop-blur-lg bg-white/5 hover:bg-white/10 p-6 transition-all duration-300 shadow-lg"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-white/10">
                {phase.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
              <p className="text-gray-300 text-sm">{phase.description}</p>
            </motion.div>
          ))}
        </div>

        <Button
          label="Share Your Project Idea"
          onClick={() => setShowForm(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        />

        {/* Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
            <div className="bg-white text-black rounded-xl max-w-4xl w-full p-8 relative shadow-xl">
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-3 right-4 text-gray-600 text-xl font-bold hover:text-black"
              >
                ×
              </button>
              <h3 className="text-3xl font-semibold mb-6 text-center">
                Quick Project Inquiry
              </h3>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="col-span-1">
                  <label className="block text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Email */}
                <div className="col-span-1">
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Service Needed */}
                <div className="col-span-1">
                  <label className="block text-sm font-medium mb-1">
                    Service Needed
                  </label>
                  <select
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option>Website Redesign</option>
                    <option>Shopify Development</option>
                    <option>Full-stack Web App</option>
                    <option>Branding / UI Design</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Budget */}
                <div className="col-span-1">
                  <label className="block text-sm font-medium mb-1">
                    Estimated Budget (USD)
                  </label>
                  <input
                    type="number"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Project Description */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1">
                    Project Description
                  </label>
                  <textarea
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us more about what you need..."
                    required
                  />
                </div>

                {/* File Upload */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1">
                    Attach File (optional)
                  </label>
                  <input
                    type="file"
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition-all"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
