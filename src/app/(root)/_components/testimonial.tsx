"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import ReactCountryFlag from "react-country-flag";

type Testimonial = {
  review: string;
  name: string;
  role: string;
  flag: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    review:
      "Working with Furqan has been an exceptional experience. From the very beginning, he understood our vision for Skill Nexus and transformed it into a fully functional, scalable platform. His attention to detail, clean code practices, and ability to think like both a developer and a product strategist made a huge difference. The admin dashboard, course management system, and overall user experience turned out far better than we initially imagined. He’s not just a developer — he’s a problem-solver who genuinely cares about delivering results.",
    name: "Mohsin Masood",
    role: "CEO, Skill Nexus",
    flag: "AE",
    rating: 5,
  },
  {
    review:
      "Furqan did an outstanding job revamping our website. He quickly understood our business and delivered a professional, impactful platform that truly represents AH Engineering Services. His blend of technical skill and creative insight made the whole process seamless.",
    name: "Ahmed Faizan",
    role: "CEO, A. H. Engineering Services",
    flag: "PK", // Pakistan
    rating: 5,
  },
  {
    review:
      "Furqan delivered exactly what we envisioned — on time and with exceptional precision. He followed our design guidelines perfectly and turned them into a seamless, high-quality product. His commitment to deadlines and attention to detail make him a trusted development partner for Power Tech Solutions.",
    name: "Mike D. Andrew",
    role: "CEO, PowerTech Solutions",
    flag: "US",
    rating: 5,
  },
  {
    review:
      "Furqan saved us at a critical time. Our contract with a major bank merchant was on the verge of cancellation due to project delays, but he stepped in and delivered the complete solution within just two days. His efficiency, technical skill, and dedication under pressure were exceptional — he truly helped us maintain our client’s trust.",
    name: "Obaid Afzal",
    role: "CEO, Kinetic Networks",
    flag: "US",
    rating: 5,
  },
  {
    review:
      "Five star for the brother Muhammad Furqan. He Helped me in my project and delivered it before time. He is very professional and knows his work very well. I will definitely hire him again for my future projects.",
    name: "Marshal M.",
    role: "University Student",
    flag: "AU",
    rating: 5,
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const current = testimonials[currentIndex];

  // Autoplay functionality
  React.useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextTestimonial();
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(interval);
    }
  }, [currentIndex, isPaused]);

  return (
    <section className="mt-20 text-center relative" id="testimonials">
      <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20 top-0 right-20 -z-10" />

      <div className="customWidth px-4 py-16 md:py-24">
        <h2 className="sectionHeading font-bold mb-2 text-gray-900 dark:text-white">
          Testimonials
        </h2>
        <p className="text-gray-500 dark:text-gray-300 mb-16">
          What clients say about working with me
        </p>

        {/* Main Testimonial Display */}
        <div
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative bg-gradient-to-br from-purple-500/10 to-blue-500/10 dark:from-purple-500/5 dark:to-blue-500/5 rounded-3xl p-8 md:p-12 border border-purple-200 dark:border-purple-500/20 2 border border-purple-200 dark:border-purple-500/20">
            {/* Large Quote Mark */}
            <div className="text-6xl md:text-8xl text-purple-500/20 font-serif mb-4">
              &quot;
            </div>

            {/* Review Text */}
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed mb-8 italic">
              {current.review}
            </p>

            {/* Rating Stars */}
            <div className="flex items-center justify-center gap-1 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <ReactCountryFlag
                countryCode={current.flag}
                svg
                style={{
                  width: "2.5em",
                  height: "2.5em",
                  objectFit: "cover",
                  borderRadius: "24px",
                }}
                title={current.flag}
              />
              <div className="text-left">
                <p className="font-bold text-gray-900 dark:text-white text-lg">
                  {current.name}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {current.role}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 md:-left-16">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-white dark:bg-white/10 border border-gray-200 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/20 transition-all duration-300 shadow-lg"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-white" />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4 md:-right-16">
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-white dark:bg-white/10 border border-gray-200 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/20 transition-all duration-300 shadow-lg"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-gray-700 dark:text-white" />
              </button>
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-8 h-2 bg-purple-600 dark:bg-purple-400"
                    : "w-2 h-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Grid of All Testimonials Below */}
          {/* Grid of All Testimonials Below */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`text-left p-6 rounded-xl border-2 transition-all duration-300 ${
                  index === currentIndex
                    ? "border-purple-500 bg-purple-50 dark:bg-purple-500/10"
                    : "border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 hover:border-purple-300 dark:hover:border-purple-500/50"
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <ReactCountryFlag
                    countryCode={testimonial.flag} // Changed from current.flag to testimonial.flag
                    svg
                    style={{
                      width: "1.5em", // Smaller size for grid
                      height: "1.5em",
                      borderRadius: "2px",
                    }}
                    title={testimonial.flag}
                  />
                  <div>
                    <p className="font-semibold text-sm text-gray-900 dark:text-white">
                      {testimonial.name}
                    </p>
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-3">
                  {testimonial.review}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
