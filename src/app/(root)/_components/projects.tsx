"use client";

import { useState } from "react";
import { projects } from "../data/projects";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import Link from "next/link";
import { Check, Github, Globe } from "lucide-react";

// Add missing Project type definition
type Project = (typeof projects)[number];

const tabs = ["All Projects", "Frontend", "Full-Stack", "Freelance"] as const;

export default function Projects() {
  const [selectedTab, setSelectedTab] =
    useState<(typeof tabs)[number]>("All Projects");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    selectedTab === "All Projects"
      ? projects
      : projects.filter((p) => p.category.includes(selectedTab));

  return (
    <section className="py-12 px-4 customWidth">
      <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
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
        ))}
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
    </section>
  );
}
