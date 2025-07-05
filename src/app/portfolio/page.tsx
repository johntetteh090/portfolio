"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PortfolioCard from "../../components/PortfolioCard";

export default function PortfolioPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const projects = [
    {
      title: "PropEarnly",
      description: "PropEarnly is a real estate investment platform for fractional UK property ownership. Built with Next.js, Redux, Express.js, and MySQL, it features secure authentication, KYC, wallet management, and real-time portfolio tracking. CI/CD with GitHub Actions ensures robust, automated deployments.PropEarnly is a real estate investment platform for fractional UK property ownership. Built with Next.js, Redux, Express.js, and MySQL, it features secure authentication, KYC, wallet management, and real-time portfolio tracking. CI/CD with GitHub Actions ensures robust, automated deployments.",
      image: "/images/nextjs.png",
      stackImages: ["/images/nextjs.png", "/images/devOps.png", "/images/reactjs.png"],
      technologies: ["Next.js", "Redux", "Express.js", "MySQL", "CI/CD", "GitHub Actions"],
      github: "",
      live: "https://dev.propearnly.com/",
      category: "Fullstack"
    },
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with Next.js, React, and Node.js. Features include user authentication, product management, shopping cart, and payment integration.",
      image: "/images/reactjs.png",
      technologies: ["Next.js", "React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/johntetteh090/ecommerce",
      live: "https://ecommerce-demo.com",
      category: "Fullstack"
    },
    {
      title: "Mobile Task Manager",
      description: "A cross-platform mobile app for task management built with React Native. Includes offline functionality, push notifications, and cloud sync.",
      image: "/images/flutter.png",
      technologies: ["React Native", "Firebase", "Redux", "AsyncStorage"],
      github: "https://github.com/johntetteh090/task-manager",
      live: "https://task-manager-app.com",
      category: "Mobile"
    },
    {
      title: "Real-time Chat App",
      description: "A real-time chat application with WebSocket integration, user authentication, and file sharing capabilities.",
      image: "/images/firebase.png",
      technologies: ["React", "Socket.io", "Express.js", "MongoDB"],
      github: "https://github.com/johntetteh090/chat-app",
      live: "https://chat-app-demo.com",
      category: "Fullstack"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with Next.js and Framer Motion animations.",
      image: "/images/tailwindcss.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/johntetteh090/portfolio",
      live: "https://your-portfolio.com",
      category: "Frontend"
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard with real-time data, interactive charts, and location-based forecasts.",
      image: "/images/figma.png",
      technologies: ["React", "Chart.js", "Weather API", "Geolocation"],
      github: "https://github.com/johntetteh090/weather-dashboard",
      live: "https://weather-dashboard.com",
      category: "Frontend"
    },
    {
      title: "DevOps Pipeline",
      description: "Automated CI/CD pipeline with Docker, GitHub Actions, and cloud deployment for scalable applications.",
      image: "/images/devOps.png",
      technologies: ["Docker", "GitHub Actions", "AWS", "Nginx"],
      github: "https://github.com/johntetteh090/devops-pipeline",
      live: "https://pipeline-demo.com",
      category: "DevOps"
    },
    {
      title: "Social Media App",
      description: "A social media platform with real-time messaging, photo sharing, and user profiles.",
      image: "/images/firebase.png",
      technologies: ["React", "Firebase", "Cloud Storage", "WebRTC"],
      github: "https://github.com/johntetteh090/social-app",
      live: "https://social-app-demo.com",
      category: "Fullstack"
    },
    {
      title: "AI Chat Assistant",
      description: "An AI-powered chat assistant with natural language processing and machine learning capabilities.",
      image: "/images/figma.png",
      technologies: ["Python", "TensorFlow", "React", "FastAPI"],
      github: "https://github.com/johntetteh090/ai-chat",
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
                    <PortfolioCard
                      key={index}
                      title={project.title}
                      description={project.description}
                      category={project.category}
                      technologies={project.technologies}
                      github={project.github}
                      live={project.live}
                      index={index}
                    />
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
                { number: "10+", label: "Happy Clients" },
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