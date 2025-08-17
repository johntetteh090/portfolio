"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PortfolioCard from "../../components/PortfolioCard";
import { baseUrl } from "@/config/url-route";

export default function PortfolioPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const projects = [
    {
      title: "PropEarnly",
      description: "PropEarnly is a real estate investment platform for fractional UK property ownership. Built with Next.js, Redux, Express.js, and MySQL, it features secure authentication, KYC, wallet management, and real-time portfolio tracking. CI/CD with GitHub Actions ensures robust, automated deployments.PropEarnly is a real estate investment platform for fractional UK property ownership. Built with Next.js, Redux, Express.js, and MySQL, it features secure authentication, KYC, wallet management, and real-time portfolio tracking. CI/CD with GitHub Actions ensures robust, automated deployments.",
      image: `${baseUrl}/images/nextjs.png`,
      stackImages: [`${baseUrl}/images/nextjs.png`, `${baseUrl}/images/devOps.png`, `${baseUrl}/images/reactjs.png`],
      technologies: ["Next.js", "Redux", "Express.js", "MySQL", "CI/CD", "GitHub Actions"],
      github: "",
      live: "https://dev.propearnly.com/",
      category: "Fullstack",
      customImages: [`${baseUrl}/images/propearnly/image1.png`, `${baseUrl}/images/propearnly/image2.png`]
    },
    {
      title: "MyTrotro",
      description: "MyTrotro is a comprehensive event booking and travel ticketing app for Ghana. Built with Flutter, it features event discovery, bus ticket booking, secure payments via mobile money, digital QR tickets, real-time notifications, and location services. I used Firebase for OTP SMS to get codes for international numbers, Kafka for caching data, and Provider for state management. Implemented CI/CD pipeline using GitHub Actions with Firebase Distribution for faster app builds, automated testing, and seamless deployment to both Android and iOS platforms. The app streamlines the entire booking process from discovery to ticket validation, making event attendance and travel seamless across Ghana.",
      image: `${baseUrl}/images/reactjs.png`,
      technologies: ["Flutter", "Firebase", "Kafka", "PHP Laravel", "CI/CD"],
      github: "https://github.com/johntetteh090/mytrotro",
      live: "https://play.google.com/store/apps/details?id=com.mytrotro.app",
      category: "Mobile",
      customImages: [`${baseUrl}/images/myTrotro/image1.png`, `${baseUrl}/images/myTrotro/image2.png`]
    },
    {
      title: "MyTrotro Web Admin",
      description: "A comprehensive web administration dashboard for MyTrotro event booking and travel platform. Built with Flutter, PHP Laravel, Provider, and Firebase, it provides complete control over events, bookings, user management, analytics, and system administration. Implemented CI/CD pipeline using GitHub Actions with Firebase Distribution for faster builds, automated testing, and seamless deployment to ensure reliable admin operations. Features include real-time data monitoring, bulk operations, reporting tools, and secure admin authentication.",
      image: `${baseUrl}/images/flutter.png`,
      technologies: ["Flutter", "PHP Laravel", "Provider", "Firebase", "CI/CD"],
      github: "https://github.com/johntetteh090/mytrotro-web-admin",
      live: "https://mwadp.mytrotro.com/login",
      category: "Web Admin",
      customImages: [`${baseUrl}/images/myTrotro_web/image1.png`, `${baseUrl}/images/myTrotro_web/image2.png`]
    },
    {
      title: "Testoria",
      description: "Testoria is a comprehensive examination portal designed for students and institutions to conduct and take tests online. Built with Next.js for optimal performance and user experience, it features secure test creation, real-time exam taking, automated grading, and detailed analytics. The platform supports both individual student access and institutional management with role-based permissions. Implemented with CI/CD pipeline using GitHub Actions for automated testing and deployment, ensuring reliable and secure exam delivery. The system includes robust authentication, test scheduling, result management, and comprehensive reporting tools to streamline the entire examination process from creation to completion.",
      image: `${baseUrl}/images/nextjs.png`,
      stackImages: [`${baseUrl}/images/nextjs.png`, `${baseUrl}/images/devOps.png`, `${baseUrl}/images/reactjs.png`],
      technologies: ["Next.js", "CI/CD", "GitHub Actions", "Nuxt.js", "MySQL"],
      github: "",
      live: "https://dev.testoria.benchfive.org/",
      category: "Fullstack",
      customImages: [`${baseUrl}/images/testoria/image1.png`, `${baseUrl}/images/testoria/image2.png`, `${baseUrl}/images/testoria/image3.png`, `${baseUrl}/images/testoria/image4.png`]
    },
    {
      title: "Logistics Connect",
      description: "A comprehensive logistics and supply chain management platform connecting businesses with reliable shipping and transportation services. I effectively used Next.js with TypeScript to build a full-stack application with server-side rendering for optimal SEO, API routes for backend functionality, and type-safe components for robust logistics operations. Implemented CI/CD pipeline with automated testing, code quality checks, and seamless deployment to ensure reliable updates and maintain high code standards. The platform features real-time tracking, route optimization, cost management, and seamless integration with logistics providers, all built with type safety and modern development practices.",
      image: `${baseUrl}/images/firebase.png`,
      technologies: ["Next.js", "TypeScript", "CI/CD"],
      github: "https://github.com/johntetteh090/logistics-connect",
      live: "https://logisticsconnect.co.uk/",
      category: "Fullstack",
      customImages: [`${baseUrl}/images/logistics_connect/image1.png`, `${baseUrl}/images/logistics_connect/image2.png`, `${baseUrl}/images/logistics_connect/image3.png`]
    },
    {
      title: "VCG (Virtual Career Guidance)",
      description: "A transformative mobile application designed to empower children in less privileged countries by providing virtual career guidance and skill development opportunities. Built with Flutter and Express.js with Node.js, this platform bridges educational gaps by offering personalized learning paths, career exploration tools, and skill-building resources. We added an intelligent chatbot to provide instant guidance, answer career questions, and offer personalized recommendations. The app serves as a digital mentor, helping young minds discover their potential and build pathways to successful careers regardless of their geographical or economic circumstances.",
      image: `${baseUrl}/images/tailwindcss.png`,
      technologies: ["Flutter", "Express.js", "Node.js"],
      github: "https://github.com/johntetteh090/vcg",
      live: "https://vcg-app.com",
      category: "Mobile",
      customImages: [`${baseUrl}/images/VCG/image1.png`, `${baseUrl}/images/VCG/image2.png`, `${baseUrl}/images/VCG/image3.png`, `${baseUrl}/images/VCG/image4.png`]
    },
    {
      title: "Beroda School",
      description: "A comprehensive school management website for Beroda Prep, facilitating seamless admissions and complaint management systems. Built with modern web technologies, this platform provides an intuitive interface for parents to enroll their children, submit complaints, and access school information. The website streamlines administrative processes while maintaining the school's commitment to nurturing brilliance and building leaders through excellent educational services.",
      image: `${baseUrl}/images/figma.png`,
      technologies: ["Next.js", "Express.js", "CI/CD"],
      github: "https://github.com/johntetteh090/beroda-school",
      live: "https://berodaschool.com/",
      category: "Fullstack",
      customImages: [`${baseUrl}/images/beroda/image1.png`, `${baseUrl}/images/beroda/image2.png`, `${baseUrl}/images/beroda/image3.png`]
    },
    {
      title: "Next change User app",
      description: "Next Change User App is a modern American-based service platform that connects users with a wide range of local service providers. Whether you need home repairs, cleaning, moving, or personal care, users can easily browse, request, and manage services directly from the app. The platform features real-time provider matching, secure in-app payments, service tracking, and user reviews to ensure a seamless and trustworthy experience. Built with Flutter for a smooth cross-platform experience, NestJS for scalable backend services, and Firebase for real-time data and authentication, it emphasizes reliability, transparency, and user empowerment, making it the go-to solution for on-demand services in the US market.",
      image: `${baseUrl}/images/flutter.png`,
      technologies: ["Flutter", "NestJS", "Firebase"],
      github: "https://github.com/johntetteh090/next-change-user-app",
      live: "https://drive.google.com/file/d/1mCRAz-lnYAtv-RIYF-b4DjtOd2hAdvpi/view?usp=sharing",
      category: "Fullstack",
      customImages: [
        `${baseUrl}/images/next_change/image1.png`,
        `${baseUrl}/images/next_change/image2.png`,
        `${baseUrl}/images/next_change/image3.png`
      ]
    },
    {
      title: "Next change Provider app",
      description: "Next Change Provider App is the service provider counterpart to the Next Change platform, designed specifically for service professionals to manage their business operations efficiently. This comprehensive provider application features advanced route optimization with Google Maps integration and Directions API for intelligent service scheduling and navigation. Providers can manage service requests, optimize travel routes, track earnings, and maintain their service profiles. The app includes real-time location tracking, automated route planning, service area management, and seamless integration with the main Next Change ecosystem. Built with Flutter for cross-platform compatibility and NestJS for robust backend services, it empowers service providers to deliver exceptional customer experiences while maximizing operational efficiency through smart routing and location-based services.",
      image: `${baseUrl}/images/flutter.png`,
      technologies: ["Flutter", "NestJS", "Firebase"],
      github: "https://github.com/johntetteh090/next-change-provider-app",
      live: "https://drive.google.com/file/d/1mCRAz-lnYAtv-RIYF-b4DjtOd2hAdvpi/view?usp=1",
      category: "Fullstack",
      customImages: [
        `${baseUrl}/images/next_change_provider/image1.png`,
        `${baseUrl}/images/next_change_provider/image2.png`,
        `${baseUrl}/images/next_change_provider/image3.png`
      ]
    },
    {
      title: "Green Drive",
      description: "Green Drive is an innovative sustainable transportation platform designed to promote eco-friendly mobility solutions across Africa. The platform connects users with electric vehicle charging stations, promotes carpooling initiatives, and provides real-time data on carbon footprint reduction. Built with modern web technologies, it features interactive maps for charging station locations, user authentication, payment processing for charging services, and comprehensive analytics for environmental impact tracking. The platform aims to accelerate the adoption of green transportation while building a community of environmentally conscious users committed to reducing their carbon footprint.",
      image: `${baseUrl}/images/nextjs.png`,
      technologies: ["Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/johntetteh090/green-drive",
      live: "https://gd-africa.com/",
      category: "Fullstack",
      customImages: [
        `${baseUrl}/images/green_drive/image1.png`,
        `${baseUrl}/images/green_drive/image2.png`,
        `${baseUrl}/images/green_drive/image3.png`,
        `${baseUrl}/images/green_drive/image4.png`
      ]
    },
    {
      title: "Papillion",
      description: "Papillion is a comprehensive creative academy platform designed to nurture and showcase artistic talent. The platform provides a digital space for creative professionals and students to connect, learn, and grow their skills. Built with Next.js for optimal performance and SEO, it features course management systems, portfolio showcases, interactive learning modules, and community engagement tools. The implementation includes robust CI/CD pipelines ensuring reliable deployments and continuous integration for seamless updates. The platform serves as a hub for creative education, fostering collaboration between artists, designers, and creative professionals while providing accessible learning resources for aspiring creatives.",
      image: `${baseUrl}/images/nextjs.png`,
      technologies: ["Next.js", "CI/CD"],
      github: "https://github.com/johntetteh090/papillion",
      live: "https://papcreativeacademy.org/",
      category: "Fullstack",
      customImages: [
        `${baseUrl}/images/pappillion/image1.png`,
        `${baseUrl}/images/pappillion/image2.png`,
        `${baseUrl}/images/pappillion/image3.png`
      ]
    },

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
                      live={project.live}
                      index={index}
                      customImages={project.customImages}
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
                { number: "27+", label: "Projects Completed" },
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
                Let&apos;s work together to bring your ideas to life. I&apos;m always excited to take on new challenges and create innovative solutions.
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