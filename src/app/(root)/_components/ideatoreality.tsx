"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Lightbulb, Rocket, Target, Cpu } from "lucide-react";
// import Button from "./button";

const phases = [
  {
    title: "Spark the Idea",
    description: "We listen, brainstorm, and understand your goals at the root level.",
    icon: <Lightbulb className="text-yellow-400" size={28} />,
  },
  {
    title: "Engineer the Solution",
    description: "We design, prototype, and build functional digital solutions.",
    icon: <Rocket className="text-blue-400" size={28} />,
  },
  {
    title: "Achieve the Goal",
    description: "We launch with purpose — driving real, measurable business success.",
    icon: <Target className="text-green-400" size={28} />,
  },
];

export default function IdeaToReality() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="relative w-full px-6 py-16 text-white">
      <div className="customWidth mx-auto text-center">
        <h2 className="sectionHeading font-bold mb-4 tracking-tight text-[#00FF9D]">
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

        {/* <Button
          label="Share Your Project Idea"
          onClick={() => setShowForm(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        /> */}

        {/* Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl min-h-[70vh] rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row"
            >
              {/* Left Creative Panel */}
              <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gradient-to-br from-[#00FF9D]/20 via-transparent to-blue-500/20 relative p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#00FF9D,transparent_60%)] opacity-30 animate-pulse"></div>
                <Cpu size={80} className="text-[#00FF9D] mb-6 drop-shadow-lg" />
                <h3 className="text-2xl font-bold mb-4 text-white drop-shadow">
                  Let’s Build Something Futuristic
                </h3>
                <p className="text-gray-200 text-sm max-w-sm leading-relaxed">
                  Share your idea, and we’ll transform it into a digital product
                  with impact. From design to deployment — we engineer innovation.
                </p>
              </div>

              {/* Right Form Panel */}
              <div className="w-full md:w-1/2 p-6 md:p-10 relative">
                {/* Close button */}
                <button
                  onClick={() => setShowForm(false)}
                  className="absolute top-3 right-4 text-gray-300 text-2xl font-bold hover:text-white"
                >
                  ×
                </button>

                <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-white drop-shadow">
                  Quick Project Inquiry
                </h3>

                <form className="grid grid-cols-1 gap-5">
                  {/* Full Name */}
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full p-3 rounded-xl bg-white/10 border border-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FF9D] focus:border-[#00FF9D] transition-all"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full p-3 rounded-xl bg-white/10 border border-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FF9D] transition-all"
                      required
                    />
                  </div>

                  {/* Service Needed */}
                  <div>
                    <select
                      className="w-full p-3 rounded-xl bg-white/10 border border-transparent text-white focus:outline-none focus:ring-2 focus:ring-[#00FF9D] transition-all"
                      required
                    >
                      <option className="bg-black text-white">Website Redesign</option>
                      <option className="bg-black text-white">Shopify Development</option>
                      <option className="bg-black text-white">Full-stack Web App</option>
                      <option className="bg-black text-white">Branding / UI Design</option>
                      <option className="bg-black text-white">Other</option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <input
                      type="number"
                      placeholder="Estimated Budget (USD)"
                      className="w-full p-3 rounded-xl bg-white/10 border border-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FF9D] transition-all"
                    />
                  </div>

                  {/* Project Description */}
                  <div>
                    <textarea
                      rows={4}
                      placeholder="Tell us more about what you need..."
                      className="w-full p-3 rounded-xl bg-white/10 border border-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FF9D] transition-all"
                      required
                    />
                  </div>

                  {/* File Upload */}
                  <div>
                    <input
                      type="file"
                      className="w-full text-gray-200 file:rounded-md file:bg-[#00FF9D]/20 file:text-white file:border-0 file:px-3 file:py-2 hover:file:bg-[#00FF9D]/30"
                    />
                  </div>

                  {/* Submit */}
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-green-500 text-black font-semibold py-3 rounded-xl transition-all shadow-lg"
                    >
                      Submit Inquiry 🚀
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
