"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

// Simple image switcher component without animations
function ImageSwitcher({ images, title }: { images: string[]; title: string }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full h-full flex items-center justify-center bg-white overflow-hidden">
      <Image
        width={100}
        height={100}
        src={images[currentImageIndex]}
        alt={`${title} screenshot ${currentImageIndex + 1}`}
        className="w-full h-full object-cover opacity-90 group-hover/image:opacity-100 transition-opacity duration-300"
        style={{ objectPosition: "center center" }}
      />
    </div>
  );
}

// Technology icon switcher component without animations
function TechnologyIconSwitcher({ technologies }: { technologies: string[] }) {
  const [currentTechIndex, setCurrentTechIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTechIndex(
        (prev) => (prev + 1) % Math.min(technologies.length, 3)
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [technologies.length]);

  const imageMap: { [key: string]: string } = {
    "Next.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    "Nuxt.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",
    React:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "React Native":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    Flutter:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    Firebase:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    "Tailwind CSS":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    Docker:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "GitHub Actions":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    "CI/CD":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    Figma:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    TypeScript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "Node.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "Express.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    MongoDB:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    MySQL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    Redux:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    Nginx:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
    Python:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    TensorFlow:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    FastAPI:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    "Socket.io":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
    "Chart.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chartjs/chartjs-original.svg",
    Stripe:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg",
    AsyncStorage:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Cloud Storage":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    WebRTC:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webrtc/webrtc-original.svg",
    "Weather API":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    Geolocation:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "Mobile Money":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    Kafka:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
    "PHP Laravel":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    Hostinger:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    Web3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ethereum/ethereum-original.svg",
  };

  const currentTech = technologies[currentTechIndex];
  const imageSrc =
    imageMap[currentTech] ||
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg";

  return (
    <div className="w-full h-full flex items-center justify-center bg-white">
      <Image
        width={100}
        height={100}
        src={imageSrc}
        alt={currentTech}
        className="w-24 h-24 object-contain opacity-80 group-hover/image:opacity-100 transition-opacity duration-300"
      />
    </div>
  );
}

interface PortfolioCardProps {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  live: string;
  index: number;
  customImages?: string[];
}

export default function PortfolioCard({
  title,
  description,
  category,
  technologies,
  live,
  index,
  customImages,
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
          {customImages && customImages.length > 0 ? (
            <ImageSwitcher images={customImages} title={title} />
          ) : (
            <TechnologyIconSwitcher technologies={technologies} />
          )}
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
                "Next.js":
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
                "Nuxt.js":
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",
                React:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                "React Native":
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                Flutter:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
                Firebase:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
                "Tailwind CSS":
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
                Docker:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
                "GitHub Actions":
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
                "CI/CD":
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
                Figma:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
                TypeScript:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                "Node.js":
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                "Express.js":
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
                MongoDB:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                MySQL:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
                Redux:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
                AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
                Nginx:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
                Python:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
                TensorFlow:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
                FastAPI:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
                "Socket.io":
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
                "Chart.js":
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chartjs/chartjs-original.svg",
                Stripe:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg",
                AsyncStorage:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                "Cloud Storage":
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
                WebRTC:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webrtc/webrtc-original.svg",
                "Weather API":
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                Geolocation:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                "Mobile Money":
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
                Kafka:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
                "PHP Laravel":
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
                Hostinger:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
                Web3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ethereum/ethereum-original.svg",
              };

              const imageSrc =
                imageMap[tech] ||
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg";

              return (
                <span
                  key={techIndex}
                  className="bg-gradient-to-r from-[#296d6e]/10 to-[#296d6e]/5 text-[#296d6e] px-3 py-1 rounded-lg text-xs font-medium border border-[#296d6e]/20 hover:from-[#296d6e]/20 hover:to-[#296d6e]/10 transition-all duration-200 flex items-center gap-2"
                >
                  <Image
                    width={100}
                    height={100}
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
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
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
              <h3 className="text-xl font-bold text-[#081b21]">{title}</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <p className="text-[#081b21]/70 leading-relaxed">{description}</p>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
