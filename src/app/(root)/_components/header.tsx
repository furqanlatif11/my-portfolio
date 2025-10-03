"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import Button from "./button";

export default function HeroSection() {
  const [, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="relative">
      {/* Aurora Background - Spans BOTH sections */}
      <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute w-full h-full bg-black" />
        
        {/* Aurora waves */}
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background:
              "linear-gradient(45deg, rgba(0,255,153,0.1) 0%, rgba(0,230,118,0.2) 50%, rgba(16,185,129,0.1) 100%)",
            filter: "blur(60px)",
            transform: "skewY(-12deg)",
          }}
        />

        <motion.div
          animate={{
            opacity: [0.2, 0.5, 0.2],
            x: [-100, 100, -100],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-0 w-full h-1/2"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(52,211,153,0.3) 50%, transparent 100%)",
            filter: "blur(80px)",
          }}
        />

        <motion.div
          animate={{
            opacity: [0.4, 0.7, 0.4],
            y: [-50, 50, -50],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 right-0 w-3/4 h-3/4"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(16,185,129,0.25) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />

        {/* Stars */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
        
        {/* Smooth fade to dark at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-b from-transparent via-[#0a0a0a]/60 to-[#0a0a0a]" />
      </div>

      {/* SECTION 1: Main Hero (Full Screen) */}
      <section className="relative h-screen w-full text-white overflow-hidden flex items-center justify-center">
        {/* Main Content */}
        <div className="z-10 text-center max-w-4xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-green-500 drop-shadow-[0_0_8px_rgba(0,255,135,0.3)] leading-tight"
          >
            Launch Your MVP in 6-10 Weeks
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            I build production-ready web apps for startups and growing
            businesses that need speed without sacrificing quality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mb-8 p-6 rounded-lg border border-green-500/30 bg-green-500/5 backdrop-blur-sm max-w-2xl mx-auto"
          >
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              <span className="font-semibold text-green-400">Recent:</span>{" "}
              Built a complete training platform for a UAE company - from
              concept to{" "}
              <span className="text-white font-semibold">
                1K+ users in production
              </span>
              .
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button
              label="Book Free Consultation"
              scrollToId="contact"
              variant="solid"
              showHoverIcon
            />
            <Button
              label="See My Work"
              scrollToId="promise"
              variant="outlined"
              showHoverIcon
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 1 }}
            className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-sm text-gray-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for Q4 2025 • Global clients
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/40"
          >
            <FaArrowDown className="animate-bounce text-xl" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: The Promise (Auto-flows below with Aurora background) */}
      <section
        id="promise"
        className="relative w-full text-white py-16 sm:py-20"
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-green-500 mb-4">
              The Promise
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              What you get when you work with me
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: "Full-stack MVP in 6-10 weeks",
                desc: "From concept to production-ready application",
              },
              {
                title: "Performance-optimized from day one",
                desc: "<2 second load times, built for scale",
              },
              {
                title: "Clean architecture that grows with you",
                desc: "No expensive rewrites when you hit 50K users",
              },
              {
                title: "One senior developer, end-to-end",
                desc: "No agencies, no junior devs, no surprises",
              },
              
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="p-6 rounded-lg border border-green-500/20 bg-white/5 backdrop-blur-sm hover:border-green-500/40 transition-all"
              >
                <h3 className="text-xl font-semibold text-white mb-2 flex items-start gap-2">
                  <span className="text-green-500 text-2xl">✓</span>
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto"
          >
            {[
              { value: "6-10", label: "Weeks to Launch" },
              { value: "10+", label: "MVPs Delivered" },
              { value: "8K+", label: "Users in Production" },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-lg border border-green-500/20 bg-white/5 backdrop-blur-md hover:border-green-500/40 transition-all"
              >
                <p className="text-4xl font-bold text-green-500 mb-2">
                  {item.value}
                </p>
                <p className="text-sm text-gray-300">{item.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 text-sm mb-6">
              <span className="font-semibold text-white">Tech Stack:</span>{" "}
              React, Next.js, Go, PostgreSQL
            </p>
            <Button
              label="Let's Discuss Your Project"
              scrollToId="contact"
              variant="solid"
              showHoverIcon
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}