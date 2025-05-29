"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";

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
}

const services: Service[] = [
  {
    id: 1,
    name: "Frontend Development",
    description:
      "Modern, responsive web applications using React, Vue.js, and cutting-edge frameworks.",
    imageUrl: "/services/frontend.jpg",
    overview:
      "We build scalable and modern frontends with a focus on performance and design.",
    technologies: ["React", "Next.js", "Vue.js", "Tailwind CSS"],
    features: ["Responsive Design", "Performance Optimization", "SEO Ready"],
    process: "Design → Development → Testing",
    timeline: "2-4 weeks",
  },
  // Add more services here
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4">Services</h2>
      <p className="text-center text-gray-600 mb-10">
        Comprehensive development solutions from concept to deployment
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="rounded-xl p-6 bg-white shadow hover:shadow-md border border-gray-200"
          >
            <h3 className="text-lg font-semibold text-[#222222] mb-2">
              {service.name}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{service.description}</p>
            <ul className="text-sm text-gray-700 space-y-1 mb-5">
              {service.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  ✔ {f}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setSelectedService(service)}
              className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded hover:bg-blue-700"
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
