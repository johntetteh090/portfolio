"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface PortfolioCardProps {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  live: string;
  index: number;
}

export default function PortfolioCard({
  title,
  description,
  category,
  technologies,
  live,
  index,
}: PortfolioCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        className="flex-shrink-0 w-80 bg-gradient-to-br bg-white rounded-3xl overflow-hidden shadow-xl border border-[#296d6e]/10 hover:shadow-2xl transition-all duration-300 group"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -10, scale: 1.02 }}
      >
        {/* Project Image Carousel */}
        <div className="relative h-48 bg-gradient-to-br from-[#296d6e]/20 to-[#296d6e]/5 overflow-hidden group/image">
          <motion.div
            className="w-full h-full flex items-center justify-center"
            animate={{ x: [0, -320, -640, 0] }}
            transition={{ duration: 9, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
          >
            {technologies.slice(0, 3).map((tech, index) => {
              const imageMap: { [key: string]: string } = {
                'Next.js': '/images/nextjs.png',
                'React': '/images/reactjs.png',
                'React Native': '/images/reactjs.png',
                'Flutter': '/images/flutter.png',
                'Firebase': '/images/firebase.png',
                'Tailwind CSS': '/images/tailwindcss.png',
                'Docker': '/images/devOps.png',
                'GitHub Actions': '/images/devOps.png',
                'CI/CD': '/images/devOps.png',
                'Figma': '/images/figma.png',
                'TypeScript': '/images/reactjs.png',
                'Node.js': '/images/reactjs.png',
                'Express.js': '/images/reactjs.png',
                'MongoDB': '/images/firebase.png',
                'MySQL': '/images/firebase.png',
                'Redux': '/images/reactjs.png',
                'AWS': '/images/devOps.png',
                'Nginx': '/images/devOps.png',
                'Python': '/images/firebase.png',
                'TensorFlow': '/images/firebase.png',
                'FastAPI': '/images/firebase.png',
                'Socket.io': '/images/firebase.png',
                'Chart.js': '/images/reactjs.png',
                'Stripe': '/images/firebase.png',
                'AsyncStorage': '/images/firebase.png',
                'Cloud Storage': '/images/firebase.png',
                'WebRTC': '/images/firebase.png',
                'Weather API': '/images/firebase.png',
                'Geolocation': '/images/firebase.png',
              };
              
              const imageSrc = imageMap[tech] || '/images/nextjs.png';
              
              return (
                <div key={index} className="flex-shrink-0 w-80 h-full flex items-center justify-center">
                  <motion.img
                    src={imageSrc}
                    alt={tech}
                    className="w-20 h-20 object-contain opacity-60 group-hover/image:opacity-80 transition-opacity duration-300"
                    animate={{ 
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      repeatType: 'loop',
                      delay: index * 0.5,
                      ease: 'easeInOut'
                    }}
                  />
                </div>
              );
            })}
          </motion.div>
          <div className="absolute top-4 right-4">
            <span className="bg-gradient-to-r from-[#296d6e] to-[#1e4d4e] text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
              {category}
            </span>
          </div>
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#296d6e]/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Project Content */}
        <div className="p-6 bg-white">
          <h3 className="text-xl font-bold text-[#081b21] mb-3 group-hover:text-[#296d6e] transition-colors duration-300">
            {title}
          </h3>
          <div className="relative">
            <p className="text-[#081b21]/70 mb-4 leading-relaxed text-sm max-h-28 overflow-hidden">
              {description}
            </p>
            {/* {description.length > 100 && (
              <div className="absolute bottom-0 right-0 bg-gradient-to-l from-white to-transparent w-8 h-4"></div>
            )} */}
          </div>
          {description.length > 100 && (
            <button
              className="text-xs text-[#296d6e] mb-4 underline self-start focus:outline-none cursor-pointer hover:text-[#1e4d4e] transition-colors duration-200"
              onClick={() => setIsModalOpen(true)}
            >
              Read more
            </button>
          )}

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech, techIndex) => {
              const imageMap: { [key: string]: string } = {
                'Next.js': '/images/nextjs.png',
                'React': '/images/reactjs.png',
                'React Native': '/images/reactjs.png',
                'Flutter': '/images/flutter.png',
                'Firebase': '/images/firebase.png',
                'Tailwind CSS': '/images/tailwindcss.png',
                'Docker': '/images/devOps.png',
                'GitHub Actions': '/images/devOps.png',
                'CI/CD': '/images/devOps.png',
                'Figma': '/images/figma.png',
                'TypeScript': '/images/reactjs.png',
                'Node.js': '/images/reactjs.png',
                'Express.js': '/images/reactjs.png',
                'MongoDB': '/images/firebase.png',
                'MySQL': '/images/firebase.png',
                'Redux': '/images/reactjs.png',
                'AWS': '/images/devOps.png',
                'Nginx': '/images/devOps.png',
                'Python': '/images/firebase.png',
                'TensorFlow': '/images/firebase.png',
                'FastAPI': '/images/firebase.png',
                'Socket.io': '/images/firebase.png',
                'Chart.js': '/images/reactjs.png',
                'Stripe': '/images/firebase.png',
                'AsyncStorage': '/images/firebase.png',
                'Cloud Storage': '/images/firebase.png',
                'WebRTC': '/images/firebase.png',
                'Weather API': '/images/firebase.png',
                'Geolocation': '/images/firebase.png',
              };
              
              const imageSrc = imageMap[tech] || '/images/nextjs.png';
              
              return (
                <span 
                  key={techIndex}
                  className="bg-gradient-to-r from-[#296d6e]/10 to-[#296d6e]/5 text-[#296d6e] px-3 py-1 rounded-lg text-xs font-medium border border-[#296d6e]/20 hover:from-[#296d6e]/20 hover:to-[#296d6e]/10 transition-all duration-200 flex items-center gap-2"
                >
                  <img 
                    src={imageSrc} 
                    alt={tech} 
                    className="w-4 h-4 object-contain"
                  />
                  {tech}
                </span>
              );
            })}
          </div>

          {/* Project Links */}
          <div className="flex gap-3">
            <motion.a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-[#296d6e] to-[#1e4d4e] text-white px-4 py-2 rounded-lg font-medium hover:from-[#1e4d4e] hover:to-[#296d6e] transition-all duration-200 text-sm shadow-md hover:shadow-lg"
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

      {/* Project Description Modal */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[80vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-[#081b21]">
                {title}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <p className="text-[#081b21]/70 leading-relaxed">
              {description}
            </p>
          </motion.div>
        </motion.div>
      )}
    </>
  );
} 