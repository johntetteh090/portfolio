"use client";

import { motion } from "framer-motion";
import { IconCode, IconDeviceMobile, IconServer, IconCloud } from "@tabler/icons-react";

export default function WhatDoIHelp() {
  const roles = [
    {
      icon: <IconCode className="w-8 h-8" />,
      title: "Web Developer",
      projects: 12,
      color: "bg-[#296d6e] border-[#296d6e] hover:bg-[#296d6e]"
    },
    {
      icon: <IconDeviceMobile className="w-8 h-8" />,
      title: "Mobile Developer",
      projects: 8,
      color: "bg-[#f0bc47] border-[#f0bc47] hover:bg-[#f0bc47]"
    },
    {
      icon: <IconServer className="w-8 h-8" />,
      title: "Backend Developer",
      projects: 15,
      color: "bg-[#f0603d] border-[#f0603d] hover:bg-[#f0603d]"
    },
    {
      icon: <IconCloud className="w-8 h-8" />,
      title: "DevOps",
      projects: 6,
      color: "bg-[#0ea5e9] border-[#0ea5e9] hover:bg-[#0ea5e9]"
    }
  ];

  return (
    <section id="services" className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-7">
          {/* Left Side: Role Containers */}
          <div className="w-full lg:w-1/2 flex justify-center md:justify-end">
            <div className="flex flex-col gap-4 w-full lg:max-w-[320px] lg:mr-24">
              {roles.map((role, index) => (
                <motion.div
                  key={role.title}
                  className="p-4 rounded-xl border border-gray-200 bg-white hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 * index, ease: "easeOut" }}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-start justify-start gap-1">
                    {/* Rounded Icon Container */}
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-full ${role.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-white font-bold">
                          {role.icon}
                        </div>
                      </div>
                    </div>
                    
                    {/* Title and Project Count */}
                    <div className="flex-col items-start justify-start text-start ml-2">
                      <h3 className="text-lg font-bold text-[#296d6e] mb-1">
                        {role.title}
                      </h3>
                      <p className="text-sm text-[#081b21]/60 font-medium">
                        {role.projects} Projects
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Header and Subtext */}
          <div className="w-full lg:w-1/2 lg:pl-1">
            <motion.div 
              className="text-left"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#296d6e] mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                What do I help
              </motion.h2>
              <motion.p 
                className="text-sm text-[#081b21]/70 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                I help design and build full-stack applications using tools like React, React Native, Next.js, Express.js, and MySQL. My work spans everything from state management, form handling, and API integration to authentication, caching, and debouncing.
              </motion.p>
              <motion.p 
                className="text-sm text-[#081b21]/60 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >
                I also work with Kafka for event-driven architectures, implement error boundaries, handle asynchronous data, and set up CI/CD pipelines for automated builds and deployments. Whether it's improving performance, managing app lifecycle, or structuring clean, maintainable code — I'm all in.
              </motion.p>
              
              {/* Stats Section */}
              <motion.div 
                className="flex gap-8 mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              >
                <div className="text-center">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#296d6e] mb-1">41+</div>
                  <div className="text-xs text-[#081b21]/60">Total Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#296d6e] mb-1">28+</div>
                  <div className="text-xs text-[#081b21]/60">Happy Clients</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 