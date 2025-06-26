"use client";
import Image from "next/image";
import { motion } from "framer-motion";

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
  return (
    <motion.div whileHover={{ scale: 1.04, boxShadow: "0 8px 32px 0 rgba(99,102,241,0.16)" }} transition={{ type: "spring", stiffness: 300 }} className="card flex flex-col gap-4">
      <div className="aspect-[4/3] bg-neutral-200 dark:bg-neutral-800 rounded-lg mb-2 overflow-hidden">
        <Image src={imageUrl} alt={title} width={400} height={300} className="object-cover w-full h-full" />
      </div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-neutral-500">{description}</p>
      <a href={link} className="btn mt-auto">View Details</a>
    </motion.div>
  );
} 