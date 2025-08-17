"use client";

import { motion } from "framer-motion";
import { IconCode, IconDeviceMobile, IconRocket, IconUsers, IconBriefcase, IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

export default function AboutUs() {
  const features = [
    {
      icon: <IconCode className="w-8 h-8" />,
      title: "Fullstack Development",
      description: "Building complete web applications with modern technologies"
    },
    {
      icon: <IconDeviceMobile className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Creating cross-platform mobile apps with React Native & Flutter"
    },
    {
      icon: <IconRocket className="w-8 h-8" />,
      title: "DevOps & CI/CD",
      description: "Automating deployments and maintaining scalable infrastructure"
    },
    {
      icon: <IconUsers className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Working effectively in agile teams and open source projects"
    }
  ];

  const experience = [
    { role: "Fullstack Developer", company: "Bench5", years: "2023–2025" },
    { role: "Frontend Dev and DevOps Engineer", company: "Ntetsia", years: "2024–2025" },
    { role: "Administrative Assistant and IT Support", company: "Cocobod", years: "2021–2022" },
    { role: "Fullstack Developer", company: "Freelance", years: "2020–2021" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#f8f7f2] via-white to-[#f0f9ff] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#296d6e]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#1e4d4e]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-[#296d6e]/3 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-[#296d6e]/10 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-3 h-3 bg-[#296d6e] rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-[#296d6e]">About Me</span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#296d6e] to-[#1e4d4e] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Crafting Digital
            <br />
            <span className="text-[#081b21]">Experiences</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-[#081b21]/70 max-w-4xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I&apos;m a passionate software engineer with <span className="font-semibold text-[#296d6e]">3+ years of experience</span> building web apps, mobile applications, and scalable platforms. I love working with <span className="font-semibold text-[#296d6e]">Next.js, React.js, React Native, Flutter, Node.js, Express.js, and MySQL</span> to create beautiful, functional experiences.
          </motion.p>

          {/* Stats Row */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {[
              { number: "22+", label: "Projects Completed" },
              { number: "3+", label: "Years Experience" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-[#296d6e] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-[#081b21]/60 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.h3 
              className="text-3xl md:text-4xl font-bold text-[#296d6e] mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              What I Specialize In
            </motion.h3>
            <motion.p 
              className="text-lg text-[#081b21]/70 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Comprehensive digital solutions that drive business growth and user engagement
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white transition-all duration-500 shadow-lg border border-[#296d6e]/10 hover:shadow-2xl hover:border-[#296d6e]/20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-[#296d6e] to-[#1e4d4e] rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-xl transition-all duration-500"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {feature.icon}
                </motion.div>
                <h4 className="text-xl font-bold text-[#081b21] mb-4 group-hover:text-[#296d6e] transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-[#081b21]/70 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.div 
              className="w-16 h-16 bg-gradient-to-br from-[#296d6e] to-[#1e4d4e] rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <IconBriefcase className="w-8 h-8" />
            </motion.div>
            <h3 className="text-3xl md:text-4xl font-bold text-[#296d6e] mb-6">
              Professional Journey
            </h3>
            <p className="text-lg text-[#081b21]/70 max-w-2xl mx-auto">
              My path through various roles has shaped me into a versatile developer with expertise across the full technology stack.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-[#296d6e]/30 to-transparent"></div>
            
            <div className="space-y-12">
              {experience.map((exp, i) => (
                <motion.div 
                  key={i} 
                  className={`relative flex items-center ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#296d6e] rounded-full shadow-lg z-10"></div>
                  
                  {/* Content Card */}
                  <div className={`w-5/12 ${i % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#296d6e]/10 hover:shadow-xl transition-all duration-300">
                      <h4 className="font-bold text-xl text-[#081b21] mb-2">
                        {exp.role}
                      </h4>
                      <p className="text-[#296d6e] font-semibold text-lg mb-1">
                        {exp.company}
                      </p>
                      <p className="text-sm text-[#081b21]/50 font-medium">
                        {exp.years}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="bg-gradient-to-br from-[#296d6e] to-[#1e4d4e] rounded-3xl p-12 text-white shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let&apos;s work together to bring your ideas to life. I&apos;m always excited to take on new challenges and create innovative solutions.
            </p>
            <motion.div
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-3 bg-white text-[#296d6e] px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-200 group"
              >
                <span>View My Work</span>
                <IconArrowRight stroke={2} className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 