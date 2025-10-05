"use client";
import { CheckCircle2, TrendingUp, Globe2, Code2, Zap } from "lucide-react";
import React from "react";
import Button from "./button";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-black relative overflow-hidden" id="about">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Building MVPs That Scale
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            I&apos;m a full-stack developer based in Lahore, Pakistan, specializing in 
            production-ready web applications for startups and growing businesses worldwide.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-300 leading-relaxed mb-6">
              Over the past <span className="text-green-500 font-semibold">3 years</span>, I&apos;ve 
              delivered full-stack applications for companies in the <span className="text-green-500 font-semibold">UAE, 
              US, and UK</span>—from early-stage MVPs to platforms serving thousands of users.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              My approach: <span className="text-white font-semibold">build it right from day one</span>. 
              Fast enough to launch in 6-10 weeks, architected to handle 50K+ users without expensive rewrites. 
              I&apos;ve seen too many startups hit growth and have to rebuild everything—my clients avoid that trap.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Currently, I lead frontend development at <span className="text-white font-semibold">ADYZER</span> 
              (enterprise applications) while maintaining a selective freelance practice for startups who need 
              senior-level execution without enterprise overhead.
            </p>
          </div>
        </motion.div>

        {/* What I Bring - Three Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">What Sets Me Apart</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1: Speed */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                <Zap className="w-8 h-8 text-green-500" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">Fast Execution</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                MVPs delivered in 6-10 weeks. No endless revisions, no scope creep. 
                Clear milestones, consistent progress.
              </p>
            </div>

            {/* Pillar 2: Scale */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-blue-500" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">Built to Scale</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Clean architecture from day one. My clients don&apos;t rewrite when they grow—
                the foundation handles it.
              </p>
            </div>

            {/* Pillar 3: SEO */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                <Globe2 className="w-8 h-8 text-purple-500" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">SEO-Ready</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Technical SEO, Core Web Vitals, and performance optimization built in. 
                Not an afterthought.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack - Focused */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5 border border-white/10">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Development Stack */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Code2 className="w-5 h-5 text-green-500" />
                  <h4 className="text-lg font-semibold text-white">Core Stack</h4>
                </div>
                <div className="space-y-2">
                  {[
                    "React & Next.js",
                    "TypeScript",
                    "Node.js & Go",
                    "PostgreSQL / MongoDB",
                    "Tailwind CSS",
                    "REST & GraphQL APIs"
                  ].map((tech) => (
                    <div key={tech} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SEO/Performance */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-blue-500" />
                  <h4 className="text-lg font-semibold text-white">SEO & Performance</h4>
                </div>
                <div className="space-y-2">
                  {[
                    "Google Search Console",
                    "GTM & GA4",
                    "Ahrefs",
                    "Core Web Vitals",
                    "Lighthouse Optimization",
                    "Technical SEO Audits"
                  ].map((tool) => (
                    <div key={tool} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-500" />
                      <span className="text-sm">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats - Integrated */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "3+", label: "Years", sublabel: "Building MVPs" },
              { value: "10+", label: "Projects", sublabel: "Delivered" },
              { value: "8K+", label: "Users", sublabel: "In Production" },
              { value: "5+", label: "Countries", sublabel: "Worldwide" }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-white/5 border border-white/10"
              >
                <p className="text-3xl font-bold text-green-500 mb-1">{stat.value}</p>
                <p className="text-white text-sm font-medium">{stat.label}</p>
                <p className="text-gray-500 text-xs">{stat.sublabel}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Working With Me */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/20">
            <h3 className="text-xl font-bold text-white mb-4">Working Internationally</h3>
            <div className="grid sm:grid-cols-2 gap-6 text-gray-300">
              <div>
                <p className="font-semibold text-white mb-2">Communication</p>
                <p className="text-sm">
                  IELTS 7 Band English proficiency. Clear written and verbal communication. 
                  Daily updates via Slack/email.
                </p>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">Timezone Flexibility</p>
                <p className="text-sm">
                  Based in Pakistan (UTC+5) with flexible hours. Comfortable overlapping 
                  with US/UK working hours.
                </p>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">Remote Experience</p>
                <p className="text-sm">
                  3 years working remotely with international teams. Async communication, 
                  clear documentation, reliable delivery.
                </p>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">Payment & Contracts</p>
                <p className="text-sm">
                  International payment via Wise/PayPal. Clear contracts, milestone-based 
                  payment structure.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/assets/images/M_Furqan_CV.pdf"
              download
              className="px-8 py-4 bg-green-500 text-black font-semibold rounded-xl hover:bg-green-400 transition"
            >
              Download Resume
            </a>
            <Button
              label="Connect on LinkedIn"
              href="https://www.linkedin.com/in/furqan-latif-profile/"
              variant="outlined"
              target="_blank"
              showHoverIcon={true}
            />
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default About;