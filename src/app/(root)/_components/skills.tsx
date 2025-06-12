"use client";
import { useEffect, useState } from "react";
import { FaLaptopCode, FaDatabase } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const frontendSkills = [
  { name: "React.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Next.js", level: 88 },
  { name: "Tailwind CSS", level: 92 },
  { name: "Vue.js", level: 85 },
];

const backendSkills = [
  { name: "Node.js", level: 93 },
  { name: "Python", level: 87 },
  { name: "Express.js", level: 90 },
  { name: "PostgreSQL", level: 85 },
  { name: "MongoDB", level: 88 },
];

const SkillBar = ({
  skill,
  color,
  isVisible,
}: {
  skill: { name: string; level: number };
  color: string;
  isVisible: boolean;
}) => {
  const [width, setWidth] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isVisible) {
      // Animate progress bar width
      setWidth(skill.level);

      // Animate number count
      let start = 0;
      const end = skill.level;
      const duration = 800;
      const increment = end / (duration / 16); // ~60fps

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.round(start));
        }
      }, 16);

      return () => clearInterval(counter);
    }
  }, [isVisible, skill.level]);

  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-white">
        <span>{skill.name}</span>
        <span>{count}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1">
        <div
          className={`h-2.5 rounded-full transition-all duration-1000 ease-in-out`}
          style={{ width: `${width}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
};

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="mt-20 text-center relative" ref={ref}>
      <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30 top-0 left-40 -z-10" />

      <div className="customWidth px-4 py-16 md:py-24">
        <h2 className="sectionHeading font-bold mb-2 text-gray-900 dark:text-white">
          Skills
        </h2>
        <p className="text-gray-500 dark:text-gray-300 mb-12">
          Technical expertise across the full development stack
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Frontend */}
          <div className="bg-white dark:bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-xl p-6 text-left">
            <div className="flex items-center gap-2 mb-4">
              <FaLaptopCode className="text-blue-500 text-2xl" />
              <h3 className="text-xl font-semibold dark:text-white">
                Frontend Development
              </h3>
            </div>
            {frontendSkills.map((skill, i) => (
              <SkillBar key={i} skill={skill} color="#3B82F6" isVisible={inView} />
            ))}
          </div>

          {/* Backend */}
          <div className="bg-white dark:bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-xl p-6 text-left">
            <div className="flex items-center gap-2 mb-4">
              <FaDatabase className="text-green-600 text-2xl" />
              <h3 className="text-xl font-semibold dark:text-white">
                Backend Development
              </h3>
            </div>
            {backendSkills.map((skill, i) => (
              <SkillBar key={i} skill={skill} color="#16A34A" isVisible={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
