"use client";

import { ReactNode, useState } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import {
  Briefcase,
  Check,
  CircleUserRound,
  Flame,
  LayoutDashboard,
  Rocket,
  Server,
} from "lucide-react";

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
  iconColor?: string;
  cardFeatures?: string[];
}

const services: Service[] = [
  {
    id: 1,
    icon: (
      <LayoutDashboard
        size={60}
        className="text-white bg-blue-600 p-3 rounded-lg"
      />
    ),
    name: "Frontend Development",
    description:
      "Modern, responsive web applications using React, Vue.js, and cutting-edge frameworks. We build scalable and modern frontends with a",
    imageUrl: "/assets/images/frontendDevServiceImage.png",
    overview:
      "Create stunning, responsive user interfaces that provide exceptional user experiences across all devices and platforms.",
    technologies: [
      "React",
      "Next.js",
      "Vue.js",
      "Tailwind CSS",
      "SAAS",
      "Bootstrap",
    ],
    features: [
      "Responsive Design",
      "Performance Optimization",
      "Component Libraries",
      "Progrssive Web Apps",
      "State Management",
      "Accessibility",
      "SEO Ready",
    ],
    cardFeatures: [
      "React & Next.js Applications",
      "Respinsive Design",
      "Performance Optimization",
    ],
    process: "Design → Development → Testing",
    timeline: "2-4 weeks",
    colorClass: "border-blue-600",
    cardBg: "bg-blue-100",
    btnColor: "bg-blue-600 hover:bg-blue-700",
    iconColor: "text-blue-600",
  },
  {
    id: 2,
    icon: (
      <Server size={60} className="text-white bg-green-600 p-3 rounded-lg" />
    ),
    name: "Backend Development",
    description:
      "We Deliver a highly scalable server-side solutions with robust APIs and database architecture.",
    imageUrl: "/services/frontend.jpg",
    overview:
      "We build scalable and modern frontends with a focus on performance and design.",
    technologies: ["React", "Next.js", "Vue.js", "Tailwind CSS"],
    features: ["Responsive Design", "Performance Optimization", "SEO Ready"],
    process: "Design → Development → Testing",
    timeline: "2-4 weeks",
    colorClass: "border-green-600",
    cardBg: "bg-green-100",
    btnColor: "bg-green-600 hover:bg-green-700",
    cardFeatures: [
      "RESTful API Development",
      "Database Design",
      "Cloud Integration",
    ],
    iconColor: "text-green-600",
  },
  {
    id: 3,
    icon: (
      <Rocket size={60} className="text-white bg-purple-600 p-3 rounded-lg" />
    ),
    name: "Full Stack Solution",
    description:
      "A complete end-to-end development and solution from concept to deployment with modern tech stacks.",
    imageUrl: "/services/frontend.jpg",
    overview:
      "We build scalable and modern frontends with a focus on performance and design.",
    technologies: ["React", "Next.js", "Vue.js", "Tailwind CSS"],
    features: ["Responsive Design", "Performance Optimization", "SEO Ready"],
    process: "Design → Development → Testing",
    timeline: "2-4 weeks",
    colorClass: "border-purple-600",
    cardBg: "bg-purple-100",
    btnColor: "bg-purple-600 hover:bg-purple-700",
    cardFeatures: [
      "Complete Web Applications",
      "DevOps & Deployment",
      "Maintenance & Support",
    ],
    iconColor: "text-purple-600",
  },
  {
    id: 4,
    icon: (
      <CircleUserRound
        size={60}
        className="text-white bg-orange-600 p-3 rounded-lg"
      />
    ),
    name: "Consulting & Strategy",
    description:
      "Get assistance from our technical guidance and strategic planning for your development projects.",
    imageUrl: "/services/frontend.jpg",
    overview:
      "We build scalable and modern frontends with a focus on performance and design.",
    technologies: ["React", "Next.js", "Vue.js", "Tailwind CSS"],
    features: ["Responsive Design", "Performance Optimization", "SEO Ready"],
    process: "Design → Development → Testing",
    timeline: "2-4 weeks",
    colorClass: "border-orange-600",
    cardBg: "bg-orange-100",
    btnColor: "bg-orange-600 hover:bg-orange-700",
    cardFeatures: [
      "Architecture Planning",
      "Technology Selection",
      "Code Review",
    ],
    iconColor: "text-orange-600",
  },
  {
    id: 5,
    icon: <Flame size={60} className="text-white bg-teal-600 p-3 rounded-lg" />,
    name: "Performance Optimization",
    description:
      "Speed up your applications with advanced optimization techniques and best practices.",
    imageUrl: "/services/frontend.jpg",
    overview:
      "We build scalable and modern frontends with a focus on performance and design.",
    technologies: ["React", "Next.js", "Vue.js", "Tailwind CSS"],
    features: ["Responsive Design", "Performance Optimization", "SEO Ready"],
    process: "Design → Development → Testing",
    timeline: "2-4 weeks",
    colorClass: "border-teal-600",
    cardBg: "bg-teal-100",
    btnColor: "bg-teal-600 hover:bg-teal-700",
    cardFeatures: ["Speed Optimization", "SEO Enhancement", "Security Audits"],
    iconColor: "text-teal-600",
  },
  {
    id: 6,
    icon: (
      <Briefcase
        size={60}
        className="text-white bg-indigo-600 p-3 rounded-lg"
      />
    ),
    name: "Maintenance & Support",
    description:
      "Ongoing support and maintenance to keep your applications running smoothly.",
    imageUrl: "/services/frontend.jpg",
    overview:
      "We build scalable and modern frontends with a focus on performance and design.",
    technologies: ["React", "Next.js", "Vue.js", "Tailwind CSS"],
    features: ["Responsive Design", "Performance Optimization", "SEO Ready"],
    process: "Design → Development → Testing",
    timeline: "2-4 weeks",
    colorClass: "border-indigo-600",
    cardBg: "bg-indigo-100",
    btnColor: "bg-indigo-600 hover:bg-indigo-700",
    cardFeatures: [
      "Bug Fixes & Updates",
      "24/7 Monitoring",
      "Feature Enhancements",
    ],
    iconColor: "text-indigo-600",
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
            <h2 className="">{service.icon}</h2>
            <h3 className="text-xl font-semibold text-black mb-2 mt-2">
              {service.name}
            </h3>
            <p className="text-base text-gray-600 mb-4 text-gray-500">
              {service.description}
            </p>
            <ul className="text-sm text-gray-700 space-y-1 mb-5">
              {(service.cardFeatures || []).map((f) => (
                <li className="flex items-center gap-3" key={f}>
                  <Check className={`${service.iconColor}`} width={18} /> {f}
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
          <div className="bg-white rounded-lg max-w-4xl max-h-[90%] w-full overflow-auto p-4">
            <h3 className="text-2xl mb-3 font-bold text-[#222222]">
              {selectedService.name}
            </h3>
            <hr className="mb-6" />
            <Image
              src={selectedService.imageUrl}
              alt={selectedService.name}
              width={1000}
              height={400}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="py-4">
              <h3 className="font-bold text-2xl text-black ">Overview</h3>
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
