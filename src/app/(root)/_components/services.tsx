"use client";

import { ReactNode, useState } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { Blocks } from 'lucide-react';

interface Service {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  overview: string;
  technologies: string[];
  features: string[];
  process: string;
  timeline: string;
  icon: ReactNode;
  colorClass?: string;
  cardBg?: string;
  btnColor?: string;
}

const services: Service[] = [
  {
    id: 1,
    icon: <Blocks size={60} className="text-white bg-blue-600 p-3 rounded" />,
    name: "Frontend Development",
    description:
      "Modern, responsive web applications using React, Vue.js, and cutting-edge frameworks. We build scalable and modern frontends with a",
    imageUrl: "/services/frontend.jpg",
    overview:
      "We build scalable and modern frontends with a focus on performance and design. We build scalable and modern frontends with a",
    technologies: ["React", "Next.js", "Vue.js", "Tailwind CSS"],
    features: ["Responsive Design", "Performance Optimization", "SEO Ready"],
    process: "Design → Development → Testing",
    timeline: "2-4 weeks",
    colorClass: "border-blue-600",
    cardBg: 'bg-blue-100',
    btnColor: "bg-blue-600 hover:bg-blue-700",
  },
   {
    id: 2,
    icon: <Blocks size={60} className="text-white bg-green-600 p-3 rounded" />,
    name: "Backend Development",
    description:
      "Modern, responsive web applications using React, Vue.js, and cutting-edge frameworks. We build scalable and modern frontends with a",
    imageUrl: "/services/frontend.jpg",
    overview:
      "We build scalable and modern frontends with a focus on performance and design.",
    technologies: ["React", "Next.js", "Vue.js", "Tailwind CSS"],
    features: ["Responsive Design", "Performance Optimization", "SEO Ready"],
    process: "Design → Development → Testing",
    timeline: "2-4 weeks",
    colorClass: "border-green-600",
    cardBg: 'bg-green-100',
    btnColor: "bg-green-600 hover:bg-green-700",

  },
  {
    id: 3,
    icon: <Blocks size={60} className="text-white bg-purple-600 p-3 rounded" />,
    name: "Full Stack Solution",
    description:
      "Modern, responsive web applications using React, Vue.js, and cutting-edge frameworks. We build scalable and modern frontends with a",
    imageUrl: "/services/frontend.jpg",
    overview:
      "We build scalable and modern frontends with a focus on performance and design.",
    technologies: ["React", "Next.js", "Vue.js", "Tailwind CSS"],
    features: ["Responsive Design", "Performance Optimization", "SEO Ready"],
    process: "Design → Development → Testing",
    timeline: "2-4 weeks",
    colorClass: "border-purple-600",
    cardBg: 'bg-purple-100',
    btnColor: "bg-purple-600 hover:bg-purple-700",

  },
  {
    id: 4,
    icon: <Blocks size={60} className="text-white bg-orange-600 p-3 rounded" />,
    name: "Full Stack Solution",
    description:
      "Modern, responsive web applications using React, Vue.js, and cutting-edge frameworks. We build scalable and modern frontends with a",
    imageUrl: "/services/frontend.jpg",
    overview:
      "We build scalable and modern frontends with a focus on performance and design.",
    technologies: ["React", "Next.js", "Vue.js", "Tailwind CSS"],
    features: ["Responsive Design", "Performance Optimization", "SEO Ready"],
    process: "Design → Development → Testing",
    timeline: "2-4 weeks",
    colorClass: "border-orange-600",
    cardBg: 'bg-orange-100',
    btnColor: "bg-orange-600 hover:bg-orange-700",

  },
  {
    id: 5,
    icon: <Blocks size={60} className="text-white bg-teal-600 p-3 rounded" />,
    name: "Full Stack Solution",
    description:
      "Modern, responsive web applications using React, Vue.js, and cutting-edge frameworks. We build scalable and modern frontends with a",
    imageUrl: "/services/frontend.jpg",
    overview:
      "We build scalable and modern frontends with a focus on performance and design.",
    technologies: ["React", "Next.js", "Vue.js", "Tailwind CSS"],
    features: ["Responsive Design", "Performance Optimization", "SEO Ready"],
    process: "Design → Development → Testing",
    timeline: "2-4 weeks",
    colorClass: "border-teal-600",
    cardBg: 'bg-teal-100',
    btnColor: "bg-teal-600 hover:bg-teal-700",

  },
  {
    id: 6,
    icon: <Blocks size={60} className="text-white bg-purple-600 p-3 rounded" />,
    name: "Full Stack Solution",
    description:
      "Modern, responsive web applications using React, Vue.js, and cutting-edge frameworks. We build scalable and modern frontends with a",
    imageUrl: "/services/frontend.jpg",
    overview:
      "We build scalable and modern frontends with a focus on performance and design.",
    technologies: ["React", "Next.js", "Vue.js", "Tailwind CSS"],
    features: ["Responsive Design", "Performance Optimization", "SEO Ready"],
    process: "Design → Development → Testing",
    timeline: "2-4 weeks",
    colorClass: "border-purple-600",
    cardBg: 'bg-purple-100',
    btnColor: "bg-purple-600 hover:bg-purple-700",

  },
  // Add more services here
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="sectionHeading font-bold text-center mb-4">Services</h2>
      <p className="text-center text-gray-600 mb-10">
        Comprehensive development solutions from concept to deployment
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className={`rounded-xl p-8 ${service.cardBg}  border ${service.colorClass} shadow-md rounded-xl p-6 text-left shadow hover:shadow-md border border-gray-200`}
          >
            <h2 className="rounded">{service.icon}</h2>
            <h3 className="text-xl font-semibold text-black mb-2 mt-2">
              {service.name}
            </h3>
            <p className="text-base text-gray-600 mb-4 text-gray-500">{service.description}</p>
            <ul className="text-sm text-gray-700 space-y-1 mb-5">
              {service.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-gray-500">
                  ✔ {f}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setSelectedService(service)}
              className={` w-full  text-white text-base font-medium px-4 py-2 rounded hover:bg-blue-700 ${service.btnColor}`}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Dialog
        open={selectedService !== null}
        onClose={() => setSelectedService(null)}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      >
        {selectedService && (
          <div className="bg-white rounded-lg max-w-3xl w-full overflow-hidden">
            <Image
              src={selectedService.imageUrl}
              alt={selectedService.name}
              width={1000}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#222222]">
                {selectedService.name}
              </h3>
              <p className="text-gray-600 text-sm mt-2 mb-4">
                {selectedService.overview}
              </p>

              <h4 className="text-lg font-semibold text-gray-800 mb-1">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedService.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-1">
                Key Features
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 list-disc list-inside text-sm text-gray-700 mb-4">
                {selectedService.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <div className="flex justify-between text-sm text-gray-600 mb-6">
                <div>
                  <strong>Process:</strong> {selectedService.process}
                </div>
                <div>
                  <strong>Timeline:</strong> {selectedService.timeline}
                </div>
              </div>

              <div className="flex gap-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Get Quote
                </button>
                <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>
        )}
      </Dialog>
    </section>
  );
}
