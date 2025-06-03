"use client";

import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import {
  Check,
  ChevronDown,
  Clock4,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
const projectTypes = [
  "Please Select Project Type",
  "Frontend Development",
  "Backend Development",
  "Full-Stack Application",
  "Consultation & Strategy",
  "Maintenance & Support",
  "UI/UX Design",
  "Other",
];
const projectRanges = [
  "Please Select Project Range",
  "Under $500",
  "$500 - $1000",
  "$1000 - $10,000",
  "Over $10,000",
  "Let's Discuss",
];
const projectTimeline = [
  "Please Select Project Timeline",
  "ASAP",
  "Within 1 month",
  "2 - 3 months",
  "3 - 6 months",
  "Flexible",
];

export default function Contact() {
  const [selectedProject, setSelectedProject] = useState(projectTypes[0]);
  const [selectedRange, setSelectedRange] = useState(projectRanges[0]);
  const [selectedTimeline, setSelectedTimeline] = useState(projectTimeline[0]);

  return (
    <section className="py-16 px-4 md:px-16 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          Contact
        </h2>
        <p className="text-center text-gray-500 mb-12">
          Ready to start your next project? Let’s discuss how I can help bring
          your ideas to life.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8 relative">
            <div>
              <h3 className="text-xl font-semibold">Get In Touch</h3>
              <ul className="mt-4 space-y-4">
                <li className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-md">
                    <Mail className="w-6 h-6 text-blue-600 " />
                  </div>
                  <div>
                    <p className="font-bold">Email:</p>
                    <a
                      href="mailto:alex.johnson@email.com"
                      className="text-blue-600 hover:underline"
                    >
                      alex.johnson@email.com
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-md">
                    <Phone className="w-6 h-6 text-green-600 " />
                  </div>
                  <div>
                    <p className="font-medium">Phone:</p>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="bg-purple-100 p-3 rounded-md">
                    <MapPin className="w-6 h-6 text-purple-600 " />
                  </div>
                  <div>
                    <p className="font-medium">Location:</p>
                    <p>San Francisco, CA</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="bg-orange-100 p-3 rounded-md">
                    <Clock4 className="w-6 h-6 text-orange-600 " />
                  </div>
                  <div>
                    <p className="font-medium">Response Time:</p>
                    <p>Within 24 hours</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Follow Me</h3>
              <div className="flex gap-4 mt-2">
                <a
                  href="#"
                  className="text-blue-500 bg-blue-800 p-3 rounded-md"
                >
                  <Linkedin className="w-6 h-6 text-white " />
                </a>
                <a href="#" className=" bg-[#222222] p-3 rounded-md">
                  <Github className="w-6 h-6 text-white " />
                </a>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-green-50 border border-green-200">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <span className="absolute inline-flex h-3 w-3 top-1 rounded-full bg-green-400 opacity-75 animate-ping"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
                </div>
                <p className="text-green-600 font-medium">
                  Available for new projects
                </p>
              </div>
              <p className="text-green-700 mt-1 text-sm">
                Currently accepting new freelance and contract opportunities.
                Let’s discuss your project requirements.
              </p>
            </div>
            <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30 top-0 left-64 -z-10"></div>
          </div>

          {/* Right Column - Form */}
          <form className="space-y-6 bg-white/5 dark:bg-white/10 backdrop-blur-md border border-blue-600 shadow-lg rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold text-white mb-4">Send Message</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder=" "
                  className="peer w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  required
                />
                <label className="absolute left-4 top-2 text-sm text-white/60 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-400">
                  First Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder=" "
                  className="peer w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  required
                />
                <label className="absolute left-4 top-2 text-sm text-white/60 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-400">
                  Last Name
                </label>
              </div>
            </div>

            <div className="relative">
              <input
                type="email"
                placeholder=" "
                className="peer w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
              />
              <label className="absolute left-4 top-2 text-sm text-white/60 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-400">
                Email Address
              </label>
            </div>

            <div className="relative">
              <input
                type="tel"
                placeholder=" "
                className="peer w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <label className="absolute left-4 top-2 text-sm text-white/60 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-400">
                Phone Number (Optional)
              </label>
            </div>

            {/** Select dropdowns */}
            <div className="w-full">
              <Listbox value={selectedProject} onChange={setSelectedProject}>
                <div className="relative">
                  <Listbox.Button className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white/90 flex justify-between items-center hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                    {selectedProject}
                    <ChevronDown className="ml-2 w-4 h-4 text-white/60" />
                  </Listbox.Button>

                  <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-gray-800 border border-white/10 shadow-lg">
                    {projectTypes.map((type, index) => (
                      <Listbox.Option
                        key={index}
                        value={type}
                        className={({ active, selected }) =>
                          `cursor-pointer px-4 py-2 ${
                            active ? "bg-blue-600 text-white" : "text-white/80"
                          } ${selected ? "bg-blue-700" : ""}`
                        }
                      >
                        {({ selected }) => (
                          <div className="flex justify-between items-center">
                            <span>{type}</span>
                            {selected && (
                              <Check className="w-4 h-4 text-white" />
                            )}
                          </div>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>
            </div>

            <div className="w-full">
              <Listbox value={selectedRange} onChange={setSelectedRange}>
                <div className="relative">
                  <Listbox.Button className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white/90 flex justify-between items-center hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                    {selectedRange}
                    <ChevronDown className="ml-2 w-4 h-4 text-white/60" />
                  </Listbox.Button>

                  <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-gray-800 border border-white/10 shadow-lg">
                    {projectRanges.map((type, index) => (
                      <Listbox.Option
                        key={index}
                        value={type}
                        className={({ active, selected }) =>
                          `cursor-pointer px-4 py-2 ${
                            active ? "bg-blue-600 text-white" : "text-white/80"
                          } ${selected ? "bg-blue-700" : ""}`
                        }
                      >
                        {({ selected }) => (
                          <div className="flex justify-between items-center">
                            <span>{type}</span>
                            {selected && (
                              <Check className="w-4 h-4 text-white" />
                            )}
                          </div>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>
            </div>
            <div className="w-full">
              <Listbox value={selectedTimeline} onChange={setSelectedTimeline}>
                <div className="relative">
                  <Listbox.Button className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white/90 flex justify-between items-center hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                    {selectedTimeline}
                    <ChevronDown className="ml-2 w-4 h-4 text-white/60" />
                  </Listbox.Button>

                  <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-gray-800 border border-white/10 shadow-lg">
                    {projectTimeline.map((type, index) => (
                      <Listbox.Option
                        key={index}
                        value={type}
                        className={({ active, selected }) =>
                          `cursor-pointer px-4 py-2 ${
                            active ? "bg-blue-600 text-white" : "text-white/80"
                          } ${selected ? "bg-blue-700" : ""}`
                        }
                      >
                        {({ selected }) => (
                          <div className="flex justify-between items-center">
                            <span>{type}</span>
                            {selected && (
                              <Check className="w-4 h-4 text-white" />
                            )}
                          </div>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>
            </div>

            <div className="relative">
              <textarea
                placeholder=" "
                rows={4}
                className="peer w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
              ></textarea>
              <label className="absolute left-4 top-2 text-sm text-white/60 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-400">
                Project details, goals, and requirements
              </label>
            </div>

            <label className="flex items-center gap-2 text-white/80">
              <input type="checkbox" className="accent-blue-600" />
              <span className="text-sm">
                Subscribe to my newsletter for development tips and updates
              </span>
            </label>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-semibold py-3 rounded-xl hover:brightness-110 hover:scale-[1.01] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

// Tailwind component class 'input'
// Add this to your global styles if you want reusable styling:
// .input {
//   @apply border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500;
// }
