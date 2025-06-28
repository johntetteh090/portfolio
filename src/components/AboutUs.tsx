"use client";

import { motion } from "framer-motion";
import { IconCode, IconDeviceMobile, IconRocket, IconUsers, IconBriefcase } from "@tabler/icons-react";

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
    <section className="py-20 bg-[#f8f7f2]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#296d6e]">
            About Me
          </h2>
          <div className="w-24 h-1 bg-[#296d6e] mx-auto rounded-full mb-8"></div>
          
          {/* Styled Description */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#296d6e]/10 max-w-4xl mx-auto">
            <div className="space-y-6">
              <motion.p 
                className="text-lg text-[#081b21]/70 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                I&apos;m a passionate software engineer with <span className="font-semibold text-[#296d6e]">5+ years of experience</span> building web apps, mobile applications, and scalable platforms. I love working with <span className="font-semibold text-[#296d6e]">Next.js, React.js, React Native, Flutter, Node.js, Express.js, and MySQL</span> to create beautiful, functional experiences. I also specialize in <span className="font-semibold text-[#296d6e]">DevOps and CI/CD practices</span> for automated deployments.
              </motion.p>
              
              <motion.div 
                className="flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="w-16 h-0.5 bg-[#296d6e]/30 rounded-full"></div>
              </motion.div>
              
              <motion.p 
                className="text-lg text-[#081b21]/70 leading-relaxed italic"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open source, or sharing knowledge with the developer community.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 text-center hover:bg-[#296d6e]/5 transition-colors duration-300 shadow-lg border border-[#296d6e]/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.div 
                className="w-16 h-16 bg-[#296d6e] rounded-2xl flex items-center justify-center mx-auto mb-6 text-white"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-[#081b21] mb-4">
                {feature.title}
              </h3>
              <p className="text-[#081b21]/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Professional Experience Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <motion.div 
              className="w-16 h-16 bg-[#296d6e] rounded-2xl flex items-center justify-center mx-auto mb-6 text-white"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <IconBriefcase className="w-8 h-8" />
            </motion.div>
            <h3 className="text-3xl font-bold text-[#296d6e] mb-4">
              Professional Experience
            </h3>
            <p className="text-lg text-[#081b21]/70 max-w-2xl mx-auto">
              My journey through various roles has shaped me into a versatile developer with expertise across the full technology stack.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-[#296d6e]/10">
            <div className="space-y-6">
              {experience.map((exp, i) => (
                <motion.div 
                  key={i} 
                  className="relative pl-8 border-l-2 border-[#296d6e]/30"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <div className="absolute left-[-9px] top-2 w-4 h-4 bg-[#296d6e] rounded-full"></div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-xl text-[#081b21]">
                      {exp.role}
                    </h4>
                    <p className="text-[#296d6e] font-semibold text-lg">
                      {exp.company}
                    </p>
                    <p className="text-sm text-[#081b21]/50 font-medium">
                      {exp.years}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="mt-20 bg-white rounded-3xl p-12 text-center shadow-lg border border-[#296d6e]/10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-[#296d6e] mb-8">
            My Impact in Numbers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "5+", label: "Years Experience" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-[#296d6e] mb-2">
                  {stat.number}
                </div>
                <div className="text-[#081b21]/70 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href="/about"
            className="inline-flex items-center gap-3 bg-[#296d6e] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 group"
            whileHover={{ y: -2 }}
          >
            Learn More About Me
            <motion.svg 
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
} 