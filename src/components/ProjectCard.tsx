"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl = "/file.svg",
  link = "#",
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = description.length > 12; // adjust threshold as needed
  
  return (
    <motion.div whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(99,102,241,0.16)" }} transition={{ type: "spring", stiffness: 300 }} className="card flex flex-col gap-4">
      <div className="aspect-[4/3] bg-neutral-200 dark:bg-neutral-800 rounded-lg mb-2 overflow-hidden">
        <Image src={imageUrl} alt={title} width={400} height={300} className="object-cover w-full h-full" />
      </div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <div className="relative">
        <p 
          className={`text-sm text-neutral-500 transition-all duration-300 ${
            !isExpanded && shouldTruncate 
              ? "max-h-12 overflow-hidden" 
              : ""
          }`}
        >
          {description}
        </p>
        {!isExpanded && shouldTruncate && (
          <div className="absolute bottom-0 right-0 bg-gradient-to-l from-white to-transparent w-8 h-4"></div>
        )}
      </div>
      {shouldTruncate && (
        <button
          className="text-xs text-[#296d6e] mt-1 underline self-start focus:outline-none"
          onClick={() => setIsExpanded((v) => !v)}
        >
          {isExpanded ? "Show less" : "Read more"}
        </button>
      )}
      <a href={link} className="btn mt-auto">View Details</a>
    </motion.div>
  );
} 