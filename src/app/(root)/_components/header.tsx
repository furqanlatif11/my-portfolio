"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaArrowDown } from "react-icons/fa";
import Button from "./button";

const roles = [
  "Full-Stack Developer",
  "Shopify Expert",
  "Backend Engineer",
  "Freelancer",
];

const particleCount = 30;
const getRandomPos = () => Math.random() * 200 - 100;

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative h-screen w-full text-white overflow-hidden flex items-center justify-center">
      {/* Animated Background: Floating Code Blocks + HUD Lines */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0f0f0f] via-[#111111] to-[#000]" />
        <div className="absolute w-full h-full bg-grid-small bg-opacity-[0.03] bg-center bg-repeat pointer-events-none" />

        {/* Floating Code Particles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-500 text-xs animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 6}s`,
              fontFamily: "monospace",
              opacity: 0.4 + Math.random() * 0.4,
            }}
          >
            {Math.random().toString(36).substring(2, 8)}
          </div>
        ))}

        {/* HUD Grid Lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            stroke="#00ff99"
          >
            {[...Array(20)].map((_, i) => (
              <motion.line
                key={`h-${i}`}
                x1={0}
                x2={1920}
                y1={i * 60}
                y2={i * 60}
                strokeWidth={0.8}
                strokeOpacity="0.8"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.1, 0.4, 0.1] }}
                transition={{ duration: 5, delay: i * 0.05, repeat: Infinity }}
              />
            ))}
            {[...Array(20)].map((_, i) => (
              <motion.line
                key={`v-${i}`}
                x1={i * 60}
                x2={i * 60}
                y1={0}
                y2={1080}
                strokeWidth={0.8}
                strokeOpacity="0.8"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.1, 0.4, 0.1] }}
                transition={{ duration: 5, delay: i * 0.05, repeat: Infinity }}
              />
            ))}
          </motion.g>
        </svg>

        {/* Green Neon Particles Gathering */}
        {Array.from({ length: particleCount }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            initial={{
              x: getRandomPos(),
              y: getRandomPos(),
              opacity: 0.4 + Math.random() * 0.4,
              scale: 0.3 + Math.random() * 0.4,
            }}
            animate={{ x: 0, y: 0, opacity: 0, scale: 0 }}
            transition={{ delay: i * 0.03, duration: 1.5, ease: "easeInOut" }}
            className="absolute w-2 h-2 rounded-full bg-green-400 blur-md"
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="z-10 text-center max-w-3xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-4xl sm:text-5xl font-bold mb-4 text-[#00FF9D] drop-shadow-[0_0_6px_rgba(0,255,135,0.2)]"
        >
          Hello, I&apos;m Muhammad Furqan Latif
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-xl sm:text-2xl text-gray-300"
        >
          I am a{" "}
          <span className="text-white font-semibold">
            {mounted && (
              <Typewriter
                words={roles}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
                cursorColor="#00FF9D"
              />
            )}
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-gray-400 mt-6 max-w-xl mx-auto"
        >
          I engineer digital experiences with clean code, aesthetic designs, and
          powerful backend systems. Let&apos;s build something extraordinary.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="flex justify-center gap-4 mt-8"
        >
          <Button
            label="Explore Now"
            href="#projects"
            variant="solid"
            showHoverIcon
          />
          <Button
            label="Contact Me"
            href="#contact"
            variant="outlined"
            showHoverIcon
          />
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { value: "2+", label: "Years Experience" },
            { value: "10+", label: "Projects Completed" },
            { value: "5+", label: "Happy Clients" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2 + i * 0.2, duration: 0.8 }}
              className="flex flex-col items-center justify-center p-6 rounded-lg border border-white/20 bg-white/5 backdrop-blur-md shadow-md hover:shadow-xl transition hover:scale-105"
            >
              <p className="text-4xl font-bold text-[#00FF9D] drop-shadow-sm">
                {item.value}
              </p>
              <p className="text-sm text-gray-300 mt-2">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/40"
        >
          <FaArrowDown className="animate-bounce text-xl" />
        </motion.div>
      </div>
    </section>
  );
}
