"use client";

import { useState, useEffect } from "react";
import { projects } from "../data/projects";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import Link from "next/link";
import { Check,Github, Globe, } from "lucide-react";
import Button from "./button";
import { motion } from "framer-motion";

type Project = (typeof projects)[number];

const tabs = ["All Projects", "Frontend", "Full-Stack", "Freelance"] as const;

export default function Projects() {
  const [selectedTab, setSelectedTab] =
    useState<(typeof tabs)[number]>("All Projects");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  const filteredProjects =
    selectedTab === "All Projects"
      ? projects.filter((p) => p.id !== 2) // Exclude Skill Nexus from grid
      : projects.filter((p) => p.category.includes(selectedTab) && p.id !== 2);

  // Get Skill Nexus project for featured section
  const featuredProject = projects.find((p) => p.id === 2);

  return (
    <section className="py-20 px-4 bg-[#0a0a0a]" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured Work</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real projects, real results. From concept to production.
          </p>
        </motion.div>

        {/* FEATURED PROJECT: Skill Nexus */}
        {/* FEATURED PROJECT: Full-Width Hero Style */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 -mx-4 sm:mx-0"
          >
            {/* Large image background with overlay */}
            <div className="relative rounded-none sm:rounded-2xl overflow-hidden">
              {/* Background Image with Parallax Effect */}
              <div className="absolute inset-0">
                <Image
                  src={featuredProject.imageUrl}
                  alt={featuredProject.title}
                  fill
                  className="object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/80" />
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 py-16 sm:py-20 px-6 lg:px-12">
                <div className="max-w-4xl">
                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 mb-6"
                  >
                    <div className="h-px w-12 bg-green-500" />
                    <span className="text-green-500 text-sm font-bold uppercase tracking-wider">
                      Featured Case Study
                    </span>
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
                  >
                    {featuredProject.title}
                  </motion.h3>

                  {/* Tagline */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl text-gray-300 mb-6"
                  >
                    {featuredProject.tagline}
                  </motion.p>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-400 text-lg mb-8 max-w-2xl leading-relaxed"
                  >
                    {featuredProject.description}
                  </motion.p>

                  {/* Metrics - Horizontal Line */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap gap-8 mb-8 pb-8 border-b border-white/10"
                  >
                    <div>
                      <p className="text-3xl font-bold text-green-500 mb-1">
                        {featuredProject.metrics.timeline}
                      </p>
                      <p className="text-sm text-gray-400">
                        {featuredProject.metrics.timelineDetail}
                      </p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-green-500 mb-1">
                        {featuredProject.metrics.users}
                      </p>
                      <p className="text-sm text-gray-400">
                        {featuredProject.metrics.usersDetail}
                      </p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-green-500 mb-1">
                        {featuredProject.metrics.performance}
                      </p>
                      <p className="text-sm text-gray-400">
                        {featuredProject.metrics.performanceDetail}
                      </p>
                    </div>
                    {featuredProject.metrics.lighthouse && (
                      <div>
                        <p className="text-3xl font-bold text-green-500 mb-1">
                          {featuredProject.metrics.lighthouse}/100
                        </p>
                        <p className="text-sm text-gray-400">
                          Lighthouse Score
                        </p>
                      </div>
                    )}
                  </motion.div>

                  {/* Impact Statement */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="mb-8 p-6 rounded-xl bg-green-500/10 border border-green-500/30"
                  >
                    <p className="text-sm text-green-400 font-semibold mb-2 uppercase tracking-wider">
                      Impact
                    </p>
                    <p className="text-white text-lg font-medium">
                      {featuredProject.impact.primary}
                    </p>
                  </motion.div>

                  {/* Tech Stack Pills */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-wrap gap-2 mb-8"
                  >
                    {featuredProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-gray-300 text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>

                  {/* CTAs */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="flex flex-wrap gap-4"
                  >
                    <button
                      onClick={() => setSelectedProject(featuredProject)}
                      className="px-8 py-4 bg-green-500 text-black font-semibold rounded-xl hover:bg-green-400 transition-all hover:scale-105 inline-flex items-center gap-2"
                    >
                      Read Full Case Study
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </button>
                    {featuredProject.details.liveDemoUrl !== "#" && (
                      <Link
                        href={featuredProject.details.liveDemoUrl}
                        target="_blank"
                        className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all inline-flex items-center gap-2"
                      >
                        <Globe className="w-5 h-5" />
                        Visit Live Site
                      </Link>
                    )}
                  </motion.div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl -z-10" />
              <div className="absolute top-0 left-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10" />
            </div>
          </motion.div>
        )}

        {/* OTHER PROJECTS */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            More Projects
          </h3>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  selectedTab === tab
                    ? "bg-green-500 text-black"
                    : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden bg-[#1a1a1a] border border-white/10 hover:border-green-500/50 transition-all duration-500"
              >
                {/* Image with gradient overlay */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Always-visible gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/50 to-transparent" />

                  {/* Hover overlay with CTA */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-6 py-3 bg-green-500 text-black font-semibold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      View Case Study
                    </button>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-green-500/90 backdrop-blur-sm text-black text-xs font-bold rounded-full">
                      {project.category[0]}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs px-3 py-1 text-gray-500">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Footer with links */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex gap-3">
                      {project.details.liveDemoUrl !== "#" && (
                        <Link
                          href={project.details.liveDemoUrl}
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                          className="text-gray-400 hover:text-green-500 transition"
                        >
                          <Globe className="w-5 h-5" />
                        </Link>
                      )}
                      {project.details.githubUrl !== "#" && (
                        <Link
                          href={project.details.githubUrl}
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                          className="text-gray-400 hover:text-green-500 transition"
                        >
                          <Github className="w-5 h-5" />
                        </Link>
                      )}
                    </div>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-green-500 text-sm font-medium hover:underline"
                    >
                      Details →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center p-12 rounded-2xl border border-green-500/20 bg-gradient-to-br from-green-500/5 to-transparent"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Let&apos;s discuss how I can help bring your idea to life in your defined
            timeline.
          </p>
          <Button
            label="Book Free Consultation"
            scrollToId="contact"
            variant="solid"
          />
        </motion.div>
      </div>

      {/* PROJECT DETAIL MODAL */}
      {selectedProject && (
        <Dialog
          open={true}
          onClose={() => setSelectedProject(null)}
          className="relative z-50"
        >
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen p-4">
              <Dialog.Panel className="bg-[#1a1a1a] border border-green-500/20 rounded-2xl shadow-2xl max-w-4xl w-full p-8 max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-start mb-6">
                  <Dialog.Title className="text-3xl font-bold text-white">
                    {selectedProject.title}
                  </Dialog.Title>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white transition"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Image */}
                <div className="mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    width={800}
                    height={400}
                    className="w-full"
                  />
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-green-500 mb-3">
                    Overview
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>
                {/* Add after description, before technologies */}
                <div className="mb-6 p-6 rounded-lg bg-green-500/5 border border-green-500/20">
                  <h3 className="text-xl font-semibold text-green-500 mb-3">
                    Business Impact
                  </h3>
                  <p className="text-white font-semibold mb-3">
                    {selectedProject.impact.primary}
                  </p>
                  <ul className="space-y-2">
                    {selectedProject.impact.secondary.map((item, index) => (
                      <li
                        key={index}
                        className="text-gray-300 text-sm flex items-start gap-2"
                      >
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-green-500 mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.details.technologies.map(
                      (tech: string) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-green-500 mb-3">
                    Key Features
                  </h3>
                  <div className="space-y-3">
                    {selectedProject.details.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex gap-3 p-3 rounded-lg bg-green-500/5 border border-green-500/10"
                      >
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-white font-semibold text-sm mb-1">
                            {feature.name}
                          </p>
                          <p className="text-gray-400 text-xs">
                            {feature.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Challenges */}
                <h4 className="text-xl font-semibold my-4 text-green-500">
                  Challenges & Solutions
                </h4>
                <div className="space-y-4">
                  {selectedProject.details.challenges.map(
                    (challenge, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-lg bg-[#0a0a0a] border border-white/10"
                      >
                        <div className="mb-2">
                          <span className="text-xs font-semibold text-red-400 uppercase">
                            Problem
                          </span>
                          <p className="text-gray-300 text-sm mt-1">
                            {challenge.problem}
                          </p>
                        </div>
                        <div className="mb-2">
                          <span className="text-xs font-semibold text-blue-400 uppercase">
                            Solution
                          </span>
                          <p className="text-gray-300 text-sm mt-1">
                            {challenge.solution}
                          </p>
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-green-400 uppercase">
                            Result
                          </span>
                          <p className="text-gray-300 text-sm mt-1">
                            {challenge.result}
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </div>

                {/* Outcome */}
                <h4 className="text-xl font-semibold my-4 text-green-500">
                  Outcome
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-xs text-gray-400 mb-1">Delivery</p>
                    <p className="text-white text-sm">
                      {selectedProject.details.outcome.delivery}
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-xs text-gray-400 mb-1">Adoption</p>
                    <p className="text-white text-sm">
                      {selectedProject.details.outcome.adoption}
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-xs text-gray-400 mb-1">Performance</p>
                    <p className="text-white text-sm">
                      {selectedProject.details.outcome.performance}
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-xs text-gray-400 mb-1">
                      Business Impact
                    </p>
                    <p className="text-white text-sm">
                      {selectedProject.details.outcome.business}
                    </p>
                  </div>
                  <div className="sm:col-span-2 p-3 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-xs text-gray-400 mb-1">Technical</p>
                    <p className="text-white text-sm">
                      {selectedProject.details.outcome.technical}
                    </p>
                  </div>
                </div>

                {/* Add this new section */}
                {selectedProject.details.seo && (
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-3 text-green-500">
                      Performance & SEO Metrics
                    </h4>
                    <div className="grid grid-cols-4 gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-center">
                        <p className="text-2xl font-bold text-green-500">
                          {selectedProject.details.seo.lighthouse.performance}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          Performance
                        </p>
                      </div>
                      <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-center">
                        <p className="text-2xl font-bold text-green-500">
                          {selectedProject.details.seo.lighthouse.accessibility}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          Accessibility
                        </p>
                      </div>
                      <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-center">
                        <p className="text-2xl font-bold text-green-500">
                          {selectedProject.details.seo.lighthouse.bestPractices}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          Best Practices
                        </p>
                      </div>
                      <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-center">
                        <p className="text-2xl font-bold text-green-500">
                          {selectedProject.details.seo.lighthouse.seo}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">SEO</p>
                      </div>
                    </div>
                    {selectedProject.details.seo.results && (
                      <p className="text-gray-300 text-sm">
                        <span className="text-green-400 font-semibold">
                          SEO Results:{" "}
                        </span>
                        {selectedProject.details.seo.results}
                      </p>
                    )}
                  </div>
                )}

                {/* CTAs */}
                <div className="flex gap-4 pt-6 border-t border-white/10">
                  {selectedProject.details.liveDemoUrl !== "#" && (
                    <Link
                      href={selectedProject.details.liveDemoUrl}
                      target="_blank"
                      className="flex-1 px-6 py-3 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition text-center"
                    >
                      View Live Demo
                    </Link>
                  )}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition"
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      )}
    </section>
  );
}
