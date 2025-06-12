"use client";

import { useState, useEffect } from "react";
import { projects } from "../data/projects";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import Link from "next/link";
import { Check, Github, Globe, Plus } from "lucide-react";

// Add missing Project type definition
type Project = (typeof projects)[number];

const tabs = ["All Projects", "Frontend", "Full-Stack", "Freelance"] as const;


const items = [
  { Icon: Plus, label: "Add Project", color: "white", bg: "bg-blue-600" },
  { Icon: Github, label: "GitHub", color: "black", bg: "bg-gray-300" },
  { Icon: Globe, label: "Live Demo", color: "white", bg: "bg-green-600" },
  { Icon: Check, label: "Verified", color: "white", bg: "bg-red-600" },
];

export default function Projects() {
  const [selectedTab, setSelectedTab] =
    useState<(typeof tabs)[number]>("All Projects");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const [iconVisible, setIconVisible] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setIconVisible(false); // fade out current

      setTimeout(() => {
        setCurrentIconIndex((prev) => (prev + 1) % items.length); // next icon
        setIconVisible(true); // fade in next
      }, 500); // transition duration matches CSS below
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const filteredProjects =
    selectedTab === "All Projects"
      ? projects
      : projects.filter((p) => p.category.includes(selectedTab));
  const CurrentIcon = items[currentIconIndex].Icon;
  return (
    <section className="py-12 px-4 customWidth">
      <h2 className="sectionHeading font-bold text-center mb-6">Projects</h2>
      <p className="text-center text-gray-500 mb-8">
        Featured work showcasing full-stack development expertise
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-4 py-2 rounded-full text-base font-medium transition ${
              selectedTab === tab
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <>
            <div
              key={project.id}
              className="group rounded-lg overflow-hidden shadow hover:shadow-lg bg-white dark:bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-xl text-left"
            >
              {/* Image container with overlay */}
              <div className="relative">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div
                  className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300"
                  onClick={() => setSelectedProject(project)}
                >
                  <button className="bg-white text-blue-600 font-semibold px-4 py-2 rounded">
                    View Details
                  </button>
                </div>
              </div>

              {/* Project details */}
              <div className="p-4">
                <h3 className="text-lg text-white font-semibold">
                  {project.title}
                </h3>
                <p className="text-base text-gray-400 mt-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Live Demo button */}
                <div className="flex gap-4 items-center mt-6">
                  <div>
                    <Link
                      href={project.details.liveDemoUrl}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-block text-white rounded font-medium"
                    >
                      <Globe />
                    </Link>
                  </div>
                  <div>
                    <Link
                      href={project.details.githubUrl}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-block text-white rounded font-medium"
                    >
                      <Github />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
        <div
          onClick={() => setShowModal(true)}
          className="border border-dashed border-gray-300 rounded-lg flex flex-col gap-6 items-center justify-center text-gray-500 h-full hover:cursor-pointer p-6 select-none"
        >
          <div
            className={`
      flex flex-col items-center space-y-2
      transform transition-all duration-500 ease-in-out
      ${iconVisible ? "opacity-100 scale-110" : "opacity-0 scale-75"}
      cursor-pointer
    `}
            style={{ color: items[currentIconIndex].color }}
          >
            <div
              className={`${items[currentIconIndex].bg} rounded-full p-3 shadow-lg`}
            >
              <CurrentIcon size={30} />
            </div>
            <span className="text-white text-sm font-medium">
              {items[currentIconIndex].label}
            </span>
          </div>

          <p className="text-center text-white text-xl mt-6">
            Let's Showcase Your Project Here
          </p>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <Dialog
          open={true}
          onClose={() => setSelectedProject(null)}
          className="relative z-50"
        >
          <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen p-6">
              <Dialog.Panel className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6">
                <Dialog.Title className="text-2xl font-bold mb-2 text-black">
                  {selectedProject.title}
                </Dialog.Title>
                <hr />
                <div className="mb-4 mt-4 text-[#222222]">
                  <h2 className="text-xl font-bold mb-2 ">Description</h2>
                  <p className="">{selectedProject.description}</p>
                </div>

                <h4 className=" text-xl font-semibold my-4 text-[#222222]">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2 mb-3">
                  {selectedProject.details.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="text-sm text-blue-600 bg-blue-100 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h4 className="text-xl font-semibold my-4 text-[#222222]">
                  Key Features
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 list-disc pl-5 mb-3 text-sm text-gray-700">
                  {selectedProject.details.features.map((f: string) => (
                    <li key={f} className="flex gap-2">
                      <Check width={20} className="text-green-600" />
                      {f}
                    </li>
                  ))}
                </ul>

                <h4 className="text-xl font-semibold my-4 text-[#222222]">
                  Challenges & Solutions
                </h4>
                <p className="text-sm mb-3 text-[#222222]">
                  {selectedProject.details.challenges}
                </p>

                <h4 className="text-xl font-semibold my-4 text-[#222222]">
                  Outcome
                </h4>
                <p className="text-sm mb-4 text-[#222222]">
                  {selectedProject.details.outcome}
                </p>

                <div className="flex gap-4">
                  <a
                    href={selectedProject.details.liveDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                  >
                    View Live Demo
                  </a>
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      )}

      {showModal && (
        <Dialog
          open={true}
          onClose={() => setShowModal(false)}
          className="relative z-50"
        >
          <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen p-6">
              <Dialog.Panel className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
                <Dialog.Title className="text-2xl font-bold mb-4 text-black">
                  Submit Your Project
                </Dialog.Title>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const name = formData.get("name");
                    const email = formData.get("email");
                    const message = formData.get("message");
                    console.log({ name, email, message });
                    // TODO: Send this data to an API endpoint or email service
                    alert("Your project idea has been submitted!");
                    setShowModal(false);
                  }}
                >
                  <div className="mb-4">
                    <label className="block mb-1 font-medium text-sm">
                      Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      className="w-full border px-3 py-2 rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1 font-medium text-sm">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full border px-3 py-2 rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1 font-medium text-sm">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      className="w-full border px-3 py-2 rounded h-24"
                    />
                  </div>
                  <div className="flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="bg-gray-200 text-gray-800 px-4 py-2 rounded"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-4 py-2 rounded"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      )}
    </section>
  );
}
