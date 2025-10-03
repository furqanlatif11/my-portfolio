"use client";

import React, { useState } from "react";
import {
  Clipboard,
  Clock4,
  Github,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [copiedField, setCopiedField] = useState("");

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(""), 1500);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Me",
      subtitle: "Get a response within 24 hours",
      value: "furqanlatif615@gmail.com",
      href: "mailto:furqanlatif615@gmail.com",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20 hover:border-blue-500/50",
      copyField: "email",
    },
    {
      icon: Phone,
      title: "Call or Text",
      subtitle: "Available Mon-Fri, 9 AM - 6 PM PKT",
      value: "+92 320 8480314",
      href: "tel:+923208480314",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20 hover:border-green-500/50",
      copyField: "phone",
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      subtitle: "Quick replies and project discussions",
      value: "Chat on WhatsApp",
      href: "https://wa.me/923208480314",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20 hover:border-emerald-500/50",
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      subtitle: "Let's connect professionally",
      value: "View Profile",
      href: "https://www.linkedin.com/in/furqan-latif-profile/",
      color: "from-blue-600 to-blue-400",
      bgColor: "bg-blue-600/10",
      borderColor: "border-blue-600/20 hover:border-blue-600/50",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 md:px-16 text-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-4">
            <Sparkles className="w-4 h-4 text-green-400" />
            <span className="text-sm text-green-400 font-medium">Let's Connect</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Choose your preferred way to reach out and let's turn your ideas into reality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={index}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : "_self"}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : ""}
                className={`group relative p-8 rounded-2xl border ${method.borderColor} ${method.bgColor} backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer`}
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                <div className="relative">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${method.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{method.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{method.subtitle}</p>

                  <div className="flex items-center justify-between">
                    <p className={`font-medium bg-gradient-to-r ${method.color} bg-clip-text text-transparent`}>
                      {method.value}
                    </p>
                    
                    {method.copyField && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleCopy(method.value, method.copyField);
                        }}
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        {copiedField === method.copyField ? (
                          <span className="text-green-400 text-xs font-medium">Copied!</span>
                        ) : (
                          <Clipboard className="w-4 h-4 text-gray-400" />
                        )}
                      </button>
                    )}
                  </div>
                </div>

                <ArrowUpRight className="absolute top-6 right-6 w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </a>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-purple-500/20">
                <MapPin className="w-5 h-5 text-purple-400" />
              </div>
              <h4 className="font-semibold">Location</h4>
            </div>
            <p className="text-gray-400">Lahore, Pakistan</p>
          </div>

          <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-orange-500/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-orange-500/20">
                <Clock4 className="w-5 h-5 text-orange-400" />
              </div>
              <h4 className="font-semibold">Response Time</h4>
            </div>
            <p className="text-gray-400">Within 24 hours</p>
          </div>

          <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/20 backdrop-blur-sm hover:border-green-500/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-2">
              <div className="relative">
                <span className="absolute top-[6px] inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </div>
              <h4 className="font-semibold text-green-400">Availability</h4>
            </div>
            <p className="text-green-300">Open for projects</p>
          </div>
        </div>

        <div className="text-center mb-16">
          <h3 className="text-xl font-semibold mb-6">Connect on Social Media</h3>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/furqan-latif-profile/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin className="w-8 h-8 text-white group-hover:text-blue-400 transition-colors" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </a>
            <a
              href="https://github.com/furqanlatif11"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-xl bg-white/5 border border-white/10 hover:border-gray-400/50 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-8 h-8 text-white group-hover:text-gray-300 transition-colors" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gray-500 to-gray-700 opacity-0 group-hover:opacity-10 transition-opacity"></div>
            </a>
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 text-center backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-2">Ready to Start Your Project?</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            I'm currently accepting new freelance and contract opportunities. Let's discuss how I can help bring your vision to life.
          </p>
          <a
            href="mailto:furqanlatif615@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold hover:brightness-110 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-500/50"
          >
            <Mail className="w-5 h-5" />
            <span>Send an Email</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}