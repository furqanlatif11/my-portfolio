"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import Button from "./button";

const roles = [
  "Full-Stack Developer",
  "Shopify Expert",
  "Backend Engineer",
  "Freelancer",
];

export default function HeroSection() {
  return (
    <section className="relative text-white w-full   flex items-center justify-center">
      {/* Subtle glowing background blob */}
      <div className="absolute w-96 h-96 bg-blue-600 opacity-10 blur-3xl rounded-full top-20 left-10 -z-10" />
      <div className="absolute w-80 h-80 bg-purple-700 opacity-10 blur-2xl rounded-full bottom-20 right-20 -z-10" />

      <div className="customWidth w-full px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div className="space-y-6">
          <h1 className="text-2xl sm:text-5xl lg:text-2xl font-bold leading-tight">
            Hello, I&apos;m{" "}
            <p className="text-transparent bg-clip-text text-2xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-blue-500 to-purple-500">
              Muhammad Furqan Latif
            </p>
          </h1>

          <h2 className="text-xl sm:text-2xl text-gray-300 ">
            I am a{" "}
            <span className="text-white font-semibold">
              <Typewriter
                words={roles}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h2>

          <p className="text-gray-400 max-w-xl leading-relaxed">
            Crafting robust web applications with clean code and great user
            experience. I bring full-stack expertise and a creative edge to
            every project I take on.
          </p>

          <div className="flex gap-4 pt-4">
            <Button
              label="Explore Now"
              href="/explore"
              variant="solid"
              showHoverIcon={true}
            />
            <Button
              label="Contact Me"
              href="/contact"
              variant="outlined"
              showHoverIcon={true}
              />
          </div>

          <div className="flex justify-between text-sm text-gray-400 group overflow-hidden rounded-md p-6 bg-white/10 border border-white/20 backdrop-blur-md">
            <div className="text-center ">
              <p className="text-white text-4xl font-bold">2+</p>
              <p>Years Experience</p>
            </div>
            <div className="text-center ">
              <p className="text-white text-4xl font-bold">10+</p>
              <p>Projects Completed</p>
            </div>
            <div className="text-center ">
              <p className="text-white text-4xl font-bold">5+</p>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[400px] md:h-[500px] rounded-md overflow-hidden shadow-lg"
        >
          <Image
            src="/assets/images/fullstack.jfif"
            alt="Muhammad Furqan Latif"
            fill
            className="object-cover rounded-md grayscale hover:grayscale-0 transition duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
}
