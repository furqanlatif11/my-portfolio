"use client";

import { ReactNode } from "react";
// import Image from "next/image";
// import { Dialog } from "@headlessui/react";
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

export const services: Service[] = [
  {
    id: 1,
    icon: <LayoutDashboard size={60} className="text-white bg-blue-600 p-3 rounded-lg" />,
    name: "Frontend Development",
    description:
      "Build modern, responsive web applications with scalable and high-performance frontends.",
    overview:
      "Create stunning user interfaces that provide exceptional experiences across all devices.",
    imageUrl: "/assets/images/frontendDevServiceImage.png",
    features: [
      "Responsive Design",
      "Performance Optimization",
      "Component Libraries",
      "Progressive Web Apps",
      "State Management",
      "Accessibility",
      "SEO Ready",
    ],
    technologies: ["React", "Next.js", "Vue.js", "Tailwind CSS", "SASS", "Bootstrap"],
    process: "Design → Development → Testing → Deployment",
    timeline: "2-4 weeks",
    cardBg: "bg-blue-100/40",
    colorClass: "border-blue-600",
    iconColor: "text-blue-600",
  },
  {
    id: 2,
    icon: <Server size={60} className="text-white bg-green-600 p-3 rounded-lg" />,
    name: "Backend Development",
    description:
      "Highly scalable server-side solutions with robust APIs and database architecture.",
    overview:
      "Develop server-side applications with secure and maintainable architectures for modern web apps.",
    imageUrl: "/assets/images/backendDevServiceImage.png",
    features: [
      "RESTful API Development",
      "Database Design",
      "Cloud Integration",
      "Authentication & Security",
      "Server Optimization",
    ],
    technologies: ["Node.js", "Express.js", "NestJS", "MongoDB", "PostgreSQL"],
    process: "Requirement Analysis → Backend Architecture → Development → Testing",
    timeline: "3-5 weeks",
    cardBg: "bg-green-100/40",
    colorClass: "border-green-600",
    iconColor: "text-green-600",
  },
  {
    id: 3,
    icon: <Rocket size={60} className="text-white bg-purple-600 p-3 rounded-lg" />,
    name: "Full Stack Solutions",
    description:
      "End-to-end development from frontend to backend with modern tech stacks.",
    overview:
      "Deliver complete applications from UI/UX design, frontend, backend, to deployment and maintenance.",
    imageUrl: "/assets/images/fullstackDevServiceImage.png",
    features: [
      "Full Project Lifecycle",
      "DevOps & Deployment",
      "Maintenance & Updates",
      "Cloud Integration",
    ],
    technologies: ["React", "Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    process: "Design → Full Stack Development → Testing → Deployment",
    timeline: "4-6 weeks",
    cardBg: "bg-purple-100/40",
    colorClass: "border-purple-600",
    iconColor: "text-purple-600",
  },
  {
    id: 4,
    icon: <CircleUserRound size={60} className="text-white bg-orange-600 p-3 rounded-lg" />,
    name: "Consulting & Strategy",
    description:
      "Technical guidance and strategic planning for development projects.",
    overview:
      "Help clients make informed technology decisions and plan development strategies for maximum impact.",
    imageUrl: "/assets/images/consultingServiceImage.png",
    features: ["Architecture Planning", "Technology Selection", "Code Review", "Performance Audits"],
    technologies: ["Project Management", "Agile Tools", "Cloud Strategy", "Architecture Design"],
    process: "Assessment → Strategy Planning → Implementation Guidance",
    timeline: "1-3 weeks",
    cardBg: "bg-orange-100/40",
    colorClass: "border-orange-600",
    iconColor: "text-orange-600",
  },
  {
    id: 5,
    icon: <Flame size={60} className="text-white bg-teal-600 p-3 rounded-lg" />,
    name: "Performance Optimization",
    description:
      "Speed up your applications with advanced optimization techniques and best practices.",
    overview:
      "Analyze and optimize code, frontend, backend, and databases for maximum speed and efficiency.",
    imageUrl: "/assets/images/performanceServiceImage.png",
    features: ["Code Optimization", "SEO Enhancement", "Caching & CDN", "Database Tuning"],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "NGINX"],
    process: "Performance Audit → Optimization → Testing",
    timeline: "1-2 weeks",
    cardBg: "bg-teal-100/40",
    colorClass: "border-teal-600",
    iconColor: "text-teal-600",
  },
  {
    id: 6,
    icon: <Briefcase size={60} className="text-white bg-indigo-600 p-3 rounded-lg" />,
    name: "Maintenance & Support",
    description:
      "Ongoing support and maintenance to keep applications running smoothly.",
    overview:
      "Ensure continuous updates, bug fixes, and improvements for your web and mobile applications.",
    imageUrl: "/assets/images/maintenanceServiceImage.png",
    features: ["Bug Fixes", "24/7 Monitoring", "Feature Enhancements", "Security Updates"],
    technologies: ["Node.js", "React", "PostgreSQL", "Cloud Monitoring Tools"],
    process: "Monitoring → Updates → Optimization",
    timeline: "Ongoing / Contract-based",
    cardBg: "bg-indigo-100/40",
    colorClass: "border-indigo-600",
    iconColor: "text-indigo-600",
  },
];


export default function ServicesSection() {
  // const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="sectionHeading font-bold text-center mb-4" id="services">
        Services
      </h2>
      <p className="text-center text-gray-500 mb-12">
        Comprehensive development solutions from concept to deployment
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"  >
        {services.map((service) => (
          <div
            key={service.id}
            className={`relative rounded-2xl p-6 bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col`}
          >
            {/* Icon / Header */}
            <div className="flex items-center justify-start gap-3 mb-4">
              <div
                className={`p-3 rounded-full text-white text-xl` }
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">
                {service.name}
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-4">{service.description}</p>

            {/* Features */}
            {service.features?.length > 0 && (
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Key Features</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 list-none">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-gray-200 text-sm"
                    >
                      <Check className="text-green-400 w-4 h-4 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            {service.technologies?.length > 0 && (
              <div className="mt-auto">
                <h4 className="text-white font-semibold mb-2">Tech & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-white/20 text-white rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
  
}
