"use client";
import { ReactNode, useRef, useState } from "react";
import { FaLaptopCode, FaServer, FaCode, FaRocket } from "react-icons/fa";

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string;
  tech: string[];
  icon: ReactNode;
}

const experiences: ExperienceItem[] = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Solutions",
    duration: "2021 - Present",
    description:
      "Leading frontend development for enterprise applications serving 100k+ users. Architected scalable React solutions and mentored junior developers.",
    tech: ["React", "TypeScript", "Next.js", "AWS"],
    icon: <FaLaptopCode className="text-blue-400 text-xl" />,
  },
  {
    role: "Full-Stack Developer",
    company: "InnovateLab",
    duration: "2019 - 2021",
    description:
      "Built scalable web applications from concept to deployment. Developed RESTful APIs and implemented modern frontend frameworks.",
    tech: ["Node.js", "Express", "MongoDB", "Vue.js"],
    icon: <FaServer className="text-green-400 text-xl" />,
  },
  {
    role: "Freelance Developer",
    company: "Various Clients",
    duration: "2018 - 2019",
    description:
      "Delivered custom solutions for startups and small businesses. Specialized in e-commerce platforms and automation tools.",
    tech: ["WordPress", "PHP", "MySQL", "jQuery"],
    icon: <FaCode className="text-purple-400 text-xl" />,
  },
  {
    role: "Junior Developer",
    company: "StartupTech",
    duration: "2017 - 2018",
    description:
      "Started career building responsive websites and learning modern development practices. Contributed to team projects and gained valuable industry experience.",
    tech: ["HTML/CSS", "JavaScript", "Bootstrap", "Git"],
    icon: <FaRocket className="text-orange-400 text-xl" />,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className=" mt-20 p-10 bg-[#0f0f11] text-white text-center"
    >   
      <div className="customWidth ">
        <h2 className="sectionHeading font-bold mb-2">Experience</h2>
        <p className="text-gray-400 mb-12">
          Professional journey across software houses and freelance projects
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} {...exp} />
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
  description,
  tech,
  icon,
}: ExperienceItem) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg rounded-2xl p-6 text-left transition-transform duration-300 hover:scale-[1.015] group"
    >
      {/* Mouse Glow */}
      <div
        className="pointer-events-none absolute rounded-full bg-white/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          left: coords.x,
          top: coords.y,
          width: 200,
          height: 200,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Content */}
      <div className="flex items-center gap-3 mb-4 relative z-10">
        <div className="p-3 bg-white/10 rounded-full">{icon}</div>
        <div>
          <h3 className="text-lg font-semibold">{role}</h3>
          <p className="text-sm text-gray-300">{company}</p>
          <p className="text-xs text-gray-400">{duration}</p>
        </div>
      </div>

      <p className="text-gray-200 text-sm mb-4 relative z-10">{description}</p>

      <div className="flex flex-wrap gap-2 relative z-10">
        {tech.map((item, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 bg-white/10 border border-white/10 rounded-full"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
