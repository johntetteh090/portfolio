"use client";

import { motion } from "framer-motion";
import { IconCode, IconDeviceMobile, IconRocket, IconUsers, IconBriefcase, IconDownload, IconMail, IconPhone, IconMapPin } from "@tabler/icons-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AboutPage() {
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

  const skills = [
    "Next.js",
    "Flutter",
    "React Native",
    "DevOps (CI/CD)",
    "React.js",
    "Node.js",
    "Express.js",
    "MySQL",
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-[#f8f7f2] overflow-hidden">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6 text-[#296d6e]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                About Me
              </motion.h1>
              <motion.div 
                className="w-32 h-1 bg-[#296d6e] mx-auto rounded-full mb-8"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              
              {/* Description */}
              <motion.div 
                className="space-y-6 mb-12"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.p 
                  className="text-xl text-[#081b21]/70 leading-relaxed"
                  variants={itemVariants}
                >
                  I&apos;m a passionate software engineer with <motion.span 
                    className="font-semibold text-[#296d6e]"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >5+ years of experience</motion.span> building web apps, mobile applications, and scalable platforms. I love working with <motion.span 
                    className="font-semibold text-[#296d6e]"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >Next.js, React.js, React Native, Flutter, Node.js, Express.js, and MySQL</motion.span> to create beautiful, functional experiences. I also specialize in <motion.span 
                    className="font-semibold text-[#296d6e]"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >DevOps and CI/CD practices</motion.span> for automated deployments.
                </motion.p>
                
                <motion.p 
                  className="text-xl text-[#081b21]/70 leading-relaxed italic"
                  variants={itemVariants}
                >
                  When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open source, or sharing knowledge with the developer community.
                </motion.p>
              </motion.div>

              {/* CV Download */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.a
                  href="/cv.pdf"
                  download
                  className="inline-flex items-center gap-3 bg-[#296d6e] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-200 group"
                  whileHover={{ 
                    y: -5, 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(41, 109, 110, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <IconDownload className="w-5 h-5" />
                  </motion.div>
                  Download CV
                  <motion.svg 
                    className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-200" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Skills & Expertise */}
        <section className="py-20 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4 text-[#296d6e]">
                Skills & Expertise
              </h2>
              <motion.div 
                className="w-24 h-1 bg-[#296d6e] mx-auto rounded-full mb-6"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </motion.div>

            {/* Features Grid */}
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="w-20 h-20 bg-[#296d6e] rounded-2xl flex items-center justify-center mx-auto mb-6 text-white"
                    whileHover={{ 
                      rotate: 360, 
                      scale: 1.1,
                      boxShadow: "0 10px 30px rgba(41, 109, 110, 0.4)"
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-bold text-[#081b21] mb-4"
                    whileHover={{ color: "#296d6e" }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.title}
                  </motion.h3>
                  <p className="text-[#081b21]/70 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Tech Stack */}
            <motion.div 
              className="text-center"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-8 text-[#296d6e]">
                Tech Stack
              </h3>
              <motion.div 
                className="flex flex-wrap justify-center gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {skills.map((skill, index) => (
                  <motion.span 
                    key={skill} 
                    className="bg-[#f8f7f2] text-[#296d6e] px-6 py-3 rounded-full font-medium border border-[#296d6e]/20 hover:bg-[#296d6e] hover:text-white transition-all duration-200 cursor-pointer"
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5,
                      boxShadow: "0 10px 25px rgba(41, 109, 110, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="py-20 bg-[#f8f7f2] overflow-hidden">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4 text-[#296d6e]">
                Professional Experience
              </h2>
              <motion.div 
                className="w-24 h-1 bg-[#296d6e] mx-auto rounded-full mb-6"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
              <p className="text-lg text-[#081b21]/70 max-w-2xl mx-auto">
                My journey through various roles has shaped me into a versatile developer with expertise across the full technology stack.
              </p>
            </motion.div>

            <motion.div 
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {experience.map((exp, i) => (
                <motion.div 
                  key={i} 
                  className="relative pl-12 border-l-2 border-[#296d6e]/30"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="absolute left-[-9px] top-2 w-4 h-4 bg-[#296d6e] rounded-full"
                    whileHover={{ scale: 1.5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                  <div className="space-y-2">
                    <motion.h4 
                      className="font-bold text-2xl text-[#081b21]"
                      whileHover={{ color: "#296d6e" }}
                      transition={{ duration: 0.3 }}
                    >
                      {exp.role}
                    </motion.h4>
                    <p className="text-[#296d6e] font-semibold text-xl">
                      {exp.company}
                    </p>
                    <p className="text-lg text-[#081b21]/50 font-medium">
                      {exp.years}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact & Stats */}
        <section className="py-20 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              className="grid lg:grid-cols-2 gap-20"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Contact Info */}
              <motion.div 
                variants={itemVariants}
              >
                <h3 className="text-3xl font-bold mb-12 text-[#296d6e]">
                  Get In Touch
                </h3>
                <div className="space-y-8">
                  {[
                    { icon: <IconPhone className="w-8 h-8 text-white" />, label: "Phone", value: "+233 558520500" },
                    { icon: <IconMail className="w-8 h-8 text-white" />, label: "Email", value: "johntetteh090@gmail.com" },
                    { icon: <IconMapPin className="w-8 h-8 text-white" />, label: "Location", value: "Accra, Ghana" }
                  ].map((contact, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center gap-6"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div 
                        className="w-16 h-16 bg-[#296d6e] rounded-full flex items-center justify-center"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 360,
                          boxShadow: "0 10px 30px rgba(41, 109, 110, 0.4)"
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        {contact.icon}
                      </motion.div>
                      <div>
                        <p className="font-semibold text-xl text-[#081b21]">{contact.label}</p>
                        <p className="text-lg text-[#081b21]/70">{contact.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Stats */}
              <motion.div 
                variants={itemVariants}
              >
                <h3 className="text-3xl font-bold mb-12 text-[#296d6e]">
                  My Impact in Numbers
                </h3>
                <motion.div 
                  className="grid grid-cols-2 gap-12"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {[
                    { number: "50+", label: "Projects Completed" },
                    { number: "5+", label: "Years Experience" },
                    { number: "100%", label: "Client Satisfaction" },
                    { number: "24/7", label: "Support Available" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="text-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div 
                        className="text-5xl font-bold text-[#296d6e] mb-3"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 200, 
                          delay: index * 0.1 
                        }}
                      >
                        {stat.number}
                      </motion.div>
                      <div className="text-lg text-[#081b21]/70 font-medium">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 