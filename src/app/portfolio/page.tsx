"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function PortfolioPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with Next.js, React, and Node.js. Features include user authentication, product management, shopping cart, and payment integration.",
      image: "/file.svg",
      technologies: ["Next.js", "React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/yourusername/ecommerce",
      live: "https://ecommerce-demo.com",
      category: "Fullstack"
    },
    {
      title: "Mobile Task Manager",
      description: "A cross-platform mobile app for task management built with React Native. Includes offline functionality, push notifications, and cloud sync.",
      image: "/file.svg",
      technologies: ["React Native", "Firebase", "Redux", "AsyncStorage"],
      github: "https://github.com/yourusername/task-manager",
      live: "https://task-manager-app.com",
      category: "Mobile"
    },
    {
      title: "Real-time Chat App",
      description: "A real-time chat application with WebSocket integration, user authentication, and file sharing capabilities.",
      image: "/file.svg",
      technologies: ["React", "Socket.io", "Express.js", "MongoDB"],
      github: "https://github.com/yourusername/chat-app",
      live: "https://chat-app-demo.com",
      category: "Fullstack"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with Next.js and Framer Motion animations.",
      image: "/file.svg",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/yourusername/portfolio",
      live: "https://your-portfolio.com",
      category: "Frontend"
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard with real-time data, interactive charts, and location-based forecasts.",
      image: "/file.svg",
      technologies: ["React", "Chart.js", "Weather API", "Geolocation"],
      github: "https://github.com/yourusername/weather-dashboard",
      live: "https://weather-dashboard.com",
      category: "Frontend"
    },
    {
      title: "DevOps Pipeline",
      description: "Automated CI/CD pipeline with Docker, GitHub Actions, and cloud deployment for scalable applications.",
      image: "/file.svg",
      technologies: ["Docker", "GitHub Actions", "AWS", "Nginx"],
      github: "https://github.com/yourusername/devops-pipeline",
      live: "https://pipeline-demo.com",
      category: "DevOps"
    },
    {
      title: "Social Media App",
      description: "A social media platform with real-time messaging, photo sharing, and user profiles.",
      image: "/file.svg",
      technologies: ["React", "Firebase", "Cloud Storage", "WebRTC"],
      github: "https://github.com/yourusername/social-app",
      live: "https://social-app-demo.com",
      category: "Fullstack"
    },
    {
      title: "AI Chat Assistant",
      description: "An AI-powered chat assistant with natural language processing and machine learning capabilities.",
      image: "/file.svg",
      technologies: ["Python", "TensorFlow", "React", "FastAPI"],
      github: "https://github.com/yourusername/ai-chat",
      live: "https://ai-chat-demo.com",
      category: "AI/ML"
    }
  ];

  const projectWidth = 320; // Width of each project card (w-80 = 320px)
  const gap = 32; // Gap between cards (gap-8 = 32px)
  const totalWidth = projectWidth + gap;

  // Update current slide based on scroll position
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const scrollLeft = carousel.scrollLeft;
      const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
      
      // If we're at the very beginning of the scroll, set to first slide
      if (scrollLeft <= 10) { // 10px tolerance
        setCurrentSlide(0);
      }
      // If we're at the very end of the scroll, set to last slide
      else if (scrollLeft >= maxScrollLeft - 10) { // 10px tolerance
        setCurrentSlide(projects.length - 1);
      } else {
        // Otherwise calculate based on scroll position
        const newSlide = Math.round(scrollLeft / totalWidth);
        setCurrentSlide(Math.min(newSlide, projects.length - 1));
      }
    };

    carousel.addEventListener('scroll', handleScroll);
    return () => carousel.removeEventListener('scroll', handleScroll);
  }, [projects.length, totalWidth]);

  const scrollToProject = (index: number) => {
    if (carouselRef.current) {
      const scrollPosition = index * totalWidth;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setCurrentSlide(index);
    }
  };

  const nextSlide = () => {
    const nextIndex = Math.min(currentSlide + 1, projects.length - 1);
    scrollToProject(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = Math.max(currentSlide - 1, 0);
    scrollToProject(prevIndex);
  };

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-[#f8f7f2] overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
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
                My Portfolio
              </motion.h1>
              <motion.div 
                className="w-32 h-1 bg-[#296d6e] mx-auto rounded-full mb-8"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
              <motion.p 
                className="text-xl text-[#081b21]/70 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Explore a collection of my projects showcasing skills in fullstack development, mobile apps, and DevOps practices. Each project demonstrates my passion for creating innovative digital solutions.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Projects Carousel */}
        <section className="py-20 bg-white overflow-visible">
          <div className="w-full px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-4 text-[#296d6e]">
                My Latest Works
              </h2>
              <div className="w-24 h-1 bg-[#296d6e] mx-auto rounded-full mb-6"></div>
            </motion.div>

            {/* Full Width Carousel Container */}
            <div className="relative w-full">
              {/* Carousel Track */}
              <div className="relative w-full">
                <div 
                  ref={carouselRef}
                  className="flex gap-8 overflow-x-auto scrollbar-hide pb-8 w-full"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {projects.map((project, index) => (
                    <motion.div
                      key={index}
                      className="flex-shrink-0 w-80 bg-gradient-to-br from-white to-[#f0f9ff] rounded-3xl overflow-hidden shadow-xl border border-[#296d6e]/10 hover:shadow-2xl transition-all duration-300 group"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -10, scale: 1.02 }}
                    >
                      {/* Project Image */}
                      <div className="relative h-48 bg-gradient-to-br from-[#296d6e]/20 to-[#296d6e]/5 overflow-hidden">
                        <div className="w-full h-full flex items-center justify-center">
                          <svg className="w-16 h-16 text-[#296d6e]/40 group-hover:text-[#296d6e]/60 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        </div>
                        <div className="absolute top-4 right-4">
                          <span className="bg-gradient-to-r from-[#296d6e] to-[#1e4d4e] text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                            {project.category}
                          </span>
                        </div>
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#296d6e]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Project Content */}
                      <div className="p-6 bg-white">
                        <h3 className="text-xl font-bold text-[#081b21] mb-3 group-hover:text-[#296d6e] transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-[#081b21]/70 mb-4 leading-relaxed text-sm">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="bg-gradient-to-r from-[#296d6e]/10 to-[#296d6e]/5 text-[#296d6e] px-3 py-1 rounded-lg text-xs font-medium border border-[#296d6e]/20 hover:from-[#296d6e]/20 hover:to-[#296d6e]/10 transition-all duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Project Links */}
                        <div className="flex gap-3">
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-gradient-to-r from-[#296d6e] to-[#1e4d4e] text-white px-4 py-2 rounded-lg font-medium hover:from-[#1e4d4e] hover:to-[#296d6e] transition-all duration-200 text-sm shadow-md hover:shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z"/>
                            </svg>
                            Code
                          </motion.a>
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white text-[#296d6e] border-2 border-[#296d6e] px-4 py-2 rounded-lg font-medium hover:bg-[#296d6e] hover:text-white transition-all duration-200 text-sm shadow-md hover:shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Live
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Overlay Navigation Controls */}
                {currentSlide > 0 && (
                  <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
                    <motion.button
                      onClick={prevSlide}
                      className="w-12 h-12 bg-[#296d6e]/90 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-[#296d6e] transition-colors duration-200 shadow-2xl hover:shadow-3xl"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </motion.button>
                  </div>
                )}

                {currentSlide < projects.length - 1 && (
                  <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
                    <motion.button
                      onClick={nextSlide}
                      className="w-12 h-12 bg-[#296d6e]/90 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-[#296d6e] transition-colors duration-200 shadow-2xl hover:shadow-3xl"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </div>
                )}

                {/* Scroll Indicator */}
                <div className="flex justify-center mt-6">
                  <div className="flex space-x-2">
                    {projects.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => scrollToProject(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          currentSlide === index 
                            ? "bg-[#296d6e] scale-125" 
                            : "bg-[#296d6e]/30 hover:bg-[#296d6e]/50"
                        }`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-[#f8f7f2] overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-4 text-[#296d6e]">
                Project Statistics
              </h2>
              <div className="w-24 h-1 bg-[#296d6e] mx-auto rounded-full mb-6"></div>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {[
                { number: "50+", label: "Projects Completed" },
                { number: "25+", label: "Happy Clients" },
                { number: "100%", label: "Success Rate" },
                { number: "24/7", label: "Support Available" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="text-4xl md:text-5xl font-bold text-[#296d6e] mb-3"
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-[#296d6e]">
                Ready to Start a Project?
              </h2>
              <p className="text-xl text-[#081b21]/70 mb-8 max-w-2xl mx-auto">
                Let's work together to bring your ideas to life. I'm always excited to take on new challenges and create innovative solutions.
              </p>
              <motion.a
                href="mailto:johntetteh090@gmail.com"
                className="inline-flex items-center gap-3 bg-[#296d6e] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-200 group"
                whileHover={{ 
                  y: -5, 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(41, 109, 110, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Get In Touch
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 