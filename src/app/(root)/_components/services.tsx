"use client";

import { useState } from "react";
import {
  Briefcase,
  Check,
  CircleUserRound,
  Flame,
  LayoutDashboard,
  Rocket,
  Server,
  ArrowRight,
  Clock,
  Star,
} from "lucide-react";

interface Service {
  id: number;
  name: string;
  description: string;
  features: string[];
  technologies: string[];
  timeline: string;
  icon: any;
  colorClass: string;
  popular?: boolean;
  startingPrice?: string;
}

const services: Service[] = [
  {
    id: 1,
    icon: LayoutDashboard,
    name: "Frontend Development",
    description:
      "Build modern, responsive web applications with scalable and high-performance frontends.",
    features: [
      "Responsive Design",
      "Performance Optimization",
      "Component Libraries",
      "Progressive Web Apps",
      "State Management",
      "Accessibility",
    ],
    technologies: ["React", "Next.js", "Vue.js", "Tailwind CSS"],
    timeline: "2-4 weeks",
    colorClass: "blue",
    popular: true,
    startingPrice: "799",
  },
  {
    id: 2,
    icon: Server,
    name: "Backend Development",
    description:
      "Highly scalable server-side solutions with robust APIs and database architecture.",
    features: [
      "RESTful API Development",
      "Database Design",
      "Cloud Integration",
      "Authentication & Security",
      "Server Optimization",
    ],
    technologies: ["Node.js", "Express.js", "NestJS", "MongoDB"],
    timeline: "3-5 weeks",
    colorClass: "green",
    startingPrice: "$1,199",
  },
  {
    id: 3,
    icon: Rocket,
    name: "Full Stack Solutions",
    description:
      "End-to-end development from frontend to backend with modern tech stacks.",
    features: [
      "Full Project Lifecycle",
      "DevOps & Deployment",
      "Maintenance & Updates",
      "Cloud Integration",
    ],
    technologies: ["React", "Next.js", "Node.js", "Express.js"],
    timeline: "4-6 weeks",
    colorClass: "purple",
    popular: true,
    startingPrice: "$1,499",
  },
  {
    id: 4,
    icon: CircleUserRound,
    name: "Consulting & Strategy",
    description:
      "Technical guidance and strategic planning for your development projects.",
    features: [
      "Architecture Planning",
      "Technology Selection",
      "Code Review",
      "Performance Audits",
    ],
    technologies: ["Architecture Design", "Agile", "Cloud Strategy"],
    timeline: "1-3 weeks",
    colorClass: "orange",
    startingPrice: "$99",
  },
  {
    id: 5,
    icon: Flame,
    name: "Performance Optimization",
    description:
      "Speed up your applications with advanced optimization techniques.",
    features: [
      "Code Optimization",
      "SEO Enhancement",
      "Caching & CDN",
      "Database Tuning",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
    timeline: "1-2 weeks",
    colorClass: "teal",
    startingPrice: "$499",
  },
  {
    id: 6,
    icon: Briefcase,
    name: "Maintenance & Support",
    description:
      "Ongoing support and maintenance to keep applications running smoothly.",
    features: [
      "Bug Fixes",
      "24/7 Monitoring",
      "Feature Enhancements",
      "Security Updates",
    ],
    technologies: ["Node.js", "React", "Cloud Monitoring"],
    timeline: "Ongoing",
    colorClass: "indigo",
    startingPrice: "$400/mo",
  },
];

const colorMap = {
  blue: {
    bg: "bg-blue-500",
    bgLight: "bg-blue-50 dark:bg-blue-500/10",
    text: "text-blue-600 dark:text-blue-400",
    border: "border-blue-200 dark:border-blue-500/30",
    hover: "hover:border-blue-500 dark:hover:border-blue-400",
  },
  green: {
    bg: "bg-green-500",
    bgLight: "bg-green-50 dark:bg-green-500/10",
    text: "text-green-600 dark:text-green-400",
    border: "border-green-200 dark:border-green-500/30",
    hover: "hover:border-green-500 dark:hover:border-green-400",
  },
  purple: {
    bg: "bg-purple-500",
    bgLight: "bg-purple-50 dark:bg-purple-500/10",
    text: "text-purple-600 dark:text-purple-400",
    border: "border-purple-200 dark:border-purple-500/30",
    hover: "hover:border-purple-500 dark:hover:border-purple-400",
  },
  orange: {
    bg: "bg-orange-500",
    bgLight: "bg-orange-50 dark:bg-orange-500/10",
    text: "text-orange-600 dark:text-orange-400",
    border: "border-orange-200 dark:border-orange-500/30",
    hover: "hover:border-orange-500 dark:hover:border-orange-400",
  },
  teal: {
    bg: "bg-teal-500",
    bgLight: "bg-teal-50 dark:bg-teal-500/10",
    text: "text-teal-600 dark:text-teal-400",
    border: "border-teal-200 dark:border-teal-500/30",
    hover: "hover:border-teal-500 dark:hover:border-teal-400",
  },
  indigo: {
    bg: "bg-indigo-500",
    bgLight: "bg-indigo-50 dark:bg-indigo-500/10",
    text: "text-indigo-600 dark:text-indigo-400",
    border: "border-indigo-200 dark:border-indigo-500/30",
    hover: "hover:border-indigo-500 dark:hover:border-indigo-400",
  },
};

export default function ServicesSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="mt-20 text-center relative" id="services">
      <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20 top-0 left-20 -z-10" />

      <div className="customWidth px-4 py-16 md:py-24">
        <h2 className="sectionHeading font-bold mb-2 text-gray-900 dark:text-white">
          Services
        </h2>
        <p className="text-gray-500 dark:text-gray-300 mb-4">
          Comprehensive development solutions from concept to deployment
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-400 mb-16">
          Transform your ideas into reality with professional development services
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service) => {
            const colors = colorMap[service.colorClass as keyof typeof colorMap];
            const Icon = service.icon;
            const isHovered = hoveredId === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative rounded-2xl p-6 bg-white dark:bg-white/10 backdrop-blur-md border-2 ${colors.border} ${colors.hover} shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col group`}
              >
                {/* Popular badge */}
                {service.popular && (
                  <div className="absolute -top-3 right-6 flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full shadow-md">
                    <Star className="w-3 h-3 text-white fill-white" />
                    <span className="text-xs font-bold text-white">Popular</span>
                  </div>
                )}

                {/* Icon */}
                <div className={`${colors.bgLight} rounded-xl p-4 inline-flex w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${colors.text}`} />
                </div>

                {/* Title and Price */}
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-left">
                    {service.name}
                  </h3>
                  {service.startingPrice && (
                    <p className={`text-sm font-semibold ${colors.text} text-left`}>
                      Starting at {service.startingPrice}
                    </p>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 text-left leading-relaxed">
                  {service.description}
                </p>

                {/* Timeline */}
                <div className="flex items-center gap-2 mb-4 text-sm text-gray-500 dark:text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>{service.timeline}</span>
                </div>

                {/* Features - shown on hover or always visible */}
                <div className={`mb-4 transition-all duration-300 ${
                  isHovered ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 md:max-h-96 md:opacity-100'
                }`}>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 text-left">
                    What's included:
                  </h4>
                  <ul className="space-y-1.5">
                    {service.features.slice(0, 4).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300 text-left"
                      >
                        <Check className={`w-3.5 h-3.5 ${colors.text} flex-shrink-0`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-md text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                 
                </div>
              </div>
            );
          })}
        </div>

       
      </div>
    </section>
  );
}