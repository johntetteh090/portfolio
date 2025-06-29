"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#f8f7f2] pt-8 pb-10 overflow-hidden">
      
{/* Desktop: image at bottom center */}
<div className="hidden md:block absolute left-1/2 bottom-0 z-0" 
      style={{ transform: 'translateX(-50%)' }}>
        <Image
          src="/images/my_image.png"
          alt="Hero background"
          width={400}
          height={700}
          className="object-cover rounded-none overflow-hidden"
          
        />
      </div>
      {/* Mobile: image on top */}
      <div className="block md:hidden w-full flex justify-center">
        <Image
          src="/images/my_image.png"
          alt="Hero background"
          width={400}
          height={700}
          className="object-cover rounded-none mb-8"
          priority
        />
      </div>
      {/* Overlayed text content */}
      <div className="relative z-10 flex flex-col md:flex-row items-stretch w-full max-w-[2600px]">
        {/* Left: Name/title/subtitle */}
        <div className=" md:w-[50%] relative flex flex-col justify-center md:items-start md:text-left text-left pl-4 md:pl-[11%] 2xl:pl-[20%] mb-8 z-10 sm:mr-10 lg:mr-0">
          {/* Green horizontal line */}
          <motion.div 
            className="w-24 h-1 bg-[#296d6e] mb-4 "
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className="text-4xl sm:text-3xl lg:text-4xl xl:text-6xl font-bold text-[#296d6e] mb-4 text-left w-full lg:w-fit">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
              // className="w-full"
            >
              I&apos;m John Kennedy,
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
              className="w-full"
            >
              a fullstack developer
            </motion.div>
          </div>
          <motion.p 
            className="text-sm md:text-base text-[#081b21]/50 w-full lg:w-[90%] leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.3, ease: "easeOut" }}
          >
            a full-stack developer working with Next.js, React Native, and Node.js. I love building clean apps and automating workflows with CI/CD for smooth, reliable deployments.
          </motion.p>
        </div>
        {/* Right Side: ABOUT ME, MY WORK, Socials (visible on all devices) */}
        <div className="flex flex-col justify-start items-start text-left mt-8 md:mt-8 lg:pl-24 xl:pl-52 pr-8 w-full lg:max-w-sm xl:max-w-xl md:flex-[2] px-4 md:px-0">
          <motion.h2 
            className="text-[#296d6e] text-xs lg:text-base font-extrabold tracking-widest mb-2 text-left"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 1.1, ease: 'easeOut' }}
          >
            ABOUT ME
          </motion.h2>
          <motion.p
            className="text-[#081b21]/50 text-sm md:text-base max-w-xs md:max-w-xs text-left tracking-wide"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 1.3, ease: 'easeOut' }}
          >
            I&apos;m passionate about clean code, smooth user experiences, and automating builds with CI/CD to keep things running fast and reliably
          </motion.p>
          <motion.a
            href="/about"
            className="mt-4 inline-flex items-center text-xs lg:text-sm font-bold tracking-widest text-[#296d6e] uppercase hover:gap-3 transition-all duration-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 2.4, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 border-b-2 border-[#296d6e] pb-0.5">
              LEARN MORE
              <IconArrowRight stroke={3} className="w-5 h-5" />
            </span>
          </motion.a>
          <motion.div 
            className="w-full md:w-[290px] h-0.5 bg-black/10 mt-16 rounded"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1.5, delay: 2.7, ease: "easeOut" }}
          />
          {/* MY WORK Section */}
          <div className="flex flex-col items-start text-left mt-16 w-full">
            <motion.h2 
              className="text-[#296d6e] text-xs lg:text-base font-extrabold tracking-widest mb-2 text-left"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 2.4, ease: 'easeOut' }}
            >
              MY WORK
            </motion.h2>
            <motion.p
              className="text-[#081b21]/50 text-sm md:text-base max-w-xs md:max-w-xs text-left tracking-wide"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 2.7, ease: 'easeOut' }}
            >
              Explore a selection of projects and case studies that showcase my skills in web development, UI/UX, and automation.
            </motion.p>
            <motion.a
              href="/portfolio"
              className="mt-4 inline-flex items-center text-xs lg:text-sm font-bold tracking-widest text-[#296d6e] uppercase hover:gap-3 transition-all duration-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 3.0, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-2 border-b-2 border-[#296d6e] pb-0.5">
                BROWSE PORTFOLIO
                <IconArrowRight stroke={3} className="w-5 h-5" />
              </span>
            </motion.a>
            <motion.div 
              className="w-full md:w-[290px] h-0.5 bg-black/10 mt-16 rounded"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1.5, delay: 3.3, ease: "easeOut" }}
            />
          </div>
          {/* Social Media Section */}
          <motion.div 
            className="mt-16 w-full flex flex-col items-start text-left pl-0 md:pl-4 pr-0 md:pr-8 mb-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 3.6, ease: "easeOut" }}
          >
            <h3 className="text-xs lg:text-base font-extrabold tracking-widest text-[#296d6e] mb-4">FOLLOW ME</h3>
            <div className="flex flex-row gap-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#081b21] hover:text-[#296d6e] transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z"/></svg>
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#081b21] hover:text-[#296d6e] transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.966 0-1.75-.79-1.75-1.76 0-.97.784-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.784 1.76-1.75 1.76zm13.5 11.28h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.599v5.597zm0 0"/></svg>
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#081b21] hover:text-[#296d6e] transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.514 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
} 