"use client";
import { BadgeCheck } from "lucide-react";
import React from "react";

const About: React.FC = () => {
  return (
    <section className="py-16 px-6 customWidth mx-auto relative">
      <h2 className="sectionHeading font-bold text-center mb-4">About</h2>
      <p className="text-center text-lg text-white max-w-3xl mx-auto mb-12">
        Passionate software engineer with expertise in full-stack development
      </p>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Column */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Building Digital Solutions That Matter
          </h3>
          <p className="text-white mb-4">
            With over 5 years of experience in software development, I
            specialize in creating robust, scalable applications using modern
            technologies. My journey spans from freelance projects to
            enterprise-level solutions.
          </p>
          <p className="text-white mb-6">
            I thrive on solving complex problems and turning ideas into reality
            through clean, efficient code and user-centered design.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h4 className="font-semibold mb-2">Frontend</h4>
              <ul className="space-y-1 text-white">
                <li>✅ React & Next.js</li>
                <li>✅ TypeScript</li>
                <li>✅ Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Backend</h4>
              <ul className="space-y-1 text-white">
                <li>✅ Node.js & Express</li>
                <li>✅ Python & Django</li>
                <li>✅ PostgreSQL & MongoDB</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">
              Download CV
            </button>
            <button className="border border-white text-white px-5 py-2 rounded hover:bg-blue-600 transition">
              Let’s Connect
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Experience Card */}
          <div className="relative group overflow-hidden rounded-xl p-6 bg-white/10 border border-white/20 backdrop-blur-md shadow-lg transition-all duration-500">
            <h4 className="font-semibold text-lg mb-4 text-gray-100">
              Professional Experience
            </h4>
            <div className="space-y-4 text-sm text-gray-200 relative z-10">
              <div>
                <p className="text-blue-300 font-medium">
                  Senior Frontend Developer
                </p>
                <p>TechCorp Solutions • 2021–Present</p>
                <p>Leading frontend development for enterprise apps</p>
              </div>
              <div>
                <p className="text-green-300 font-medium">
                  Full-Stack Developer
                </p>
                <p>InnovateLab • 2019–2021</p>
                <p>Built web apps from concept to deployment</p>
              </div>
              <div>
                <p className="text-purple-300 font-medium">
                  Freelance Developer
                </p>
                <p>Various Clients • 2018–2019</p>
                <p>Custom solutions for startups & small businesses</p>
              </div>
            </div>
            <div className="absolute right-[-50px] top-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500 opacity-30 rounded-full blur-3xl transition-transform duration-700 ease-in-out group-hover:translate-x-[-120px]" />
          </div>

          {/* Achievements Card */}
          <div className="relative group overflow-hidden rounded-xl p-6 bg-white/10 border border-white/20 backdrop-blur-md shadow-lg transition-all duration-500">
            <h4 className="font-semibold text-lg mb-4 text-gray-100">
              Key Achievements
            </h4>
            <div className="grid grid-cols-2 gap-4 text-center text-sm font-medium relative z-10 text-gray-200">
              <div>
                <span className="text-2xl text-blue-400">10+</span>
                <br />
                Projects Delivered
              </div>
              <div>
                <span className="text-2xl text-green-400">98%</span>
                <br />
                Client Satisfaction
              </div>
              <div>
                <span className="text-2xl text-purple-400">15+</span>
                <br />
                Technologies
              </div>
              <div>
                <span className="text-2xl text-orange-400">2+</span>
                <br />
                Years Experience
              </div>
            </div>
            <div className="absolute left-[-50px] top-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 opacity-30 rounded-full blur-[80px] transition-transform duration-700 ease-in-out group-hover:translate-x-[200px]" />
          </div>

          {/* Certifications Card */}
          <div className="relative group overflow-hidden rounded-xl p-6 bg-white/10 border border-white/20 backdrop-blur-md shadow-lg transition-all duration-500">
            <h4 className="font-semibold text-lg mb-4 text-gray-100">
              Certifications
            </h4>
            <ul className="space-y-1 text-sm text-gray-200 relative z-10">
              <li className="flex gap-4">
                <BadgeCheck className="text-blue-600" />
                AWS Certified Developer
              </li>
              <li className="flex gap-4">
                <BadgeCheck className="text-blue-600" />
                Google Cloud Professional
              </li>
              <li className="flex gap-4">
                <BadgeCheck className="text-blue-600" />
                React Developer Certification
              </li>
            </ul>
            <div className="absolute right-[-50px] top-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-green-400 via-teal-400 to-cyan-400 opacity-30 rounded-full blur-[80px] transition-transform duration-700 ease-in-out group-hover:translate-x-[-120px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;