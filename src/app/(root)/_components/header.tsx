"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  {
    title: "Full-Stack Developer",
    image: "/assets/images/fullstack.jfif",
  },
  {
    title: "Shopify Developer",
    image: "/assets/images/frontend.jfif",
  },
  {
    title: "Backend Developer",
    image: "/assets/images/backend.jfif",
  },
];

export default function HeroHeader() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const { title, image } = roles[index];

  return (
    <section className="">
      <div className="w-full customWidth   min-h-[60vh] grid grid-cols-1   md:grid-cols-2 items-center gap-8 px-4 md:px-8">
        <div className=" space-y-4 text-center md:text-left relative">
          <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-30 top-20 left-20 -z-10"></div>
          <h1 className="text-4xl md:text-5xl font-bold">
            Hi, I&apos;m{" "}
            <span className="text-[var(--color-blue-primary)]">
              Muhammad Furqan Latif
            </span>
          </h1>

          <AnimatePresence mode="wait">
            <motion.h2
              key={title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl text-[#f9f9f9]"
            >
              {title}
            </motion.h2>
          </AnimatePresence>

          <p className="text-[#f9f9f9]">
            Experienced in frontend and backend development with a passion for
            creating innovative solutions. Professional experience in software
            houses and successful freelance projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-[var(--color-blue-primary)] text-white py-2 px-4 rounded-md hover:bg-blue-700">
              View My Work
            </button>
            <button className="border border-[var(--color-blue-primary)] text-[var(--color-blue-primary)] py-2 px-4 rounded-md hover:text-white hover:bg-[var(--color-blue-primary)]">
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center md:justify-start gap-8 pt-6 text-sm text-gray-600">
            <div className="text-center">
              <p className="text-[var(--color-blue-primary)] sectionHeading font-bold">
                2+
              </p>
              <p>Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-[var(--color-blue-primary)] sectionHeading font-bold">
                10+
              </p>
              <p>Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-[var(--color-blue-primary)] sectionHeading font-bold">
                5+
              </p>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center ">
          <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30 top-0 right-14 -z-10"></div>
          <motion.div
            key={image}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="relative w-60 h-60 mt-10 md:mt-0 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg flex "
          >
            <Image src={image} alt={title} fill className="object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
