"use client";
import { useEffect, useState } from "react";
import { FaLaptopCode, FaServer, FaCode, FaRocket, FaMapMarkerAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  location?: string;
  description: string;
  achievements?: string[];
  tech: string[];
  icon: any;
  accentColor: string;
}

const experiences: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "ADYZER",
    duration: "2024 - Present",
    location: "Remote",
    description:
      "Architected modular and maintainable solutions using React and Next.js, improved performance and user experience, and collaborated across teams. Actively involved in learning new technologies and various code reviews.",
    achievements: [
      "Improved application performance by 40%",
      "Led code review initiatives across teams",
      "Mentored junior developers"
    ],
    tech: ["React", "TypeScript", "Next.js", "AWS"],
    icon: FaLaptopCode,
    accentColor: "blue",
  },
  {
    role: "Software Engineer - I",
    company: "MSLM Dev",
    duration: "2024 - 2024",
    location: "Hybrid",
    description:
      "Developed custom web applications for startups and small businesses using React and Go. Built reusable UI components, integrated APIs, and collaborated with cross-functional teams to deliver scalable solutions on tight deadlines.",
    achievements: [
      "Delivered 8+ client projects successfully",
      "Built scalable component library",
      "Reduced API response time by 30%"
    ],
    tech: ["Node.js", "React", "Chartsjs", "Golang", "SASS", "REST API", "Git", "PostgreSQL"],
    icon: FaServer,
    accentColor: "green",
  },
  {
    role: "Frontend Developer (Intern)",
    company: "Programmers Force",
    duration: "2023 - 2024",
    location: "On-site",
    description:
      "Assisted in developing responsive web interfaces using Vue.js and Vuetify. Contributed to component-based UI design, API integration, and performance optimization for client-facing applications.",
    achievements: [
      "Created 20+ reusable Vue components",
      "Improved mobile responsiveness by 50%",
      "Collaborated closely with design team"
    ],
    tech: ["Vue", "Vuetify", "MongoDB", "jQuery", "Git", "Bootstrap", "REST APIs"],
    icon: FaCode,
    accentColor: "purple",
  },
  {
    role: "Freelance Developer",
    company: "Various Clients",
    duration: "2022 - Present",
    location: "Remote",
    description:
      "Delivered custom solutions for startups and small businesses. Specialized in e-commerce platforms and automation tools.",
    achievements: [
      "15+ satisfied clients worldwide",
      "Maintained 5-star average rating",
      "Built 10+ production e-commerce stores"
    ],
    tech: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Shopify"],
    icon: FaRocket,
    accentColor: "orange",
  },
];

const colorMap = {
  blue: {
    bg: "bg-blue-500",
    text: "text-blue-500",
    border: "border-blue-500",
    bgLight: "bg-blue-500/10",
  },
  green: {
    bg: "bg-green-500",
    text: "text-green-500",
    border: "border-green-500",
    bgLight: "bg-green-500/10",
  },
  purple: {
    bg: "bg-purple-500",
    text: "text-purple-500",
    border: "border-purple-500",
    bgLight: "bg-purple-500/10",
  },
  orange: {
    bg: "bg-orange-500",
    text: "text-orange-500",
    border: "border-orange-500",
    bgLight: "bg-orange-500/10",
  },
};

export default function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="mt-20 text-center relative" ref={ref} id="experience">
      <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-20 top-20 right-16 md:right-40 -z-10" />

      <div className="customWidth px-4 py-16 md:py-24">
        <h2 className="sectionHeading font-bold mb-2 text-gray-900 dark:text-white">
          Experience
        </h2>
        <p className="text-gray-500 dark:text-gray-300 mb-16">
          Professional journey across software houses and freelance projects
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {experiences.map((exp, i) => (
            <ExperienceCard
              key={i}
              {...exp}
              index={i}
              isVisible={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  role,
  company,
  duration,
  location,
  description,
  achievements,
  tech,
  icon: Icon,
  accentColor,
  index,
  isVisible,
}: ExperienceItem & { index: number; isVisible: boolean }) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [showAchievements, setShowAchievements] = useState(false);
  const colors = colorMap[accentColor as keyof typeof colorMap];

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated]);

  return (
    <div
      className={`transition-all duration-700 ${
        hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setShowAchievements(true)}
      onMouseLeave={() => setShowAchievements(false)}
    >
      <div className="relative bg-white dark:bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group h-full">
        {/* Subtle accent line at top */}
        <div className={`absolute top-0 left-0 right-0 h-1 ${colors.bg} rounded-t-2xl`} />
        
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 ${colors.bgLight} rounded-xl group-hover:scale-105 transition-transform duration-300`}>
            <Icon className={`${colors.text} text-2xl`} />
          </div>
          <span className={`text-xs font-semibold px-3 py-1 ${colors.bgLight} ${colors.text} rounded-full`}>
            {duration}
          </span>
        </div>
        
        {/* Title and company */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {role}
        </h3>
        
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
          <FaMapMarkerAlt className="text-gray-400 text-xs" />
          <span className="font-medium">{company}</span>
          {location && (
            <>
              <span>•</span>
              <span>{location}</span>
            </>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Achievements - subtle expand */}
        {achievements && (
          <div className={`mb-4 space-y-2 overflow-hidden transition-all duration-300 ${
            showAchievements ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <p className={`text-xs font-semibold ${colors.text} mb-2`}>Key Achievements:</p>
            {achievements.map((achievement, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                <span className={`mt-1 w-1.5 h-1.5 rounded-full ${colors.bg} flex-shrink-0`} />
                <span>{achievement}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {tech.map((item, techIndex) => (
            <span
              key={techIndex}
              className="text-xs px-3 py-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-gray-700 dark:text-gray-300 transition-colors duration-200"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}