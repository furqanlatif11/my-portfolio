'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const roles = [
  {
    title: 'Full-Stack Developer',
    image: '/assets/images/fullstack.jfif',
  },
  {
    title: 'Shopify Developer',
    image: '/assets/images/frontend.jfif',
  },
  {
    title: 'Backend Developer',
    image: '/assets/images/backend.jfif',
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
      <div className='w-full customWidth   min-h-[80vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-20'>
        <div className=" space-y-4 text-center md:text-left ">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I'm <span className="text-blue">Muhammad Furqan</span>
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
          Experienced in frontend and backend development with a passion for creating innovative
          solutions. Professional experience in software houses and successful freelance projects.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
            View My Work
          </button>
          <button className="border border-blue-600 text-blue-600 py-2 px-4 rounded-md hover:bg-blue-50">
            Get In Touch
          </button>
        </div>

        <div className="flex justify-center md:justify-start gap-8 pt-6 text-sm text-gray-600">
          <div className="text-center">
            <p className="text-blue-600 text-lg font-bold">5+</p>
            <p>Years Experience</p>
          </div>
          <div className="text-center">
            <p className="text-blue-600 text-lg font-bold">50+</p>
            <p>Projects Completed</p>
          </div>
          <div className="text-center">
            <p className="text-blue-600 text-lg font-bold">20+</p>
            <p>Happy Clients</p>
          </div>
        </div>
      </div>

      <motion.div
        key={image}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.6 }}
        className="relative w-60 h-60 mt-10 md:mt-0 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg"
      >
        <Image src={image} alt={title} fill className="object-cover" />
      </motion.div>
      </div>
    </section>
  );
}
