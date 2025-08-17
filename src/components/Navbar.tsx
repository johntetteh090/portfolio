"use client";

import { motion } from "framer-motion";
import { IconPhone, IconMenu2, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  const isAboutPage = pathname === "/about";
  const isPortfolioPage = pathname === "/portfolio";

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#f8f7f2]/80 border-b border-[#296d6e]/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Title */}
          <motion.h1 
            className="text-xl md:text-2xl font-bold text-[#296d6e]"
            style={{ fontFamily: 'var(--font-dancing-script)' }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Kennedy
          </motion.h1>

          {/* Desktop Navigation Links - Centered */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href="/"
                className={`transition-colors duration-200 text-xs lg:text-sm ${
                  isHomePage 
                    ? "text-[#296d6e] font-bold" 
                    : "text-black hover:text-[#296d6e] font-normal"
                }`}
              >
                Home
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href="/about"
                className={`transition-colors duration-200 text-xs lg:text-sm ${
                  isAboutPage 
                    ? "text-[#296d6e] font-bold" 
                    : "text-black hover:text-[#296d6e] font-normal"
                }`}
              >
                About
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href="/portfolio"
                className={`transition-colors duration-200 text-xs lg:text-sm ${
                  isPortfolioPage 
                    ? "text-[#296d6e] font-bold" 
                    : "text-black hover:text-[#296d6e] font-normal"
                }`}
              >
                Portfolio
              </Link>
            </motion.div>
          </div>

          {/* Desktop Phone Number */}
          <motion.a
            href="tel:+233558520500"
            className="hidden md:flex items-center space-x-3 text-black hover:text-[#296d6e] transition-colors duration-200 font-normal"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-white rounded-full p-2 shadow-md">
              <IconPhone className="w-4 h-4 text-[#296d6e]" />
            </div>
            <span className="text-xs lg:text-sm">+233 558520500</span>
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-[#296d6e]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <IconX className="w-6 h-6" /> : <IconMenu2 className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden overflow-hidden ${isMenuOpen ? 'max-h-64' : 'max-h-0'} transition-all duration-300 ease-in-out`}
          initial={false}
        >
          <div className="py-4 space-y-4 border-t border-[#296d6e]/20 mt-4">
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href="/"
                className={`block transition-colors duration-200 text-center text-sm ${
                  isHomePage 
                    ? "text-[#296d6e] font-bold" 
                    : "text-black hover:text-[#296d6e] font-normal"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href="/about"
                className={`block transition-colors duration-200 text-center text-sm ${
                  isAboutPage 
                    ? "text-[#296d6e] font-bold" 
                    : "text-black hover:text-[#296d6e] font-normal"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href="/portfolio"
                className={`block transition-colors duration-200 text-center text-sm ${
                  isPortfolioPage 
                    ? "text-[#296d6e] font-bold" 
                    : "text-black hover:text-[#296d6e] font-normal"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
            </motion.div>
            <motion.a
              href="tel:+233558520500"
              className="flex items-center justify-center space-x-3 text-black hover:text-[#296d6e] transition-colors duration-200 font-normal"
              onClick={() => setIsMenuOpen(false)}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-white rounded-full p-2 shadow-md">
                <IconPhone className="w-4 h-4 text-[#296d6e]" />
              </div>
              <span className="text-sm">+233 558520500</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
} 